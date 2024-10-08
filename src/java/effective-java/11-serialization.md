---
lang: ko-KR
title: 직렬화
description: Effective Java > 직렬화
category: 
  - Java
tag: 
  - crashcourse
  - java
  - jdk
  - jdk8
head:
  - - meta:
    - property: og:title
      content: Effective Java > 직렬화
    - property: og:description
      content: 직렬화
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/java/effective-java/11-serialization.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

<!-- https://yangbongsoo.gitbook.io/study/java-effective-java/serialization -->

<!-- 

규칙85 : 자바 직렬화의 대안을 찾으라
직렬화에 대한 기본정리 코드 및 내용 참조 : http://woowabros.github.io/experience/2017/10/17/java-serialize.html (우아한형제들 기술블로그 이수홍님 자바 직렬화 내용)
자바 직렬화란 자바 시스템 내부에서 사용되는 객체 또는 데이터를 외부의 자바 시스템에서도 사용할 수 있도록 바이트(byte) 형태로 데이터 변환하는 기술과 바이트로 변환된 데이터를 다시 객체로 변환하는 기술(역직렬화)이다. 시스템적으로 이야기하자면 JVM(Java Virtual Machine 이하 JVM)의 메모리에 상주(힙 또는 스택)되어 있는 객체 데이터를 바이트 형태로 변환하는 기술과 직렬화된 바이트 형태의 데이터를 객체로 변환해서 JVM으로 상주시키는 형태를 같이 이야기한다.
여러가지 직렬화 방법이 있지만(csv, json 등) 자바 직렬화 방법을 사용하는 이유는 자바 시스템 간의 데이터 교환을 빠르고 편하게 할 수 있기 때문이다. 많이 사용되는 곳으로는 서블릿 세션(단순히 세션을 메모리 위에서 운용한다면 직렬화를 필요로 하지 않지만, 파일로 저장하거나 세션 클러스터링, DB에 저장하는 옵션을 선택하게 되면 세션 자체가 직렬화 되어 전달된다), 캐시(Ehcache, Redis, Memcached 등), 자바 RMI 가 있다.
public class MainClass {
    public static void main(String[] args) throws Exception {

        // 직렬화
        Member member = new Member("ybs", "abc@naver.com", 30);
        byte[] serializedMember;
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            try (ObjectOutputStream oos = new ObjectOutputStream(baos)) {
                oos.writeObject(member);
                serializedMember = baos.toByteArray();
            }

            System.out.println(serializedMember);
        }

