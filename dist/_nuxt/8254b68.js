(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10],{429:function(t,e,n){"use strict";n.r(e);var r=n(451),o=n(454),l=n(33),c=(n(105),{data:function(){return{loggedIn:!1}},mounted:function(){},methods:{logOut:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/auth/logout");case 3:console.log("Successfully logged out"),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("userData"),t.loggedIn=!1,t.$router.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Logout failed:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},created:function(){localStorage.getItem("token")&&(this.loggedIn=!0)}}),d=n(68),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"image"},[e(o.a,{staticClass:"logOutBtn d-flex justify-end",attrs:{cols:"2"}},[t.loggedIn?e(r.a,{staticClass:"primary text",attrs:{text:""},on:{click:function(e){return t.logOut()}}},[t._v("\n        Logout\n      ")]):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports},457:function(t,e,n){"use strict";var r=n(451),o=n(454),l=n(33),c=(n(105),{data:function(){return{loggedIn:!1}},mounted:function(){},methods:{logOut:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/auth/logout");case 3:console.log("Successfully logged out"),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("userData"),t.loggedIn=!1,t.$router.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Logout failed:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},created:function(){localStorage.getItem("token")&&(this.loggedIn=!0)}}),d=n(68),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"image"},[e(o.a,{staticClass:"logOutBtn d-flex justify-end",attrs:{cols:"2"}},[t.loggedIn?e(r.a,{staticClass:"primary text",attrs:{text:""},on:{click:function(e){return t.logOut()}}},[t._v("\n        Logout\n      ")]):t._e()],1)],1)])}),[],!1,null,null,null);e.a=component.exports},463:function(t,e,n){"use strict";n.r(e);var r=n(451),o=n(454),l=n(453),c=n(68),component=Object(c.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"landingPage"},[e("div",{staticClass:"btn-container"},[e(l.a,[e(o.a,[e("h3",[t._v("\n          ( Welcome to Kisqali CDK4/6Is surfers league) "),e("br"),t._v("Please click\n          start\n        ")])]),t._v(" "),e(o.a,{attrs:{cols:"12",md:"12"}},[e("nuxt-link",{attrs:{to:"/register"}},[e(r.a,{staticClass:"register-btn primary",attrs:{"x-large":""}},[t._v(" Start ")])],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},512:function(t,e,n){"use strict";n.r(e);var r=n(457),o=n(463),l={name:"landingPages",components:{Header:r.a,landingPage:o.default}},c=n(68),component=Object(c.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"homepage"},[t("section",{},[t("Header")],1),this._v(" "),t("section",{},[t("landingPage")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(429).default})}}]);