"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7506],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?n.createElement(k,i(i({ref:a},c),{},{components:t})):n.createElement(k,i({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79941:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const r={},i="aosp compile bugfix",l={unversionedId:"AndroidFramework/TaskA2-aosp-compile/aosp-compile-bugfix",id:"version-0.16.0/AndroidFramework/TaskA2-aosp-compile/aosp-compile-bugfix",title:"aosp compile bugfix",description:"1. error exit status 1",source:"@site/versioned_docs/version-0.16.0/AndroidFramework/TaskA2-aosp-compile/aosp-compile-bugfix.md",sourceDirName:"AndroidFramework/TaskA2-aosp-compile",slug:"/AndroidFramework/TaskA2-aosp-compile/aosp-compile-bugfix",permalink:"/docs/docs/0.16.0/AndroidFramework/TaskA2-aosp-compile/aosp-compile-bugfix",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/AndroidFramework/TaskA2-aosp-compile/aosp-compile-bugfix.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"aosp pull",permalink:"/docs/docs/0.16.0/AndroidFramework/TaskA1-aosp-pull/aosp-pull"},next:{title:"aosp compile",permalink:"/docs/docs/0.16.0/AndroidFramework/TaskA2-aosp-compile/aosp-compile-howto"}},s={},p=[{value:"error: <code>soong bootstrap failed with: exit status 1</code>",id:"error-soong-bootstrap-failed-with-exit-status-1",level:2},{value:"<code>Killed</code>, such as when building <code>Metalava</code>",id:"killed-such-as-when-building-metalava",level:2},{value:"FIXED: build error of <code>build/core/ninja.mk:148: recipe for target &#39;ninja_wrapper&#39; **failed</code>",id:"fixed-build-error-of-buildcoreninjamk148-recipe-for-target-ninja_wrapper-failed",level:2},{value:"FIXED: build error of <code>java</code>",id:"fixed-build-error-of-java",level:2},{value:"conclusion of installing java openjdk-8",id:"conclusion-of-installing-java-openjdk-8",level:3},{value:"detail (learned from hbw)",id:"detail-learned-from-hbw",level:3},{value:"FIXED: jack-server error",id:"fixed-jack-server-error",level:2},{value:"FIXED: \u53bb\u9664\u672c\u5730\u5316\u7f16\u8bd1",id:"fixed-\u53bb\u9664\u672c\u5730\u5316\u7f16\u8bd1",level:2},{value:"FIXED: <code>libclang_rt.scudo-aarch64-android.so: No such file or directory</code>",id:"fixed-libclang_rtscudo-aarch64-androidso-no-such-file-or-directory",level:2},{value:"solution: <code>make clean</code>",id:"solution-make-clean",level:3},{value:"failed try",id:"failed-try",level:3},{value:"FIXME: <code>FAILED: ** android.test.mock.docs.system_removed.txt</code>",id:"fixme-failed--androidtestmockdocssystem_removedtxt",level:2}],c={toc:p};function d(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aosp-compile-bugfix"},"aosp compile bugfix"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#error-soong-bootstrap-failed-with-exit-status-1"},"error: ",(0,o.kt)("inlineCode",{parentName:"a"},"soong bootstrap failed with: exit status 1"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#killed-such-as-when-building-metalava"},(0,o.kt)("inlineCode",{parentName:"a"},"Killed"),", such as when building ",(0,o.kt)("inlineCode",{parentName:"a"},"Metalava"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#fixed-build-error-of-buildcoreninjamk148-recipe-for-target-ninja_wrapper-failed"},"FIXED: build error of ",(0,o.kt)("inlineCode",{parentName:"a"},"build/core/ninja.mk:148: recipe for target 'ninja_wrapper' **failed"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#fixed-build-error-of-java"},"FIXED: build error of ",(0,o.kt)("inlineCode",{parentName:"a"},"java")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#conclusion-of-installing-java-openjdk-8"},"conclusion of installing java openjdk-8")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#detail-learned-from-hbw"},"detail (learned from hbw)")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#fixed-jack-server-error"},"FIXED: jack-server error")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#fixed-%E5%8E%BB%E9%99%A4%E6%9C%AC%E5%9C%B0%E5%8C%96%E7%BC%96%E8%AF%91"},"FIXED: \u53bb\u9664\u672c\u5730\u5316\u7f16\u8bd1")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#fixed-libclang_rtscudo-aarch64-androidso-no-such-file-or-directory"},"FIXED: ",(0,o.kt)("inlineCode",{parentName:"a"},"libclang_rt.scudo-aarch64-android.so: No such file or directory")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#solution-make-clean"},"solution: ",(0,o.kt)("inlineCode",{parentName:"a"},"make clean"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#failed-try"},"failed try")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#fixme-failed--androidtestmockdocssystem_removedtxt"},"FIXME: ",(0,o.kt)("inlineCode",{parentName:"a"},"FAILED: ** android.test.mock.docs.system_removed.txt")))),(0,o.kt)("h2",{id:"error-soong-bootstrap-failed-with-exit-status-1"},"error: ",(0,o.kt)("inlineCode",{parentName:"h2"},"soong bootstrap failed with: exit status 1")),(0,o.kt)("p",null,"\u8bd5\u4e00\u4e0b\u5728\u7f16\u8bd1\u524d\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"export LC_ALL=C"),"\uff0c\n\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"build/soong/java/config/config.go"),"\n\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},'pctx.StaticVariable("JavacHeapSize", "2048M")'),"\u76842048\u6539\u4e3a\u4f60\u865a\u62df\u673a\u5185\u5b58\u5927\u5c0f\u7684\u4e00\u534a\u3002\u518d\u7f16\u8bd1\u3002"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.smartfire.cn/thread-5520-1-1.html"},"Android\u6e90\u7801\u7f16\u8bd1\u62a5\u9519 - H:\u534e\u7855(tinkerboard/tinikerboard S) - \u6df1\u5733\u98ce\u706b\u8f6e\u79d1\u6280 - Powered by Discuz!"))),(0,o.kt)("h2",{id:"killed-such-as-when-building-metalava"},(0,o.kt)("inlineCode",{parentName:"h2"},"Killed"),", such as when building ",(0,o.kt)("inlineCode",{parentName:"h2"},"Metalava")),(0,o.kt)("p",null,"problem:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643245472132-c33793acb397b841dac7407d7db9adfb8e49c9f76aba37117579fbc859b65ea3.png",alt:"picture 86"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643245447603-ffd15cce966a259b69970e9c92dc3b8f67110ba62822d1a537a15c96e9cf734b.png",alt:"picture 85"}),"  "),(0,o.kt)("p",null,"reason: ",(0,o.kt)("inlineCode",{parentName:"p"},"Metalava")," needs more memory to build."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643245399476-129bf2e8c98f0e65d7baa1027057f339eb945cb75577febdd92bc403b1d6a40f.png",alt:"picture 84"}),"  "),(0,o.kt)("p",null,"solution: use a smaller ",(0,o.kt)("inlineCode",{parentName:"p"},"j"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643246001438-1bfcaa1ddfbdf70aa5c22c4273a6ad9e6269a2319d89f51a8b3d563f56f395da.png",alt:"picture 87"}),"  "),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/58886407/aosp-ninja-build-stopped-subcommand-failed"},"android - AOSP ninja build stopped: subcommand failed - Stack Overflow"))),(0,o.kt)("h2",{id:"fixed-build-error-of-buildcoreninjamk148-recipe-for-target-ninja_wrapper-failed"},"FIXED: build error of ",(0,o.kt)("inlineCode",{parentName:"h2"},"build/core/ninja.mk:148: recipe for target 'ninja_wrapper' **failed")),(0,o.kt)("p",null,"error scene:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643010572471-a9f3bdf4834792c7817d2ac8de58f96efa3e38c00be4f0866ad3ecd624430bae.png",alt:"picture 6"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643010743857-1a71e002fa5d44c8fde20d0972b3da44cfb1bc5e85c637b639160be44dfbdb09.png",alt:"picture 7"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643011164016-79b647aae33990fd2d5d544a3b3159d11a59e1a47bc49e143776d665dc2b36b5.png",alt:"picture 8"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643011240375-f21552ffdfac7dfa8638bfbe106a218c54427008855e534b0c0f659c7c1e3c81.png",alt:"picture 9"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643044506432-90fd7ec3ea979dcb61aa80be3396e41cac0676a824f56f0a1fe8dcca6e4f3648.png",alt:"picture 18"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643050346260-77c9c49942962ca3378103f6da75f52281d9a5c12538ffb25110eb441f85c0d0.png",alt:"picture 25"}),"  "),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"core: ",(0,o.kt)("a",{parentName:"p",href:"https://www.dazhuanlan.com/pucool/topics/969735"},"Ubuntu18.04\u7f16\u8bd1\u95ee\u9898 \xb7 \u5927\u4e13\u680f"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54547246/recipe-for-target-ninja-wrapper-failed-flex-core-dumps"},"android - recipe for target 'ninja_wrapper' failed / flex core dumps - Stack Overflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://discuss.96boards.org/t/aosp-16-03-building-from-source-troubles/742/2"},"AOSP 16.03 Building from source troubles - Products Support / HiKey - 96Boards Forum"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u274c not solved: ",(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/rookie_wei/article/details/87428820"},"(23\u6761\u6d88\u606f) build/core/ninja.mk:148: recipe for target 'ninja",(0,o.kt)("em",{parentName:"a"},"wrapper' failed"),"\u97e6\u8bbf\u7684\u4e13\u680f-CSDN\u535a\u5ba2"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://discuss.96boards.org/t/aosp-16-03-building-from-source-troubles/742"},"AOSP 16.03 Building from source troubles - Products Support / HiKey - 96Boards Forum"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/liangtianmeng/article/details/85911485"},"(23\u6761\u6d88\u606f) \u89e3\u51b3 /bin/bash: xmllint: command not found_liangtianmeng\u7684\u4e13\u680f-CSDN\u535a\u5ba2")))),(0,o.kt)("h2",{id:"fixed-build-error-of-java"},"FIXED: build error of ",(0,o.kt)("inlineCode",{parentName:"h2"},"java")),(0,o.kt)("h3",{id:"conclusion-of-installing-java-openjdk-8"},"conclusion of installing java openjdk-8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install openjdk-8-jdk\n")),(0,o.kt)("h3",{id:"detail-learned-from-hbw"},"detail (learned from hbw)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"apt search")," to list all the possible packages"),(0,o.kt)("li",{parentName:"ol"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"apt install")," to install the specific package")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"[2:16:14]:~/android-7.1.2_r1$ sudo apt search openjdk-8        \nSorting... Done\nFull Text Search... Done\nlibreoffice/bionic-updates,bionic-security 1:6.0.7-0ubuntu0.18.04.10 amd64\n  office productivity suite (metapackage)\n\nopenjdk-8-dbg/bionic-updates,bionic-security 8u312-b07-0ubuntu1~18.04 amd64\n  Java runtime based on OpenJDK (debugging symbols)\n\nopenjdk-8-demo/bionic-updates,bionic-security 8u312-b07-0ubuntu1~18.04 amd64\n  Java runtime based on OpenJDK (demos and examples)\n\nopenjdk-8-doc/bionic-updates,bionic-updates,bionic-security,bionic-security 8u312-b07-0ubuntu1~18.04 all\n  OpenJDK Development Kit (JDK) documentation\n\nopenjdk-8-jdk/bionic-updates,bionic-security,now 8u312-b07-0ubuntu1~18.04 amd64 [installed]\n  OpenJDK Development Kit (JDK)\n\nopenjdk-8-jdk-headless/bionic-updates,bionic-security,now 8u312-b07-0ubuntu1~18.04 amd64 [installed,automatic]\n  OpenJDK Development Kit (JDK) (headless)\n\nopenjdk-8-jre/bionic-updates,bionic-security,now 8u312-b07-0ubuntu1~18.04 amd64 [installed,automatic]\n  OpenJDK Java runtime, using Hotspot JIT\n\nopenjdk-8-jre-dcevm/bionic 8u112-2 amd64\n  Alternative VM for OpenJDK 8 with enhanced class redefinition\n\nopenjdk-8-jre-headless/bionic-updates,bionic-security,now 8u312-b07-0ubuntu1~18.04 amd64 [installed,automatic]\n  OpenJDK Java runtime, using Hotspot JIT (headless)\n\nopenjdk-8-jre-zero/bionic-updates,bionic-security 8u312-b07-0ubuntu1~18.04 amd64\n  Alternative JVM for OpenJDK, using Zero/Shark\n\nopenjdk-8-source/bionic-updates,bionic-updates,bionic-security,bionic-security 8u312-b07-0ubuntu1~18.04 all\n  OpenJDK Development Kit (JDK) source files\n\nuwsgi-plugin-jvm-openjdk-8/bionic-updates,bionic-security 2.0.15-10.2ubuntu2.2 amd64\n  Java plugin for uWSGI (OpenJDK 8)\n\nuwsgi-plugin-jwsgi-openjdk-8/bionic-updates,bionic-security 2.0.15-10.2ubuntu2.2 amd64\n  JWSGI plugin for uWSGI (OpenJDK 8)\n\nuwsgi-plugin-ring-openjdk-8/bionic-updates,bionic-security 2.0.15-10.2ubuntu2.2 amd64\n  Closure/Ring plugin for uWSGI (OpenJDK 8)\n\nuwsgi-plugin-servlet-openjdk-8/bionic-updates,bionic-security 2.0.15-10.2ubuntu2.2 amd64\n  JWSGI plugin for uWSGI (OpenJDK 8)\n\n[2:16:35]:~/android-7.1.2_r1$ sudo apt install openjdk8-jdk\n")),(0,o.kt)("h2",{id:"fixed-jack-server-error"},"FIXED: jack-server error"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"config jack-server TLS algos"),(0,o.kt)("li",{parentName:"ol"},"restart jack-server")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'sudo sed -i.bak "s|TLSv1, TLSv1.1, ||"  /etc/java-8-openjdk/security/java.security\n./prebuilts/sdk/tools/jack-admin kill-server\n./prebuilts/sdk/tools/jack-admin start-server\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643046227111-7c974e4e0802cc33cc1519446ee285dc9ab9d188e5af0017f765add150992429.png",alt:"picture 21"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643046485457-72cfc9d4e73b0c76abb7bebe50f8307055f8deb088906f6384384c7efb51bd7a.png",alt:"picture 22"}),"  "),(0,o.kt)("p",null,"It worked:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643046600047-0a024694ae1cc03b8014b975e96acd11fe54fe109118c74d4e15b3251f604461.png",alt:"picture 23"}),"  "),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dqdongg.com/android/linux/2021/05/08/Android-jack-issue.html"},"Fixing the issue: Communication error with Jack server (35) when building AOSP | David Dong\u2019s Blog"))),(0,o.kt)("h2",{id:"fixed-\u53bb\u9664\u672c\u5730\u5316\u7f16\u8bd1"},"FIXED: \u53bb\u9664\u672c\u5730\u5316\u7f16\u8bd1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export LC_ALL=C\nm\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \uff08\u672a\u8bc1\u5b9e\uff09\u4e0d\u80fd\u5199\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u7ec8\u7aef\u5185\u4e2d\u6587\u663e\u793a\u4e3a\u6570\u5b57(\u5e94\u8be5\u662f\u5bf9\u5e94\u7684\u7f16\u7801)")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/c3bb9d86fd22"},"Ubuntu 18.04 \u7f16\u8bd1 AOSP \u95ee\u9898\u603b\u7ed3 - \u7b80\u4e66"))),(0,o.kt)("h2",{id:"fixed-libclang_rtscudo-aarch64-androidso-no-such-file-or-directory"},"FIXED: ",(0,o.kt)("inlineCode",{parentName:"h2"},"libclang_rt.scudo-aarch64-android.so: No such file or directory")),(0,o.kt)("h3",{id:"solution-make-clean"},"solution: ",(0,o.kt)("inlineCode",{parentName:"h3"},"make clean")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643199076739-e1b41875796a01079805fb5e5be9f75c138246c0765287ee17c86d0cc7aa3869.png",alt:"picture 81"}),"  "),(0,o.kt)("h3",{id:"failed-try"},"failed try"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643196021087-2ecbf607dc36427b50a87c4b0167300d0efce8ccbe19b21bac843305f24120ee.png",alt:"picture 77"}),"  "),(0,o.kt)("p",null,"download all the ",(0,o.kt)("inlineCode",{parentName:"p"},".so")," files, and move to the target folder."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643197084892-b7447c939a0bfe0a3f0b73c9f4e8dec99a033114a483fd5d52f04f0e76f37a74.png",alt:"picture 78"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643197597215-9d24f33962f39ac369b7b1c53ae1afda2ba5aeaf25a7c7712697067111e392e4.png",alt:"picture 79"}),"  "),(0,o.kt)("h2",{id:"fixme-failed--androidtestmockdocssystem_removedtxt"},"FIXME: ",(0,o.kt)("inlineCode",{parentName:"h2"},"FAILED: ** android.test.mock.docs.system_removed.txt")),(0,o.kt)("p",null,"problem:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-complie-bugfix-1643541430510-80416b0ca9a980f5a1f49477f73ee65b466e1c94b55ab2df33914151188dfc1b.png",alt:"picture 1"}),"  "),(0,o.kt)("p",null,"\u4e00\u822c\u8fd9\u79cd\u60c5\u51b5\uff0c\u770b\u5230\u56fe\u4e2d\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"//libcore/mmodules/core_platform_api:core-platform-api-stubs Metalava Check API"),"\u7684\uff0c\u5e94\u8be5\u662f\u9700\u8981\u66f4\u65b0api\uff1a"),(0,o.kt)("p",null,"resolution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make update-api\n")),(0,o.kt)("p",null,"result:"),(0,o.kt)("p",null,"stuck at here, but doesn't matter:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-complie-bugfix-1643541546114-2668f1e45da3ccc4985af198c932cb1fe7a4c97d83cb3a7c652c5da8c36ddc80.png",alt:"picture 2"}),"  "),(0,o.kt)("p",null,"And then re-make:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-complie-bugfix-1643543101317-e0bc9024165318b8ff37e0295c9d0ce0335aebec1c8e0dfb963172f1cb289adb.png",alt:"picture 5"})))}d.isMDXComponent=!0}}]);