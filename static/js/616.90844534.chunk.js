"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[616],{616:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(689),c=n(87),i=n(791),s=n(390),o={container:"MovieDetails_container__yKjnD",description:"MovieDetails_description__RMUTf",btnGoBack:"MovieDetails_btnGoBack__rrPWy",infoListItem:"MovieDetails_infoListItem__ve5nd",title:"MovieDetails_title__-2Xvc",info:"MovieDetails_info__QdAR5"},u=n(322),l=n(184),f=function(){var e,t,n=(0,i.useState)(null),f=(0,r.Z)(n,2),d=f[0],p=f[1],v=(0,a.UO)().id,h=(0,a.TH)(),_=null!==(e=null===(t=h.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";console.log(h.state),(0,i.useEffect)((function(){(0,s.Pg)(v).then((function(e){return p(e)})).catch((function(e){return console.log(e)}))}),[v]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.rU,{to:_,className:o.btnGoBack,children:[(0,l.jsx)(u.JSy,{size:20})," Go back"]}),d&&(0,l.jsxs)("h1",{className:o.title,children:[d.title," (",new Date(d.release_date).getFullYear(),")"]}),(0,l.jsxs)("div",{className:o.container,children:[d&&(0,l.jsx)("img",{width:300,src:null===d.poster_path?"".concat(s.X7):"".concat(s.bV).concat(d.poster_path),alt:d.original_title}),(0,l.jsxs)("div",{className:o.description,children:[d&&(0,l.jsxs)("p",{className:o.info,children:[(0,l.jsx)("b",{children:"User Score:"})," ",d.vote_average.toFixed(2)]}),d&&(0,l.jsxs)("p",{className:o.info,children:[(0,l.jsx)("b",{children:"Overview:"})," ",d.overview]}),d&&(0,l.jsxs)("p",{className:o.info,children:[(0,l.jsx)("b",{children:"Genre:"})," ",d.genres.map((function(e){return e.name})).join(" ")]})]})]}),(0,l.jsx)("h2",{className:o.title,children:"Additional information:"}),(0,l.jsxs)("ul",{className:o.infoList,children:[(0,l.jsx)("li",{className:o.infoListItem,children:(0,l.jsx)(c.rU,{to:"cast",state:{from:_},children:"Casts"})}),(0,l.jsx)("li",{className:o.infoListItem,children:(0,l.jsx)(c.rU,{to:"reviews",state:{from:_},children:"Reviews"})})]}),(0,l.jsx)(a.j3,{})]})}},390:function(e,t,n){n.d(t,{Pg:function(){return f},Wd:function(){return d},X7:function(){return h},Zn:function(){return u},bV:function(){return v},tx:function(){return p},z1:function(){return l}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s="d2d3492027db5ed5774b8abf017189bc",o="https://api.themoviedb.org",u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/3/trending/all/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/3/search/movie?api_key=").concat(s,"&page=1&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o,"/3/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v="",h=""}}]);
//# sourceMappingURL=616.90844534.chunk.js.map