import{d as v,aw as h,aE as y,as as w,aF as A,r as D,aG as S,aH as q,q as C,_ as p,aI as b,o as g,f as V,ab as n,a9 as i,aJ as c,h as f,ac as _,ag as N,ao as Y,a8 as k,aK as P}from"./index.81a92a5f.js";import{Q as B}from"./QTable.e8269c96.js";import"./QList.17a934c7.js";const I=[{name:1,label:"Name",align:"left",field:e=>e[31],format:e=>`${e}`,sortable:!0},{name:2,label:"Workday ID",align:"left",field:e=>e.employeeId,format:e=>`${e}`,sortable:!0},{name:3,label:"Craft",align:"left",field:e=>e[59],format:e=>`${e}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[60],format:e=>`${e}`,sortable:!0},{name:5,label:"Job Number",align:"left",field:e=>e[85],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:6,label:"Site Contact",align:"left",field:e=>e[43],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:7,label:"Start Date",align:"left",field:e=>e[33],format:e=>`${b.formatDate(new Date(e),"MM-DD-YYYY")}`,sortable:!0}],M=[{name:1,label:"Name",align:"left",field:e=>e[31],format:e=>`${e}`,sortable:!0},{name:2,label:"Workday ID",align:"left",field:e=>e.employeeId,format:e=>`${e}`,sortable:!0},{name:3,label:"Craft",align:"left",field:e=>e[59],format:e=>`${e}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[60],format:e=>`${e}`,sortable:!0},{name:5,label:"Job Number",align:"left",field:e=>e[85],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:6,label:"Start Date",align:"left",field:e=>e[33],format:e=>`${b.formatDate(new Date(e),"MM-DD-YYYY")}`,sortable:!0}],Q=v({name:"Arrivals Table",components:{},setup(){const e=h(),l=y(),d=w(),{deploymentsForProject:m}=A(l),o=m,r=D([]);S(()=>{l.alreadyArrived.forEach(t=>{r.value.includes(t)||r.value.push(t)})}),q(()=>{l.alreadyArrived.forEach(t=>{r.value.includes(t)||r.value.push(t)})});const a=C(()=>e.screen.lt.md?o.value.length:o.value.length>=25?Math.round(o.value.length/5):5);function s({rows:t,added:$,evt:J}){console.log(t[0]),l.updateArrival({row:t[0],added:$})}return{columns:I,mobileColumns:M,rows:o,initialPagination:{rowsPerPage:a},separator:"vertical",arrivals:r,projectStore:d,updateArrivals:s,hiringStore:l}}}),T={class:"q-px-sm"},j={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function E(e,l,d,m,o,r){return g(),V("div",T,[n(B,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.gt.md?`Expected Arrivals for ${e.projectStore.active[16]}`:"Arrivals",columns:e.$q.screen.lt.md?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical",selection:"multiple",onSelection:e.updateArrivals,selected:e.hiringStore.alreadyArrived,"table-header-class":"bg-dark text-white","no-data-label":`There are no expected arrivals for ${e.projectStore.active[16]}`,grid:e.$q.screen.lt.sm,"hide-pagination":e.$q.screen.lt.md},{"header-selection":i(a=>[n(c,{disable:"",modelValue:a.selected,"onUpdate:modelValue":s=>a.selected=s},null,8,["modelValue","onUpdate:modelValue"])]),"body-selection":i(a=>[n(c,{label:e.$q.screen.lt.sm?"Arrived":"",modelValue:a.selected,"onUpdate:modelValue":s=>a.selected=s},null,8,["label","modelValue","onUpdate:modelValue"])]),"no-data":i(({message:a})=>[f("div",j,[n(_,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),f("span",null,N(a),1)])]),_:1},8,["title-class","title","columns","rows","pagination","onSelection","selected","no-data-label","grid","hide-pagination"])])}var u=p(Q,[["render",E]]);const U={name:"Arrivals",components:{arrivalTable:u},setup(){return{arrivalTable:u}}};function x(e,l,d,m,o,r){const a=Y("arrival-table");return g(),k(P,{style:{"max-width":"100vw"}},{default:i(()=>[n(a)]),_:1})}var W=p(U,[["render",x]]);export{W as default};
