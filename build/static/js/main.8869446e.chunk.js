(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=(t(19),t(3)),l=t(2),i=t.n(l),m="/api/persons",s=function(){return i.a.get(m)},f=function(e){return i.a.post(m,e)},d=function(e){return i.a.delete("".concat(m,"/").concat(e))},p=function(e){var n=e.name,t=e.nameHandler,a=e.num,o=e.numHandler,u=e.persons,c=e.setPersons;return r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),(t={name:n,number:a}).number&&t.name?u.every((function(e){return e.name!==t.name}))?f(t).then((function(e){c(u.concat(e.data))})):alert("".concat(t.name," is already in phonebook")):alert("Incomplete information provided")}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{type:"tel",value:a,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},b=function(e){var n=e.persons,t=e.query,a=e.deleteEntry;return n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())})).map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("p",null,e.name,"  #",e.number),r.a.createElement("button",{onClick:function(){return a(e.name)}},"Delete"))}))},h=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),l=Object(c.a)(u,2),i=l[0],m=l[1],f=Object(a.useState)(""),h=Object(c.a)(f,2),v=h[0],E=h[1],y=Object(a.useState)(""),w=Object(c.a)(y,2),g=w[0],k=w[1];Object(a.useEffect)((function(){s().then((function(e){return o(e.data)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),"search phonebook: ",r.a.createElement("input",{value:g,onChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"Add Entry:"),r.a.createElement(p,{name:i,nameHandler:function(e){m(e.target.value)},num:v,numHandler:function(e){E(e.target.value)},persons:t,setPersons:o}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(b,{persons:t,query:g,deleteEntry:function(e){var n=t.find((function(n){return n.name===e}));window.confirm("Are you sure you want to delete ".concat(e,"?"))&&d(n.id).then((function(){o(t.filter((function(n){return n.name!==e})))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8869446e.chunk.js.map