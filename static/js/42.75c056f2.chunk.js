(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[42],{751:function(e,t,r){"use strict";r.d(t,"a",(function(){return E})),r.d(t,"b",(function(){return x}));var i=r(652),a=r.n(i),n=r(43),o=r(646),l=r(654),c=r(653),f=r(691),s=r(645),m=r(659),u=r(747),y=r(733),v=r(859),p=r(801),b=r(737),h=r(761),d=s.a.getLogger("esri.symbols.cim.cimAnalyzer");function g(e){switch(e){case"Butt":return 0;case"Square":return 2;case"Round":default:return 1}}function O(e){switch(e){case"Bevel":return 0;case"Miter":return 2;case"Round":default:return 1}}function S(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function k(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function N(e,t,r,i){var a;e[t]?a=e[t]:(a={},e[t]=a),a[r]=i}function j(e){var t=e.markerPlacement;return t&&t.angleToLine?1:0}function x(e,t,r,i){return C.apply(this,arguments)}function C(){return(C=Object(c.a)(a.a.mark((function e(t,r,i,n){var l,c,f,s,m,u,v,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=null!=i?i:[],t){e.next=3;break}return e.abrupt("return",l);case 3:if(s={},"CIMSymbolReference"===t.type){e.next=6;break}return e.abrupt("return",(d.error("Expect cim type to be 'CIMSymbolReference'"),l));case 6:if(c=t.symbol,!(f=t.primitiveOverrides)){e.next=12;break}m=[],u=Object(o.a)(f);try{for(p=function(){var e=v.value,t=e.valueExpressionInfo;if(t&&r){var i=t.expression,a=Object(y.d)(i,r.spatialReference,r.fields).then((function(t){t&&N(s,e.primitiveName,e.propertyName,t)}));m.push(a)}else null!=e.value&&N(s,e.primitiveName,e.propertyName,e.value)},u.s();!(v=u.n()).done;)p()}catch(a){u.e(a)}finally{u.f()}return e.next=12,Promise.all(m);case 12:switch(c.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":M(c,f,s,r,l,n)}return e.abrupt("return",l);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,r,i,a,n){if(e){var o=e.symbolLayers;if(o){var l,c=v.a.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(l=1);for(var f=o.length;f--;){var s=o[f];if(s&&!1!==s.enable){var m=[];switch(v.b.findApplicableOverrides(s,t,m),s.type){case"CIMSolidFill":P(s,r,m,i,a);break;case"CIMPictureFill":L(s,r,m,i,a);break;case"CIMHatchFill":w(s,r,m,i,a);break;case"CIMGradientFill":I(s,r,m,i,a);break;case"CIMSolidStroke":X(s,r,m,i,a,"CIMPolygonSymbol"===e.type,c);break;case"CIMPictureStroke":J(s,r,m,i,a,"CIMPolygonSymbol"===e.type,c);break;case"CIMGradientStroke":z(s,r,m,i,a,"CIMPolygonSymbol"===e.type,c);break;case"CIMCharacterMarker":if(H(s,r,m,i,a))break;break;case"CIMPictureMarker":if(H(s,r,m,i,a))break;"CIMLineSymbol"===e.type&&(l=j(s)),Y(s,r,m,i,a,l,c);break;case"CIMVectorMarker":if(H(s,r,m,i,a))break;"CIMLineSymbol"===e.type&&(l=j(s)),R(s,r,m,i,a,l,c,n);break;default:d.error("Cannot analyze CIM layer",s.type)}}}}}}function P(e,t,r,i,a){var n=e.primitiveName,o=Object(b.e)(e.color),c=q(r,n),f=Object(l.a)(c,2),s=f[0],m=f[1],y=Object(u.b)(JSON.stringify(e)+m).toString();a.push({type:"fill",templateHash:y,materialHash:s?function(){return y}:y,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:D(n,t,"Color",i,o,T),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:e.effects})}function L(e,t,r,i,a){var n=e.primitiveName,o=e.tintColor?Object(b.e)(e.tintColor):{r:255,g:255,b:255,a:1},c=q(r,n),f=Object(l.a)(c,2),s=f[0],m=f[1],y=Object(u.b)(JSON.stringify(e)+m).toString(),v=Object(u.b)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString();a.push({type:"fill",templateHash:y,materialHash:s?function(){return v}:v,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:D(n,t,"TintColor",i,o,T),height:D(n,t,"Height",i,e.height),scaleX:D(n,t,"ScaleX",i,e.scaleX),angle:D(n,t,"Rotation",i,e.rotation),offsetX:D(n,t,"OffsetX",i,e.offsetX),offsetY:D(n,t,"OffsetY",i,e.offsetY)})}function w(e,t,r,i,a){var n=["Rotation","OffsetX","OffsetY"],o=r.filter((function(t){return t.primitiveName!==e.primitiveName&&-1===n.indexOf(t.propertyName)})),c=e.primitiveName,f=q(r,c),s=Object(l.a)(f,2),m=s[0],y=s[1],v=Object(u.b)(JSON.stringify(e)+y).toString(),p=Object(u.b)("".concat(e.separation).concat(JSON.stringify(e.lineSymbol))).toString();a.push({type:"fill",templateHash:v,materialHash:m?U(p,t,o,i):p,cim:e,materialOverrides:o,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:D(c,t,"Separation",i,e.separation),scaleX:1,angle:D(c,t,"Rotation",i,e.rotation),offsetX:D(c,t,"OffsetX",i,e.offsetX),offsetY:D(c,t,"OffsetY",i,e.offsetY)})}function I(e,t,r,i,a){var n=q(r,e.primitiveName),o=Object(l.a)(n,2),c=o[0],f=o[1],s=Object(u.b)(JSON.stringify(e)+f).toString();a.push({type:"fill",templateHash:s,materialHash:c?U(s,t,r,i):s,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function X(e,t,r,i,a,n,o){var c=e.primitiveName,f=Object(b.e)(e.color),s=void 0!==e.width?e.width:4,m=g(e.capStyle),y=O(e.joinStyle),v=e.miterLimit,p=q(r,c),h=Object(l.a)(p,2),d=h[0],S=h[1],k=Object(u.b)(JSON.stringify(e)+S).toString();a.push({type:"line",templateHash:k,materialHash:d?function(){return k}:k,cim:e,materialOverrides:null,isOutline:n,colorLocked:e.colorLocked,effects:e.effects,color:D(c,t,"Color",i,f,T),width:D(c,t,"Width",i,s),cap:D(c,t,"CapStyle",i,m),join:D(c,t,"JoinStyle",i,y),miterLimit:D(c,t,"MiterLimit",i,v),referenceWidth:o,zOrder:W(e.name),isDashed:!1})}function J(e,t,r,i,a,n,o){var c=Object(u.b)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString(),f=e.primitiveName,s=Object(b.e)(e.tintColor),m=void 0!==e.width?e.width:4,y=g(e.capStyle),v=O(e.joinStyle),p=e.miterLimit,h=q(r,f),d=Object(l.a)(h,2),S=d[0],k=d[1],N=Object(u.b)(JSON.stringify(e)+k).toString();a.push({type:"line",templateHash:N,materialHash:S?function(){return c}:c,cim:e,materialOverrides:null,isOutline:n,colorLocked:e.colorLocked,effects:e.effects,color:D(f,t,"TintColor",i,s,T),width:D(f,t,"Width",i,m),cap:D(f,t,"CapStyle",i,y),join:D(f,t,"JoinStyle",i,v),miterLimit:D(f,t,"MiterLimit",i,p),referenceWidth:o,zOrder:W(e.name),isDashed:!1})}function z(e,t,r,i,a,n,o){var c=e.primitiveName,f=void 0!==e.width?e.width:4,s=g(e.capStyle),m=O(e.joinStyle),y=e.miterLimit,v=q(r,c),p=Object(l.a)(v,2),b=p[0],h=p[1],d=Object(u.b)(JSON.stringify(e)+h).toString();a.push({type:"line",templateHash:d,materialHash:b?U(d,t,r,i):d,cim:e,materialOverrides:null,isOutline:n,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},width:D(c,t,"Width",i,f),cap:D(c,t,"CapStyle",i,s),join:D(c,t,"JoinStyle",i,m),miterLimit:D(c,t,"MiterLimit",i,y),referenceWidth:o,zOrder:W(e.name),isDashed:!1})}function H(e,t,r,i,a){var n=e.markerPlacement;if(!n||"CIMMarkerPlacementInsidePolygon"!==n.type)return!1;var o=n,c=["Rotation","OffsetX","OffsetY"],f=r.filter((function(t){return t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName)})),s=q(r,o.primitiveName),m=Object(l.a)(s,2),y=m[0],v=m[1],p=Object(u.b)(JSON.stringify(e)+v).toString();return a.push({type:"fill",templateHash:p,materialHash:y?U(p,t,f,i):p,cim:e,materialOverrides:f,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:D(o.primitiveName,t,"StepY",i,o.stepY),scaleX:1,angle:D(o.primitiveName,t,"GridAngle",i,o.gridAngle),offsetX:D(o.primitiveName,t,"OffsetX",i,o.offsetX),offsetY:D(o.primitiveName,t,"OffsetY",i,o.offsetY)}),!0}function Y(e,t,r,i,a,n,o){var c=e.primitiveName,f=e.size,s=e.scaleX,m=e.rotation,y=e.offsetX,v=e.offsetY,p=Object(b.e)(e.tintColor),h=Object(u.b)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString(),d=q(r,c),g=Object(l.a)(d,2),O=g[0],S=g[1],k=Object(u.b)(JSON.stringify(e)+S).toString();a.push({type:"marker",templateHash:k,materialHash:O?function(){return h}:h,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:!1,alignment:n,size:D(c,t,"Size",i,f),scaleX:D(c,t,"ScaleX",i,s),rotation:D(c,t,"Rotation",i,m),offsetX:D(c,t,"OffsetX",i,y),offsetY:D(c,t,"OffsetY",i,v),color:D(c,t,"TintColor",i,p,T),anchorPoint:e.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:o,sizeRatio:1,markerPlacement:e.markerPlacement})}function R(e,t,r,i,a,n,l,c){var f=e.markerGraphics;if(f){var s=0;if(e.scaleSymbolsProportionally){var m=e.frame;m&&(s=m.ymax-m.ymin)}var u,y=Object(o.a)(f);try{for(y.s();!(u=y.n()).done;){var v=u.value;if(v){var p=v.symbol;if(!p)continue;switch(p.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":F(e,v,r,t,i,a,n,l,s,c);break;case"CIMTextSymbol":A(e,v,t,r,i,a,n,l,s)}}}}catch(b){y.e(b)}finally{y.f()}}}function A(e,t,r,i,a,l,c,f,s){v.b.findApplicableOverrides(t,i,[]);var m=t.geometry;if("x"in m&&"y"in m){var y=t.symbol,p=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(y),h=function(e){var t="normal",r="normal";if(e){var i=e.toLowerCase();-1!==i.indexOf("italic")?t="italic":-1!==i.indexOf("oblique")&&(t="oblique"),-1!==i.indexOf("bold")?r="bold":-1!==i.indexOf("light")&&(r="lighter")}return{style:t,weight:r}}(y.fontStyleName);y.font=Object(n.a)({family:y.fontFamilyName,decoration:p},h);var d=e.frame,g=m.x-.5*(d.xmin+d.xmax),O=m.y-.5*(d.ymin+d.ymax),N=e.size/s,j=e.primitiveName,x=(y.height||0)*N,C=y.angle||0,M=((y.offsetX||0)+g)*N,P=((y.offsetY||0)+O)*N,L=Object(b.e)(v.a.getFillColor(y)),w=Object(b.e)(v.a.getStrokeColor(y)),I=v.a.getStrokeWidth(y);I||(w=Object(b.e)(v.a.getFillColor(y.haloSymbol)),I=y.haloSize*N);var X,J="",z=Object(o.a)(i);try{for(z.s();!(X=z.n()).done;){var H=X.value;H.primitiveName===j&&void 0!==H.value&&(J+="-".concat(H.primitiveName,"-").concat(H.propertyName,"-").concat(JSON.stringify(H.value)))}}catch(A){z.e(A)}finally{z.f()}var Y=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),R=Object(u.b)(JSON.stringify(t)+Y+J).toString();l.push({type:"text",templateHash:R,materialHash:function(){return Object(u.b)(JSON.stringify(y.font)).toString()},cim:y,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,alignment:c,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:y.fontFamilyName,decoration:"none",weight:"normal",style:"normal",size:D(j,r,"Size",a,x),angle:D(j,r,"Rotation",a,C),offsetX:D(j,r,"OffsetX",a,M),offsetY:D(j,r,"OffsetY",a,P),horizontalAlignment:S(y.horizontalAlignment),verticalAlignment:k(y.verticalAlignment),text:D(t.primitiveName,r,"TextString",a,t.textString,b.a,y.textCase),color:L,outlineColor:w,outlineSize:I,referenceSize:f,sizeRatio:1,markerPlacement:e.markerPlacement})}}function F(e,t,r,i,a,c,f,s,m,y){var h=t.symbol,d=t.geometry;if(d){var g=h.symbolLayers;if(g)if(y)G(e,t,i,r,a,c,f,s,m);else for(var O=g.length;O--;){var S=g[O];if(S&&!1!==S.enable)switch(S.type){case"CIMSolidFill":case"CIMSolidStroke":var k=function(){var y=Object(p.b)(d);if(!y)return"continue";var h=Object(p.d)(y,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),g=Object(l.a)(h,3),O=g[0],k=g[1],N=g[2],j="CIMSolidFill"===S.type,x={type:"sdf",geom:d,asFill:j},C=e.primitiveName,M=e.size,P=e.rotation||0,L=e.offsetX,w=e.offsetY,I=S.primitiveName,X=Object(b.e)(j?v.a.getFillColor(S):v.a.getStrokeColor(S)),J=j?{r:0,g:0,b:0,a:0}:Object(b.e)(v.a.getStrokeColor(S)),z=v.a.getStrokeWidth(S);if(!j&&!z)return"break";var H,Y=!1,R="",A=Object(o.a)(r);try{for(A.s();!(H=A.n()).done;){var F=H.value;F.primitiveName!==I&&F.primitiveName!==C||(void 0!==F.value?R+="-".concat(F.primitiveName,"-").concat(F.propertyName,"-").concat(JSON.stringify(F.value)):F.valueExpressionInfo&&(Y=!0))}}catch(E){A.e(E)}finally{A.f()}var G=JSON.stringify(Object(n.a)(Object(n.a)({},e),{},{markerGraphics:null})),W=Object(u.b)(JSON.stringify(x)).toString(),U={type:"marker",templateHash:Object(u.b)(JSON.stringify(t)+JSON.stringify(S)+G+R).toString(),materialHash:Y?function(){return W}:W,cim:x,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:f,anchorPoint:{x:k,y:N},isAbsoluteAnchorPoint:!1,size:D(e.primitiveName,i,"Size",a,M),rotation:D(e.primitiveName,i,"Rotation",a,P),offsetX:D(e.primitiveName,i,"OffsetX",a,L),offsetY:D(e.primitiveName,i,"OffsetY",a,w),scaleX:1,frameHeight:m,rotateClockwise:e.rotateClockwise,referenceSize:s,sizeRatio:O,color:D(I,i,"Color",a,X,T),outlineColor:D(I,i,"Color",a,J,T),outlineWidth:D(I,i,"Width",a,z),markerPlacement:e.markerPlacement};return c.push(U),"break"}();if("continue"===k)continue;if("break"===k)break;default:G(e,t,i,r,a,c,f,s,m)}}}}function G(e,t,r,i,a,n,c,f,s){var y,p=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath,effects:e.effects}}(e,t),b=["Rotation","OffsetX","OffsetY"];y=i.filter((function(t){return t.primitiveName!==e.primitiveName||-1===b.indexOf(t.propertyName)}));var h,d="",g=Object(o.a)(i);try{for(g.s();!(h=g.n()).done;){var O=h.value;void 0!==O.value&&(d+="-".concat(O.primitiveName,"-").concat(O.propertyName,"-").concat(JSON.stringify(O.value)))}}catch(X){g.e(X)}finally{g.f()}var S=v.a.getTextureAnchor(p),k=Object(l.a)(S,3),N=k[0],j=k[1],x=k[2],C=e.primitiveName,M=e.rotation||0,P=e.offsetX||0,L=e.offsetY||0,w=Object(u.b)(JSON.stringify(p)+d).toString(),I={type:"marker",templateHash:w,materialHash:0===y.length?w:U(w,r,y,a),cim:p,materialOverrides:y,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:c,anchorPoint:{x:N,y:j},isAbsoluteAnchorPoint:!1,size:e.size,rotation:D(C,r,"Rotation",a,M),offsetX:D(C,r,"OffsetX",a,P),offsetY:D(C,r,"OffsetY",a,L),color:{r:0,g:0,b:0,a:0},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:s,rotateClockwise:e.rotateClockwise,referenceSize:f,sizeRatio:x/Object(m.c)(e.size),markerPlacement:e.markerPlacement};n.push(I)}function W(e){if(e&&0===e.indexOf("Level_")){var t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function T(e){if(!e||0===e.length)return null;var t=new f.a(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function D(e,t,r,i,a,n,o){var l=t[e];if(l){var c=l[r];if("string"==typeof c||"number"==typeof c||c instanceof Array)return n?n.call(null,c,o):c;if(null!=c&&c instanceof y.a)return function(e,t,r){var l=Object(h.a)(c,e,{$view:r},i.geometryType,t);return null!==l&&n&&(l=n.call(null,l,o)),null!==l?l:a}}return a}function U(e,t,r,i){var a,n=Object(o.a)(r);try{for(n.s();!(a=n.n()).done;){var l=a.value;l.valueExpressionInfo&&function(){var e=t[l.primitiveName]&&t[l.primitiveName][l.propertyName];e instanceof y.a&&(l.fn=function(t,r,a){return Object(h.a)(e,t,{$view:a},i.geometryType,r)})}()}}catch(c){n.e(c)}finally{n.f()}return function(t,i,a){var n,l=Object(o.a)(r);try{for(l.s();!(n=l.n()).done;){var f=n.value;f.fn&&(f.value=f.fn(t,i,a))}}catch(c){l.e(c)}finally{l.f()}return Object(u.b)(e+v.b.buildOverrideKey(r)).toString()}}function E(e,t){if(!t||0===t.length)return e;var r=JSON.parse(JSON.stringify(e));return v.b.applyOverrides(r,t),r}function q(e,t){var r,i=!1,a="",n=Object(o.a)(e);try{for(n.s();!(r=n.n()).done;){var l=r.value;l.primitiveName===t&&(void 0!==l.value?a+="-".concat(l.primitiveName,"-").concat(l.propertyName,"-").concat(JSON.stringify(l.value)):l.valueExpressionInfo&&(i=!0))}}catch(c){n.e(c)}finally{n.f()}return[i,a]}},761:function(e,t,r){"use strict";var i=r(43),a=r(655),n=r(645),o=r(739);var l=new Map;function c(e,t,r){var c=r.transform,f=r.hasZ,s=r.hasM;l.has(t)||l.set(t,function(e){var t={};switch(e){case"esriGeometryPoint":return function(e,r,i,a){return Object(o.e)(r,t,e,i,a)};case"esriGeometryPolygon":return function(e,r,i,a){return Object(o.f)(r,t,e,i,a)};case"esriGeometryPolyline":return function(e,r,i,a){return Object(o.g)(r,t,e,i,a)};case"esriGeometryMultipoint":return function(e,r,i,a){return Object(o.d)(r,t,e,i,a)};default:return n.a.getLogger("esri.views.2d.support.arcadeOnDemand").error(new a.a("mapview-arcade","Unable to handle geometryType: ".concat(e))),function(e){return e}}}(t));var m=l.get(t)(e.geometry,c,f,s);return Object(i.a)(Object(i.a)({},e),{},{geometry:m})}t.a=function(e,t,r,a,o){var l=e.referencesGeometry()&&o?c(t,a,o):t,f=e.repurposeFeature(l);try{return e.evaluate(Object(i.a)(Object(i.a)({},r),{},{$feature:f}))}catch(s){return n.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",s),null}}},801:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return m}));var i=r(654),a=r(646),n=r(663),o=r(915),l=r(869);function c(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":var t=e.symbolLayers;return t&&1===t.length?c(t[0]):null;case"CIMVectorMarker":var r=e.markerGraphics;if(!r||1!==r.length)return null;var i=r[0];if(!i)return null;var a=i.geometry;if(!a)return null;var n=i.symbol;return!n||"CIMPolygonSymbol"!==n.type&&"CIMLineSymbol"!==n.type?null:{geom:a,asFill:"CIMPolygonSymbol"===n.type};case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function f(e){var t,r=1/0,i=-1/0,n=1/0,o=-1/0,l=Object(a.a)(e);try{for(l.s();!(t=l.n()).done;){var c,f=t.value,s=Object(a.a)(f);try{for(s.s();!(c=s.n()).done;){var m=c.value;m[0]<r&&(r=m[0]),m[0]>i&&(i=m[0]),m[1]<n&&(n=m[1]),m[1]>o&&(o=m[1])}}catch(u){s.e(u)}finally{s.f()}}}catch(u){l.e(u)}finally{l.f()}return[r,n,i,o]}function s(e){return e?e.rings?f(e.rings):e.paths?f(e.paths):Object(n.d)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function m(e,t,r,a,n){var o=Object(i.a)(e,4),l=o[0],c=o[1],f=o[2],s=o[3];if(f<l||s<c)return[0,0,0];var m=f-l,u=s-c,y=Math.floor(31.5),v=(128-2*(y+1))/Math.max(m,u),p=Math.round(m*v)+2*y,b=Math.round(u*v)+2*y,h=1;t&&(h=b/v/(t.ymax-t.ymin));var d=0,g=0;if(a)if(n){if(t&&r&&t.ymax-t.ymin>0){var O=(t.xmax-t.xmin)/(t.ymax-t.ymin);d=a.x/(r*O),g=a.y/r}}else d=a.x,g=a.y;return d=.5*(t.xmax+t.xmin)+d*(t.xmax-t.xmin),g=.5*(t.ymax+t.ymin)+g*(t.ymax-t.ymin),d-=l,g-=c,d*=v,g*=v,[h,(d+=y)/p-.5,-((g+=y)/b-.5)]}function u(e){var t,r=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),n=function(e){var t,r=1/0,i=-1/0,n=1/0,o=-1/0,c=Object(a.a)(e);try{for(c.s();!(t=c.n()).done;){var f,s=t.value,m=Object(a.a)(s);try{for(m.s();!(f=m.n()).done;){var u=f.value;u[0]<r&&(r=u[0]),u[0]>i&&(i=u[0]),u[1]<n&&(n=u[1]),u[1]>o&&(o=u[1])}}catch(y){m.e(y)}finally{m.f()}}}catch(y){c.e(y)}finally{c.f()}return new l.a(r,n,i-r,o-n)}(r),o=Math.floor(31.5),c=(128-2*(o+1))/Math.max(n.width,n.height),f=Math.round(n.width*c)+2*o,s=Math.round(n.height*c)+2*o,m=[],u=Object(a.a)(r);try{for(u.s();!(t=u.n()).done;){var v=t.value;if(v&&v.length>1){var p,b=[],h=Object(a.a)(v);try{for(h.s();!(p=h.n()).done;){var d=p.value,g=Object(i.a)(d,2),O=g[0],S=g[1];O-=n.x,S-=n.y,O*=c,S*=c,O+=o-.5,S+=o-.5,b.push([O,S])}}catch(j){h.e(j)}finally{h.f()}if(e.asFill){var k=b.length-1;b[0][0]===b[k][0]&&b[0][1]===b[k][1]||b.push(b[0])}m.push(b)}}}catch(j){u.e(j)}finally{u.f()}var N=function(e,t,r,i){for(var n=t*r,o=new Array(n),l=i*i+1,c=0;c<n;++c)o[c]=l;var f,s=Object(a.a)(e);try{for(s.s();!(f=s.n()).done;)for(var m=f.value,u=m.length,y=1;y<u;++y){var v=m[y-1],p=m[y],b=void 0,h=void 0,d=void 0,g=void 0;v[0]<p[0]?(b=v[0],h=p[0]):(b=p[0],h=v[0]),v[1]<p[1]?(d=v[1],g=p[1]):(d=p[1],g=v[1]);var O=Math.floor(b)-i,S=Math.floor(h)+i,k=Math.floor(d)-i,N=Math.floor(g)+i;O<0&&(O=0),S>t&&(S=t),k<0&&(k=0),N>r&&(N=r);for(var x=p[0]-v[0],C=p[1]-v[1],M=x*x+C*C,P=O;P<S;P++)for(var L=k;L<N;L++){var w=void 0,I=void 0,X=(P-v[0])*x+(L-v[1])*C;X<0?(w=v[0],I=v[1]):X>M?(w=p[0],I=p[1]):(X/=M,w=v[0]+X*x,I=v[1]+X*C);var J=(P-w)*(P-w)+(L-I)*(L-I),z=(r-L-1)*t+P;J<o[z]&&(o[z]=J)}}}catch(j){s.e(j)}finally{s.f()}for(var H=0;H<n;++H)o[H]=Math.sqrt(o[H]);return o}(m,f,s,o);return e.asFill&&function(e,t,r,i,n){var o,l=Object(a.a)(e);try{for(l.s();!(o=l.n()).done;)for(var c=o.value,f=c.length,s=1;s<f;++s){var m=c[s-1],u=c[s],y=void 0,v=void 0,p=void 0,b=void 0;m[0]<u[0]?(y=m[0],v=u[0]):(y=u[0],v=m[0]),m[1]<u[1]?(p=m[1],b=u[1]):(p=u[1],b=m[1]);var h=Math.floor(y),d=Math.floor(v)+1,g=Math.floor(p),O=Math.floor(b)+1;h<i&&(h=i),d>t-i&&(d=t-i),g<i&&(g=i),O>r-i&&(O=r-i);for(var S=g;S<O;++S)if(m[1]>S!=u[1]>S){for(var k=(r-S-1)*t,N=h;N<d;++N)N<(u[0]-m[0])*(S-m[1])/(u[1]-m[1])+m[0]&&(n[k+N]=-n[k+N]);for(var x=i;x<h;++x)n[k+x]=-n[k+x]}}}catch(j){l.e(j)}finally{l.f()}}(m,f,s,o,N),[y(N,o),f,s]}function y(e,t){for(var r=2*t,i=e.length,a=new Uint8Array(4*i),n=0;n<i;++n){var l=.5-e[n]/r;Object(o.a)(l,a,4*n)}return a}}}]);
//# sourceMappingURL=42.75c056f2.chunk.js.map