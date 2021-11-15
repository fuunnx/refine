"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6513],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85701:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],u={id:"useLogout",title:"useLogout",siderbar_label:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication."},s=void 0,l={unversionedId:"api-references/hooks/auth/useLogout",id:"version-2.xx.xx/api-references/hooks/auth/useLogout",isDocsHomePage:!1,title:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/auth/useLogout.md",sourceDirName:"api-references/hooks/auth",slug:"/api-references/hooks/auth/useLogout",permalink:"/docs/api-references/hooks/auth/useLogout",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/auth/useLogout.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useLogout",title:"useLogout",siderbar_label:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication."},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useLogin",permalink:"/docs/api-references/hooks/auth/useLogin"},next:{title:"useCheckError",permalink:"/docs/api-references/hooks/auth/useCheckError"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Redirection after logout",id:"redirection-after-logout",children:[],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-references/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood.",(0,a.kt)("br",{parentName:"p"}),"\n","It unauthenticates the app if the ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects, it keeps authentication state the same."),(0,a.kt)("p",null,"It returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},(0,a.kt)("inlineCode",{parentName:"a"},"useMutation")),".\nData that is resolved from the ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," will be returned as the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"By default, Refine already provides a logout button on the sider and if you want to use this default button you won't need to handle the logout flow manually.\nIf you want to build a custom logout button instead of the default one, ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," can be used like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/customLogoutButton"',title:'"components/customLogoutButton"'},'import { useLogout, Button } from "@pankod/refine";\n\nexport const LogoutButton = () => {\n    const { mutate: logout } = useLogout();\n\n    return (\n        <Button onClick={() => logout()}>\n            Logout\n        </Button>\n    )\n}\n')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"redirection-after-logout"},"Redirection after logout"),(0,a.kt)("p",null,"We have 4 options to manage the redirection after logout process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If promise returned from logout is resolved with nothing, app will be redirected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," route by default. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A custom url can be given to mutate function from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," hook if you want to redirect yourself to a certain url."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogout } from "@pankod/refine";\n\nconst {\xa0mutate: logout } = useLogout();\n\nlogout({ redirectPath:"/custom-url" });\n')),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A custom url can be resolved from the promise returned from the ",(0,a.kt)("inlineCode",{parentName:"li"},"logout")," method of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-references/providers/auth-provider"},"authProvider"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    logout: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If promise returned from the ",(0,a.kt)("inlineCode",{parentName:"li"},"logout")," method of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-references/providers/auth-provider"},"authProvider")," gets resolved with ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    logout: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Custom url given to mutate function from ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," overrides the one on the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),"."))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," can accept any kind of object for values since the ",(0,a.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters."))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This hook can only be used if the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}c.isMDXComponent=!0}}]);