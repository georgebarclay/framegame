webpackJsonp(["bundle.Moment"],{"/oJP":function(e,t,n){t=e.exports=n("FZ+f")(void 0),t.push([e.i,".RWEFJvNZ{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}",""]),t.locals={rightControlContainer:"RWEFJvNZ"}},"2BlP":function(e,t,n){t=e.exports=n("FZ+f")(void 0),t.push([e.i,"._1jx42qOC{padding:1.96875rem}._2Gj4UGKP{margin-bottom:.98438rem}._2oUB9gdk{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:.98438rem}",""]),t.locals={container:"_1jx42qOC",title:"_2Gj4UGKP",followButton:"_2oUB9gdk"}},"31Q0":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MomentScreen=void 0;var r=n("Zx67"),o=a(r),l=n("Zrlr"),i=a(l),u=n("wxAW"),s=a(u),d=n("zwoO"),c=a(d),f=n("Pf15"),m=a(f),p=n("E3cA"),_=a(p),h=n("bgPG"),g=n("4RsN"),w=a(g),v=n("AX2u"),b=a(v),y=n("K7g+"),k=a(y),M=n("zrmm"),x=a(M),E=n("2vbk"),A=a(E),I=n("4zkQ"),N=a(I),C=n("BdG7"),P=a(C),S=n("TuVK"),T=a(S),L=n("sETZ"),O=a(L),j=n("ne5f"),D=a(j),G=n("CH9e"),U=a(G),z=n("MJph"),V=a(z),F=n("U7vG"),B=a(F),K=n("omV+"),Z=a(K),H=n("uwYN"),W=(a(H),n("e53B")),J=n("KSGD"),Y=n("1zpx"),Q=a(Y),R=n("AQA+5"),q=a(R),X=P.default.formatMessage("Moments"),$=P.default.formatMessage("This Moment is unavailable."),ee={page:"moments",section:"capsule"},te=function(){return B.default.createElement(O.default,null)},ne=function(){return B.default.createElement(b.default,{message:$})},ae=t.MomentScreen=function(e){function t(e,n){(0,i.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e,n));return re.call(a),a.state={showOverflowActionSheet:!1},a}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.googleAnalyticsPageView,n=e.scribeNamespace;(0,e.scribePageImpression)(n),t(n)}},{key:"render",value:function(){var e=this.props,t=e.momentAuthorUsername,n=e.momentId,a=e.momentTitle,r=a||X,o=this.state.showOverflowActionSheet?B.default.createElement(D.default,{momentAuthorUsername:t,momentId:n,momentTitle:a,onClose:this._handleOverflowActionSheetClose}):null,l=B.default.createElement(N.default,{momentId:n});return B.default.createElement(k.default,{title:r},B.default.createElement(V.default.Configure,{backLocation:"/search",rightControl:this._renderRightControls(),title:a,withTabBar:!1},B.default.createElement(A.default,{className:Q.default.container,fab:l},o,B.default.createElement(Z.default,{entryConfiguration:x.default,module:this._getModule(),renderEmptyState:te,renderUnavailable:ne,title:a}))))}}]),t}(B.default.Component);ae.contextTypes={loggedInUserId:J.string},ae.defaultProps={momentTitle:""};var re=function(){var e=this;this._renderRightControls=function(){var t=e.context.loggedInUserId;return B.default.createElement(W.View,{className:q.default.rightControlContainer},t?B.default.createElement(U.default,{onClick:e._handleOverflowClick}):null)},this._getModule=(0,w.default)(this,function(e){return e.momentId},function(e){return(0,T.default)(e)}),this._handleOverflowClick=function(){e.setState({showOverflowActionSheet:!0})},this._handleOverflowActionSheetClose=function(){e.setState({showOverflowActionSheet:!1})}};t.default=(0,h.connectScribeNamespace)(ee)((0,_.default)(ae))},"4/+J":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Zx67"),o=a(r),l=n("Zrlr"),i=a(l),u=n("wxAW"),s=a(u),d=n("zwoO"),c=a(d),f=n("Pf15"),m=a(f),p=n("fHKy"),_=a(p),h=n("Xpfz"),g=a(h),w=n("FPQE"),v=a(w),b=n("yoKY"),y=a(b),k=n("ZKjz"),M=a(k),x=n("Zfgq"),E=n("U7vG"),A=a(E),I=n("uwYN"),N=(a(I),n("GWs/")),C=a(N),P=n("hUoQ"),S=a(P),T=n("e53B"),L=(n("KSGD"),n("ERKI")),O=a(L),j=y.default.messageFormatter("{formattedTotalLikes} {totalLikes, plural, one {Like} other {Likes}}"),D=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.author,n=e.category,a=e.coverMedia,r=e.momentId,o=e.timestamp,l=e.title,i=e.totalLikes,u="/i/moments/"+r,s=i>0,d=y.default.formatNumber(i),c=t?A.default.createElement(T.View,{className:O.default.author},A.default.createElement(C.default,{circle:!0,className:O.default.authorAvatar,size:"thumbnail",uri:t.profile_image_url_https,userName:t.screen_name}),A.default.createElement(S.default,{badgeContext:"content",isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,translatorType:t.translator_type,withScreenName:!1})):A.default.createElement(_.default,{className:O.default.category,color:"deepGray"},n);return A.default.createElement(x.Link,{className:O.default.container,to:u},A.default.createElement(T.View,{className:O.default.details},A.default.createElement(T.View,{className:O.default.aboveTitle},c,A.default.createElement(_.default,{"aria-hidden":"true",className:O.default.middot,color:"deepGray"},"·"),A.default.createElement(_.default,{color:"deepGray"},o)),A.default.createElement(_.default,{className:O.default.title,size:"large"},l),A.default.createElement(_.default,{className:O.default.likeCount,color:"deepGray"},s?j({formattedTotalLikes:d,totalLikes:i}):null)),A.default.createElement(g.default,{className:O.default.coverContainer,ratio:1},a?A.default.createElement(v.default,{aspectRatio:1,className:O.default.coverMedia,linkToDetail:!1,photo:a,size:"small"}):null,A.default.createElement(T.View,{className:O.default.lightningIconContainer},(0,M.default)({className:O.default.lightningIcon}))))}}]),t}(A.default.Component);t.default=D},"4JP/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapStateToProps=void 0;var a=n("4n+p"),r=n("bndy"),o=n("sLaq"),l=n("hwSH"),i=function(e){return e&&e.__esModule?e:{default:e}}(l),u=n("7t5w"),s=function(e,t){return i.default.select(e,t.momentId)},d=t.mapStateToProps=(0,r.createSelector)(s,function(e){return{isFollowing:e&&e.is_subscribed||!1}}),c={handleApiErrors:(0,o.handleApiErrors)("MOMENT_FOLLOW_BUTTON"),onFollow:i.default.follow,onUnfollow:i.default.unfollow,scribeAction:u.scribeAction};t.default=(0,a.connect)(d,c)},"4zkQ":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.FloatingMomentLikeButton=void 0;var r=n("Dd8w"),o=a(r),l=n("Zx67"),i=a(l),u=n("Zrlr"),s=a(u),d=n("wxAW"),c=a(d),f=n("zwoO"),m=a(f),p=n("Pf15"),_=a(p),h=n("cnDV"),g=a(h),w=n("bgPG"),v=n("qggS"),b=a(v),y=n("PIxW"),k=a(y),M=n("usd4"),x=a(M),E=n("iQ/+"),A=a(E),I=n("U7vG"),N=a(I),C=n("WgQH"),P=a(C),S=n("uwYN"),T=(a(S),n("KSGD"),n("zWoA")),L=a(T),O=k.default.formatMessage("Like this Moment"),j=k.default.formatMessage("Unlike this Moment"),D=t.FloatingMomentLikeButton=function(e){function t(){var e,n,a,r;(0,s.default)(this,t);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return n=a=(0,m.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(u))),a._handleClick=function(){var e=a.props,t=e.handleApiErrors,n=e.isLiked,r=e.momentId,o=e.onLike,l=e.onUnlike;return n?l(r).then(function(e){return a._scribeAction("unlike")},t()):o(r).then(function(e){return a._scribeAction("like")},t())},a._scribeAction=function(e){var t=a.props,n=t.momentId,r=t.scribeAction,l=t.scribeNamespace;return r((0,o.default)({},l,{action:e}),{items:[P.default.getMomentItem(n)]})},r=n,(0,m.default)(a,r)}return(0,_.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.isLiked,t=e?{accessibilityLabel:j,color:"red",icon:(0,x.default)({className:L.default.isLikedIcon})}:{accessibilityLabel:O,color:"blue",icon:(0,A.default)()};return N.default.createElement(b.default,(0,o.default)({},t,{background:"white",onClick:this._handleClick}))}}]),t}(N.default.Component);t.default=(0,w.connectScribeNamespace)()((0,g.default)(D))},"97WJ":function(e,t,n){var a=n("2BlP");"string"==typeof a&&(a=[[e.i,a,""]]);n("fjbf")(a,{});a.locals&&(e.exports=a.locals)},"AQA+5":function(e,t,n){var a=n("/oJP");"string"==typeof a&&(a=[[e.i,a,""]]);n("fjbf")(a,{});a.locals&&(e.exports=a.locals)},E3cA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapStateToProps=void 0;var a=n("7t5w"),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a),o=n("4n+p"),l=n("bndy"),i=n("sLaq"),u=n("hwSH"),s=function(e){return e&&e.__esModule?e:{default:e}}(u),d=function(e,t){return t.params.momentId},c=function(e,t){var n=s.default.select(e,d(0,t));return n&&n.title},f=function(e,t){var n=s.default.selectAuthor(e,d(0,t));return n&&n.screen_name},m=t.mapStateToProps=(0,l.createStructuredSelector)({momentAuthorUsername:f,momentId:d,momentTitle:c}),p={googleAnalyticsPageView:r.googleAnalyticsPageView,handleApiErrors:(0,i.handleApiErrors)("MOMENT"),scribePageImpression:r.scribePageImpression};t.default=(0,o.connect)(m,p)},ERKI:function(e,t,n){var a=n("P7lU");"string"==typeof a&&(a=[[e.i,a,""]]);n("fjbf")(a,{});a.locals&&(e.exports=a.locals)},IErm:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MomentFollowButton=void 0;var r=n("Dd8w"),o=a(r),l=n("Zx67"),i=a(l),u=n("Zrlr"),s=a(u),d=n("wxAW"),c=a(d),f=n("zwoO"),m=a(f),p=n("Pf15"),_=a(p),h=n("qNJL"),g=a(h),w=n("4JP/"),v=a(w),b=n("bgPG"),y=n("YVx/"),k=a(y),M=n("U7vG"),x=a(M),E=n("WgQH"),A=a(E),I=n("uwYN"),N=(a(I),n("KSGD"),k.default.formatMessage("Follow")),C=k.default.formatMessage("Following"),P=t.MomentFollowButton=function(e){function t(){var e,n,a,r;(0,s.default)(this,t);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return n=a=(0,m.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(u))),a._handleClick=function(){var e=a.props,t=e.handleApiErrors,n=e.isFollowing,r=e.momentId,o=e.onFollow,l=e.onUnfollow;return n?l(r).then(function(e){return a._scribeAction("unfollow")},t()):o(r).then(function(e){return a._scribeAction("follow")},t())},a._scribeAction=function(e){var t=a.props,n=t.momentId,r=t.scribeAction,l=t.scribeNamespace;return r((0,o.default)({},l,{action:e}),{items:[A.default.getMomentItem(n)]})},r=n,(0,m.default)(a,r)}return(0,_.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.isFollowing,t=e?"white":"blue",n=e?"blue":"white",a=e?C:N;return x.default.createElement(g.default,{accessibilityLabel:a,background:n,color:t,onClick:this._handleClick,size:"normal"},a)}}]),t}(x.default.Component);t.default=(0,b.connectScribeNamespace)()((0,v.default)(P))},KA15:function(e,t,n){var a=n("mUVi");"string"==typeof a&&(a=[[e.i,a,""]]);n("fjbf")(a,{});a.locals&&(e.exports=a.locals)},KyiV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=void 0;var a=n("4n+p"),r=n("7t5w"),o=t.mapDispatchToProps={scribeAction:r.scribeAction};t.default=(0,a.connect)(null,o)},P7lU:function(e,t,n){t=e.exports=n("FZ+f")(void 0),t.push([e.i,"._1IHi3e0m,._2YcaY-tk,.FNf_iBeU{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._3cDmQa2j{height:1rem;margin-right:.16406rem;width:1rem}._1EmULV67{color:inherit;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:.65625rem;text-decoration:none}._3GrdYZ7R{background-color:#ccd6dd;border-radius:.32813rem;height:25%;max-height:100px;max-width:100px;width:25%}._1xcHozkX{height:100%;width:100%}._3XGtJKkn{-webkit-flex:1;-ms-flex:1;flex:1;margin-right:.65625rem}._1cREVxSO{background-color:rgba(0,0,0,.6);border-radius:.2rem;bottom:.32813rem;left:.32813rem;position:absolute!important}._2KyT5fmx{box-sizing:border-box;color:#fff;height:1.3125rem!important;padding:.25rem .2rem}._9xjywZHs{padding:0 .32813rem}.DiLHEUwY{margin:.32813rem 0}",""]),t.locals={aboveTitle:"_2YcaY-tk",author:"FNf_iBeU",likeCount:"_1IHi3e0m",authorAvatar:"_3cDmQa2j",container:"_1EmULV67",coverContainer:"_3GrdYZ7R",coverMedia:"_1xcHozkX",details:"_3XGtJKkn",lightningIconContainer:"_1cREVxSO",lightningIcon:"_2KyT5fmx",middot:"_9xjywZHs",title:"DiLHEUwY"}},SDfK:function(e,t,n){t=e.exports=n("FZ+f")(void 0),t.push([e.i,"._2BWGhvCg{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-name:_1nwmxzz5;animation-name:_1nwmxzz5}@-webkit-keyframes _1nwmxzz5{50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes _1nwmxzz5{50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}",""]),t.locals={isLikedIcon:"_2BWGhvCg","FloatingMomentLikeButton-pulse":"_1nwmxzz5"}},TuVK:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=a(r),l=n("sLaq"),i=n("aHWw"),u=a(i),s=function(e){return(0,u.default)({timelineId:"moment-"+e,getEndpoint:function(e){return e.URT.fetchMoment},getEndpointParams:function(t){return(0,o.default)({momentId:e},t)},context:l.FETCH_MOMENT_PERMALINK,perfKey:"moment"})};t.default=s},"Z/wf":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SensitiveBanner=t.FollowBanner=t.Cover=t.Category=t.Author=void 0;var r=n("Zx67"),o=a(r),l=n("Zrlr"),i=a(l),u=n("wxAW"),s=a(u),d=n("zwoO"),c=a(d),f=n("Pf15"),m=a(f),p=n("fHKy"),_=a(p),h=n("2SYh"),g=n("Spp9"),w=a(g),v=n("tHd6"),b=a(v),y=n("Xna2"),k=a(y),M=n("Zfgq"),x=n("IErm"),E=a(x),A=n("U7vG"),I=a(A),N=n("uwYN"),C=(a(N),n("GWs/")),P=a(C),S=n("hUoQ"),T=a(S),L=n("e53B"),O=n("KSGD"),j=n("KA15"),D=a(j),G=b.default.formatMessage("Follow along to get updates in your timeline"),U=b.default.formatMessage("Liked by"),z=b.default.formatMessage("The following Moment may contain sensitive material."),V=function(e){function t(){var e,n,a,r;(0,i.default)(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=a=(0,c.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(u))),a._renderLikesStat=function(e){var t=b.default.formatNumber(e);return I.default.createElement(M.Link,{className:D.default.likedByLink,to:{pathname:"/i/timeline",state:a._getLikedByTimelineParams()}},I.default.createElement(h.FormatMessage,{elements:{actionName:I.default.createElement(_.default,{color:"deepGray"}),statDisplay:I.default.createElement(_.default,{weight:"bold"})},variables:{count:e,displayCount:t}},"[statDisplay]{displayCount}[/statDisplay]\n            [actionName]{count, plural, one {Like} other {Likes}}[/actionName]"))},a._getLikedByTimelineParams=function(){return{urtUrl:{url:"/2/moments/userlikes.json",urtEndpointOptions:{requestParams:{moment_id:a.props.momentId},title:U,cacheId:""}}}},r=n,(0,c.default)(a,r)}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){var e=this.context.featureSwitch;this._isMomentFollowEnabled=e&&e.isTrue("responsive_web_moments_follow_enabled")}},{key:"render",value:function(){var e=this.props,t=e.author,n=e.category,a=e.coverMedia,r=e.coverTweet,o=e.description,l=e.isFollowable,i=e.isLoggedIn,u=e.isSensitive,s=e.momentId,d=e.timestamp,c=e.title,f=e.totalLikes,m=f>0;return I.default.createElement(L.View,null,a?I.default.createElement(K,{coverMedia:a}):null,I.default.createElement(L.View,{className:D.default.details},t?I.default.createElement(F,{author:t}):I.default.createElement(B,{category:n}),I.default.createElement(_.default,{className:D.default.title,size:"jumbo",weight:"bold"},c),I.default.createElement(L.View,{className:D.default.subtitle},d,d&&m?I.default.createElement(_.default,{"aria-hidden":"true",className:D.default.middot},"·"):null,m?this._renderLikesStat(f):null),I.default.createElement(_.default,{className:D.default.description},o,r?I.default.createElement(M.Link,{className:D.default.coverAttribution,to:r.permalink},I.default.createElement(h.FormatMessage,{elements:{screenName:I.default.createElement(_.default,{dir:"ltr"},"@",r.user.screen_name)}},"Photo via [screenName/]")):null)),this._isMomentFollowEnabled&&l&&i?I.default.createElement(Z,{momentId:s}):null,u?I.default.createElement(H,null):null)}}]),t}(I.default.Component);V.contextTypes={featureSwitch:O.object},t.default=V;var F=t.Author=function(e){var t=e.author;return I.default.createElement(L.View,{className:D.default.author},I.default.createElement(P.default,{circle:!0,className:D.default.authorAvatar,size:"thumbnail",uri:t.profile_image_url_https,userName:t.screen_name}),I.default.createElement(T.default,{badgeContext:"content",isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,translatorType:t.translator_type,withLink:!0}))},B=t.Category=function(e){var t=e.category;return I.default.createElement(_.default,{className:D.default.category,size:"large",weight:"bold"},t)},K=t.Cover=function(e){var t=e.coverMedia;return I.default.createElement(k.default,{aspectRatio:1,displayMediaTags:!1,imageSize:"medium",mediaDetails:[t],showBorder:!1,showRoundCorners:!1})},Z=t.FollowBanner=function(e){var t=e.momentId;return I.default.createElement(L.View,{className:D.default.followBanner},I.default.createElement(_.default,null,G),I.default.createElement(E.default,{momentId:t}))},H=t.SensitiveBanner=function(){return I.default.createElement(L.View,null,I.default.createElement(w.default,{withBottomBorder:!0,withTopBorder:!0}),I.default.createElement(_.default,{align:"center",className:D.default.sensitiveBanner,size:"xlarge",weight:"bold"},z))}},ZUK2:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("piG7"),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n("hwSH"),i=a(l),u=n("4/+J"),s=a(u);t.default=o.singleDisplayType(o.universalContainer({component:s.default,selectData:function(e){var t=e.entry;return{author:function(e){return i.default.selectAuthor(e,t.content.momentId)},coverMedia:function(e){return i.default.selectCoverMedia(e,t.content.momentId)},moment:function(e){return i.default.select(e,t.content.momentId)}}},createProps:function(e){var t=e.data,n=t.author,a=t.coverMedia,r=t.moment;e.entry,e.scribeNamespace;return{author:n,category:r.subcategory_string,coverMedia:a,momentId:r.id,timestamp:r.time_string,title:r.title,totalLikes:r.total_likes}}}))},cnDV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapStateToProps=void 0;var a=n("4n+p"),r=n("bndy"),o=n("sLaq"),l=n("hwSH"),i=function(e){return e&&e.__esModule?e:{default:e}}(l),u=n("7t5w"),s=function(e,t){return i.default.select(e,t.momentId)},d=t.mapStateToProps=(0,r.createSelector)(s,function(e){return{isLiked:e&&e.is_liked||!1}}),c={handleApiErrors:(0,o.handleApiErrors)("MOMENT_LIKE_BUTTON"),onLike:i.default.like,onUnlike:i.default.unlike,scribeAction:u.scribeAction};t.default=(0,a.connect)(d,c)},hdaQ:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Zx67"),o=a(r),l=n("Zrlr"),i=a(l),u=n("wxAW"),s=a(u),d=n("zwoO"),c=a(d),f=n("Pf15"),m=a(f),p=n("fHKy"),_=a(p),h=n("urBw"),g=a(h),w=n("IErm"),v=a(w),b=n("U7vG"),y=a(b),k=n("e53B"),M=n("KSGD"),x=n("97WJ"),E=a(x),A=g.default.formatMessage("Explore more"),I=g.default.formatMessage("Check out some other Moments to see what else is happening."),N=g.default.formatMessage("Stay up to date"),C=g.default.formatMessage("Follow to see live updates."),P=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){var e=this.context.featureSwitch;this._isMomentFollowEnabled=e&&e.isTrue("responsive_web_moments_follow_enabled")}},{key:"render",value:function(){var e=this.props,t=e.isFollowable,n=e.isLoggedIn,a=e.momentId,r=this._isMomentFollowEnabled&&t&&n,o=r?N:A,l=r?C:I;return y.default.createElement(k.View,{className:E.default.container},y.default.createElement(_.default,{align:"center",className:E.default.title,size:"xlarge",weight:"bold"},o),y.default.createElement(_.default,{align:"center",color:"deepGray"},l),r?y.default.createElement(k.View,{className:E.default.followButton},y.default.createElement(v.default,{momentId:a})):null)}}]),t}(y.default.PureComponent);P.contextTypes={featureSwitch:M.object},t.default=P},hwSH:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("bOdI"),o=a(r),l=n("Dd8w"),i=a(l),u=n("KCLT"),s=a(u),d=n("qDka"),c=a(d),f=n("JSXd"),m=a(f),p=n("Dica"),_=a(p),h=function(e,t,n){var a=e.entities[t.meta.entityId];return/_REQUEST$/.test(t.type)?(0,i.default)({},e,{entities:(0,i.default)({},e.entities,(0,o.default)({},a.id,(0,i.default)({},a,n(a))))}):e},g={follow:{getParams:function(e){return{moment_ids:e}},getApiMethod:function(e){return e.Moments.follow},reducer:function(e,t){return h(e,t,function(e){return{is_subscribed:!0}})},withApiErrorHandler:!1},unfollow:{getParams:function(e){return{moment_ids:e}},getApiMethod:function(e){return e.Moments.unfollow},reducer:function(e,t){return h(e,t,function(e){return{is_subscribed:!1}})},withApiErrorHandler:!1},like:{getParams:function(e){return{moment_id:e}},getApiMethod:function(e){return e.Moments.like},reducer:function(e,t){return h(e,t,function(e){return{is_liked:!0,total_likes:e.total_likes+1}})},withApiErrorHandler:!1},unlike:{getParams:function(e){return{moment_id:e}},getApiMethod:function(e){return e.Moments.unlike},reducer:function(e,t){return h(e,t,function(e){return{is_liked:!1,total_likes:e.total_likes-1}})},withApiErrorHandler:!1}},w=(0,s.default)({namespace:"moments",customActions:g});w.selectAuthor=function(e,t){var n=w.select(e,t);return n&&n.author&&_.default.select(e,n.author.id)},w.selectCoverMedia=function(e,t){var n=w.select(e,t),a=n&&n.cover_media&&n.cover_media.media&&n.cover_media.media.media_id,r=w.selectCoverTweet(e,t);return a&&r&&r.extended_entities&&r.extended_entities.media&&r.extended_entities.media.find(function(e){return e&&e.id_str===a})},w.selectCoverTweet=function(e,t){var n=w.select(e,t),a=n&&n.cover_media&&n.cover_media.tweet_id;return a&&m.default.selectHydrated(e,a)},t.default=c.default.register(w)},mUVi:function(e,t,n){t=e.exports=n("FZ+f")(void 0),t.push([e.i,".Q35_sdV_{-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:.65625rem}._3AzNtOAe{height:1.5rem;margin-right:.32813rem;width:1.5rem}._1sx5VIl5{color:#657786;margin-bottom:.32813rem}._2aIjpeM1{color:#657786;margin-left:.32813rem;text-decoration:none}._3sG9jpSa{position:absolute;top:0;left:0;height:100%;width:100%}.b-tmAwr9{padding:1rem .65625rem}.ToVPs4ni{-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-top:1px solid #ccd6dd;color:#657786;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:.65625rem}._1JLmlVG-,._1JLmlVG-:active,._1JLmlVG-:visited{color:#14171a;text-decoration:none}._1JLmlVG-:hover{text-decoration:underline}._1_Iykz4Y{padding:0 .32813rem}._1CKitebu{padding:1.3125rem 2.625rem}.h_nh55JD{color:#657786;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:.65625rem 0}",""]),t.locals={author:"Q35_sdV_",authorAvatar:"_3AzNtOAe",category:"_1sx5VIl5",coverAttribution:"_2aIjpeM1",coverMedia:"_3sG9jpSa",details:"b-tmAwr9",followBanner:"ToVPs4ni",likedByLink:"_1JLmlVG-",middot:"_1_Iykz4Y",sensitiveBanner:"_1CKitebu",subtitle:"h_nh55JD"}},ne5f:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.OverflowActionSheet=void 0;var r=n("Dd8w"),o=a(r),l=n("Zx67"),i=a(l),u=n("Zrlr"),s=a(u),d=n("wxAW"),c=a(d),f=n("zwoO"),m=a(f),p=n("Pf15"),_=a(p),h=n("YkY+"),g=a(h),w=n("KyiV"),v=a(w),b=n("bgPG"),y=n("mz3e"),k=a(y),M=n("U7vG"),x=a(M),E=n("WgQH"),A=a(E),I=n("uwYN"),N=(a(I),n("KSGD")),C=k.default.formatMessage("Tweet this Moment"),P=k.default.formatMessage("Share via Direct Message"),S=k.default.messageFormatter("⚡️ “{title}” {url}"),T=k.default.messageFormatter("⚡️ “{title}” by @{author} {url}"),L=t.OverflowActionSheet=function(e){function t(){var e,n,a,r;(0,s.default)(this,t);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return n=a=(0,m.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(u))),a._getActionItems=function(){return[{text:C,onClick:a._handleShareTweetClick},{text:P,onClick:a._handleShareDMClick}]},a._handleShareTweetClick=function(){a.context.loggedInUserId&&(a._scribeAction("share_via_tweet"),a.context.router.push({pathname:"/compose/tweet",query:{text:a._getDefaultText()},state:{positionCursorAtBeginning:!0}}))},a._handleShareDMClick=function(){a.context.loggedInUserId&&(a._scribeAction("share_via_dm"),a.context.router.push({pathname:"/messages/compose",query:{text:a._getDefaultText()}}))},a._scribeAction=function(e){var t=a.props,n=t.momentId,r=t.scribeAction,l=t.scribeNamespace;r((0,o.default)({},l,{action:e}),{items:[A.default.getMomentItem(n)]})},a._getDefaultText=function(){var e=a.props,t=e.momentAuthorUsername,n=e.momentId,r=e.momentTitle,o={author:t,title:r.trim(),url:"https://twitter.com/i/moments/"+n};return t?" "+T(o):" "+S(o)},r=n,(0,m.default)(a,r)}return(0,_.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return x.default.createElement(g.default,{items:this._getActionItems(),onCancel:this.props.onClose})}}]),t}(x.default.PureComponent);L.contextTypes={loggedInUserId:N.string,router:N.object.isRequired},t.default=(0,b.connectScribeNamespace)()((0,v.default)(L))},zWoA:function(e,t,n){var a=n("SDfK");"string"==typeof a&&(a=[[e.i,a,""]]);n("fjbf")(a,{});a.locals&&(e.exports=a.locals)},zrmm:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,l=n("Dd8w"),i=r(l),u=n("bOdI"),s=r(u),d=n("piG7"),c=a(d),f=n("UAjM"),m=a(f),p=n("Y01g"),_=r(p),h=n("N20j"),g=r(h),w=n("qCVd"),v=r(w),b=n("hdaQ"),y=r(b),k=n("Z/wf"),M=r(k),x=n("hwSH"),E=r(x),A=n("ZUK2"),I=r(A),N=n("y7g/"),C=n("h2FK"),P=r(C),S=n("Lx4R"),T=r(S),L=(o={},(0,s.default)(o,v.default.Cursor,g.default),(0,s.default)(o,v.default.MomentCapsuleFooter,c.singleDisplayType(c.universalContainer({component:y.default,selectData:function(e){var t=e.entry;return{isLoggedIn:N.selectIsLoggedIn,moment:function(e){return E.default.select(e,t.content.momentId)}}},bindActions:(0,_.default)({}),createProps:function(e){var t=e.data,n=t.isLoggedIn,a=t.moment;e.entry,e.scribeNamespace;return{isFollowable:a.can_subscribe,isLoggedIn:n,momentId:a.id}},divider:{top:!0}}))),(0,s.default)(o,v.default.MomentCapsuleHeader,c.singleDisplayType(c.universalContainer({component:M.default,selectData:function(e){var t=e.entry,n=t.content.momentId;return{author:function(e){return E.default.selectAuthor(e,n)},coverMedia:function(e){return E.default.selectCoverMedia(e,n)},coverTweet:function(e){return E.default.selectCoverTweet(e,n)},isLoggedIn:N.selectIsLoggedIn,moment:function(e){return E.default.select(e,n)}}},bindActions:(0,_.default)({}),createProps:function(e){var t=e.data,n=t.author,a=t.coverMedia,r=t.coverTweet,o=t.isLoggedIn,l=t.moment;e.entry,e.scribeNamespace;return{author:n,category:l.subcategory_string,coverMedia:a,coverTweet:r,description:l.description,isFollowable:l.can_subscribe,isLive:l.is_live,isLoggedIn:o,isSensitive:l.sensitive,momentId:l.id,timestamp:l.time_string,title:l.title,totalLikes:l.total_likes}},divider:{bottom:!0}}))),(0,s.default)(o,v.default.MomentSummary,I.default),(0,s.default)(o,v.default.Tweet,c.singleDisplayType((0,T.default)({component:m.WithoutScribeNamespace,displayBlocked:!1,divider:{bottom:!0,top:!0}}))),o);t.default=(0,i.default)({},P.default,L)}});
//# sourceMappingURL=bundle.Moment.438f437581059fb0.js.map