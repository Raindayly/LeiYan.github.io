"use strict";(self["webpackChunkprofile"]=self["webpackChunkprofile"]||[]).push([[605,708,678,762,160],{2605:function(e,a,t){t.r(a),t.d(a,{default:function(){return U}});var i=t(3396);function s(e,a,t,s,n,r){const l=(0,i.up)("home");return(0,i.wg)(),(0,i.j4)(l)}const n={class:"container-main"};function r(e,a,t,s,r,l){const c=(0,i.up)("home-top-bar"),o=(0,i.up)("page-a"),d=(0,i.up)("el-carousel-item"),u=(0,i.up)("page-c"),p=(0,i.up)("page-b"),g=(0,i.up)("page-d"),v=(0,i.up)("el-carousel"),h=(0,i.up)("wheel-tip");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(c,{pageidx:e.CarouselIndex,onChangePage:a[0]||(a[0]=a=>e.b(a))},null,8,["pageidx"]),(0,i.Wm)(v,{class:"swiper-container",direction:"vertical","indicator-position":"none",ref:"carousel",autoplay:!1,"initial-index":e.CarouselIndex,onWheel:a[4]||(a[4]=a=>e.flag&&e.a(a)),loop:!1},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"carousel-item-page-a"},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{pageidx:e.CarouselIndex,onChangePage:a[1]||(a[1]=a=>e.b(a))},null,8,["pageidx"])])),_:1}),(0,i.Wm)(d,{class:"carousel-item-page-b"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{pageidx:e.CarouselIndex},null,8,["pageidx"])])),_:1}),(0,i.Wm)(d,{class:"carousel-item-page-c"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{pageidx:e.CarouselIndex,SlideCurrentPage:e.SlideCurrentPage,onDeliverCount:a[2]||(a[2]=a=>e.GetSlideCount(a)),onDeliverSlideCurrentPage:a[3]||(a[3]=a=>e.GetSlideCurrentPage(a))},null,8,["pageidx","SlideCurrentPage"])])),_:1}),(0,i.Wm)(d,{class:"carousel-item-page-d"},{default:(0,i.w5)((()=>[(0,i.Wm)(g)])),_:1})])),_:1},8,["initial-index"]),(0,i.Wm)(h,{pageidx:e.CarouselIndex,onChangePage:a[5]||(a[5]=a=>e.changePage(a))},null,8,["pageidx"])])}var l=t(6708),c=t(6457),o=t(762),d=t(2160),u=t(7139),p=t(9242),g=t(4427);const v=e=>((0,i.dD)("data-v-544f736e"),e=e(),(0,i.Cn)(),e),h=v((()=>(0,i._)("div",{class:"topbarlogo"},[(0,i._)("a",{href:"/"},[(0,i._)("img",{src:g,alt:""})])],-1))),m={class:"topbarcontent"};function x(e,a,t,s,n,r){return(0,i.wg)(),(0,i.iD)("div",{class:(0,u.C_)(["topbarbox",{activeTopBar:e.active}])},[h,(0,i._)("div",m,[(0,i._)("a",{class:"topbarlink",onClick:a[0]||(a[0]=a=>e.$emit("changePage",{$event:a,a:0})),href:"/"},[(0,i.wy)((0,i._)("span",null," 首页 ",512),[[p.F8,!(0==e.pageidx)]]),(0,i.wy)((0,i._)("b",null," 首页 ",512),[[p.F8,0==e.pageidx]])]),(0,i._)("div",{class:"topbarlink",onClick:a[1]||(a[1]=a=>e.$emit("changePage",{$event:a,a:1}))},[(0,i.wy)((0,i._)("span",null," 简介 ",512),[[p.F8,!(1==e.pageidx)]]),(0,i.wy)((0,i._)("b",null," 简介 ",512),[[p.F8,1==e.pageidx]])]),(0,i._)("div",{class:"topbarlink",onClick:a[2]||(a[2]=a=>e.$emit("changePage",{$event:a,a:2}))},[(0,i.wy)((0,i._)("span",null," 记录 ",512),[[p.F8,!(2==e.pageidx)]]),(0,i.wy)((0,i._)("b",null," 记录 ",512),[[p.F8,2==e.pageidx]])]),(0,i._)("div",{class:"topbarlink",onClick:a[3]||(a[3]=a=>e.$emit("changePage",{$event:a,a:3}))},[(0,i.wy)((0,i._)("span",null," 应用 ",512),[[p.F8,!(3==e.pageidx)]]),(0,i.wy)((0,i._)("b",null," 应用 ",512),[[p.F8,3==e.pageidx]])])])],2)}var f=(0,i.aZ)({props:["pageidx"],data(){return{pageindex:this.$props.pageidx}},methods:{jump(e){e.preventDefault()}},computed:{active(){let e=this.$props.pageidx;return 0!=e}}}),_=t(89);const C=(0,_.Z)(f,[["render",x],["__scopeId","data-v-544f736e"]]);var b=C,w=t(5031),I=t(4931);const k=(0,i.uE)('<div class="mouseicon" data-v-09420b1c><img src="'+w+'" alt="" data-v-09420b1c></div><div class="arrowcontainer" data-v-09420b1c><div class="arrow rotate" data-v-09420b1c><img src="'+I+'" alt="" data-v-09420b1c></div></div><div class="wheelline" data-v-09420b1c></div>',3),P=[k];function S(e,a,t,s,n,r){return(0,i.wg)(),(0,i.iD)("div",{class:(0,u.C_)(["wheeltipbox",{show:e.active}]),onClick:a[0]||(a[0]=(...a)=>e.nextpage&&e.nextpage(...a))},P,2)}var y=(0,i.aZ)({props:["pageidx"],data(){return{pageindex:this.$props.pageidx}},methods:{nextpage(){switch(this.$props.pageidx){case 1:this.$emit("changePage",2);break;case 2:this.$emit("changePage",3);break;case 3:this.$emit("changePage",4);break}}},computed:{active(){let e=this.$props.pageidx;return 0!=e&&3!=e}}});const $=(0,_.Z)(y,[["render",S],["__scopeId","data-v-09420b1c"]]);var D=$,W=(0,i.aZ)({components:{pageA:l["default"],pageB:c["default"],pageC:o["default"],pageD:d["default"],HomeTopBar:b,WheelTip:D},emits:["DeliverCount","DeliverSlideCurrentPage","changePage"],data(){return{flag:!0,CarouselIndex:0,SlideCurrentPage:1,SlideCount:0}},methods:{a(e){if(e.wheelDelta<0)switch(this.CarouselIndex){case 0:this.CarouselIndex++,history.replaceState({},"","?page=2"),this.$refs.carousel.setActiveItem(1);break;case 1:this.CarouselIndex++,history.replaceState({},"","?page=3"),this.$refs.carousel.setActiveItem(2);break;case 2:this.CarouselIndex++,history.replaceState({},"","?page=4"),this.$refs.carousel.setActiveItem(3);break;case 3:break}else switch(this.CarouselIndex){case 0:break;case 1:this.CarouselIndex--,history.replaceState({},"","?page=1"),this.$refs.carousel.setActiveItem(0);break;case 2:this.CarouselIndex--,history.replaceState({},"","?page=2"),this.$refs.carousel.setActiveItem(1);break;case 3:this.CarouselIndex--,history.replaceState({},"","?page=3"),this.$refs.carousel.setActiveItem(2);break}this.flag=!1,setTimeout((()=>{this.flag=!0}),1e3)},b(e){"/"==this.$route.path&&e.$event.preventDefault();let a=e.a;switch(a){case 0:this.CarouselIndex=a,history.replaceState({},"","?page=1"),this.$refs.carousel.setActiveItem(0);break;case 1:this.CarouselIndex=a,history.replaceState({},"","?page=2"),this.$refs.carousel.setActiveItem(1);break;case 2:this.CarouselIndex=a,history.replaceState({},"","?page=3"),this.$refs.carousel.setActiveItem(2);break;case 3:this.CarouselIndex=a,history.replaceState({},"","?page=4"),this.$refs.carousel.setActiveItem(3);break}},changePage(e){switch(console.log(e),e){case 0:this.CarouselIndex=e,history.replaceState({},"","?page=1"),this.$refs.carousel.setActiveItem(0);break;case 1:this.CarouselIndex=e,history.replaceState({},"","?page=2"),this.$refs.carousel.setActiveItem(1);break;case 2:this.CarouselIndex=e,history.replaceState({},"","?page=3"),this.$refs.carousel.setActiveItem(2);break;case 3:this.CarouselIndex=e,history.replaceState({},"","?page=4"),this.$refs.carousel.setActiveItem(3);break}},CarouselInterval(){let e=this.SlideCurrentPage-1,a=this.SlideCount-1;e<a?e++:e=0,this.SlideCurrentPage=e+1},GetSlideCount(e){this.SlideCount=e},GetSlideCurrentPage(e){this.SlideCurrentPage=e}},mounted(){let e=this.$route.query;"{}"==JSON.stringify(e)||"1"==e.page?this.CarouselIndex=0:"2"==e.page?this.CarouselIndex=1:"3"==e.page?this.CarouselIndex=2:"4"==e.page&&(this.CarouselIndex=3)}});const A=(0,_.Z)(W,[["render",r],["__scopeId","data-v-6142fa5e"]]);var Z=A,T={components:{Home:Z},setup(){const{proxy:e}=(0,i.FN)();sessionStorage.getItem("dataStore")&&e.$store.replaceState(Object.assign({},e.$store.state,JSON.parse(sessionStorage.getItem("dataStore")))),window.addEventListener("beforeunload",(()=>{sessionStorage.setItem("dataStore",JSON.stringify(e.$store.state))}))},data(){return{flag:!0}}};const q=(0,_.Z)(T,[["render",s],["__scopeId","data-v-49bf9bb2"]]);var U=q},6708:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var i=t(3396),s=t(7139);const n=e=>((0,i.dD)("data-v-33d8880b"),e=e(),(0,i.Cn)(),e),r={class:"container-main-page-a"},l=n((()=>(0,i._)("div",{class:"page-a-index-bg"},null,-1)));function c(e,a,t,n,c,o){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",{class:(0,s.C_)(["page-a-index-warp",{activeText:e.active}])}," Welcome Welcome ",2),(0,i._)("div",{class:(0,s.C_)(["page-a-index-butn",{activeButn:e.active}]),onClick:a[0]||(a[0]=a=>e.$emit("changePage",{$event:a,a:1}))},null,2),l])}var o=(0,i.aZ)({props:["pageidx"],data(){return{}},methods:{},computed:{active(){let e=this.$props.pageidx;return 0==e}}}),d=t(89);const u=(0,d.Z)(o,[["render",c],["__scopeId","data-v-33d8880b"]]);var p=u},6457:function(e,a,t){t.r(a),t.d(a,{default:function(){return G}});var i=t(3396),s=t(9242),n=t(7139),r=t(8831),l=t(166);const c=e=>((0,i.dD)("data-v-440a61cd"),e=e(),(0,i.Cn)(),e),o={class:"container-main-page-b"},d={class:"swiper-container"},u={class:"swiper-wrapper"},p={class:"swiper-slide"},g={class:"activeTextContainer"},v={key:0,class:"contentContainer-b"},h=c((()=>(0,i._)("img",{src:r,alt:""},null,-1))),m=[h],x={key:0,class:"titleContainer-b"},f=c((()=>(0,i._)("div",{class:"title-title"},[(0,i._)("h1",null,"记录本")],-1))),_=c((()=>(0,i._)("div",{class:"title-line"},null,-1))),C=c((()=>(0,i._)("div",{class:"tltle-content title-content1"},[(0,i._)("span",null,"解决问题的过程")],-1))),b=c((()=>(0,i._)("div",{class:"tltle-content title-content3"},[(0,i._)("span",null,"灵感一现的时刻")],-1))),w=c((()=>(0,i._)("div",{class:"tltle-content title-content4"},[(0,i._)("span",null,"记录一切有关code,编程的记录本")],-1))),I=c((()=>(0,i._)("div",{class:"tltle-content title-content5"},[(0,i._)("span",null,[(0,i._)("a",{href:"https://www.cnblogs.com/funk1/",target:"_Blank"},"博客园地址")])],-1))),k=[f,_,C,b,w,I],P={class:"swiper-slide"},S={class:"activeTextContainer"},y={key:0,class:"contentContainer-b"},$=c((()=>(0,i._)("img",{src:l,alt:""},null,-1))),D=[$],W={key:0,class:"titleContainer-b"},A=c((()=>(0,i._)("h1",null,"源码本",-1))),Z=c((()=>(0,i._)("span",null,"GitHub",-1))),T=[A,Z],q={class:"butnbox"};function U(e,a,t,r,l,c){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("div",p,[(0,i._)("div",g,[(0,i.Wm)(s.uT,{name:"contentContainer-b-active"},{default:(0,i.w5)((()=>[1==e.UsePage&&e.activePageidx?((0,i.wg)(),(0,i.iD)("div",v,m)):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(s.uT,{name:"titleContainer-b-active"},{default:(0,i.w5)((()=>[1==e.UsePage&&e.activePageidx?((0,i.wg)(),(0,i.iD)("div",x,k)):(0,i.kq)("",!0)])),_:1})])]),(0,i._)("div",P,[(0,i._)("div",S,[(0,i.Wm)(s.uT,{name:"contentContainer-b-active"},{default:(0,i.w5)((()=>[2==e.UsePage&&e.activePageidx?((0,i.wg)(),(0,i.iD)("div",y,D)):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(s.uT,{name:"titleContainer-b-active"},{default:(0,i.w5)((()=>[2==e.UsePage&&e.activePageidx?((0,i.wg)(),(0,i.iD)("div",W,T)):(0,i.kq)("",!0)])),_:1})])])]),(0,i._)("div",q,[(0,i._)("div",{class:"butn",onClick:a[0]||(a[0]=a=>e.ChangeSlidePage(1))},[(0,i._)("div",{class:(0,n.C_)(["imgcontainer imgcontainer1",{active:1==e.UsePage}])},null,2)]),(0,i._)("div",{class:"butn",onClick:a[1]||(a[1]=a=>e.ChangeSlidePage(2))},[(0,i._)("div",{class:(0,n.C_)(["imgcontainer imgcontainer2",{active:2==e.UsePage}])},null,2)])])])])}var F=(0,i.aZ)({props:["pageidx","SlideCurrentPage","UsePageIndex"],data(){return{SlideCount:3,UsePage:1}},computed:{activePageidx(){return 2==this.$props.pageidx}},methods:{ChangeSlidePage(e){this.$emit("DeliverSlideCurrentPage",e),this.UsePage=e}},mounted(){this.$emit("DeliverCount",this.SlideCount)}}),j=t(89);const B=(0,j.Z)(F,[["render",U],["__scopeId","data-v-440a61cd"]]);var G=B},762:function(e,a,t){t.r(a),t.d(a,{default:function(){return P}});var i=t(3396),s=t(9242),n=t(7139);const r=e=>((0,i.dD)("data-v-7f7a1626"),e=e(),(0,i.Cn)(),e),l={class:"pagec-container"},c={class:"wapper"},o={class:"flexbox"},d={key:0,class:"textbox"},u=r((()=>(0,i._)("div",{class:"occupybox-h1"},[(0,i._)("h1",null,[(0,i._)("span",null,"123")])],-1))),p={class:"profile-box"},g={key:0,name:"file",class:"profile-img-content"},v=r((()=>(0,i._)("input",{type:"file",accept:"image/*",name:"file",id:"file",style:{display:"none"}},null,-1))),h={key:0,class:"profile-text-content"},m=r((()=>(0,i._)("a",{href:"https://www.iqiyi.com/"},"爱奇艺",-1))),x=r((()=>(0,i._)("a",{href:"https://v.qq.com/"},"腾讯视频",-1))),f=r((()=>(0,i._)("a",{href:"https://www.mgtv.com/"},"芒果tv",-1))),_=r((()=>(0,i._)("a",{href:"https://youku.com/"},"优酷",-1))),C=[m,x,f,_];function b(e,a,t,r,m,x){const f=(0,i.up)("el-avatar");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",c,[(0,i._)("div",o,[(0,i.Wm)(s.uT,{name:"textbox-active"},{default:(0,i.w5)((()=>[e.activePageidx?((0,i.wg)(),(0,i.iD)("div",d,[u,((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(5,(e=>(0,i._)("div",{key:e,class:"occupybox-content"},[(0,i._)("span",null,(0,n.zw)(e),1)]))),64))])):(0,i.kq)("",!0)])),_:1}),(0,i._)("div",p,[(0,i.Wm)(s.uT,{name:"profile-img-active"},{default:(0,i.w5)((()=>[e.activePageidx?((0,i.wg)(),(0,i.iD)("label",g,[(0,i.Wm)(f,{shape:"square",size:100,src:e.squareUrl},null,8,["src"]),v])):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(s.uT,{name:"profile-text-active"},{default:(0,i.w5)((()=>[e.activePageidx?((0,i.wg)(),(0,i.iD)("div",h,C)):(0,i.kq)("",!0)])),_:1})])])])])}var w=(0,i.aZ)({props:["pageidx","UsePageIndex"],data(){return{data:{name:"Asay",age:"18",tender:"男"}}},computed:{activePageidx(){return 1==this.$props.pageidx}}}),I=t(89);const k=(0,I.Z)(w,[["render",b],["__scopeId","data-v-7f7a1626"]]);var P=k},2160:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});var i=t(3396);function s(e,a,t,s,n,r){return(0,i.wg)(),(0,i.iD)("h1",null,"4")}var n=(0,i.aZ)({props:["pageidx"]}),r=t(89);const l=(0,r.Z)(n,[["render",s]]);var c=l},5031:function(e,a,t){e.exports=t.p+"img/mouse.1aed289b.svg"},4931:function(e,a,t){e.exports=t.p+"img/arrow.d57674ce.png"},8831:function(e,a,t){e.exports=t.p+"img/code.6215927f.jpg"},166:function(e,a,t){e.exports=t.p+"img/github.a1afe65f.jpg"},4427:function(e,a,t){e.exports=t.p+"img/logo.65329275.png"}}]);
//# sourceMappingURL=605.a6bc6e18.js.map