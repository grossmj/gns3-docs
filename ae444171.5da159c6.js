(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(9),r=(n(0),n(211)),i=n(213),s={id:"your-first-cisco-topology",title:"Your First Cisco Topology",sidebar_label:"Your first Cisco topology"},c={id:"getting-started/your-first-cisco-topology",isDocsHomePage:!1,title:"Your First Cisco Topology",description:"Introduction",source:"@site/docs/getting-started/your-first-cisco-topology.md",permalink:"/gns3-docs/docs/getting-started/your-first-cisco-topology",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/getting-started/your-first-cisco-topology.md",sidebar_label:"Your first Cisco topology",sidebar:"someSidebar",previous:{title:"Your First GNS3 Topology",permalink:"/gns3-docs/docs/getting-started/your-first-gns3-topology"},next:{title:"The GNS3 GUI",permalink:"/gns3-docs/docs/using-gns3/beginners/the-gns3-gui"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Create your Topology",id:"create-your-topology",children:[]}],d={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This document explains how to configure a simple GNS3 topology consisting of two Cisco routers. The set up shown here is the same when using either a local GNS3 installation or a GNS3 VM environment."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This document assumes that you already have GNS3 installed and a Cisco IOS router image added to GNS3. If not, please refer to other guides which explain how to download, install and configure GNS3."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Video: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=YQcWuWGjppY"}),"https://www.youtube.com/watch?v=YQcWuWGjppY"))),Object(r.b)("h2",{id:"create-your-topology"},"Create your Topology"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"To create a new GNS3 topology, select a group of devices in the Devices Toolbar by clicking the device type button. In this example the Routers group was selected:")),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/your-first-cisco-topology/1.jpg")}),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"In this example, a c3725 IOS image has already been imported, so we\u2019ll use it."),Object(r.b)("li",{parentName:"ol"},"Drag and drop the selected node (device) to the GNS3 ",Object(r.b)("strong",{parentName:"li"},"Workspace"),". An instance of the node becomes available in the ",Object(r.b)("strong",{parentName:"li"},"Workspace"),". In this example a router is now available:")),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/your-first-cisco-topology/2.jpg")}),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Drag and drop the node again into the GNS3 ",Object(r.b)("strong",{parentName:"li"},"Workspace"),", which will result in routers R1 and R2 appearing in both the ",Object(r.b)("strong",{parentName:"li"},"Workspace"),", and the ",Object(r.b)("strong",{parentName:"li"},"Topology Summary"),":")),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/your-first-cisco-topology/3.jpg")}),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Toolbar Device")," button again (or the X in the corner of it) to collapse the group:")),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/your-first-cisco-topology/4.jpg")}),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Add a Link")," button to start adding links to your topology. The mouse cursor will change to indicate that links can be added:")),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/your-first-cisco-topology/5.jpg")}),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Click on a device in your topology to display available interfaces. In this example we\u2019ll use FastEthernet0/0 of each router to connect them together:")),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/your-first-cisco-topology/6.jpg")}),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Left click FastEthernet0/0 of R1, and connect it to FastEthernet0/0 of R2.")),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/your-first-cisco-topology/7.jpg")}),Object(r.b)("ol",{start:9},Object(r.b)("li",{parentName:"ol"},"Click the Interface Names icon (this is optional), to display the interfaces on each device, that have been connected together.")),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/your-first-cisco-topology/8.jpg")}),Object(r.b)("p",null,"Below, the green ",Object(r.b)("strong",{parentName:"p"},"Start")," button (marked #1) and the ",Object(r.b)("strong",{parentName:"p"},"Console")," button (marked #2) have been selected. This powers on all devices in the ",Object(r.b)("strong",{parentName:"p"},"Workspace"),", as well as launches Solar-Putty and creates tabs for each device:"),Object(r.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/your-first-cisco-topology/9.jpg")}),Object(r.b)("p",null,"Now let\u2019s configure the routers!"),Object(r.b)("p",null,"Since these are IOS images, they will act like real routers, as you\u2019ll see."),Object(r.b)("p",null,"After R1 loads up, we\u2019ll already be at the enable prompt, due to the configuration files GNS3 includes (they also configure \u201clogging sync\u201d and \u201cexec-time 0 0\u201d on  line con 0 for us, and let us bypass that initial configuration dialog).  Let\u2019s look at the interfaces of R1:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1# sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nFastEthernet0/0            unassigned      YES unset  administratively down down\nSerial0/0                  unassigned      YES unset  administratively down down\nFastEthernet0/1            unassigned      YES unset  administratively down down\nSerial0/1                  unassigned      YES unset  administratively down down\nSerial0/2                  unassigned      YES unset  administratively down down\nSerial0/3                  unassigned      YES unset  administratively down down\nSerial0/4                  unassigned      YES unset  administratively down down\nSerial0/5                  unassigned      YES unset  administratively down down\nFastEthernet1/0            unassigned      YES unset  administratively down down\nFastEthernet2/0            unassigned      YES unset  administratively down down\nR1#\n")),Object(r.b)("p",null,"As you can see, the interfaces are all administratively down/down.\nThe same is true of R2:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R2# sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nFastEthernet0/0            unassigned      YES unset  administratively down down\nSerial0/0                  unassigned      YES unset  administratively down down\nFastEthernet0/1            unassigned      YES unset  administratively down down\nSerial0/1                  unassigned      YES unset  administratively down down\nSerial0/2                  unassigned      YES unset  administratively down down\nSerial0/3                  unassigned      YES unset  administratively down down\nSerial0/4                  unassigned      YES unset  administratively down down\nSerial0/5                  unassigned      YES unset  administratively down down\nFastEthernet1/0            unassigned      YES unset  administratively down down\nFastEthernet2/0            unassigned      YES unset  administratively down down\nR2#\n")),Object(r.b)("p",null,"Let\u2019s configure interface fa0/0 and loopback0 of R1:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1# conf t\nEnter configuration commands, one per line.  End with CNTL/Z.\nR1(config)# int fa0/0\nR1(config-if)#ip add 10.1.1.1 255.255.255.0\nR1(config-if)#int loop 0\nR1(config-if)#ip add\n*Mar  1 00:03:42.663: %LINEPROTO-5-UPDOWN: Line protocol on Interface Loopback0, changed state to up\nR1(config-if)#ip add 1.1.1.1 255.255.255.255\nR1(config-if)# end\nR1#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nFastEthernet0/0            10.1.1.1        YES manual administratively down down\nSerial0/0                  unassigned      YES unset  administratively down down\nFastEthernet0/1            unassigned      YES unset  administratively down down\nSerial0/1                  unassigned      YES unset  administratively down down\nSerial0/2                  unassigned      YES unset  administratively down down\nSerial0/3                  unassigned      YES unset  administratively down down\nSerial0/4                  unassigned      YES unset  administratively down down\nSerial0/5                  unassigned      YES unset  administratively down down\nFastEthernet1/0            unassigned      YES unset  administratively down down\nFastEthernet2/0            unassigned      YES unset  administratively down down\nLoopback0                  1.1.1.1         YES manual up                    up\nR1#\n")),Object(r.b)("p",null,"That\u2019s just like a real router. We have to enable the interface first, before it will come up (virtual interfaces like loopback0 automatically get enabled when we create them. SVIs on switches are a little different, since they need to be associated with either an access port or trunk port before they come up)."),Object(r.b)("p",null,"Let\u2019s enable fa0/0 on R1:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1(config)#int fa0/0\nR1(config-if)#no shut\nR1(config-if)#end\nR1#\n*Mar  1 00:06:52.391: %SYS-5-CONFIG_I: Configured from console by console\nR1#sh\n*Mar  1 00:06:52.667: %LINK-3-UPDOWN: Interface FastEthernet0/0, changed state to up\n*Mar  1 00:06:53.667: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up\n")),Object(r.b)("p",null,"There we go! That\u2019s more like it! Now let\u2019s check those interfaces again:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1#sh ip int br\nInterface                  IP-Address      OK? Method Status                Protocol\nFastEthernet0/0            10.1.1.1        YES manual up                    up\nSerial0/0                  unassigned      YES unset  administratively down down\nFastEthernet0/1            unassigned      YES unset  administratively down down\nSerial0/1                  unassigned      YES unset  administratively down down\nSerial0/2                  unassigned      YES unset  administratively down down\nSerial0/3                  unassigned      YES unset  administratively down down\nSerial0/4                  unassigned      YES unset  administratively down down\nSerial0/5                  unassigned      YES unset  administratively down down\nFastEthernet1/0            unassigned      YES unset  administratively down down\nFastEthernet2/0            unassigned      YES unset  administratively down down\nLoopback0                  1.1.1.1         YES manual up                    up\nR1#\n")),Object(r.b)("p",null,"And as expected, fa0/0 is up/up. Let\u2019s configure the interfaces on R2 next:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R2#conf t\n\nEnter configuration commands, one per line.  End with CNTL/Z.\n\nR2(config)#int fa0/0\nR2(config-if)#no shut\nR2(config-if)#\n\n*Mar  1 00:00:36.899: %LINK-3-UPDOWN: Interface FastEthernet0/0, changed state to up\n*Mar  1 00:00:37.899: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up\n\nR2(config-if)#ip add 10.1.1.2 255.255.255.0\nR2(config-if)#int loop 0\nR2(config-if)#\n\n*Mar  1 00:00:53.215: %LINEPROTO-5-UPDOWN: Line protocol on Interface Loopback0, changed state to up\n\nR2(config-if)#ip add 2.2.2.2 255.255.255.25\nBad mask 0xFFFFFF19 for address 2.2.2.2\nR2(config-if)#ip add 2.2.2.2 255.255.255.255\nR2(config-if)#\n")),Object(r.b)("p",null,"Since we used \u201cno shut\u201d on int fa0/0 already, that interface has already gone up/up, and loopback0 went up/up as soon as we created that interface. But notice that error I\u2019ve bolded, where I entered the /32 subnet mask incorrectly.  This is an IOS image off a real router, and as such, mistakes you make will cause the router to output messages letting you know something is amiss."),Object(r.b)("p",null,"If we run \u201csh version\u201d on R2, we can see the image it\u2019s using, just like a physical router will:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R2#sh ver\n\nCisco IOS Software, 3700 Software (C3725-ADVENTERPRISEK9-M), Version 12.4(15)T14, RELEASE SOFTWARE (fc2)\n\nTechnical Support: http://www.cisco.com/techsupport\nCopyright (c) 1986-2010 by Cisco Systems, Inc.\nCompiled Tue 17-Aug-10 12:08 by prod_rel_team\nROM: ROMMON Emulation Microcode\nROM: 3700 Software (C3725-ADVENTERPRISEK9-M), Version 12.4(15)T14, RELEASE SOFTWARE (fc2)\n\n")),Object(r.b)("p",null,"....truncated for brevity......."),Object(r.b)("p",null,"I truncated the output, but you can can see the router knows it\u2019s running an advanced enterprise c3725 image, along with the version number."),Object(r.b)("p",null,"Since I quickly corrected my mistake, let\u2019s see if the routers can ping one other, via the IP address assigned to their fa0/0 interfaces:"),Object(r.b)("p",null,"At this point, R2 should be able to ping R1, which it can."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R2#ping 10.1.1.1\nType escape sequence to abort.\nSending 5, 100-byte ICMP Echos to 10.1.1.1, timeout is 2 seconds:\n.!!!!\nSuccess rate is 80 percent (4/5), round-trip min/avg/max = 20/27/32 ms\nR2#\n")),Object(r.b)("p",null,"(that single missed ping was due to the initial ARP broadcast, which is normal)."),Object(r.b)("p",null,"R1 should also be able to ping R2, which it can:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1#ping 10.1.1.2\nType escape sequence to abort.\nSending 5, 100-byte ICMP Echos to 10.1.1.2, timeout is 2 seconds:\n!!!!!\nSuccess rate is 100 percent (5/5), round-trip min/avg/max = 4/8/12 ms\nR1#\n")),Object(r.b)("p",null,"(there's no dropped ping, since the ARP exchange already took place)."),Object(r.b)("p",null,"As expected, pings succeed.  Now, because the routers don\u2019t contain routes to the /32 addresses assigned to each others loopback0 interfaces, let\u2019s use a routing protocol (ospf in this instance), so they can each dynamically learn how to reach those:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1(config)#router ospf 1\nR1(config-router)#router-id 1.1.1.1\nR1(config-router)#network 0.0.0.0 255.255.255.255 area 0\nR1(config-router)#end\nR1#\n")),Object(r.b)("p",null,'(note:  using "network 0.0.0.0 255.255.255.255 area 0" in ospf is a shortcut to enable ospf on all interfaces in an ospf area. It\'s not always desirable in the real world, but is fine for lab purposes)'),Object(r.b)("p",null,"Let\u2019s do the same on R2L"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R2#conf t\nEnter configuration commands, one per line.  End with CNTL/Z.\nR2(config)#router ospf 1\nR2(config-router)#router-id 2.2.2.2\nR2(config-router)#network 0.0.0.0 255.255.255.255 area 0\nR2(config-router)#end\nR2#\n*Mar  1 00:15:54.155: %OSPF-5-ADJCHG: Process 1, Nbr 1.1.1.1 on FastEthernet0/0 from LOADING to FULL, Loading Done\nR2#\n*Mar  1 00:15:57.271: %SYS-5-CONFIG_I: Configured from console by console\nR2#\n")),Object(r.b)("p",null,"(notice that an ospf neighbor relationship between R1 and R2 has already formed)"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R2#sh ip ospf neigh\nNeighbor ID     Pri   State           Dead Time   Address         Interface\n1.1.1.1           1   FULL/DR         00:00:34    10.1.1.1        FastEthernet0/0\nR2#\n")),Object(r.b)("p",null,"Running this command on R2 proves that not only was the relationship formed, but it\u2019s in the FULL state, as opposed to 2WAY or EXSTART.  "),Object(r.b)("p",null,"Now let\u2019s check the routing table on R1:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1#\n*Mar  1 00:25:43.155: %OSPF-5-ADJCHG: Process 1, Nbr 2.2.2.2 on FastEthernet0/0 from LOADING to FULL, Loading Done\nR1#sh ip route\n\nCodes: C - connected, S - static, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2\n       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2\n       ia - IS-IS inter area, * - candidate default, U - per-user static route\n       o - ODR, P - periodic downloaded static route\n\nGateway of last resort is not set\n     1.0.0.0/32 is subnetted, 1 subnets\nC       1.1.1.1 is directly connected, Loopback0\n     2.0.0.0/32 is subnetted, 1 subnets\nO       2.2.2.2 [110/11] via 10.1.1.2, 00:03:26, FastEthernet0/0\n     10.0.0.0/24 is subnetted, 1 subnets\nC       10.1.1.0 is directly connected, FastEthernet0/0\nR1#\n")),Object(r.b)("p",null,"R1 already displayed the neighbor relationship was formed earlier (we were just busy looking at R2), and its routing table does contain an OSPF route for 2.2.2.2."),Object(r.b)("p",null,"We should now be able to ping the loopbacks of both routers:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1#ping 2.2.2.2\nType escape sequence to abort.\nSending 5, 100-byte ICMP Echos to 2.2.2.2, timeout is 2 seconds:\n!!!!!\nSuccess rate is 100 percent (5/5), round-trip min/avg/max = 12/22/32 ms\nR1#\nR2#ping 1.1.1.1\nType escape sequence to abort.\nSending 5, 100-byte ICMP Echos to 1.1.1.1, timeout is 2 seconds:\n!!!!!\nSuccess rate is 100 percent (5/5), round-trip min/avg/max = 8/14/32 ms\nR2#\n")),Object(r.b)("p",null,"And the pings succeed!  "),Object(r.b)("p",null,"By default, GNS3 will not save the configuration changes you\u2019ve made (just like a real router), you\u2019ll need to manually save them before shutting down your routers and closing the project:"),Object(r.b)("p",null,"We can use the long-form command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1#copy running-config startup-config\nDestination filename [startup-config]?\nBuilding configuration...\n[OK]\n")),Object(r.b)("p",null,"Or the short-form command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"R1#wr\nBuilding configuration...\n[OK]\nR1#\n")),Object(r.b)("p",null,"After saving your configuration changes, you can shut down your project (and even GNS3 completely if you need to), and when you reload your project at a later date, the changes you saved in this project will still be present."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Congratulations!")," You have configured a basic GNS3 topology. From here on, you can create much more complex topologies and test and learn various technologies such as OSPF, EIGRP, BGP, STP and many others."))}u.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,g=u["".concat(i,".").concat(p)]||u[p]||b[p]||r;return n?a.a.createElement(g,s(s({ref:t},l),{},{components:n})):a.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var o=n(0),a=n(52);t.a=function(){return Object(o.useContext)(a.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(76);var o=n(212),a=n(214);function r(e,t){var n=void 0===t?{}:t,r=n.forcePrependBaseUrl,i=void 0!==r&&r,s=n.absolute,c=void 0!==s&&s,l=Object(o.a)().siteConfig,d=(l=void 0===l?{}:l).baseUrl,u=void 0===d?"/":d,b=l.url;if(!e)return e;if(i)return u+e;if(!Object(a.a)(e))return e;var p=u+e.replace(/^\//,"");return c?b+p:p}},214:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return o}))}}]);