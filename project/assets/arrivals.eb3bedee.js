import{d as v,az as h,aF as y,av as w,aG as A,r as D,aH as S,aI as q,q as C,_ as p,aJ as b,o as g,f as V,ae as n,ac as i,aK as f,h as c,af as _,aj as N,ar as Y,ab as k,aL as P}from"./index.d9019ffa.js";import{Q as j}from"./QTable.5632a73b.js";import"./QList.50b2d0c2.js";const B=[{name:1,label:"Name",align:"left",field:e=>e[31],format:e=>`${e}`,sortable:!0},{name:2,label:"Workday ID",align:"left",field:e=>e.employeeId,format:e=>`${e}`,sortable:!0},{name:3,label:"Craft",align:"left",field:e=>e[59],format:e=>`${e}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[60],format:e=>`${e}`,sortable:!0},{name:5,label:"Job Number",align:"left",field:e=>e[85],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:6,label:"Site Contact",align:"left",field:e=>e[43],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:7,label:"Start Date",align:"left",field:e=>e[33],format:e=>`${b.formatDate(new Date(e),"MM-DD-YYYY")}`,sortable:!0}],I=[{name:1,label:"Name",align:"left",field:e=>e[31],format:e=>`${e}`,sortable:!0},{name:2,label:"Workday ID",align:"left",field:e=>e.employeeId,format:e=>`${e}`,sortable:!0},{name:3,label:"Craft",align:"left",field:e=>e[59],format:e=>`${e}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[60],format:e=>`${e}`,sortable:!0},{name:5,label:"Job Number",align:"left",field:e=>e[85],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:6,label:"Start Date",align:"left",field:e=>e[33],format:e=>`${b.formatDate(new Date(e),"MM-DD-YYYY")}`,sortable:!0}],M=v({name:"Arrivals Table",components:{},setup(){const e=h(),t=y(),d=w(),{deploymentsForProject:m}=A(t),o=m,l=D([]);S(()=>{t.alreadyArrived.forEach(r=>{l.value.includes(r)||l.value.push(r)})}),q(()=>{t.alreadyArrived.forEach(r=>{l.value.includes(r)||l.value.push(r)})});const a=C(()=>e.screen.lt.md?o.value.length:o.value.length>=25?Math.round(o.value.length/5):5);function s({rows:r,added:$,evt:J}){t.updateArrival({row:r[0],added:$})}return{columns:B,mobileColumns:I,rows:o,initialPagination:{rowsPerPage:a},separator:"vertical",arrivals:l,projectStore:d,updateArrivals:s,hiringStore:t}}}),Q={class:"q-px-sm"},T={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function U(e,t,d,m,o,l){return g(),V("div",Q,[n(j,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.gt.md?`Expected Arrivals for ${e.projectStore.active[16]}`:"Arrivals",columns:e.$q.screen.lt.md?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical",selection:"multiple",onSelection:e.updateArrivals,selected:e.hiringStore.alreadyArrived,"table-header-class":"bg-dark text-white","no-data-label":`There are no expected arrivals for ${e.projectStore.active[16]}`,grid:e.$q.screen.lt.sm,"hide-pagination":e.$q.screen.lt.md},{"header-selection":i(a=>[n(f,{disable:"",modelValue:a.selected,"onUpdate:modelValue":s=>a.selected=s},null,8,["modelValue","onUpdate:modelValue"])]),"body-selection":i(a=>[n(f,{label:e.$q.screen.lt.sm?"Arrived":"",modelValue:a.selected,"onUpdate:modelValue":s=>a.selected=s},null,8,["label","modelValue","onUpdate:modelValue"])]),"no-data":i(({message:a})=>[c("div",T,[n(_,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),c("span",null,N(a),1)])]),_:1},8,["title-class","title","columns","rows","pagination","onSelection","selected","no-data-label","grid","hide-pagination"])])}var u=p(M,[["render",U]]);const x={name:"Arrivals",components:{arrivalTable:u},setup(){return{arrivalTable:u}}};function E(e,t,d,m,o,l){const a=Y("arrival-table");return g(),k(P,{style:{"max-width":"100vw"}},{default:i(()=>[n(a)]),_:1})}var R=p(x,[["render",E]]);export{R as default};
