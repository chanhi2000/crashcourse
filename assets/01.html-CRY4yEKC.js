import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as b,c as g,a as n,t as v,b as a,w as s,n as k,g as h,e as m,d as e}from"./app-CBi7Ecoo.js";const _={},f={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},x={class:"table-of-contents"},B=n("hr",null,null,-1),w=m(`<h2 id="starting-with-moon-buggy-game" tabindex="-1"><a class="header-anchor" href="#starting-with-moon-buggy-game"><span>Starting with Moon-Buggy Game</span></a></h2><h3 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1"><span>Step 1</span></a></h3><p>To start containerizing our Application (Moon-buggy), we&#39;ll first create a new container using the UBI9 image as the base.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>buildah from registry.access.redhat.com/ubi9/ubi
<span class="token comment"># Trying to pull registry.access.redhat.com/ubi9/ubi:latest...</span>
<span class="token comment"># Getting image source signatures</span>
<span class="token comment"># Checking if image destination supports signatures</span>
<span class="token comment"># Copying blob 3b7adf049118 done  </span>
<span class="token comment"># Copying config 9f43f297e7 done  </span>
<span class="token comment"># Writing manifest to image destination</span>
<span class="token comment"># Storing signatures</span>
<span class="token comment"># ubi-working-container</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This command will pull the UBI9 image from the Red Hat registry and create a new container using it as the base.</p><p>Buildah appends <code>-working-container</code> to indicate working containers (default).</p><h3 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2"><span>Step 2</span></a></h3><p>Install EPEL repository to container for access to extra packages on Red Hat-based distributions.</p>`,8),S=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("buildah run ubi-working-container -- dnf "),n("span",{class:"token parameter variable"},"-y"),e(),n("span",{class:"token function"},"install"),e(` https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Updating Subscription Management repositories."),e(`
`),n("span",{class:"token comment"},"# Unable to read consumer identity"),e(`
`),n("span",{class:"token comment"},"# Subscription Manager is operating in container mode."),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# This system is not registered with an entitlement server. You can use subscription-manager to register.# "),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# Red Hat Universal Base Image 9 (RPMs     [===                                ] ---  B/s |   0  B     --:-- ETA# "),e(`
`),n("span",{class:"token comment"},"# Red Hat Universal Base Image 9 (RPMs) - BaseOS                                 1.6 MB/s | 509 kB     00:00    # "),e(`
`),n("span",{class:"token comment"},"# Red Hat Universal Base Image 9 (RPMs) - AppStream                              3.4 MB/s | 1.7 MB     00:00    # "),e(`
`),n("span",{class:"token comment"},"# Red Hat Universal Base Image 9 (RPMs) - CodeReady Builder                      745 kB/s | 187 kB     00:00    # "),e(`
`),n("span",{class:"token comment"},"# epel-release-latest-9.noarch.rpm                                                37 kB/s |  19 kB     00:00    # "),e(`
`),n("span",{class:"token comment"},"# Dependencies resolved.# "),e(`
`),n("span",{class:"token comment"},"# ==============================================================================================================# ="),e(`
`),n("span",{class:"token comment"},"#  Package                      Architecture       Version                   Repository                     Size# "),e(`
`),n("span",{class:"token comment"},"# ==============================================================================================================# ="),e(`
`),n("span",{class:"token comment"},"#  epel-release                 noarch             9-7.el9                   @commandline                   19 k# "),e(`
`),n("span",{class:"token comment"},"# Installing:# "),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# Installing weak dependencies:# "),e(`
`),n("span",{class:"token comment"},"#  dnf-plugins-core             noarch             4.3.0-5.el9_2             ubi-9-baseos-rpms              42 k# Transaction Summary"),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# ==============================================================================================================="),e(`
`),n("span",{class:"token comment"},"# Install  2 Packages"),e(`
`),n("span",{class:"token comment"},"# Total download size: 42 k"),e(`
`),n("span",{class:"token comment"},"# Total size: 60 k"),e(`
`),n("span",{class:"token comment"},"# Downloading Packages:"),e(`
`),n("span",{class:"token comment"},"# Installed size: 48 k# "),e(`
`),n("span",{class:"token comment"},"# --------------------------------------------------------------------------------# -------------------------------"),e(`
`),n("span",{class:"token comment"},"# dnf-plugins-core-4.3.0-5.el9_2.noarch.rpm                                      4# 65 kB/s |  42 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# Running transaction check# "),e(`
`),n("span",{class:"token comment"},"# Total                                                                          4# 53 kB/s |  42 kB     00:00     "),e(`
`),n("span",{class:"token comment"},"# Running transaction test# "),e(`
`),n("span",{class:"token comment"},"# Transaction check succeeded.# "),e(`
`),n("span",{class:"token comment"},"# Running transaction# "),e(`
`),n("span",{class:"token comment"},"# Transaction test succeeded.# "),e(`
`),n("span",{class:"token comment"},"#   Installing       : dnf-plugins-core-4.3.0-5.el9_2.noarch                      #                            1/2 # "),e(`
`),n("span",{class:"token comment"},"#   Preparing        :                                                            #                            1/1 # "),e(`
`),n("span",{class:"token comment"},"#   Running scriptlet: epel-release-9-7.el9.noarch                                #                            2/2 # "),e(`
`),n("span",{class:"token comment"},"#   Installing       : epel-release-9-7.el9.noarch                                #                            2/2 # "),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# Many EPEL packages require the CodeReady Builder (CRB) repository.# "),e(`
`),n("span",{class:"token comment"},"# It is recommended that you run /usr/bin/crb enable to enable the CRB repository.#   Verifying        : dnf-plugin# s-core-4.3.0-5.el9_2.noarch                                                 1/2 "),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"#   Verifying        : epel-release-9-7.el9.noarch                                                           2/2 # "),e(`
`),n("span",{class:"token comment"},"# Installed products updated.# "),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# Installed:"),e(`
`),n("span",{class:"token comment"},"#   dnf-plugins-core-4.3.0-5.el9_2.noarch                       epel-release-9-7.el9.noarch                      "),e(`
`),n("span",{class:"token comment"},"#"),e(`
`),n("span",{class:"token comment"},"# Complete!"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("p",null,"This command runs the command",-1),I=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("dnf "),n("span",{class:"token parameter variable"},"-y"),e(),n("span",{class:"token function"},"install"),e(` https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
`),n("span",{class:"token comment"},"# Last metadata expiration check: 0:23:19 ago on Wed 13 Sep 2023 05:39:51 AM UTC."),e(`
`),n("span",{class:"token comment"},"# epel-release-latest-9.noarch.rpm                                                45 kB/s |  19 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# Error: "),e(`
`),n("span",{class:"token comment"},"#  Problem: conflicting requests"),e(`
`),n("span",{class:"token comment"},"#   - nothing provides redhat-release >= 9 needed by epel-release-9-7.el9.noarch"),e(`
`),n("span",{class:"token comment"},"# (try to add '--skip-broken' to skip uninstallable packages or '--nobest' to use not only best candidate packages)"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("dnf "),n("span",{class:"token parameter variable"},"-y"),e(),n("span",{class:"token function"},"install"),e(` --skip-broken https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
`),n("span",{class:"token comment"},"# Waiting for process with pid 69209 to finish."),e(`
`),n("span",{class:"token comment"},"# Last metadata expiration check: 0:23:58 ago on Wed 13 Sep 2023 05:39:51 AM UTC."),e(`
`),n("span",{class:"token comment"},"# epel-release-latest-9.noarch.rpm                                                47 kB/s |  19 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# Dependencies resolved."),e(`
`),n("span",{class:"token comment"},"# Nothing to do."),e(`
`),n("span",{class:"token comment"},"# Complete!"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("p",null,"inside the container, ubi-working-container. This installs the EPEL repository to the container.",-1),C=n("h3",{id:"step-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#step-3"},[n("span",null,"Step 3")])],-1),M=n("p",null,"To install the Moon-buggy package, we'll run the following command after installing the EPEL repository:",-1),E=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("buildah run ubi-working-container -- dnf "),n("span",{class:"token parameter variable"},"-y"),e(),n("span",{class:"token function"},"install"),e(` moon-buggy
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Updating Subscription Management repositories."),e(`
`),n("span",{class:"token comment"},"# Unable to read consumer identity"),e(`
`),n("span",{class:"token comment"},"# Subscription Manager is operating in container mode."),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# This system is not registered with an entitlement server. You can use subscription-manager to register."),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# Extra Packages for Enterprise Linux 9 - x86_64                                  19 MB/s |  19 MB     00:00    "),e(`
`),n("span",{class:"token comment"},"# Extra Packages for Enterprise Linux 9 openh264 (From Cisco) - x86_64           2.1 kB/s | 2.5 kB     00:01    "),e(`
`),n("span",{class:"token comment"},"# Dependencies resolved."),e(`
`),n("span",{class:"token comment"},"# ==============================================================================================================="),e(`
`),n("span",{class:"token comment"},"#  Package                Architecture      Version                        Repository                       Size"),e(`
`),n("span",{class:"token comment"},"# ==============================================================================================================="),e(`
`),n("span",{class:"token comment"},"# Installing:"),e(`
`),n("span",{class:"token comment"},"#  moon-buggy             x86_64            1.0.51-30.el9                  epel                             79 k"),e(`
`),n("span",{class:"token comment"},"# Installing dependencies:"),e(`
`),n("span",{class:"token comment"},"#  alsa-lib               x86_64            1.2.8-3.el9                    ubi-9-appstream-rpms            521 k"),e(`
`),n("span",{class:"token comment"},"#  audiofile              x86_64            1:0.3.6-30.el9                 epel                            131 k"),e(`
`),n("span",{class:"token comment"},"#  esound-libs            x86_64            1:0.2.41-27.el9                epel                             75 k"),e(`
`),n("span",{class:"token comment"},"#  flac-libs              x86_64            1.3.3-10.el9_2.1               ubi-9-appstream-rpms            221 k"),e(`
`),n("span",{class:"token comment"},"#  libogg                 x86_64            2:1.3.4-6.el9                  ubi-9-appstream-rpms             36 k"),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# Transaction Summary"),e(`
`),n("span",{class:"token comment"},"# ==============================================================================================================="),e(`
`),n("span",{class:"token comment"},"# Install  6 Packages"),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# Total download size: 1.0 M"),e(`
`),n("span",{class:"token comment"},"# Installed size: 2.7 M"),e(`
`),n("span",{class:"token comment"},"# Downloading Packages:"),e(`
`),n("span",{class:"token comment"},"# (1/6): esound-libs-0.2.41-27.el9.x86_64.rpm                                    406 kB/s |  75 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# (2/6): audiofile-0.3.6-30.el9.x86_64.rpm                                       684 kB/s | 131 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# (3/6): moon-buggy-1.0.51-30.el9.x86_64.rpm                                     384 kB/s |  79 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# (4/6): libogg-1.3.4-6.el9.x86_64.rpm                                           179 kB/s |  36 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# (5/6): alsa-lib-1.2.8-3.el9.x86_64.rpm                                         2.2 MB/s | 521 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# (6/6): flac-libs-1.3.3-10.el9_2.1.x86_64.rpm                                   951 kB/s | 221 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# ---------------------------------------------------------------------------------------------------------------"),e(`
`),n("span",{class:"token comment"},"# Total                                                                          1.2 MB/s | 1.0 MB     00:00     "),e(`
`),n("span",{class:"token comment"},"# Extra Packages for Enterprise Linux 9 - x86_64                                 1.6 MB/s | 1.6 kB     00:00    "),e(`
`),n("span",{class:"token comment"},"# Importing GPG key 0x3228467C:"),e(`
`),n("span",{class:"token comment"},'#  Userid     : "Fedora (epel9) <epel@fedoraproject.org>"'),e(`
`),n("span",{class:"token comment"},"#  Fingerprint: FF8A D134 4597 106E CE81 3B91 8A38 72BF 3228 467C"),e(`
`),n("span",{class:"token comment"},"#  From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-9"),e(`
`),n("span",{class:"token comment"},"# Key imported successfully"),e(`
`),n("span",{class:"token comment"},"# Running transaction check"),e(`
`),n("span",{class:"token comment"},"# Transaction check succeeded."),e(`
`),n("span",{class:"token comment"},"# Running transaction test"),e(`
`),n("span",{class:"token comment"},"# Transaction test succeeded."),e(`
`),n("span",{class:"token comment"},"# Running transaction"),e(`
`),n("span",{class:"token comment"},"#   Preparing        :                                                                                       1/1 "),e(`
`),n("span",{class:"token comment"},"#   Installing       : libogg-2:1.3.4-6.el9.x86_64                                                           1/6 "),e(`
`),n("span",{class:"token comment"},"#   Installing       : flac-libs-1.3.3-10.el9_2.1.x86_64                                                     2/6 "),e(`
`),n("span",{class:"token comment"},"#   Installing       : audiofile-1:0.3.6-30.el9.x86_64                                                       3/6 "),e(`
`),n("span",{class:"token comment"},"#   Installing       : alsa-lib-1.2.8-3.el9.x86_64                                                           4/6 "),e(`
`),n("span",{class:"token comment"},"#   Installing       : esound-libs-1:0.2.41-27.el9.x86_64                                                    5/6 "),e(`
`),n("span",{class:"token comment"},"#   Installing       : moon-buggy-1.0.51-30.el9.x86_64                                                       6/6 "),e(`
`),n("span",{class:"token comment"},"#   Running scriptlet: moon-buggy-1.0.51-30.el9.x86_64                                                       6/6 "),e(`
`),n("span",{class:"token comment"},"#   Verifying        : audiofile-1:0.3.6-30.el9.x86_64                                                       1/6 "),e(`
`),n("span",{class:"token comment"},"#   Verifying        : esound-libs-1:0.2.41-27.el9.x86_64                                                    2/6 "),e(`
`),n("span",{class:"token comment"},"#   Verifying        : moon-buggy-1.0.51-30.el9.x86_64                                                       3/6 "),e(`
`),n("span",{class:"token comment"},"#   Verifying        : alsa-lib-1.2.8-3.el9.x86_64                                                           4/6 "),e(`
`),n("span",{class:"token comment"},"#   Verifying        : libogg-2:1.3.4-6.el9.x86_64                                                           5/6 "),e(`
`),n("span",{class:"token comment"},"#   Verifying        : flac-libs-1.3.3-10.el9_2.1.x86_64                                                     6/6 "),e(`
`),n("span",{class:"token comment"},"# Installed products updated."),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# Installed:"),e(`
`),n("span",{class:"token comment"},"#   alsa-lib-1.2.8-3.el9.x86_64          audiofile-1:0.3.6-30.el9.x86_64    esound-libs-1:0.2.41-27.el9.x86_64   "),e(`
`),n("span",{class:"token comment"},"#   flac-libs-1.3.3-10.el9_2.1.x86_64    libogg-2:1.3.4-6.el9.x86_64        moon-buggy-1.0.51-30.el9.x86_64      "),e(`
`),n("span",{class:"token comment"},"# "),e(`
`),n("span",{class:"token comment"},"# Complete!"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=m(`<h3 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4"><span>Step 4</span></a></h3><p>To save changes made to the container and create a new deployable image, run the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>buildah commit ubi-working-container moon-buggy
<span class="token comment"># Getting image source signatures</span>
<span class="token comment"># Copying blob c662a0c69917 skipped: already exists  </span>
<span class="token comment"># Copying blob 7eb0760619fd done  </span>
<span class="token comment"># Copying config 1a9a935c5a done  </span>
<span class="token comment"># Writing manifest to image destination</span>
<span class="token comment"># Storing signatures</span>
<span class="token comment"># 1a9a935c5a439a39ae99469be8644aa1e3af79ad8917f70b620e6cd50b36f507</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This command takes the current state of the container ubi-working-container and creates a new image with the name moon-buggy.</p><p>This new image contains everything that was installed and configured in the running container</p><h3 id="step-5" tabindex="-1"><a class="header-anchor" href="#step-5"><span>Step 5</span></a></h3><p>Now that we have the final image of our moon-buggy game, we can check for the image using the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> image list
<span class="token comment"># REPOSITORY                           TAG         IMAGE ID      CREATED         SIZE</span>
<span class="token comment"># localhost/moon-buggy                 latest      1a9a935c5a43  21 seconds ago  296 MB</span>
<span class="token comment"># registry.access.redhat.com/ubi9/ubi  latest      9f43f297e77b  7 days ago      217 MB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-6" tabindex="-1"><a class="header-anchor" href="#step-6"><span>Step 6</span></a></h3><p>Once we confirm that the image <code>moon-buggy</code> is present, we can use the following command to start a new container from the image and play the game:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> run <span class="token parameter variable">--name</span> moon-buggy <span class="token parameter variable">-it</span> moon-buggy /usr/bin/moon-buggy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>`,12);function F(r,L){const i=o("router-link"),d=o("VPCard"),c=o("Tabs"),p=o("TagLinks");return b(),g("div",null,[n("h1",f,[n("a",y,[n("span",null,v(r.$frontmatter.title)+" 관련",1)])]),n("nav",x,[n("ul",null,[n("li",null,[a(i,{to:"#starting-with-moon-buggy-game"},{default:s(()=>[e("Starting with Moon-Buggy Game")]),_:1}),n("ul",null,[n("li",null,[a(i,{to:"#step-1"},{default:s(()=>[e("Step 1")]),_:1})]),n("li",null,[a(i,{to:"#step-2"},{default:s(()=>[e("Step 2")]),_:1})]),n("li",null,[a(i,{to:"#step-3"},{default:s(()=>[e("Step 3")]),_:1})]),n("li",null,[a(i,{to:"#step-4"},{default:s(()=>[e("Step 4")]),_:1})]),n("li",null,[a(i,{to:"#step-5"},{default:s(()=>[e("Step 5")]),_:1})]),n("li",null,[a(i,{to:"#step-6"},{default:s(()=>[e("Step 6")]),_:1})])])])])]),B,a(d,k(h({title:"Containerize Your Application With Buildah And Podman",desc:"Intro",link:"https://developers.redhat.com/courses/containerize-your-application-buildah-and-podman",logo:"https://developers.redhat.com/themes/custom/rhdp2/images/branding/2023_RHDLogo_black_text.svg",background:"rgba(255,255,255,0.2)"})),null,16),w,a(c,{id:"30",data:[{id:"Script"},{id:"Result"}],active:0},{title0:s(({value:t,isActive:l})=>[e("Script")]),title1:s(({value:t,isActive:l})=>[e("Result")]),tab0:s(({value:t,isActive:l})=>[S]),tab1:s(({value:t,isActive:l})=>[R]),_:1}),A,a(c,{id:"41",data:[{id:"Script (Failed)"},{id:"Script"}],active:0},{title0:s(({value:t,isActive:l})=>[e("Script (Failed)")]),title1:s(({value:t,isActive:l})=>[e("Script")]),tab0:s(({value:t,isActive:l})=>[I]),tab1:s(({value:t,isActive:l})=>[T]),_:1},8,["data"]),P,C,M,a(c,{id:"58",data:[{id:"Script"},{id:"Result"}],active:0},{title0:s(({value:t,isActive:l})=>[e("Script")]),title1:s(({value:t,isActive:l})=>[e("Result")]),tab0:s(({value:t,isActive:l})=>[E]),tab1:s(({value:t,isActive:l})=>[z]),_:1}),V,a(p)])}const G=u(_,[["render",F],["__file","01.html.vue"]]),D=JSON.parse('{"path":"/devops/red-hat-containerize-your-application-w-buildah-and-podman/01.html","title":"1. Containerize Your First Application","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"1. Containerize Your First Application","description":"Containerize Your Application With Buildah And Podman > 1. Containerize Your First Application","category":["RedHat"],"tag":["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],"head":[[{"meta":null},{"property":"og:title","content":"Containerize Your Application With Buildah And Podman > 1. Containerize Your First Application"},{"property":"og:description","content":"1. Containerize Your First Application"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/devops/red-hat-containerize-your-application-w-buildah-and-podman/01.html"}]]},"headers":[{"level":2,"title":"Starting with Moon-Buggy Game","slug":"starting-with-moon-buggy-game","link":"#starting-with-moon-buggy-game","children":[{"level":3,"title":"Step 1","slug":"step-1","link":"#step-1","children":[]},{"level":3,"title":"Step 2","slug":"step-2","link":"#step-2","children":[]},{"level":3,"title":"Step 3","slug":"step-3","link":"#step-3","children":[]},{"level":3,"title":"Step 4","slug":"step-4","link":"#step-4","children":[]},{"level":3,"title":"Step 5","slug":"step-5","link":"#step-5","children":[]},{"level":3,"title":"Step 6","slug":"step-6","link":"#step-6","children":[]}]}],"git":{},"readingTime":{"minutes":4.15,"words":1246},"filePathRelative":"devops/red-hat-containerize-your-application-w-buildah-and-podman/01.md","excerpt":"\\n\\n<hr>\\n"}');export{G as comp,D as data};
