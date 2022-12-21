"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(m,l(l({ref:t},h),{},{components:n})):a.createElement(m,l({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",slug:"javascript-try-catch-finally",authors:"abdullah_numan",tags:["javascript","error-handling"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-22-js-try-catch/social.png",hide_table_of_contents:!1},l=void 0,i={permalink:"/blog/javascript-try-catch-finally",source:"@site/blog/2022-11-22-js-try-catch.md",title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",date:"2022-11-22T00:00:00.000Z",formattedDate:"November 22, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"error-handling",permalink:"/blog/tags/error-handling"}],readingTime:10.43,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",slug:"javascript-try-catch-finally",authors:"abdullah_numan",tags:["javascript","error-handling"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-22-js-try-catch/social.png",hide_table_of_contents:!1},prevItem:{title:"5 Best Free Platforms for Hosting Hobby Web Projects",permalink:"/blog/5-top-free-react-hosting-platforms"},nextItem:{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design"},relatedPosts:[{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.795,date:"2022-09-06T00:00:00.000Z"},{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"},{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api",formattedDate:"August 19, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:6.8,date:"2022-08-19T00:00:00.000Z"}],authorPosts:[{title:"React memo guide with examples",permalink:"/blog/react-memo-guide",formattedDate:"September 13, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.01,date:"2022-09-13T00:00:00.000Z"},{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.335,date:"2022-09-16T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.985,date:"2022-10-10T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What are Errors?",id:"what-are-errors",level:2},{value:"What is Graceful Error Handling?",id:"what-is-graceful-error-handling",level:3},{value:"How <code>try/catch/finally</code> Blocks Work",id:"how-trycatchfinally-blocks-work",level:2},{value:"Running Usual Code In The <code>try</code> Block",id:"running-usual-code-in-the-try-block",level:3},{value:"The <code>catch</code> Block",id:"the-catch-block",level:2},{value:"The <code>finally</code> Block",id:"the-finally-block",level:3},{value:"Conclusion",id:"conclusion",level:2}],h=(p="PromotionBanner",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This post is about graceful error handling in JavaScript where we explore the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch/finally")," blocks."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-are-errors"},"What are Errors?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-graceful-error-handling"},"What is Graceful Error Handling?")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-trycatchfinally-blocks-work"},"How ",(0,r.kt)("inlineCode",{parentName:"a"},"try/catch/finally")," Blocks Work"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-usual-code-in-the-try-block"},"Running Usual Code In The ",(0,r.kt)("inlineCode",{parentName:"a"},"try")," Block")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#the-catch-block"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"catch")," Block"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#the-finally-block"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"finally")," Block"))))),(0,r.kt)("h2",{id:"what-are-errors"},"What are Errors?"),(0,r.kt)("p",null,"Errors are integral part of programming. Errors in JavaScript can arise while writing code due to syntax related issues like missing or mistyped variables, duplicate variables, wrong use of JavaScript constructs, etc. They can also happen at run time due to internal errors at an external server, unreachable resources at an API endpoint, broken or missing data structures - whose interfaces are usually manipulated by our program, etc."),(0,r.kt)("p",null,"Syntax errors are generally tracked by linters but are also pointed out when the buggy code is executed by JavaScript's engine, i.e. at run time. Errors thrown at run time are often referred to as ",(0,r.kt)("strong",{parentName:"p"},"exceptions"),". Exceptions throw an ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object that - if unhandled proactively - instantly terminates the script and does not allow execution of the rest of the code."),(0,r.kt)("p",null,"So, when an error is expected, in order to avoid breaking our program, it is important to handle errors gracefully and direct the flow of the program to a safe avenue where further execution resumes unhindered."),(0,r.kt)("h3",{id:"what-is-graceful-error-handling"},"What is Graceful Error Handling?"),(0,r.kt)("p",null,"Graceful error handling refers to an approach in programming where we proactively consider the scenarios that might lead to an error, design our control flow to handle these possible errors and direct the control of the program in each case in such a way that execution continues unterminated."),(0,r.kt)("p",null,"In JavaScript, we do this with the ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch/finally")," construct."),(0,r.kt)("p",null,"In this article, we get into the details of what the ",(0,r.kt)("inlineCode",{parentName:"p"},"try"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," blocks represent and how they work together with examples. And on the way, we will discuss about what nesting of these blocks bring to the table. We'll also spend some time delving into how the ",(0,r.kt)("inlineCode",{parentName:"p"},"finally {...}")," block is used to guide the control of the script to carry out routine procedures, like closing down a write stream in a file."),(0,r.kt)("p",null,"Let's start with how ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch/finally")," works first."),(0,r.kt)("hr",null),(0,r.kt)(h,{title:"Building a side project?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-trycatchfinally-blocks-work"},"How ",(0,r.kt)("inlineCode",{parentName:"h2"},"try/catch/finally")," Blocks Work"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch/finally")," construct, it's obvious, can have three possible blocks. A ",(0,r.kt)("inlineCode",{parentName:"p"},"try {...}")," block, a ",(0,r.kt)("inlineCode",{parentName:"p"},"catch {...}")," block and a ",(0,r.kt)("inlineCode",{parentName:"p"},"finally {...}")," block. Of these three, ",(0,r.kt)("inlineCode",{parentName:"p"},"try {...}")," is always a must. And we need one more: either ",(0,r.kt)("inlineCode",{parentName:"p"},"catch {...}")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"finally {...}")," to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"try {...}")," block relevant. The possible scenarios covered by this are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// Possibility 1: try/catch statement\ntry {\n  // Things to be tried\n} catch(e) {\n  // Catch errors thrown in try and do something with it\n}\n\n\n// Possibility 2: try/finally statement\ntry {\n  // Things to be tried\n} finally {\n  // Standard procedures to be completed regardless of the output in try block\n}\n")),(0,r.kt)("p",null,"So at least two blocks make up a ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," control flow. We can also have another possibility that involves the ",(0,r.kt)("inlineCode",{parentName:"p"},"finally {...}")," block as the third:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  // Try stuff\n  // Throw graceful error\n} catch(e) {\n  // Catch error and do relevant stuff like log to console, retry, redirect, etc.\n} finally {\n  // Do standard stuff like cleanup, closing file, send log data, etc after try and catch\n}\n")),(0,r.kt)("p",null,"Below, we go through each block with examples for each possible scenario above."),(0,r.kt)("h3",{id:"running-usual-code-in-the-try-block"},"Running Usual Code In The ",(0,r.kt)("inlineCode",{parentName:"h3"},"try")," Block"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"try {...}")," block contains the code which we want to execute in our normal control flow but bears the risk of throwing an error. It could be just another part of the synchronous procedures we declare in our script, such as the first ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statement below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"  console.log('We are exploring error handling with try/catch/finally');\n  // 'We are exploring error handling with try/catch/finally'\n\n  console.log('This is safe avenue.');\n  // 'This is safe avenue.'\n")),(0,r.kt)("p",null,"Here, the control makes it to the safe zone and logs both statements. But if we introduce an error, the program crashes entirely - not reaching the the safe avenue:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"console.logd('We are exploring error handling with try/catch/finally');\nconsole.log('This is safe avenue.');\n\n// TypeError: console.logd is not a function\n")),(0,r.kt)("p",null,"Here, the intentional mistake in ",(0,r.kt)("inlineCode",{parentName:"p"},"console.logd")," throws a ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeError"),". And strikingly, the execution is halted entirely. No dealing with the error, no redirection, just a bunch of stack information."),(0,r.kt)("p",null,"That's bad. We need to deal with this proactively."),(0,r.kt)("p",null,"Let's use a ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," block. We need to put the code of our interest inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  console.logd('We are exploring error handling with try/catch/finally');\n} catch {\n  console.log(`Hello, you erred'n we messed. We are thy m'ssinjas.`);\n};\n\nconsole.log('This is safe avenue.');\n\n// Hello, you erred'n we messed. We are thy m'ssinjas.\n// This is safe avenue.\n")),(0,r.kt)("p",null,"Now, we placed our ",(0,r.kt)("inlineCode",{parentName:"p"},"console.logd()")," statement inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block. It's still buggy and throws the same exception, but it did not lead to termination of execution. It instead diverted the control to the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block, executed the code there and eventually moved control to the safe zone."),(0,r.kt)("p",null,"Let's just fix the error so the control remains in the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block and the program makes it to the safe zone through our desired, error-free path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  console.log('We are exploring error handling with try/catch/finally');\n} catch {\n  console.log(`Hello, you erred'n we messed. We are thy m'ssinjas.`);\n};\n\nconsole.log('This is safe avenue.');\n\n// We are exploring error handling with try/catch/finally\n// This is safe avenue.\n")),(0,r.kt)("p",null,"And it does."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"try")," Block with Synchronous Functions")),(0,r.kt)("p",null,"We can invoke any function inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block. Let's refactor the first log statement into a function and use it inside ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function sayWhatWeReDoing() {\n  console.log('We are exploring error handling with try/catch/finally');\n};\n\ntry {\n  sayWhatWeReDoing();\n} catch {\n  console.log(`Hello, you erred'n we messed. We are thy m'ssinjas.`);\n};\n\nconsole.log('This is safe avenue.');\n// We are exploring error handling with try/catch/finally\n// This is safe avenue.\n")),(0,r.kt)("p",null,"The result is the same."),(0,r.kt)("h2",{id:"the-catch-block"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"catch")," Block"),(0,r.kt)("p",null,"Now, as we've seen in the buggy ",(0,r.kt)("inlineCode",{parentName:"p"},"console.logd()")," example, presence of the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block creates a fork when we have errors in our desired flow in the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block. Let's focus on the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block now."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block offers an alternate channel to transfer execution control in the case of an error raised in the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block. When an error is raised, the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block allows a way out from crashing the program. That is, the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block allows us to handle errors gracefully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"catch")," Without the ",(0,r.kt)("inlineCode",{parentName:"strong"},"Error")," Object")),(0,r.kt)("p",null,"In the previous example, when we erred with ",(0,r.kt)("inlineCode",{parentName:"p"},"console.logd()"),", we were able to log another statement we provided in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  console.logd('We are exploring error handling with try/catch/finally');\n} catch {\n  console.log(`Hello, you erred'n we messed. We are thy m'ssinjas.`);\n};\n\nconsole.log('This is safe avenue.');\n\n// Hello, you erred'n we messed. We are thy m'ssinjas.\n// This is safe avenue.\n")),(0,r.kt)("p",null,"Notice in the beginning of the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block, we don't have any argument passed. This is because, here we did not require access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object produced by our error."),(0,r.kt)("p",null,"So, we may choose to ignore the ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object totally."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"catch")," With the ",(0,r.kt)("inlineCode",{parentName:"strong"},"Error")," Object")),(0,r.kt)("p",null,"However, we may also choose to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object if we need to. And most often we do."),(0,r.kt)("p",null,"We can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object as an argument passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block, with ",(0,r.kt)("inlineCode",{parentName:"p"},"catch(e)")," or anything replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," really. It's the only argument that's available from ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block. And it's not available to other blocks."),(0,r.kt)("p",null,"It consists of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the error and a ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),". Let's see what the error was in our above case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  console.logd('We are exploring error handling with try/catch/finally');\n} catch(e) {\n  console.log(`${e.name}: ${e.message}`);\n};\n\nconsole.log('This is safe avenue.');\n\n// TypeError: console.logd is not a function\n// This is safe avenue.\n")),(0,r.kt)("p",null,"Clearly, it was our intentional typo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"throw"),"ing Custom Errors")),(0,r.kt)("p",null,"It is important to note that exceptions thrown at the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block is caught by only the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block of the same construct. We'll come to this in the next two sections below. Exceptions thrown in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block itself and in the ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," block are not accessible from the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block of the same construct."),(0,r.kt)("p",null,"We can throw custom errors with JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," method, and even if there is perfect code written after the ",(0,r.kt)("inlineCode",{parentName:"p"},"throw"),", the later code won't be run because the control has moved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block already:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  console.log('We are exploring error handling with try/catch/finally');\n  throw Error('We wanted this Error just to make a point.');\n  console.log('Perfect code here. But does not run.');\n} catch(e) {\n  console.log(`${e.name}: ${e.message}`);\n};\n\nconsole.log('This is safe avenue.');\n\n// We are exploring error handling with try/catch/finally\n// Error: We wanted this Error just to make a point.\n// This is safe avenue.\n")),(0,r.kt)("p",null,'Here, the "perfect code" statement did not get logged to the console, because ',(0,r.kt)("inlineCode",{parentName:"p"},"try")," spewed ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," before that and control already moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nested ",(0,r.kt)("inlineCode",{parentName:"strong"},"try/catch")," Blocks")),(0,r.kt)("p",null,"We can nest ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," blocks. Let's see how errors interact between nesting levels:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  console.log('We are exploring error handling with try/catch/finally');\n  try {\n    console.log('This is second level try/catch block.')\n    throw Error('Custom error thrown from second level.');\n  } catch(e) {\n    console.log(`${e.name}: ${e.message}`);\n  }\n} catch(e) {\n  console.log(`Error from first level:\\n\"${e}\"`);\n};\n\nconsole.log('This is safe avenue.');\n\n// We are exploring error handling with try/catch/finally\n// This is second level try/catch block.\n// Error: Custom error thrown from second level.\n// This is safe avenue.\n")),(0,r.kt)("p",null,"In the above snippet, the custom error thrown in the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block is caught in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block of the same construct. That is, it remains in the same level."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rethrowing")),(0,r.kt)("p",null,"We can rethrow an error in a nested ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," block, and it will be picked by an ancestor ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  console.log('We are exploring error handling with try/catch/finally');\n  try {\n    console.log('This is second level try/catch block.')\n    throw Error('Custom error thrown from second level.');\n  } catch(e) {\n    throw(e);\n  }\n} catch(e) {\n  console.log(`Error from first level:\\n\"${e}\"`);\n};\n\nconsole.log('This is safe avenue.');\n/* We are exploring error handling with try/catch/finally\n   This is second level try/catch block.\n   Error from first level:\n   \"Error: Custom error thrown from second level.\"\n   This is safe avenue.\n*/\n")),(0,r.kt)("p",null,"In the above chunk, we rethrew ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"throw(e)")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block of the child ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," block. It was picked up by the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block of the parent ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/* Error from first level:\n   "Error: Custom error thrown from second level."\n*/\n')),(0,r.kt)("p",null,'These are most of the "gotchas" of using the ',(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h3",{id:"the-finally-block"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"finally")," Block"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"finally {...}")," block - if applied - is the block where the control flow moves before it exits the ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch/finally")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"try/finally")," construct. It contains code that is part of the standard set of procedures, such as closing the write stream of a file regardless of whether an attempted write operation throws an error or not:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const fs = require("fs");\nconst writeStream = fs.createWriteStream("nodeFsTest");\n\ntry {\n  console.log(\'Starting writing...\');\n  writeStream.write("Hi,");\n  writeStream.write("\\nThis is finally in action.");\n} catch(e) {\n  console.log(e);\n} finally {\n  console.log(\'Closing file...\')\n  writeStream.end();\n}\n\n/*\nStarting writing...\nClosing file...\n*/\n')),(0,r.kt)("p",null,"In the example above, we're writing to a file using ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," ",(0,r.kt)("inlineCode",{parentName:"p"},"fs")," module. After a successful write operation, we want to declare that we have ended writing by closing the write stream with ",(0,r.kt)("inlineCode",{parentName:"p"},"writeStream.end()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"try/finally")," Only")),(0,r.kt)("p",null,"We could have only used a ",(0,r.kt)("inlineCode",{parentName:"p"},"try/finally")," block, only if we knew we won't run into errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const fs = require("fs");\nconst writeStream = fs.createWriteStream("nodeFsTest");\n\ntry {\n  console.log(\'Starting writing...\');\n  writeStream.write("Hi,");\n  writeStream.write("\\nThis is finally in action.");\n} finally {\n  console.log(\'Closing file...\')\n  writeStream.end();\n}\n\n/*\nStarting writing...\nClosing file...\n*/\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this article, we discussed in depth about graceful error handling in JavaScript using the ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch/finally")," construct. We found out that putting our error-prone code inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"try {...}")," block allows us to catch any thrown exception. This prevents our program from crashing."),(0,r.kt)("p",null,"We also saw that ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," blocks can be nested, exceptions thrown in nested ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," blocks can be rethrown and picked from ancestor ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," blocks."),(0,r.kt)("p",null,"Later, we looked into the details of how the ",(0,r.kt)("inlineCode",{parentName:"p"},"finally {..}")," block is used to conduct routine procedures, regardless of whether the main operation in the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block throws an error or not."))}u.isMDXComponent=!0}}]);