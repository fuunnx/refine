"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9514,4608],{85642:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var a=n(67294),r=n(3905),l=n(46291),i=n(72262),o=n(86010),c=n(89521),d=n(93783),s=n(55537),u=n(87462),m=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(95999),h=n(63366),f=n(39960),b=n(13919),v=n(90541),E="menuLinkText_OKON",g=["items"],Z=["item"],k=["item","onItemClick","activePath","level"],_=["item","onItemClick","activePath","level"],C=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},N=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,g);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,u.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,h.Z)(e,Z);return"category"===t.type?0===t.items.length?null:a.createElement(T,(0,u.Z)({item:t},n)):a.createElement(y,(0,u.Z)({item:t},n))}function T(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,i=e.level,d=(0,h.Z)(e,k),s=n.items,m=n.label,p=n.collapsible,f=n.className,b=C(n,l),v=(0,c.uR)({initialState:function(){return!!p&&(!b&&n.collapsed)}}),g=v.collapsed,Z=v.setCollapsed,_=v.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:b,collapsed:g,setCollapsed:Z}),a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":g},f)},a.createElement("a",(0,u.Z)({className:(0,o.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&b},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),_()}:void 0,href:p?"#":void 0},d),m),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.createElement(N,{items:s,tabIndex:g?-1:0,onItemClick:r,activePath:l,level:i+1})))}function y(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,i=(0,h.Z)(e,_),d=t.href,s=t.label,m=t.className,p=C(t,r);return a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:s},a.createElement(f.Z,(0,u.Z)({className:(0,o.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:d},(0,b.Z)(d)&&{onClick:n},i),(0,b.Z)(d)?s:a.createElement("span",null,s,a.createElement(v.Z,null))))}var I="sidebar_a3j0",M="sidebarWithHideableNavbar_VlPv",x="sidebarHidden_OqfG",L="sidebarLogo_hmkv",w="menu_cyFh",A="menuWithAnnouncementBar_+O1J",F="collapseSidebarButton_eoK2",P="collapseSidebarButtonIcon_e+kA";function B(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",F),onClick:t},a.createElement(m,{className:P}))}function R(e){var t,n,r=e.path,l=e.sidebar,i=e.onCollapse,d=e.isHidden,u=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return a.createElement("div",{className:(0,o.Z)(I,(t={},t[M]=p,t[x]=d,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:L}),a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",w,(n={},n[A]=u,n))},a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:l,activePath:r,level:1}))),h&&a.createElement(B,{onClick:i}))}var H=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:r,onItemClick:function(){return t()},level:1}))};function O(e){return a.createElement(c.Cv,{component:H,props:e})}var D=a.memo(R),W=a.memo(O);function z(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(D,e),r&&a.createElement(W,e))}var V=n(27440),Y=n(24608),j="backToTopButton_i9tI",U="backToTopButtonShow_wCmF";function q(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var K=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),i=q(),d=i.smoothScrollTop,s=i.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var i=n<a;if(i||s(),n<300)r(!1);else if(i){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",c.kM.common.backToTopButton,j,(e={},e[U]=n,e)),type:"button",onClick:function(){return d()}})},G=n(76775),J={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"},Q=n(12859);function X(e){var t,n,l,d=e.currentDocRoute,s=e.versionMetadata,u=e.children,h=s.pluginId,f=s.version,b=d.sidebar,v=b?s.docsSidebars[b]:void 0,E=(0,a.useState)(!1),g=E[0],Z=E[1],k=(0,a.useState)(!1),_=k[0],C=k[1],N=(0,a.useCallback)((function(){_&&C(!1),Z((function(e){return!e}))}),[_]);return a.createElement(i.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,c.os)(h,f)}},a.createElement("div",{className:J.docPage},a.createElement(K,null),v&&a.createElement("aside",{className:(0,o.Z)(J.docSidebarContainer,(t={},t[J.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J.docSidebarContainer)&&g&&C(!0)}},a.createElement(z,{key:b,sidebar:v,path:d.path,onCollapse:N,isHidden:_}),_&&a.createElement("div",{className:J.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(m,{className:J.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,o.Z)(J.docMainContainer,(n={},n[J.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,(l={},l[J.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:V.Z},u)))))}var $=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,G.LX)(r.pathname,e)}));return i?a.createElement(a.Fragment,null,a.createElement(Q.Z,null,a.createElement("html",{className:n.className})),a.createElement(X,{currentDocRoute:i,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n}))):a.createElement(Y.default,null)}},39649:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(63366),r=n(87462),l=n(67294),i=n(86010),o=n(95999),c=n(89521),d="anchorWithStickyNavbar_y2LR",s="anchorWithHideOnScrollNavbar_3ly5",u=["id"],m=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,a.Z)(e,u),h=(0,c.LU)().navbar.hideOnScroll;return m?l.createElement(t,(0,r.Z)({},p,{className:(0,i.Z)("anchor",(n={},n[s]=h,n[d]=!h,n)),id:m}),p.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,p)});var t}},27440:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),r=n(63366),l=n(67294),i=n(12859),o=n(39960),c=n(42628),d=n(39649),s=n(86010),u=n(89521),m="details_h+cY";function p(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,a.Z)({},t,{className:(0,s.Z)("alert alert--info",m,t.className)}))}var h=["mdxType","originalType"];var f={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,r.Z)(a,h));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(c.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(o.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(c.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(p,(0,a.Z)({},e,{summary:n}),r)},h1:(0,d.Z)("h1"),h2:(0,d.Z)("h2"),h3:(0,d.Z)("h3"),h4:(0,d.Z)("h4"),h5:(0,d.Z)("h5"),h6:(0,d.Z)("h6")}},24608:function(e,t,n){n.r(t);var a=n(67294),r=n(72262),l=n(95999);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);