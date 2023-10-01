(window.webpackJsonp=window.webpackJsonp||[]).push([[23,14],{435:function(t,e,r){"use strict";r.r(e);var l=r(464),o=r(490),n=r(32),c=(r(106),{data:function(){return{loggedIn:!1}},mounted:function(){},methods:{logOut:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/auth/logout");case 3:console.log("Successfully logged out"),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("userData"),t.loggedIn=!1,t.$router.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Logout failed:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},created:function(){localStorage.getItem("token")&&(this.loggedIn=!0)}}),d=r(68),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"image"},[e(o.a,{staticClass:"logOutBtn",attrs:{cols:"2"}},[t.loggedIn?e(l.a,{staticClass:"primary LoginBtn",on:{click:function(e){return t.logOut()}}},[t._v("\n        Logout\n      ")]):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,r){"use strict";r(436);var l=r(1);e.a=Object(l.j)("spacer","div","v-spacer")},521:function(t,e,r){"use strict";r.r(e);var l=r(464),o=r(525),n=r(433),c=r(490),d=r(584),m=r(588),v=r(185),_=r(489),f=r(446),h=r(524),D=(r(35),r(32)),C=(r(106),{data:function(){return{validRule:[function(t){return!!t||"Filed is Required"}],showDialog:!1,pressureScale:null,bloodSugarLevel:null,userData:{},formData:{uuid:this.$route.query.uuid,systolic_blood_pressure:"",diastolic_blood_pressure:"",weight:"",height:"",blood_sugar:"",pulse:""}}},computed:{isFormValid:function(){return this.formData.systolic_blood_pressure&&this.formData.diastolic_blood_pressure&&this.formData.weight&&this.formData.height&&this.formData.blood_sugar&&this.formData.pulse}},methods:{submit:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/step-three/update",t.formData);case 3:e.sent,t.showDialog=!0,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("API Error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getData:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/step-three/show/".concat(t.formData.uuid));case 3:data=e.sent,t.userData=data.data,console.error("userData:",t.userData),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("API Error:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},created:function(){this.getData()}}),x=r(68),component=Object(x.a)(C,(function(){var t=this,e=t._self._c;return t.userData?e("div",{staticClass:"conOfForm logIn"},[e(d.a,{staticClass:"loginForm"},[e("div",{staticClass:"userDetails"},[e(_.a,[2==t.userData.step?e(c.a,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"step"},[t._v("\n            Step\n            "),e("span",{staticClass:"stepNum"},[t._v(" 3 ")])])]):e(c.a,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"step"},[t._v("\n            Step\n            "),e("span",{staticClass:"stepNum"},[t._v(" 4 ")]),t._v(" "),e("span",{staticClass:"completed"},[t._v("Completed")])])]),t._v(" "),e(c.a,{attrs:{cols:"12",md:"12"}},[e("div",{staticClass:"text-field-style"},[e("h3",[t._v("Personal Information")]),t._v(" "),e("div",{staticClass:"d-flex"},[e("p",{staticClass:"text-field-style"},[t._v("Name : "+t._s(t.userData.name))]),t._v(" "),e("p",{staticClass:"text-field-style"},[t._v("age : "+t._s(t.userData.age))]),t._v(" "),e("p",{staticClass:"text-field-style"},[t._v("gender : "+t._s(t.userData.gender))]),t._v(" "),e("p",{staticClass:"text-field-style"},[t._v("\n                national id : "+t._s(t.userData.national_id)+"\n              ")])])]),t._v(" "),e(_.a,{staticClass:"d-flex"},[e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Family history of premature CAD :\n                "+t._s(t.userData.family_history_of_premature_CAD)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Diabetic :\n                "+t._s(t.userData.diabetic)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Hypertensive :\n                "+t._s(t.userData.hypertensive)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Dyslipidemia :\n                "+t._s(t.userData.dyslipidemia)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Smoker :\n                "+t._s(t.userData.smoker)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Lipid Test :\n                "+t._s(t.userData.lipid_test)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                hpa1c :\n                "+t._s(t.userData.hpa1c)+"\n              ")])])],1)],1),t._v(" "),e(c.a,{staticClass:"d-flex"},[e(_.a,[e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("Systolic Blood Pressure")]),t._v(" "),e(h.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.systolic_blood_pressure,callback:function(e){t.$set(t.formData,"systolic_blood_pressure",e)},expression:"formData.systolic_blood_pressure"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("Diastolic Blood Pressure")]),t._v(" "),e(h.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.diastolic_blood_pressure,callback:function(e){t.$set(t.formData,"diastolic_blood_pressure",e)},expression:"formData.diastolic_blood_pressure"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("weight")]),t._v(" "),e(h.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",e)},expression:"formData.weight"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("height")]),t._v(" "),e(h.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.height,callback:function(e){t.$set(t.formData,"height",e)},expression:"formData.height"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("Blood Sugar")]),t._v(" "),e(h.a,{staticClass:"formInput",attrs:{outlined:"",placeholder:"Number",required:"","hide-details":"auto",type:"number",solo:"",rules:t.validRule},model:{value:t.formData.blood_sugar,callback:function(e){t.$set(t.formData,"blood_sugar",e)},expression:"formData.blood_sugar"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("pulse")]),t._v(" "),e(h.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.pulse,callback:function(e){t.$set(t.formData,"pulse",e)},expression:"formData.pulse"}})],1)],1)],1)],1)],1),t._v(" "),e(c.a,{staticClass:"d-flex justify-center",attrs:{md:"12"}},[e(l.a,{staticClass:"primary SubmitBtn",attrs:{disabled:!t.isFormValid},on:{click:function(e){return t.submit()}}},[t._v("\n        Submit\n      ")])],1),t._v(" "),e(m.a,{attrs:{"max-width":"500"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[e(o.a,[e(n.c,{staticClass:"d-flex justify-center"},[e("h3",[t._v(t._s(t.formData.name))]),t._v(" "),e(v.a,{staticClass:"mark"},[t._v(" mdi-checkbox-marked-circle ")])],1),t._v(" "),e(n.b,[e("span",{staticClass:"thankYou"},[t._v("Thank You For Your Registration")])]),t._v(" "),e(n.a,{staticClass:"pb-10"},[e(f.a),t._v(" "),e("nuxt-link",{attrs:{to:"userID"}},[e(l.a,{attrs:{color:"primary"},on:{click:function(e){t.showDialog=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},595:function(t,e,r){"use strict";r.r(e);var header=r(435),l=r(521),o={components:{Header:header.default,UserDetailsTwo:l.default}},n=r(68),component=Object(n.a)(o,(function(){var t=this._self._c;return t("div",{},[t("section",{},[t("Header")],1),this._v(" "),t("section",{staticClass:"mt-8"},[t("UserDetailsTwo")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(435).default,UserDetailsTwo:r(521).default})}}]);