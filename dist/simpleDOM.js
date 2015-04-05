!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.simpleDOM=e():t.simpleDOM=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r={};r.nodes=n(1),r.parse=n(2),t.exports=r},function(t,e,n){function r(t,e,n,r){t.parentNode=r,r.childNodes.push(t)}function o(t){var e=this;e.type="text",e.text=t,e.parentNode=null}function a(t){var e=this;e.type="comment",e.text=t,e.parentNode=null}var i={},u=n(3),s=n(4).cycle,c=u.createClass({childNodes:null,init:function(){this.childNodes=[]},appendChild:function(t){var e=this;return u.instanceOf(t,f)?(s(t.childNodes,r,e),t.childNodes.length=0):(t.parentNode&&t.parentNode.removeChild(t),t.parentNode=e,e.childNodes.push(t)),e},removeChild:function(t){var e=this;return t.parentNode===e&&(e.childNodes.splice(e.childNodes.indexOf(t),1),t.parentNode=null),e}}),f=u.createClass(c,{type:"fragment"});i.Fragment=f;var l=u.createClass(c,{type:"tag",parentNode:null,init:function(t,e){var n=this;n.name=t,n.attributes=e||{}}});i.Tag=l,i.Text=o,i.Comment=a,t.exports=i},function(t,e,n){function r(t){var e=this,n=new _.Fragment,r=!1;e.treeStack=[n],e.result=n,e.state=g,e.buffer="",e.textBuffer="",e.tagName="",e.attributeName="",e.attributeValueSeparator="",e.attributeValue="",e.attributes=null,e.commentBuffer="",e.commentToken="",t&&t.isXML&&(r=!0),e.isXMLMode=r}function o(t){return L.test(t)}function a(t){return P.test(t)}function i(t){return F.test(t)}function u(t){return-1!==X.indexOf(t)}function s(t,e){t.buffer+=e}function c(t){t.textBuffer=t.buffer,t.state=g}function f(t,e){var n,r=t.attributes;r||(t.attributes=r={}),r[t.attributeName]=e!==n?e:t.attributeValue}function l(t){var e,n;t.textBuffer&&(e=t.treeStack,n=new _.Text(t.textBuffer),e[e.length-1].appendChild(n),t.textBuffer=""),t.buffer=""}function p(t,e){var n,r=t.treeStack,o=t.tagName;l(t),n=new _.Tag(o,t.attributes),r[r.length-1].appendChild(n),e||!t.isXMLMode&&u(o)||r.push(n),t.state=g}function d(t,e,n,r){r.appendChild(t)}function m(t){var e,n,r=t.tagName,o=t.treeStack,a=!1;for(l(t);1!==o.length&&(e=o.pop()).name!==r;)a||(a=!0,n=[]),n.push(e);a&&v(n,d,e),t.state=g}function h(t){var e,n=t.treeStack;l(t),e=new _.Comment(t.commentBuffer),n[n.length-1].appendChild(e),t.state=g}function b(t){""!==t.buffer&&(t.textBuffer=t.buffer,l(t))}var _=n(1),v=n(4).reversiveCycle,y=0,g=y++,x=y++,N=y++,C=y++,k=y++,O=y++,w=y++,S=y++,j=y++,A=y++,I=y++,B=y++,K=y++,M=y++,T=y++,V=y++,D=y++;r.prototype.destructor=function(){var t=this;t.treeStack=null,t.result=null,t.state=null,t.buffer=null,t.textBuffer=null,t.tagName=null,t.attributeName=null,t.attributeValueSeparator=null,t.attributeValue=null,t.attributes=null,t.commentBuffer=null,t.commentToken=null};var L=/[A-Za-z]/,P=/\w|-/,F=/\s/,X=["img","input","br","hr","link","meta","source","area","embed","param","base","col","command"],E=o,z=a,G=[];G[g]=function(t,e){switch(s(t,e),e){case"<":t.state=x;break;default:t.textBuffer+=e}},G[x]=function(t,e){if(s(t,e),o(e))t.state=N,t.tagName=e,t.attributes=null;else switch(e){case"/":t.state=A;break;case"!":t.state=K;break;default:c(t)}},G[N]=function(t,e){if(s(t,e),a(e))t.tagName+=e;else if(i(e))t.state=C;else switch(e){case"/":t.state=k;break;case">":t.state=g,p(t);break;default:c(t)}},G[C]=function(t,e){if(s(t,e),!i(e))if(E(e))t.state=O,t.attributeName=e;else switch(e){case"/":t.state=k;break;case">":p(t);break;default:c(t)}},G[O]=function(t,e){switch(s(t,e),e){case"=":t.state=w;break;case">":f(t,""),p(t);break;case"/":f(t,""),t.state=k;break;default:z(e)?t.attributeName+=e:i(e)?(f(t,""),t.state=C):c(t)}},G[w]=function(t,e){switch(s(t,e),e){case"'":case'"':t.state=S,t.attributeValueSeparator=e,t.attributeValue="";break;default:c(t)}},G[S]=function(t,e){s(t,e),e===t.attributeValueSeparator?(t.state=j,f(t)):t.attributeValue+=e},G[j]=function(t,e){switch(s(t,e),e){case"/":t.state=k;break;case">":p(t),c(t);break;default:i(e)?t.state=C:c(t)}},G[k]=function(t,e){">"===e?p(t,!0):(s(t,e),c(t))},G[A]=function(t,e){s(t,e),o(e)?(t.tagName=e,t.state=I):c(t)},G[I]=function(t,e){s(t,e),o(e)?t.tagName+=e:">"===e?m(t):i(e)?t.state=B:c(t)},G[B]=function(t,e){s(t,e),">"===e?m(t):i(e)||c(t)},G[K]=function(t,e){s(t,e),"-"===e?t.state=M:c(t)},G[M]=function(t,e){s(t,e),"-"===e?(t.state=T,t.commentBuffer=""):c(t)},G[T]=function(t,e){s(t,e),"-"===e?(t.state=V,t.commentToken=e):t.commentBuffer+=e},G[V]=function(t,e){s(t,e),"-"===e?(t.state=D,t.commentToken+=e):(t.state=T,t.commentBuffer+=t.commentToken+e)},G[D]=function(t,e){">"===e?h(t):(s(t,e),t.state=T,t.commentBuffer+=t.commentToken+e)},t.exports=function(t){for(var e,n=new r,o=0,a=t.length;a>o;o+=1)G[n.state](n,t.charAt(o));return b(n),e=n.result,n.destructor(),e}},function(t){function e(t,e,n){for(var r in t)!t.hasOwnProperty(r)||n&&!n(r)||(e[r]=t[r]);return e}function n(t){switch(t){case"init":case"destructor":case"__Constructor":case"construct":return!1}return!0}function r(t,e){for(var n=0,r=t.length;r>n;n+=1)e.push(t[n]);return e}function o(t){return 0!==t.length}function a(){function t(){var t=this,e=t.__Constructor.__inits;if(e)for(var n=0,r=e.length;r>n;n+=1)e[n].apply(t,arguments);return t.construct&&t.construct.apply(t,arguments),t}return t.__cmId=h,t.prototype.__Constructor=t,h+=1,t}function i(){var t=this,e=t.__Constructor.__destructors;if(e)for(var n=e.length;n--;)e[n].apply(t,arguments)}function u(t,e,n){var r=this;r.parent=t,r.settings=e,r.notAutoDestruct=n||!1}function s(t){var e=this;e.base=t,e.__mixinId=h,h+=1}function c(t){return"function"==typeof t}function f(t){return t instanceof u}function l(t){return t instanceof s}function p(t){return!c(t)&&!f(t)&&!l(t)}function d(){function t(t,e){t.__classesIds&&r(t.__classesIds,y),t.__cmId&&y.push(t.__cmId),t.__inits&&r(t.__inits,x),t.prototype.init&&e&&!e.needInit&&x.pop(),t.__mixinsIds&&r(t.__mixinsIds,g),t.__destructors&&r(t.__destructors,N),v=t.prototype}var u,s,d=arguments;d.length>0&&(s=d[d.length-1],p(s)&&(u=s));var m,h,b,_,v=null,y=[],g=[],x=[],N=[];for(h=0,b=d.length;b>h;h+=1)_=d[h],c(_)?t(_):f(_)?(t(_.parent,_.settings),_.notAutoDestruct||_.destructor()):l(_)&&(g.push(_.__mixinId),v=_.base),v&&(m||(m={}),e(v,m,n),v=null);m&&(u&&e(u,m),u=m);var C=a();u&&(C.prototype=u);var k=C.prototype;return k.__Constructor=C,y.push(C.__cmId),k.destructor&&N.push(k.destructor),k.init&&x.push(k.init),C.__classesIds=y,o(g)&&(C.__mixinsIds=g),o(x)&&(C.__inits=x),o(N)&&(C.__destructors=N),k.destructor=i,C}var m,h=1;if(Array.isArray)m=Array.isArray;else{var b=Object.prototype.toString;m=function(t){return"[object Array]"===b.call(t)}}u.prototype.destructor=function(){var t=this;t.parent=null,t.settings=null},s.prototype.destructor=function(){var t=this;t.base=null,t.__mixinId=null};var _={createClassConstructor:a,ParentConfigurator:u,configureParent:function(t,e,n){return new u(t,e,n)},Mixin:s,createMixin:function(t){return new s(t)},createClass:d,instanceOf:function(t,e){var n=t.__Constructor;if(n){var r=n.__classesIds;if(r)return-1!==r.indexOf(e.__cmId)}return!1},hasMixin:function(t,e){var n=t.__Constructor;if(n){var r=n.__mixinsIds;if(r)return-1!==r.indexOf(e.__mixinId)}return!1},callConstruct:function(t,e,n){var r=e.prototype.construct;return r&&(m(n)?r.apply(t,n):r.call(t,n)),t}};t.exports=_},function(t,e,n){var r={};r.getGlobal=n(5),r.typesDetection=n(6),r.getObjectKeys=n(7),r.getObjectLength=n(8),r.cycleKeys=n(9),r.cycle=n(10),r.reversiveCycle=n(11),r.getObjectSafely=n(12),r.onload=n(13),t.exports=r},function(t,e){(function(e){var n=window||e;t.exports=function(){return n}}).call(e,function(){return this}())},function(t){function e(t){return function(e){return r.call(e)==="[object "+t+"]"}}var n={},r=Object.prototype.toString;n.isArray=Array.isArray||function(t){return"[object Array]"===r.call(t)},n.isNodesCollection=function(t){return document&&(t instanceof HTMLCollection||t instanceof NodeList)};for(var o=["Object","Arguments","Function","String","Number","Date","RegExp","Error","Boolean"],a=o.length;a--;)n["is"+o[a]]=e(o[a]);n.isCollection=function(t){return n.isArray(t)||n.isNodesCollection(t)||n.isArguments(t)},t.exports=n},function(t){var e;e=Object.keys?function(t){return Object.keys(t)}:function(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push(e);return n},t.exports=e},function(t,e,n){var r=n(7);t.exports=function(t){return r(t).length}},function(t){function e(){}function n(){this.result=null}n.prototype=new e,t.exports={StopKey:e,stopKey:new e,StopObject:n,stopObject:new n}},function(t,e,n){var r=n(5),o=n(9),a=n(6),i=n(7);t.exports=function(t,e,n,u,s,c){var f,l,p,d,m,h;if(t)if(u=u||r(),s=s||1,f=c||0,a.isString(t))for(l=t.length;l>f&&(d=e.call(u,t.charAt(f),f,t,n),!(d instanceof o.StopKey));f+=s);else if(a.isCollection(t))for(l=t.length;l>f&&(d=e.call(u,t[f],f,t,n),!(d instanceof o.StopKey));f+=s);else if(a.isObject(t))if(0===f&&1===s){for(p in t)if(t.hasOwnProperty(p)&&(d=e.call(u,t[p],p,t,n),d instanceof o.StopKey))break}else for(m=i(t),l=m.length;l>f&&(p=m[f],d=e.call(u,t[p],p,t,n),!(d instanceof o.StopKey));f+=s);return d===o.stopObject?(h=d.result,d.result=null,h):t}},function(t,e,n){var r=n(5),o=n(9),a=n(6),i=n(7);t.exports=function(t,e,n,u,s,c){var f,l,p,d,m;if(t)if(u=u||r(),s=s||1,a.isString(t))for(f=c||t.length-1;f>=0&&(p=e.call(u,t.charAt(f),f,t,n),!(p instanceof o.StopKey));f-=s);else if(a.isCollection(t))for(f=c||t.length-1;f>=0&&(p=e.call(u,t[f],f,t,n),!(p instanceof o.StopKey));f-=s);else if(a.isObject(t))for(d=i(t),f=c||d.length-1;f>=0&&(l=d[f],p=e.call(u,t[l],l,t,n),!(p instanceof o.StopKey));f-=s);return p===o.stopObject?(m=p.result,p.result=null,m):t}},function(t,e,n){var r=n(6),o=n(9),a=n(10);t.exports=function(t){return a(arguments,function(e){if(t.hasOwnProperty(e)){if(!r.isObject(t[e]))return t=null,o.stopKey}else t[e]={};t=t[e]},null,null,1,1),t}},function(t){t.exports=function(t){t()}}])});