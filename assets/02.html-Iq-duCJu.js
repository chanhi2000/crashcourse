import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c as v,a as e,t as b,b as l,n as h,g as k,w as s,d as n,e as c}from"./app-BVWDC1Tu.js";const g={},f={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},x=e("nav",{class:"table-of-contents"},[e("ul")],-1),y=e("hr",null,null,-1),w=e("p",null,"As mentioned in the previous step, there are two main types of streams. To view them, run the following command:",-1),S=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n("yum module list "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"grep"),n(` container-tools
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),A=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# container-tools      rhel8 [d]       common [d]                               Most recent (rolling) versions of podman, buildah, skopeo, runc, conmon, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and updated as frequently as every 12 weeks.         "),n(`
`),e("span",{class:"token comment"},"# container-tools      1.0             common [d]                               Stable versions of podman 1.0, buildah 1.5, skopeo 0.1, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and supported for 24 months.                                          "),n(`
`),e("span",{class:"token comment"},"# container-tools      2.0             common [d]                               Stable versions of podman 1.6, buildah 1.11, skopeo 0.1, runc, conmon, etc as well as dependencies such as container-selinux built and tested together, and supported as documented on the Application Stream lifecycle page.             "),n(`
`),e("span",{class:"token comment"},"# container-tools      3.0             common [d]                               Stable versions of podman 3.0, buildah 1.19, skopeo 1.2, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and supported as documented on the Application Stream lifecycle page."),n(`
`),e("span",{class:"token comment"},"# container-tools      4.0             common [d]                               Stable versions of podman 4.0, buildah 1.24, skopeo 1.6, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and supported as documented on the Application Stream lifecycle page."),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("p",null,"Notice there are two types:",-1),R=e("ol",null,[e("li",null,[e("code",null,"container-tools:rhel8"),n(" - this is the fast moving stream, it's updated once every 12 weeks and generally fixes bugs by rolling to new versions")]),e("li",null,[e("code",null,"container-tools:1.0"),n(" - this was released with RHEL 8.0 and supported for 24 months, and receives bug fixes with back ports that keep the API and CLI interfaces stable")]),e("li",null,[e("code",null,"container-tools:2.0"),n(" - this was released with RHEL 8.2 and supported for 24 months, and receives bug fixes with back ports that keep the API and CLI interfaces stable")])],-1),C=e("p",null,"Now, let's pretend we are developer looking for access to the latest features in RHEL. Let's inspect the description of the fast moving stream. Notice that there are multiple versions of the rhel8 application stream. Every time a package is updated the entire group of packages is version controlled and tested together:",-1),U=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`yum module info container-tools:rhel8
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8050020220120091659"),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8060020220401155929"),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8060020220426163604"),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8060020220711143429"),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8060020221012172321"),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8060020221020065705"),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8070020220929222448"),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8070020221026183352"),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8070020221215192736"),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 8070020230113130632"),n(`
`),e("span",{class:"token comment"},"# Context          "),n(`
`),e("span",{class:"token comment"},"# ... 생략 ..."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Name             : container-tools"),n(`
`),e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]"),n(`
`),e("span",{class:"token comment"},"# Version          : 820190211172150"),n(`
`),e("span",{class:"token comment"},"# Context          : 20125149"),n(`
`),e("span",{class:"token comment"},"# Architecture     : x86_64"),n(`
`),e("span",{class:"token comment"},"# Profiles         : common [d]"),n(`
`),e("span",{class:"token comment"},"# Default profiles : common"),n(`
`),e("span",{class:"token comment"},"# Repo             : rhui-rhel-8-for-x86_64-appstream-rhui-rpms"),n(`
`),e("span",{class:"token comment"},"# Summary          : Common tools and dependencies for container runtimes"),n(`
`),e("span",{class:"token comment"},"# Description      : Contains SELinux policies, binaries and other dependencies for use with container runtimes"),n(`
`),e("span",{class:"token comment"},"# Requires         : platform:[el8]"),n(`
`),e("span",{class:"token comment"},"# Artifacts        : buildah-0:1.5-3.gite94b4f9.module+el8+2769+577ad176.x86_64"),n(`
`),e("span",{class:"token comment"},"#                  : container-selinux-2:2.75-1.git99e2cfd.module+el8+2769+577ad176.noarch"),n(`
`),e("span",{class:"token comment"},"#                  : containernetworking-plugins-0:0.7.4-3.git9ebe139.module+el8+2769+577ad176.x86_64"),n(`
`),e("span",{class:"token comment"},"#                  : containers-common-1:0.1.32-3.git1715c90.module+el8+2769+577ad176.x86_64"),n(`
`),e("span",{class:"token comment"},"#                  : fuse-overlayfs-0:0.3-2.module+el8+2769+577ad176.x86_64"),n(`
`),e("span",{class:"token comment"},"#                  : oci-systemd-hook-1:0.1.15-2.git2d0b8a3.module+el8+2769+577ad176.x86_64"),n(`
`),e("span",{class:"token comment"},"#                  : oci-umount-2:2.3.4-2.git87f9237.module+el8+2769+577ad176.x86_64"),n(`
`),e("span",{class:"token comment"},"#                  : podman-0:1.0.0-2.git921f98f.module+el8+2785+ff8a053f.x86_64"),n(`
`),e("span",{class:"token comment"},"#                  : podman-docker-0:1.0.0-2.git921f98f.module+el8+2785+ff8a053f.noarch"),n(`
`),e("span",{class:"token comment"},"#                  : runc-0:1.0.0-54.rc5.dev.git2abd837.module+el8+2769+577ad176.x86_64"),n(`
`),e("span",{class:"token comment"},"#                  : skopeo-1:0.1.32-3.git1715c90.module+el8+2769+577ad176.x86_64"),n(`
`),e("span",{class:"token comment"},"#                  : slirp4netns-0:0.1-2.dev.gitc4e1bc5.module+el8+2769+577ad176.x86_64"),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled, [a]ctive"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=c(`<p>Now, let&#39;s install the fast moving container-tools:rhel8 Application Stream like this:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum module <span class="token function">install</span> <span class="token parameter variable">-y</span> container-tools:rhel8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>We should have a whole set of tools installed:</p>`,3),V=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n("yum module list "),e("span",{class:"token parameter variable"},"--installed"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),P=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Last metadata expiration check: 0:31:50 ago on Tue 08 Aug 2023 12:37:52 AM UTC."),n(`
`),e("span",{class:"token comment"},"# Red Hat Enterprise Linux 8 for x86_64 - AppStream from RHUI (RPMs)"),n(`
`),e("span",{class:"token comment"},"# Name            Stream       Profiles Summary                                                                       "),n(`
`),e("span",{class:"token comment"},"# container-tools rhel8 [d][e] common [ Most recent (rolling) versions of podman, buildah, skopeo, runc, conmon, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built "),n(`
`),e("span",{class:"token comment"},"#                              d] [i]   and tested together, and updated as frequently as every 12 weeks."),n(`
`),e("span",{class:"token comment"},"# "),n(`
`),e("span",{class:"token comment"},"# Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=e("p",null,"Look at the packages that were installed as part of this Application Stream:",-1),H=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n("yum module repoquery "),e("span",{class:"token parameter variable"},"--installed"),n(` container-tools
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Last metadata expiration check: 0:33:21 ago on Tue 08 Aug 2023 12:37:52 AM UTC."),n(`
`),e("span",{class:"token comment"},"# aardvark-dns-2:1.1.0-5.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# buildah-1:1.27.3-1.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# cockpit-podman-53-1.module+el8.7.0+17824+66a0202b.noarch"),n(`
`),e("span",{class:"token comment"},"# conmon-3:2.1.4-1.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# container-selinux-2:2.189.0-1.module+el8.7.0+17824+66a0202b.noarch"),n(`
`),e("span",{class:"token comment"},"# containernetworking-plugins-1:1.1.1-3.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# containers-common-2:1-46.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# criu-3.15-3.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# crun-1.5-1.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# fuse-overlayfs-1.9-1.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# libslirp-4.4.0-1.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# netavark-2:1.1.0-7.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# podman-3:4.2.0-8.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# podman-catatonit-3:4.2.0-8.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# python3-podman-4.2.1-1.module+el8.7.0+17824+66a0202b.noarch"),n(`
`),e("span",{class:"token comment"},"# runc-1:1.1.4-1.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# skopeo-2:1.9.4-0.1.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# slirp4netns-1.2.0-2.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# toolbox-0.0.99.3-0.6.module+el8.7.0+17824+66a0202b.x86_64"),n(`
`),e("span",{class:"token comment"},"# udica-0.2.6-10.module+el8.7.0+17824+66a0202b.noarch"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),F=c(`<p>Look at the version of Podman that was installed. It should be fairly new, probably within a few months of what&#39;s latest upstream:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> <span class="token parameter variable">-v</span>
<span class="token comment"># podman version 4.2.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Let&#39;s clean up the environment, and start from scratch:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum module remove <span class="token parameter variable">-y</span> container-tools
yum module reset <span class="token parameter variable">-y</span> container-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>OK, now let&#39;s pretend we are a systems administrator or SRE that wants a set of stable tools which are supported for 24 months. First, inspect the stable stream that was released in RHEL 8.0. Notice that there are several versions of this Application Stream. Every time a package is updated a new stream version is generated to snapshot the exact versions of each package together as a stream:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum module info container-tools:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, install it:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum module <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">--allowerasing</span> container-tools:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Check the version of Podman again:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> <span class="token parameter variable">-v</span>
<span class="token comment"># podman version 1.0.2-dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that it&#39;s an older version of Podman. This version only gets back ports and will never move beyond Podman 1.0.2. Note, there is no connection between the container-tools version number and the Podman version number. It is purely coincidence that these numbers coincide. The container-tools version number is an arbitrary number representing all of the tools tested together in the Application Stream. This includes, Podman, Buildah, Skopeo, CRIU, etc.</p><p>Now, let&#39;s go back to the latest version of the container-tools for the rest of this module:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum module remove <span class="token parameter variable">-y</span> container-tools
yum module reset <span class="token parameter variable">-y</span> container-tools
yum module <span class="token function">install</span> <span class="token parameter variable">-y</span> container-tools:rhel8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice how easy it was to move between the stable streams and the fast moving stream. This is the power of modularity. Now, let&#39;s move on to using the actual tools.</p><hr>`,15);function M(m,q){const r=i("VPCard"),o=i("Tabs"),d=i("TagLinks");return p(),v("div",null,[e("h1",f,[e("a",_,[e("span",null,b(m.$frontmatter.title)+" 관련",1)])]),x,y,l(r,h(k({title:"Red Hat Container Tools",desc:"Intro",link:"https://developers.redhat.com/courses/devops-red-hat-container-tools",logo:"https://developers.redhat.com/themes/custom/rhdp2/images/branding/2023_RHDLogo_black_text.svg",background:"rgba(255,255,255,0.2)"})),null,16),w,l(o,{id:"11",data:[{id:"sh"},{id:"result"}],active:0},{title0:s(({value:a,isActive:t})=>[n("sh")]),title1:s(({value:a,isActive:t})=>[n("result")]),tab0:s(({value:a,isActive:t})=>[S]),tab1:s(({value:a,isActive:t})=>[A]),_:1}),N,R,C,l(o,{id:"42",data:[{id:"sh"},{id:"result"}],active:0},{title0:s(({value:a,isActive:t})=>[n("sh")]),title1:s(({value:a,isActive:t})=>[n("result")]),tab0:s(({value:a,isActive:t})=>[U]),tab1:s(({value:a,isActive:t})=>[T]),_:1}),L,l(o,{id:"57",data:[{id:"sh"},{id:"result"}],active:0},{title0:s(({value:a,isActive:t})=>[n("sh")]),title1:s(({value:a,isActive:t})=>[n("result")]),tab0:s(({value:a,isActive:t})=>[V]),tab1:s(({value:a,isActive:t})=>[P]),_:1}),I,l(o,{id:"68",data:[{id:"sh"},{id:"result"}],active:0},{title0:s(({value:a,isActive:t})=>[n("sh")]),title1:s(({value:a,isActive:t})=>[n("result")]),tab0:s(({value:a,isActive:t})=>[H]),tab1:s(({value:a,isActive:t})=>[E]),_:1}),F,l(d)])}const K=u(g,[["render",M],["__file","02.html.vue"]]),O=JSON.parse('{"path":"/devops/red-hat-container-tools/02.html","title":"2. Using the Fast and Stable Streams","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"2. Using the Fast and Stable Streams","description":"Red Hat Container Tools > 2. Using the Fast and Stable Streams","category":["RedHat"],"tag":["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],"head":[[{"meta":null},{"property":"og:title","content":"Red Hat Container Tools > 2. Using the Fast and Stable Streams"},{"property":"og:description","content":"2. Using the Fast and Stable Streams"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/devops/red-hat-container-tools/02.html"}]]},"headers":[],"git":{},"readingTime":{"minutes":4.56,"words":1368},"filePathRelative":"devops/red-hat-container-tools/02.md","excerpt":"\\n\\n<hr>\\n"}');export{K as comp,O as data};