        // 역직렬화
        // 역직렬화 조건 : 직렬화 대상이 된 객체의 클래스가 클래스 패스에 존재해야 하며 import 되어 있어야 함
        // 중요한 점은 직렬화와 역직렬화를 진행하는 시스템이 서로 다를 수 있다는 것을 반드시 고려
        // 자바 직렬화 대상 객체는 동일한 serialVersionUID 를 가지고 있어야 함
        try (ByteArrayInputStream bais = new ByteArrayInputStream(serializedMember)) {
            try (ObjectInputStream ois = new ObjectInputStream(bais)) {
                Object objectMember = ois.readObject();
                Member deSerializedMember = (Member) objectMember;
                System.out.println(deSerializedMember);
            }
        }

    }
}
직렬화는 프로그래머가 어렵지 않게 분산 객체를 만들 수 있게 해주지만 보이지 않는 생성자, API와 구현 사이의 모호해진 경계, 잠재적인 정확성 문제, 성능, 보안, 유지보수성 등 그 대가가 컸다. 직렬화의 근본적인 문제는 공격 범위가 너무 넓고 지속적으로 더 넓어져 방어하기 어렵다는 점이다. ObjectInputStream의 readObject 메서드를 호출하면서 객체 그래프가 역직렬화되기 때문이다. readObject 메서드는(Serializable 인터페이스를 구현했다면) 클래스패스 안의 거의 모든 타입의 객체를 만들어낼 수 있는, 사실상 마법 같은 생성자다. 바이트 스트림을 역직렬화하는 과정에서 이 메서드는 그 타입들 안의 모든 코드를 수행할 수 있다. 이 말인즉슨, 그 타입들의 코드 전체가 공격 범위에 들어간다는 뜻이다.
역직렬화에 시간이 오래 걸리는 짧은 스트림을 역직렬화하는 것만으로도 Dos 공격에 쉽게 노출될 수 있다. 이런 스트림을 역직렬화 폭탄(deserialization bomb)이라고 한다.
    // 역직렬화 폭탄 - 이 스트림의 역직렬화는 영원히 계속된다.
    static void makeBomb() {
        Set<Object> root = new HashSet<>();
        Set<Object> s1 = root;
        Set<Object> s2 = new HashSet<>();

        for (int i=0; i<100; i++) {
            Set<Object> t1 = new HashSet<>();
            Set<Object> t2 = new HashSet<>();
            t1.add("foo");
            s1.add(t1); s1.add(t2);
            s2.add(t1); s2.add(t2);
            s1 = t1;
            s2 = t2;
        }

        return serialize(root); // 간결하게 하기 위해 이 메서드의 코드는 생략함
이 객체 그래프는 201개의 HashSet 인스턴스로 구성되며, 그 각각은 3개 이하의 객체 참조를 갖는다. 스트림의 전체 크기는 5,733byte 이지만, 역직렬화는 태양이 불타 식을 때까지도 끝나지 않을 것이다. 문제는 HashSet 인스턴스를 역직렬화하려면 그 원소들의 해시코드를 계산해야 한다는 데 있다. 루트 HashSet에 담긴 두 원소는 각각 다른 HashSet 2개씩을 원소로 갖는 HashSet이다. 그리고 반복문에 의해 이 구조가 깊이 100단계까지 만들어진다. 따라서 이 HashSet을 역직렬화하려면 hashCode 메서드를 2^100번 넘게 호출해야 한다. 역직렬화가 영원히 계속된다는 것도 문제지만, 무언가 잘못되었다는 신호조차 주지 않는다는 것도 큰 문제다. 이 코드는 단 몇 개의 객체만 생성해도 스택 깊이 제한에 걸려버린다.
직렬화 위험을 회피하는 가장 좋은 방법은 아무것도 역직렬화하지 않는 것이다. 대신 JSON(텍스트 기반)이나 프로토콜 버퍼(이진 표현)를 쓰자. 직렬화를 피할 수 없고 역직렬화한 데이터가 안전한지 완전히 확신할 수 없다면 객체 역직렬화 필터링(java.io.ObjectInputFilter)을 사용하자(자바9에 추가되었고, 이전 버전에서도 쓸 수 있도록 이식되었다).
규칙86 : Serializable을 구현할지는 신중히 결정하라
클래스 선언부에 "implements Serializable"만 붙이면 직렬화 가능한 객체를 만드는 클래스를 구현할 수 있을 때도 있다. 너무 간단하기 때문에, 직렬화를 지원하기 위해 프로그래머 입장에서 해야 하는 일이 별로 없다는 잘못된 믿음이 만연해 있지만 사실은 훨씬 더 복잡하다.
Serializable 구현과 관련된 가장 큰 문제는 일단 클래스를 릴리스하고 나면 수정하기 어렵다. Serializable을 구현하면, 그 클래스의 바이트 스트림 인코딩(직렬화 형태)도 공개 API가 된다. 따라서 아무리 잘 설계한 직렬화 형식도 클래스 진화라는 관점에서 보면 족쇄가 될 수 있다.
두 번째 문제는 버그나 보안 취약점이 발생할 가능성이 높아진다. 보통 객체는 생성자를 통해 생성한다. 직렬화는 언어 외적인 객체 생성 메커니즘이다. 기본 동작을 받아들이건 재정의 하건 간에, 역직렬화는 생성자와 동일한 이슈를 갖고 있는 "숨은 생성자"다. 역직렬화 과정에 관계된 생성자가 명시적으로 존재하지 않기 때문에 불변식 훼손이나 불법 접근 문제에 쉽게 노출된다. 기본 직렬화 형태에서는 클래스의 private과 package-private 인스턴스 필드들마저 API로 공개하는 꼴이 된다(캡슐화가 깨진다). 필드로의 접근을 최대한 막아 정보를 은닉하라는 조언도 무력화된다.
세 번째 문제는 새 버전 클래스를 내놓기 위한 테스트 부담이 늘어난다는 것이다. 직렬화 가능 클래스를 수정할 때는, 새 릴리스에서 만들고 직렬화한 객체를 예전 릴리스에서 역직렬화할 수 있는지, 그리고 그 역도 가능한지 검사하는 것이 중요하다.
Serializable 구현 여부는 가볍게 결정할 사안이 아니다 단, 객체를 전송하거나 저장할 때 자바 직렬화를 이용하는 프레임워크용으로 만든 클래스라면 선택의 여지가 없다. Serializable을 반드시 구현해야 하는 다른 클래스의 컴포넌트로 쓰일 클래스도 만찬가지다. 하지만 Serializable 구현에 따르는 비용이 적지 않으니, 클래스를 설계할 때마다 그 이득과 비용을 잘 저울질해야 한다. 역사적으로 BigInteger와 Instant 같은 '값' 클래스와 컬렉션 클래스들은 Serializable을 구현하고, 스레드 풀 처럼 '동작'하는 객체를 표현하는 클래스들은 대부분 Serializable을 구현하지 않았다.
상속을 염두에 두고 설계하는 클래스는 Serializable을 구현하지 않는 것이 바람직하다. 또한 인터페이스는 가급적 Serializable을 상속하지 말아야 한다. 하지만 예를 들어 Serializable을 구현하는 객체만 참여가 가능한 프레임워크가 있을 때, 이런 프레임워크를 이용하려면 클래스나 인터페이스가 Serializable을 구현하거나 계승하도록 해야 할 것이다.
상속용으로 설계된 클래스 중 Serializable을 구현한 예로는 Throwable과 Component가 있다. Throwable은 서버가 RMI를 통해 클라이언트로 예외를 보내기 위해 Serializable을 구현했다. Component는 GUI를 전송하고 저장하고 복원하기 위해 Serializable을 구현했지만 Swing과 AWT가 널리 쓰이던 시절에도 현업에서 이런 용도로는 거의 쓰이지 않았다.
여러분이 작성하는 클래스의 인스턴스 필드가 직렬화와 확장이 모두 가능하다면 주의할 점이 몇 가지 있다. 인스턴스 필드 값 중 불변식을 보장해야 할 게 있다면 반드시 하위 클래스에서 finalize 메서드를 재정의하지 못하게 해야 한다. 즉, finalize 메서드를 자신이 재정의하면서 final로 선언하면 된다. 이렇게 해두지 않으면 finalizer 공격을 당할 수 있다. 마지막으로 인스턴스 필드 중 기본값(정수형은 0, boolean은 false, 객체 참조 타입은 null)으로 초기화되면 위배되는 불변식이 있다면 클래스에 다음의 readObjectNoData 메서드를 반드시 추가해야 한다. 이 메서드는 자바 4에 추가된 것으로, 기존의 직렬화 가능 클래스에 직렬화 가능 상위 클래스를 추가하는 드문 경우를 위한 메서드다.
// 상태가 있고, 확장 가능하고, 직렬화 가능한 클래스용 readObjectNoData 메서드
private void readObjectNoData() throws InvalidObjectException {
  throw new InvalidObjectException("스트림 데이터가 필요합니다");
}
Serializable을 구현하지 않기로 할 때는 한 가지만 주의하면 된다. 상속용 클래스인데 직렬화를 지원하지 않으면 그 하위 클래스에서 직렬화를 지원하려할 때 부담이 늘어난다. 보통은 이런 클래스를 역직렬화하려면 그 상위 클래스는 매개변수가 없는 생성자를 제공해야 하는데 여러분이 이런 생성자를 제공하지 않으면 하위 클래스에서는 어쩔 수 없이 직렬화 프록시 패턴을 사용해야 한다.
// 직렬화가 불가능한 상태유지(stateful) 클래스.
// 하지만 직렬화가 가능한 하위 클래스를 만들 수 있다.
public abstract class AbstractFoo{
  private int x, y; // 상태

  // 아래 enum과 필드는 초기화 과정을 추적하기 위한 것이다.
  private enum State { NEW, INITIALIZING, INITIALIZED };
  private final AtomicReference<State> init = new AtomicReference<State>(State.NEW);

  public AbstractFoo(int x, int y) { initialize(x, y); }

  // 이 생성자와 그 아래 메서드는 하위 클래스의 readObject 메서드가
  // 상태를 초기화할 수 있도록 하기 위한 것이다.
  protected AbstractFoo() { }
  protected final void initialize(int x, int y) {
    if (!init.compareAndSet(State.NEW, State.INITIALIZING))
      throw new IllegalStateException("Already initialized");

    this.x = x;
    this.y = y;

    ... //원래 생성자가 하던 나머지 작업

    init.set(State.INITIALIZED);
  }

  // 이 메서드들은 하위 클래스의 writeObject 메서드에 의해 객체가
  // 수동적으로 직렬화될 수 있도록 내부 상태 정보를 제공하는 역할을 한다.
  protected final int getX() { checkInit(); return x; }
  protected final int getY() { checkInit(); return y; }

  // 모든 public 및 protected 객체 메서드에서 반드시 호출해야 하는 메서드
  private void checkInit() {
    if(init.get() != State.INITIALIZED)
      throw new IllegalStateException("Uninitialized");
  }

  ... // 이하 생략
}
AbstractFoo의 모든 public 및 protected 객체 메서드는 다른 작업을 하기 전에 반드시 checkInit 메서드를 호출해야 한다. 잘못 작성된 하위 클래스가 객체 초기화를 제대로 하지 못한 상태에서 다른 메서드를 호출하면 재빨리, 그리고 깔끔하게 실패하도록 하기 위한 것이다. init 필드가 원자적 참조 필드라는 것에 주의하자. 어떤 악의적 사용자가 오더라도 객체 무결성을 보존할 수 있도록 하기 위한 것이다.
이런 조치가 없었다면? 가령 어떤 스레드가 객체에 initialize를 호출하는 순간에 두 번째 스레드가 그 객체를 사용하려 한다고 해 보자. 그 두 번째 스레드는 상태가 깨진 객체를 이용하게 될 수 있다. compareAndSet을 사용해 enum에 대한 참조를 원자적으로 조작하는 이 패턴은, 다 목적 스레드 안전 상태 기계를 구현하기 좋다. 이 메커니즘을 갖추고 나면, 직렬화 가능 하위 클래스를 구현하는 것은 쉽다.
// 직렬화 불가능 상태유지(stateful) 클래스의 직렬화 가능 하위 클래스
public class Foo extends AbstractFoo implements Serializable{
  private void readObject(ObjectInputStream s)
    throw IOException, ClassNotFountException{
      s.defaultReadObject();

      // 상위 클래스 상태를 수동으로 역직렬화 한 다음 초기화
      int x = s.readInt();
      int y = s.readInt();
      initialize(x, y);
    }

    private void writeObject(ObjectOutputStream s) throws IOException {
      s.defaultWriteObject();

      // 상위 클래스 상태를 수동으로 직렬화
      s.writeInt(getX());
      s.writeInt(getY());
    }

    // 생성자는 이 메커니즘과 상관없음
    public Foo(int x, int y) { super(x, y); }

    private static final long serialVersionUID = 2213124123213123L;
}
내부 클래스는 Serializable을 구현하면 안된다. 내부 클래스에는 바깥 인스턴스의 참조와 유효 범위 안의 지역변수 값들을 저장하기 위해 컴파일러가 생성한 필드들이 자동으로 추가된다. 익명 클래스와 지역 클래스의 이름을 짓는 규칙이 언어 명세에 나와 있지 않듯, 이 필드들이 클래스 정의에 어떻게 추가되는지도 정의되어 있지 않았다. 다시 말해 내부 클래스에 대한 기본 직렬화 형태는 분명하지가 않다. 단 정적 멤버 클래스는 Serializable을 구현해도 된다.
규칙87 : 사용자 지정 직렬화 형식을 사용하면 좋을지 따져 보라
Serializable을 구현한 클래스를 만들면서 기본 직렬화 형식을 그대로 이용하면, 다음번 릴리스때 기존 구현을 빼버리는것이 불가능해진다. 그 직렬화 형식에 영원히 갇혀버리게 되는 것이다. 따라서 어떤 직렬화 형식이 적절할지 따져보지도 않고 기본 직렬화 형식을 그대로 받아들이지 마라.
어떤 객체의 기본 직렬화 형식은 해당 객체가 루트인 객체 그래프의 물리적 표현을 나름 효과적으로 인코딩한 것이다. 다시 말해 객체 안에 담긴 데이터와, 해당 객체를 통해 접근할 수 있는 모든 객체에 담긴 데이터를 기술한다. 또한 이 객체들이 서로 연결된 토폴로지(topology)도 기술한다. 그런데 어떤 객체의 가장 효과적인 직렬화 형식은 해당 객체가 나타내는 논리적 데이터만 담아야 하며, 물리적 표현과는 무관해야 한다. 기본 직렬화 형식은 그 객체의 물리적 표현이 논리적 내용과 동일할 때만 적절하다.
// 기본 직렬화 형식을 그대로 써도 좋은 클래스 후보
public class Name implements Serializable {

    //성(last name) null이 될 수 없다.
    //@Serial
    private final String lastName;

    //이름(first name) null이 될 수 없다.
    //@Serial
    private final String fisrtName;

    //중간 이름(middle name) 없을 때는 null이다.
    //@Serial
    private final String middleName;

    … // 이하 생략
}
논리적으로 말해서 어떤 사람의 이름은 성, 이름, 그리고 중간 이름을 나타내는 문자열 세 개로 구성된다. Name에 선언된 객체 필드들은 그 논리적 내용을 충실히 반영한다. 설사 기본 직렬화 형식이 만족스럽다 하더라도, 불변식이나 보안 조건을 만족시키기 위해서는 readObject 메서드를 구현해야 마땅한 경우도 많다. lastName, fisrtName, middleName은 private 필드임에도 문서화 주석이 달려있다는 것에 주의하자. 이 private 필드들이 pulbic API, 즉 클래스의 직렬화 형식을 규정하기 때문이며, 그래서 반드시 문서화해야 한다. @Serial 태그는 Javadoc 유틸리티에게 직렬화 형식을 다루는 특별한 페이지로 해당 문서를 분리하라는 지시를 내린다.
Name과는 정반대 격인 클래스도 하나 살펴보자. 이 클래스는 문자열의 리스트를 나타낸다.
// 기본 직렬화 형식이 쓸만하지 않은 클래스 사례
public final class StringList implements Serializable {
    private int size = 0;
    private Entry head = null;

    private static class Entry implements Serializable {
        String data;
        Entry next;
        Entry previous;
    }

    …// 이하 생략
}
논리적으로 말해서 이 클래스는 문자열 리스트를 표현한다. 물리적으로 보자면 이 리스트는 이중 연결 리스트다. 기본 직렬화 형태를 그대로 받아들일 경우, 모든 연결 리스트 항목과 항목 간 양방향 연결 구조가 직렬화 형식에 그대로 반영될 것이다. 객체의 물리적 표현 형태가 논리적 내용과 많이 다를 경우 기본 직렬화 형식을 그대로 받아들이면 네 가지 문제가 생기게 된다. 1. 공개 API가 현재 내부 표현 형태에 영원히 종속된다. 2. 너무 많은 공간을 차지하는 문제가 생길 수 있다. 3. 너무 많은 시간을 소비하는 문제가 생길 수 있다. 4. 스팩 오버플로 문제가 생길 수 있다.
StringList의 적절한 직렬화 형식은 그저 리스트에 담기는 문자열의 수 다음에 실제 문자열들이 오는 형태일 것이다. StringList의 논리적 데이터 형태만을 나타내는 형식으로서, 물리적 표현 형태에 대한 세부사항은 제거된 것이다. 아래의 StringList 코드에는 이 직렬화 형식을 구현하는 writeObject와 readObject 메서드가 포함되어 있다.
// 사용자 정의 직렬화 형식을 이용하는 StringList
public final class StringList implements Serializable {
    private transient int size = 0;
    private transient Entry head = null;

    // 더 이상 Serializable일 필요가 없음 ! 
    private static class Entry {
        String data;
        Entry next;
        Entry previous;
    }

    // 주어진 문자열을 리스트에 추가 
    pulbic final void add(String s) { … }

    /**
    * this가 가리키는 {@code StringList} 객체를 직렬화
    *
    *@serialData 리스트의 크기(리스트 내 문자열 개수)가 먼저 기록되고
    *({@code int}), 그 다음에는 모든 문자열({@code String} 각각)이 순서대로 기록된다.
    *
    */
    private void writeObject(ObjectOutputStream s) throws IOException {
        s.defaultWriteObject();
        s.writeInt(size);

        // 순서대로 모든 원소 기록
        for(Entry e = head; e != null; e = e.next)
            s.writeObject(e.data);
    }

    private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
        s.defaultReadObject();
        int numElements = s.readInt();

        // 모든 원소를 읽어 리스트에 저장
        for(int i = 0; i<numElements; i++)
            add((String) s.readObject());
    }

    … // 이하 생략
}
writeObject가 맨 처음으로 defaultWriteObject를 호출하고 있음에 유의하자. readObject가 처음으로 하는 것도 defaultReadObject를 호출하는 것이다. StringList의 모든 필드가 transient임에도 말이다. 객체의 모든 필드가 transient일 때는 defaultWriteObject나 defaultReadObject를 호출하지 않는 것도 기술적으로 가능하긴 하지만 권장하는 사항은 아니다.
어떤 직렬화 형식을 이용하건, 직렬화 가능 클래스를 구현할 때는 직렬 버전 UID를 명시적으로 선언해야 한다. 그렇게 하면 직렬 버전 UID 때문에 생길 수 있는 잠재적 호환성 문제가 사라진다. 성능이 조금 개선되는 효과도 있다. 직렬 버전 UID를 지정하지 않으면 실행시간에 UID를 만드느라 시간이 많이 걸리는 계산을 하게 된다. 직렬 버전 UID를 선언하는 것은 간단하다. 클래스에 아래의 한줄을 추가하기만 하면 된다.
private static final long serialVersionUID = <무작위로 고른 Long 값>;
새 클래스를 만드는 경우에는 위의 <> 자리에 무슨 값을 넣건 상관없다.
규칙88 : readObject 메서드는 방어적으로 구현하라
readObject 메서드가 실질적으로는 public 생성자나 마찬가지고 생성자를 구현할 때와 같은 점에 주의해야 한다. 생성자와 마찬가지로 인자의 유효성을 검사해야 하고 필요하다면 인자를 방어적으로 복사해야 한다. readObject 메서드를 구현할 때 이런 사항들을 망각하면 공격자는 쉽게 클래스의 불변식을 망가뜨릴 수 있게 된다. 간단히 이야기해서, readObject는 바이트 스트림을 인자로 받는 생성자다. 일반적으로 이 바이트 스트림은 정상적인 과정을 통해 만들어진 객체를 직렬화한 결과다. 문제는 인공적으로 만들어진 바이트 스트림을 readObject에 인자로 넘길 때 생긴다. 클래스 불변식을 위반하는 객체를 만들어 낼 수 있게 되는 것이다.
객체를 역으로 직렬화할 때는 클라이언트가 가질 수 없어야 하는 객체 참조를 담은 모든 필드를 방어적으로 복사하도록 해야 한다.
// 방어적 복사와 유효성 검사를 모두 시행하는 readObject 메서드
private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
  s.defaultReadObject();

  // 모든 변경 가능 필드를 방어적으로 복사
  start = new Date(start.getTime());
  end = new Date(end.getTime());

  // 불변식이 만족되는지 검사
  if (start.compareTo(end) > 0)
      throw new InvalidObjectException(start + " after " + end);
}
유효성 검사 이전에 방어적 복사를 시행한다는 점과 final로 선언된 필드에는 방어적 복사를 할 수 없기 때문에 start와 end가 비-final인 것도 주의하자. 릴리즈 1.4부터 방어적 복사 없이도 악의적 객체 참조 공격을 막을 수 있도록 하기 위해 고안된 writeUnshared와 readUnshared 메서드는 사용하지 마라. 필요한 안전성을 제공하지 못한다.
readObject 메서드와 생성자에는 한 가지 유사성이 더 있다. readObject 메서드는 재정의 가능 메서드를 직접적이건 간접적이건 호출해서는 안 된다. 이 규칙을 위반할 경우, 하위 클래스 객체의 상태가 완전히 역직렬화 되기 전에 재정의한 메서드가 실행될 것이며 그 결과로 오류가 발생할 것이다.
요약하자면, readObject 메서드를 구현할 때는 public 생성자를 구현할 때와 같은 마음가짐을 가지라는 것이다.
규칙89 : 개체 통제가 필요하다면 readResolve 대신 enum 자료형을 이용하라
싱글턴 클래스를 만들어도 implements Serializable을 붙이는 순간 이 클래스는 더 이상 싱글턴 클래스가 아니다. 역직렬화되면서 생성된 객체는 초기화될 당시에 만들어진 객체와 다르다. 이때 readResolve를 이용하면 readObject가 만들어낸 객체를 다른 것으로 대체할 수 있다.
// instance control을 위해 readResolve를 활용한 사례
private Object readResolve() {
    //유일한 객체를 반환하도록 하고 여기로 오는 바이트 스트림은 GC 대상이 되도록 한다.
    return INSTANCE;
}
이 메서드는 역으로 직렬화된 객체는 무시하고 클래스가 초기화될 당시에 만들어진 유일한 객체를 반환한다. 사실 instance control을 위해 readResolve를 활용 할 때는 객체 참조 자료형으로 선언된 모든 객체 필드를 반드시 transient로 선언해야 한다.
Enum으로 싱글턴을 구현하면 선언된 상수 이외의 다른 객체는 존재할 수 없다는 확실한 보장이 생긴다.
규칙90 : 직렬화된 객체 대신 직렬화 프락시를 고려해 보라
Serializable 인터페이스를 구현하겠다고 결정을 내리게 되면 버그나 보안 결함이 생길 가능성이 높아진다. 일반 생성자 대신 언어 외적인 메커니즘을 통해 객체를 생성할 수 있게 되기 때문이다. 이런 위험을 줄이기 위한 방법으로 직렬화 프락시 패턴이 있다.
// Period 클래스의 직렬화 프락시
private static class SerializationProxy implements Serializable {
  private final Date start;
  private final Date end;

