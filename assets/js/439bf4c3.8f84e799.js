"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8358],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o="native service integration howto",c={unversionedId:"AndroidFramework/TaskB2-hmdservice-integration/native-service-integration-howto",id:"AndroidFramework/TaskB2-hmdservice-integration/native-service-integration-howto",title:"native service integration howto",description:"repos",source:"@site/docs/AndroidFramework/TaskB2-hmdservice-integration/native-service-integration-howto.md",sourceDirName:"AndroidFramework/TaskB2-hmdservice-integration",slug:"/AndroidFramework/TaskB2-hmdservice-integration/native-service-integration-howto",permalink:"/keeps-learning/docs/AndroidFramework/TaskB2-hmdservice-integration/native-service-integration-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/AndroidFramework/TaskB2-hmdservice-integration/native-service-integration-howto.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Manual/bugfix of compiling arpara hmdservice on AOSP 10",permalink:"/keeps-learning/docs/AndroidFramework/TaskB1-hmdservice-compile/how-to-compile-arpara-hmdservice-on-AOSP10"},next:{title:"atw bugfix",permalink:"/keeps-learning/docs/AndroidFramework/TaskC1-timewarp/tw-bugfix"}},s={},p=[{value:"repos",id:"repos",level:2},{value:"native service",id:"native-service",level:2},{value:"framework",id:"framework",level:3},{value:"SeLinux",id:"selinux",level:2}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"native-service-integration-howto"},"native service integration howto"),(0,a.kt)("h2",{id:"repos"},"repos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"HOST=192.168.0.237\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://192.168.0.237/markshawn/hmdservice"},"markshawn@Arpara / hmdservice \xb7 GitLab"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://192.168.0.237/markshawn/hmdclient_ndk"},"markshawn@Arpara / hmdclient_ndk \xb7 GitLab")))),(0,a.kt)("h2",{id:"native-service"},"native service"),(0,a.kt)("h3",{id:"framework"},"framework"),(0,a.kt)("p",null,"\u6700\u63a8\u8350\u7684\u662f\u8fd9\u7bc7\uff0c\u5199\u7684\u975e\u5e38\u8be6\u7ec6\uff1a \u2728\u2728\u2728 ",(0,a.kt)("a",{parentName:"p",href:"https://www.codetd.com/pt/article/13423956"},"AOSP \u4f7f\u7528AIDL\u6dfb\u52a0Native Service - Code World")),(0,a.kt)("p",null,"demo\u7684\u8bdd\u53ef\u4ee5\u770b\u8fd9\u7bc7\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://lixiaogang03.github.io/2019/01/21/Android-Native-Service/"},"Android Native Service - \u674e\u6653\u521a\u7684\u535a\u5ba2 | LXG Blog"),"\uff0c\u6700\u540e\u8fd9\u5f20\u56fe\u4e0d\u9519\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/native-service-integration-howto-1645635929336-b961a6c65b26eb9b38628720d841cc664c030ff1b00d2306d49787b560f3ffee.png",alt:"picture 29"}),"  "),(0,a.kt)("h2",{id:"selinux"},"SeLinux"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://source.android.com/security/selinux/build"},"\u6784\u5efa SELinux \u653f\u7b56 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20201107155245/https://pierrchen.blogspot.com/2017/02/android-security-walk-through-of-selinux.html"},"Android Security: A walk-through of SELinux"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/48521789/add-native-service-to-aosp"},"android - Add native service to aosp - Stack Overflow")))))}d.isMDXComponent=!0}}]);