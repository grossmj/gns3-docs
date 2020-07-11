(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),s=(n(0),n(222));const a={id:"running-gns3-server-as-daemon",title:"Running the GNS3 server as a daemon",sidebar_label:"Running the GNS3 server as a daemon"},o={id:"using-gns3/running-gns3-server-as-daemon",isDocsHomePage:!1,title:"Running the GNS3 server as a daemon",description:"You will find a sample init script for various systems inside the init directory of the gns3-server project//github.com/GNS3/gns3-server/tree/master/init",source:"@site/docs/using-gns3/running-gns3-server-as-daemon.md",permalink:"/gns3-docs/docs/using-gns3/running-gns3-server-as-daemon",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/running-gns3-server-as-daemon.md",sidebar_label:"Running the GNS3 server as a daemon",sidebar:"someSidebar",previous:{title:"GNS3 server configuration file",permalink:"/gns3-docs/docs/using-gns3/gns3-server-configuration-file"},next:{title:"GNS3 Security",permalink:"/gns3-docs/docs/using-gns3/gns3-security"}},c=[{value:"Upstart",id:"upstart",children:[]},{value:"Systemd",id:"systemd",children:[]}],i={rightToc:c};function l({components:e,...t}){return Object(s.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You will find a sample init script for various systems inside the init directory of the gns3-server project: ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/GNS3/gns3-server/tree/master/init"}),"https://github.com/GNS3/gns3-server/tree/master/init")),Object(s.b)("p",null,"Useful parameters to launch the server with are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"--daemon     start process as a daemon"),Object(s.b)("li",{parentName:"ul"},"--log logfile   store output in a logfile"),Object(s.b)("li",{parentName:"ul"},"--pid pidfile   store the pid of the running process in a file and prevent double execution")),Object(s.b)("p",null,"All the init script require the creation of a GNS3 user. It is possible to change it to another user:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo adduser gns3\n")),Object(s.b)("p",null,"You will need to install some dependencies first. For example, in Ubuntu 18.04.3, you\u2019ll need to install the following:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"python3-setuptools\npython3-aiohttp\npython3-psutil\npython3-jsonschema\ngit\n")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"This does not install other items, like ubridge, qemu-kvm, docker, wireshark, etc\u2026  This just the necessary dependencies needed to build the gns3-server daemon."))),Object(s.b)("p",null,"In Bash, you can download the gns3-server code via the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/GNS3/gns3-server.git\n")),Object(s.b)("p",null,"Next, enter the gns3-server directory that\u2019s been created:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"cd gns3-server\n")),Object(s.b)("p",null,"If you need a specific branch to match the version used by the clients, you can view a list of branches via this command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"git tag\n")),Object(s.b)("p",null,"Here\u2019s an example of the list:"),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/running-gns3-server-as-daemon/1.jpg",alt:"screenshot"}))),Object(s.b)("p",null,"(hit Ctrl+Z to exit the list)\nTo change the branch used, you\u2019ll use this command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"git checkout -b branch_version\n")),Object(s.b)("p",null,"For example, if the clients have GNS3 2.2.1 installed, you\u2019ll use this command to build v2.2.1 of the gns3-server:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"git checkout -b v2.2.1\n")),Object(s.b)("p",null,"Next, you\u2019ll use this command to build the gns3-server daemon:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo python3 setup.py install\n")),Object(s.b)("p",null,"This step may take a few minutes to complete (it will vary, based on your PC), but upon successful completion, you\u2019ll see this:"),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/running-gns3-server-as-daemon/2.jpg",alt:"screenshot"}))),Object(s.b)("p",null,"Next. you\u2019ll need to enter the ",Object(s.b)("inlineCode",{parentName:"p"},"/gns3-server/init")," sub-directory, and copy one of two files. Which one you use, will depend on whether your version of linux uses upstart or systemd to launch daemons:+-"),Object(s.b)("h2",{id:"upstart"},"Upstart"),Object(s.b)("p",null,"For ubuntu < 15.04"),Object(s.b)("p",null,"You must copy gns3.conf.upstart to /etc/init/gns3.conf and run these commands:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo cp gns3.conf.upstart /etc/init/gns3.conf\nsudo chown root /etc/init/gns3.conf\n")),Object(s.b)("p",null,"To launch the daemon, use this command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo service gns3 start\n")),Object(s.b)("h2",{id:"systemd"},"Systemd"),Object(s.b)("p",null,"You must copy gns3.service.systemd to /lib/systemd/system/gns3.service and run these commands:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo cp gns3.service.systemd /lib/systemd/system/gns3.service\nsudo chown root /lib/systemd/system/gns3.service\n")),Object(s.b)("p",null,"Run this command to start the gns3 daemon:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo systemctl start gns3\n")),Object(s.b)("p",null,"Next, run this command to ensure that the daemon is active and running, or see if there is an issue:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo systemctl status gns3\n")),Object(s.b)("p",null,"Ideally, you\u2019ll see something like this:"),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/running-gns3-server-as-daemon/3.jpg",alt:"screenshot"}))),Object(s.b)("p",null,"(press Ctrl+Z to exit this screen. Doing so will not shut down the daemon.)"),Object(s.b)("p",null,"NOTE: you may need to allow TCP port 3080 through the firewall, if it isn\u2019t already. In ubuntu, you\u2019d use the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo ufw allow 3080/tcp\n")),Object(s.b)("p",null,"To set the gns3-server daemon to always launch on boot/reload, use the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo systemctl enable gns3\n")),Object(s.b)("p",null,"(you\u2019ll see a symlink created)"),Object(s.b)("p",null,"At any time, you can run ",Object(s.b)("inlineCode",{parentName:"p"},"sudo systemctl status gns3")," to check on the running daemon, as well as see which nodes it\u2019s running on behalf of the clients . In the below example, it\u2019s active, and running three instances of IOSv in a topology:"),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/running-gns3-server-as-daemon/4.jpg",alt:"screenshot"}))))}l.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),b=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||a;return n?s.a.createElement(m,c(c({ref:t},l),{},{components:n})):s.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);