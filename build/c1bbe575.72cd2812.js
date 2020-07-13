(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(2),a=n(9),i=(n(0),n(211)),r=n(213),c={id:"the-nat-node",title:"The NAT node",sidebar_label:"The NAT node"},s={id:"using-gns3/advanced/the-nat-node",isDocsHomePage:!1,title:"The NAT node",description:"Starting with GNS3 2.0,  the NAT node became available. This node allows you to connect a topology to internet via NAT. The Internet node was deprecated in favor of this node, and the Cloud node.",source:"@site/docs/using-gns3/advanced/the-nat-node.md",permalink:"/docs/using-gns3/advanced/the-nat-node",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/advanced/the-nat-node.md",sidebar_label:"The NAT node",sidebar:"someSidebar",previous:{title:"Connect GNS3 to the Internet (local server)",permalink:"/docs/using-gns3/advanced/connect-gns3-internet"},next:{title:"Special IP addresses in GNS3",permalink:"/docs/using-gns3/advanced/special-ip-addresses"}},l=[],d={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Starting with GNS3 2.0,  the NAT node became available. This node allows you to connect a topology to internet via NAT. The Internet node was deprecated in favor of this node, and the Cloud node."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Your topology will not be directly accessible from the internet or local LAN, when using the NAT node. If that is required, then the Cloud node should be used."))),Object(i.b)("p",null,"It\u2019s useful when you need to download things from the internet, like packages, if nodes need to perform license check, etc\u2026). It\u2019s also much simpler to use than the preexisting Cloud node."),Object(i.b)("p",null,"The NAT node requires either the GNS3 VM,  or a Linux computer with libvirt installed. Libvirt is necessary, to create a virbr0 interface for this node to function."),Object(i.b)("p",null,"By default, the NAT node runs a DHCP server with a predefined pool in the 192.168.122.0/24 range. It\u2019s located in the End devices category:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/1.jpg")}),Object(i.b)("p",null,"To add the NAT node to a topology, drag and drop it into the workspace. You will be prompted to specify the server type you want to use, to run the NAT node. This article will use the Webterm docker container for testing internet connectivity, so the server type needs to be set to GNS3 VM, as this is being done on a Win10 workstation:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/2.jpg")}),Object(i.b)("p",null,"The NAT node will appear in the workspace:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/3.jpg")}),Object(i.b)("p",null,"Next, the Webterm docker container will also be added to the workspace:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/4.jpg")}),Object(i.b)("p",null,"The NAT node has a single interface named nat0:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/5.jpg")}),Object(i.b)("p",null,"To allow more than one topology node to have access to the internet, it will be necessary to connect a switch or router to the NAT node,  and then connect the topology nodes to the other device."),Object(i.b)("p",null,"For simplicity, the built-in ethernet switch will be connected to the NAT node, and the Webterm container will be connected to the switch:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/6.jpg")}),Object(i.b)("p",null,"You enable DHCP or manually configure static IP assignment to docker container like Webterm, by right-clicking on it while it\u2019s shutdown, and then select \u201cEdit config\u201d:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/7.jpg")}),Object(i.b)("p",null,"A window will open, showing this container\u2019s /etc/network/interfaces file:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/8.jpg")}),Object(i.b)("p",null,"To configure this container to use DHCP, you uncomment the two lines shown in the below image, and click Save:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/9.jpg")}),Object(i.b)("p",null,"(uncomment means removing the \u2018#\u2019 symbol at the front of those lines. That symbol causes the system to not read those lines, and are commonly used to add comments to code, which should not be processed)"),Object(i.b)("p",null,"Starting up the Webterm container (the NAT node will automatically be running from the moment it\u2019s added to a topology) and opening its console will result in a VNC window appearing.  Click on the \u201cRestore\u201d symbol in the upper-right corner of Firefox, to take it out of the fullscreen view:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/10.jpg")}),Object(i.b)("p",null,"Left-clicking on the black background and selecting \u201cTerminal\u201d will open terminal window:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/11.jpg")}),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/12.jpg")}),Object(i.b)("p",null,"You can use the terminal for a variety of things, but in this article, it\u2019ll just be used to check the IP configuration of the container."),Object(i.b)("p",null,"Using the \u2018ifconfig\u2019 command in the terminal will show that the DHCP running on the NAT node assigned this container the 192.168.122.200 address from its pool:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/13.jpg")}),Object(i.b)("p",null,"Back in Firefox, enter a URL in the address bar, to access a website:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/14.jpg")}),Object(i.b)("p",null,"You aren\u2019t restricted to just using dynamic address assignment with the NAT node. You can also statically assign IP addressing on it, and still have internet access."),Object(i.b)("p",null,"Stop the Webterm container, right-click it, and choose \u201cEdit config\u201d again.  "),Object(i.b)("p",null,"This time, you\u2019ll comment out the two lines for DHCP, and uncomment the lines in the Static IP section of the /etc/network/interfaces file;"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/15.jpg")}),Object(i.b)("p",null,"In the above example, the Webterm container was statically assigned the 192.168.122.25/24 IP address and mask, its default gateway was set to 192.168.122.1 (the internal IP address of the NAT node), and the nameserver was set to 8.8.8.8, which is one of Google\u2019s free public DNS servers."),Object(i.b)("p",null,"Click Save, start the container, and console back into it.  Opening a terminal and running \u201cifconfig\u201d will show that the container is using the statically assigned IP address:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/16.jpg")}),Object(i.b)("p",null,"Entering a URL in the Firefox address bar will open a website:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/advanced/the-nat-node/17.jpg")}))}b.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=o,g=b["".concat(r,".").concat(u)]||b[u]||h[u]||i;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var o=n(0),a=n(52);t.a=function(){return Object(o.useContext)(a.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(76);var o=n(212),a=n(214);function i(e,t){var n=void 0===t?{}:t,i=n.forcePrependBaseUrl,r=void 0!==i&&i,c=n.absolute,s=void 0!==c&&c,l=Object(o.a)().siteConfig,d=(l=void 0===l?{}:l).baseUrl,b=void 0===d?"/":d,h=l.url;if(!e)return e;if(r)return b+e;if(!Object(a.a)(e))return e;var u=b+e.replace(/^\//,"");return s?h+u:u}},214:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return o}))}}]);