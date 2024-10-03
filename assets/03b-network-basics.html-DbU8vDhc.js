import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as e,t as d,b as t,w as o,n as c,g as p,e as u,r,o as m,d as s}from"./app-U_bew1in.js";const w={},y={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"},f=e("hr",null,null,-1),P=u('<hr><h2 id="_1-network-basics" tabindex="-1"><a class="header-anchor" href="#_1-network-basics"><span>1. Network Basics</span></a></h2><p>Let&#39;s look at a typical home network, you have a few different components.</p><ul><li>ISP: Your internet service provider, the company you pay to get Internet at your house.</li><li>Router: The router allows each machine on your network to connect to the Internet. In most modern routers, you can connect via wireless or an Ethernet cable.</li><li>WAN: Wide Area Network, this is what we call the network that encompasses everything between your router and a wider network such the Internet.</li><li>WLAN: Wireless Local Area Network, this is the network between your router and any wireless devices you may have such as laptops.</li><li>LAN: Local Area Network, this is the network between your router and any wired devices such as Desktop PCs.</li><li>Hosts: Each machine on a network is known as a host.</li></ul><p>The data and information that gets transmitted through networks are known as packets and by the end of the Networking Nomad section, you&#39;ll understand in detail how a packet travels to and from hosts.</p><hr><h2 id="_2-osi-model" tabindex="-1"><a class="header-anchor" href="#_2-osi-model"><span>2. OSI Model</span></a></h2><p>Before we can look at some practical networking stuff, we have to go over some boring jargon that you&#39;ve probably heard of before. The OSI (<em>Open Systems Interconnection</em>) model is a theoretical model of networking. This model shows us how a packet traverses through a network in seven different layers. I won&#39;t get into specifics of this model, since most of these networking courses will be focused on the TCP/IP model, but it should be mentioned that such a theoretical networking model exists and has actually played a large part in the TCP/IP networking model that we use today.</p><p>Read more about the OSI model: <a href="https://en.wikipedia.org/wiki/OSI_model" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/OSI_model</a></p><hr><h2 id="_3-tcp-ip-model" tabindex="-1"><a class="header-anchor" href="#_3-tcp-ip-model"><span>3. TCP/IP Model</span></a></h2><p>The OSI model gave birth to what eventually became the TCP/IP model and this model is actually what the Internet is based off of. It is the actual implementation of networking. The TCP/IP model uses the TCP/IP protocol suite, which we just commonly refer to as TCP/IP. These protocols work together to specify how data should be gathered, addressed, transmitted and routed through a network. Using the TCP/IP model, we can see how these protocols are used to show the breakdown of how a packet travels through the network.</p><h3 id="application-layer" tabindex="-1"><a class="header-anchor" href="#application-layer"><span>Application Layer</span></a></h3><p>The top layer of the TCP/IP model. It determines how your computer&#39;s programs (such as your web browser) interface with the transport layer services to view the data that gets sent or received.</p><p>This layer uses:</p><ul><li>HTTP (<em>Hypertext Transfer Protocol</em>): used for the webpages on the Internet.</li><li>SMTP (<em>Simple Mail Transfer Protocol</em>): electronic mail (email) transmission</li></ul><h3 id="transport-layer" tabindex="-1"><a class="header-anchor" href="#transport-layer"><span>Transport Layer</span></a></h3><p>How data will be transmitted, includes checking the correct ports, the integrity of the data, and basically delivering our packets.</p><p>This layer uses:</p><ul><li>TCP (<em>Transmission Control Protocol</em>): reliable data delivery</li><li>UDP (<em>User Datagram Protocol</em>): unreliable data delivery</li></ul><h3 id="network-layer" tabindex="-1"><a class="header-anchor" href="#network-layer"><span>Network Layer</span></a></h3><p>This layers specifies how to move packets between hosts and across networks.</p><p>This layer uses:</p><ul><li>IP (<em>Internet Protocol</em>): Helps route packets from one machine to another.</li><li>ICMP (<em>Internet Control Message Protocol</em>): Helps tell us what is going on, such as error messages and debugging information.</li></ul><h3 id="link-layer" tabindex="-1"><a class="header-anchor" href="#link-layer"><span>Link Layer</span></a></h3><p>This layer specifies how to send data across a physical piece of hardware. Such as data travelling through Ethernet, fiber, etc.</p><p>The lists above of protocols each layer uses is not extensive and you&#39;ll encounter many other protocols that come into play.</p><p>In the following lessons, we will dive through each of these layers and discuss how our packet traverses through the network in the eyes of the TCP/IP model (there are many perspectives on how a packet travels across networks, we won&#39;t look at them all, but be aware that they exist).</p><hr><h2 id="_4-network-addressing" tabindex="-1"><a class="header-anchor" href="#_4-network-addressing"><span>4. Network Addressing</span></a></h2><p>Before we jump into seeing how a packet moves across a network, we have to familiarize ourselves with some terminology. When you mail a letter, you must know who it is being sent to and where it is coming from. Packets need the same information, our hosts and other hosts are identified using MAC (media access control) addresses and IP addresses, to make it easier on us humans we use hostnames to identify a host.</p><h3 id="mac-addresses" tabindex="-1"><a class="header-anchor" href="#mac-addresses"><span>MAC Addresses</span></a></h3><p>A MAC address is a unique identifier used as a hardware address. This address will never change. When you want to get access to the Internet, your machine needs to have a device called a network interface card. This network adapter has its own hardware address that&#39;s used to identify your machine. A MAC address for an Ethernet device looks something like this <code>00:C4:B5:45:B2:43</code>. MAC addresses are given to network adapters when they are manufactured. Each manufacturer has an organizationally unique identifier (OUI) to identify them as the manufacturer. This OUI is denoted by the first 3 bytes of the MAC address. For example, Dell has <code>00-14-22</code>, so a network adapter from Dell could have a MAC address like: <code>00-14-22-34-B2-C2</code>.</p><h3 id="ip-addresses" tabindex="-1"><a class="header-anchor" href="#ip-addresses"><span>IP Addresses</span></a></h3><p>An IP Address is used to identify a device on a network, they are hardware independent and can vary in syntax depending on if you are using IPv4 or IPv6 (more on this later). For now we&#39;ll assume you are using <code>IPv4</code>, so a typical IP address would look like: <code>10.24.12.4</code>. IP addresses are used with the software side of networking. Anytime a system is connected to the Internet it should have an IP address. They can also change if your network changes and are unique to the entire Internet (this isn&#39;t always the case once we learn about NAT).</p><p>Remember it takes both software and hardware to move packets across networks, so we have two identifiers for each, MAC (hardware) and IP (software).</p><h3 id="hostnames" tabindex="-1"><a class="header-anchor" href="#hostnames"><span>Hostnames</span></a></h3><p>One last way to identify your machines is through hostname. Hostnames take your IP address and allow you to tie that address to a human readable name. Instead of remembering <code>192.12.41.4</code> you can just remember <code>myhost.com</code>.</p><hr><h2 id="_5-application-layer" tabindex="-1"><a class="header-anchor" href="#_5-application-layer"><span>5. Application Layer</span></a></h2><p>Let&#39;s say I wanted to send an email to Patty. We&#39;ll go through each of the TCP/IP layers to see this in action.</p><p>Remember that packets are used to transmit data across networks, a packet consists of a header and payload. The header contains information about where the packet is going and where it came from. The payload is the actual data that is being transferred. As our packet traverses the network, each layer adds a bit of information to the header of the packet. Also keep in mind that different layers use a different term for our &quot;packet&quot;. In the transport layer we essentially encapsulate our data in a segment and in the link layer we refer to this as a frame, but just know that packet can be used in regards to the same thing.</p><p>First we start off in the application layer. When we send our email through our email client, the application layer will encapsulate this data. The application layer talks to the transport layer through a specified port and through this port it sends its data. We want to send an email through the application layer protocol SMTP (<em>simple mail transfer protocol</em>). The data is sent through our transport protocol which opens a connection to this port (port <code>25</code> is used for SMTP), so we get this data sent through this port and that data is sent to the Transport layer to be encapsulated into segments.</p><hr><h2 id="_6-transport-layer" tabindex="-1"><a class="header-anchor" href="#_6-transport-layer"><span>6. Transport Layer</span></a></h2><p>The transports layer helps us transfer our data in a way networks can read it. It breaks our data into chunks that will be transported and put back together in the correct order. These chunks are known as segments. Segments make it easier to transport data across networks.</p><h3 id="ports" tabindex="-1"><a class="header-anchor" href="#ports"><span>Ports</span></a></h3><p>Even though we know where we are sending our data via IP addresses, they aren&#39;t specific enough to send our data to a certain processes or services. Services such as HTTP use a communication channel via ports. If we want to send webpage data, we need to send it over the HTTP port (port <code>80</code>). In addition to forming segments, the transport layer will also attach the source and destination ports to the segment, so when the receiver gets the final packet it will know what port to use.</p><h3 id="udp" tabindex="-1"><a class="header-anchor" href="#udp"><span>UDP</span></a></h3><p>There are two popular transport protocols UDP and TCP. We&#39;ll briefly discuss UDP and spend most of our time on TCP, since it&#39;s the most commonly used.</p><p>UDP is not a reliable method of transporting data, in fact it doesn&#39;t really care if you get all of your original data. This may sound terrible, but it does have its uses, such as for media streaming, it&#39;s ok if you lose some frames in return you get your data a little faster.</p><h3 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp"><span>TCP</span></a></h3><p>TCP provides a reliable connection-oriented stream of data. TCP uses ports to send data to and from hosts. An application opens up a connection from one port on its host to another port on a remote host. In order to establish the connection, we use the TCP handshake.</p><ul><li>The client (connecting process) sends a SYN segment to the server to request a connection</li><li>Server sends the client a SYN-ACK segment to acknowledge the client&#39;s connection request</li><li>Client sends an ACK to the server to acknowledge the server&#39;s connection request</li></ul><p>Once this connection is established, data can be exchanged over a TCP connection. The data is sent over in different segments and are tracked with TCP sequence numbers so they can be arranged in the correct order when they are delivered. In our email example, the transport layer attaches the destination port (<code>25</code>) to the source port of the source host.</p><hr><h2 id="_7-network-layer" tabindex="-1"><a class="header-anchor" href="#_7-network-layer"><span>7. Network Layer</span></a></h2><p>The Network layer determines the routing of our packets from our source host to a destination host. Fortunately in our example, our packet is only traveling within the same network, but the Internet is made up of many networks. These smaller networks that make up the Internet are known as subnets. All subnets connect to each other in some way, which is why we are able to get to www.google.com even though it&#39;s on its own network. I won&#39;t go into detail as we have a whole course dedicated to subnets, but for now in regards to our Network layer, know that the IP addresses define the rules to travel to different subnets.</p><p>In the network layer, it receives the segment coming from the transport layer and encapsulates this segment in an IP packet then attaches the IP address of the source host and the IP address of the destination host to the packet header. So at this point, our packet has information about where it is going and where it came from. Now it sends our packet to the physical hardware layer.</p><hr><h2 id="_8-link-layer" tabindex="-1"><a class="header-anchor" href="#_8-link-layer"><span>8. Link Layer</span></a></h2><p>At the bottom of the TCP/IP model sits the Link Layer. This layer is the hardware specific layer.</p><p>In the link layer, our packet is encapsulated once more into something called a frame. The frame header attaches the source and destination MAC addresses of our hosts, checksums and packet separators so that the receiver can tell when a packet ends.</p><p>Fortunately we are on the same network, so our packet won&#39;t have to travel too far. First, the link layer attaches my source MAC address to the frame header, but it needs to know Patty&#39;s MAC address as well. How does it know that and how do I find it since it&#39;s not on the Internet? We use ARP!</p><h3 id="arp-address-resolution-protocol" tabindex="-1"><a class="header-anchor" href="#arp-address-resolution-protocol"><span>ARP (Address Resolution Protocol)</span></a></h3><p>ARP finds the MAC address associated with an IP address. ARP is used within the same network. If Patty was not on the same network, we would use a routing system to determine the next router that would receive the packet and once we were on the same network, we could use ARP.</p><p>Once we are on the same network, systems first use the ARP look-up table that stores information about what IP addresses are associated with what MAC address. If the value is not there, then ARP is used. Then the system will send a broadcast message to the network using the ARP protocol to find out which host has IP <code>10.10.1.4</code>. A broadcast message is a special message that is sent to all hosts on a network (aptly named for sending a broadcast). Any machine with the requested IP address will reply with an ARP packet containing the IP address and the MAC address.</p><p>Now that we have all the necessary data we need, IP address and MAC addresses, our link layer forwards this frame through our network interface card, out to the next device and finds Patty&#39;s network. This step is a little more complex than how I just explained it, but we will discuss more details in the Routing course.</p><p>And there it is a simple (or not so simple) packet traversal down the TCP/IP layer. Keep in mind that packets don&#39;t travel in a one way fashion like this. We haven&#39;t even gotten to Patty&#39;s network yet! When travelling through networks, it requires going through the TCP/IP model at least twice before any data is sent or received. In reality, the way this packet looks would be something like this:</p><h3 id="packet-traversal" tabindex="-1"><a class="header-anchor" href="#packet-traversal"><span>Packet Traversal</span></a></h3><ol><li>Pete sends Patty an email: this data gets sent to the transport layer.</li><li>The transport layer encapsulates the data into a TCP or UDP header to form a segment, the segment attaches the destination and source TCP or UDP port, then the segment is sent to the network layer.</li><li>The network layer encapsulates the TCP segment inside an IP packet, it attaches the source and destination IP address. Then routes the packet to the link layer.</li><li>The packet then reaches Pete&#39;s physical hardware and gets encapsulated in a frame. The 4ource and destination MAC address get added to the frame.</li><li>Patty&#39;s receives this data frame through her physical layer and checks each frame for data integrity, then de-encapsulates the frame contents and sends the IP packet to the network layer.</li><li>The network layer reads the packet to find the source and destination IP that was previously attached. It checks if its IP is the same as the destination IP, which it is! It de-encapsulates the packet and sends the segment to the transport layer.</li><li>The transport layer de-encapsulates the segments, checks the TCP or UDP port numbers and makes a connection to the application layer based on those port numbers.</li><li>The application layer receives the data from the transport layer on the port that was specified and presents it to Patty in the form of the final email message</li></ol><hr><h2 id="_9-dhcp-overview" tabindex="-1"><a class="header-anchor" href="#_9-dhcp-overview"><span>9. DHCP Overview</span></a></h2><p>An important networking concept that we did not go over yet is DHCP (<em>Dynamic Host Configuration Protocol</em>)</p><p>DHCP assigns IP addresses, subnet masks and gateways to our machines. For example, let&#39;s say you have a cell phone and you want to get a cell phone number to start talking to people. You have to call up your phone carrier and they will give you a number. As long as your pay your bills you can keep using your phone. DHCP is the phone carrier in this case, it gives you an IP address so that you can talk to other IP addresses. You are also leased an IP address, these last for a certain period of time, then will get renewed depending on how you have your lease settings.</p><p>DHCP is great for many reasons, it allows a network administrator to not worry about assigning IP addresses and it also prevents them from setting up duplicate IP addresses. Every physical network should have its own DHCP server so that a host can request an IP address. In a regular home setting, the router usually acts as the DHCP server.</p><p>The way DHCP gets all your dynamic host information is:</p><ol><li>DHCP DISCOVER: This message is broadcasted to search for a DHCP server.</li><li>DHCP OFFER: The DHCP server in the network replies with an offer message. The offer contains a packet with DHCP lease time, subnet mask, IP address, etc.</li><li>DHCP REQUEST: The client sends out another broadcast to let all DHCP servers know which offer it accepted.</li><li>DHCP ACK: Acknowledgement is sent by the server.</li></ol><p>DHCP gets more involved than this, but this is the gist of it.</p><hr>',80);function v(n,b){const a=r("router-link"),i=r("VPCard");return m(),h("div",null,[e("h1",y,[e("a",k,[e("span",null,d(n.$frontmatter.title)+" 관련",1)])]),e("nav",g,[e("ul",null,[e("li",null,[t(a,{to:"#_1-network-basics"},{default:o(()=>[s("1. Network Basics")]),_:1})]),e("li",null,[t(a,{to:"#_2-osi-model"},{default:o(()=>[s("2. OSI Model")]),_:1})]),e("li",null,[t(a,{to:"#_3-tcp-ip-model"},{default:o(()=>[s("3. TCP/IP Model")]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#application-layer"},{default:o(()=>[s("Application Layer")]),_:1})]),e("li",null,[t(a,{to:"#transport-layer"},{default:o(()=>[s("Transport Layer")]),_:1})]),e("li",null,[t(a,{to:"#network-layer"},{default:o(()=>[s("Network Layer")]),_:1})]),e("li",null,[t(a,{to:"#link-layer"},{default:o(()=>[s("Link Layer")]),_:1})])])]),e("li",null,[t(a,{to:"#_4-network-addressing"},{default:o(()=>[s("4. Network Addressing")]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#mac-addresses"},{default:o(()=>[s("MAC Addresses")]),_:1})]),e("li",null,[t(a,{to:"#ip-addresses"},{default:o(()=>[s("IP Addresses")]),_:1})]),e("li",null,[t(a,{to:"#hostnames"},{default:o(()=>[s("Hostnames")]),_:1})])])]),e("li",null,[t(a,{to:"#_5-application-layer"},{default:o(()=>[s("5. Application Layer")]),_:1})]),e("li",null,[t(a,{to:"#_6-transport-layer"},{default:o(()=>[s("6. Transport Layer")]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#ports"},{default:o(()=>[s("Ports")]),_:1})]),e("li",null,[t(a,{to:"#udp"},{default:o(()=>[s("UDP")]),_:1})]),e("li",null,[t(a,{to:"#tcp"},{default:o(()=>[s("TCP")]),_:1})])])]),e("li",null,[t(a,{to:"#_7-network-layer"},{default:o(()=>[s("7. Network Layer")]),_:1})]),e("li",null,[t(a,{to:"#_8-link-layer"},{default:o(()=>[s("8. Link Layer")]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#arp-address-resolution-protocol"},{default:o(()=>[s("ARP (Address Resolution Protocol)")]),_:1})]),e("li",null,[t(a,{to:"#packet-traversal"},{default:o(()=>[s("Packet Traversal")]),_:1})])])]),e("li",null,[t(a,{to:"#_9-dhcp-overview"},{default:o(()=>[s("9. DHCP Overview")]),_:1})])])]),f,t(i,c(p({title:"Network Basics",desc:"Learn about networking basics and the TCP/IP model.",link:"https://linuxjourney.com/lesson/network-basics",logo:"https://linuxjourney.com/assets/network-fundamentals-23b42f49c6f57d45884285ffbfdf44127863ae96243eb51ce39fb139f585cab1.png",background:"rgba(24,188,156,0.2)"})),null,16),P])}const _=l(w,[["render",v],["__file","03b-network-basics.html.vue"]]),C=JSON.parse('{"path":"/devops/linux-journey/03-networking-nomad/03b-network-basics.html","title":"Networking Nomad > 03b. Network Basics","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Networking Nomad > 03b. Network Basics","description":"Linux Journey > Networking Nomad > 03b. Network Basics","category":["Linux"],"tag":["crashcourse","linux","os","networking"],"head":[[{"meta":null},{"property":"og:title","content":"Linux Journey > Networking Nomad > 03b. Network Basics"},{"property":"og:description","content":"03b. Network Basics"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/devops/linux-journey/03-networking-nomad/03b-network-basics.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/devops/linux-journey/03-networking-nomad/03b-network-basics.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Networking Nomad > 03b. Network Basics"}],["meta",{"property":"og:description","content":"Linux Journey > Networking Nomad > 03b. Network Basics"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"os"}],["meta",{"property":"article:tag","content":"networking"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Networking Nomad > 03b. Network Basics\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Network Basics","slug":"_1-network-basics","link":"#_1-network-basics","children":[]},{"level":2,"title":"2. OSI Model","slug":"_2-osi-model","link":"#_2-osi-model","children":[]},{"level":2,"title":"3. TCP/IP Model","slug":"_3-tcp-ip-model","link":"#_3-tcp-ip-model","children":[{"level":3,"title":"Application Layer","slug":"application-layer","link":"#application-layer","children":[]},{"level":3,"title":"Transport Layer","slug":"transport-layer","link":"#transport-layer","children":[]},{"level":3,"title":"Network Layer","slug":"network-layer","link":"#network-layer","children":[]},{"level":3,"title":"Link Layer","slug":"link-layer","link":"#link-layer","children":[]}]},{"level":2,"title":"4. Network Addressing","slug":"_4-network-addressing","link":"#_4-network-addressing","children":[{"level":3,"title":"MAC Addresses","slug":"mac-addresses","link":"#mac-addresses","children":[]},{"level":3,"title":"IP Addresses","slug":"ip-addresses","link":"#ip-addresses","children":[]},{"level":3,"title":"Hostnames","slug":"hostnames","link":"#hostnames","children":[]}]},{"level":2,"title":"5. Application Layer","slug":"_5-application-layer","link":"#_5-application-layer","children":[]},{"level":2,"title":"6. Transport Layer","slug":"_6-transport-layer","link":"#_6-transport-layer","children":[{"level":3,"title":"Ports","slug":"ports","link":"#ports","children":[]},{"level":3,"title":"UDP","slug":"udp","link":"#udp","children":[]},{"level":3,"title":"TCP","slug":"tcp","link":"#tcp","children":[]}]},{"level":2,"title":"7. Network Layer","slug":"_7-network-layer","link":"#_7-network-layer","children":[]},{"level":2,"title":"8. Link Layer","slug":"_8-link-layer","link":"#_8-link-layer","children":[{"level":3,"title":"ARP (Address Resolution Protocol)","slug":"arp-address-resolution-protocol","link":"#arp-address-resolution-protocol","children":[]},{"level":3,"title":"Packet Traversal","slug":"packet-traversal","link":"#packet-traversal","children":[]}]},{"level":2,"title":"9. DHCP Overview","slug":"_9-dhcp-overview","link":"#_9-dhcp-overview","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":6}]},"readingTime":{"minutes":9.53,"words":2860},"filePathRelative":"devops/linux-journey/03-networking-nomad/03b-network-basics.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{_ as comp,C as data};