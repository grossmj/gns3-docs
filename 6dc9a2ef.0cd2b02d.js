(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{173:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return r})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return l}));var a=o(2),n=(o(0),o(222));const i={id:"which-emulators-should-i-use",title:"Which emulator should I use?",sidebar_label:"Which emulator should I use?"},r={id:"emulators/which-emulators-should-i-use",isDocsHomePage:!1,title:"Which emulator should I use?",description:"GNS3 supports multiple emulators which you can use in your GNS3 projects. This gives you lots of flexibility when building topologies.",source:"@site/docs/emulators/which-emulators-should-i-use.md",permalink:"/gns3-docs/docs/emulators/which-emulators-should-i-use",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/emulators/which-emulators-should-i-use.md",sidebar_label:"Which emulator should I use?",sidebar:"someSidebar",previous:{title:"Why does GNS3 use UUIDs?",permalink:"/gns3-docs/docs/using-gns3/why-gns3-uses-uuid"},next:{title:"Non-Native IOU for Windows and OSX",permalink:"/gns3-docs/docs/emulators/non-native-iou-for-windows-and-osx"}},s=[{value:"Use GNS3 VM or not?",id:"use-gns3-vm-or-not",children:[]},{value:"Cisco",id:"cisco",children:[{value:"Dynamips",id:"dynamips",children:[]},{value:"Qemu and VIRL",id:"qemu-and-virl",children:[]}]},{value:"VMware / VirtualBox",id:"vmware--virtualbox",children:[]},{value:"VPCS",id:"vpcs",children:[]},{value:"Docker",id:"docker",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"GNS3 supports multiple emulators which you can use in your GNS3 projects. This gives you lots of flexibility when building topologies."),Object(n.b)("p",null,"This document will help you decide which emulator or simulator you should use in your GNS3 topologies."),Object(n.b)("h2",{id:"use-gns3-vm-or-not"},"Use GNS3 VM or not?"),Object(n.b)("p",null,"The GNS3 VM is recommended for most situations when you are using Windows or Mac OS."),Object(n.b)("p",null,"The GNS3 development team have worked hard to create a lightweight, robust way of creating GNS3 topologies that avoids multiple common issues experienced when using a local install of GNS3. This includes the lack of proper Qemu support when running VIRL natively on Windows (not recommended), as well as a method to easily add docker containers to your projects."),Object(n.b)("p",null,"However, if you only want to create basic GNS3 topologies using Cisco IOS routers, a local (Dynamips) install will suffice. This means that you only install the GNS3 GUI (all-in-one)."),Object(n.b)("p",null,"This is simpler in some ways to set up, but does have limitations and should be seen as the starting point in your GNS3 journey. As soon as you are comfortable with GNS3, it is recommended that you move to a GNS3 VM setup to make the most of GNS3 options and optimization."),Object(n.b)("h2",{id:"cisco"},"Cisco"),Object(n.b)("h3",{id:"dynamips"},"Dynamips"),Object(n.b)("p",null,"Dynamips is the technology leveraged by GNS3 since inception and emulates Cisco routers and basic switching using the Etherswitch module. It emulates older Cisco hardware such as 3725 routers and uses actual Cisco IOS images. You can copy a supported IOS image from a  physical network device and use it with GNS3."),Object(n.b)("p",null,"You will need access to either physical hardware or have a Cisco support contract to get an IOS image. GNS3 is unable to provide IOS images for your labs."),Object(n.b)("p",null,"Cisco does not support you using IOS images on non-Cisco hardware and you may run into bugs emulating Cisco hardware."),Object(n.b)("h3",{id:"qemu-and-virl"},"Qemu and VIRL"),Object(n.b)("p",null,"Most manufacturers offer Qemu images which can also be used with GNS3. To use Cisco images such as IOSvL2, you will need to purchase a Cisco VIRL subscription. This will allow you to access images that work with GNS3 and approved by Cisco team. VIRL images are created specifically for simulation and work well especially if you want newer versions of the Cisco operating system and modern features."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"GNS3 RECOMMENDATION:"),"  Qemu is the best choice for creating and using Cisco GNS3 topologies. The topologies are portable and lighter than using native VirtualBox and VMware virtual machines. An ASAv for example can be run natively in VMware or in Qemu. If you are not using Linux it is recommended that you run VIRL appliances directly in the GNS3 VM which leverages Qemu."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Qemu (not VIRL) is also used for the emulation of other vendors such as Cumulus Linux. VIRL is Cisco specific, but Qemu is not.IOU"))),Object(n.b)("p",null,"IOU is a Cisco internal way of running IOS on Unix. It is not CPU and memory resource intensive which makes it a good choice."),Object(n.b)("p",null,"IOU supports both routers and switches."),Object(n.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"IOU is a Cisco internal tool that has not been publicly released, and a Cisco employee will need to give you both the software and a license. You will also not get support from Cisco TAC."))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"GNS3 RECOMMENDATIONS")," GNS3 does not recommend the use of IOU. The software is not officially released by Cisco, and those images can often be buggy.  If you want a stable platform and officially released Cisco images which are constantly updated, GNS3 recommends the use of Qemu and Cisco VIRL images."),Object(n.b)("h2",{id:"vmware--virtualbox"},"VMware / VirtualBox"),Object(n.b)("p",null,"Both VMware and VirtualBox provide an easy way to virtualize devices and can be added to your GNS3 topologies."),Object(n.b)("p",null,"VMware workstation is recommended when nesting of operating systems is required due to better VTx support for both AMD and Intel CPUs.  "),Object(n.b)("p",null,"Virtualbox had nested virtualization support added in version 6.0, but as of 6.0.12, that support is for AMD CPUs only.  All questions about when nested virtualization support for Intel CPUs will be added, must be directed to the Virtualbox forums, not the GNS3 user forums."),Object(n.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Be aware that GNS3 only integrates with VMware and VirtualBox and does not have control of the configuration of your virtual machines (VMs). Any configuration settings of the virtual machines is controlled by the virtualization software and not GNS3. This means that that you will not be able to copy or move your VM as part of your GNS3 project. Therefore, sharing of topologies or moving from one computer to another is more difficult when using native VMware and VirtualBox VMs."))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"ADVANTAGES:")," VMware and Virtualbox do provide many advantages. They allow you to build complex GNS3 topologies that include servers and PCs that run software from Solarwinds and many other vendors which can be integrated directly in your GNS3 topologies."),Object(n.b)("h2",{id:"vpcs"},"VPCS"),Object(n.b)("p",null,"Virtual PC Simulator (VPCS) is a lightweight way of emulating a very basic PC. VPCS uses very little memory and is therefore a good choice when you want to emulate a PC without a GUI and if you only require simple commands such as ping to test connectivity in your GNS3 networks."),Object(n.b)("p",null,"If you want more complex servers or PCs, use Qemu, Docker,  VMware or VirtualBox."),Object(n.b)("h2",{id:"docker"},"Docker"),Object(n.b)("p",null,"Docker support in GNS3 gives you the option of running multiple containers as part of your GNS3 topologies. Docker is a good choice when you want to emulate a server or PC providing a specific service such as TFTP server, mail server or web server; and you want to do that without using large amounts of memory."),Object(n.b)("p",null,"Docker uses less memory than Qemu or a virtual machine (VM) in VMware / Virtualbox does and has become a popular way today of instantiating a process or service versus the traditional method of booting entire VM to provide an individual service."),Object(n.b)("p",null,"In GNS3, Docker is used to emulate a lightweight Linux PC with one service. This is more efficient than the traditional way of"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Emulating PC hardware using Qemu or VMware"),Object(n.b)("li",{parentName:"ol"},"Installing and running a full operating system (OS) on that emulated hardware"),Object(n.b)("li",{parentName:"ol"},"Installing and running a service (application) on the OS.")),Object(n.b)("p",null,"Traditionally, VMware or Qemu virtualizes the PC hardware, but you still need an operating system installed for applications. Docker takes this a step further by virtualizing the operating system for lightweight instantiation of multiple processes."),Object(n.b)("p",null,"Because you are able to create Docker images with a shell that supports multiple tools, Docker can be used as a powerful replacement of VPCS."),Object(n.b)("p",null,"Docker is more complicated to set up when compared to Qemu. However, because of the significant reduction in CPU and memory consumption, Docker is a great choice for your GNS3 projects."))}l.isMDXComponent=!0},222:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return h}));var a=o(0),n=o.n(a);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(o),p=a,h=d["".concat(r,".").concat(p)]||d[p]||m[p]||i;return o?n.a.createElement(h,s(s({ref:t},l),{},{components:o})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);