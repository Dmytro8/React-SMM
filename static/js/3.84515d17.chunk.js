(window["webpackJsonpsocial-network"]=window["webpackJsonpsocial-network"]||[]).push([[3],{348:function(e,a,t){e.exports={spinner:"ProfileContainer_spinner__1kaGP"}},349:function(e,a,t){e.exports={profileBg:"ProfileBg_profileBg__AbtId"}},350:function(e,a,t){e.exports={profileImg:"ProfileHeader_profileImg__27Jdq",statusBar:"ProfileHeader_statusBar__1LbSs",wrapperStatus:"ProfileHeader_wrapperStatus__1g7hI",fullName:"ProfileHeader_fullName__19hUg",profileNav:"ProfileHeader_profileNav__2Dchr"}},351:function(e,a,t){e.exports={profileStatusWrapper:"ProfileStatus_profileStatusWrapper__1-iWR",profileStatus:"ProfileStatus_profileStatus__1QAi1",profileStatusFocus:"ProfileStatus_profileStatusFocus__39Bkc",profileStatusFocusWrapper:"ProfileStatus_profileStatusFocusWrapper__DWO0C",statusInput:"ProfileStatus_statusInput__30Zu1",statusSave:"ProfileStatus_statusSave__3vGgP"}},352:function(e,a,t){e.exports={wrapper:"Posts_wrapper__2jb5B",postWrapper:"Posts_postWrapper__wFB4J",separateLine:"Posts_separateLine__3oZ5L"}},353:function(e,a,t){e.exports={wrapper:"Post_wrapper__2ut2N",details:"Post_details__1aiQW",userImg:"Post_userImg__2ipgz",userName:"Post_userName__3MxG_",addedPost:"Post_addedPost__6mUvV",createdDate:"Post_createdDate__YXvcN",changes:"Post_changes__NItP0",imageForPost:"Post_imageForPost__1v4O5",main:"Post_main__1KHUe",text:"Post_text__36R2h",community:"Post_community__2QQ3y",likesShareWrapper:"Post_likesShareWrapper__3TFtl",share:"Post_share__1Ocvk",likes:"Post_likes__1LNlO"}},354:function(e,a,t){e.exports={wrapper:"WhatsNew_wrapper__2KQAY",profileAvatar:"WhatsNew_profileAvatar__14nr5",inputPost:"WhatsNew_inputPost__cmEZg",wrapperMedia:"WhatsNew_wrapperMedia__38CA6",media:"WhatsNew_media__2N552",futureFeatures:"WhatsNew_futureFeatures__3AUoo",buttonAddPost:"WhatsNew_buttonAddPost__3x04o"}},355:function(e,a,t){e.exports={profileContent:"ProfileLayout_profileContent__2503B",spinner:"ProfileLayout_spinner__1Bqdg"}},365:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(58),l=t(59),i=t(62),o=t(60),c=t(61),m=t(17),u=t(34),p=(t(73),t(348)),d=t.n(p),f=t(155),_=t.n(f),E=t(349),v=t.n(E),h=function(){return n.a.createElement("div",{className:v.a.profileBg},n.a.createElement("img",{src:_.a,alt:"content"}))},N=t(48),P=t(71),w=t(100),b=t(9),g=t(350),S=t.n(g),k=t(7),W=t(110),F=t(351),O=t.n(F),x=function(e){function a(){var e,t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={editMode:!1,status:t.props.status},t.activateEditMode=function(){console.log("this: "+Object(W.a)(t)),t.setState({editMode:!0})},t.deactivateEditMode=function(){t.setState({editMode:!1})},t.updateNewStatusText=function(e){t.setState({status:e.target.value})},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:O.a.profileStatusWrapper},!this.state.editMode&&n.a.createElement("div",{className:O.a.profileStatus},this.props.status&&n.a.createElement("h4",{onClick:this.activateEditMode},this.state.status),(""===this.props.status||!this.props.status||""===this.state.status)&&n.a.createElement("h4",{onClick:this.activateEditMode},"set a status message")),this.state.editMode&&n.a.createElement("div",{className:O.a.profileStatusFocus},n.a.createElement("div",{className:O.a.profileStatusFocusWrapper},n.a.createElement("div",{className:O.a.statusInput},n.a.createElement("input",{type:"text",value:this.state.status,placeholder:"set a status message",autoFocus:!0,onChange:this.updateNewStatusText})),n.a.createElement("div",{className:O.a.statusSave},n.a.createElement("button",{onClick:this.deactivateEditMode},"Save")))))}}]),a}(n.a.Component),y=t(108),D=function(e){var a=e.name,t=e.surname,s=e.status;return n.a.createElement("div",null,n.a.createElement("div",{className:S.a.profileImg},n.a.createElement(y.a,{name:a,surname:t,path:"../../../static/images"})),n.a.createElement("div",{className:S.a.statusBar},n.a.createElement("div",{className:S.a.wrapperStatus},n.a.createElement("div",{className:S.a.fullName},n.a.createElement("h3",null,"".concat(a," ").concat(t))),n.a.createElement(x,{status:s}))),n.a.createElement("nav",{className:S.a.profileNav},n.a.createElement("ul",null,n.a.createElement("li",{className:S.a.navLinks},n.a.createElement(b.b,{to:"".concat(k.f)},"General")),n.a.createElement("li",{className:S.a.navLinks},n.a.createElement(b.b,{to:"".concat(k.f,"/posts")},"Posts")),n.a.createElement("li",{className:S.a.navLinks},n.a.createElement(b.b,{to:"".concat(k.f)},"Photos")),n.a.createElement("li",{className:S.a.navLinks},n.a.createElement(b.b,{to:"".concat(k.f)},"Videos")))))},j=t(352),I=t.n(j),B=t(353),C=t.n(B),M=t(154),L=t.n(M),A=function(e){var a=e.name,t=e.surname,s=(e.postId,e.postDescription),r=e.likesCount,l=e.time;return n.a.createElement("div",{className:C.a.wrapper},n.a.createElement("div",{className:C.a.details},n.a.createElement("div",{className:C.a.userImg},n.a.createElement(y.a,{name:a,surname:t,path:"../../../static/images"})),n.a.createElement("div",{className:C.a.info},n.a.createElement("div",null,n.a.createElement("span",{className:C.a.userName},a," ",t),n.a.createElement("span",{className:C.a.addedPost},"added new post:")),n.a.createElement("div",{className:C.a.createdDate},"".concat(l))),n.a.createElement("div",{className:C.a.changes},n.a.createElement("a",{href:"#details"},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null)))),n.a.createElement("div",{className:C.a.imageForPost},n.a.createElement("img",{src:L.a,alt:"post"})),n.a.createElement("main",{className:C.a.main},n.a.createElement("p",{className:C.a.text},s)),n.a.createElement("footer",{className:C.a.community},n.a.createElement("div",{className:C.a.comments},n.a.createElement("a",{href:"#comment"},n.a.createElement("i",{className:"far fa-comment-alt"}))),n.a.createElement("div",{className:C.a.likesShareWrapper},n.a.createElement("div",{className:C.a.share},n.a.createElement("a",{href:"#share"},n.a.createElement("i",{className:"fas fa-share"}))),n.a.createElement("div",{className:C.a.likes},n.a.createElement("a",{href:"#like"},n.a.createElement("i",{className:"far fa-heart"}," ".concat(r)))))))},U=t(141),H=t(47),Q=t(142),G=t(354),J=t.n(G),T=t(102),Z=t(27),q=function(e){var a=e.name,t=e.surname,s=e.addPost;return n.a.createElement("div",{className:J.a.wrapper},n.a.createElement("div",{className:J.a.profileAvatar},n.a.createElement(y.a,{name:a,surname:t,path:"../../../static/images"})),n.a.createElement("div",{className:J.a.inputPost},n.a.createElement(K,{onSubmit:function(e){e.newPostBody&&s(e.newPostBody)}})),n.a.createElement("div",{className:J.a.wrapperMedia},n.a.createElement("div",{className:J.a.media},n.a.createElement(b.b,{to:"#download-image"},n.a.createElement("i",{className:"fas fa-file-image"}))),n.a.createElement("div",{className:J.a.media},n.a.createElement(b.b,{to:"#download-music"},n.a.createElement("i",{className:"fas fa-music"}))),n.a.createElement("div",{className:J.a.media},n.a.createElement(b.b,{to:"#download-video"},n.a.createElement("i",{className:"fas fa-file-video"})))),n.a.createElement("div",{className:J.a.futureFeatures}))},K=Object(Q.a)({form:"addPostForm",onSubmitSuccess:function(e,a){a(Object(H.a)("addPostForm"))}})((function(e){return n.a.createElement("form",{action:"",onSubmit:e.handleSubmit},n.a.createElement(U.a,{name:"newPostBody",component:T.b,validate:[Z.a],type:"text",placeholder:"What's new?"}),n.a.createElement("div",{className:J.a.buttonAddPost},n.a.createElement("button",null,"Post")))})),R=t(355),V=t.n(R),Y=Object(m.b)((function(e){return{profile:e.profileData.profile}}),null)((function(e){return n.a.createElement("div",{className:V.a.wrapper},n.a.createElement(h,null),n.a.createElement("div",{className:V.a.profileContent},n.a.createElement(D,{name:e.profile.name,surname:e.profile.surname,status:e.profile.status}),n.a.createElement("main",null,e.children)))})),z=Object(m.b)((function(e){return{name:e.profileData.profile.name,surname:e.profileData.profile.surname,newPostDescription:e.profileData.profile.newPostDescription,posts:e.profileData.profile.posts}}),{addPost:N.a})((function(e){var a=e.name,t=e.surname,s=e.posts,r=e.addPost,l=s.map((function(e){return n.a.createElement("div",{className:I.a.postWrapper,key:e.id},n.a.createElement(A,{name:a,surname:t,postId:e.id,postDescription:e.postDescription,likesCount:e.likesCount,time:e.time}))}));return n.a.createElement("div",{className:I.a.wrapper},n.a.createElement(q,{name:a,surname:t,addPost:r}),n.a.createElement("div",null,n.a.createElement("span",{className:I.a.separateLine})),n.a.createElement("div",{className:I.a.postsWrapper},l))})),X=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.profileId)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.props.isProfileFetching?n.a.createElement("div",{className:d.a.spinner},n.a.createElement(w.a,null)):n.a.createElement(Y,null,n.a.createElement(s.Suspense,{fallback:n.a.createElement("div",{style:{position:"fixed",left:"50%",top:"50%",marginLeft:"-20px",marginTop:"-20px"}},n.a.createElement(w.a,null))},n.a.createElement(u.d,null,n.a.createElement(u.b,{component:z,path:"".concat(k.f,"/posts")}),n.a.createElement(u.b,{render:function(){return n.a.createElement("div",null,"Section with new info")},path:"".concat(k.f)}),n.a.createElement(u.b,{render:function(){return n.a.createElement("div",null,"Section with new info")},path:"".concat(k.f)}),n.a.createElement(u.b,{render:function(){return n.a.createElement("div",null,"Section with new info")},path:"".concat(k.f)})))))}}]),a}(n.a.Component),$=Object(u.h)(X),ee=Object(m.b)((function(e){return{userId:e.authData.userId,profile:e.profileData.profile,isProfileFetching:e.profileData.isProfileFetching}}),{addPost:N.a,setUserProfile:N.c,toggleIsProfileFetching:N.d,getUsers:P.b})($),ae=function(){return n.a.createElement(ee,null)};t.d(a,"default",(function(){return ae}))}}]);
//# sourceMappingURL=3.84515d17.chunk.js.map