import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,a as s,t as g,b as a,n as d,g as u,w as i,d as n,e as l,r as p,o as h}from"./app-U_bew1in.js";const f={},y={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},w={class:"table-of-contents"},q=s("hr",null,null,-1),E=l('<ol><li>Vagrant로 VirtualBox 가상머신 생성</li><li>Vagrant로 <code>containerd</code> 및 <code>kubeadm</code> 설치</li><li>master 노드에 worker 노드를 수동으로 연결</li></ol><figure><img src="https://pyrasis.com/assets/images/jHLsAlwaysUpToDateKubernetes/Unit06/1.png" alt="VirtualBox 가상머신에 클러스터 구축하기" tabindex="0" loading="lazy"><figcaption>VirtualBox 가상머신에 클러스터 구축하기</figcaption></figure><div class="hint-container info"><p class="hint-container-title">노드</p><p>클러스터를 구성하는 서버(머신)를 노드(node)라고 부릅니다. 노드는 물리서버일 수도 있고, 가상머신일 수도 있습니다.</p></div><hr>',4),x={id:"vagrantfile-작성하기",tabindex:"-1"},S={class:"header-anchor",href:"#vagrantfile-작성하기"},T=s("code",null,"Vagrantfile",-1),O=s("code",null,"Vagrantfile",-1),R={href:"https://github.com/pyrasis/jHLsKubernetes/blob/main/Unit06/Vagrantfile",target:"_blank",rel:"noopener noreferrer"},V=s("code",null,"pyrasis/jHLsKubernetes",-1),U=s("code",null,"/Unit06/",-1),A=s("code",null,"Vagrantfile",-1),j=s("code",null,"Vagrantfile",-1),F=l(`<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb" data-title="rb"><pre><code><span class="line">Vagrant<span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;2&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span></span>
<span class="line">  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>boot_timeout <span class="token operator">=</span> <span class="token number">3000</span></span>
<span class="line"></span>
<span class="line">  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define <span class="token string-literal"><span class="token string">&quot;master&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>master<span class="token operator">|</span></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;ubuntu/jammy64&quot;</span></span></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string-literal"><span class="token string">&quot;private_network&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.10&quot;</span></span></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;master&quot;</span></span></span>
<span class="line"></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">&quot;virtualbox&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span></span>
<span class="line">      v<span class="token punctuation">.</span>memory <span class="token operator">=</span> <span class="token number">4096</span></span>
<span class="line">      v<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">4</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provision <span class="token string-literal"><span class="token string">&quot;0&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">type</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;shell&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">preserve_order</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token symbol">privileged</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token symbol">inline</span><span class="token operator">:</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;-</span><span class="token symbol">EOC</span></span><span class="token string"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/modules-load.d/kubernetes.conf</span>
<span class="line">br_netfilter</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">sudo modprobe br_netfilter</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/sysctl.d/kubernetes.conf</span>
<span class="line">net.bridge.bridge-nf-call-iptables = 1</span>
<span class="line">net.bridge.bridge-nf-call-ip6tables = 1</span>
<span class="line">net.ipv4.ip_forward = 1</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">sudo sysctl --system</span>
<span class="line"></span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates</span>
<span class="line"></span>
<span class="line">sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/docker.gpg</span>
<span class="line">sudo add-apt-repository -y &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable&quot;</span>
<span class="line"></span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install -y containerd.io</span>
<span class="line"></span>
<span class="line">containerd config default | sudo tee /etc/containerd/config.toml &gt;/dev/null 2&gt;&amp;amp;1</span>
<span class="line">sudo sed -i &#39;s/SystemdCgroup \\= false/SystemdCgroup \\= true/g&#39; /etc/containerd/config.toml</span>
<span class="line"></span>
<span class="line">sudo systemctl restart containerd</span>
<span class="line">sudo systemctl enable containerd</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/default/kubelet</span>
<span class="line">KUBELET_EXTRA_ARGS=--node-ip=192.168.56.10</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg</span>
<span class="line">echo &#39;deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /&#39; | sudo tee /etc/apt/sources.list.d/kubernetes.list</span>
<span class="line">sudo apt-get update</span>
<span class="line">sudo apt-get install -y kubelet kubeadm kubectl</span>
<span class="line">sudo apt-mark hold kubelet kubeadm kubectl</span>
<span class="line"></span>
<span class="line">OUTPUT_FILE=/vagrant/join.sh</span>
<span class="line">rm -rf $OUTPUT_FILE</span>
<span class="line">rm -rf /vagrant/.kube</span>
<span class="line">sudo kubeadm init --pod-network-cidr=10.244.0.0/16 --control-plane-endpoint=192.168.56.10 --apiserver-advertise-address=192.168.56.10</span>
<span class="line">sudo kubeadm token create --print-join-command &gt; $OUTPUT_FILE</span>
<span class="line">chmod +x $OUTPUT_FILE</span>
<span class="line"></span>
<span class="line">mkdir -p $HOME/.kube</span>
<span class="line">sudo cp /etc/kubernetes/admin.conf $HOME/.kube/config</span>
<span class="line">sudo chown $(id -u):$(id -g) $HOME/.kube/config</span>
<span class="line">cp -R $HOME/.kube /vagrant/.kube</span>
<span class="line">cp -R $HOME/.kube /home/vagrant/.kube</span>
<span class="line">sudo chown -R vagrant:vagrant /home/vagrant/.kube</span>
<span class="line">kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml</span>
<span class="line">kubectl completion bash &gt;/etc/bash_completion.d/kubectl</span>
<span class="line">echo &#39;alias k=kubectl&#39; &gt;/home/vagrant/.bashrc</span>
<span class="line">    </span><span class="token delimiter"><span class="token symbol">EOC</span></span></span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">1.</span><span class="token number">.3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>i<span class="token operator">|</span></span>
<span class="line">    config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define <span class="token string-literal"><span class="token string">&quot;worker</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>worker<span class="token operator">|</span></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;ubuntu/jammy64&quot;</span></span></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string-literal"><span class="token string">&quot;private_network&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.1</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;worker</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span></span>
<span class="line"></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">&quot;virtualbox&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span></span>
<span class="line">        v<span class="token punctuation">.</span>memory <span class="token operator">=</span> <span class="token number">2048</span></span>
<span class="line">        v<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">      <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provision <span class="token string-literal"><span class="token string">&quot;0&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">type</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;shell&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">preserve_order</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token symbol">privileged</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token symbol">inline</span><span class="token operator">:</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;-</span><span class="token symbol">EOC</span></span><span class="token string"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/modules-load.d/kubernetes.conf</span>
<span class="line">br_netfilter</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">sudo modprobe br_netfilter</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/sysctl.d/kubernetes.conf</span>
<span class="line">net.bridge.bridge-nf-call-iptables = 1</span>
<span class="line">net.bridge.bridge-nf-call-ip6tables = 1</span>
<span class="line">net.ipv4.ip_forward = 1</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">sudo sysctl --system</span>
<span class="line"></span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates</span>
<span class="line"></span>
<span class="line">sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/docker.gpg</span>
<span class="line">sudo add-apt-repository -y &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable&quot;</span>
<span class="line"></span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install -y containerd.io</span>
<span class="line"></span>
<span class="line">containerd config default | sudo tee /etc/containerd/config.toml &gt;/dev/null 2&gt;&amp;amp;1</span>
<span class="line">sudo sed -i &#39;s/SystemdCgroup \\= false/SystemdCgroup \\= true/g&#39; /etc/containerd/config.toml</span>
<span class="line"></span>
<span class="line">sudo systemctl restart containerd</span>
<span class="line">sudo systemctl enable containerd</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/default/kubelet</span>
<span class="line">KUBELET_EXTRA_ARGS=--node-ip=192.168.56.1</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string"></span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg</span>
<span class="line">echo &#39;deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /&#39; | sudo tee /etc/apt/sources.list.d/kubernetes.list</span>
<span class="line">sudo apt-get update</span>
<span class="line">sudo apt-get install -y kubelet kubeadm kubectl</span>
<span class="line">sudo apt-mark hold kubelet kubeadm kubectl</span>
<span class="line">      </span><span class="token delimiter"><span class="token symbol">EOC</span></span></span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),B={class:"hint-container info"},L={class:"hint-container-title"},P=s("code",null,"Vagrantfile",-1),C={href:"https://github.com/pyrasis/jHLsKubernetes/blob/main/Unit06/AppleSilicon/Vagrantfile",target:"_blank",rel:"noopener noreferrer"},M=s("code",null,"pyrasis/jHLsKubernetes",-1),$=s("code",null,"/Unit06/AppleSilicon/",-1),I=s("code",null,"Vagrantfile",-1),K=s("code",null,"Vagrantfile",-1),N=l(`<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb" data-title="rb"><pre><code><span class="line">Vagrant<span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;2&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span></span>
<span class="line">  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>boot_timeout <span class="token operator">=</span> <span class="token number">3000</span></span>
<span class="line"></span>
<span class="line">  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define <span class="token string-literal"><span class="token string">&quot;master&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>master<span class="token operator">|</span></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;jharoian3/ubuntu-22.04-arm64&quot;</span></span></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box_version <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;0.3&quot;</span></span></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string-literal"><span class="token string">&quot;private_network&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.10&quot;</span></span></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;master&quot;</span></span></span>
<span class="line"></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">&quot;parallels&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span></span>
<span class="line">      v<span class="token punctuation">.</span>memory <span class="token operator">=</span> <span class="token number">4096</span></span>
<span class="line">      v<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">4</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    master<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provision <span class="token string-literal"><span class="token string">&quot;0&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">type</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;shell&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">preserve_order</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token symbol">privileged</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token symbol">inline</span><span class="token operator">:</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;-</span><span class="token symbol">EOC</span></span><span class="token string"></span>
<span class="line">swapoff -a</span>
<span class="line">sed -i &#39;/swap/ s/^/#/&#39; /etc/fstab</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/modules-load.d/kubernetes.conf</span>
<span class="line">br_netfilter</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">sudo modprobe br_netfilter</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/sysctl.d/kubernetes.conf</span>
<span class="line">net.bridge.bridge-nf-call-iptables = 1</span>
<span class="line">net.bridge.bridge-nf-call-ip6tables = 1</span>
<span class="line">net.ipv4.ip_forward = 1</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">sudo sysctl --system</span>
<span class="line"></span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates</span>
<span class="line"></span>
<span class="line">sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/docker.gpg</span>
<span class="line">sudo add-apt-repository -y &quot;deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable&quot;</span>
<span class="line"></span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install -y containerd.io</span>
<span class="line"></span>
<span class="line">containerd config default | sudo tee /etc/containerd/config.toml &gt;/dev/null 2&gt;&amp;amp;1</span>
<span class="line">sudo sed -i &#39;s/SystemdCgroup \\= false/SystemdCgroup \\= true/g&#39; /etc/containerd/config.toml</span>
<span class="line"></span>
<span class="line">sudo systemctl restart containerd</span>
<span class="line">sudo systemctl enable containerd</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/default/kubelet</span>
<span class="line">KUBELET_EXTRA_ARGS=--node-ip=192.168.56.10</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg</span>
<span class="line">echo &#39;deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /&#39; | sudo tee /etc/apt/sources.list.d/kubernetes.list</span>
<span class="line">sudo apt-get update</span>
<span class="line">sudo apt-get install -y kubelet kubeadm kubectl</span>
<span class="line">sudo apt-mark hold kubelet kubeadm kubectl</span>
<span class="line"></span>
<span class="line">OUTPUT_FILE=/vagrant/join.sh</span>
<span class="line">rm -rf $OUTPUT_FILE</span>
<span class="line">rm -rf /vagrant/.kube</span>
<span class="line">sudo kubeadm init --pod-network-cidr=10.244.0.0/16 --control-plane-endpoint=192.168.56.10 --apiserver-advertise-address=192.168.56.10</span>
<span class="line">sudo kubeadm token create --print-join-command &gt; $OUTPUT_FILE</span>
<span class="line">chmod +x $OUTPUT_FILE</span>
<span class="line"></span>
<span class="line">mkdir -p $HOME/.kube</span>
<span class="line">sudo cp /etc/kubernetes/admin.conf $HOME/.kube/config</span>
<span class="line">sudo chown $(id -u):$(id -g) $HOME/.kube/config</span>
<span class="line">cp -R $HOME/.kube /vagrant/.kube</span>
<span class="line">cp -R $HOME/.kube /home/vagrant/.kube</span>
<span class="line">sudo chown -R vagrant:vagrant /home/vagrant/.kube</span>
<span class="line">kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml</span>
<span class="line">kubectl completion bash &gt;/etc/bash_completion.d/kubectl</span>
<span class="line">echo &#39;alias k=kubectl&#39; &gt;/home/vagrant/.bashrc</span>
<span class="line">    </span><span class="token delimiter"><span class="token symbol">EOC</span></span></span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">1.</span><span class="token number">.3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>i<span class="token operator">|</span></span>
<span class="line">    config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define <span class="token string-literal"><span class="token string">&quot;worker</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>worker<span class="token operator">|</span></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;jharoian3/ubuntu-22.04-arm64&quot;</span></span></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box_version <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;0.3&quot;</span></span></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string-literal"><span class="token string">&quot;private_network&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;192.168.56.1</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;worker</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span></span>
<span class="line"></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">&quot;parallels&quot;</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span></span>
<span class="line">        v<span class="token punctuation">.</span>memory <span class="token operator">=</span> <span class="token number">2048</span></span>
<span class="line">        v<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">      <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">      worker<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provision <span class="token string-literal"><span class="token string">&quot;0&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">type</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;shell&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">preserve_order</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token symbol">privileged</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token symbol">inline</span><span class="token operator">:</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;-</span><span class="token symbol">EOC</span></span><span class="token string"></span>
<span class="line">swapoff -a</span>
<span class="line">sed -i &#39;/swap/ s/^/#/&#39; /etc/fstab</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/modules-load.d/kubernetes.conf</span>
<span class="line">br_netfilter</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">sudo modprobe br_netfilter</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/sysctl.d/kubernetes.conf</span>
<span class="line">net.bridge.bridge-nf-call-iptables = 1</span>
<span class="line">net.bridge.bridge-nf-call-ip6tables = 1</span>
<span class="line">net.ipv4.ip_forward = 1</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">sudo sysctl --system</span>
<span class="line"></span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates</span>
<span class="line"></span>
<span class="line">sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/docker.gpg</span>
<span class="line">sudo add-apt-repository -y &quot;deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable&quot;</span>
<span class="line"></span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install -y containerd.io</span>
<span class="line"></span>
<span class="line">containerd config default | sudo tee /etc/containerd/config.toml &gt;/dev/null 2&gt;&amp;amp;1</span>
<span class="line">sudo sed -i &#39;s/SystemdCgroup \\= false/SystemdCgroup \\= true/g&#39; /etc/containerd/config.toml</span>
<span class="line"></span>
<span class="line">sudo systemctl restart containerd</span>
<span class="line">sudo systemctl enable containerd</span>
<span class="line"></span>
<span class="line">cat &lt;&lt;-&#39;EOF&#39; &gt;/etc/default/kubelet</span>
<span class="line">KUBELET_EXTRA_ARGS=--node-ip=192.168.56.1</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i</span><span class="token delimiter punctuation">}</span></span><span class="token string"></span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg</span>
<span class="line">echo &#39;deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /&#39; | sudo tee /etc/apt/sources.list.d/kubernetes.list</span>
<span class="line">sudo apt-get update</span>
<span class="line">sudo apt-get install -y kubelet kubeadm kubectl</span>
<span class="line">sudo apt-mark hold kubelet kubeadm kubectl</span>
<span class="line">      </span><span class="token delimiter"><span class="token symbol">EOC</span></span></span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parallels를 사용하므로 다음 명령으로 가상머신을 생성합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">vagrant up <span class="token parameter variable">--provider</span><span class="token operator">=</span>parallels</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,3),H=l(`<div class="hint-container info"><p class="hint-container-title">Minikube 클러스터</p><p>Minikube 클러스터를 생성했다면 다음 명령으로 먼저 Minikube 클러스터를 삭제합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">minikube delete</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><div class="hint-container warning"><p class="hint-container-title">Avast Antivirus 감시 제어 문제</p><p>Avast Antivirus 등 안티바이러스 프로그램이 설치되어 있는 경우 <code>vagrant up</code> 명령을 실행했을 때 다음과 같은 메시지가 출력되면서 에러가 발생할 수 있습니다. 따라서 <strong>Avast 감시 제어</strong> 기능을 반드시 끄도록 합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Bringing machine &#39;master&#39; up with &#39;virtualbox&#39; provider...</span></span>
<span class="line"><span class="token comment"># Bringing machine &#39;worker1&#39; up with &#39;virtualbox&#39; provider...</span></span>
<span class="line"><span class="token comment"># Bringing machine &#39;worker2&#39; up with &#39;virtualbox&#39; provider...</span></span>
<span class="line"><span class="token comment"># Bringing machine &#39;worker3&#39; up with &#39;virtualbox&#39; provider...</span></span>
<span class="line"><span class="token comment"># ==&gt; master: Box &#39;ubuntu/jammy64&#39; could not be found. Attempting to find and install...</span></span>
<span class="line"><span class="token comment">#     master: Box Provider: virtualbox</span></span>
<span class="line"><span class="token comment">#     master: Box Version: &gt;= 0</span></span>
<span class="line"><span class="token comment"># The box &#39;ubuntu/jammy64&#39; could not be found or</span></span>
<span class="line"><span class="token comment"># could not be accessed in the remote catalog. If this is a private</span></span>
<span class="line"><span class="token comment"># box on HashiCorp&#39;s Vagrant Cloud, please verify you&#39;re logged in via</span></span>
<span class="line"><span class="token comment"># \`vagrant login\`. Also, please double-check the name. The expanded</span></span>
<span class="line"><span class="token comment"># URL and error message are shown below:</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># URL: [&quot;https://vagrantcloud.com/ubuntu/jammy64&quot;]</span></span>
<span class="line"><span class="token comment"># Error: schannel: next InitializeSecurityContext failed: Unknown error (0x80092012) - 해당 함수에서 인증서에 대한 파기 여부를 검사하지 못했습니다.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p><code>vagrant up</code> 명령으로 가상머신을 생성합니다. 시간이 꽤 오래 걸리므로 느긋하게 기다립니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">vagrant up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">SSH auth method: Private Key에서 멈추는 경우</p><p><code>vagrant up</code> 명령으로 가상머신을 생성할 때 <code>SSH auth method: Private Key</code>에서 멈추는 경우가 많습니다.</p><figure><img src="https://pyrasis.com/assets/images/jHLsAlwaysUpToDateKubernetes/Unit06/2.png" alt="따라서 VirtualBox GUI 앱인 Oracle VM VirtualBox을 반드시 실행해 놓은 상태로  명령을 실행합니다." tabindex="0" loading="lazy"><figcaption>따라서 VirtualBox GUI 앱인 <strong>Oracle VM VirtualBox</strong>을 반드시 실행해 놓은 상태로 <code>vagrant up</code> 명령을 실행합니다.</figcaption></figure></div><p><code>vagrant up</code> 명령 실행이 끝났으면 <code>vagrant status</code> 명령을 입력하여 가상머신의 상태를 확인합니다. 다음과 같이 표시되면 정상적으로 생성된 것입니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">vagrant status</span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># Current machine states:</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># master                    running (virtualbox)</span></span>
<span class="line"><span class="token comment"># worker1                   running (virtualbox)</span></span>
<span class="line"><span class="token comment"># worker2                   running (virtualbox)</span></span>
<span class="line"><span class="token comment"># worker3                   running (virtualbox)</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># This environment represents multiple VMs. The VMs are all listed</span></span>
<span class="line"><span class="token comment"># above with their current state. For more information about a specific</span></span>
<span class="line"><span class="token comment"># VM, run \`vagrant status NAME\`.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="마스터-노드-확인하기" tabindex="-1"><a class="header-anchor" href="#마스터-노드-확인하기"><span>마스터 노드 확인하기</span></a></h2>`,9),G=s("code",null,"Vagrantfile",-1),D=s("code",null,"kubeadm",-1),Y=s("code",null,"kubeadm",-1),z=l(`<p>다음 명령을 실행하여 master 노드 안으로 들어갑니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">vagrant <span class="token function">ssh</span> master</span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># Welcome to Ubuntu 22.04.1 LTS (GNU/Linux 5.15.0-52-generic x86_64)</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment">#  * Documentation:  https://help.ubuntu.com</span></span>
<span class="line"><span class="token comment">#  * Management:     https://landscape.canonical.com</span></span>
<span class="line"><span class="token comment">#  * Support:        https://ubuntu.com/advantage</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment">#   System information as of Sun Nov  6 17:35:51 UTC 2022</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment">#   System load:  0.5947265625      Users logged in:         0</span></span>
<span class="line"><span class="token comment">#   Usage of /:   9.0% of 38.70GB   IPv4 address for cni0:   10.244.0.1</span></span>
<span class="line"><span class="token comment">#   Memory usage: 37%               IPv4 address for enp0s3: 10.0.2.15</span></span>
<span class="line"><span class="token comment">#   Swap usage:   0%                IPv4 address for enp0s8: 192.168.56.10</span></span>
<span class="line"><span class="token comment">#   Processes:    124</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># 11 updates can be applied immediately.</span></span>
<span class="line"><span class="token comment"># 10 of these updates are standard security updates.</span></span>
<span class="line"><span class="token comment"># To see these additional updates run: apt list --upgradable</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># Last login: Sun Nov  6 11:51:31 2022 from 10.0.2.2</span></span>
<span class="line"><span class="token comment"># vagrant@master:~$</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),W={class:"hint-container info"},X=s("p",{class:"hint-container-title"},"윈도우에서 vagrant ssh master 실행 시 Permission denied (publickey) 에러 발생 문제",-1),Z=s("p",null,[n("윈도우에서 "),s("code",null,"vagrant ssh master"),n(" 명령을 실행했을 때 "),s("strong",null,"vagrant@127.0.0.1: Permission denied (publickey)."),n(" 와 같은 에러가 발생하는 경우가 있습니다. 이때는 "),s("code",null,"$env:VAGRANT_PREFER_SYSTEM_BIN += 0"),n(" 명령을 실행한 뒤 "),s("code",null,"vagrant ssh master"),n(" 명령을 실행하면 됩니다.")],-1),J=l(`<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre><code><span class="line"><span class="token variable">$env</span>:VAGRANT_PREFER_SYSTEM_BIN <span class="token operator">+=</span> 0</span>
<span class="line">vagrant ssh master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Q=l(`<p>master 노드 안으로 들어왔습니다. <code>kubectl</code>도 설치해놓았으므로 <code>kubectl get node</code> 명령으로 노드 목록을 출력해봅니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl get <span class="token function">node</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># NAME     STATUS   ROLES           AGE     VERSION</span></span>
<span class="line"><span class="token comment"># master   Ready    control-plane   7m40s   v1.28.4</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>master 노드 하나만 생성되어 있고 롤은 제어 플레인(control-plane)인 것을 볼 수 있습니다. 앞으로 <code>vagrant ssh</code>로 들어간 노드에서 빠져나올 때는 <kbd>Ctrl</kbd>+<kbd>D</kbd> 키를 입력하면 됩니다.</p><hr><h2 id="쿠버네티스-클러스터-구축하기" tabindex="-1"><a class="header-anchor" href="#쿠버네티스-클러스터-구축하기"><span>쿠버네티스 클러스터 구축하기</span></a></h2><p>이제터 들어갑니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">vagrant <span class="token function">ssh</span> worker1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line highlighted"><span class="token builtin class-name">cd</span> /vagrant/</span>
<span class="line highlighted"><span class="token function">sudo</span> ./join.sh</span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># [preflight] Running pre-flight checks</span></span>
<span class="line"><span class="token comment">#         [WARNING SystemVerification]: missing optional cgroups: blkio</span></span>
<span class="line"><span class="token comment"># [preflight] Reading configuration from the cluster...</span></span>
<span class="line"><span class="token comment"># [preflight] FYI: You can look at this config file with &#39;kubectl -n kube-system get cm kubeadm-config -o yaml&#39;</span></span>
<span class="line"><span class="token comment"># [kubelet-start] Writing kubelet configuration to file &quot;/var/lib/kubelet/config.yaml&quot;</span></span>
<span class="line"><span class="token comment"># [kubelet-start] Writing kubelet environment file with flags to file &quot;/var/lib/kubelet/kubeadm-flags.env&quot;</span></span>
<span class="line"><span class="token comment"># [kubelet-start] Starting the kubelet</span></span>
<span class="line"><span class="token comment"># [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap...</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># This node has joined the cluster:</span></span>
<span class="line"><span class="token comment"># * Certificate signing request was sent to apiserver and a response was received.</span></span>
<span class="line"><span class="token comment"># * The Kubelet was informed of the new secure connection details.</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># Run &#39;kubectl get nodes&#39; on the control-plane to see this node join the cluster.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),ss=s("code",null,"join.sh",-1),ns=s("code",null,"kubeadm join",-1),as=l(`<p>위 명령들을 worker2, worker3에도 똑같이 실행합니다.</p><hr><h2 id="쿠버네티스-클러스터-확인하기" tabindex="-1"><a class="header-anchor" href="#쿠버네티스-클러스터-확인하기"><span>쿠버네티스 클러스터 확인하기</span></a></h2><p><code>vagrant ssh master</code> 명령을 실행하여 다시 master 노드로 들어갑니다. 그리고 <code>kubectl get node</code> 명령을 실행해봅니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">vagrant <span class="token function">ssh</span> master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl get <span class="token function">node</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># NAME      STATUS   ROLES           AGE     VERSION</span></span>
<span class="line"><span class="token comment"># master    Ready    control-plane   19m     v1.28.4</span></span>
<span class="line"><span class="token comment"># worker1   Ready    &amp;lt;none&gt;          5m18s   v1.28.4</span></span>
<span class="line"><span class="token comment"># worker2   Ready    &amp;lt;none&gt;          68s     v1.28.4</span></span>
<span class="line"><span class="token comment"># worker3   Ready    &amp;lt;none&gt;          31s     v1.28.4</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>master, worker1, 2, 3 노드가 모두 <code>Ready</code> 상태인 것을 확인할 수 있습니다. 이렇게 쿠버네티스 클러스터 구축이 끝났습니다.</p><hr>`,8),es={id:"kube-디렉터리-설정하기",tabindex:"-1"},ls={class:"header-anchor",href:"#kube-디렉터리-설정하기"},is=s("code",null,".kube",-1),ts=s("code",null,"Vagrantfile",-1),ps=s("code",null,"join.sh",-1),cs=s("code",null,".kube",-1),os=s("code",null,"kubectl",-1),rs={class:"hint-container warning"},ds={class:"hint-container-title"},us=s("code",null,".kube/config",-1),ms=s("code",null,".kube",-1),vs=s("div",{class:"language-powershell line-numbers-mode","data-highlighter":"prismjs","data-ext":"powershell","data-title":"powershell"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"Copy-Item"),n(),s("span",{class:"token operator"},"-"),n("Force "),s("span",{class:"token operator"},"-"),n("Recurse "),s("span",{class:"token punctuation"},"."),n("\\"),s("span",{class:"token punctuation"},"."),n("kube C:\\Users\\$"),s("span",{class:"token punctuation"},"{"),n("env:UserName"),s("span",{class:"token punctuation"},"}"),n("\\")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),bs=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"cp"),n(),s("span",{class:"token parameter variable"},"-R"),n(" ./.kube ~/")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),ks=l(`<p>이제 <code>kubectl</code> 명령이 잘 실행되는지 테스트해봅니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">kubectl get <span class="token function">node</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># NAME      STATUS   ROLES           AGE   VERSION</span></span>
<span class="line"><span class="token comment"># master    Ready    control-plane   23m   v1.28.4</span></span>
<span class="line"><span class="token comment"># worker1   Ready    &amp;lt;none&gt;          91s   v1.28.4</span></span>
<span class="line"><span class="token comment"># worker2   Ready    &amp;lt;none&gt;          60s   v1.28.4</span></span>
<span class="line"><span class="token comment"># worker3   Ready    &amp;lt;none&gt;          31s   v1.28.4</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),gs={class:"hint-container info"},hs=s("p",{class:"hint-container-title"},"윈도우에서 Unable to connect to the server: net/http: TLS handshake timeout 에러 발생",-1),fs=s("p",null,[n("윈도우에서 "),s("code",null,"kubectl get node"),n(" 명령을 실행했을 때 "),s("strong",null,"Unable to connect to the server: net/http: TLS handshake timeout"),n(" 에러가 발생한다면, "),s("code",null,"$env:VAGRANT_PREFER_SYSTEM_BIN += 0"),n("을 실행한 뒤 "),s("code",null,"kubectl get node"),n(" 명령을 실행해줍니다.")],-1),ys=l(`<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre><code><span class="line"><span class="token variable">$env</span>:VAGRANT_PREFER_SYSTEM_BIN <span class="token operator">+=</span> 0</span>
<span class="line">kubectl get node</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_s=s("hr",null,null,-1);function ws(m,qs){const r=p("VPCard"),e=p("FontIcon"),t=p("router-link"),v=p("Tabs");return h(),k("div",null,[s("h1",y,[s("a",_,[s("span",null,g(m.$frontmatter.title)+" 관련",1)])]),a(r,d(u({title:"목차",desc:"언제나 최신 Kubernetes",link:"/k8s/always-up-to-date-kubernetes/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),s("nav",w,[s("ul",null,[s("li",null,[a(t,{to:"#vagrantfile-작성하기"},{default:i(()=>[a(e,{icon:"iconfont icon-vagrant"}),n("Vagrantfile 작성하기")]),_:1})]),s("li",null,[a(t,{to:"#마스터-노드-확인하기"},{default:i(()=>[n("마스터 노드 확인하기")]),_:1})]),s("li",null,[a(t,{to:"#쿠버네티스-클러스터-구축하기"},{default:i(()=>[n("쿠버네티스 클러스터 구축하기")]),_:1})]),s("li",null,[a(t,{to:"#쿠버네티스-클러스터-확인하기"},{default:i(()=>[n("쿠버네티스 클러스터 확인하기")]),_:1})]),s("li",null,[a(t,{to:"#kube-디렉터리-설정하기"},{default:i(()=>[a(e,{icon:"fas fa-folder-open"}),n(".kube 디렉터리 설정하기")]),_:1})])])]),q,a(r,d(u({title:"Unit 6.2. Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기",desc:"언제나 최신 Kubernetes",link:"https://pyrasis.com/jHLsAlwaysUpToDateKubernetes/Unit06/02",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),s("p",null,[n("."),a(e,{icon:"iconfont icon-virtualbox"}),n("VirtualBox와 "),a(e,{icon:"iconfont icon-vagrant"}),n("Vagrant 설치가 끝났으면 본격적으로 쿠버네티스 클러스터를 구축해보겠습니다. 이번에 구축할 클러스터의 형태는 다음과 같습니다.")]),E,s("h2",x,[s("a",S,[s("span",null,[a(e,{icon:"iconfont icon-vagrant"}),T,n(" 작성하기")])])]),s("p",null,[n("이제 Vagrant 코드를 작성해보겠습니다. 다음 내용을 "),a(e,{icon:"iconfont icon-vagrant"}),O,n("로 저장합니다.")]),s("ul",null,[s("li",null,[s("a",R,[a(e,{icon:"iconfont icon-github"}),V,n(" - "),U,a(e,{icon:"iconfont icon-vagrant"}),A])])]),s("blockquote",null,[a(e,{icon:"iconfont icon-vagrant"}),j]),F,s("div",B,[s("p",L,[a(e,{icon:"fa-brands fa-apple"}),n("애플 실리콘 M 시리즈")]),s("p",null,[n("맥의 CPU가 인텔이 아닌 애플 실리콘 M 시리즈라면 다음 "),a(e,{icon:"iconfont icon-vagrant"}),P,n("을 사용합니다.")]),s("ul",null,[s("li",null,[s("a",C,[a(e,{icon:"iconfont icon-github"}),M,n(" - "),$,a(e,{icon:"iconfont icon-vagrant"}),I])])]),s("blockquote",null,[a(e,{icon:"iconfont icon-vagrant"}),K]),N]),H,s("p",null,[n("."),a(e,{icon:"iconfont icon-vagrant"}),G,n("안에 내장된 스크립트로 "),D,n(" 실행에 필요한 설정을 하고 패키지들을 설치했습니다. master 노드에는 제어 플레인(Control Plane)이 구축된 상태고, worker1, 2, 3 노드에는 "),Y,n("만 설치된 상태입니다.")]),z,s("div",W,[X,Z,s("blockquote",null,[a(e,{icon:"iconfont icon-powershell"}),n("PowerShell")]),J]),Q,s("p",null,[n("."),a(e,{icon:"iconfont icon-shell"}),ss,n(" 파일은 master 노드를 생성한 뒤 "),ns,n(" 명령을 미리 저장해둔 파일입니다. 이 부분은 뒤에서 자세히 설명하겠습니다.")]),as,s("h2",es,[s("a",ls,[s("span",null,[a(e,{icon:"fas fa-folder-open"}),is,n(" 디렉터리 설정하기")])])]),s("p",null,[n("."),a(e,{icon:"iconfont icon-vagrant"}),ts,n("이 들어있는 폴더를 보면 "),a(e,{icon:"iconfont icon-shell"}),ps,n(" 파일 말고도 "),a(e,{icon:"fas fa-folder-open"}),cs,n(" 폴더가 들어있는 것을 볼 수 있습니다. 이 폴더를 호스트의 사용자 계정 폴더(디렉터리로) 복사하면 노드 바깥에서도 "),os,n("로 클러스터를 제어할 수 있습니다.")]),s("div",rs,[s("p",ds,[a(e,{icon:"fas fa-folder-open"}),n(".kube 디렉터리 백업")]),s("p",null,[n("아래 명령을 실행하면 기존 "),a(e,{icon:"fas fa-file-lines"}),us,n(" 파일을 삭제하거나 덮어쓰게 됩니다. 따라서 기존 "),a(e,{icon:"fas fa-folder-open"}),ms,n(" 디렉터리는 백업해주시기 바랍니다.")])]),a(v,{id:"172",data:[{id:'<FontIcon icon="iconfont icon-powershell"/>PowerShell'},{id:'<FontIcon icon="fa-brands fa-linux"/>리눅스, <FontIcon icon="iconfont icon-macos"/>macOS'}],active:0},{title0:i(({value:c,isActive:o})=>[a(e,{icon:"iconfont icon-powershell"}),n("PowerShell")]),title1:i(({value:c,isActive:o})=>[a(e,{icon:"fa-brands fa-linux"}),n("리눅스, "),a(e,{icon:"iconfont icon-macos"}),n("macOS")]),tab0:i(({value:c,isActive:o})=>[vs]),tab1:i(({value:c,isActive:o})=>[bs]),_:1}),ks,s("div",gs,[hs,fs,s("blockquote",null,[a(e,{icon:"iconfont icon-powershell"}),n("PowerShell")]),ys]),_s])}const Ss=b(f,[["render",ws],["__file","06B.html.vue"]]),Ts=JSON.parse('{"path":"/k8s/always-up-to-date-kubernetes/06B.html","title":"06B. Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"06B. Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기","description":"언제나 최신 Kubernetes > 06B. Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기","category":["Kubernetes"],"tag":["crashcourse","digitalocean","kubernetes","minkube","kubctl"],"head":[[{"meta":null},{"property":"og:title","content":"언제나 최신 Kubernetes > 06B. Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기"},{"property":"og:description","content":"06B. Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/k8s/always-up-to-date-kubernetes/06B.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/k8s/always-up-to-date-kubernetes/06B.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"06B. Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기"}],["meta",{"property":"og:description","content":"언제나 최신 Kubernetes > 06B. Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateKubernetes/Unit06/1.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"digitalocean"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:tag","content":"minkube"}],["meta",{"property":"article:tag","content":"kubctl"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06B. Vagrant와 kubeadm으로 가상머신에 클러스터 구축하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateKubernetes/Unit06/1.png\\",\\"https://pyrasis.com/assets/images/jHLsAlwaysUpToDateKubernetes/Unit06/2.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Vagrantfile 작성하기","slug":"vagrantfile-작성하기","link":"#vagrantfile-작성하기","children":[]},{"level":2,"title":"마스터 노드 확인하기","slug":"마스터-노드-확인하기","link":"#마스터-노드-확인하기","children":[]},{"level":2,"title":"쿠버네티스 클러스터 구축하기","slug":"쿠버네티스-클러스터-구축하기","link":"#쿠버네티스-클러스터-구축하기","children":[]},{"level":2,"title":"쿠버네티스 클러스터 확인하기","slug":"쿠버네티스-클러스터-확인하기","link":"#쿠버네티스-클러스터-확인하기","children":[]},{"level":2,"title":".kube 디렉터리 설정하기","slug":"kube-디렉터리-설정하기","link":"#kube-디렉터리-설정하기","children":[]}],"git":{"createdTime":1712118043000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":6.59,"words":1977},"filePathRelative":"k8s/always-up-to-date-kubernetes/06B.md","localizedDate":"2024년 4월 3일","excerpt":"\\n"}');export{Ss as comp,Ts as data};
