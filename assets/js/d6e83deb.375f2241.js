"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={},o=void 0,i={unversionedId:"coding/JS/Electron/marknote-electron-prisma-sqlite",id:"version-0.16.0/coding/JS/Electron/marknote-electron-prisma-sqlite",title:"marknote-electron-prisma-sqlite",description:"1. \u76ee\u6807",source:"@site/versioned_docs/version-0.16.0/coding/JS/Electron/marknote-electron-prisma-sqlite.md",sourceDirName:"coding/JS/Electron",slug:"/coding/JS/Electron/marknote-electron-prisma-sqlite",permalink:"/docs/docs/0.16.0/coding/JS/Electron/marknote-electron-prisma-sqlite",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/JS/Electron/marknote-electron-prisma-sqlite.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"electron prisma sqlite 2",permalink:"/docs/docs/0.16.0/coding/JS/Electron/electron-prisma-sqlite-2"},next:{title:"react-howto",permalink:"/docs/docs/0.16.0/coding/JS/React/react-howto"}},p={},s=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u53ef\u4ee5\u8bfb\u53d6<code>.env</code>\u53d8\u91cf",id:"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u53ef\u4ee5\u8bfb\u53d6env\u53d8\u91cf",level:2},{value:"\u76ee\u524d\u5df2\u7ecf\u5b9e\u73b0\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u62e5\u6709\u73af\u5883\u53d8\u91cf\uff0cprisma\u53ef\u4ee5\u8bfb\u53d6",id:"\u76ee\u524d\u5df2\u7ecf\u5b9e\u73b0\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u62e5\u6709\u73af\u5883\u53d8\u91cfprisma\u53ef\u4ee5\u8bfb\u53d6",level:3},{value:"\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b9e\u73b0\u65b9\u5f0f",level:3},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"\u5b9e\u73b0\u7ec6\u8282",level:3},{value:"\u5728\u6253\u5305\u73af\u5883\u4e0b\uff0c\u6ca1\u6709\u73af\u5883\u53d8\u91cf",id:"\u5728\u6253\u5305\u73af\u5883\u4e0b\u6ca1\u6709\u73af\u5883\u53d8\u91cf",level:2},{value:"\u4e0d\u8003\u8651\u73af\u5883\u53d8\u91cf\uff0c\u76f4\u63a5\u786c\u7f16\u7801\u6570\u636e\u5e93\u6587\u4ef6\u5730\u5740",id:"\u4e0d\u8003\u8651\u73af\u5883\u53d8\u91cf\u76f4\u63a5\u786c\u7f16\u7801\u6570\u636e\u5e93\u6587\u4ef6\u5730\u5740",level:2},{value:"electron-builder load <code>.env</code>",id:"electron-builder-load-env",level:2},{value:"\u6253\u5305\u73af\u5883\u4e0b\uff0c\u7adf\u7136\u8bfb\u5230\u4e86\u73af\u5883\u53d8\u91cf",id:"\u6253\u5305\u73af\u5883\u4e0b\u7adf\u7136\u8bfb\u5230\u4e86\u73af\u5883\u53d8\u91cf",level:2},{value:"\u91cd\u5f00\u9879\u76ee\u8fdb\u884c\u5206\u6bb5\u6d4b\u8bd5\uff01",id:"\u91cd\u5f00\u9879\u76ee\u8fdb\u884c\u5206\u6bb5\u6d4b\u8bd5",level:2},{value:"\u644a\u724c\u4e86",id:"\u644a\u724c\u4e86",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E7%9B%AE%E6%A0%87"},"\u76ee\u6807")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9C%A8%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%8B%E5%8F%AF%E4%BB%A5%E8%AF%BB%E5%8F%96env%E5%8F%98%E9%87%8F"},"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u53ef\u4ee5\u8bfb\u53d6",(0,l.kt)("inlineCode",{parentName:"a"},".env"),"\u53d8\u91cf")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E7%9B%AE%E5%89%8D%E5%B7%B2%E7%BB%8F%E5%AE%9E%E7%8E%B0%E5%9C%A8%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%8B%E6%8B%A5%E6%9C%89%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8Fprisma%E5%8F%AF%E4%BB%A5%E8%AF%BB%E5%8F%96"},"\u76ee\u524d\u5df2\u7ecf\u5b9e\u73b0\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u62e5\u6709\u73af\u5883\u53d8\u91cf\uff0cprisma\u53ef\u4ee5\u8bfb\u53d6")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F"},"\u5b9e\u73b0\u65b9\u5f0f")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82"},"\u5b9e\u73b0\u7ec6\u8282")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9C%A8%E6%89%93%E5%8C%85%E7%8E%AF%E5%A2%83%E4%B8%8B%E6%B2%A1%E6%9C%89%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},"\u5728\u6253\u5305\u73af\u5883\u4e0b\uff0c\u6ca1\u6709\u73af\u5883\u53d8\u91cf")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E4%B8%8D%E8%80%83%E8%99%91%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E7%9B%B4%E6%8E%A5%E7%A1%AC%E7%BC%96%E7%A0%81%E6%95%B0%E6%8D%AE%E5%BA%93%E6%96%87%E4%BB%B6%E5%9C%B0%E5%9D%80"},"\u4e0d\u8003\u8651\u73af\u5883\u53d8\u91cf\uff0c\u76f4\u63a5\u786c\u7f16\u7801\u6570\u636e\u5e93\u6587\u4ef6\u5730\u5740")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#electron-builder-load-env"},"electron-builder load ",(0,l.kt)("inlineCode",{parentName:"a"},".env"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E6%89%93%E5%8C%85%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%AB%9F%E7%84%B6%E8%AF%BB%E5%88%B0%E4%BA%86%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},"\u6253\u5305\u73af\u5883\u4e0b\uff0c\u7adf\u7136\u8bfb\u5230\u4e86\u73af\u5883\u53d8\u91cf")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E9%87%8D%E5%BC%80%E9%A1%B9%E7%9B%AE%E8%BF%9B%E8%A1%8C%E5%88%86%E6%AE%B5%E6%B5%8B%E8%AF%95"},"\u91cd\u5f00\u9879\u76ee\u8fdb\u884c\u5206\u6bb5\u6d4b\u8bd5\uff01")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E6%91%8A%E7%89%8C%E4%BA%86"},"\u644a\u724c\u4e86"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u7bc7\u8c28\u4ee5\u8bb0\u5f55\u4e00\u5929\u4e00\u591c\uff082022\u5e741\u67081\u65e5\u665a8\u70b9\u52301\u67082\u65e5\u665a11\u70b9\uff09\u624d\u89e3\u51b3\u67d0\u8f6f\u4ef6\u6253\u5305\u540e\u8fd0\u884c\u5f02\u5e38\u7684\u95ee\u9898\uff0c\u539f\u672c\u53ea\u4e3a\u5f04\u6e05\u95ee\u9898\uff0c\u7406\u6e05\u601d\u8def\uff0c\u624d\u4e00\u6b65\u6b65\u8c03\u8bd5\u8bb0\u5f55\uff0c\u9042\u6210\u6587\u7ae0\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6b21\u4e3a\u7834\u89e3\u96be\u9898\uff0c\u53ef\u8c13\u5fc3\u60c5\u6c89\u91cd\u4e0e\u590d\u6742\uff0c\u5168\u7a0b\u5173\u706f\u5173\u95e8\u542c\u7740\u5927\u63d0\u7434\u4e0e\u94a2\u7434\u594b\u6218\u624d\u6709\u6240\u83b7\u3002\u4f46\u6700\u7ec8\u7684\u7b54\u6848\uff0c\u5374\u5e76\u975e\u6765\u81ea\u95ee\u9898\u672c\u8eab\uff0c\u800c\u662f\u6d89\u53ca\u5230\u95ee\u9898\u80cc\u540e\u7684\u95ee\u9898\uff0c\u56e0\u800c\uff0c\u7ed9\u6211\u7684\u6559\u8bad\u66f4\u4e3a\u6df1\u523b\uff0c\u4ef7\u503c\u4e5f\u66f4\u4e3a\u5b9d\u8d35\uff0c\u9042\u520a\u4e4b\u3002")),(0,l.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 G1. \u5728\u5f00\u53d1\u73af\u5883\u4e0b\uff0c\u5b9e\u73b0\u521d\u59cb\u5316\u6570\u636e\u5e93\u3001\u8fd0\u884c\u4e2dCRUD\u6570\u636e\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u2705 G2. \u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u5b9e\u73b0\u521d\u59cb\u5316\u6570\u636e\u5e93\u3001\u8fd0\u884c\u4e2dCRUD\u6570\u636e\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u26aa G1. \u5728\u6253\u5305\u73af\u5883\u4e0b\uff0c\u5b9e\u73b0\u521d\u59cb\u5316\u6570\u636e\u5e93\u3001\u8fd0\u884c\u4e2dCRUD\u6570\u636e\u5e93\uff08update: \u2705 solved since it's out of permission\uff09")),(0,l.kt)("h2",{id:"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u53ef\u4ee5\u8bfb\u53d6env\u53d8\u91cf"},"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u53ef\u4ee5\u8bfb\u53d6",(0,l.kt)("inlineCode",{parentName:"h2"},".env"),"\u53d8\u91cf"),(0,l.kt)("h3",{id:"\u76ee\u524d\u5df2\u7ecf\u5b9e\u73b0\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u62e5\u6709\u73af\u5883\u53d8\u91cfprisma\u53ef\u4ee5\u8bfb\u53d6"},"\u76ee\u524d\u5df2\u7ecf\u5b9e\u73b0\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u62e5\u6709\u73af\u5883\u53d8\u91cf\uff0cprisma\u53ef\u4ee5\u8bfb\u53d6"),(0,l.kt)("h3",{id:"\u5b9e\u73b0\u65b9\u5f0f"},"\u5b9e\u73b0\u65b9\u5f0f"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"webpack.config.main.prod.ts"),"\u4e2d\uff0c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"dotenv-webpack"),"\u63d2\u4ef6\uff0c\u4f1a\u81ea\u52a8\u8bfb\u53d6",(0,l.kt)("inlineCode",{parentName:"p"},".env"),"\u53d8\u91cf"),(0,l.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641202097111-0447d8c9b7bd4cd446543df4d7035c78d381a8761aec5cb5b05cbf6b7723f0bb.png",width:"480"}),(0,l.kt)("h3",{id:"\u5b9e\u73b0\u7ec6\u8282"},"\u5b9e\u73b0\u7ec6\u8282"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run build"))),(0,l.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641202237567-148ee19c466945aed7f23593a02481637c539148cba0fe1a432f256503955cad.png",width:"480"}),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"electron release/app"))),(0,l.kt)("img",{alt:"picture 4",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641202270373-c3cf875b689d3bd464af4ca317c504e7cb0f8efb0383731d8c1f76bbe03dc93e.png",width:"480"}),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5df2\u7ecf\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"DATABASE_URL"),"\u53d8\u91cf\uff0c\u8be5\u8f93\u51fa\u7531\u6e90\u4ee3\u7801\u6267\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// src/main/db.ts\nimport dotenv from 'dotenv';\nimport { app } from 'electron';\nimport path from 'path';\n\ndotenv.config();\n\nconst dbPath = path.join(app.getPath('userData'), 'sqlite.db');\nconst dbUrl = `file:${dbPath}?connection_limit=1`;\nconsole.log(`The db url specified is ${dbUrl}, and the envs are:`);\nconsole.log(process.env);\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u8be5\u8f93\u51fa\u8bc1\u660e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"build"),"\u73af\u5883\u4e2d\u5df2\u7ecf\u6709\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},".env"),"\u53d8\u91cf")),(0,l.kt)("h2",{id:"\u5728\u6253\u5305\u73af\u5883\u4e0b\u6ca1\u6709\u73af\u5883\u53d8\u91cf"},"\u5728\u6253\u5305\u73af\u5883\u4e0b\uff0c\u6ca1\u6709\u73af\u5883\u53d8\u91cf"),(0,l.kt)("h2",{id:"\u4e0d\u8003\u8651\u73af\u5883\u53d8\u91cf\u76f4\u63a5\u786c\u7f16\u7801\u6570\u636e\u5e93\u6587\u4ef6\u5730\u5740"},"\u4e0d\u8003\u8651\u73af\u5883\u53d8\u91cf\uff0c\u76f4\u63a5\u786c\u7f16\u7801\u6570\u636e\u5e93\u6587\u4ef6\u5730\u5740"),(0,l.kt)("p",null,"\u9047\u5230\u4e86Query\u7684\u95ee\u9898\uff0c\u731c\u6d4b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"query_engine"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"@prisma"),"\u6ca1\u6709\u5b58\u653e\u5230\u6307\u5b9a\u4f4d\u7f6e\u7684\u95ee\u9898\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"PrismaClientKnownRequestError: Failed to validate the query: `Field does not exist on enclosing type.` at `Query.findManyerp`\n")),(0,l.kt)("img",{alt:"picture 5",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641204200999-c3b7893d1e1a9b20659680a5516ed4a55ae9e5d1b9a0ab0da9c5ecfae5334b76.png",width:"480"}),(0,l.kt)("h2",{id:"electron-builder-load-env"},"electron-builder load ",(0,l.kt)("inlineCode",{parentName:"h2"},".env")),(0,l.kt)("h2",{id:"\u6253\u5305\u73af\u5883\u4e0b\u7adf\u7136\u8bfb\u5230\u4e86\u73af\u5883\u53d8\u91cf"},"\u6253\u5305\u73af\u5883\u4e0b\uff0c\u7adf\u7136\u8bfb\u5230\u4e86\u73af\u5883\u53d8\u91cf"),(0,l.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641206574494-62b217d0682587a549060e729667364448d1db47ffca110edd765a2345230dbe.png",width:"480"}),(0,l.kt)("p",null,"\u53bb\u6389\u4ee5\u4e0b\u4e4b\u540e\uff0c\u4f9d\u65e7\u6709\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// package.json\n      {\n        "from": "prisma.env",\n        "to": ".env"\n      }\n')),(0,l.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641206809254-93caae8af81cc0898e0e41c0a8a3f515508e6907a32a5e8ae7fcd1f7ce418502.png",width:"480"}),(0,l.kt)("p",null,"\u518d\u5c1d\u8bd5\u53bb\u6389\u4ee5\u4e0b\uff0c\u8fd8\u662f\u6709\u3002\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// package.json\n      "node_modules/.prisma/client/**/*",\n')),(0,l.kt)("img",{alt:"picture 3",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641206997694-7ff13106e6e66c40c94c82b9f9efd584941b6be7cad0a22009cfa676ffeac3f2.png",width:"480"}),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u518d\u5c1d\u8bd5\u53bb\u6389\u6700\u540e\u7684\u4e00\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// package.json\n      "node_modules/@prisma/client/**/*"\n')),(0,l.kt)("img",{alt:"picture 4",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641207175716-7b76bc74a00534f1271bbd55c26a6ad32d225fff2f655199472616ab35dda167.png",width:"480"}),(0,l.kt)("p",null,"\u4ed6\u55b5\u7684\uff0c\u8fd8\u662f\u6709\u554a\u3002"),(0,l.kt)("p",null,"\u96be\u9053\u662f\u7f13\u5b58\uff1f"),(0,l.kt)("p",null,"\u6211\u5220\u6389\u518d\u8bd5\u4e00\u904d\uff01"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("img",{alt:"picture 5",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641207355025-cced27ae67e7b5471da8da199da9fed844268c387ab664321849800903174184.png",width:"480"}),(0,l.kt)("p",null,"\u6c83\u65e5\u554a\uff0c\u8fd8\u6709\uff01"),(0,l.kt)("p",null,"\u8fd9\u4e0b\u6211\u5c31\u4e0d\u660e\u767d\u4e86\u2026\u2026"),(0,l.kt)("p",null,"\u4e0d\u77e5\u9053\u662f\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"dotenv-webpack"),"\u8fd8\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"prisma generate"),"\u641e\u7684\u9b3c\u3002"),(0,l.kt)("p",null,"\u6211\u518d\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"dotenv-webpack"),"\u53d6\u6d88\u4e86\u770b\u770b\uff01"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("img",{alt:"picture 6",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641207608998-81f1ed696f9e63e07364a0881b38bc5f19b89d3f6264357e8e930f62770ecdd0.png",width:"480"}),(0,l.kt)("p",null,"\u54c8\u54c8\u54c8\u54c8\uff0c\u679c\u7136\u6ca1\u6709\u4e86\uff01"),(0,l.kt)("p",null,"\u770b\u6837\u5b50\u771f\u8ddf\u8fd9\u4e2a\u6709\u5173\uff0c\u90a3\u73b0\u5728\u6211\u518d\u52a0\u56de\u6765\uff0c\u770b\u770b\u8fd8\u6709\u6ca1\u6709\u3002"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u679c\u7136\u53c8\u6709\u4e86\uff01"),(0,l.kt)("img",{alt:"picture 7",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641207757455-df00e99a1719abe2f2d8db45495098f6405b94e6886a51b0533558bf3f926366.png",width:"480"}),(0,l.kt)("p",null,"\u90a3\u73b0\u5728\uff0c\u6211\u518d\u53bb\u7a0b\u5e8f\u4e2d\uff0c\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"dotenv"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"config"),"\u53e5\uff0c\u53d6\u6d88\uff0c\u5e94\u8be5\u5c31\u6ca1\u4e86\u5427\uff01"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// src/main/db.ts\ndotenv.config();\n")),(0,l.kt)("p",null,"\b\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u64e6\uff0c\u8fd8\u662f\u6709\uff01"),(0,l.kt)("img",{alt:"picture 8",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641208023687-21c3e53559a2a67ae2ae2b5eb22d8f578d9240ff0182ea3b0ab18daa2ddc3211.png",width:"480"}),(0,l.kt)("p",null,"\u5982\u679c\u679c\u7136\u5982\u6b64\u7684\u8bdd\uff0c\u90a3\u6211\u76f4\u63a5\u7528\u9ed8\u8ba4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"options"),"\u5c5e\u6027\uff0c\u662f\u4e0d\u662f\u5c31\u53ef\u4ee5\u4e86\uff01"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// src/main/db.ts\n-export const prisma = new PrismaClient(options);\n+export const prisma = new PrismaClient();\n")),(0,l.kt)("p",null,"\u8fd9\u6837\uff0c\u9884\u671f\u8fd8\u662f\u4e00\u6837\uff0c\u4f1a\u62a5",(0,l.kt)("inlineCode",{parentName:"p"},"query"),"\u7684\u95ee\u9898\uff0c\u800c\u4e0d\u662f\u50cf\u4e4b\u524d\u90a3\u6837\uff0c\u62a5\u73af\u5883\u53d8\u91cf\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"option"),"\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"prisma"),"\u4f1a\u53bb\u8bfb",(0,l.kt)("inlineCode",{parentName:"p"},"prisma/schema.prisma"),"\uff0c\u7136\u540e\u91cc\u9762\u9ed8\u8ba4\u52a0\u8f7d\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"env(DATABASE_URL)"),"\u3002"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u7136\u800c\u610f\u5916\u53d1\u751f\u4e86\uff01\u7a0b\u5e8f\u6253\u4e0d\u5f00\u4e86\uff01\u53ea\u6709\u4e00\u7247\u7a7a\u767d\uff01"),(0,l.kt)("img",{alt:"picture 10",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641208467702-92290684115599f52a6b00c011cc46c5ad977100676b4c9f381b752958311121.png",width:"480"}),(0,l.kt)("p",null,"\u4f46\u6211\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"lldb"),"\u5374\u663e\u793a\u662f\u6b63\u5e38\u7684\u3002\u5f53\u7136\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"lldb"),"\u592a\u5f3a\u5927\u4e86\uff0c\u4e0d\u80fd\u4f5c\u4e3a\u7a0b\u5e8f\u662f\u5426\u80fd\u6b63\u5e38\u8fd0\u884c\u7684\u6807\u51c6\u3002"),(0,l.kt)("img",{alt:"picture 9",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641208439561-e1fbee9c30db0ee9c3834c20e44cde786fff0103879e2b56074938355640942f.png",width:"480"}),(0,l.kt)("p",null,"\u7b49\u7b49\uff0c\u6c83\u65e5\uff0c\u53c8\u51fa\u73b0\u4e86\uff01\u5367\u69fd\uff0c\u8fde\u6570\u636e\u5e93\u90fd\u8fde\u63a5\u4e0a\u4e86\uff01"),(0,l.kt)("img",{alt:"picture 11",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641208528717-17aaac50924d7ad35ebbb0be0087b60774dff4a9b0869a01f058c9fcde1b46da.png",width:"480"}),(0,l.kt)("p",null,"\u6c83\u65e5\uff0c\u6211\u597d\u50cf\u609f\u2728\u2728\u5230\u4e86\u4ec0\u4e48\uff01"),(0,l.kt)("p",null,"\u770b\uff01\u9ed8\u8ba4\u7684\u914d\u7f6e\uff0c\u9664\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\u8fd8\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"provider"),"\u54e6\uff01\uff01\uff01"),(0,l.kt)("img",{alt:"picture 12",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641208953995-a523f3097e0c5f74fbc8aa8f85729b78eb203fd7803bdb83ef935b8c48a58420.png",width:"480"}),(0,l.kt)("p",null,"\u6240\u4ee5\uff01\uff01\uff01"),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5728\u7a0b\u5e8f\u4e2d\uff0c\u76f4\u63a5\u540c\u65f6\u6307\u5b9a\u8fd9\u4e24\u9879\uff0c\u662f\u4e0d\u662f\u5c31\u7b49\u4ef7\u4e8e\u8bfb\u53d6\u4e86\u672c\u5730",(0,l.kt)("inlineCode",{parentName:"p"},"schema.prisma"),"\u4e86\uff01"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u4e4b\u524d\u7528url\u7684\u914d\u7f6e\uff0c\u867d\u7136\u6b63\u786e\uff0c\u4f46\u662f\u8986\u76d6\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"prisma"),"\u7684\u6587\u4ef6\u914d\u7f6e\uff0c\u7136\u800c\uff0c\u8981\u60f3\u6570\u636e\u5e93\u771f\u6b63\u6b63\u786e\u5730\u8fde\u63a5\uff0c\u9664\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\u9879\u4e4b\u5916\uff0c\u53ef\u8fd8\u8981\u6709\u5176\u4ed6\u9879\u7684\u554a\uff01"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// src/main/db.ts\n@@ -17,6 +17,8 @@ const options: PrismaClientOptions = {\n   datasources: {\n     db: {\n       url: dbUrl,\n+      // @ts-ignore\n+      provider: 'sqlite',\n     },\n   },\n };\n")),(0,l.kt)("p",null,"\u4e3a\u5565\u8981\u52a0\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"@ts-ignore"),"\u5462\uff1f\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"d.ts"),"\u91cc\u6ca1\u6709\u8fd9\u4e2a\u5b9a\u4e49\uff1a"),(0,l.kt)("img",{alt:"picture 13",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641209316277-e6d097dca96bbec8649b5c60ec477809dc061cd51f83c1af50a6d3aa486854b4.png",width:"480"}),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c\u662f\u6211\u4e3a\u4e86\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"schema.prisma"),"\u5bf9\u4e0a\uff0c\u624d\u52a0\u7684\uff0c\u4e0d\u77e5\u9053\u7ed3\u679c\u4f1a\u548b\u6837\u2026\u2026"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u597d\u7684\uff0c\u53c8\u8fdb\u5165\u7b49\u5f85\u73af\u8282\u4e86\u2026\u2026"),(0,l.kt)("img",{alt:"picture 14",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641209424635-f6326c5773fb7227f83e086a88f3518f564911707bf1c6b3f6b42ac3a53609e7.png",width:"480"}),(0,l.kt)("p",null,"\u4e0d\u8fc7\uff0c\u6839\u636e\u4e0a\u6b21\u7ecf\u9a8c\uff0c\u53ef\u80fd\u610f\u5473\u7740\u662f\u6210\u529f\u7684\u3002"),(0,l.kt)("img",{alt:"picture 15",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641209524193-a1d946546ed78e7a60a135149788448a3108ea2ab5669e915bb4ee44749e7cb7.png",width:"480"}),(0,l.kt)("p",null,"\u6211\u64e6\uff0c\u5f88\u5feb\u5c31\u6253\u8138\u4e86\u554a\uff0c\u5e76\u4e0d\u662f\u7684\uff01"),(0,l.kt)("p",null,"\u8fd9\u91cc\u5e94\u8be5\u662f\u88ab\u7c7b\u578b\u62a5\u9519\u4e86\uff0c\u610f\u5473\u7740\u6211\u4e0d\u80fd\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"provider"),"\u5173\u952e\u5b57\u3002\u7136\u540e\u6309\u7167\u62a5\u9519\u63d0\u793a\uff0c\u53bb read \u4e86 more\uff1a"),(0,l.kt)("img",{alt:"picture 16",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641209686471-c2e5dde8844d15d542567d7c8136c1fa6efddb3df2e66f30b01a3eacdc425b99.png",width:"480"}),(0,l.kt)("p",null,"You see\uff01\u8fd9\u662f\u5728api\u4e0a\u505a\u4e86\u9650\u5236\uff0c\u53ea\u53ef\u4ee5'programmatically'\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\uff0c\u5176\u4ed6\u7684\u4fe1\u606f\u662f\u4e0d\u53ef\u4ee5\u7684\uff01"),(0,l.kt)("p",null,"\u90a3\u884c\u5427\uff01"),(0,l.kt)("p",null,"\u65e2\u7136\u6211\u4eec\u7684\u73af\u5883\u53d8\u91cf\u73b0\u5728\u662f\u594f\u6548\u7684\uff0c\u90a3\u5c31\u76f4\u63a5\u7528\u73af\u5883\u53d8\u91cf\u5427\uff0c\u8fd9\u91cc\u4e0d\u52a0\u4efb\u4f55\u53c2\u6570\u3010TODO\uff1a\u5f53\u7136\u4e86\uff0c\u6211\u4eec\u7b49\u4f1a\u8981\u53bb\u6d4b\u4e00\u4e0b\uff0c\u5230\u5e95\u662f\u54ea\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"prisma"),"\u6587\u4ef6\u8fdb\u884c\u521d\u59cb\u5316\u7684\uff0c\u4ee5\u53caurl\u5230\u5e95\u662f\u662f\u5565\u3011"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u545c\u545c\u545c\uff0c\u5728\u5927\u698220-30\u79d2\u7684\u7a7a\u767d\u540e\uff0c\u7a0b\u5e8f\u7ec8\u4e8e\u542f\u52a8\u4e86\uff0c\u8868\u73b0\u826f\u597d\uff01"),(0,l.kt)("img",{alt:"picture 17",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641210163127-a260b7367fc18cb9bc08dbf44caf8a068f542e8f8e61f2793c2ef4c1515f0916.png",width:"480"}),(0,l.kt)("p",null,"\u4f46\u6211\u73b0\u5728\u771f\u5730\u597d\u5947\uff0c\u5b83\u5230\u5e95\u662f\u63d2\u7684\u54ea\u4e2a\u6570\u636e\u5e93\u2026\u2026\u2026\u2026\u2026\u2026"),(0,l.kt)("p",null,"\u603b\u611f\u89c9\uff0c\u53ef\u80fd\u5c31\u662f\u6211\u672c\u5730\u7684\u90a3\u4e2a\u6570\u636e\u5e93\u2026\u2026"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u8fd9\u6837\uff0c\u6211\u628a\u90a3\u4e2a\u6570\u636e\u5e93\u6587\u4ef6\u6362\u6362\u4f4d\u7f6e\uff0c\u5b83\u662f\u4e0d\u662f\u53c8\u51c9\u51c9\u4e86\u2026\u2026\u2026\u2026"),(0,l.kt)("p",null,"\u53ef\u80fd\u771f\u7684\u662f\u672c\u5730\u7684\uff01\u56e0\u4e3a\u6211\u53d1\u73b0\u6211\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"navicat"),"\u88ab\u963b\u6b62\u4e86\uff01"),(0,l.kt)("img",{alt:"picture 18",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641210311381-d612f775c3c949cc7e8d278586807be36eb2e6c7b4450918b47653db662879c0.png",width:"480"}),(0,l.kt)("p",null,"\u521a\u521a\u63d2\u5b8c\uff01navicat\u53c8\u597d\u7528\u4e86\uff01\u800c\u4e14\u4e00\u517123\u4e07\u6761\uff0c\u662f\u548c\u672c\u6b21\u63d2\u5165\u76ee\u6807\u4e00\u81f4\u7684\uff01"),(0,l.kt)("img",{alt:"picture 20",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641210443057-64cd868895dc6118df816ea33858d0dfcfce611f8f333b1227866664ec538060.png",width:"480"}),(0,l.kt)("img",{alt:"picture 21",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641210453610-df7ec67a9fd52a6dee9465570f3ca8a89eb620e683f28eab5b78743ee3aee8ec.png",width:"480"}),(0,l.kt)("p",null,"\u6211\u6709\u4e00\u4e2a\u5927\u80c6\u7684\u60f3\u6cd5\uff01"),(0,l.kt)("p",null,"\u662f\u4e0d\u662f\u56e0\u4e3a\uff0cnavicat\u5360\u7740\u8d44\u6e90\u4e0d\u653e\uff0c\u5bfc\u81f4\u6211\u7684\u7a0b\u5e8f\u542f\u52a8\u5f88\u6162\u7684\uff01"),(0,l.kt)("p",null,"\u56e0\u4e3a\u6211\u8bbe\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"connection_limit=1"),"\uff0c\u4e3a\u4e86\u9632\u6b62\u63d2\u5165\u5931\u8d25\uff01"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u4e0d\u884c\u554a\uff0c\u8fd8\u662f\u5f88\u6162\uff01\u8fd8\u662f30\u79d2\uff01\u6211\u521a\u521a\u6570\u4e86\uff01"),(0,l.kt)("img",{alt:"picture 22",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641210621195-dd0e5440f638be5836265de03d231f6ed4e4c78cf7b9d187e95dfeca7a7d7d58.png",width:"480"}),(0,l.kt)("p",null,"\u90a3\u662f\u4e0d\u662f\u56e0\u4e3a\u6211\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u5c31\u542f\u52a8",(0,l.kt)("inlineCode",{parentName:"p"},"query"),"\uff0c\u5bfc\u81f4\u963b\u585e\u4e86\u5462\uff1f"),(0,l.kt)("p",null,"\u6211\u5148\u8bd5\u8bd5\u4e0d\u5728\u542f\u52a8\u7684\u65f6\u5019\u63d2\u5165\u3002"),(0,l.kt)("p",null,"PASS: \u6211\u8bb0\u5f97",(0,l.kt)("inlineCode",{parentName:"p"},"github"),"\u4e0a\uff0c\u4e5f\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"start wait too long"),"\u7684\u95ee\u9898\u7684\uff0c\u665a\u70b9\u53bb\u770b\u770b\u3002"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u6240\u4ee5\u6211\u5148\u628adb\u7684\u521d\u59cb\u5316query\u653e\u5230\u4e86\u83dc\u5355\u680f\u91cc\uff0c\u4e3b\u7a0b\u5e8f\u4e0d\u5728\u521d\u59cb\u65f6\u6267\u884c\u4efb\u4f55\u6570\u636e\u5e93\u52a8\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// src/main/menu.ts\n        {\n          label: 'test database connect',\n          click() {\n            prisma.erp\n              .findMany({ take: 2 })\n              .then((e) => {\n                console.log(`queried data: ${e}, it should has 2 items`);\n                return 1;\n              })\n              .catch(console.error);\n          },\n        },\n")),(0,l.kt)("p",null,"\u8fd9\u6837\uff0c\u9884\u671f\u7a0b\u5e8f\u542f\u52a8\u901f\u5ea6\u5c31\u4f1a\u5f88\u5feb\u4e86\u5427\uff01"),(0,l.kt)("img",{alt:"picture 23",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641210956609-06255f626bbf7f80e5357241fb7f1a124b3e85b4d56a269cdc41d5a754802fa7.png",width:"480"}),(0,l.kt)("p",null,"\u6c83\u65e5\u554a\uff0c\u5e76\u6ca1\u6709\uff01"),(0,l.kt)("p",null,"\u8fd8\u662f30\u591a\u79d2\u5462\uff01"),(0,l.kt)("p",null,"\u884c\u554a\uff0c\u518d\u6d4b\u4e00\u4e2a\uff01"),(0,l.kt)("p",null,"\u662f\u4e0d\u662f\u6570\u636e\u5e93\u8fde\u63a5\u5c31\u5f88\u6162\uff0c\u6211\u76f4\u63a5\u4e0d\u521d\u59cb\u5316\u6570\u636e\u5e93\u884c\u4e0d\u884c\uff1f"),(0,l.kt)("p",null,"\u54e6\u4e0d\u884c\uff0c\u592a\u9ebb\u70e6\u4e86\uff0c\u4e4b\u524d\u8bd5\u8fc7\uff0c\u8981\u6539\u5f88\u591a\u5730\u65b9\uff0c\u4e3b\u8981\u662ftypescript\u4f1a\u68c0\u67e5\u5bfc\u5165\uff0c\u6211\u76f4\u63a5\u628a\u6570\u636e\u5e93\u53d8\u91cf\u53d6\u6d88\u7684\u8bdd\uff0c\u9700\u8981\u540c\u65f6\u4fee\u6539\u5f88\u591a\u624d\u80fd\u901a\u8fc7\u7f16\u8bd1\u3002"),(0,l.kt)("p",null,"\u2705 \u6d4b\u8bd5\u65e0\u6570\u636e\u5e93\u60c5\u51b5\u4e0b\u7684\u542f\u52a8\u901f\u5ea6\u3002\u7ed3\u679c\uff1a\u975e\u5e38\u5feb\uff01"),(0,l.kt)("p",null,"\u2014\u2014\u2014\u2014\u2014\u2014"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u4f60\u731c\uff0c\u4f60\u77e5\u9053\u73b0\u5728\u662f\u5565\u60c5\u51b5\u5417\uff1f"),(0,l.kt)("p",null,"\u662f\u6211\u7528lldb\u6216\u8005\u7a0b\u5e8f\u542f\u52a8\uff0c\u79d2\u5f00\uff0c\u4e00\u5207\u6b63\u5e38\uff1b\u63a5\u7740\u6211\u5728\u5185\u90e8\u5305\u70b9\u51fb\u6253\u5f00\uff0c\u9700\u898130\u79d2\uff0c\u7136\u540e\u4e00\u5207\u6b63\u5e38\uff1b\u6700\u540e\u6211\u76f4\u63a5\u5728\u7a0b\u5e8flogo\u4e0a\u70b9\u51fb\uff0c\u9700\u8981\u4e00\u5206\u591a\u949f\uff0c\u7136\u540e\u6570\u636e\u5e93\u6ca1\u6709\u6570\u636e\u7ed3\u679c\u3002\u3002"),(0,l.kt)("p",null,"\u5954\u6e83\u554a\u3002"),(0,l.kt)("p",null,"\u641e\u4e86\u8fd9\u4e48\u4e45\uff0c\u8fd8\u662f\u8001\u95ee\u9898\uff1a"),(0,l.kt)("img",{alt:"picture 24",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641211571111-b2a036e5ee4fa8b346cb63205a687b6673932d9bef062abeb7e781562077a4b3.png",width:"480"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u4f7f\u7528 asar \u4f9d\u65e7\u4e0d\u884c\u3002"),(0,l.kt)("h2",{id:"\u91cd\u5f00\u9879\u76ee\u8fdb\u884c\u5206\u6bb5\u6d4b\u8bd5"},"\u91cd\u5f00\u9879\u76ee\u8fdb\u884c\u5206\u6bb5\u6d4b\u8bd5\uff01"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5254\u9664db\u6a21\u5757\uff08prisma, sqlite)\u4e4b\u540e\u79d2\u5f00\uff0c2022-01-03 21:04:34"),(0,l.kt)("li",{parentName:"ol"},"\u3002\u3002\u3002")),(0,l.kt)("p",null,"ONE HOUR LATER..."),(0,l.kt)("img",{alt:"picture 25",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-prisma-sqlite-1641222126966-6b16ac915cb84333c6a0902dd19e80723746f9f5dda13aea3c11bd7c33570d0a.png",width:"480"}),(0,l.kt)("h2",{id:"\u644a\u724c\u4e86"},"\u644a\u724c\u4e86"),(0,l.kt)("p",null,"\u5386\u7ecf\u6574\u6574\u670930\u4e2a\u5c0f\u65f6\uff0c\u539f\u56e0\u7ec8\u4e8e\u5728\u4e00\u4e2a\u7284\u89d2\u65ee\u65ef\u7684\u5730\u65b9\u627e\u5230\u4e86\uff1a\u6743\u9650\uff01\uff01\uff01"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/image-20220103231434862.png",alt:"image-20220103231434862"})),(0,l.kt)("p",null,"\u7531\u4e8e\u6211\u5c06sqlite\u6570\u636e\u5e93\u5b58\u5728\u9879\u76ee\u91cc\uff08\u9ed8\u8ba4\u884c\u4e3a\uff09\uff0c\u4f46\u5e76\u6709\u6253\u5305\u8fdb\u5165\u7a0b\u5e8f\uff0c\u6240\u4ee5\u5728\u5f00\u53d1\u65f6\uff08\u65e0\u8bba\u662f\u5f00\u53d1\u6a21\u5f0f\u8fd8\u662f\u751f\u4ea7\u6a21\u5f0f\uff09\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u662f\u6253\u5305\u6210\u53ef\u8fd0\u884c\u7a0b\u5e8f\u540e\uff0c\u5c31\u6709\u8bfb\u5199\u6743\u9650\u95ee\u9898\u4e86\u3002"),(0,l.kt)("p",null,"\u8fd9\u5bfc\u81f4\u7a0b\u5e8f\u542f\u52a8\u7684\u65f6\u5019\uff0c\u76f4\u63a5cpu\u98d9\u5347\uff08\u5230\u4e03\u516b\u5341\uff09\uff0c\u4e3a\u5565\u5462\uff1f\u80af\u5b9a\u662f\u9677\u5165\u4e86\u6743\u9650\u7533\u8bf7\u7684\u65e0\u7ebf\u5faa\u73af\uff01"),(0,l.kt)("p",null,"\u7136\u540e\u4e09\u5341\u591a\u79d2\u4e2d\u751a\u81f3\u4e00\u5206\u591a\u949f\u540e\u624d\u6253\u5f00\uff0c\u4e3a\u5565\u5462\uff1f\u56e0\u4e3a\u8d85\u65f6\u653e\u5f03\u4e86\uff01"),(0,l.kt)("p",null,"\u90a3\u4e3a\u4ec0\u4e48\u5728\u6478\u7d22\u7684\u8fc7\u7a0b\u4e2d\u6709\u51fa\u73b0\u8fc7\u53ef\u4ee5\u6253\u5f00\u7684\u60c5\u51b5\u5462\uff1f"),(0,l.kt)("p",null,"\u90a3\u662f\u56e0\u4e3a\u6211\u6709\u8fc7\u5c06sqlite\u5b58\u5230userdata\u7684\u5c1d\u8bd5\uff0c\u90a3\u6837\u8fde\u63a5\u7684\u65f6\u5019\u5c31\u6ca1\u95ee\u9898\u4e86\uff0c\u53ea\u4e0d\u8fc7prisma\u627e\u4e0d\u5230\uff0c\u56e0\u4e3aprisma\u8981\u63d0\u524d\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u90a3\u63a5\u4e0b\u6765\u600e\u4e48\u529e\uff1f"),(0,l.kt)("p",null,"\u80af\u5b9a\u8fd8\u662f\u4e0d\u80fd\u5728userdata\u91cc\u76f4\u63a5\u5b58\u4e1a\u52a1\u6570\u636e\u7684\u628a\uff0c\u8fd9\u6837\u592a\u5927\u4e86\uff1f\u4f46\u4e5f\u8bb8\u4e5f\u4e0d\u662f\u8fd9\u4e48\u4e2a\u610f\u601d\uff0capp\u5c31\u90a3\u4e48\u5927\uff081-300M\uff09\uff0c\u6570\u636e\u662f\u5355\u72ec\u5b58\u5728\u7a0b\u5e8f\u5bf9\u5e94\u7684\u6570\u636e\u533a\u7684\uff0c\u5373\u4f7f\u628a\u7a0b\u5e8f\u5378\u8f7d\uff0c\u6570\u636e\u8fd8\u5728\uff0c\u8fd9\u4e2a\u6a21\u5f0f\u5e94\u8be5\u8fd8\u662f\u6bd4\u8f83\u5408\u9002\u7684\u3002\u4e0d\u5408\u9002\u7684\u662f\u76f4\u63a5\u628asqlite\uff08\u5c24\u5176\u662f\u5df2\u7ecf\u6709\u6570\u636e\u7684\uff09\u6253\u5305\u8fdb\u7a0b\u5e8f\uff0c\u867d\u7136\u6211\u6709\u8fd9\u4e48\u505a\u8fc7\uff0c\u7f51\u4e0a\u4e5f\u6709\u8fd9\u4e48\u505a\u7684\uff0c\u4f46\u662f\u573a\u666f\u4e0d\u540c\u554a\uff0c\u522b\u4eba\u6253\u5305\u8fdb\u53bb\u53ef\u80fd\u53ea\u662f\u5b58\u4e00\u4e9b\u57fa\u672c\u6570\u636e\u3001\u7528\u6237\u6570\u636e\u7b49\uff0c\u4e0d\u50cf\u6211\u8fd9\u4e2a\u573a\u666f\uff0c\u662f\u7528\u6765\u5b58\u4e1a\u52a1\u7684\uff0c\u5b58\u4e1a\u52a1\u5e94\u8be5\u662f\u5728userdata\u91cc\u65b0\u5f00\u6570\u636e\u5e93\uff01\u8fd9\u6837\u624d\u7a33\u59a5\uff01"),(0,l.kt)("p",null,"\u8bf6\u2026\u2026"),(0,l.kt)("p",null,"ref:"),(0,l.kt)("p",null,"SPECIAL THANKS\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/49784259/exported-electron-app-doesnt-work-on-macos"},"javascript - Exported Electron APP doesn't work on MacOS - Stack Overflow"))),(0,l.kt)("p",null,"about electron:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.electronjs.org/zh/docs/latest/tutorial/using-native-node-modules"},"Node \u539f\u751f\u6a21\u5757 | Electron"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/electron-userland/electron-builder"},"electron-userland/electron-builder: A complete solution to package and build a ready for distribution Electron app with \u201cauto update\u201d support out of the box"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.electronforge.io/"},"Getting Started - Electron Forge"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/59566904/no-such-file-or-directory-inside-app-asar-electron-nodejs"},"python - No such file or directory inside app.asar (electron/nodejs) - Stack Overflow")))),(0,l.kt)("p",null,"about prisma:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert"},"Prisma Client API (Reference) | Prisma Docs"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/guides/deployment/deployment"},"Deploying projects using Prisma to the cloud | Prisma Docs")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/prisma/prisma/issues/10236"},"Prisma has a very slow startup time when my database has 100+ tables \xb7 Issue #10236 \xb7 prisma/prisma"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/69323946/electron-prisma-error-can-not-find-module-prisma-client"},"javascript - Electron-Prisma Error: can not find module '.prisma/client' - Stack Overflow"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/64088437/how-to-use-prisma-with-electron"},"angularjs - How to use Prisma with Electron - Stack Overflow")))),(0,l.kt)("p",null,"about environment variables:\n(a good discussion about whether to use dynamic env)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://chat.stackoverflow.com/rooms/186836/discussion-between-sigmasoldier-and-albert-chen"},"Discussion between SigmaSoldier and Albert Chen | chat.stackoverflow.com"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv-cli"},"dotenv-cli - npm"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/cross-env"},"kentcdodds/cross-env: \ud83d\udd00 Cross platform setting of environment scripts"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.genui.com/resources/env-variables-json"},"How To Use .env Variables In package.json | GenUI"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/guides/development-environment/environment-variables"},"Environment variables | Prisma Docs"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54214340/electron-builder-how-to-set-node-environmental-variables"},"node.js - electron-builder, how to set node environmental variables - Stack Overflow")))))}u.isMDXComponent=!0}}]);