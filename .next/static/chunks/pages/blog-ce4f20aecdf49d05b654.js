(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{5197:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return S},default:function(){return _}});var i=n(2088),s=(n(7041),n(9698),n(7294)),o=n(9704),a=n(7913),r=n.n(a),l=n(3631),c=n(7749),u=n(1423),M=n(2795),g=n(6010),d=n(9586),h=n.n(d),N=n(7194),w=n.n(N),L=n(2809),j=(0,n(1120).Z)((function(e){var t,n;return{blogHeader:{"& .MuiTabs-indicator":{backgroundColor:"#d90368",height:3},"& .MuiTabs-scroller":(t={height:70},(0,L.Z)(t,e.breakpoints.down(1900),{height:62}),(0,L.Z)(t,e.breakpoints.down(1600),{height:54}),t),"& .MuiTabs-flexContainer":{height:"100%"},"& .MuiTab-root":{padding:"6px 17px 9px",minWidth:10,marginRight:28},"& .MuiTab-wrapper":(n={textTransform:"capitalize",fontSize:16},(0,L.Z)(n,e.breakpoints.down(1900),{fontSize:14}),(0,L.Z)(n,e.breakpoints.down(1600),{fontSize:12}),n),"& .MuiTab-textColorInherit":{opacity:1}}}})),D=n(5893),p=function(e){var t=e.categories,n=e.selectedCategory,i=e.handleSelectCategory,o=e._handleSearch,a=e.q,l=e.setQ,d=(0,s.useState)(!1),N=d[0],L=d[1],p=j();return(0,D.jsxs)("div",{className:(0,g.Z)(r().blogHeader,p.blogHeader),children:[(0,D.jsx)(c.Z,{value:n,onChange:i,textColor:"inherit",indicatorColor:"inherit","aria-label":"blog categories",variant:"fullWidth",children:t.map((function(e){return(0,D.jsx)(u.Z,{value:e.id,label:e.title})}))}),(0,D.jsx)(M.Z,{onClickAway:function(){""===a&&L(!1)},children:(0,D.jsxs)("div",{className:(0,g.Z)(r().blogSearch,N&&r().blogSearchOpen),children:[(0,D.jsx)("input",{type:"text",value:a,onKeyPress:function(e){13==(e.keyCode||e.which)&&o()},onChange:function(e){return l(e.target.value)}}),(0,D.jsx)("div",{onClick:function(){N?o():L(!0)},className:r().searchIconConntainer,children:(0,D.jsx)("img",{src:N?w():h()})})]})})]})},T=n(738),C=n(5477),I=n(3268),x=(n(8629),n(7377)),v=n.n(x),b=(n(1664),function(e){var t=e.handlePaginate,n=(0,o.v9)((function(e){return e.posts.posts})),i=(0,o.v9)((function(e){return e.posts.postsLoading})),a=(0,s.useState)(),l=a[0],c=a[1];return console.log("posts",n),console.log("renderedPost",l),(0,s.useEffect)((function(){var e=[],t=[],i=[];n.data.map((function(n,s){(s+1)%3==1&&e.push(n),(s+1)%3==2&&t.push(n),(s+1)%3==0&&i.push(n)})),c([e,t,i])}),[n.data]),(0,D.jsx)("div",{className:r().postsListContainer,children:i||!l?(0,D.jsx)("p",{style:{textAlign:"center",marginTop:53},children:(0,D.jsx)(C.Z,{color:"primary",style:{width:20,height:20}})}):l[0].length>0?(0,D.jsx)(T.Z,{dataLength:n.data.length,next:function(){return t(parseInt(n.current_page)+1)},hasMore:parseInt(n.current_page)<n.last_page,loader:(0,D.jsx)("p",{style:{textAlign:"center",marginTop:53},children:(0,D.jsx)(C.Z,{color:"primary",style:{width:20,height:20}})}),children:(0,D.jsxs)("div",{className:r().postsList,children:[(0,D.jsx)("div",{className:r().postsListRow,children:l[0].map((function(e,t){return(0,D.jsx)(I.Z,{image:"https://itica.ca"+e.banner,name:e.title,brief:e.brief,date:e.created_at,unsplashMode:!0,sm:t%2==0})}))}),(0,D.jsx)("div",{className:r().postsListRow,children:l[1].map((function(e,t){return(0,D.jsx)(I.Z,{image:"https://itica.ca"+e.banner,name:e.title,brief:e.brief,date:e.created_at,unsplashMode:!0,sm:t%2!=0})}))}),(0,D.jsx)("div",{className:r().postsListRow,children:l[2].map((function(e,t){return(0,D.jsx)(I.Z,{image:"https://itica.ca"+e.banner,name:e.title,brief:e.brief,date:e.created_at,unsplashMode:!0,sm:t%2==0})}))})]})}):(0,D.jsxs)("div",{className:r().noResult,children:[(0,D.jsx)("img",{src:v()}),(0,D.jsx)("p",{children:"No Result Found!"})]})})}),y=function(e){var t=e.categories,n=((0,o.v9)((function(e){return e.posts.posts})),(0,s.useState)(t[0].id)),i=n[0],a=n[1],c=(0,s.useState)(""),u=c[0],M=c[1],g=(0,o.I0)();(0,s.useEffect)((function(){d()}),[i]);var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;g((0,l.Bu)(!1,null,{q:u,cat_id:i},e))};return(0,D.jsxs)("div",{className:r().blogMainContainer,children:[(0,D.jsx)(p,{handleSelectCategory:function(e,t){console.log("id",t),a(t)},categories:t,selectedCategory:i,_handleSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];1==e?g((0,l.Bu)(!1,null,{q:"",cat_id:i},1)):d()},q:u,setQ:M}),(0,D.jsx)(b,{handlePaginate:d})]})};var S=!0,_=function(e){var t=e.categories;return(0,D.jsx)(i.Z,{page:"blog",children:(0,D.jsx)(y,{categories:t})})}},3268:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(8589),s=n.n(i),o=n(6010),a=n(1120),r=n(282),l=n(7294),c=function(e){console.log("in",e);var t=e.split(/[- :TZ]/),n=new Date(Date.UTC(t[0],t[1]-1,t[2],t[3],t[4],t[5])),i=""+(n.getMonth()+1),s=""+n.getDate(),o=n.getFullYear();return{day:s,month:["January","February","March","April","May","June","July","August","September","October","November","December"][i-1],year:o}},u=n(5893),M=(0,a.Z)({overlay:{bottom:function(e){return e.tit-e.ov+1}}}),g=function(e){var t,n,i,a,g=e.image,d=e.name,h=e.brief,N=e.date,w=e.sm,L=e.unsplashMode,j=c(N),D=(0,l.useRef)(),p=(0,l.useRef)(),T=(0,l.useRef)(),C=(0,l.useState)({ov:0,tit:0}),I=C[0],x=C[1],v=M(I);return console.log("titleRef?.current?.clientHeight",null===T||void 0===T||null===(t=T.current)||void 0===t?void 0:t.clientHeight),console.log("overlayRef?.current?.clientHeight",null===D||void 0===D||null===(n=D.current)||void 0===n?void 0:n.clientHeight),console.log("briefRef?.current?.clientHeight",null===p||void 0===p||null===(i=p.current)||void 0===i?void 0:i.clientHeight),(0,l.useEffect)((function(){var e,t;x({ov:null===(e=D.current)||void 0===e?void 0:e.clientHeight,tit:null===T||void 0===T||null===(t=T.current)||void 0===t?void 0:t.clientHeight}),setTimeout((function(){var e,t,n;console.log("overlayRef?.current?.clientHeight",null===D||void 0===D||null===(e=D.current)||void 0===e?void 0:e.clientHeight),x({ov:null===(t=D.current)||void 0===t?void 0:t.clientHeight,tit:null===T||void 0===T||null===(n=T.current)||void 0===n?void 0:n.clientHeight})}),1e3)}),[D,T,null===p||void 0===p||null===(a=p.current)||void 0===a?void 0:a.clientHeight]),(0,u.jsxs)("div",{className:(0,o.Z)(s().postContainer,w&&s().postContainerSm,L&&s().postUnsplashMode,v.postContainer),children:[(0,u.jsx)("div",{className:s().imageContainer,children:(0,u.jsx)("img",{src:g})}),(0,u.jsxs)("div",{ref:D,className:(0,o.Z)(s().overlay,v.overlay),children:[(0,u.jsx)("h3",{ref:T,children:d}),(0,u.jsx)("div",{className:s().divider}),(0,u.jsx)("div",{ref:p,className:s().brief,dangerouslySetInnerHTML:{__html:h}}),(0,u.jsxs)("div",{className:s().actionsContainer,children:[(0,u.jsx)("p",{children:"".concat(j.day," ").concat(j.month," ").concat(j.year)}),(0,u.jsx)(r.Z,{children:"Read More"})]})]})]})}},2890:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(5197)}])},7913:function(e){e.exports={blogMainContainer:"blog_blogMainContainer__3CbGK",blogHeader:"blog_blogHeader__1RGu2",blogSearch:"blog_blogSearch__1hOZa",searchIconConntainer:"blog_searchIconConntainer__2yMA6",blogSearchOpen:"blog_blogSearchOpen__1P_6t",postsListContainer:"blog_postsListContainer__1zPwG",postsList:"blog_postsList__BG3Iw",postsListRow:"blog_postsListRow__3YX0P",noResult:"blog_noResult__384ty",bt:"blog_bt__2Itj_"}},8589:function(e){e.exports={postContainer:"post_postContainer__JUsAy",overlay:"post_overlay__t0dsj",postUnsplashMode:"post_postUnsplashMode__2_Kc6",postContainerSm:"post_postContainerSm__QDFfF",imageContainer:"post_imageContainer__vjOuH",brief:"post_brief__27w5G",actionsContainer:"post_actionsContainer__294eM"}},7377:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS40MDgiIGhlaWdodD0iNTUuMzk1IiB2aWV3Qm94PSIwIDAgNTUuNDA4IDU1LjM5NSI+DQogIDxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTAuMDE2KSI+DQogICAgPGcgaWQ9IlNlYXJjaF9Mb3VwZV9RdWVzdGlvbiIgZGF0YS1uYW1lPSJTZWFyY2ggTG91cGUgUXVlc3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wMTYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE5MjQ0IiBkYXRhLW5hbWU9IlBhdGggMTkyNDQiIGQ9Ik0zMC4yMjIsNDYuOTE5YTIxLjQ5MywyMS40OTMsMCwwLDEtNy43MTcuMywxNi43NDMsMTYuNzQzLDAsMCwxLTUuMzUyLTEuNTgzQzExLjE2Nyw0Mi41MzgsNy44NDIsMzUsOCwyNy45MzlIOEEyMS42LDIxLjYsMCwwLDEsMjkuNTQ2LDYuMzRjMy42MjEsMCw3LjUyNy44NTUsOS4xOTUsMi4wNDhhMTksMTksMCwwLDEsMy44ODUsMy43NTgsMjMuNzMxLDIzLjczMSwwLDAsMSwzLjU1OCw2LjUsMjEuNzYxLDIxLjc2MSwwLDAsMS0xNS45NjIsMjguMjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjQ0NSAwLjMzNikiIGZpbGw9IiNkOTAzNjgiIG9wYWNpdHk9IjAuMSIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMTk1NzEiIGRhdGEtbmFtZT0iUGF0aCAxOTU3MSIgZD0iTTU0Ljc4OSw1MS44MTEsNDUuOCw0Mi44MjdhMjYsMjYsMCwxLDAtMi45ODgsMi45ODhMNTEuOCw1NC44YTIuMTEyLDIuMTEyLDAsMSwwLDIuOTg4LTIuOTg4Wk0xMC41NTcsNDEuNGEyMS43NjgsMjEuNzY4LDAsMSwxLDE1LjQsNi4zMzQsMjEuNzY4LDIxLjc2OCwwLDAsMS0xNS40LTYuMzM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC4wMTYpIiBmaWxsPSIjZDkwMzY4ODAiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE5NTcyIiBkYXRhLW5hbWU9IlBhdGggMTk1NzIiIGQ9Ik0zMy4wNzUsMzAuMDg4YTIuMTEyLDIuMTEyLDAsMSwxLTIuOTg4LDIuOTg4bC00LjgtNC44LTQuODE0LDQuOGEyLjExMiwyLjExMiwwLDEsMS0yLjk4OC0yLjk4OGw0LjgtNC44LTQuODE0LTQuODE0YTIuMTEyLDIuMTEyLDAsMSwxLDIuOTg4LTIuOTg4bDQuODI0LDQuOCw0LjgtNC44MTRhMi4xMTIsMi4xMTIsMCwxLDEsMi45ODgsMi45ODhsLTQuOCw0LjgxNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTM4IDAuOTIxKSIgZmlsbD0iI2Q5MDM2ODgwIi8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg=="},7194:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4xNTQiIGhlaWdodD0iMTkuMTUiIHZpZXdCb3g9IjAgMCAxOS4xNTQgMTkuMTUiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNkOTAzNjg7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTguODU5LDE3LjQ0NmwtNC43MjEtNC43NDFhNy41NTEsNy41NTEsMCwwLDAsMS44NzktNC45NzJBNy44ODQsNy44ODQsMCwwLDAsOC4wMDgsMCw3Ljg4NCw3Ljg4NCwwLDAsMCwwLDcuNzMzYTcuODg0LDcuODg0LDAsMCwwLDguMDA4LDcuNzMzLDguMTE4LDguMTE4LDAsMCwwLDQuNTg4LTEuNGw0Ljc1Nyw0Ljc3N2ExLjA3MSwxLjA3MSwwLDAsMCwxLjQ3Ny4wMjhBLjk4Ni45ODYsMCwwLDAsMTguODU5LDE3LjQ0NlpNOC4wMDgsMi4wMTdhNS44MjcsNS44MjcsMCwwLDEsNS45MTksNS43MTYsNS44MjcsNS44MjcsMCwwLDEtNS45MTksNS43MTZBNS44MjcsNS44MjcsMCwwLDEsMi4wODksNy43MzMsNS44MjcsNS44MjcsMCwwLDEsOC4wMDgsMi4wMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4xNTQpIHJvdGF0ZSg5MCkiLz48L3N2Zz4="}},function(e){e.O(0,[857,926,2,817,976,774,888,179],(function(){return t=2890,e(e.s=t);var t}));var t=e.O();_N_E=t}]);