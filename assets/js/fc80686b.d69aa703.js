"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[1752],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,u=k["".concat(l,".").concat(c)]||k[c]||m[c]||s;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),s=(n(7294),n(4137)),i=["components"],o={id:"presets",title:"Presets"},l=void 0,d={unversionedId:"getting-started/presets",id:"getting-started/presets",title:"Presets",description:"The presets",source:"@site/docs/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/ts-jest/docs/next/getting-started/presets",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/presets.md",tags:[],version:"current",frontMatter:{id:"presets",title:"Presets"},sidebar:"docs",previous:{title:"Installation",permalink:"/ts-jest/docs/next/getting-started/installation"},next:{title:"Options",permalink:"/ts-jest/docs/next/getting-started/options"}},p={},m=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}],k={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"the-presets"},"The presets"),(0,s.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Starting from ",(0,s.kt)("strong",{parentName:"p"},"v28.0.0"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," will gradually opt in adoption of ",(0,s.kt)("inlineCode",{parentName:"p"},"esbuild"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"swc")," more to improve the performance. To make the transition smoothly, we introduce ",(0,s.kt)("inlineCode",{parentName:"p"},"legacy")," presets as a fallback when the new codes don't work yet."))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," comes with several presets, covering most of the project's base configuration:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Preset name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default"),(0,s.kt)("br",null),"or ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"CommonJS")," syntax, leaving JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-legacy"),(0,s.kt)("br",null),"or ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/legacy")," (",(0,s.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"CommonJS")," syntax, leaving JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-esm"),(0,s.kt)("br",null)),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"ESM")," syntax, leaving JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-esm-legacy"),(0,s.kt)("br",null)," (",(0,s.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"ESM")," syntax, leaving JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts")),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".jsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"CommonJS")," syntax.",(0,s.kt)("br",null),"You'll need to set ",(0,s.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,s.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,s.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-legacy")," (",(0,s.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".jsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"CommonJS")," syntax.",(0,s.kt)("br",null),"You'll need to set ",(0,s.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,s.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,s.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-esm")),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".jsx"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"ESM")," syntax.",(0,s.kt)("br",null),"You'll need to set ",(0,s.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,s.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,s.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-esm-legacy")," (",(0,s.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".jsx"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"ESM")," syntax.",(0,s.kt)("br",null),"You'll need to set ",(0,s.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,s.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,s.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel")),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"CommonJS")," syntax, and JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"jsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-legacy")," (",(0,s.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"CommonJS")," syntax, and JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"jsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-esm")),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"ESM")," syntax, and JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"jsx"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-esm-legacy")," (",(0,s.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,s.kt)("strong",{parentName:"td"},"ESM")," syntax, and JavaScript files (",(0,s.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"jsx"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")))),(0,s.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,s.kt)("p",null,"In most cases, simply setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," to your ",(0,s.kt)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    // Replace `ts-jest` with the preset you want to use\n    // from the above list\n    "preset": "ts-jest"\n  }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," presets use ",(0,s.kt)("inlineCode",{parentName:"p"},"testMatch"),", like Jest does in its defaults. If you want to use ",(0,s.kt)("inlineCode",{parentName:"p"},"testRegex")," instead in your configuration, you MUST set ",(0,s.kt)("inlineCode",{parentName:"p"},"testMatch")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," or Jest will bail."),(0,s.kt)("h3",{id:"advanced"},"Advanced"),(0,s.kt)("p",null,"Any preset can also be used with other options.\nIf you're already using another preset, you might want only some specific settings from the chosen ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," preset.\nIn this case you'll need to use the JavaScript version of Jest config (comment/uncomment according to your use case):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n// const { defaultsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTs: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n")),(0,s.kt)("p",null,"Or through TypeScript (if ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node")," is installed):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest'\nimport { defaults as tsjPreset } from 'ts-jest/presets'\n// import { defaultsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTs as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabel as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets'\n\nconst config: InitialOptionsTsJest = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n\nexport default config\n")))}c.isMDXComponent=!0}}]);