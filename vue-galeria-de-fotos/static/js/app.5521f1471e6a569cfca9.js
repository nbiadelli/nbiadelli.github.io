webpackJsonp([1],{"+WRO":function(t,e){},"4+hh":function(t,e){},DCdc:function(t,e){},MnqE:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("Galeria de Fotos")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(t){n("+WRO")},null,null).exports,i=n("/ocq"),s={name:"PhotoAlbums",data:function(){return{msg:"Welcome to Your Vue.js App",list:[]}},mounted:function(){var t=this;n("mtWM").get("https://jsonplaceholder.typicode.com/albums").then(function(e){t.list=e.data})}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},t._l(t.list,function(e){return o("div",{key:e.id},[o("a",{attrs:{href:"#/PhotoList/?albumId="+e.id+"&albumName="+e.title}},[o("md-card",{attrs:{"md-with-hover":""}},[o("md-ripple",[o("md-card-content",[o("img",{attrs:{src:n("zxVG"),alt:""}}),t._v(" "),o("p",[t._v(t._s(e.title))])])],1)],1)],1)])}),0)},staticRenderFns:[]};var c=n("VU/8")(s,u,!1,function(t){n("MnqE")},"data-v-841fda4e",null).exports,l={name:"PhotoEnlarge",data:function(){return{showDialog:!1}},props:{url:{type:String,default:""}},watch:{url:function(t,e){this.showDialog=!0}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-dialog",{attrs:{"md-active":t.showDialog,"md-close-on-esc":!0},on:{"update:mdActive":function(e){t.showDialog=e}}},[n("img",{attrs:{src:t.url}})])],1)},staticRenderFns:[]};var p={name:"PhotoList",components:{PhotoEnlarge:n("VU/8")(l,d,!1,function(t){n("DCdc")},"data-v-33c2bd06",null).exports},data:function(){return{photo:[],url:""}},methods:{setUrl:function(t){this.url=t+"?"+Math.random()}},mounted:function(){var t=this;n("mtWM").get("https://jsonplaceholder.typicode.com/photos?albumId="+this.$route.query.albumId).then(function(e){t.photo=e.data})}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(this.$route.query.albumName))]),t._v(" "),n("div",{staticClass:"wrapper"},t._l(t.photo,function(e){return n("md-card",{key:e.id,attrs:{"md-with-hover":""}},[n("md-ripple",[n("md-card-media",[n("img",{attrs:{src:e.url},on:{click:function(n){t.setUrl(e.url)}}})])],1)],1)}),1),t._v(" "),n("PhotoEnlarge",{attrs:{url:t.url}})],1)},staticRenderFns:[]};var h=n("VU/8")(p,m,!1,function(t){n("kpP+")},"data-v-2faf9dec",null).exports;o.default.use(i.a);var f=new i.a({routes:[{path:"/",name:"PhotoAlbums",component:c},{path:"/PhotoList",name:"PhotoList",component:h}]}),v=n("mtWM"),_=n.n(v),g=n("Rf8U"),w=n.n(g),P=n("Lgyv"),b=n.n(P);n("4+hh");o.default.use(b.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:f,components:{App:a},template:"<App/>",VueAxios:w.a,axios:_.a})},"kpP+":function(t,e){},zxVG:function(t,e,n){t.exports=n.p+"vue-galeria-de-fotos/static/img/foto.61623e2.png"}},["NHnr"]);
//# sourceMappingURL=app.5521f1471e6a569cfca9.js.map
