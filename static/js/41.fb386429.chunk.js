(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[41,187],{1129:function(e,r,a){"use strict";function t(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}a.d(r,"a",(function(){return t}))},1235:function(e,r,a){"use strict";a.r(r),a.d(r,"fromItem",(function(){return L})),a.d(r,"selectLayerClassPath",(function(){return f}));var t=a(652),n=a.n(t),c=a(653),u=a(43),i=a(655),s=a(1004),y=a(902),o=a(1236),l=a(1129),p=a(1238);function L(e){return!e.portalItem||e.portalItem instanceof y.default||(e=Object(u.a)(Object(u.a)({},e),{},{portalItem:new y.default(e.portalItem)})),function(e){return e.load().then(f).then(d)}(e.portalItem).then((function(r){var a=Object(u.a)({portalItem:e.portalItem},r.properties),t=r.constructor;return Promise.resolve(new t(a))}))}function f(e){switch(e.type){case"Map Service":return function(e){return Object(p.a)(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}));case"Feature Service":return function(e){return S(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return b.apply(this,arguments)}(e);case"Scene Service":return function(e){return S(e).then((function(r){if("object"==typeof r){var a,t={};if(null!=r.id?(t.layerId=r.id,a="".concat(e.url,"/layers/").concat(r.id)):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var n={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},c=0,u=Object.keys(n);c<u.length;c++){var i=u[c];if(-1!==e.typeKeywords.indexOf(i))return{className:n[i]}}return Object(p.a)(a).then((function(e){var r="SceneLayer",a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return m.apply(this,arguments)}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Feed":return{className:"StreamLayer"};default:return Promise.reject(new i.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,s.a[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function b(){return(b=Object(c.a)(n.a.mark((function e(r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!Object(l.a)(r,"Map Notes")){e.next=4;break}return e.abrupt("return",{className:"MapNotesLayer"});case 4:if(!Object(l.a)(r,"Route Layer")){e.next=6;break}return e.abrupt("return",{className:"RouteLayer"});case 6:return e.next=8,r.fetchData();case 8:return a=e.sent,e.abrupt("return",1===Object(o.getNumLayersAndTables)(a)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(c.a)(n.a.mark((function e(r){var a,t,c,u,i,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!((u=null!=(a=null==(t=r.typeKeywords)?void 0:t.map((function(e){return e.toLowerCase()})))?a:[]).indexOf("elevation 3d layer")>-1)){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!(u.indexOf("tiled imagery")>-1)){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(i=e.sent,"ArcGISTiledImageServiceLayer"!==(s=null==i?void 0:i.layerType)){e.next=13;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 13:if("ArcGISImageServiceLayer"!==s){e.next=15;break}return e.abrupt("return",{className:"ImageryLayer"});case 15:return e.next=17,Object(p.a)(r.url);case 17:if(e.t0=c=e.sent.cacheType,null!=e.t0){e.next=22;break}e.t1=void 0,e.next=23;break;case 22:e.t1=c.toLowerCase();case 23:if(e.t2=e.t1,"map"!==e.t2){e.next=28;break}e.t3={className:"ImageryTileLayer"},e.next=29;break;case 28:e.t3={className:"ImageryLayer"};case 29:return e.abrupt("return",e.t3);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((function(){return e.fetchData()})).then(function(){var r=Object(c.a)(n.a.mark((function r(a){return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==e.type){r.next=6;break}return r.t0=I,r.next=4,Object(o.preprocessFSItemData)(a,e.url);case 4:return r.t1=a=r.sent,r.abrupt("return",(0,r.t0)(r.t1));case 6:return r.abrupt("return",Object(o.getNumLayersAndTables)(a)>0?I(a):Object(p.a)(e.url).then(I));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function I(e){return 1===Object(o.getNumLayersAndTables)(e)&&{id:Object(o.getFirstLayerOrTableId)(e)}}},1680:function(e,r,a){"use strict";a.r(r),a.d(r,"populateOperationalLayers",(function(){return S}));var t=a(652),n=a.n(t),c=a(646),u=a(653),i=a(684),s=(a(644),a(657)),y=a(1004),o=a(902),l=a(1129);function p(e,r){return f(e,r,"notes","Map Notes")}function L(e,r){return f(e,r,"route","Route Layer")}function f(e,r,a,t){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(n.a.mark((function e(r,a,t,c){var u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.layerType&&"ArcGISFeatureLayer"===r.layerType){e.next=2;break}return e.abrupt("return",!1);case 2:if(!r.url){e.next=4;break}return e.abrupt("return",!1);case 4:if(!r.featureCollectionType||r.featureCollectionType!==t){e.next=6;break}return e.abrupt("return",!0);case 6:if(!r.itemId){e.next=11;break}return u=new o.default({id:r.itemId,portal:a}),e.next=10,u.load();case 10:return e.abrupt("return","Feature Collection"===u.type&&Object(l.a)(u,c));case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=a(1235),m=a(1046);function S(e,r,a){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(n.a.mark((function e(r,a,t){var u,i,y,o,l,p,L,f,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:u=[],i=Object(c.a)(a);try{for(i.s();!(y=i.n()).done;)o=y.value,l=w(o,t),"GroupLayer"===o.layerType?u.push(W(l,o,t)):u.push(l)}catch(n){i.e(n)}finally{i.f()}return e.next=7,Object(s.j)(u);case 7:p=e.sent,L=Object(c.a)(p);try{for(L.s();!(f=L.n()).done;)!(d=f.value).value||t.filter&&!t.filter(d.value)||r.add(d.value)}catch(n){L.e(n)}finally{L.f()}case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},T={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},h={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},g={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},x={ArcGISFeatureLayer:"FeatureLayer"},M={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function w(e,r){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(n.a.mark((function e(r,a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O,e.next=3,A(r,a);case 3:return e.t1=e.sent,e.t2=r,e.t3=a,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,r,a){return G.apply(this,arguments)}function G(){return(G=Object(u.a)(n.a.mark((function e(r,a,t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((c=new r).read(a,t.context),e.t0="group"===c.type&&N(a),!e.t0){e.next=6;break}return e.next=6,V(c,a,t.context);case 6:return e.next=8,Object(m.a)(c,t.context);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,r){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(n.a.mark((function e(r,a){var t,c,u,i,s,l,f,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.context,c=C(t),!(u=r.layerType||r.type)&&a&&a.defaultLayerType&&(u=a.defaultLayerType),i=c[u],s=i?y.a[i]:y.a.UnknownLayer,l=t&&t.portal,!F(r)){e.next=20;break}if(!r.itemId){e.next=18;break}return f=new o.default({id:r.itemId,portal:l}),e.next=11,f.load();case 11:return e.next=13,Object(b.selectLayerClassPath)(f);case 13:if(e.t0=e.sent.className,e.t0){e.next=16;break}e.t0="UnknownLayer";case 16:d=e.t0,s=y.a[d];case 18:e.next=37;break;case 20:if("ArcGISFeatureLayer"!==u){e.next=36;break}return e.next=23,p(r,l);case 23:if(!e.sent){e.next=27;break}s=y.a.MapNotesLayer,e.next=34;break;case 27:return e.next=29,L(r,l);case 29:if(!e.sent){e.next=33;break}s=y.a.RouteLayer,e.next=34;break;case 33:N(r)&&(s=y.a.GroupLayer);case 34:e.next=37;break;case 36:r.wmtsInfo&&r.wmtsInfo.url&&r.wmtsInfo.layerIdentifier?s=y.a.WMTSLayer:"WFS"===u&&"2.0.0"!==r.wfsInfo.version&&(s=y.a.UnsupportedLayer);case 37:return e.abrupt("return",s());case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){if("ArcGISFeatureLayer"!==e.layerType||F(e))return!1;var r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function F(e){return"Feature Collection"===e.type}function C(e){var r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=h;break;case"ground":r=T;break;default:r=v}break;default:switch(e.layerContainerType){case"basemap":r=M;break;case"tables":r=x;break;default:r=g}}return r}function W(e,r,a){return B.apply(this,arguments)}function B(){return(B=Object(u.a)(n.a.mark((function e(r,a,t){var c,u,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new i.a,u=S(c,Array.isArray(a.layers)?a.layers:[],t),e.next=4,r;case 4:return s=e.sent,e.next=7,u;case 7:if("group"!==s.type){e.next=9;break}return e.abrupt("return",(s.layers.addMany(c),s));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,r,a){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(n.a.mark((function e(r,a,t){var c,u,i,s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=y.a.FeatureLayer,e.next=3,c();case 3:u=e.sent,i=a.featureCollection,s=i.showLegend,o=i.layers.map((function(e){var r=new u;return r.read(e,t),null!=s&&r.read({showLegend:s},t),r})),r.layers.addMany(o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=41.fb386429.chunk.js.map