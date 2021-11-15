"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7329],{3905:function(A,e,t){t.d(e,{Zo:function(){return d},kt:function(){return f}});var n=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var l=n.createContext({}),p=function(A){var e=n.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},d=function(A){var e=p(A.components);return n.createElement(l.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,l=A.parentName,d=i(A,["components","mdxType","originalType","parentName"]),s=p(t),f=r,g=s["".concat(l,".").concat(f)]||s[f]||u[f]||a;return t?n.createElement(g,o(o({ref:e},d),{},{components:t})):n.createElement(g,o({ref:e},d))}));function f(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,o=new Array(a);o[0]=s;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=A,i.mdxType="string"==typeof A?A:r,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},94243:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return f}});var n=t(87462),r=t(63366),a=(t(67294),t(3905)),o=t(20002),i=["components"],l={id:"useRadioGroup",title:"useRadioGroup"},p=void 0,d={unversionedId:"api-references/hooks/field/useRadioGroup",id:"api-references/hooks/field/useRadioGroup",isDocsHomePage:!1,title:"useRadioGroup",description:"useRadioGroup hook allows you to manage an Ant Design Radio.Group component when records in a resource needs to be used as radio options.",source:"@site/docs/api-references/hooks/field/useRadioGroup.md",sourceDirName:"api-references/hooks/field",slug:"/api-references/hooks/field/useRadioGroup",permalink:"/docs/next/api-references/hooks/field/useRadioGroup",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/hooks/field/useRadioGroup.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useRadioGroup",title:"useRadioGroup"},sidebar:"someSidebar",previous:{title:"useSelect",permalink:"/docs/next/api-references/hooks/field/useSelect"},next:{title:"useTitle",permalink:"/docs/next/api-references/hooks/refine/useTitle"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Options",id:"options",children:[{value:"<code>resource</code>",id:"resource",children:[],level:3},{value:"<code>optionLabel</code> and <code>optionValue</code>",id:"optionlabel-and-optionvalue",children:[],level:3},{value:"<code>filters</code>",id:"filters",children:[],level:3},{value:"<code>sort</code>",id:"sort",children:[],level:3},{value:"<code>queryOptions</code>",id:"queryoptions",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],s={toc:u};function f(A){var e=A.components,t=(0,r.Z)(A,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useRadioGroup")," hook allows you to manage an Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/radio/#components-radio-demo-radiogroup-with-name"},"Radio.Group")," component when records in a resource needs to be used as radio options."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We will demonstrate how to get data at ",(0,a.kt)("inlineCode",{parentName:"p"},"/languages")," endpoint from the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/languages"',title:'"https://api.fake-rest.refine.dev/languages"'},'{\n    [\n        {\n            id: 1,\n            title: "Turkish",\n        },\n        {\n            id: 2,\n            title: "English",\n        },\n        {\n            id: 3,\n            title: "German",\n        },\n    ];\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { Form, Radio, useRadioGroup } from "@pankod/refine";\n\nexport const PostCreate = () => {\n    // highlight-start\n    const { radioGroupProps } = useRadioGroup<ILanguage>({\n        resource: "languages",\n    });\n    // highlight-end\n\n    return (\n        <Form>\n            <Form.Item label="Languages" name="languages">\n                // highlight-next-line\n                <Radio.Group {...radioGroupProps} />\n            </Form.Item>\n        </Form>\n    );\n};\n\ninterface ILanguage {\n    id: string;\n    title: string;\n}\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o.Z,alt:"Radio group"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"All we have to do is pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"radioGroupProps")," it returns to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Radio.Group>")," component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useRadioGroup")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook for fetching data. ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api-references/hooks/data/useList"},"Refer to Ant Design ",(0,a.kt)("inlineCode",{parentName:"a"},"useList")," hook for details. ","\u2192")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n    resource: "languages",\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resource")," property determines API resource endpoint to fetch records from ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api-references/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," values for radio buttons."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/radio"},"Refer to the Ant Design's ",(0,a.kt)("inlineCode",{parentName:"a"},"Radio.Group")," component documentation for detailed info on ",(0,a.kt)("inlineCode",{parentName:"a"},"options"),". ","\u2192")),(0,a.kt)("h3",{id:"optionlabel-and-optionvalue"},(0,a.kt)("inlineCode",{parentName:"h3"},"optionLabel")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"optionValue")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n    resource: "languages",\n    // highlight-start\n    optionLabel: "title",\n    optionValue: "id",\n    // highlight-end\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"optionValue")," allows you to change the values and appearances of your options. Default values are ",(0,a.kt)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,a.kt)("h3",{id:"filters"},(0,a.kt)("inlineCode",{parentName:"h3"},"filters")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n    resource: "languages",\n// highlight-start\n    filters: [\n        {\n            field: "title",\n            operator: "eq",\n            value: "German",\n        },\n    ],\n// highlight-end\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"filters")," allows us to add filters while fetching the data. For example, if you want to list only the ",(0,a.kt)("inlineCode",{parentName:"p"},"titles")," that are equal to ",(0,a.kt)("inlineCode",{parentName:"p"},'"German"')," records."),(0,a.kt)("h3",{id:"sort"},(0,a.kt)("inlineCode",{parentName:"h3"},"sort")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n    resource: "languages",\n// highlight-start\n    sort: [\n        {\n            field: "title",\n            order: "asc",\n        },\n    ],\n// highlight-end\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sort")," allows us to sort the ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," by ascending."),(0,a.kt)("h3",{id:"queryoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n    resource: "languages",\n// highlight-start\n    queryOptions: {\n        onError: () => {\n            console.log("triggers when on query return Error");\n        },\n    },\n// highlight-end\n});\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options can be set by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"required-block"},(0,a.kt)("div",null,"resource")," ",(0,a.kt)("div",{className:" required"},"Required"))),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"optionValue"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the option's value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"id"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"optionLabel"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the option's label value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"title"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filters"),(0,a.kt)("td",{parentName:"tr",align:null},"Adds filters while fetching the data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#crudfilters"},(0,a.kt)("inlineCode",{parentName:"a"},"CrudFilters"))),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows us to sort the options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#crudsorting"},(0,a.kt)("inlineCode",{parentName:"a"},"CrudSorting"))),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,a.kt)("td",{parentName:"tr",align:null},"react-query ",(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<GetListResponse<TData>, TError>")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metaData"),(0,a.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,a.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#metadataquery"},(0,a.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,a.kt)("td",{parentName:"tr",align:null},"{}")))),(0,a.kt)("h3",{id:"return-values"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"radioGroupProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant design radio group props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/radio/#RadioGroup"},(0,a.kt)("inlineCode",{parentName:"a"},"Radio Group")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,a.kt)("td",{parentName:"tr",align:null},"Results of the query of a record"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))))),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-radio-group-example-3wtb3?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-radio-group-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}f.isMDXComponent=!0},20002:function(A,e){e.Z="data:image/png;base64,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"}}]);