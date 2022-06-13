"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8710],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=s,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1856:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(7462),s=n(3366),o=(n(7294),n(4137)),a=["components"],i={id:"esm-support",title:"ESM Support"},p=void 0,l={unversionedId:"guides/esm-support",id:"version-27.1/guides/esm-support",title:"ESM Support",description:"To use ts-jest with ESM support:",source:"@site/versioned_docs/version-27.1/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/ts-jest/docs/27.1/guides/esm-support",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/guides/esm-support.md",tags:[],version:"27.1",frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"version-27.1-docs",previous:{title:"Version checking",permalink:"/ts-jest/docs/27.1/getting-started/version-checking"},next:{title:"Mock ES6 class",permalink:"/ts-jest/docs/27.1/guides/mock-es6-class"}},u={},c=[{value:"ESM presets",id:"esm-presets",level:3},{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4}],m={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," with ESM support:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check ",(0,o.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/ecmascript-modules"},"ESM Jest documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"Enable ",(0,o.kt)("a",{parentName:"li",href:"../getting-started/options/useESM"},"useESM")," ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-jest")," config."),(0,o.kt)("li",{parentName:"ul"},"Include ",(0,o.kt)("inlineCode",{parentName:"li"},".ts")," in ",(0,o.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/next/configuration#extensionstotreatasesm-arraystring"},"extensionsToTreatAsEsm")," Jest config option."),(0,o.kt)("li",{parentName:"ul"},"Ensure that ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig")," has ",(0,o.kt)("inlineCode",{parentName:"li"},"module")," with value for ESM, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"ES2015")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"ES2020")," etc...")),(0,o.kt)("h3",{id:"esm-presets"},"ESM presets"),(0,o.kt)("p",null,"There are also ",(0,o.kt)("a",{parentName:"p",href:"/ts-jest/docs/27.1/getting-started/presets"},"3 presets")," to work with ESM."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"manual-configuration"},"Manual configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    },\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"use-esm-presets"},"Use ESM presets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "preset": "ts-jest/presets/default-esm", // or other ESM presets,\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    },\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);