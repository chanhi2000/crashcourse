import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,a as n,t as m,b as a,w as p,n as c,g as l,d as s,e,r as t,o as g}from"./app-U_bew1in.js";const f={},w={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"},y=n("hr",null,null,-1),_=e('<h2 id="project-16-part-6" tabindex="-1"><a class="header-anchor" href="#project-16-part-6"><span>Project 16, part 6</span></a></h2><p>This has been a long project with lots to learn, but today marks the last of the code. As the American professor Angela Duckworth said, “enthusiasm is common; endurance is rare” – it took enthusiasm to start day 1 of this series, but here you are on day 84 just finishing a huge project, so it’s clear you’ve got great endurance as well.</p><p>This project has already drawn upon some important SwiftUI features such as tab bars, swipe actions, and the environment; some important Swift features such as importing external packages and <code>Result</code>; and even some important iOS features such as Core Image and scanning codes with the camera. Today we’re going to add the icing on the cake, which is adding a context menu, and showing alerts using the UserNotification framework.</p><p>This is what great apps look like: they lean on a variety of language and system features to build great user experiences that go beyond what SwiftUI can do by itself. Yes, SwiftUI is an awesome way to build apps, but it’s only the beginning – iOS is capable of so much more, and as much as it sounds like a cliche the only limit to what you can make is your imagination.</p><p><strong>Today you have two topics to work through, in which you’ll add a context menu to save our QR code, then show local notifications using the UserNotifications framework.</strong></p><h3 id="adding-a-context-menu-to-an-image" tabindex="-1"><a class="header-anchor" href="#adding-a-context-menu-to-an-image"><span>Adding a context menu to an image</span></a></h3>',6),x={class:"hint-container details"},I=n("summary",null,"Adding a context menu to an image",-1),C=n("p",null,[s("We’ve already written code that dynamically generates a QR code based on the user’s name and email address, but with a little extra code we can also let the user "),n("em",null,"share"),s(" that QR code outside the app. This is another example of where "),n("code",null,"ShareLink"),s(" comes in handy, although this time we'll place it inside a context menu.")],-1),q=n("code",null,"MeView.swift",-1),S=n("code",null,"contextMenu()",-1),j=e(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Image</span><span class="token punctuation">(</span>uiImage<span class="token punctuation">:</span> <span class="token function">generateQRCode</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">\\n</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">emailAddress</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">interpolation</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token keyword">none</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">resizable</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">scaledToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>contextMenu <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token function">generateQRCode</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">\\n</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">emailAddress</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">ShareLink</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">(</span>uiImage<span class="token punctuation">:</span> image<span class="token punctuation">)</span><span class="token punctuation">,</span> preview<span class="token punctuation">:</span> <span class="token class-name">SharePreview</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;My QR Code&quot;</span></span><span class="token punctuation">,</span> image<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">(</span>uiImage<span class="token punctuation">:</span> image<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, we need to convert the <code>UIImage</code> of our QR code to a SwiftUI <code>Image</code> view, which can then be handed to the system&#39;s share sheet.</p><p>We <em>could</em> save a little work by caching the generated QR code, however a more important side effect of that is that we wouldn’t have to pass in the name and email address each time – duplicating that data means if we change one copy in the future we need to change the other too.</p><p>To add this change, first add a new <code>@State</code> property that will store the code we generate:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> qrCode <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now modify <code>generateQRCode()</code> so that it quietly stores the new code in our cache before sending it back:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token keyword">let</span> cgimg <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createCGImage</span><span class="token punctuation">(</span>outputImage<span class="token punctuation">,</span> from<span class="token punctuation">:</span> outputImage<span class="token punctuation">.</span>extent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    qrCode <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>cgImage<span class="token punctuation">:</span> cgimg<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> qrCode</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And now our context menu button can use the cached code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token punctuation">.</span>contextMenu <span class="token punctuation">{</span></span>
<span class="line">    \`<span class="token class-name">ShareLink</span>\`<span class="token punctuation">(</span>item<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">(</span>uiImage<span class="token punctuation">:</span> qrCode<span class="token punctuation">)</span><span class="token punctuation">,</span> preview<span class="token punctuation">:</span> <span class="token class-name">SharePreview</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;My QR Code&quot;</span></span><span class="token punctuation">,</span> image<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">(</span>uiImage<span class="token punctuation">:</span> qrCode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Before you try the context menu yourself, make sure you add the same project option we had for the Instafilter project – you need to add a permission request string to your project’s configuration options.</p><p>In case you’ve forgotten how to do that, here are the steps you need:</p><ul><li>Open your target settings</li><li>Select the Info tab</li><li>Right-click on an existing option</li><li>Choose Add Row</li><li>Select <code>[“Privacy - Photo Library Additions Usage Description”]</code> for the key name.</li><li>Enter “We want to save your QR code.” as the value.</li></ul><p>And now go ahead and run the app – you&#39;re likely to find things don&#39;t work quite as planned. In fact, back in Xcode you might see a purple warning line in the <code>generateQRCode()</code> method: &quot;Modifying state during view update, this will cause undefined behavior.&quot;</p><p>What this means is that our current view body calls <code>generateQRCode()</code> to create the shareable image that we&#39;re attaching our context menu to, but calling that method now saves a value in the <code>qrCode</code> property we marked with <code>@State</code>, which in <em>turn</em> causes the view body to be reinvoked – it creates a loop, so SwiftUI bails out and flags a big warning for us.</p><p>To fix this we need to make the <code>Image</code> view use our cached QR code, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Image</span><span class="token punctuation">(</span>uiImage<span class="token punctuation">:</span> qrCode<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>And <em>then</em> use a combination of <code>onAppear()</code> and <code>onChange()</code> to make sure the code is updated when the view is first shown, and also when either the name or email address changes.</p><p>This means creating a new method that updates our code in one place:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">updateCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    qrCode <span class="token operator">=</span> <span class="token function">generateQRCode</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">\\n</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">emailAddress</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then attaching some extra modifiers below <code>navigationTitle()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token punctuation">.</span><span class="token function">onAppear</span><span class="token punctuation">(</span>perform<span class="token punctuation">:</span> updateCode<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> name<span class="token punctuation">,</span> updateCode<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> emailAddress<span class="token punctuation">,</span> updateCode<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tip: Now that <code>updateCode()</code> updates the value of <code>qrCode</code> directly, we can go back to the earlier version of <code>generateQRCode()</code>, which simply returns the new value:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token keyword">let</span> cgimg <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createCGImage</span><span class="token punctuation">(</span>outputImage<span class="token punctuation">,</span> from<span class="token punctuation">:</span> outputImage<span class="token punctuation">.</span>extent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>cgImage<span class="token punctuation">:</span> cgimg<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now this step is done, and done properly – you should be able to run the app, switch to the Me tab, then long press the QR code to bring up your new context menu.</p>`,24),R=n("h3",{id:"posting-notifications-to-the-lock-screen",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#posting-notifications-to-the-lock-screen"},[n("span",null,"Posting notifications to the lock screen")])],-1),N={class:"hint-container details"},T=n("summary",null,"Posting notifications to the lock screen",-1),U=e("<p>For the final part of our app, we’re going to add another button to our list swipe actions, letting users opt to be reminded to contact a particular person. This will use iOS’s UserNotifications framework to create a local notification, and we’ll conditionally include it in the swipe actions as part of our existing <code>if</code> check – the button will only be shown if the user hasn’t been contacted already.</p><p>Much more interesting is how we schedule the local notifications. Remember, the first time we try this we need to use <code>requestAuthorization()</code> to explicitly ask for permission to show a notification on the lock screen, but we also need to be careful subsequent times because the user can retroactively change their mind and disable notifications.</p><p>One option is to call <code>requestAuthorization()</code> <em>every time we want to post a notification</em>, and honestly that works great: the first time it will show an alert, and all other times it will immediately return success or failure based on the previous response.</p><p>However, in the interests of completion I want to show you a more powerful alternative: we can request the current authorization settings, and use that to determine whether we should schedule a notification or request permission. The reason it’s helpful to use <em>this</em> approach rather than just requesting permission repeatedly, is that the settings object handed back to us includes properties such as <code>alertSetting</code> to check whether we can show an alert or not – the user might have restricted this so all we can do is display a numbered badge on our icon.</p><p>So, we’re going to call <code>getNotificationSettings()</code> to read whether notifications are currently allowed. If they are, we’ll show a notification. If they <em>aren’t</em>, we’ll request permissions, and if <em>that</em> comes back successfully then we’ll also show a notification. Rather than repeat the code to schedule a notification, we’ll put it inside a closure that can be called in either scenario.</p>",5),A=n("code",null,"ProspectsView.swift",-1),D=e(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">UserNotifications</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now add this method to the ProspectsView struct:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">addNotification</span><span class="token punctuation">(</span><span class="token keyword">for</span> prospect<span class="token punctuation">:</span> <span class="token class-name">Prospect</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> center <span class="token operator">=</span> <span class="token class-name">UNUserNotificationCenter</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> addRequest <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token class-name">UNMutableNotificationContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        content<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Contact </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">prospect<span class="token punctuation">.</span>name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span></span>
<span class="line">        content<span class="token punctuation">.</span>subtitle <span class="token operator">=</span> prospect<span class="token punctuation">.</span>emailAddress</span>
<span class="line">        content<span class="token punctuation">.</span>sound <span class="token operator">=</span> <span class="token class-name">UNNotificationSound</span><span class="token punctuation">.</span><span class="token keyword">default</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">var</span> dateComponents <span class="token operator">=</span> <span class="token class-name">DateComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        dateComponents<span class="token punctuation">.</span>hour <span class="token operator">=</span> <span class="token number">9</span></span>
<span class="line">        <span class="token keyword">let</span> trigger <span class="token operator">=</span> <span class="token class-name">UNCalendarNotificationTrigger</span><span class="token punctuation">(</span>dateMatching<span class="token punctuation">:</span> dateComponents<span class="token punctuation">,</span> repeats<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token class-name">UNNotificationRequest</span><span class="token punctuation">(</span>identifier<span class="token punctuation">:</span> <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>uuidString<span class="token punctuation">,</span> content<span class="token punctuation">:</span> content<span class="token punctuation">,</span> trigger<span class="token punctuation">:</span> trigger<span class="token punctuation">)</span></span>
<span class="line">        center<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// more code to come</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That puts all the code to create a notification for the current prospect into a closure, which we can call whenever we need. Notice that I’ve used <code>UNCalendarNotificationTrigger</code> for the trigger, which lets us specify a custom <code>DateComponents</code> instance. I set it to have an hour component of 9, which means it will trigger the next time 9am comes about.</p><p>Tip: For testing purposes, I recommend you comment out that trigger code and replace it with the following, which shows the alert five seconds from now:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> trigger <span class="token operator">=</span> <span class="token class-name">UNTimeIntervalNotificationTrigger</span><span class="token punctuation">(</span>timeInterval<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> repeats<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>For the second part of that method we’re going to use both <code>getNotificationSettings()</code> and <code>requestAuthorization()</code> together, to make sure we only schedule notifications when allowed. This will use the <code>addRequest</code> closure we defined above, because the same code can be used if we have permission already or if we ask and have been granted permission.</p><p>Replace the <code>// more code to come</code> comment with this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">center<span class="token punctuation">.</span>getNotificationSettings <span class="token punctuation">{</span> settings <span class="token keyword">in</span></span>
<span class="line">    <span class="token keyword">if</span> settings<span class="token punctuation">.</span>authorizationStatus <span class="token operator">==</span> <span class="token punctuation">.</span>authorized <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">addRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        center<span class="token punctuation">.</span><span class="token function">requestAuthorization</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>alert<span class="token punctuation">,</span> <span class="token punctuation">.</span>badge<span class="token punctuation">,</span> <span class="token punctuation">.</span>sound<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> success<span class="token punctuation">,</span> error <span class="token keyword">in</span></span>
<span class="line">            <span class="token keyword">if</span> success <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">addRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token keyword">let</span> error <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That’s all the code we need to schedule a notification for a particular prospect, so all that remains is to add an extra button to our swipe actions – add this below the “Mark Contacted” button:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Remind Me&quot;</span></span><span class="token punctuation">,</span> systemImage<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;bell&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">addNotification</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> prospect<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">tint</span><span class="token punctuation">(</span><span class="token punctuation">.</span>orange<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That completes the current step, and completes our project too – try running it now and you should find that you can add new prospects, then press and hold to either mark them as contacted, or to schedule a contact reminder.</p><p>Good job!</p>`,13),P=n("p",null,"That’s another app complete – don’t forget to share your progress with others!",-1),Q=n("hr",null,null,-1);function M(d,z){const o=t("router-link"),i=t("VPCard"),u=t("VidStack"),r=t("FontIcon");return g(),k("div",null,[n("h1",w,[n("a",v,[n("span",null,m(d.$frontmatter.title)+" 관련",1)])]),n("nav",b,[n("ul",null,[n("li",null,[a(o,{to:"#project-16-part-6"},{default:p(()=>[s("Project 16, part 6")]),_:1}),n("ul",null,[n("li",null,[a(o,{to:"#adding-a-context-menu-to-an-image"},{default:p(()=>[s("Adding a context menu to an image")]),_:1})]),n("li",null,[a(o,{to:"#posting-notifications-to-the-lock-screen"},{default:p(()=>[s("Posting notifications to the lock screen")]),_:1})])])])])]),y,a(i,c(l({title:"100 Days of SwiftUI - Day 84",desc:"Project 16, part 6",link:"https://www.hackingwithswift.com/100/swiftui/84",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),_,n("details",x,[I,a(i,c(l({title:"100 Days of SwiftUI - Day 84 - Adding a context menu to an image",desc:"Adding a context menu to an image",link:"https://hackingwithswift.com/books/ios-swiftui/adding-a-context-menu-to-an-image",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(u,{src:"youtube/kSt3jCwpLmo"}),C,n("p",null,[s("Start by opening "),a(r,{icon:"fa-brands fa-swift"}),q,s(", and adding the "),S,s(" modifier to the QR code image, like this:")]),j]),R,n("details",N,[T,a(i,c(l({title:"100 Days of SwiftUI - Day 84 - Posting notifications to the lock screen",desc:"Posting notifications to the lock screen",link:"https://hackingwithswift.com/books/ios-swiftui/posting-notifications-to-the-lock-screen",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(u,{src:"youtube/31sTDonbI5k"}),U,n("p",null,[s("Start by adding this import near the top of "),a(r,{icon:"fa-brands fa-swift"}),A,s(":")]),D]),P,Q])}const O=h(f,[["render",M],["__file","84.html.vue"]]),B=JSON.parse('{"path":"/swift/100-days-of-swiftui/84.html","title":"Day 84","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 84","description":"100 Days of SwiftUI > Day 84","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of SwiftUI > Day 84"},{"property":"og:description","content":"Day 84"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swiftui/84.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swiftui/84.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 84"}],["meta",{"property":"og:description","content":"100 Days of SwiftUI > Day 84"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 84\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 16, part 6","slug":"project-16-part-6","link":"#project-16-part-6","children":[{"level":3,"title":"Adding a context menu to an image","slug":"adding-a-context-menu-to-an-image","link":"#adding-a-context-menu-to-an-image","children":[]},{"level":3,"title":"Posting notifications to the lock screen","slug":"posting-notifications-to-the-lock-screen","link":"#posting-notifications-to-the-lock-screen","children":[]}]}],"git":{"createdTime":1709085577000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":6}]},"readingTime":{"minutes":5.98,"words":1794},"filePathRelative":"swift/100-days-of-swiftui/84.md","localizedDate":"2024년 2월 28일","excerpt":"\\n\\n<hr>\\n"}');export{O as comp,B as data};