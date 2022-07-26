"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const a={},i="mongodb-bugfix",s={unversionedId:"softwares/mongodb/mongodb-bugfix",id:"version-0.16.0/softwares/mongodb/mongodb-bugfix",title:"mongodb-bugfix",description:"mongodb killed by OS",source:"@site/versioned_docs/version-0.16.0/softwares/mongodb/mongodb-bugfix.md",sourceDirName:"softwares/mongodb",slug:"/softwares/mongodb/mongodb-bugfix",permalink:"/keeps-learning/docs/0.16.0/softwares/mongodb/mongodb-bugfix",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/softwares/mongodb/mongodb-bugfix.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"mark recommended softwares",permalink:"/keeps-learning/docs/0.16.0/softwares/mark-recommended-softwares"},next:{title:"mongodb-howto",permalink:"/keeps-learning/docs/0.16.0/softwares/mongodb/mongodb-howto"}},l={},m=[{value:"mongodb killed by OS",id:"mongodb-killed-by-os",level:2},{value:"brew can&#39;t restart mongod",id:"brew-cant-restart-mongod",level:2}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb-bugfix"},"mongodb-bugfix"),(0,o.kt)("h2",{id:"mongodb-killed-by-os"},"mongodb killed by OS"),(0,o.kt)("p",null,"To avoid mongodb to be killed by the OS, we can set its memory use limit down to a criterion which is lower than the ",(0,o.kt)("inlineCode",{parentName:"p"},"free -h")," capacity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"free -h\n#               total        used        free      shared  buff/cache   available\n# Mem:           3.7G        1.3G        665M        6.7M        1.7G        2.1G\n# Swap:            0B          0B          0B\n")),(0,o.kt)("p",null,"You see, there is only 665M for free in ZKJ's server since he is running a background jupyter and doing some sophisticated data analysis and machine learning."),(0,o.kt)("p",null,"then I can add this into mongodb's config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/mongodb.conf\n wiredTiger:\n   engineConfig:\n    cacheSizeGB: 0.25\n")),(0,o.kt)("p",null,"reference:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/configuration-options/#:~:text=ldapUserCacheInvalidationInterval%3A%20%3Cint%3E-,storage%20options"},"storage Options"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.jb51.net/article/180230.htm"},"\u89e3\u51b3MongoDB\u5360\u7528\u5185\u5b58\u8fc7\u5927\u9891\u7e41\u6b7b\u673a\u7684\u65b9\u6cd5\u8be6\u89e3",(0,o.kt)("em",{parentName:"a"},"MongoDB"),"\u811a\u672c\u4e4b\u5bb6"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/39994553/mongodb-stops-unknown-reason"},"ubuntu - MongoDB stops unknown reason - Stack Overflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/core/wiredtiger/#wiredtiger-ram"},"WiredTiger Storage Engine \u2014 MongoDB Manual")))),(0,o.kt)("h2",{id:"brew-cant-restart-mongod"},"brew can't restart mongod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew services stop -dv mongodb-community\nbrew services start -dv mongodb-community\n")),(0,o.kt)("p",null,"Pay Attention to the parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"-dv"),", it's key important."),(0,o.kt)("p",null,"Otherwise, I can't restart it!"),(0,o.kt)("p",null,"reference:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-core/issues/22924#issuecomment-357989567"},"https://github.com/Homebrew/homebrew-core/issues/22924#issuecomment-357989567")))}p.isMDXComponent=!0}}]);