"use strict";(self.webpackChunk_sensoro_design_charts=self.webpackChunk_sensoro_design_charts||[]).push([[290],{34764:function(f,t,e){e.r(t);var o=e(48305),l=e.n(o),_=e(26567),h=e(50959),m=e(22744),s=e(11527),E={name:"root",children:[{name:"\u51B7\u6749",value:154010263},{name:"\u4E91\u6749",value:147739e3},{name:"\u843D\u53F6\u677E",value:3430},{name:"\u7EA2\u677E",value:292706754},{name:"\u6A1F\u5B50\u677E",value:305178345},{name:"\u8D64\u677E",value:377170774},{name:"\u5176\u5B83\u704C\u6728(\u5176\u5B83\u704C\u6728\u6811\u79CD)",value:416292188}]};t.default=function(){var a=(0,h.useState)({data:E,colorField:"name",tooltip:{formatter:function(r){return{name:r.name,value:"".concat(r.value)}}}}),i=l()(a,2),u=i[0],d=i[1];return(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,s.jsx)("div",{style:{width:"50%"},children:(0,s.jsx)(m.Z,{value:JSON.stringify(u,null,2),onChange:function(r){return d(JSON.parse(r))}})}),(0,s.jsx)("div",{style:{width:"50%"},children:(0,s.jsx)(_.WB,{title:"\u77E9\u5F62\u6811\u56FE",config:u},"11")})]})}},80747:function(f,t,e){e.r(t);var o=e(26567),l=e(50959),_=e(11527);t.default=function(){return(0,_.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,_.jsx)("div",{style:{width:"50%"},children:(0,_.jsx)(o.WB,{title:"\u77E9\u5F62\u6811\u56FE",empty:!0,style:{height:200}})}),(0,_.jsx)("div",{style:{width:"50%"},children:(0,_.jsx)(o.WB,{title:"\u77E9\u5F62\u6811\u56FE",empty:(0,_.jsx)("div",{style:{height:160,display:"flex",alignItems:"center"},children:"dom\u5F62\u5F0F\u7A7A\u72B6\u6001"})})})]})}},46328:function(f,t,e){e.r(t);var o=e(26068),l=e.n(o),_=e(48305),h=e.n(_),m=e(26567),s=e(50959),E=e(22744),a=e(11527);t.default=function(){var i=(0,s.useState)({data:{name:"root",children:[]},colorField:"brand",tooltip:{formatter:function(n){return{name:n.name,value:"".concat(n.value)}}}}),u=h()(i,2),d=u[0],c=u[1],r=function(){fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/mobile.json").then(function(n){return n.json()}).then(function(n){return c(l()(l()({},d),{},{data:{name:"root",children:n}}))}).catch(function(n){console.log("fetch data failed",n)})};return(0,s.useEffect)(function(){r()},[]),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,a.jsx)("div",{style:{width:"40%"},children:(0,a.jsx)(E.Z,{value:JSON.stringify(d,null,2),onChange:function(n){return c(JSON.parse(n))}})}),(0,a.jsx)("div",{style:{width:"60%"},children:(0,a.jsx)(m.WB,{title:"\u591A\u7EA7\u77E9\u5F62\u6811\u56FE",config:d},"11")})]})}}}]);
