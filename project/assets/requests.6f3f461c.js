var at=Object.defineProperty;var Se=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var Pe=(e,r,o)=>r in e?at(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,ae=(e,r)=>{for(var o in r||(r={}))lt.call(r,o)&&Pe(e,o,r[o]);if(Se)for(var o of Se(r))rt.call(r,o)&&Pe(e,o,r[o]);return e};import{i as nt,b0 as Ae,r as R,q as $,x as Qe,a5 as ot,Z as ge,b1 as st,s as q,aa as it,b2 as ut,M as ct,af as z,X as dt,z as ue,p as W,b3 as ft,a1 as Be,D as De,b4 as mt,w as Y,a4 as le,b5 as bt,T as vt,U as gt,Q as ht,u as K,b6 as $t,b7 as qt,O as pt,b8 as wt,P as Ct,b9 as yt,a6 as Tt,aJ as Oe,ba as p,d as he,az as je,av as Ve,aG as Ee,_ as $e,o as k,f as V,ae as c,ac as d,at as re,as as ne,h as A,aj as E,aB as Fe,aq as Ne,ab as J,ai as oe,ar as Me,aL as _t}from"./index.e88105df.js";import{a as se,Q as ie}from"./QTable.a003a744.js";import"./QList.1e97821a.js";let Rt=0;const kt=["click","keydown"],St={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Rt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Pt(e,r,o,s){const l=nt(Ae,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:T}=ue(),a=R(null),m=R(null),D=R(null),x=$(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),w=$(()=>l.currentModel.value===e.name),I=$(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(w.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(s!==void 0&&s.linkClass.value!==""?` ${s.linkClass.value}`:"")),L=$(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),H=$(()=>e.disable===!0||l.hasFocus.value===!0?-1:e.tabindex||0);function Q(b,C){if(C!==!0&&a.value!==null&&a.value.focus(),e.disable!==!0){let _;if(s!==void 0)if(s.hasRouterLink.value===!0)_=()=>{b.__qNavigate=!0,l.avoidRouteWatcher=!0;const y=s.navigateToRouterLink(b);y===!1?l.avoidRouteWatcher=!1:y.then(P=>{l.avoidRouteWatcher=!1,P===void 0&&l.updateModel({name:e.name,fromRoute:!0})})};else{o("click",b);return}else _=()=>{l.updateModel({name:e.name,fromRoute:!1})};o("click",b,_),b.defaultPrevented!==!0&&_()}}function U(b){it(b,[13,32])?Q(b,!0):ut(b)!==!0&&b.keyCode>=35&&b.keyCode<=40&&l.onKbdNavigate(b.keyCode,T.$el)===!0&&ct(b),o("keydown",b)}function O(){const b=l.tabProps.value.narrowIndicator,C=[],_=q("div",{ref:D,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&C.push(q(z,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&C.push(q("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&C.push(e.alertIcon!==void 0?q(z,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):q("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),b===!0&&C.push(_);const y=[q("div",{class:"q-focus-helper",tabindex:-1,ref:a}),q("div",{class:L.value},dt(r.default,C))];return b===!1&&y.push(_),y}const S={name:$(()=>e.name),rootRef:m,tabIndicatorRef:D,routerProps:s};Qe(()=>{l.unregisterTab(S),l.recalculateScroll()}),ot(()=>{l.registerTab(S),l.recalculateScroll()});function j(b,C){const _=ae({ref:m,class:I.value,tabindex:H.value,role:"tab","aria-selected":w.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:Q,onKeydown:U},C);return ge(q(b,_,O()),[[st,x.value]])}return{renderTab:j,$tabs:l}}var xe=W({name:"QTab",props:St,emits:kt,setup(e,{slots:r,emit:o}){const{renderTab:s}=Pt(e,r,o);return()=>s("div")}});function Bt(e,r,o){const s=o===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?s[0]:s[1]}${e?` text-${e}`:""}`}const Dt=["left","center","right","justify"],Ie=()=>{};var Mt=W({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Dt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:o}){const s=ue(),{proxy:{$q:l}}=s,{registerTick:T}=ft(),{registerTimeout:a,removeTimeout:m}=Be(),{registerTimeout:D}=Be(),x=R(null),w=R(null),I=R(e.modelValue),L=R(!1),H=R(!0),Q=R(!1),U=R(!1),O=$(()=>l.platform.is.desktop===!0||e.mobileArrows===!0),S=[],j=R(!1);let b=!1,C,_,y,P=O.value===!0?pe:De;const ze=$(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Bt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),We=$(()=>`q-tabs__content--align-${L.value===!0?"left":U.value===!0?"justify":e.align}`),He=$(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${O.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ue=$(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+We.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(l.platform.is.mobile===!0?" scroll":"")),G=$(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),X=$(()=>e.vertical!==!0&&l.lang.rtl===!0),ce=$(()=>mt===!1&&X.value===!0);Y(X,P),Y(()=>e.modelValue,t=>{de({name:t,setCurrent:!0,skipEmit:!0})}),Y(()=>e.outsideArrows,()=>{le(Z())}),Y(O,t=>{P=t===!0?pe:De,le(Z())});function de({name:t,setCurrent:n,skipEmit:i,fromRoute:v}){I.value!==t&&(i!==!0&&o("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(Ye(I.value,t),I.value=t)),v!==void 0&&(b=v)}function Z(){T(()=>{s.isDeactivated!==!0&&s.isUnmounted!==!0&&qe({width:x.value.offsetWidth,height:x.value.offsetHeight})})}function qe(t){if(G.value===void 0||w.value===null)return;const n=t[G.value.container],i=Math.min(w.value[G.value.scroll],Array.prototype.reduce.call(w.value.children,(u,g)=>u+(g[G.value.content]||0),0)),v=n>0&&i>n;L.value!==v&&(L.value=v),v===!0&&le(P);const h=n<parseInt(e.breakpoint,10);U.value!==h&&(U.value=h)}function Ye(t,n){const i=t!=null&&t!==""?S.find(h=>h.name.value===t):null,v=n!=null&&n!==""?S.find(h=>h.name.value===n):null;if(i&&v){const h=i.tabIndicatorRef.value,u=v.tabIndicatorRef.value;clearTimeout(C),h.style.transition="none",h.style.transform="none",u.style.transition="none",u.style.transform="none";const g=h.getBoundingClientRect(),f=u.getBoundingClientRect();u.style.transform=e.vertical===!0?`translate3d(0,${g.top-f.top}px,0) scale3d(1,${f.height?g.height/f.height:1},1)`:`translate3d(${g.left-f.left}px,0,0) scale3d(${f.width?g.width/f.width:1},1,1)`,le(()=>{C=setTimeout(()=>{u.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",u.style.transform="none"},70)})}v&&L.value===!0&&ee(v.rootRef.value)}function ee(t){const{left:n,width:i,top:v,height:h}=w.value.getBoundingClientRect(),u=t.getBoundingClientRect();let g=e.vertical===!0?u.top-v:u.left-n;if(g<0){w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(g),P();return}g+=e.vertical===!0?u.height-h:u.width-i,g>0&&(w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(g),P())}function pe(){const t=w.value;if(t!==null){const n=t.getBoundingClientRect(),i=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);X.value===!0?(H.value=Math.ceil(i+n.width)<t.scrollWidth-1,Q.value=i>0):(H.value=i>0,Q.value=e.vertical===!0?Math.ceil(i+n.height)<t.scrollHeight:Math.ceil(i+n.width)<t.scrollWidth)}}function we(t){M(),Te(t),_=setInterval(()=>{Te(t)===!0&&M()},5)}function Ce(){we(ce.value===!0?Number.MAX_SAFE_INTEGER:0)}function ye(){we(ce.value===!0?0:Number.MAX_SAFE_INTEGER)}function M(){clearInterval(_)}function Ke(t,n){const i=Array.prototype.filter.call(w.value.children,f=>f===n||f.matches&&f.matches(".q-tab.q-focusable")===!0),v=i.length;if(v===0)return;if(t===36)return ee(i[0]),!0;if(t===35)return ee(i[v-1]),!0;const h=t===(e.vertical===!0?38:37),u=t===(e.vertical===!0?40:39),g=h===!0?-1:u===!0?1:void 0;if(g!==void 0){const f=X.value===!0?-1:1,B=i.indexOf(n)+g*f;return B>=0&&B<v&&(ee(i[B]),i[B].focus({preventScroll:!0})),!0}}const Je=$(()=>ce.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function Te(t){const n=w.value,{get:i,set:v}=Je.value;let h=!1,u=i(n);const g=t<u?-1:1;return u+=g*5,u<0?(h=!0,u=0):(g===-1&&u<=t||g===1&&u>=t)&&(h=!0,u=t),v(n,u),P(),h}function fe(){return S.filter(t=>t.routerProps!==void 0&&t.routerProps.hasRouterLink.value===!0)}function Ge(){let t=null,n=b;const i={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:v}=s.proxy.$route,h=I.value;let u=n===!0?Ie:f=>{h===f.name.value&&(n=!0,u=Ie)};const g=fe();for(const f of g){const B=f.routerProps.exact.value===!0;if(f.routerProps[B===!0?"linkIsExactActive":"linkIsActive"].value!==!0||i.exact===!0&&B!==!0){u(f);continue}const me=f.routerProps.linkRoute.value,be=me.hash;if(B===!0){if(v===be){t=f.name.value;break}else if(v!==""&&be!==""){u(f);continue}}const ve=me.matched.length,ke=me.href.length-be.length;if(ve===i.matchedLen?ke>i.hrefLen:ve>i.matchedLen){t=f.name.value,Object.assign(i,{matchedLen:ve,hrefLen:ke,exact:B});continue}u(f)}(n===!0||t!==null)&&de({name:t,setCurrent:!0,fromRoute:!0})}function Xe(t){if(m(),j.value!==!0&&x.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&x.value.contains(n)===!0&&(j.value=!0)}}function Ze(){a(()=>{j.value=!1},30)}function te(){_e.avoidRouteWatcher!==!0&&D(Ge)}function et(t){S.push(t),fe().length>0&&(y===void 0&&(y=Y(()=>s.proxy.$route,te)),te())}function tt(t){S.splice(S.indexOf(t),1),y!==void 0&&(fe().length===0&&(y(),y=void 0),te())}const _e={currentModel:I,tabProps:ze,hasFocus:j,registerTab:et,unregisterTab:tt,verifyRouteModel:te,updateModel:de,recalculateScroll:Z,onKbdNavigate:Ke,avoidRouteWatcher:!1};bt(Ae,_e),Qe(()=>{clearTimeout(C),y!==void 0&&y()});let Re=!1;return vt(()=>{Re=!0}),gt(()=>{Re===!0&&Z()}),()=>{const t=[q(ht,{onResize:qe}),q("div",{ref:w,class:Ue.value,onScroll:P},K(r.default))];return O.value===!0&&t.push(q(z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(H.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:Ce,onTouchstartPassive:Ce,onMouseup:M,onMouseleave:M,onTouchend:M}),q(z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:ye,onTouchstartPassive:ye,onMouseup:M,onMouseleave:M,onTouchend:M})),q("div",{ref:x,class:He.value,role:"tablist",onFocusin:Xe,onFocusout:Ze},t)}}}),Le=W({name:"QTabPanel",props:$t,setup(e,{slots:r}){return()=>q("div",{class:"q-tab-panel"},K(r.default))}}),xt=W({name:"QTabPanels",props:ae(ae({},qt),pt),emits:wt,setup(e,{slots:r}){const o=ue(),s=Ct(e,o.proxy.$q),{updatePanelsList:l,getPanelContent:T,panelDirectives:a}=yt(),m=$(()=>"q-tab-panels q-panel-parent"+(s.value===!0?" q-tab-panels--dark q-dark":""));return()=>(l(r),Tt("div",{class:m.value},T(),"pan",e.swipeable,()=>a.value))}}),F=W({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:r}){const o=$(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>q("tr",{class:o.value},K(r.default))}}),N=W({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:r}){const o=ue(),s=$(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return q("td",{class:s.value},K(r.default));const l=o.vnode.key,T=(e.props.colsMap!==void 0?e.props.colsMap[l]:null)||e.props.col;if(T===void 0)return;const{row:a}=e.props;return q("td",{class:s.value+T.__tdClass(a),style:T.__tdStyle(a)},K(r.default))}}});const It=[{name:1,label:"Date",align:"left",field:e=>e[82],format:e=>`${Oe.formatDate(new Date(e),"MM-DD-YYYY")}`,sortable:!0,classes:`${p.lt.md?"hidden":""}`},{name:2,label:"ID",align:"left",field:e=>e[3],format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Office",align:"left",field:e=>e[103],format:e=>`${e}`,sortable:!0,classes:`${p.lt.md?"hidden":""}`},{name:4,label:"Job #",align:"left",field:e=>e[27],format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"DRO (Days)",align:"right",field:e=>e[88],format:e=>`${e}`,sortable:!0,classes:`${p.lt.md?"hidden":""}`},{name:6,label:"# Requested",align:"right",field:e=>e[115],format:e=>`${e}`,classes:`${p.lt.md?"hidden":""}`},{name:7,label:"Offers",align:"right",field:e=>e[232],format:e=>`${e}`,sortable:!0,required:!0},{name:8,label:"Deployed",align:"right",field:e=>e[254],format:e=>`${e}`,sortable:!0,required:!0},{name:9,label:"Balance",align:"right",field:e=>e[258],format:e=>`${e}`,sortable:!0,required:!0}],Lt=[{name:2,label:"ID",align:"left",field:e=>e[3],format:e=>`${e}`,sortable:!0,required:!0},{name:6,label:"# Requested",align:"right",field:e=>e[115],format:e=>`${e}`,classes:`${p.lt.md?"hidden":""}`},{name:9,label:"Balance",align:"right",field:e=>e[258],format:e=>`${e}`,sortable:!0,required:!0}],At=[{name:1,label:"ID",align:"left",field:e=>e[3],format:e=>`${e}`,sortable:!0,required:!0},{name:2,label:"Craft",align:"left",field:e=>e[43],format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Classification",align:"left",field:e=>e[12],format:e=>`${e}`,sortable:!0,required:!0},{name:4,label:"Status",align:"left",field:e=>e[17],format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"DRO (Days)",align:"right",field:e=>e[31],format:e=>`${e}`,sortable:!0,classes:`${p.lt.md?"hidden":""}`},{name:6,label:"#Requested",align:"right",field:e=>e[18],format:e=>`${e}`,classes:`${p.lt.md?"hidden":""}`},{name:9,label:"Need",align:"right",field:e=>e[72],format:e=>`${e}`,sortable:!0,required:!0}],Qt=[{name:2,label:"Craft",align:"left",field:e=>e[43],format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Classification",align:"left",field:e=>e[12],format:e=>`${e}`,sortable:!0,required:!0},{name:4,label:"Status",align:"left",field:e=>e[17],format:e=>`${e}`,sortable:!0,required:!0},{name:9,label:"Balance",align:"right",field:e=>e[72],format:e=>`${e}`,sortable:!0,required:!0}],Ot=he({name:"Open Table",components:{},setup(){const e=je(),r=Ve(),{activeOpenProjectRequests:o}=Ee(r),s=o,l=$(()=>e.screen.lt.md?s.value.length:5);return{columns:It,rows:s,initialPagination:{rowsPerPage:l},separator:"vertical",projectStore:r,secondColumns:At,mobileColumns:Lt,secMobileColumns:Qt}}}),jt={class:"q-px-none"},Vt={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function Et(e,r,o,s,l,T){return k(),V("div",jt,[c(ie,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.gt.md?`Open Requests for ${e.projectStore.active[16]}`:"Open Requests",columns:e.$q.screen.lt.sm?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no open requests for ${e.projectStore.active[16]}`,dense:e.$q.screen.lt.sm,"hide-pagination":e.$q.screen.lt.md},{header:d(a=>[c(F,{class:"bg-dark text-white",props:a},{default:d(()=>[c(se,{"auto-width":""}),(k(!0),V(re,null,ne(a.cols,m=>(k(),J(se,{key:m.name,props:a},{default:d(()=>[oe(E(m.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":d(({message:a})=>[A("div",Vt,[c(z,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),A("span",null,E(a),1)])]),body:d(a=>[c(F,{props:a},{default:d(()=>[c(N,{"auto-width":""},{default:d(()=>[c(Fe,{size:"sm",color:"primary",round:"",dense:"",onClick:m=>a.expand=!a.expand,icon:a.expand?"remove":"add"},null,8,["onClick","icon"])]),_:2},1024),(k(!0),V(re,null,ne(a.cols,m=>(k(),J(N,{key:m.name,props:a},{default:d(()=>[oe(E(m.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"]),ge(c(F,{props:a},{default:d(()=>[c(N,{colspan:"100%"},{default:d(()=>[A("div",null,[c(ie,{dense:"",title:"Classifications","hide-pagination":!0,columns:e.$q.screen.lt.sm?e.secMobileColumns:e.secondColumns,rows:a.row[267],"row-key":"3","table-header-class":"bg-secondary"},null,8,["columns","rows"])])]),_:2},1024)]),_:2},1032,["props"]),[[Ne,a.expand]])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","dense","hide-pagination"])])}var Ft=$e(Ot,[["render",Et]]);const Nt=[{name:1,label:"Date",align:"left",field:e=>e[82],format:e=>`${Oe.formatDate(new Date(e),"MM-DD-YYYY")}`,sortable:!0,classes:`${p.lt.md?"hidden":""}`},{name:2,label:"ID",align:"left",field:e=>e[3],format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Office",align:"left",field:e=>e[103],format:e=>`${e}`,sortable:!0,classes:`${p.lt.md?"hidden":""}`},{name:4,label:"Job #",align:"left",field:e=>e[27],format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"DRO (Days)",align:"right",field:e=>e[88],format:e=>`${e}`,sortable:!0,classes:`${p.lt.md?"hidden":""}`},{name:6,label:"#Requested",align:"right",field:e=>e[115],format:e=>`${e}`,classes:`${p.lt.md?"hidden":""}`},{name:7,label:"Offers",align:"right",field:e=>e[232],format:e=>`${e}`,sortable:!0,required:!0},{name:8,label:"Deployed",align:"right",field:e=>e[254],format:e=>`${e}`,sortable:!0,required:!0},{name:9,label:"Need",align:"right",field:e=>e[258],format:e=>`${e}`,sortable:!0,required:!0}],zt=[{name:2,label:"ID",align:"left",field:e=>e[3],format:e=>`${e}`,sortable:!0,required:!0},{name:6,label:"# Requested",align:"right",field:e=>e[115],format:e=>`${e}`,classes:`${p.lt.md?"hidden":""}`},{name:9,label:"Balance",align:"right",field:e=>e[258],format:e=>`${e}`,sortable:!0,required:!0}],Wt=[{name:1,label:"ID",align:"left",field:e=>e[3],format:e=>`${e}`,sortable:!0,required:!0},{name:2,label:"Craft",align:"left",field:e=>e[43],format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Classification",align:"left",field:e=>e[12],format:e=>`${e}`,sortable:!0,required:!0},{name:4,label:"Status",align:"left",field:e=>e[17],format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"DRO (Days)",align:"right",field:e=>e[31],format:e=>`${e}`,sortable:!0,classes:`${p.lt.md?"hidden":""}`},{name:6,label:"#Requested",align:"right",field:e=>e[18],format:e=>`${e}`,classes:`${p.lt.md?"hidden":""}`},{name:9,label:"Need",align:"right",field:e=>e[72],format:e=>`${e}`,sortable:!0,required:!0}],Ht=[{name:2,label:"Craft",align:"left",field:e=>e[43],format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Classification",align:"left",field:e=>e[12],format:e=>`${e}`,sortable:!0,required:!0},{name:4,label:"Status",align:"left",field:e=>e[17],format:e=>`${e}`,sortable:!0,required:!0},{name:9,label:"Balance",align:"right",field:e=>e[72],format:e=>`${e}`,sortable:!0,required:!0}],Ut=he({name:"Closed Table",components:{},setup(){const e=je(),r=Ve(),{activeClosedProjectRequests:o}=Ee(r),s=o,l=$(()=>e.screen.lt.md?s.value.length:5);return{columns:Nt,rows:s,initialPagination:{rowsPerPage:l},separator:"vertical",projectStore:r,secondColumns:Wt,mobileColumns:zt,secMobileColumns:Ht}}}),Yt={class:"q-px-none"},Kt={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function Jt(e,r,o,s,l,T){return k(),V("div",Yt,[c(ie,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.gt.md?`Completed Requests for ${e.projectStore.active[16]}`:"Completed Requests",columns:e.$q.screen.lt.sm?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no completed requests for ${e.projectStore.active[16]}`,dense:e.$q.screen.lt.sm,"hide-pagination":e.$q.screen.lt.md},{header:d(a=>[c(F,{class:"bg-dark text-white",props:a},{default:d(()=>[c(se,{"auto-width":""}),(k(!0),V(re,null,ne(a.cols,m=>(k(),J(se,{key:m.name,props:a},{default:d(()=>[oe(E(m.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":d(({message:a})=>[A("div",Kt,[c(z,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),A("span",null,E(a),1)])]),body:d(a=>[c(F,{props:a},{default:d(()=>[c(N,{"auto-width":""},{default:d(()=>[c(Fe,{size:"sm",color:"primary",round:"",dense:"",onClick:m=>a.expand=!a.expand,icon:a.expand?"remove":"add"},null,8,["onClick","icon"])]),_:2},1024),(k(!0),V(re,null,ne(a.cols,m=>(k(),J(N,{key:m.name,props:a},{default:d(()=>[oe(E(m.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"]),ge(c(F,{props:a},{default:d(()=>[c(N,{colspan:"100%"},{default:d(()=>[A("div",null,[c(ie,{dense:"",title:"Classifications","hide-pagination":!0,columns:e.$q.screen.lt.sm?e.secMobileColumns:e.secondColumns,rows:a.row[267],"row-key":"3","table-header-class":"bg-secondary"},null,8,["columns","rows"])])]),_:2},1024)]),_:2},1032,["props"]),[[Ne,a.expand]])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","dense","hide-pagination"])])}var Gt=$e(Ut,[["render",Jt]]);const Xt=he({name:"Requests",components:{openTable:Ft,closedTable:Gt},setup(){return{tab:R(0)}}}),Zt={class:"q-px-sm"};function ea(e,r,o,s,l,T){const a=Me("open-table"),m=Me("closed-table");return k(),J(_t,{style:{"max-width":"100vw"}},{default:d(()=>[A("div",Zt,[c(Mt,{modelValue:e.tab,"onUpdate:modelValue":r[0]||(r[0]=D=>e.tab=D),"bg-color":"none",color:"dark","active-color":"primary","indicator-color":"accent",align:"justify",dense:""},{default:d(()=>[c(xe,{name:0,icon:e.$q.screen.gt.sm?"fa-solid fa-door-open":"",label:e.$q.screen.gt.xs?"Open Requests":"Open"},null,8,["icon","label"]),c(xe,{name:1,icon:e.$q.screen.gt.sm?"fa-solid fa-door-closed":"",label:e.$q.screen.gt.xs?"Completed Requests":"Completed"},null,8,["icon","label"])]),_:1},8,["modelValue"]),c(xt,{modelValue:e.tab,"onUpdate:modelValue":r[1]||(r[1]=D=>e.tab=D),animated:""},{default:d(()=>[c(Le,{name:0},{default:d(()=>[c(a)]),_:1}),c(Le,{name:1},{default:d(()=>[c(m)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var na=$e(Xt,[["render",ea]]);export{na as default};
