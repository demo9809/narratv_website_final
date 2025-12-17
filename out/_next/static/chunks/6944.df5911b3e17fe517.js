"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6944],{16944:function(e,t,i){let a,r,n;i.r(t),i.d(t,{VideoPlayer:function(){return bu}});var s=i(57437),o=i(44184),l=i(2265),d=Object.create,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,m=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,E=function(e,t){return function(){return e&&(t=e(e=0)),t}},b=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},g=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=h(t),s=0,o=n.length;s<o;s++)r=n[s],p.call(e,r)||r===i||u(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=c(t,r))||a.enumerable});return e},f=function(e,t,i){return i=null!=e?d(m(e)):{},g(!t&&e&&e.__esModule?i:u(i,"default",{value:e,enumerable:!0}),e)},_=b(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function y(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):y(e,t)}var T=E(function(){T()});function A(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var k=E(function(){}),w=b(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),S=b(function(e,t){function i(e,t){if(!y(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}T(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),I=b(function(e,t){function i(e,t){if(!y(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}T(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),R=b(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),C=b(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),D=b(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),L=b(function(e,t){k(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=A(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),M=b(function(e,t){T();var i=w(),a=R(),r=C(),n=D(),s=L(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!y(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),O=b(function(e,t){T();var i=M();function a(e){if(!y(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),x=b(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),N=b(function(e,t){T();var i=w(),a=S(),r=I(),n=M(),s=O(),o=x(),l=R(),d=C(),u=D();function c(){if(!y(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),P=b(function(e,t){var i=N();t.exports=new i}),U=b(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=P();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function H(e,t){if(e){if("string"==typeof e)return B(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return B(e,t)}}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||H(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=f(_()),F=f(_()),$=f(_()),K={now:function(){var e=$.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},q=function(){if("function"==typeof(null===(e=F.default.crypto)||void 0===e?void 0:e.getRandomValues)){i=new Uint8Array(32),F.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=K.now(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},Y=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},G=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=Y()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},j=function(e){e&&void 0!==e.nodeName?e=G(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function Q(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||H(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},z=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,Q(o)),d=(i=console.info).bind.apply(i,Q(o)),u=(a=console.debug).bind.apply(a,Q(o)),c=(r=console.warn).bind.apply(r,Q(o)),h=(n=console.error).bind.apply(n,Q(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>Z.TRACE))return l.apply(void 0,Q(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>Z.DEBUG))return u.apply(void 0,Q(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>Z.INFO))return d.apply(void 0,Q(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>Z.WARN))return c.apply(void 0,Q(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>Z.ERROR))return h.apply(void 0,Q(t))},get level(){return m},set level(v){v!==this.level&&(m=null!=v?v:s)}}}("[mux]"),X=f(_());function J(){return"1"===(X.default.doNotTrack||X.default.navigator&&X.default.navigator.doNotTrack)}function ee(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function et(e,t){if(!y(e,t))throw TypeError("Cannot call a class as a function")}function ei(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ea(e,t,i){return t&&ei(e.prototype,t),i&&ei(e,i),e}function er(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function en(e){return(en=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function es(e,t,i){return(es="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=en(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function eo(e,t){return(eo=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}T(),k();var el=function(e){return ed(e)[0]},ed=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},eu=f(_()),ec={exists:function(){var e=eu.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=eu.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=eu.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function eh(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function em(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){er(e,t,i[t])})}return e}function ep(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var ev=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],eE=["x-cdn","content-type"].concat(ev);function eb(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(eE.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function eg(e){if(e){var t=ev.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var ef=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},e_=function(e){if(!e)return{};var t=ec.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ey=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return eb(e.getAllResponseHeaders())},eT=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!ec.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=e_(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,E=c.responseEnd;o("requestcompleted",ep(em({},ef(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:E,request_type:"manifest",request_hostname:el(r),request_response_headers:ey(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=e_(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:el(i.url),request_response_headers:ey(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=e_(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:el(i.url),request_response_headers:ey(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=e_(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ey(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?el(r.responseURL):void 0,request_id:h?eg(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ey(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:el(c),request_id:h?eg(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:el(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var E=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,E),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,E),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eA=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ek=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=el(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=eb(u[u.length-1]._responseHeaders||""));var c=i?eg(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},ew=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},eS=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},eI=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eR=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=eI(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:el(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=ek(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,E=c.requestResponseHeaders,b=c.requestMediaDuration,g=c.requestHostname,f=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:E,request_hostname:g,request_id:c.requestId,request_url:f,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=ek(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,E=u.requestResponseHeaders,b=u.requestMediaDuration,g=u.requestHostname,f=u.requestUrl,_=u.requestId,y=ew(d,i),T=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:E,request_hostname:g,request_id:_,request_url:f,request_media_start_time:l,request_media_duration:b,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eS(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=ep(em({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:el(t.url)})};i.on("fragmentLoadingAbandoned",p);var E=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:el(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",E),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",E),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eC=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eD=0,eL=function(){function e(){et(this,e),er(this,"_listeners",void 0)}return ea(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eD,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eD;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),eM=f(_()),eO=function(){function e(t){var i=this;et(this,e),er(this,"_playbackHeartbeatInterval",void 0),er(this,"_playheadShouldBeProgressing",void 0),er(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eM.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return ea(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eM.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eM.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),ex=function e(t){var i=this;et(this,e),er(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},eN=function(){function e(t){et(this,e),er(this,"_watchTimeTrackerLastCheckedTime",void 0),er(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return ea(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),eh(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eP=function(){function e(t){var i=this;et(this,e),er(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),er(this,"_lastTime",void 0),er(this,"_isAdPlaying",void 0),er(this,"_callbackUpdatePlaybackTime",void 0),er(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=K.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=K.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return ea(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=K.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&eh(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eU=function(){function e(t){et(this,e),er(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return ea(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eB=function e(t){if(et(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;eh(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(eh(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eH=function(){function e(t){var i=this;et(this,e),er(this,"_lastCheckedTime",void 0),er(this,"_lastPlayheadTime",void 0),er(this,"_lastPlayheadTimeUpdatedTime",void 0),er(this,"_rebuffering",void 0),er(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:K.now()})}))}return ea(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eW=function(){function e(t){var i=this;et(this,e),er(this,"NAVIGATION_START",void 0),er(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||K.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||K.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return ea(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eV=function e(t){var i=this;et(this,e),er(this,"_lastPlayerHeight",void 0),er(this,"_lastPlayerWidth",void 0),er(this,"_lastPlayheadPosition",void 0),er(this,"_lastSourceHeight",void 0),er(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),eh(t.data,"view_total_content_playback_time",e),eh(t.data,"view_total_upscaling",r*e),eh(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eF=function e(t){var i=this;et(this,e),er(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=K.now(),r=(t.data.viewer_time||e)-(a||e);eh(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,eh(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},e$=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eK=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eq=function(){function e(t){var i=this;et(this,e),er(this,"_adHasPlayed",void 0),er(this,"_adRequests",void 0),er(this,"_adResponses",void 0),er(this,"_currentAdRequestNumber",void 0),er(this,"_currentAdResponseNumber",void 0),er(this,"_prerollPlayTime",void 0),er(this,"_wouldBeNewAdPlay",void 0),er(this,"isAdBreak",void 0),er(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eK.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),e$(i._adRequests,a),eh(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||eh(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),e$(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&eh(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,eh(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||eh(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||eh(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return ea(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=W(ed(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=W(ed(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eY=f(_()),eG=function e(t){et(this,e);var i,a,r=function(){t.disableRebufferTracking||(eh(t.data,"view_waiting_rebuffer_count",1),i=K.now(),a=eY.default.setInterval(function(){if(i){var e=K.now();eh(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(eh(t.data,"view_waiting_rebuffer_duration",K.now()-i),i=!1,eY.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},ej=function e(t){var i=this;et(this,e),er(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=K.now(),t.on("before*",r)},r=function(e){var a=K.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eQ=f(_()),eZ=(tr=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=tr({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",a,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",tr(t,{expires:-1}))},i.withConverter=e,i}(function(){})),ez="muxData",eX=function(){var e;try{e=(eZ.get(ez)||"").split("&").reduce(function(e,t){var i=W(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eJ=function(e){try{eZ.set(ez,Object.entries(e).map(function(e){var t=W(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},e0=function(){var e=eX();return e.mux_viewer_id=e.mux_viewer_id||q(),e.msn=e.msn||Math.random(),eJ(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},e1=function(){var e=eX(),t=K.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=q(),e.sst=t),e.sex=t+15e5,eJ(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},e2=f(_()),e3=function(){var e;switch(e4()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e4=function(){var e=e2.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};e3.getConnectionFromAPI=e4;var e5=e8({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e9=e8({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e8(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e6(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e5[s];o||(z.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e9[e]?o+=e9[e]:Number.isInteger(Number(e))?o+=e:(z.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e7=f(_()),te=f(U()),tt={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},ti=["hb","requestcompleted","requestfailed","requestcanceled"],ta=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},tt,t)};ta.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},ta.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},ta.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e7.default.clearTimeout(this._sendTimeout)},ta.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e6({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);to(this._beaconUrl,i,!0,function(){})},ta.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=K.now();to(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,z.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=K.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},ta.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},ta.prototype._startBeaconSending=function(){var e=this;e7.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e7.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},ta.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(K.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(z.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===ti.indexOf(e.e)}),s()),o()||(z.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var tr,tn,ts="function"==typeof te.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},to=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(e7.default.fetch){e7.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:ts(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(e7.default.XMLHttpRequest){var r=new e7.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},tl=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],td=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],tu=["ad_id","ad_creative_id","ad_universal_id"],tc=["viewstart","error","ended","viewend"],th=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,E,b,g,f,_,y,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};et(this,e),er(this,"mux",void 0),er(this,"envKey",void 0),er(this,"options",void 0),er(this,"eventQueue",void 0),er(this,"sampleRate",void 0),er(this,"disableCookies",void 0),er(this,"respectDoNotTrack",void 0),er(this,"previousBeaconData",void 0),er(this,"lastEventTime",void 0),er(this,"rateLimited",void 0),er(this,"pageLevelData",void 0),er(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new ta((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(_=this.options.sampleRate)&&void 0!==_?_:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(T=this.options.respectDoNotTrack)&&void 0!==T&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(E=this.options.platform)||void 0===E||null===(p=E.os)||void 0===p?void 0:p.architecture,viewer_os_version:null===(g=this.options.platform)||void 0===g||null===(b=g.os)||void 0===b?void 0:b.version,viewer_connection_type:e3(),page_url:null===eQ.default||void 0===eQ.default||null===(f=eQ.default.location)||void 0===f?void 0:f.href},this.viewerData=this.disableCookies?{}:e0()}return ea(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&J())return z.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return z.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:e1(),a=ep(em({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=e6(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return z.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||z.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(z.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):tc.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=e6(a),this.eventQueue.queueEvent(a.event,s),z.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=em({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=W(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||tl.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||tu.includes(t)&&td.includes(e))}}]),e}(),tm=function e(t){et(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tp=function e(t){var i=this;et(this,e),er(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=K.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,er({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},tv=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],tE=new Set(["requestcompleted","requestfailed","requestcanceled"]),tb=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&eo(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=en(a);return e=t?Reflect.construct(i,arguments,en(this).constructor):i.apply(this,arguments),e&&("object"===A(e)||"function"==typeof e)?e:ee(this)});function a(e,t,r){et(this,a),er(ee(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),er(ee(n),"NAVIGATION_START",void 0),er(ee(n),"_destroyed",void 0),er(ee(n),"_heartBeatTimeout",void 0),er(ee(n),"adTracker",void 0),er(ee(n),"dashjs",void 0),er(ee(n),"data",void 0),er(ee(n),"disablePlayheadRebufferTracking",void 0),er(ee(n),"disableRebufferTracking",void 0),er(ee(n),"errorTracker",void 0),er(ee(n),"errorTranslator",void 0),er(ee(n),"emitTranslator",void 0),er(ee(n),"getAdData",void 0),er(ee(n),"getPlayheadTime",void 0),er(ee(n),"getStateData",void 0),er(ee(n),"stateDataTranslator",void 0),er(ee(n),"hlsjs",void 0),er(ee(n),"id",void 0),er(ee(n),"longResumeTracker",void 0),er(ee(n),"minimumRebufferDuration",void 0),er(ee(n),"mux",void 0),er(ee(n),"playbackEventDispatcher",void 0),er(ee(n),"playbackHeartbeat",void 0),er(ee(n),"playbackHeartbeatTime",void 0),er(ee(n),"playheadTime",void 0),er(ee(n),"seekingTracker",void 0),er(ee(n),"sustainedRebufferThreshold",void 0),er(ee(n),"watchTimeTracker",void 0),er(ee(n),"currentFragmentPDT",void 0),er(ee(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=ec.domContentLoadedEventEnd(),n.NAVIGATION_START=ec.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),z.level=r.debug?Z.DEBUG:Z.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new th(e,r.data.env_key,r),n.data={player_instance_id:q(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(ee(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tv.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tp(ee(n)),n.errorTracker=new ex(ee(n)),new ej(ee(n)),n.seekingTracker=new eF(ee(n)),n.playheadTime=new eU(ee(n)),n.playbackHeartbeat=new eO(ee(n)),new eV(ee(n)),n.watchTimeTracker=new eN(ee(n)),new eP(ee(n)),n.adTracker=new eq(ee(n)),new eH(ee(n)),new eB(ee(n)),new eW(ee(n)),new eG(ee(n)),new tm(ee(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return ea(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=es(en(a.prototype),"emit",this)).call.apply(i,[this].concat(Q(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=W(ed(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tE.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e=this.getStateData();if("function"==typeof this.stateDataTranslator)try{e=this.stateDataTranslator(e)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}Object.assign(this.data,e),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=q(),i=function(){t===e.data.view_id&&eh(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,eT(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eA(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,eR(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(eC(this.dashjs),this.dashjs=void 0)}}]),a}(eL),tg=f(U()),tf=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],t_={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},ty=f(_());ty.default&&ty.default.WeakMap&&(tn=new WeakMap);var tT={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tA=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tA.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tA.prototype.processLine=function(e){var t=e.indexOf(":"),i=tD(e,t),a=i[0],r=2===i.length?tS(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case tT.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case tT.PART_INF:tk(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case tT.SERVER_CONTROL:tk(this.manifest,i),this.setHoldBack();break;case tT.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case tT.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case tT.VERSION:tk(this.manifest,i);break;case tT.SESSION_DATA:var s=ef(tL(i[1]));Object.assign(this.manifest.sessionData,s)}},tA.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tk=function(e,t){var i,a=tw(t[0].replace("#EXT-X-",""));tC(t[1])?(i={},i=Object.assign(tR(t[1]),i)):i=tS(t[1]),e[a]=i},tw=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tS=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tI=function(e){var t={},i=e.split("=");return i.length>1&&(t[tw(i[0])]=tS(i[1])),t},tR=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tI(t[a]),i);return i},tC=function(e){return e.indexOf("=")>-1},tD=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tL=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tM={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){z.info("safeCall error",e)}return r},safeIncrement:eh,getComputedStyle:function(e,t){var i;return e&&t&&ty.default&&"function"==typeof ty.default.getComputedStyle?(tn&&tn.has(e)&&(i=tn.get(e)),i||(i=ty.default.getComputedStyle(e,null),tn&&tn.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:eb,cdnHeadersToRequestId:eg,extractHostnameAndDomain:ed,extractHostname:el,manifestParser:tA,generateShortID:Y,generateUUID:q,now:K.now,findMediaElement:j},tO={},tx=function(e){var t=arguments;"string"==typeof e?tx.hasOwnProperty(e)?V.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tx[e].apply(null,t)},0):z.warn("`"+e+"` is an unknown task"):"function"==typeof e?V.default.setTimeout(function(){e(tx)},0):z.warn("`"+e+"` is invalid.")},tN={loaded:K.now(),NAME:"mux-embed",VERSION:"5.9.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=W(j(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null===(e=this.getPlayheadTime)||void 0===e?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tg.default&&!!(tg.default.fullscreenElement||tg.default.webkitFullscreenElement||tg.default.mozFullScreenElement||tg.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(t=r.getVideoPlaybackQuality)||void 0===t?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(s.player_program_time=u+i,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);s.player_live_edge_program_time=c}}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=W(j(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tf.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=t_[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tx,e,t)},destroyMonitor:function(e){var t=W(j(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():z.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=G(e);tO[i]?tO[i].addHLSJS(t):z.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=G(e);tO[i]?tO[i].addDashJS(t):z.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=G(e);tO[t]?tO[t].removeHLSJS():z.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=G(e);tO[t]?tO[t].removeDashJS():z.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){J()&&t&&t.respectDoNotTrack&&z.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=G(e);tO[i]=new tb(tx,i,t)},emit:function(e,t,i){var a=G(e);tO[a]?(tO[a].emit(t,i),"destroy"===t&&delete tO[a]):z.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=G(e);tO[i]?tO[i].emit("hb",t):z.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=G(e);tO[i]?tO[i].emitTranslator=t:z.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=G(e);tO[i]?tO[i].stateDataTranslator=t:z.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=G(e);tO[i]?tO[i].getPlayheadTime=t:z.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:J,log:z,utils:tM,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tx,tN),void 0!==V.default&&"function"==typeof V.default.addEventListener&&V.default.addEventListener("pagehide",function(e){e.persisted||(tx.WINDOW_UNLOADING=!0)},!1);var tP=i(40303).ZP,tU={VIDEO:"video",DRM:"drm"},tB={NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},tH=e=>e===tU.VIDEO?"playback":e,tW=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tW.MEDIA_ERR_ABORTED=1,tW.MEDIA_ERR_NETWORK=2,tW.MEDIA_ERR_DECODE=3,tW.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tW.MEDIA_ERR_ENCRYPTED=5,tW.MEDIA_ERR_CUSTOM=100,tW.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tV=e=>null==e,tF=(e,t)=>!tV(t)&&e in t,t$={ANY:"any",MUTED:"muted"},tK={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tq={MSE:"mse",NATIVE:"native"},tY={HEADER:"header",QUERY:"query",NONE:"none"},tG=Object.values(tY),tj={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tQ={HLS:tj.M3U8};Object.keys(tQ),[...Object.values(tj)];var tZ={code:"en"},tz=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tX=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},tJ=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return tF(e,tQ)?tQ[e]:t}return t2(e)},t0=e=>"VOD"===e?tK.ON_DEMAND:tK.LIVE,t1=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,t2=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=new URL(t).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return t4(e)?tj.M3U8:"";let r=i.slice(a+1).toUpperCase();return tF(r,tj)?tj[r]:""},t3="mux.com",t4=({src:e,customDomain:t=t3})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},t5=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}},t9=({exp:e},t=Date.now())=>!e||1e3*e<t,t8=({sub:e},t)=>e!==t,t6=({aud:e},t)=>!e,t7=({aud:e},t)=>e!==t;function ie(e,t=!0){var i;return new it(t&&null!=(i=null==tZ?void 0:tZ[e])?i:e,t?tZ.code:"en")}var it=class{constructor(e,t=(e=>null!=(e=tZ)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},ii=Object.values(t$),ia=e=>"boolean"==typeof e||"string"==typeof e&&ii.includes(e),ir=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=ia(a)?a:!!a,o=()=>{r||tz(t,"playing",()=>{r=!0},{once:!0})};if(o(),tz(t,"loadstart",()=>{r=!1,o(),is(t,s)},{once:!0}),tz(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tK.UNKNOWN?e.streamType===tK.LIVE:!Number.isFinite(t.duration)),is(t,s)},{once:!0}),i&&i.once(tP.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tK.UNKNOWN?e.streamType===tK.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tz(t,"play",()=>{"metadata"===t.preload?i.once(tP.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||is(t,s=ia(e)?e:!!e)}},is=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case t$.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case t$.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},io=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tz(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d},il=e=>"time"in e?e.time:e.startTime;function id(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function iu(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function ic(e,t,i,a){let r=iu(e,i,a);return r||((r=id(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>il(t)-il(e)).forEach(t=>{var i,n;let s=t.value,o=il(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var ih="cuepoints",im=Object.freeze({label:ih});async function ip(e,t,i=im){return ic(e,t,i.label,"metadata")}var iv=e=>({time:e.startTime,value:JSON.parse(e.text)});function iE(e,t={label:ih}){var i,a;let r=iu(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iv(r.activeCues[0]);let{currentTime:n}=e;return iv(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ib(e,t=im){return new Promise(i=>{tz(e,"loadstart",async()=>{let a=await ip(e,[],t);tz(e,"cuechange",()=>{let t=iE(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ig="chapters",i_=Object.freeze({label:ig}),iy=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function iT(e,t,i=i_){return ic(e,t,i.label,"chapters")}function iA(e,t={label:ig}){var i,a;let r=iu(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iy(r.activeCues[0]);let{currentTime:n}=e;return iy(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ik(e,t=i_){return new Promise(i=>{tz(e,"loadstart",async()=>{let a=await iT(e,[],t);tz(e,"cuechange",()=>{let t=iA(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iw={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},iS=e=>e===tU.VIDEO?iw.VIDEO:e===tU.DRM?iw.DRM:void 0,iI=(e,t)=>{var i,a;let r=tH(e),n=`${r}Token`;return null!=(i=t.tokens)&&i[r]?null==(a=t.tokens)?void 0:a[r]:tF(n,t)?t[n]:void 0},iR=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o;if(n){let i=ie("Your device appears to be offline",r),a=tW.MEDIA_ERR_NETWORK,n=new tW(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=tB.NETWORK_OFFLINE,n.data=e,n}let l="status"in e?e.status:e.code,d=Date.now(),u=tW.MEDIA_ERR_NETWORK;if(200===l)return;let c=tH(t),h=iI(t,i),m=iS(t),[p]=tX(null!=(s=i.playbackId)?s:"");if(!l||!p)return;let E=t5(h);if(h&&!E){let i=new tW(ie("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:c}),u,!0,ie("Compact JWT string: {token}",r).format({token:h}));return i.errorCategory=t,i.muxCode=tB.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(l>=500){let e=new tW("",u,null==a||a);return e.errorCategory=t,e.muxCode=tB.NETWORK_UNKNOWN_ERROR,e}if(403===l){if(E){if(t9(E,d)){let i={timeStyle:"medium",dateStyle:"medium"},a=new tW(ie("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:c}),u,!0,ie("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=E.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(d)}));return a.errorCategory=t,a.muxCode=tB.NETWORK_TOKEN_EXPIRED,a.data=e,a}if(t8(E,p)){let i=new tW(ie("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c}),u,!0,ie("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:c,playbackId:p,tokenPlaybackId:E.sub}));return i.errorCategory=t,i.muxCode=tB.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if(t6(E,m)){let i=new tW(ie("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,ie("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m}));return i.errorCategory=t,i.muxCode=tB.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if(t7(E,m)){let i=new tW(ie("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,ie("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m,aud:E.aud}));return i.errorCategory=t,i.muxCode=tB.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new tW(ie("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c,category:t}),u,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tB.NETWORK_TOKEN_MISSING,i.data=e,i}}if(412===l){let n=new tW(ie("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),u,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:p}));return n.errorCategory=t,n.muxCode=tB.NETWORK_NOT_READY,n.streamType=i.streamType===tK.LIVE?"live":i.streamType===tK.ON_DEMAND?"on-demand":"unknown",n.data=e,n}if(404===l){let i=new tW(ie("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),u,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tB.NETWORK_NOT_FOUND,i.data=e,i}if(400===l){let i=new tW(ie("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),u,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tB.NETWORK_INVALID_URL,i.data=e,i}let b=new tW("",u,null==a||a);return b.errorCategory=t,b.muxCode=tB.NETWORK_UNKNOWN_ERROR,b.data=e,b},iC=tP.DefaultConfig.capLevelController,iD={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},iL=class e extends iC{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=iD[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iC.getMaxLevelByMediaSize(a,16/9*n,n)}};iL.minMaxResolution=720,iL.maxAutoResolution=new WeakMap;var iM,iO,ix,iN,iP,iU,iB={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},iH=e=>e.includes("fps")?iB.FAIRPLAY:e.includes("playready")?iB.PLAYREADY:e.includes("widevine")?iB.WIDEVINE:void 0,iW=e=>fetch(e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>200!==e.status?Promise.reject(e):e.text()),iV=e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(iF)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}},iF=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,i$=e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=t0(n),o=t1(n),l;if(s===tK.LIVE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*+e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=3*+(null!=t?t:6)}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},iK=async(e,t)=>{if(t===tj.MP4)return{streamType:tK.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tj.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await iW(i);return{...iV(i),...i$(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},iq=async(e,t,i=tJ({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await iK(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&iY(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=iJ.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=iJ.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=iJ.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iY=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=iJ.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},iG=e=>{var t;let i=e.type,a=t0(i),r=t1(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tK.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},ij=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=iG(e);if(c===tK.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=iJ.get(t))?o:{}).seekable=e}(null!=(l=iJ.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=iJ.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=iJ.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iQ=null!=(iO=null==(iM=null==globalThis?void 0:globalThis.navigator)?void 0:iM.userAgent)?iO:"",iZ=null!=(iP=null==(iN=null==(ix=null==globalThis?void 0:globalThis.navigator)?void 0:ix.userAgentData)?void 0:iN.platform)?iP:"",iz=iQ.toLowerCase().includes("android")||["x11","android"].some(e=>iZ.toLowerCase().includes(e)),iX=e=>/^((?!chrome|android).)*safari/i.test(iQ)&&!!e.canPlayType("application/vnd.apple.mpegurl"),iJ=new WeakMap,i0="mux.com",i1=null==(iU=tP.isSupported)?void 0:iU.call(tP),i2=e=>iz||!iX(e),i3=()=>tx.utils.now(),i4=tx.utils.generateUUID,i5=({playbackId:e,customDomain:t=i0,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=tX(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},i9=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},i8=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},i6=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:aT(e)&&null!=(a=null!=(i=i9(e.playbackId))?i:i8(e.src))?a:e.src},i7=e=>{var t;return null==(t=iJ.get(e))?void 0:t.error},ae=e=>{var t;return null==(t=iJ.get(e))?void 0:t.metadata},at=e=>{var t,i;return null!=(i=null==(t=iJ.get(e))?void 0:t.streamType)?i:tK.UNKNOWN},ai=e=>{var t,i;return null!=(i=null==(t=iJ.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},aa=e=>{var t,i;return null!=(i=null==(t=iJ.get(e))?void 0:t.seekable)?i:e.seekable},ar=e=>{var t;let i=null==(t=iJ.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=aa(e);return a.length?a.end(a.length-1)-i:Number.NaN},an=.034,as=(e,t,i=an)=>Math.abs(e-t)<=i,ao=(e,t,i=an)=>e>t||as(e,t,i),al=(e,t=an)=>e.paused&&ao(e.currentTime,e.duration,t),ad=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},au=(e,t)=>e.ended||e.loop?e.ended:!!(t&&ad(e,t))||al(e),ac=(e,t,i)=>{ah(t,i,e);let{metadata:a={}}=e,{view_session_id:r=i4()}=a,n=i6(e);a.view_session_id=r,a.video_id=n,e.metadata=a,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},iJ.set(t,{retryCount:0});let s=ap(e,t),o=io(e,t,s);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?s&&t.mux.addHLSJS({hlsjs:s,Hls:s?tP:void 0}):aA(e,t,s),ak(e,t,s),ib(t),ik(t);let l=ir(e,t,s);return{engine:s,setAutoplay:l,setPreload:o}},ah=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",aS),e.removeEventListener("error",aR),e.removeEventListener("durationchange",aw),iJ.delete(e),e.dispatchEvent(new Event("teardown")))};function am(e,t){var i;let a=tJ(e);if(a!==tj.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tq.MSE,o=n===tq.NATIVE,l=i1&&(s||i2(t));return r&&(o||!l)}var ap=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l}=e,d=tJ(e)===tj.M3U8,u=am(e,t);if(d&&!u&&i1){let d=av(a),u=aE(e),c=[tY.QUERY,tY.HEADER].includes(s)?{useHeaders:s===tY.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,h=null==o.capLevelToPlayerSize?{capLevelController:iL}:{},m=new tP({debug:i,startPosition:r,cmcd:c,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tY.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...h,backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...d,...u,...o});return h.capLevelController===iL&&void 0!==l&&iL.setMaxAutoResolution(m,l),m.on(tP.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&iY(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),m}},av=e=>e===tK.LIVE?{backBufferLength:8}:{},aE=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=i9(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:a_(e,"fairplay"),serverCertificateUrl:ay(e,"fairplay")},"com.widevine.alpha":{licenseUrl:a_(e,"widevine")},"com.microsoft.playready":{licenseUrl:a_(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=iH(e);return null==a||a(i),t}))}:{}},ab=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},ag=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},af=(e,t)=>{let i=async i=>{let a=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(t=>{var i;return null==(i=e.drmTypeCb)||i.call(e,iB.FAIRPLAY),t}).catch(()=>{let e=new tW(ie("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tW.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tU.DRM,e.muxCode=tB.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,aI(t,e)});if(!a)return;let r=await a.createMediaKeys();try{let t=await ab(ay(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iR(t,tU.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)});await r.setServerCertificate(t).catch(()=>{let e=ie("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tW(e,tW.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tU.DRM,t.muxCode=tB.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(e){aI(t,e);return}await t.setMediaKeys(r)},a=e=>{let i;"internal-error"===e?((i=new tW(ie("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tW.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tU.DRM,i.muxCode=tB.ENCRYPTED_CDM_ERROR):("output-restricted"===e||"output-downscaled"===e)&&((i=new tW(ie("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tW.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tU.DRM,i.muxCode=tB.ENCRYPTED_OUTPUT_RESTRICTED),i&&aI(t,i)},r=async(i,r)=>{let n=t.mediaKeys.createSession(),s=()=>{n.keyStatuses.forEach(e=>a(e))},o=async i=>{let a=i.message;try{let i=await ag(a,a_(e,"fairplay"));try{await n.update(i)}catch{let e=ie("Failed to update DRM license. This may be an issue with the player or your protected content."),i=new tW(e,tW.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=tU.DRM,i.muxCode=tB.ENCRYPTED_UPDATE_LICENSE_FAILED,aI(t,i)}}catch(i){if(i instanceof Response){let a=iR(i,tU.DRM,e);if(console.error("mediaError",null==a?void 0:a.message,null==a?void 0:a.context),a){aI(t,a);return}console.error("Unexpected error in license key request",i);return}console.error(i)}};n.addEventListener("keystatuseschange",s),n.addEventListener("message",o),t.addEventListener("teardown",()=>{n.removeEventListener("keystatuseschange",s),n.removeEventListener("message",o),n.close()},{once:!0}),await n.generateRequest(i,r).catch(e=>{console.error("Failed to generate license request",e);let t=new tW(ie("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tW.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tU.DRM,t.muxCode=tB.ENCRYPTED_GENERATE_REQUEST_FAILED,Promise.reject(t)})};tz(t,"encrypted",async e=>{try{let a=e.initDataType;if("skd"!==a){console.error(`Received unexpected initialization data type "${a}"`);return}t.mediaKeys||await i(a);let n=e.initData;if(null==n){console.error(`Could not start encrypted playback due to missing initData in ${e.type} event`);return}await r(a,n)}catch(e){aI(t,e);return}})},a_=({playbackId:e,tokens:{drm:t}={},customDomain:i=i0},a)=>{let r=i9(e);return`https://license.${i.toLocaleLowerCase().endsWith(i0)?i:i0}/license/${a}/${r}?token=${t}`},ay=({playbackId:e,tokens:{drm:t}={},customDomain:i=i0},a)=>{let r=i9(e);return`https://license.${i.toLocaleLowerCase().endsWith(i0)?i:i0}/appcert/${a}/${r}?token=${t}`},aT=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(i0)||!!i&&a.includes(i.toLocaleLowerCase())},aA=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=tx,muxDataSDKOptions:o={}}=e,l=aT(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tP:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},ak=(e,t,i)=>{var a,r;let n=am(e,t),{src:s,customDomain:o=i0}=e,l=()=>{t.ended||e.disablePseudoEnded||!au(t,i)||(ad(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=aa(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(tz(t,"durationchange",c),t&&n){let i=tJ(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=i8(s);iY(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(at(t)!==tK.LIVE||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tz(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>iq(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=iR(i,tU.VIDEO,e);if(a){aI(t,a);return}}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};tz(t,"play",e,{once:!0}),tz(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?af(e,t):tz(t,"encrypted",()=>{let e=new tW(ie("Attempting to play DRM-protected content without providing a DRM token."),tW.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tU.DRM,e.muxCode=tB.ENCRYPTED_MISSING_TOKEN,aI(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=iJ.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",aw,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",aS),t.addEventListener("error",aR),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tz(t,"pause",l),tz(t,"seeked",l),tz(t,"play",()=>{t.ended||ao(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(tP.Events.LEVEL_LOADED,(e,a)=>{ij(a.details,t,i),c(),at(t)!==tK.LIVE||Number.isFinite(t.duration)||(i.on(tP.Events.LEVEL_UPDATED,c),tz(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tP.Events.LEVELS_UPDATED,c)}))}),i.on(tP.Events.ERROR,(a,r)=>{var n,s;let o=aC(r,e);if(o.muxCode===tB.NETWORK_NOT_READY){let e=null!=(n=iJ.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new tW(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),aI(t,s),setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);return}{e.retryCount=0;let i=new tW('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(i,o),aI(t,i);return}}aI(t,o)}),i.on(tP.Events.MANIFEST_LOADED,()=>{let e=iJ.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",aR),tz(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tP.Events.MANIFEST_PARSED,function(t,i){s();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tP.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(n(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tP.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)}),null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)});let r=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},n=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},s=()=>{r(),n()};t.once(tP.Events.DESTROYING,s)}(e,i),function(e,t){t.on(tP.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a,r;let n=null!=(a=i.subtitleTrack)?a:i.closedCaptions,s=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==n?void 0:n.lang)&&t===i.label&&a.toLowerCase()===i.kind),o=(null!=(r=i._id)?r:i.default)?"default":`${i.kind}${s}`;id(e,i.kind,i.label,null==n?void 0:n.lang,o,i.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let i=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!i)return;let a=t.subtitleTracks[t.subtitleTrack],r=a?a.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(null==i?void 0:i.id)!==r){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:a,default:r})=>"default"===i.id&&r||e==i.language&&t===i.label&&a.toLowerCase()===i.kind);t.subtitleTrack=e}(null==i?void 0:i.id)===r&&i.cues&&Array.from(i.cues).forEach(e=>{i.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tP.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tP.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&("thumbnails"===t.label||"chapters"===t.kind)){if(!(null!=(i=t.cues)&&i.length)){let i="track";t.kind&&(i+=`[kind="${t.kind}"]`),t.label&&(i+=`[label="${t.label}"]`);let r=e.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tP.Events.MANIFEST_LOADED,a),t.once(tP.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function aw(e){var t;let i=e.target,a=null==(t=iJ.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function aS(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tW(i,a);if(t.src&&a===tW.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var e;let i=null!=(e=i7(t))?e:t.error;(null==i?void 0:i.code)===tW.MEDIA_ERR_SRC_NOT_SUPPORTED&&aI(t,r)},500);return}if(t.src&&(a!==tW.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}aI(t,r)}function aI(e,t){var i;t.fatal&&((null!=(i=iJ.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function aR(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tW))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=iJ.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var aC=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[tP.ErrorTypes.NETWORK_ERROR]:tW.MEDIA_ERR_NETWORK,[tP.ErrorTypes.MEDIA_ERROR]:tW.MEDIA_ERR_DECODE,[tP.ErrorTypes.KEY_SYSTEM_ERROR]:tW.MEDIA_ERR_ENCRYPTED},s,o=[tP.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tP.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tW.MEDIA_ERR_NETWORK:n[e.type];if(o===tW.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===tP.ErrorTypes.KEY_SYSTEM_ERROR?tU.DRM:e.type===tP.ErrorTypes.NETWORK_ERROR?tU.VIDEO:void 0)?i:tU.VIDEO;s=null!=(a=iR(e.response,r,t,e.fatal))?a:new tW("",o,e.fatal)}else o===tW.MEDIA_ERR_ENCRYPTED?e.details===tP.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tW(ie("Attempting to play DRM-protected content without providing a DRM token."),tW.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tB.ENCRYPTED_MISSING_TOKEN):e.details===tP.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tW(ie("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tW.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tB.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===tP.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tW(ie("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tW.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tU.DRM,s.muxCode=tB.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===tP.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tW(ie("Failed to update DRM license. This may be an issue with the player or your protected content."),tW.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tB.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===tP.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tW(ie("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tW.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tB.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===tP.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tW(ie("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tW.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tB.ENCRYPTED_CDM_ERROR):e.details===tP.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tW(ie("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tW.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tU.DRM,s.muxCode=tB.ENCRYPTED_OUTPUT_RESTRICTED):((s=new tW(e.error.message,tW.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tB.ENCRYPTED_ERROR):s=new tW("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s};let aD=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],aL=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function aM(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${aN(e)}></audio>
    </slot>
    <slot></slot>
  `}function aO(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${aN(e)}></video>
    </slot>
    <slot></slot>
  `}function ax(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),r=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?aM:aO;static shadowRootOptions={mode:"open"};static Events=aD;static #e=!1;static get observedAttributes(){return n.#t(),[...a?.constructor?.observedAttributes??[],...aL]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype)){if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}}#a=!1;#r=null;#n=new Map;#s;get;set;call;get nativeEl(){return this.#i(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#o(e);for(let e of(this.#s=new MutationObserver(this.#l.bind(this)),this.shadowRoot.addEventListener("slotchange",()=>this.#d()),this.#d(),this.constructor.Events))this.shadowRoot.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#d(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#s?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#u(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#l(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#u(a))}}#u(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#o(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#c(e,t,i)}#c(e,t,i){["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i))}connectedCallback(){this.#i()}}}function aN(e){let t="";for(let i in e){if(!aL.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let aP=ax(globalThis.HTMLElement??class{},{tag:"video"});ax(globalThis.HTMLElement??class{},{tag:"audio"});var aU,aB,aH,aW,aV,aF,a$,aK,aq,aY,aG,aj,aQ=e=>{throw TypeError(e)},aZ=(e,t,i)=>t.has(e)||aQ("Cannot "+i),az=(e,t,i)=>(aZ(e,t,"read from private field"),i?i.call(e):t.get(e)),aX=(e,t,i)=>t.has(e)?aQ("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),aJ=(e,t,i,a)=>(aZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a0=(e,t,i)=>(aZ(e,t,"access private method"),i),a1=(()=>{try{return"0.29.1"}catch{}return"UNKNOWN"})(),a2=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,a3={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},a4=Object.values(a3),a5="mux-video",a9=class extends aP{constructor(){super(),aX(this,aG),aX(this,aU),aX(this,aB),aX(this,aH),aX(this,aW,{}),aX(this,aV,{}),aX(this,aF),aX(this,a$),aX(this,aK),aX(this,aq),aX(this,aY,""),aJ(this,aH,i3()),this.nativeEl.addEventListener("muxmetadata",e=>{var t;let i=ae(this.nativeEl),a=null!=(t=this.metadata)?t:{};this.metadata={...i,...a},(null==i?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(aJ(this,aY,"default"),this.updateLogo())})}static get NAME(){return a5}static get VERSION(){return a1}static get observedAttributes(){var e;return[...a4,...null!=(e=aP.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?a2:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${aP.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[a3.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(a3.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tG.includes(e)?this.setAttribute(a3.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tG.join()}`):this.removeAttribute(a3.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(a3.PLAYER_INIT_TIME)?+this.getAttribute(a3.PLAYER_INIT_TIME):az(this,aH)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(a3.PLAYER_INIT_TIME):this.setAttribute(a3.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=az(this,aK))?e:a5}set playerSoftwareName(e){aJ(this,aK,e)}get playerSoftwareVersion(){var e;return null!=(e=az(this,a$))?e:a1}set playerSoftwareVersion(e){aJ(this,a$,e)}get _hls(){var e;return null==(e=az(this,aU))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=i7(this.nativeEl))?e:null}get errorTranslator(){return az(this,aq)}set errorTranslator(e){aJ(this,aq,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(a3.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(a3.TYPE,e):this.removeAttribute(a3.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(a3.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(a3.DEBUG,""):this.removeAttribute(a3.DEBUG))}get disableTracking(){return this.hasAttribute(a3.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(a3.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(a3.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(a3.DISABLE_COOKIES,""):this.removeAttribute(a3.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(a3.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(a3.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(a3.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(a3.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(a3.START_TIME):this.setAttribute(a3.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(a3.PLAYBACK_ID)?this.getAttribute(a3.PLAYBACK_ID):null!=(e=i8(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(a3.PLAYBACK_ID,e):this.removeAttribute(a3.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(a3.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(a3.MAX_RESOLUTION,e):this.removeAttribute(a3.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(a3.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(a3.MIN_RESOLUTION,e):this.removeAttribute(a3.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(a3.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(a3.MAX_AUTO_RESOLUTION):this.setAttribute(a3.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(a3.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(a3.RENDITION_ORDER,e):this.removeAttribute(a3.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(a3.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(a3.PROGRAM_START_TIME):this.setAttribute(a3.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(a3.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(a3.PROGRAM_END_TIME):this.setAttribute(a3.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(a3.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(a3.ASSET_START_TIME):this.setAttribute(a3.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(a3.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(a3.ASSET_END_TIME):this.setAttribute(a3.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(a3.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(a3.CUSTOM_DOMAIN,e):this.removeAttribute(a3.CUSTOM_DOMAIN))}get drmToken(){var e;return null!=(e=this.getAttribute(a3.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(a3.DRM_TOKEN,e):this.removeAttribute(a3.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(a3.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(a3.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(a3.PLAYBACK_ID)){let[,e]=tX(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(a3.PLAYBACK_TOKEN,e):this.removeAttribute(a3.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(a3.PLAYBACK_TOKEN),t=this.getAttribute(a3.DRM_TOKEN);return{...az(this,aV),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){aJ(this,aV,null!=e?e:{})}get ended(){return au(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(a3.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(a3.ENV_KEY,e):this.removeAttribute(a3.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(a3.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(a3.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(a3.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(a3.STREAM_TYPE))?e:at(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(a3.STREAM_TYPE,e):this.removeAttribute(a3.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(a3.TARGET_LIVE_WINDOW)?+this.getAttribute(a3.TARGET_LIVE_WINDOW):ai(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(a3.TARGET_LIVE_WINDOW):this.setAttribute(a3.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(a3.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return ar(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(a3.LIVE_EDGE_OFFSET))return+this.getAttribute(a3.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(a3.LIVE_EDGE_OFFSET):this.setAttribute(a3.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return aa(this.nativeEl)}async addCuePoints(e){return ip(this.nativeEl,e)}get activeCuePoint(){return iE(this.nativeEl)}get cuePoints(){return function(e,t={label:ih}){let i=iu(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>iv(e)):[]}(this.nativeEl)}async addChapters(e){return iT(this.nativeEl,e)}get activeChapter(){return iA(this.nativeEl)}get chapters(){return function(e,t={label:ig}){var i;let a=iu(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>iy(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(a3.PREFER_PLAYBACK);if(e===tq.MSE||e===tq.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tq.MSE||e===tq.NATIVE?this.setAttribute(a3.PREFER_PLAYBACK,e):this.removeAttribute(a3.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![a3.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...az(this,aW)}}set metadata(e){aJ(this,aW,null!=e?e:{}),this.mux&&this.mux.emit("hb",az(this,aW))}get _hlsConfig(){return az(this,aF)}set _hlsConfig(e){aJ(this,aF,e)}get logo(){var e;return null!=(e=this.getAttribute(a3.LOGO))?e:az(this,aY)}set logo(e){e?this.setAttribute(a3.LOGO,e):this.removeAttribute(a3.LOGO)}load(){aJ(this,aU,ac(this,this.nativeEl,az(this,aU)))}unload(){ah(this.nativeEl,az(this,aU),this),aJ(this,aU,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(aP.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case a3.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case a3.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?a0(this,aG,aj).call(this):e&&!a?this.unload():e&&a&&(this.unload(),a0(this,aG,aj).call(this));break}case"autoplay":if(i===t)break;null==(a=az(this,aU))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=az(this,aU))||r.setPreload(i);break;case a3.PLAYBACK_ID:this.src=i5(this);break;case a3.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case a3.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case a3.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case a3.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case a3.LOGO:(null==i||i!==t)&&this.updateLogo();break;case a3.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),a0(this,aG,aj).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case a3.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))})}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let t=this.constructor.getLogoHTML(az(this,aY)||this.logo);e.innerHTML=t}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!az(this,aU)&&a0(this,aG,aj).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};aU=new WeakMap,aB=new WeakMap,aH=new WeakMap,aW=new WeakMap,aV=new WeakMap,aF=new WeakMap,a$=new WeakMap,aK=new WeakMap,aq=new WeakMap,aY=new WeakMap,aG=new WeakSet,aj=async function(){az(this,aB)||(await aJ(this,aB,Promise.resolve()),aJ(this,aB,null),this.load())};let a8=new WeakMap;class a6 extends Error{}class a7 extends Error{}let re=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function rt(){return globalThis.cast?.framework?.CastContext.getInstance()}function ri(){return rt()?.getCurrentSession()}function ra(){return ri()?.getSessionObj().media[0]}function rr(e){return rt().setOptions({...rn(),...e})}function rn(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function rs(e){try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return re.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function ro(e){try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=i.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return function(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}(r)}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}let rl=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),rd=new WeakSet;rV=()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}a||(a=cast.framework,rt().addEventListener(a.CastContextEventType.CAST_STATE_CHANGED,e=>{rl.forEach(t=>a8.get(t).onCastStateChanged?.(e))}),rt().addEventListener(a.CastContextEventType.SESSION_STATE_CHANGED,e=>{rl.forEach(t=>a8.get(t).onSessionStateChanged?.(e))}),rl.forEach(e=>a8.get(e).init?.()))},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?rV():customElements.whenDefined("google-cast-button").then(rV):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(rV)};let ru=0;class rc extends EventTarget{#h;#a;#m;#p;#v="disconnected";#E=!1;#b=new Set;#g=new WeakMap;constructor(e){super(),this.#h=e,rl.add(this),a8.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#f(),onSessionStateChanged:()=>this.#_(),getCastPlayer:()=>this.#y}),this.#i()}get #y(){if(rd.has(this.#h))return this.#m}get state(){return this.#v}async watchAvailability(e){if(this.#h.disableRemotePlayback)throw new a6("disableRemotePlayback attribute is present.");return this.#g.set(e,++ru),this.#b.add(e),queueMicrotask(()=>e(this.#T())),ru}async cancelWatchAvailability(e){if(this.#h.disableRemotePlayback)throw new a6("disableRemotePlayback attribute is present.");e?this.#b.delete(e):this.#b.clear()}async prompt(){if(this.#h.disableRemotePlayback)throw new a6("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new a7("The RemotePlayback API is disabled on this platform.");let e=rd.has(this.#h);rd.add(this.#h),rr(this.#h.castOptions),Object.entries(this.#p).forEach(([e,t])=>{this.#m.controller.addEventListener(e,t)});try{await rt().requestSession()}catch(t){if(e||rd.delete(this.#h),"cancel"===t)return;throw Error(t)}a8.get(this.#h)?.loadOnPrompt?.()}#A(){rd.has(this.#h)&&(Object.entries(this.#p).forEach(([e,t])=>{this.#m.controller.removeEventListener(e,t)}),rd.delete(this.#h),this.#h.muted=this.#m.isMuted,this.#h.currentTime=this.#m.savedPlayerState.currentTime,!1===this.#m.savedPlayerState.isPaused&&this.#h.play())}#T(){let e=rt()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#f(){let e=rt().getCastState();if(rd.has(this.#h)&&"CONNECTING"===e&&(this.#v="connecting",this.dispatchEvent(new Event("connecting"))),!this.#E&&e?.includes("CONNECT"))for(let e of(this.#E=!0,this.#b))e(!0);else if(this.#E&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#E=!1,this.#b))e(!1)}async #_(){let{SESSION_RESUMED:e}=a.SessionState;if(rt().getSessionState()===e&&this.#h.castSrc===ra()?.media.contentId){rd.add(this.#h),Object.entries(this.#p).forEach(([e,t])=>{this.#m.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{ra().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#p[a.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#p[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){a&&!this.#a&&(this.#a=!0,rr(this.#h.castOptions),this.#h.textTracks.addEventListener("change",()=>this.#k()),this.#f(),this.#m=new a.RemotePlayer,new a.RemotePlayerController(this.#m),this.#p={[a.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#v="connected",this.dispatchEvent(new Event("connect"))):(this.#A(),this.#v="disconnected",this.dispatchEvent(new Event("disconnect")))},[a.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#h.dispatchEvent(new Event("durationchange"))},[a.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#h.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#h.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#y?.isMediaLoaded&&this.#h.dispatchEvent(new Event("timeupdate"))},[a.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#h.dispatchEvent(new Event("resize"))},[a.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#h.dispatchEvent(new Event(this.paused?"pause":"play"))},[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#y?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#h.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#y?.playerState]))},[a.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#y?.isMediaLoaded&&(await Promise.resolve(),this.#w())}})}#w(){this.#k()}async #k(){let e;if(!this.#y)return;let t=(this.#m.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#h.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=ri()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{ra().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let rh=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#S={paused:!1};#I=rn();#R;#C;get remote(){return this.#C?this.#C:globalThis.chrome?(this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),a8.set(this,{loadOnPrompt:()=>this.#D()}),this.#C=new rc(this)):super.remote}get #y(){return a8.get(this.remote)?.getCastPlayer?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#I.receiverApplicationId=i;return}if(this.#y)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #D(){this.#S.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#y)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],rs(this.castSrc)){let t=await ro(this.castSrc);t?.includes("m4s")||t?.includes("mp4")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):t?.includes("ts")&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#S.paused,r.activeTrackIds=i,await ri()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#y){this.#y.isPaused&&this.#y.controller?.playOrPause();return}return super.play()}pause(){if(this.#y){this.#y.isPaused||this.#y.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#I}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#R}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t)){console.error(`castCustomData must be nullish or an object but value was of type ${t}`);return}this.#R=e}get readyState(){if(this.#y)switch(this.#y.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#y?this.#y.isPaused:super.paused}get muted(){return this.#y?this.#y?.isMuted:super.muted}set muted(e){if(this.#y){(e&&!this.#y.isMuted||!e&&this.#y.isMuted)&&this.#y.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#y?this.#y?.volumeLevel??1:super.volume}set volume(e){if(this.#y){this.#y.volumeLevel=+e,this.#y.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#y&&this.#y?.isMediaLoaded?this.#y?.duration??NaN:super.duration}get currentTime(){return this.#y&&this.#y?.isMediaLoaded?this.#y?.currentTime??0:super.currentTime}set currentTime(e){if(this.#y){this.#y.currentTime=e,this.#y.controller?.seek();return}super.currentTime=e}};class rm extends Event{track;constructor(e,t){super(e),this.track=t.track}}let rp=new WeakMap;function rv(e){var t;let i;return rp.get(e)??(t={},(i=rp.get(e))||rp.set(e,i={}),Object.assign(i,t))}function rE(e,t){let i=e.videoTracks;rv(t).media=e,rv(t).renditionSet||(rv(t).renditionSet=new Set);let a=rv(i).trackSet;a.add(t);let r=a.size-1;r in rg.prototype||Object.defineProperty(rg.prototype,r,{get(){return[...rv(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new rm("addtrack",{track:t}))})}function rb(e){let t=rv(e).media?.videoTracks;t&&(rv(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new rm("removetrack",{track:e}))}))}class rg extends EventTarget{#L;#M;#O;constructor(){super(),rv(this).trackSet=new Set}get #x(){return rv(this).trackSet}[Symbol.iterator](){return this.#x.values()}get length(){return this.#x.size}getTrackById(e){return[...this.#x].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#x].findIndex(e=>e.selected)}get onaddtrack(){return this.#L}set onaddtrack(e){this.#L&&(this.removeEventListener("addtrack",this.#L),this.#L=void 0),"function"==typeof e&&(this.#L=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#M}set onremovetrack(e){this.#M&&(this.removeEventListener("removetrack",this.#M),this.#M=void 0),"function"==typeof e&&(this.#M=e,this.addEventListener("removetrack",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class rf extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function r_(e){return[...rv(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...rv(e).renditionSet])}class ry extends EventTarget{#N;#P;#O;[Symbol.iterator](){return r_(this).values()}get length(){return r_(this).length}getRenditionById(e){return r_(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return r_(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of r_(this).entries())i.selected=t===e}get onaddrendition(){return this.#N}set onaddrendition(e){this.#N&&(this.removeEventListener("addrendition",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#P}set onremoverendition(e){this.#P&&(this.removeEventListener("removerendition",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("removerendition",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class rT{src;id;width;height;bitrate;frameRate;codec;#U=!1;get selected(){return this.#U}set selected(e){this.#U!==e&&(this.#U=e,function(e){let t=rv(e).media.videoRenditions;t&&!rv(t).changeRequested&&(rv(t).changeRequested=!0,queueMicrotask(()=>{delete rv(t).changeRequested,rv(e).track.selected&&t.dispatchEvent(new Event("change"))}))}(this))}}class rA{id;kind;label="";language="";sourceBuffer;#U=!1;addRendition(e,t,i,a,r,n){let s=new rT;return s.src=e,s.width=t,s.height=i,s.frameRate=n,s.bitrate=r,s.codec=a,!function(e,t){let i=rv(e).media.videoRenditions;rv(t).media=rv(e).media,rv(t).track=e;let a=rv(e).renditionSet;a.add(t);let r=a.size-1;r in ry.prototype||Object.defineProperty(ry.prototype,r,{get(){return r_(this)[r]}}),queueMicrotask(()=>{e.selected&&i.dispatchEvent(new rf("addrendition",{rendition:t}))})}(this,s),s}removeRendition(e){!function(e){let t=rv(e).media.videoRenditions,i=rv(e).track;rv(i).renditionSet.delete(e),queueMicrotask(()=>{rv(e).track.selected&&t.dispatchEvent(new rf("removerendition",{rendition:e}))})}(e)}get selected(){return this.#U}set selected(e){this.#U!==e&&(this.#U=e,!0===e&&function(e){let t=rv(e).media.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(rv(t).changeRequested)return;rv(t).changeRequested=!0,queueMicrotask(()=>{delete rv(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function rk(e){return[...rv(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...rv(e).renditionSet])}class rw extends EventTarget{#N;#P;#O;[Symbol.iterator](){return rk(this).values()}get length(){return rk(this).length}getRenditionById(e){return rk(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return rk(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of rk(this).entries())i.selected=t===e}get onaddrendition(){return this.#N}set onaddrendition(e){this.#N&&(this.removeEventListener("addrendition",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#P}set onremoverendition(e){this.#P&&(this.removeEventListener("removerendition",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("removerendition",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class rS{src;id;bitrate;codec;#U=!1;get selected(){return this.#U}set selected(e){this.#U!==e&&(this.#U=e,function(e){let t=rv(e).media.audioRenditions;t&&!rv(t).changeRequested&&(rv(t).changeRequested=!0,queueMicrotask(()=>{delete rv(t).changeRequested,rv(e).track.enabled&&t.dispatchEvent(new Event("change"))}))}(this))}}function rI(e,t){let i=e.audioTracks;rv(t).media=e,rv(t).renditionSet||(rv(t).renditionSet=new Set);let a=rv(i).trackSet;a.add(t);let r=a.size-1;r in rC.prototype||Object.defineProperty(rC.prototype,r,{get(){return[...rv(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new rm("addtrack",{track:t}))})}function rR(e){let t=rv(e).media?.audioTracks;t&&(rv(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new rm("removetrack",{track:e}))}))}class rC extends EventTarget{#L;#M;#O;constructor(){super(),rv(this).trackSet=new Set}get #x(){return rv(this).trackSet}[Symbol.iterator](){return this.#x.values()}get length(){return this.#x.size}getTrackById(e){return[...this.#x].find(t=>t.id===e)??null}get onaddtrack(){return this.#L}set onaddtrack(e){this.#L&&(this.removeEventListener("addtrack",this.#L),this.#L=void 0),"function"==typeof e&&(this.#L=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#M}set onremovetrack(e){this.#M&&(this.removeEventListener("removetrack",this.#M),this.#M=void 0),"function"==typeof e&&(this.#M=e,this.addEventListener("removetrack",e))}get onchange(){return this.#O}set onchange(e){this.#O&&(this.removeEventListener("change",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("change",e))}}class rD{id;kind;label="";language="";sourceBuffer;#B=!1;addRendition(e,t,i){let a=new rS;return a.src=e,a.codec=t,a.bitrate=i,!function(e,t){let i=rv(e).media.audioRenditions;rv(t).media=rv(e).media,rv(t).track=e;let a=rv(e).renditionSet;a.add(t);let r=a.size-1;r in rw.prototype||Object.defineProperty(rw.prototype,r,{get(){return rk(this)[r]}}),queueMicrotask(()=>{e.enabled&&i.dispatchEvent(new rf("addrendition",{rendition:t}))})}(this,a),a}removeRendition(e){!function(e){let t=rv(e).media.audioRenditions,i=rv(e).track;rv(i).renditionSet.delete(e),queueMicrotask(()=>{rv(e).track.enabled&&t.dispatchEvent(new rf("removerendition",{rendition:e}))})}(e)}get enabled(){return this.#B}set enabled(e){this.#B!==e&&(this.#B=e,function(e){let t=rv(e).media.audioTracks;t&&!rv(t).changeRequested&&(rv(t).changeRequested=!0,queueMicrotask(()=>{delete rv(t).changeRequested,t.dispatchEvent(new Event("change"))}))}(this))}}let rL=rx(globalThis.HTMLMediaElement,"video"),rM=rx(globalThis.HTMLMediaElement,"audio");function rO(e){if(!e?.prototype)return e;let t=rx(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){let t=rv(e).videoTracks;if(!t&&(t=new rg,rv(e).videoTracks=t,rL)){let i=rL.call(e.nativeEl??e);for(let t of i)rE(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof rA)){for(let e of i)rb(e);return}rE(e,a.track)}),i.addEventListener("removetrack",e=>{rb(e.track)})}return t}(this)}});let i=rx(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){let t=rv(e).audioTracks;if(!t&&(t=new rC,rv(e).audioTracks=t,rM)){let i=rM.call(e.nativeEl??e);for(let t of i)rI(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof rD)){for(let e of i)rR(e);return}rI(e,a.track)}),i.addEventListener("removetrack",e=>{rR(e.track)})}return t}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new rA;return a.kind=e,a.label=t,a.language=i,rE(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=rb),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new rD;return a.kind=e,a.label=t,a.language=i,rI(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=rR),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=rv(e).videoRenditions;return t||(rv(t=new ry).media=e,rv(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=rv(e).audioRenditions;return t||(rv(t=new rw).media=e,rv(e).audioRenditions=t),t};return e}function rx(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var rN=e=>{throw TypeError(e)},rP=(e,t,i)=>t.has(e)||rN("Cannot "+i),rU=(e,t,i)=>(rP(e,t,"read from private field"),i?i.call(e):t.get(e)),rB=(e,t,i)=>t.has(e)?rN("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rH=(e,t,i,a)=>(rP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rW=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends rW{}globalThis.DocumentFragment=e}var rV,rF,r$=class extends rW{},rK=class{constructor(e,t={}){rB(this,rF),rH(this,rF,null==t?void 0:t.detail)}get detail(){return rU(this,rF)}initCustomEvent(){}};rF=new WeakMap;var rq={document:{createElement:function(e,t){return new r$}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(r$)},CustomEvent:rK,EventTarget:rW,HTMLElement:r$,HTMLVideoElement:class extends rW{}},rY="undefined"==typeof window||void 0===globalThis.customElements,rG=rY?rq:globalThis;rY&&rq.document;var rj,rQ=class extends rh(rO(a9)){constructor(){super(...arguments),rB(this,rj)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=rU(this,rj))?e:this.muxCastCustomData}set castCustomData(e){rH(this,rj,e)}};rj=new WeakMap,rG.customElements.get("mux-video")||(rG.customElements.define("mux-video",rQ),rG.MuxVideoElement=rQ);let rZ={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},rz={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},rX={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},rJ=Object.entries(rX),r0=rJ.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),r1=rJ.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(r1).reduce((e,[t,i])=>{let a=r0[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let r2=Object.entries(r0).reduce((e,[t,i])=>{let a=r1[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),r3={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},r4={DISABLED:"disabled",SHOWING:"showing"},r5={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},r9={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},r8={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},r6={FULLSCREEN:"fullscreen"};function r7(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function ne(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function nt(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function ni(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function na(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function nr(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let nn=e=>new Promise(t=>setTimeout(t,e)),ns=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],no=(e,t)=>{let i=1===e?ns[t].singular:ns[t].plural;return`${e} ${i}`},nl=e=>{if(!na(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&no(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function nd(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let nu={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},nc=(null==(cT=globalThis.navigator)?void 0:cT.language)||"en",nh=e=>{nc=e},nm=e=>{var t,i,a;let[r]=nc.split("-");return(null==(t=nu[nc])?void 0:t[e])||(null==(i=nu[r])?void 0:i[e])||(null==(a=nu.en)?void 0:a[e])||e},np=(e,t={})=>nm(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class nv{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class nE extends nv{}class nb extends nE{constructor(){super(...arguments),this.role=null}}class ng{observe(){}unobserve(){}disconnect(){}}let nf={createElement:function(){return new n_.HTMLElement},createElementNS:function(){return new n_.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},n_={ResizeObserver:ng,document:nf,Node:nE,Element:nb,HTMLElement:class extends nb{constructor(){super(...arguments),this.innerHTML=""}get content(){return new n_.DocumentFragment}},DocumentFragment:class extends nv{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},ny="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"undefined"==typeof window||void 0===window.customElements,nT=Object.keys(n_).every(e=>e in globalThis),nA=ny&&!nT?n_:globalThis,nk=ny&&!nT?nf:globalThis.document,nw=new WeakMap,nS=e=>{let t=nw.get(e);return t||nw.set(e,t=new Set),t},nI=new nA.ResizeObserver(e=>{for(let t of e)for(let e of nS(t.target))e(t)});function nR(e,t){nS(e).add(t),nI.observe(e)}function nC(e,t){let i=nS(e);i.delete(t),i.size||nI.unobserve(e)}function nD(e){let t={};for(let i of e)t[i.name]=i.value;return t}function nL(e){var t;return null!=(t=nM(e))?t:nU(e,"media-controller")}function nM(e){var t;let{MEDIA_CONTROLLER:i}=rz,a=e.getAttribute(i);if(a)return null==(t=nH(e))?void 0:t.getElementById(a)}let nO=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},nx=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},nN=(e,t)=>nx(e,t)[0],nP=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||nP(e,t.getRootNode().host)),nU=(e,t)=>e?e.closest(t)||nU(e.getRootNode().host,t):null;function nB(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=nB(i.shadowRoot))?t:i:null}function nH(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function nW(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function nV(e,t){return function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||nF(e,t)}function nF(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function n$(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function nK(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}n$(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function nq(e,t){return e.hasAttribute(t)}function nY(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}nq(e,t)!=i&&e.toggleAttribute(t,i)}function nG(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function nj(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;nG(e,t,void 0)!==a&&e.setAttribute(t,a)}var nQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nZ=(e,t,i)=>(nQ(e,t,"read from private field"),i?i.call(e):t.get(e)),nz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nX=(e,t,i,a)=>(nQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nJ extends nA.HTMLElement{constructor(){if(super(),nz(this,cA,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rz.MEDIA_CONTROLLER,r0.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rz.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=nZ(this,cA))?void 0:a.unassociateElement)||r.call(a,this),nX(this,cA,null)),i&&this.isConnected&&(nX(this,cA,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nZ(this,cA))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),nX(this,cA,function(e){var t;let i=e.getAttribute(rz.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):nU(e,"media-controller")}(this)),this.getAttribute(rz.MEDIA_CONTROLLER)&&(null==(t=null==(e=nZ(this,cA))?void 0:e.associateElement)||t.call(e,this)),null==(i=nZ(this,cA))||i.addEventListener("pointerdown",this),null==(a=nZ(this,cA))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(rz.MEDIA_CONTROLLER)&&(null==(t=null==(e=nZ(this,cA))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=nZ(this,cA))||i.removeEventListener("pointerdown",this),null==(a=nZ(this,cA))||a.removeEventListener("click",this),nX(this,cA,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===r5.TOUCH){this.handleTap(e);return}if(d===r5.MOUSE||d===r5.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return nq(this,r0.MEDIA_PAUSED)}set mediaPaused(e){nY(this,r0.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?rZ.MEDIA_PLAY_REQUEST:rZ.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new nA.CustomEvent(t,{composed:!0,bubbles:!0}))}}cA=new WeakMap,nJ.shadowRootOptions={mode:"open"},nJ.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},nA.customElements.get("media-gesture-receiver")||nA.customElements.define("media-gesture-receiver",nJ);var n0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n1=(e,t,i)=>(n0(e,t,"read from private field"),i?i.call(e):t.get(e)),n2=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n3=(e,t,i,a)=>(n0(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),n4=(e,t,i)=>(n0(e,t,"access private method"),i);let n5={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},n9=Object.values(r0);function n8(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(n5.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=parseInt(a[e])),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(r1.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(r1.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class n6 extends nA.HTMLElement{constructor(){if(super(),n2(this,cC),n2(this,cO),n2(this,cN),n2(this,cU),n2(this,cH),n2(this,cV),n2(this,ck,0),n2(this,cw,null),n2(this,cS,null),n2(this,cI,void 0),this.breakpointsComputed=!1,n2(this,cR,new MutationObserver(n4(this,cC,cD).bind(this))),n2(this,cL,!1),n2(this,cM,e=>{n1(this,cL)||(setTimeout(()=>{n8(e.target,e.contentRect.width),n3(this,cL,!1)},0),n3(this,cL,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}let e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){n1(this,cw)&&this.mediaUnsetCallback(n1(this,cw));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[n5.AUTOHIDE,n5.GESTURES_DISABLED].concat(n9).filter(e=>![r0.MEDIA_RENDITION_LIST,r0.MEDIA_AUDIO_TRACK_LIST,r0.MEDIA_CHAPTERS_CUES,r0.MEDIA_WIDTH,r0.MEDIA_HEIGHT,r0.MEDIA_ERROR,r0.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==n5.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(n3(this,cw,e),e.localName.includes("-")&&await nA.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;n1(this,cR).observe(this,{childList:!0,subtree:!0}),nR(this,n1(this,cM));let t=null!=this.getAttribute(n5.AUDIO)?np("audio player"):np("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(n5.USER_INACTIVE,""),n8(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=nA.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;n1(this,cR).disconnect(),nC(this,n1(this,cM)),this.media&&this.mediaUnsetCallback(this.media),null==(e=nA.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){n3(this,cw,null)}handleEvent(e){switch(e.type){case"pointerdown":n3(this,ck,e.timeStamp);break;case"pointermove":n4(this,cO,cx).call(this,e);break;case"pointerup":n4(this,cN,cP).call(this,e);break;case"mouseleave":n4(this,cU,cB).call(this);break;case"mouseup":this.removeAttribute(n5.KEYBOARD_CONTROL);break;case"keyup":n4(this,cV,cF).call(this),this.setAttribute(n5.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);n3(this,cI,isNaN(t)?0:t)}get autohide(){return(void 0===n1(this,cI)?2:n1(this,cI)).toString()}get breakpoints(){return nG(this,n5.BREAKPOINTS)}set breakpoints(e){nj(this,n5.BREAKPOINTS,e)}get audio(){return nq(this,n5.AUDIO)}set audio(e){nY(this,n5.AUDIO,e)}get gesturesDisabled(){return nq(this,n5.GESTURES_DISABLED)}set gesturesDisabled(e){nY(this,n5.GESTURES_DISABLED,e)}get keyboardControl(){return nq(this,n5.KEYBOARD_CONTROL)}set keyboardControl(e){nY(this,n5.KEYBOARD_CONTROL,e)}get noAutohide(){return nq(this,n5.NO_AUTOHIDE)}set noAutohide(e){nY(this,n5.NO_AUTOHIDE,e)}get autohideOverControls(){return nq(this,n5.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){nY(this,n5.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return nq(this,n5.USER_INACTIVE)}set userInteractive(e){nY(this,n5.USER_INACTIVE,e)}}ck=new WeakMap,cw=new WeakMap,cS=new WeakMap,cI=new WeakMap,cR=new WeakMap,cC=new WeakSet,cD=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},cL=new WeakMap,cM=new WeakMap,cO=new WeakSet,cx=function(e){if("mouse"!==e.pointerType&&e.timeStamp-n1(this,ck)<250)return;n4(this,cH,cW).call(this),clearTimeout(n1(this,cS));let t=this.hasAttribute(n5.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&n4(this,cV,cF).call(this)},cN=new WeakSet,cP=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(n5.USER_INACTIVE);[this,this.media].includes(e.target)&&t?n4(this,cU,cB).call(this):n4(this,cV,cF).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&n4(this,cV,cF).call(this)},cU=new WeakSet,cB=function(){if(0>n1(this,cI)||this.hasAttribute(n5.USER_INACTIVE))return;this.setAttribute(n5.USER_INACTIVE,"");let e=new nA.CustomEvent(r1.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},cH=new WeakSet,cW=function(){if(!this.hasAttribute(n5.USER_INACTIVE))return;this.removeAttribute(n5.USER_INACTIVE);let e=new nA.CustomEvent(r1.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},cV=new WeakSet,cF=function(){n4(this,cH,cW).call(this),clearTimeout(n1(this,cS));let e=parseInt(this.autohide);e<0||n3(this,cS,setTimeout(()=>{n4(this,cU,cB).call(this)},1e3*e))},n6.shadowRootOptions={mode:"open"},n6.getTemplateHTML=function(e){return`
    <style>
      
      :host([${r0.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${n5.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${n5.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${n5.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${n5.AUDIO}])[${n5.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${n5.AUDIO}])[${n5.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${n5.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${n5.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${n5.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${n5.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${n5.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${n5.USER_INACTIVE}]:not([${r0.MEDIA_PAUSED}]):not([${r0.MEDIA_IS_AIRPLAYING}]):not([${r0.MEDIA_IS_CASTING}]):not([${n5.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${n5.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${n5.USER_INACTIVE}]:not([${n5.NO_AUTOHIDE}]):not([${r0.MEDIA_PAUSED}]):not([${r0.MEDIA_IS_CASTING}]):not([${n5.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${n5.USER_INACTIVE}][${n5.AUTOHIDE_OVER_CONTROLS}]:not([${n5.NO_AUTOHIDE}]):not([${r0.MEDIA_PAUSED}]):not([${r0.MEDIA_IS_CASTING}]):not([${n5.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${n5.AUDIO}])[${r0.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${nJ.shadowRootOptions.mode}">
          ${nJ.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},nA.customElements.get("media-container")||nA.customElements.define("media-container",n6);var n7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},se=(e,t,i)=>(n7(e,t,"read from private field"),i?i.call(e):t.get(e)),st=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},si=(e,t,i,a)=>(n7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sa{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){st(this,cG),st(this,c$,void 0),st(this,cK,void 0),st(this,cq,void 0),st(this,cY,new Set),si(this,c$,e),si(this,cK,t),si(this,cq,new Set(i))}[Symbol.iterator](){return se(this,cG,cj).values()}get length(){return se(this,cG,cj).size}get value(){var e;return null!=(e=[...se(this,cG,cj)].join(" "))?e:""}set value(e){var t;e!==this.value&&(si(this,cY,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...se(this,cG,cj)][e]}values(){return se(this,cG,cj).values()}forEach(e,t){se(this,cG,cj).forEach(e,t)}add(...e){var t,i;e.forEach(e=>se(this,cY).add(e)),(""!==this.value||(null==(t=se(this,c$))?void 0:t.hasAttribute(`${se(this,cK)}`)))&&(null==(i=se(this,c$))||i.setAttribute(`${se(this,cK)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>se(this,cY).delete(e)),null==(t=se(this,c$))||t.setAttribute(`${se(this,cK)}`,`${this.value}`)}contains(e){return se(this,cG,cj).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}c$=new WeakMap,cK=new WeakMap,cq=new WeakMap,cY=new WeakMap,cG=new WeakSet,cj=function(){return se(this,cY).size?se(this,cY):se(this,cq)};let sr=(e="")=>e.split(/\s+/),sn=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?r3.CAPTIONS:r3.SUBTITLES,language:i,label:r}},ss=(e="",t={})=>sr(e).map(e=>{let i=sn(e);return{...t,...i}}),so=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?sn(e):e):"string"==typeof e?ss(e):[e]:[],sl=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,sd=(e=[])=>Array.prototype.map.call(e,sl).join(" "),su=(e,t)=>i=>i[e]===t,sc=e=>{let t=Object.entries(e).map(([e,t])=>su(e,t));return e=>t.every(t=>t(e))},sh=(e,t=[],i=[])=>{let a=so(i).map(sc);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},sm=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:sc(t);return Array.from(e.textTracks).filter(i)},sp=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(r0.MEDIA_SUBTITLES_SHOWING)},sv=e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}},sE="exitFullscreen"in nk?"exitFullscreen":"webkitExitFullscreen"in nk?"webkitExitFullscreen":"webkitCancelFullScreen"in nk?"webkitCancelFullScreen":void 0,sb=e=>{var t;let{documentElement:i}=e;if(sE){let e=null==(t=null==i?void 0:i[sE])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},sg="fullscreenElement"in nk?"fullscreenElement":"webkitFullscreenElement"in nk?"webkitFullscreenElement":void 0,sf=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[sg];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===r6.FULLSCREEN?i:a},s_=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=sf(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(sg in e))return nP(n,r);for(;null==e?void 0:e[sg];){if(e[sg]===r)return!0;e=null==(t=e[sg])?void 0:t.shadowRoot}}return!1},sy="fullscreenEnabled"in nk?"fullscreenEnabled":"webkitFullscreenEnabled"in nk?"webkitFullscreenEnabled":void 0,sT=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[sy])||i&&"webkitSupportsFullscreen"in i},sA=()=>{var e;return r||(r=null==(e=null==nk?void 0:nk.createElement)?void 0:e.call(nk,"video"))},sk=async(e=sA())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([sw(e,i.signal),sS(e,t)]);return i.abort(),a},sw=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),sS=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await nn(10)}return e.volume!==t},sI=/.*Version\/.*Safari\/.*/.test(nA.navigator.userAgent),sR=(e=sA())=>(!nA.matchMedia("(display-mode: standalone)").matches||!sI)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),sC=(e=sA())=>sT({documentElement:nk,media:e}),sD=sC(),sL=sR(),sM=!!nA.WebKitPlaybackTargetAvailabilityEvent,sO=!!nA.chrome,sx=e=>sm(e.media,e=>[r3.SUBTITLES,r3.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),sN=e=>sm(e.media,e=>e.mode===r4.SHOWING&&[r3.SUBTITLES,r3.CAPTIONS].includes(e.kind)),sP=(e,t)=>{let i=sx(e),a=sN(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)sh(r4.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;sh(r4.DISABLED,i,a),sh(r4.SHOWING,i,[{language:n,label:s,kind:o}])}}},sU=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?sB(e,t):Object.entries(e).every(([e,i])=>e in t&&sU(i,t[e])))),sB=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>sU(e,t[i])))},sH=Object.values(r8),sW=sk().then(e=>n=e),sV=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof nA.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=nA.customElements.get(t);i&&e instanceof i||(await nA.customElements.whenDefined(t),nA.customElements.upgrade(e))}))},sF=new nA.DOMParser,s$=e=>e&&sF.parseFromString(e,"text/html").body.textContent||e,sK={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==nA.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&nA.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;nA.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===nA.localStorage.getItem("media-chrome-pref-muted");sK.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?nA.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||nA.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=nA.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;sK.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&na(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[r8.LIVE,r8.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(sH.includes(r))return r===r8.UNKNOWN?a:r;let n=t.duration;return n===1/0?r8.LIVE:Number.isFinite(n)?r8.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=sK.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===r8.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(sK.mediaStreamType.get(e)!==r8.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>sx(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>sN(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![r3.CAPTIONS,r3.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||sP(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=sm(i,{kind:r3.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:s$(e),startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&nP(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!nk.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else nk.pictureInPictureElement&&nk.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>s_(e),set(e,t,i){var a;e?(sv(t),i.detail&&(null==(a=t.media)||a.focus())):sb(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&nA.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!sD||!sC(t))return r9.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return sL&&sR(t)?(null==t?void 0:t.disablePictureInPicture)?r9.UNAVAILABLE:void 0:r9.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===n||(null==t?void 0:t.volume)==void 0)return r9.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==n&&sW.then(t=>e(t?void 0:r9.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return sO&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?r9.UNAVAILABLE:void 0:r9.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>sM?(null==t?void 0:t.availability)==="not-available"?r9.UNAVAILABLE:void 0:r9.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:r9.UNAVAILABLE:r9.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?r9.UNAVAILABLE:void 0:r9.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},sq={[rZ.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=sm(l,{kind:r3.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[rZ.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[rZ.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===r8.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[rZ.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[rZ.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[rZ.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[rZ.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[rZ.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[rZ.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[rZ.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[rZ.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=sx(t),s=so(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&nA.localStorage.setItem("media-chrome-pref-subtitles-lang",o),sh(r4.SHOWING,n,s)},[rZ.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=sx(t);sh(r4.DISABLED,a,null!=i?i:[])},[rZ.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){sP(t,i)},[rZ.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[rZ.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[rZ.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[rZ.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[rZ.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[rZ.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[rZ.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[rZ.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[rZ.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},sY=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=sK,requestMap:r=sq,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||sU(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,E,b,g,f,_,y,T,A,k,w,S;let I=!!o;if(o={...d,...null!=o?o:{},...e},I)return;await sV(...Object.values(e));let R=l.length>0&&0===t&&s,C=d.media!==o.media,D=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(E=o.media)?void 0:E.audioTracks),O=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),x=d.documentElement!==o.documentElement,N=!!d.media&&(C||R),P=!!(null==(f=d.media)?void 0:f.textTracks)&&(D||R),U=!!(null==(_=d.media)?void 0:_.videoRenditions)&&(L||R),B=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||R),H=!!(null==(T=d.media)?void 0:T.remote)&&(O||R),W=!!d.documentElement&&(x||R),V=N||P||U||B||H||W,F=0===l.length&&1===t&&s,$=!!o.media&&(C||F),K=!!(null==(A=o.media)?void 0:A.textTracks)&&(D||F),q=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||F),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||F),G=!!(null==(S=o.media)?void 0:S.remote)&&(O||F),j=!!o.documentElement&&(x||F),Q=$||K||q||Y||G||j;if(!(V||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),$&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),K&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),q&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let E=m[e].stateOwnersUpdateHandlers;if(E&&V&&(Array.isArray(E)?E:[E]).forEach(e=>{"function"==typeof e&&e()}),Q){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else V&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}};var sG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sj=(e,t,i)=>(sG(e,t,"read from private field"),i?i.call(e):t.get(e)),sQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sZ=(e,t,i,a)=>(sG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sz=(e,t,i)=>(sG(e,t,"access private method"),i);let sX=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],sJ={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class s0 extends n6{constructor(){super(),sQ(this,c2),sQ(this,c4),sQ(this,c9),sQ(this,c6),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,sQ(this,cQ,new sa(this,sJ.HOTKEYS)),sQ(this,cZ,void 0),sQ(this,cz,void 0),sQ(this,cX,null),sQ(this,cJ,void 0),sQ(this,c0,void 0),sQ(this,c1,e=>{var t;null==(t=sj(this,cz))||t.dispatch(e)}),this.associateElement(this);let e={};sZ(this,cJ,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new nA.CustomEvent(r2[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.hasAttribute(sJ.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(sJ.NO_HOTKEYS,sJ.HOTKEYS,sJ.DEFAULT_STREAM_TYPE,sJ.DEFAULT_SUBTITLES,sJ.DEFAULT_DURATION,sJ.NO_MUTED_PREF,sJ.NO_VOLUME_PREF,sJ.LANG,sJ.LOOP)}get mediaStore(){return sj(this,cz)}set mediaStore(e){var t,i;if(sj(this,cz)&&(null==(t=sj(this,c0))||t.call(this),sZ(this,c0,void 0)),sZ(this,cz,e),!sj(this,cz)&&!this.hasAttribute(sJ.NO_DEFAULT_STORE)){sz(this,c2,c3).call(this);return}sZ(this,c0,null==(i=sj(this,cz))?void 0:i.subscribe(sj(this,cJ)))}get fullscreenElement(){var e;return null!=(e=sj(this,cZ))?e:this}set fullscreenElement(e){var t;this.hasAttribute(sJ.FULLSCREEN_ELEMENT)&&this.removeAttribute(sJ.FULLSCREEN_ELEMENT),sZ(this,cZ,e),null==(t=sj(this,cz))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return nq(this,sJ.DEFAULT_SUBTITLES)}set defaultSubtitles(e){nY(this,sJ.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return nG(this,sJ.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){nj(this,sJ.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return n$(this,sJ.DEFAULT_DURATION)}set defaultDuration(e){nK(this,sJ.DEFAULT_DURATION,e)}get noHotkeys(){return nq(this,sJ.NO_HOTKEYS)}set noHotkeys(e){nY(this,sJ.NO_HOTKEYS,e)}get keysUsed(){return nG(this,sJ.KEYS_USED)}set keysUsed(e){nj(this,sJ.KEYS_USED,e)}get liveEdgeOffset(){return n$(this,sJ.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){nK(this,sJ.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return nq(this,sJ.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){nY(this,sJ.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return nq(this,sJ.NO_VOLUME_PREF)}set noVolumePref(e){nY(this,sJ.NO_VOLUME_PREF,e)}get noMutedPref(){return nq(this,sJ.NO_MUTED_PREF)}set noMutedPref(e){nY(this,sJ.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return nq(this,sJ.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){nY(this,sJ.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return nq(this,sJ.NO_DEFAULT_STORE)}set noDefaultStore(e){nY(this,sJ.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===sJ.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(sJ.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===sJ.HOTKEYS)sj(this,cQ).value=i;else if(e===sJ.DEFAULT_SUBTITLES&&i!==t)null==(a=sj(this,cz))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(sJ.DEFAULT_SUBTITLES)}});else if(e===sJ.DEFAULT_STREAM_TYPE)null==(n=sj(this,cz))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(sJ.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===sJ.LIVE_EDGE_OFFSET)null==(s=sj(this,cz))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(sJ.LIVE_EDGE_OFFSET)?+this.getAttribute(sJ.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sJ.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(sJ.LIVE_EDGE_OFFSET)}});else if(e===sJ.SEEK_TO_LIVE_OFFSET)null==(o=sj(this,cz))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(sJ.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sJ.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===sJ.NO_AUTO_SEEK_TO_LIVE)null==(l=sj(this,cz))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(sJ.NO_AUTO_SEEK_TO_LIVE)}});else if(e===sJ.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;sZ(this,cZ,e),null==(u=sj(this,cz))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===sJ.LANG&&i!==t?(nh(i),null==(c=sj(this,cz))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===sJ.LOOP&&i!==t?null==(h=sj(this,cz))||h.dispatch({type:rZ.MEDIA_LOOP_REQUEST,detail:null!=i}):e===sJ.NO_VOLUME_PREF&&i!==t?null==(m=sj(this,cz))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(sJ.NO_VOLUME_PREF)}}):e===sJ.NO_MUTED_PREF&&i!==t&&(null==(p=sj(this,cz))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(sJ.NO_MUTED_PREF)}}))}connectedCallback(){var e,t;sj(this,cz)||this.hasAttribute(sJ.NO_DEFAULT_STORE)||sz(this,c2,c3).call(this),null==(e=sj(this,cz))||e.dispatch({type:"documentelementchangerequest",detail:nk}),super.connectedCallback(),sj(this,cz)&&!sj(this,c0)&&sZ(this,c0,null==(t=sj(this,cz))?void 0:t.subscribe(sj(this,cJ))),this.hasAttribute(sJ.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),sj(this,cz)&&(null==(t=sj(this,cz))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=sj(this,cz))||i.dispatch({type:rZ.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),sj(this,c0)&&(null==(a=sj(this,c0))||a.call(this),sZ(this,c0,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=sj(this,cz))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=sj(this,cz))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){ot(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=oi(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(rZ).forEach(t=>{e.addEventListener(t,sj(this,c1))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(rZ).forEach(t=>{e.removeEventListener(t,sj(this,c1))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),sj(this,cz)&&Object.entries(sj(this,cz).getState()).forEach(([t,i])=>{ot([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",sz(this,c9,c8))}disableHotkeys(){this.removeEventListener("keydown",sz(this,c9,c8)),this.removeEventListener("keyup",sz(this,c4,c5))}get hotkeys(){return nG(this,sJ.HOTKEYS)}set hotkeys(e){nj(this,sJ.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h;let m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(sJ.KEYS_USED))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||sj(this,cQ).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&sj(this,cQ).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&sj(this,cQ).contains("noshift+/")))switch(e.key){case" ":case"k":u=sj(this,cz).getState().mediaPaused?rZ.MEDIA_PLAY_REQUEST:rZ.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new nA.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?rZ.MEDIA_UNMUTE_REQUEST:rZ.MEDIA_MUTE_REQUEST,this.dispatchEvent(new nA.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?rZ.MEDIA_EXIT_FULLSCREEN_REQUEST:rZ.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new nA.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new nA.CustomEvent(rZ.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(sJ.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(sJ.KEYBOARD_BACKWARD_SEEK_OFFSET):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new nA.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(sJ.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(sJ.KEYBOARD_FORWARD_SEEK_OFFSET):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new nA.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(sJ.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(sJ.KEYBOARD_UP_VOLUME_STEP):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new nA.CustomEvent(rZ.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(sJ.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(sJ.KEYBOARD_DOWN_VOLUME_STEP):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new nA.CustomEvent(rZ.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new nA.CustomEvent(rZ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new nA.CustomEvent(rZ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&sz(this,c6,c7).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?rZ.MEDIA_EXIT_PIP_REQUEST:rZ.MEDIA_ENTER_PIP_REQUEST,h=new nA.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}cQ=new WeakMap,cZ=new WeakMap,cz=new WeakMap,cX=new WeakMap,cJ=new WeakMap,c0=new WeakMap,c1=new WeakMap,c2=new WeakSet,c3=function(){var e;this.mediaStore=sY({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(sJ.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(sJ.DEFAULT_DURATION)?+this.getAttribute(sJ.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(sJ.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(sJ.LIVE_EDGE_OFFSET)?+this.getAttribute(sJ.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sJ.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sJ.SEEK_TO_LIVE_OFFSET):this.hasAttribute(sJ.LIVE_EDGE_OFFSET)?+this.getAttribute(sJ.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(sJ.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(sJ.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(sJ.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(sJ.NO_SUBTITLES_LANG_PREF)}})},c4=new WeakSet,c5=function(e){let{key:t,shiftKey:i}=e;if(!(i&&("/"===t||"?"===t)||sX.includes(t))){this.removeEventListener("keyup",sz(this,c4,c5));return}this.keyboardShortcutHandler(e)},c9=new WeakSet,c8=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=sj(this,cX))?void 0:t.open)||i||a||!s&&!sX.includes(r)){this.removeEventListener("keyup",sz(this,c4,c5));return}let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||sj(this,cQ).contains(`no${r.toLowerCase()}`)||" "===r&&sj(this,cQ).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",sz(this,c4,c5),{once:!0})},c6=new WeakSet,c7=function(){sj(this,cX)||(sZ(this,cX,nk.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(sj(this,cX))),sj(this,cX).open=!0};let s1=Object.values(r0),s2=Object.values(rX),s3=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(nA.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,rz.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>s1.includes(e)):[]},s4=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&nA.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof nA.customElements.get(e.nodeName.toLowerCase()))&&nA.customElements.upgrade(e),s2.some(t=>t in e)},s5=e=>s4(e)||!!s3(e).length,s9=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},s8={[r0.MEDIA_SUBTITLES_LIST]:sd,[r0.MEDIA_SUBTITLES_SHOWING]:sd,[r0.MEDIA_SEEKABLE]:s9,[r0.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(s9).join(" "),[r0.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[r0.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(r7).join(" ")},[r0.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(nt).join(" ")}},s6=async(e,t,i)=>{var a,r;if(e.isConnected||await nn(0),"boolean"==typeof i||null==i)return nY(e,t,i);if("number"==typeof i)return nK(e,t,i);if("string"==typeof i)return nj(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=s8[t])?void 0:a.call(s8,i))?r:i;return e.setAttribute(t,n)},s7=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},oe=(e,t)=>{if(s7(e))return;let i=(e,t)=>{var i,a;s5(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>oe(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!s5(e)){nA.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},ot=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=s3(e),r=t.toLowerCase();a.includes(r)&&s6(e,r,i)})},oi=(e,t,i)=>{oe(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(rZ.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(rZ.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>oe(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>oe(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>oe(e,t)),Array.prototype.forEach.call(r,e=>oe(e,i))):"attributes"===n&&o===rz.MEDIA_CHROME_ATTRIBUTES&&(s5(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{oe(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(rZ.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(rZ.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};nA.customElements.get("media-controller")||nA.customElements.define("media-controller",s0);let oa="placement",or="bounds";class on extends nA.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!nW(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t){this.style.removeProperty("--media-tooltip-offset-x");return}let i=getComputedStyle(this),a=null!=(e=nU(this,"#"+this.bounds))?e:nL(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;if(h<0){this.style.setProperty("--media-tooltip-offset-x",`${h}px`);return}if(m>0){this.style.setProperty("--media-tooltip-offset-x",`${m}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[oa,or]}get placement(){return nG(this,oa)}set placement(e){nj(this,oa,e)}get bounds(){return nG(this,or)}set bounds(e){nj(this,or,e)}}on.shadowRootOptions={mode:"open"},on.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},nA.customElements.get("media-tooltip")||nA.customElements.define("media-tooltip",on);var os=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oo=(e,t,i)=>(os(e,t,"read from private field"),i?i.call(e):t.get(e)),ol=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},od=(e,t,i,a)=>(os(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ou=(e,t,i)=>(os(e,t,"access private method"),i);let oc={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class oh extends nA.HTMLElement{constructor(){if(super(),ol(this,hn),ol(this,he,void 0),this.preventClick=!1,this.tooltipEl=null,ol(this,ht,e=>{this.preventClick||this.handleClick(e),setTimeout(oo(this,hi),0)}),ol(this,hi,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),ol(this,ha,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",oo(this,ha));return}this.preventClick||this.handleClick(e)}),ol(this,hr,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",oo(this,ha));return}this.addEventListener("keyup",oo(this,ha),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",oc.TOOLTIP_PLACEMENT,rz.MEDIA_CONTROLLER,r0.MEDIA_LANG]}enable(){this.addEventListener("click",oo(this,ht)),this.addEventListener("keydown",oo(this,hr)),this.tabIndex=0}disable(){this.removeEventListener("click",oo(this,ht)),this.removeEventListener("keydown",oo(this,hr)),this.removeEventListener("keyup",oo(this,ha)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rz.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=oo(this,he))?void 0:a.unassociateElement)||r.call(a,this),od(this,he,null)),i&&this.isConnected&&(od(this,he,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oo(this,he))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===oc.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===r0.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),oo(this,hi).call(this)}connectedCallback(){var e,t,i;let{style:a}=nV(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(rz.MEDIA_CONTROLLER);r&&(od(this,he,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=oo(this,he))?void 0:t.associateElement)||i.call(t,this)),nA.customElements.whenDefined("media-tooltip").then(()=>ou(this,hn,hs).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=oo(this,he))?void 0:e.unassociateElement)||t.call(e,this),od(this,he,null),this.removeEventListener("mouseenter",oo(this,hi)),this.removeEventListener("focus",oo(this,hi)),this.removeEventListener("click",oo(this,ht))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return nG(this,oc.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){nj(this,oc.TOOLTIP_PLACEMENT,e)}get mediaController(){return nG(this,rz.MEDIA_CONTROLLER)}set mediaController(e){nj(this,rz.MEDIA_CONTROLLER,e)}get disabled(){return nq(this,oc.DISABLED)}set disabled(e){nY(this,oc.DISABLED,e)}get noTooltip(){return nq(this,oc.NO_TOOLTIP)}set noTooltip(e){nY(this,oc.NO_TOOLTIP,e)}handleClick(e){}}he=new WeakMap,ht=new WeakMap,hi=new WeakMap,ha=new WeakMap,hr=new WeakMap,hn=new WeakSet,hs=function(){this.addEventListener("mouseenter",oo(this,hi)),this.addEventListener("focus",oo(this,hi)),this.addEventListener("click",oo(this,ht));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},oh.shadowRootOptions={mode:"open"},oh.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${on.shadowRootOptions.mode}">
          ${on.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},oh.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},oh.getTooltipContentHTML=function(){return""},nA.customElements.get("media-chrome-button")||nA.customElements.define("media-chrome-button",oh);let om=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,op=e=>{let t=e.mediaIsAirplaying?np("stop airplay"):np("start airplay");e.setAttribute("aria-label",t)};class ov extends oh{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_IS_AIRPLAYING,r0.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),op(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_IS_AIRPLAYING&&op(this)}get mediaIsAirplaying(){return nq(this,r0.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){nY(this,r0.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return nG(this,r0.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){nj(this,r0.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new nA.CustomEvent(rZ.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}ov.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r0.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${r0.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r0.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${r0.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${om}</slot>
      <slot name="exit">${om}</slot>
    </slot>
  `},ov.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${np("start airplay")}</slot>
    <slot name="tooltip-exit">${np("stop airplay")}</slot>
  `},nA.customElements.get("media-airplay-button")||nA.customElements.define("media-airplay-button",ov);let oE=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ob=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,og=e=>{e.setAttribute("aria-checked",sp(e).toString())};class of extends oh{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_SUBTITLES_LIST,r0.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",np("closed captions")),og(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_SUBTITLES_SHOWING&&og(this)}get mediaSubtitlesList(){return o_(this,r0.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){oy(this,r0.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return o_(this,r0.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){oy(this,r0.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new nA.CustomEvent(rZ.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}of.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${oE}</slot>
      <slot name="off">${ob}</slot>
    </slot>
  `},of.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${np("Enable captions")}</slot>
    <slot name="tooltip-disable">${np("Disable captions")}</slot>
  `};let o_=(e,t)=>{let i=e.getAttribute(t);return i?ss(i):[]},oy=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=sd(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};nA.customElements.get("media-captions-button")||nA.customElements.define("media-captions-button",of);let oT=e=>{let t=e.mediaIsCasting?np("stop casting"):np("start casting");e.setAttribute("aria-label",t)};class oA extends oh{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_IS_CASTING,r0.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oT(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_IS_CASTING&&oT(this)}get mediaIsCasting(){return nq(this,r0.MEDIA_IS_CASTING)}set mediaIsCasting(e){nY(this,r0.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return nG(this,r0.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){nj(this,r0.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?rZ.MEDIA_EXIT_CAST_REQUEST:rZ.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new nA.CustomEvent(e,{composed:!0,bubbles:!0}))}}oA.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r0.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${r0.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r0.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${r0.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},oA.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${np("Start casting")}</slot>
    <slot name="tooltip-exit">${np("Stop casting")}</slot>
  `},nA.customElements.get("media-cast-button")||nA.customElements.define("media-cast-button",oA);var ok=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ow=(e,t,i)=>(ok(e,t,"read from private field"),i?i.call(e):t.get(e)),oS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oI=(e,t,i,a)=>(ok(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oR=(e,t,i)=>(ok(e,t,"access private method"),i);let oC="open";class oD extends nA.HTMLElement{constructor(){super(),oS(this,hu),oS(this,hh),oS(this,hp),oS(this,hE),oS(this,hg),oS(this,h_),oS(this,ho,!1),oS(this,hl,null),oS(this,hd,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[oC,"anchor"]}get open(){return nq(this,oC)}set open(e){nY(this,oC,e)}handleEvent(e){switch(e.type){case"invoke":oR(this,hE,hb).call(this,e);break;case"focusout":oR(this,hg,hf).call(this,e);break;case"keydown":oR(this,h_,hy).call(this,e)}}connectedCallback(){oR(this,hu,hc).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){oR(this,hu,hc).call(this),e===oC&&i!==t&&(this.open?oR(this,hh,hm).call(this):oR(this,hp,hv).call(this))}focus(){oI(this,hl,nB());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}ho=new WeakMap,hl=new WeakMap,hd=new WeakMap,hu=new WeakSet,hc=function(){if(!ow(this,ho)&&(oI(this,ho,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=nV(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},hh=new WeakSet,hm=function(){var e;null==(e=ow(this,hd))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},hp=new WeakSet,hv=function(){var e;null==(e=ow(this,hd))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},hE=new WeakSet,hb=function(e){oI(this,hd,e.relatedTarget),nP(this,e.relatedTarget)||(this.open=!this.open)},hg=new WeakSet,hf=function(e){var t;!nP(this,e.relatedTarget)&&(null==(t=ow(this,hl))||t.focus(),ow(this,hd)&&ow(this,hd)!==e.relatedTarget&&this.open&&(this.open=!1))},h_=new WeakSet,hy=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=ow(this,hl))||n.focus(),this.open=!1))},oD.shadowRootOptions={mode:"open"},oD.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},oD.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},nA.customElements.get("media-chrome-dialog")||nA.customElements.define("media-chrome-dialog",oD);var oL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oM=(e,t,i)=>(oL(e,t,"read from private field"),i?i.call(e):t.get(e)),oO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ox=(e,t,i,a)=>(oL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oN=(e,t,i)=>(oL(e,t,"access private method"),i);class oP extends nA.HTMLElement{constructor(){if(super(),oO(this,hL),oO(this,hO),oO(this,hN),oO(this,hU),oO(this,hH),oO(this,hV),oO(this,h$),oO(this,hq),oO(this,hT,void 0),oO(this,hA,void 0),oO(this,hk,void 0),oO(this,hw,void 0),oO(this,hS,{}),oO(this,hI,[]),oO(this,hR,()=>{if(this.range.matches(":focus-visible")){let{style:e}=nV(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),oO(this,hC,()=>{let{style:e}=nV(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),oO(this,hD,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),ox(this,hk,this.shadowRoot.querySelector("#startpoint")),ox(this,hw,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",rz.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rz.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=oM(this,hT))?void 0:a.unassociateElement)||r.call(a,this),ox(this,hT,null)),i&&this.isConnected&&(ox(this,hT,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oM(this,hT))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),oN(this,hO,hx).call(this)):(this.range.setAttribute(e,i),oN(this,hN,hP).call(this)))}connectedCallback(){var e,t,i;let{style:a}=nV(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),oM(this,hS).pointer=nV(this.shadowRoot,"#pointer"),oM(this,hS).progress=nV(this.shadowRoot,"#progress"),oM(this,hS).thumb=nV(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),oM(this,hS).activeSegment=nV(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(rz.MEDIA_CONTROLLER);r&&(ox(this,hT,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=oM(this,hT))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",oM(this,hR)),this.shadowRoot.addEventListener("focusout",oM(this,hC)),oN(this,hO,hx).call(this),nR(this.container,oM(this,hD))}disconnectedCallback(){var e,t;oN(this,hN,hP).call(this),null==(t=null==(e=oM(this,hT))?void 0:e.unassociateElement)||t.call(e,this),ox(this,hT,null),this.shadowRoot.removeEventListener("focusin",oM(this,hR)),this.shadowRoot.removeEventListener("focusout",oM(this,hC)),nC(this.container,oM(this,hD))}updatePointerBar(e){var t;null==(t=oM(this,hS).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=oM(this,hS).progress)||e.style.setProperty("width",`${i}%`),null==(t=oM(this,hS).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];ox(this,hI,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=nk.createElementNS("http://www.w3.org/2000/svg","rect"),c=nF(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;return 0===s?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*n)/s))}(e.clientX,e.clientY,oM(this,hk).getBoundingClientRect(),oM(this,hw).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":oN(this,hq,hY).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":oN(this,hH,hW).call(this,e);break;case"pointerdown":oN(this,hU,hB).call(this,e);break;case"pointerup":oN(this,hV,hF).call(this);break;case"pointerleave":oN(this,h$,hK).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}hT=new WeakMap,hA=new WeakMap,hk=new WeakMap,hw=new WeakMap,hS=new WeakMap,hI=new WeakMap,hR=new WeakMap,hC=new WeakMap,hD=new WeakMap,hL=new WeakSet,hM=function(e){let t=oM(this,hS).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=oM(this,hI).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},hO=new WeakSet,hx=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},hN=new WeakSet,hP=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=nA.window)||e.removeEventListener("pointerup",this),null==(t=nA.window)||t.removeEventListener("pointermove",this)},hU=new WeakSet,hB=function(e){var t;ox(this,hA,e.composedPath().includes(this.range)),null==(t=nA.window)||t.addEventListener("pointerup",this)},hH=new WeakSet,hW=function(e){var t;"mouse"!==e.pointerType&&oN(this,hU,hB).call(this,e),this.addEventListener("pointerleave",this),null==(t=nA.window)||t.addEventListener("pointermove",this)},hV=new WeakSet,hF=function(){var e;null==(e=nA.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},h$=new WeakSet,hK=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=nA.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=oM(this,hS).activeSegment)||t.style.removeProperty("transform")},hq=new WeakSet,hY=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),oN(this,hL,hM).call(this,e),this.dragging&&("mouse"!==e.pointerType||!oM(this,hA))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},oP.shadowRootOptions={mode:"open"},oP.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},nA.customElements.get("media-chrome-range")||nA.customElements.define("media-chrome-range",oP);var oU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oB=(e,t,i)=>(oU(e,t,"read from private field"),i?i.call(e):t.get(e)),oH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oW=(e,t,i,a)=>(oU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oV extends nA.HTMLElement{constructor(){if(super(),oH(this,hG,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rz.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rz.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=oB(this,hG))?void 0:a.unassociateElement)||r.call(a,this),oW(this,hG,null)),i&&this.isConnected&&(oW(this,hG,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oB(this,hG))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rz.MEDIA_CONTROLLER);a&&(oW(this,hG,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=oB(this,hG))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oB(this,hG))?void 0:e.unassociateElement)||t.call(e,this),oW(this,hG,null)}}hG=new WeakMap,oV.shadowRootOptions={mode:"open"},oV.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},nA.customElements.get("media-control-bar")||nA.customElements.define("media-control-bar",oV);var oF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o$=(e,t,i)=>(oF(e,t,"read from private field"),i?i.call(e):t.get(e)),oK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oq=(e,t,i,a)=>(oF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oY extends nA.HTMLElement{constructor(){if(super(),oK(this,hj,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rz.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rz.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=o$(this,hj))?void 0:a.unassociateElement)||r.call(a,this),oq(this,hj,null)),i&&this.isConnected&&(oq(this,hj,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=o$(this,hj))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=nV(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(rz.MEDIA_CONTROLLER);r&&(oq(this,hj,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=o$(this,hj))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=o$(this,hj))?void 0:e.unassociateElement)||t.call(e,this),oq(this,hj,null)}}hj=new WeakMap,oY.shadowRootOptions={mode:"open"},oY.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},oY.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},nA.customElements.get("media-text-display")||nA.customElements.define("media-text-display",oY);var oG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oj=(e,t,i)=>(oG(e,t,"read from private field"),i?i.call(e):t.get(e)),oQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oZ=(e,t,i,a)=>(oG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oz extends oY{constructor(){var e;super(),oQ(this,hQ,void 0),oZ(this,hQ,this.shadowRoot.querySelector("slot")),oj(this,hQ).textContent=nd(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===r0.MEDIA_DURATION&&(oj(this,hQ).textContent=nd(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return n$(this,r0.MEDIA_DURATION)}set mediaDuration(e){nK(this,r0.MEDIA_DURATION,e)}}hQ=new WeakMap,oz.getSlotTemplateHTML=function(e,t){return`
    <slot>${nd(t.mediaDuration)}</slot>
  `},nA.customElements.get("media-duration-display")||nA.customElements.define("media-duration-display",oz);let oX={2:np("Network Error"),3:np("Decode Error"),4:np("Source Not Supported"),5:np("Encryption Error")},oJ={2:np("A network error caused the media download to fail."),3:np("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:np("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:np("The media is encrypted and there are no keys to decrypt it.")},o0=e=>{var t,i;return 1===e.code?null:{title:null!=(t=oX[e.code])?t:`Error ${e.code}`,message:null!=(i=oJ[e.code])?i:e.message}};var o1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o2=(e,t,i)=>(o1(e,t,"read from private field"),i?i.call(e):t.get(e)),o3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o4=(e,t,i,a)=>(o1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);function o5(e){var t;let{title:i,message:a}=null!=(t=o0(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let o9=[r0.MEDIA_ERROR_CODE,r0.MEDIA_ERROR_MESSAGE];class o8 extends oD{constructor(){super(...arguments),o3(this,hZ,null)}static get observedAttributes(){return[...super.observedAttributes,...o9]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!o9.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==o0(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){return o2(this,hZ)}set mediaError(e){o4(this,hZ,e)}get mediaErrorCode(){return n$(this,"mediaerrorcode")}set mediaErrorCode(e){nK(this,"mediaerrorcode",e)}get mediaErrorMessage(){return nG(this,"mediaerrormessage")}set mediaErrorMessage(e){nj(this,"mediaerrormessage",e)}}hZ=new WeakMap,o8.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${o5({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},o8.formatErrorMessage=o5,nA.customElements.get("media-error-dialog")||nA.customElements.define("media-error-dialog",o8);var o6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o7=(e,t,i)=>(o6(e,t,"read from private field"),i?i.call(e):t.get(e)),le=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class lt extends oD{constructor(){super(...arguments),le(this,hz,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),le(this,hX,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",o7(this,hz)),document.addEventListener("keydown",o7(this,hX)))}disconnectedCallback(){this.removeEventListener("click",o7(this,hz)),document.removeEventListener("keydown",o7(this,hX))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",o7(this,hz)),document.addEventListener("keydown",o7(this,hX))):(this.removeEventListener("click",o7(this,hz)),document.removeEventListener("keydown",o7(this,hX))))}}hz=new WeakMap,hX=new WeakMap,lt.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${function(){let e=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join("");return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${e}</table>
  `}()}
    </slot>
  `},nA.customElements.get("media-keyboard-shortcuts-dialog")||nA.customElements.define("media-keyboard-shortcuts-dialog",lt);var li=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},la=(e,t,i)=>(li(e,t,"read from private field"),i?i.call(e):t.get(e)),lr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ln=(e,t,i,a)=>(li(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ls=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,lo=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,ll=e=>{let t=e.mediaIsFullscreen?np("exit fullscreen mode"):np("enter fullscreen mode");e.setAttribute("aria-label",t)};class ld extends oh{constructor(){super(...arguments),lr(this,hJ,null)}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_IS_FULLSCREEN,r0.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ll(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_IS_FULLSCREEN&&ll(this)}get mediaFullscreenUnavailable(){return nG(this,r0.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){nj(this,r0.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return nq(this,r0.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){nY(this,r0.MEDIA_IS_FULLSCREEN,e)}handleClick(e){ln(this,hJ,e);let t=la(this,hJ) instanceof PointerEvent,i=this.mediaIsFullscreen?new nA.CustomEvent(rZ.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new nA.CustomEvent(rZ.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}}hJ=new WeakMap,ld.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r0.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${r0.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r0.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${r0.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ls}</slot>
      <slot name="exit">${lo}</slot>
    </slot>
  `},ld.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${np("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${np("Exit fullscreen mode")}</slot>
  `},nA.customElements.get("media-fullscreen-button")||nA.customElements.define("media-fullscreen-button",ld);let{MEDIA_TIME_IS_LIVE:lu,MEDIA_PAUSED:lc}=r0,{MEDIA_SEEK_TO_LIVE_REQUEST:lh,MEDIA_PLAY_REQUEST:lm}=rZ,lp=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?np("seek to live"):np("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=np("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class lv extends oh{static get observedAttributes(){return[...super.observedAttributes,lu,lc]}connectedCallback(){super.connectedCallback(),lp(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),lp(this)}get mediaPaused(){return nq(this,r0.MEDIA_PAUSED)}set mediaPaused(e){nY(this,r0.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return nq(this,r0.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){nY(this,r0.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new nA.CustomEvent(lh,{composed:!0,bubbles:!0})),this.hasAttribute(lc)&&this.dispatchEvent(new nA.CustomEvent(lm,{composed:!0,bubbles:!0})))}}lv.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${lu}]:not([${lc}])) slot[name=indicator] > *,
      :host([${lu}]:not([${lc}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${lu}]:not([${lc}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${np("live")}</slot>
  `},nA.customElements.get("media-live-button")||nA.customElements.define("media-live-button",lv);var lE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lb=(e,t,i)=>(lE(e,t,"read from private field"),i?i.call(e):t.get(e)),lg=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lf=(e,t,i,a)=>(lE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let l_="loadingdelay",ly="noautohide",lT=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class lA extends nA.HTMLElement{constructor(){if(super(),lg(this,h0,void 0),lg(this,h1,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rz.MEDIA_CONTROLLER,r0.MEDIA_PAUSED,r0.MEDIA_LOADING,l_]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===l_&&t!==i?this.loadingDelay=Number(i):e===rz.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=lb(this,h0))?void 0:a.unassociateElement)||r.call(a,this),lf(this,h0,null)),i&&this.isConnected&&(lf(this,h0,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lb(this,h0))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rz.MEDIA_CONTROLLER);a&&(lf(this,h0,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lb(this,h0))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=lb(this,h0))?void 0:e.unassociateElement)||t.call(e,this),lf(this,h0,null)}get loadingDelay(){return lb(this,h1)}set loadingDelay(e){lf(this,h1,e);let{style:t}=nV(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return nq(this,r0.MEDIA_PAUSED)}set mediaPaused(e){nY(this,r0.MEDIA_PAUSED,e)}get mediaLoading(){return nq(this,r0.MEDIA_LOADING)}set mediaLoading(e){nY(this,r0.MEDIA_LOADING,e)}get mediaController(){return nG(this,rz.MEDIA_CONTROLLER)}set mediaController(e){nj(this,rz.MEDIA_CONTROLLER,e)}get noAutohide(){return nq(this,ly)}set noAutohide(e){nY(this,ly,e)}}h0=new WeakMap,h1=new WeakMap,lA.shadowRootOptions={mode:"open"},lA.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${r0.MEDIA_LOADING}]:not([${r0.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${r0.MEDIA_LOADING}]:not([${r0.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${r0.MEDIA_LOADING}]:not([${r0.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${lT}</slot>
    <div id="status" role="status" aria-live="polite">${np("media loading")}</div>
  `},nA.customElements.get("media-loading-indicator")||nA.customElements.define("media-loading-indicator",lA);let lk=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,lw=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,lS=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,lI=e=>{let t="off"===e.mediaVolumeLevel?np("unmute"):np("mute");e.setAttribute("aria-label",t)};class lR extends oh{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),lI(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_VOLUME_LEVEL&&lI(this)}get mediaVolumeLevel(){return nG(this,r0.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){nj(this,r0.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?rZ.MEDIA_UNMUTE_REQUEST:rZ.MEDIA_MUTE_REQUEST;this.dispatchEvent(new nA.CustomEvent(e,{composed:!0,bubbles:!0}))}}lR.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${r0.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${r0.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${r0.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${r0.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${r0.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${r0.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${r0.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${lk}</slot>
      <slot name="low">${lw}</slot>
      <slot name="medium">${lw}</slot>
      <slot name="high">${lS}</slot>
    </slot>
  `},lR.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${np("Mute")}</slot>
    <slot name="tooltip-unmute">${np("Unmute")}</slot>
  `},nA.customElements.get("media-mute-button")||nA.customElements.define("media-mute-button",lR);let lC=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,lD=e=>{let t=e.mediaIsPip?np("exit picture in picture mode"):np("enter picture in picture mode");e.setAttribute("aria-label",t)};class lL extends oh{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_IS_PIP,r0.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lD(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_IS_PIP&&lD(this)}get mediaPipUnavailable(){return nG(this,r0.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){nj(this,r0.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return nq(this,r0.MEDIA_IS_PIP)}set mediaIsPip(e){nY(this,r0.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?rZ.MEDIA_EXIT_PIP_REQUEST:rZ.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new nA.CustomEvent(e,{composed:!0,bubbles:!0}))}}lL.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r0.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${r0.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r0.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${r0.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${lC}</slot>
      <slot name="exit">${lC}</slot>
    </slot>
  `},lL.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${np("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${np("Exit picture in picture mode")}</slot>
  `},nA.customElements.get("media-pip-button")||nA.customElements.define("media-pip-button",lL);var lM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lO=(e,t,i)=>(lM(e,t,"read from private field"),i?i.call(e):t.get(e)),lx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let lN="rates",lP=[1,1.2,1.5,1.7,2];class lU extends oh{constructor(){var e;super(),lx(this,h2,new sa(this,lN,{defaultValue:lP})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_PLAYBACK_RATE,lN]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===lN&&(lO(this,h2).value=i),e===r0.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",np("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return lO(this,h2)}set rates(e){e?Array.isArray(e)?lO(this,h2).value=e.join(" "):"string"==typeof e&&(lO(this,h2).value=e):lO(this,h2).value=""}get mediaPlaybackRate(){return n$(this,r0.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nK(this,r0.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(lO(this,h2).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new nA.CustomEvent(rZ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}h2=new WeakMap,lU.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},lU.getTooltipContentHTML=function(){return np("Playback rate")},nA.customElements.get("media-playback-rate-button")||nA.customElements.define("media-playback-rate-button",lU);let lB=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,lH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,lW=e=>{let t=e.mediaPaused?np("play"):np("pause");e.setAttribute("aria-label",t)};class lV extends oh{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_PAUSED,r0.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),lW(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===r0.MEDIA_PAUSED||e===r0.MEDIA_LANG)&&lW(this)}get mediaPaused(){return nq(this,r0.MEDIA_PAUSED)}set mediaPaused(e){nY(this,r0.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?rZ.MEDIA_PLAY_REQUEST:rZ.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new nA.CustomEvent(e,{composed:!0,bubbles:!0}))}}lV.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${r0.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${r0.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${r0.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${r0.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${lB}</slot>
      <slot name="pause">${lH}</slot>
    </slot>
  `},lV.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${np("Play")}</slot>
    <slot name="tooltip-pause">${np("Pause")}</slot>
  `},nA.customElements.get("media-play-button")||nA.customElements.define("media-play-button",lV);let lF={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},l$=e=>{e.style.removeProperty("background-image")},lK=(e,t)=>{e.style["background-image"]=`url('${t}')`};class lq extends nA.HTMLElement{static get observedAttributes(){return[lF.PLACEHOLDER_SRC,lF.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===lF.SRC&&(null==i?this.image.removeAttribute(lF.SRC):this.image.setAttribute(lF.SRC,i)),e===lF.PLACEHOLDER_SRC&&(null==i?l$(this.image):lK(this.image,i))}get placeholderSrc(){return nG(this,lF.PLACEHOLDER_SRC)}set placeholderSrc(e){nj(this,lF.SRC,e)}get src(){return nG(this,lF.SRC)}set src(e){nj(this,lF.SRC,e)}}lq.shadowRootOptions={mode:"open"},lq.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},nA.customElements.get("media-poster-image")||nA.customElements.define("media-poster-image",lq);var lY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lG=(e,t,i)=>(lY(e,t,"read from private field"),i?i.call(e):t.get(e)),lj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lQ=(e,t,i,a)=>(lY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lZ extends oY{constructor(){super(),lj(this,h3,void 0),lQ(this,h3,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_PREVIEW_CHAPTER,r0.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===r0.MEDIA_PREVIEW_CHAPTER||e===r0.MEDIA_LANG)&&i!==t&&null!=i){if(lG(this,h3).textContent=i,""!==i){let e=np("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return nG(this,r0.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){nj(this,r0.MEDIA_PREVIEW_CHAPTER,e)}}h3=new WeakMap,nA.customElements.get("media-preview-chapter-display")||nA.customElements.define("media-preview-chapter-display",lZ);var lz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lX=(e,t,i)=>(lz(e,t,"read from private field"),i?i.call(e):t.get(e)),lJ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l0=(e,t,i,a)=>(lz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class l1 extends nA.HTMLElement{constructor(){if(super(),lJ(this,h4,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rz.MEDIA_CONTROLLER,r0.MEDIA_PREVIEW_IMAGE,r0.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(rz.MEDIA_CONTROLLER);a&&(l0(this,h4,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lX(this,h4))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=lX(this,h4))?void 0:e.unassociateElement)||t.call(e,this),l0(this,h4,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[r0.MEDIA_PREVIEW_IMAGE,r0.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===rz.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=lX(this,h4))?void 0:a.unassociateElement)||r.call(a,this),l0(this,h4,null)),i&&this.isConnected&&(l0(this,h4,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lX(this,h4))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return nG(this,r0.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nj(this,r0.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(r0.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(r0.MEDIA_PREVIEW_COORDS);return}this.setAttribute(r0.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:E}=nV(this.shadowRoot,":host"),b=nV(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),f=m?"min":"max";E.setProperty(`${f}-width`,"initial","important"),E.setProperty(`${f}-height`,"initial","important"),E.width=`${r*p}px`,E.height=`${n*p}px`;let _=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};g.src!==s&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,_()},g.src=s,_()),_(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}h4=new WeakMap,l1.shadowRootOptions={mode:"open"},l1.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},nA.customElements.get("media-preview-thumbnail")||nA.customElements.define("media-preview-thumbnail",l1);var l2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l3=(e,t,i)=>(l2(e,t,"read from private field"),i?i.call(e):t.get(e)),l4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l5=(e,t,i,a)=>(l2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class l9 extends oY{constructor(){super(),l4(this,h5,void 0),l5(this,h5,this.shadowRoot.querySelector("slot")),l3(this,h5).textContent=nd(0)}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_PREVIEW_TIME&&null!=i&&(l3(this,h5).textContent=nd(parseFloat(i)))}get mediaPreviewTime(){return n$(this,r0.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){nK(this,r0.MEDIA_PREVIEW_TIME,e)}}h5=new WeakMap,nA.customElements.get("media-preview-time-display")||nA.customElements.define("media-preview-time-display",l9);let l8={SEEK_OFFSET:"seekoffset"},l6=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;class l7 extends oh{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_CURRENT_TIME,l8.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=n$(this,l8.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l8.SEEK_OFFSET&&(this.seekOffset=n$(this,l8.SEEK_OFFSET,30))}get seekOffset(){return n$(this,l8.SEEK_OFFSET,30)}set seekOffset(e){nK(this,l8.SEEK_OFFSET,e),this.setAttribute("aria-label",np("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),nO(nN(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return n$(this,r0.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){nK(this,r0.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new nA.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}l7.getSlotTemplateHTML=function(e,t){return`
    <slot name="icon">${l6(t.seekOffset)}</slot>
  `},l7.getTooltipContentHTML=function(){return np("Seek backward")},nA.customElements.get("media-seek-backward-button")||nA.customElements.define("media-seek-backward-button",l7);let de={SEEK_OFFSET:"seekoffset"},dt=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;class di extends oh{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_CURRENT_TIME,de.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=n$(this,de.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===de.SEEK_OFFSET&&(this.seekOffset=n$(this,de.SEEK_OFFSET,30))}get seekOffset(){return n$(this,de.SEEK_OFFSET,30)}set seekOffset(e){nK(this,de.SEEK_OFFSET,e),this.setAttribute("aria-label",np("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),nO(nN(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return n$(this,r0.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){nK(this,r0.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new nA.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}di.getSlotTemplateHTML=function(e,t){return`
    <slot name="icon">${dt(t.seekOffset)}</slot>
  `},di.getTooltipContentHTML=function(){return np("Seek forward")},nA.customElements.get("media-seek-forward-button")||nA.customElements.define("media-seek-forward-button",di);var da=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dr=(e,t,i)=>(da(e,t,"read from private field"),i?i.call(e):t.get(e)),dn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ds=(e,t,i,a)=>(da(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let dl={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},dd=[...Object.values(dl),r0.MEDIA_CURRENT_TIME,r0.MEDIA_DURATION,r0.MEDIA_SEEKABLE],du=["Enter"," "],dc="&nbsp;/&nbsp;",dh=(e,{timesSep:t=dc}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?nd(0-(s-r)):nd(r);return e.showDuration?`${o}${t}${nd(s)}`:o},dm=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.remaining?nl(0-(r-i)):nl(i);if(!e.showDuration){e.setAttribute("aria-valuetext",n);return}let s=nl(r),o=`${n} of ${s}`;e.setAttribute("aria-valuetext",o)};class dp extends oY{constructor(){super(),dn(this,h9,void 0),ds(this,h9,this.shadowRoot.querySelector("slot")),dr(this,h9).innerHTML=`${dh(this)}`}static get observedAttributes(){return[...super.observedAttributes,...dd,"disabled"]}connectedCallback(){let{style:e}=nV(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",np("playback time"));let t=e=>{let{key:i}=e;if(!du.includes(i)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!du.includes(r)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){dd.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return nq(this,dl.REMAINING)}set remaining(e){nY(this,dl.REMAINING,e)}get showDuration(){return nq(this,dl.SHOW_DURATION)}set showDuration(e){nY(this,dl.SHOW_DURATION,e)}get noToggle(){return nq(this,dl.NO_TOGGLE)}set noToggle(e){nY(this,dl.NO_TOGGLE,e)}get mediaDuration(){return n$(this,r0.MEDIA_DURATION)}set mediaDuration(e){nK(this,r0.MEDIA_DURATION,e)}get mediaCurrentTime(){return n$(this,r0.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){nK(this,r0.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(r0.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(r0.MEDIA_SEEKABLE);return}this.setAttribute(r0.MEDIA_SEEKABLE,e.join(":"))}update(){let e=dh(this);dm(this),e!==dr(this,h9).innerHTML&&(dr(this,h9).innerHTML=e)}}h9=new WeakMap,dp.getSlotTemplateHTML=function(e,t){return`
    <slot>${dh(t)}</slot>
  `},nA.customElements.get("media-time-display")||nA.customElements.define("media-time-display",dp);var dv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dE=(e,t,i)=>(dv(e,t,"read from private field"),i?i.call(e):t.get(e)),db=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dg=(e,t,i,a)=>(dv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),df=(e,t,i,a)=>({set _(value){dg(e,t,value,i)},get _(){return dE(e,t,a)}});class d_{constructor(e,t,i){db(this,h8,void 0),db(this,h6,void 0),db(this,h7,void 0),db(this,me,void 0),db(this,mt,void 0),db(this,mi,void 0),db(this,ma,void 0),db(this,mr,void 0),db(this,mn,0),db(this,ms,(e=performance.now())=>{dg(this,mn,requestAnimationFrame(dE(this,ms))),dg(this,me,performance.now()-dE(this,h7));let t=1e3/this.fps;if(dE(this,me)>t){dg(this,h7,e-dE(this,me)%t);let i=1e3/((e-dE(this,h6))/++df(this,mt)._),a=(e-dE(this,mi))/1e3/this.duration,r=dE(this,ma)+a*this.playbackRate;r-dE(this,h8).valueAsNumber>0?dg(this,mr,this.playbackRate/this.duration/i):(dg(this,mr,.995*dE(this,mr)),r=dE(this,h8).valueAsNumber+dE(this,mr)),this.callback(r)}}),dg(this,h8,e),this.callback=t,this.fps=i}start(){0===dE(this,mn)&&(dg(this,h7,performance.now()),dg(this,h6,dE(this,h7)),dg(this,mt,0),dE(this,ms).call(this))}stop(){0!==dE(this,mn)&&(cancelAnimationFrame(dE(this,mn)),dg(this,mn,0))}update({start:e,duration:t,playbackRate:i}){let a=e-dE(this,h8).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),dg(this,ma,e),dg(this,mi,performance.now()),this.duration=t,this.playbackRate=i}}h8=new WeakMap,h6=new WeakMap,h7=new WeakMap,me=new WeakMap,mt=new WeakMap,mi=new WeakMap,ma=new WeakMap,mr=new WeakMap,mn=new WeakMap,ms=new WeakMap;var dy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dT=(e,t,i)=>(dy(e,t,"read from private field"),i?i.call(e):t.get(e)),dA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dk=(e,t,i,a)=>(dy(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dw=(e,t,i)=>(dy(e,t,"access private method"),i);let dS=e=>{let t=e.range,i=nl(+dR(e)),a=nl(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},dI=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},dR=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class dC extends oP{constructor(){super(),dA(this,mb),dA(this,mf),dA(this,mT),dA(this,mk),dA(this,mS),dA(this,mR),dA(this,mD),dA(this,mM),dA(this,mo,void 0),dA(this,ml,void 0),dA(this,md,void 0),dA(this,mu,void 0),dA(this,mc,void 0),dA(this,mh,void 0),dA(this,mm,void 0),dA(this,mp,void 0),dA(this,mv,void 0),dA(this,mE,void 0),dA(this,my,e=>{this.dragging||(na(e)&&(this.range.valueAsNumber=e),dT(this,mE)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),dk(this,md,this.shadowRoot.querySelectorAll('[part~="box"]')),dk(this,mc,this.shadowRoot.querySelector('[part~="preview-box"]')),dk(this,mh,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);dk(this,mm,parseInt(e.getPropertyValue("--media-box-padding-left"))),dk(this,mp,parseInt(e.getPropertyValue("--media-box-padding-right"))),dk(this,ml,new d_(this.range,dT(this,my),60))}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_PAUSED,r0.MEDIA_DURATION,r0.MEDIA_SEEKABLE,r0.MEDIA_CURRENT_TIME,r0.MEDIA_PREVIEW_IMAGE,r0.MEDIA_PREVIEW_TIME,r0.MEDIA_PREVIEW_CHAPTER,r0.MEDIA_BUFFERED,r0.MEDIA_PLAYBACK_RATE,r0.MEDIA_LOADING,r0.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",np("seek")),dw(this,mb,mg).call(this),dk(this,mo,this.getRootNode()),null==(e=dT(this,mo))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),dw(this,mb,mg).call(this),null==(e=dT(this,mo))||e.removeEventListener("transitionstart",this),dk(this,mo,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===r0.MEDIA_CURRENT_TIME||e===r0.MEDIA_PAUSED||e===r0.MEDIA_ENDED||e===r0.MEDIA_LOADING||e===r0.MEDIA_DURATION||e===r0.MEDIA_SEEKABLE?(dT(this,ml).update({start:dI(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),dw(this,mb,mg).call(this),dS(this)):e===r0.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===r0.MEDIA_DURATION||e===r0.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=dT(this,mv),this.updateBar()))}get mediaChaptersCues(){return dT(this,mv)}set mediaChaptersCues(e){var t;dk(this,mv,e),this.updateSegments(null==(t=dT(this,mv))?void 0:t.map(e=>({start:dI(this,e.startTime),end:dI(this,e.endTime)})))}get mediaPaused(){return nq(this,r0.MEDIA_PAUSED)}set mediaPaused(e){nY(this,r0.MEDIA_PAUSED,e)}get mediaLoading(){return nq(this,r0.MEDIA_LOADING)}set mediaLoading(e){nY(this,r0.MEDIA_LOADING,e)}get mediaDuration(){return n$(this,r0.MEDIA_DURATION)}set mediaDuration(e){nK(this,r0.MEDIA_DURATION,e)}get mediaCurrentTime(){return n$(this,r0.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){nK(this,r0.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return n$(this,r0.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nK(this,r0.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(r0.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(r0.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(r0.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(r0.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(r0.MEDIA_SEEKABLE);return}this.setAttribute(r0.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return nG(this,r0.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nj(this,r0.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return n$(this,r0.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){nK(this,r0.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return nq(this,r0.MEDIA_ENDED)}set mediaEnded(e){nY(this,r0.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=dI(this,r)}let{style:a}=nV(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=nV(this.shadowRoot,"#current-rail"),t=nV(this.shadowRoot,'[part~="current-box"]'),i=dw(this,mT,mA).call(this,dT(this,mh)),a=dw(this,mk,mw).call(this,i,this.range.valueAsNumber),r=dw(this,mS,mI).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":dw(this,mM,mO).call(this);break;case"pointermove":dw(this,mR,mC).call(this,e);break;case"pointerup":dT(this,mE)&&dk(this,mE,!1);break;case"pointerdown":dk(this,mE,!0);break;case"pointerleave":dw(this,mD,mL).call(this,null);break;case"transitionstart":nP(e.target,this)&&setTimeout(()=>dw(this,mb,mg).call(this),0)}}}mo=new WeakMap,ml=new WeakMap,md=new WeakMap,mu=new WeakMap,mc=new WeakMap,mh=new WeakMap,mm=new WeakMap,mp=new WeakMap,mv=new WeakMap,mE=new WeakMap,mb=new WeakSet,mg=function(){dw(this,mf,m_).call(this)?dT(this,ml).start():dT(this,ml).stop()},mf=new WeakSet,m_=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&nW(this)},my=new WeakMap,mT=new WeakSet,mA=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?nU(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},mk=new WeakSet,mw=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},mS=new WeakSet,mI=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+dT(this,mm)){let t=e.range.left-e.bounds.left-dT(this,mm);return`${n-i/2+t}px`}if(n>r-dT(this,mp)){let t=e.bounds.right-e.range.right-dT(this,mp);return`${n+i/2-t-e.range.width}px`}return 0},mR=new WeakSet,mC=function(e){let t=[...dT(this,md)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){dw(this,mD,mL).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=nV(this.shadowRoot,"#preview-rail"),r=nV(this.shadowRoot,'[part~="preview-box"]'),n=dw(this,mT,mA).call(this,dT(this,mc)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=dw(this,mk,mw).call(this,n,s),l=dw(this,mS,mI).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(dT(this,mu))-Math.round(s*i))&&s>.01&&s<.99||(dk(this,mu,s*i),dw(this,mD,mL).call(this,dT(this,mu)))},mD=new WeakSet,mL=function(e){this.dispatchEvent(new nA.CustomEvent(rZ.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},mM=new WeakSet,mO=function(){dT(this,ml).stop();let e=dR(this);this.dispatchEvent(new nA.CustomEvent(rZ.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},dC.shadowRootOptions={mode:"open"},dC.getTemplateHTML=function(e){return`
    ${oP.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${r0.MEDIA_PREVIEW_IMAGE}], [${r0.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${r0.MEDIA_PREVIEW_IMAGE}], [${r0.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${r0.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${r0.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${r0.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${r0.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${r0.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${r0.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${r0.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${r0.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${r0.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${r0.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${r0.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${r0.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${l1.shadowRootOptions.mode}">
            ${l1.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},nA.customElements.get("media-time-range")||nA.customElements.define("media-time-range",dC);let dD=e=>e.mediaMuted?0:e.mediaVolume,dL=e=>`${Math.round(100*e)}%`;class dM extends oP{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_VOLUME,r0.MEDIA_MUTED,r0.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new nA.CustomEvent(rZ.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",np("volume"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===r0.MEDIA_VOLUME||e===r0.MEDIA_MUTED)&&(this.range.valueAsNumber=dD(this),this.range.setAttribute("aria-valuetext",dL(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return n$(this,r0.MEDIA_VOLUME,1)}set mediaVolume(e){nK(this,r0.MEDIA_VOLUME,e)}get mediaMuted(){return nq(this,r0.MEDIA_MUTED)}set mediaMuted(e){nY(this,r0.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return nG(this,r0.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){nj(this,r0.MEDIA_VOLUME_UNAVAILABLE,e)}}nA.customElements.get("media-volume-range")||nA.customElements.define("media-volume-range",dM);class dO extends oh{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=np("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return nq(this,r0.MEDIA_LOOP)}set mediaLoop(e){nY(this,r0.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new nA.CustomEvent(rZ.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}dO.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${r0.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},dO.getTooltipContentHTML=function(){return np("Loop")},nA.customElements.get("media-loop-button")||nA.customElements.define("media-loop-button",dO);var dx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dN=(e,t,i)=>(dx(e,t,"read from private field"),i?i.call(e):t.get(e)),dP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dU=(e,t,i,a)=>(dx(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let dB={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof dY&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof dY?a.element[a.attributeName]=t:a.value=t}}}};class dH extends nA.DocumentFragment{constructor(e,t,i=dB){var a;super(),dP(this,mx,void 0),dP(this,mN,void 0),this.append(e.content.cloneNode(!0)),dU(this,mx,dW(this)),dU(this,mN,i),null==(a=i.createCallback)||a.call(i,this,dN(this,mx),t),i.processCallback(this,dN(this,mx),t)}update(e){dN(this,mN).processCallback(this,dN(this,mx),e)}}mx=new WeakMap,mN=new WeakMap;let dW=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new dq;for([i,a]of dF(r.value))if(i){let i=new dY(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of dF(n))if(i){let i=new dG(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new dj(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else dW(r,t);return t},dV={},dF=e=>{let t="",i=0,a=dV[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),dV[e]=a};class d${get value(){return""}set value(e){}toString(){return this.value}}let dK=new WeakMap;class dq{constructor(){dP(this,mP,[])}[Symbol.iterator](){return dN(this,mP).values()}get length(){return dN(this,mP).length}item(e){return dN(this,mP)[e]}append(...e){for(let t of e)t instanceof dY&&dK.set(t,this),dN(this,mP).push(t)}toString(){return dN(this,mP).join("")}}mP=new WeakMap;class dY extends d${constructor(e,t,i){super(),dP(this,mV),dP(this,mU,""),dP(this,mB,void 0),dP(this,mH,void 0),dP(this,mW,void 0),dU(this,mB,e),dU(this,mH,t),dU(this,mW,i)}get attributeName(){return dN(this,mH)}get attributeNamespace(){return dN(this,mW)}get element(){return dN(this,mB)}get value(){return dN(this,mU)}set value(e){dN(this,mU)!==e&&(dU(this,mU,e),dN(this,mV,mF)&&1!==dN(this,mV,mF).length?dN(this,mB).setAttributeNS(dN(this,mW),dN(this,mH),dN(this,mV,mF).toString()):null==e?dN(this,mB).removeAttributeNS(dN(this,mW),dN(this,mH)):dN(this,mB).setAttributeNS(dN(this,mW),dN(this,mH),e))}get booleanValue(){return dN(this,mB).hasAttributeNS(dN(this,mW),dN(this,mH))}set booleanValue(e){if(dN(this,mV,mF)&&1!==dN(this,mV,mF).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}mU=new WeakMap,mB=new WeakMap,mH=new WeakMap,mW=new WeakMap,mV=new WeakSet,mF=function(){return dK.get(this)};class dG extends d${constructor(e,t){super(),dP(this,m$,void 0),dP(this,mK,void 0),dU(this,m$,e),dU(this,mK,t?[...t]:[new Text])}get replacementNodes(){return dN(this,mK)}get parentNode(){return dN(this,m$)}get nextSibling(){return dN(this,mK)[dN(this,mK).length-1].nextSibling}get previousSibling(){return dN(this,mK)[0].previousSibling}get value(){return dN(this,mK).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),dU(this,mK,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(dN(this,mK)[0].parentNode,dN(this,mK),t,this.nextSibling))}}m$=new WeakMap,mK=new WeakMap;class dj extends dG{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let dQ={string:e=>String(e)};class dZ{constructor(e){this.template=e,this.state=void 0}}let dz=new WeakMap,dX=new WeakMap,dJ={partial:(e,t)=>{t[e.expression]=new dZ(e.template)},if:(e,t)=>{var i;if(d3(e.expression,t)){if(dz.get(e)!==e.template){dz.set(e,e.template);let i=new dH(e.template,t,d1);e.replace(i),dX.set(e,i)}else null==(i=dX.get(e))||i.update(t)}else e.replace(""),dz.delete(e),dX.delete(e)}},d0=Object.keys(dJ),d1={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof dj){if(!n.directive){let e=d0.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=dJ[n.directive])||a.call(dJ,n,i);continue}let t=d3(e,i);if(t instanceof dZ){dz.get(n)!==t.template?(dz.set(n,t.template),t=new dH(t.template,t.state,d1),n.value=t,dX.set(n,t)):null==(r=dX.get(n))||r.update(t.state);continue}t?(n instanceof dY&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof dY?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,dz.delete(n),dX.delete(n))):n instanceof dY?n.value=void 0:(n.value=void 0,dz.delete(n),dX.delete(n))}}},d2={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=dQ[t])?void 0:i.call(dQ,e)}};function d3(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r;let n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return d4(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return d4(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=d9(d,t))}return i}if(1===d.length)return d5(d[0])?d9(d[0].token,t):d4(e);if(2===d.length){let i=d2[null==(o=d[0])?void 0:o.token];return i&&d5(d[1])?i(d9(d[1].token,t)):d4(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=d2[i];return a&&d5(d[0])&&d5(d[2])?a(d9(d[0].token,t),"|"===i?d[2].token:d9(d[2].token,t)):d4(e)}}function d4(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function d5({type:e}){return["number","boolean","string","param"].includes(e)}function d9(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):nr(e)?parseFloat(e):t[e]}var d8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d6=(e,t,i)=>(d8(e,t,"read from private field"),i?i.call(e):t.get(e)),d7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ue=(e,t,i,a)=>(d8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ut=(e,t,i)=>(d8(e,t,"access private method"),i);let ui={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},ua=nk.createElement("template");ua.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class ur extends nA.HTMLElement{constructor(){super(),d7(this,mj),d7(this,mZ),d7(this,mq,void 0),d7(this,mY,void 0),d7(this,mG,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(ui[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(r1.BREAKPOINTS_COMPUTED,this.render),ut(this,mj,mQ).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=d6(this,mq))?e:this.constructor.template}set template(e){if(null===e){this.removeAttribute("template");return}"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(ue(this,mq,e),ue(this,mG,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>ui[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=ui[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(nr(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&ut(this,mZ,mz).call(this)}connectedCallback(){ut(this,mZ,mz).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==d6(this,mY)&&(ue(this,mY,this.template),this.renderer=new dH(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(ua.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function un(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function us(e){return e.split("-")[0]}mq=new WeakMap,mY=new WeakMap,mG=new WeakMap,mj=new WeakSet,mQ=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},mZ=new WeakSet,mz=function(){var e;let t=this.getAttribute("template");if(!t||t===d6(this,mG))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){ue(this,mG,t),ue(this,mq,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(ue(this,mG,t),un(t).then(e=>{let t=nk.createElement("template");t.innerHTML=e,ue(this,mq,t),this.createRenderer()}).catch(console.error))},ur.observedAttributes=["template"],ur.processor=d1,nA.customElements.get("media-theme")||nA.customElements.define("media-theme",ur);class uo extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class ul extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var ud=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uu=(e,t,i)=>(ud(e,t,"read from private field"),i?i.call(e):t.get(e)),uc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uh=(e,t,i,a)=>(ud(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),um=(e,t,i)=>(ud(e,t,"access private method"),i);function up({type:e,text:t,value:i,checked:a}){let r=nk.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=nk.createElement("span");return n.textContent=t,r.append(n),r}function uv(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let uE={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class ub extends nA.HTMLElement{constructor(){if(super(),uc(this,m5),uc(this,m8),uc(this,pe),uc(this,pi),uc(this,pr),uc(this,ps),uc(this,pu),uc(this,ph),uc(this,pp),uc(this,pE),uc(this,pg),uc(this,p_),uc(this,pT),uc(this,pk),uc(this,pS),uc(this,pR),uc(this,pD),uc(this,pM),uc(this,mX,null),uc(this,mJ,null),uc(this,m0,null),uc(this,m1,new Set),uc(this,m2,void 0),uc(this,m3,!1),uc(this,m4,null),uc(this,m7,()=>{let e=uu(this,m1),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));uh(this,m1,t)}),uc(this,pl,()=>{um(this,pu,pc).call(this),um(this,ph,pm).call(this,!1)}),uc(this,pd,()=>{um(this,pu,pc).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),uh(this,m2,new MutationObserver(uu(this,m7))),uu(this,m2).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[uE.DISABLED,uE.HIDDEN,uE.STYLE,uE.ANCHOR,rz.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":um(this,m5,m9).call(this,e);break;case"invoke":um(this,pi,pa).call(this,e);break;case"click":um(this,pp,pv).call(this,e);break;case"toggle":um(this,pg,pf).call(this,e);break;case"focusout":um(this,pT,pA).call(this,e);break;case"keydown":um(this,pk,pw).call(this,e)}}connectedCallback(){var e,t;uh(this,m4,nF(this.shadowRoot,":host")),um(this,pe,pt).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),uh(this,mX,nM(this)),null==(t=null==(e=uu(this,mX))?void 0:e.associateElement)||t.call(e,this),this.hidden||(nR(uf(this),uu(this,pl)),nR(this,uu(this,pd))),um(this,m8,m6).call(this)}disconnectedCallback(){var e,t;nC(uf(this),uu(this,pl)),nC(this,uu(this,pd)),this.disable(),null==(t=null==(e=uu(this,mX))?void 0:e.unassociateElement)||t.call(e,this),uh(this,mX,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===uE.HIDDEN&&i!==t?(uu(this,m3)||uh(this,m3,!0),this.hidden?um(this,ps,po).call(this):um(this,pr,pn).call(this),this.dispatchEvent(new ul({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===rz.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=uu(this,mX))?void 0:a.unassociateElement)||r.call(a,this),uh(this,mX,null)),i&&this.isConnected&&(uh(this,mX,nM(this)),null==(s=null==(n=uu(this,mX))?void 0:n.associateElement)||s.call(n,this))):e===uE.DISABLED&&i!==t?null==i?this.enable():this.disable():e===uE.STYLE&&i!==t&&um(this,pe,pt).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=nH(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(ug)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&um(this,pM,pO).call(this,t)}focus(){if(uh(this,mJ,nB()),this.items.length){um(this,pD,pL).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=um(this,pS,pI).call(this,e);i&&(um(this,pM,pO).call(this,i,"checkbox"===i.type),uu(this,m0)&&!this.hidden&&(null==(t=uu(this,mJ))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=um(this,pS,pI).call(this,e))?t:um(this,pR,pC).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),um(this,pD,pL).call(this,r[s]),r[s].focus()}}function ug(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function uf(e){var t;return null!=(t=e.getAttribute("bounds")?nU(e,`#${e.getAttribute("bounds")}`):nL(e)||e.parentElement)?t:e}mX=new WeakMap,mJ=new WeakMap,m0=new WeakMap,m1=new WeakMap,m2=new WeakMap,m3=new WeakMap,m4=new WeakMap,m5=new WeakSet,m9=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&um(this,m8,m6).call(this),t.name||uu(this,m7).call(this)},m8=new WeakSet,m6=function(){let e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=0===t.assignedNodes().length&&0===e.assignedNodes().length},m7=new WeakMap,pe=new WeakSet,pt=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},pi=new WeakSet,pa=function(e){uh(this,m0,e.relatedTarget),nP(this,e.relatedTarget)||(this.hidden=!this.hidden)},pr=new WeakSet,pn=function(){var e;null==(e=uu(this,m0))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),nR(uf(this),uu(this,pl)),nR(this,uu(this,pd))},ps=new WeakSet,po=function(){var e;null==(e=uu(this,m0))||e.setAttribute("aria-expanded","false"),nC(uf(this),uu(this,pl)),nC(this,uu(this,pd))},pl=new WeakMap,pd=new WeakMap,pu=new WeakSet,pc=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(us(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=us(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=uf(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=uu(this,m4);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},ph=new WeakSet,pm=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=uu(this,m4);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),um(this,pu,pc).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),um(this,pu,pc).call(this);a.removeProperty("--media-menu-transition-in")},pp=new WeakSet,pv=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(uu(this,pE,pb))){null==(t=uu(this,mJ))||t.focus(),this.hidden=!0;return}let i=um(this,pS,pI).call(this,e);!i||i.hasAttribute("disabled")||(um(this,pD,pL).call(this,i),this.handleSelect(e))},pE=new WeakSet,pb=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},pg=new WeakSet,pf=function(e){if(e.target===this)return;um(this,p_,py).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new uo({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);um(this,ph,pm).call(this,!0)},p_=new WeakSet,py=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},pT=new WeakSet,pA=function(e){var t;nP(this,e.relatedTarget)||(uu(this,m3)&&(null==(t=uu(this,mJ))||t.focus()),!uu(this,m0)||uu(this,m0)===e.relatedTarget||this.hidden||(this.hidden=!0))},pk=new WeakSet,pw=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(uu(this,m3)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=uu(this,mJ))||n.focus(),uu(this,m3)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},pS=new WeakSet,pI=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},pR=new WeakSet,pC=function(){return this.items.find(e=>0===e.tabIndex)},pD=new WeakSet,pL=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},pM=new WeakSet,pO=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},ub.shadowRootOptions={mode:"open"},ub.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},nA.customElements.get("media-chrome-menu")||nA.customElements.define("media-chrome-menu",ub);var u_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uy=(e,t,i)=>(u_(e,t,"read from private field"),i?i.call(e):t.get(e)),uT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uA=(e,t,i,a)=>(u_(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uk=(e,t,i)=>(u_(e,t,"access private method"),i);let uw={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class uS extends nA.HTMLElement{constructor(){if(super(),uT(this,pP),uT(this,pB),uT(this,pW),uT(this,p$),uT(this,pq),uT(this,pG),uT(this,px,!1),uT(this,pN,void 0),uT(this,pF,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=nk.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nD(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[uw.TYPE,uw.DISABLED,uw.CHECKED,uw.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),uI(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":uk(this,pP,pU).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":uk(this,pq,pY).call(this,e);break;case"keyup":uk(this,p$,pK).call(this,e)}}attributeChangedCallback(e,t,i){e===uw.CHECKED&&uI(this)&&!uy(this,px)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===uw.TYPE&&i!==t?this.role="menuitem"+i:e===uw.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(uw.DISABLED)||this.enable(),this.role="menuitem"+this.type,uA(this,pN,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),uk(this,pG,pj).call(this),this.submenuElement&&uk(this,pB,pH).call(this)}disconnectedCallback(){this.disable(),uk(this,pG,pj).call(this),uA(this,pN,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nH(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(uw.TYPE))?e:""}set type(e){this.setAttribute(uw.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(uw.VALUE))?e:this.text}set value(e){this.setAttribute(uw.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(uI(this))return"true"===this.getAttribute("aria-checked")}set checked(e){uI(this)&&(uA(this,px,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!uI(this)&&this.invokeTargetElement&&nP(this,e.target)&&this.invokeTargetElement.dispatchEvent(new uo({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function uI(e){return"radio"===e.type||"checkbox"===e.type}px=new WeakMap,pN=new WeakMap,pP=new WeakSet,pU=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?uk(this,pB,pH).call(this):uk(this,pW,pV).call(this))},pB=new WeakSet,pH=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",uy(this,pF)),this.submenuElement.addEventListener("addmenuitem",uy(this,pF)),this.submenuElement.addEventListener("removemenuitem",uy(this,pF)),uy(this,pF).call(this)},pW=new WeakSet,pV=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",uy(this,pF)),this.submenuElement.removeEventListener("addmenuitem",uy(this,pF)),this.submenuElement.removeEventListener("removemenuitem",uy(this,pF)),uy(this,pF).call(this)},pF=new WeakMap,p$=new WeakSet,pK=function(e){let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",uk(this,p$,pK));return}this.handleClick(e)},pq=new WeakSet,pY=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",uk(this,p$,pK));return}this.addEventListener("keyup",uk(this,p$,pK),{once:!0})},pG=new WeakSet,pj=function(){var e;let t=null==(e=uy(this,pN))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},uS.shadowRootOptions={mode:"open"},uS.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},uS.getSuffixSlotInnerHTML=function(e){return""},nA.customElements.get("media-chrome-menu-item")||nA.customElements.define("media-chrome-menu-item",uS);class uR extends ub{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nL(this).querySelector("media-settings-menu-button")}}uR.getTemplateHTML=function(e){return`
    ${ub.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},nA.customElements.get("media-settings-menu")||nA.customElements.define("media-settings-menu",uR);class uC extends uS{}uC.shadowRootOptions={mode:"open"},uC.getTemplateHTML=function(e){return`
    ${uS.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},uC.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},nA.customElements.get("media-settings-menu-item")||nA.customElements.define("media-settings-menu-item",uC);class uD extends oh{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nH(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new uo({relatedTarget:this}))}}nA.customElements.get("media-chrome-menu-button")||nA.customElements.define("media-chrome-menu-button",uD);class uL extends uD{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",np("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nL(this).querySelector("media-settings-menu")}}uL.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},uL.getTooltipContentHTML=function(){return np("Settings")},nA.customElements.get("media-settings-menu-button")||nA.customElements.define("media-settings-menu-button",uL);var uM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uO=(e,t,i)=>(uM(e,t,"read from private field"),i?i.call(e):t.get(e)),ux=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uN=(e,t,i,a)=>(uM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uP=(e,t,i)=>(uM(e,t,"access private method"),i);class uU extends ub{constructor(){super(...arguments),ux(this,pz),ux(this,pJ),ux(this,pQ,[]),ux(this,pZ,void 0)}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_AUDIO_TRACK_LIST,r0.MEDIA_AUDIO_TRACK_ENABLED,r0.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===r0.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===r0.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;uN(this,pQ,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(ni)),uP(this,pz,pX).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uP(this,pJ,p0))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uP(this,pJ,p0))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=nL(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return uO(this,pQ)}set mediaAudioTrackList(e){uN(this,pQ,e),uP(this,pz,pX).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=nG(this,r0.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nj(this,r0.MEDIA_AUDIO_TRACK_ENABLED,e)}}pQ=new WeakMap,pZ=new WeakMap,pz=new WeakSet,pX=function(){if(uO(this,pZ)===JSON.stringify(this.mediaAudioTrackList))return;uN(this,pZ,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=up({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(uv(this,"checked-indicator")),this.defaultSlot.append(e)}},pJ=new WeakSet,p0=function(){if(null==this.value)return;let e=new nA.CustomEvent(rZ.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},nA.customElements.get("media-audio-track-menu")||nA.customElements.define("media-audio-track-menu",uU);let uB=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,uH=e=>{let t=np("Audio");e.setAttribute("aria-label",t)};class uW extends uD{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_AUDIO_TRACK_ENABLED,r0.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),uH(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_LANG&&uH(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nL(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=nG(this,r0.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nj(this,r0.MEDIA_AUDIO_TRACK_ENABLED,e)}}uW.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${uB}</slot>
  `},uW.getTooltipContentHTML=function(){return np("Audio")},nA.customElements.get("media-audio-track-menu-button")||nA.customElements.define("media-audio-track-menu-button",uW);var uV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uF=(e,t,i)=>(uV(e,t,"read from private field"),i?i.call(e):t.get(e)),u$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uK=(e,t,i,a)=>(uV(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uq=(e,t,i)=>(uV(e,t,"access private method"),i);let uY=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class uG extends ub{constructor(){super(...arguments),u$(this,p2),u$(this,p4),u$(this,p1,void 0)}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_SUBTITLES_LIST,r0.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_SUBTITLES_LIST&&t!==i?uq(this,p2,p3).call(this):e===r0.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",uq(this,p2,p3).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uq(this,p4,p5))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uq(this,p4,p5))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nL(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return uj(this,r0.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){uQ(this,r0.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return uj(this,r0.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){uQ(this,r0.MEDIA_SUBTITLES_SHOWING,e)}}p1=new WeakMap,p2=new WeakSet,p3=function(){var e;let t=uF(this,p1)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(r0.MEDIA_SUBTITLES_SHOWING);if(!t&&!i)return;uK(this,p1,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let a=!this.value,r=up({type:"radio",text:this.formatMenuItemText(np("Off")),value:"off",checked:a});for(let t of(r.prepend(uv(this,"checked-indicator")),this.defaultSlot.append(r),this.mediaSubtitlesList)){let i=up({type:"radio",text:this.formatMenuItemText(t.label,t),value:sl(t),checked:this.value==sl(t)});i.prepend(uv(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(uv(this,"captions-indicator")),this.defaultSlot.append(i)}},p4=new WeakSet,p5=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(r0.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new nA.CustomEvent(rZ.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new nA.CustomEvent(rZ.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},uG.getTemplateHTML=function(e){return`
    ${ub.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${uY}</slot>
  `};let uj=(e,t)=>{let i=e.getAttribute(t);return i?ss(i):[]},uQ=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=sd(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};nA.customElements.get("media-captions-menu")||nA.customElements.define("media-captions-menu",uG);let uZ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,uz=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,uX=e=>{e.setAttribute("data-captions-enabled",sp(e).toString())},uJ=e=>{e.setAttribute("aria-label",np("closed captions"))};class u0 extends uD{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_SUBTITLES_LIST,r0.MEDIA_SUBTITLES_SHOWING,r0.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),uJ(this),uX(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_SUBTITLES_SHOWING?uX(this):e===r0.MEDIA_LANG&&uJ(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nL(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return u1(this,r0.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){u2(this,r0.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return u1(this,r0.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){u2(this,r0.MEDIA_SUBTITLES_SHOWING,e)}}u0.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${uZ}</slot>
      <slot name="off">${uz}</slot>
    </slot>
  `},u0.getTooltipContentHTML=function(){return np("Captions")};let u1=(e,t)=>{let i=e.getAttribute(t);return i?ss(i):[]},u2=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=sd(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};nA.customElements.get("media-captions-menu-button")||nA.customElements.define("media-captions-menu-button",u0);var u3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u4=(e,t,i)=>(u3(e,t,"read from private field"),i?i.call(e):t.get(e)),u5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},u9=(e,t,i)=>(u3(e,t,"access private method"),i);let u8={RATES:"rates"};class u6 extends ub{constructor(){super(),u5(this,p8),u5(this,p7),u5(this,p9,new sa(this,u8.RATES,{defaultValue:lP})),u9(this,p8,p6).call(this)}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_PLAYBACK_RATE,u8.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===r0.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,u9(this,p8,p6).call(this)):e===u8.RATES&&t!=i&&(u4(this,p9).value=i,u9(this,p8,p6).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",u9(this,p7,ve))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",u9(this,p7,ve))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nL(this).querySelector("media-playback-rate-menu-button")}get rates(){return u4(this,p9)}set rates(e){e?Array.isArray(e)?u4(this,p9).value=e.join(" "):"string"==typeof e&&(u4(this,p9).value=e):u4(this,p9).value="",u9(this,p8,p6).call(this)}get mediaPlaybackRate(){return n$(this,r0.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nK(this,r0.MEDIA_PLAYBACK_RATE,e)}}p9=new WeakMap,p8=new WeakSet,p6=function(){this.defaultSlot.textContent="";let e=this.mediaPlaybackRate,t=new Set(Array.from(u4(this,p9)).map(e=>Number(e)));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=up({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(uv(this,"checked-indicator")),this.defaultSlot.append(t)}},p7=new WeakSet,ve=function(){if(!this.value)return;let e=new nA.CustomEvent(rZ.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},nA.customElements.get("media-playback-rate-menu")||nA.customElements.define("media-playback-rate-menu",u6);class u7 extends uD{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===r0.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",np("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nL(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return n$(this,r0.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nK(this,r0.MEDIA_PLAYBACK_RATE,e)}}u7.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},u7.getTooltipContentHTML=function(){return np("Playback rate")},nA.customElements.get("media-playback-rate-menu-button")||nA.customElements.define("media-playback-rate-menu-button",u7);var ce=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ct=(e,t,i)=>(ce(e,t,"read from private field"),i?i.call(e):t.get(e)),ci=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ca=(e,t,i,a)=>(ce(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cr=(e,t,i)=>(ce(e,t,"access private method"),i);class cn extends ub{constructor(){super(...arguments),ci(this,va),ci(this,vn),ci(this,vt,[]),ci(this,vi,{})}static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_RENDITION_LIST,r0.MEDIA_RENDITION_SELECTED,r0.MEDIA_RENDITION_UNAVAILABLE,r0.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(t<1?1:0)} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===r0.MEDIA_RENDITION_SELECTED&&t!==i)?(this.value=null!=i?i:"auto",cr(this,va,vr).call(this)):e===r0.MEDIA_RENDITION_LIST&&t!==i?(ca(this,vt,null==i?void 0:i.split(/\s+/).map(ne)),cr(this,va,vr).call(this)):e===r0.MEDIA_HEIGHT&&t!==i&&cr(this,va,vr).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",cr(this,vn,vs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",cr(this,vn,vs))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nL(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return ct(this,vt)}set mediaRenditionList(e){ca(this,vt,e),cr(this,va,vr).call(this)}get mediaRenditionSelected(){return nG(this,r0.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nj(this,r0.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return n$(this,r0.MEDIA_HEIGHT)}set mediaHeight(e){nK(this,r0.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}vt=new WeakMap,vi=new WeakMap,va=new WeakSet,vr=function(){if(ct(this,vi).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&ct(this,vi).mediaHeight===this.mediaHeight)return;ct(this,vi).mediaRenditionList=JSON.stringify(this.mediaRenditionList),ct(this,vi).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(e=>e.id===this.mediaRenditionSelected);for(let i of e)i.selected=i===t;this.defaultSlot.textContent="";let i=!this.mediaRenditionSelected;for(let t of e){let e=up({type:"radio",text:this.formatRendition(t,{showBitrate:this.showRenditionBitrate(t)}),value:`${t.id}`,checked:t.selected&&!i});e.prepend(uv(this,"checked-indicator")),this.defaultSlot.append(e)}let a=t&&this.showRenditionBitrate(t),r=i?t?this.formatMenuItemText(`${np("Auto")} \u2022 ${this.formatRendition(t,{showBitrate:a})}`,t):this.formatMenuItemText(`${np("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(np("Auto")),n=up({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(uv(this,"checked-indicator")),this.defaultSlot.append(n)},vn=new WeakSet,vs=function(){if(null==this.value)return;let e=new nA.CustomEvent(rZ.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},nA.customElements.get("media-rendition-menu")||nA.customElements.define("media-rendition-menu",cn);let cs=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class co extends uD{static get observedAttributes(){return[...super.observedAttributes,r0.MEDIA_RENDITION_SELECTED,r0.MEDIA_RENDITION_UNAVAILABLE,r0.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",np("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nL(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return nG(this,r0.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nj(this,r0.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return n$(this,r0.MEDIA_HEIGHT)}set mediaHeight(e){nK(this,r0.MEDIA_HEIGHT,e)}}co.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${cs}</slot>
  `},co.getTooltipContentHTML=function(){return np("Quality")},nA.customElements.get("media-rendition-menu-button")||nA.customElements.define("media-rendition-menu-button",co);var cl=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cd=(e,t,i)=>(cl(e,t,"read from private field"),i?i.call(e):t.get(e)),cu=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cc=(e,t,i,a)=>(cl(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ch=(e,t,i)=>(cl(e,t,"access private method"),i);class cm extends ub{constructor(){super(),cu(this,vl),cu(this,vu),cu(this,vh),cu(this,vp),cu(this,vb),cu(this,vo,!1),cu(this,vE,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=ch(this,vp,vv).call(this,t);(i||a)&&(cd(this,vo)?ch(this,vu,vc).call(this):ch(this,vb,vg).call(this,e))}),cu(this,vf,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=ch(this,vp,vv).call(this,t);!i&&(a&&(r||n)||ch(this,vu,vc).call(this))}),cu(this,v_,e=>{"Escape"===e.key&&ch(this,vu,vc).call(this)}),cu(this,vy,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}ch(this,vu,vc).call(this)}),this.setAttribute("noautohide",""),ch(this,vl,vd).call(this)}connectedCallback(){super.connectedCallback(),nL(this).addEventListener("contextmenu",cd(this,vE)),this.addEventListener("click",cd(this,vy))}disconnectedCallback(){super.disconnectedCallback(),nL(this).removeEventListener("contextmenu",cd(this,vE)),this.removeEventListener("click",cd(this,vy)),document.removeEventListener("mousedown",cd(this,vf)),document.removeEventListener("keydown",cd(this,v_))}}vo=new WeakMap,vl=new WeakSet,vd=function(){this.hidden=!cd(this,vo)},vu=new WeakSet,vc=function(){cc(this,vo,!1),ch(this,vl,vd).call(this)},vh=new WeakSet,vm=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&ch(e,vu,vc).call(e)})},vp=new WeakSet,vv=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},vE=new WeakMap,vb=new WeakSet,vg=function(e){e.preventDefault(),ch(this,vh,vm).call(this),cc(this,vo,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,ch(this,vl,vd).call(this),document.addEventListener("mousedown",cd(this,vf),{once:!0}),document.addEventListener("keydown",cd(this,v_),{once:!0})},vf=new WeakMap,v_=new WeakMap,vy=new WeakMap,cm.getTemplateHTML=function(e){return`
      ${ub.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},nA.customElements.get("media-context-menu")||nA.customElements.define("media-context-menu",cm);class cp extends uS{}cp.shadowRootOptions={mode:"open"},cp.getTemplateHTML=function(e){return`
    ${uS.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},nA.customElements.get("media-context-menu-item")||nA.customElements.define("media-context-menu-item",cp);var cv=e=>{throw TypeError(e)},cE=(e,t,i)=>t.has(e)||cv("Cannot "+i),cb=(e,t,i)=>(cE(e,t,"read from private field"),i?i.call(e):t.get(e)),cg=(e,t,i)=>t.has(e)?cv("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),cf=(e,t,i,a)=>(cE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),c_=(e,t,i)=>(cE(e,t,"access private method"),i),cy=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends cy{}globalThis.DocumentFragment=e}var cT,cA,ck,cw,cS,cI,cR,cC,cD,cL,cM,cO,cx,cN,cP,cU,cB,cH,cW,cV,cF,c$,cK,cq,cY,cG,cj,cQ,cZ,cz,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hE,hb,hg,hf,h_,hy,hT,hA,hk,hw,hS,hI,hR,hC,hD,hL,hM,hO,hx,hN,hP,hU,hB,hH,hW,hV,hF,h$,hK,hq,hY,hG,hj,hQ,hZ,hz,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mE,mb,mg,mf,m_,my,mT,mA,mk,mw,mS,mI,mR,mC,mD,mL,mM,mO,mx,mN,mP,mU,mB,mH,mW,mV,mF,m$,mK,mq,mY,mG,mj,mQ,mZ,mz,mX,mJ,m0,m1,m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pE,pb,pg,pf,p_,py,pT,pA,pk,pw,pS,pI,pR,pC,pD,pL,pM,pO,px,pN,pP,pU,pB,pH,pW,pV,pF,p$,pK,pq,pY,pG,pj,pQ,pZ,pz,pX,pJ,p0,p1,p2,p3,p4,p5,p9,p8,p6,p7,ve,vt,vi,va,vr,vn,vs,vo,vl,vd,vu,vc,vh,vm,vp,vv,vE,vb,vg,vf,v_,vy,vT,vA=class extends cy{},vk=class{constructor(e,t={}){cg(this,vT),cf(this,vT,null==t?void 0:t.detail)}get detail(){return cb(this,vT)}initCustomEvent(){}};vT=new WeakMap;var vw={document:{createElement:function(e,t){return new vA}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vA)},CustomEvent:vk,EventTarget:cy,HTMLElement:vA,HTMLVideoElement:class extends cy{}},vS="undefined"==typeof window||void 0===globalThis.customElements,vI=vS?vw:globalThis,vR=vS?vw.document:globalThis.document;function vC(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function vD(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function vL(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function vM(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var vO,vx,vN,vP=(e,t)=>!!e&&!!t&&(!!e.contains(t)||vP(e,t.getRootNode().host)),vU="mux.com",vB=(()=>{try{return"3.10.1"}catch{}return"UNKNOWN"})(),vH=(e,{token:t,customDomain:i=vU,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=t5(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${vM({token:t,time:s,program_time:r})}`},vW=(e,{token:t,customDomain:i=vU,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=t5(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${vM({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},vV=e=>{if(e){if([tK.LIVE,tK.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tK.LIVE}},vF={crossorigin:"crossOrigin",playsinline:"playsInline"},v$=class{constructor(e,t){cg(this,vO),cg(this,vx),cg(this,vN,[]),cf(this,vO,e),cf(this,vx,t)}[Symbol.iterator](){return cb(this,vN).values()}get length(){return cb(this,vN).length}get value(){var e;return null!=(e=cb(this,vN).join(" "))?e:""}set value(e){var t;e!==this.value&&(cf(this,vN,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return cb(this,vN)[e]}values(){return cb(this,vN).values()}keys(){return cb(this,vN).keys()}forEach(e){cb(this,vN).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||cb(this,vN).push(e)}),(""!==this.value||null!=(t=cb(this,vO))&&t.hasAttribute(`${cb(this,vx)}`))&&null!=(i=cb(this,vO))&&i.setAttribute(`${cb(this,vx)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{cb(this,vN).splice(cb(this,vN).indexOf(e),1)}),null==(t=cb(this,vO))||t.setAttribute(`${cb(this,vx)}`,`${this.value}`)}contains(e){return cb(this,vN).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};vO=new WeakMap,vx=new WeakMap,vN=new WeakMap;var vK=`[mux-player ${vB}]`;function vq(...e){console.warn(vK,...e)}function vY(...e){console.error(vK,...e)}function vG(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${ie("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),vq(i)}var vj={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},vQ={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},vZ=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),vz=[...Object.values(vj).filter(e=>vj.PLAYSINLINE!==e),...Object.values(vQ)];function vX(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var vJ=class extends vI.HTMLElement{static get observedAttributes(){return vz}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case vQ.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case vQ.VOLUME:{let e=null!=(a=vL(i))?a:1;this.media&&(this.media.volume=e);return}case vQ.PLAYBACKRATE:{let e=null!=(r=vL(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:vZ}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:vZ}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=vL(this.getAttribute(vQ.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(vQ.PLAYBACKRATE,`${e}`):this.removeAttribute(vQ.PLAYBACKRATE)}get crossOrigin(){return vX(this,vj.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(vj.CROSSORIGIN,`${e}`)}get autoplay(){return null!=vX(this,vj.AUTOPLAY)}set autoplay(e){e?this.setAttribute(vj.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(vj.AUTOPLAY)}get loop(){return null!=vX(this,vj.LOOP)}set loop(e){e?this.setAttribute(vj.LOOP,""):this.removeAttribute(vj.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=vX(this,vj.MUTED)}set defaultMuted(e){e?this.setAttribute(vj.MUTED,""):this.removeAttribute(vj.MUTED)}get playsInline(){return null!=vX(this,vj.PLAYSINLINE)}set playsInline(e){vY("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(vj.PRELOAD,e):this.removeAttribute(vj.PRELOAD)}},v0=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,v1=new WeakMap,v2=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=v1.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=v1.get(this.element);e&&e.delete(this.type)}}static for(t){v1.has(t.element)||v1.set(t.element,new Map);let i=t.attributeName.slice(2),a=v1.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},v3=new Map,v4=new WeakMap,v5=new WeakMap,v9=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(v3.has(this.stringsKey))return v3.get(this.stringsKey);{let e=vR.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),v3.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(v4.get(e)!==i){v4.set(e,i);let t=new dH(i,this.values,this.processor);v5.set(e,t),e instanceof dG?e.replace(...t.children):e.appendChild(t);return}let a=v5.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},v8={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof dY&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof dY){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof dY&&r.attributeName.startsWith("on")&&(v2.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof dG&&(r.replace(""),1)||n instanceof v9&&r instanceof dG&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof dG&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof dY){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function v6(e,...t){return new v9(e,t,v8)}var v7=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},Ee=e=>v6`
  <style>
    ${v7(e)}
    ${v0}
  </style>
  ${Ea(e)}
`,Et=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===vV(e.streamType)&&(t+=" noarrowleft noarrowright"),t},Ei=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),Ea=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,p,E,b,g,f,_,y,T,A,k,w,S,I,R,C,D,L,M,O,x,N,P,U,B,H,W;let V;return v6`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${Et(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(tK.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    nomutedpref="${e.nomutedpref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(W={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor},V="",Object.entries(W).forEach(([e,t])=>{null!=t&&(V+=`${vC(e)}: ${t}; `)}),r=V?V.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    videotitle="${null!=(h=e.videoTitle)&&h}"
    proudlydisplaymuxbadge="${null!=(m=e.proudlyDisplayMuxBadge)&&m}"
    exportparts="${Ei}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(p=e.noHotKeys)&&p}"
      target-live-window="${null!=(E=e.targetLiveWindow)&&E}"
      stream-type="${null!=(b=vV(e.streamType))&&b}"
      crossorigin="${null!=(g=e.crossOrigin)?g:""}"
      playsinline
      autoplay="${null!=(f=e.autoplay)&&f}"
      muted="${null!=(_=e.muted)&&_}"
      loop="${null!=(y=e.loop)&&y}"
      preload="${null!=(T=e.preload)&&T}"
      debug="${null!=(A=e.debug)&&A}"
      prefer-cmcd="${null!=(k=e.preferCmcd)&&k}"
      disable-tracking="${null!=(w=e.disableTracking)&&w}"
      disable-cookies="${null!=(S=e.disableCookies)&&S}"
      prefer-playback="${null!=(I=e.preferPlayback)&&I}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(R=e.beaconCollectionDomain)&&R}"
      player-init-time="${null!=(C=e.playerInitTime)&&C}"
      player-software-name="${null!=(D=e.playerSoftwareName)&&D}"
      player-software-version="${null!=(L=e.playerSoftwareVersion)&&L}"
      env-key="${null!=(M=e.envKey)&&M}"
      custom-domain="${null!=(O=e.customDomain)&&O}"
      src="${e.src?e.src:!!e.playbackId&&i5(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&i5(e)}"
      cast-receiver="${null!=(x=e.castReceiver)&&x}"
      drm-token="${null!=(P=null==(N=e.tokens)?void 0:N.drm)&&P}"
      exportparts="video"
      disable-pseudo-ended="${null!=(U=e.disablePseudoEnded)&&U}"
      max-auto-resolution="${null!=(B=e.maxAutoResolution)&&B}"
    >
      ${e.storyboard?v6`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:v6``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!e.poster&&e.poster}"
        placeholdersrc="${null!=(H=e.placeholder)&&H}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Er=e=>e.charAt(0).toUpperCase()+e.slice(1),En=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Er(null!=(i=e.errorCategory)?i:"video"),n=tH(null!=(a=e.errorCategory)?a:tU.VIDEO);if(e.muxCode===tB.NETWORK_OFFLINE)return ie("Your device appears to be offline",t);if(e.muxCode===tB.NETWORK_TOKEN_EXPIRED)return ie("{category} URL has expired",t).format({category:r});if([tB.NETWORK_TOKEN_SUB_MISMATCH,tB.NETWORK_TOKEN_AUD_MISMATCH,tB.NETWORK_TOKEN_AUD_MISSING,tB.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return ie("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===tB.NETWORK_TOKEN_MISSING)return ie("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===tB.NETWORK_NOT_FOUND)return ie("{category} does not exist",t).format({category:r});if(e.muxCode===tB.NETWORK_NOT_READY){let i="live"===e.streamType?"Live stream":"Video";return ie("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===tW.MEDIA_ERR_NETWORK)return ie("Network Error",t);if(e.code===tW.MEDIA_ERR_DECODE)return ie("Media Error",t);if(e.code===tW.MEDIA_ERR_SRC_NOT_SUPPORTED)return ie("Source Not Supported",t)}return ie("Error",t)},Es=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Er(null!=(i=e.errorCategory)?i:"video"),n=tH(null!=(a=e.errorCategory)?a:tU.VIDEO);return e.muxCode===tB.NETWORK_OFFLINE?ie("Check your internet connection and try reloading this video.",t):e.muxCode===tB.NETWORK_TOKEN_EXPIRED?ie("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===tB.NETWORK_TOKEN_SUB_MISMATCH?ie("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===tB.NETWORK_TOKEN_MALFORMED?ie("{category} URL is formatted incorrectly",t).format({category:r}):[tB.NETWORK_TOKEN_AUD_MISMATCH,tB.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?ie("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[tB.NETWORK_TOKEN_MISSING,tB.NETWORK_INVALID_URL].includes(e.muxCode)?ie("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===tB.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===tW.MEDIA_ERR_NETWORK||e.code===tW.MEDIA_ERR_DECODE||(e.code,tW.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},Eo=(e,t=!1)=>({title:En(e,t).toString(),message:Es(e,t).toString()}),El=e=>{if(e.muxCode){if(e.muxCode===tB.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===tB.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([tB.NETWORK_TOKEN_AUD_MISMATCH,tB.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===tB.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===tB.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===tB.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===tB.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===tW.MEDIA_ERR_NETWORK)return"";if(e.code===tW.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===tW.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},Ed=(e,t)=>{let i=El(e);return{message:e.message,context:e.context,file:i}},Eu=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,Ec=vR.createElement("template");"innerHTML"in Ec&&(Ec.innerHTML=Eu);var Eh,Em,Ep=class extends ur{};Ep.template=null==(Em=null==(Eh=Ec.content)?void 0:Eh.children)?void 0:Em[0],vI.customElements.get("media-theme-gerwig")||vI.customElements.define("media-theme-gerwig",Ep);var Ev={SRC:"src",POSTER:"poster"},EE={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},Eb=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],Eg=o8.formatErrorMessage;function Ef(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}o8.formatErrorMessage=e=>{var t,i;if(e instanceof tW){let a=Eo(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${ie("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return Eg(e)};var E_,Ey,ET,EA,Ek,Ew,ES,EI,ER,EC,ED,EL,EM,EO,Ex,EN=Object.values(a3),EP=Object.values(Ev),EU=Object.values(EE),EB="mux-player",EH={isDialogOpen:!1},EW={redundant_streams:!0},EV=class extends vJ{constructor(){super(),cg(this,ES),cg(this,E_),cg(this,Ey,!1),cg(this,ET,{}),cg(this,EA,!0),cg(this,Ek,new v$(this,"hotkeys")),cg(this,Ew,{...EH,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&c_(this,ES,EC).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(vP(this,vR.activeElement)||e.preventDefault())}}),cf(this,E_,i3()),this.attachShadow({mode:"open"}),c_(this,ES,ER).call(this),this.isConnected&&c_(this,ES,EI).call(this)}static get NAME(){return EB}static get VERSION(){return vB}static get observedAttributes(){var e;return[...null!=(e=vJ.observedAttributes)?e:[],...EP,...EN,...EU]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=Ef(this))}attributeChangedCallback(e,t,i){var a;switch(c_(this,ES,EI).call(this),super.attributeChangedCallback(e,t,i),e){case EE.HOTKEYS:cb(this,Ek).value=i;break;case EE.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&vq(ie("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case EE.THUMBNAIL_TOKEN:if(i){let e=t5(i);if(e){let{aud:t}=e,i=iw.THUMBNAIL;t!==i&&vq(ie("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case EE.STORYBOARD_TOKEN:if(i){let e=t5(i);if(e){let{aud:t}=e,i=iw.STORYBOARD;t!==i&&vq(ie("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case EE.DRM_TOKEN:if(i){let e=t5(i);if(e){let{aud:t}=e,i=iw.DRM;t!==i&&vq(ie("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case a3.PLAYBACK_ID:null!=i&&i.includes("?token")&&vY(ie("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case a3.STREAM_TYPE:i&&![tK.LIVE,tK.ON_DEMAND,tK.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:vG({file:"invalid-stream-type.md",message:ie("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tK.LIVE?null==this.getAttribute(EE.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break;case EE.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=vR.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}}[a3.PLAYBACK_ID,Ev.SRC,EE.PLAYBACK_TOKEN].includes(e)&&t!==i&&cf(this,Ew,{...cb(this,Ew),...EH}),c_(this,ES,ED).call(this,{[null!=(a=vF[e])?a:vD(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(r0.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new vI.CustomEvent(rZ.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(r1.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(r0.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new vI.CustomEvent(rZ.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(r1.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(a3.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tG.includes(e)?this.setAttribute(a3.PREFER_CMCD,e):vq(`Invalid value for preferCmcd. Must be one of ${tG.join()}`):this.removeAttribute(a3.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(r0.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(r0.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(EE.THEME))?e:"gerwig"}set theme(e){this.setAttribute(EE.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(Eb.includes(i))continue;let a=e.getAttribute(i);t[vD(i)]=""===a||a}return t}set themeProps(e){var t,i;c_(this,ES,EI).call(this);let a={...this.themeProps,...e};for(let r in a){if(Eb.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(vC(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(vC(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(a3.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(a3.PLAYBACK_ID,e):this.removeAttribute(a3.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=EF(this,Ev.SRC))?e:void 0:null!=(t=this.getAttribute(Ev.SRC))?t:void 0}set src(e){e?this.setAttribute(Ev.SRC,e):this.removeAttribute(Ev.SRC)}get poster(){var e;let t=this.getAttribute(Ev.POSTER);if(null!=t)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){vq("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return vH(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||""===e?this.setAttribute(Ev.POSTER,e):this.removeAttribute(Ev.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(EE.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(EE.STORYBOARD_SRC,e):this.removeAttribute(EE.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tK.LIVE,tK.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:vW(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(EE.AUDIO)}set audio(e){if(!e){this.removeAttribute(EE.AUDIO);return}this.setAttribute(EE.AUDIO,"")}get hotkeys(){return cb(this,Ek)}get nohotkeys(){return this.hasAttribute(EE.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(EE.NOHOTKEYS);return}this.setAttribute(EE.NOHOTKEYS,"")}get thumbnailTime(){return vL(this.getAttribute(EE.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(EE.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(EE.VIDEO_TITLE))?e:this.getAttribute(EE.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(EE.VIDEO_TITLE,e):this.removeAttribute(EE.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=EF(this,EE.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(EE.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(EE.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vI.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(EE.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(EE.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vI.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(EE.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(EE.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vI.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(EE.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(EE.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(EE.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(EE.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(EE.PLAYBACK_RATES))return this.getAttribute(EE.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(EE.PLAYBACK_RATES);return}this.setAttribute(EE.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=vL(this.getAttribute(EE.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(EE.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=vL(this.getAttribute(EE.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(EE.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(EE.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(EE.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(EE.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return vL(this.getAttribute(EE.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(EE.DEFAULT_DURATION):this.setAttribute(EE.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(a3.PLAYER_INIT_TIME)?vL(this.getAttribute(a3.PLAYER_INIT_TIME)):cb(this,E_)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(a3.PLAYER_INIT_TIME):this.setAttribute(a3.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(a3.PLAYER_SOFTWARE_NAME))?e:EB}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(a3.PLAYER_SOFTWARE_VERSION))?e:vB}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(a3.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(a3.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(a3.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(a3.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(a3.MAX_RESOLUTION,e):this.removeAttribute(a3.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(a3.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(a3.MIN_RESOLUTION,e):this.removeAttribute(a3.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(a3.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(a3.MAX_AUTO_RESOLUTION):this.setAttribute(a3.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(a3.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(a3.RENDITION_ORDER,e):this.removeAttribute(a3.RENDITION_ORDER))}get programStartTime(){return vL(this.getAttribute(a3.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(a3.PROGRAM_START_TIME):this.setAttribute(a3.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return vL(this.getAttribute(a3.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(a3.PROGRAM_END_TIME):this.setAttribute(a3.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return vL(this.getAttribute(a3.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(a3.ASSET_START_TIME):this.setAttribute(a3.ASSET_START_TIME,`${e}`)}get assetEndTime(){return vL(this.getAttribute(a3.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(a3.ASSET_END_TIME):this.setAttribute(a3.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(EE.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(EE.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):EW}set extraSourceParams(e){null==e?this.removeAttribute(EE.EXTRA_SOURCE_PARAMS):this.setAttribute(EE.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(a3.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(a3.CUSTOM_DOMAIN,e):this.removeAttribute(a3.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=EF(this,a3.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(a3.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(EE.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(EE.NO_VOLUME_PREF,""):this.removeAttribute(EE.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(EE.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(EE.NO_MUTED_PREF,""):this.removeAttribute(EE.NO_MUTED_PREF)}get debug(){return null!=EF(this,a3.DEBUG)}set debug(e){e?this.setAttribute(a3.DEBUG,""):this.removeAttribute(a3.DEBUG)}get disableTracking(){return null!=EF(this,a3.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(a3.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=EF(this,a3.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(a3.DISABLE_COOKIES,""):this.removeAttribute(a3.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(a3.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tK.UNKNOWN}set streamType(e){this.setAttribute(a3.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(EE.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(EE.DEFAULT_STREAM_TYPE))?i:tK.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(EE.DEFAULT_STREAM_TYPE,e):this.removeAttribute(EE.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(EE.TARGET_LIVE_WINDOW)?+this.getAttribute(EE.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(EE.TARGET_LIVE_WINDOW):this.setAttribute(EE.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return vL(EF(this,a3.START_TIME))}set startTime(e){this.setAttribute(a3.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(a3.PREFER_PLAYBACK);if(e===tq.MSE||e===tq.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tq.MSE||e===tq.NATIVE?this.setAttribute(a3.PREFER_PLAYBACK,e):this.removeAttribute(a3.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(c_(this,ES,EI).call(this),!this.media){vY("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...Ef(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(c_(this,ES,EI).call(this),!this.media){vY("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(c_(this,ES,EI).call(this),!this.media){vY("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;if(c_(this,ES,EI).call(this),!this.media){vY("underlying media element missing when trying to addChapters. chapters will not be added.");return}return null==(t=this.media)?void 0:t.addChapters(e)}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(EE.PLAYBACK_TOKEN),t=this.getAttribute(EE.DRM_TOKEN),i=this.getAttribute(EE.THUMBNAIL_TOKEN),a=this.getAttribute(EE.STORYBOARD_TOKEN);return{...cb(this,ET),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){cf(this,ET,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(EE.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(EE.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(EE.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(EE.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(EE.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(EE.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(EE.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(EE.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return id(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(EE.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(EE.CAST_RECEIVER,e):this.removeAttribute(EE.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media){vY("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(EE.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(EE.NO_TOOLTIPS);return}this.setAttribute(EE.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(EE.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(EE.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(EE.PROUDLY_DISPLAY_MUX_BADGE)}};function EF(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}E_=new WeakMap,Ey=new WeakMap,ET=new WeakMap,EA=new WeakMap,Ek=new WeakMap,Ew=new WeakMap,ES=new WeakSet,EI=function(){var e,t,i,a;if(!cb(this,Ey)){cf(this,Ey,!0),c_(this,ES,ED).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof vI.HTMLElement))throw""}catch{vY("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{vY("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof s0))throw""}catch{vY("<media-controller> failed to upgrade!")}c_(this,ES,EL).call(this),c_(this,ES,EM).call(this),c_(this,ES,EO).call(this),cf(this,EA,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(n5.USER_INACTIVE))||t),c_(this,ES,Ex).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>c_(this,ES,ED).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>c_(this,ES,ED).call(this))}},ER=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},EC=function(e){Object.assign(cb(this,Ew),e),c_(this,ES,ED).call(this)},ED=function(e={}){var t,i,a,r;let n;(function(e,t){e.renderInto(t)})(Ee((t={...cb(this,Ew),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(EE.STORYBOARD_SRC),fullscreenElement:this.getAttribute(EE.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=vI.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(EE.NOHOTKEYS),hotKeys:this.getAttribute(EE.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(a3.TARGET_LIVE_WINDOW),streamType:vV(this.getAttribute(a3.STREAM_TYPE)),primaryColor:this.getAttribute(EE.PRIMARY_COLOR),secondaryColor:this.getAttribute(EE.SECONDARY_COLOR),accentColor:this.getAttribute(EE.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(n=null==(r=this.mediaController)?void 0:r.querySelector("media-time-display"))&&"none"===getComputedStyle(n).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(EE.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(a3.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(EE.TITLE),videoTitle:null!=(a=this.getAttribute(EE.VIDEO_TITLE))?a:this.getAttribute(EE.TITLE),novolumepref:this.hasAttribute(EE.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(EE.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(EE.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(EE.DISABLE_PSEUDO_ENDED),...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},EL=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(Eb.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},EM=function(){this.addEventListener("error",e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof tW)){let{message:e,code:t}=null!=i?i:{};i=new tW(e,t)}if(!(null!=i&&i.fatal)){vq(i),i.data&&vq(`${i.name} data:`,i.data);return}let a=Ed(i,!1);a.message&&vG(a),vY(i),i.data&&vY(`${i.name} data:`,i.data),c_(this,ES,EC).call(this,{isDialogOpen:!0})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tW))return e;let r=Ed(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},EO=function(){var e,t,i,a;let r=()=>c_(this,ES,ED).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},Ex=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tK.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tK.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(n5.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,cb(this,EA))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(n5.USER_INACTIVE))||t;cb(this,EA)!==a&&(cf(this,EA,a),n(i,cb(this,EA)))})};var E$=e=>{throw TypeError(e)},EK=(e,t,i)=>t.has(e)||E$("Cannot "+i),Eq=(e,t,i)=>(EK(e,t,"read from private field"),i?i.call(e):t.get(e)),EY=(e,t,i)=>t.has(e)?E$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),EG=(e,t,i,a)=>(EK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ej=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends Ej{}globalThis.DocumentFragment=e}var EQ,EZ=class extends Ej{},Ez=class{constructor(e,t={}){EY(this,EQ),EG(this,EQ,null==t?void 0:t.detail)}get detail(){return Eq(this,EQ)}initCustomEvent(){}};EQ=new WeakMap;var EX={document:{createElement:function(e,t){return new EZ}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(EZ)},CustomEvent:Ez,EventTarget:Ej,HTMLElement:EZ,HTMLVideoElement:class extends Ej{}},EJ="undefined"==typeof window||void 0===globalThis.customElements,E0=EJ?EX:globalThis;EJ&&EX.document,E0.customElements.get("mux-player")||(E0.customElements.define("mux-player",EV),E0.MuxPlayerElement=EV);var E1=parseInt(l.version)>=19,E2={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},E3=e=>null==e,E4=(e,t)=>!E3(t)&&e in t,E5=e=>e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase())),E9=(e,t)=>{if(!(!E1&&"boolean"==typeof t&&!t)){if(E4(e,E2))return E2[e];if(void 0!==t)return/[A-Z]/.test(e)?E5(e):e}},E8=(e,t)=>E1||"boolean"!=typeof e?e:"",E6=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{ref:t,...i}=e;return Object.entries(i).reduce((e,t)=>{let[i,a]=t,r=E9(i,a);if(!r)return e;let n=E8(a,i);return e[r]=n,e},{})};function E7(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var be=Object.prototype.hasOwnProperty,bt=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!be.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},bi=(e,t,i)=>!bt(t,e[i]),ba=(e,t,i)=>{e[i]=t},br=function(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:ba,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:bi;return(0,l.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t])},bn=(()=>{try{return"3.10.1"}catch(e){}return"UNKNOWN"})(),bs=(e,t,i)=>(0,l.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),bo=l.forwardRef((e,t)=>{let{children:i,...a}=e;return l.createElement("mux-player",{suppressHydrationWarning:!0,...E6(a),ref:t},i)}),bl=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:E,onPlaying:b,onTimeUpdate:g,onPause:f,onSeeking:_,onSeeked:y,onStalled:T,onSuspend:A,onEnded:k,onError:w,onCuePointChange:S,onChapterChange:I,metadata:R,tokens:C,paused:D,playbackId:L,playbackRates:M,currentTime:O,themeProps:x,extraSourceParams:N,castCustomData:P,_hlsConfig:U,...B}=t;return br("tokens",C,e),br("playbackId",L,e),br("playbackRates",M,e),br("metadata",R,e),br("extraSourceParams",N,e),br("_hlsConfig",U,e),br("themeProps",x,e),br("castCustomData",P,e),br("paused",D,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&bi(e,t,i)),br("currentTime",O,e,(e,t)=>{null!=t&&(e.currentTime=t)}),bs("abort",e,i),bs("canplay",e,a),bs("canplaythrough",e,r),bs("emptied",e,n),bs("loadstart",e,s),bs("loadeddata",e,o),bs("loadedmetadata",e,l),bs("progress",e,d),bs("durationchange",e,u),bs("volumechange",e,c),bs("ratechange",e,h),bs("resize",e,m),bs("waiting",e,p),bs("play",e,E),bs("playing",e,b),bs("timeupdate",e,g),bs("pause",e,f),bs("seeking",e,_),bs("seeked",e,y),bs("stalled",e,T),bs("suspend",e,A),bs("ended",e,k),bs("error",e,w),bs("cuepointchange",e,S),bs("chapterchange",e,I),[B]},bd=l.forwardRef((e,t)=>{var i;let a=(0,l.useRef)(null),r=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return l.useCallback(function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return e=>{let i=!1,a=t.map(t=>{let a=E7(t,e);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let e=0;e<a.length;e++){let i=a[e];"function"==typeof i?i():E7(t[e],null)}}}}(...t),t)}(a,t),[n]=bl(a,e),[s]=(0,l.useState)(null!=(i=e.playerInitTime)?i:i3());return l.createElement(bo,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:bn,playerInitTime:s,...n})});function bu(e){let t,i;let a=(0,o.c)(3),{playbackId:r}=e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"absolute",inset:0},a[0]=t):t=a[0],a[1]!==r?(i=(0,s.jsx)(bd,{theme:"sutro",playbackId:r,autoPlay:!1,loop:!1,style:t}),a[1]=r,a[2]=i):i=a[2],i}}}]);