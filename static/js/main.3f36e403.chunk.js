(this["webpackJsonpgit-numberbomb"]=this["webpackJsonpgit-numberbomb"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),b=n.n(c),a=n(4),r=n.n(a),s=(n(9),n(2)),u=(n(10),n(0));var l=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],b=t[1],a=Object(c.useState)("-"),r=Object(s.a)(a,2),l=r[0],i=r[1],m=Object(c.useState)("-"),o=Object(s.a)(m,2),j=o[0],d=o[1],N=Object(c.useState)(null),h=Object(s.a)(N,2),O=h[0],x=h[1],k=function(e){n>0?O.length<2?x(O+e.target.dataset.number):x(O):x("")},C=function(){Number(O)>Number(n)?Number(j)>Number(O)&&d(Number(O)):Number(O)<Number(n)?Number(l)<Number(O)&&i(Number(O)):Number(O)===Number(n)&&(alert("\u904e\u95dc"),b("-"),i("-"),d("-")),x("")};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"wrapper",onKeyDown:function(e){var t=e.key;/^\d/.test(t)&&(console.log("key",t),n>0?O.length<2?x(O+t):x(O):x("")),"Enter"===t&&C()},tabIndex:-1,children:[Object(u.jsxs)("div",{className:"Ans",children:["\u7d42\u6975\u5bc6\u78bc\uff1a",l,"-",j]}),Object(u.jsx)("div",{className:"text",children:"\u8acb\u8f38\u5165\u7b54\u6848\uff1a"}),Object(u.jsx)("input",{className:"input_number",readonly:"readonly",maxlength:"2",value:O,onChange:function(e){return x(e.target.value)}}),Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"1",children:"1"}),Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"2",children:"2"}),Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"3",children:"3"}),Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"4",children:"4"}),Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"5",children:"5"}),Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"6",children:"6"}),Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"7",children:"7"}),Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"8",children:"8"}),Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"9",children:"9"}),Object(u.jsx)("button",{className:"number_btn",onClick:k,"data-number":"0",children:"0"}),Object(u.jsxs)("div",{className:"text_wrapper",children:[Object(u.jsx)("button",{className:"start_btn text",onClick:function(){b(Math.floor(101*Math.random())+0),i(0),d(100),x(""),alert("\u904a\u6232\u958b\u59cb")},children:"\u958b\u59cb"}),Object(u.jsx)("button",{className:"clear_btn text",onClick:function(){x("")},children:"\u6e05\u9664"}),Object(u.jsx)("button",{className:"enter_btn text",onClick:C,children:"\u8f38\u5165"})]})]})]})})},i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,b=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),b(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(b.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),i()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.3f36e403.chunk.js.map