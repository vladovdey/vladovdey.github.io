(function(t){function e(e){for(var n,o,a=e[0],s=e[1],d=e[2],p=0,l=[];p<a.length;p++)o=a[p],c[o]&&l.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(l.length)l.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==c[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},c={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var u=s;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),c=r.n(n);c.a},"0dc1":function(t,e,r){t.exports=r.p+"img/kuritsa.a94e3f95.png"},1826:function(t,e,r){},"1a6b":function(t,e,r){t.exports=r.p+"img/perez.855175d5.png"},"30ce":function(t,e,r){t.exports=r.p+"img/cheese.b5d4cbce.png"},"4d44":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("ProductTypes",{attrs:{types:t.types},on:{addIngrid:t.addPizza}}),r("Cart",{attrs:{cartProducts:t.selectedProduct,totalPrice:t.price},on:{delIngrid:t.delPizza}})],1)])],1)},i=[],o=(r("ac6a"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"container-fluid"},[r("div",{staticClass:"col-12 text-center"},[r("h1",[t._v("Make your own Pizza")])])])}],s={name:"Header"},d=s,u=(r("b88a"),r("2877")),p=Object(u["a"])(d,o,a,!1,null,"370494ce",null),l=p.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-md-4"},t._l(t.types,function(e){return r("div",{key:e.id,staticClass:"elementContainer text-center"},[r("p",[t._v(t._s(e.title))]),t._l(e.ingridients,function(e){return r("div",{key:e.id,staticClass:"ingridients"},[r("p",[t._v(t._s(e.name)+". "+t._s(e.weight)+" грамм/порция ")]),r("span",[t._v("Кол-во порций ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.porc,expression:"ing.porc"}],attrs:{type:"number",min:"1",max:"2"},domProps:{value:e.porc},on:{input:function(r){r.target.composing||t.$set(e,"porc",r.target.value)}}}),r("p",[t._v("Цена: "+t._s(e.price)+" руб./порция")]),r("button",{on:{click:function(r){return t.$emit("addIngrid",e)}}},[t._v("Добавить ингридиент")])])})],2)}),0)},m=[],g={name:"ProductTypes",data:function(){return{message:1}},props:["types"]},v=g,_=(r("ccf5"),Object(u["a"])(v,f,m,!1,null,"e704ccaa",null)),h=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-md-8"},[t._l(t.cartProducts,function(t){return n("img",{key:t.prodId,staticClass:"ingrid",attrs:{src:t.img}})}),n("img",{attrs:{src:r("908c"),alt:"pizzaimg"}}),n("h3",[t._v("Ваша пицца")]),n("table",{staticClass:"table table-bordered table-hover"},[t._m(0),n("tbody",[t._m(1),t._l(t.cartProducts,function(e){return n("tr",{key:e.prodId,on:{click:function(r){return t.$emit("delIngrid",e)}}},[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.price*e.porc))]),n("td",[t._v(t._s(e.weight*e.porc))])])})],2)]),n("div",{on:{"":function(t){}}},[n("p",[t._v("Итоговая цена: "+t._s(t.totalPrice)+" руб.")]),n("button",[t._v("Сделать заказ")])])],2)},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("th",[t._v("Ингридиент")]),r("th",[t._v("Цена")]),r("th",[t._v("Вес г.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("Основа пиццы")]),r("td",[t._v("85")]),r("td",[t._v("150")])])}],P=(r("c5f6"),{name:"Cart",props:{cartProducts:{type:Array},totalPrice:{type:Number}}}),w=P,x=(r("9dbb"),Object(u["a"])(w,b,y,!1,null,"64acbc78",null)),I=x.exports,z={name:"app",components:{Header:l,ProductTypes:h,Cart:I},data:function(){return{types:[{catId:0,title:"Сыр",ingridients:[{prodId:3,category:1,name:"Пармезан",price:60,porc:1,weight:30,img:r("30ce")},{prodId:4,category:1,name:"Моцарелла",price:30,porc:1,weight:20,img:r("30ce")}]},{catId:1,title:"Мясо",ingridients:[{prodId:1,category:0,name:"Курица",price:100,porc:1,weight:20,img:r("0dc1")},{prodId:2,category:0,name:"Салями",price:120,porc:1,weight:20,img:r("86de")}]},{catId:2,title:"Овощи",ingridients:[{prodId:5,category:2,name:"Помидор",price:10,porc:1,weight:20,img:r("8e63")},{prodId:6,category:2,name:"Перец",price:5,porc:1,weight:20,img:r("1a6b")}]}],price:85,selectedProduct:[]}},methods:{addPizza:function(t){var e=!0;1==this.selectedProduct.length?this.selectedProduct.push(t):(this.selectedProduct.forEach(function(r,n){r.prodId==t.prodId&&(e=!1)}),1==e?this.selectedProduct.push(t):e=!0)},delPizza:function(t){if(0!=t.prodId){var e=1;this.selectedProduct.forEach(function(r,n){r.prodId==t.prodId&&(e=n)}),this.selectedProduct.splice(e,1)}}}},C=z,O=(r("034f"),Object(u["a"])(C,c,i,!1,null,null,null)),j=O.exports,k=r("5f5b");r("f9e3"),r("2dd8");n["default"].use(k["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(j)}}).$mount("#app")},"606f":function(t,e,r){},"64a9":function(t,e,r){},"86de":function(t,e,r){t.exports=r.p+"img/salyami.5187656d.png"},"8e63":function(t,e,r){t.exports=r.p+"img/pomido.719397bb.png"},"908c":function(t,e,r){t.exports=r.p+"img/pizza.26246eed.png"},"9dbb":function(t,e,r){"use strict";var n=r("4d44"),c=r.n(n);c.a},b88a:function(t,e,r){"use strict";var n=r("606f"),c=r.n(n);c.a},ccf5:function(t,e,r){"use strict";var n=r("1826"),c=r.n(n);c.a}});
//# sourceMappingURL=app.9905179e.js.map