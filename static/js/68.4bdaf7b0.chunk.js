(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[68],{1291:function(e,t,i){"use strict";var r=i(164),n=i(165),s=i(166),a=i(167),u=i(647),o=i(703),l=i(649),c=(i(644),i(650),i(645),i(648)),h=function(e){Object(s.a)(i,e);var t=Object(a.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).tiles=new Map,n}return Object(n.a)(i,[{key:"destroy",value:function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}},{key:"updating",get:function(){return this.isUpdating()}},{key:"acquireTile",value:function(e){var t=this,i=this.createTile(e);return i.once("isReady",(function(){return t.notifyChange("updating")})),this.tiles.set(e.id,i),i}},{key:"forceAttributeTextureUpload",value:function(){}},{key:"forEachTile",value:function(e){this.tiles.forEach(e)}},{key:"releaseTile",value:function(e){this.tiles.delete(e.key.id),this.disposeTile(e)}},{key:"isUpdating",value:function(){var e=!0;return this.tiles.forEach((function(t){e=e&&t.isReady})),!e}},{key:"setHighlight",value:function(){}},{key:"invalidateLabels",value:function(){}},{key:"requestUpdate",value:function(){this.layerView.requestUpdate()}}]),i}(o.a);Object(u.a)([Object(l.b)()],h.prototype,"layer",void 0),Object(u.a)([Object(l.b)()],h.prototype,"layerView",void 0),Object(u.a)([Object(l.b)()],h.prototype,"tileInfoView",void 0),Object(u.a)([Object(l.b)()],h.prototype,"updating",null);var f=h=Object(u.a)([Object(c.a)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],h);t.a=f},1857:function(e,t,i){"use strict";i.r(t);var r=i(652),n=i.n(r),s=i(653),a=i(164),u=i(165),o=i(662),l=i(112),c=i(166),h=i(167),f=i(647),d=i(644),v=(i(649),i(650),i(645),i(648)),b=i(682),p=i(646),y=i(955),_=i(651),k=i(837),g=i(729),O=i(749),m=i(714),j=i(661),w=i(664),x=i(824),S=4294967296,T=function(){function e(t){Object(a.a)(this,e),this._head=t,this._cursor=t}return Object(u.a)(e,[{key:"id",get:function(){return this._cursor.id}},{key:"baseZoom",get:function(){return this._cursor.baseZoom}},{key:"anchorX",get:function(){return this._cursor.anchorX}},{key:"anchorY",get:function(){return this._cursor.anchorY}},{key:"directionX",get:function(){return this._cursor.directionX}},{key:"directionY",get:function(){return this._cursor.directionY}},{key:"size",get:function(){return this._cursor.size}},{key:"materialKey",get:function(){return this._cursor.materialKey}},{key:"boundsCount",get:function(){return this._cursor.boundsCount}},{key:"computedMinZoom",value:function(){return this._cursor.computedMinZoom()}},{key:"setComputedMinZoom",value:function(e){return this._cursor.setComputedMinZoom(e)}},{key:"boundsComputedAnchorX",value:function(e){return this._cursor.boundsComputedAnchorX(e)}},{key:"boundsComputedAnchorY",value:function(e){return this._cursor.boundsComputedAnchorY(e)}},{key:"setBoundsComputedAnchorX",value:function(e,t){return this._cursor.setBoundsComputedAnchorX(e,t)}},{key:"setBoundsComputedAnchorY",value:function(e,t){return this._cursor.setBoundsComputedAnchorY(e,t)}},{key:"boundsCenterX",value:function(e){return this._cursor.boundsCenterX(e)}},{key:"boundsCenterY",value:function(e){return this._cursor.boundsCenterY(e)}},{key:"boundsWidth",value:function(e){return this._cursor.boundsWidth(e)}},{key:"boundsHeight",value:function(e){return this._cursor.boundsHeight(e)}},{key:"link",value:function(e){if(Object(_.i)(e._head))return this._cursor.link(e._head)}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var t,i=new e(null==(t=this._head)?void 0:t.copy());if(!i._head)return i;for(var r=i._head,n=i._head._link;n;)r._link=n.copy(),n=(r=n)._link;return i}},{key:"peekId",value:function(){var e;return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}},{key:"nextId",value:function(){for(var e=this.id;e===this.id;)if(!this.next())return!1;return!0}},{key:"save",value:function(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}},{key:"restore",value:function(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}},{key:"next",value:function(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}},{key:"lookup",value:function(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}},{key:"delete",value:function(e){for(var t=this._head,i=null;t;){if(t.delete(e))return t.isEmpty()&&Object(_.i)(i)&&(i._link=t._link),!0;i=t,t=t._link}return!1}}],[{key:"from",value:function(t){return new e(z.from(new Float32Array(t)))}}]),e}(),z=function(){function e(t){Object(a.a)(this,e),this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}return Object(u.a)(e,[{key:"isEmpty",value:function(){return this._deletedCount===this.count}},{key:"count",get:function(){return this._count||(this._count=this._computeCount()),this._count}},{key:"id",get:function(){return this._buffer[this._offset+0]},set:function(e){this._buffer[this._offset+0]=e}},{key:"baseZoom",get:function(){return this._buffer[this._offset+1]}},{key:"anchorX",get:function(){return this._buffer[this._offset+2]}},{key:"anchorY",get:function(){return this._buffer[this._offset+3]}},{key:"directionX",get:function(){return this._buffer[this._offset+4]}},{key:"directionY",get:function(){return this._buffer[this._offset+5]}},{key:"size",get:function(){return this._buffer[this._offset+6]}},{key:"materialKey",get:function(){return this._buffer[this._offset+7]}},{key:"computedMinZoom",value:function(){return this._buffer[this._offset+8]}},{key:"setComputedMinZoom",value:function(e){this._buffer[this._offset+8]=e}},{key:"boundsCount",get:function(){return this._buffer[this._offset+9]}},{key:"boundsComputedAnchorX",value:function(e){return this._buffer[this._offset+10+6*e+0]}},{key:"boundsComputedAnchorY",value:function(e){return this._buffer[this._offset+10+6*e+1]}},{key:"setBoundsComputedAnchorX",value:function(e,t){this._buffer[this._offset+10+6*e+0]=t}},{key:"setBoundsComputedAnchorY",value:function(e,t){this._buffer[this._offset+10+6*e+1]=t}},{key:"boundsCenterX",value:function(e){return this._buffer[this._offset+10+6*e+2]}},{key:"boundsCenterY",value:function(e){return this._buffer[this._offset+10+6*e+3]}},{key:"boundsWidth",value:function(e){return this._buffer[this._offset+10+6*e+4]}},{key:"boundsHeight",value:function(e){return this._buffer[this._offset+10+6*e+5]}},{key:"link",value:function(e){for(var t=this;t._link;)t=t._link;t._link=e}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var t=new e(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}},{key:"peekId",value:function(){var e=this._offset+10+6*this.boundsCount+0;return e>=this._buffer.length?0:this._buffer[e]}},{key:"next",value:function(){for(var e=0;this._offset<this._buffer.length&&e++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,this.id===S););return this.id!==S&&this._offset<this._buffer.length}},{key:"delete",value:function(e){var t=this._offset,i=this.lookup(e);if(i)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===e;)this.id=4294967295,++this._deletedCount;return this._offset=t,i}},{key:"lookup",value:function(e){var t=this._offset;if(Object(_.h)(this._offsets.instance)){this._offsets.instance=new Map;var i=this.copy();i._offset=-1;for(var r=0;i.next();)i.id!==r&&(this._offsets.instance.set(i.id,i._offset),r=i.id)}return!!this._offsets.instance.has(e)&&(this._offset=this._offsets.instance.get(e),this.id!==S||(this._offset=t,!1))}},{key:"_computeCount",value:function(){var e=this._offset,t=0;for(this._offset=-1;this.next();)t++;return this._offset=e,t}}],[{key:"from",value:function(t){return new e(new Float32Array(t))}}]),e}(),V=function(){function e(t,i){Object(a.a)(this,e),this._buffers=[],this.geometryType=t,this._stage=i}return Object(u.a)(e,[{key:"destroy",value:function(){this._buffers.forEach((function(e){return e.release()}))}},{key:"insert",value:function(e,t){if(t.records.byteLength){"update"===e&&this._buffers.forEach((function(e){return e.free(t)}));var i={done:!1,offset:0,vertexData:t};this._buffers.forEach((function(e){return e.insert(i)}));for(var r=1e3;!i.done&&--r;){var n=this._stage.pools.bufferData.acquire(t,this.geometryType,i.offset);n.insert(i),this._buffers.push(n)}}}},{key:"remove",value:function(e){this._buffers.forEach((function(t){return t.freeIds(e)}))}},{key:"upload",value:function(e){this._buffers.forEach((function(t){return t.upload(e)}))}},{key:"forEachCommand",value:function(e){this._buffers.forEach((function(t){return t.displayList.forEach(e)}))}}]),e}(),C=0,E=function(e){Object(c.a)(i,e);var t=Object(h.a)(i);function i(e,r,n){var s;return Object(a.a)(this,i),(s=t.call(this,e,r)).instanceId=C++,s.patchCount=0,s._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},s._patches=new y.a(100),s._lastCommitTime=0,s._lastMessageWasClear=!1,s.transforms.labelMat2d=Object(g.a)(),s._store=n,s}return Object(u.a)(i,[{key:"destroy",value:function(){Object(o.a)(Object(l.a)(i.prototype),"destroy",this).call(this),this._renderState.current.geometry.forEach((function(e){return e.destroy()}))}},{key:"labelMetrics",get:function(){return this._renderState.current.metrics}},{key:"hasData",get:function(){return!!this._renderState.current.geometry.size}},{key:"getGeometry",value:function(e){return this._renderState.current.geometry.get(e)}},{key:"setTransform",value:function(e,t){Object(o.a)(Object(l.a)(i.prototype),"setTransform",this).call(this,e,t);var r=this.transforms.labelMat2d,n=e.getScreenTransform(r,t),s=Object(m.a)();Object(O.n)(s,this.coords,n),Object(k.d)(r),Object(k.h)(r,r,s),Object(k.e)(r,e.viewMat2d,r)}},{key:"patch",value:function(e){this.patchCount++,e.clear&&this._lastMessageWasClear||(this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=50&&this._dropPatches(),this._patches.enqueue(e),this.requestRender())}},{key:"commit",value:function(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(var t=0;t<4;t++)this._updateMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}},{key:"lock",value:function(){this._renderState.locked=!0}},{key:"unlock",value:function(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}},{key:"_swapRenderStates",value:function(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=8,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}},{key:"_swap",value:function(){this._renderState.swap&&(this._renderState.swap=!1,Object(_.i)(this._renderState.next)&&(this._renderState.current.geometry.forEach((function(e){return e.destroy()})),this._renderState.current=this._renderState.next,this._renderState.next=null))}},{key:"_flushUpdates",value:function(){for(var e=this._patches.maxSize;this._patches.size&&e--;)this._updateMesh(),this._swap()}},{key:"_updateMesh",value:function(){var e=this._patches.peek();if(!Object(_.i)(e)||!e.clear||null===this._renderState.next){var t=this._patches.dequeue();if(Object(_.i)(t)){if(!0===t.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(t),t.end&&(this.ready(),this._swapRenderStates())}}}},{key:"_patch",value:function(e){var t=this;Object(w.g)((function(i){t._remove(i,e.remove),t._insert(e.type,i,e.addOrUpdate,e.clear)}))}},{key:"_insert",value:function(e,t,i,r){try{var n=Object(_.q)(this._renderState.next,this._renderState.current),s=null==i?void 0:i.data[t],a=n.geometry;if(Object(_.h)(s))return;a.has(t)||a.set(t,new V(t,this.stage)),a.get(t).insert(e,s),t===j.d.LABEL&&this._insertLabelMetrics(e,s.metrics,r)}catch(u){}}},{key:"_insertLabelMetrics",value:function(e,t,i){var r=Object(_.q)(this._renderState.next,this._renderState.current);if(!Object(_.h)(t)){var n=T.from(t);if(Object(_.h)(r.metrics))r.metrics=n;else{if("update"===e)for(var s=n.getCursor();s.next();)r.metrics.delete(s.id);r.metrics.link(n)}}}},{key:"_remove",value:function(e,t){var i=Object(_.q)(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&i&&(i.remove(t),this._removeLabelMetrics(t))}},{key:"_removeLabelMetrics",value:function(e){var t=Object(_.q)(this._renderState.next,this._renderState.current).metrics;if(!Object(_.h)(t)&&e.length){var i,r=Object(p.a)(e);try{for(r.s();!(i=r.n()).done;)for(var n=i.value;t.delete(n););}catch(s){r.e(s)}finally{r.f()}}}},{key:"_dropPatches",value:function(){for(var e=this,t=new Array,i=!1;this._patches.size;){var r=this._patches.dequeue();if(Object(_.h)(r))break;if(r.clear){if(i)break;i=!0}t.push(r)}this._patches.clear(),t.forEach((function(t){return e._patches.enqueue(t)}))}}]),i}(x.a),R=i(1469),I=i(1291),M=i(803),A=i(673),U=i(657),D=i(922),F=function(e){Object(c.a)(i,e);var t=Object(h.a)(i);function i(e,r,n,s){var u;return Object(a.a)(this,i),(u=t.call(this,e))._pointToCallbacks=new Map,u._layer=n,u._layerView=r,u._onUpdate=s,u}return Object(u.a)(i,[{key:"renderChildren",value:function(e){this.attributeView.update(),this.hasAnimation&&e.painter.effects.integrate.draw(e,e.attributeView),Object(o.a)(Object(l.a)(i.prototype),"renderChildren",this).call(this,e)}},{key:"isUpdating",value:function(){return this.attributeView.isUpdating()}},{key:"hitTest",value:function(e,t){var i=[e,t],r=Object(U.g)();return this._pointToCallbacks.set(i,r),this.requestRender(),r.promise}},{key:"onTileData",value:function(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}},{key:"onTileError",value:function(e){this.contains(e)||this.addChild(e)}},{key:"doRender",value:function(e){var t=this._layer,r=t.minScale,n=t.maxScale,s=e.state.scale;s<=(r||1/0)&&s>=n&&Object(o.a)(Object(l.a)(i.prototype),"doRender",this).call(this,e)}},{key:"onAttributeStoreUpdate",value:function(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}},{key:"hasAnimation",get:function(){return this.hasLabels}},{key:"hasLabels",get:function(){if("sublayers"in this._layer)return this._layer.sublayers.some((function(e){return e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible}));var e=this._layer.featureReduction,t=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}},{key:"prepareRenderPasses",value:function(e){var t=this,r=e.registerRenderPass({name:"label",brushes:[D.a.label],target:function(){return t.hasLabels?t.children:null},drawPhase:j.c.LABEL|j.c.LABEL_ALPHA}),n=e.registerRenderPass({name:"geometry",brushes:[D.a.fill,D.a.line,D.a.marker,D.a.text],target:function(){return t.children},enableDefaultDraw:function(){return!t._layerView.hasEffects},effects:[{apply:e.effects.outsideEffect,enable:function(){return t._layerView.hasEffects},args:function(){return t._layerView.effectLists.excluded}},{apply:e.effects.insideEffect,enable:function(){return t._layerView.hasEffects},args:function(){return t._layerView.effectLists.included}},{apply:e.effects.hittest,enable:function(){return!!t._pointToCallbacks.size},args:function(){return t._pointToCallbacks}}]}),s=e.registerRenderPass({name:"highlight",brushes:[D.a.fill,D.a.line,D.a.marker,D.a.text],target:function(){return t.children},drawPhase:j.c.HIGHLIGHT,enableDefaultDraw:function(){return!1},effects:[{apply:e.effects.highlight,enable:function(){return!!t._layerView.hasHighlight()}}]});return[].concat(Object(A.a)(Object(o.a)(Object(l.a)(i.prototype),"prepareRenderPasses",this).call(this,e)),[n,s,r])}}]),i}(i(829).a),q=function(e){Object(c.a)(i,e);var t=Object(h.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(u.a)(i,[{key:"install",value:function(e){var t=this,i=new F(this.tileInfoView,this.layerView,this.layer,(function(){return t.notifyChange("updating")}));this.featuresView=i,e.addChild(i)}},{key:"uninstall",value:function(e){e.removeChild(this.featuresView),this.featuresView.destroy()}},{key:"isUpdating",value:function(){var e=Object(o.a)(Object(l.a)(i.prototype),"isUpdating",this).call(this),t=!this.featuresView||this.featuresView.isUpdating(),r=e||t;return Object(d.a)("esri-2d-log-updating")&&console.log("Updating SymbolTileRenderer ".concat(r,"\n  -> updatingTiles ").concat(e,"\n  -> updatingFeaturesView ").concat(t)),r}},{key:"hitTest",value:function(e,t){return this.featuresView.hitTest(e,t)}},{key:"supportsRenderer",value:function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}},{key:"onConfigUpdate",value:function(e){var t=null;if("visualVariables"in e){var i=(Object(R.a)(e).visualVariables||[]).map((function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=Object(M.a)(i)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)}},{key:"onTileData",value:function(e){var t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}},{key:"onTileError",value:function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}},{key:"forceAttributeTextureUpload",value:function(){this.featuresView.attributeView.forceTextureUpload()}},{key:"lockGPUUploads",value:function(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((function(e){return e.lock()}))}},{key:"unlockGPUUploads",value:function(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((function(e){return e.unlock()}))}},{key:"getMaterialItems",value:function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.featuresView.getMaterialItems(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"invalidateLabels",value:function(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}},{key:"createTile",value:function(e){var t=this.tileInfoView.getTileBounds(Object(b.g)(),e);return new E(e,t,this.featuresView.attributeView)}},{key:"disposeTile",value:function(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}}]),i}(I.a),L=q=Object(f.a)([Object(v.a)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],q);t.default=L},752:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r}));var r=function(e,t){return e&&function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return t.warn.apply(t,["DEBUG:"].concat(i))}||function(){return null}},n=!1},772:function(e,t,i){"use strict";var r=i(646),n=i(43),s=i(164),a=i(165),u=i(662),o=i(112),l=i(166),c=i(167),h=i(644),f=i(661),d=i(818),v=i(860),b=i(855),p=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},y=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var r;return Object(s.a)(this,i),(r=t.call(this))._tileInfoView=e,r}return Object(a.a)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(p),this.setStencilReference(),Object(u.a)(Object(o.a)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state;return Object(n.a)(Object(n.a)({},Object(u.a)(Object(o.a)(i.prototype),"createRenderParams",this).call(this,e)),{},{requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)})}},{key:"prepareRenderPasses",value:function(e){var t=this,r=Object(u.a)(Object(o.a)(i.prototype),"prepareRenderPasses",this).call(this,e);return r.push(e.registerRenderPass({name:"stencil",brushes:[b.a],drawPhase:f.c.DEBUG|f.c.MAP|f.c.HIGHLIGHT,target:function(){return t.getStencilTarget()}})),Object(h.a)("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[v.a],drawPhase:f.c.DEBUG,target:function(){return t.children}})),r}},{key:"getStencilTarget",value:function(){return this.children}},{key:"updateTransforms",value:function(e){var t,i=Object(r.a)(this.children);try{for(i.s();!(t=i.n()).done;){var n=t.value,s=this._tileInfoView.getTileResolution(n.key);n.setTransform(e,s)}}catch(a){i.e(a)}finally{i.f()}}},{key:"setStencilReference",value:function(){var e,t=1,i=Object(r.a)(this.children);try{for(i.s();!(e=i.n()).done;){e.value.stencilRef=t++}}catch(n){i.e(n)}finally{i.f()}}}]),i}(d.a);t.a=y},803:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return h}));var r=i(43),n=i(646),s=i(651),a=i(659),u=i(674),o=i(656),l=i(661),c=i(793);function h(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function f(e){return e.map((function(e){return function(e){return{value:e.value,size:Object(a.e)(e.size)}}(e)}))}function d(e){if("string"==typeof e||"number"==typeof e)return Object(a.e)(e);var t=e;return{type:"size",expression:t.expression,stops:f(t.stops)}}var v=function(e){for(var t=[],i=[],r=f(e),n=r.length,s=0;s<6;s++){var u=r[Math.min(s,n-1)];t.push(u.value),i.push(null==u.size?o.n:Object(a.c)(u.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}};function b(e){var t=e&&e.length>0?{}:null,i=t?{}:null;if(!t)return{vvFields:t,vvRanges:i};var s,a=Object(n.a)(e);try{for(a.s();!(s=a.n()).done;){var u=s.value;if(u.field&&(t[u.type]=u.field),"size"===u.type){i.size||(i.size={});var o=u;switch(Object(c.a)(o)){case l.e.SIZE_MINMAX_VALUE:i.size.minMaxValue={minDataValue:o.minDataValue,maxDataValue:o.maxDataValue,minSize:d(o.minSize),maxSize:d(o.maxSize)};break;case l.e.SIZE_SCALE_STOPS:i.size.scaleStops={stops:f(o.stops)};break;case l.e.SIZE_FIELD_STOPS:if(o.levels){var h={};for(var b in o.levels)h[b]=v(o.levels[b]);i.size.fieldStops={type:"level-dependent",levels:h}}else i.size.fieldStops=Object(r.a)({type:"static"},v(o.stops));break;case l.e.SIZE_UNIT_VALUE:i.size.unitValue={unit:o.valueUnit,valueRepresentation:o.valueRepresentation}}}else if("color"===u.type)i.color=_(u);else if("opacity"===u.type)i.opacity=p(u);else if("rotation"===u.type){var y=u;i.rotation={type:y.rotationType}}}}catch(k){a.e(k)}finally{a.f()}return{vvFields:t,vvRanges:i}}function p(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;for(var i=e.stops,r=0;r<8;++r){var n=i[Math.min(r,i.length-1)];t.values[r]=n.value,t.opacities[r]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var s=e.stops&&e.stops.length>=0&&e.stops[0].opacity,a=0;a<8;a++)t.values[a]=1/0,t.opacities[a]=s}return t}function y(e,t,i){e[4*t+0]=i.r/255,e[4*t+1]=i.g/255,e[4*t+2]=i.b/255,e[4*t+3]=i.a}function _(e){if(Object(s.h)(e))return null;if(e.normalizationField)return null;var t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;t.field=e.field;for(var i=e.stops,r=0;r<8;++r){var n=i[Math.min(r,i.length-1)];t.values[r]=n.value,y(t.colors,r,n.color)}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var a=e.stops&&e.stops.length>=0&&e.stops[0].color,o=0;o<8;o++)t.values[o]=1/0,y(t.colors,o,a)}for(var l=0;l<32;l+=4)Object(u.b)(t.colors,l,!0);return t}},824:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(164),n=i(166),s=i(167),a=i(656),u=function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(e,n){return Object(r.a)(this,i),t.call(this,e,n,[a.E,a.E])}return i}(i(854).a)},829:function(e,t,i){"use strict";i.d(t,"a",(function(){return q}));var r=i(43),n=i(646),s=i(652),a=i.n(s),u=i(653),o=i(164),l=i(165),c=i(662),h=i(112),f=i(166),d=i(167),v=i(657),b=i(895),p=i(655),y=i(644),_=i(645),k=i(651),g=(i(697),i(695)),O=(i(693),i(694),i(699),i(690)),m=(i(696),i(656)),j=i(664),w=i(752),x=_.a.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),S=Object(w.b)(w.a,x),T=function(e){return 2147483647&e},z=function(){function e(t,i,r){Object(o.a)(this,e),this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;var n=t.buffer,s=t.pixelType,a=t.textureOnly,u=Object(j.j)(s);this.shared=r,this.pixelType=s,this.size=i,this.textureOnly=a,a||(this.data=new u(Object(k.p)(n))),this._resetRange()}return Object(l.a)(e,[{key:"destroy",value:function(){var e=this;Object(k.a)(this._texture,(function(e){return e.dispose()}));var t=function(t){Object(k.a)(e._fbos[t],(function(e){"0"===t&&e.detachColorTexture(),e.dispose()})),e._fbos[t]=null};for(var i in this._fbos)t(i);this._texture=null}},{key:"_textureDesc",get:function(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}},{key:"setData",value:function(e,t,i){var r=T(e),n=Object(k.p)(this.data),s=r*this.texelSize+t;!n||s>=n.length||(n[s]=i,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r))}},{key:"getData",value:function(e,t){if(Object(k.h)(this.data))return null;var i=T(e)*this.texelSize+t;return!this.data||i>=this.data.length?null:this.data[i]}},{key:"getTexture",value:function(e){var t=this;return Object(k.q)(this._texture,(function(){return t._initTexture(e)}))}},{key:"getFBO",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(Object(k.h)(this._fbos[t])){var i={colorTarget:0,depthStencilTarget:0},r=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new g.a(e,i,r)}return this._fbos[t]}},{key:"locked",get:function(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!Object(y.a)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}},{key:"hasDirty",get:function(){var e=this.dirtyStart;return this.dirtyEnd>=e}},{key:"updateTexture",value:function(e,t){if(!this.locked){try{var i=this.dirtyStart,r=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();var n=Object(k.p)(this.data).buffer,s=this.getTexture(e),a=(i-i%this.size)/this.size,u=(r-r%this.size)/this.size,o=a,l=this.size,c=u,h=a*this.size*4,f=4*(l+c*this.size)-h,d=Object(j.j)(this.pixelType),v=new d(n,h*d.BYTES_PER_ELEMENT,f),b=this.size,y=c-o+1;if(y>this.size)return void x.error(new p.a("mapview-webgl","Out-of-bounds index when updating AttributeData"));s.updateData(0,0,o,b,y,v)}catch(_){}t()}}},{key:"update",value:function(e){var t=e.data,i=e.start,r=e.end;if(Object(k.i)(t))for(var n=this.data,s=i*this.texelSize,a=0;a<t.length;a++){var u=1<<a%this.texelSize;e.layout&u&&(n[s+a]=t[a])}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,r)}},{key:"resize",value:function(e,t){var i=this.size;if(this.size=t,this.textureOnly)i!==this.size&&(this._lastTexture=this._texture,this._texture=null);else{var r=Object(j.j)(this.pixelType);this.destroy(),this.data=new r(Object(k.p)(e.buffer))}}},{key:"_resetRange",value:function(){this.dirtyStart=2147483647,this.dirtyEnd=0}},{key:"_initTexture",value:function(e){var t=new O.a(e,this._textureDesc,Object(k.q)(this.data,void 0));if(Object(k.i)(this._lastTexture)&&this._fbos[0]){var i=this._lastTexture.descriptor.width,r=this._lastTexture.descriptor.height,n=this._lastTexture.descriptor.dataType,s=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),u=Object(j.k)(n),o=new(Object(j.j)(n))(new ArrayBuffer(i*r*u*this.texelSize)),l=e.getBoundFramebufferObject(),c=e.getViewport(),h=c.x,f=c.y,d=c.width,v=c.height;e.bindFramebuffer(a),a.readPixels(0,0,i,r,s,n,o),t.updateData(0,0,0,2*i,r/2,o),e.setViewport(h,f,d,v),e.bindFramebuffer(l)}return this.destroy(),this._texture=t,this._texture}}]),e}(),V=function(){function e(t){Object(o.a)(this,e),this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}return Object(l.a)(e,[{key:"initialize",value:function(e){var t=e.blocks,i=e.shared,r=e.size;if(this.shared=i,this.size=r,S("Initializing AttributeStoreView",e),Object(k.h)(this._data))this._data=Object(k.k)(t,(function(e){return new z(e,r,i)}));else for(var n=0;n<this._data.length;n++){var s=this._data[n],a=t[n];Object(k.i)(a)&&(Object(k.h)(s)?this._data[n]=new z(a,r,i):s.resize(a,r))}this._initialized=!0}},{key:"destroy",value:function(){Object(k.a)(this._data,(function(e){return Object(k.k)(e,(function(e){return e.destroy()}))})),Object(k.a)(this._defaultTexture,(function(e){return e.dispose()}))}},{key:"isUpdating",value:function(){var e=this._data;if(Object(k.h)(e))return!0;var t=Object(k.i)(this._pendingAttributeUpdate),i=t;return Object(y.a)("esri-2d-log-updating")&&console.log("Updating AttributeStoreView ".concat(i,"\n  -> hasPendingUpdate ").concat(t)),i}},{key:"getBlock",value:function(e){return Object(k.h)(this._data)?null:this._data[e]}},{key:"setLabelMinZoom",value:function(e,t){this.setData(e,0,1,t)}},{key:"getLabelMinZoom",value:function(e){return this.getData(e,0,1,255)}},{key:"getFilterFlags",value:function(e){return this.getData(e,0,0,0)}},{key:"getVVSize",value:function(e){return this.getData(e,m.b,0,0)}},{key:"getData",value:function(e,t,i,r){if(!this._data)return 0;var n=Object(k.p)(this._data)[t];if(Object(k.h)(n))return 0;var s=n.getData(e,i);return Object(k.i)(s)?s:r}},{key:"setData",value:function(e,t,i,r){var n=Object(k.p)(this._data)[t];Object(k.p)(n).setData(e,i,r)}},{key:"lockTextureUpload",value:function(){this._locked=!0}},{key:"unlockTextureUpload",value:function(){this._locked=!1}},{key:"forceTextureUpload",value:function(){this._forceNextUpload=!0}},{key:"requestUpdate",value:function(){var e=Object(u.a)(a.a.mark((function e(t){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._pendingAttributeUpdate){e.next=2;break}return e.abrupt("return",void x.error(new p.a("mapview-webgl","Tried to update attribute data with a pending update")));case 2:return i=Object(v.g)(),e.abrupt("return",(S("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:i},i.promise));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){if(this._initialized&&Object(k.i)(this._pendingAttributeUpdate)){for(var e=this._pendingAttributeUpdate,t=e.data,i=e.resolver,r=Object(k.p)(this._data),n=function(e){var i=t.blocks[e],n=r[e];Object(k.a)(n,(function(t){return Object(k.a)(i,(function(i){S("Updating block ".concat(e),i),t.update(i)}))}))},s=0;s<t.blocks.length;s++)n(s);this._pendingAttributeUpdate=null,i(),this._onUpdate()}}},{key:"bindTextures",value:function(e){var t=this;this.update();var i=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(i,m.r),e.bindTexture(i,m.s),e.bindTexture(i,m.t),void e.bindTexture(i,m.u);var r=Object(k.p)(this._data);this._locked&&!this._forceNextUpload||(Object(k.f)(r,(function(i){return i.updateTexture(e,(function(){return t._onUpdate()}))})),this._forceNextUpload=!1),e.bindTexture(Object(k.l)(r[0],i,(function(t){return t.getTexture(e)})),m.r),e.bindTexture(Object(k.l)(r[1],i,(function(t){return t.getTexture(e)})),m.s),e.bindTexture(Object(k.l)(r[2],i,(function(t){return t.getTexture(e)})),m.t),e.bindTexture(Object(k.l)(r[3],i,(function(t){return t.getTexture(e)})),m.u)}},{key:"_getDefaultTexture",value:function(e){if(Object(k.h)(this._defaultTexture)){this._defaultTexture=new O.a(e,{wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array(4))}return this._defaultTexture}}]),e}(),C=i(772),E=i(691),R=i(659),I=i(710),M=i(878),A=i(788);function U(e,t){var i=t.length;if(e<t[0].value||1===i)return t[0].size;for(var r=1;r<i;r++)if(e<t[r].value){var n=(e-t[r-1].value)/(t[r].value-t[r-1].value);return t[r-1].size+n*(t[r].size-t[r-1].size)}return t[i-1].size}function D(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(Object(k.h)(t))return e[i+0]=0,e[i+1]=0,e[i+2]=0,void(e[i+3]=0);var r=t.r,n=t.g,s=t.b,a=t.a;e[i+0]=r*a/255,e[i+1]=n*a/255,e[i+2]=s*a/255,e[i+3]=a}var F=function(){function e(){Object(o.a)(this,e),this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}return Object(l.a)(e,[{key:"getSizeVVFieldStops",value:function(e){var t=this._vvSizeFieldStops;switch(t.type){case"static":return t;case"level-dependent":return Object(k.q)(t.levels[e],(function(){var i=1/0,r=0;for(var n in t.levels){var s=parseFloat(n),a=Math.abs(e-s);a<i&&(i=a,r=s)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};var u=Math.pow(2,(e-r)/2),o=Object(k.p)(t.levels[r]),l=new Float32Array(o.values);return l[2]*=u,l[3]*=u,{sizes:Object(k.p)(o.sizes),values:l}}))}}},{key:"vvMaterialParameters",get:function(){return this._vvMaterialParameters}},{key:"update",value:function(e){Object(k.i)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}},{key:"setInfo",value:function(e,t,i){var r=this;switch(Object(k.i)(i)&&i.forEach((function(e){return r._updateEffects(e)})),this._vvInfo=t,e.type){case"dot-density":this._updateDotDensityInfo(e)}}},{key:"getVariation",value:function(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:Object(A.a)().supportsTextureFloat}}},{key:"getVariationHash",value:function(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}},{key:"_updateEffects",value:function(e){Object(k.i)(e)&&e.filter&&e.filter.enabled&&(this.outsideLabelsVisible=e.excludedLabelsVisible)}},{key:"_updateVisualVariables",value:function(e,t){var i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,e){var r=e.size;if(r){if(i.vvSizeEnabled=!0,r.minMaxValue){var n,s,a=r.minMaxValue;if(Object(j.n)(a.minSize)&&Object(j.n)(a.maxSize))if(Object(j.o)(a.minSize)&&Object(j.o)(a.maxSize))n=Object(R.c)(a.minSize),s=Object(R.c)(a.maxSize);else{var u=t.scale;n=Object(R.c)(U(u,a.minSize.stops)),s=Object(R.c)(U(u,a.maxSize.stops))}this.vvSizeMinMaxValue.set([a.minDataValue,a.maxDataValue,n,s])}if(r.scaleStops&&(this.vvSizeScaleStopsValue=Object(R.c)(U(t.scale,r.scaleStops.stops))),r.unitValue){var o=Object(I.d)(t.spatialReference)/M.a[r.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=o/t.resolution}r.fieldStops&&(this._vvSizeFieldStops=r.fieldStops)}var l=e.color;l&&(i.vvColorEnabled=!0,this.vvColorValues.set(l.values),this.vvColors.set(l.colors));var c=e.opacity;c&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(c.values),this.vvOpacities.set(c.opacities));var h=e.rotation;h&&(i.vvRotationEnabled=!0,i.vvRotationType=h.type)}}},{key:"_updateDotDensityInfo",value:function(e){var t=e.attributes;this.ddDotValue=e.dotValue,this.ddDotScale=e.referenceScale,this.ddDotSize=e.dotSize,this.ddDotBlending=e.dotBlendingEnabled,this.ddSeed=e.seed;for(var i=0;i<m.f;i++){var r=i>=t.length?new E.a([0,0,0,0]):t[i].color;D(this.ddColors,r,4*i)}for(var n=0;n<8;n++)this.ddActiveDots[n]=n<e.attributes.length?1:0;D(this.ddBackgroundColor,e.backgroundColor)}}]),e}(),q=function(e){Object(f.a)(i,e);var t=Object(d.a)(i);function i(e){var r;return Object(o.a)(this,i),(r=t.call(this,e))._rendererInfo=new F,r._materialItemsRequestQueue=new b.a,r.attributeView=new V((function(){return r.onAttributeStoreUpdate()})),r}return Object(l.a)(i,[{key:"destroy",value:function(){this.removeAllChildren(),this.children.forEach((function(e){return e.destroy()})),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}},{key:"setRendererInfo",value:function(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}},{key:"getMaterialItems",value:function(){var e=Object(u.a)(a.a.mark((function e(t,i){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&0!==t.length){e.next=2;break}return e.abrupt("return",null);case 2:return r=Object(v.g)(),e.abrupt("return",(this._materialItemsRequestQueue.push({items:t,abortOptions:i,resolver:r}),this.requestRender(),r.promise));case 4:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"doRender",value:function(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0)for(var t=this._materialItemsRequestQueue.pop();t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop();Object(c.a)(Object(h.a)(i.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){var t,r=Object(n.a)(this.children);try{for(r.s();!(t=r.n()).done;){t.value.commit(e)}}catch(s){r.e(s)}finally{r.f()}this._rendererInfo.update(e.state),Object(c.a)(Object(h.a)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){return Object(r.a)(Object(r.a)({},Object(c.a)(Object(h.a)(i.prototype),"createRenderParams",this).call(this,e)),{},{rendererInfo:this._rendererInfo,attributeView:this.attributeView})}},{key:"onAttributeStoreUpdate",value:function(){}},{key:"_processMaterialItemRequest",value:function(e,t){var i=this,r=t.items,n=t.abortOptions,s=t.resolver,a=e.painter,u=e.pixelRatio,o=r.map((function(e){return a.textureManager.rasterizeItem(e.symbol,u,e.glyphIds,n)}));Promise.all(o).then((function(e){if(i.stage){var t=e.map((function(e,t){return{id:r[t].id,mosaicItem:e}}));s.resolve(t)}else s.reject()}),s.reject)}}]),i}(C.a)},955:function(e,t,i){"use strict";var r=i(646),n=i(164),s=i(165),a=i(651),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY;Object(n.a)(this,e),this.size=0,this._start=0,this.maxSize=t,this._buffer=isFinite(t)?new Array(t):[]}return Object(s.a)(e,[{key:"entries",get:function(){return this._buffer}},{key:"enqueue",value:function(e){if(this.size===this.maxSize){var t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=e:this._buffer[this._start+this.size++]=e,null}},{key:"dequeue",value:function(){if(0===this.size)return null;var e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}},{key:"peek",value:function(){return 0===this.size?null:this._buffer[this._start]}},{key:"find",value:function(e){if(0===this.size)return null;var t,i=Object(r.a)(this._buffer);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(Object(a.i)(n)&&e(n))return n}}catch(s){i.e(s)}finally{i.f()}return null}},{key:"clear",value:function(e){for(var t=this.dequeue();Object(a.i)(t);)e&&e(t),t=this.dequeue()}}]),e}();t.a=u}}]);
//# sourceMappingURL=68.4bdaf7b0.chunk.js.map