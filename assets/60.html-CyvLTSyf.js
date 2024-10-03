import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,a as n,t as m,b as s,w as i,n as p,g as l,d as a,e as u,r as c,o as w}from"./app-U_bew1in.js";const g={},f={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},b=n("hr",null,null,-1),_=u('<h2 id="project-16-part-one" tabindex="-1"><a class="header-anchor" href="#project-16-part-one"><span>Project 16, part one</span></a></h2><p>Do you remember when the iPhone was announced? Seeing Steve Jobs show us on-device maps for the first time was incredible – after at least a decade of maps seeming like dusty old things we can safely ignore, suddenly mapping was cool again.</p><p>Suddenly we could pinch and zoom our way around the world, and with one fell swoop the idea of “getting lost” became almost vanishingly impossible. It’s no surprise, then, that Ken Jennings said “even before you understand them, your brain is drawn to maps” – they are awesome things that let us explore the world from the safety of our phone.</p><p>Today you’re going to meet a new Apple framework called MapKit, which is designed to make mapping almost instant in iOS apps. It handles fetching data and rendering, it handles scrolling and zooming, and it even handles placemarks, routes, and more – it’s incredible.</p><p>Of course, we never learn about technologies as pure theory, so we’ll be putting MapKit to work in a real app that helps show information about placemarks of our choosing.</p><p><strong>Today you have three topics to work through, and you’ll learn about <code>MKMapView</code>, <code>MKAnnotation</code>, <code>CLLocationCoordinate2D</code>, and more.</strong></p><h3 id="setting-up" tabindex="-1"><a class="header-anchor" href="#setting-up"><span>Setting up</span></a></h3>',7),C={class:"hint-container details"},V=n("summary",null,"Setting up",-1),A=n("p",null,[a("It's time for another app project, and this time you're going to learn about "),n("code",null,"MapKit"),a(": Apple's mapping framework that lets us drops pins, plan routes, and zoom around the world with just a few swipes.")],-1),j=n("p",null,[a("Working with "),n("code",null,"MapKit"),a(" requires you to learn quite a few new classes, so I've tried to construct a project simple enough that we can focus on the mapping element. In this project you'll make an app that shows the locations of capital cities around the world, and when one of them is tapped you can bring up more information.")],-1),M=n("code",null,"Resolve Auto Layout Issues > Add Missing Constraints",-1),S=n("p",null,"Now, run your program and you should see a basic map working nicely.",-1),K=n("h3",{id:"up-and-running-with-mapkit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#up-and-running-with-mapkit"},[n("span",null,[a("Up and running with "),n("code",null,"MapKit")])])],-1),I={class:"hint-container details"},D=n("summary",null,"Up and running with MapKit",-1),q=n("p",null,'The default map view works great out of the box – you can pan around, zoom in and out, and so on. If you were wondering, you need to hold down Option to trigger a virtual "pinch" gesture – just click and drag as if you were moving one finger, and the other "finger" will move in the opposite direction.',-1),T=n("code",null,"mapView",-1),x=n("code",null,"import MapKit",-1),L=n("code",null,"ViewController.swift",-1),P=n("code",null,"MKMapView",-1),O=n("p",null,[n("strong",null,"Note"),a(": If you don’t set the map’s delegate, the rest of this project won’t work too well.")],-1),U=n("p",null,[a("With that done, we're going to add some annotations to our map. Annotations are objects that contain a title, a subtitle and a position. The first two are both strings, the third is a new data type called "),n("code",null,"CLLocationCoordinate2D"),a(", which is a structure that holds a latitude and longitude for where the annotation should be placed.")],-1),N=n("p",null,[a("Map annotations are described not as a class, but as a protocol. This is something you haven't seen before, because so far protocols have all been about methods. But if we want to conform to the "),n("code",null,"MKAnnotation"),a(" protocol, which is the one we need to adopt in order to create map annotations, it states that we "),n("em",null,"must"),a(" have a coordinate in our annotation. That makes sense, because there's no point in having an annotation on a map if we don't know where it is. The title and subtitle are optional, but we'll provide them anyway.")],-1),z=n("code",null,"iOS > Source > Cocoa Touch Class",-1),R=n("code",null,"NSObject",-1),W=n("code",null,"NSObject",-1),B=u(`<p>Change the contents of Capital.swift to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">MapKit</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token class-name">UIKit</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Capital</span><span class="token punctuation">:</span> <span class="token class-name">NSObject</span><span class="token punctuation">,</span> <span class="token class-name">MKAnnotation</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span></span>
<span class="line">    <span class="token keyword">var</span> coordinate<span class="token punctuation">:</span> <span class="token class-name">CLLocationCoordinate2D</span></span>
<span class="line">    <span class="token keyword">var</span> info<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> coordinate<span class="token punctuation">:</span> <span class="token class-name">CLLocationCoordinate2D</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title</span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>coordinate <span class="token operator">=</span> coordinate</span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>info <span class="token operator">=</span> info</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are our three properties, along with a basic initializer that just copies in the data it&#39;s given. Again, we need to use <code>self.</code> here because the parameters being passed in are the same name as our properties. I&#39;ve added <code>import MapKit</code> to the file because that&#39;s where <code>MKAnnotation</code> and <code>CLLocationCoordinate2D</code> are defined.</p><p>With this custom subclass, we can create capital cities by passing in their name, coordinate and information – I&#39;ll be using the <code>info</code> property to hold one priceless (read: off-the-cuff, I sucked at geography) informational nugget about each city. You&#39;re welcome to do better!</p>`,4),F=n("code",null,"viewDidLoad()",-1),J=n("code",null,"ViewController.swift",-1),H=u(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> london <span class="token operator">=</span> <span class="token class-name">Capital</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;London&quot;</span></span><span class="token punctuation">,</span> coordinate<span class="token punctuation">:</span> <span class="token class-name">CLLocationCoordinate2D</span><span class="token punctuation">(</span>latitude<span class="token punctuation">:</span> <span class="token number">51.507222</span><span class="token punctuation">,</span> longitude<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">0.1275</span><span class="token punctuation">)</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Home to the 2012 Summer Olympics.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> oslo <span class="token operator">=</span> <span class="token class-name">Capital</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Oslo&quot;</span></span><span class="token punctuation">,</span> coordinate<span class="token punctuation">:</span> <span class="token class-name">CLLocationCoordinate2D</span><span class="token punctuation">(</span>latitude<span class="token punctuation">:</span> <span class="token number">59.95</span><span class="token punctuation">,</span> longitude<span class="token punctuation">:</span> <span class="token number">10.75</span><span class="token punctuation">)</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Founded over a thousand years ago.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> paris <span class="token operator">=</span> <span class="token class-name">Capital</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Paris&quot;</span></span><span class="token punctuation">,</span> coordinate<span class="token punctuation">:</span> <span class="token class-name">CLLocationCoordinate2D</span><span class="token punctuation">(</span>latitude<span class="token punctuation">:</span> <span class="token number">48.8567</span><span class="token punctuation">,</span> longitude<span class="token punctuation">:</span> <span class="token number">2.3508</span><span class="token punctuation">)</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Often called the City of Light.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> rome <span class="token operator">=</span> <span class="token class-name">Capital</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Rome&quot;</span></span><span class="token punctuation">,</span> coordinate<span class="token punctuation">:</span> <span class="token class-name">CLLocationCoordinate2D</span><span class="token punctuation">(</span>latitude<span class="token punctuation">:</span> <span class="token number">41.9</span><span class="token punctuation">,</span> longitude<span class="token punctuation">:</span> <span class="token number">12.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Has a whole country inside it.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> washington <span class="token operator">=</span> <span class="token class-name">Capital</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Washington DC&quot;</span></span><span class="token punctuation">,</span> coordinate<span class="token punctuation">:</span> <span class="token class-name">CLLocationCoordinate2D</span><span class="token punctuation">(</span>latitude<span class="token punctuation">:</span> <span class="token number">38.895111</span><span class="token punctuation">,</span> longitude<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">77.036667</span><span class="token punctuation">)</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Named after George himself.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These <code>Capital</code> objects conform to the <code>MKAnnotation</code> protocol, which means we can send it to map view for display using the <code>addAnnotation()</code> method. Put this just before the end of <code>viewDidLoad()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">mapView<span class="token punctuation">.</span><span class="token function">addAnnotation</span><span class="token punctuation">(</span>london<span class="token punctuation">)</span></span>
<span class="line">mapView<span class="token punctuation">.</span><span class="token function">addAnnotation</span><span class="token punctuation">(</span>oslo<span class="token punctuation">)</span></span>
<span class="line">mapView<span class="token punctuation">.</span><span class="token function">addAnnotation</span><span class="token punctuation">(</span>paris<span class="token punctuation">)</span></span>
<span class="line">mapView<span class="token punctuation">.</span><span class="token function">addAnnotation</span><span class="token punctuation">(</span>rome<span class="token punctuation">)</span></span>
<span class="line">mapView<span class="token punctuation">.</span><span class="token function">addAnnotation</span><span class="token punctuation">(</span>washington<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternatively, you can add multiple annotations at once using the <code>addAnnotations()</code> method. Using this, you would replace those five lines with this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">mapView<span class="token punctuation">.</span><span class="token function">addAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">[</span>london<span class="token punctuation">,</span> oslo<span class="token punctuation">,</span> paris<span class="token punctuation">,</span> rome<span class="token punctuation">,</span> washington<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That creates an array out of the annotations and sends it in one lump to the map view.</p><p>If you run your program now, you&#39;ll see pins on the map for each city, and you can tap any of them to see the city name. But where&#39;s the <code>info</code> property? To show more information, we need to customize the view used to show the annotations.</p><figure><img src="https://www.hackingwithswift.com/img/books/hws/16-2.png" alt="Our pins are visible on the map, but they don&#39;t do anything more than just show each city&#39;s name." tabindex="0" loading="lazy"><figcaption>Our pins are visible on the map, but they don&#39;t do anything more than just show each city&#39;s name.</figcaption></figure>`,8),Y=n("h3",{id:"annotations-and-accessory-views-mkpinannotationview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#annotations-and-accessory-views-mkpinannotationview"},[n("span",null,[a("Annotations and accessory views: "),n("code",null,"MKPinAnnotationView")])])],-1),E={class:"hint-container details"},Z=n("summary",null,"Annotations and accessory views: MKPinAnnotationView",-1),G=u(`<p>Every time the map needs to show an annotation, it calls a <code>viewFor</code> method on its delegate. We don&#39;t implement that method right now, so the default red pin is used with nothing special – although as you&#39;ve seen it&#39;s smart enough to pull out the title for us.</p><p>Customizing an annotation view is a little bit like customizing a table view cell or collection view cell, because iOS automatically reuses annotation views to make best use of memory. If there isn&#39;t one available to reuse, we need to create one from scratch using the <code>MKPinAnnotationView</code> class.</p><p>Our custom annotation view is going to look a lot like the default view, with the exception that we&#39;re going to add a button that users can tap for more information. So, they tap the pin to see the city name, then tap its button to see more information. In our case, it&#39;s those fascinating facts I spent literally tens of seconds writing.</p><p>There are a couple of things you need to be careful of here. First, <code>viewFor</code> will be called for your annotations, but also Apple&#39;s. For example, if you enable tracking of the user&#39;s location then that&#39;s shown as an annotation and you don&#39;t want to try using it as a capital city. If an annotation is not one of yours, just return <code>nil</code> from the method to have Apple&#39;s default used instead.</p><p>Second, adding a button to the view isn&#39;t done using the <code>addTarget()</code> method you already saw in project 8. Instead, you just add the button and the map view will send a message to its delegate (us!) when it&#39;s tapped.</p><p>Here&#39;s a breakdown of what the method will do:</p><ol><li>If the annotation isn&#39;t from a capital city, it must return <code>nil</code> so iOS uses a default view.</li><li>Define a reuse identifier. This is a string that will be used to ensure we reuse annotation views as much as possible.</li><li>Try to dequeue an annotation view from the map view&#39;s pool of unused views.</li><li>If it isn&#39;t able to find a reusable view, create a new one using <code>MKPinAnnotationView</code> and sets its <code>canShowCallout</code> property to true. This triggers the popup with the city name.</li><li>Create a new <code>UIButton</code> using the built-in <code>.detailDisclosure</code> type. This is a small blue &quot;i&quot; symbol with a circle around it.</li><li>If it can reuse a view, update that view to use a different annotation.</li></ol><p>We already used Interface Builder to make our view controller the delegate for the map view, but if you want code completion to work you should also update your code to declare that the class conforms. So, in ViewController.swift, find this line:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>And change it to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">MKMapViewDelegate</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Put this method into your view controller, watching out for my numbered comments:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">mapView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> mapView<span class="token punctuation">:</span> <span class="token class-name">MKMapView</span><span class="token punctuation">,</span> viewFor annotation<span class="token punctuation">:</span> <span class="token class-name">MKAnnotation</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">MKAnnotationView</span><span class="token operator">?</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 1</span></span>
<span class="line">    <span class="token keyword">guard</span> annotation <span class="token keyword">is</span> <span class="token class-name">Capital</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token nil constant">nil</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 2</span></span>
<span class="line">    <span class="token keyword">let</span> identifier <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Capital&quot;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 3</span></span>
<span class="line">    <span class="token keyword">var</span> annotationView <span class="token operator">=</span> mapView<span class="token punctuation">.</span><span class="token function">dequeueReusableAnnotationView</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> identifier<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> annotationView <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//4</span></span>
<span class="line">        annotationView <span class="token operator">=</span> <span class="token class-name">MKPinAnnotationView</span><span class="token punctuation">(</span>annotation<span class="token punctuation">:</span> annotation<span class="token punctuation">,</span> reuseIdentifier<span class="token punctuation">:</span> identifier<span class="token punctuation">)</span></span>
<span class="line">        annotationView<span class="token operator">?</span><span class="token punctuation">.</span>canShowCallout <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 5</span></span>
<span class="line">        <span class="token keyword">let</span> btn <span class="token operator">=</span> <span class="token class-name">UIButton</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>detailDisclosure<span class="token punctuation">)</span></span>
<span class="line">        annotationView<span class="token operator">?</span><span class="token punctuation">.</span>rightCalloutAccessoryView <span class="token operator">=</span> btn</span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 6</span></span>
<span class="line">        annotationView<span class="token operator">?</span><span class="token punctuation">.</span>annotation <span class="token operator">=</span> annotation</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> annotationView</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can press <kbd>Cmd</kbd>+<kbd>R</kbd> to run your app, and now if you tap on any pin you&#39;ll see a city&#39;s name as well as a button you can tap to show more information. Like I said, you don&#39;t need to use <code>addTarget()</code> to add an action to the button, because you&#39;ll automatically be told by the map view using a <code>calloutAccessoryControlTapped</code> method.</p><p>When this method is called, you&#39;ll be told what map view sent it (we only have one, so that&#39;s easy enough), what annotation view the button came from (this is useful), as well as the button that was tapped.</p><p>The annotation view contains a property called <code>annotation</code>, which will contain our <code>Capital</code> object. So, we can pull that out, typecast it as a <code>Capital</code>, then show its title and information in any way we want. The easiest for now is just to use a <code>UIAlertController</code>, so that&#39;s what we&#39;ll do.</p><p>Add this code to your view controller, just beneath the previous method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">mapView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> mapView<span class="token punctuation">:</span> <span class="token class-name">MKMapView</span><span class="token punctuation">,</span> annotationView view<span class="token punctuation">:</span> <span class="token class-name">MKAnnotationView</span><span class="token punctuation">,</span> calloutAccessoryControlTapped control<span class="token punctuation">:</span> <span class="token class-name">UIControl</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">guard</span> <span class="token keyword">let</span> capital <span class="token operator">=</span> view<span class="token punctuation">.</span>annotation <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">Capital</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> placeName <span class="token operator">=</span> capital<span class="token punctuation">.</span>title</span>
<span class="line">    <span class="token keyword">let</span> placeInfo <span class="token operator">=</span> capital<span class="token punctuation">.</span>info</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> placeName<span class="token punctuation">,</span> message<span class="token punctuation">:</span> placeInfo<span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span></span>
<span class="line">    ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;OK&quot;</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With that, the project is done. We have pins in place, city names being showed when the pins are tapped, and more information popping up when requested. Perfect!</p><figure><img src="https://www.hackingwithswift.com/img/books/hws/16-3.png" alt="Now that we have customized the map pins, users can tap the &#39;i&#39; button to see some detail about each city." tabindex="0" loading="lazy"><figcaption>Now that we have customized the map pins, users can tap the &#39;i&#39; button to see some detail about each city.</figcaption></figure>`,20),Q=n("hr",null,null,-1);function X(d,$){const t=c("router-link"),e=c("VPCard"),r=c("VidStack"),o=c("FontIcon");return w(),k("div",null,[n("h1",f,[n("a",v,[n("span",null,m(d.$frontmatter.title)+" 관련",1)])]),n("nav",y,[n("ul",null,[n("li",null,[s(t,{to:"#project-16-part-one"},{default:i(()=>[a("Project 16, part one")]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#setting-up"},{default:i(()=>[a("Setting up")]),_:1})]),n("li",null,[s(t,{to:"#up-and-running-with-mapkit"},{default:i(()=>[a("Up and running with MapKit")]),_:1})]),n("li",null,[s(t,{to:"#annotations-and-accessory-views-mkpinannotationview"},{default:i(()=>[a("Annotations and accessory views: MKPinAnnotationView")]),_:1})])])])])]),b,s(e,p(l({title:"100 Days of Swift - Day 60",desc:"Project 16, part one",link:"https://www.hackingwithswift.com/100/60",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),_,n("details",C,[V,s(e,p(l({title:"100 Days of Swift - Day 60 - Setting up",desc:"Setting up",link:"https://hackingwithswift.com/read/16/1/setting-up",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(r,{src:"youtube/p0dOywHx0VI"}),A,j,n("p",null,[a('Create a new Single View App project in Xcode, naming it Project16. Now go to Interface Builder for your view controller, and embed it inside a navigation controller. Search for "map" in the object library, drop a map view into your view controller so that it occupies the full view, then use '),s(o,{icon:"iconfont icon-select"}),M,a(" so that it stays next to each edge.")]),S]),K,n("details",I,[D,s(e,p(l({title:"100 Days of Swift - Day 60 - Up and running with MapKit",desc:"Up and running with MapKit",link:"https://hackingwithswift.com/read/16/2/up-and-running-with-mapkit",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(r,{src:"youtube/R9lb373n5JI"}),q,n("p",null,[a("Using the assistant editor, please create an outlet for your map view called "),T,a(". You should also set your view controller to be the delegate of the map view by Ctrl-dragging from the map view to the orange and white view controller button just above the layout area. You will also need to add "),x,a(" to "),s(o,{icon:"fa-brands fa-swift"}),L,a(" so it understands what "),P,a(" is.")]),O,U,N,n("p",null,[a("Create a new file and choose "),s(o,{icon:"iconfont icon-select"}),z,a(". Make it a subclass of "),R,a(" and name it “Capital”. With map annotations, you can't use structs, and you must inherit from "),W,a(" because it needs to be interactive with Apple's Objective-C code.")]),B,n("p",null,[a("Put these lines into the "),F,a(" method of "),s(o,{icon:"fa-brands fa-swift"}),J,a(":")]),H]),Y,n("details",E,[Z,s(e,p(l({title:"100 Days of Swift - Day 60 - Annotations and accessory views: MKPinAnnotationView",desc:"Annotations and accessory views: MKPinAnnotationView",link:"https://hackingwithswift.com/read/16/3/annotations-and-accessory-views-mkpinannotationview",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(r,{src:"youtube/VkvEA7v5JyQ"}),G]),Q])}const sn=h(g,[["render",X],["__file","60.html.vue"]]),tn=JSON.parse('{"path":"/swift/100-days-of-swift/60.html","title":"Day 60","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 60","description":"100 Days of Swift > Day 60","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 60"},{"property":"og:description","content":"Day 60"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/60.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/60.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 60"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 60"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.hackingwithswift.com/img/books/hws/16-2.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 60\\",\\"image\\":[\\"https://www.hackingwithswift.com/img/books/hws/16-2.png\\",\\"https://www.hackingwithswift.com/img/books/hws/16-3.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 16, part one","slug":"project-16-part-one","link":"#project-16-part-one","children":[{"level":3,"title":"Setting up","slug":"setting-up","link":"#setting-up","children":[]},{"level":3,"title":"Up and running with MapKit","slug":"up-and-running-with-mapkit","link":"#up-and-running-with-mapkit","children":[]},{"level":3,"title":"Annotations and accessory views: MKPinAnnotationView","slug":"annotations-and-accessory-views-mkpinannotationview","link":"#annotations-and-accessory-views-mkpinannotationview","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":9}]},"readingTime":{"minutes":7.35,"words":2204},"filePathRelative":"swift/100-days-of-swift/60.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{sn as comp,tn as data};