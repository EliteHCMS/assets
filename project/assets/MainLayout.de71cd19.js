var kt=Object.defineProperty,$t=Object.defineProperties;var Mt=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var xt=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable;var Ve=(e,o,r)=>o in e?kt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,O=(e,o)=>{for(var r in o||(o={}))xt.call(o,r)&&Ve(e,r,o[r]);if(Ae)for(var r of Ae(o))Tt.call(o,r)&&Ve(e,r,o[r]);return e},ee=(e,o)=>$t(e,Mt(o));import{p as ae,q as d,s as y,u as _e,i as nt,v as lt,r as q,w as $,x as he,y as Lt,Q as Ee,z as we,A as ot,B as de,C as Ne,D as Ot,E as Fe,F as Bt,G as ge,H as xe,I as Re,J as Te,K as Ie,L as Le,M as it,N as Pt,O as je,P as He,R as U,S as Et,T as It,U as jt,V as We,W as Ke,X as Ht,Y as Dt,Z as fe,$ as rt,a0 as ut,a1 as Qt,a2 as st,a3 as At,a4 as Ye,a5 as Vt,a6 as Xe,a7 as Nt,a8 as Ft,a9 as Rt,aa as Wt,d as ue,_ as se,o as T,ab as Q,ac as k,ad as J,ae as w,af as ie,ag as re,ah as ye,ai as ct,aj as le,j as me,ak as De,al as Kt,am as Yt,an as dt,ao as Xt,ap as Ue,aq as Ut,ar as oe,f as G,as as vt,at as ft,m as Se,au as mt,av as Gt,aw as Jt,h as W,ax as Zt,ay as ea,az as ta,aA as aa,aB as Oe,aC as na,aD as la,aE as oa}from"./index.e88105df.js";import{Q as ht}from"./QList.1e97821a.js";var Ge=ae({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const r=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:r.value},_e(o.default))}}),Je=ae({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const r=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:r.value},_e(o.default))}}),ia=ae({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:r}){const{proxy:{$q:c}}=we(),t=nt(lt,()=>{console.error("QHeader needs to be child of QLayout")}),n=q(parseInt(e.heightHint,10)),u=q(!0),a=d(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||c.platform.is.ios&&t.isContainer.value===!0),h=d(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return u.value===!0?n.value:0;const v=n.value-t.scroll.value.position;return v>0?v:0}),l=d(()=>e.modelValue!==!0||a.value===!0&&u.value!==!0),z=d(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),x=d(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=d(()=>{const v=t.rows.value.top,B={};return v[0]==="l"&&t.left.space===!0&&(B[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(B[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),B});function f(v,B){t.update("header",v,B)}function M(v,B){v.value!==B&&(v.value=B)}function m({height:v}){M(n,v),f("size",v)}function g(v){z.value===!0&&M(u,!0),r("focusin",v)}$(()=>e.modelValue,v=>{f("space",v),M(u,!0),t.animate()}),$(h,v=>{f("offset",v)}),$(()=>e.reveal,v=>{v===!1&&M(u,e.modelValue)}),$(u,v=>{t.animate(),r("reveal",v)}),$(t.scroll,v=>{e.reveal===!0&&M(u,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const L={};return t.instances.header=L,e.modelValue===!0&&f("size",n.value),f("space",e.modelValue),f("offset",h.value),he(()=>{t.instances.header===L&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const v=Lt(o.default,[]);return e.elevated===!0&&v.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(y(Ee,{debounce:0,onResize:m})),y("header",{class:x.value,style:C.value,onFocusin:g},v)}}});function Be(e,o,r){const c=Ie(e);let t,n=c.left-o.event.x,u=c.top-o.event.y,a=Math.abs(n),h=Math.abs(u);const l=o.direction;l.horizontal===!0&&l.vertical!==!0?t=n<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?t=u<0?"up":"down":l.up===!0&&u<0?(t="up",a>h&&(l.left===!0&&n<0?t="left":l.right===!0&&n>0&&(t="right"))):l.down===!0&&u>0?(t="down",a>h&&(l.left===!0&&n<0?t="left":l.right===!0&&n>0&&(t="right"))):l.left===!0&&n<0?(t="left",a<h&&(l.up===!0&&u<0?t="up":l.down===!0&&u>0&&(t="down"))):l.right===!0&&n>0&&(t="right",a<h&&(l.up===!0&&u<0?t="up":l.down===!0&&u>0&&(t="down")));let z=!1;if(t===void 0&&r===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,z=!0,t==="left"||t==="right"?(c.left-=n,a=0,n=0):(c.top-=u,h=0,u=0)}return{synthetic:z,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:c,direction:t,isFirst:o.event.isFirst,isFinal:r===!0,duration:Date.now()-o.event.time,distance:{x:a,y:h},offset:{x:n,y:u},delta:{x:c.left-o.event.lastX,y:c.top-o.event.lastY}}}}let ra=0;var ve=ot({name:"touch-pan",beforeMount(e,{value:o,modifiers:r}){if(r.mouse!==!0&&de.has.touch!==!0)return;function c(n,u){r.mouse===!0&&u===!0?it(n):(r.stop===!0&&Te(n),r.prevent===!0&&Re(n))}const t={uid:"qvtp_"+ra++,handler:o,modifiers:r,direction:Ne(r),noop:Ot,mouseStart(n){Fe(n,t)&&Bt(n)&&(ge(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Fe(n,t)){const u=n.target;ge(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,u){if(de.is.firefox===!0&&xe(e,!0),t.lastEvt=n,u===!0||r.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const l=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&Re(l),n.cancelBubble===!0&&Te(l),Object.assign(l,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:l}}Te(n)}const{left:a,top:h}=Ie(n);t.event={x:a,y:h,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:h}},move(n){if(t.event===void 0)return;const u=Ie(n),a=u.left-t.event.x,h=u.top-t.event.y;if(a===0&&h===0)return;t.lastEvt=n;const l=t.event.mouse===!0,z=()=>{c(n,l),r.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Pt(),t.styleCleanup=f=>{if(t.styleCleanup=void 0,r.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),l===!0){const M=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{M(),f()},50):M()}else f!==void 0&&f()}};if(t.event.detected===!0){t.event.isFirst!==!0&&c(n,t.event.mouse);const{payload:f,synthetic:M}=Be(n,t,!1);f!==void 0&&(t.handler(f)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&z(),t.event.lastX=f.position.left,t.event.lastY=f.position.top,t.event.lastDir=M===!0?void 0:f.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||l===!0&&t.modifiers.mouseAllDir===!0){z(),t.event.detected=!0,t.move(n);return}const x=Math.abs(a),C=Math.abs(h);x!==C&&(t.direction.horizontal===!0&&x>C||t.direction.vertical===!0&&x<C||t.direction.up===!0&&x<C&&h<0||t.direction.down===!0&&x<C&&h>0||t.direction.left===!0&&x>C&&a<0||t.direction.right===!0&&x>C&&a>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,u){if(t.event!==void 0){if(Le(t,"temp"),de.is.firefox===!0&&xe(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Be(n===void 0?t.lastEvt:n,t).payload);const{payload:a}=Be(n===void 0?t.lastEvt:n,t,!0),h=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,r.mouse===!0&&ge(t,"main",[[e,"mousedown","mouseStart",`passive${r.mouseCapture===!0?"Capture":""}`]]),de.has.touch===!0&&ge(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const r=e.__qtouchpan;r!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&r.end(),r.handler=o.value),r.direction=Ne(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),Le(o,"main"),Le(o,"temp"),de.is.firefox===!0&&xe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Ze=["vertical","horizontal"],Pe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},et={prevent:!0,mouse:!0,mouseAllDir:!0};var ua=ae({name:"QScrollArea",props:ee(O({},je),{thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function}),setup(e,{slots:o,emit:r}){const c=q(!1),t=q(!1),n=q(!1),u={vertical:q(0),horizontal:q(0)},a={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},h=we(),l=He(e,h.proxy.$q);let z,x;const C=q(null),f=d(()=>"q-scrollarea"+(l.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=d(()=>{const s=a.vertical.size.value-u.vertical.value;if(s<=0)return 0;const b=U(a.vertical.position.value/s,0,1);return Math.round(b*1e4)/1e4}),a.vertical.thumbHidden=d(()=>(e.visible===null?n.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.vertical.size.value<=u.vertical.value+1),a.vertical.thumbStart=d(()=>a.vertical.percentage.value*(u.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=d(()=>Math.round(U(u.vertical.value*u.vertical.value/a.vertical.size.value,50,u.vertical.value))),a.vertical.style=d(()=>ee(O(O({},e.thumbStyle),e.verticalThumbStyle),{top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=d(()=>{const s=a.horizontal.size.value-u.horizontal.value;if(s<=0)return 0;const b=U(a.horizontal.position.value/s,0,1);return Math.round(b*1e4)/1e4}),a.horizontal.thumbHidden=d(()=>(e.visible===null?n.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.horizontal.size.value<=u.horizontal.value+1),a.horizontal.thumbStart=d(()=>a.horizontal.percentage.value*(u.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=d(()=>Math.round(U(u.horizontal.value*u.horizontal.value/a.horizontal.size.value,50,u.horizontal.value))),a.horizontal.style=d(()=>ee(O(O({},e.thumbStyle),e.horizontalThumbStyle),{left:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const M=d(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),m=[[ve,s=>{Z(s,"vertical")},void 0,O({vertical:!0},et)]],g=[[ve,s=>{Z(s,"horizontal")},void 0,O({horizontal:!0},et)]];function L(){const s={};return Ze.forEach(b=>{const _=a[b];s[b+"Position"]=_.position.value,s[b+"Percentage"]=_.percentage.value,s[b+"Size"]=_.size.value,s[b+"ContainerSize"]=u[b].value}),s}const v=Et(()=>{const s=L();s.ref=h.proxy,r("scroll",s)},0);function B(s,b,_){if(Ze.includes(s)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(s==="vertical"?Ke:We)(C.value,b,_)}function K({height:s,width:b}){let _=!1;u.vertical.value!==s&&(u.vertical.value=s,_=!0),u.horizontal.value!==b&&(u.horizontal.value=b,_=!0),_===!0&&F()}function V({position:s}){let b=!1;a.vertical.position.value!==s.top&&(a.vertical.position.value=s.top,b=!0),a.horizontal.position.value!==s.left&&(a.horizontal.position.value=s.left,b=!0),b===!0&&F()}function ce({height:s,width:b}){a.horizontal.size.value!==b&&(a.horizontal.size.value=b,F()),a.vertical.size.value!==s&&(a.vertical.size.value=s,F())}function Z(s,b){const _=a[b];if(s.isFirst===!0){if(_.thumbHidden.value===!0)return;x=_.position.value,t.value=!0}else if(t.value!==!0)return;s.isFinal===!0&&(t.value=!1);const R=Pe[b],ne=u[b].value,qe=(_.size.value-ne)/(ne-_.thumbSize.value),pe=s.distance[R.dist],ze=x+(s.direction===R.dir?1:-1)*pe*qe;D(ze,b)}function N(s,b){const _=a[b];if(_.thumbHidden.value!==!0){const R=s[Pe[b].offset];if(R<_.thumbStart.value||R>_.thumbStart.value+_.thumbSize.value){const ne=R-_.thumbSize.value/2;D(ne/u[b].value*_.size.value,b)}_.ref.value!==null&&_.ref.value.dispatchEvent(new MouseEvent(s.type,s))}}function j(s){N(s,"vertical")}function A(s){N(s,"horizontal")}function F(){c.value===!0?clearTimeout(z):c.value=!0,z=setTimeout(()=>{c.value=!1},e.delay),e.onScroll!==void 0&&v()}function D(s,b){C.value[Pe[b].scroll]=s}function p(){n.value=!0}function P(){n.value=!1}Object.assign(h.proxy,{getScrollTarget:()=>C.value,getScroll:L,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:B,setScrollPercentage(s,b,_){B(s,b*(a[s].size.value-u[s].value),_)}});let E=null;return It(()=>{E={top:a.vertical.position.value,left:a.horizontal.position.value}}),jt(()=>{if(E===null)return;const s=C.value;s!==null&&(We(s,E.left),Ke(s,E.top))}),he(v.cancel),()=>y("div",{class:f.value,onMouseenter:p,onMouseleave:P},[y("div",{ref:C,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[y("div",{class:"q-scrollarea__content absolute",style:M.value},Ht(o.default,[y(Ee,{debounce:0,onResize:ce})])),y(Dt,{axis:"both",onScroll:V})]),y(Ee,{debounce:0,onResize:K}),y("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:j}),y("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),fe(y("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),m),fe(y("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),g)])}});const tt=150;var sa=ae({name:"QDrawer",inheritAttrs:!1,props:ee(O(O({},rt),je),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...ut,"on-layout","mini-state"],setup(e,{slots:o,emit:r,attrs:c}){const t=we(),{proxy:{$q:n}}=t,u=He(e,n),{preventBodyScroll:a}=Nt(),{registerTimeout:h}=Qt(),l=nt(lt,()=>{console.error("QDrawer needs to be child of QLayout")});let z,x,C;const f=q(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),M=d(()=>e.mini===!0&&f.value!==!0),m=d(()=>M.value===!0?e.miniWidth:e.width),g=q(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),L=d(()=>e.persistent!==!0&&(f.value===!0||R.value===!0));function v(i,S){if(ce(),i!==!1&&l.animate(),H(0),f.value===!0){const I=l.instances[E.value];I!==void 0&&I.belowBreakpoint===!0&&I.hide(!1),Y(1),l.isContainer.value!==!0&&a(!0)}else Y(0),i!==!1&&ke(!1);h(()=>{i!==!1&&ke(!0),S!==!0&&r("show",i)},tt)}function B(i,S){Z(),i!==!1&&l.animate(),Y(0),H(A.value*m.value),$e(),S!==!0&&h(()=>{r("hide",i)},tt)}const{show:K,hide:V}=st({showing:g,hideOnRouteChange:L,handleShow:v,handleHide:B}),{addToHistory:ce,removeFromHistory:Z}=At(g,V,L),N={belowBreakpoint:f,hide:V},j=d(()=>e.side==="right"),A=d(()=>(n.lang.rtl===!0?-1:1)*(j.value===!0?1:-1)),F=q(0),D=q(!1),p=q(!1),P=q(m.value*A.value),E=d(()=>j.value===!0?"left":"right"),s=d(()=>g.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:m.value:0),b=d(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(j.value?"R":"L")>-1||n.platform.is.ios===!0&&l.isContainer.value===!0),_=d(()=>e.overlay===!1&&g.value===!0&&f.value===!1),R=d(()=>e.overlay===!0&&g.value===!0&&f.value===!1),ne=d(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&D.value===!1?" hidden":"")),qe=d(()=>({backgroundColor:`rgba(0,0,0,${F.value*.4})`})),pe=d(()=>j.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),ze=d(()=>j.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),pt=d(()=>{const i={};return l.header.space===!0&&pe.value===!1&&(b.value===!0?i.top=`${l.header.offset}px`:l.header.space===!0&&(i.top=`${l.header.size}px`)),l.footer.space===!0&&ze.value===!1&&(b.value===!0?i.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(i.bottom=`${l.footer.size}px`)),i}),bt=d(()=>{const i={width:`${m.value}px`,transform:`translateX(${P.value}px)`};return f.value===!0?i:Object.assign(i,pt.value)}),gt=d(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),yt=d(()=>`q-drawer q-drawer--${e.side}`+(p.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${M.value===!0?"mini":"standard"}`+(b.value===!0||_.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(pe.value===!0?" q-drawer--top-padding":""))),St=d(()=>{const i=n.lang.rtl===!0?e.side:E.value;return[[ve,zt,void 0,{[i]:!0,mouse:!0}]]}),_t=d(()=>{const i=n.lang.rtl===!0?E.value:e.side;return[[ve,Qe,void 0,{[i]:!0,mouse:!0}]]}),wt=d(()=>{const i=n.lang.rtl===!0?E.value:e.side;return[[ve,Qe,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function Ce(){Ct(f,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}$(f,i=>{i===!0?(z=g.value,g.value===!0&&V(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(g.value===!0?(H(0),Y(0),$e()):K(!1))}),$(()=>e.side,(i,S)=>{l.instances[S]===N&&(l.instances[S]=void 0,l[S].space=!1,l[S].offset=0),l.instances[i]=N,l[i].size=m.value,l[i].space=_.value,l[i].offset=s.value}),$(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&Ce()}),$(()=>e.behavior+e.breakpoint,Ce),$(l.isContainer,i=>{g.value===!0&&a(i!==!0),i===!0&&Ce()}),$(l.scrollbarWidth,()=>{H(g.value===!0?0:void 0)}),$(s,i=>{X("offset",i)}),$(_,i=>{r("on-layout",i),X("space",i)}),$(j,()=>{H()}),$(m,i=>{H(),Me(e.miniToOverlay,i)}),$(()=>e.miniToOverlay,i=>{Me(i,m.value)}),$(()=>n.lang.rtl,()=>{H()}),$(()=>e.mini,()=>{e.modelValue===!0&&(qt(),l.animate())}),$(M,i=>{r("mini-state",i)});function H(i){i===void 0?Ye(()=>{i=g.value===!0?0:m.value,H(A.value*i)}):(l.isContainer.value===!0&&j.value===!0&&(f.value===!0||Math.abs(i)===m.value)&&(i+=A.value*l.scrollbarWidth.value),P.value=i)}function Y(i){F.value=i}function ke(i){const S=i===!0?"remove":l.isContainer.value!==!0?"add":"";S!==""&&document.body.classList[S]("q-body--drawer-toggle")}function qt(){clearTimeout(x),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),p.value=!0,x=setTimeout(()=>{p.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function zt(i){if(g.value!==!1)return;const S=m.value,I=U(i.distance.x,0,S);if(i.isFinal===!0){I>=Math.min(75,S)===!0?K():(l.animate(),Y(0),H(A.value*S)),D.value=!1;return}H((n.lang.rtl===!0?j.value!==!0:j.value)?Math.max(S-I,0):Math.min(0,I-S)),Y(U(I/S,0,1)),i.isFirst===!0&&(D.value=!0)}function Qe(i){if(g.value!==!0)return;const S=m.value,I=i.direction===e.side,be=(n.lang.rtl===!0?I!==!0:I)?U(i.distance.x,0,S):0;if(i.isFinal===!0){Math.abs(be)<Math.min(75,S)===!0?(l.animate(),Y(1),H(0)):V(),D.value=!1;return}H(A.value*be),Y(U(1-be/S,0,1)),i.isFirst===!0&&(D.value=!0)}function $e(){a(!1),ke(!0)}function X(i,S){l.update(e.side,i,S)}function Ct(i,S){i.value!==S&&(i.value=S)}function Me(i,S){X("size",i===!0?e.miniWidth:S)}return l.instances[e.side]=N,Me(e.miniToOverlay,m.value),X("space",_.value),X("offset",s.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Vt(()=>{r("on-layout",_.value),r("mini-state",M.value),z=e.showIfAbove===!0;const i=()=>{(g.value===!0?v:B)(!1,!0)};if(l.totalWidth.value!==0){Ye(i);return}C=$(l.totalWidth,()=>{C(),C=void 0,g.value===!1&&e.showIfAbove===!0&&f.value===!1?K(!1):i()})}),he(()=>{C!==void 0&&C(),clearTimeout(x),g.value===!0&&$e(),l.instances[e.side]===N&&(l.instances[e.side]=void 0,X("size",0),X("offset",0),X("space",!1))}),()=>{const i=[];f.value===!0&&(e.noSwipeOpen===!1&&i.push(fe(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),St.value)),i.push(Xe("div",{ref:"backdrop",class:ne.value,style:qe.value,"aria-hidden":"true",onClick:V},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>wt.value)));const S=M.value===!0&&o.mini!==void 0,I=[y("div",ee(O({},c),{key:""+S,class:[gt.value,c.class]}),S===!0?o.mini():_e(o.default))];return e.elevated===!0&&g.value===!0&&I.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(Xe("aside",{ref:"content",class:yt.value,style:bt.value},I,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>_t.value)),y("div",{class:"q-drawer-container"},i)}}});function at(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const o=parseInt(e,10);return isNaN(o)?0:o}var ca=ot({name:"close-popup",beforeMount(e,{value:o}){const r={depth:at(o),handler(c){r.depth!==0&&setTimeout(()=>{const t=Ft(e);t!==void 0&&Rt(t,c,r.depth)})},handlerKey(c){Wt(c,13)===!0&&r.handler(c)}};e.__qclosepopup=r,e.addEventListener("click",r.handler),e.addEventListener("keyup",r.handlerKey)},updated(e,{value:o,oldValue:r}){o!==r&&(e.__qclosepopup.depth=at(o))},beforeUnmount(e){const o=e.__qclosepopup;e.removeEventListener("click",o.handler),e.removeEventListener("keyup",o.handlerKey),delete e.__qclosepopup}});const da=ue({name:"MenuLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function va(e,o,r,c,t,n){return T(),Q(De,{to:e.to,class:me(["rounded-borders bg-white",{"q-ma-sm":!e.mini,"q-ma-xs":e.mini}]),"active-class":"brand-active-menu text-white",exact:""},{default:k(()=>[e.icon?(T(),Q(J,{key:0,avatar:""},{default:k(()=>[w(ie,{name:e.icon},null,8,["name"])]),_:1})):re("",!0),w(J,null,{default:k(()=>[w(ye,null,{default:k(()=>[ct(le(e.title),1)]),_:1})]),_:1})]),_:1},8,["to","class"])}var fa=se(da,[["render",va]]),ma=ae({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:o,emit:r}){let c=!1,t,n,u,a,h,l;function z(){t&&t(),t=null,c=!1,clearTimeout(u),clearTimeout(a),n!==void 0&&n.removeEventListener("transitionend",h),h=null}function x(m,g,L){m.style.overflowY="hidden",g!==void 0&&(m.style.height=`${g}px`),m.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,c=!0,t=L}function C(m,g){m.style.overflowY=null,m.style.height=null,m.style.transition=null,z(),g!==l&&r(g)}function f(m,g){let L=0;n=m,c===!0?(z(),L=m.offsetHeight===m.scrollHeight?0:void 0):l="hide",x(m,L,g),u=setTimeout(()=>{m.style.height=`${m.scrollHeight}px`,h=v=>{(Object(v)!==v||v.target===m)&&C(m,"show")},m.addEventListener("transitionend",h),a=setTimeout(h,e.duration*1.1)},100)}function M(m,g){let L;n=m,c===!0?z():(l="show",L=m.scrollHeight),x(m,L,g),u=setTimeout(()=>{m.style.height=0,h=v=>{(Object(v)!==v||v.target===m)&&C(m,"hide")},m.addEventListener("transitionend",h),a=setTimeout(h,e.duration*1.1)},100)}return he(()=>{c===!0&&z()}),()=>y(Kt,{css:!1,appear:e.appear,onEnter:f,onLeave:M},o.default)}});const te=Yt({}),ha=Object.keys(dt);var pa=ae({name:"QExpansionItem",props:ee(O(O(O({},dt),rt),je),{icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]}),emits:[...ut,"click","after-show","after-hide"],setup(e,{slots:o,emit:r}){const{proxy:{$q:c}}=we(),t=He(e,c),n=q(e.modelValue!==null?e.modelValue:e.defaultOpened),u=q(null),{hide:a,toggle:h}=st({showing:n});let l,z;const x=d(()=>`q-expansion-item q-item-type q-expansion-item--${n.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),C=d(()=>{if(e.contentInsetLevel===void 0)return null;const p=c.lang.rtl===!0?"Right":"Left";return{["padding"+p]:e.contentInsetLevel*56+"px"}}),f=d(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),M=d(()=>{const p={};return ha.forEach(P=>{p[P]=e[P]}),p}),m=d(()=>f.value===!0||e.expandIconToggle!==!0),g=d(()=>e.expandedIcon!==void 0&&n.value===!0?e.expandedIcon:e.expandIcon||c.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),L=d(()=>e.disable!==!0&&(f.value===!0||e.expandIconToggle===!0));$(()=>e.group,p=>{z!==void 0&&z(),p!==void 0&&Z()});function v(p){f.value!==!0&&h(p),r("click",p)}function B(p){p.keyCode===13&&K(p,!0)}function K(p,P){P!==!0&&u.value!==null&&u.value.focus(),h(p),it(p)}function V(){r("after-show")}function ce(){r("after-hide")}function Z(){l===void 0&&(l=Xt()),n.value===!0&&(te[e.group]=l);const p=$(n,E=>{E===!0?te[e.group]=l:te[e.group]===l&&delete te[e.group]}),P=$(()=>te[e.group],(E,s)=>{s===l&&E!==void 0&&E!==l&&a()});z=()=>{p(),P(),te[e.group]===l&&delete te[e.group],z=void 0}}function N(){const p={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},P=[y(ie,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&n.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:g.value})];return L.value===!0&&(Object.assign(p,{tabindex:0,onClick:K,onKeyup:B}),P.unshift(y("div",{ref:u,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),y(J,p,()=>P)}function j(){let p;return o.header!==void 0?p=[].concat(o.header()):(p=[y(J,()=>[y(ye,{lines:e.labelLines},()=>e.label||""),e.caption?y(ye,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&p[e.switchToggleSide===!0?"push":"unshift"](y(J,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>y(ie,{name:e.icon})))),e.disable!==!0&&p[e.switchToggleSide===!0?"unshift":"push"](N()),p}function A(){const p={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return m.value===!0&&(p.clickable=!0,p.onClick=v,f.value===!0&&Object.assign(p,M.value)),y(De,p,j)}function F(){return fe(y("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:C.value},_e(o.default)),[[Ut,n.value]])}function D(){const p=[A(),y(ma,{duration:e.duration,onShow:V,onHide:ce},F)];return e.expandSeparator===!0&&p.push(y(Ue,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),y(Ue,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),p}return e.group!==void 0&&Z(),he(()=>{z!==void 0&&z()}),()=>y("div",{class:x.value},[y("div",{class:"q-expansion-item__container relative-position"},D())])}});const ba=ue({name:"MenuLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function ga(e,o,r,c,t,n){return T(),Q(De,{to:e.to,class:me(["rounded-borders bg-primary text-white",{"q-ml-sm":!e.mini,"q-mt-sm":!e.mini,"q-ma-xs":e.mini}]),"active-class":"brand-active-menu text-white",exact:""},{default:k(()=>[e.icon?(T(),Q(J,{key:0,avatar:""},{default:k(()=>[w(ie,{name:e.icon},null,8,["name"])]),_:1})):re("",!0),w(J,null,{default:k(()=>[w(ye,null,{default:k(()=>[ct(le(e.title),1)]),_:1})]),_:1})]),_:1},8,["to","class"])}var ya=se(ba,[["render",ga]]);const Sa=ue({name:"MenuExpanded",components:{MenuSubLink:ya},props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function _a(e,o,r,c,t,n){const u=oe("MenuSubLink");return T(),Q(pa,{icon:e.icon,label:e.title,class:me(["rounded-borders bg-white",{"q-ma-sm":!e.mini,"q-ma-xs":e.mini}]),"active-class":"brand-active-menu text-white",exact:""},{default:k(()=>[w(J,{class:"bg-secondary"},{default:k(()=>[w(ht,null,{default:k(()=>[(T(!0),G(ft,null,vt(e.subMenu,a=>(T(),Q(u,Se({key:a},a,{mini:e.mini}),null,16,["mini"]))),128))]),_:1})]),_:1})]),_:1},8,["icon","label","class"])}var wa=se(Sa,[["render",_a]]);const qa=ue({name:"MenuNav",components:{MenuLink:fa,MenuExpanded:wa},props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function za(e,o,r,c,t,n){const u=oe("MenuLink"),a=oe("MenuExpanded");return T(),G("div",null,[!e.subMenu&&e.to?(T(),Q(u,Se({key:0},O(O({},e.$props),e.$attrs),{mini:e.mini}),null,16,["mini"])):e.subMenu&&e.subMenu.length>0?(T(),Q(a,Se({key:1},O(O({},e.$props),e.$attrs),{mini:e.mini}),null,16,["mini"])):re("",!0)])}var Ca=se(qa,[["render",za]]);const ka=ue({setup(){const e=mt(),o=Gt(),r=q(null);$(r,t=>{t[10]!==o.active[10]&&o.$patch({active:t})});const c=d(()=>o.active[10]?o.projects.filter(t=>t[10]!==o.active[10]):o.projects);return{userStore:e,projectStore:o,model:r,options:c}}}),$a={class:"q-px-sm"},Ma={class:"row items-center"},xa={key:0,class:"col-12 col-md-6"};function Ta(e,o,r,c,t,n){return T(),G("div",$a,[w(ea,{flat:""},{default:k(()=>[w(Jt,null,{default:k(()=>[W("div",Ma,[W("div",{class:me(e.projectStore.projects.length>1?"col-12 col-md-6":"col-12")},[W("div",{class:me(e.$q.screen.lt.md?"text-body1 text-primary":"text-h5 text-primary")},le(e.projectStore.active[16]),3)],2),e.projectStore.projects.length>1?(T(),G("div",xa,[w(Zt,{label:"Change Project","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=u=>e.model=u),options:e.options,"option-value":"10","option-label":"16","display-value":`${e.model?e.model[16]:""}`},null,8,["modelValue","options","display-value"])])):re("",!0)])]),_:1})]),_:1})])}var La=se(ka,[["render",Ta]]);const Oa=[{title:"Expected Arrivals",caption:"Arrivals",icon:"fa-solid fa-plane-arrival",to:{name:"arrivals",exact:!0}},{title:"Hire Requests",caption:"Requests",icon:"fa-solid fa-user-plus",to:{name:"requests",exact:!0}},{title:"Pipeline",caption:"Pipeline",icon:"fa-solid fa-people-group",to:{name:"pipeline",exact:!0}},{title:"Create Password",caption:"Pipeline",icon:"fa-solid fa-people-group",to:{name:"register",exact:!0}}],Ba=ue({name:"MainLayout",components:{MenuNav:Ca,changeProject:La},setup(){const e=ta(),o=mt(),r=q(!1),c=q(!1),t=q(!1),n=q(!1);return{menuList:Oa,userStore:o,leftDrawerOpen:r,rightDrawerOpen:t,miniState:c,miniHover:n,miniMouseOver(){c.value===!0&&(n.value=!1)},miniMouseOut(){c.value===!0&&(n.value=!0)},toggleLeftDrawer(){e.screen.gt.sm?(c.value=!c.value,c.value===!0&&(n.value=!0)):r.value=!r.value},toggleRightDrawer(){t.value=!t.value},drawerClick(u){c.value&&(c.value=!1,u.stopPropagation())}}}}),Pa={key:0,class:"q-mr-sm q-ml-sm",src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo-white.png",alt:"BrandSafway Logo",height:"25"},Ea={key:0},Ia={key:1},ja={class:"q-gutter-sm row items-center no-wrap"},Ha={class:"row no-wrap q-pa-md"},Da={class:"column items-center"},Qa={class:"text-subtitle1 q-mt-md q-mb-xs"},Aa={class:"text-subtitle1 text-primary q-mb-xs"};function Va(e,o,r,c,t,n){const u=oe("MenuNav"),a=oe("change-project"),h=oe("router-view");return T(),Q(aa,{view:"hHh lpR fFf"},{default:k(()=>[w(ia,{elevated:""},{default:k(()=>[w(Je,{style:{height:"62px"}},{default:k(()=>[w(Oe,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),e.$q.screen.gt.sm?(T(),G("img",Pa)):re("",!0),w(Ge,null,{default:k(()=>[e.$q.screen.lt.sm?(T(),G("span",Ea)):(T(),G("span",Ia,"Talent Elevated"))]),_:1}),W("div",ja,[w(Oe,{flat:"",dense:"",color:"white"},{default:k(()=>[W("div",null,le(e.userStore.user[6]),1),w(ie,{right:"",size:"2.2em",name:"account_circle"}),w(na,null,{default:k(()=>[W("div",Ha,[W("div",Da,[w(ie,{right:"",size:"72px",name:"account_circle",class:"q-mr-md"}),W("div",Qa,le(e.userStore.user[6]),1),W("div",Aa,le(e.userStore.user[7]),1),fe(w(Oe,{color:"primary",label:"Logout",push:"",size:"md"},null,512),[[ca]])])])]),_:1})]),_:1})])]),_:1})]),_:1}),w(sa,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=l=>e.leftDrawerOpen=l),side:"left","show-if-above":"",bordered:"",mini:e.miniState&&e.miniHover,onMouseover:e.miniMouseOver,onMouseout:e.miniMouseOut,onClickCapture:e.drawerClick,class:"text-primary bg-secondary"},{default:k(()=>[w(ua,{class:"fit"},{default:k(()=>[e.$q.screen.lt.md?(T(),Q(Je,{key:0,style:{height:"64px"}},{default:k(()=>[w(Ge,{class:"items-center"},{default:k(()=>[w(la,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",style:{"max-width":"245px"},fit:"center",class:"q-ml-md"})]),_:1})]),_:1})):re("",!0),w(ht,{class:"q-mt-sm"},{default:k(()=>[(T(!0),G(ft,null,vt(e.menuList,l=>(T(),Q(u,Se({key:l.title},l,{mini:e.miniState}),null,16,["mini"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","mini","onMouseover","onMouseout","onClickCapture"]),w(oa,null,{default:k(()=>[w(a,{class:"q-mb-md"}),w(h)]),_:1})]),_:1})}var Ka=se(Ba,[["render",Va]]);export{Ka as default};
