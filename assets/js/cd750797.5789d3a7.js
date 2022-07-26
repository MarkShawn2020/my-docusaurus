"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3387],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={},r="aosp compile",l={unversionedId:"AndroidFramework/TaskA2-aosp-compile/aosp-compile-howto",id:"version-0.16.0/AndroidFramework/TaskA2-aosp-compile/aosp-compile-howto",title:"aosp compile",description:"1. make commands",source:"@site/versioned_docs/version-0.16.0/AndroidFramework/TaskA2-aosp-compile/aosp-compile-howto.md",sourceDirName:"AndroidFramework/TaskA2-aosp-compile",slug:"/AndroidFramework/TaskA2-aosp-compile/aosp-compile-howto",permalink:"/keeps-learning/docs/0.16.0/AndroidFramework/TaskA2-aosp-compile/aosp-compile-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/AndroidFramework/TaskA2-aosp-compile/aosp-compile-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"aosp compile bugfix",permalink:"/keeps-learning/docs/0.16.0/AndroidFramework/TaskA2-aosp-compile/aosp-compile-bugfix"},next:{title:"aosp changes",permalink:"/keeps-learning/docs/0.16.0/AndroidFramework/TaskA3-aosp-changes/aosp-changes"}},s={},p=[{value:"make commands",id:"make-commands",level:2},{value:"target product: <code>eng/userdebug/user</code>",id:"target-product-enguserdebuguser",level:2},{value:"BEST-PRACTICE: install preparations if in need",id:"best-practice-install-preparations-if-in-need",level:2},{value:"BEST-PRACTICE: auto make: <code>make || make -j3</code>",id:"best-practice-auto-make-make--make--j3",level:2},{value:"how to check detailed log in file (when building)",id:"how-to-check-detailed-log-in-file-when-building",level:2},{value:"why ninja start so slow?",id:"why-ninja-start-so-slow",level:2},{value:"A totally failed attempt to compile rk codes/patch onto AOSP",id:"a-totally-failed-attempt-to-compile-rk-codespatch-onto-aosp",level:2},{value:"conflicts of meson python version requirements",id:"conflicts-of-meson-python-version-requirements",level:3},{value:"compile <code>librga</code>",id:"compile-librga",level:3},{value:"realization of impossibility",id:"realization-of-impossibility",level:3},{value:"run aosp in avd",id:"run-aosp-in-avd",level:2},{value:"resolution 1. use build version of <code>full-eng</code>",id:"resolution-1-use-build-version-of-full-eng",level:3},{value:"resolution 2. use avd",id:"resolution-2-use-avd",level:3},{value:"resolution 3. run arm on qemu",id:"resolution-3-run-arm-on-qemu",level:3},{value:"how to increase partition size",id:"how-to-increase-partition-size",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aosp-compile"},"aosp compile"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#make-commands"},"make commands")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#target-product-enguserdebuguser"},"target product: ",(0,o.kt)("inlineCode",{parentName:"a"},"eng/userdebug/user"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#best-practice-install-preparations-if-in-need"},"BEST-PRACTICE: install preparations if in need")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#best-practice-auto-make-make--make--j3"},"BEST-PRACTICE: auto make: ",(0,o.kt)("inlineCode",{parentName:"a"},"make || make -j3"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#how-to-check-detailed-log-in-file-when-building"},"how to check detailed log in file (when building)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#why-ninja-start-so-slow"},"why ninja start so slow?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#a-totally-failed-attempt-to-compile-rk-codespatch-onto-aosp"},"A totally failed attempt to compile rk codes/patch onto AOSP"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#conflicts-of-meson-python-version-requirements"},"conflicts of meson python version requirements")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#compile-librga"},"compile ",(0,o.kt)("inlineCode",{parentName:"a"},"librga"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#realization-of-impossibility"},"realization of impossibility")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#run-aosp-in-avd"},"run aosp in avd"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#resolution-1-use-build-version-of-full-eng"},"resolution 1. use build version of ",(0,o.kt)("inlineCode",{parentName:"a"},"full-eng"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#resolution-2-use-avd"},"resolution 2. use avd")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#resolution-3-run-arm-on-qemu"},"resolution 3. run arm on qemu")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#how-to-increase-partition-size"},"how to increase partition size"))))),(0,o.kt)("h2",{id:"make-commands"},"make commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2728 a good instruction \u2728: ",(0,o.kt)("a",{parentName:"li",href:"https://blog.csdn.net/tkwxty/article/details/111684291"},"(23\u6761\u6d88\u606f) Android\u9ad8\u7248\u672cP/Q/R\u6e90\u7801\u7f16\u8bd1\u6307\u5357_IT\u5148\u68ee-CSDN\u535a\u5ba2_android\u6e90\u7801\u7f16\u8bd1"),", include: \u52a8\u6001\u5206\u533a\u5237\u673a\u7684\u65b9\u6cd5, \u89e3\u51b3Android\u9ad8\u7248\u672c\u7f16\u8bd1ssd\u56fa\u6001\u786c\u76d8\u7a7a\u95f4\u4e0d\u591f\u7684\u95ee\u9898")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"make update-api:    \u66f4\u65b0API\u6587\u4ef6\uff0c\u5728framework API\u6539\u52a8\u4e4b\u540e\uff0c\u9700\u8981\u9996\u5148\u6267\u884c\u8be5\u547d\u4ee4\u6765\u66f4\u65b0API\uff0c\u516c\u5f00\u7684API\u8bb0\u5f55\u5728frameworks/base/api\u76ee\u5f55\u4e0b\nmake:               Android\u9ed8\u8ba4\u7cfb\u7edf\u7f16\u8bd1\u6307\u4ee4\uff0c\u4f1a\u7f16\u8bd1\u51fa\u6574\u4e2a\u7cfb\u7edf\u7684\u6240\u6709\u955c\u50cf(\u5176\u5b9e\u8d28\u6700\u7ec8\u6267\u884c\u7684\u662fmake droid)\n\nmake sdk:           \u7f16\u8bd1\u51faAndroid\u7684SDK\u5f00\u53d1\u5957\u4ef6\nmake clean-sdk:     \u6e05\u7406SDK\u7684\u7f16\u8bd1\u4ea7\u7269\n\nmake clean:         deletes all of the output and intermediate files for this configuration. This is the same as `rm -rf out/<configuration>/`,\u901a\u5e38\u5220\u9664\u7684\u662f\u6574\u4e2aAndroid\u6e90\u7801\u5de5\u7a0b\u7684out/*\u76ee\u5f55\nmake installclean:  \u5f53\u6211\u4eec\u5728\u6267\u884c\u5207\u6362\u7f16\u8bd1\u76ee\u6807\u65f6\u53ef\u4ee5\u6267\u884cmake installclean\uff0c\u7528\u4ee5\u6e05\u9664\u4e4b\u524d\u7f16\u8bd1\u751f\u6210\u7684\u6587\u4ef6\uff0c\u4f46\u662f\u53c8\u4e0d\u4f1a\u5c06\u6574\u4e2aout\u76ee\u5f55\u6e05\u7a7a\uff0c\u8fd9\u6837\u53ef\u4ee5\u52a0\u5feb\u7f16\u8bd1\u76ee\u6807\u7684\u6784\u5efa\u901f\u5ea6\n\nmake framework:     \u7f16\u8bd1\u6240\u6709Javaframework\u5185\u5bb9(\u505aAndroid framework\u5f00\u53d1\u7684\u5c0f\u4f19\u4eec\u5bf9\u8fd9\u6761\u547d\u4ee4\u5e94\u8be5\u662f\u518d\u719f\u6089\u4e0d\u8fc7\u7684\u4e86)\u3002\nmake services:      \u7f16\u8bd1\u7cfb\u7edf\u670d\u52a1\u548c\u76f8\u5173\u5185\u5bb9\n\nmake bootimage:     \u7f16\u8bd1\u751f\u6210boot.img\nmake systemimage:   \u7f16\u8bd1\u751f\u6210system.img\nmake vendorimage:   \u7f16\u8bd1\u751f\u6210vendor.img\nmake superimage:    \u7f16\u8bd1\u751f\u6210superi.img\n")),(0,o.kt)("h2",{id:"target-product-enguserdebuguser"},"target product: ",(0,o.kt)("inlineCode",{parentName:"h2"},"eng/userdebug/user")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-compile-howto-1644770866675-f652b37aaa6b2ebd8848d90e1aaaa77d7203e8f625ce778fa1ba4ff3364f0e51.png",alt:"picture 37"}),"  "),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/bluestorm/p/11125055.html"},"Android\u7f16\u8bd1\u9009\u9879eng\u3001user\u3001userdebug\u7684\u533a\u522b - petercao - \u535a\u5ba2\u56ed"))),(0,o.kt)("h2",{id:"best-practice-install-preparations-if-in-need"},"BEST-PRACTICE: install preparations if in need"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install git-core gnupg flex bison build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 libncurses5 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z1-dev libgl1-mesa-dev libxml2-utils xsltproc unzip fontconfig\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://source.android.com/setup/build/initializing#installing-required-packages-ubuntu-1804"},"\u642d\u5efa\u6784\u5efa\u73af\u5883 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,o.kt)("h2",{id:"best-practice-auto-make-make--make--j3"},"BEST-PRACTICE: auto make: ",(0,o.kt)("inlineCode",{parentName:"h2"},"make || make -j3")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Since there are different making speed for different partition of aosp build, so we can use the first ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," to automatically build as a faster speed and then decrease to a lower when stuck.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'(make || make -j3) && echo "finished"\n')),(0,o.kt)("h2",{id:"how-to-check-detailed-log-in-file-when-building"},"how to check detailed log in file (when building)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gzip -cd out/verbose.log.gz | less -R\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/42925014/aosp-make-verbose"},"build - AOSP make verbose - Stack Overflow"))),(0,o.kt)("h2",{id:"why-ninja-start-so-slow"},"why ninja start so slow?"),(0,o.kt)("p",null,"\u76f4\u63a5\u7ed9\u51fa\u7ed3\u8bba\uff1a\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0cninja\u5728\u542f\u52a8\u9636\u6bb5\u5f88\u6162\u7684\u539f\u56e0\uff0c\u90fd\u4e0e\u6574\u7f16\u4f9d\u8d56\u6709\u5173\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e00\u6b21\uff0c\u6211\u628a\u535a\u6587\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"hmdservice | hmdclient_ndk")," \u653e\u5230\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"AOSP/vendor/arpara/")," \u4e0b\uff0c\u5e76\u4e14\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"renderengine")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Android.bp")," \u7684share\u5e93\u91cc\u5305\u542b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"libhmdclient_ndk"),"\u3002 \u7531\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"hmdservice")," \u91cc\u5e26\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"gml")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"cv"),"\uff0c \u6240\u4ee5\u5bfc\u81f4\u521d\u59cb\u52a8\u4f5c\u5de8\u6162\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-compile-howto-1645852992297-0a6962dcb37b031975a46b7f23a651842f3a37a903e13aca782b5cb8b19e10fd.png",alt:"picture 52"}),"  "),(0,o.kt)("p",null,"\u6211\u4e0d\u77e5\u9053\u8fd9\u4e00\u6b65ninja\u5177\u4f53\u5728\u5e72\u561b\uff0c\u4f46\u4f30\u8ba1\u548c\u201c\u6253\u5305\u201d\u4e4b\u7c7b\u7684\u52a8\u4f5c\u5e94\u8be5\u5dee\u4e0d\u591a\u3002"),(0,o.kt)("p",null,"\u597d\u5728\u4e0b\u4e00\u6b21\u7f16\u8bd1\u5c31\u4f1a\u5feb\u5f88\u591a\u4e86\u3002"),(0,o.kt)("p",null,"!!! warning\n\u4f46\u662f\u6ce8\u610f\uff0c\u5982\u679c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"mm")," \u7684\u8bdd\uff0c\u662f\u4f1a\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u4f9d\u8d56\u7684\uff0c\u6240\u4ee5\u53c8\u4f1a\u5f88\u6162\uff0c\u56e0\u6b64\u5c3d\u91cf\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"m XXX")," \u5373\u53ef\u3002"),(0,o.kt)("h2",{id:"a-totally-failed-attempt-to-compile-rk-codespatch-onto-aosp"},"A totally failed attempt to compile rk codes/patch onto AOSP"),(0,o.kt)("h3",{id:"conflicts-of-meson-python-version-requirements"},"conflicts of meson python version requirements"),(0,o.kt)("p",null,"meson requires python version > 3.7 (ref: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FFY00/mesonpy"},"FFY00/mesonpy: Meson PEP 517 Python build backend"),"), however my default version is 3.6.9."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643087935681-cae1ef23e1bb4f426ee84613734b1971b8f67b6b41b399ec7912b131087475f8.png",alt:"picture 29"}),"  "),(0,o.kt)("h3",{id:"compile-librga"},"compile ",(0,o.kt)("inlineCode",{parentName:"h3"},"librga")),(0,o.kt)("p",null,"\u641e\u4e86\u534a\u5929\uff0c\u83ab\u540d\u5176\u5999\u5df2\u7ecf\u6709\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"librga"),"\uff0c\u4e5f\u8bb8\u628a\u8fd9\u4e2a\u62f7\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/bin"),"\u4e0b\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643091737140-cb7e48d73979942cf47885f781656a7c06d7e2d31809a57cd3fecb7abe34768e.png",alt:"picture 30"}),"  "),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u8fd9\u65f6\u6211\u6b63\u597d\u5728\u770b",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/rockchip-linux/linux-rga"),"\uff0c\u53d1\u73b0\u76f4\u63a5\u7ed9\u4e86AOSP\u7684\u7f16\u8bd1\u65b9\u6cd5\u2026\u2026"),(0,o.kt)("p",null,"\u6211\u8fd9\u4e0b\u624d\u53d1\u73b0\uff0c\u88ab\u53e6\u4e00\u7bc7\u6587\u7ae0\u5751\u7684\u6709\u591a\u60e8\u2026\u2026"),(0,o.kt)("p",null,"\u5bf9\u6bd4\u4e00\u4e0b\uff1a"),(0,o.kt)("p",null,"\u8fd9\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"linux-rga"),"\u6307\u5b9a\u7684\u7f16\u8bd1\u65b9\u6cd5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643091854481-b44f540f1b11955ace900a589c5c2d11d28cbffebbf76000045e8647eead2ed0.png",alt:"picture 31"}),"  "),(0,o.kt)("p",null,"\u800c\u8fd9\u662f\u8fd9\u4e2a\u4eba\u7684\u5e16\u5b50\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643091877616-fecbb622e8971a218cdbcba0148062e30f2d0f952041b8ffd79d94d9b8d80746.png",alt:"picture 32"}),"  "),(0,o.kt)("p",null,"\u6211\u4e00\u8def\u88ab\u5751\u7206\u6389\u4e86\uff0c\u5404\u79cd\u4f9d\u8d56\u7f3a\u5931\uff0c\u4e00\u4e2a\u4e2a\u627e\u2026\u2026\u5410\u4e86\u554a\u2026\u2026"),(0,o.kt)("h3",{id:"realization-of-impossibility"},"realization of impossibility"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643093693014-df3c8f45ac4e76c7c03d83046c602f4fd59e6006dd92241a632936ed442b4e18.png",alt:"picture 33"}),"  "),(0,o.kt)("h2",{id:"run-aosp-in-avd"},"run aosp in avd"),(0,o.kt)("h3",{id:"resolution-1-use-build-version-of-full-eng"},"resolution 1. use build version of ",(0,o.kt)("inlineCode",{parentName:"h3"},"full-eng")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"common build: ",(0,o.kt)("inlineCode",{parentName:"p"},"m aosp_arm64-eng"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"recommended by emulator for my machine: ",(0,o.kt)("inlineCode",{parentName:"p"},"m aosp_x86_64-eng"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"recommended online in order to run emulator, which is inner 'arm64': ",(0,o.kt)("inlineCode",{parentName:"p"},"m full-eng")))),(0,o.kt)("p",null,"compile success of ",(0,o.kt)("inlineCode",{parentName:"p"},"m full-eng"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-compile-howto-1643502046060-43128f1f27ac933f2857ec703eba13559887ac32eb3301231943aa5cf5916c9b.png",alt:"picture 2"}),"  "),(0,o.kt)("h3",{id:"resolution-2-use-avd"},"resolution 2. use avd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m sdk-phone-arm64\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://source.android.com/setup/create/avd"},"\u4f7f\u7528 Android \u6a21\u62df\u5668\u865a\u62df\u8bbe\u5907 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,o.kt)("h3",{id:"resolution-3-run-arm-on-qemu"},"resolution 3. run arm on qemu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"qemu-system-aarch64\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-compile-howto-1643514178964-e8d97c7c99dad22b38e9df3fee5f98208fd0b373318e2420e2b95b90bcd07812.png",alt:"picture 3"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-compile-howto-1643514114839-8d612b6d498344fa330f5ca01bc99ee72c77de12e7f76324434191c59336441e.png",alt:"picture 2"}),"  "),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.qemu.org/docs/master/system/target-arm.html#:~:text=QEMU%20can%20emulate%20both%2032,a%2064%2Dbit%20Arm%20machine."},"Arm System emulator \u2014 QEMU documentation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.google.com.hk/search?q=can+arm+run+on+qemu&newwindow=1&sxsrf=APq-WBvFNnymRMqLigJ9HjE9BLc77SU3pw%3A1643513796283&ei=xAf2YazdEIaVseMPnd6a0AY&ved=0ahUKEwisz4qAxtj1AhWGSmwGHR2vBmoQ4dUDCA4&uact=5&oq=can+arm+run+on+qemu&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANKBAhBGABKBAhGGABQ7AtY0g5gthFoAnACeACAAawBiAHLA5IBAzAuM5gBAKABAcgBCMABAQ&sclient=gws-wiz"},"can arm run on qemu - Google Search")))),(0,o.kt)("h3",{id:"how-to-increase-partition-size"},"how to increase partition size"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"first converting the system.img to a raw image may be need"),(0,o.kt)("li",{parentName:"ol"},"You will not be able to use a system.img partition larger than the one defined in BoardConfig at ",(0,o.kt)("inlineCode",{parentName:"li"},"device/generic/x86_64/BoardConfig.mk")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"PLATFORM=generic_x86_64\nIMG_NAME=userdata-qemu\nSIZE_TO_ADD=3092\n\ncroot\ncd out/target/product/$PLATFORM\ndd if=/dev/zero bs=1M count=$SIZE_TO_ADD >> $IMG_NAME.img\ne2fsck -f $IMG_NAME.img && resize2fs $IMG_NAME.img\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34560562/how-to-increase-system-img-partition-size"},"android - How to increase system.img partition size - Stack Overflow"))))}c.isMDXComponent=!0}}]);