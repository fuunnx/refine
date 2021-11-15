"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4829],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14280:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"contributing",title:"Contributing"},s=void 0,c={unversionedId:"contributing",id:"version-1.0.xx/contributing",isDocsHomePage:!1,title:"Contributing",description:"We follow a code of conduct when participating with community. Please read it before you make any contributions.",source:"@site/versioned_docs/version-1.0.xx/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/1.0.xx/contributing",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/contributing.md",tags:[],version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"Testing",permalink:"/docs/1.0.xx/testing"}},u=[{value:"Running in development mode",id:"running-in-development-mode",children:[],level:2},{value:"Starting Documentation in Development Mode",id:"starting-documentation-in-development-mode",children:[],level:2},{value:"Running tests",id:"running-tests",children:[],level:2},{value:"Known Issues",id:"known-issues",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We follow a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/master/CODE_OF_CONDUCT.md"},"code of conduct")," when participating with community. Please read it before you make any contributions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you plan to work on an issue, mention so in the issue page before you start working on it."),(0,o.kt)("li",{parentName:"ul"},"If you plan to work on a new feature, create an issue and discuss it with other community members/maintainers."),(0,o.kt)("li",{parentName:"ul"},"Ask for help in our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/UuU3XCc3J5"},"community room"),".")),(0,o.kt)("h2",{id:"running-in-development-mode"},"Running in development mode"),(0,o.kt)("p",null,"This project has multiple packages and uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Lerna")," to manage all of the packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/"),"."),(0,o.kt)("p",null,"First, install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,o.kt)("p",null,"Then, start all the packages in watch mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run lerna bootstrap\nnpm run start\n")),(0,o.kt)("p",null,"Now all packages run in watch mode. You can start one of the example projects in ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples/*")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/example")," directories and when you change a file in any of the packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/*"),", it should re-compile and example gets automatically reloaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/base\nnpm install\nnpm run start\n")),(0,o.kt)("h2",{id:"starting-documentation-in-development-mode"},"Starting Documentation in Development Mode"),(0,o.kt)("p",null,"Our documentation is built with ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". To start it in development mode, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd documentation\nnpm install\nnpm run start\n")),(0,o.kt)("h2",{id:"running-tests"},"Running tests"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run test")," command runs tests for all packages. If you're working on a package (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core"),"), you can run tests only for that package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/core\nnpm run test\n")),(0,o.kt)("p",null,"Or you can do it for a specific file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test -- /src/hooks/export/index.spec.ts\n")),(0,o.kt)("p",null,"Also, to run a specific file's tests in watch mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test -- --watch /src/hooks/export/index.spec.ts\n")),(0,o.kt)("p",null,"Get coverage report for that file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test -- --coverage /src/hooks/export/index.spec.ts\n")),(0,o.kt)("p",null,"When you run the command that produces coverage report, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"/coverage/lcov-report/index.html")," file to see coverage results. If you run this command in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core")," directory, then coverage report will be generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core/coverage"),"."),(0,o.kt)("p",null,"Please make sure you contribute well tested code."),(0,o.kt)("h2",{id:"known-issues"},"Known Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the interface changes are not reflected in the project when the interface changes under the packages, delete the ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," folder in the project and try again.")))}m.isMDXComponent=!0}}]);