(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{437:function(e,t,n){"use strict";n.r(t);var o=n(443),r=n(497),l=n(32),c=(n(106),{data:function(){return{loggedIn:!1}},mounted:function(){},methods:{logOut:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$post("/auth/logout");case 3:console.log("Successfully logged out"),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("userData"),e.loggedIn=!1,e.$router.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Logout failed:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},created:function(){localStorage.getItem("token")&&(this.loggedIn=!0)}}),d=n(69),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"image"},[t(r.a,{staticClass:"logOutBtn d-flex justify-end",attrs:{cols:"2"}},[e.loggedIn?t(o.a,{staticClass:"primary text",attrs:{text:""},on:{click:function(t){return e.logOut()}}},[e._v("\n        Logout\n      ")]):e._e()],1)],1)])}),[],!1,null,null,null);t.default=component.exports},598:function(e,t,n){"use strict";n.r(t);var header=n(437),o=n(537),r={components:{Header:header.default,UserDetailsThree:o.default}},l=n(69),component=Object(l.a)(r,(function(){var e=this._self._c;return e("div",{},[e("section",{},[e("Header")],1),this._v(" "),e("section",{staticClass:"mt-8"},[e("UserDetailsThree")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(437).default,UserDetailsThree:n(537).default})}}]);