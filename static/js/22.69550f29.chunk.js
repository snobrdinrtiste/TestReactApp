(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{1130:function(e,t,r){"use strict";var a=r(164),i=r(166),n=r(167),o=r(647),s=r(689),c=r(658),u=r(649),l=(r(644),r(650),r(645),r(648)),p=new s.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"}),b=function(e){Object(i.a)(r,e);var t=Object(n.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).description=null,i.type=null,i}return r}(c.a);Object(o.a)([Object(u.b)({type:String,json:{write:!0}})],b.prototype,"description",void 0),Object(o.a)([Object(u.b)({type:String,json:{read:p.read,write:p.write}})],b.prototype,"type",void 0);var d=b=Object(o.a)([Object(l.a)("esri.rest.support.GPMessage")],b);t.a=d},1239:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(164),i=r(165),n=r(654),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(a.a)(this,e),this._options=t}return Object(i.a)(e,[{key:"toQueryParams",value:function(e){var t=this;if(!e)return null;var r=e.toJSON(),a={};return Object.keys(r).forEach((function(e){var i=t._options[e];if(i){var o="boolean"!=typeof i&&i.name?i.name:e,s="boolean"!=typeof i&&i.getter?i.getter(r):r[e];null!=s&&(a[o]=function(e){if(!Array.isArray(e))return!1;var t=Object(n.a)(e,1)[0];return"number"==typeof t||"string"==typeof t}(s)?s.join(","):"object"==typeof s?JSON.stringify(s):s)}else a[e]=r[e]}),this),a}}]),e}();function s(e){return new o(e)}},1240:function(e,t,r){"use strict";var a=r(164),i=r(166),n=r(167),o=r(647),s=r(689),c=r(649),u=(r(644),r(650),r(645),r(648)),l=r(1130),p=new s.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"}),b=function(e){Object(i.a)(r,e);var t=Object(n.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).type=null,i}return r}(l.a);Object(o.a)([Object(c.b)({type:String,json:{read:p.read,write:p.write}})],b.prototype,"type",void 0);var d=b=Object(o.a)([Object(u.a)("esri.rest.support.NAMessage")],b);t.a=d},1293:function(e,t,r){"use strict";r.d(t,"a",(function(){return G})),r.d(t,"b",(function(){return V})),r.d(t,"c",(function(){return z})),r.d(t,"d",(function(){return Z})),r.d(t,"e",(function(){return H}));var a,i=r(652),n=r.n(i),o=r(653),s=r(646),c=r(668),u=r(655),l=r(651),p=r(782),b=r(679),d=r(717),O=r(164),y=r(166),f=r(167),j=r(647),m=r(658),v=r(649),h=(r(644),r(650),r(645),r(648)),g=r(165),T=r(660),N=r(681),A=r(689),w=Object(A.b)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"}),M=(Object(A.b)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),Object(A.b)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),Object(A.b)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),Object(A.b)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),Object(A.b)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),k=(Object(A.b)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),Object(A.b)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),Object(A.b)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"})),S=a=function(e){Object(y.a)(r,e);var t=Object(f.a)(r);function r(e){var a;return Object(O.a)(this,r),(a=t.call(this,e)).attributeParameterValues=null,a.description=null,a.distanceAttributeName=null,a.id=null,a.impedanceAttributeName=null,a.name=null,a.restrictionAttributeNames=null,a.simplificationTolerance=null,a.simplificationToleranceUnits=null,a.timeAttributeName=null,a.type=null,a.useHierarchy=null,a.uturnAtJunctions=null,a}return Object(g.a)(r,[{key:"clone",value:function(){return new a(Object(T.a)({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}}]),r}(m.a);Object(j.a)([Object(v.b)({type:[Object],json:{write:!0}})],S.prototype,"attributeParameterValues",void 0),Object(j.a)([Object(v.b)({type:String,json:{write:!0}})],S.prototype,"description",void 0),Object(j.a)([Object(v.b)({type:String,json:{write:!0}})],S.prototype,"distanceAttributeName",void 0),Object(j.a)([Object(v.b)({type:String,json:{write:!0}})],S.prototype,"id",void 0),Object(j.a)([Object(v.b)({type:String,json:{write:!0}})],S.prototype,"impedanceAttributeName",void 0),Object(j.a)([Object(v.b)({type:String,json:{write:!0}})],S.prototype,"name",void 0),Object(j.a)([Object(v.b)({type:[String],json:{write:!0}})],S.prototype,"restrictionAttributeNames",void 0),Object(j.a)([Object(v.b)({type:Number,json:{write:!0}})],S.prototype,"simplificationTolerance",void 0),Object(j.a)([Object(N.a)(w)],S.prototype,"simplificationToleranceUnits",void 0),Object(j.a)([Object(v.b)({type:String,json:{write:!0}})],S.prototype,"timeAttributeName",void 0),Object(j.a)([Object(N.a)(k)],S.prototype,"type",void 0),Object(j.a)([Object(v.b)({type:Boolean,json:{write:!0}})],S.prototype,"useHierarchy",void 0),Object(j.a)([Object(N.a)(M)],S.prototype,"uturnAtJunctions",void 0);var B=S=a=Object(j.a)([Object(h.a)("esri.rest.support.TravelMode")],S),U=function(e){Object(y.a)(r,e);var t=Object(f.a)(r);function r(e){var a;return Object(O.a)(this,r),(a=t.call(this,e)).currentVersion=null,a.defaultTravelMode=null,a.directionsLanguage=null,a.directionsSupportedLanguages=null,a.directionsTimeAttribute=null,a.hasZ=null,a.impedance=null,a.networkDataset=null,a.supportedTravelModes=null,a}return r}(m.a);Object(j.a)([Object(v.b)()],U.prototype,"currentVersion",void 0),Object(j.a)([Object(v.b)()],U.prototype,"defaultTravelMode",void 0),Object(j.a)([Object(v.b)()],U.prototype,"directionsLanguage",void 0),Object(j.a)([Object(v.b)()],U.prototype,"directionsSupportedLanguages",void 0),Object(j.a)([Object(v.b)()],U.prototype,"directionsTimeAttribute",void 0),Object(j.a)([Object(v.b)()],U.prototype,"hasZ",void 0),Object(j.a)([Object(v.b)()],U.prototype,"impedance",void 0),Object(j.a)([Object(v.b)()],U.prototype,"networkDataset",void 0),Object(j.a)([Object(v.b)({type:[B]})],U.prototype,"supportedTravelModes",void 0);var R=U=Object(j.a)([Object(h.a)("esri.rest.support.NetworkServiceDescription")],U),D=r(719),P=r(680),x=r(759),I=r(1240),J=r(1407),E=function(e){Object(y.a)(r,e);var t=Object(f.a)(r);function r(e){var a;return Object(O.a)(this,r),(a=t.call(this,e)).directions=null,a.route=null,a.routeName=null,a.stops=null,a}return r}(m.a);Object(j.a)([Object(v.b)({type:J.a,json:{write:!0}})],E.prototype,"directions",void 0),Object(j.a)([Object(v.b)({type:D.a,json:{write:!0}})],E.prototype,"route",void 0),Object(j.a)([Object(v.b)({type:String,json:{write:!0}})],E.prototype,"routeName",void 0),Object(j.a)([Object(v.b)({type:[D.a],json:{write:!0}})],E.prototype,"stops",void 0);var F=E=Object(j.a)([Object(h.a)("esri.rest.support.RouteResult")],E);function L(e){return e&&x.default.fromJSON(e).features.map((function(e){return e}))}var C=function(e){Object(y.a)(r,e);var t=Object(f.a)(r);function r(e){var a;return Object(O.a)(this,r),(a=t.call(this,e)).barriers=null,a.messages=null,a.pointBarriers=null,a.polylineBarriers=null,a.polygonBarriers=null,a.routeResults=null,a}return Object(g.a)(r,[{key:"readPointBarriers",value:function(e,t){return L(t.barriers||t.pointBarriers)}},{key:"readPolylineBarriers",value:function(e){return L(e)}},{key:"readPolygonBarriers",value:function(e){return L(e)}}]),r}(m.a);Object(j.a)([Object(v.b)({aliasOf:"pointBarriers"})],C.prototype,"barriers",void 0),Object(j.a)([Object(v.b)({type:[I.a]})],C.prototype,"messages",void 0),Object(j.a)([Object(v.b)({type:[D.a]})],C.prototype,"pointBarriers",void 0),Object(j.a)([Object(P.a)("pointBarriers",["barriers","pointBarriers"])],C.prototype,"readPointBarriers",null),Object(j.a)([Object(v.b)({type:[D.a]})],C.prototype,"polylineBarriers",void 0),Object(j.a)([Object(P.a)("polylineBarriers")],C.prototype,"readPolylineBarriers",null),Object(j.a)([Object(v.b)({type:[D.a]})],C.prototype,"polygonBarriers",void 0),Object(j.a)([Object(P.a)("polygonBarriers")],C.prototype,"readPolygonBarriers",null),Object(j.a)([Object(v.b)({type:[F]})],C.prototype,"routeResults",void 0);var _=C=Object(j.a)([Object(h.a)("esri.rest.support.RouteResultsContainer")],C);function G(e,t,r,a){a[r]=[t.length,t.length+e.length],e.forEach((function(e){t.push(e.geometry)}))}function V(e,t){for(var r=0;r<t.length;r++){var a=e[t[r]];if(a&&a.length){var i,n=Object(s.a)(a);try{for(n.s();!(i=n.n()).done;){i.value.z=void 0}}catch(o){n.e(o)}finally{n.f()}}}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function Z(e){var t,r,a=[],i=[],n=e.data,o=n.directions,s=void 0===o?[]:o,c=n.routes,u=(c=void 0===c?{}:c).features,l=void 0===u?[]:u,p=c.spatialReference,b=void 0===p?null:p,d=n.stops,O=(d=void 0===d?{}:d).features,y=void 0===O?[]:O,f=d.spatialReference,j=void 0===f?null:f,m=n.barriers,v=n.polygonBarriers,h=n.polylineBarriers,g=n.messages,T="esri.tasks.RouteTask.NULL_ROUTE_NAME",N=!0,A=l&&b||y&&j||m&&m.spatialReference||v&&v.spatialReference||h&&h.spatialReference;s.forEach((function(e){a.push(t=e.routeName),i[t]={directions:e}})),l.forEach((function(e){-1===a.indexOf(t=e.attributes.Name)&&(a.push(t),i[t]={}),e.geometry&&(e.geometry.spatialReference=A),i[t].route=e})),y.forEach((function(e){r=e.attributes,-1===a.indexOf(t=r.RouteName||T)&&(a.push(t),i[t]={}),t!==T&&(N=!1),e.geometry&&(e.geometry.spatialReference=A),null==i[t].stops&&(i[t].stops=[]),i[t].stops.push(e)})),y.length>0&&!0===N&&(i[a[0]].stops=i[T].stops,delete i[T],a.splice(a.indexOf(T),1));var w=a.map((function(e){return i[e].routeName=e===T?null:e,i[e]}));return _.fromJSON({routeResults:w,pointBarriers:m,polygonBarriers:v,polylineBarriers:h,messages:g})}function H(e,t){for(var r=0;r<t.length;r++){var a=e[t[r]];if(a&&a.length){var i,n=Object(s.a)(a);try{for(n.s();!(i=n.n()).done;){var o=i.value;if(Object(l.i)(o)&&o.hasZ)return!0}}catch(c){n.e(c)}finally{n.f()}}}return!1}function z(e,t,r){return K.apply(this,arguments)}function K(){return(K=Object(o.a)(n.a.mark((function e(t,r,a){var i,o,s,l,p,b,O,y;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new u.a("network-service:missing-url","Url to Network service is missing");case 2:return i=Object(d.a)({f:"json",token:r},a),e.next=5,Object(c.default)(t,i);case 5:for(o=e.sent,(s=o.data).supportedTravelModes||(s.supportedTravelModes=[]),l=0;l<s.supportedTravelModes.length;l++)s.supportedTravelModes[l].id||(s.supportedTravelModes[l].id=s.supportedTravelModes[l].itemId);return p=s.currentVersion>=10.4?Y(t,r,a):W(t,a),e.next=12,p;case 12:return b=e.sent,O=b.defaultTravelMode,y=b.supportedTravelModes,e.abrupt("return",(s.defaultTravelMode=O,s.supportedTravelModes=y,R.fromJSON(s)));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){return $.apply(this,arguments)}function $(){return($=Object(o.a)(n.a.mark((function e(t,r){var a,i,o,u,l,O,y,f,j,m,v,h,g,T,N,A,w,M,k,S,B,U,R,D,P,x;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Object(d.a)({f:"json"},r),e.next=3,Object(c.default)(t.replace(/\/rest\/.*$/i,"/info"),o);case 3:if(u=e.sent,(l=u.data)&&l.owningSystemUrl){e.next=7;break}return e.abrupt("return",{supportedTravelModes:[],defaultTravelMode:null});case 7:return O=l.owningSystemUrl,y=Object(b.I)(O)+"/sharing/rest/portals/self",e.next=11,Object(c.default)(y,o);case 11:if(f=e.sent,j=f.data,m=Object(p.b)("helperServices.routingUtilities.url",j)){e.next=16;break}return e.abrupt("return",{supportedTravelModes:[],defaultTravelMode:null});case 16:return v=Object(d.c)(O),h=/\/solve$/i.test(v.path)?"Route":/\/solveclosestfacility$/i.test(v.path)?"ClosestFacility":"ServiceAreas",g=Object(d.a)({f:"json",serviceName:h},r),T=Object(b.I)(m)+"/GetTravelModes/execute",e.next=22,Object(c.default)(T,g);case 22:if(N=e.sent,A=[],w=null,null!=N&&null!=(a=N.data)&&null!=(i=a.results)&&i.length){M=N.data.results,k=Object(s.a)(M);try{for(k.s();!(S=k.n()).done;)if("supportedTravelModes"===(B=S.value).paramName){if(null!=(U=B.value)&&U.features){R=Object(s.a)(B.value.features);try{for(R.s();!(D=R.n()).done;)(P=D.value.attributes)&&(x=JSON.parse(P.TravelMode),A.push(x))}catch(n){R.e(n)}finally{R.f()}}}else"defaultTravelMode"===B.paramName&&(w=B.value)}catch(n){k.e(n)}finally{k.f()}}return e.abrupt("return",{supportedTravelModes:A,defaultTravelMode:w});case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t,r){return Q.apply(this,arguments)}function Q(){return(Q=Object(o.a)(n.a.mark((function e(t,r,a){var i,o,s,l,p,O;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=Object(d.a)({f:"json",token:r},a),o=Object(b.I)(t)+"/retrieveTravelModes",e.next=5,Object(c.default)(o,i);case 5:return s=e.sent,l=s.data,p=l.supportedTravelModes,O=l.defaultTravelMode,e.abrupt("return",{supportedTravelModes:p,defaultTravelMode:O});case 12:throw e.prev=12,e.t0=e.catch(0),new u.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}},1407:function(e,t,r){"use strict";var a=r(164),i=r(165),n=r(166),o=r(167),s=r(647),c=(r(669),r(719)),u=r(651),l=r(649),p=(r(644),r(650),r(645),r(680)),b=r(648),d=r(759),O=r(672),y=r(688),f=r(769),j=r(665),m=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).extent=null,i.features=null,i.geometryType="polyline",i.routeId=null,i.routeName=null,i.totalDriveTime=null,i.totalLength=null,i.totalTime=null,i}return Object(i.a)(r,[{key:"readFeatures",value:function(e,t){var r=this;(e||[]).forEach((function(e){r._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));var a=O.a.fromJSON(t.spatialReference);return e.map((function(e){var t=c.a.fromJSON(e),r=e.geometry&&e.geometry.spatialReference;return t.geometry&&!r&&(Object(u.p)(t.geometry).spatialReference=a),t.strings=e.strings,t.events=(e.events||[]).map((function(t){var r=new c.a({geometry:new y.a({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}},{key:"mergedGeometry",get:function(){if(!this.features)return null;var e=this.features.map((function(e){var t=e.geometry;return Object(u.p)(t)})),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}},{key:"strings",get:function(){return this.features.map((function(e){return e.strings}))}},{key:"_decompressFeatureGeometry",value:function(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}},{key:"_decompressGeometry",value:function(e,t){var r,a,i,n,o,s,c,u,l=0,p=0,b=0,d=0,O=[],y=0,f=0,j=0;if((o=e.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(o=[]),0===parseInt(o[y],32)){y=2;var m=parseInt(o[y],32);y++,s=parseInt(o[y],32),y++,1&m&&(f=o.indexOf("|")+1,c=parseInt(o[f],32),f++),2&m&&(j=o.indexOf("|",f)+1,u=parseInt(o[j],32),j++)}else s=parseInt(o[y],32),y++;for(;y<o.length&&"|"!==o[y];){r=parseInt(o[y],32)+l,y++,l=r,a=parseInt(o[y],32)+p,y++,p=a;var v=[r/s,a/s];f&&(n=parseInt(o[f],32)+b,f++,b=n,v.push(n/c)),j&&(i=parseInt(o[j],32)+d,j++,d=i,v.push(i/u)),O.push(v)}return{paths:[O],hasZ:f>0,hasM:j>0,spatialReference:t}}},{key:"_mergePolylinesToSinglePath",value:function(e,t){var r=[];(e||[]).forEach((function(e){e.paths.forEach((function(e){r=r.concat(e)}))}));var a=[],i=[0,0];return r.forEach((function(e){e[0]===i[0]&&e[1]===i[1]||(a.push(e),i=e)})),new f.a({paths:[a]},t)}}]),r}(d.default);Object(s.a)([Object(l.b)({type:j.a,json:{read:{source:"summary.envelope"}}})],m.prototype,"extent",void 0),Object(s.a)([Object(l.b)()],m.prototype,"features",void 0),Object(s.a)([Object(p.a)("features")],m.prototype,"readFeatures",null),Object(s.a)([Object(l.b)()],m.prototype,"geometryType",void 0),Object(s.a)([Object(l.b)({readOnly:!0})],m.prototype,"mergedGeometry",null),Object(s.a)([Object(l.b)()],m.prototype,"routeId",void 0),Object(s.a)([Object(l.b)()],m.prototype,"routeName",void 0),Object(s.a)([Object(l.b)({value:null,readOnly:!0})],m.prototype,"strings",null),Object(s.a)([Object(l.b)({json:{read:{source:"summary.totalDriveTime"}}})],m.prototype,"totalDriveTime",void 0),Object(s.a)([Object(l.b)({json:{read:{source:"summary.totalLength"}}})],m.prototype,"totalLength",void 0),Object(s.a)([Object(l.b)({json:{read:{source:"summary.totalTime"}}})],m.prototype,"totalTime",void 0);var v=m=Object(s.a)([Object(b.a)("esri.rest.support.DirectionsFeatureSet")],m);t.a=v}}]);
//# sourceMappingURL=22.69550f29.chunk.js.map