"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(r),g=a,d=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",slug:"react-search-bar-and-filtering",authors:"madars_biss",tags:["react","refine","search-bar","filtering"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/refine-filter-social.png",hide_table_of_contents:!1},o=void 0,c={permalink:"/blog/react-search-bar-and-filtering",source:"@site/blog/2022-08-26-react-content-filtering.md",title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"refine",permalink:"/blog/tags/refine"},{label:"search-bar",permalink:"/blog/tags/search-bar"},{label:"filtering",permalink:"/blog/tags/filtering"}],readingTime:14.51,hasTruncateMarker:!0,authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],frontMatter:{title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",slug:"react-search-bar-and-filtering",authors:"madars_biss",tags:["react","refine","search-bar","filtering"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/refine-filter-social.png",hide_table_of_contents:!1},prevItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},nextItem:{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react"},relatedPosts:[{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.64,date:"2022-07-21T00:00:00.000Z"},{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.88,date:"2022-10-04T00:00:00.000Z"},{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect",formattedDate:"September 19, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:5.285,date:"2022-09-19T00:00:00.000Z"}],authorPosts:[{title:"refine vs RedwoodJS",permalink:"/blog/refine-vs-redwood-js",formattedDate:"January 23, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:26.435,date:"2023-01-23T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2}],m={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Filtering systems are common for most modern web applications. They are especially useful if there are large amounts of data. They allow users to save time and easily access the information they are looking for."))}p.isMDXComponent=!0}}]);