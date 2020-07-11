(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),r=(n(0),n(222));const i={id:"one-server-multiple-clients",title:"One GNS3 server, multiple clients",sidebar_label:"One GNS3 server, multiple clients"},o={id:"installation/one-server-multiple-clients",isDocsHomePage:!1,title:"One GNS3 server, multiple clients",description:"This documentation is only for GNS3 2.0 and later",source:"@site/docs/installation/one-server-multiple-clients.md",permalink:"/gns3-docs/docs/installation/one-server-multiple-clients",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/installation/one-server-multiple-clients.md",sidebar_label:"One GNS3 server, multiple clients",sidebar:"someSidebar",previous:{title:"Download GNS3 for Windows 32 bit",permalink:"/gns3-docs/docs/installation/download-32-bit"},next:{title:"Upgrade GNS3",permalink:"/gns3-docs/docs/installation/upgrade-gns3"}},c=[{value:"Setup the Server",id:"setup-the-server",children:[{value:"What is the difference with a remote GNS3 VM?",id:"what-is-the-difference-with-a-remote-gns3-vm",children:[]}]},{value:"Setup your Clients",id:"setup-your-clients",children:[]}],s={rightToc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This documentation is only for GNS3 2.0 and later"))),Object(r.b)("p",null,"Since GNS3 2.0 you can use a central GNS3 Server and multiple GNS3 clients. The projects and devices templates will be share and synchronize with all users. All changes are real time if you put a node in a project other user will see it immediately. Your appliances images will be uploaded via the GUI and stored on the remote server."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is an advanced usage. We recommend that the administrator which setup this installation try before with a local installation."))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Their is no user isolation, all users can view all projects and modify them"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Video: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=hVPW5ijvNFo"}),"https://www.youtube.com/watch?v=hVPW5ijvNFo"))),Object(r.b)("h2",{id:"setup-the-server"},"Setup the Server"),Object(r.b)("p",null,"First you need to install the GNS3 server."),Object(r.b)("p",null,"Two options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"remote-server"}),"Install on a remote server")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"esxi"}),"Use the GNS3 VM for ESXi as your server"))),Object(r.b)("p",null,"If you use the GNS3 VM for ESXi it\u2019s your remote server, you don\u2019t need a remote server and the GNS3 VM."),Object(r.b)("h3",{id:"what-is-the-difference-with-a-remote-gns3-vm"},"What is the difference with a remote GNS3 VM?"),Object(r.b)("p",null,"When you use a remote GNS3 VM you have a GNS3 server running on your local machines and all the settings are stored on the local machine. Here, the settings are shared on stored on the remote server."),Object(r.b)("h2",{id:"setup-your-clients"},"Setup your Clients"),Object(r.b)("p",null,"If you want to use a local GNS3 installation and a remote installation you can use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.gns3.com/1nCRIQ3AfdPbiYeL8RSC28Y_skgRJOfxPlz1MCeX94U4/index.html"}),"settings profiles")," CHECKLINK"),Object(r.b)("p",null,"At startup in the setup wizard choose ",Object(r.b)("strong",{parentName:"p"},"Run appliances on a remote server")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/installation/one-server-multiple-clients/1.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"And put the server settings:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/installation/one-server-multiple-clients/2.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"Finish")," in the next window, to complete the setup:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/installation/one-server-multiple-clients/3.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"That\u2019s all!"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You probably don\u2019t need to configure the GNS3 VM or an additional remote server. If you need to use the GNS3 VM you should think about using Linux . Additional servers are required only if you need more compute power."))))}l.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);