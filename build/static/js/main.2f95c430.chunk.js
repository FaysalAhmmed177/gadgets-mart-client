(this["webpackJsonpgadgets-mart-client"]=this["webpackJsonpgadgets-mart-client"]||[]).push([[0],{57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},65:function(e,t,c){},85:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(27),a=c.n(r),o=(c(57),c(6)),j=(c(58),c(8)),i=(c(59),c(1)),l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-sm mt-3",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"navbar-brand",children:"GADGETS MART"}),Object(i.jsxs)("div",{className:"navbar-nav d-flex",children:[Object(i.jsx)(j.b,{to:"/home",className:"text-dark link",children:"Home"}),Object(i.jsx)(j.b,{to:"/orders",className:"text-dark link",children:"Orders"}),Object(i.jsx)(j.b,{to:"/admin",className:"text-dark link",children:"Admin"}),Object(i.jsx)(j.b,{to:"/deals",className:"text-dark link",children:"Deals"}),Object(i.jsx)(j.b,{to:"/login",children:Object(i.jsx)("button",{class:"btn btn-primary link",children:"Login"})})]})]})})})},d=c(5),b=function(e){var t=e.product;return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"col-md-3 mt-3",children:Object(i.jsxs)("div",{class:"card p-3 mb-3",style:{width:"255px",height:"21rem"},children:[Object(i.jsx)("img",{style:{height:"150px",width:"180px"},src:t.imageURL,class:"card-img-top",alt:"..."}),Object(i.jsxs)("div",{class:"card-body",children:[Object(i.jsx)("div",{className:"d-flex h-50 justify-content-center align-items-center",children:Object(i.jsxs)("h5",{class:"card-title",children:[t.name," - ",t.model]})}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"d-flex justify-content-center align-items-center justify-content-between",children:[Object(i.jsx)("h5",{class:"card-text ",children:t.price}),Object(i.jsx)(j.b,{to:"/checkout/".concat(t._id),children:Object(i.jsx)("button",{className:"btn btn-primary rounded",children:"Buy Now"})})]})]})]})})})},h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:4200/products").then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}))}),[]),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:c.map((function(e){return Object(i.jsx)(b,{product:e})}))})})},u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:4200/orderedProduct").then((function(e){return e.json()})).then((function(e){s(e),console.log(e)}))}),[]),Object(i.jsxs)("div",{className:"container mt-3",children:[Object(i.jsx)("h1",{children:"Order List"}),Object(i.jsx)("br",{}),Object(i.jsxs)("table",{class:"table caption-top",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Product Name"}),Object(i.jsx)("th",{children:"Price"}),Object(i.jsx)("th",{children:"Date"}),Object(i.jsx)("th",{children:"Email"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return console.log(e),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.price}),Object(i.jsx)("td",{children:e.date}),Object(i.jsx)("td",{children:e.email})]})}))})]})]})},O=(c(65),c(48)),x=c.n(O),m=c(29),p=c.n(m),f=c(47),g=c.n(f),v=c(45),N=c.n(v),y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:4200/products").then((function(e){return e.json()})).then((function(e){s(e),console.log(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"mt-3 mb-5",children:"Manage Product"}),Object(i.jsxs)("table",{class:"table caption-top",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Product"}),Object(i.jsx)("th",{children:"Quantity"}),Object(i.jsx)("th",{children:"Price"}),Object(i.jsx)("th",{children:"Action"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return console.log(e),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:"1"}),Object(i.jsx)("td",{children:e.price}),Object(i.jsxs)("td",{children:[Object(i.jsx)("button",{className:"btn btn-success",children:Object(i.jsx)(p.a,{})})," ",Object(i.jsx)("button",{className:"btn btn-danger",children:Object(i.jsx)(N.a,{})})]})]})}))})]})]})},w=c(46),P=c.n(w),S=c(50),k=function(){var e=Object(S.a)(),t=e.register,c=e.handleSubmit,s=(e.watch,e.errors,Object(n.useState)(null)),r=Object(o.a)(s,2),a=r[0],j=r[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Add Product"}),Object(i.jsxs)("form",{onSubmit:c((function(e){var t={name:e.name,model:e.model,price:e.price,imageURL:a};console.log(t),fetch("http://localhost:4200/addProduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){console.log("server side response",e)}))})),children:[Object(i.jsx)("label",{htmlFor:"name",children:"Product Name"}),Object(i.jsx)("input",{name:"name",className:"form-control w-50",placeholder:"Enter Name",ref:t}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"model",children:"Product Model"}),Object(i.jsx)("input",{name:"model",className:"form-control w-50",placeholder:"Enter quantity",ref:t}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"price",children:"Add Price"}),Object(i.jsx)("input",{name:"price",className:"form-control w-50",placeholder:"Enter price",ref:t}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"exampleRequired",type:"file",onChange:function(e){console.log(e.target.files[0]);var t=new FormData;t.set("key","ef066363ea457d07cc1dcfecbbbdf89d"),t.append("image",e.target.files[0]),P.a.post("https://api.imgbb.com/1/upload",t).then((function(e){console.log(e),j(e.data.data.display_url)})).catch((function(e){console.log(e)}))}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"submit"})]})]})},C=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"I'm from Edit AddProduct"})})},E=function(){var e=Object(n.useContext)(M),t=Object(o.a)(e,2),c=(t[0],t[1],Object(d.j)()),s=c.path,r=c.url;return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-md-3 Sidebar",children:[Object(i.jsx)(j.b,{to:"/home",className:"text-white",id:"goToHome",children:"Fresh vally"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)(j.b,{to:"".concat(r,"/manageProduct"),className:"text-white ",children:[Object(i.jsx)(g.a,{}),"   Manage Product"]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)(j.b,{to:"".concat(r,"/addProduct"),className:"text-white text-center",children:[Object(i.jsx)(x.a,{})," Add Product"]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)(j.b,{to:"".concat(r,"/editProduct"),className:"text-white text-center",children:[Object(i.jsx)(p.a,{}),"  Edit Product"]}),Object(i.jsx)("br",{})]}),Object(i.jsx)("div",{className:"col-md-9",children:Object(i.jsxs)(d.d,{children:[Object(i.jsx)(d.b,{path:"".concat(s,"/manageProduct"),children:Object(i.jsx)(y,{})}),Object(i.jsx)(d.b,{path:"".concat(s,"/addProduct"),children:Object(i.jsx)(k,{})}),Object(i.jsx)(d.b,{path:"".concat(s,"/editProduct"),children:Object(i.jsx)(C,{})})]})})]})},A=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"I'm from deals."})})},F=c(13),I=(c(85),c(18)),U=(c(86),{apiKey:"AIzaSyCN1omHFbH6gtFfUSUU_r7CztiiktpVDJc",authDomain:"gadgets-mart-132d4.firebaseapp.com",projectId:"gadgets-mart-132d4",storageBucket:"gadgets-mart-132d4.appspot.com",messagingSenderId:"297893427303",appId:"1:297893427303:web:b4ea6a4765e50765a8bcc2"}),D=c(33),L=c(34);0===I.a.apps.length&&I.a.initializeApp(U);var T=function(){var e=Object(n.useContext)(M),t=Object(o.a)(e,2),c=(t[0],t[1]),s=Object(d.g)(),r=(Object(d.h)().state||{from:{pathname:"/"}}).from,a=Object(n.useState)(!1),j=Object(o.a)(a,2),l=j[0],b=j[1],h=Object(n.useState)({isSignedIn:!1,name:"",email:"",password:"",photo:"",error:"",success:!1}),u=Object(o.a)(h,2),O=u[0],x=u[1],m=new I.a.auth.GoogleAuthProvider,p=new I.a.auth.FacebookAuthProvider,f=function(e){var t=!0;if("email"===e.target.name&&(t=/\S+@\S+\.\S+/.test(e.target.value)),"password"===e.target.name){var n=e.target.value.length>6,s=/\d{2}/.test(e.target.value);t=n&&s}if(t){var r=Object(F.a)({},O);r[e.target.name]=e.target.value,x(r),c(r)}},g=function(e){I.a.auth().currentUser.updateProfile({displayName:e,photoURL:"https://example.com/jane-q-user/profile.jpg"}).then((function(){console.log("User name updated successfully")})).catch((function(e){console.log(e)}))};return Object(i.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(i.jsxs)("div",{className:"login-form p-4",children:[Object(i.jsx)("h3",{className:"text-center mb-2",children:l?"Create an account":"Login"}),Object(i.jsxs)("form",{onSubmit:function(e){console.log(O.email,O.password),l&&O.email&&O.password&&I.a.auth().createUserWithEmailAndPassword(O.email,O.password).then((function(e){var t=Object(F.a)({},O);t.error="",t.success=!0,x(t),g(O.name),c(t)})).catch((function(e){var t=Object(F.a)({},O);t.error=e.message,t.success=!1,console.log(e),x(t),c(t)})),!l&&O.email&&O.password&&I.a.auth().signInWithEmailAndPassword(O.email,O.password).then((function(e){var t=Object(F.a)({},O);t.error="",t.success=!0,c(t),s.replace(r),x(t),console.log("sign in user info",e.user)})).catch((function(e){var t=Object(F.a)({},O);t.error=e.message,t.success=!1,c(t),x(t)})),e.preventDefault()},children:[Object(i.jsx)("div",{className:"form-group",children:l&&Object(i.jsx)("input",{type:"text",name:"name",onBlur:f,className:"form-control",placeholder:"Enter your name"})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"text",name:"email",onBlur:f,className:"form-control",placeholder:"Enter your email",required:!0})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"password",name:"password",onBlur:f,className:"form-control",placeholder:"Enter your password"})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"submit",className:"form-control bg-success",value:l?"Sign up":"Login"})}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{style:{color:"red"},children:O.error}),O.success&&Object(i.jsxs)("p",{style:{color:"green"},children:["User ",l?"created":"logged in"," successfully"]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("p",{className:"text-center",children:[l?"Already have an account?":"Don't have an account?"," ",Object(i.jsx)("input",{type:"checkbox",onChange:function(){return b(!l)},name:"newUser",id:""}),Object(i.jsx)("label",{htmlFor:"newUser",children:l?"Sign In":"Sign up"})]}),Object(i.jsx)("p",{className:"text-center",children:"or"})]}),Object(i.jsxs)("button",{className:"btn btn-danger w-100 mb-1 rounded-pill",onClick:function(){I.a.auth().signInWithPopup(m).then((function(e){var t=e.user,n=t.displayName,a=t.photoURL,o={isSignedIn:!0,name:n,email:t.email,photo:a};c(o),x(o),console.log(o),s.replace(r)})).catch((function(e){var t=e.code,c=e.message,n=e.email;console.log(t,c,n)}))},children:[Object(i.jsx)(D.a,{icon:L.b}),"Continue with Google"]}),Object(i.jsxs)("button",{className:"btn btn-primary w-100 rounded-pill",onClick:function(){I.a.auth().signInWithPopup(p).then((function(e){var t=e.user;c(t),s.replace(r),console.log(t)})).catch((function(e){var t=e.code,c=e.message,n=e.email;console.log(t,c,n)}))},children:[Object(i.jsx)(D.a,{icon:L.a}),"Continue with Facebook"]})]})})},B=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h2",{className:"text-center text-danger mt-5",children:"404 Not Found"})})},R=c(51),q=function(e){var t=e.children,c=Object(R.a)(e,["children"]),s=Object(n.useContext)(M),r=Object(o.a)(s,2),a=r[0];r[1];return Object(i.jsx)(d.b,Object(F.a)(Object(F.a)({},c),{},{render:function(e){var c=e.location;return a.email?t:Object(i.jsx)(d.a,{to:{pathname:"/login",state:{from:c}}})}}))},J=function(){var e=Object(n.useContext)(M),t=Object(o.a)(e,2),c=t[0];t[1];console.log(c);var s=Object(n.useState)({}),r=Object(o.a)(s,2),a=r[0],j=r[1],l=Object(d.i)().id;console.log(l),Object(n.useEffect)((function(){fetch("http://localhost:4200/product/".concat(l)).then((function(e){return e.json()})).then((function(e){j(e)}))}),[]);return Object(i.jsxs)("div",{className:"container mt-3",children:[Object(i.jsx)("h1",{children:"Checkout"}),Object(i.jsx)("br",{}),Object(i.jsxs)("table",{class:"table caption-top",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"Description"}),Object(i.jsx)("th",{scope:"col",children:"Quantity"}),Object(i.jsx)("th",{scope:"col",children:"Price"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:a.name}),Object(i.jsx)("td",{children:a.quantity}),Object(i.jsx)("td",{children:a.price})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{colspan:"2",children:"Total"}),Object(i.jsx)("th",{children:a.price})]})]})]}),Object(i.jsx)("button",{onClick:function(e){console.log("Order submitted");var t=Object(F.a)(Object(F.a)(Object(F.a)({},c),a),{},{date:new Date});console.log(t),fetch("http://localhost:4200/addOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("server side response",e),alert("Order placed successfully")}))},className:"btn btn-success",style:{float:"right"},children:"Checkout"})]})},M=Object(n.createContext)();var G=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(i.jsx)("div",{children:Object(i.jsx)(M.Provider,{value:[c,s],children:Object(i.jsx)(j.a,{children:Object(i.jsxs)(d.d,{children:[Object(i.jsxs)(d.b,{exact:!0,path:"/",children:[Object(i.jsx)(l,{}),Object(i.jsx)(h,{})]}),Object(i.jsxs)(d.b,{path:"/home",children:[Object(i.jsx)(l,{}),Object(i.jsx)(h,{})]}),Object(i.jsxs)(q,{path:"/orders",children:[Object(i.jsx)(l,{}),Object(i.jsx)(u,{})]}),Object(i.jsx)(q,{path:"/admin",children:Object(i.jsx)(E,{})}),Object(i.jsxs)(d.b,{path:"/deals",children:[Object(i.jsx)(l,{}),Object(i.jsx)(A,{})]}),Object(i.jsxs)(d.b,{path:"/login",children:[Object(i.jsx)(l,{}),Object(i.jsx)(T,{})]}),Object(i.jsxs)(q,{path:"/checkout/:id",children:[Object(i.jsx)(l,{}),Object(i.jsx)(J,{})]}),Object(i.jsxs)(d.b,{path:"*",children:[Object(i.jsx)(l,{}),Object(i.jsx)(B,{})]})]})})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,104)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};c(90);a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(G,{})}),document.getElementById("root")),H()}},[[92,1,2]]]);
//# sourceMappingURL=main.2f95c430.chunk.js.map