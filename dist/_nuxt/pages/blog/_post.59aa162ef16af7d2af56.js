webpackJsonp([3],{PkFN:function(t,e,n){"use strict";var r=n("Xxa5"),s=n.n(r),a=n("exGp"),o=n.n(a);e.a={asyncData:function(){var t=o()(s.a.mark(function t(e){var n=e.app,r=e.route;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$content("/").get(r.path);case 2:return t.t0=t.sent,t.abrupt("return",{post:t.t0});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},"ij/3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("PkFN"),s=n("qmpD"),a=n("VU/8")(r.a,s.a,!1,null,null,null);a.options.__file="pages/blog/_post.vue",e.default=a.exports},qmpD:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" / \n    "),n("router-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" / \n    "+t._s(t.post.linktitle)+"\n  "),n("h1",{staticClass:"post-title"},[t._v(t._s(t.post.title)+" ")]),n("nuxtent-body",{attrs:{body:t.post.body}})],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s}});