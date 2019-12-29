(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t,a){e.exports=a(241)},128:function(e,t,a){},129:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(128),a(55)),s=a(27),u=a(102),i=a(103),m=a(114),d=(a(129),a(30)),p=a(6),b=a(9),g=a(278),E=a(281),h=a(283),f=a(284),v=a(285),O=a(11),j=a.n(O),N=Object(g.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},bar:{"background-color":"#2196F3"}}})),y=function(e){j.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))},S=function(e){var t=N(),a=r.a.useState(null),n=Object(p.a)(a,2);n[0],n[1];return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{position:"static",styles:{position:"sticky"},className:t.bar},r.a.createElement(h.a,null,r.a.createElement(f.a,{variant:"h6",className:t.title},r.a.createElement(b.b,{to:"/"},"Spend Smart")),e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,{to:"/"},r.a.createElement(v.a,{color:"inherit",onClick:function(){return y(e)}},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,{to:"/auth/signup"},r.a.createElement(v.a,{color:"inherit"},"Signup")),r.a.createElement(b.b,{to:"/auth/login"},r.a.createElement(v.a,{color:"inherit"},"Login"))))))},C=function(e){var t="/budget/".concat(e.budget._id);return r.a.createElement(b.b,{to:t},r.a.createElement("div",{className:"item-line"},r.a.createElement("h4",null,e.budget.name),r.a.createElement("p",null,e.budget.description)))},w=a(5),x={buttonBlueGrad:{background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",border:0,borderRadius:24,boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)",color:"white",height:48,padding:"0 30px",margin:"30px 0 10px 0"},buttonRedGrad:{background:"linear-gradient(45deg, #ff6644 30%, #aa4433 90%)",border:0,borderRadius:24,boxShadow:"0 3px 5px 2px rgba(200, 56, 100, .3)",color:"white",height:48,padding:"0 30px",margin:"30px 0 10px 0"},buttonWhiteGrad:{background:"white",border:"solid 2px",borderRadius:24,boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)",color:"#2196F3",borderColor:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",height:48,padding:"0 30px",margin:"30px 0 10px 0"},buttonRoundAdd:{backgroundColor:"#21AA44",margin:10,border:0,borderRadius:24,boxShadow:"0 3px 5px 2px rgba(100, 240, 130, .3)",color:"white",height:48,padding:"0 30px"}},k=a(58),D=Object(w.a)(x)((function(e){var t=e.classes,a=Object(n.useState)([]),c=Object(p.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(!1),u=Object(p.a)(s,2),i=u[0],m=u[1];Object(n.useEffect)((function(){m(!0),j.a.get("/api/budget/user/".concat(e.user._id)).then((function(e){o(e.data),m(!1)})).catch((function(e){console.log(e)}))}),[]);var d=l.map((function(e){return r.a.createElement(C,{key:e._id,budget:e})}));return r.a.createElement("div",{className:"narrow-wrapper"},r.a.createElement(b.b,{to:"/create-budget"},r.a.createElement(v.a,{className:t.buttonRoundAdd},"+ Create Budget")),r.a.createElement("div",{className:"spinner-container"},r.a.createElement(k.CircleSpinner,{size:30,color:"#686769",loading:i})),d)})),B=Object(w.a)(x)((function(e){var t=e.classes;return r.a.createElement("div",{className:"narrow-wrapper"},r.a.createElement(f.a,{variant:"h1",className:"app-title"},"Spend Smart"),r.a.createElement(f.a,{variant:"body"},"Welcome to Spend Smart, the app that helps you managing your budget. Please login or sign-up in order to continue."),r.a.createElement("div",{className:"btn-container"},r.a.createElement(v.a,{className:t.buttonBlueGrad,style:{width:"100%"}},r.a.createElement(b.b,{to:"/auth/signup"},"Signup"))),r.a.createElement("div",{className:"btn-container"},r.a.createElement(v.a,{className:t.buttonWhiteGrad,style:{width:"100%"}},r.a.createElement(b.b,{style:{color:"#2196F3"},to:"/auth/login"},"Login"))))})),F=Object(w.a)(x)((function(e){return r.a.createElement("div",null,e.user?r.a.createElement(D,{user:e.user}):r.a.createElement(B,null))})),A=a(286),G=a(243),L=a(251),U=a(244),P=Object(w.a)(x)((function(e){var t=e.classes,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(""),u=Object(p.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)(""),b=Object(p.a)(d,2),g=(b[0],b[1]),E=function(e){var t=e.target,a=t.name,n=t.value;"username"===a&&o(n),"password"===a&&m(n)};return r.a.createElement("div",{className:"narrow-wrapper"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:function(t){console.log(l,i),t.preventDefault(),function(e,t){return j.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(l,i).then((function(t){t.message?g(t.message):(e.setUser(t),e.history.push("/"))}))}},r.a.createElement(A.a,null,r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"username"},"Username"),r.a.createElement(U.a,{name:"username",type:"text",onChange:E})),r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"password"},"Password"),r.a.createElement(U.a,{name:"password",type:"password",onChange:E,"aria-describedby":"password-helper-text"})),r.a.createElement(v.a,{className:t.buttonBlueGrad,type:"submit"},"Login"))))})),R=a(245),I=Object(w.a)({root:{background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)",color:"white",height:48,padding:"0 30px",margin:"20px 0"}})((function(e){var t=e.classes,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(""),u=Object(p.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)(""),b=Object(p.a)(d,2),g=(b[0],b[1]),E=function(e){var t=e.target,a=t.name,n=t.value;"username"===a&&o(n),"password"===a&&m(n),console.log(a,n)};return r.a.createElement("div",{className:"narrow-wrapper"},r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:function(t){console.log(l,i),t.preventDefault(),function(e,t){return j.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(l,i).then((function(t){console.log(t),t.message?g(t.message):(e.setUser(t),e.history.push("/"))}))}},r.a.createElement(A.a,null,r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"username"},"Username"),r.a.createElement(U.a,{name:"username",type:"text",onChange:E})),r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"password"},"Password"),r.a.createElement(U.a,{name:"password",type:"password",onChange:E,"aria-describedby":"password-helper-text"}),r.a.createElement(R.a,{id:"password-helper-text"},"Password must be 8 char. min")),r.a.createElement(v.a,{className:t.root,type:"submit"},"Signup"))))})),M=a(287),T=a(47),V=a.n(T),_=Object(w.a)(x)((function(e){var t=e.classes,a=Object(n.useState)(null),c=Object(p.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(!1),u=Object(p.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)(""),g=Object(p.a)(d,2),E=g[0],h=g[1],f=Object(n.useState)(new Date),O=Object(p.a)(f,2),N=O[0],y=O[1],S=Object(n.useState)(0),C=Object(p.a)(S,2),w=C[0],x=C[1],k=Object(n.useState)(""),D=Object(p.a)(k,2),B=D[0],F=D[1],P=Object(n.useState)(null),R=Object(p.a)(P,2),I=R[0],T=R[1];Object(n.useEffect)((function(){m(!0),j.a.get("/api/spend/".concat(e.match.params.id)).then((function(e){o(e.data),x(e.data.amount),h(e.data.name),y(e.data.date),F(e.data.category),T(e.data.budget),m(!1)})).catch((function(e){console.log(e)}))}),[]);var _=function(e){var t=e.target,a=t.name,n=t.value;"spendName"===a&&h(n),"spendAmount"===a&&x(n),"spendDate"===a&&y(n)},Y=function(e){Array.from(document.getElementsByClassName("category-option")).forEach((function(e){return e.classList.remove("option-selected")})),e.target.classList.toggle("option-selected"),F(e.target.innerText)};return r.a.createElement("div",{className:"create-spend narrow-wrapper"},r.a.createElement("h2",null,"Edit Spend "),i&&r.a.createElement("p",null,"Loading..."),l&&r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),j.a.put("/api/spend/".concat(e.match.params.id),{name:E,amount:w,date:N,category:B}).then((function(t){e.history.push("/budget/".concat(l.budget))})).catch((function(e){console.error(e)}))}},r.a.createElement(A.a,null,r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"spendName"},"Name:"),r.a.createElement(U.a,{name:"spendName",type:"text",defaultValue:l.name,onChange:_})),r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"spendAmount"},"Amount:"),r.a.createElement(U.a,{name:"spendAmount",defaultValue:l.amount,min:"0",step:"0.01",type:"number",onChange:_})),r.a.createElement(G.a,null,r.a.createElement(M.a,{name:"spendDate",label:"Date:",type:"date",defaultValue:V()(l.date).format("YYYY-MM-DD"),className:t.textField,onChange:_,InputLabelProps:{shrink:!0}})),r.a.createElement("div",{className:"category-options-container"},r.a.createElement("div",{className:"category-option",onClick:Y},"Food"),r.a.createElement("div",{className:"category-option",onClick:Y},"Accomodation"),r.a.createElement("div",{className:"category-option",onClick:Y},"Transport"),r.a.createElement("div",{className:"category-option",onClick:Y},"Clothes"),r.a.createElement("div",{className:"category-option",onClick:Y},"Culture"),r.a.createElement("div",{className:"category-option",onClick:Y},"Leisure"),r.a.createElement("div",{className:"category-option",onClick:Y},"Drinks")),r.a.createElement(v.a,{className:t.buttonBlueGrad,type:"submit"},"Save Changes"),r.a.createElement(v.a,{className:t.buttonRedGrad,onClick:function(t){t.preventDefault(),j.a.delete("/api/spend/".concat(e.match.params.id)).then((function(){console.log("deleted one spend from database"),e.history.push("/budget/".concat(I))})).catch((function(e){console.error(e)}))}},"Delete Spend"),r.a.createElement(b.b,{to:"/budget/".concat(l.budget),className:"black-link"},"Cancel"))))})),Y=Object(w.a)(x)((function(e){var t=e.classes,a=Object(n.useState)(null),c=Object(p.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(null),u=Object(p.a)(s,2),i=u[0],m=u[1];return r.a.createElement("form",null,r.a.createElement(A.a,null,r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"name"},"Search participants:"),r.a.createElement(U.a,{name:"participantName",type:"text",onChange:function(e){return o(e.target.value)}}),i&&r.a.createElement("p",null,i)),r.a.createElement(v.a,{className:t.buttonBlueGrad,onClick:function(){var t=l;j.a.get("./api/user/".concat(t)).then((function(t){t.data.found?-1!==e.participants.indexOf(t.data.found[0]._id)?m("The budget is already shared with this user"):(e.setParticipants(e.participants.concat(t.data.found[0]._id)),m(t.data.message)):m(t.data.message)}))}},"Add")))})),J=Object(w.a)(x)((function(e){var t=e.classes,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(!1),u=Object(p.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)([]),g=Object(p.a)(d,2),E=g[0],h=g[1],f=Object(n.useState)(""),O=Object(p.a)(f,2),N=O[0],y=O[1],S=function(e){var t=e.target,a=t.name,n=t.value;"budgetName"===a&&o(n),"budgetDescription"===a&&y(n)};return r.a.createElement("div",{className:"narrow-wrapper"},r.a.createElement("h2",null,"Create New Budget"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),j.a.post("/api/budget",{name:l,description:N,participants:E}).then((function(){e.history.push("/")})).catch((function(e){console.error(e)}))}},r.a.createElement(A.a,null,r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"name"},"Name:"),r.a.createElement(U.a,{name:"budgetName",type:"text",onChange:S})),r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"budgetDescription"},"Description:"),r.a.createElement(U.a,{name:"budgetDescription",type:"text",onChange:S})),i?r.a.createElement(Y,{setAddParticipants:m,participants:E,setParticipants:h}):r.a.createElement(v.a,{className:t.buttonBlueGrad,onClick:function(){return m(!0)}},"Add Participants"),r.a.createElement(v.a,{className:t.buttonBlueGrad,type:"submit"},"Create Budget"))),r.a.createElement(b.b,{className:"black-link",to:"/"},"Back"))})),W=function(e){var t="/spend/".concat(e.data._id);return r.a.createElement("div",{className:"spend-line item-line"},r.a.createElement("div",{className:"spend-title"},e.data.name),r.a.createElement("div",{className:"spend-cat"},e.data.category&&e.data.category.slice(0,4),"."),r.a.createElement("div",{className:"spend-amount"},"\u20ac",e.data.amount.toFixed(2)),r.a.createElement("div",{className:"spend-edit"},r.a.createElement(b.b,{to:t,budgetId:e.budgetId},"Edit")))},z=Object(w.a)(x)((function(e){var t=e.classes,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(new Date),u=Object(p.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)(0),b=Object(p.a)(d,2),g=b[0],E=b[1],h=Object(n.useState)(""),f=Object(p.a)(h,2),O=f[0],N=f[1],y=function(e){var t=e.target,a=t.name,n=t.value;"spendName"===a&&o(n),"spendAmount"===a&&E(n),"spendDate"===a&&m(n)},S=function(e){Array.from(document.getElementsByClassName("category-option")).forEach((function(e){return e.classList.remove("option-selected")})),e.target.classList.toggle("option-selected"),N(e.target.innerText)};return r.a.createElement("div",{className:"create-spend"},r.a.createElement("h2",null,"Create New Spend"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.setCreateSpend(!1),j.a.post("/api/spend",{name:l,amount:g,date:i,category:O,budgetId:e.budget._id,spender:e.user.username}).then((function(t){e.getBudgetData()})).catch((function(e){console.error(e)}))}},r.a.createElement(A.a,null,r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"spendName"},"Name:"),r.a.createElement(U.a,{name:"spendName",type:"text",onChange:y})),r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"spendAmount"},"Amount:"),r.a.createElement(U.a,{name:"spendAmount",min:"0",step:"0.01",type:"currency",onChange:y})),r.a.createElement(G.a,null,r.a.createElement(M.a,{name:"spendDate",label:"Date:",type:"date",defaultValue:V()().format("YYYY-MM-DD"),className:t.textField,onChange:y,InputLabelProps:{shrink:!0}})),r.a.createElement("div",{className:"category-options-container"},r.a.createElement("div",{className:"category-option",onClick:S},"Food"),r.a.createElement("div",{className:"category-option",onClick:S},"Accomodation"),r.a.createElement("div",{className:"category-option",onClick:S},"Transport"),r.a.createElement("div",{className:"category-option",onClick:S},"Clothes"),r.a.createElement("div",{className:"category-option",onClick:S},"Culture"),r.a.createElement("div",{className:"category-option",onClick:S},"Leisure"),r.a.createElement("div",{className:"category-option",onClick:S},"Drinks")),r.a.createElement(v.a,{className:t.buttonBlueGrad,type:"submit"},"Create"),r.a.createElement("p",{onClick:function(){return e.setCreateSpend(!1)},className:"black-link"},"Cancel"))))})),H=a(110),$=a(288),q=a(247),K=["January","February","March","April","May","June","July","August","September","October","November","December"],Q=function(e,t){return e.map((function(e){return t.reduce((function(t,a){return a.category===e?t+a.amount:t}),0)}))},X=function(e){var t,a,c=Object(n.useState)((new Date).getMonth()),l=Object(p.a)(c,2),o=l[0],s=l[1],u=K[o],i=["Food","Accomodation","Drinks","Leisure","Clothes","Culture","Transport"],m=(t=e.data.spends,a=o,t.filter((function(e){return new Date(e.date).getMonth()===a}))),d=Q(i,m),b={categories:i.filter((function(e,t){return 0!==Q(i,m)[t]})),amounts:d.filter((function(e){return 0!==e}))},g=m.reduce((function(e,t){return e+t.amount}),0),E={datasets:[{data:b.amounts,legend:{labels:{display:!1}},backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e803b9","#c45800","#c45850","#e803b9","#c45800"]}],labels:b.categories},h=function(){var t=e.data.spends.map((function(e){return new Date(e.date).getMonth()})),a=[];return K.forEach((function(e){t.includes(K.indexOf(e))&&a.push(r.a.createElement($.a,{value:K.indexOf(e)},e))})),a}();return console.log(b),r.a.createElement("div",null,r.a.createElement("div",{className:"space-around"},r.a.createElement("h4",null,"Select month:"),r.a.createElement(q.a,{labelId:"month",name:"month",value:o,onChange:function(e){return s(e.target.value)}},h)),r.a.createElement(H.a,{data:E}),r.a.createElement("p",null,"Total Spend for ",u,": ",g," EUR"))},Z=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,e.budgetData.name," - detail"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-row btn-budget-container"},r.a.createElement("div",{className:"btn-budget-lines option-selected",onClick:e.toggleBudgetView},"Details"),r.a.createElement("div",{className:"btn-budget-graph",onClick:e.toggleBudgetView},"Graph"),r.a.createElement("div",{className:"btn-budget-edit",onClick:function(){return e.setEditBudget(!0)}},"Edit"),r.a.createElement("div",{className:"btn-add-spend",onClick:function(){return e.setCreateSpend(!e.createSpend)}},"+ Spend"))))},ee=Object(w.a)(x)((function(e){var t=e.classes,a=Object(n.useState)(e.data.name),c=Object(p.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(!1),u=Object(p.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)([]),g=Object(p.a)(d,2),E=g[0],h=g[1],f=Object(n.useState)(e.data.description),O=Object(p.a)(f,2),N=O[0],y=O[1],S=function(e){var t=e.target,a=t.name,n=t.value;"budgetName"===a&&o(n),"budgetDescription"===a&&y(n)};return r.a.createElement("div",{className:"narrow-wrapper edit-budget"},r.a.createElement("h2",null,"Edit ",e.data.budgetName),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),j.a.put("/api/budget/".concat(e.data._id),{name:l,description:N}).then((function(){e.setEditBudget(!1),e.getBudgetData()})).catch((function(e){console.error(e)}))}},r.a.createElement(A.a,null,r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"name"},"Name:"),r.a.createElement(U.a,{name:"budgetName",defaultValue:e.data.name,type:"text",onChange:S})),r.a.createElement(G.a,null,r.a.createElement(L.a,{htmlFor:"budgetDescription"},"Description:"),r.a.createElement(U.a,{name:"budgetDescription",defaultValue:e.data.description,type:"text",onChange:S})),i?r.a.createElement(Y,{setAddParticipants:m,participants:E,setParticipants:h}):r.a.createElement(v.a,{className:t.buttonBlueGrad,onClick:function(){return m(!0)}},"Add Participants"),r.a.createElement(v.a,{className:t.buttonBlueGrad,type:"submit"},"Save changes"),r.a.createElement(v.a,{className:t.buttonRedGrad,onClick:function(t){j.a.delete("/api/budget/".concat(e.data._id)).then((function(){e.setEditBudget(!1),e.history.push("/")})).catch((function(e){console.error(e)}))}},"Delete the Budget"))),r.a.createElement(b.b,{className:"black-link",onClick:function(){return e.setEditBudget(!1)}},"Back"))})),te=Object(w.a)(x)((function(e){e.classes;var t=Object(n.useState)(null),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(null),s=Object(p.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(null),d=Object(p.a)(m,2),b=d[0],g=d[1],E=Object(n.useState)(!1),h=Object(p.a)(E,2),f=h[0],v=h[1],O=Object(n.useState)(!1),N=Object(p.a)(O,2),y=N[0],S=N[1],C=Object(n.useState)(!1),w=Object(p.a)(C,2),x=w[0],D=w[1],B=Object(n.useState)("Details"),F=Object(p.a)(B,2),A=F[0],G=F[1],L=function(){v(!0),j.a.get("/api/budget/".concat(e.match.params.id)).then((function(t){l(t.data),i(function(t){return t.spends.reverse().map((function(t){return r.a.createElement(W,{data:t,budgetId:e.match.params.id})}))}(t.data)),g(function(e){var t=e.spends.reduce((function(e,t){return e+t.amount}),0);return r.a.createElement("div",{className:"spend-line",key:"total"},r.a.createElement("div",{className:"spend-title"},r.a.createElement("h3",null,"Total:")),r.a.createElement("div",{className:"total-amount"},r.a.createElement("h3",null,"\u20ac",t.toFixed(2))))}(t.data)),v(!1)})).catch((function(e){console.log(e)}))};return Object(n.useEffect)((function(){e.user&&L()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"spinner-container"},r.a.createElement(k.CircleSpinner,{size:30,color:"#686769",loading:f})),r.a.createElement("div",{className:"narrow-wrapper pad-bottom-100"},y&&r.a.createElement(z,{user:e.user,budget:c,setCreateSpend:S,getBudgetData:L}),x&&r.a.createElement(ee,{data:c,setEditBudget:D,getBudgetData:L}),c&&r.a.createElement(Z,{budgetData:c,toggleBudgetView:function(e){document.getElementsByClassName("btn-budget-lines")[0].classList.remove("option-selected"),document.getElementsByClassName("btn-budget-graph")[0].classList.remove("option-selected"),e.target.classList.add("option-selected"),G(e.target.innerHTML)},createSpend:y,setCreateSpend:S,setEditBudget:D}),c&&"Details"===A&&r.a.createElement(r.a.Fragment,null,u),c&&"Graph"===A&&r.a.createElement(X,{data:c})),!y&&r.a.createElement("div",{className:"spend-total"},r.a.createElement("div",{className:"narrow-wrapper"},b))))})),ae=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(S,{user:this.state.user,setUser:this.setUser}),r.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(F,Object.assign({user:e.state.user,setUser:e.setUser},t))}}),r.a.createElement(d.a,{exact:!0,path:"/auth/signup",render:function(t){return r.a.createElement(I,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(d.a,{exact:!0,path:"/auth/login",render:function(t){return r.a.createElement(P,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(d.a,{exact:!0,path:"/create-budget",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(d.a,{path:"/budget/:id",render:function(t){return r.a.createElement(te,Object.assign({user:e.state.user},t))}}),r.a.createElement(d.a,{path:"/budget/edit/:id",render:function(t){return r.a.createElement(ee,Object.assign({user:e.state.user},t))}}),r.a.createElement(d.a,{path:"/spend/:id",render:function(e){return r.a.createElement(_,Object.assign({budgetId:e.budgetId},e))}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));j.a.get("/api/auth/loggedin").then((function(e){var t=e.data;l.a.render(r.a.createElement(b.a,null,r.a.createElement(ae,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,1,2]]]);
//# sourceMappingURL=main.ca4ea4d4.chunk.js.map