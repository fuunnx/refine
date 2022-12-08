"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var m=2;m<i;m++)s[m]=n[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>c,toc:()=>u});var o=n(87462),a=(n(67294),n(3905)),i=n(15288),s=n(16210),r=n(64483),l=n(30409);const m={title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",slug:"react-usememo",authors:"abdullah_numan",tags:["react","memoization","usememo","performance"],image:"/img/blog/2022-09-16-react-use-memo/social.jpg",hide_table_of_contents:!1},p=void 0,c={permalink:"/blog/react-usememo",source:"@site/blog/2022-09-16-react-use-memo.md",title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",date:"2022-09-16T00:00:00.000Z",formattedDate:"September 16, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"memoization",permalink:"/blog/tags/memoization"},{label:"usememo",permalink:"/blog/tags/usememo"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:5.26,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",slug:"react-usememo",authors:"abdullah_numan",tags:["react","memoization","usememo","performance"],image:"/img/blog/2022-09-16-react-use-memo/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid"},nextItem:{title:"React memo guide with examples",permalink:"/blog/react-memo-guide"},relatedPosts:[{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.15,date:"2022-09-09T00:00:00.000Z"},{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 26, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.235,date:"2022-10-26T00:00:00.000Z"},{title:"React memo guide with examples",permalink:"/blog/react-memo-guide",formattedDate:"September 13, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.245,date:"2022-09-13T00:00:00.000Z"}],authorPosts:[{title:"Error Handling With try, catch and finally Blocks in JavaScript",permalink:"/blog/javascript-try-catch-finally",formattedDate:"November 22, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.43,date:"2022-11-22T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.525,date:"2022-10-03T00:00:00.000Z"},{title:"React memo guide with examples",permalink:"/blog/react-memo-guide",formattedDate:"September 13, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.245,date:"2022-09-13T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Project Content Overview",id:"project-content-overview",level:3},{value:"Resource Intensive Functions",id:"resource-intensive-functions",level:2},{value:"Enter <code>useMemo()</code>",id:"enter-usememo",level:2},{value:"useMemo Dependencies",id:"usememo-dependencies",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],h=(g="PromotionBanner",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var g;const k={toc:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This post is about how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook in React."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations."),(0,a.kt)("p",null,"In this post, we dive into the details of the ",(0,a.kt)("strong",{parentName:"p"},"useMemo")," hook with an extension of the example demonstrated in the previous post titled ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-memo-guide/"},"Memoization using React memo"),"."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#resource-intensive-functions"},"Resource Intensive Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enter-usememo"},"Enter ",(0,a.kt)("inlineCode",{parentName:"a"},"useMemo()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usememo-dependencies"},"useMemo Dependencies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,a.kt)("h3",{id:"project-content-overview"},"Project Content Overview"),(0,a.kt)("p",null,"The example app is based on the idea of a list of posts on a blog. There are several components involving a user seeing the latest posts and a list of the user's posts. Allow yourself some time to understand the components individually, their relationships, their state changes, and how props are passed through. It is crucial to pay close attention to how the change of a parent's state triggers the re-render of its descendants."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"Here you can find the example app's live code")),(0,a.kt)("p",null,"The discussion of this article is focused on optimizing performance by memoizing the value of resource-intensive functions, such as a sorting function. In React, we do this with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook."),(0,a.kt)("h2",{id:"resource-intensive-functions"},"Resource Intensive Functions"),(0,a.kt)("p",null,"We're going to jump back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," component for this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},"import React, { useEffect, useState } from 'react';\nimport fetchUpdatedPosts from '../fetch/fetchUpdatedPosts';\nimport allPosts from './../data/allPosts.json';\nimport sortPosts from '../utils/sortPosts';\nimport LatestPost from './LatestPost';\nimport UserPostsIndex from './UserPostsIndex';\n\nconst Blog = ({ signedIn }) => {\n  const [updatedPosts, setUpdatedPosts] = useState(allPosts);\n  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());\n\n  const getLatestPosts = () => {\n    const posts = fetchUpdatedPosts();\n    setUpdatedPosts(posts);\n  };\n\n const sortedPosts = sortPosts(updatedPosts);\n\n  useEffect(\n    () => {\n      const id = setInterval(\n        () => setLocalTime(new Date().toLocaleTimeString()),\n        1000\n      );\n      return () => clearInterval(id);\n    },\n    []\n  );\n\n  console.log('Rendering Blog component');\n\n  return (\n    <div className=\"container\">\n      <h1>Memoization in React</h1>\n      <div>\n        <div>\n          { /* More JSX code here... */ }\n          <LatestPost signedIn={signedIn} post={sortedPosts[0]} />\n        </div>\n        <UserPostsIndex signedIn={signedIn}/>\n      </div>\n    </div>\n  );\n};\n\nexport default React.memo(Blog);\n")),(0,a.kt)("p",null,"We'd like to focus particularly on the ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," utility function which can get expensive if passed a long array of posts. "),(0,a.kt)("p",null,"At the moment, we are only sorting 101 items returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUpdatedPosts()"),", but in an actual application, the number can be much higher and consume resources at scale. Thus it is an expensive function."),(0,a.kt)("p",null,"If we look inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook, we are updating the locale time string and storing it in ",(0,a.kt)("inlineCode",{parentName:"p"},"localTime")," for our clock. ",(0,a.kt)("inlineCode",{parentName:"p"},"localTime")," updates every second, and at each state, change triggers a re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),". The clock does not represent a genuine UI feature for us here, but it is there to make a point about how frequent re-renders complicate things with expensive utility functions."),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," logs ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," to the console and returns a sorted array from the passed in an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/utils/sortPosts"',title:'"src/utils/sortPosts"'},"const sortPosts = posts => {\n  console.log('Sorting posts...');\n  return posts.sort((a, b) => b.id - a.id);\n};\n\nexport default sortPosts;\n")),(0,a.kt)("p",null,"If we look at the console, we see that ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," is being logged at 1000ms intervals, i.e. with the tick of our clock:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:i.Z,alt:"usememo1"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This shows ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," is called at every re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),". An expensive function, invoked every second for no obvious reason, is too much of an ask from the app. We don't want ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," to be called if ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is not changed."),(0,a.kt)("hr",null),(0,a.kt)(h,{title:"Tired of looking for the best template for your B2B app?",image:"/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"enter-usememo"},"Enter ",(0,a.kt)("inlineCode",{parentName:"h2"},"useMemo()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," helps us memoize the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," doesn't change. Let's use the memoized function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},"-- const sortedPosts = sortPosts(updatedPosts);\n//highlight-next-line\n++ const sortedPosts = useMemo(() => sortPosts(updatedPosts), [updatedPosts]);\n")),(0,a.kt)("p",null,"Checking our console, we can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," has been logged only once, indicating only one invocation of ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()"),":"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:s.Z,alt:"usememo2"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This gives us a huge performance gain."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"usememo-dependencies"},"useMemo Dependencies"),(0,a.kt)("p",null,"Notice the dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," as the second argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts"),". We are asking the hook to renew the memo when ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," changes. Let's try to change the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts"),":"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog/>")," component, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Latest Post")," button, which is used to fetch latest posts on demand. Every time ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Latest Post")," button is clicked, ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is updated with the invocation of ",(0,a.kt)("inlineCode",{parentName:"p"},"getLatestPosts()"),". "),(0,a.kt)("p",null,"If the state of ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is changed, a re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," is triggered, which leads to a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," with the new value of ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," passed in."),(0,a.kt)("p",null,"If we check our console while clicking the button, we can clearly see ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," being logged for each click:"),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:r.Z,alt:"usememo3"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It is important to notice that, if we remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," will not be invoked when ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," change:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"  const sortedPosts = useMemo(() => sortPosts(updatedPosts), []);\n")),(0,a.kt)("p",{parentName:"admonition"},"There is no sorting going on when we need it:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:l.Z,alt:"usememo4"})),(0,a.kt)("br",null)),(0,a.kt)("br",null),(0,a.kt)("p",null,"It is also important to know that ",(0,a.kt)("strong",{parentName:"p"},"useMemo")," returns a value, as opposed to a function. This is what differentiates it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook, which returns a memoized function. So, ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," is preferred for memoizing a value rather than a callback function."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we looked into the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook and found out it plays a crucial role in optimizing the performance of our app by memoizing an expensive utility function. We saw that it is important to specify the dependency of ",(0,a.kt)("strong",{parentName:"p"},"useMemo"),"  so that the memo is renewed when the state of dependency changes."),(0,a.kt)("p",null,"In the next post, we will demonstrate the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com/github/refinedev/refine/tree/master/examples/blog/react-memoization-memo/?embed=1&view=preview&theme=dark&preset=node&ctl=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"react-memoization-memo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}f.isMDXComponent=!0},15288:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/usememo1-ff23d5bcb6ea88786218513502638980.png"},16210:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/usememo2-d3d449cd21709c15bae41bd13d33b890.png"},64483:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/usememo3-18759440ca5d89d483202abd134da027.png"},30409:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/usememo4-c4f63a5a9d9d945560ba905d995c0533.png"}}]);