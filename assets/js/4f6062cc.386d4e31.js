"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4017],{58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},26396:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),o=r(67294),a=r(72389),i=r(79443);var s=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=r(89521),l=r(86010),d="tabItem_vU9c";function p(e){var t,r,n,a=e.lazy,i=e.block,p=e.defaultValue,c=e.values,m=e.groupId,f=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=k.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=k[0])?void 0:n.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=s(),b=x.tabGroupChoices,y=x.setTabGroupChoices,N=(0,o.useState)(g),C=N[0],w=N[1],P=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=b[m];null!=j&&j!==C&&v.some((function(e){return e.value===j}))&&w(j)}var R=function(e){var t=e.currentTarget,r=P.indexOf(t),n=v[r].value;n!==C&&(T(t),w(n),null!=m&&y(m,n))},A=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;r=P[n]||P[0];break;case"ArrowLeft":var o=P.indexOf(e.currentTarget)-1;r=P[o]||P[P.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},v.map((function(e){var t=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,l.Z)("tabs__item",d,{"tabs__item--active":C===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:A,onFocus:R,onClick:R},null!=r?r:t)}))),a?(0,o.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,a.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},82924:function(e,t,r){var n=r(67294).createContext(void 0);t.Z=n},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},85350:function(e,t,r){var n=r(67294),o=r(82924);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},84057:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},Packages:function(){return f},default:function(){return v}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(26396),s=r(58215),u=r(42628),l=["components"],d={id:"migration-guide",title:"Migration Guide"},p=void 0,c={unversionedId:"migration-guide",id:"version-2.xx.xx/migration-guide",isDocsHomePage:!1,title:"Migration Guide",description:"1.0.XX to 2.0.XX",source:"@site/versioned_docs/version-2.xx.xx/migration-guide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/docs/migration-guide",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/migration-guide.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Umut \xd6zdemir",lastUpdatedAt:1636633212,formattedLastUpdatedAt:"11/11/2021",frontMatter:{id:"migration-guide",title:"Migration Guide"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Javascript",permalink:"/docs/examples/javascript"},next:{title:"Testing",permalink:"/docs/testing"}},m=[{value:"1.0.XX to 2.0.XX",id:"10xx-to-20xx",children:[{value:"Motivation behind breaking changes",id:"motivation-behind-breaking-changes",children:[{value:"<code>resources</code>",id:"resources",children:[],level:4},{value:"<code>routerProvider</code>",id:"routerprovider",children:[],level:4},{value:"Custom Pages",id:"custom-pages",children:[],level:4}],level:3}],level:2},{value:"\ud83e\ude84 Migrating your project automatically with refine-codemod \u2728 (recommended)",id:"-migrating-your-project-automatically-with-refine-codemod--recommended",children:[],level:2},{value:"Migrating your project manually",id:"migrating-your-project-manually",children:[{value:"Updating the packages",id:"updating-the-packages",children:[],level:3},{value:"<code>&lt;Resource/&gt;</code> to <code>resources</code>",id:"resource-to-resources",children:[],level:3},{value:"<code>routerProvider</code>",id:"routerprovider-1",children:[],level:3},{value:"<code>Link</code> component",id:"link-component",children:[],level:3},{value:"Custom Pages",id:"custom-pages-1",children:[],level:3}],level:2}],f=function(){var e=["@pankod/refine","@pankod/refine-airtable","@pankod/refine-altogic","@pankod/refine-graphql","@pankod/refine-hasura","@pankod/refine-nestjsx-crud","@pankod/refine-nextjs-router","@pankod/refine-react-router","@pankod/refine-simple-rest","@pankod/refine-strapi","@pankod/refine-strapi-graphql","@pankod/refine-supabase"];return(0,a.kt)(i.Z,{defaultValue:"@pankod/refine",values:e.map((function(e){return{label:e,value:e}})),mdxType:"Tabs"},e.map((function(e){return(0,a.kt)(s.Z,{value:e,mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"npm i "+e+"@latest"))})))},k={toc:m,Packages:f};function v(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"10xx-to-20xx"},"1.0.XX to 2.0.XX"),(0,a.kt)("h3",{id:"motivation-behind-breaking-changes"},"Motivation behind breaking changes"),(0,a.kt)("h4",{id:"resources"},(0,a.kt)("inlineCode",{parentName:"h4"},"resources")),(0,a.kt)("p",null,"Making ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property-based instead of component-based was necessary for Nextjs support. A property is also more flexible, dynamic and easier to configure compared to a component."),(0,a.kt)("h4",{id:"routerprovider"},(0,a.kt)("inlineCode",{parentName:"h4"},"routerProvider")),(0,a.kt)("p",null,"Router layer is abstracted from the core for mainly Nextjs support. This also creates the opportunity for any other router solution to be used."),(0,a.kt)("h4",{id:"custom-pages"},"Custom Pages"),(0,a.kt)("p",null,"This is also related to abstracting away the router layer from core. Differences between (currently two) router provider are so big that adding a layer to cover both cases (possibly more in the future) is much harder to implement and maintain compared to letting everyone handle it with their own conventions. This also has the huge benefit of allowing maximum configurability for every respective provider."),(0,a.kt)("h2",{id:"-migrating-your-project-automatically-with-refine-codemod--recommended"},"\ud83e\ude84 Migrating your project automatically with refine-codemod \u2728 (recommended)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/codemod"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-codemod"))," package handles the breaking changes for your project automatically, without any manual steps. It migrates your project from ",(0,a.kt)("inlineCode",{parentName:"p"},"1.x.x")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"2.x.x"),"."),(0,a.kt)("p",null,"Just ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into root folder of your project (where ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," is contained) and run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx @pankod/refine-codemod refine1-to-refine2\n")),(0,a.kt)("p",null,"And it's done. Now your project uses ",(0,a.kt)("inlineCode",{parentName:"p"},"refine@2.x.x"),"."),(0,a.kt)("h2",{id:"migrating-your-project-manually"},"Migrating your project manually"),(0,a.kt)("h3",{id:"updating-the-packages"},"Updating the packages"),(0,a.kt)("p",null,"Packages used by your app must be updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"^2.xx.xx")),(0,a.kt)(f,{mdxType:"Packages"}),(0,a.kt)("h3",{id:"resource-to-resources"},(0,a.kt)("inlineCode",{parentName:"h3"},"<Resource/>")," to ",(0,a.kt)("inlineCode",{parentName:"h3"},"resources")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Resource/>")," is deprecated. Resources must be passed to ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-references/components/refine-config#resources"},(0,a.kt)("inlineCode",{parentName:"a"},"resources"))," prop instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-json-server";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n// highlight-start\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n')),(0,a.kt)("h3",{id:"routerprovider-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"routerProvider")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-references/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine/>"))," now requires a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-references/providers/router-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"routerProvider")),". You can use packages ",(0,a.kt)("strong",{parentName:"p"},"@pankod/refine-react-router")," or ",(0,a.kt)("strong",{parentName:"p"},"@pankod/refine-nextjs-router")," provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)(i.Z,{defaultValue:"react",values:[{label:"react-router",value:"react"},{label:"nextjs-router",value:"nextjs"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\n\nconst App: React.FC = () => {\n    return <Refine routerProvider={routerProvider} />;\n};\n'))),(0,a.kt)(s.Z,{value:"nextjs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-nextjs-router";\n\nconst App: React.FC = () => {\n    return <Refine routerProvider={routerProvider} />;\n};\n')))),(0,a.kt)("h3",{id:"link-component"},(0,a.kt)("inlineCode",{parentName:"h3"},"Link")," component"),(0,a.kt)("p",null,"If you imported ",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine"),", now you have to switch to ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-router")," package to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," component. Like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Old\n// import { ..., Link } from "@pankod/refine";\n\n// Now\nimport routerProvider from "@pankod/refine-react-router";\n\nconst { Link } = routerProvider;\n')),(0,a.kt)("h3",{id:"custom-pages-1"},"Custom Pages"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"routes")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," is deprecated. Custom routes must be handled by the router provider you choose. ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/custom-pages"},"Refer to Custom Pages documentation for a detailed guide")))}v.isMDXComponent=!0}}]);