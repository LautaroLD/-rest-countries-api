(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=(n(10),n(4)),l=n(1);function u(){u=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(S){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),c=new L(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var m={};function h(){}function f(){}function p(){}var d={};i(d,a,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(N([])));v&&v!==t&&n.call(v,a)&&(d=v);var y=p.prototype=h.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=p,i(y,"constructor",p),i(p,"constructor",f),f.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(b.prototype),i(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(y),i(y,c,"Generator"),i(y,a,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var s=a.a.createContext();function m(e){var t=a.a.useState(!1),n=Object(l.a)(t,2),r=n[0],o=n[1],c=a.a.useState(!1),m=Object(l.a)(c,2),h=m[0],f=m[1],p=a.a.useState(""),d=Object(l.a)(p,2),g=d[0],v=d[1],y=a.a.useState(""),E=Object(l.a)(y,2),b=E[0],w=E[1],_=a.a.useState(!1),x=Object(l.a)(_,2),L=x[0],N=x[1],O=a.a.useState([]),S=Object(l.a)(O,2),k=S[0],C=S[1],j=[],M=[];function A(){return(A=Object(i.a)(u().mark(function e(){var t;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("https://restcountries.com/v3/all").then(function(e){return e.json()}).then(function(e){e.forEach(function(e){t.push({name:e.name.common,flag:e.flags[1],capital:e.capital,region:e.region,population:e.population,subregion:e.subregion,currencies:e.currencies,languages:e.languages,borders:e.borders,tld:e.tld,cca3:e.cca3})}),localStorage.setItem("countrys",JSON.stringify(t)),o(!0)}).catch(function(e){return new Error(e)});case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){A.apply(this,arguments)}(),localStorage.countrys&&(j=JSON.parse(localStorage.countrys)),b.length<1&&g.length<1?M=j:b.length>=1?M=j.filter(function(e){var t=e.region.toLowerCase(),n=b.toLowerCase();return t.includes(n)}):g.length>=1&&(M=j.filter(function(e){var t=e.name.toLowerCase(),n=g.toLowerCase();return t.includes(n)}));var T=document.querySelector("html");return T.style.overflowY=h?"hidden":"scroll",a.a.createElement(s.Provider,{value:{ItemsReady:r,searchValue:g,onSearchValueChange:function(e){v(e.target.value)},searchedCountry:M,onSearchByRegion:function(e){w(e.target.value)},changeTheme:function(e){document.getElementById("root").classList.toggle("dark-theme"),e.target.classList.toggle("bxs-sun")},OpenModal:function(e){var t=j.filter(function(t){return t.name===e});f(!0),C(t[0])},elementModal:k,onModal:h,setOnModal:f,countries:j,setElementModal:C,ThemeDark:L,setThemeDark:N}},e.children)}var h=function(){var e=a.a.useContext(s),t=e.ThemeDark,n=e.setThemeDark;return a.a.createElement("header",null,a.a.createElement("h1",{className:"header__title"},"Where in the world?"),a.a.createElement("i",{onClick:function(){n(!t),document.getElementById("root").classList.toggle("dark-theme")},className:t?"header__theme-icon dark-theme":"header__theme-icon light-theme"}))};var f=function(e){var t=a.a.useContext(s).OpenModal;return a.a.createElement("li",{id:"",className:"country"},a.a.createElement("img",{alt:e.name,className:"country__img",src:e.flag}),a.a.createElement("div",{className:"country__text-container"},a.a.createElement("h3",null,e.name),a.a.createElement("p",null,a.a.createElement("b",null,"Population: "),e.population),a.a.createElement("p",null,a.a.createElement("b",null,"region: "),e.region),a.a.createElement("p",null,a.a.createElement("b",null,"Capital: "),e.capital)),a.a.createElement("button",{onClick:function(){return t(e.name)},className:"btn-more-details"},"More details"))};var p=function(){var e=a.a.useState(0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=a.a.useContext(s),c=o.searchedCountry,i=o.ItemsReady,u=0,m={},h=Object.entries((c.map(function(e){var t=c.indexOf(e);m["page_".concat(u)]?m["page_".concat(u)].push(e):(m["page_".concat(u)]=[],m["page_".concat(u)].push(e)),t%20===0&&t>1&&u++}),m));return a.a.createElement("section",{id:"countrys-container",className:"countrys-container"},i?a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:"list-pages"},h.map(function(e){return a.a.createElement("li",{onClick:function(){r(h.indexOf(e))},key:h.indexOf(e),className:"list-pages__item"},h.indexOf(e)+1)})),a.a.createElement("ul",{className:"list-countries"},h[n][1].map(function(e){return a.a.createElement(f,{flag:e.flag,name:e.name,population:e.population,region:e.region,capital:e.capital,key:e.name})}))):a.a.createElement("div",{className:"loading"},a.a.createElement("p",null,"Loading..."),a.a.createElement("i",{className:"loading__icon"})))};var d=function(){var e=a.a.useContext(s),t=e.searchValue,n=e.onSearchValueChange,r=e.onSearchByRegion;return a.a.createElement(a.a.Fragment,null,a.a.createElement("main",{id:"main",className:" main"},a.a.createElement("section",{className:"main__section-search"},a.a.createElement("input",{id:"input",value:t,onChange:n,className:"main__section-search-input",type:"search",placeholder:"Search",autoComplete:"false"})),a.a.createElement("section",{className:"main__section-select"},a.a.createElement("select",{id:"select",onChange:r,className:"main__section-select-item",name:"region",title:"region"},a.a.createElement("option",{value:""},"All"),a.a.createElement("option",{value:"Africa"},"Africa"),a.a.createElement("option",{value:"America"},"America"),a.a.createElement("option",{value:"Asia"},"Asia"),a.a.createElement("option",{value:"Europe"},"Europe"),a.a.createElement("option",{value:"Oceania"},"Oceania"),a.a.createElement("option",{value:"Antarctic"},"Antarctic"))),a.a.createElement(p,null)))};var g=function(){var e=a.a.useContext(s),t=e.setOnModal,n=e.elementModal,r=e.countries,o=e.setElementModal,c=Object.entries(n.currencies).map(function(e){return e[1].name});return a.a.createElement("div",{id:"card",className:"card-content"},a.a.createElement("div",{className:"card-header"},a.a.createElement("h5",{className:"card-header__title"},n.name),a.a.createElement("i",{onClick:function(){t(!1)},className:"card-header__close"})),a.a.createElement("div",{className:"card-body"},a.a.createElement("img",{alt:n.name,className:"card-body__img",src:n.flag}),a.a.createElement("div",{className:" card-body__info"},a.a.createElement("p",null,a.a.createElement("b",null,"Population: "),n.population),a.a.createElement("p",null,a.a.createElement("b",null,"region: "),n.region),a.a.createElement("p",null,a.a.createElement("b",null,"Sub Region: "),n.subregion),a.a.createElement("p",null,a.a.createElement("b",null,"Capital: "),n.capital),a.a.createElement("hr",null),a.a.createElement("p",null,a.a.createElement("b",null,"Top Level Domain: "),n.tld),a.a.createElement("p",null,a.a.createElement("b",null,"currencies: "),c.toString()),a.a.createElement("hr",null),n.borders&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",{className:"card-body__border-title"},"Border Countries:"),a.a.createElement("div",{className:"card-body__border-info"},n.borders.map(function(e){return a.a.createElement("p",{onClick:function(){return t=e,void r.forEach(function(e){e.cca3===t&&o(e)});var t},key:e},e)}))))))};var v=function(){var e=a.a.useContext(s).onModal;return a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(g,null),a.a.createElement(h,null),a.a.createElement(d,null))};var y=function(){return a.a.createElement(m,null,a.a.createElement(v,null))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root"))},5:function(e,t,n){e.exports=n(12)}},[[5,2,1]]]);
//# sourceMappingURL=main.7b8f5a67.chunk.js.map