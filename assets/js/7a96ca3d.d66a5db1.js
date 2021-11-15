"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8835],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33337:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(84625),p=n(95153),s=["components"],l={id:"overview",title:"Overview"},c=void 0,u={unversionedId:"getting-started/overview",id:"getting-started/overview",isDocsHomePage:!1,title:"Overview",description:"What is refine?",source:"@site/docs/getting-started/overview.md",sourceDirName:"getting-started",slug:"/getting-started/overview",permalink:"/docs/next/getting-started/overview",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/getting-started/overview.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"overview",title:"Overview"},sidebar:"someSidebar",next:{title:"Tutorial",permalink:"/docs/next/"}},d=[{value:"What is refine?",id:"what-is-refine",children:[],level:2},{value:"Key features",id:"key-features",children:[{value:"Motivation",id:"motivation",children:[],level:3},{value:"Architecture",id:"architecture",children:[],level:3},{value:"Benchmark",id:"benchmark",children:[],level:3},{value:"Quick Start",id:"quick-start",children:[],level:3},{value:"Roadmap",id:"roadmap",children:[],level:3}],level:2},{value:"Special Thanks",id:"special-thanks",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-refine"},"What is refine?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"-based framework for building data-intensive applications in no time \u2728 It ships with ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design System"),", an enterprise-level UI toolkit."),(0,o.kt)("p",null,"Refine offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to ",(0,o.kt)("em",{parentName:"p"},"admin panels"),", ",(0,o.kt)("em",{parentName:"p"},"B2B applications")," and ",(0,o.kt)("em",{parentName:"p"},"dashboards"),"."),(0,o.kt)("h3",{id:""}),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("p",null,"\u2699\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"Zero-configuration"),": One-line setup with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate"),". It takes less than a minute to start a project."),(0,o.kt)("p",null,"\ud83d\udce6 ",(0,o.kt)("strong",{parentName:"p"},"Out-of-the-box")," : Routing, networking, authentication, state management, i18n and UI."),(0,o.kt)("p",null,"\ud83d\udd0c ",(0,o.kt)("strong",{parentName:"p"},"Backend Agnostic")," : Connects to any custom backend. Built-in support for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/simple-rest"},"REST API"),", ",(0,o.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/crud"},"NestJs CRUD"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.airtable.com/"},"Airtable"),", ",(0,o.kt)("a",{parentName:"p",href:"https://supabase.io/"},"Supabase")," and ",(0,o.kt)("a",{parentName:"p",href:"https://altogic.com/"},"Altogic"),"."),(0,o.kt)("p",null,"\ud83d\udcdd ",(0,o.kt)("strong",{parentName:"p"},"Native Typescript Core")," : You can always opt out for plain Javascript."),(0,o.kt)("p",null,"\ud83d\udd18 ",(0,o.kt)("strong",{parentName:"p"},"Decoupled UI")," : UI components are exposed directly without encapsulation. You have full control on UI elements."),(0,o.kt)("p",null,"\ud83d\udc1c ",(0,o.kt)("strong",{parentName:"p"},"Powerful Default UI")," : Works seamlessly with integrated ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design System"),". (Support for multiple UI frameworks is on the Roadmap)"),(0,o.kt)("p",null,"\ud83d\udcdd ",(0,o.kt)("strong",{parentName:"p"},"Boilerplate-free Code")," : Keeps your codebase clean and readable."),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Higher-level frontend frameworks can save you a lot time, but they typically offer you a trade-off between speed and flexibility."),(0,o.kt)("p",null,"After many years of experience in developing B2B frontend applications and working with popular frameworks, we came up with a new approach to tackle this dilemma. This is how ",(0,o.kt)("strong",{parentName:"p"},"refine")," is born."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Refine")," is a collection of helper ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"providers"),". They are all decoupled from your UI components and business logic, so they never keep you from customizing your UI or coding your own flow."),(0,o.kt)("p",null,"As ",(0,o.kt)("strong",{parentName:"p"},"refine")," is totally ",(0,o.kt)("em",{parentName:"p"},"unopinionated")," about UI and logic, it's strongly ",(0,o.kt)("em",{parentName:"p"},"opinionated")," about three parts of your application:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"API Networking")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"State Management")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Authentication & Authorization"))),(0,o.kt)("p",null,"We believe, these are the most important components of a data-intensive frontend application and should be handled in a robust way by leveraging industry best practices."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," guarantees you a perfect implementation of these building blocks in your project, so you can focus on your development."),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," makes extensive use of ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#gatsby-focus-wrapper"},"hooks")," as a default way for interacting with your components.\nUnder the hood, ",(0,o.kt)("strong",{parentName:"p"},"refine")," relies heavily to ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query")," for data handling, caching and state management.\nAccess to external sources and API's happen via providers which are basically plug-in type components for extendibility."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i.Z,width:"400px"})),(0,o.kt)("h3",{id:"benchmark"},"Benchmark"),(0,o.kt)("p",null,"After releasing the first internal versions, we had the chance to migrate some of our ",(0,o.kt)("em",{parentName:"p"},"React")," projects to ",(0,o.kt)("strong",{parentName:"p"},"refine"),".\nIn addition to ",(0,o.kt)("strong",{parentName:"p"},"shorter development")," times and ",(0,o.kt)("strong",{parentName:"p"},"overall performance gains"),", we've measured significant reduction in project size."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," makes your codebase significantly smaller, by eliminating redundant code such as ",(0,o.kt)("em",{parentName:"p"},"reducers"),", ",(0,o.kt)("em",{parentName:"p"},"actions")," and ",(0,o.kt)("em",{parentName:"p"},"unit tests"),". Below is a size comparison for an example project:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:p.Z,width:"400px"})),(0,o.kt)("h3",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("strong",{parentName:"p"},"superplate")," tool with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx superplate-cli tutorial\n")),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("em",{parentName:"p"},"CLI wizard")," to select options and start creating your project."),(0,o.kt)("p",null,"After setup is complete, navigate to the project folder and start your project with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,o.kt)("p",null,"Your ",(0,o.kt)("strong",{parentName:"p"},"refine")," application will be accessible at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"Replace the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import {\n    Refine,\n    useTable,\n    List,\n    Table,\n    useMany,\n    DateField,\n} from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine/dist/styles.min.css";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List>\n            <Table<IPost> {...tableProps} rowKey="id">\n                <Table.Column dataIndex="title" title="title" />\n                <Table.Column\n                    dataIndex={["category", "id"]}\n                    title="category"\n                    render={(value: string) => {\n                        if (isLoading) {\n                            return "loading...";\n                        }\n\n                        return data?.data.find(\n                            (item: ICategory) => item.id === value,\n                        )?.title;\n                    }}\n                />\n                <Table.Column\n                    dataIndex="createdAt"\n                    title="createdAt"\n                    render={(value) => <DateField format="LLL" value={value} />}\n                />\n            </Table>\n        </List>\n    );\n};\n\nexport default App;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="interfaces.d.ts"',title:'"interfaces.d.ts"'},"interface IPost {\n    title: string;\n    createdAt: string;\n    category: ICategory;\n}\n\ninterface ICategory {\n    id: string;\n    title: string;\n}\n")),(0,o.kt)("h3",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"\u2611\ufe0f NextJS & SSR support"),(0,o.kt)("p",null,"\u2611\ufe0f Support for more data & auth providers"),(0,o.kt)("p",null,"\u2611\ufe0f Support for more UI frameworks (MaterialUI, Chakra, Spectrum etc.)"),(0,o.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/"},"React Admin")," has been a great source of ideas and inspiration for refine. Big thanks to friends at ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com"},"Marmelab")," for the amazing work they are doing."))}f.isMDXComponent=!0},95153:function(e,t,n){t.Z=n.p+"assets/images/benchmark-86c224f2232bb9d7874bcc071612b6bf.png"},84625:function(e,t,n){t.Z=n.p+"assets/images/refine_architecture-dadc10a29ab6826404cb121fcbdcd367.png"}}]);