var H=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var E=(e,t,o)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))O.call(t,o)&&E(e,o,t[o]);if(A)for(var o of A(t))X.call(t,o)&&E(e,o,t[o]);return e},y=(e,t)=>L(e,M(t));import{y as I,h as s,z as k,r as C,c as u,ax as Y,am as Z,aS as G,g as R,aZ as J,i as ee,a_ as U,a$ as te,b0 as ae,a2 as ne,b1 as re,b2 as oe,a3 as le,b3 as ie,aV as se,ak as ce,ap as ue,_ as W,aK as j,b4 as de,m as Q,n as ve,d as c,av as f,b5 as pe,b6 as K,aM as q,aI as fe,au as T,q as x,aX as me,aW as $,ay as _e,aY as Se}from"./index.3d642cdd.js";import{Q as ge}from"./QSlideTransition.bfd6182f.js";var w=I({name:"QStepperNavigation",setup(e,{slots:t}){return()=>s("div",{class:"q-stepper__nav"},k(t.default))}}),F=I({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:t}){const{proxy:{$q:o}}=R(),a=C(null),l=u(()=>e.stepper.modelValue===e.step.name),d=u(()=>{const n=e.step.disable;return n===!0||n===""}),r=u(()=>{const n=e.step.error;return n===!0||n===""}),v=u(()=>{const n=e.step.done;return d.value===!1&&(n===!0||n==="")}),S=u(()=>{const n=e.step.headerNav,i=n===!0||n===""||n===void 0;return d.value===!1&&e.stepper.headerNav&&i}),m=u(()=>e.step.prefix&&(l.value===!1||e.stepper.activeIcon==="none")&&(r.value===!1||e.stepper.errorIcon==="none")&&(v.value===!1||e.stepper.doneIcon==="none")),p=u(()=>{const n=e.step.icon||e.stepper.inactiveIcon;if(l.value===!0){const i=e.step.activeIcon||e.stepper.activeIcon;return i==="none"?n:i||o.iconSet.stepper.active}if(r.value===!0){const i=e.step.errorIcon||e.stepper.errorIcon;return i==="none"?n:i||o.iconSet.stepper.error}if(d.value===!1&&v.value===!0){const i=e.step.doneIcon||e.stepper.doneIcon;return i==="none"?n:i||o.iconSet.stepper.done}return n}),_=u(()=>{const n=r.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(l.value===!0){const i=e.step.activeColor||e.stepper.activeColor||e.step.color;return i!==void 0?i:n}return n!==void 0?n:d.value===!1&&v.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),b=u(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(_.value!==void 0?` text-${_.value}`:"")+(r.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(m.value===!0?"prefix":"icon"):"")+(l.value===!0?" q-stepper__tab--active":"")+(v.value===!0?" q-stepper__tab--done":"")+(S.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(d.value===!0?" q-stepper__tab--disabled":"")),P=u(()=>e.stepper.headerNav!==!0?!1:S.value);function N(){a.value!==null&&a.value.focus(),l.value===!1&&e.goToPanel(e.step.name)}function V(n){n.keyCode===13&&l.value===!1&&e.goToPanel(e.step.name)}return()=>{const n={class:b.value};S.value===!0&&(n.onClick=N,n.onKeyup=V,Object.assign(n,d.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:t.tabindex||0}));const i=[s("div",{class:"q-focus-helper",tabindex:-1,ref:a}),s("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[s("span",{class:"row flex-center"},[m.value===!0?e.step.prefix:s(Y,{name:p.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const h=[s("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&h.push(s("div",{class:"q-stepper__caption"},e.step.caption)),i.push(s("div",{class:"q-stepper__label q-stepper__line relative-position"},h))}return Z(s("div",n,i),[[G,P.value]])}}});function z(e){return s("div",{class:"q-stepper__step-content"},[s("div",{class:"q-stepper__step-inner"},k(e.default))])}const D={setup(e,{slots:t}){return()=>z(t)}};var B=I({name:"QStep",props:y(g({},J),{icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean}),setup(e,{attrs:t,slots:o}){const{proxy:{$q:a}}=R(),l=ee(U,()=>{console.error("QStep needs to be child of QStepper")}),{getCacheWithFn:d}=ae(),r=C(null),v=u(()=>l.value.modelValue===e.name),S=u(()=>a.platform.is.ios!==!0&&a.platform.is.chrome===!0||v.value!==!0||l.value.vertical!==!0?{}:{onScroll(_){const{target:b}=_;b.scrollTop>0&&(b.scrollTop=0),t.onScroll!==void 0&&t.onScroll(_)}}),m=u(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function p(){const _=l.value.vertical;return _===!0&&l.value.keepAlive===!0?s(te,l.value.keepAliveProps.value,v.value===!0?[s(l.value.needsUniqueKeepAliveWrapper.value===!0?d(m.value,()=>y(g({},D),{name:m.value})):D,{key:m.value},o.default)]:void 0):_!==!0||v.value===!0?z(o):void 0}return()=>s("div",g({ref:r,class:"q-stepper__step"},S.value),l.value.vertical===!0?[s(F,{stepper:l.value,step:e,goToPanel:l.value.goToPanel}),l.value.animated===!0?s(ge,p):p()]:[p()])}});const Ce=/(-\w)/g;function be(e){const t={};for(const o in e){const a=o.replace(Ce,l=>l[1].toUpperCase());t[a]=e[o]}return t}var he=I({name:"QStepper",props:y(g(g({},ne),re),{flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String}),emits:oe,setup(e,{slots:t}){const o=R(),a=le(e,o.proxy.$q),{updatePanelsList:l,isValidPanelName:d,updatePanelIndex:r,getPanelContent:v,getPanels:S,panelDirectives:m,goToPanel:p,keepAliveProps:_,needsUniqueKeepAliveWrapper:b}=ie();se(U,u(()=>g({goToPanel:p,keepAliveProps:_,needsUniqueKeepAliveWrapper:b},e)));const P=u(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0||a.value===!0?" q-stepper--flat no-shadow":"")+(e.bordered===!0||a.value===!0&&e.flat===!1?" q-stepper--bordered":"")+(a.value===!0?" q-stepper--dark q-dark":"")),N=u(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function V(){const n=k(t.message,[]);if(e.vertical===!0){d(e.modelValue)&&r();const i=s("div",{class:"q-stepper__content"},k(t.default));return n===void 0?[i]:n.concat(i)}return[s("div",{class:N.value},S().map(i=>{const h=be(i.props);return s(F,{key:h.name,stepper:e,step:h,goToPanel:p})})),n,ue("div",{class:"q-stepper__content q-panel-parent"},v(),"cont",e.swipeable,()=>m.value)]}return()=>(l(t),s("div",{class:P.value},ce(t.navigation,V())))}});const qe={name:"AccountStepper",components:{},setup(){const e=j(),t=C(""),o=C(""),a=C(null),l=C(null),d=de(),r=C(0);function v(){t.value="",o.value="",r.value=0}function S(p){p===1?(a.value.validate(),a.value.hasError?e.notify({position:"top",color:"accent",message:"Enter a valid Social Security Number."}):r.value=p):(l.value.validate(),l.value.hasError?e.notify({position:"top",color:"accent",message:"Social Security Number does not match."}):r.value=p)}function m(){d.replace({path:"/"})}return{step:r,ssn:t,confirm:o,enterSSNRef:a,confirmSSNRef:l,goBack:v,validateStep:S,finish:m}}};function ye(e,t,o,a,l,d){return Q(),ve("div",null,[c(he,{vertical:"",animated:"",modelValue:a.step,"onUpdate:modelValue":t[4]||(t[4]=r=>a.step=r),ref:"stepper","active-color":"dark","done-color":"primary"},{default:f(()=>[c(pe,null,{default:f(()=>[c(B,{name:0,title:"Identification",done:a.step>0,icon:"fingerprint"},{default:f(()=>[c(K,{ref:"enterSSNRef",filled:"",name:"ssn",label:"Social Security Number",modelValue:a.ssn,"onUpdate:modelValue":t[0]||(t[0]=r=>a.ssn=r),maxlength:"9",rules:[r=>!!r||"* Required",r=>r.length===9||"Enter a valid Social Security Number."]},null,8,["modelValue","rules"]),c(w,{class:"text-right"},{default:f(()=>[c(q,{onClick:t[1]||(t[1]=r=>a.validateStep(1)),color:"primary",label:"Continue"})]),_:1})]),_:1},8,["done"]),c(B,{name:1,title:"Confirmation",done:a.step>1,icon:"how_to_reg"},{default:f(()=>[c(K,{ref:"confirmSSNRef",filled:"",name:"confirmssn",label:"Confirm Social Security Number",modelValue:a.confirm,"onUpdate:modelValue":t[2]||(t[2]=r=>a.confirm=r),maxlength:"9",rules:[r=>!!r||"* Required",r=>r===a.ssn||"Social Security Number does not match!"]},null,8,["modelValue","rules"]),c(w,{class:"text-right"},{default:f(()=>[c(q,{onClick:a.goBack,color:"secondary",label:"Back",class:"q-mr-sm"},null,8,["onClick"]),c(q,{onClick:t[3]||(t[3]=r=>a.validateStep(2)),color:"primary",label:"Continue"})]),_:1})]),_:1},8,["done"])]),_:1}),c(B,{name:2,title:"Check In Complete","active-icon":"verified",icon:"verified"},{default:f(()=>[c(w,{class:"text-right"},{default:f(()=>[c(q,{onClick:a.goBack,color:"secondary",label:"Back",class:"q-mr-sm"},null,8,["onClick"]),c(q,{color:"primary",label:"Finish",onClick:a.finish},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var ke=W(qe,[["render",ye]]);const xe={name:"Verify",components:{AccountStepper:ke},setup(){return{$q:j(),accountComplete:!1,hc:"Houston"}}},Ie={class:"row justify-center"},Pe={class:"col-12 col-md-6 q-pt-lg"},Ne=x("div",{class:"text-h6 text-primary"}," Complete Registration ",-1),Ve=x("div",{class:"text-body1 text-dark text-italic"}," Please verify the following information to complete your registration. ",-1);function we(e,t,o,a,l,d){const r=fe("account-stepper");return Q(),T(Se,{style:{"max-width":"100vw"}},{default:f(()=>[x("div",Ie,[x("div",Pe,[a.accountComplete?_e("",!0):(Q(),T(me,{key:0,flat:""},{default:f(()=>[c($,null,{default:f(()=>[Ne,Ve]),_:1}),c($,null,{default:f(()=>[c(r)]),_:1})]),_:1}))])])]),_:1})}var Ae=W(xe,[["render",we]]);export{Ae as default};
