"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8944],{3905:(e,o,t)=>{t.d(o,{Zo:()=>s,kt:()=>u});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function d(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),c=function(e){var o=r.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},s=function(e){var o=c(e.components);return r.createElement(p.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(t),u=n,k=m["".concat(p,".").concat(u)]||m[u]||l[u]||a;return t?r.createElement(k,i(i({ref:o},s),{},{components:t})):r.createElement(k,i({ref:o},s))}));function u(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var d={};for(var p in o)hasOwnProperty.call(o,p)&&(d[p]=o[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65932:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=t(87462),n=(t(67294),t(3905));const a={},i="aosp coding howto",d={unversionedId:"AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto",id:"AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto",title:"aosp coding howto",description:"use androidmk to change mk file into bp file",source:"@site/docs/AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto.md",sourceDirName:"AndroidFramework/TaskA7-aosp-coding",slug:"/AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto",permalink:"/docs/docs/AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"aosp read howto",permalink:"/docs/docs/AndroidFramework/TaskA6-aosp-read/aosp-read-howto"},next:{title:"Manual/bugfix of compiling arpara hmdservice on AOSP 10",permalink:"/docs/docs/AndroidFramework/TaskB1-hmdservice-compile/how-to-compile-arpara-hmdservice-on-AOSP10"}},p={},c=[{value:"use <code>androidmk</code> to change <code>mk</code> file into <code>bp</code> file",id:"use-androidmk-to-change-mk-file-into-bp-file",level:2}],s={toc:c};function l(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aosp-coding-howto"},"aosp coding howto"),(0,n.kt)("h2",{id:"use-androidmk-to-change-mk-file-into-bp-file"},"use ",(0,n.kt)("inlineCode",{parentName:"h2"},"androidmk")," to change ",(0,n.kt)("inlineCode",{parentName:"h2"},"mk")," file into ",(0,n.kt)("inlineCode",{parentName:"h2"},"bp")," file"),(0,n.kt)("p",null,"path: ",(0,n.kt)("inlineCode",{parentName:"p"},"out/soong/host/linux-x86/bin/androidmk")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# create soft link\nln -s out/soong/host/linux-x86/bin/androidmk androidmk\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"official intro:",(0,n.kt)("a",{parentName:"p",href:"https://source.android.google.cn/setup/build?hl=zh-cn"},"Soong \u7f16\u8bd1\u7cfb\u7edf \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.i4k.xyz/article/weixin_34342589/117589957"},"android mk\u4e0ebp,Android.bp\u4f60\u771f\u7684\u4e86\u89e3\u5417_\u65b9\u840c-CFT\u7684\u535a\u5ba2-\u7a0b\u5e8f\u5458\u4fe1\u606f\u7f51 - \u7a0b\u5e8f\u5458\u4fe1\u606f\u7f51"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/tkwxty/article/details/104411520"},"(23\u6761\u6d88\u606f) Android.bp\u5165\u95e8\u6307\u5357\u4e4bAndroid.mk\u8f6c\u6362\u6210Android.bp_IT\u5148\u68ee-CSDN\u535a\u5ba2_android.mk\u8f6candroid.bp")))))}l.isMDXComponent=!0}}]);