  SerializationProxy(Period p) {
    this.start = p.start;
    this.end = p.end;
  }

  private static final long serialVersionUID = 2344939929329329L; // 아무 수가 가능 
}
우선 바깥 클래스 객체의 논리적 상태를 간결하게 표현하는 직렬화 가능 클래스를 private static 중첩 클래스로 설계한다. 이 중첩 클래스를 직렬화 프락시라고 부르는데, 바깥 클래스를 인자 자료형으로 사용하는 생성자를 하나만 가진다. 이 생성자는 인자에서 데이터를 복사하기만 한다. 일관성 검사를 할 필요도 없고, 방어적 복사를 할 필요도 없다. 설계상 직렬화 프락시의 기본 직렬화 형식은 바깥 클래스의 완벽한 직렬화 형태다.
// 직렬화 프락시 패턴을 구현하기 위한 writeReplace 메서드
private Object writeReplace() {
  return new SerializationProxy(this);
}
프락시를 추가한 다음 바깥 클래스 아래에 writeReplace 메서드를 구현한다. 이 메서드는 직렬화 프락시가 있는 클래스라면 아무 수정 없이 그대로 사용할 수 있다. 이 메서드가 있으면 직렬화 시스템은 바깥 클래스 객체 대신 SerializationProxy 객체를 직렬화한다. 다시 말해 writeReplace 메서드는 직렬화가 이루어지기 전에 바깥 클래스 객체를 직렬화 프락시 객체로 변환한다.
바깥 클래스로 직렬화된 객체를 악의적으로 만들 수 있기 때문에 readObject 메서드를 추가한다.
// 직렬화 프락시 패턴 구현을 위한 readObject 메서드
private void readObject(ObjectInputStream stream)
  throws InvalidObjectException{
  throw new InvalidObjectException("Proxy required");
}
마지막으로 SerializationProxy 클래스에 자기와 논리적으로 동일한 바깥 클래스 객체를 반환하는 readResolve 메서드를 추가해야 한다. 이 메서드가 있으면 직렬화 시스템은 역직렬화를 끝내자마자 직렬화 프락시 객체를 다시 바깥 클래스 객체로 변환하게 된다.
// Period.SerializationProxy의 readResolve 메서드 
private Object readResolve() {
  return new Period(start, end); // public 생성자 이용
}
마지막으로 직렬화 프락시 패턴은 클라이언트가 확장 할 수 있는 클래스에는 적용할 수 없다.

-->

---
