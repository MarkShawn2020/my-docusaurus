"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"coding/JS/database",id:"version-0.16.0/coding/JS/database",title:"database",description:"1. typeorm join table",source:"@site/versioned_docs/version-0.16.0/coding/JS/database.md",sourceDirName:"coding/JS",slug:"/coding/JS/database",permalink:"/docs/docs/0.16.0/coding/JS/database",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/JS/database.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Vue howto",permalink:"/docs/docs/0.16.0/coding/JS/Vue/vue-howto"},next:{title:"develop-remark-plugin",permalink:"/docs/docs/0.16.0/coding/JS/develop-remark-plugin"}},l={},d=[{value:"typeorm join table",id:"typeorm-join-table",level:2},{value:"\u2705 join using id(string) other than Entity",id:"-join-using-idstring-other-than-entity",level:3},{value:"\u274c join return flatted list other than nested",id:"-join-return-flatted-list-other-than-nested",level:3},{value:"typeorm not null constraint failed",id:"typeorm-not-null-constraint-failed",level:2},{value:"PASS:  better-sqlite3 <code>NODE_MODULE_VERSION</code> mismatch | rebuild failed",id:"pass--better-sqlite3-node_module_version-mismatch--rebuild-failed",level:2},{value:"PASS: better-sqlite3 ReferenceError: better_sqlite3_1 is not defined, both <code>jest</code> and <code>mocha</code>",id:"pass-better-sqlite3-referenceerror-better_sqlite3_1-is-not-defined-both-jest-and-mocha",level:2},{value:"mocha + ts + esm",id:"mocha--ts--esm",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#typeorm-join-table"},"typeorm join table")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#white_check_mark-join-using-idstring-other-than-entity"},"\u2705 join using id(string) other than Entity")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#x-join-return-flatted-list-other-than-nested"},"\u274c join return flatted list other than nested")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#typeorm-not-null-constraint-failed"},"typeorm not null constraint failed")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#pass--better-sqlite3-node_module_version-mismatch--rebuild-failed"},"PASS:  better-sqlite3 ",(0,o.kt)("inlineCode",{parentName:"a"},"NODE_MODULE_VERSION")," mismatch | rebuild failed")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#pass-better-sqlite3-referenceerror-better_sqlite3_1-is-not-defined-both-jest-and-mocha"},"PASS: better-sqlite3 ReferenceError: better_sqlite3_1 is not defined, both ",(0,o.kt)("inlineCode",{parentName:"a"},"jest")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"mocha"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#mocha--ts--esm"},"mocha + ts + esm"))),(0,o.kt)("h2",{id:"typeorm-join-table"},"typeorm join table"),(0,o.kt)("h3",{id:"-join-using-idstring-other-than-entity"},"\u2705 join using id(string) other than Entity"),(0,o.kt)("p",null,"I have checked a lot of typeorm documentation and relative discussion, but to find they all use an extra column to specify the table to join."),(0,o.kt)("p",null,"For example, int the case below, the key of ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile")," refers to ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),", and the key of ",(0,o.kt)("inlineCode",{parentName:"p"},"profile")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," refers to ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'# Entity Profile\nimport {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";\nimport {User} from "./User";\n\n@Entity()\nexport class Profile {\n    \n    @PrimaryGeneratedColumn()\n    id: number;\n    \n    @Column()\n    gender: string;\n    \n    @Column()\n    photo: string;\n    \n    @OneToOne(() => User, user => user.profile) // specify inverse side as a second parameter\n    user: User;\n    \n}\n\n# Entity User\nimport {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";\nimport {Profile} from "./Profile";\n\n@Entity()\nexport class User {\n    \n    @PrimaryGeneratedColumn()\n    id: number;\n    \n    @Column()\n    name: string;\n    \n    @OneToOne(() => Profile, profile => profile.user) // specify inverse side as a second parameter\n    @JoinColumn()\n    profile: Profile;\n    \n}\n')),(0,o.kt)("p",null,"However, in my own business scene, since I have two tables with the equal level and the same ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property, it's redundant for me to specify an extra column named as ",(0,o.kt)("inlineCode",{parentName:"p"},"erpId")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"trdId")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"foreignId")," or anything."),(0,o.kt)("p",null,"Besides, since the ",(0,o.kt)("inlineCode",{parentName:"p"},"trd")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"erp")," are saved into db not synchronously, the example listed on the documentation won't help to us."),(0,o.kt)("p",null,"Through my hard experiment and observation, I finally realized the join key is some kind of ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," (not real object) which means if only I specified the correct id, the join action then would be executed successfully."),(0,o.kt)("p",null,"That's it! Since we have already know the id of item to be join, which is directly the id of the item itself, then we can just let the id to be the joined key, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"# Entity Erp\nimport { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';\nimport { TrdModel } from './trd';\n\n@Entity()\nexport class ErpModel {\n\n  @OneToOne(() => TrdModel, trd => trd.id)\n  @PrimaryColumn()\n  id: string;\n\n}\n\n# Entity Trd\nimport { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';\nimport { ErpModel } from './erp';\n\n@Entity()\nexport class TrdModel  {\n  @OneToOne(() => ErpModel, erp=>erp.id )\n  @JoinColumn()\n  @PrimaryColumn()\n  id: string;\n}\n")),(0,o.kt)("p",null,"So I can use the following query to get a joined table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// src/main/modules/queryDB/db.ts:40\n// map erp into `id`, so `id` would go away\n      getConnection()\n        .leftJoinAndSelect('trd.id', 'erp')\n        .skip(skip)\n        .limit(limit)\n        .getMany()\n    );\n")),(0,o.kt)("img",{alt:"picture 3",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/database-1641883942426-5cfef08aace698977502e57644e78e6c3b45ccbc34d76978642b5337ff4068fa.png"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// map erp into `erp`, so `id` still existed\n      getConnection()\n        .manager.createQueryBuilder(TrdModel, 'trd')\n        .leftJoinAndMapOne('trd.erp', ErpModel, 'erp', 'erp.id = trd.id')\n        .skip(skip)\n        .limit(limit)\n        .getMany()\n    );\n")),(0,o.kt)("img",{alt:"picture 6",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/database-1641894903691-ecc5ca26d8438b8c4283055900d4d6e9680338e15d531190c167d64be121d66e.png"}),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://typeorm.io/#/one-to-one-relations"},"TypeORM - Amazing ORM for TypeScript and JavaScript (ES7, ES6, ES5). Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, WebSQL databases. Works in NodeJS, Browser, Ionic, Cordova and Electron platforms."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://orkhan.gitbook.io/typeorm/docs/one-to-one-relations"},"One-to-one relations - typeorm"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.porschebz.com/posts/42345.html"},"NestJs\u4e2d\u4f7f\u7528Typeorm\u7684\u95ee\u9898\u603b\u7ed3 | Porschebz")))),(0,o.kt)("h3",{id:"-join-return-flatted-list-other-than-nested"},"\u274c join return flatted list other than nested"),(0,o.kt)("p",null,"It's sad to find that it is impossible in typeorm, which reminds me the beauty of ",(0,o.kt)("inlineCode",{parentName:"p"},"pandas"),", lol."),(0,o.kt)("img",{alt:"picture 4",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/database-1641893492395-6a822246d22301f3fa6974058a567a005a69e234dc94da55a46c5b4d4a724ebb.png"}),(0,o.kt)("p",null,"So I should manually add one ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," to help finish this conversion."),(0,o.kt)("p",null," ref:\nI spent a lot of time and finally thought of the search key of ",(0,o.kt)("inlineCode",{parentName:"p"},"flat"),"!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/typeorm/typeorm/issues/5111"},"How to return a relation column as top level in response? \xb7 Issue #5111 \xb7 typeorm/typeorm"))),(0,o.kt)("h2",{id:"typeorm-not-null-constraint-failed"},"typeorm not null constraint failed"),(0,o.kt)("p",null,"This is because I added new table columns into former model."),(0,o.kt)("img",{alt:"picture 41",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/database-1641652378702-4275729e537afcacf2683f64ef62d2a483273f6bccf4bf5933ccb490b4abc8e9.png"}),(0,o.kt)("p",null,"Since I do not know the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," is , or unnecessary, I would like to delete the table first."),(0,o.kt)("p",null,"I tried to delete table but not found the choice but the ",(0,o.kt)("inlineCode",{parentName:"p"},"dropDatabase()"),"."),(0,o.kt)("img",{alt:"picture 42",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/database-1641653005035-a9fb5d2adc9a4fd9188e9a5dee06581a59f5a084bcd29764250b5a5cd1bbef0e.png"}),(0,o.kt)("h2",{id:"pass--better-sqlite3-node_module_version-mismatch--rebuild-failed"},"PASS:  better-sqlite3 ",(0,o.kt)("inlineCode",{parentName:"h2"},"NODE_MODULE_VERSION")," mismatch | rebuild failed"),(0,o.kt)("img",{alt:"picture 12",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/best-sqlite3-1641545886362-5b85064baa519f5c06ecf28469b8462382162f0d792649670db6e0b1b3b77525.png"}),(0,o.kt)("img",{alt:"picture 13",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/best-sqlite3-1641546347572-29a1230b8941634376b03ed20a25c09b9fd917dd49de0a823f68df13042a6613.png"}),(0,o.kt)("h2",{id:"pass-better-sqlite3-referenceerror-better_sqlite3_1-is-not-defined-both-jest-and-mocha"},"PASS: better-sqlite3 ReferenceError: better_sqlite3_1 is not defined, both ",(0,o.kt)("inlineCode",{parentName:"h2"},"jest")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"mocha")),(0,o.kt)("p",null,"The author suggests us to use mocha: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JoshuaWise/better-sqlite3/issues/162#:~:text=A%20more%20robust%20testing%20framework%20(such%20as%20mocha%2C%20the%20one%20used%20in%20the%20better%2Dsqlite3%20repository)%2C%20does%20not%20cause%20such%20an%20issue."},"A more robust testing framework (such as mocha, the one used in the better-sqlite3 repository), does not cause such an issue.")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/JoshuaWise/better-sqlite3/issues/162"},"SqliteErrors have wrong constructor in Jest environment \xb7 Issue #162 \xb7 JoshuaWise/better-sqlite3"))),(0,o.kt)("h3",{id:"mocha--ts--esm"},"mocha + ts + esm"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mochajs/mocha-examples/issues/47"},"typescript with ts-node and ESM support \xb7 Issue #47 \xb7 mochajs/mocha-examples"))))}m.isMDXComponent=!0}}]);