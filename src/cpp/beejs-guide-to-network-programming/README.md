---
lang: ko-KR
title: Beej's Guide to Network Programming
description: Beej's Guide to Network Programming
icon: iconfont icon-c
category:
  - C
tag: 
  - crashcourse
  - c
  - network
  - socket
head:
  - - meta:
    - property: og:title
      content: Beej's Guide to Network Programming
    - property: og:description
      content: Beej's Guide to Network Programming
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/cpp/beejs-guide-to-network-programming/
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

<SiteInfo
  name="Beej's Guide to Network Programming"
  desc="Using Internet Sockets - Brian 'Beej Jorgensen' Hall"
  url="https://beej.us/guide/bgnet/html/split-wide/"
  logo="https://beej.us/guide/favicon.gif"
  preview="https://beej.us/guide/bgnet/bgnetcover.png"/>

- [01. Intro](01.md)
  - 01A. Audience
  - 01B. Platform and Compiler
  - 01C. Official Homepage and Books For Sale
  - 01D. Note for Solaris/SunOS Programmers
  - 01E. Note for Windows Programmers
  - 01F. Email Policy
  - 01G. Mirroring
  - 01H. Note for Translators
  - 01I. Copyright, Distribution, and Legal
  - 01J. Dedication
  - 01K. Publishing Information
- 02. What is a socket?
  - 02A. Two Types of Internet Sockets
  - 02B. Low level Nonsense and Network Theory
- 03. IP Addresses, <code>struct</code>s, and Data Munging
   - 3.1 IP Addresses, versions 4 and 6
     - 3.1.1 Subnets
     - 3.1.2 Port Numbers
   - 3.2 Byte Order
   - 3.3 <code>struct</code>s
   - 3.4 IP Addresses, Part Deux
     - 3.4.1 Private (Or Disconnected) Networks
- 04. Jumping from IPv4 to IPv6
- 05. System Calls or Bust
  - 05A. <code>getaddrinfo()</code>—Prepare to launch!
  - 05B. <code>socket()</code>—Get the File Descriptor!
  - 05C. <code>bind()</code>—What port am I on?
  - 05D. <code>connect()</code>—Hey, you!
  - 05E. <code>listen()</code>—Will somebody please call me?
  - 05F. <code>accept()</code>—“Thank you for calling port 3490.”
  - 05G. <code>send()</code> and <code>recv()</code>—Talk to me, baby!
  - 05H. <code>sendto()</code> and <code>recvfrom()</code>—Talk to me, DGRAM-style
  - 05I. <code>close()</code> and <code>shutdown()</code>—Get outta my face!
  - 05J. <code>getpeername()</code>—Who are you?
  - 05K. <code>gethostname()</code>—Who am I?
- 06. Client-Server Background
  - 6.1 A Simple Stream Server
  - 6.2 A Simple Stream Client
  - 6.3 Datagram Sockets
- 07. Slightly Advanced Techniques
  - 07A. Blocking
  - 07B. <code>poll()</code>—Synchronous I/O Multiplexing
  - 07C. <code>select()</code>—Synchronous I/O Multiplexing, Old School
  - 07D. Handling Partial <code>send()</code>s
  - 07E. Serialization—How to Pack Data
  - 07F. Son of Data Encapsulation
  - 07G. Broadcast Packets—Hello, World!
- 08. Common Questions
- 09. Man Pages
  - 09A. <code>accept()</code>
  - 09B. <code>bind()</code>
  - 09C. <code>connect()</code>
  - 09D. <code>close()</code>
  - 09E. <code>getaddrinfo()</code>, <code>freeaddrinfo()</code>, <code>gai_strerror()</code>
  - 09F. <code>gethostname()</code>
  - 09G. <code>gethostbyname()</code>, <code>gethostbyaddr()</code>
  - 09H. <code>getnameinfo()</code>
  - 09I. <code>getpeername()</code>
  - 09J. <code>errno</code>
  - 09K. <code>fcntl()</code>
  - 09L. <code>htons()</code>, <code>htonl()</code>, <code>ntohs()</code>, <code>ntohl()</code>
  - 09M. <code>inet_ntoa()</code>, <code>inet_aton()</code>, <code>inet_addr</code>
  - 09N. <code>inet_ntop()</code>, <code>inet_pton()</code>
  - 09O. <code>listen()</code>
  - 09P. <code>perror()</code>, <code>strerror()</code>
  - 09Q. <code>poll()</code>
  - 09R. <code>recv()</code>, <code>recvfrom()</code>
  - 09S. <code>select()</code>
  - 09T. <code>setsockopt()</code>, <code>getsockopt()</code>
  - 09U. <code>send()</code>, <code>sendto()</code>
  - 09V. <code>shutdown()</code>
  - 09W. <code>socket()</code>
  - 09X. <code>struct sockaddr</code> and pals
- 10. More References
  - 10A. Books
  - 10B. Web References
  - 10C. RFCs

---
