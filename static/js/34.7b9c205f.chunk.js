(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{1052:function(e,t,r){"use strict";var a=r(164),n=r(165),i=r(844),o=function(){function e(t){Object(a.a)(this,e),this._programCacheByTemplate=new Map,this._rctx=t}return Object(n.a)(e,[{key:"dispose",value:function(){this._programCacheByTemplate.forEach((function(e){return e.programs.forEach((function(e){return e.dispose()}))})),this._programCacheByTemplate=null}},{key:"getProgram",value:function(e,t){var r=this;return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,(function(t){return Object(i.a)(r._rctx,e,t)})),this.getProgramTemplateInstance(e,t)}},{key:"addProgramTemplate",value:function(e,t){this._programCacheByTemplate.set(e,{constructor:t,programs:new Map})}},{key:"getProgramTemplateInstance",value:function(e,t){var r=this._programCacheByTemplate.get(e);if(r){var a=t?JSON.stringify(t):"default";if(!r.programs.has(a)){var n=r.constructor(t);r.programs.set(a,n)}return r.programs.get(a)}return null}}]),e}();t.a=o},1053:function(e,t,r){"use strict";var a=r(164),n=r(165),i=function(){function e(t){Object(a.a)(this,e),this.readFile=t}return Object(n.a)(e,[{key:"resolveIncludes",value:function(e){return this.resolve(e)}},{key:"resolve",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(r.has(e))return r.get(e);var a=this.read(e);if(!a)throw new Error("cannot find shader file ".concat(e));for(var n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,i=n.exec(a),o=[];null!=i;)o.push({path:i[1],start:i.index,length:i[0].length}),i=n.exec(a);var s=0,f="";return o.forEach((function(e){f+=a.slice(s,e.start),f+=r.has(e.path)?"":t.resolve(e.path,r),s=e.start+e.length})),f+=a.slice(s),r.set(e,f),f}},{key:"read",value:function(e){return this.readFile(e)}}]),e}();t.a=i},1693:function(e,t,r){"use strict";r.r(t);var a=r(697);r.d(t,"BufferObject",(function(){return a.a}));var n=r(695);r.d(t,"FramebufferObject",(function(){return n.a}));var i=r(888);r.d(t,"Program",(function(){return i.a}));var o=r(1052);r.d(t,"ProgramCache",(function(){return o.a}));var s=r(1124);r.d(t,"Renderbuffer",(function(){return s.a}));var f=r(694);r.d(t,"RenderingContext",(function(){return f.a}));var c=r(1053);r.d(t,"ShaderCompiler",(function(){return c.a}));var u=r(690);r.d(t,"Texture",(function(){return u.a}));var h=r(696);r.d(t,"VertexArrayObject",(function(){return h.a}));var m=r(844);r.d(t,"createProgram",(function(){return m.a})),r.d(t,"glslifyDefineMap",(function(){return m.b}));var l=r(1123);r.d(t,"createContextOrErrorHTML",(function(){return l.b}))},844:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));var a=r(888);function n(e){var t="";for(var r in e){var a=e[r];if("boolean"==typeof a)a&&(t+="#define ".concat(r,"\n"));else if("number"==typeof a)t+="#define ".concat(r," ").concat(a.toFixed(),"\n");else if("object"==typeof a){var n=a.options,i=0;for(var o in n)t+="#define ".concat(n[o]," ").concat((i++).toFixed(),"\n");t+="#define ".concat(r," ").concat(n[a.value],"\n")}}return t}function i(e,t,r,n){r=r||{},n=n||"";var i="function"==typeof t.shaders?t.shaders(r):t.shaders;return new a.a(e,n+i.vertexShader,n+i.fragmentShader,t.attributes)}},888:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));var a=r(164),n=r(165),i=(r(644),r(651)),o=r(693),s=r(694),f=r(646),c=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],u=r(699),h=999,m=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function l(){var e,t,r,a=0,n=0,i=h,o=[],s=[],f=1,c=0,l=0,d=!1,g=!1,p="";return function(e){return s=[],null!==e?_(e.replace?e.replace(/\r\n/g,"\n"):e):(o.length&&v(o.join("")),i=10,v("(eof)"),s)};function v(e){e.length&&s.push({type:m[i],data:e,position:l,line:f,column:c})}function _(u){var m;for(a=0,r=(p+=u).length;e=p[a],a<r;){switch(m=a,i){case 0:a="/"===e&&"*"===t?(o.push(e),v(o.join("")),i=h,a+1):(o.push(e),t=e,a+1);break;case 1:case 2:a=y();break;case 3:a=x();break;case 4:a="."===e||/[eE]/.test(e)?(o.push(e),i=5,t=e,a+1):"x"===e&&1===o.length&&"0"===o[0]?(i=11,o.push(e),t=e,a+1):/[^\d]/.test(e)?(v(o.join("")),i=h,a):(o.push(e),t=e,a+1);break;case 11:a=/[^a-fA-F0-9]/.test(e)?(v(o.join("")),i=h,a):(o.push(e),t=e,a+1);break;case 5:"f"===e&&(o.push(e),t=e,a+=1),a=/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(o.push(e),t=e,a+1):/[^\d]/.test(e)?(v(o.join("")),i=h,a):(o.push(e),t=e,a+1);break;case 9999:a=b();break;case 9:a=/[^\s]/g.test(e)?(v(o.join("")),i=h,a):(o.push(e),t=e,a+1);break;case h:o=o.length?[]:o,a="/"===t&&"*"===e?(l=n+a-1,i=0,t=e,a+1):"/"===t&&"/"===e?(l=n+a-1,i=1,t=e,a+1):"#"===e?(i=2,l=n+a,a):/\s/.test(e)?(i=9,l=n+a,a):(d=/\d/.test(e),g=/[^\w_]/.test(e),l=n+a,i=d?4:g?3:9999,a)}if(m!==a)switch(p[m]){case"\n":c=0,++f;break;default:++c}}return n+=a,p=p.slice(a),s}function y(){return"\r"!==e&&"\n"!==e||"\\"===t?(o.push(e),t=e,a+1):(v(o.join("")),i=h,a)}function x(){if("."===t&&/\d/.test(e))return i=5,a;if("/"===t&&"*"===e)return i=0,a;if("/"===t&&"/"===e)return i=1,a;if("."===e&&o.length){for(;U(o););return i=5,a}if(";"===e||")"===e||"("===e){if(o.length)for(;U(o););return v(e),i=h,a+1}var r=2===o.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;U(o););return i=h,a}return o.push(e),t=e,a+1}function U(e){for(var t,r,a=0;;){if(t=u.c.indexOf(e.slice(0,e.length+a).join("")),r=u.c[t],-1===t){if(a--+e.length>0)continue;r=e.slice(0,1).join("")}return v(r),l+=r.length,(o=o.slice(r.length)).length}}function b(){if(/[^\d\w_]/.test(e)){var r=o.join("");return i=u.b.indexOf(r)>-1?8:u.a.indexOf(r)>-1?7:6,v(o.join("")),i=h,a}return o.push(e),t=e,a+1}}function d(e){return function(e){var t=l(),r=[];return(r=r.concat(t(e))).concat(t(null))}(e)}var g=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function p(e,t){for(var r=t-1;r>=0;r--){var a=e[r];if("whitespace"!==a.type&&"block-comment"!==a.type){if("keyword"!==a.type)break;if("attribute"===a.data||"in"===a.data)return!0}}return!1}function v(e,t,r,a){a=a||r;var n,i=Object(f.a)(e);try{for(i.s();!(n=i.n()).done;){var o=n.value;if("ident"===o.type&&o.data===r)return a in t?t[a]++:t[a]=0,v(e,t,a+"_"+t[a],a)}}catch(s){i.e(s)}finally{i.f()}return r}function _(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"afterVersion";function a(e,t){for(var r=t;r<e.length;r++){var a=e[r];if("operator"===a.type&&";"===a.data)return r}return null}function n(e){for(var t=-1,n=0,i=-1,o=0;o<e.length;o++){var s=e[o];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(i=Math.max(i,o)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){var f=a(e,o);if(null===f)throw new Error("precision statement not followed by any semicolons!");i=Math.max(i,f)}t<i&&0===n&&(t=o)}return t+1}var i={data:"\n",type:"whitespace"},o=function(t){return t<e.length&&/[^\r\n]$/.test(e[t].data)},s=n(e);o(s-1)&&e.splice(s++,0,i);var c,u=Object(f.a)(t);try{for(u.s();!(c=u.n()).done;){var h=c.value;e.splice(s++,0,h)}}catch(m){u.e(m)}finally{u.f()}o(s-1)&&o(s)&&e.splice(s,0,i)}function y(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"lowp";_(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function x(e,t,r,a){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"lowp";_(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:a.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function U(e,t){for(var r,a,n=-1,i=t;i<e.length;i++){var o=e[i];if("operator"===o.type&&("["===o.data&&(r=i),"]"===o.data)){a=i;break}"integer"===o.type&&(n=parseInt(o.data,10))}return r&&a&&e.splice(r,a-r+1),n}function b(e,t){var r=d(e);if("300 es"===function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"300 es",n=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/,i=Object(f.a)(e);try{for(i.s();!(t=i.n()).done;){var o=t.value;if("preprocessor"===o.type){var s=n.exec(o.data);if(s){var c=s[1].replace(/\s\s+/g," ");if(c===a)return c;if(c===r)return o.data="#version "+a,r;throw new Error("unknown glsl version: "+c)}}}}catch(u){i.e(u)}finally{i.f()}return e.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"}),null}(r,"100","300 es"))throw new Error("shader is already glsl 300 es");for(var a=null,n=null,i={},o={},s=0;s<r.length;++s){var u=r[s];switch(u.type){case"keyword":35633===t&&"attribute"===u.data?u.data="in":"varying"===u.data&&(u.data=35633===t?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(u.data.trim())&&(u.data=u.data.replace(/(2D|Cube|EXT)/g,"")),35632===t&&"gl_FragColor"===u.data&&(a||y(r,a=v(r,i,"fragColor"),"vec4"),u.data=a),35632===t&&"gl_FragData"===u.data){var h=U(r,s+1),m=v(r,i,"fragData");x(r,m,"vec4",h,"mediump"),u.data=m}else 35632===t&&"gl_FragDepthEXT"===u.data&&(n||(n=v(r,i,"gl_FragDepth")),u.data=n);break;case"ident":if(c.indexOf(u.data)>=0){if(35633===t&&p(r,s))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");u.data in o||(o[u.data]=v(r,i,u.data)),u.data=o[u.data]}}}for(var l=r.length-1;l>=0;--l){var _=r[l];if("preprocessor"===_.type){var b=_.data.match(/\#extension\s+(.*)\:/);if(b&&b[1]&&g.indexOf(b[1].trim())>=0){var T=r[l+1];r.splice(l,T&&"whitespace"===T.type?2:1)}var w=_.data.match(/\#ifdef\s+(.*)/);w&&w[1]&&g.indexOf(w[1].trim())>=0&&(_.data="#if 1");var k=_.data.match(/\#ifndef\s+(.*)/);k&&k[1]&&g.indexOf(k[1].trim())>=0&&(_.data="#if 0")}}return r.map((function(e){return"eof"!==e.type?e.data:""})).join("")}var T=function(){function e(t,r,n,i){Object(a.a)(this,e),this._context=t,this._locations=i,this._vShader=null,this._fShader=null,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===r.length&&console.error("Shaders source should not be empty!"),this._vShader=k(this._context,35633,r),this._fShader=k(this._context,35632,n),this._vShader&&this._fShader||console.error("Error loading shaders!");var f=this._context.gl,c=f.createProgram();f.attachShader(c,this._vShader),f.attachShader(c,this._fShader),i.forEach((function(e,t){return f.bindAttribLocation(c,e,t)})),f.linkProgram(c),Object(s.c)()&&!f.getProgramParameter(c,f.LINK_STATUS)&&console.error("Could not initialize shader\nVALIDATE_STATUS: "+f.getProgramParameter(c,f.VALIDATE_STATUS)+", gl error ["+f.getError()+"]infoLog: "+f.getProgramInfoLog(c)),this._glName=c,this._context.instanceCounter.increment(o.b.Program,this)}return Object(n.a)(e,[{key:"glName",get:function(){return this._glName}},{key:"dispose",value:function(){var e=this._context.gl;if(this._vShader){var t=this._vShader;e.deleteShader(t),this._vShader=null}if(this._fShader){var r=this._fShader;e.deleteShader(r),this._fShader=null}this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(o.b.Program,this))}},{key:"_getUniformLocation",value:function(e){return void 0===this._nameToUniformLocation[e]&&(this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this._glName,e)),this._nameToUniformLocation[e]}},{key:"hasUniform",value:function(e){return null!==this._getUniformLocation(e)}},{key:"setUniform1i",value:function(e,t){var r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.useProgram(this),this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}},{key:"setUniform1iv",value:function(e,t){var r=this._nameToUniform1v[e];w(r,t)&&(this._context.useProgram(this),this._context.gl.uniform1iv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=Array.from(t):S(t,r))}},{key:"setUniform2iv",value:function(e,t){var r=this._nameToUniform2[e];w(r,t)&&(this._context.useProgram(this),this._context.gl.uniform2iv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=Array.from(t):S(t,r))}},{key:"setUniform3iv",value:function(e,t){var r=this._nameToUniform3[e];w(r,t)&&(this._context.useProgram(this),this._context.gl.uniform3iv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=Array.from(t):S(t,r))}},{key:"setUniform4iv",value:function(e,t){var r=this._nameToUniform4[e];w(r,t)&&(this._context.useProgram(this),this._context.gl.uniform4iv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=Array.from(t):S(t,r))}},{key:"setUniform1f",value:function(e,t){var r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.useProgram(this),this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}},{key:"setUniform1fv",value:function(e,t){var r=this._nameToUniform1v[e];w(r,t)&&(this._context.useProgram(this),this._context.gl.uniform1fv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=Array.from(t):S(t,r))}},{key:"setUniform2f",value:function(e,t,r){var a=this._nameToUniform2[e];void 0!==a&&t===a[0]&&r===a[1]||(this._context.useProgram(this),this._context.gl.uniform2f(this._getUniformLocation(e),t,r),void 0===a?this._nameToUniform2[e]=[t,r]:(a[0]=t,a[1]=r))}},{key:"setUniform2fv",value:function(e,t){var r=this._nameToUniform2[e];w(r,t)&&(this._context.useProgram(this),this._context.gl.uniform2fv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=Array.from(t):S(t,r))}},{key:"setUniform3f",value:function(e,t,r,a){var n=this._nameToUniform3[e];void 0!==n&&t===n[0]&&r===n[1]&&a===n[2]||(this._context.useProgram(this),this._context.gl.uniform3f(this._getUniformLocation(e),t,r,a),void 0===n?this._nameToUniform3[e]=[t,r,a]:(n[0]=t,n[1]=r,n[2]=a))}},{key:"setUniform3fv",value:function(e,t){var r=this._nameToUniform3[e];w(r,t)&&(this._context.useProgram(this),this._context.gl.uniform3fv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=Array.from(t):S(t,r))}},{key:"setUniform4f",value:function(e,t,r,a,n){var i=this._nameToUniform4[e];void 0!==i&&t===i[0]&&r===i[1]&&a===i[2]&&n===i[3]||(this._context.useProgram(this),this._context.gl.uniform4f(this._getUniformLocation(e),t,r,a,n),void 0===i?this._nameToUniform4[e]=[t,r,a,n]:(i[0]=t,i[1]=r,i[2]=a,i[3]=n))}},{key:"setUniform4fv",value:function(e,t){var r=this._nameToUniform4[e];w(r,t)&&(this._context.useProgram(this),this._context.gl.uniform4fv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=Array.from(t):S(t,r))}},{key:"setUniformMatrix3fv",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this._nameToUniformMatrix3[e];D(a,t)&&(this._context.useProgram(this),this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),r,t),void 0===a?this._nameToUniformMatrix3[e]=Array.from(t):S(t,a))}},{key:"setUniformMatrix4fv",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this._nameToUniformMatrix4[e];P(a,t)&&(this._context.useProgram(this),this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),r,t),void 0===a?this._nameToUniformMatrix4[e]=Array.from(t):S(t,a))}},{key:"assertCompatibleVertexAttributeLocations",value:function(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}},{key:"stop",value:function(){}}]),e}();function w(e,t){if(Object(i.h)(e)||e.length!==t.length)return!0;for(var r=0;r<e.length;++r)if(e[r]!==t[r])return!0;return!1}function k(e,t,r){var a="webgl2"===e.webglVersion?b(r,t):r,n=e.gl,i=n.createShader(t);return n.shaderSource(i,a),n.compileShader(i),Object(s.c)()&&!n.getShaderParameter(i,n.COMPILE_STATUS)&&(console.error("Compile error in ".concat(35633===t?"vertex":"fragment"," shader")),console.error(n.getShaderInfoLog(i)),console.error(function(e){var t=2;return e.replace(/\n/g,(function(){return"\n"+function(e){return e>=1e3?e.toString():("  "+e).slice(-3)}(t++)+":"}))}(a)),"webgl2"===e.webglVersion&&(console.log("Shader source before transpilation:"),console.log(r))),i}function S(e,t){for(var r=0;r<e.length;++r)t[r]=e[r]}function D(e,t){return!!Object(i.h)(e)||(9!==e.length?w(e,t):9!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8])}function P(e,t){return!!Object(i.h)(e)||(16!==e.length?w(e,t):16!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8]||e[9]!==t[9]||e[10]!==t[10]||e[11]!==t[11]||e[12]!==t[12]||e[13]!==t[13]||e[14]!==t[14]||e[15]!==t[15])}}}]);
//# sourceMappingURL=34.7b9c205f.chunk.js.map