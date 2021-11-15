"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3732],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13314:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return k}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(36038),l=["components"],p={id:"useCheckboxGroup",title:"useCheckboxGroup"},s=void 0,d={unversionedId:"api-references/hooks/field/useCheckboxGroup",id:"version-2.xx.xx/api-references/hooks/field/useCheckboxGroup",isDocsHomePage:!1,title:"useCheckboxGroup",description:"useCheckboxGroup hook allows you to manage an Ant Design Checkbox.Group component when records in a resource needs to be used as checkbox options.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/field/useCheckboxGroup.md",sourceDirName:"api-references/hooks/field",slug:"/api-references/hooks/field/useCheckboxGroup",permalink:"/docs/api-references/hooks/field/useCheckboxGroup",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/field/useCheckboxGroup.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useCheckboxGroup",title:"useCheckboxGroup"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useEditableTable",permalink:"/docs/api-references/hooks/table/useEditableTable"},next:{title:"useSelect",permalink:"/docs/api-references/hooks/field/useSelect"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Options",id:"options",children:[{value:"<code>resource</code>",id:"resource",children:[],level:3},{value:"<code>optionLabel</code> and <code>optionValue</code>",id:"optionlabel-and-optionvalue",children:[],level:3},{value:"<code>filters</code>",id:"filters",children:[],level:3},{value:"<code>sort</code>",id:"sort",children:[],level:3},{value:"<code>queryOptions</code>",id:"queryoptions",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],c={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCheckboxGroup")," hook allows you to manage an Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/checkbox/#components-checkbox-demo-group"},"Checkbox.Group")," component when records in a resource needs to be used as checkbox options."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We will demonstrate how to get data at the ",(0,o.kt)("inlineCode",{parentName:"p"},"/tags")," endpoint from the ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/tags"',title:'"https://api.fake-rest.refine.dev/tags"'},'{\n    [\n        {\n            id: 1,\n            title: "Driver Deposit",\n        },\n        {\n            id: 2,\n            title: "Index Compatible Synergistic",\n        },\n        {\n            id: 3,\n            title: "Plum",\n        },\n    ];\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { Form, Checkbox, useCheckboxGroup } from "@pankod/refine";\n\nexport const PostCreate: React.FC = () => {\n    // highlight-start\n    const { checkboxGroupProps } = useCheckboxGroup<ITag>({\n        resource: "tags",\n    });\n    // highlight-end\n\n    return (\n        <Form>\n            <Form.Item label="Tags" name="tags">\n                // highlight-next-line\n                <Checkbox.Group {...checkboxGroupProps} />\n            </Form.Item>\n        </Form>\n    );\n};\n\ninterface ITag {\n    id: string;\n    title: string;\n}\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"All we have to do is pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"checkboxGroupProps")," it returns to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Checkbox.Group>")," component.\n",(0,o.kt)("inlineCode",{parentName:"p"},"useCheckboxGroup")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"useList")," hook for fetching data. ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/data/useList"},"Refer to ",(0,o.kt)("inlineCode",{parentName:"a"},"useList")," hook for details. ","\u2192")),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"Tags"})),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n});\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resource")," property determines which? API resource endpoint to fetch records from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/providers/data-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," values for checkboxes."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/checkbox"},"Refer to Ant Design Checkbox.Group component documentation for detailed info for ",(0,o.kt)("inlineCode",{parentName:"a"},"options"),". ","\u2192")),(0,o.kt)("h3",{id:"optionlabel-and-optionvalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"optionLabel")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"optionValue")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    optionLabel: "title",\n    optionValue: "id",\n    // highlight-end\n});\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"optionValue")," allows you to change the values and appearances of your options. Default values are ",(0,o.kt)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,o.kt)("h3",{id:"filters"},(0,o.kt)("inlineCode",{parentName:"h3"},"filters")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    filters: [\n        {\n            field: "title",\n            operator: "eq",\n            value: "Driver Deposit",\n        },\n    ],\n    // highlight-end\n});\n')),(0,o.kt)("p",null,"It allows us to add some filters while fetching the data. For example, if you want to list only the ",(0,o.kt)("inlineCode",{parentName:"p"},"titles")," that are equal to ",(0,o.kt)("inlineCode",{parentName:"p"},'"Driver Deposit"')," records."),(0,o.kt)("h3",{id:"sort"},(0,o.kt)("inlineCode",{parentName:"h3"},"sort")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    sort: [\n        {\n            field: "title",\n            order: "asc",\n        },\n    ],\n    // highlight-end\n});\n')),(0,o.kt)("p",null,"It allows us to sort the ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," by ascending."),(0,o.kt)("h3",{id:"queryoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    queryOptions: {\n        onError: () => {\n            console.log("triggers when on query return Error");\n        },\n    },\n    // highlight-end\n});\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options can be set by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("div",{className:"required-block"},(0,o.kt)("div",null,"resource")," ",(0,o.kt)("div",{className:" required"},"Required"))),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"optionValue"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the option's value"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"id"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"optionLabel"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the option's label value"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"title"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"filters"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds filters while fetching the data"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#crudfilters"},(0,o.kt)("inlineCode",{parentName:"a"},"CrudFilters"))),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sort"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows us to sort the options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#crudsorting"},(0,o.kt)("inlineCode",{parentName:"a"},"CrudSorting"))),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,o.kt)("td",{parentName:"tr",align:null},"react-query ",(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<GetListResponse<TData>, TError>")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metaData"),(0,o.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,o.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#metadataquery"},(0,o.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,o.kt)("td",{parentName:"tr",align:null},"{}")))),(0,o.kt)("h3",{id:"return-values"},"Return values"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"checkboxGroupProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Ant design checkbox group properties"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/checkbox/#Checkbox-Group"},(0,o.kt)("inlineCode",{parentName:"a"},"Checkbox Group")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,o.kt)("td",{parentName:"tr",align:null},"Results of the query of a record"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))))),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-checkbox-group-example-pwvjg?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-checkbox-group-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}k.isMDXComponent=!0},36038:function(e,t){t.Z="data:image/png;base64,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"}}]);