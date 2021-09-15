(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[185],{1271:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var a=r(164),i=r(165),n=r(166),s=r(167),o=r(647),u=r(670),c=r(703),l=r(649),h=(r(644),r(650),r(645),r(648)),p={visible:"visibleSublayers"},y=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).scale=0,i}return Object(i.a)(r,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(p[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,r=null==e?void 0:e.sublayers,a=[];return null==r||r.forEach((function e(r){var i=r.minScale,n=r.maxScale,s=r.sublayers;r.visible&&(0===t||(0===i||t<=i)&&(0===n||t>=n))&&(s?s.forEach(e):a.unshift(r))})),a}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency,version:e.version,layers:t}}}]),r}(Object(c.b)(u.a));Object(o.a)([Object(l.b)()],y.prototype,"layer",null),Object(o.a)([Object(l.b)({readOnly:!0})],y.prototype,"layers",null),Object(o.a)([Object(l.b)({type:Number})],y.prototype,"scale",void 0),Object(o.a)([Object(l.b)({readOnly:!0})],y.prototype,"version",null),Object(o.a)([Object(l.b)({readOnly:!0})],y.prototype,"visibleSublayers",null),y=Object(o.a)([Object(h.a)("esri.layers.support.ExportWMSImageParameters")],y)},1869:function(e,t,r){"use strict";r.r(t);var a=r(43),i=r(652),n=r.n(i),s=r(653),o=r(164),u=r(165),c=r(166),l=r(167),h=r(647),p=r(655),y=r(645),m=r(657),b=r(649),v=(r(644),r(650),r(648)),f=r(665),d=r(959),g=r(757),O=r(1024),j=r(756),w=r(934),x=r(728),k=r(1271),P=function(e){var t=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"initialize",value:function(){this.exportImageParameters=new k.a({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"exportImageVersion",get:function(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}},{key:"fetchPopupFeatures",value:function(e){var t=this.layer;if(!e)return Promise.reject(new p.a("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));var r=t.popupEnabled;if(!r)return Promise.reject(new p.a("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));var a=this.createFetchPopupFeaturesQuery(e);if(!a)return Promise.resolve([]);var i=a.extent,n=a.width,s=a.height,o=a.x,u=a.y;if(!(i&&n&&s))throw new p.a("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:n,height:s});var c=t.fetchFeatureInfo(i,n,s,o,u);return Promise.resolve(c?[c]:[])}}]),r}(e);return Object(h.a)([Object(b.b)()],t.prototype,"exportImageParameters",void 0),Object(h.a)([Object(b.b)({readOnly:!0})],t.prototype,"exportImageVersion",null),Object(h.a)([Object(b.b)()],t.prototype,"layer",void 0),Object(h.a)([Object(b.b)(x.a)],t.prototype,"timeExtent",void 0),t=Object(h.a)([Object(v.a)("esri.layers.mixins.WMSLayerView")],t)},S=y.a.getLogger("esri.views.2d.layers.WMSLayerView2D"),I=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"initialize",value:function(){var e=this.layer,t=this.view;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new p.a("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}},{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this.strategy.update(e).catch((function(e){Object(m.m)(e)||S.error(e)}))}},{key:"attach",value:function(){var e=this,t=this.layer,r=t.imageMaxHeight,a=t.imageMaxWidth;this._bitmapContainer=new d.a,this.container.addChild(this._bitmapContainer),this.strategy=new O.a({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(function(){return e.requestUpdate()})),"exportImageVersion")}},{key:"detach",value:function(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"createFetchPopupFeaturesQuery",value:function(e){var t=this.view,r=this._bitmapContainer,a=e.x,i=e.y,n=t.spatialReference,s=null,o=0,u=0;if(r.children.some((function(e){var t=e.width,r=e.height,c=e.resolution,l=e.x,h=e.y,p=l+c*t,y=h-c*r;return a>=l&&a<=p&&i<=h&&i>=y&&(s=new f.a({xmin:l,ymin:y,xmax:p,ymax:h,spatialReference:n}),o=t,u=r,!0)})),!s)return null;var c=s.width/o,l=Math.round((a-s.xmin)/c),h=Math.round((s.ymax-i)/c);return{extent:s,width:o,height:u,x:l,y:h}}},{key:"doRefresh",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,t,r,i){return this.layer.fetchImage(e,t,r,Object(a.a)({timeExtent:this.timeExtent,timestamp:this.refreshTimestamp},i))}}]),r}(P(Object(w.a)(Object(g.a)(j.a))));Object(h.a)([Object(b.b)()],I.prototype,"strategy",void 0),Object(h.a)([Object(b.b)()],I.prototype,"updating",void 0);var M=I=Object(h.a)([Object(v.a)("esri.views.2d.layers.WMSLayerView2D")],I);t.default=M}}]);
//# sourceMappingURL=185.0908904d.chunk.js.map