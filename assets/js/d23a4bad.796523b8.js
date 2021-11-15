"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2414],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"useNavigation",title:"useNavigation"},s=void 0,p={unversionedId:"api-references/hooks/navigation/useNavigation",id:"version-1.0.xx/api-references/hooks/navigation/useNavigation",isDocsHomePage:!1,title:"useNavigation",description:"refine uses React Router and comes with all redirects out of the box. It allows you to manage your routing operations in refine. Using this hook, you can manage all the routing operations of your application very easily.",source:"@site/versioned_docs/version-1.0.xx/api-references/hooks/navigation/useNavigation.md",sourceDirName:"api-references/hooks/navigation",slug:"/api-references/hooks/navigation/useNavigation",permalink:"/docs/1.0.xx/api-references/hooks/navigation/useNavigation",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/api-references/hooks/navigation/useNavigation.md",tags:[],version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useNavigation",title:"useNavigation"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"useResourceWithRoute",permalink:"/docs/1.0.xx/api-references/hooks/resource/useResourceWithRoute"},next:{title:"useImport",permalink:"/docs/1.0.xx/api-references/hooks/import-export/useImport"}},d=[{value:"Usage",id:"usage",children:[],level:3},{value:"List",id:"list",children:[{value:"Create",id:"create",children:[],level:3},{value:"Edit",id:"edit",children:[],level:3},{value:"Show",id:"show",children:[],level:3},{value:"Clone",id:"clone",children:[],level:3},{value:"Push, Replace and GoBack",id:"push-replace-and-goback",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return values",id:"return-values",children:[{value:"Interface",id:"interface",children:[],level:4}],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," uses ",(0,o.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/api/Hooks"},(0,o.kt)("inlineCode",{parentName:"a"},"React Router"))," and comes with all redirects out of the box. It allows you to manage your routing operations in refine. Using this hook, you can manage all the routing operations of your application very easily."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine";\n\nconst { create, edit, clone, show, list, push, replace, goBack } = useNavigation();\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"useNavigation")," uses React Router's ",(0,o.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/api/Hooks/usehistory"},"useHistory")," hook."))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We will make a button for each method to use."),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("p",null,"Let's imagine that we have a post list and we want to be redirected to this page. To do this we will use the list hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3, 7, 12}","{3,":!0,"7,":!0,"12}":!0},'import {\n    Button,\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyListButton = () => {\n    const { list } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n                list("posts")\n            }\n        >\n            Navigate to Post List Page\n        </Button>\n    );\n};\n')),(0,o.kt)("h3",{id:"create"},"Create"),(0,o.kt)("p",null,"If we want to go to the post creation page to create a new post, we can use the create hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3, 7, 12}","{3,":!0,"7,":!0,"12}":!0},'import {\n    Button,\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyCreateButton = () => {\n    const { create } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n                create("posts")\n            }\n        >\n            Navigate to Create Page\n        </Button>\n    );\n};\n')),(0,o.kt)("h3",{id:"edit"},"Edit"),(0,o.kt)("p",null,"Let's see what we should do if we want to go to the editing page of one of our posts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3, 7, 12}","{3,":!0,"7,":!0,"12}":!0},'import {\n    Button,\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyEditButton = () => {\n    const { edit } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n                edit("posts", "1")\n            }\n        >\n            Navigate to Edit Page\n        </Button>\n    );\n};\n')),(0,o.kt)("p",null,"We used the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," to navigate to the post edit page, but you can see the differences in using it. ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," requires the id property from us and clicking the button will trigger the edit method of useNavigation and then redirect the app to ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/edit/1")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Attention")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is something we should pay attention to here. We need to give the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of which post we want to edit."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also give a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," property to the methods. You can look here to see the ",(0,o.kt)("a",{parentName:"p",href:"#properties"},"properties.")))),(0,o.kt)("h3",{id:"show"},"Show"),(0,o.kt)("p",null,"If you want to show the detail of your posts you can use show and you need ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," for show."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3, 7, 12}","{3,":!0,"7,":!0,"12}":!0},'import {\n    Button,\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyShowButton = () => {\n    const { show } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n                show("posts", "1")\n            }\n        >\n            Navigate to Show Page\n        </Button>\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Attention")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is something we should pay attention to here. We need to give the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of which post we want to show."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to return to previous page. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," hook."))),(0,o.kt)("h3",{id:"clone"},"Clone"),(0,o.kt)("p",null,"If we have the resources to clone a post and we want to go to this page, we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"clone")," with a record id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3, 7, 12}","{3,":!0,"7,":!0,"12}":!0},'import {\n    Button,\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyCloneButton = () => {\n    const { clone } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n                clone("posts", "1")\n            }\n        >\n            Navigate to Clone Page\n        </Button>\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Attention")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is something we should pay attention to here. We need to give the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of which post we want to clone."))),(0,o.kt)("h3",{id:"push-replace-and-goback"},"Push, Replace and GoBack"),(0,o.kt)("p",null,"If we do not want to use the above methods and want to redirect ourselves, we should use ",(0,o.kt)("inlineCode",{parentName:"p"},"push")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"replace")," methods and also we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack")," to return to previous page. You can check out the differences between them ",(0,o.kt)("a",{parentName:"p",href:"#return-values"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3, 7, 13, 20, 27}","{3,":!0,"7,":!0,"13,":!0,"20,":!0,"27}":!0},'import {\n    Button,\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyHistoryButtons = () => {\n    const { push, replace, goBack } = useNavigation();\n\n    return (\n        <>\n            <Button\n                onClick={(): void =>\n                    push("posts")\n                }\n            >\n                Push to posts Page\n            </Button>\n            <Button\n                onClick={(): void =>\n                    replace("posts")\n                }\n            >\n                Replaces to posts Page\n            </Button>\n            <Button\n                onClick={(): void =>\n                    goBack()\n                }\n            >\n                Go back to previous Page\n            </Button>\n        </>\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resource ",(0,o.kt)("div",{className:"required"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"Redirect the app to the given resource name"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"It is React Router history types"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"push"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to append to the end of the path"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"return-values"},"Return values"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"create"),(0,o.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"td"},"create page")," of your resource"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,o.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,o.kt)("inlineCode",{parentName:"td"},") => void "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"list"),(0,o.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"td"},"list page")," of your resource"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,o.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,o.kt)("inlineCode",{parentName:"td"},") => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"edit"),(0,o.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"td"},"edit page")," of your resource"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,o.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,o.kt)("inlineCode",{parentName:"td"},", id: string) => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"clone"),(0,o.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"td"},"clone page")," of your resource"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,o.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,o.kt)("inlineCode",{parentName:"td"},", id: string) => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"show"),(0,o.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"td"},"show page")," of your resource"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,o.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,o.kt)("inlineCode",{parentName:"td"},", id: string) => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"push"),(0,o.kt)("td",{parentName:"tr",align:null},"Pushes a new entry onto the history stack"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(path: string, state?: unknown ) => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"replace"),(0,o.kt)("td",{parentName:"tr",align:null},"Replaces the current entry on the history stack"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(path: string, state?: unknown ) => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"goBack"),(0,o.kt)("td",{parentName:"tr",align:null},"Equivalent to go previous stack"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,o.kt)("h4",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="History Type"',title:'"History','Type"':!0},'export type HistoryType = "push" | "replace";\n')))}c.isMDXComponent=!0}}]);