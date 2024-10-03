import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,a as e,t as k,b as n,w as o,n as i,g as c,d as s,e as r,r as p,o as g}from"./app-U_bew1in.js";const b={},f={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},w={class:"table-of-contents"},v=e("hr",null,null,-1),S=r('<h2 id="project-11-part-one" tabindex="-1"><a class="header-anchor" href="#project-11-part-one"><span>Project 11, part one</span></a></h2><p>It’s time for another game project, but this time we’ll be doing something quite different: we <em>won’t</em> be using UIKit. Instead we’ll be using SpriteKit, which is Apple’s high-performance drawing toolkit that lets us build advanced 2D games with relative ease.</p><p>On one hand this means you’ll be learning a whole load of useful new skills, such as how to detect touches, how to add physics, and more. On the other hand, it can feel a bit disconcerting at first, because most of the UIKit knowledge you’ve accrued so far won’t come in use – you need to learn to adapt to the SpriteKit way of working.</p><p>This is where it becomes more important than ever to work hard. Here’s a quote from Michael Jordan, who knows more than his far share both about the importance of games and also the importance of hard work in the face of adversity:</p><blockquote><p>“I’ve missed more than 9000 shots in my career. I&#39;ve lost almost 300 games. 26 times, I&#39;ve been trusted to take the game winning shot and missed. I&#39;ve failed over and over and over again in my life. And that is why I succeed.”</p></blockquote><p>Success is something you need to fight for. Hopefully today will feel more like fun than fighting, but don’t be surprised if you come back to project 12 with a fresh interest in getting back to UIKit!</p><p><strong>Today you have three topics to work through, and you’ll learn about <code>SKSpriteNode</code>, <code>SKPhysicsBody</code>, and more.</strong></p><h3 id="setting-up" tabindex="-1"><a class="header-anchor" href="#setting-up"><span>Setting up</span></a></h3>',8),_={class:"hint-container details"},x=e("summary",null,"Setting up",-1),K=e("p",null,"This project is going to feel like a bit of a reset for you, because we're going to go back to basics. This isn't because I like repeating myself, but instead because you're going to learn a wholly new technology called SpriteKit.",-1),I=e("p",null,"So far, everything you've made has been based on UIKit, Apple's user interface toolkit for iOS. We've made several games with it, and it really is very powerful, but even UIKit has its limits – and 2D games aren't its strong suit.",-1),j=e("p",null,"A much better solution is called SpriteKit, and it's Apple's fast and easy toolkit designed specifically for 2D games. It includes sprites, fonts, physics, particle effects and more, and it's built into every iOS device. What's not to like?",-1),T=e("p",null,"So, this is going to be a long tutorial because you're going to learn an awful lot. To help keep you sane, I've tried to make the project as iterative as possible. That means we'll make a small change and discuss the results, then make another small change and discuss the results, until the project is finished.",-1),B=e("p",null,`And what are we building? Well, we're going to produce a game similar to pachinko, although a lot of people know it by the name "Peggle." To get started, create a new project in Xcode and choose Game. Name it Project11, set its Game Technology to be SpriteKit, then make sure all the checkboxes are deselected before saving it somewhere.`,-1),P=e("p",null,"Before we start, please configure your project so that it runs only for iPads in landscape mode.",-1),C=e("p",null,[e("strong",null,"Warning"),s(": When working with SpriteKit projects, I strongly recommend you use a real device for testing your projects because the iPad simulator is extraordinarily slow for games. If you don’t have a device, please choose the lowest-spec iPad simulator available to you instead, but be prepared for dreadful performance that is not at all indicative of a real device.")],-1),D=e("h3",{id:"falling-boxes-skspritenode-uitouch-skphysicsbody",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#falling-boxes-skspritenode-uitouch-skphysicsbody"},[e("span",null,[s("Falling boxes: "),e("code",null,"SKSpriteNode"),s(", "),e("code",null,"UITouch"),s(", "),e("code",null,"SKPhysicsBody")])])],-1),q={class:"hint-container details"},N=e("summary",null,"Falling boxes: SKSpriteNode, UITouch, SKPhysicsBody",-1),U=e("p",null,`The first thing you should do is run your game and see what a default SpriteKit template game looks like. You should see a large gray window saying "Hello, World!", and when you tap two spinning boxes should appear. In the bottom right is a node count (how many things are on screen right now) and a frame rate. You're aiming for 60 frames per second all the time, if possible.`,-1),W=e("code",null,"GameScene.swift",-1),z=r(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">SpriteKit</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">GameScene</span><span class="token punctuation">:</span> <span class="token class-name">SKScene</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">didMove</span><span class="token punctuation">(</span>to view<span class="token punctuation">:</span> <span class="token class-name">SKView</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">touchesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> touches<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UITouch</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That removes almost all the code, because it’s just not needed.</p><p>SpriteKit’s equivalent of Interface Builder is called the Scene Editor, and it’s where that big “Hello World” label is. Select GameScene.sks to open the scene editor now, then click on the “Hello World” label and delete it.</p><p>While you’re in the scene editor, there’s one more change I’d like to make, and it will help simplify our positioning slightly. With the scene selected, look in the attributes inspector (note: its icon is different here!) for Anchor Point. This determines what coordinates SpriteKit uses to position children and it’s X:0.5 Y:0.5 by default.</p><p>This is <em>different</em> to UIKit: it means “position me based on my center”, whereas UIKit positions things based on their top-left corner. This is usually fine, but when working with the main scene it’s easiest to set this value to X:0 Y:0. So, please make that change now – anchor point should 0 for both X and Y.</p><p>Note: SpriteKit considers Y:0 to be the bottom of the screen whereas UIKit considers it to be the top – hurray for uniformity!</p><p>I’d also like you to change the size of the scene, which is just above the anchor point. This is probably 750x1334 by default; please change it to 1024x768 to match iPad landscape size.</p><p>Tip: The 9.7-inch iPad is 1024 points wide and 768 high, but the 10.5-inch and 12.9-inch are both larger. Helpfully, SpriteKit takes care of this for us: we just asked for a 1024x768 canvas and it will give us one regardless of what device our game runs on – nice!</p><p>The last change I’d like you to make is to select Actions.sks and tap your backspace button to delete it – select “Move to Trash” when Xcode asks you what you want to do.</p><p>All these changes have effectively cleaned the project, resetting it back to a vanilla state that we can build on.</p><p>With the template stuff deleted, I&#39;d like you to import the assets for the project. If you haven&#39;t already downloaded the code for this project, please do so now. You should copy the entire Content folder from the example project into your own, making sure the &quot;Copy items if needed&quot; box is checked.</p><p>Let&#39;s kick off this project by ditching the plain background and replacing it with a picture. If you want to place an image in your game, the class to use is called <code>SKSpriteNode</code>, and it can load any picture from your app bundle just like <code>UIImage</code>.</p><p>To place a background image, we need to load the file called background.jpg, then position it in the center of the screen. Remember, unlike UIKit SpriteKit positions things based on their center – i.e., the point 0,0 refers to the horizontal and vertical center of a node. And also unlike UIKit, SpriteKit&#39;s Y axis starts at the bottom edge, so a higher Y number places a node higher on the screen. So, to place the background image in the center of a landscape iPad, we need to place it at the position X:512, Y:384.</p><p>We&#39;re going to do two more things, both of which are only needed for this background. First, we&#39;re going to give it the blend mode <code>.replace</code>. Blend modes determine how a node is drawn, and SpriteKit gives you many options. The <code>.replace</code> option means &quot;just draw it, ignoring any alpha values,&quot; which makes it fast for things without gaps such as our background. We&#39;re also going to give the background a <code>zPosition</code> of -1, which in our game means &quot;draw this behind everything else.&quot;</p><p>To add any node to the current screen, you use the <code>addChild()</code> method. As you might expect, SpriteKit doesn&#39;t use <code>UIViewController</code> like our UIKit apps have done. Yes, there is a view controller in your project, but it&#39;s there to host your SpriteKit game. The equivalent of screens in SpriteKit are called <em>scenes</em>.</p><p>When you add a node to your scene, it becomes part of the node tree. Using <code>addChild()</code> you can add nodes to other nodes to make a more complicated tree, but in this game we&#39;re going to keep it simple.</p><p>Add this code to the <code>didMove(to:)</code> method, which is sort of the equivalent of SpriteKit&#39;s <code>viewDidLoad()</code> method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> background <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;background.jpg&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">background<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">384</span><span class="token punctuation">)</span></span>
<span class="line">background<span class="token punctuation">.</span>blendMode <span class="token operator">=</span> <span class="token punctuation">.</span>replace</span>
<span class="line">background<span class="token punctuation">.</span>zPosition <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line"><span class="token function">addChild</span><span class="token punctuation">(</span>background<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run the app now you&#39;ll see a dark blue image for the background rather than plain gray – hardly a massive improvement, but this is just the beginning.</p><figure><img src="https://www.hackingwithswift.com/img/books/hws/11-1.png" alt="The very start of our game just has a large plain background image. Don&#39;t worry, it gets more fun – honest!" tabindex="0" loading="lazy"><figcaption>The very start of our game just has a large plain background image. Don&#39;t worry, it gets more fun – honest!</figcaption></figure><p>Let&#39;s do something a bit more interesting, so add this to the <code>touchesBegan()</code> method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token keyword">let</span> touch <span class="token operator">=</span> touches<span class="token punctuation">.</span>first <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> location <span class="token operator">=</span> touch<span class="token punctuation">.</span><span class="token function">location</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> box <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> size<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    box<span class="token punctuation">.</span>position <span class="token operator">=</span> location</span>
<span class="line">    <span class="token function">addChild</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We haven&#39;t used <code>touchesBegan()</code> before, so the first two lines needs to be explained. This method gets called (in <code>UIKit</code> and SpriteKit) whenever someone starts touching their device. It&#39;s possible they started touching with multiple fingers at the same time, so we get passed a new data type called <code>Set</code>. This is just like an array, except each object can appear only once.</p><p>We want to know where the screen was touched, so we use a conditional typecast plus <code>if let</code> to pull out any of the screen <code>touches</code> from the touches set, then use its <code>location(in:)</code> method to find out where the screen was touched in relation to <code>self</code> - i.e., the game scene. <code>UITouch</code> is a UIKit class that is also used in SpriteKit, and provides information about a touch such as its position and when it happened.</p><p>The third line is also new, but it&#39;s still <code>SKSpriteNode</code>. We&#39;re just writing some example code for now, so this line generates a node filled with a color (red) at a size (64x64). The <code>CGSize</code> struct is new, but also simple: it just holds a width and a height in a single structure.</p><p>The code sets the new box&#39;s position to be where the tap happened, then adds it to the scene. No more talk: press <kbd>Cmd</kbd>+<kbd>R</kbd> to make sure this all works, then tap around the screen to make boxes appear.</p><p>OK, I admit: that&#39;s still quite boring. Let&#39;s make it even more interesting – are you ready to see quite how powerful SpriteKit is? Just before setting the position of our new box, add this line:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">box<span class="token punctuation">.</span>physicsBody <span class="token operator">=</span> <span class="token class-name">SKPhysicsBody</span><span class="token punctuation">(</span>rectangleOf<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>And just before the end of <code>didMove(to:)</code>, add this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">physicsBody <span class="token operator">=</span> <span class="token class-name">SKPhysicsBody</span><span class="token punctuation">(</span>edgeLoopFrom<span class="token punctuation">:</span> frame<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The first line of code adds a physics body to the box that is a rectangle of the same size as the box. The second line of code adds a physics body to the whole scene that is a line on each edge, effectively acting like a container for the scene.</p><p>If you run the scene now, I hope you can&#39;t help but be impressed: you can tap on the screen to create boxes, but now they&#39;ll fall to the ground and bounce off. They&#39;ll also stack up as you tap more often, and fall over realistically if your aim isn&#39;t spot on.</p><p>This is the power of SpriteKit: it&#39;s so fast and easy to make games that there really is nothing holding you back. But we&#39;re just getting warmed up!</p>`,33),R=e("h3",{id:"bouncing-balls-circleofradius",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bouncing-balls-circleofradius"},[e("span",null,[s("Bouncing balls: "),e("code",null,"circleOfRadius")])])],-1),G={class:"hint-container details"},O=e("summary",null,"Bouncing balls: circleOfRadius",-1),A=r(`<p>You&#39;re not going to get rich out of red rectangles, so let&#39;s use balls instead. Take the box code out (everything after <code>let location =</code> in <code>touchesBegan()</code>) and replace it with this instead:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> ball <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;ballRed&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">ball<span class="token punctuation">.</span>physicsBody <span class="token operator">=</span> <span class="token class-name">SKPhysicsBody</span><span class="token punctuation">(</span>circleOfRadius<span class="token punctuation">:</span> ball<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">)</span></span>
<span class="line">ball<span class="token punctuation">.</span>physicsBody<span class="token operator">?</span><span class="token punctuation">.</span>restitution <span class="token operator">=</span> <span class="token number">0.4</span></span>
<span class="line">ball<span class="token punctuation">.</span>position <span class="token operator">=</span> location</span>
<span class="line"><span class="token function">addChild</span><span class="token punctuation">(</span>ball<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are two new things there. First, we&#39;re using the <code>circleOfRadius</code> initializer for <code>SKPhysicsBody</code> to add circular physics to this ball, because using rectangles would look strange. Second, we&#39;re giving the ball&#39;s physics body a restitution (bounciness) level of 0.4, where values are from 0 to 1.</p><p>Note: the physics body of a node is optional, because it might not exist. We know it exists because we just created it, so it’s not uncommon to see <code>physicsBody!</code> to force unwrap the optional.</p><p>When you run the game now, you&#39;ll be able to tap on the screen to drop bouncy balls. It&#39;s fractionally more interesting, but let&#39;s face it: this is still a dreadful game.</p><p>To make it more exciting we&#39;re going to add something for the balls to bounce off. In the Content folder I provided you with is a picture called &quot;bouncer.png&quot;, so we&#39;re going to place that in the game now.</p><p>Just before the end of the <code>didMove(to:)</code> method, add this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> bouncer <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;bouncer&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">bouncer<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">bouncer<span class="token punctuation">.</span>physicsBody <span class="token operator">=</span> <span class="token class-name">SKPhysicsBody</span><span class="token punctuation">(</span>circleOfRadius<span class="token punctuation">:</span> bouncer<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">)</span></span>
<span class="line">bouncer<span class="token punctuation">.</span>physicsBody<span class="token operator">?</span><span class="token punctuation">.</span>isDynamic <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token function">addChild</span><span class="token punctuation">(</span>bouncer<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There&#39;s a new data type in there called <code>CGPoint</code>, but, like <code>CGSize</code>, it&#39;s very simple: it just holds X/Y co-ordinates. Remember, SpriteKit&#39;s positions start from the center of nodes, so X:512 Y:0 means &quot;centered horizontally on the bottom edge of the scene.&quot;</p><p>Also new is the <code>isDynamic</code> property of a physics body. When this is true, the object will be moved by the physics simulator based on gravity and collisions. When it&#39;s false (as we&#39;re setting it) the object will still collide with other things, but it won&#39;t ever be moved as a result.</p><p>Using this code, the bouncer node will be placed on the screen and your balls can collide with it – but it won&#39;t move. Give it a try now.</p><p>Adding a bouncer took five lines of code, but our game needs more than one bouncer. In fact, I want five of them, evenly distributed across the screen. Now, you <em>could</em> just copy and paste the code five times then change the positions, but I hope you realize there&#39;s a better way: creating a method that does all the work, then calling that method each time we want a bouncer.</p><p>The method code itself is nearly identical to what you just wrote, with the only change being that we need to position the box at the <code>CGPoint</code> specified as a parameter:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">makeBouncer</span><span class="token punctuation">(</span>at position<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> bouncer <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;bouncer&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    bouncer<span class="token punctuation">.</span>position <span class="token operator">=</span> position</span>
<span class="line">    bouncer<span class="token punctuation">.</span>physicsBody <span class="token operator">=</span> <span class="token class-name">SKPhysicsBody</span><span class="token punctuation">(</span>circleOfRadius<span class="token punctuation">:</span> bouncer<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">)</span></span>
<span class="line">    bouncer<span class="token punctuation">.</span>physicsBody<span class="token operator">?</span><span class="token punctuation">.</span>isDynamic <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token function">addChild</span><span class="token punctuation">(</span>bouncer<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With that method in place, you can place a bouncer in one line of code: just call <code>makeBouncer(at:)</code> with a position, and it will be placed and given a non-dynamic physics body automatically.</p><p>You might have noticed that the parameter to <code>makeBouncer(at:)</code> has two names: <code>at</code> and <code>position</code>. This isn’t required, but it makes your code more readable: the first name is the one you use when <em>calling</em> the method, and the second name is the one you use <em>inside</em> the method. That is, you write <code>makeBouncer(at:)</code> to call it, but inside the method the parameter is named <code>position</code> rather than <code>at</code>. This is identical to <code>cellForRowAt</code> <code>indexPath</code> in table views.</p><p>To show this off, delete the bouncer code from <code>didMove(to:)</code>, and replace it with this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token function">makeBouncer</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">makeBouncer</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">makeBouncer</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">makeBouncer</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">768</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">makeBouncer</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">1024</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run the game now you&#39;ll see five bouncers evenly spread across the screen, and the balls you drop bounce off any of them. It&#39;s still not a game, but we&#39;re getting there. Now to add something between the bouncers…</p>`,19),Y=e("hr",null,null,-1);function F(u,V){const a=p("router-link"),t=p("VPCard"),l=p("VidStack"),d=p("FontIcon");return g(),m("div",null,[e("h1",f,[e("a",y,[e("span",null,k(u.$frontmatter.title)+" 관련",1)])]),e("nav",w,[e("ul",null,[e("li",null,[n(a,{to:"#project-11-part-one"},{default:o(()=>[s("Project 11, part one")]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#setting-up"},{default:o(()=>[s("Setting up")]),_:1})]),e("li",null,[n(a,{to:"#falling-boxes-skspritenode-uitouch-skphysicsbody"},{default:o(()=>[s("Falling boxes: SKSpriteNode, UITouch, SKPhysicsBody")]),_:1})]),e("li",null,[n(a,{to:"#bouncing-balls-circleofradius"},{default:o(()=>[s("Bouncing balls: circleOfRadius")]),_:1})])])])])]),v,n(t,i(c({title:"100 Days of Swift - Day 45",desc:"Project 11, part one",link:"https://www.hackingwithswift.com/100/45",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),S,e("details",_,[x,n(t,i(c({title:"100 Days of Swift - Day 45 - Setting up",desc:"Setting up",link:"https://hackingwithswift.com/read/11/1/setting-up",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),n(l,{src:"youtube/PPKU1_k86tQ"}),K,I,j,T,B,P,C]),D,e("details",q,[N,n(t,i(c({title:"100 Days of Swift - Day 45 - Falling boxes: SKSpriteNode, UITouch, SKPhysicsBody",desc:"Falling boxes: SKSpriteNode, UITouch, SKPhysicsBody",link:"https://hackingwithswift.com/read/11/2/falling-boxes-skspritenode-uitouch-skphysicsbody",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),n(l,{src:"youtube/f1Bf1ORCLb4"}),U,e("p",null,[s("From the project navigator please find and open "),n(d,{icon:"fa-brands fa-swift"}),W,s(", and replace its entire contents with this:")]),z]),R,e("details",G,[O,n(t,i(c({title:"100 Days of Swift - Day 45 - Bouncing balls: circleOfRadius",desc:"Bouncing balls: circleOfRadius",link:"https://hackingwithswift.com/read/11/3/bouncing-balls-circleofradius",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),n(l,{src:"youtube/f-qio_g_D2Y"}),A]),Y])}const H=h(b,[["render",F],["__file","45.html.vue"]]),L=JSON.parse('{"path":"/swift/100-days-of-swift/45.html","title":"Day 45","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 45","description":"100 Days of Swift > Day 45","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 45"},{"property":"og:description","content":"Day 45"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/45.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/45.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 45"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 45"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.hackingwithswift.com/img/books/hws/11-1.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 45\\",\\"image\\":[\\"https://www.hackingwithswift.com/img/books/hws/11-1.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 11, part one","slug":"project-11-part-one","link":"#project-11-part-one","children":[{"level":3,"title":"Setting up","slug":"setting-up","link":"#setting-up","children":[]},{"level":3,"title":"Falling boxes: SKSpriteNode, UITouch, SKPhysicsBody","slug":"falling-boxes-skspritenode-uitouch-skphysicsbody","link":"#falling-boxes-skspritenode-uitouch-skphysicsbody","children":[]},{"level":3,"title":"Bouncing balls: circleOfRadius","slug":"bouncing-balls-circleofradius","link":"#bouncing-balls-circleofradius","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":10}]},"readingTime":{"minutes":9.8,"words":2940},"filePathRelative":"swift/100-days-of-swift/45.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{H as comp,L as data};