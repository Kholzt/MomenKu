import{j as e,U as a}from"./app-BiVWthV3.js";import{T as o}from"./ThemeCard-CA2CksdN.js";import{B as c}from"./Button-hOiECIDt.js";const h=({themes:t,type:n,pagination:i})=>{const l=[{name:"Semua Tema",key:null},{name:"Gratis",key:"free"},{name:"Berbayar",key:"pro"}];return e.jsx("section",{className:"pt-6  flex items-center bg-[--primary-light]",children:e.jsxs("div",{className:"container",children:[e.jsx("ul",{className:"flex   mb-10",children:l==null?void 0:l.map((r,s)=>e.jsx("li",{children:e.jsxs(a,{href:`${r.key!=null?"?type="+r.key:"/themes"}`,className:`flex flex-col gap-2  text-center py-6 px-6 border-b-4  hover:border-[--primary-color] hover:text-[--primary-color] ${n==r.key?"border-[--primary-color] text-[--primary-color] ":"text-slate-400  border-transparent "}`,type:"link",variant:"ghost",children:[e.jsx("i",{className:"fa fa-bolt text-4xl"}),e.jsx("small",{children:r.name})]})},s))}),e.jsxs("div",{children:[e.jsx("div",{className:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6  grid-cols-1 ",children:t.map((r,s)=>e.jsx("div",{children:e.jsx(a,{href:`/themes/${r.slug}`,children:e.jsx(o,{theme:r},s)})},s))}),e.jsx("div",{className:"flex gap-2 mt-6 justify-center",children:i.map((r,s)=>e.jsx(c,{variant:r.active?"primary":"ghost",className:`${r.url==null?"pointer-events-none":""}`,type:"link",href:r.url,children:e.jsx("div",{dangerouslySetInnerHTML:{__html:r.label}})},s))})]})]})})};export{h as default};
