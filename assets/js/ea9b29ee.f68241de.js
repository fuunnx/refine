"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2530],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45637:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(93855),s=["components"],l={id:"tag",title:"Tag"},c=void 0,p={unversionedId:"api-references/components/fields/tag",id:"version-2.xx.xx/api-references/components/fields/tag",isDocsHomePage:!1,title:"Tag",description:"This field lets you display a value in a tag. It uses Ant Design's `` component.",source:"@site/versioned_docs/version-2.xx.xx/api-references/components/fields/tag.md",sourceDirName:"api-references/components/fields",slug:"/api-references/components/fields/tag",permalink:"/docs/api-references/components/fields/tag",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/fields/tag.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"tag",title:"Tag"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Markdown",permalink:"/docs/api-references/components/fields/markdown"},next:{title:"Text",permalink:"/docs/api-references/components/fields/text"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3}],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This field lets you display a value in a tag. It uses Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/tag/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Tag>"))," component."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's see how we can use it in a basic list page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import {\n    List,\n    // highlight-next-line\n    TagField,\n    Table,\n    useTable,\n    IResourceComponentsProps,\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="title" title="title" />\n                <Table.Column\n                    dataIndex="status"\n                    title="status"\n                    // highlight-next-line\n                    render={(value: string) => <TagField value={value} />}\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"TagField"})),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"value"),(0,o.kt)("td",{parentName:"tr",align:null},"Tag content"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.ReactNode"))))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/tag/#API"},"Refer to the documentation for rest of Link props ","\u2192")))}f.isMDXComponent=!0},93855:function(e,t,n){t.Z=n.p+"assets/images/tagField-ebd525fe87ce871c544f5029a6bace5b.png"}}]);