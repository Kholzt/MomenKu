import{r as c,j as e,M as j}from"./app-BeKuyU8d.js";import g from"./Layout-L9eU659x.js";import b from"./PartnerSection-tTzSW14L.js";import N from"./EventSection-Bu01yHos.js";import{M as y}from"./Modal-N1VeFmp5.js";import{B as o}from"./Button-DzEAKR93.js";import w from"./OtherSection-Du2KcRAs.js";import"./Navbar-Cs8YyG9I.js";import"./TextInput-B7TdaG0W.js";import"./InputLabel-FSed7D2i.js";import"./EventForm-Dn5QfccC.js";import"./Checkbox-BGIz-D_J.js";import"./transition-DNSY4Lg1.js";const q=({activeIndex:t=0,brides:m,events:d,themes:x,theme_id:h,idInvitation:a=null})=>{const[s,l]=c.useState(t),[u,r]=c.useState(!1);c.useEffect(()=>{const n=document.querySelectorAll("a");return n.forEach(i=>{i.addEventListener("click",p=>{p.preventDefault(),r(!0)})}),()=>n.forEach(i=>{i.removeEventListener("click",()=>{})})},[]);const f=n=>{n.preventDefault()};return e.jsxs(g,{children:[e.jsx(j,{title:"Buat undangan"}),e.jsxs("section",{className:"bg-[--primary-color]",children:[e.jsx("h1",{className:"text-4xl text-white font-bold text-center",children:"Buat Undangan online dengan mudah"}),e.jsx("div",{className:"container mt-10",children:e.jsx(k,{activeIndex:s})})]}),e.jsx("div",{className:"container -mt-20 pb-20",children:e.jsx("div",{className:"bg-white  overflow-hidden shadow rounded-md",children:e.jsxs("div",{className:`flex transition-all   translate-x-[-${s*100}%]`,style:{transform:`translateX(-${s*100}%)`},children:[e.jsx(b,{brides:m,idInvitation:a,activeIndex:s,setActiveIndex:l}),e.jsx(N,{events:d,idInvitation:a,activeIndex:s,setActiveIndex:l}),e.jsx(w,{themes:x,themeId:h,idInvitation:a,activeIndex:s,setActiveIndex:l})]})})}),e.jsx(y,{maxWidth:"lg",onClose:()=>r(!1),show:u,closeable:!0,children:e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Pemberitahuan"}),e.jsx("h6",{className:"text-lg font-medium",children:"Apakah anda yakin menginggalkan halaman ?"}),e.jsx("p",{className:"text-slate-600",children:"Tindakan ini akan menghapus data undangan anda"})]}),e.jsxs("div",{className:"px-6 pb-6 flex gap-2 md:flex-row flex-col md:justify-end",children:[e.jsx(o,{onClick:()=>r(!1),type:"button",variant:"primary-outline",className:"text-[--primary-color]",children:"Batal"}),e.jsx(o,{type:"submit",variant:"danger",children:"Oke"})]})]})})]})};function k({activeIndex:t}){return e.jsxs("ul",{className:"md:grid md:grid-cols-3 flex justify-center  gap-2 ",children:[e.jsxs("li",{className:"flex items-center justify-center",children:[e.jsx("span",{className:`me-2 ${t==0?"text-[--primary-color] bg-white":"text-white"} text-lg rounded-full border w-10 h-10  flex items-center justify-center`,children:"1"}),e.jsx("span",{className:`text-white text-lg md:inline-block ${t==0?"inline-block":"hidden"}`,children:"Mempelai"})]}),e.jsxs("li",{className:"flex items-center justify-center",children:[e.jsx("span",{className:`me-2 ${t==1?"text-[--primary-color] bg-white":"text-white"} text-lg rounded-full border w-10 h-10  flex items-center justify-center`,children:"2"}),e.jsx("span",{className:`text-white text-lg md:inline-block ${t==1?"inline-block":"hidden"}`,children:"Acara"})]}),e.jsxs("li",{className:"flex items-center justify-center",children:[e.jsx("span",{className:`me-2 ${t==2?"text-[--primary-color] bg-white":"text-white"} text-lg rounded-full border w-10 h-10  flex items-center justify-center`,children:"3"}),e.jsx("span",{className:`text-white text-lg md:inline-block ${t==2?"inline-block":"hidden"}`,children:"Lainnya"})]})]})}export{q as default};