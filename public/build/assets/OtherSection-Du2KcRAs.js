import{a as p,r as m,j as e}from"./app-BeKuyU8d.js";import{B as c}from"./Button-DzEAKR93.js";const v=({setActiveIndex:t,activeIndex:r,idInvitation:o,themeId:i,themes:s=[]})=>{const{data:n,setData:a,post:d,put:u,errors:j,processing:l}=p({theme:""});m.useState(!1);const x=h=>{h.preventDefault(),u(route("invitation.updateOther",o),{onSuccess:g=>{t(3)}})};return e.jsx("div",{className:`${r==2?"":"h-0"} min-w-full`,children:e.jsxs("form",{onSubmit:x,children:[e.jsx("div",{className:"p-6 border-b",children:e.jsx("h1",{className:"font-bold text-xl",children:"Lainnya"})}),e.jsx(f,{themeId:i,setData:a,data:n,themes:s}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4 p-6 bg-slate-50 border-t",children:[e.jsxs(c,{onClick:()=>t(1),type:"button",variant:"primary-outline",className:"text-[--primary-color]",children:[e.jsx("i",{className:"fa fa-arrow-left"})," Kembali"]}),e.jsx(c,{type:"submit",variant:"primary",disabled:l,className:`md:ms-auto ${l&&"opacity-50"}`,children:l?"Loading...":e.jsxs(e.Fragment,{children:["Lanjut",e.jsx("i",{className:"fa fa-arrow-right"})]})})]})]})})},f=({themes:t,setData:r,data:o,themeId:i})=>{const[s,n]=m.useState(!1);return e.jsxs("article",{className:"bg-white overflow-hidden p-6 rounded-lg  transition-all  ease-in-out duration-300  cursor-pointer",children:[e.jsxs("div",{onClick:()=>n(!s),className:"flex justify-between items-center ",children:[e.jsx("h4",{className:"font-medium text-lg",children:"Tema Undangan"}),e.jsx("i",{className:`fa transition-all fa-chevron-down ease-in-out duration-300 ${s?"rotate-[180deg]":"rotate-0"}`})]}),e.jsx("div",{className:`transition-all  ease-linear duration-300  ${s?"h-auto  opacity-100 mt-4":"max-h-0 opacity-0 "}`,children:e.jsx("div",{className:"grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2",children:t.map((a,d)=>e.jsxs("label",{className:"overflow-hidden relative rounded-md",children:[e.jsx("input",{onChange:()=>r("theme",a.id),value:a.id,checked:i===a.id,type:"radio",name:"theme",className:"top-3 left-3 absolute"}),e.jsx("img",{src:a.thumbnail,alt:""})]},d))})})]})};export{v as default};
