/*
 * IiifViewer; Copyright (C) 2014 - Klokan Technologies GmbH
 * Powered by OpenLayers 3
 */
var h,m=m||{},n=this;function p(a,b){var c=a.split("."),d=n;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function aa(){}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function s(a){var b=q(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){return"string"==typeof a}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return v.apply(null,arguments)}
function w(a,b){function c(){}c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ha=function(a,c,f){var g=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,g)}};var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function x(a,b){return a<b?-1:a>b?1:0};var y=Array.prototype,ga=y.indexOf?function(a,b,c){return y.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ha=y.forEach?function(a,b,c){y.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function ia(a){var b;a:{b=ja;for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:u(a)?a.charAt(b):a[b]};var z;a:{var ka=n.navigator;if(ka){var la=ka.userAgent;if(la){z=la;break a}}z=""}function B(a){return-1!=z.indexOf(a)};function ma(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function na(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function oa(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}var pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pa.length;f++)c=pa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ra=B("Opera")||B("OPR"),C=B("Trident")||B("MSIE"),D=B("Gecko")&&-1==z.toLowerCase().indexOf("webkit")&&!(B("Trident")||B("MSIE")),E=-1!=z.toLowerCase().indexOf("webkit");function sa(){var a=n.document;return a?a.documentMode:void 0}var ta=function(){var a="",b;if(ra&&n.opera)return a=n.opera.version,"function"==q(a)?a():a;D?b=/rv\:([^\);]+)(\)|;)/:C?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:E&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(z))?a[1]:"");return C&&(b=sa(),b>parseFloat(a))?String(b):a}(),ua={};
function F(a){var b;if(!(b=ua[a])){b=0;for(var c=fa(String(ta)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",G=RegExp("(\\d*)(\\D*)","g"),I=RegExp("(\\d*)(\\D*)","g");do{var l=G.exec(g)||["","",""],r=I.exec(k)||["","",""];if(0==l[0].length&&0==r[0].length)break;b=x(0==l[1].length?0:parseInt(l[1],10),0==r[1].length?0:parseInt(r[1],10))||x(0==l[2].length,0==r[2].length)||x(l[2],r[2])}while(0==b)}b=ua[a]=0<=b}return b}
var va=n.document,wa=va&&C?sa()||("CSS1Compat"==va.compatMode?parseInt(ta,10):5):void 0;var xa=!C||C&&9<=wa,ya=C&&!F("9");!E||F("528");D&&F("1.9b")||C&&F("8")||ra&&F("9.5")||E&&F("528");D&&!F("8")||C&&F("9");function H(){0!=za&&(this[ba]||(this[ba]=++ca));this.C=this.C;this.ea=this.ea}var za=0;H.prototype.C=!1;function J(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.i=!1;this.S=!0}J.prototype.stopPropagation=function(){this.i=!0};J.prototype.preventDefault=function(){this.defaultPrevented=!0;this.S=!1};function K(a){K[" "](a);return a}K[" "]=aa;function L(a,b){J.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.l=this.state=null;if(a){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(D){var e;a:{try{K(d.nodeName);e=!0;break a}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=
a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=E||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=E||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.state=a.state;this.l=a;a.defaultPrevented&&this.preventDefault()}}w(L,J);L.prototype.stopPropagation=function(){L.T.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};L.prototype.preventDefault=function(){L.T.preventDefault.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ya)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var M="closure_listenable_"+(1E6*Math.random()|0),Aa=0;function Ba(a,b,c,d,e){this.h=a;this.proxy=null;this.src=b;this.type=c;this.o=!!d;this.q=e;this.key=++Aa;this.k=this.n=!1}function N(a){a.k=!0;a.h=null;a.proxy=null;a.src=null;a.q=null};function O(a){this.src=a;this.d={};this.v=0}O.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.d[f];a||(a=this.d[f]=[],this.v++);var g=P(a,b,d,e);-1<g?(b=a[g],c||(b.n=!1)):(b=new Ba(b,this.src,f,!!d,e),b.n=c,a.push(b));return b};O.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.d))return!1;var e=this.d[a];b=P(e,b,c,d);return-1<b?(N(e[b]),y.splice.call(e,b,1),0==e.length&&(delete this.d[a],this.v--),!0):!1};
function Q(a,b){var c=b.type;if(c in a.d){var d=a.d[c],e=ga(d,b),f;(f=0<=e)&&y.splice.call(d,e,1);f&&(N(b),0==a.d[c].length&&(delete a.d[c],a.v--))}}O.prototype.F=function(a,b,c,d){a=this.d[a.toString()];var e=-1;a&&(e=P(a,b,c,d));return-1<e?a[e]:null};function P(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.k&&f.h==b&&f.o==!!c&&f.q==d)return e}return-1};var R="closure_lm_"+(1E6*Math.random()|0),Ca={},Da=0;function Ea(a,b,c,d,e){if("array"==q(b))for(var f=0;f<b.length;f++)Ea(a,b[f],c,d,e);else c=Fa(c),a&&a[M]?a.g.add(String(b),c,!1,d,e):Ga(a,b,c,!1,d,e)}function Ga(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=S(a);k||(a[R]=k=new O(a));c=k.add(b,c,d,e,f);c.proxy||(d=Ha(),c.proxy=d,d.src=a,d.h=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Ia(b.toString()),d),Da++)}
function Ha(){var a=Ja,b=xa?function(c){return a.call(b.src,b.h,c)}:function(c){c=a.call(b.src,b.h,c);if(!c)return c};return b}function Ka(a,b,c,d,e){if("array"==q(b))for(var f=0;f<b.length;f++)Ka(a,b[f],c,d,e);else c=Fa(c),a&&a[M]?a.g.add(String(b),c,!0,d,e):Ga(a,b,c,!0,d,e)}function La(a,b,c,d,e){if("array"==q(b))for(var f=0;f<b.length;f++)La(a,b[f],c,d,e);else c=Fa(c),a&&a[M]?a.g.remove(String(b),c,d,e):a&&(a=S(a))&&(b=a.F(b,c,!!d,e))&&Ma(b)}
function Ma(a){if("number"!=typeof a&&a&&!a.k){var b=a.src;if(b&&b[M])Q(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.o):b.detachEvent&&b.detachEvent(Ia(c),d);Da--;(c=S(b))?(Q(c,a),0==c.v&&(c.src=null,b[R]=null)):N(a)}}}function Ia(a){return a in Ca?Ca[a]:Ca[a]="on"+a}function Na(a,b,c,d){var e=1;if(a=S(a))if(b=a.d[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.o==c&&!f.k&&(e&=!1!==Oa(f,d))}return Boolean(e)}
function Oa(a,b){var c=a.h,d=a.q||a.src;a.n&&Ma(a);return c.call(d,b)}
function Ja(a,b){if(a.k)return!0;if(!xa){var c;if(!(c=b))a:{c=["window","event"];for(var d=n,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new L(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;!c.i&&0<=k;k--)c.currentTarget=e[k],d&=Na(e[k],f,!0,c);for(k=0;!c.i&&k<e.length;k++)c.currentTarget=
e[k],d&=Na(e[k],f,!1,c)}return d}return Oa(a,new L(b,this))}function S(a){a=a[R];return a instanceof O?a:null}var Pa="__closure_events_fn_"+(1E9*Math.random()>>>0);function Fa(a){if("function"==q(a))return a;a[Pa]||(a[Pa]=function(b){return a.handleEvent(b)});return a[Pa]};function Qa(a){ol.tilegrid.TileGrid.call(this,a)}w(Qa,ol.tilegrid.XYZ);function Ra(a){for(var b=a.X,c=a.Y||"jpg",d=a.ia||"native",e=a.width,f=a.height,g=a.tileSize||256,k=Math.max(Math.ceil(Math.log(e/g)/Math.LN2),Math.ceil(Math.log(f/g)/Math.LN2)),G=[],I=0;I<=k;I++){var l=Math.pow(2,k-I),r=Math.ceil(e/l),l=Math.ceil(f/l),r=Math.ceil(r/g),l=Math.ceil(l/g);G.push([r,l])}ol.source.TileImage.call(this,{tileGrid:new Qa({resolutions:a.resolutions.reverse(),origin:[0,0],tileSize:g}),tileUrlFunction:function(a){var l=a[0];if(!(k<l)){var t=G[l];if(t){var A=a[1];a=-a[2]-1;if(!(0>
A||t[0]<=A||0>a||t[1]<=a)){l=Math.pow(2,k-l);t=g*l;A*=t;a*=t;var r=Math.min(A+t,e),t=Math.min(a+t,f);return b+("/"+A+","+a+","+(r-A)+","+(t-a)+"/pct:"+100/l+"/0/"+d+"."+c)}}}},crossOrigin:a.crossOrigin});ol.has.CANVAS&&this.setTileLoadFunction(function(a,b){var c=a.getImage();Ka(c,"load",function(){if(0<c.naturalWidth&&(c.naturalWidth!=g||c.naturalHeight!=g)){var b=document.createElement(Sa);b.width=g;b.height=g;b.getContext("2d").drawImage(c,0,0);var d=oa(a,function(a){return a==c});d&&(a[d]=b)}},
!0);c.src=b})}w(Ra,ol.source.TileImage);!D&&!C||C&&C&&9<=wa||D&&F("1.9.1");C&&F("9");var Sa="CANVAS";function Ta(){}Ta.prototype.K=null;function Ua(a){return a.K||(a.K=a.O())};var Va;function T(){}w(T,Ta);T.prototype.B=function(){var a=Wa(this);return a?new ActiveXObject(a):new XMLHttpRequest};T.prototype.O=function(){var a={};Wa(this)&&(a[0]=!0,a[1]=!0);return a};
function Wa(a){if(!a.M&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.M=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.M}Va=new T;function U(){}w(U,Ta);U.prototype.B=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Xa;throw Error("Unsupported browser");};U.prototype.O=function(){return{}};
function Xa(){this.e=new XDomainRequest;this.readyState=0;this.responseText=this.onreadystatechange=null;this.status=-1;this.statusText=this.responseXML=null;this.e.onload=v(this.aa,this);this.e.onerror=v(this.L,this);this.e.onprogress=v(this.ba,this);this.e.ontimeout=v(this.ca,this)}h=Xa.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.e.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.e.send(a);else throw Error("Only string data is supported");else this.e.send()};h.abort=function(){this.e.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.e.contentType:""};h.aa=function(){this.status=200;this.responseText=this.e.responseText;Ya(this,4)};h.L=function(){this.status=500;this.responseText=null;Ya(this,4)};h.ca=function(){this.L()};
h.ba=function(){this.status=200;Ya(this,1)};function Ya(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}h.getAllResponseHeaders=function(){return"content-type: "+this.e.contentType};function V(){H.call(this);this.g=new O(this);this.W=this;this.Q=null}w(V,H);V.prototype[M]=!0;V.prototype.addEventListener=function(a,b,c,d){Ea(this,a,b,c,d)};V.prototype.removeEventListener=function(a,b,c,d){La(this,a,b,c,d)};
V.prototype.dispatchEvent=function(a){var b,c=this.Q;if(c)for(b=[];c;c=c.Q)b.push(c);var c=this.W,d=a.type||a;if(u(a))a=new J(a,c);else if(a instanceof J)a.target=a.target||c;else{var e=a;a=new J(d,c);qa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.i&&0<=g;g--)f=a.currentTarget=b[g],e=W(f,d,!0,a)&&e;a.i||(f=a.currentTarget=c,e=W(f,d,!0,a)&&e,a.i||(e=W(f,d,!1,a)&&e));if(b)for(g=0;!a.i&&g<b.length;g++)f=a.currentTarget=b[g],e=W(f,d,!1,a)&&e;return e};
function W(a,b,c,d){b=a.g.d[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.k&&g.o==c){var k=g.h,G=g.q||g.src;g.n&&Q(a.g,g);e=!1!==k.call(G,d)&&e}}return e&&0!=d.S}V.prototype.F=function(a,b,c,d){return this.g.F(String(a),b,c,d)};function Za(a,b,c){if("function"==q(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:n.setTimeout(a,b||0)};function $a(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function ab(a){if("function"==typeof a.p)return a.p();if(u(a))return a.split("");if(s(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ma(a)}
function bb(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(s(a)||u(a))ha(a,b,void 0);else{var c;if("function"==typeof a.getKeys)c=a.getKeys();else if("function"!=typeof a.p)if(s(a)||u(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=na(a);else c=void 0;for(var d=ab(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function X(a,b){this.c={};this.b=[];this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof X?(c=a.getKeys(),d=a.p()):(c=na(a),d=ma(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}h=X.prototype;h.p=function(){Y(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.c[this.b[b]]);return a};h.getKeys=function(){Y(this);return this.b.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||cb;Y(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};function cb(a,b){return a===b}h.isEmpty=function(){return 0==this.f};h.clear=function(){this.c={};this.f=this.b.length=0};h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.c,a)?(delete this.c[a],this.f--,this.b.length>2*this.f&&Y(this),!0):!1};
function Y(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.c,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.c,a)?this.c[a]:b};h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.c,a)||(this.f++,this.b.push(a));this.c[a]=b};
h.forEach=function(a,b){for(var c=this.getKeys(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new X(this)};var db=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,eb=E;function fb(a,b){if(eb){eb=!1;var c=n.location;if(c){var d=c.href;if(d&&(d=(d=fb(3,d))?decodeURI(d):d)&&d!=c.hostname)throw eb=!0,Error();}}return b.match(db)[a]||null};function gb(a){V.call(this);this.headers=new X;this.A=a||null;this.j=!1;this.w=this.a=null;this.s=this.H="";this.m=this.G=this.r=this.D=!1;this.u=0;this.t=null;this.R=hb;this.J=this.ga=!1}w(gb,V);var hb="",ib=/^https?$/i,jb=["POST","PUT"];h=gb.prototype;
h.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request\x3d"+this.H+"; newUri\x3d"+a);b=b?b.toUpperCase():"GET";this.H=a;this.s="";this.D=!1;this.j=!0;this.a=this.A?this.A.B():Va.B();this.w=this.A?Ua(this.A):Ua(Va);this.a.onreadystatechange=v(this.P,this);try{this.G=!0,this.a.open(b,String(a),!0),this.G=!1}catch(e){kb(this,e);return}a=c||"";var f=this.headers.clone();d&&bb(d,function(a,b){f.set(b,a)});d=ia(f.getKeys());c=n.FormData&&a instanceof n.FormData;
!(0<=ga(jb,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset\x3dutf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.R&&(this.a.responseType=this.R);"withCredentials"in this.a&&(this.a.withCredentials=this.ga);try{lb(this),0<this.u&&((this.J=mb(this.a))?(this.a.timeout=this.u,this.a.ontimeout=v(this.U,this)):this.t=Za(this.U,this.u,this)),this.r=!0,this.a.send(a),this.r=!1}catch(g){kb(this,g)}};
function mb(a){return C&&F(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function ja(a){return"content-type"==a.toLowerCase()}h.U=function(){"undefined"!=typeof m&&this.a&&(this.s="Timed out after "+this.u+"ms, aborting",this.dispatchEvent("timeout"),this.abort(8))};function kb(a,b){a.j=!1;a.a&&(a.m=!0,a.a.abort(),a.m=!1);a.s=b;nb(a);ob(a)}function nb(a){a.D||(a.D=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(){this.a&&this.j&&(this.j=!1,this.m=!0,this.a.abort(),this.m=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ob(this))};h.P=function(){this.C||(this.G||this.r||this.m?pb(this):this.fa())};h.fa=function(){pb(this)};
function pb(a){if(a.j&&"undefined"!=typeof m&&(!a.w[1]||4!=Z(a)||2!=qb(a)))if(a.r&&4==Z(a))Za(a.P,0,a);else if(a.dispatchEvent("readystatechange"),4==Z(a)){a.j=!1;try{if(rb(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{var b;try{b=2<Z(a)?a.a.statusText:""}catch(c){b=""}a.s=b+" ["+qb(a)+"]";nb(a)}}finally{ob(a)}}}function ob(a){if(a.a){lb(a);var b=a.a,c=a.w[0]?aa:null;a.a=null;a.w=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){}}}
function lb(a){a.a&&a.J&&(a.a.ontimeout=null);"number"==typeof a.t&&(n.clearTimeout(a.t),a.t=null)}function rb(a){var b=qb(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=fb(1,String(a.H)),!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!ib.test(a?a.toLowerCase():"");c=b}return c}function Z(a){return a.a?a.a.readyState:0}function qb(a){try{return 2<Z(a)?a.a.status:-1}catch(b){return-1}}
h.getResponseHeader=function(a){return this.a&&4==Z(this)?this.a.getResponseHeader(a):void 0};h.getAllResponseHeaders=function(){return this.a&&4==Z(this)?this.a.getAllResponseHeaders():""};function sb(a,b,c,d,e){var f=document;a=u(a)?f.getElementById(a):a;if(!a)throw Error("Invalid element");this.da=a;this.c=null;this.V=1==d;this.I=e||null;this.N=c||null;this.Z=u(b)?b.substring(0,b.lastIndexOf("/")):null;tb(this,b)}sb.prototype.getMap=function(){return this.c};
function ub(a,b){var c=b.width,d=b.height,e=b["@id"];if(!e){var f=b.image_host,g=b.identifier;f&&g&&(e=f+g)}e||(e=a.Z);if(!e)throw Error("Unable to determine base url");g=(b.tiles||[{}])[0];f=new ol.proj.Projection({code:"IIIF",units:"pixels",extent:[0,-d,c,0]});e=new Ra({X:e,width:c,height:d,resolutions:b.scale_factors||g.scaleFactors,Y:(b.formats||[])[0],tileSize:b.tile_width||g.width||void 0,projection:f,crossOrigin:a.V?"":void 0});e=new ol.layer.Tile({source:e});a.c=new ol.Map({layers:[e],target:a.da,
renderer:a.V?"webgl":void 0,view:new ol.View({projection:f,extent:[0,-d,c,0]}),interactions:ol.interaction.defaults({mouseWheelZoom:null==a.I}),controls:[],logo:!1});a.I&&a.c.addInteraction(a.I);a.c.getView().fitExtent(f.getExtent(),a.c.getSize()||null);a.N&&a.N(a)}function tb(a,b){if(u(b)){var c=new gb(new U);Ea(c,"complete",function(){if(rb(c)){var a;a=c.a?$a(c.a.responseText):void 0;tb(this,a)}},!1,a);c.send(b)}else ub(a,b)};p("IiifViewer",sb);p("IiifViewer.prototype.getMap",sb.prototype.getMap);p("IiifSource",Ra);