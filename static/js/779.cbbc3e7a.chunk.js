"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{7398:function(e,t,n){n.d(t,{$r:function(){return l},U3:function(){return o},Z2:function(){return f},aX:function(){return p}});var r,a,c,u,s=n(168),i=n(6444),o=i.ZP.h1(r||(r=(0,s.Z)(["\n    text-transform: uppercase;\n    text-align: center;\n"]))),l=i.ZP.ul(a||(a=(0,s.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: flex-end;\n    padding: 0;\n    gap: 40px;\n    list-style: none;\n"]))),p=i.ZP.li(c||(c=(0,s.Z)(["\n    width: 200px;\n"]))),f=i.ZP.p(u||(u=(0,s.Z)(["\n    margin: 0;\n    padding: 10px;\n    text-transform: uppercase;\n    color: black;\n    font-weight: 700;\n"])))},2779:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(885),a=n(2791),c=n(501),u=n(5861),s=n(7757),i=n.n(s),o=n(4569),l=n.n(o);l().defaults.baseURL="https://api.themoviedb.org/3/";var p=function(){var e=(0,u.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get("search/movie?api_key=".concat("cff5b6264b529338996c58c3bf596dd8","&query=").concat(t,"&page=1"));case 3:if(n=e.sent){e.next=8;break}alert("Error"),e.next=9;break;case 8:return e.abrupt("return",n.data.results);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),f=n(7398),d=n(184),m=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],s=(0,a.useState)([]),i=(0,r.Z)(s,2),o=i[0],l=i[1],m=(0,c.lr)(),x=(0,r.Z)(m,2),h=(x[0],x[1]);(0,a.useEffect)((function(){""!==n&&p(n).then((function(e){return l(e)}))}),[n]);return(0,d.jsxs)("main",{children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){h(""!==e?{query:e}:{})}(e.target.elements.query.value),u(e.target.elements.query.value)},children:[(0,d.jsx)("input",{type:"text",name:"query"}),(0,d.jsx)("button",{type:"submit",children:"Submit"})]}),o&&(0,d.jsx)(f.$r,{children:o.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return(0,d.jsx)(f.aX,{children:(0,d.jsxs)(c.rU,{to:"".concat(t),state:{from:"/movies"},style:{textDecoration:"none"},children:[(0,d.jsx)(f.Z2,{children:n}),(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r),alt:"Film"})]})},t)}))})]})}}}]);
//# sourceMappingURL=779.cbbc3e7a.chunk.js.map