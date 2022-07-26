"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6864],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>u});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),p=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(c.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=p(n),u=r,m=f["".concat(c,".").concat(u)]||f[u]||l[u]||s;return n?t.createElement(m,i(i({ref:a},d),{},{components:n})):t.createElement(m,i({ref:a},d))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88555:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var t=n(87462),r=(n(67294),n(3905));const s={},i="aosp changes",o={unversionedId:"AndroidFramework/TaskA3-aosp-changes/aosp-changes",id:"AndroidFramework/TaskA3-aosp-changes/aosp-changes",title:"aosp changes",description:"1. aosp surfaceflinger changes",source:"@site/docs/AndroidFramework/TaskA3-aosp-changes/aosp-changes.md",sourceDirName:"AndroidFramework/TaskA3-aosp-changes",slug:"/AndroidFramework/TaskA3-aosp-changes/aosp-changes",permalink:"/docs/docs/AndroidFramework/TaskA3-aosp-changes/aosp-changes",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/AndroidFramework/TaskA3-aosp-changes/aosp-changes.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"aosp compile",permalink:"/docs/docs/AndroidFramework/TaskA2-aosp-compile/aosp-compile-howto"},next:{title:"arpara distortion logic",permalink:"/docs/docs/AndroidFramework/TaskA4-sf-research/arpara-distortion-logic"}},c={},p=[{value:"aosp surfaceflinger changes",id:"aosp-surfaceflinger-changes",level:2},{value:"conclusion",id:"conclusion",level:3},{value:"7 -&gt; 8",id:"7---8",level:3},{value:"8 -&gt; 9",id:"8---9",level:3},{value:"9 -&gt; 10",id:"9---10",level:3},{value:"10 -&gt; 11",id:"10---11",level:3},{value:"7 -&gt; 11",id:"7---11",level:3},{value:"aosp code changes of native/service/surfaceflinger",id:"aosp-code-changes-of-nativeservicesurfaceflinger",level:2},{value:"aosp diff 7 vs 8",id:"aosp-diff-7-vs-8",level:3},{value:"diff 7-8 <code>./native</code>",id:"diff-7-8-native",level:4},{value:"\u26a0\ufe0f aosp 8 started using <code>Android.bp</code> (with <code>Android.mk</code>)",id:"\ufe0f-aosp-8-started-using-androidbp-with-androidmk",level:5},{value:"diff 7-8 <code>../service</code>",id:"diff-7-8-service",level:4},{value:"diff 7-8 <code>.../surfaceflinger</code>",id:"diff-7-8-surfaceflinger",level:4},{value:"aosp diff: 8 vs 9",id:"aosp-diff-8-vs-9",level:3},{value:"diff 8-9 <code>./native</code>",id:"diff-8-9-native",level:4},{value:"diff 8-9 <code>../service</code>",id:"diff-8-9-service",level:4},{value:"diff 8-9 <code>.../surfaceflinger</code>",id:"diff-8-9-surfaceflinger",level:4},{value:"\u26a0\ufe0f removed <code>SurfaceFlingerConsumer</code> and <code>SurfaceFlinger_hwc1</code> and <code>Android.mk</code>",id:"\ufe0f-removed-surfaceflingerconsumer-and-surfaceflinger_hwc1-and-androidmk",level:5},{value:"aosp diff: 9 vs 10",id:"aosp-diff-9-vs-10",level:3},{value:"v10 change",id:"v10-change",level:4},{value:"\u26a0\ufe0f <code>.h</code> and <code>.cpp</code> separated into <code>include</code> and <code>src</code>",id:"\ufe0f-h-and-cpp-separated-into-include-and-src",level:5},{value:"diff 9-10 <code>./native</code>",id:"diff-9-10-native",level:4},{value:"diff 9-10 <code>../service</code>",id:"diff-9-10-service",level:4},{value:"diff 9-10 <code>.../surfaceflinger</code>",id:"diff-9-10-surfaceflinger",level:4},{value:"diff 9-10 <code>..../RenderEngine</code>",id:"diff-9-10-renderengine",level:4},{value:"&quot;warning: <code>RenderEngine</code> is under <code>native/libs/renderengine/gl</code> in AOSP 10",id:"warning-renderengine-is-under-nativelibsrenderenginegl-in-aosp-10",level:5},{value:"aosp diff: 10 vs 11",id:"aosp-diff-10-vs-11",level:3},{value:"diff 10-11: <code>./native</code>",id:"diff-10-11-native",level:4},{value:"diff 10-11: <code>../service</code>",id:"diff-10-11-service",level:4},{value:"diff 10-11: <code>.../surfaceflinger</code>",id:"diff-10-11-surfaceflinger",level:4},{value:"\u26a0\ufe0f aosp 11 added back the <code>FrameTracer</code>, and added <code>SurfaceFlingerDefaultFactory</code>",id:"\ufe0f-aosp-11-added-back-the-frametracer-and-added-surfaceflingerdefaultfactory",level:5},{value:"aosp diff: 7 vs 11",id:"aosp-diff-7-vs-11",level:3},{value:"diff 7-11 <code>./native</code>",id:"diff-7-11-native",level:4},{value:"diff 7-11 <code>../service</code>",id:"diff-7-11-service",level:4},{value:"diff 7-11 <code>.../surfaceflinger</code>",id:"diff-7-11-surfaceflinger",level:4},{value:"aosp version changes about \u67b6\u6784\u3001\u56fe\u5f62\u3001\u5b89\u5168\u3001\u6027\u80fd\u3001\u6d4b\u8bd5",id:"aosp-version-changes-about-\u67b6\u6784\u56fe\u5f62\u5b89\u5168\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"aosp 11 changes",id:"aosp-11-changes",level:3},{value:"IMPORTANT: \u56fe\u5f62",id:"important-\u56fe\u5f62",level:4},{value:"aosp 10 changes",id:"aosp-10-changes",level:3},{value:"aosp 9 changes",id:"aosp-9-changes",level:3},{value:"aosp 8 changes",id:"aosp-8-changes",level:3},{value:"IMPORTANT: \u591a\u663e\u793a\u5668\u652f\u6301",id:"important-\u591a\u663e\u793a\u5668\u652f\u6301",level:4},{value:"aosp 7 changes",id:"aosp-7-changes",level:3},{value:"IMPORTANT: Vulkan API",id:"important-vulkan-api",level:4},{value:"IMPORTANT: OpenGL\u2122 ES 3.2 API",id:"important-opengl-es-32-api",level:4},{value:"IMPORTANT: VR support",id:"important-vr-support",level:4}],d={toc:p};function l(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aosp-changes"},"aosp changes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-surfaceflinger-changes"},"aosp surfaceflinger changes"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#conclusion"},"conclusion")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#7---8"},"7 -> 8")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#8---9"},"8 -> 9")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#9---10"},"9 -> 10")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#10---11"},"10 -> 11")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#7---11"},"7 -> 11")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-code-changes-of-nativeservicesurfaceflinger"},"aosp code changes of native/service/surfaceflinger"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-diff-7-vs-8"},"aosp diff 7 vs 8"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-7-8-native"},"diff 7-8 ",(0,r.kt)("inlineCode",{parentName:"a"},"./native"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-7-8-service"},"diff 7-8 ",(0,r.kt)("inlineCode",{parentName:"a"},"../service"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-7-8-surfaceflinger"},"diff 7-8 ",(0,r.kt)("inlineCode",{parentName:"a"},".../surfaceflinger"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-diff-8-vs-9"},"aosp diff: 8 vs 9"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-8-9-native"},"diff 8-9 ",(0,r.kt)("inlineCode",{parentName:"a"},"./native"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-8-9-service"},"diff 8-9 ",(0,r.kt)("inlineCode",{parentName:"a"},"../service"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-8-9-surfaceflinger"},"diff 8-9 ",(0,r.kt)("inlineCode",{parentName:"a"},".../surfaceflinger"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-diff-9-vs-10"},"aosp diff: 9 vs 10"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#v10-change"},"v10 change")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-9-10-native"},"diff 9-10 ",(0,r.kt)("inlineCode",{parentName:"a"},"./native"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-9-10-service"},"diff 9-10 ",(0,r.kt)("inlineCode",{parentName:"a"},"../service"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-9-10-surfaceflinger"},"diff 9-10 ",(0,r.kt)("inlineCode",{parentName:"a"},".../surfaceflinger"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-9-10-renderengine"},"diff 9-10 ",(0,r.kt)("inlineCode",{parentName:"a"},"..../RenderEngine"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-diff-10-vs-11"},"aosp diff: 10 vs 11"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-10-11-native"},"diff 10-11: ",(0,r.kt)("inlineCode",{parentName:"a"},"./native"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-10-11-service"},"diff 10-11: ",(0,r.kt)("inlineCode",{parentName:"a"},"../service"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-10-11-surfaceflinger"},"diff 10-11: ",(0,r.kt)("inlineCode",{parentName:"a"},".../surfaceflinger"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-diff-7-vs-11"},"aosp diff: 7 vs 11"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-7-11-native"},"diff 7-11 ",(0,r.kt)("inlineCode",{parentName:"a"},"./native"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-7-11-service"},"diff 7-11 ",(0,r.kt)("inlineCode",{parentName:"a"},"../service"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#diff-7-11-surfaceflinger"},"diff 7-11 ",(0,r.kt)("inlineCode",{parentName:"a"},".../surfaceflinger"))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-version-changes-about-%E6%9E%B6%E6%9E%84%E5%9B%BE%E5%BD%A2%E5%AE%89%E5%85%A8%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95"},"aosp version changes about \u67b6\u6784\u3001\u56fe\u5f62\u3001\u5b89\u5168\u3001\u6027\u80fd\u3001\u6d4b\u8bd5"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-11-changes"},"aosp 11 changes"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#important-%E5%9B%BE%E5%BD%A2"},"IMPORTANT: \u56fe\u5f62")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-10-changes"},"aosp 10 changes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-9-changes"},"aosp 9 changes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-8-changes"},"aosp 8 changes"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#important-%E5%A4%9A%E6%98%BE%E7%A4%BA%E5%99%A8%E6%94%AF%E6%8C%81"},"IMPORTANT: \u591a\u663e\u793a\u5668\u652f\u6301")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#aosp-7-changes"},"aosp 7 changes"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#important-vulkan-api"},"IMPORTANT: Vulkan API")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#important-opengl-es-32-api"},"IMPORTANT: OpenGL\u2122 ES 3.2 API")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#important-vr-support"},"IMPORTANT: VR support"))))))),(0,r.kt)("h2",{id:"aosp-surfaceflinger-changes"},"aosp surfaceflinger changes"),(0,r.kt)("h3",{id:"conclusion"},"conclusion"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Android.mk")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Android.bp")," (since 8, force 9)"),(0,r.kt)("li",{parentName:"ol"},"removed ",(0,r.kt)("inlineCode",{parentName:"li"},"SurfaceFlinger_hwc1")," which we used (9)"),(0,r.kt)("li",{parentName:"ol"},"moved and re-constructed ",(0,r.kt)("inlineCode",{parentName:"li"},"RenderEngine")," (10)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},".h")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".cpp")," separated (10)")),(0,r.kt)("h3",{id:"7---8"},"7 -> 8"),(0,r.kt)("p",null,"!!!warning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. :warning: aosp 8 started using `Android.bp` (with `Android.mk`)\n2. added `vr` and `displayservice` dirs under `../service`\n3. removed `FenceTracker` and added some other interfaces (which seem not important) under `.../surfaceflinger`\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642701057733-8de0f763298cfd286796098b1728a840b54e92cf5b5b1a20f2a0694dbcfcbf27.png",alt:"picture 13"}),"  "),(0,r.kt)("h3",{id:"8---9"},"8 -> 9"),(0,r.kt)("p",null,"!!!warning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. :warning: aosp 9 started removing `Android.mk`\n2. :warning: removed `SurfaceFlingerConsumer` and `SurfaceFlinger_hwc1`(we used) under `.../surfaceflinger`\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642702347374-44c2399ce465a71d3457951b6b75f6d9817e0b5275d319739ab9990be6834e0a.png",alt:"picture 17"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642702376282-6c347554b97a8c7ab69da89161443f8fffbd8958beb43bae42a6da6ac41388b4.png",alt:"picture 18"}),"  "),(0,r.kt)("h3",{id:"9---10"},"9 -> 10"),(0,r.kt)("p",null,"!!!warning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. :warning: `.h` and `.cpp` separated into `include` and `src`\n2. :warning: `RenderEngine` is moved and reconstructed from under `naive/services/surfaceflinger` to under `native/libs/renderengine/`\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642702835607-de98d43cf127b4152c1d5f435da82410aebbc29302139f3bb2d6e4f2cd3f54f9.png",alt:"picture 21"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642703465268-ba17e0c40f3eb6dc8a17651c5b7271d209466e28a24e5ad08851bc2cb4e38914.png",alt:"picture 24"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642704090343-e251150b35f462aa7bbeeacf8f22024f0d8d5c82627c83a9a8bafb8cfc47f8ad.png",alt:"picture 25"}),"  "),(0,r.kt)("h3",{id:"10---11"},"10 -> 11"),(0,r.kt)("p",null,"!!!warning\naosp 11 added back the ",(0,r.kt)("inlineCode",{parentName:"p"},"FrameTracer"),", and added ",(0,r.kt)("inlineCode",{parentName:"p"},"SurfaceFlingerDefaultFactory"),"\nupdate@2022-01-26: \u592a\u60e8\u4e86\uff0c\u6700\u91cd\u8981\u7684\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"doComposeSurfaces"),"\u4e0d\u89c1\u4e86\uff01\u6587\u4ef6\u7ea7\u522b\u8fd8\u4e0d\u591f\u7ec6\uff0c\u8fd8\u5f97\u662f\u51fd\u6570\u7ea7\u522b\u624d\u884c\u2026\u2026"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642704300910-3303fe00e44dcccc7b5325d8f945c406bddc0a0745b3d22198b7041e3d357bc4.png",alt:"picture 28"}),"  "),(0,r.kt)("h3",{id:"7---11"},"7 -> 11"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642668812648-413b3300a3200e7f1b4c85daa2da89195047eb5a606fba9e9bd58f113134b4f7.png",alt:"picture 46"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642668901996-bc7d9331aecd12ecd48ec458e05e6f1f4ffa95704e7f4e672a33b4e4d73685c3.png",alt:"picture 48"}),"  "),(0,r.kt)("h2",{id:"aosp-code-changes-of-nativeservicesurfaceflinger"},"aosp code changes of native/service/surfaceflinger"),(0,r.kt)("h3",{id:"aosp-diff-7-vs-8"},"aosp diff 7 vs 8"),(0,r.kt)("h4",{id:"diff-7-8-native"},"diff 7-8 ",(0,r.kt)("inlineCode",{parentName:"h4"},"./native")),(0,r.kt)("h5",{id:"\ufe0f-aosp-8-started-using-androidbp-with-androidmk"},"\u26a0\ufe0f aosp 8 started using ",(0,r.kt)("inlineCode",{parentName:"h5"},"Android.bp")," (with ",(0,r.kt)("inlineCode",{parentName:"h5"},"Android.mk"),")"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642700740315-50e0bb18ecdf03e72572cf0a074fb9b154569f0ffaa0e13ce4ab95e7954d0bcc.png",alt:"picture 11"}),"  "),(0,r.kt)("h4",{id:"diff-7-8-service"},"diff 7-8 ",(0,r.kt)("inlineCode",{parentName:"h4"},"../service")),(0,r.kt)("p",null,"added ",(0,r.kt)("inlineCode",{parentName:"p"},"vr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"displayservice")," directories."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642700922519-777c9495cc7d5489fe3675ea670e013ad1b36b29fd3ff376a3314b9d12472036.png",alt:"picture 12"}),"  "),(0,r.kt)("h4",{id:"diff-7-8-surfaceflinger"},"diff 7-8 ",(0,r.kt)("inlineCode",{parentName:"h4"},".../surfaceflinger")),(0,r.kt)("p",null,"removed ",(0,r.kt)("inlineCode",{parentName:"p"},"FenceTracker")," and added some other interfaces (which seem not important)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642701057733-8de0f763298cfd286796098b1728a840b54e92cf5b5b1a20f2a0694dbcfcbf27.png",alt:"picture 13"}),"  "),(0,r.kt)("h3",{id:"aosp-diff-8-vs-9"},"aosp diff: 8 vs 9"),(0,r.kt)("h4",{id:"diff-8-9-native"},"diff 8-9 ",(0,r.kt)("inlineCode",{parentName:"h4"},"./native")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642701257918-822bdf1a490b46b64ed803476f8f006c1d71a44e3dfb17eda0001e39f5713a0d.png",alt:"picture 14"}),"  "),(0,r.kt)("h4",{id:"diff-8-9-service"},"diff 8-9 ",(0,r.kt)("inlineCode",{parentName:"h4"},"../service")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642701311594-359e8b7b4ce355b9cc4f84d2dfebf21665b60dcbb88296ecec1525d110f1f089.png",alt:"picture 15"}),"  "),(0,r.kt)("h4",{id:"diff-8-9-surfaceflinger"},"diff 8-9 ",(0,r.kt)("inlineCode",{parentName:"h4"},".../surfaceflinger")),(0,r.kt)("h5",{id:"\ufe0f-removed-surfaceflingerconsumer-and-surfaceflinger_hwc1-and-androidmk"},"\u26a0\ufe0f removed ",(0,r.kt)("inlineCode",{parentName:"h5"},"SurfaceFlingerConsumer")," and ",(0,r.kt)("inlineCode",{parentName:"h5"},"SurfaceFlinger_hwc1")," and ",(0,r.kt)("inlineCode",{parentName:"h5"},"Android.mk")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642702347374-44c2399ce465a71d3457951b6b75f6d9817e0b5275d319739ab9990be6834e0a.png",alt:"picture 17"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642702376282-6c347554b97a8c7ab69da89161443f8fffbd8958beb43bae42a6da6ac41388b4.png",alt:"picture 18"}),"  "),(0,r.kt)("h3",{id:"aosp-diff-9-vs-10"},"aosp diff: 9 vs 10"),(0,r.kt)("h4",{id:"v10-change"},"v10 change"),(0,r.kt)("h5",{id:"\ufe0f-h-and-cpp-separated-into-include-and-src"},"\u26a0\ufe0f ",(0,r.kt)("inlineCode",{parentName:"h5"},".h")," and ",(0,r.kt)("inlineCode",{parentName:"h5"},".cpp")," separated into ",(0,r.kt)("inlineCode",{parentName:"h5"},"include")," and ",(0,r.kt)("inlineCode",{parentName:"h5"},"src")),(0,r.kt)("h4",{id:"diff-9-10-native"},"diff 9-10 ",(0,r.kt)("inlineCode",{parentName:"h4"},"./native")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642702624393-410c445ccfd991d91097d8bccf2ec01dac77a473ca7000c371a48204122dd755.png",alt:"picture 19"}),"  "),(0,r.kt)("h4",{id:"diff-9-10-service"},"diff 9-10 ",(0,r.kt)("inlineCode",{parentName:"h4"},"../service")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642702666363-e3648d1fde4e45c2df8e0af38fb2a64ffbc77bb5335ca9d66b54a3e7ba965521.png",alt:"picture 20"}),"  "),(0,r.kt)("h4",{id:"diff-9-10-surfaceflinger"},"diff 9-10 ",(0,r.kt)("inlineCode",{parentName:"h4"},".../surfaceflinger")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642702835607-de98d43cf127b4152c1d5f435da82410aebbc29302139f3bb2d6e4f2cd3f54f9.png",alt:"picture 21"}),"  "),(0,r.kt)("h4",{id:"diff-9-10-renderengine"},"diff 9-10 ",(0,r.kt)("inlineCode",{parentName:"h4"},"..../RenderEngine")),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositionEngine")," added is not the former ",(0,r.kt)("inlineCode",{parentName:"p"},"RenderEngine")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642703298440-c89776ebdf033b3c5b852a342b74e9ba9c4d1cc091e0fc0b5fdacfb8e1ff7273.png",alt:"picture 23"}),"  "),(0,r.kt)("p",null,"indeed, it moves from under ",(0,r.kt)("inlineCode",{parentName:"p"},"native/service")," to under ",(0,r.kt)("inlineCode",{parentName:"p"},"native/libs"),"."),(0,r.kt)("h5",{id:"warning-renderengine-is-under-nativelibsrenderenginegl-in-aosp-10"},'"warning: ',(0,r.kt)("inlineCode",{parentName:"h5"},"RenderEngine")," is under ",(0,r.kt)("inlineCode",{parentName:"h5"},"native/libs/renderengine/gl")," in AOSP 10"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642703465268-ba17e0c40f3eb6dc8a17651c5b7271d209466e28a24e5ad08851bc2cb4e38914.png",alt:"picture 24"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642704090343-e251150b35f462aa7bbeeacf8f22024f0d8d5c82627c83a9a8bafb8cfc47f8ad.png",alt:"picture 25"}),"  "),(0,r.kt)("h3",{id:"aosp-diff-10-vs-11"},"aosp diff: 10 vs 11"),(0,r.kt)("h4",{id:"diff-10-11-native"},"diff 10-11: ",(0,r.kt)("inlineCode",{parentName:"h4"},"./native")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642704182326-c8e4cfb07f0a9efc63aee13725337465c63d71b84a883e16088841e97a95a61d.png",alt:"picture 26"}),"  "),(0,r.kt)("h4",{id:"diff-10-11-service"},"diff 10-11: ",(0,r.kt)("inlineCode",{parentName:"h4"},"../service")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642704217482-7fc1a2231f3922c4d445f9477b4a8a0c0fd0c75c55ba567e8985e1de36623571.png",alt:"picture 27"}),"  "),(0,r.kt)("h4",{id:"diff-10-11-surfaceflinger"},"diff 10-11: ",(0,r.kt)("inlineCode",{parentName:"h4"},".../surfaceflinger")),(0,r.kt)("h5",{id:"\ufe0f-aosp-11-added-back-the-frametracer-and-added-surfaceflingerdefaultfactory"},"\u26a0\ufe0f aosp 11 added back the ",(0,r.kt)("inlineCode",{parentName:"h5"},"FrameTracer"),", and added ",(0,r.kt)("inlineCode",{parentName:"h5"},"SurfaceFlingerDefaultFactory")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642704300910-3303fe00e44dcccc7b5325d8f945c406bddc0a0745b3d22198b7041e3d357bc4.png",alt:"picture 28"}),"  "),(0,r.kt)("h3",{id:"aosp-diff-7-vs-11"},"aosp diff: 7 vs 11"),(0,r.kt)("h4",{id:"diff-7-11-native"},"diff 7-11 ",(0,r.kt)("inlineCode",{parentName:"h4"},"./native")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642668660936-88f3dbe0a55bf73e0f17294850e20253b2e4543d2871576907863aa791b2aeb9.png",alt:"picture 44"}),"  "),(0,r.kt)("h4",{id:"diff-7-11-service"},"diff 7-11 ",(0,r.kt)("inlineCode",{parentName:"h4"},"../service")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642668727915-ce64867824398d804684bbddf38d45eeac44d5982e2f3bff5709070c841f7483.png",alt:"picture 45"}),"  "),(0,r.kt)("h4",{id:"diff-7-11-surfaceflinger"},"diff 7-11 ",(0,r.kt)("inlineCode",{parentName:"h4"},".../surfaceflinger")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642668812648-413b3300a3200e7f1b4c85daa2da89195047eb5a606fba9e9bd58f113134b4f7.png",alt:"picture 46"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642668901996-bc7d9331aecd12ecd48ec458e05e6f1f4ffa95704e7f4e672a33b4e4d73685c3.png",alt:"picture 48"}),"  "),(0,r.kt)("h2",{id:"aosp-version-changes-about-\u67b6\u6784\u56fe\u5f62\u5b89\u5168\u6027\u80fd\u6d4b\u8bd5"},"aosp version changes about \u67b6\u6784\u3001\u56fe\u5f62\u3001\u5b89\u5168\u3001\u6027\u80fd\u3001\u6d4b\u8bd5"),(0,r.kt)("h3",{id:"aosp-11-changes"},"aosp 11 changes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661937875-9395cb050cd510ce0241d085d0d0d18346a490c87a73089707398f798ce34c83.png",alt:"picture 38"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642662104980-9319aa466246b7c81a3261445204dedcd596cb31c7a0e5a40b78aff124d9240b.png",alt:"picture 39"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642662115998-7146e607bdc8cf10d949930c76bcea9c202b46964d95a79a9123bdb91907c2ca.png",alt:"picture 40"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642662129881-fe58c1adfe2815f44c8f0fb9a38ffcaac6a878d7a6ca22de7a5503b328f7d55c.png",alt:"picture 41"}),"  "),(0,r.kt)("h4",{id:"important-\u56fe\u5f62"},(0,r.kt)("a",{parentName:"h4",href:"https://developer.android.com/about/versions/11/features#graphics"},"IMPORTANT: \u56fe\u5f62")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642662221453-4a2f06837b1ba8b86405cd0c44b07f391a2e308b719fe5f1f815a7fa8018d1f4.png",alt:"picture 42"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642662231570-e951c4ec876352c2d535075199cdc3cde1a97b2ad4b1dbdcf6fad624647ad184.png",alt:"picture 43"}),"  "),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/about/versions/11/features"},"\u529f\u80fd\u548c API \u6982\u89c8 \xa0|\xa0 Android \u5f00\u53d1\u8005 \xa0|\xa0 Android Developers"))),(0,r.kt)("h3",{id:"aosp-10-changes"},"aosp 10 changes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661658817-40a1b2e305e6a974f4c880a09c1f44d3eb58adeb1d5085b50ab3ddc873302554.png",alt:"picture 28"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661695856-24a0eea3b49417bea1de616840b096a30e89f7ba280bcb05b1f0dc0fb0dbbf63.png",alt:"picture 29"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661718996-c8acbc0833cabe5e49db402870f3a5b2a94545c11f0d913d3bba196c3a3a2056.png",alt:"picture 30"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661729795-3d72c4d287b25d388aa25e68df6d07332836aeb3544211322047a955aaeb6afc.png",alt:"picture 31"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661754156-cf9d4e538db6b37b5465638e8bcf4e902837b4448608204e4d1dd91b987be7d8.png",alt:"picture 32"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661789129-06692fe626afc80d5e6d7f8186b195f339b08f2967df543a585a70d3606fe664.png",alt:"picture 33"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661815913-84ded1315aa4197931c8d4a1bbfc53a8e0fa70a15aa78763153e71f43a3f057e.png",alt:"picture 34"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661835506-88ef5370bec63c91dade1cf37876a2355cb436db99e816882a207f15e1fcfef2.png",alt:"picture 35"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661843444-74ed25bf1834b07235dbef93a9b2a1db644718e3d9eb1a94e81d5e7654a3cf23.png",alt:"picture 36"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661858178-c7eb2efa04e02f8cca7c2cb46ef3993891cd9af8fb315ebfdf0f6384a7f12bce.png",alt:"picture 37"}),"  "),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/about/versions/10/highlights"},"\u9762\u5411\u5f00\u53d1\u8005\u7684 Android 10 \xa0|\xa0 Android \u5f00\u53d1\u8005 \xa0|\xa0 Android Developers"))),(0,r.kt)("h3",{id:"aosp-9-changes"},"aosp 9 changes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661553995-159c8b1fbb05e655e24c34f806bfe3169bb675e3585666d6d6976dc20060d54b.png",alt:"picture 24"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661571665-5b43b36c81e60db10a51b032c4f36a9f010cfe51659c1b139ecbb1fefcc2bb2f.png",alt:"picture 25"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661612154-850a0ffb3a11a06c649770ab8d5549a824eb8dc1f1f331730b2a48be01e88233.png",alt:"picture 26"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661620656-83e18e583a0f94b738ff9c881b44b41014b0289facdc250195950e8de5b0325e.png",alt:"picture 27"}),"  "),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/about/versions/pie/android-9.0"},"Android 9 \u529f\u80fd\u548c API \xa0|\xa0 Android \u5f00\u53d1\u8005 \xa0|\xa0 Android Developers"))),(0,r.kt)("h3",{id:"aosp-8-changes"},"aosp 8 changes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661296101-e439cf6469c25fb351c63c0be61995cf1ed9661e16eedf0f2a119a3e45d425e6.png",alt:"picture 19"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661330480-752c8f28c1b1483a31939c38baefd788289ea8af54e5eab60bd7de0e2161c37d.png",alt:"picture 20"}),"  "),(0,r.kt)("h4",{id:"important-\u591a\u663e\u793a\u5668\u652f\u6301"},(0,r.kt)("a",{parentName:"h4",href:"https://developer.android.com/about/versions/oreo/android-8.0#mds"},"IMPORTANT: \u591a\u663e\u793a\u5668\u652f\u6301")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661360991-c6cb2cffbca426e95010c789393b0f0eb795f8e65a9862e9c87619a629a2d68a.png",alt:"picture 21"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661423928-7f469690e59060def95f3b0776048fbb0c4ba67d12c9f2efadcb002e7fc8ea8b.png",alt:"picture 22"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661486439-06eca199076ddf9126c9ad7d75905fdc0b40e82a9269eaae8ef2478778441d62.png",alt:"picture 23"}),"  "),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/about/versions/oreo/android-8.0"},"Android 8.0 \u529f\u80fd\u548c API \xa0|\xa0 Android \u5f00\u53d1\u8005 \xa0|\xa0 Android Developers"))),(0,r.kt)("h3",{id:"aosp-7-changes"},"aosp 7 changes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661026078-5453d2c7d157c2b29ddb6c11baa463daba274f9238b11bcba72633fe0e41da4a.png",alt:"picture 10"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661050505-a5152ce6aa2b88a520f9982ec5453b09064c970cc4d35c1f2da8fb9f5f5adcc3.png",alt:"picture 11"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661076846-e2b79d34fcf090cbe9efb708245119dd8c500a2aa93e4f0e7f2ac59733902121.png",alt:"picture 13"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661067057-158f52d6e686c258eaa595e9f48aec5246e4fd746fc89915d09b905fcbd52538.png",alt:"picture 12"}),"  "),(0,r.kt)("h4",{id:"important-vulkan-api"},(0,r.kt)("a",{parentName:"h4",href:"https://developer.android.com/about/versions/nougat/android-7.0#vulkan"},"IMPORTANT: Vulkan API")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661088253-32aa86d60f801599b98ee135b7b322c8f03ad5050d41524640ca4ef0dc2bd6d4.png",alt:"picture 14"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661129877-81627c2d4171ab62ff2e84b9db141872501b17d3aaca3adef5b2cf41b01dd231.png",alt:"picture 15"}),"  "),(0,r.kt)("h4",{id:"important-opengl-es-32-api"},(0,r.kt)("a",{parentName:"h4",href:"https://developer.android.com/about/versions/nougat/android-7.0#gles_32"},"IMPORTANT: OpenGL\u2122 ES 3.2 API")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661143361-29878bb4a8b112b5d651dcffcb37f25fb00f7115e6575670d6eb1a356d0e6c9a.png",alt:"picture 16"}),"  "),(0,r.kt)("h4",{id:"important-vr-support"},(0,r.kt)("a",{parentName:"h4",href:"https://developer.android.com/about/versions/nougat/android-7.0#vr"},"IMPORTANT: VR support")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661217988-d33e9b09701c4f81c5647f136b553d4301a709073ffc8a64c04c555745e0d036.png",alt:"picture 17"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642661245989-846a6276e5ee67ddcea2b8e06c3fc1a9ac7f59c8d7a7ae519fa0f3d54d0e3aa1.png",alt:"picture 18"}),"  "),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/about/versions/nougat/android-7.0"},"Android 7.0 \u5f00\u53d1\u8005\u7248\u672c \xa0|\xa0 Android \u5f00\u53d1\u8005 \xa0|\xa0 Android Developers"))))}l.isMDXComponent=!0}}]);