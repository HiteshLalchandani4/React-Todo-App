(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(6),o=a.n(r),c=(a(17),a(7)),i=a(3),m=(a(19),a(4));function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/about"},"About"))),e.searchBar?l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")):"no search bar")))}function u(e){return l.a.createElement("div",null,l.a.createElement("h4",null,e.todo.title),l.a.createElement("p",null,e.todo.desc),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.onDelete(e.todo)}},"Delete"),l.a.createElement("hr",null))}s.defaultProps={title:"Default Title"};var d=function(e){return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-center"},"Todos List"),0===e.todo.length?"No Todos to Display":e.todo.map(function(t){return l.a.createElement(u,{todo:t,key:t.sno,onDelete:e.onDelete})}))},b=(a(21),function(){return l.a.createElement("div",{className:"only-class"},"copyright \xa9 MyTodosList.com")}),E=function(e){var t={width:"100%"};return l.a.createElement("div",null,l.a.createElement("h3",null,"Add Todo"),l.a.createElement("label",null,"Title"),l.a.createElement("input",{style:t,type:"text",id:"title"}),l.a.createElement("label",null,"Description"),l.a.createElement("input",{style:t,type:"text",id:"desc"}),l.a.createElement("button",{style:{padding:"5px",backgroundColor:"green",marginTop:"8px"},onClick:function(){var t=document.getElementById("title").value,a=document.getElementById("desc").value;t&&a?e.addIt(t,a):alert("Title or description can not be empty"),document.getElementById("title").value="",document.getElementById("desc").value=""}},"Submit"))},p=function(){return l.a.createElement("div",null,"This is about section.",l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore mollitia dolores excepturi error fugiat doloribus earum autem, placeat, sed modi rerum aliquam. Laboriosam dignissimos corporis, quaerat architecto rem alias earum."))},g=a(0);var v=function(){var e;e=null==localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(r))},[r]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Todos List",searchBar:!0}),l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/",element:l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{addIt:function(e,t){var a={sno:r.length+1,title:e,desc:t};o([].concat(Object(c.a)(r),[a]))}}),l.a.createElement(d,{todo:r,onDelete:function(e){o(r.filter(function(t){return t!==e}))}}))}),l.a.createElement(g.a,{exact:!0,path:"/about",element:l.a.createElement(p,null)})),l.a.createElement(b,null))},f=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,24)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(m.a,null,l.a.createElement(v,null))),f()},8:function(e,t,a){e.exports=a(23)}},[[8,3,2]]]);
//# sourceMappingURL=main.38260e03.chunk.js.map