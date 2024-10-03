import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,t as s,o as i}from"./app-U_bew1in.js";const o={},r={id:"frontmatter-title-관련",tabindex:"-1"},l={class:"header-anchor",href:"#frontmatter-title-관련"},p=n("nav",{class:"table-of-contents"},[n("ul")],-1),u=n("hr",null,null,-1),c=n("hr",null,null,-1);function m(e,d){return i(),a("div",null,[n("h1",r,[n("a",l,[n("span",null,s(e.$frontmatter.title)+" 관련",1)])]),p,u,c])}const T=t(o,[["render",m],["__file","05-enums-and-annotations.html.vue"]]),E=JSON.parse('{"path":"/java/effective-java/05-enums-and-annotations.html","title":"열거형(enum)과 어노테이션","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"열거형(enum)과 어노테이션","description":"Effective Java > 열거형(enum)과 어노테이션","category":["Java"],"tag":["crashcourse","java","jdk","jdk8"],"head":[[{"meta":null}],{"property":"og:title","content":"Effective Java > 열거형(enum)과 어노테이션"},{"property":"og:description","content":"열거형(enum)과 어노테이션"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/java/effective-java/05-enums-and-annotations.html"},["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/java/effective-java/05-enums-and-annotations.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"열거형(enum)과 어노테이션"}],["meta",{"property":"og:description","content":"Effective Java > 열거형(enum)과 어노테이션"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"jdk"}],["meta",{"property":"article:tag","content":"jdk8"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"열거형(enum)과 어노테이션\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":5}]},"readingTime":{"minutes":5.53,"words":1660},"filePathRelative":"java/effective-java/05-enums-and-annotations.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n<!-- https://yangbongsoo.gitbook.io/study/java-effective-java/enums_and_annotations -->\\n<!--\\n\\n규칙34 : int 상수 대신 enum을 사용하라\\n// int를 사용한 enum 패턴\\npublic static final int APPLE_FUJI = 0;\\npublic static final int APPLE_PIPPIN = 1;\\npublic static final int APPLE_GRANNY_SMITH = 2;\\n\\npublic static final int ORANGE_NAVEL  = 0;\\npublic static final int ORANGE_TEMPLE = 1;\\npublic static final int ORANGE_BLOOD = 2;\\n위의 코드는 형안전성 측면에서도 그렇고, 편의성 관점에서도 단점이 많다. String enum 패턴이라 불리는 것은 더 나쁜 패턴이다. 상수 비교를 할 때 문자열 비교를 해야 하므로 성능이 떨어질 수 있고, 사용자가 필드 이름 대신 하드코딩된 문자열 상수를 클라이언트 코드 안에 박어버릴 수 있다는 점이다. 하드코딩된 문자열 상수에 오타가 있는 경우, 컴파일 할 때는 오류를 발견할 수 없기 때문에 실행 도중에 문제가 생기게 될 것이다.\\n자바 1.5부터 enum 자료형이 생겼다.\\npublic enum Apple { FUJI, PIPPIN, GRANNY_SMITH }\\npublic enum Orange { NAVEL, TEMPLE, BLOOD }\\n다른 언어들(C, C++, C#)의 enum은 int 값이지만 자바의 enum 자료형은 완전한 기능을 갖춘 클래스다.\\nenum자료형에 메서드나 필드를 추가하는 이유는 상수에 데이터를 연계시키면 좋기 때문이다. 풍부한 기능을 갖춘 enum 자료형 예제로, 태양계의 여덟 행성을 모델링하는 사례를 살펴보자.\\npublic enum Planet {\\n    MERCURY(3.33, 2.22),\\n    VENUS(2.22, 3.33),\\n    MARS(6.66, 7.77),\\n    URANUS(8.88,9.99);\\n    ...\\n\\n    private final double mass; // 킬로그램 단위\\n    private final double radius; // 미터단위\\n    private final double surfaceGravity;\\n\\n    // 중력 상수\\n    private final double G = 6.67;\\n\\n    // 생성자\\n    Planet(double mass, double radius) {\\n        this.mass = mass;\\n        this.radius = radius;\\n        surfaceGravity = G * mass / (radius * radius);\\n    }\\n\\n    public double mass() {return mass;}\\n    public double radius() {return radius;}\\n    public double surfaceGravity() {return surfaceGravity;}\\n\\n    public double surfaceWeigt(double mass){\\n        return mass * surfaceGravity; // F = ma\\n    }\\nenum은 원래 변경 불가능하므로 모든 필드는 final로 선언되어야 한다. 필드는 public으로 선언할 수도 있지만, private로 선언하고 public 접근자를 두는 편이 더 낫다.\\nenum 자료형에는 자동 생성된 valueOf(String) 메서드가 있는데, 이 메서드는 상수의 이름을 상수 그 자체로 변환하는 역할을 한다. enum 자료형의 toString 메서드를 재정의 할 경우에는 fromString 메서드를 작성해서 toString이 뱉어내는 문자열을 다시 enum 상수로 변환할 수단을 제공해야 할지 생각해 봐야 한다.\\n// enum 자료형에 대한 fromString 메서드 구현\\nprivate static final Map<String, Operation> stringToEnum = new HashMap<>();\\n\\nstatic { // 상수 이름을 실제 상수로 대응시키는 맵 초기화\\n    for (Operation op : values())\\n        stringToEnum.put(op.toString(), op);\\n}\\n\\n// 문자열이 주어지면 그에 대한 Operation 상수 반환. 잘못된 문자열이면 null 반환\\npublic static Operation fromString(String symbol) {\\n    return stringToEnum.get(symbol);\\n}\\nOperation 상수를 stringToEnum 맵에 넣는 것은 상수가 만들어진 다음에 실행되는 static 블록 안에서 한다는 것에 주의하자. 각각의 상수가 생성자 안에서 맵에 자기 자신을 넣도록 하면 컴파일 할 때 오류가 발생한다. enum 생성자 안에서는 enum의 static 필드를 접근할 수 없다(컴파일 시점에 상수인 static 필드는 제외). 생성자가 실행될 때 static 필드는 초기화된 상태가 아니기 때문에 필요한 제약이다.\\n3rd Edition에서 추가된 부분\\nprivate static final Map<String, Operation> stringToEnum = Stream.of(values()).collect(toMap(Object::toString, e -> e));\\n\\npublic static Optional<Operation> fromString(String symbol) {\\n    return Optional.ofNullable(stringToEnum.get(symbol));\\n}\\n상수별 메서드 구현의 단점은 enum 상수끼리 공유하는 코드를 만들기가 어렵다는 것이다. 예를 들어, 급여 명세서에 찍히는 요일을 표현하는 enum 자료형이 있다고 하자. 이 enum 자료형 상수, 그러니까 요일을 나타내는 상수에는 직원의 시급과 해당 요일에 일한 시간을 인자로 주면 해당 요일의 급여를 계산하는 메서드가 있다. 그런데 주중에는 초과근무 시간에 대해서만 초과근무 수당을 주어야 하고, 주말에는 몇 시간을 일했건 전부 초과근무 수당으로 처리해야 한다. switch 문을 만들 때 case 레이블을 경우에 따라 잘 붙이기만 하면 쉽게 원하는 계산을 할 수 있을 것이다.\\npublic enum PayrollDay {\\n    MONDAY,    TUESDAY, WEDNESDAY,    THURSDAY, FRIDAY, SATURDAY,    SUNDAY;\\n    private static final int HOURS_PER_SHIFT = 8;\\n\\n    double pay(double hourWorked, double payRate) {\\n        double basePay = hourWorked * payRate;\\n\\n        double overtimePay; // 초과근무수당 계산\\n        switch (this) {\\n            case SATURDAY: case SUNDAY:\\n                overtimePay = hourWorked * payRate /2;\\n                break;\\n            default:\\n                overtimePay = hourWorked <= HOURS_PER_SHIFT ? 0 : (hourWorked - HOURS_PER_SHIFT) * payRate / 2;\\n        }\\n\\n        return basePay + overtimePay;\\n    }\\n}\\n분명 간결한 코드다. 하지만 유지보수 관점에서는 위험한 코드다. enum에 새로운 상수를 추가한다고 하자. 아마도 휴가 등을 나타내는 특별한 값일 것이다. 그런데 switch 문에 해당 상수에 대한 case를 추가하는 것을 잊었다면? 컴파일은 되겠지만 휴가 때 일한 시간에 대해서는 같은 급여를 지급하는 프로그램이 되어버릴 것이다.\\n정말 좋은 방법은 새로운 enum 상수를 추가할 때 초과근무 수당 계산 정책을 반드시 선택하도록 하는 것이다. 기본적인 아이디어는 초과근무 수당을 계산하는 부분을 private로 선언된 중첩 enum 자료형에 넣고, PayrollDay enum 생성자가 이 전략 enum 상수를 인자로 받게 하는 것이다. PayrollDay enum 상수가 초과근무 수당 계산을 이 정책 enum 상수에 위임하도록 하면 switch문이나 상수별 메서드 구현은 없앨 수 있다. 이 패턴을 적용한 코드가 switch 문을 써서 만든 코드보다는 복잡하지만 안전할 뿐더러 유연성도 높다.\\npublic enum PayrollDay {\\n\\n    MONDAY(PayType.WEEKDAY),\\n    TUESDAY(PayType.WEEKDAY),\\n    WEDNESDAY(PayType.WEEKDAY),\\n    THURSDAY(PayType.WEEKDAY),\\n    FRIDAY(PayType.WEEKDAY),\\n    SATURDAY(PayType.WEEKEND),\\n    SUNDAY(PayType.WEEKEND);\\n\\n    private final PayType payType;\\n\\n    //Constructor\\n    PayrollDay(PayType payType) {\\n        this.payType = payType;\\n    }\\n\\n    double pay(double hoursWorked, double payRate) {\\n        return payType.pay(hoursWorked, payRate);\\n    }\\n\\n    // 정책 enum 자료형\\n    private enum PayType {\\n        WEEKDAY {\\n          double overtimePay(double hours, double payRate) {\\n              return hours <= HOURS_PER_SHIFT ? 0 : (hours - HOURS_PER_SHIFT) * payRate / 2;\\n          }\\n        },\\n        WEEKEND {\\n            double overtimePay(double hours, double payRate) {\\n                return hours * payRate / 2;\\n            }\\n        };\\n\\n        private static final int HOURS_PER_SHIFT = 8;\\n\\n        abstract double overtimePay(double hrs, double payRate);\\n\\n        double pay(double hoursWorked, double payRate) {\\n            double basePay = hoursWorked * payRate;\\n            return basePay + overtimePay(hoursWorked, payRate);\\n        }\\n    }\\n}\\n규칙35 : ordinal 대신 객체 필드를 사용하라\\n//ordinal을 남용한 사례 \\npublic enum Ensemble{\\n    SOLO, DUET, TRIO;\\n\\n    public int numberOfMusicians(){\\n        return ordinal() + 1;\\n    }\\n}\\n모든 enum에는 ordinal이라는 메서드가 있는데, enum 자료형 안에서 enum 상수의 위치를 나타내는 정수값을 반환한다. 하지만 객체필드를 사용해라\\npublic enum Ensemble{\\n    SOLO(1), DUET(2), TRIO(3);\\n\\n    private final int num;\\n\\n    public Ensemble(int size){\\n        this.num = size;\\n    }\\n\\n    public int numberOfMusicians(){\\n        return num; \\n    }\\n}\\n규칙36 : 비트 필드 대신 EnumSet을 사용하라\\n//비트 필드 열거형 상수 - 이제는 피해야 할 구현법\\npublic class Text{\\n    public static final int STYLE_BOLD          = 1 << 0; //1\\n    public static final int STYLE_ITALIC        = 1 << 1; //2\\n    public static final int STYLE_UNDERLINE     = 1 << 2 //4\\n    public static final int STYLE_STRIKETHROUGH = 1 << 3; //8\\n\\n    //이 메서드의 인자는 STYLE_상수를 비트별 OR한 값\\n    public void applyStyles(int styles) { ... } \\n}\\ntext.applyStyles(STYLE_BOLD | STYLE_ITALIC); 이렇게 하면 상수들을 집합에 넣을 때 비트별 OR 연산을 사용할 수 있다. 하지만 EnumSet 이라는 더 좋은 방법이 있다.\\n//EnumSet - 비트필드를 대신할 현대적 기술\\npublic class Text{\\n    public enum Style {\\n        BOLD, ITALIC, UNDERLINE, STRIKETHROUGH\\n    }\\n\\n    //어떤 Set 객체도 인자로 전달할 수 있으나, EnumSet이 분명 최선 \\n    public void applyStyles(Set<Style> styles){ ... }\\n}\\ntext.applyStyles(EnumSet.of(Style.BOLD, Style.ITALIC)); EnumSet의 단점이 하나 있는데 변경 불가능 EnumSet객체를 만들 수 없다. 그래서 EnumSet 객체를 Collections.unmodifiableSet으로 포장하면 되는데, 성능이나 코드 가독성 측면에서 좀 손해를 보게 된다.\\n규칙37 : ordinal을 배열 첨자로 사용하는 대신 EnumMap을 이용하라\\nclass Herb{\\n    enum Type { ANNUAL, PERENNIAL, BIENNIAL }\\n\\n    final String name;\\n    final Type type;\\n\\n    Herb(String name, Type type){\\n        this.name = name;\\n        this.type = type;\\n    }\\n\\n    @Override\\n    public String toString(){\\n        return name; \\n    }\\n}\\n//EnumMap을 사용해  enum 상수별 데이터를 저장하는 프로그램\\nHerb[] garden = …; \\n\\nMap<Herb.Type, Set<Herb>> herbsByType =\\n    new EnumMap<Herb.Type, Set<Herb>>(Herb.Type.class);\\n\\nfor(Herb.Type t : Herb.Type.values())\\n    herbsByType.put(t, new HashSet<Herb>());\\n\\nfor(Herb h : garden)\\n    herbsByType.get(h.type).add(h);\\n\\nSystem.out.println(herbsByType);\\nEnumMap 생성자가 키의 자료형을 나타내는 Class 객체를 인자로 받는다는 것에 주의하자. 이런 Class 객체를 한정적 자료형 토큰이라고 부르는데, 실행시점 제네릭 자료형 정보를 제공한다.\\n두 번째 예제는 상전이(phase transition) 관계를 표현하기 위해서 중첩 EnumMap을 사용했다.\\n// EnumMap을 중첩해서 enum 쌍에 대응되는 데이터를 저장한다\\npublic enum Phase{\\n    SOLID, LIQUID, GAS;\\n\\n    public enum Transition{\\n        MELT(SOLID, LIQUID), FREEZE(LIQUID, SOLID),\\n        BOIL(LIQUID, GAS), CONDENSE(GAS, LIQUID),\\n        SUBLIME(SOLID, GAS), DEPOSIT(GAS, SOLID);\\n\\n        private final Phase src;\\n        private final Phase dat;\\n\\n        Transition(Phase src, Phase dst){\\n            this.src = src;\\n            this.dst = dat;\\n        }\\n\\n        //상 전이 맵 초기화 \\n        private static final Map<Phase, Map<Phase, Transition>> m =\\n            new EnumMap<Phase, Map<Phase, Transition>>(Phase.class);\\n        static{\\n            for(Phase p : Phase.values())\\n                m.put(p, new EnumMap<Phase, Transition>(Phase.class));\\n\\n            for(Transition trans : Transition.values())\\n                m.get(trans.src).put(trans.dst, trans);\\n        }\\n\\n        public static Transition from(Phase src, Phase dat) {\\n            return m.get(src).get(dst);\\n        }\\n    }\\n}\\n\\nLIQUID쪽을 보면 액체 LIQUID에서 고체 SOLID로 변하는 것은 언다FREEZE라고 한다. 이 맵의 자료형은 Map<Phase, Map<Phase, Transition>>인데, “상전이 이전 상태를, 상전이 이후 상태와 상전이 명칭 사이의 관계를 나타내는 맵에 대응시키는 맵”이라는 뜻이다.\\n규칙38 : 확장 가능한 enum을 만들어야 한다면 인터페이스를 이용하라\\n일반적으로 enum 자료형을 계승한다는 것은 바람직하지 않다. 확장된 자료형의 상수들이 기본 자료형의 상수가 될 수 있지만 그 반대가 될 수 없다는 것은 혼란스럽기 때문이다. 또한 기본 자료형과 그 모든 하위 자료형의 enum 상수들을 순차적으로 살펴볼 좋은 방법도 없고 설계와 구현에 관계된 많은 부분이 까다로워진다.\\n하지만 열거 자료형의 확장이 가능하면 좋은 경우가 적어도 하나 있다. 연산 코드(opcode)를 만들어야 할 때다. 연산 코드는 어떤 기계에서 사용되는 연산을 표현하기 위해 쓰이는 열거 자료형이다. 기본 아이디어는 enum 자료형이 임의의 인터페이스를 구현할 수 있다는 사실을 이용하는 것이다.\\n먼저 연산 코드 자료형에 대한 인터페이스를 정의한다. 그리고 해당 인터페이스를 구현하는 enum 자료형을 만든다.\\n// 인터페이스를 이용해 확장 가능하게 만든 enum 자료형 \\npublic interface Operation {\\n    double apply(double x, double y);\\n}\\n\\npublic enum BasicOperation implements Operation { \\n    PLUS(“+”) {\\n        public double apply(double x, double y) { return x + y; }\\n    },\\n    MINUS(“-“) {\\n        public double apply(double x, double y) { return x - y; }\\n    },\\n    TIMES(“*“) {\\n         public double apply(double x, double y) { return x * y; }\\n    },\\n    DIVIDE(“/“) {\\n         public double apply(double x, double y) { return x / y; }\\n    };\\n\\n    private final String symbol;\\n\\n    BasicOperation(String symbol) {\\n        this.symbol = symbol;\\n    }\\n\\n    @Override public String toString(){\\n        return symbol; \\n    }\\n}\\nBasicOperation은 enum 자료형이라 계승할 수 없지만 Operation은 인터페이스가 확장이 가능하다. 따라서 이 인터페이스를 계승하는 새로운 enum 자료형을 만들면 Operation 객체가 필요한 곳에 해당 enum 자료형의 상수를 이용할 수 있게 된다.\\n// 인터페이스를 이용해 기존 enum 자료형을 확장하고 테스트하는 프로그램\\npublic static void main(String[] args) {\\n    double x = Double.parseDouble(args[0]);\\n    double y = Double.parseDouble(args[1]);\\n    // Operation을 상속한ExtendedOperation이라는 enum을 새롭게 만든껏임. P224 \\n    test(ExtendedOperation.class, x, y); \\n}\\n\\nprivate static <T extends Enum<T> & Operation> void test( Class<T> opSet, double x, double y){\\n    for (Operation op : opSet.getEnumConstants())\\n        System.out.printf(“%f %s %f = %f%n”, x, op, y, op.apply(x, y));\\n}\\n확장된 연산을 나타내는 자료형의 class 리터럴인 ExtendedOperation.class가 main에서 test로 전달되고 있음에 유의하자. 확장된 연산 집합이 무엇인지 알리기 위한 것이다. 이 class 리터럴은 한정적 자료형 토큰 구실을 한다. opSet의 형인자 T는 굉장히 복잡하게 선언되어 있는데 Class 객체가 나타내는 자료형이 enum 자료형인 동시에 Operation의 하위 자료형이 되도록 한다 라는 뜻이다. 모든 enum 상수를 순차적으로 살펴보면서 해당 상수가 나타내는 연산을 실제로 수행할 수 있으려면 반드시 그래야 한다.\\n두 번째 방법은 한정적 와일드카드 자료형 Collection<? extends Operation>을 opSet 인자의 자료형으로 사용하는 것이다.\\npublic static void main(String[] args) {\\ndouble x = Double.parseDouble(args[0]);\\ndouble y = Double.parseDouble(args[1]);\\ntest(Arrays.asList(ExtendedOperation.values()), x, y); \\n}\\n\\nprivate static void test(Collection<? extends Operation> opSet, double x, double y){\\n    for(Operation op : opSet) {\\n        System.out.printf(“%f %s %f = %f%n”, x, op, y, op.apply(x, y));\\n    }\\n}\\ntest 메서드의 인자 형태는 메서드를 호출할 때, 여러 enum 자료형에 정의한 연산들을 함께 전달할 수 있도록 하기 위한 것이다. 그러나 이렇게 하면 EnumSet이나 EnumMap을 사용할 수 없기 때문에, 여러 자료형에 정의한 연산들을 함께 전달할 수 있도록 하는 유연성이 필요 없다면, 첫 번째 방식인 한정적 자료형 토큰을 쓰는게 낫다.\\n인터페이스를 사용해 확장 가능한 enum 자료형을 만드는 방법에는 한 가지 사소한 문제가 있다. enum 구현 자체는 계승할 수 없다는 것이다.\\n규칙39 : (Prefer annotations to naming patterns)작명 패턴 대신 애노테이션을 사용하라\\n이번 예제는 Junit의 @Test 애노테이션 기능을 간단하게 직접 구현해보면서, 작명 패턴(naming pattern) 보다 애노테이션이 어떻게 더 좋은지를 설명한다.\\n작명 패턴의 예로 과거 JUnit은 테스트 메서드 이름을 test로 시작해야 했다. 이러한 작명 패턴에는 몇 가지 문제점이 있는데 첫째, 오타났을 때 프로그램 상 문제가 없기 때문에 알아차리기 어렵다. 둘째, 특정한 프로그램 요소에만 적용되도록 만들 수 없다. 예를 들어 testSafetyMechanisms라는 이름의 클래스를 만들었다 해도 그 클래스의 모든 메서드를 테스트 실행시키지 않는다(클래스 이름 까지는 확인하지 않기 때문에 의미가 없다). 셋째, 프로그램 요소에 인자를 전달할 마땅한 방법이 없다. 메서드 이름에 포함된 문자열로 예외를 알려주는 방법이 있지만 보기 흉할 뿐 아니라 컴파일러가 문자열이 예외 이름인지 알 도리가 없다.\\n그러므로 애노테이션을 사용하자.\\n// 표식 애노테이션 자료형(markder annotation type) 선언\\nimport java.lang.annotation.*;\\n\\n/**\\n* 애노테이션이 붙은 메서드가 테스트 메서드임을 표시.\\n* 무인자 정적 메서드(parameterless)에만 사용 가능.\\n*/\\n@Retention(RetentionPolicy.RUNTIME)\\n@Target(ElementType.METHOD)\\npublic @interface BongTest {\\n}\\n애노테이션 자료형 BongTest 선언부에도 Retention과 Target이라는 애노테이션이 붙어 있다. 애노테이션 자료형 선언부에 붙는 애노테이션은 메타-애노테이션이라 부른다. @Retention(RetentionPolicy.RUNTIME)은 BongTest가 실행시간(runtime)에도 유지되어야 하는 애노테이션이라는 뜻이다. 그렇지 않으면 BongTest는 테스트 도구에게는 보이지 않는다. @Target(ElementType.METHOD)은 BongTest가 메서드 선언부에만 적용할 수 있는 애노테이션이라는 뜻이다.\\npublic class Sample {\\n\\n    @BongTest\\n    public static void noParamStaticMethod() { // 성공해야함\\n    }\\n\\n    @BongTest\\n    public static void oneParamMethod() { // 실패해야함\\n        throw new RuntimeException(\\"Boom\\");\\n    }\\n\\n    @BongTest\\n    public void noParamMethod() { // 실패해야함\\n    }\\n\\n    @BongTest\\n    private void privateNoParamMethod() { // 실패해야함\\n    }\\n\\n    @BongTest\\n    public static void oneParamStaticMethod(String ii) { // 실패해야함\\n    }\\n}\\n위와 같이 @BongTest 애노테이션을 적용한 메서드를 Sample 클래스에 선언해 놓고 테스트 실행기를 돌려보자. @BongTest 애노테이션은 Sample 클래스가 동작하는 데 직접적 영향을 미치지 않는다. 해당 애노테이션에 관심 있는 프로그램에게 유용한 정보를 제공할 뿐이다.\\npublic class RunTests {\\n    public static void main(String[] args) throws Exception {\\n        int tests = 0;\\n        int passed = 0;\\n        Class testClass = Sample.class;\\n        for (Method m : testClass.getDeclaredMethods()) {\\n            if (m.isAnnotationPresent(BongTest.class)) {\\n                tests++;\\n                try {\\n                    m.invoke(null);\\n                    passed++;\\n                } catch (InvocationTargetException wrappedExc) {\\n                    Throwable exc = wrappedExc.getCause();\\n                    System.out.println(m + \\" failed:\\" + exc);\\n                } catch (Exception exc) {\\n                    System.out.println(\\"INVALID @BongTest\\" + m);\\n                    System.out.println(exc);\\n                }\\n            }\\n        }\\n\\n        System.out.println(\\"Passed :\\" + passed);\\n        System.out.println(\\"Failed :\\" + (tests - passed));\\n    }\\n}\\n이 테스트 실행기는 Sample 클래스의 메서드들 가운데 @BongTest 애노테이션이 붙은 메서드를 전부 찾아내서 리플렉션 기능을 활용해 실행한다(Method.invoke 호출). isAnnotationPresent 메서드는 실행해야 하는 테스트 메서드를 찾는 용도로 사용되었다. 리플렉션을 통해 호출된 메서드가 예외를 발생시키면 해당 예외는 InvocationTargetException으로 wrapping된다. 이 예외가 아닌 다른 예외가 발생되었다면 그것은 컴파일 시에 발견하지 못한, 잘못 사용된 애노테이션이 있다는 뜻이다. 인스턴스 메서드나 private 메서드, 인자가 있는 메서드에 애노테이션을 붙이면 그런일이 생긴다.\\n이제 특정한 예외가 발생했을 경우만 성공하는 테스트도 지원 가능하도록 고쳐보자. 새로운 애노테이션 자료형이 필요하다.\\n@Retention(RetentionPolicy.RUNTIME)\\n@Target(ElementType.METHOD)\\npublic @interface BongTest {\\n    Class<? extends Exception> value() default BongTest.None.class;\\n\\n    public static class None extends Exception {\\n        private None() {\\n        }\\n    }\\n}\\n추가로 None 클래스를 만들어 default로 놓음으로써 애노테이션의 인자가 없을 때 컴파일 에러가 발생하는것을 막았다.\\n    @BongTest(ArithmeticException.class)\\n    public static void arithmeticExceptionTest() {\\n        int i = 0;\\n        i = i / i;\\n    }\\n\\n    @BongTest(ArrayIndexOutOfBoundsException.class)\\n    public static void arrayIndexOutOfBoundsExceptionTest() {\\n        int[] a = new int[0];\\n        int i = a[1];\\n    }\\n위와 같이 발생할 예외를 인자로 보내주면 아래의 테스트 실행기에서 통과 됨을 확인할 수 있다.\\npublic class RunTests {\\n    public static void main(String[] args) throws Exception {\\n        int tests = 0;\\n        int passed = 0;\\n        Class testClass = Sample.class;\\n        for (Method m : testClass.getDeclaredMethods()) {\\n            if (m.isAnnotationPresent(BongTest.class)) {\\n                tests++;\\n                try {\\n                    m.invoke(null);\\n                    passed++;\\n                } catch (InvocationTargetException wrappedExc) {\\n                    Throwable exc = wrappedExc.getCause();\\n                    Class<? extends Exception> excType = m.getAnnotation(BongTest.class).value();\\n\\n                    if (excType.isInstance(exc))\\n                        passed++;\\n                    else\\n                        System.out.println(m + \\" failed:\\" + exc);\\n                } catch (Exception exc) {\\n                    System.out.println(\\"INVALID @BongTest\\" + m);\\n                    System.out.println(exc);\\n                }\\n            }\\n        }\\n\\n        System.out.println(\\"Passed :\\" + passed);\\n        System.out.println(\\"Failed :\\" + (tests - passed));\\n    }\\n}\\n좀 더 발전 시켜서 지정된 예외들 가운데 하나라도 테스트 메서드 안에서 발생하면 테스트가 통과하도록 할 수도 있다.\\n@Retention(RetentionPolicy.RUNTIME)\\n@Target(ElementType.METHOD)\\npublic @interface BongTest {\\n    Class<? extends Exception>[] value() default BongTest.None.class;\\n\\n    public static class None extends Exception {\\n        private None() {\\n        }\\n    }\\n}\\n\\n@BongTest({IndexOutOfBoundsException.class, NullPointerException.class})\\npublic static void doublyBad() {\\n    List<String> list = new ArrayList<>();\\n    // 자바 명세에는 아래와 같이 addAll을 호출하면 IndexOutOfBoundsException이나 NullPointerException이 발생한다고 명시되어 있다.\\n    list.addAll(5, null);\\n}\\npublic class RunTests {\\n    public static void main(String[] args) throws Exception {\\n        int tests = 0;\\n        int passed = 0;\\n        Class testClass = Sample.class;\\n        for (Method m : testClass.getDeclaredMethods()) {\\n            if (m.isAnnotationPresent(BongTest.class)) {\\n                tests++;\\n                try {\\n                    m.invoke(null);\\n                    passed++;\\n                } catch (InvocationTargetException wrappedExc) {\\n                    Throwable exc = wrappedExc.getCause();\\n                    Class<? extends Exception>[] excTypes = m.getAnnotation(BongTest.class).value();\\n\\n                    for (Class<? extends Exception> excType : excTypes) {\\n                        if (excType.isInstance(exc)) {\\n                            passed++;\\n                            break;\\n                        }\\n                    }\\n\\n                    System.out.println(m + \\" failed:\\" + exc);\\n\\n                } catch (Exception exc) {\\n                    System.out.println(\\"INVALID @BongTest\\" + m);\\n                    System.out.println(exc);\\n                }\\n            }\\n        }\\n\\n        System.out.println(\\"Passed :\\" + passed);\\n        System.out.println(\\"Failed :\\" + (tests - passed));\\n    }\\n}\\n자바8부터 multivalued annotations 하는 또다른 방법이 있다.\\n@Retention(RetentionPolicy.RUNTIME)\\n@Target(ElementType.METHOD)\\n@Repeatable(BongTestContainer.class)\\npublic @interface BongTest {\\n    Class<? extends Exception> value() default BongTest.None.class;\\n\\n    public static class None extends Exception {\\n        private None() {\\n        }\\n    }\\n}\\n\\n@Retention(RetentionPolicy.RUNTIME)\\n@Target(ElementType.METHOD)\\npublic @interface BongTestContainer {\\n    BongTest[] value();\\n}\\n\\n@BongTest(NullPointerException.class)\\n@BongTest(IndexOutOfBoundsException.class)\\npublic static void doublyBad() {\\n    List<String> list = new ArrayList<>();\\n    list.addAll(5, null);\\n}\\n@Repeatable 메타 애노테이션으로 단일 요소에 반복적으로 적용할 수 있다. containing annotation type 인자를 받고 그 containing annotation type은 annotation 배열 타입을 갖는다. 주의할 점은 containing annotation type도 반드시 retention 정책과 target에 대한 메타 애노테이션이 있어야 한다. 그렇지 않으면 컴파일이 안된다.\\nrepeatable annotation을 처리하려면 주의가 필요하다. getAnnotationsByType 메서드는 repeated와 non-repeated 애노테이션에 접근하는데 모두 사용될 수 있다. 그러나 isAnnotationPresent 메서드는 BongTest 타입을 검사할 때 BongTestContainer 타입은 자동으로 무시한다. 마찬가지로 BongTestContainer 타입을 검사할 때도 BongTest 타입은 무시한다. 그래서 아래와 같이 두개의 타입 모두를 검사해줘야 한다.\\npublic class RunTests {\\n    public static void main(String[] args) throws Exception {\\n        int tests = 0;\\n        int passed = 0;\\n        Class testClass = Sample.class;\\n        for (Method m : testClass.getDeclaredMethods()) {\\n            if (m.isAnnotationPresent(BongTest.class) || m.isAnnotationPresent(BongTestContainer.class)) {\\n                tests++;\\n                try {\\n                    m.invoke(null);\\n                    passed++;\\n                } catch (InvocationTargetException wrappedExc) {\\n                    Throwable exc = wrappedExc.getCause();\\n                    BongTest[] excTests = m.getAnnotationsByType(BongTest.class);\\n                    for (BongTest excTest : excTests) {\\n                        if (excTest.value().isInstance(exc)) {\\n                            passed++;\\n                            break;\\n                        }\\n                    }\\n\\n                    System.out.println(m + \\" failed:\\" + exc);\\n\\n                } catch (Exception exc) {\\n                    System.out.println(\\"INVALID @BongTest\\" + m);\\n                    System.out.println(exc);\\n                }\\n            }\\n        }\\n\\n        System.out.println(\\"Passed :\\" + passed);\\n        System.out.println(\\"Failed :\\" + (tests - passed));\\n    }\\n}\\nRepeatable 애노테이션은 가독성을 향상시키지만, 애노테이션을 처리하는데 더 많은 상용구(boilerplate)가 있으며 처리하는데 오류를 발생시키기 쉽다.\\n규칙 40 : Override 애노테이션은 일관되게 사용하라\\n상위 클래스에 선언된 메서드를 재정의할 때는 반드시 선언부에 Override 애노테이션을 붙여라. 그래야 실수 했을 때 컴파일러에서 검출될 수 있다.\\n그런데 비-abstract 클래스에서 abstract 메서드를 재정의할 때는 Override 애노테이션을 붙이지 않아도 된다(상위 클래스 메서드를 재정의한다는 사실을 명시적으로 표현하고 싶다면 붙여도 상관 없다).\\n버전 1.6 이상의 자바를 사용한다면 Override 애노테이션을 통해 찾을 수 있는 버그는 더 많다. 클래스 뿐 아니라 인터페이스에 선언된 메서드를 구현할 때도 Override를 사용할 수 있게 되었기 때문이다. 하지만 인터페이스를 구현할 때 모든 메서드에 반드시 Override를 붙여야 하는 것은 아니다. 인터페이스에 선언된 메서드를 재정의 하지 않으면 어차피 컴파일러가 오류를 내기 때문이다. (마찬가지로 특정 인터페이스 메서드를 재정의하는 메서드라는 사실을 명시적으로 알리고 싶다면 애노테이션을 붙여도 되나, 반드시 필요한 것은 아니다).\\n규칙 41 : 자료형을 정의할 때 표식 인터페이스를 사용하라\\n표식 인터페이스(marker interface)는 아무 메서드도 선언하지 않는 인터페이스다. Serializable 인터페이스가 그 예다.\\npublic interface Serializable {\\n}\\n이 인터페이스를 구현하는 클래스를 만든다는 것은, 해당 클래스로 만든 객체들은 ObjectOutputStream으로 출력할 수 있다는(“직렬화”할 수 있다는) 뜻이다. 다시 말해 해당 클래스가 어떤 속성을 만족한다는 사실을 표시하는 것과 같다.\\n표식 애노테이션과 비교했을 때 표식 인터페이스는 두 가지 장점이 있다. 첫 번째 장점은, 표식 인터페이스는 결국 표식 붙은 클래스가 만드는 객체들이 구현하는 자료형이라는 점이다. 표식 애노테이션은 자료형이 아니다. 표식 인터페이스는 자료형이므로, 표식 애노테이션을 쓴다면 프로그램 실행 중에나 발견하게 될 오류를 컴파일 시점에 발견할 수 있도록 한다. 표식 인터페이스 Serializable의 경우를 살펴보자. ObjectOutputStream.write(Object) 메서드는 인자가 Serializable 인터페이스를 구현하지 않은 객체면 오류를 낸다. 두 번째 장점은, 적용 범위를 좀 더 세밀하게 지정할 수 있다는 것이다. 애노테이션 자료형을 선언할 때 target을 ElementType.TYPE으로 지정하면 해당 애노테이션은 어떤 클래스나 인터페이스에도 적용 가능하다. 그런데 특정한 인터페이스를 구현한 클래스에만 적용할 수 있어야 하는 표식이 필요하다고 해 보자. 표식 인터페이스를 쓴다면, 그 특정 인터페이스를 extends 하도록 선언하기만 하면 된다.\\n표식 애노테이션의 주된 장점은 프로그램 안에서 애노테이션 자료형을 쓰기 시작한 뒤에도 더 많은 정보를 추가할 수 있다는 것이다. 기본값(default)을 갖는 애노테이션 자료형 요소들을 더해 나가면 된다. 표식 인터페이스를 쓰는 경우에는 이런 진화가 불가능하다. 일단 구현이 이루어지고 난 다음에는 새로운 메서드를 추가하는 것이 일반적으로 불가능하기 때문이다(자바8부터 default 메서드를 통해 불가능하지는 않음).\\n그렇다면 표식 애노테이션과 표식 인터페이스는 각각 어떤 상황에 걸맞나? 클래스나 인터페이스 이외의 프로그램 요소에 적용되어야 하는 표식은 애노테이션으로 만들어야 한다. 하지만 만약 표식이 붙은 객체만 인자로 받을 수 있는 메서드를 만든다면 표식 인터페이스를 사용해야 한다. 그러면 해당 메서드의 인자 자료형으로 해당 인터페이스를 사용할 수 있어서, 컴파일 시간에 형 검사를 진행할 수 있게 된다. 요약하자면, 표식 인터페이스와 표식 애노테이션은 쓰임새가 다르다. 새로운 메서드가 없는 자료형을 정의하고자 한다면 표식 인터페이스를 이용해야 한다. 클래스나 인터페이스 이외의 프로그램 요소에 표식을 달아야 하고, 앞으로 표식에 더 많은 정보를 추가할 가능성이 있다면, 표식 애노테이션을 사용해야 한다.\\n\\n-->"}');export{T as comp,E as data};