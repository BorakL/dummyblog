(this["webpackJsonpdummy-blog"]=this["webpackJsonpdummy-blog"]||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},92:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(22),r=c.n(s),i=(c(66),c(67),c(3)),o=c(7),j=c(103),l=c(23),d=c(106),u=c(96),b=c(97),O=c(56);function h(e){var t=new Date(e),c=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],a=t.getDate(),n=t.getFullYear(),s=t.getHours(),r=t.getMinutes();return"".concat(c," ").concat(a,", ").concat(n," at ").concat(s,":").concat(r)}c(68);var x=c(2);var m=function(e){var t="".concat(e.owner.title," ").concat(e.owner.firstName," ").concat(e.owner.lastName),c=h(e.publishDate);return Object(x.jsx)(d.a,{className:"post ".concat(e.styleName?e.styleName:""),children:Object(x.jsxs)(d.a.Body,{children:[Object(x.jsxs)(d.a.Title,{children:[Object(x.jsx)("div",{className:"owner-img",children:Object(x.jsx)(u.a,{src:"".concat(e.owner.picture),roundedCircle:!0})}),Object(x.jsxs)("div",{className:"ownerName-data",children:[Object(x.jsx)("div",{children:t}),Object(x.jsx)("div",{className:"data",children:c})]})]}),Object(x.jsxs)("div",{className:"post-main",children:[Object(x.jsx)(d.a.Text,{children:e.text}),Object(x.jsx)(d.a.Img,{src:e.image})]}),Object(x.jsxs)("div",{className:"post-likes",children:[Object(x.jsx)(O.a,{})," ",e.likes]}),Object(x.jsx)("div",{className:"post-tags",children:e.tags.map((function(e){return Object(x.jsx)(b.a,{children:e},e)}))}),Object(x.jsx)("div",{className:"post-edit",children:Object(x.jsx)(l.b,{to:"".concat(e.id,"/edit"),className:"btn-lg",children:"Edit Post"})})]})})},f=c(25),p=c.n(f),g={headers:{"app-id":"616d98ada2239f6f8801088d"}},v=function(e){return p.a.get("https://dummyapi.io/data/v1/post/".concat(e,"/"),g)};var y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),r=Object(o.a)(s,2),d=r[0],u=r[1],b=Object(a.useState)(12),O=Object(o.a)(b,2),h=O[0],f=O[1],v=Object(a.useState)(1),y=Object(o.a)(v,2),N=y[0],C=y[1];Object(a.useEffect)((function(){(function(e,t){return p.a.get("https://dummyapi.io/data/v1/post?page=".concat(e,"&limit=").concat(t),g)})(d,h).then((function(e){n(e.data.data),u(e.data.page),C(e.data.total),f(e.data.limit)}))}),[d,h]);var S=Math.ceil(N/h),w={padding:"2em 0 1em",display:"flex",justifyContent:"center",fontSize:"1.5em"};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:w,children:Object(x.jsx)(l.b,{to:"/create",className:"btn-lg",children:"Add New Post"})}),Object(x.jsx)("div",{style:{padding:"3em 0",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",gap:"3em"},children:c.map((function(e){return Object(x.jsxs)(l.b,{to:"/".concat(e.id),children:[" ",Object(x.jsx)(m,Object(i.a)({},e),e.id)," "]},e.id)}))}),Object(x.jsx)("div",{style:w,children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(j.a.First,{onClick:function(){return u(0)}}),Object(x.jsx)(j.a.Prev,{onClick:function(){return u(d-1)},disabled:0===d}),Object(x.jsx)(j.a.Item,{active:!0,children:d+1}),Object(x.jsx)(j.a.Next,{onClick:function(){return u(d+1)},disabled:d===S}),Object(x.jsx)(j.a.Last,{onClick:function(){return u(S-1)}})]})})]})},N=c(9),C=c(104),S=c(60),w=c(99);var k=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){p.a.get("https://dummyapi.io/data/v1/user",g).then((function(e){s(e.data.data)})).catch((function(e){console.log(e)}))}),[]),Object(x.jsx)(C.a.Group,{children:Object(x.jsxs)(C.a.Select,{onChange:function(t){return e.selectOwner(t)},disabled:!!e.disabled,required:!0,children:[Object(x.jsx)("option",{hidden:!0,children:"Select user"}),n.map((function(e){return Object(x.jsx)("option",{value:e.id,children:"".concat(e.firstName," ").concat(e.lastName)},e.id)}))]})})},F=c(98);var T=function(e){return Object(x.jsx)(F.a,{className:"comment",children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(d.a.Body,{children:[Object(x.jsxs)(d.a.Title,{children:[e.comment.owner.firstName," ",Object(x.jsx)("span",{className:"date",children:h(e.comment.publishDate)})]}),Object(x.jsx)(d.a.Text,{children:e.comment.message})]})})})};c(92);var D=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(0),i=Object(o.a)(r,2),j=i[0],l=i[1],d=Object(a.useState)(""),u=Object(o.a)(d,2),b=u[0],O=u[1],h=Object(a.useState)(""),m=Object(o.a)(h,2),f=m[0],v=m[1];Object(a.useEffect)((function(){var t;console.log(e.id),(t=e.id,p.a.get("https://dummyapi.io/data/v1/post/".concat(t,"/comment"),g)).then((function(e){s(e.data.data),l(e.data.total)}))}),[e.id]);var y=function(t){t.preventDefault();var c={message:f,owner:b,post:e.id};(function(e){return p.a.post("https://dummyapi.io/data/v1/comment/create",e,g)})(c).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),console.log("handle submit: ",c)};return Object(x.jsxs)("div",{className:"comments",children:[Object(x.jsx)("h2",{children:"Leave Comment"}),Object(x.jsxs)(C.a,{onSubmit:function(e){return y(e)},children:[Object(x.jsx)(k,{selectOwner:function(e){O(e.target.value)}}),Object(x.jsx)(S.a,{controlId:"floatingTextarea2",label:"Comment",children:Object(x.jsx)(C.a.Control,{as:"textarea",style:{height:"100px"},onChange:function(e){return v(e.target.value)}})}),Object(x.jsx)(w.a,{type:"submit",children:"Add Comment"})]}),Object(x.jsxs)("h2",{children:["Comments (",j,")"]}),n.map((function(e){return Object(x.jsx)(T,{comment:e},e.id)}))]})},E=c(100);function L(){return Object(x.jsx)("div",{style:{display:"flex",height:"100vh",width:"100%",alignItems:"center",justifyContent:"center"},children:Object(x.jsx)(E.a,{animation:"border",size:"xg"})})}var I=function(){var e=Object(N.g)().id,t=Object(a.useState)({}),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),j=Object(o.a)(r,2),l=j[0],d=j[1],u=Object(a.useState)(!1),b=Object(o.a)(u,2),O=b[0],h=b[1];return Object(a.useEffect)((function(){h(!0),v(e).then((function(e){s(e.data),h(!1)})).catch((function(e){console.log("Error: ",e),d(!0)}))}),[e]),Object(x.jsxs)(x.Fragment,{children:[l&&Object(x.jsx)(N.a,{to:"/"}),0===Object.keys(n).length||O?Object(x.jsx)(L,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,Object(i.a)(Object(i.a)({},n),{},{styleName:"page"})),Object(x.jsx)(D,{id:e})]})]})};var B=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"404 Not Found"})})},G=c(102),P=c(101),M=c(40);var A=function(e){var t=Object(a.useState)(e),c=Object(o.a)(t,2),n=c[0],s=c[1];return[n,function(e){s(e)},function(){s(e)}]},J=c(105),q=c(61);var z=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){p.a.get("https://dummyapi.io/data/v1/tag",g).then((function(e){s(e.data.data)})).catch((function(e){console.log(e)}))}),[]);var r={display:"flex",justifyContent:"space-between"};return Object(x.jsxs)(C.a.Group,{children:[Object(x.jsx)(C.a.Label,{children:"Tags"}),Object(x.jsx)(C.a.Select,{onChange:function(t){return e.addTag(t)},children:n.map((function(e){return Object(x.jsx)("option",{value:e,children:e},e)}))}),Object(x.jsx)(J.a,{children:e.tags.map((function(t){return Object(x.jsxs)(J.a.Item,{style:r,children:[t," ",Object(x.jsx)(q.a,{className:"icon",onClick:function(){return e.removeTag(t)}})]},t)}))})]})};var H=function(){var e=Object(N.g)().id,t=Object(a.useState)(!1),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)([]),i=Object(o.a)(r,2),j=i[0],l=i[1],d=A(""),u=Object(o.a)(d,3),b=u[0],O=u[1],h=u[2],m=A(""),f=Object(o.a)(m,3),y=f[0],S=f[1],w=f[2],F=A(""),T=Object(o.a)(F,3),D=T[0],E=T[1],I=T[2],B=A(0),G=Object(o.a)(B,3),P=G[0],J=G[1],q=G[2],H=Object(a.useState)("Create Post"),W=Object(o.a)(H,2),U=W[0],Y=W[1],K=Object(a.useState)(!1),Q=Object(o.a)(K,2),R=Q[0],V=Q[1];Object(a.useEffect)((function(){e&&(V(!0),v(e).then((function(e){l(e.data.tags),O(e.data.owner.id),S(e.data.text),E(e.data.image),J(e.data.likes),Y("Edit Post"),V(!1)})).catch((function(e){s(!0)})))}),[e]);var X=function(t){t.preventDefault();var c={text:y,image:D,likes:P,tags:j,owner:b};e?function(e,t){return p.a.put("https://dummyapi.io/data/v1/post/".concat(t),e,g)}(c,e).then((function(e){console.log("Edit post: ",e),s(!0)})).catch((function(e){console.log(e)})):(function(e){return p.a.post("https://dummyapi.io/data/v1/post/create/",e,g)}(c).then((function(e){console.log(e),alert("New post successfully created")})).catch((function(e){console.log(e)})),l([]),h(),w(),I(),q())};return Object(x.jsxs)(x.Fragment,{children:[n&&Object(x.jsx)(N.a,{to:"/"}),R?Object(x.jsx)(L,{}):Object(x.jsxs)(C.a,{onSubmit:function(e){return X(e)},style:{maxWidth:"var(--container-max-width)",margin:"auto"},children:[Object(x.jsx)("h2",{children:U}),Object(x.jsxs)(C.a.Group,{children:[Object(x.jsx)(C.a.Label,{children:"Text"}),Object(x.jsx)(C.a.Control,{as:"textarea",onChange:function(e){return S(e.target.value)},value:y,placeholder:y,required:!0})]}),Object(x.jsxs)(C.a.Group,{children:[Object(x.jsx)(C.a.Label,{children:"Image path"}),Object(x.jsx)(C.a.Control,{type:"text",onChange:function(e){return E(e.target.value)},value:D,placeholder:D,required:!0})]}),Object(x.jsxs)(C.a.Group,{children:[Object(x.jsx)(C.a.Label,{children:"Likes"}),Object(x.jsx)(C.a.Control,{type:"number",onChange:function(e){return J(e.target.value)},placeholder:P,required:!0})]}),Object(x.jsxs)(C.a.Group,{children:[Object(x.jsx)(C.a.Label,{children:"User"}),Object(x.jsx)(k,{selectOwner:function(e){O(e.target.value)},disabled:e})]}),Object(x.jsx)(z,{tags:j,addTag:function(e){-1===j.indexOf(e.target.value)&&l([].concat(Object(M.a)(j),[e.target.value]))},removeTag:function(e){var t=j.filter((function(t){return t!==e}));l(t)}}),Object(x.jsx)("button",{className:"btn-lg",type:"submit",children:U})]})]})};var W=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)(l.a,{children:[Object(x.jsx)(G.a,{style:{backgroundColor:"var(--primary-color)"},children:Object(x.jsx)(P.a,{children:Object(x.jsx)(G.a.Brand,{style:{fontFamily:"Gochi Hand",fontSize:"1.5em"},children:Object(x.jsx)(l.b,{to:"/",children:"Dummy Blog"})})})}),Object(x.jsx)("div",{className:"main",children:Object(x.jsxs)(N.d,{children:[Object(x.jsx)(N.b,{exact:!0,path:"/",children:Object(x.jsx)(y,{})}),Object(x.jsx)(N.b,{exact:!0,path:"/create",children:Object(x.jsx)(H,{})}),Object(x.jsx)(N.b,{exact:!0,path:"/:id",children:Object(x.jsx)(I,{})}),Object(x.jsx)(N.b,{exact:!0,path:"/:id/edit",children:Object(x.jsx)(H,{})}),Object(x.jsx)(N.b,{exact:!0,children:Object(x.jsx)(B,{})})]})})]}),Object(x.jsx)("div",{className:"footer",children:"Copyright \xa9 2021 Dummy Blog"})]})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,107)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};c(93);r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(W,{})}),document.getElementById("root")),U()}},[[94,1,2]]]);
//# sourceMappingURL=main.1211e05d.chunk.js.map