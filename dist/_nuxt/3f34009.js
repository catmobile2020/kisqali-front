(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9],{525:function(t,e,r){"use strict";r(9),r(13),r(18),r(19);var n=r(2),c=(r(5),r(39),r(14),r(25),r(57),r(467),r(50),r(468),r(469),r(470),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(478),r(479),r(480),r(51),r(62),r(8),r(80),r(463),r(0)),o=r(106),l=r(1);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=["sm","md","lg","xl"],v=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),j=O.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),y=O.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(v),offset:Object.keys(j),order:Object.keys(y)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var h=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=h.get(l);if(!d){var O,v;for(v in d=[],m)m[v].forEach((function(t){var e=r[t],n=w(v,t,e);n&&d.push(n)}));var j=d.some((function(t){return t.startsWith("col-")}));d.push((O={col:!j||!r.cols},Object(n.a)(O,"col-".concat(r.cols),r.cols),Object(n.a)(O,"offset-".concat(r.offset),r.offset),Object(n.a)(O,"order-".concat(r.order),r.order),Object(n.a)(O,"align-self-".concat(r.alignSelf),r.alignSelf),O)),h.set(l,d)}return t(r.tag,Object(o.a)(data,{class:d}),c)}})},535:function(t,e,r){"use strict";r.r(e);var n=r(451),c=r(525),o=r(587),l=r(69),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"landingPage"},[e("div",{staticClass:"btn-container"},[e(o.a,[e(c.a,{attrs:{cols:"12",md:"12"}},[e("nuxt-link",{staticClass:"link",attrs:{to:"/login"}},[e(n.a,{staticClass:"start-btn primary",attrs:{"x-large":""}},[t._v(" Login ")])],1),t._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:"/register"}},[e(n.a,{staticClass:"start-btn primary",attrs:{"x-large":""}},[t._v(" Register ")])],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},600:function(t,e,r){"use strict";r.r(e);var n={name:"landingPages",components:{landingPage:r(535).default}},c=r(69),component=Object(c.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"homepage"},[t("section",{},[t("landingPage")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);