(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){e.exports={pageNumbers:"Paginator_pageNumbers__1H5RO",selectedPage:"Paginator_selectedPage__1WLHQ"}},103:function(e,t,n){e.exports={header:"Header_header__2-Rm1",loginBlock:"Header_loginBlock__1eNWS"}},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return g}));var a=n(8),r=n.n(a),s=n(16),o=n(35),i=n(5),u=n(11),c={posts:[{id:1,message:"Hi, World",likesCount:0},{id:2,message:"It is my first post!",likesCount:9}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newMessageBody:e}},m=function(e){return{type:"SET_USER_PROFILE",profile:e}},p=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:a=t.sent,n(m(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.newMessageBody,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{newPostText:"",posts:[].concat(Object(o.a)(e.posts),[n])});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(35),r=n(5),s={messages:[{id:1,message:"Hi",sender:"Dima",profileImage:"https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png"},{id:2,message:"Hi",sender:"i",profileImage:"https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg"},{id:3,message:"How are you?",sender:"Dima",profileImage:"https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png"},{id:4,message:"Where have you been?",sender:"Dima",profileImage:"https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png"},{id:5,message:"Have bee traveling to London",sender:"i",profileImage:"https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg"},{id:6,message:"It is great! I hope to see you soon",sender:"Dima",profileImage:"https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png"}],dialogs:[{id:1,name:"Dima",profileImage:"https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png"},{id:2,name:"Kostya",profileImage:"https://d2hhj3gz5jljkm.cloudfront.net/assets2/118/425/852/672/normal/avatar.jpg"},{id:3,name:"Masha",profileImage:"https://cs8.pikabu.ru/avatars/2473/x2473353-331445533.png"},{id:4,name:"Elena",profileImage:"https://sun9-66.userapi.com/c845217/v845217725/bf87/nanuNw2dUHk.jpg"}]},o=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:7,message:t.newMessageBody,sender:"i",profileImage:"https://cs4.pikabu.ru/post_img/2015/05/03/9/1430665235_1330163848.jpg"};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},11:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(97),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"79cb1f0c-0133-4c1b-acbe-fe74f3c6cf30"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e," ")).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e," ")).then((function(e){return e.data}))}},o={auth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}},i={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}}},12:function(e,t,n){e.exports={nav:"Navbar_nav__1U-y1",item:"Navbar_item__kJFsG",activeLink:"Navbar_activeLink__3m8QU",friendsContainer:"Navbar_friendsContainer__3MenN",friendsElement:"Navbar_friendsElement__zUfGb",friendsImage:"Navbar_friendsImage__2kS1j",friendsName:"Navbar_friendsName__2UbNq"}},142:function(e,t,n){e.exports=n.p+"static/media/user.b060e569.png"},144:function(e,t,n){e.exports=n.p+"static/media/preloader.27fc27b6.svg"},147:function(e,t,n){"use strict";var a=n(73),r=n(0),s=n.n(r),o=n(79),i=n.n(o),u=n(96),c=n.n(u);t.a=function(e){return s.a.createElement("div",{className:c()(i.a.message,Object(a.a)({},i.a.myMessage,"i"==e.sender))},s.a.createElement("img",{src:e.profileImage})," ",e.message)}},173:function(e,t,n){e.exports=n(303)},178:function(e,t,n){},179:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(59),o=n(98),i=n(60),u=n(61),c=n(17),l=n(29),m=n(9),p=n(36),f=n.n(p),d=Object(u.a)(15),g=Object(o.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit}," ",r.a.createElement("div",null,r.a.createElement(s.a,{placeholder:"email",name:"email",component:i.a,validate:[u.b]})," "),r.a.createElement("div",null,r.a.createElement(s.a,{placeholder:"Password",name:"password",component:i.a,type:"password",validate:[u.b,d]})),r.a.createElement("div",{className:f.a.formSummaryError},e.error," "),r.a.createElement("div",null,r.a.createElement(s.a,{component:i.a,type:"checkbox",name:"rememberMe"})," remember me"),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}));t.default=Object(c.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:l.c})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement(g,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})," ")}))},28:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(75),o=n.n(s),i=n(144),u=n.n(i);t.a=function(e){return r.a.createElement("div",{className:o.a.preloader},r.a.createElement("img",{src:u.a}))}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return f}));var a=n(8),r=n.n(a),s=n(16),o=n(5),i=n(11),u=n(37),c={userId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},m=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,s,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.auth();case 2:0===(n=e.sent).resultCode&&(a=n.data,s=a.id,o=a.email,u=a.login,t(l(s,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var a=Object(s.a)(r.a.mark((function a(s){var o,c,l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?s(m()):(c=o.data.messages.length>0?o.data.messages[0]:"Some Error",l=Object(u.a)("login",{_error:c}),s(l));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},f=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}},303:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(70),o=n.n(s),i=(n(178),n(38)),u=n(39),c=n(42),l=n(41),m=(n(179),n(9)),p=n(12),f=n.n(p),d=n(15),g=(n(96),n(147),function(e){console.log(e.friends);var t=e.friends.map((function(e){return r.a.createElement("div",{className:f.a.friendsElement},r.a.createElement("div",null,r.a.createElement("img",{src:e.profileImage,className:f.a.friendsImage})),r.a.createElement("div",{className:f.a.friendsName},e.name))}));return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:f.a.activeLink},"Profile")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/dialogs",activeClassName:f.a.activeLink},"Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:f.a.activeLink},"News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:f.a.activeLink},"Music")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:f.a.activeLink},"Settings")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:f.a.activeLink},"Find friends")),r.a.createElement("div",null,r.a.createElement("h3",null,"Friends"),r.a.createElement("div",{className:f.a.friendsContainer},t)))}),b=(n(184),function(e){return r.a.createElement("div",null,"News")}),h=(n(185),function(e){return r.a.createElement("div",null,"Music")}),v=(n(186),function(e){return r.a.createElement("div",null,"Settings")}),E=n(140),_=n(101),O=n.n(_),w=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);var o=Math.ceil(t/10),i=Object(a.useState)(1),u=Object(E.a)(i,2),c=u[0],l=u[1],m=10*(c-1)+1,p=10*c;return r.a.createElement("div",{className:O.a.pageNumbers},c>1&&r.a.createElement("button",{onClick:function(){l(c-1)}},"PREV"),n.filter((function(e){return e>=m&&e<=p})).map((function(t){return r.a.createElement("span",{className:e.currentPage===t&&O.a.selectedPage,key:t,onClick:function(){e.onPageChanged(t)}},t)})),o>c&&r.a.createElement("button",{onClick:function(){l(c+1)}},"NEXT"))},j=n(75),S=n.n(j),I=n(142),y=n.n(I),N=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+e.user.id},r.a.createElement("img",{src:null!=e.user.photos.small?e.user.photos.small:y.a,className:S.a.profileImage}))),r.a.createElement("div",null,e.user.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unfollow(e.user.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)}},"Follow")),r.a.createElement("div",null,r.a.createElement("div",null,e.user.name),r.a.createElement("div",null,e.user.status),r.a.createElement("div",null,"props.user.city"),r.a.createElement("div",null,"props.user.country"))))},C=function(e){return r.a.createElement("div",null,r.a.createElement(w,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(t){return r.a.createElement(N,{key:t.id,user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow})})))},P=n(17),k=n(8),U=n.n(k),T=n(16),x=n(35),L=n(5),D={friends:[{id:1,name:"Dima",profileImage:"https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png"},{id:2,name:"Kostya",profileImage:"https://d2hhj3gz5jljkm.cloudfront.net/assets2/118/425/852/672/normal/avatar.jpg"},{id:3,name:"Masha",profileImage:"https://cs8.pikabu.ru/avatars/2473/x2473353-331445533.png"},{id:4,name:"Elena",profileImage:"https://sun9-66.userapi.com/c845217/v845217725/bf87/nanuNw2dUHk.jpg"}]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;arguments.length>1&&arguments[1];return e},F=n(11),z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},G=function(e){return{type:"FOLLOW",userID:e}},M=function(e){return{type:"UNFOLLOW",userID:e}},R=function(e){return{type:"SET_CURRENT_PAGE",usersPageNumber:e}},H=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},B=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},W=function(){var e=Object(T.a)(U.a.mark((function e(t,n,a,r){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0,n)),e.next=3,a(n);case 3:0==e.sent.resultCode&&t(r(n)),t(B(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(L.a)(Object(L.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(L.a)(Object(L.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(L.a)(Object(L.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(L.a)(Object(L.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(L.a)(Object(L.a)({},e),{},{users:Object(x.a)(t.users)});case"SET_CURRENT_PAGE":return Object(L.a)(Object(L.a)({},e),{},{currentPage:t.usersPageNumber});case"SET_TOTAL_USERS_COUNT":return Object(L.a)(Object(L.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(L.a)(Object(L.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(L.a)(Object(L.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},q=n(28),K=function(e){return e.usersPage.users},J=function(e){return e.usersPage.pageSize},X=function(e){return e.usersPage.totalUsersCount},V=function(e){return e.usersPage.currentPage},Y=function(e){return e.usersPage.isFetching},Z=function(e){return e.usersPage.followingInProgress},$=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(q.a,null):null,r.a.createElement(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),ee=Object(P.b)((function(e){return{users:K(e),pageSize:J(e),totalUsersCount:X(e),currentPage:V(e),isFetching:Y(e),followingInProgress:Z(e)}}),{follow:function(e){return function(){var t=Object(T.a)(U.a.mark((function t(n){var a;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=F.c.follow.bind(F.c),W(n,e,a,G);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(T.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:W(n,e,F.c.unfollow.bind(F.c),M);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:R,toggleFollowingInProgress:B,getUsers:function(e,t){return function(){var n=Object(T.a)(U.a.mark((function n(a){var r;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(H(!0)),a(R(e)),n.next=4,F.c.getUsers(e,t);case 4:r=n.sent,a(H(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})($),te=n(103),ne=n.n(te),ae=function(e){return r.a.createElement("header",{className:ne.a.header},r.a.createElement("img",{scr:"https://www.freeiconspng.com/uploads/customer-support-icon-png-28.png"}),r.a.createElement("div",{className:ne.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(d.b,{to:"/login"},"Login")))},re=n(29),se=(n(97),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(ae,this.props)}}]),n}(r.a.Component)),oe=Object(P.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:re.d})(se),ie=(n(205),n(10)),ue={initialized:!1},ce=r.a.lazy((function(){return n.e(4).then(n.bind(null,310))})),le=r.a.lazy((function(){return n.e(3).then(n.bind(null,311))})),me=r.a.lazy((function(){return Promise.resolve().then(n.bind(null,205))})),pe=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){var e,t=this;return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(oe,null),r.a.createElement(g,{friends:this.props.state.sideBar.friends}),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(q.a,null)},r.a.createElement(ce,{store:t.props.store,state:t.props.state.dialogsPage}))}})," ",r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(q.a,null)},r.a.createElement(le,{state:t.props.state.profilePage,dispatch:t.props.dispatch,store:t.props.store}))}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(m.b,{path:"/news",component:b}),r.a.createElement(m.b,{path:"/music",component:h}),r.a.createElement(m.b,{path:"/settings",component:v}),r.a.createElement(m.b,{path:"/login",render:(e=me,function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(q.a,null)},r.a.createElement(e,t))})})," ")):r.a.createElement(q.a,null)}}]),n}(a.Component),fe=Object(ie.d)(m.f,Object(P.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(re.b)());Promise.all([t]).then((function(){e({type:"INITIALIZING_SUCCESS"})}))}}}))(pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=n(109),ge=n(108),be=n(146),he=n(141),ve=Object(ie.c)({profilePage:ge.b,dialogsPage:de.b,sideBar:A,usersPage:Q,auth:re.a,form:he.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZING_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{initialized:!0});default:return e}}}),Ee=Object(ie.e)(ve,Object(ie.a)(be.a));window.store=Ee;var _e,Oe=Ee;_e=Oe.getState(),o.a.render(r.a.createElement(d.a,{basename:"/social-network"}," ",r.a.createElement(P.a,{store:Oe}," ",r.a.createElement(fe,{state:_e,dispatch:Oe.dispatch.bind(Oe),store:Oe}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){e.exports={formControl:"FormsControls_formControl__YEQlj",error:"FormsControls_error__mFstw",formSummaryError:"FormsControls_formSummaryError__Sr5Qj"}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var a=n(106),r=n(0),s=n.n(r),o=n(36),i=n.n(o),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return s.a.createElement("div",{className:i.a.formControl+" "+(o?i.a.error:"")},s.a.createElement("div",null,s.a.createElement("textarea",Object.assign({},t,r))),n.touched&&n.error&&s.a.createElement("span",null,"Error"))},c=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return s.a.createElement("div",{className:i.a.formControl+" "+(o?i.a.error:"")},s.a.createElement("div",null,s.a.createElement("input",Object.assign({},t,r))),n.touched&&n.error&&s.a.createElement("span",null,'"Some error"'))}},61:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},75:function(e,t,n){e.exports={userBlock:"Users_userBlock__2XxLm",dialogsItems:"Users_dialogsItems__3orNH",dialog:"Users_dialog__3emFQ",profileImage:"Users_profileImage__2ct9i",dialogs:"Users_dialogs__2_IVC",messageContainer:"Users_messageContainer__2F1UO",foo:"Users_foo__1PNhH",pageNumbers:"Users_pageNumbers__2rIpW",preloader:"Users_preloader__2q2nn"}},79:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__21l93",dialogsItems:"Dialogs_dialogsItems__2EwAX",dialog:"Dialogs_dialog___A2C7",myMessage:"Dialogs_myMessage__gq1bj",messages:"Dialogs_messages__1Tsgy",message:"Dialogs_message__1IOKD",messageContainer:"Dialogs_messageContainer__3DbfO",foo:"Dialogs_foo__1-j02"}}},[[173,1,2]]]);
//# sourceMappingURL=main.824104cb.chunk.js.map