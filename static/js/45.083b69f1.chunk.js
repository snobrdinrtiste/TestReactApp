(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[45],{1837:function(e,t,r){"use strict";r.r(t),r.d(t,"loadGLTFMesh",(function(){return k}));var n=r(646),a=r(652),c=r.n(a),o=r(653),i=r(691),u=r(668),s=r(651),l=r(800),b=r(795),f=r(702),p=r(1003),O=r(1262),j=r(1264),d=r(1263),m=r(1145),v=r(871),x=r(920),h=r(1439),g=r(1464),w=r(1007),y=r(1440),C=r(1455),A=r(1441),B=r(1299),T=r(1442),M=r(956),F=r(1156),I=r(1155);function k(e,t,r){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(c.a.mark((function e(t,r,a){var o,i,u,l,b,f,p,O,j,d,v,x,h,g,A,B,T;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new y.a(S(a)),e.next=3,Object(C.a)(o,r,a,!0);case 3:i=e.sent.model,u=i.lods.shift(),l=new Map,b=new Map,i.textures.forEach((function(e,t){return l.set(t,R(e))})),i.materials.forEach((function(e,t){return b.set(t,N(e,l))})),f=J(u),p=Object(n.a)(u.parts);try{for(p.s();!(O=p.n()).done;)j=O.value,q(f,j,b)}catch(c){p.e(c)}finally{p.f()}return d=f.vertexAttributes,v=d.position,x=d.normal,h=d.tangent,g=d.color,A=d.texCoord0,B={position:v.typedBuffer,normal:Object(s.i)(x)?x.typedBuffer:null,tangent:Object(s.i)(h)?h.typedBuffer:null,uv:Object(s.i)(A)?A.typedBuffer:null,color:Object(s.i)(g)?g.typedBuffer:null},T=Object(w.c)(B,t,a),e.abrupt("return",{transform:T.transform,components:f.components,spatialReference:t.spatialReference,vertexAttributes:new m.c({position:T.vertexAttributes.position,normal:T.vertexAttributes.normal,tangent:T.vertexAttributes.tangent,color:B.color,uv:B.uv})});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return null!=e&&e.resolveFile?{busy:!1,request:function(){var t=Object(o.a)(c.a.mark((function t(r,n,a){var o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.resolveFile(r),i="image"===n?"image":"binary"===n?"array-buffer":"json",t.next=3,Object(u.default)(o,{responseType:i,signal:Object(s.i)(a)?a.signal:null});case 3:return t.abrupt("return",t.sent.data);case 4:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()}:null}function J(e){var t,r=0,a={color:!1,tangent:!1,normal:!1,texCoord0:!1},c=Object(n.a)(e.parts);try{for(c.s();!(t=c.n()).done;){var o=t.value.attributes,i=o.position,u=o.normal,s=o.color,l=o.tangent,b=o.texCoord0;r+=i.count,u&&(a.normal=!0),s&&(a.color=!0),l&&(a.tangent=!0),b&&(a.texCoord0=!0)}}catch(f){c.e(f)}finally{c.f()}return{writeIndex:0,vertexAttributes:{position:Object(g.a)(v.v,r),normal:a.normal?Object(g.a)(v.u,r):null,tangent:a.tangent?Object(g.a)(v.C,r):null,color:a.color?Object(g.a)(v.J,r):null,texCoord0:a.texCoord0?Object(g.a)(v.m,r):null},components:[]}}function R(e){return new d.a({data:e.data,wrap:L(e.parameters.wrap)})}function N(e,t){var r,n=new i.a(function(e,t){return Object(p.c)(G(e[0]),G(e[1]),G(e[2]),t)}(e.color,e.opacity)),a=e.emissiveFactor?new i.a((r=e.emissiveFactor,Object(f.g)(G(r[0]),G(r[1]),G(r[2])))):null;return new j.a({color:n,colorTexture:Object(s.p)(Object(s.b)(e.textureColor,(function(e){return t.get(e)}))),normalTexture:Object(s.p)(Object(s.b)(e.textureNormal,(function(e){return t.get(e)}))),emissiveColor:a,emissiveTexture:Object(s.p)(Object(s.b)(e.textureEmissive,(function(e){return t.get(e)}))),occlusionTexture:Object(s.p)(Object(s.b)(e.textureOcclusion,(function(e){return t.get(e)}))),alphaMode:z(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:Object(s.p)(Object(s.b)(e.textureMetallicRoughness,(function(e){return t.get(e)})))})}function q(e,t,r){var n=e.vertexAttributes,a=n.position,c=n.normal,o=n.tangent,i=n.color,u=n.texCoord0,f=e.writeIndex,p=t.attributes.position.count;if(Object(x.e)(a.slice(f,p),t.attributes.position,t.transform),Object(s.i)(t.attributes.normal)&&Object(s.i)(c)){var j=Object(l.a)(Object(b.b)(),t.transform);Object(x.a)(c.slice(f,p),t.attributes.normal,j)}else Object(s.i)(c)&&Object(M.b)(c,0,0,1,{dstIndex:f,count:p});if(Object(s.i)(t.attributes.tangent)&&Object(s.i)(o)){var d=Object(l.a)(Object(b.b)(),t.transform);Object(h.c)(o.slice(f,p),t.attributes.tangent,d)}else Object(s.i)(o)&&Object(F.b)(o,0,0,1,1,{dstIndex:f,count:p});if(Object(s.i)(t.attributes.texCoord0)&&Object(s.i)(u)?Object(I.b)(u.slice(f,p),t.attributes.texCoord0):Object(s.i)(u)&&Object(I.a)(u,0,0,{dstIndex:f,count:p}),Object(s.i)(t.attributes.color)&&Object(s.i)(i)){var m=t.attributes.color,g=i.slice(f,p);if(4===m.elementCount)m instanceof v.C?Object(h.b)(g,m,255):m instanceof v.J?Object(F.a)(g,m):m instanceof v.H&&Object(h.a)(g,m,8);else{Object(F.b)(g,255,255,255,255);var w=v.B.fromTypedArray(g.typedBuffer,g.typedBufferStride);m instanceof v.u?Object(x.d)(w,m,255):m instanceof v.B?Object(M.a)(w,m):m instanceof v.z&&Object(x.b)(w,m,8)}}else Object(s.i)(i)&&Object(F.b)(i.slice(f,p),255,255,255,255);var y=function(e,t){switch(t){case 4:return Object(A.c)(e,B.d);case 5:return Object(A.b)(e);case 6:return Object(A.a)(e)}}(t.indices||p,t.primitiveType);if(f)for(var C=0;C<y.length;C++)y[C]+=f;e.components.push(new O.a({faces:y,material:r.get(t.material).clone(),trustSourceNormals:!0})),e.writeIndex+=p}function z(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function L(e){return{horizontal:D(e.s),vertical:D(e.t)}}function D(e){switch(e){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function G(e){return 255*Math.pow(e,1/T.a)}}}]);
//# sourceMappingURL=45.083b69f1.chunk.js.map