parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kvIT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={days:document.querySelector("[data-value=days]"),hours:document.querySelector("[data-value=hours]"),mins:document.querySelector("[data-value=mins]"),secs:document.querySelector("[data-value=secs]")};exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var t=e(require("./refs.js"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var r=function(){function t(e,a){var o=e.onTick;n(this,t),this.onTick=o,this.date=a}return o(t,[{key:"getCountDown",value:function(){var t=this,e=new Date(this.date);setInterval(function(){var n=Date.now(),a=e-n,o=t.getTimeComponents(a);t.onTick(o)},1e3)}},{key:"getTimeComponents",value:function(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}},{key:"pad",value:function(t){return String(t).padStart(2,"0")}},{key:"startTime",value:function(){this.getCountDown()}}]),t}(),i=new r({onTick:s},"Jan 01, 2022");function s(e){var n=e.days,a=e.hours,o=e.mins,r=e.secs;t.default.days.textContent=n,t.default.hours.textContent=a,t.default.mins.textContent=o,t.default.secs.textContent=r}i.startTime();
},{"./refs.js":"kvIT"}]},{},["Focm"], null)
//# sourceMappingURL=goit-js-hw-11-timer/goit-js-hw-11-timer.b0a4fc25.js.map