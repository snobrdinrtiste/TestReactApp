(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[26],{1448:function(e,t,r){"use strict";r.r(t);var n=r(164),a=r(165),c=r(166),u=r(167),i=r(647),s=r(649),o=(r(644),r(650),r(645),r(648)),f=r(652),O=r.n(f),p=r(43),b=r(653),N=r(668),j=r(717);function l(){return(l=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(j.c)(t),c=Object(p.a)(Object(p.a)({},a.query),{},{f:"json"},r.toJSON()),u=Object(j.a)(c,n),e.abrupt("return",Object(N.default)(a.path+"/areasAndLengths",u).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r(669);var I=r(977),_=r(704);function T(){return(T=Object(b.a)(O.a.mark((function e(t,r,n,a){var c,u,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r[0].spatialReference,u=Object(j.c)(t),i=Object(p.a)(Object(p.a)({},u.query),{},{f:"json",sr:JSON.stringify(c.toJSON()),polygons:JSON.stringify(Object(I.b)(r).geometries),polylines:JSON.stringify(Object(I.b)(n).geometries)}),s=Object(j.a)(i,a),e.abrupt("return",Object(N.default)(u.path+"/autoComplete",s).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.rings;return new _.a({spatialReference:c,rings:t})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(j.c)(t),c=Object(p.a)(Object(p.a)({},a.query),{},{f:"json"},r.toJSON()),u=r.outSpatialReference||r.geometries[0].spatialReference,i=Object(j.a)(c,n),e.abrupt("return",Object(N.default)(a.path+"/buffer",i).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.rings;return new _.a({spatialReference:u,rings:t})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=r(663);function S(){return(S=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r[0].spatialReference,c=Object(j.c)(t),u=Object(p.a)(Object(p.a)({},c.query),{},{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(Object(I.b)(r))}),i=Object(j.a)(u,n),e.abrupt("return",Object(N.default)(c.path+"/convexHull",i).then((function(e){var t=e.data;return Object(h.a)(t.geometry).set({spatialReference:a})})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(b.a)(O.a.mark((function e(t,r,n,a){var c,u,i,s,o,f,b,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(j.c)(t),u=r[0].spatialReference,i=Object(p.a)(Object(p.a)({},a),{},{query:Object(p.a)(Object(p.a)({},c.query),{},{f:"json",sr:JSON.stringify(u),target:JSON.stringify({geometryType:Object(h.c)(r[0]),geometries:r}),cutter:JSON.stringify(n)})}),e.next=5,Object(N.default)(c.path+"/cut",i);case 5:return s=e.sent,o=s.data,f=o.cutIndexes,b=o.geometries,l=void 0===b?[]:b,e.abrupt("return",{cutIndexes:f,geometries:l.map((function(e){var t=Object(h.a)(e);return t.spatialReference=u,t}))});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.geometries[0].spatialReference,c=Object(j.c)(t),u=Object(p.a)(Object(p.a)({},c.query),{},{f:"json"},r.toJSON()),i=Object(j.a)(u,n),e.abrupt("return",Object(N.default)(c.path+"/densify",i).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(h.a)(e).set({spatialReference:a})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(b.a)(O.a.mark((function e(t,r,n,a){var c,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r[0].spatialReference,u=Object(j.c)(t),i={query:Object(p.a)(Object(p.a)({},u.query),{},{f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(Object(I.b)(r)),geometry:JSON.stringify({geometryType:Object(h.c)(n),geometry:n.toJSON()})})},e.abrupt("return",(a&&(i=Object(p.a)(Object(p.a)({},a),i)),Object(N.default)(u.path+"/difference",i).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(h.a)(e).set({spatialReference:c})}))}))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(j.c)(t),c=Object(p.a)(Object(p.a)({},a.query),{},{f:"json"},r.toJSON()),u=Object(j.a)(c,n),e.abrupt("return",Object(N.default)(a.path+"/distance",u).then((function(e){var t=e.data;return t&&t.distance})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=r(1127);function m(){return(m=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},null!=r.sr&&"object"==typeof r.sr?a.sr=r.sr.wkid||JSON.stringify(r.sr):a.sr=r.sr,a.strings=JSON.stringify(r.strings),c=r.conversionType||"mgrs",a.conversionType=v.a.toJSON(c),a.conversionMode=r.conversionMode,u=Object(j.c)(t),i=Object(p.a)(Object(p.a)({},u.query),{},{f:"json"},a),s=Object(j.a)(i,n),e.abrupt("return",Object(N.default)(u.path+"/fromGeoCoordinateString",s).then((function(e){return e.data.coordinates})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=r(1394),A=r(1395);function k(){return(k=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(r=g.a.from(r)).toJSON(),c=Object(A.a)(r),u=Object(j.c)(t),i=Object(p.a)(Object(p.a)({},u.query),{},{f:"json"},c),s=a.geometries[0].spatialReference,o=Object(j.a)(i,n),e.abrupt("return",Object(N.default)(u.path+"/generalize",o).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(h.a)(e).set({spatialReference:s})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(b.a)(O.a.mark((function e(t,r,n,a){var c,u,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r[0].spatialReference,u=Object(j.c)(t),i=Object(p.a)(Object(p.a)({},u.query),{},{f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(Object(I.b)(r)),geometry:JSON.stringify({geometryType:Object(h.c)(n),geometry:n.toJSON()})}),s=Object(j.a)(i,a),e.abrupt("return",Object(N.default)(u.path+"/intersect",s).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(h.a)(e).set({spatialReference:c})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=r(1396),L=r(1397);function C(){return(C=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=J.a.from(r),a=Object(L.a)(r),c=Object(j.c)(t),u=Object(p.a)(Object(p.a)({},c.query),{},{f:"json"},a),i=Object(j.a)(u,n),e.abrupt("return",Object(N.default)(c.path+"/lengths",i).then((function(e){return e.data})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=r(1398),D=r(1399);function q(){return(q=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=M.a.from(r),a=Object(D.a)(r),c=Object(j.c)(t),u=Object(p.a)(Object(p.a)({},c.query),{},{f:"json"},a),i=r.geometries[0].spatialReference,s=Object(j.a)(u,n),e.abrupt("return",Object(N.default)(c.path+"/offset",s).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(h.a)(e).set({spatialReference:i})}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=r(1400),Y=r(1401),H=r(1402);function K(){return(K=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Y.a.from(r),a=Object(H.a)(r),c=Object(j.c)(t),u=Object(p.a)(Object(p.a)({},c.query),{},{f:"json"},a),i=Object(j.a)(u,n),e.abrupt("return",Object(N.default)(c.path+"/relation",i).then((function(e){return e.data.relations})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(b.a)(O.a.mark((function e(t,r,n,a){var c,u,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.spatialReference,u=Object(j.c)(t),i=Object(p.a)(Object(p.a)({},u.query),{},{f:"json",sr:JSON.stringify(c.toJSON()),target:JSON.stringify({geometryType:Object(h.c)(r),geometry:r.toJSON()}),reshaper:JSON.stringify(n.toJSON())}),s=Object(j.a)(i,a),e.abrupt("return",Object(N.default)(u.path+"/reshape",s).then((function(e){var t=e.data;return Object(h.a)(t.geometry).set({spatialReference:c})})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=r(679);function G(){return(G=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="string"==typeof t?Object(B.K)(t):t,c=r[0].spatialReference,u=Object(h.c)(r[0]),i=Object(p.a)(Object(p.a)({},n),{},{query:Object(p.a)(Object(p.a)({},a.query),{},{f:"json",sr:c.wkid?c.wkid:JSON.stringify(c),geometries:JSON.stringify(Object(I.b)(r))})}),e.next=6,Object(N.default)(a.path+"/simplify",i);case 6:return s=e.sent,o=s.data,e.abrupt("return",Object(I.a)(o.geometries,u,c));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},null!=r.sr&&"object"==typeof r.sr?a.sr=r.sr.wkid||JSON.stringify(r.sr):a.sr=r.sr,a.coordinates=JSON.stringify(r.coordinates),c=r.conversionType||"mgrs",a.conversionType=v.a.toJSON(c),a.conversionMode=r.conversionMode,a.numOfDigits=r.numOfDigits,a.rounding=r.rounding,a.addSpaces=r.addSpaces,u=Object(j.c)(t),i=Object(p.a)(Object(p.a)({},u.query),{},{f:"json"},a),s=Object(j.a)(i,n),e.abrupt("return",Object(N.default)(u.path+"/toGeoCoordinateString",s).then((function(e){return e.data.strings})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=r(1403),P=r(1404),z=r(769);function W(){return(W=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=V.a.from(r),a=Object(P.a)(r),c=Object(j.c)(t),u=Object(p.a)(Object(p.a)({},c.query),{},{f:"json"},a),i=r.sr,s=Object(j.a)(u,n),e.abrupt("return",Object(N.default)(c.path+"/trimExtend",s).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.paths;return new z.a({spatialReference:i,paths:t})}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(b.a)(O.a.mark((function e(t,r,n){var a,c,u,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r[0].spatialReference,c=Object(j.c)(t),u=Object(p.a)(Object(p.a)({},c.query),{},{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(Object(I.b)(r))}),i=Object(j.a)(u,n),e.abrupt("return",Object(N.default)(c.path+"/union",i).then((function(e){var t=e.data;return Object(h.a)(t.geometry).set({spatialReference:a})})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).url=null,a}return Object(a.a)(r,[{key:"areasAndLengths",value:function(e,t){return function(e,t,r){return l.apply(this,arguments)}(this.url,e,t)}},{key:"autoComplete",value:function(e,t,r){return function(e,t,r,n){return T.apply(this,arguments)}(this.url,e,t,r)}},{key:"buffer",value:function(e,t){return function(e,t,r){return y.apply(this,arguments)}(this.url,e,t)}},{key:"convexHull",value:function(e,t){return function(e,t,r){return S.apply(this,arguments)}(this.url,e,t)}},{key:"cut",value:function(e,t,r){return function(e,t,r,n){return d.apply(this,arguments)}(this.url,e,t,r)}},{key:"densify",value:function(e,t){return function(e,t,r){return U.apply(this,arguments)}(this.url,e,t)}},{key:"difference",value:function(e,t,r){return function(e,t,r,n){return E.apply(this,arguments)}(this.url,e,t,r)}},{key:"distance",value:function(e,t){return function(e,t,r){return R.apply(this,arguments)}(this.url,e,t)}},{key:"fromGeoCoordinateString",value:function(e,t){return function(e,t,r){return m.apply(this,arguments)}(this.url,e,t)}},{key:"generalize",value:function(e,t){return function(e,t,r){return k.apply(this,arguments)}(this.url,e,t)}},{key:"intersect",value:function(e,t,r){return function(e,t,r,n){return w.apply(this,arguments)}(this.url,e,t,r)}},{key:"labelPoints",value:function(e,t){return function(e,t,r){var n=t.map((function(e){return e.toJSON()})),a=t[0].spatialReference,c=Object(j.c)(e),u=Object(p.a)(Object(p.a)({},c.query),{},{f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(n)}),i=Object(j.a)(u,r);return Object(N.default)(c.path+"/labelPoints",i).then((function(e){return(e.data.labelPoints||[]).map((function(e){return Object(h.a)(e).set({spatialReference:a})}))}))}(this.url,e,t)}},{key:"lengths",value:function(e,t){return function(e,t,r){return C.apply(this,arguments)}(this.url,e,t)}},{key:"offset",value:function(e,t){return function(e,t,r){return q.apply(this,arguments)}(this.url,e,t)}},{key:"project",value:function(e,t){return Object(x.a)(this.url,e,t)}},{key:"relation",value:function(e,t){return function(e,t,r){return K.apply(this,arguments)}(this.url,e,t)}},{key:"reshape",value:function(e,t,r){return function(e,t,r,n){return F.apply(this,arguments)}(this.url,e,t,r)}},{key:"simplify",value:function(e,t){return function(e,t,r){return G.apply(this,arguments)}(this.url,e,t)}},{key:"toGeoCoordinateString",value:function(e,t){return function(e,t,r){return Q.apply(this,arguments)}(this.url,e,t)}},{key:"trimExtend",value:function(e,t){return function(e,t,r){return W.apply(this,arguments)}(this.url,e,t)}},{key:"union",value:function(e,t){return function(e,t,r){return X.apply(this,arguments)}(this.url,e,t)}}]),r}(r(970).a);Z.UNIT_METER=9001,Z.UNIT_GERMAN_METER=9031,Z.UNIT_FOOT=9002,Z.UNIT_SURVEY_FOOT=9003,Z.UNIT_CLARKE_FOOT=9005,Z.UNIT_FATHOM=9014,Z.UNIT_NAUTICAL_MILE=9030,Z.UNIT_SURVEY_CHAIN=9033,Z.UNIT_SURVEY_LINK=9034,Z.UNIT_SURVEY_MILE=9035,Z.UNIT_KILOMETER=9036,Z.UNIT_CLARKE_YARD=9037,Z.UNIT_CLARKE_CHAIN=9038,Z.UNIT_CLARKE_LINK=9039,Z.UNIT_SEARS_YARD=9040,Z.UNIT_SEARS_FOOT=9041,Z.UNIT_SEARS_CHAIN=9042,Z.UNIT_SEARS_LINK=9043,Z.UNIT_BENOIT_1895A_YARD=9050,Z.UNIT_BENOIT_1895A_FOOT=9051,Z.UNIT_BENOIT_1895A_CHAIN=9052,Z.UNIT_BENOIT_1895A_LINK=9053,Z.UNIT_BENOIT_1895B_YARD=9060,Z.UNIT_BENOIT_1895B_FOOT=9061,Z.UNIT_BENOIT_1895B_CHAIN=9062,Z.UNIT_BENOIT_1895B_LINK=9063,Z.UNIT_INDIAN_FOOT=9080,Z.UNIT_INDIAN_1937_FOOT=9081,Z.UNIT_INDIAN_1962_FOOT=9082,Z.UNIT_INDIAN_1975_FOOT=9083,Z.UNIT_INDIAN_YARD=9084,Z.UNIT_INDIAN_1937_YARD=9085,Z.UNIT_INDIAN_1962_YARD=9086,Z.UNIT_INDIAN_1975_YARD=9087,Z.UNIT_FOOT_1865=9070,Z.UNIT_RADIAN=9101,Z.UNIT_DEGREE=9102,Z.UNIT_ARCMINUTE=9103,Z.UNIT_ARCSECOND=9104,Z.UNIT_GRAD=9105,Z.UNIT_GON=9106,Z.UNIT_MICRORADIAN=9109,Z.UNIT_ARCMINUTE_CENTESIMAL=9112,Z.UNIT_ARCSECOND_CENTESIMAL=9113,Z.UNIT_MIL6400=9114,Z.UNIT_BRITISH_1936_FOOT=9095,Z.UNIT_GOLDCOAST_FOOT=9094,Z.UNIT_INTERNATIONAL_CHAIN=109003,Z.UNIT_INTERNATIONAL_LINK=109004,Z.UNIT_INTERNATIONAL_YARD=109001,Z.UNIT_STATUTE_MILE=9093,Z.UNIT_SURVEY_YARD=109002,Z.UNIT_50KILOMETER_LENGTH=109030,Z.UNIT_150KILOMETER_LENGTH=109031,Z.UNIT_DECIMETER=109005,Z.UNIT_CENTIMETER=109006,Z.UNIT_MILLIMETER=109007,Z.UNIT_INTERNATIONAL_INCH=109008,Z.UNIT_US_SURVEY_INCH=109009,Z.UNIT_INTERNATIONAL_ROD=109010,Z.UNIT_US_SURVEY_ROD=109011,Z.UNIT_US_NAUTICAL_MILE=109012,Z.UNIT_UK_NAUTICAL_MILE=109013,Z.UNIT_SQUARE_INCHES="esriSquareInches",Z.UNIT_SQUARE_FEET="esriSquareFeet",Z.UNIT_SQUARE_YARDS="esriSquareYards",Z.UNIT_ACRES="esriAcres",Z.UNIT_SQUARE_MILES="esriSquareMiles",Z.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",Z.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",Z.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",Z.UNIT_SQUARE_METERS="esriSquareMeters",Z.UNIT_ARES="esriAres",Z.UNIT_HECTARES="esriHectares",Z.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",Object(i.a)([Object(s.b)()],Z.prototype,"url",void 0);var $=Z=Object(i.a)([Object(o.a)("esri.tasks.GeometryService")],Z);t.default=$}}]);
//# sourceMappingURL=26.29ee7207.chunk.js.map