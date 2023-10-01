(window.webpackJsonp=window.webpackJsonp||[]).push([[24,15],{435:function(t,e,r){"use strict";r.r(e);var n=r(464),o=r(490),l=r(32),c=(r(106),{data:function(){return{loggedIn:!1}},mounted:function(){},methods:{logOut:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/auth/logout");case 3:console.log("Successfully logged out"),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("userData"),t.loggedIn=!1,t.$router.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Logout failed:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},created:function(){localStorage.getItem("token")&&(this.loggedIn=!0)}}),d=r(68),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"image"},[e(o.a,{staticClass:"logOutBtn",attrs:{cols:"2"}},[t.loggedIn?e(n.a,{staticClass:"primary LoginBtn",on:{click:function(e){return t.logOut()}}},[t._v("\n        Logout\n      ")]):t._e()],1),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"conOfHeader mb-3"},[e("h2",{staticClass:"HeadOfConOfHeader"},[t._v("\n        National ASCVD Risk Assessment Calculator in KSA\n      ")]),t._v(" "),e("h5",{staticClass:"TextOfConOfHeader"},[t._v("\n        This interactive tool provides a user-friendly interface for robust\n        estimation of Atherosclerotic Cardiovascular Disease (ASCVD) risk in\n        the KSA population. It represents a collaborative initiative and\n        unifies the efforts to combat cardiovascular disease and improve\n        patient outcomes in the Kingdom.\n      ")])])}],!1,null,null,null);e.default=component.exports},467:function(t,e,r){"use strict";var n=r(2),o=(r(62),r(69),r(194),r(13),r(5),r(8),r(63),r(158),r(14),r(9),r(18),r(19),r(15)),l=r(89),c=r(128);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},522:function(t,e,r){"use strict";r.r(e);var n=r(464),o=r(490),l=r(584),c=r(467),d=r(489),f=r(524),h=r(32),m=(r(106),r(14),{data:function(){return{validRule:[function(t){return!!t||"Filed is Required"}],userID:null,formData:{uuid:""}}},methods:{getData:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=localStorage.getItem("userData"))&&(t.userData=JSON.parse(r),console.log("this.userData",t.userData));case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getData()},computed:{isFormValid:function(){return this.formData.uuid}}}),v=r(68),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"conOfForm"},[e("div",{staticClass:"logIn"},[e(l.a,[e("div",[e(l.a,{staticClass:"loginForm"},[e("div",{staticClass:"userID"},[e("div",{staticClass:"btn-container"},[e(d.a,[e(o.a,{attrs:{md:"6"}},[e(f.a,{staticClass:"formInput",attrs:{outlined:"",placeholder:"user id",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.uuid,callback:function(e){t.$set(t.formData,"uuid",e)},expression:"formData.uuid"}})],1),t._v(" "),t.userData&&t.userData.type_id?e(o.a,{attrs:{md:"6"}},[2===t.userData.type_id&&"one"===t.userData.step?e("nuxt-link",{staticClass:"link",attrs:{to:{name:"userDetails",query:{uuid:t.formData.uuid}}}},[e(n.a,{staticClass:"primary",attrs:{disabled:!t.isFormValid}},[t._v("\n                      Search\n                    ")])],1):2===t.userData.type_id&&"two"===t.userData.step?e("nuxt-link",{staticClass:"link",attrs:{to:{name:"userDetailsTwo",query:{uuid:t.formData.uuid}}}},[e(n.a,{staticClass:"primary",attrs:{disabled:!t.isFormValid}},[t._v("\n                      Search\n                    ")])],1):2===t.userData.type_id&&"three"===t.userData.step?e("nuxt-link",{staticClass:"link",attrs:{to:{name:"userDetailsThree",query:{uuid:t.formData.uuid}}}},[e(n.a,{staticClass:"primary",attrs:{disabled:!t.isFormValid}},[t._v("\n                      Search\n                    ")])],1):t._e()],1):t._e()],1)],1)])])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},596:function(t,e,r){"use strict";r.r(e);var header=r(435),n={components:{UserID:r(522).default,Header:header.default}},o=r(68),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"register"},[t("section",{},[t("Header")],1),this._v(" "),t("section",{staticClass:"mt-8"},[t("UserID")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(435).default,UserID:r(522).default})}}]);