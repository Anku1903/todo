(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{18:function(e,t,n){},29:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(8),c=n.n(r);n(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(26),i=n(20),u=n(25),s=n.n(u),m=n(54),d=n(23),f=n.n(d),E=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todo"},l.a.createElement("li",null," ",l.a.createElement("span",null,l.a.createElement(f.a,{fontSize:"inherit",className:"del",onClick:function(){e.onsel(e.id)}})," ")," ",e.text," ")))},h=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),u=Object(i.a)(c,2),d=u[0],f=u[1],h=function(e){f((function(t){return t.filter((function(t,n){return n!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"center"},l.a.createElement("h1",null," ToDo List"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Add items to list",value:n,onChange:function(e){r(e.target.value)}}),l.a.createElement(m.a,{"aria-label":"delete",onClick:function(){f((function(e){return[].concat(Object(o.a)(e),[n])})),r("")}},l.a.createElement(s.a,{fontSize:"large"})),l.a.createElement("ol",null,d.map((function(e,t){return l.a.createElement(E,{text:e,key:t,id:t,onsel:h})}))))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.60c193ad.chunk.js.map