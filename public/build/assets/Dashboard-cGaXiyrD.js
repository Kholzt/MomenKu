import{j as a,M as c}from"./app-BeKuyU8d.js";import d from"./DashboardLayout-BGjR4N6f.js";import{B as s}from"./Button-DzEAKR93.js";import"./NavbarDashboard-Szd5x6VZ.js";import"./ResponsiveNavLink-C9ZWQ52-.js";import"./transition-DNSY4Lg1.js";const p=({data:n})=>{const{invitations:l}=n;return a.jsxs(d,{children:[a.jsx(c,{title:"Dashboard "}),a.jsxs("div",{className:"bg-white rounded-md p-4",children:[a.jsxs("div",{className:"flex gap-2 md:flex-row flex-col justify-between  items-center ",children:[a.jsxs("div",{className:"",children:[a.jsx("h2",{className:"text-lg font-medium",children:"List undangan"}),a.jsx("p",{className:"text-slate-600",children:"Buat berbagai macam undangan dalam satu platform MomenKu"})]}),a.jsx(s,{type:"link",href:route("invitation.create"),className:"md:w-auto w-full",children:"Buat Undangan"})]}),l.length>0?a.jsx("ul",{className:"flex flex-col gap-5",children:l.map((e,m)=>{const{id:t}=e,{nickname:i}=e.brides[0],{nickname:r}=e.brides[1];return a.jsxs("li",{children:[a.jsx("hr",{className:"my-4"}),a.jsxs("div",{className:"flex md:flex-row flex-col md:items-end md:gap-10 gap-5",children:[a.jsxs("div",{className:"",children:[a.jsxs("h3",{className:"text-md mb-1 font-medium",children:[a.jsx("i",{className:"fa fa-user-group me-2"})," ",i," & ",r]}),a.jsxs("a",{target:"_blank",href:window.location.origin+`/${t}`,className:"hover:text-[--primary-color] text-sm text-slate-600",children:[a.jsx("i",{className:"fa fa-link me-2"})," ",window.location.origin+`/${t}`]})]}),a.jsxs("div",{className:"",children:[a.jsxs("p",{className:"text-sm mb-2 text-slate-600",children:[a.jsx("i",{className:"fa fa-calendar me-2"})," ","Aktif sampai 1 Januari 2025"]}),a.jsxs("p",{className:"text-sm text-slate-600",children:[a.jsx("i",{className:"fa fa-calendar me-2"})," ","Batas perubahan sampai 28 Desember 2024"]})]}),a.jsx(s,{href:route("invitation.edit",e.id),className:"md:ms-auto md:me-0 me-auto",type:"link",children:"Dashboard"})]})]},m)})}):a.jsxs("div",{className:"flex flex-col items-center py-4",children:[a.jsx("hr",{className:"my-4 w-full"}),a.jsx("i",{className:"fa fa-envelope text-5xl text-slate-600"}),a.jsx("h6",{className:"text-lg  ",children:"Belum ada undangan"}),a.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"Mulailah langkah pertama Anda dengan membuat undangan sekarang!"}),a.jsx(s,{type:"link",href:route("invitation.create"),className:"md:w-auto w-full ",children:"Buat Undangan"})]})]})]})};export{p as default};