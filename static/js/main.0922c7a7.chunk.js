(this.webpackJsonpmyndaleit=this.webpackJsonpmyndaleit||[]).push([[0],{12:function(_,r,e){_.exports={main:"HomePage_main__1pPJ9",title:"HomePage_title__3BWD-",slidein:"HomePage_slidein__1_2-0",legend:"HomePage_legend__16t-A",error:"HomePage_error__R7Tmr"}},157:function(_,r,e){"use strict";e.r(r);var i,d=e(1),t=e.n(d),c=e(47),n=e.n(c),s=(e(57),e(3)),a=e(5),g=e(52),l=e.n(g),m=e(48),o=e.n(m),j=e(2),u=function(_){var r=_.handleSearch,e=_.query,i=Object(d.useRef)(null);return Object(d.useEffect)((function(){i.current&&i.current.focus()}),[i]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("input",{className:o.a.searchBar,ref:i,type:"text",value:e,placeholder:"Sl\xe1\xf0u inn leitaror\xf0",onChange:r,autoFocus:!0},"search")})},b=e(23),x=e.n(b),O=function(_){var r=_.item,e=_.reference;return e?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:x.a.card,children:Object(j.jsx)("a",{ref:e,href:r.image.contextLink,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{alt:r.title,src:r.link},r.displayLink)})})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:x.a.card,children:Object(j.jsx)("a",{href:r.image.contextLink,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{alt:r.title,src:r.link},r.displayLink)})})})},h=e(8),f=e(9),G=e.n(f),p=e(49),v=e.n(p),y=function(_){var r,e=_.xs,i=_.sm,d=_.md,t=_.lg,c=_.spacing,n=_.children,s=v()((r={},Object(h.a)(r,G.a["grid_xs_".concat(e)],e),Object(h.a)(r,G.a["grid_xs_text_".concat(e)],e),Object(h.a)(r,G.a["grid_sm_".concat(i)],i),Object(h.a)(r,G.a["grid_sm_text_".concat(i)],i),Object(h.a)(r,G.a["grid_md_".concat(d)],d),Object(h.a)(r,G.a["grid_lg_".concat(t)],t),Object(h.a)(r,G.a["grid_spacing_".concat(c)],c),r));return Object(j.jsx)("div",{className:s,children:n})},k=e(50),S=e.n(k),F=function(_){var r=_.items,e=_.lastPicEl,i=_.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:i}),Object(j.jsx)("div",{className:S.a.container,children:null===r||void 0===r?void 0:r.map((function(_,i){return r.length===i+1?Object(j.jsx)(y,{xs:12,sm:6,md:4,lg:3,spacing:"md",children:Object(j.jsx)(O,{reference:e,item:_})},i):Object(j.jsx)(y,{xs:12,sm:6,md:4,lg:3,spacing:"md",children:Object(j.jsx)(O,{item:_},i)},i)}))})]})},P=e(51),B=e.n(P),E=function(){return Object(j.jsx)(B.a,{type:"bubbles",color:"rgba(242,95,47,1)",height:100,width:100})},M=e(24),N=e(17),C=e.n(N),I=function(_,r,e){var t=Object(d.useState)(!1),c=Object(a.a)(t,2),n=c[0],s=c[1],g=Object(d.useState)(!1),l=Object(a.a)(g,2),m=l[0],o=l[1],j=Object(d.useState)(""),u=Object(a.a)(j,2),b=u[0],x=u[1],O=Object(d.useState)([]),h=Object(a.a)(O,2),f=h[0],G=h[1],p=Object(d.useState)(!1),v=Object(a.a)(p,2),y=v[0],k=v[1];return i=e?"../../myndaleit/dataAccepted.json":"https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug",Object(d.useEffect)((function(){G([])}),[_]),Object(d.useEffect)((function(){o(!1);var e=function(){},d=10*(r-1)+1;return _?(s(!0),C()({method:"GET",url:i,params:{q:_,start:d,searchType:"image",key:"AIzaSyBnoIKNer0fsXS8i3-1SnAp73RB4FeKQHI"},cancelToken:new C.a.CancelToken((function(_){e=_}))}).then((function(_){G((function(r){var e,i;return[].concat(Object(M.a)(r),Object(M.a)(null===_||void 0===_||null===(e=_.data)||void 0===e||null===(i=e.items)||void 0===i?void 0:i.map((function(_){return _}))))})),k(_.data.items.length>0),s(!1)})).catch((function(_){C.a.isCancel(_)||(s(!1),o(!0),429===_.response.status?x("The API has closed for business today as it is limited to 100 requests per day. "):x(_.message))}))):s(!1),function(){return e()}}),[_,r]),{loading:n,error:m,errorMessage:b,items:f,hasMore:y}},K=e(12),A=e.n(K),T=e(11),z=function(_){var r=_.dummy,e=Object(d.useState)(""),i=Object(a.a)(e,2),t=i[0],c=i[1],n=Object(d.useState)(1),s=Object(a.a)(n,2),g=s[0],m=s[1],o=I(t,g,r),b=o.loading,x=o.error,O=o.errorMessage,h=o.items,f=o.hasMore,G=Object(d.useRef)(),p=Object(d.useCallback)((function(_){b||(G.current&&G.current.disconnect(),G.current=new IntersectionObserver((function(_){_[0].isIntersecting&&f&&m((function(_){return _+1}))})),_&&G.current.observe(_))}),[b,f]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:A.a.legend}),Object(j.jsxs)("main",{className:A.a.main,children:[Object(j.jsx)(y,{xs:4,spacing:"md",children:Object(j.jsx)("h1",{className:"".concat(A.a.title),children:"Myndaleit"})}),Object(j.jsxs)(F,{items:h,lastPicEl:p,children:[Object(j.jsxs)(y,{xs:12,spacing:"md",children:[Object(j.jsx)(u,{query:t,handleSearch:function(_){c(l.a.escape(_.currentTarget.value)),m(1)}}),Object(j.jsx)(j.Fragment,{children:x&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:A.a.error,children:O}),Object(j.jsx)(T.c,{onClick:function(){c("")},className:A.a.error,to:"/myndaleit/dummy",children:"Click here to cut out the middle man"})]})})]}),Object(j.jsx)(j.Fragment,{children:b&&Object(j.jsx)(E,{})})]})]})]})},H=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"404 - Fannst ekki!"}),Object(j.jsx)(T.b,{to:"/myndaleit",children:"Fara heim"})]})},J=function(){return Object(d.useEffect)((function(){!function(){var _=0;setInterval((function(){if(document)try{document.getElementById("icon").href="./favicon-".concat(_++%4+1,".png")}catch(r){}_>1e5&&(_=0)}),1e3)}()}),[]),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/myndaleit",element:Object(j.jsx)(z,{dummy:!1})}),Object(j.jsx)(s.a,{path:"/myndaleit/dummy",element:Object(j.jsx)(z,{dummy:!0})}),Object(j.jsx)(s.a,{path:"*",element:Object(j.jsx)(H,{})})]})};n.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(T.a,{children:Object(j.jsx)(J,{})})}),document.getElementById("root"))},23:function(_,r,e){_.exports={card:"PictureCard_card__XvoiF"}},48:function(_,r,e){_.exports={searchBar:"SearchBar_searchBar__33MOO"}},50:function(_,r,e){_.exports={container:"PictureGrid_container__20a0o"}},57:function(_,r,e){},9:function(_,r,e){_.exports={grid:"Grid_grid__3FBL3",grid_xs_1:"Grid_grid_xs_1__3B1hc",grid_xs_2:"Grid_grid_xs_2__2a85n",grid_xs_3:"Grid_grid_xs_3__3gm2D",grid_xs_4:"Grid_grid_xs_4__r30H9",grid_xs_5:"Grid_grid_xs_5__1tVrm",grid_xs_6:"Grid_grid_xs_6__3JsrB",grid_xs_7:"Grid_grid_xs_7__1Iktn",grid_xs_8:"Grid_grid_xs_8__lR0hl",grid_xs_9:"Grid_grid_xs_9__2FiCY",grid_xs_10:"Grid_grid_xs_10__1hWgZ",grid_xs_11:"Grid_grid_xs_11__TzV3Q",grid_xs_12:"Grid_grid_xs_12__PKW0X",grid_sm_1:"Grid_grid_sm_1__2lh2d",grid_sm_2:"Grid_grid_sm_2__3ghPk",grid_sm_3:"Grid_grid_sm_3__xgMaM",grid_sm_4:"Grid_grid_sm_4__3ulJA",grid_sm_5:"Grid_grid_sm_5__3DNeB",grid_sm_6:"Grid_grid_sm_6__ylSUz",grid_sm_7:"Grid_grid_sm_7__1ZwES",grid_sm_8:"Grid_grid_sm_8__3soZ4",grid_sm_9:"Grid_grid_sm_9__1PJJv",grid_sm_10:"Grid_grid_sm_10__pnlzz",grid_sm_11:"Grid_grid_sm_11__3oyuM",grid_sm_12:"Grid_grid_sm_12__3S7So",grid_md_1:"Grid_grid_md_1__3Kz1C",grid_md_2:"Grid_grid_md_2__10Vxy",grid_md_3:"Grid_grid_md_3__2MLIK",grid_md_4:"Grid_grid_md_4__d6cry",grid_md_5:"Grid_grid_md_5__1rlxO",grid_md_6:"Grid_grid_md_6__2AfF-",grid_md_7:"Grid_grid_md_7__2KvTM",grid_md_8:"Grid_grid_md_8__k4Zmz",grid_md_9:"Grid_grid_md_9__11xD2",grid_md_10:"Grid_grid_md_10__dWlaP",grid_md_11:"Grid_grid_md_11__2vfq4",grid_md_12:"Grid_grid_md_12__2reja",grid_lg_1:"Grid_grid_lg_1__2SAYG",grid_lg_2:"Grid_grid_lg_2__2DKDt",grid_lg_3:"Grid_grid_lg_3__2zCk1",grid_lg_4:"Grid_grid_lg_4__3d3gp",grid_lg_5:"Grid_grid_lg_5__7KyVY",grid_lg_6:"Grid_grid_lg_6__2ibE2",grid_lg_7:"Grid_grid_lg_7__2fta6",grid_lg_8:"Grid_grid_lg_8__3e_sV",grid_lg_9:"Grid_grid_lg_9__2sFXF",grid_lg_10:"Grid_grid_lg_10__13F1R",grid_lg_11:"Grid_grid_lg_11__3laGE",grid_lg_12:"Grid_grid_lg_12__2Ma7n",grid_spacing_sm:"Grid_grid_spacing_sm__1dW0C",grid_spacing_md:"Grid_grid_spacing_md__1vbKK",grid_spacing_lg:"Grid_grid_spacing_lg__2EuyV"}}},[[157,1,2]]]);
//# sourceMappingURL=main.0922c7a7.chunk.js.map