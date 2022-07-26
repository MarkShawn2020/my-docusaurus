"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5276],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o="mac \u81ea\u52a8\u5316",l={unversionedId:"OS/Mac/mac-automation",id:"version-0.16.0/OS/Mac/mac-automation",title:"mac \u81ea\u52a8\u5316",description:"applescript",source:"@site/versioned_docs/version-0.16.0/OS/Mac/mac-automation.md",sourceDirName:"OS/Mac",slug:"/OS/Mac/mac-automation",permalink:"/keeps-learning/docs/0.16.0/OS/Mac/mac-automation",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/OS/Mac/mac-automation.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"mac apps",permalink:"/keeps-learning/docs/0.16.0/OS/Mac/mac-apps"},next:{title:"mac bugfix",permalink:"/keeps-learning/docs/0.16.0/OS/Mac/mac-bugfix"}},p={},c=[{value:"applescript",id:"applescript",level:2},{value:"\u4e0eshellscript\u7684\u4e92\u76f8\u8c03\u7528",id:"\u4e0eshellscript\u7684\u4e92\u76f8\u8c03\u7528",level:3},{value:"\u6ce8\u91ca",id:"\u6ce8\u91ca",level:3},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:3},{value:"\u8f93\u51fa\u4ea7\u54c1",id:"\u8f93\u51fa\u4ea7\u54c1",level:3},{value:"\u66f4\u6362\u56fe\u6807",id:"\u66f4\u6362\u56fe\u6807",level:3}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mac-\u81ea\u52a8\u5316"},"mac \u81ea\u52a8\u5316"),(0,r.kt)("h2",{id:"applescript"},"applescript"),(0,r.kt)("h3",{id:"\u4e0eshellscript\u7684\u4e92\u76f8\u8c03\u7528"},"\u4e0eshellscript\u7684\u4e92\u76f8\u8c03\u7528"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728applescript\u4e2d\u8c03\u7528shellscript\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'do shell script "MY SCRIPT"'),"\uff08\u6ce8\u610f\u8981\u7528\u53cc\u5f15\u53f7\uff0c\u5355\u5f15\u53f7\u4e0d\u884c\uff0c\u56e0\u6b64\u5185\u90e8\u7684\u53cc\u5f15\u53f7\u8981\u8f6c\u4e49\uff09, ref: - ",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/CallCommandLineUtilities.html"},"Mac Automation Scripting Guide: Calling Command-Line Tools")),(0,r.kt)("li",{parentName:"ol"},"\u5728shellscript\u4e2d\u8c03\u7528applescript: ",(0,r.kt)("inlineCode",{parentName:"li"},'osascript -e "MY SCRIPT"'),"\uff08\u5982\u679c\u6709\u591a\u884c\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"tell xxx; do something; end tell;"),"\u8fd9\u79cd\uff0c\u53ef\u4ee5\u6bcf\u884c\u5206\u522b\u7528\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"-e"),"\uff0cref: ",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/49079025/9422455%EF%BC%89"},"https://stackoverflow.com/a/49079025/9422455\uff09"))),(0,r.kt)("h3",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),(0,r.kt)("p",null,"\u5355\u884c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"--")," \u6216\u8005\u5199\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"--\x3e")),(0,r.kt)("p",null,"\u591a\u884c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"(*")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"*)"),", ref: - ",(0,r.kt)("a",{parentName:"p",href:"http://downloads.techbarrack.com/books/programming/AppleScript/website/basics/comments.html"},"Comments | Basics of AppleScript")," "),(0,r.kt)("h3",{id:"\u5feb\u6377\u952e"},"\u5feb\u6377\u952e"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u7ed9\u81ea\u52a8\u5316\u7a0b\u5e8f\u7ed1\u5b9a\u5feb\u6377\u952e\uff0c\u5c31\u8981\u4f7f\u7528service\uff08\u6bd4\u5982 quick action\uff09\uff0c\u89c1\uff1a- ",(0,r.kt)("a",{parentName:"p",href:"https://apple.stackexchange.com/questions/175215/how-do-i-assign-a-keyboard-shortcut-to-an-applescript-i-wrote"},"How do I assign a keyboard shortcut to an AppleScript I wrote? - Ask Different")),(0,r.kt)("h3",{id:"\u8f93\u51fa\u4ea7\u54c1"},"\u8f93\u51fa\u4ea7\u54c1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"workflow \u548c app \u662f\u4e0d\u540c\u7684\uff0cworkflow\u91cc\u7684\u5143\u7d20\u5f88\u5c11\uff0c\u4f46app\u6709\u81ea\u5df1\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4f46app\u5728\u8fd0\u884c\u65f6\u4ecd\u65e7\u662f\u8c03\u7528\u7684automator\uff0c\u56e0\u6b64notification\u7684icon\u8c8c\u4f3c\u8fd8\u662f\u6539\u4e0d\u4e86\u7684")),(0,r.kt)("h3",{id:"\u66f4\u6362\u56fe\u6807"},"\u66f4\u6362\u56fe\u6807"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u53ef\u4ee5\u89e3\u51b3app icon\u66f4\u6362\u7684\u95ee\u9898\uff0c\u4f46\u662f\u5c1d\u8bd5\u4e86\u4e00\u4e0b\u4e0d\u53ef\u4ee5\u66f4\u6362\u901a\u77e5\u7684icon\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/48856158/change-icon-of-notification-when-using-osascript-e-display-notification"},'applescript - Change icon of notification when using osascript -e "display notification" - Stack Overflow')))}m.isMDXComponent=!0}}]);