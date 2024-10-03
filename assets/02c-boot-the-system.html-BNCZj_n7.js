import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,a as e,t as u,b as o,w as n,n as p,g as m,d as t,e as r,r as a,o as y}from"./app-U_bew1in.js";const f={},b={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},_={class:"table-of-contents"},v=e("hr",null,null,-1),w=r('<hr><h2 id="_1-boot-process-overview" tabindex="-1"><a class="header-anchor" href="#_1-boot-process-overview"><span>1. Boot Process Overview</span></a></h2><p>Now that we&#39;ve gotten a pretty good grasp at some of the important components of Linux, let&#39;s piece them altogether by learning about how the system boots. When you turn on your machine, it does some neat things like show you the logo screen, run through some different messages and then at the end you&#39;re prompted with a login window. Well there is actually a ton of stuff happening between when you push the power button to when you login and we&#39;ll discuss those in this course.</p><p>The Linux boot process can be broken down in 4 simple stages:</p><h3 id="_1-bios" tabindex="-1"><a class="header-anchor" href="#_1-bios"><span>1. BIOS</span></a></h3><p>The BIOS (stands for <em>&quot;Basic Input/Output System&quot;</em>) initializes the hardware and makes sure with a Power-on self test (POST) that all the hardware is good to go. The main job of the BIOS is to load up the bootloader.</p><h3 id="_2-bootloader" tabindex="-1"><a class="header-anchor" href="#_2-bootloader"><span>2. Bootloader</span></a></h3><p>The bootloader loads the kernel into memory and then starts the kernel with a set of kernel parameters. One of the most common bootloaders is GRUB, which is a universal Linux standard.</p><h3 id="_3-kernel" tabindex="-1"><a class="header-anchor" href="#_3-kernel"><span>3. Kernel</span></a></h3><p>When the kernel is loaded, it immediately initializes devices and memory. The main job of the kernel is to load up the init process.</p><h3 id="_4-init" tabindex="-1"><a class="header-anchor" href="#_4-init"><span>4. Init</span></a></h3><p>Remember the init process is the first process that gets started, init starts and stops essential service process on the system. There are three major implementations of init in Linux distributions. We will go over them briefly and then dive into them in another course.</p><p>There it is, the (very) simple explanation of the Linux boot process. We will go into more detail about these stages in the next lessons.</p><p>Reboot your system and see if you can spot each step as your machine boots up.</p><hr><h2 id="_2-boot-process-bios" tabindex="-1"><a class="header-anchor" href="#_2-boot-process-bios"><span>2. Boot Process: BIOS</span></a></h2><h3 id="bios" tabindex="-1"><a class="header-anchor" href="#bios"><span>BIOS</span></a></h3><p>The first step in the Linux boot process is the BIOS which performs system integrity checks. The BIOS is a firmware that comes most common in IBM PC compatible computers, the dominant type of computers out there today. You&#39;ve probably used the BIOS firmware to change the boot order of your harddisks, check system time, your machine&#39;s mac address, etc. The BIOS&#39;s main goal is to find the system bootloader.</p><p>So once the BIOS boots up the hard drive, it searches for the boot block to figure out how to boot up the system. Depending on how you partition your disk, it will look to the master boot record (MBR) or GPT. The MBR is located in the first sector of the hard drive, the first 512 bytes. The MBR contains the code to load another program somewhere on the disk, this program in turn actually loads up our bootloader.</p><p>Now if you partitioned your disk with GPT, the location of the bootloader changes a bit.</p><h3 id="uefi" tabindex="-1"><a class="header-anchor" href="#uefi"><span>UEFI</span></a></h3><p>There is another way to boot up your system instead of using BIOS and that is with UEFI (stands for <em>&quot;Unified extensible firmware interface&quot;</em>). UEFI was designed to be successor to BIOS, most hardware out there today comes with UEFI firmware built in. Macintosh machines have been using EFI booting for years now and Windows has mostly moved all of their stuff over to UEFI booting. The GPT format was intended for use with EFI. You don&#39;t necessarily need EFI if you are booting a GPT disk. The first sector of a GPT disk is reserved for a &quot;protective MBR&quot; to make it possible to boot a BIOS-based machine.</p><p>UEFI stores all the information about startup in an .efi file. This file is stored on a special partition called EFI system partition on the hardware. Inside this partition it will contain the bootloader. UEFI comes with many improvements from the traditional BIOS firmware. However, since we are using Linux, the majority of us are using BIOS. So all of these lessons will be going along with that pretense.</p><p>Go into your BIOS menu and see if you have UEFI booting enabled.</p><hr><h2 id="_3-boot-process-bootloader" tabindex="-1"><a class="header-anchor" href="#_3-boot-process-bootloader"><span>3. Boot Process: Bootloader</span></a></h2><p>The bootloader&#39;s main responsibilities are:</p><ul><li>Booting into an operating system, it can also be used to boot to non-Linux operating systems</li><li>Select a kernel to use</li><li>Specify kernel parameters</li></ul><p>The most common bootloader for Linux is GRUB, you are most likely using it on your system. There are many other bootloaders that you can use such as LILO, efilinux, coreboot, SYSLINUX and more. However, we will just be working with GRUB as our bootloader.</p><p>So we know that the bootloader&#39;s main goal is to load up the kernel, but where does it find the kernel? To find it, we will need to look at our kernel parameters. The parameters can be found by going into the GRUB menu on startup using the <kbd>e</kbd> key. If you don&#39;t have GRUB no worries, we&#39;ll go through the boot parameters that you will see:</p>',30),k=e("li",null,[e("code",null,"initrd"),t(" - Specifies the location of initial RAM disk (we'll talk more about this in the next lesson).")],-1),B=e("li",null,[e("code",null,"BOOT_IMAGE"),t(" - This is where the kernel image is located")],-1),I=e("code",null,"root",-1),x=e("code",null,"/dev/sda1",-1),S=e("li",null,[e("code",null,"ro"),t(" - This parameter is pretty standard, it mounts the fileystem as read-only mode.")],-1),T=e("li",null,[e("code",null,"quiet"),t(" - This is added so that you don't see display messages that are going on in the background during boot.")],-1),O=e("li",null,[e("code",null,"splash"),t(" - This lets the splash screen be shown.")],-1),P=e("p",null,[t("If you have GRUB as your bootloader, go into the GRUB menu with "),e("kbd",null,"e"),t(" and take a look at the settings.")],-1),U=e("hr",null,null,-1),j=e("h2",{id:"_4-boot-process-kernel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-boot-process-kernel"},[e("span",null,"4. Boot Process: Kernel")])],-1),L=e("p",null,"So now that our bootloader has passed on the necessary parameters, let's see how it get's started:",-1),R=e("h3",{id:"initrd-vs-initramfs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#initrd-vs-initramfs"},[e("span",null,"Initrd vs. Initramfs")])],-1),E=e("code",null,"initrd",-1),F=e("code",null,"initrd",-1),G=e("code",null,"initrd",-1),M=e("code",null,"initramfs",-1),J=e("code",null,"initrd",-1),K=r('<h3 id="mounting-the-root-filesystem" tabindex="-1"><a class="header-anchor" href="#mounting-the-root-filesystem"><span>Mounting the root filesystem</span></a></h3><p>Now the kernel has all the modules it needs to create a root device and mount the root partition. Before you go any further though, the root partition is actually mounted in read-only mode first so that fsck can run safely and check for system integrity. Afterwards it remounts the root filesystem in read-write mode. Then the kernel locates the init program and executes it.</p><hr><h2 id="_5-boot-process-init" tabindex="-1"><a class="header-anchor" href="#_5-boot-process-init"><span>5. Boot Process: Init</span></a></h2><p>We&#39;ve discussed init in previous lessons and know that it is the first process that gets started and it starts all the other essential services on our system. But how?</p><p>There are actually three major implementations of init in Linux:</p><h3 id="system-v-init-sysv" tabindex="-1"><a class="header-anchor" href="#system-v-init-sysv"><span>System V init (sysv)</span></a></h3><p>This is the traditional init system. It sequentially starts and stops processes, based on startup scripts. The state of the machine is denoted by runlevels, each runlevel starts or stops a machine in a different way.</p><h3 id="upstart" tabindex="-1"><a class="header-anchor" href="#upstart"><span>Upstart</span></a></h3><p>This is the init you&#39;ll find on older Ubuntu installations. Upstart uses the idea of jobs and events and works by starting jobs that performs certain actions in response to events.</p><h3 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd"><span>Systemd</span></a></h3><p>This is the new standard for init, it is goal oriented. Basically you have a goal that you want to achieve and systemd tries to satisfy the goal&#39;s dependencies to complete the goal.</p><p>We have an entire course on Init systems where we will dive into each of these systems in more detail.</p><hr>',14);function N(l,V){const s=a("router-link"),h=a("VPCard"),i=a("FontIcon");return y(),c("div",null,[e("h1",b,[e("a",g,[e("span",null,u(l.$frontmatter.title)+" 관련",1)])]),e("nav",_,[e("ul",null,[e("li",null,[o(s,{to:"#_1-boot-process-overview"},{default:n(()=>[t("1. Boot Process Overview")]),_:1}),e("ul",null,[e("li",null,[o(s,{to:"#_1-bios"},{default:n(()=>[t("1. BIOS")]),_:1})]),e("li",null,[o(s,{to:"#_2-bootloader"},{default:n(()=>[t("2. Bootloader")]),_:1})]),e("li",null,[o(s,{to:"#_3-kernel"},{default:n(()=>[t("3. Kernel")]),_:1})]),e("li",null,[o(s,{to:"#_4-init"},{default:n(()=>[t("4. Init")]),_:1})])])]),e("li",null,[o(s,{to:"#_2-boot-process-bios"},{default:n(()=>[t("2. Boot Process: BIOS")]),_:1}),e("ul",null,[e("li",null,[o(s,{to:"#bios"},{default:n(()=>[t("BIOS")]),_:1})]),e("li",null,[o(s,{to:"#uefi"},{default:n(()=>[t("UEFI")]),_:1})])])]),e("li",null,[o(s,{to:"#_3-boot-process-bootloader"},{default:n(()=>[t("3. Boot Process: Bootloader")]),_:1})]),e("li",null,[o(s,{to:"#_4-boot-process-kernel"},{default:n(()=>[t("4. Boot Process: Kernel")]),_:1}),e("ul",null,[e("li",null,[o(s,{to:"#initrd-vs-initramfs"},{default:n(()=>[t("Initrd vs. Initramfs")]),_:1})]),e("li",null,[o(s,{to:"#mounting-the-root-filesystem"},{default:n(()=>[t("Mounting the root filesystem")]),_:1})])])]),e("li",null,[o(s,{to:"#_5-boot-process-init"},{default:n(()=>[t("5. Boot Process: Init")]),_:1}),e("ul",null,[e("li",null,[o(s,{to:"#system-v-init-sysv"},{default:n(()=>[t("System V init (sysv)")]),_:1})]),e("li",null,[o(s,{to:"#upstart"},{default:n(()=>[t("Upstart")]),_:1})]),e("li",null,[o(s,{to:"#systemd"},{default:n(()=>[t("Systemd")]),_:1})])])])])]),v,o(h,p(m({title:"Boot the System",desc:"Learn about the stages of the Linux boot process.",link:"https://linuxjourney.com/lesson/boot-process-overview",logo:"https://linuxjourney.com/assets/booting-32f576a824d0160350167ece5da8fb719edd1e814ecbfaec20f6da7d9f31bfa0.png",background:"rgba(24,188,156,0.2)"})),null,16),w,e("ul",null,[k,B,e("li",null,[I,t(" - The location of the root filesystem, the kernel searches inside this location to find init. It is often represented by it's UUID or the device name such as "),o(i,{icon:"fas fa-folder-open"}),x,t(".")]),S,T,O]),P,U,j,L,R,e("p",null,[t("There is a bit of a chicken and egg problem when we talk about the kernel bootup. The kernel manages our systems hardware, however not all drivers are available to the kernel during bootup. So we depend on a temporary root filesystem that contains just the essential modules that the kernel needs to get to the rest of the hardware. In older versions of Linux, this job was given to the "),o(i,{icon:"fas fa-file-lines"}),E,t(" (initial ram disk). The kernel would mount the "),o(i,{icon:"fas fa-file-lines"}),F,t(", get the necessary bootup drivers, then when it was done loading everything it needed, it would replace the "),o(i,{icon:"fas fa-file-lines"}),G,t(" with the actual root filesystem. These days, we have something called the "),M,t(", this is a temporary root filesystem that is built into the kernel itself to load all the necessary drivers for the real root filesystem, so no more locating the "),o(i,{icon:"fas fa-file-lines"}),J,t(" file.")]),K])}const C=d(f,[["render",N],["__file","02c-boot-the-system.html.vue"]]),z=JSON.parse('{"path":"/devops/linux-journey/02-journeyman/02c-boot-the-system.html","title":"Journeyman > 02c. Boot the System","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Journeyman > 02c. Boot the System","description":"Linux Journey > Journeyman > 02c. Boot the System","category":["Linux"],"tag":["crashcourse","linux","os","networking"],"head":[[{"meta":null},{"property":"og:title","content":"Linux Journey > Journeyman > 02c. Boot the System"},{"property":"og:description","content":"02c. Boot the System"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/devops/linux-journey/02-journeyman/02c-boot-the-system.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/devops/linux-journey/02-journeyman/02c-boot-the-system.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Journeyman > 02c. Boot the System"}],["meta",{"property":"og:description","content":"Linux Journey > Journeyman > 02c. Boot the System"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"os"}],["meta",{"property":"article:tag","content":"networking"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Journeyman > 02c. Boot the System\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Boot Process Overview","slug":"_1-boot-process-overview","link":"#_1-boot-process-overview","children":[{"level":3,"title":"1. BIOS","slug":"_1-bios","link":"#_1-bios","children":[]},{"level":3,"title":"2. Bootloader","slug":"_2-bootloader","link":"#_2-bootloader","children":[]},{"level":3,"title":"3. Kernel","slug":"_3-kernel","link":"#_3-kernel","children":[]},{"level":3,"title":"4. Init","slug":"_4-init","link":"#_4-init","children":[]}]},{"level":2,"title":"2. Boot Process: BIOS","slug":"_2-boot-process-bios","link":"#_2-boot-process-bios","children":[{"level":3,"title":"BIOS","slug":"bios","link":"#bios","children":[]},{"level":3,"title":"UEFI","slug":"uefi","link":"#uefi","children":[]}]},{"level":2,"title":"3. Boot Process: Bootloader","slug":"_3-boot-process-bootloader","link":"#_3-boot-process-bootloader","children":[]},{"level":2,"title":"4. Boot Process: Kernel","slug":"_4-boot-process-kernel","link":"#_4-boot-process-kernel","children":[{"level":3,"title":"Initrd vs. Initramfs","slug":"initrd-vs-initramfs","link":"#initrd-vs-initramfs","children":[]},{"level":3,"title":"Mounting the root filesystem","slug":"mounting-the-root-filesystem","link":"#mounting-the-root-filesystem","children":[]}]},{"level":2,"title":"5. Boot Process: Init","slug":"_5-boot-process-init","link":"#_5-boot-process-init","children":[{"level":3,"title":"System V init (sysv)","slug":"system-v-init-sysv","link":"#system-v-init-sysv","children":[]},{"level":3,"title":"Upstart","slug":"upstart","link":"#upstart","children":[]},{"level":3,"title":"Systemd","slug":"systemd","link":"#systemd","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":9}]},"readingTime":{"minutes":4.96,"words":1487},"filePathRelative":"devops/linux-journey/02-journeyman/02c-boot-the-system.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{C as comp,z as data};