"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[398],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99448:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={id:"useResourceWithRoute",title:"useResourceWithRoute"},s=void 0,c={unversionedId:"api-references/hooks/resource/useResourceWithRoute",id:"version-1.0.xx/api-references/hooks/resource/useResourceWithRoute",isDocsHomePage:!1,title:"useResourceWithRoute",description:"useResourceWithRoute is used to get the properties of a ` defined as a child of the  component. It returns a function and this function allows us to access the resource with the route option we gave to `.",source:"@site/versioned_docs/version-1.0.xx/api-references/hooks/resource/useResourceWithRoute.md",sourceDirName:"api-references/hooks/resource",slug:"/api-references/hooks/resource/useResourceWithRoute",permalink:"/docs/1.0.xx/api-references/hooks/resource/useResourceWithRoute",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/api-references/hooks/resource/useResourceWithRoute.md",tags:[],version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useResourceWithRoute",title:"useResourceWithRoute"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"useResource",permalink:"/docs/1.0.xx/api-references/hooks/resource/useResource"},next:{title:"useNavigation",permalink:"/docs/1.0.xx/api-references/hooks/navigation/useNavigation"}},l=[{value:"API Reference",id:"api-reference",children:[{value:"Return value",id:"return-value",children:[{value:"Interfaces",id:"interfaces",children:[],level:4}],level:3}],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useResourceWithRoute")," is used to get the properties of a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Resource>")," defined as a child of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component. It returns a function and this function allows us to access the resource with the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," option we gave to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Resource>"),"."),(0,a.kt)("p",null,"The hook is used internal in ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Normally you don't need this hook, but we export it as it may be useful for some use-cases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResourceWithRoute } from "@pankod/refine";\n\nconst resourceWithRoute = useResourceWithRoute();\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceWithRoute"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(route: string) => IResourceItem"))))),(0,a.kt)("h4",{id:"interfaces"},"Interfaces"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceItem {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"canShow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Resource>")," components properties in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," components children.")))}d.isMDXComponent=!0}}]);