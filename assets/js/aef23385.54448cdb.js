"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={},r="vscode-bugfix",l={unversionedId:"softwares/VSCode/vscode-bugfix",id:"softwares/VSCode/vscode-bugfix",title:"vscode-bugfix",description:"[toc]",source:"@site/docs/softwares/VSCode/vscode-bugfix.md",sourceDirName:"softwares/VSCode",slug:"/softwares/VSCode/vscode-bugfix",permalink:"/docs/docs/softwares/VSCode/vscode-bugfix",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/softwares/VSCode/vscode-bugfix.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"wechat todo",permalink:"/docs/docs/softwares/Tencent/wechat-todo"},next:{title:"vscode extensions howto",permalink:"/docs/docs/softwares/VSCode/vscode-extensions-howto"}},s={},d=[{value:"FIXED: vscode auto indent using 2 spaces",id:"fixed-vscode-auto-indent-using-2-spaces",level:2},{value:"FIXED: <code>Vscode &quot;Unable to open [file]: Unable to read file&quot;</code>",id:"fixed-vscode-unable-to-open-file-unable-to-read-file",level:2},{value:"git clone repo as workspace",id:"git-clone-repo-as-workspace",level:2},{value:"about markdown image link not display",id:"about-markdown-image-link-not-display",level:2},{value:"be careful about soft-link",id:"be-careful-about-soft-link",level:3},{value:"absolute path refer only works in src",id:"absolute-path-refer-only-works-in-src",level:3},{value:"1. why markdown <code>.ts</code> link rendered as a video (but cannot open, since it&#39;s not)",id:"1-why-markdown-ts-link-rendered-as-a-video-but-cannot-open-since-its-not",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vscode-bugfix"},"vscode-bugfix"),(0,a.kt)("p",null,"[toc]"),(0,a.kt)("h2",{id:"fixed-vscode-auto-indent-using-2-spaces"},"FIXED: vscode auto indent using 2 spaces"),(0,a.kt)("p",null,"It's because the file of ",(0,a.kt)("inlineCode",{parentName:"p"},".editorconfig"),"!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vscode-bugfix-1644513820228-8fa771242ad8b35a92dca099ea051f971bcef8158764eef42d8dfe11ae5c4055.png",alt:"picture 8"}),"  "),(0,a.kt)("p",null,"And I am surprised to find there are a lot of ",(0,a.kt)("inlineCode",{parentName:"p"},".editorconfig")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vscode-bugfix-1644514000138-cd33bb79f7c6aac8828b334778a18f0f79a55f0be645f273bba0a7cd908193ed.png",alt:"picture 9"}),"  "),(0,a.kt)("p",null,"Then I changed two of them about the indent size of markdown files: ",(0,a.kt)("inlineCode",{parentName:"p"},"~/homebrew/.editorconfig"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.oh-my-zsh/.editorconfig")),(0,a.kt)("h2",{id:"fixed-vscode-unable-to-open-file-unable-to-read-file"},"FIXED: ",(0,a.kt)("inlineCode",{parentName:"h2"},'Vscode "Unable to open [file]: Unable to read file"')),(0,a.kt)("p",null,"I caught this error since I ",(0,a.kt)("strong",{parentName:"p"},"create relative soft links")," incorrectly."),(0,a.kt)("p",null,"The right way to create relative soft links is to first ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into the target directory, then create the relative soft links so that the target soft link can be correctly find."),(0,a.kt)("p",null,"Otherwise, we'd better create the absolute soft links."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ref")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/60472084/vscode-unable-to-open-file-unable-to-read-file-message-when-clicking-on-an"},'c++ - Vscode "Unable to open [file]: Unable to read file" message when clicking on an error - Stack Overflow'))),(0,a.kt)("h2",{id:"git-clone-repo-as-workspace"},"git clone repo as workspace"),(0,a.kt)("p",null,"It needs the vscode to have ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," pre-installed."),(0,a.kt)("p",null,"If you use windows, you can download the installed version from ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/download/win"},"Git - Downloading Package"),"; otherwise can install ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," from command line such as ",(0,a.kt)("inlineCode",{parentName:"p"},"brew install git")," on MacOS and ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt install git")," on Ubuntu."),(0,a.kt)("h2",{id:"about-markdown-image-link-not-display"},"about markdown image link not display"),(0,a.kt)("h3",{id:"be-careful-about-soft-link"},"be careful about soft-link"),(0,a.kt)("p",null,"At the very beginning, I thought it's because vscode doesn't support refer to image file outside project."),(0,a.kt)("p",null,"But then I realized not."),(0,a.kt)("p",null,"The main reason is I used to create oen soft-link from ",(0,a.kt)("inlineCode",{parentName:"p"},"hjxh_express_match")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"erb"),"."),(0,a.kt)("p",null,"And then when I use relative reference, the path join algo would goes wrong."),(0,a.kt)("h3",{id:"absolute-path-refer-only-works-in-src"},"absolute path refer only works in src"),(0,a.kt)("p",null,"And another problem is about absolute path reference."),(0,a.kt)("p",null,"We can see it below that the absolute reference only works when we are using html tag rather than markdown link."),(0,a.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vscode-bugfix-1641384502297-a8a3c0593ee630c0782df35ad5927feaa90cff7e18a7dd2e127bd54400982d1f.png",width:"480"}),(0,a.kt)("h2",{id:"1-why-markdown-ts-link-rendered-as-a-video-but-cannot-open-since-its-not"},"1. why markdown ",(0,a.kt)("inlineCode",{parentName:"h2"},".ts")," link rendered as a video (but cannot open, since it's not)"),(0,a.kt)("p",null,"I first thought of disabling plugins, and it does work: the problem is owing to the plugin of ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown extended")," which recognize ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," as a video url since it's a ",(0,a.kt)("inlineCode",{parentName:"p"},"mp2s")," file in general."),(0,a.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vscode-bugfix-1640972522085-f8ee9a85475971814ae7dfa624529c97b98bcbe9364d1d7df29be3575cbbbe18.png",width:"480"}),(0,a.kt)("p",null,"Then I tried to figure out what can be configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown extended")," so that I can read my ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," link normally, i.e. to make it under control. But I failed since it didn't provide me even any options."),(0,a.kt)("p",null,"Afterwards, what the hell this plugin can do to me becomes important."),(0,a.kt)("p",null,"Sadly, only the ",(0,a.kt)("inlineCode",{parentName:"p"},"toc")," feature is what I need now (update 2022-01-01 : no, actually the feature of ",(0,a.kt)("inlineCode",{parentName:"p"},"toc")," is powered by ",(0,a.kt)("inlineCode",{parentName:"p"},"all in markdown"),"), and the other one I used is ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," while I actually used another alternative."),(0,a.kt)("p",null,"I came to the conclusion: uninstall ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown extended")," and install ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown table of content")," singly."),(0,a.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vscode-bugfix-1640973326942-79f0eba6adc0c8472b5762b21e9e503424fb7db43732a04d4ec98a345380977b.png",width:"480"}),(0,a.kt)("p",null,"However, when I settled to use a new ",(0,a.kt)("inlineCode",{parentName:"p"},"TOC")," plugin, I tried an one, but not satisfying, since it would change my heading, adding ",(0,a.kt)("inlineCode",{parentName:"p"},"<a></a>")," in it, which caused my heading not readable any more, and the jump actually not work, which means it did nothing but negative work."),(0,a.kt)("p",null,"Meanwhile, I found not only ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown-extended")," would change the default behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," url render, but also another plugin would: ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown-preview-extended"),"."),(0,a.kt)("p",null,"But luckily, I found the configuration option in it, which is really helpful."),(0,a.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vscode-bugfix-1640974017560-fba8fdf0ef0dabda3c584a55389b1c79fdad8c57f33b5d6d990944e9f1ab1e9f.png",width:"480"}),(0,a.kt)("p",null,"The solution is rather easy: just to uncheck the option of ",(0,a.kt)("inlineCode",{parentName:"p"},"HTML5 Embed Use Link Syntax"),". And you can see, there are at least two options for us to set the behavior of markdown link, one is for ",(0,a.kt)("inlineCode",{parentName:"p"},"![]()"),", and another one for ",(0,a.kt)("inlineCode",{parentName:"p"},"[]()"),". Since if I set a link as ",(0,a.kt)("inlineCode",{parentName:"p"},"![]()"),", I usually recognize it as an image or so, which indicates that a ",(0,a.kt)("inlineCode",{parentName:"p"},"![]()")," is more likely to be an ",(0,a.kt)("inlineCode",{parentName:"p"},"audio/video")," than a ",(0,a.kt)("inlineCode",{parentName:"p"},"[]()"),". Thanks this plugin for giving me these considerate choices."),(0,a.kt)("img",{alt:"picture 3",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vscode-bugfix-1640974045226-8f3bbff74d6d1e6b911d5fc9de83cd78b0f64549117a7a17c5212673985e283f.png",width:"480"}))}p.isMDXComponent=!0}}]);