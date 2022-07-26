"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="ts howto",l={unversionedId:"coding/TS/ts-howto",id:"version-0.16.0/coding/TS/ts-howto",title:"ts howto",description:"1. react\u58f0\u660estate\uff08ReadOnly\uff09\u5c5e\u6027",source:"@site/versioned_docs/version-0.16.0/coding/TS/ts-howto.md",sourceDirName:"coding/TS",slug:"/coding/TS/ts-howto",permalink:"/docs/docs/0.16.0/coding/TS/ts-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/TS/ts-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"ts",permalink:"/docs/docs/0.16.0/coding/TS/ts-bugfix"},next:{title:"unity howto",permalink:"/docs/docs/0.16.0/coding/Unity/unity-howto"}},s={},p=[{value:"react\u58f0\u660estate\uff08<code>ReadOnly</code>\uff09\u5c5e\u6027",id:"react\u58f0\u660estatereadonly\u5c5e\u6027",level:2},{value:"TODO: research on <code>.d.ts</code>",id:"todo-research-on-dts",level:2},{value:"BEST-PRACTICE: how to define const array with types",id:"best-practice-how-to-define-const-array-with-types",level:2},{value:"webstorm typescript live template",id:"webstorm-typescript-live-template",level:3},{value:"sample source code",id:"sample-source-code",level:3},{value:"a little reflection",id:"a-little-reflection",level:3},{value:"<code>htmlFor</code> in <code>label</code>",id:"htmlfor-in-label",level:2},{value:"private property in interface",id:"private-property-in-interface",level:2},{value:"Give Up typeorm find error types",id:"give-up-typeorm-find-error-types",level:2},{value:"instanceof --&gt; istypeof ?",id:"instanceof----istypeof-",level:2},{value:"PASS: declare const array in d.ts",id:"pass-declare-const-array-in-dts",level:2},{value:"hwo to define <code>useImperativeHandler</code> interface",id:"hwo-to-define-useimperativehandler-interface",level:2},{value:"ReturnType of a function",id:"returntype-of-a-function",level:3},{value:"how to design interface with default value",id:"how-to-design-interface-with-default-value",level:2},{value:"what&#39;s <code>TS_NODE_TRANSPILE_ONLY</code>",id:"whats-ts_node_transpile_only",level:2},{value:"TODO: cast enum to string",id:"todo-cast-enum-to-string",level:2},{value:"how to import <code>.md</code> like resources",id:"how-to-import-md-like-resources",level:2},{value:"how to check object&#39;s specific type when defined as a union type",id:"how-to-check-objects-specific-type-when-defined-as-a-union-type",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ts-howto"},"ts howto"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#react%E5%A3%B0%E6%98%8Estatereadonly%E5%B1%9E%E6%80%A7"},"react\u58f0\u660estate\uff08",(0,r.kt)("inlineCode",{parentName:"a"},"ReadOnly"),"\uff09\u5c5e\u6027")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#todo-research-on-dts"},"TODO: research on ",(0,r.kt)("inlineCode",{parentName:"a"},".d.ts"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#best-practice-how-to-define-const-array-with-types"},"BEST-PRACTICE: how to define const array with types"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#webstorm-typescript-live-template"},"webstorm typescript live template")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#sample-source-code"},"sample source code")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#a-little-reflection"},"a little reflection")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#htmlfor-in-label"},(0,r.kt)("inlineCode",{parentName:"a"},"htmlFor")," in ",(0,r.kt)("inlineCode",{parentName:"a"},"label"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#private-property-in-interface"},"private property in interface")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#give-up-typeorm-find-error-types"},"[Give Up] typeorm find error types")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#instanceof----istypeof-"},"instanceof --\x3e istypeof ?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#pass-declare-const-array-in-dts"},"PASS: declare const array in d.ts")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#hwo-to-define-useimperativehandler-interface"},"hwo to define ",(0,r.kt)("inlineCode",{parentName:"a"},"useImperativeHandler")," interface"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#returntype-of-a-function"},"ReturnType of a function")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#how-to-design-interface-with-default-value"},"how to design interface with default value")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#whats-ts_node_transpile_only"},"what's ",(0,r.kt)("inlineCode",{parentName:"a"},"TS_NODE_TRANSPILE_ONLY"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#todo-cast-enum-to-string"},"TODO: cast enum to string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#how-to-import-md-like-resources"},"how to import ",(0,r.kt)("inlineCode",{parentName:"a"},".md")," like resources")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#how-to-check-objects-specific-type-when-defined-as-a-union-type"},"how to check object's specific type when defined as a union type"))),(0,r.kt)("h2",{id:"react\u58f0\u660estatereadonly\u5c5e\u6027"},"react\u58f0\u660estate\uff08",(0,r.kt)("inlineCode",{parentName:"h2"},"ReadOnly"),"\uff09\u5c5e\u6027"),(0,r.kt)("p",null,"\u5148",(0,r.kt)("inlineCode",{parentName:"p"},"Props"),"\uff0c\u518d",(0,r.kt)("inlineCode",{parentName:"p"},"State"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  bar: number;\n}\n\ninterface Props {\n  baz: number;\n}\n\nclass Foo extends React.Component<Props, State> {\n  public state: State = {\n    bar: 5,\n  };\n}\n")),(0,r.kt)("p",null,"ref: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/issues/14250"},"React.d.ts ReadOnly\\<T",">"," in state and props \xb7 Issue #14250 \xb7 DefinitelyTyped/DefinitelyTyped"))),(0,r.kt)("h2",{id:"todo-research-on-dts"},"TODO: research on ",(0,r.kt)("inlineCode",{parentName:"h2"},".d.ts")),(0,r.kt)("h2",{id:"best-practice-how-to-define-const-array-with-types"},"BEST-PRACTICE: how to define const array with types"),(0,r.kt)("h3",{id:"webstorm-typescript-live-template"},"webstorm typescript live template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export const $ConstVAR$ = "$VAR$";\nexport type $VAR$ = typeof $ConstVAR$;\n\n$END$\n')),(0,r.kt)("h3",{id:"sample-source-code"},"sample source code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// sample of one unit\nexport const errorInvalidSuffix = 'ErrorInvalidSuffix';\nexport type ErrorInvalidSuffix = typeof errorInvalidSuffix;\n\nexport const errorUnknownEncoding = 'ErrorUnknownEncoding';\nexport type ErrorUnknownEncoding = typeof errorUnknownEncoding;\n\nexport const errorPreParsingRows = [\n  errorInvalidSuffix,           // \u540e\u7f00\n  errorUnknownEncoding,         // \u7f16\u7801\n] as const;\nexport type ErrorPreParsingRows = typeof errorPreParsingRows[number];\n\n// sample of joining units\nexport const errorParsingFiles = [\n  ...errorPreParsingRows, // \u89e3\u6790\u884c\u4e4b\u524d\u7684\u95ee\u9898\n  ...errorParsingRows     // \u89e3\u6790\u884c\u65f6\u7684\u95ee\u9898\n] as const;\nexport type ErrorParsingFile = typeof errorParsingFiles[number];\n")),(0,r.kt)("h3",{id:"a-little-reflection"},"a little reflection"),(0,r.kt)("p",null,"After a little try of this camel case const varied types, I found it a bit inflexible."),(0,r.kt)("p",null,"So I finally turns into the usage of simple ",(0,r.kt)("inlineCode",{parentName:"p"},"const === type"),", especially support for the use of redux actions."),(0,r.kt)("h2",{id:"htmlfor-in-label"},(0,r.kt)("inlineCode",{parentName:"h2"},"htmlFor")," in ",(0,r.kt)("inlineCode",{parentName:"h2"},"label")),(0,r.kt)("p",null,"In materialUI, they used a custom element based on ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// https://mui.com/zh/components/buttons/#upload-button\nconst Input = styled(\'input\')({\n  display: \'none\',\n});\n\nexport default function UploadButtons() {\n  return (\n    <Stack direction="row" alignItems="center" spacing={2}>\n      <label htmlFor="contained-button-file">\n        <Input accept="image/*" id="contained-button-file" multiple type="file" />\n        <Button variant="contained" component="span">\n          Upload\n        </Button>\n      </label>\n      ...\n    </Stack>\n  );\n}\n')),(0,r.kt)("p",null,"In this demo, the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," has a property of ",(0,r.kt)("inlineCode",{parentName:"p"},"htmlFor"),", which points to an element with id of ",(0,r.kt)("inlineCode",{parentName:"p"},"contained-button-file"),", i.e the element of ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," which accepts images."),(0,r.kt)("p",null,"However, this may cause the eslint problem since in eslint the label should points to an built-in element."),(0,r.kt)("p",null,"There are 2 solutions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"add the eslint configuration:"),(0,r.kt)("p",{parentName:"li"},"refer to here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md#case-my-label-and-input-components-are-custom-components"},"Case: My label and input components are custom components."),", we can add the configuration of custom elements as the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// .eslintrc\n{\n"rules": {\n    "jsx-a11y/label-has-associated-control": [ 2, {\n    "labelComponents": ["CustomInputLabel"],\n    "labelAttributes": ["label"],\n    "controlComponents": ["CustomInput"],\n    "depth": 3,\n    }],\n}\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"give up the custom elements if unnecessary"),(0,r.kt)("p",{parentName:"li"},"In our demo, since MaterialUI just does one little work on the built-in element of ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", i.e. adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"display: 'none'")," style onto the element."),(0,r.kt)("p",{parentName:"li"},"So if we don't have the requirement of re-using this element, we can avoid using custom elements, and re-write the codes like the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export default function UploadButtons() {\nreturn (\n    <Stack direction="row" alignItems="center" spacing={2}>\n    <label htmlFor="contained-button-file">\n        <input style={{display: "none"}} accept="image/*" id="contained-button-file" multiple type="file" />\n        <Button variant="contained" component="span">\n        Upload\n        </Button>\n    </label>\n    ...\n    </Stack>\n);\n}\n')))),(0,r.kt)("h2",{id:"private-property-in-interface"},"private property in interface"),(0,r.kt)("p",null,"I intended to make the property from interface into implemented class private, so that I can use methods to export those properties, but to find it's impossible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/main/modules/parseFile/handler/parse_base.ts:16\nexport interface IParseResult {\n  startTime: Date;\n  parseEndTime: Date;\n  dbEndTime: Date;\n  parseMileSeconds: number;\n  dbMileSeconds: number;\n  nTotalRows: number;\n  nSavedRows: number;\n  nFailedValidation: number;\n  sizePct: number;\n  rowsPct: number;\n}\n")),(0,r.kt)("p",null,"And actually what I want to do is because I didn't catch really what an interface means, and how to design a robust interface with class."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IParseResult")," is really what I want, that means, the exported data-structure."),(0,r.kt)("p",null,"However, I cannot use a class to implement directly on this interface, so that I operate the public methods inner the class to alter these properties."),(0,r.kt)("p",null,"The proper way is to define a class to store all or partial data properties of this interface, and do operations, and then, finally export those values."),(0,r.kt)("p",null,"If I do not want to export each time, since I want to use a variable like ",(0,r.kt)("inlineCode",{parentName:"p"},"parseResult")," directly in the scope, then I can design a class with accepts the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseResult")," then alter its value by methods so that the changes happen in place."),(0,r.kt)("p",null,"In conclusion, we can define an interface, and the interface is for outer usage, rather than implemented by a class, which, if so, needs to be implemented like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface IPipeParseResult {\n  ...\n\n  export: () => IParseResult\n}\n\nclass ParseResult implements IPipeParseResult {\n  ...\n\n  public expo\n  rt(): IParseResult {\n    return {\n      ...\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Not like this, which has no meaning:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class ParseResult implements IParseResult {\n  ....\n}\n")),(0,r.kt)("p",null,"So, to my former project, I gave it up, since no need to be that sophisticated then."),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/37791947/how-to-define-a-private-property-when-implementing-an-interface-in-typescript"},"reactjs - How to define a private property when implementing an interface in Typescript? - Stack Overflow"))),(0,r.kt)("h2",{id:"give-up-typeorm-find-error-types"},"[Give Up]"," typeorm find error types"),(0,r.kt)("p",null,"I intended to use error type to check the database execution result."),(0,r.kt)("img",{alt:"picture 37",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ts-howto-1641639645599-589d5e5cc1ed8ab3620785ff64d7ccb7ff852a4680952c50f139af167e8b1fcf.png"}),(0,r.kt)("p",null,"However, I failed, since the specific error type is not provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"typeorm")," instead of from third party library like ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite3-driver")," or so."),(0,r.kt)("p",null,"The query result module is written at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typeorm/typeorm/blob/beea2e1e4429d13d7864ebc23aa6e58fa01647ea/src/query-builder/QueryBuilder.ts"},"typeorm/QueryBuilder.ts at beea2e1e4429d13d7864ebc23aa6e58fa01647ea \xb7 typeorm/typeorm"),", in which it just merges the third-party query result with typeorm's inner query result defined at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typeorm/typeorm/blob/beea2e1e4429d13d7864ebc23aa6e58fa01647ea/src/error/QueryFailedError.ts"},"typeorm/QueryFailedError.ts at beea2e1e4429d13d7864ebc23aa6e58fa01647ea \xb7 typeorm/typeorm"),"."),(0,r.kt)("p",null,"Hence, unless we spent a lot of time to figure out what the lib is using and where the types of the lib defines, (and possibly we could find nothing since they may be written via ",(0,r.kt)("inlineCode",{parentName:"p"},"C/C++"),")."),(0,r.kt)("p",null,"So just let it go, and do more harding coding then. Those don't deserve."),(0,r.kt)("h2",{id:"instanceof----istypeof-"},"instanceof --\x3e istypeof ?"),(0,r.kt)("p",null,"No! In typescript, there is no api like ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof")," to type check."),(0,r.kt)("p",null,"However, we can define a method which returns ",(0,r.kt)("inlineCode",{parentName:"p"},"a is A")," to determine."),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/51528780/typescript-check-typeof-against-custom-type/51529486"},'Typescript: Check "typeof" against custom type - Stack Overflow'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/50774790/switch-for-specific-type-in-typescript"},"Switch for specific type in TypeScript - Stack Overflow")))),(0,r.kt)("h2",{id:"pass-declare-const-array-in-dts"},"PASS: declare const array in d.ts"),(0,r.kt)("img",{alt:"picture 5",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ts-howto-458f2e34b1a34244b59d092c885fa546ea1332db99544c578b388beee85b0cc9.png",width:"480"}),(0,r.kt)("p",null,"temporary solution: use ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"const array")),(0,r.kt)("img",{alt:"picture 6",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ts-howto-868f836962d18cf399dcb6907ca148f017a737e0b41e4efac9c848d694ee5282.png",width:"480"}),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/51870736/how-to-define-a-const-array-in-typescript"},"How to define a const array in typescript - Stack Overflow"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/43318178/error-initializers-are-not-allowed-in-ambient-contexts/43318374"},"angular - Error: Initializers are not allowed in ambient contexts - Stack Overflow")))),(0,r.kt)("h2",{id:"hwo-to-define-useimperativehandler-interface"},"hwo to define ",(0,r.kt)("inlineCode",{parentName:"h2"},"useImperativeHandler")," interface"),(0,r.kt)("p",null,"It's quite clarified in this answer that when I define a ",(0,r.kt)("inlineCode",{parentName:"p"},"useImperativeHandler"),", I need to make at least four steps."),(0,r.kt)("img",{alt:"picture 76",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640676945341-ts-howto-ac842442a20aef4c0a0d173a73160bb58ac48cbc813bf78b87edfcfa882cfbc4.png",width:"480"}),(0,r.kt)("p",null,"First, I should let the ",(0,r.kt)("inlineCode",{parentName:"p"},"useRef")," know not only the component type (which initialized as ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),") but also the ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," type, in which defined the api interface, so that I can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current.doSomething()")," and share the full auto-complement from IDE."),(0,r.kt)("p",null,"Second, how to define the ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," type? The easier way is derive it directly from the component using ",(0,r.kt)("inlineCode",{parentName:"p"},"typeof ForwardRefType"),"."),(0,r.kt)("p",null,"However, if we hadn't defined what's the ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," we are to use in our ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefType"),", then those work still wouldn't work. It forced us to clearly define the ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," is using."),(0,r.kt)("p",null,"Nevertheless, I am not willing to write an interface which is totally equal to the type of function. So I struggled to find a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType")," to help me auto complete this matter."),(0,r.kt)("p",null,"And I found a way to write like this:"),(0,r.kt)("img",{alt:"picture 77",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640677820762-ts-howto-b6c2ccbe2d7ab156854085e816b35f52d5b0d2ca511fb67e06771bd28ecac7e4.png",width:"480"}),(0,r.kt)("p",null,"First, I peeled off(\u5265\u79bb) the ",(0,r.kt)("inlineCode",{parentName:"p"},"imperativeHandler")," api separately, and the cost is to use a function since the ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," depends the ",(0,r.kt)("inlineCode",{parentName:"p"},"ref"),"."),(0,r.kt)("p",null,"Then I use this ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," again, to let its ",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType")," serve as the generic type of ",(0,r.kt)("inlineCode",{parentName:"p"},"forwardRef")," (",(0,r.kt)("strong",{parentName:"p"},"this is the most important!"),")."),(0,r.kt)("p",null,"Finally, I use the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"forwardRef")," as the generic type of its father ref element, and then it would know what api to use. All things are done!"),(0,r.kt)("img",{alt:"picture 78",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640678111109-ts-howto-32730e18ce87a235d7e1ca390bd6408000bd964a1dcf343bda41e6b0e1035320.png",width:"480"}),(0,r.kt)("p",null,"There is a last problem about this approach, that is why I cannot make the ref init value work even with ",(0,r.kt)("inlineCode",{parentName:"p"},"null as unknown as ScrollToBottom"),", which forced me to write like ",(0,r.kt)("inlineCode",{parentName:"p"},"ref?.current?.doScroll()")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current.doScroll()"),"."),(0,r.kt)("p",null,"But it's not so important yet now. Maybe I would turn back to solve this in the future need."),(0,r.kt)("p",null,"[TODO: why ",(0,r.kt)("inlineCode",{parentName:"p"},"null as unknown as ScrollToBottom")," not work]"),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/62210286/declare-type-with-react-useimperativehandle"},"reactjs - declare type with React.useImperativeHandle() - Stack Overflow"))),(0,r.kt)("h3",{id:"returntype-of-a-function"},"ReturnType of a function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function f1(s: string) {\n    return { a: 1, b: s };\n}\ntype T14 = ReturnType<typeof f1>;  // { a: number, b: string }\n")),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/wu_xianqiang/article/details/115425818"},"(20\u6761\u6d88\u606f) TS\u4e2d\u7684\u6761\u4ef6\u7c7b\u578b(ReturnType)_\u524d\u7aef\u7cbe\u9ad3-CSDN\u535a\u5ba2_ts\u6761\u4ef6\u7c7b\u578b"))),(0,r.kt)("h2",{id:"how-to-design-interface-with-default-value"},"how to design interface with default value"),(0,r.kt)("p",null,"There has been quite a little of insightful solutions offered in this question ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/35074365/typescript-interface-default-values"},"Typescript interface default values - Stack Overflow"),"."),(0,r.kt)("p",null,"And I finally choose the ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/64782269/9422455"},"factory function way")," since it's more straight-forward and can meet my need also."),(0,r.kt)("p",null,"Then my interface is designed into like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { MsgFromMain, MsgLevel } from '../universal';\n\nexport interface ConsoleItem {\n  text: string;\n  time: Date;\n  level: MsgLevel;\n}\n\nexport const makeItemFromMain = (\n  msg: MsgFromMain,\n  func?: (any) => string\n): ConsoleItem => ({\n  text: func ? func(msg.content) : msg.content,\n  time: msg.sendTime,\n  level: msg.level || MsgLevel.debug,\n});\n\nexport const makeItemFromText = (\n  text: string,\n  level = MsgLevel.debug\n): ConsoleItem => ({\n  text,\n  time: new Date(),\n  level,\n});\n")),(0,r.kt)("p",null,"In this interface, any of ",(0,r.kt)("inlineCode",{parentName:"p"},"text | time | level")," can get a default value either from another input or so, and it frees me from redundant coding and allows me to write like this:"),(0,r.kt)("img",{alt:"picture 75",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640674249655-ts-howto-b52d01a09ae0d04bc148987d1ee8d9ba0957a78907f910a0cf0d0c490bafac72.png",width:"480"}),(0,r.kt)("p",null,"Thank you!"),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35074365/typescript-interface-default-values"},"Typescript interface default values - Stack Overflow"))),(0,r.kt)("h2",{id:"whats-ts_node_transpile_only"},"what's ",(0,r.kt)("inlineCode",{parentName:"h2"},"TS_NODE_TRANSPILE_ONLY")),(0,r.kt)("p",null,"In a word, ",(0,r.kt)("inlineCode",{parentName:"p"},"transpile_only")," is used to fasten the transition speed from ts into js."),(0,r.kt)("img",{alt:"picture 61",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640612737395-ts-howto-2f28d60ccf1f52f6920ebfd8c29de1925d2cb9c66475473e03da2007a2e76b30.png",width:"480"}),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/ts-node"},"TypeStrong/ts-node: TypeScript execution and REPL for node.js"))),(0,r.kt)("h2",{id:"todo-cast-enum-to-string"},"TODO: cast enum to string"),(0,r.kt)("p",null,"If I define a EnumType of ",(0,r.kt)("inlineCode",{parentName:"p"},'enum MenuKey {ERP="ERP", TRD="TRD"}')," since I need a data structure to limit a variable domain."),(0,r.kt)("p",null,"Obviously in my case, they are all string, which means the real intension of me is something like ",(0,r.kt)("inlineCode",{parentName:"p"},"enum MenuKey {xxx} as string")," so that I can put my ",(0,r.kt)("inlineCode",{parentName:"p"},"MenuKey")," into an API which only accepts string, e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"slice"),"."),(0,r.kt)("p",null,"Hence, I can write like the following since ts would treat ",(0,r.kt)("inlineCode",{parentName:"p"},"mk")," as a string so that has an api of ",(0,r.kt)("inlineCode",{parentName:"p"},"slice"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const mk: MenuKey = "ERP"\nconsole.log(mk.slice(0, 2))\n')),(0,r.kt)("p",null,"However, it doesn't."),(0,r.kt)("p",null,"The only way I can do is write like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"console.log((mk as string).slice(0, 2))\n")),(0,r.kt)("p",null,"Please read another example from the real business scene:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'enum MenuKey {ERP="ERP", TRD="TRD"}\n\n// first realization, definitely not good since we need to write `as string` each time using it as a string\nconst [menuKey, setMenuKey] = useState(MenuKey.ERP)\nconsole.log((menuKey as string).slice(0, 2)) // not good\n\n// second realization, a little better\nconst [menuKey, setMenuKey] = useState(MenuKey.ERP as string)\nconsole.log(menuKey.slice(0, 2))\n')),(0,r.kt)("p",null,"I wonder if there is a built-in practice that allows me done this right."),(0,r.kt)("p",null,"Thanks."),(0,r.kt)("h2",{id:"how-to-import-md-like-resources"},"how to import ",(0,r.kt)("inlineCode",{parentName:"h2"},".md")," like resources"),(0,r.kt)("p",null,"Just declare it as a module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// globals.d.ts\ndeclare module '*.md'\n")),(0,r.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640336624589-ts-howto-41d70e41b4f730bdf9428b5f12075eea653950d79253aa8f16db446ef644ccfe.png",width:"480"}),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/44678315/how-to-import-markdown-md-file-in-typescript"},"angular - How to import markdown(.md) file in typescript - Stack Overflow"))),(0,r.kt)("h2",{id:"how-to-check-objects-specific-type-when-defined-as-a-union-type"},"how to check object's specific type when defined as a union type"),(0,r.kt)("p",null,"This problem may seem easy is many programming languages, e.g, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"isinstane(x, X)")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"python"),"."),(0,r.kt)("p",null,"However, it becomes tricky when things in TypeScript since so many that are close to complex concepts can be really hard for a newbie to find the right way."),(0,r.kt)("p",null,"I tried to scratch some useful info from the official TypeScript website but to find neither ",(0,r.kt)("inlineCode",{parentName:"p"},"union")," nor ",(0,r.kt)("inlineCode",{parentName:"p"},"merge")," can satisfy my requirements. The ",(0,r.kt)("inlineCode",{parentName:"p"},"combination")," may be a little helpful if we do some hook on this one."),(0,r.kt)("p",null,"On StackOverFlow, a relative post ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/27325524/is-it-possible-to-combine-members-of-multiple-types-in-a-typescript-annotation"},"javascript - Is it possible to combine members of multiple types in a TypeScript annotation? - Stack Overflow")," caught my eyesight but indeed almost none of the answers can meet my expectation -- an built-in and elegant(\u4f18\u96c5\u7684) solution rather than write redundant and vulnerable(\u8106\u5f31\u7684) functions."),(0,r.kt)("p",null,"Finally, I found a wonderful typescript handbook named as ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript-cheatsheet")," at ",(0,r.kt)("a",{parentName:"p",href:"https://rmolinamir.github.io/typescript-cheatsheet/#type-checking-for-interfaces"},"typescript-cheatsheet | A set of TypeScript related notes used for quick reference. The cheatsheet contains references to types, classes, decorators, and many other TypeScript related subjects.")," , where it's easy for me to locate into the target chapter: ",(0,r.kt)("a",{parentName:"p",href:"https://rmolinamir.github.io/typescript-cheatsheet/#type-checking-for-interfaces"},"typescript-cheatsheet | A set of TypeScript related notes used for quick reference. The cheatsheet contains references to types, classes, decorators, and many other TypeScript related subjects.")),(0,r.kt)("p",null,"In this cheatsheet, it concludes two methods that can help me check an object's type, one by using ",(0,r.kt)("inlineCode",{parentName:"p"},"type-guards")," which is best suitable for my current need, and the other one is by using ",(0,r.kt)("inlineCode",{parentName:"p"},"discriminators")," which may be useful in the later projects."),(0,r.kt)("p",null,"If you are interested at ",(0,r.kt)("inlineCode",{parentName:"p"},"discriminators"),", please move a step to ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@dixitk13/typescript-discriminator-a3158f292ef0"},"Typescript discriminator. Very often we have use-cases where we\u2026 | by Dixit Patel | Medium")," for a better understanding since I am confused it with the javascript ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," and typescript ",(0,r.kt)("inlineCode",{parentName:"p"},"decorators"),"."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript-cheatsheet"),", it really helped me a lot and I can foresee that I will frequently seek for any typescript help from here rather than first searching on the stackoverflow."))}d.isMDXComponent=!0}}]);