__d(64,function(e,t,r,n){"use strict";function a(){var e=s.timerIDs.indexOf(null);return e===-1&&(e=s.timerIDs.length),e}function i(e,t){var r=s.GUID++,n=a();return s.timerIDs[n]=r,s.callbacks[n]=e,s.types[n]=t,r}function l(e){if(null!=e){var t=s.timerIDs.indexOf(e);if(t!==-1){s._clearIndex(t);var r=s.types[t];r!==s.Type.setImmediate&&r!==s.Type.requestIdleCallback&&u.deleteTimer(e)}}}var u=t(55).Timing,s=t(60),c=(t(65),{setTimeout:function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];var l=i(function(){return e.apply(void 0,n)},s.Type.setTimeout);return u.createTimer(l,t||0,Date.now(),!1),l},setInterval:function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];var l=i(function(){return e.apply(void 0,n)},s.Type.setInterval);return u.createTimer(l,t||0,Date.now(),!0),l},setImmediate:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=i(function(){return e.apply(void 0,r)},s.Type.setImmediate);return s.immediates.push(a),a},requestAnimationFrame:function(e){var t=i(e,s.Type.requestAnimationFrame);return u.createTimer(t,1,Date.now(),!1),t},requestIdleCallback:function(e){0===s.requestIdleCallbacks.length&&u.setSendIdleEvents(!0);var t=i(e,s.Type.requestIdleCallback);return s.requestIdleCallbacks.push(t),t},cancelIdleCallback:function(e){l(e);var t=s.requestIdleCallbacks.indexOf(e);t!==-1&&s.requestIdleCallbacks.splice(t,1),0===s.requestIdleCallbacks.length&&u.setSendIdleEvents(!1)},clearTimeout:function(e){l(e)},clearInterval:function(e){l(e)},clearImmediate:function(e){l(e);var t=s.immediates.indexOf(e);t!==-1&&s.immediates.splice(t,1)},cancelAnimationFrame:function(e){l(e)}});r.exports=c});