(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),r=n(6),i=n(8),o=(n(13),n(14),n(1)),a=n(4),u=n.n(a),l=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="length",h="alphabet";var d=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(o.useState)(!1),a=Object(r.a)(s,2),d=a[0],p=a[1],f=function(t,e,n){var c=Object(i.a)(t);return e&&c.sort((function(t,n){switch(e){case h:return t.localeCompare(n);case j:return t[e]-n[e];default:return 0}})),n&&c.reverse(),c}(b,n,d),g=n!==j,O=n!==h;return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":O}),onClick:function(){return c(h)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":g}),onClick:function(){return c(j)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!d}),onClick:function(){return p(!d)},children:"Reverse"}),(n||d)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){p(!1),c("")},children:"Reset"})]}),Object(l.jsx)("ul",{children:f.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0b09af69.chunk.js.map