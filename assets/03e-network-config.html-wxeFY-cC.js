import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as e,t as h,b as a,w as t,n as u,g as m,d as n,e as l,r as o,o as f}from"./app-U_bew1in.js";const g={},b={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},w=e("hr",null,null,-1),y=l(`<hr><h2 id="_1-network-interfaces" tabindex="-1"><a class="header-anchor" href="#_1-network-interfaces"><span>1. Network Interfaces</span></a></h2><p>A network interface is how the kernel links up the software side of networking to the hardware side. We&#39;ve already seen an example of this:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ifconfig</span> <span class="token parameter variable">-a</span></span>
<span class="line"><span class="token comment"># eth0      Link encap:Ethernet  HWaddr 1d:3a:32:24:4d:ce  </span></span>
<span class="line"><span class="token comment">#           inet addr:192.168.1.129  Bcast:192.168.1.255  Mask:255.255.255.0</span></span>
<span class="line"><span class="token comment">#           inet6 addr: fd60::21c:29ff:fe63:5cdc/64 Scope:Link</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-ifconfig-command" tabindex="-1"><a class="header-anchor" href="#the-ifconfig-command"><span>The ifconfig command</span></a></h3><p>The <code>ifconfig</code> tool allows us to configure our network interfaces, if we don&#39;t have any network interfaces set up, the kernel&#39;s device drivers and the network won&#39;t know how to talk to each other. Ifconfig runs on bootup and configures our interfaces through config files, but we can also manually modify them. The output of <code>ifconfig</code> shows the interface name on the left side and the right side shows detailed information. You&#39;ll most commonly see interfaces named eth0 (first Ethernet card in the machine), wlan0 (wireless interface), lo (loopback interface). The loopback interface is used to represent your computer, it just loops you back to yourself. This is good for debugging or connecting to servers running locally.</p>`,6),_=e("code",null,"ifconfig",-1),x=e("code",null,"HWaddr",-1),T=e("em",null,"MAC address of the interface",-1),N=e("code",null,"inet address",-1),C=e("code",null,"inet6",-1),P=e("code",null,"/etc/network/interfaces",-1),j=l(`<h3 id="to-create-an-interface-and-bring-it-up" tabindex="-1"><a class="header-anchor" href="#to-create-an-interface-and-bring-it-up"><span>To create an interface and bring it up</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ifconfig</span> eth0 <span class="token number">192.168</span>.2.1 netmask <span class="token number">255.255</span>.255.0 up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This assigns an IP address and netmask to the <code>eth0</code> interface and also turns it up.</p><h3 id="to-bring-up-or-down-an-interface" tabindex="-1"><a class="header-anchor" href="#to-bring-up-or-down-an-interface"><span>To bring up or down an interface</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ifup</span> eth0</span>
<span class="line"><span class="token function">ifdown</span> eth0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-ip-command" tabindex="-1"><a class="header-anchor" href="#the-ip-command"><span>The <code>ip</code> command</span></a></h3><p>The <code>ip</code> command also allows us to manipulate the networking stack of a system. Depending on the distribution you are using it may be the preferred method of manipulating your network settings.</p><p>Here are some examples of its use:</p><h3 id="to-show-interface-information-for-all-interfaces" tabindex="-1"><a class="header-anchor" href="#to-show-interface-information-for-all-interfaces"><span>To show interface information for all interfaces</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ip</span> <span class="token function">link</span> show</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="to-show-the-statistics-of-an-interface" tabindex="-1"><a class="header-anchor" href="#to-show-the-statistics-of-an-interface"><span>To show the statistics of an interface</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ip</span> <span class="token parameter variable">-s</span> <span class="token function">link</span> show eth0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="to-show-ip-addresses-allocated-to-interfaces" tabindex="-1"><a class="header-anchor" href="#to-show-ip-addresses-allocated-to-interfaces"><span>To show ip addresses allocated to interfaces</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ip</span> address show</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="to-bring-interfaces-up-and-down" tabindex="-1"><a class="header-anchor" href="#to-bring-interfaces-up-and-down"><span>To bring interfaces up and down</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> eth0 up</span>
<span class="line"><span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> eth0 down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="to-add-an-ip-address-to-an-interface" tabindex="-1"><a class="header-anchor" href="#to-add-an-ip-address-to-an-interface"><span>To add an IP address to an interface</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ip</span> address <span class="token function">add</span> <span class="token number">192.168</span>.1.1/24 dev eth0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Try changing the state of your network interfaces to either up or down and observe what happens.</p><p>Can you change your network interface&#39;s with both the <code>ifconfig</code> and <code>ip</code> commands ?</p><hr><h2 id="_2-route" tabindex="-1"><a class="header-anchor" href="#_2-route"><span>2. <code>route</code></span></a></h2><p>We&#39;ve already discussed viewing our routing tables with the <code>route</code> command, if you wanted to add or remove routes you can do so manually.</p><h3 id="add-a-new-route" tabindex="-1"><a class="header-anchor" href="#add-a-new-route"><span>Add a new route</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">192.168</span>.2.1/23 gw <span class="token number">10.11</span>.12.3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="delete-a-route" tabindex="-1"><a class="header-anchor" href="#delete-a-route"><span>Delete a route</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> route del <span class="token parameter variable">-net</span> <span class="token number">192.168</span>.2.1/23 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can also perform these changes with the <code>ip</code> command:</p><h3 id="to-add-a-route" tabindex="-1"><a class="header-anchor" href="#to-add-a-route"><span>To add a route</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ip</span> route <span class="token function">add</span> <span class="token number">192.168</span>.2.1/23 via <span class="token number">10.11</span>.12.3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="to-delete-a-route" tabindex="-1"><a class="header-anchor" href="#to-delete-a-route"><span>To delete a route</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ip</span> route delete <span class="token number">192.168</span>.2.1/23 via <span class="token number">10.11</span>.12.3</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token function">ip</span> route delete <span class="token number">192.168</span>.2.1/23</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are no exercises for this lesson but you can read more information on commands discussed here in the <code>man</code> pages</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">man</span> route</span>
<span class="line"><span class="token function">man</span> ip-route</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-dhclient" tabindex="-1"><a class="header-anchor" href="#_3-dhclient"><span>3. <code>dhclient</code></span></a></h2>`,36),I=e("code",null,"dhclient",-1),A=e("code",null,"dhclient.conf",-1),M=e("code",null,"dhclient.leases",-1),D=e("code",null,"dhclient.conf",-1),R=e("code",null,"dhclient.leases",-1),W=l(`<h3 id="to-obtain-a-fresh-ip" tabindex="-1"><a class="header-anchor" href="#to-obtain-a-fresh-ip"><span>To obtain a fresh IP</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> dhclient</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="_4-network-manager" tabindex="-1"><a class="header-anchor" href="#_4-network-manager"><span>4. Network Manager</span></a></h2><p>Of course if you wanted to have your system&#39;s networking up and running automatically there is something already in place for that. Most distributions utilize the NetworkManager daemon to configure their networks automatically.</p><p>You&#39;ll notice NetworkManager in the form of an applet somewhere on your desktop taskbar if you are using a GUI. As you can see it manages your network&#39;s hardware and connection information. For instance on startup, NetworkManager will gather network hardware information, search for connections to wireless, wired, etc. and then activates it.</p><p>There are also command-line tools to interact with NetworkManager:</p><h3 id="nm-tool" tabindex="-1"><a class="header-anchor" href="#nm-tool"><span><code>nm-tool</code></span></a></h3><p><code>nm-tool</code>s reports NetworkManager&#39;s state and it&#39;s devices</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">nm-tool</span>
<span class="line"><span class="token comment"># NetworkManager Tool</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># State: connected (global)</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># - Device: eth0  [Wired connection 1] -------------------------------------------</span></span>
<span class="line"><span class="token comment">#   Type:              Wired</span></span>
<span class="line"><span class="token comment">#   Driver:            pcnet32</span></span>
<span class="line"><span class="token comment">#   State:             connected</span></span>
<span class="line"><span class="token comment">#   Default:           yes</span></span>
<span class="line"><span class="token comment">#   HW Address:        12:3D:45:56:7D:CC</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment">#   Capabilities:</span></span>
<span class="line"><span class="token comment">#     Carrier Detect:  yes</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment">#   Wired Properties</span></span>
<span class="line"><span class="token comment">#     Carrier:         on</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment">#   IPv4 Settings:</span></span>
<span class="line"><span class="token comment">#     Address:         192.168.22.1</span></span>
<span class="line"><span class="token comment">#     Prefix:          24 (255.255.255.0)</span></span>
<span class="line"><span class="token comment">#     Gateway:         192.168.22.2</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment">#     DNS:             192.168.22.2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nmcli" tabindex="-1"><a class="header-anchor" href="#nmcli"><span><code>nmcli</code></span></a></h3><p>The <code>nmcli</code> command allows you to control and modify NetworkManager, see the manpage for more details.</p><hr><h2 id="_5-arp" tabindex="-1"><a class="header-anchor" href="#_5-arp"><span>5. <code>arp</code></span></a></h2><p>Remember when we lookup a MAC address with ARP, it first checks the locally stored ARP cache on our system, you can actually view this cache:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">arp</span>
<span class="line"><span class="token comment"># Address                  HWtype  HWaddress           Flags Mask            Iface</span></span>
<span class="line"><span class="token comment"># 192.168.22.1            ether   00:12:24:fc:12:cc   C                     eth0</span></span>
<span class="line"><span class="token comment"># 192.168.22.254          ether   00:12:45:f2:84:64   C                     eth0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The ARP cache is actually empty when a machine boots up, it gets populated as packets are being sent to other hosts. If we send a packet to a destination that isn&#39;t in the ARP cache, the following happens:</p><ol><li>The source host creates the Ethernet frame with an ARP request packet</li><li>The source host broadcasts this frame to the entire network</li><li>If one of the hosts on the network knows the correct MAC address, it will send a reply packet and frame containing the MAC address</li><li>The source host adds the IP to MAC address mapping to the ARP cache and then proceeds with sending the packet</li></ol><p>You can also view your arp cache via the ip command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ip</span> neighbour show</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Observe what happens to your ARP cache when you reboot your machine and then do something on the network.</p><hr>`,22);function H(r,L){const s=o("router-link"),c=o("VPCard"),i=o("FontIcon");return f(),p("div",null,[e("h1",b,[e("a",v,[e("span",null,h(r.$frontmatter.title)+" 관련",1)])]),e("nav",k,[e("ul",null,[e("li",null,[a(s,{to:"#_1-network-interfaces"},{default:t(()=>[n("1. Network Interfaces")]),_:1}),e("ul",null,[e("li",null,[a(s,{to:"#the-ifconfig-command"},{default:t(()=>[n("The ifconfig command")]),_:1})]),e("li",null,[a(s,{to:"#to-create-an-interface-and-bring-it-up"},{default:t(()=>[n("To create an interface and bring it up")]),_:1})]),e("li",null,[a(s,{to:"#to-bring-up-or-down-an-interface"},{default:t(()=>[n("To bring up or down an interface")]),_:1})]),e("li",null,[a(s,{to:"#the-ip-command"},{default:t(()=>[n("The ip command")]),_:1})]),e("li",null,[a(s,{to:"#to-show-interface-information-for-all-interfaces"},{default:t(()=>[n("To show interface information for all interfaces")]),_:1})]),e("li",null,[a(s,{to:"#to-show-the-statistics-of-an-interface"},{default:t(()=>[n("To show the statistics of an interface")]),_:1})]),e("li",null,[a(s,{to:"#to-show-ip-addresses-allocated-to-interfaces"},{default:t(()=>[n("To show ip addresses allocated to interfaces")]),_:1})]),e("li",null,[a(s,{to:"#to-bring-interfaces-up-and-down"},{default:t(()=>[n("To bring interfaces up and down")]),_:1})]),e("li",null,[a(s,{to:"#to-add-an-ip-address-to-an-interface"},{default:t(()=>[n("To add an IP address to an interface")]),_:1})])])]),e("li",null,[a(s,{to:"#_2-route"},{default:t(()=>[n("2. route")]),_:1}),e("ul",null,[e("li",null,[a(s,{to:"#add-a-new-route"},{default:t(()=>[n("Add a new route")]),_:1})]),e("li",null,[a(s,{to:"#delete-a-route"},{default:t(()=>[n("Delete a route")]),_:1})]),e("li",null,[a(s,{to:"#to-add-a-route"},{default:t(()=>[n("To add a route")]),_:1})]),e("li",null,[a(s,{to:"#to-delete-a-route"},{default:t(()=>[n("To delete a route")]),_:1})])])]),e("li",null,[a(s,{to:"#_3-dhclient"},{default:t(()=>[n("3. dhclient")]),_:1}),e("ul",null,[e("li",null,[a(s,{to:"#to-obtain-a-fresh-ip"},{default:t(()=>[n("To obtain a fresh IP")]),_:1})])])]),e("li",null,[a(s,{to:"#_4-network-manager"},{default:t(()=>[n("4. Network Manager")]),_:1}),e("ul",null,[e("li",null,[a(s,{to:"#nm-tool"},{default:t(()=>[n("nm-tool")]),_:1})]),e("li",null,[a(s,{to:"#nmcli"},{default:t(()=>[n("nmcli")]),_:1})])])]),e("li",null,[a(s,{to:"#_5-arp"},{default:t(()=>[n("5. arp")]),_:1})])])]),w,a(c,u(m({title:"Network Config",desc:"Learn about network configuration using Linux tools!",link:"https://linuxjourney.com/lesson/network-interfaces",logo:"https://linuxjourney.com/assets/network-configuration-6677cdfe892728ed77e3c4a97e24f5dbcb98fc2b117495b12faec2e156b8f5ed.png",background:"rgba(24, 188, 156, 0.2)"})),null,16),y,e("p",null,[n(`The status of interfaces, can be up or down, as you can guess if you wanted to "turn off" an interface you can set it to go down. The fields you'll probably look at the most in the `),_,n(" output is the "),x,n(" ("),T,n("), "),N,n(" (IPv4 address) and "),C,n(" (IPv6 address). Of course you can see that the subnet mask and broadcast address are there as well. You can also view interface information at "),a(i,{icon:"fas fa-folder-open"}),P,n(".")]),j,e("p",null,[n("We've discussed DHCP before and most often you will never need to statically set your IP addresses, subnet masks, etc. Instead you'll be using DHCP! The "),I,n(" starts up on boot and gets a list of network interfaces from the "),a(i,{icon:"fas fa-file-lines"}),A,n(" file. For each interface listed it tries to configure the interface using the DHCP protocol.")]),e("p",null,[n("In the "),a(i,{icon:"fas fa-file-lines"}),M,n(" file, dhclient keeps track of a list of leases across system reboots, after reading "),a(i,{icon:"fas fa-file-lines"}),D,n(", the "),a(i,{icon:"fas fa-file-lines"}),R,n(" file is read to let it know what leases it's already assigned.")]),W])}const F=d(g,[["render",H],["__file","03e-network-config.html.vue"]]),Y=JSON.parse('{"path":"/devops/linux-journey/03-networking-nomad/03e-network-config.html","title":"Networking Nomad > 03e. Network Config","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Networking Nomad > 03e. Network Config","description":"Linux Journey > Networking Nomad > 03e. Network Config","category":["Linux"],"tag":["crashcourse","linux","os","networking"],"head":[[{"meta":null},{"property":"og:title","content":"Linux Journey > Networking Nomad > 03e. Network Config"},{"property":"og:description","content":"03e. Network Config"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/devops/linux-journey/03-networking-nomad/03e-network-config.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/devops/linux-journey/03-networking-nomad/03e-network-config.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Networking Nomad > 03e. Network Config"}],["meta",{"property":"og:description","content":"Linux Journey > Networking Nomad > 03e. Network Config"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"os"}],["meta",{"property":"article:tag","content":"networking"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Networking Nomad > 03e. Network Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Network Interfaces","slug":"_1-network-interfaces","link":"#_1-network-interfaces","children":[{"level":3,"title":"The ifconfig command","slug":"the-ifconfig-command","link":"#the-ifconfig-command","children":[]},{"level":3,"title":"To create an interface and bring it up","slug":"to-create-an-interface-and-bring-it-up","link":"#to-create-an-interface-and-bring-it-up","children":[]},{"level":3,"title":"To bring up or down an interface","slug":"to-bring-up-or-down-an-interface","link":"#to-bring-up-or-down-an-interface","children":[]},{"level":3,"title":"The ip command","slug":"the-ip-command","link":"#the-ip-command","children":[]},{"level":3,"title":"To show interface information for all interfaces","slug":"to-show-interface-information-for-all-interfaces","link":"#to-show-interface-information-for-all-interfaces","children":[]},{"level":3,"title":"To show the statistics of an interface","slug":"to-show-the-statistics-of-an-interface","link":"#to-show-the-statistics-of-an-interface","children":[]},{"level":3,"title":"To show ip addresses allocated to interfaces","slug":"to-show-ip-addresses-allocated-to-interfaces","link":"#to-show-ip-addresses-allocated-to-interfaces","children":[]},{"level":3,"title":"To bring interfaces up and down","slug":"to-bring-interfaces-up-and-down","link":"#to-bring-interfaces-up-and-down","children":[]},{"level":3,"title":"To add an IP address to an interface","slug":"to-add-an-ip-address-to-an-interface","link":"#to-add-an-ip-address-to-an-interface","children":[]}]},{"level":2,"title":"2. route","slug":"_2-route","link":"#_2-route","children":[{"level":3,"title":"Add a new route","slug":"add-a-new-route","link":"#add-a-new-route","children":[]},{"level":3,"title":"Delete a route","slug":"delete-a-route","link":"#delete-a-route","children":[]},{"level":3,"title":"To add a route","slug":"to-add-a-route","link":"#to-add-a-route","children":[]},{"level":3,"title":"To delete a route","slug":"to-delete-a-route","link":"#to-delete-a-route","children":[]}]},{"level":2,"title":"3. dhclient","slug":"_3-dhclient","link":"#_3-dhclient","children":[{"level":3,"title":"To obtain a fresh IP","slug":"to-obtain-a-fresh-ip","link":"#to-obtain-a-fresh-ip","children":[]}]},{"level":2,"title":"4. Network Manager","slug":"_4-network-manager","link":"#_4-network-manager","children":[{"level":3,"title":"nm-tool","slug":"nm-tool","link":"#nm-tool","children":[]},{"level":3,"title":"nmcli","slug":"nmcli","link":"#nmcli","children":[]}]},{"level":2,"title":"5. arp","slug":"_5-arp","link":"#_5-arp","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":8}]},"readingTime":{"minutes":3.88,"words":1165},"filePathRelative":"devops/linux-journey/03-networking-nomad/03e-network-config.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{F as comp,Y as data};