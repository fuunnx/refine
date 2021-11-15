"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7157],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36877:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(97803),s=n(38498),p=["components"],d={id:"custom-pages",title:"Custom Pages"},l=void 0,c={unversionedId:"guides-and-concepts/custom-pages",id:"version-2.xx.xx/guides-and-concepts/custom-pages",isDocsHomePage:!1,title:"Custom Pages",description:"This document is related to how to create custom pages for react applications. Since Nextjs has a file system based router built on the page concept, you can create your custom pages under the pages folder.",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/custom-pages.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/custom-pages",permalink:"/docs/guides-and-concepts/custom-pages",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/custom-pages.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"custom-pages",title:"Custom Pages"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Custom Layout",permalink:"/docs/guides-and-concepts/custom-layout"},next:{title:"Theme",permalink:"/docs/guides-and-concepts/theme"}},u=[{value:"Public Custom Pages",id:"public-custom-pages",children:[],level:2},{value:"Authenticated Custom Pages",id:"authenticated-custom-pages",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],m={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This document is related to how to create custom pages for ",(0,r.kt)("strong",{parentName:"p"},"react")," applications. Since ",(0,r.kt)("strong",{parentName:"p"},"Nextjs")," has a file system based router built on the page concept, you can create your custom pages under the ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," folder."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/ssr-nextjs"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Nextjs Guide")," documentation for detailed information. ","\u2192")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," allows us to add custom pages to our application. To do this, it is necessary to create an object array with ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/api/Route"},"react-router-dom")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<Route>")," properties. Then, pass this array as ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," property."),(0,r.kt)("h2",{id:"public-custom-pages"},"Public Custom Pages"),(0,r.kt)("p",null,"Allows creating custom pages that everyone can access via path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        exact: true,\n                        component: CustomPage,\n                        path: "/custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"Everyone can access this page via ",(0,r.kt)("inlineCode",{parentName:"p"},"/custom-page")," path."),(0,r.kt)("h2",{id:"authenticated-custom-pages"},"Authenticated Custom Pages"),(0,r.kt)("p",null,"Allows creating custom pages that only authenticated users can access via path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// highlight-start\nimport { Refine, Authenticated, AuthProvider } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\n// highlight-end\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\n// highlight-start\nconst authProvider: AuthProvider = {\n    login: (params: any) => {\n        if (params.username === "admin") {\n            localStorage.setItem("username", params.username);\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    logout: () => {\n        localStorage.removeItem("username");\n        return Promise.resolve();\n    },\n    checkError: () => Promise.resolve(),\n    checkAuth: () =>\n        localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),\n    getPermissions: () => Promise.resolve(["admin"]),\n};\n// highlight-end\n\n// highlight-start\nconst AuthenticatedCustomPage = () => {\n    return (\n        <Authenticated>\n            <CustomPage />\n        </Authenticated>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        exact: true,\n                        component: AuthenticatedCustomPage,\n                        path: "/custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"Only authenticated users can access this page via ",(0,r.kt)("inlineCode",{parentName:"p"},"/custom-page")," path."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"attention")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For authenticated custom page, your application needs an ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-references/providers/auth-provider"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"authProvider")," for more detailed information. ","\u2192")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, custom pages don't have any layout. If you want to show your custom page in a layout, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," component."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-references/components/layout-wrapper"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," for more detailed information. ","\u2192")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,'Let\'s make a custom page for posts. On this page, the editor can approve or reject the posts with the "draft" status.'),(0,r.kt)("p",null,"Before starting the example, let's assume that our ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-references/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," has an endpoint that returns posts as following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'{\n    [\n        {\n            id: 1,\n            title: "Dolorem suscipit assumenda laborum id facilis maiores.",\n            content:\n                "Non et asperiores dolores. Vero quas natus sed ut iste omnis sequi. Enim veniam soluta vel. Est soluta suscipit velit architecto et. Tenetur ea impedit alias rerum in tenetur. Aut tempore consequatur ipsa neque aspernatur sit. Ut ea aspernatur aut voluptatem. Nulla quos laboriosam molestiae impedit eius. Dicta est maxime fuga debitis. Dicta necessitatibus odit quis qui animi.",\n            category: {\n                id: 32,\n            },\n            status: "draft",\n        },\n        {\n            id: 2,\n            title: "Voluptatibus laboriosam dignissimos non.",\n            content:\n                "Dolor cumque blanditiis aspernatur earum quo autem voluptatem vel consequuntur. Consequatur et sed dolores rerum ipsam aut et sed. Nostrum provident voluptas facere distinctio voluptates in et. Magni asperiores quod unde tempore veritatis beatae qui cum officia. Omnis quia cumque et qui. Quis et explicabo et similique voluptatum. Culpa assumenda autem laborum impedit perspiciatis ducimus perferendis. Quo doloribus magnam perferendis doloremque voluptas libero autem. Nihil enim aliquam molestias aspernatur impedit. Ad eius qui sit et.",\n            category: {\n                id: 22,\n            },\n            status: "draft",\n        },\n        // ...\n    ];\n}\n')),(0,r.kt)("p",null,"First, we will create the post's CRUD pages and bootstrap the app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"Now, let's create the custom page with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"<PostReview>"),". We will use the properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"useList"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pagination"),' to fetch a post with "draft" status.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/data/useList"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useList")," documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'import { useList } from "@pankod/refine";\n\nconst PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n};\n\ninterface ICategory {\n    id: string;\n    title: string;\n}\n\ninterface IPost {\n    id: string;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: ICategory;\n}\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"We set the filtering process with ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," then page size set with ",(0,r.kt)("inlineCode",{parentName:"p"},"pagination")," to return only one post."),(0,r.kt)("p",null,"Post's category is relational. So we will use the post's category \"id\" to get the category title. Let's use ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," to fetch the category we want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'// highlight-next-line\nimport { useList, useOne } from "@pankod/refine";\n\nexport const PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n\n// highlight-start\n    const post = data?.data[0];\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: post!.category.id,\n            queryOptions: {\n                enabled: !!post,\n            },\n        });\n};\n// highlight-end\n')),(0,r.kt)("p",null,"Now we have the data to display the post as we want. Let's use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component of refine to show this data."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component is not required, you are free to display the data as you wish."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'import {\n// highlight-start\n    Typography,\n    Show,\n    MarkdownField,\n// highlight-end\n    useOne,\n    useList,\n} from "@pankod/refine";\n\n// highlight-next-line\nconst { Title, Text } = Typography;\n\nexport const PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n    const record = data?.data[0];\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: record!.category.id,\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n    return (\n// highlight-start\n        <Show\n            title="Review Posts"\n            resource="posts"\n            recordItemId={record?.id}\n            isLoading={isLoading || categoryIsLoading}\n            pageHeaderProps={{\n                backIcon: false,\n            }}\n        >\n            <Title level={5}>Status</Title>\n            <Text>{record?.status}</Text>\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n            <Title level={5}>Category</Title>\n            <Text>{categoryData?.data.title}</Text>\n            <Title level={5}>Content</Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n// highlight-end\n    );\n};\n')),(0,r.kt)("p",null,"Then, pass this ",(0,r.kt)("inlineCode",{parentName:"p"},"<PostReview>")," as the routes property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\n// highlight-next-line\nimport { PostReview } from "pages/post-review";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n// highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    {\n                        exact: true,\n                        component: PostReview,\n                        path: "/post-review",\n                    },\n                ],\n            }}\n// highlight-end\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"Now our page looks like this:"),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:i.Z,alt:"A custom page"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now let's put in approve and reject buttons to change the status of the post shown on the page. When these buttons are clicked, we will change the status of the post using ",(0,r.kt)("inlineCode",{parentName:"p"},"useUpdate"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/data/useUpdate"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useUpdate")," documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'import {\n    Typography,\n    Show,\n    MarkdownField,\n// highlight-start\n    Space,\n    Button,\n    useUpdate,\n// highlight-end\n    useOne,\n    useList,\n} from "@pankod/refine";\n\nconst { Title, Text } = Typography;\n\nexport const PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n    const record = data?.data[0];\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: record!.category.id,\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n// highlight-next-line\n    const mutationResult = useUpdate<IPost>();\n\n// highlight-next-line\n    const { mutate, isLoading: mutateIsLoading } = mutationResult;\n\n// highlight-start\n    const handleUpdate = (item: IPost, status: string) => {\n        mutate({ resource: "posts", id: item.id, values: { ...item, status } });\n    };\n// highlight-end\n\n    const buttonDisabled = isLoading || categoryIsLoading || mutateIsLoading;\n\n    return (\n        <Show\n            title="Review Posts"\n            resource="posts"\n            recordItemId={record?.id}\n            isLoading={isLoading || categoryIsLoading}\n            pageHeaderProps={{\n                backIcon: false,\n            }}\n// highlight-start\n            actionButtons={\n                <Space\n                    key="action-buttons"\n                    style={{ float: "right", marginRight: 24 }}\n                >\n                    <Button\n                        danger\n                        disabled={buttonDisabled}\n                        onClick={() =>\n                            record && handleUpdate(record, "rejected")\n                        }\n                    >\n                        Reject\n                    </Button>\n                    <Button\n                        type="primary"\n                        disabled={buttonDisabled}\n                        onClick={() =>\n                            record && handleUpdate(record, "published")\n                        }\n                    >\n                        Approve\n                    </Button>\n                </Space>\n            }\n       // highlight-end\n>\n            <Title level={5}>Status</Title>\n            <Text>{record?.status}</Text>\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n            <Title level={5}>Category</Title>\n            <Text>{categoryData?.data.title}</Text>\n            <Title level={5}>Content</Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:s.Z,alt:"A custom page in action"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/custom-pages-example-1o1by?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"custom-pages-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}g.isMDXComponent=!0},97803:function(e,t,n){t.Z=n.p+"assets/images/basic-d333c01b345dbc03f6ceed048ab0e1c4.png"},38498:function(e,t,n){t.Z=n.p+"assets/images/gif-44d87533ae01dd3ef9d0e5ebd6812d98.gif"}}]);