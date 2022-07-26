"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const r={},i="mongodb-howto",s={unversionedId:"softwares/mongodb/mongodb-howto",id:"version-0.16.0/softwares/mongodb/mongodb-howto",title:"mongodb-howto",description:"install mongodb in Ubuntu",source:"@site/versioned_docs/version-0.16.0/softwares/mongodb/mongodb-howto.md",sourceDirName:"softwares/mongodb",slug:"/softwares/mongodb/mongodb-howto",permalink:"/keeps-learning/docs/0.16.0/softwares/mongodb/mongodb-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/softwares/mongodb/mongodb-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"mongodb-bugfix",permalink:"/keeps-learning/docs/0.16.0/softwares/mongodb/mongodb-bugfix"},next:{title:"nginx-howto",permalink:"/keeps-learning/docs/0.16.0/softwares/nginx/nginx-howto"}},l={},u=[{value:"install mongodb in Ubuntu",id:"install-mongodb-in-ubuntu",level:2},{value:"configure mongodb remote connection via 0.0.0.0",id:"configure-mongodb-remote-connection-via-0000",level:2},{value:"Mongodb create superuser",id:"mongodb-create-superuser",level:2},{value:"Mongodb Auth JS",id:"mongodb-auth-js",level:2},{value:"Mongodb Auth PY",id:"mongodb-auth-py",level:2},{value:"approach 1",id:"approach-1",level:3},{value:"approach 2",id:"approach-2",level:3},{value:"approach 3",id:"approach-3",level:3}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb-howto"},"mongodb-howto"),(0,a.kt)("h2",{id:"install-mongodb-in-ubuntu"},"install mongodb in Ubuntu"),(0,a.kt)("p",null,"reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/"},"Install MongoDB Community Edition on Ubuntu \u2014 MongoDB Manual"))),(0,a.kt)("p",null,"In KeJie's ubuntu operating system, I saw that it's ",(0,a.kt)("inlineCode",{parentName:"p"}," Ubuntu 18.04 (Bionic)")," when I use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"lsb_release -dc"),"\uff0c and I had to use this command ",(0,a.kt)("inlineCode",{parentName:"p"},' echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list'),"  as it suggested in the official reference."),(0,a.kt)("p",null,"Then, when I used ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt-get install -y mongodb-org")," to install mongodb, it's sad to find that the downloading speed is rather slow. "),(0,a.kt)("img",{alt:"picture 18",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640009669840-6e163a6cc996b2421f1d74b06f89a8f667f9be37f7141c9b35f1326b11f32ad8.png",width:"480"}),(0,a.kt)("p",null,"Hence, I turned for help of a Chinese mongodb mirror which leads me to the Tsinghua mirror website at ",(0,a.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/help/mongodb/"},"mongodb | \u955c\u50cf\u7ad9\u4f7f\u7528\u5e2e\u52a9 | \u6e05\u534e\u5927\u5b66\u5f00\u6e90\u8f6f\u4ef6\u955c\u50cf\u7ad9 | Tsinghua Open Source Mirror"),", then it booms~"),(0,a.kt)("img",{alt:"picture 19",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640009990786-daae46cd4a5b6f629181910c68a52f5444af3be25c6d91b73a04cc8cba857f3f.png",width:"480"}),(0,a.kt)("h2",{id:"configure-mongodb-remote-connection-via-0000"},"configure mongodb remote connection via 0.0.0.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R mongodb:mongodb /var/lib/mongodb\nsudo chown mongodb:mongodb /tmp/mongodb-27017.sock\n")),(0,a.kt)("p",null,"reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/willingtolove/article/details/109863064"},"(20\u6761\u6d88\u606f) Ubuntu\u4e2d\u9632\u706b\u5899\u7684\u4f7f\u7528\u548c\u5f00\u653e\u3001\u5173\u95ed\u7aef\u53e3_willingtolove\u7684\u535a\u5ba2-CSDN\u535a\u5ba2_ubuntu \u9632\u706b\u5899\u5f00\u653e\u7aef\u53e3"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.panyanbin.com/article/c602b9e2.html"},"mongodb\u5f00\u542f\u8fdc\u7a0b\u8fde\u63a5\u548c\u8d26\u53f7\u5bc6\u7801\u767b\u5f55\uff08\u5305\u62ec\u9632\u706b\u5899\u5f00\u542f\uff09 | \u8001\u6f58\u7684\u535a\u5ba2"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://medium.com/founding-ithaka/setting-up-and-connecting-to-a-remote-mongodb-database-5df754a4da89"},"Setting up and connecting to a remote MongoDB database | by Mithilesh Said | Founding Ithaka | Medium"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://askubuntu.com/questions/823288/mongodb-loads-but-breaks-returning-status-14"},"MongoDB loads but breaks, returning status=14 - Ask Ubuntu")))),(0,a.kt)("h2",{id:"mongodb-create-superuser"},"Mongodb create superuser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'db.createUser({user:"admin", pwd:"admin",roles:[{role:"root","db":"admin"}],authenticationRestrictions:[{clientSource:["127.0.0.1"]}]})\n')),(0,a.kt)("h2",{id:"mongodb-auth-js"},"Mongodb Auth JS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { MongoClient } = require("mongodb");\n\nconst user = "admin"\nconst pswd = "admin"\nconst auth_db_name = "admin"\nconst db_name = \'hjxh_express_match\'\nconst coll_items_name = "items"\nconst mongo_uri = "101.43.125.199:27017"\n\nconst uri = `mongodb://${user}:${pswd}@${mongo_uri}`\nconst client = new MongoClient(uri);\n\n// Function to connect to the server\nasync function run() {\n    try {\n        // Connect the client to the server\n        await client.connect();\n        // Establish and verify connection\n        await client.db(db_name).command({ ping: 1 });\n        console.log("Connected successfully to server");\n    } finally {\n        // Ensures that the client will close when you finish/error\n        await client.close();\n    }\n}\nrun().catch(console.dir);\n\n')),(0,a.kt)("p",null,"reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/drivers/node/current/fundamentals/authentication/mechanisms/"},"Authentication Mechanisms \u2014 Node.js"))),(0,a.kt)("h2",{id:"mongodb-auth-py"},"Mongodb Auth PY"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pymongo.readthedocs.io/en/stable/examples/authentication.html"},"Authentication Examples \u2014 PyMongo 4.0.1 documentation"))),(0,a.kt)("h3",{id:"approach-1"},"approach 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'from pymongo import MongoClient\nuri = "mongodb://{user}:{pswd}@{host}/?authSource={auth_db}"\nclient = MongoClient(uri)\n')),(0,a.kt)("h3",{id:"approach-2"},"approach 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import urllib.parse\nusername = urllib.parse.quote_plus('user')\npassword = urllib.parse.quote_plus('pass/words')\nMongoClient('mongodb://%s:%s@127.0.0.1' % (username, password))\n")),(0,a.kt)("h3",{id:"approach-3"},"approach 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"client = MongoClient(\n    'example.com',\n    username='user',\n    password='password',\n    authSource='the_database',\n)\n")))}d.isMDXComponent=!0}}]);