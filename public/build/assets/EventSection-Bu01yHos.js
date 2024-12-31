import{r,j as a,a as h}from"./app-BeKuyU8d.js";import{B as t}from"./Button-DzEAKR93.js";import f from"./EventForm-Dn5QfccC.js";import{M as j}from"./Modal-N1VeFmp5.js";import"./Checkbox-BGIz-D_J.js";import"./TextInput-B7TdaG0W.js";import"./InputLabel-FSed7D2i.js";import"./transition-DNSY4Lg1.js";const E=({setActiveIndex:e,activeIndex:i,idInvitation:l,events:s=[]})=>{const[c,n]=r.useState({}),[d,m]=r.useState(!1);return a.jsxs("div",{className:`${i==1?"":"h-0"} min-w-full `,children:[a.jsx("div",{className:"p-6 border-b",children:a.jsx(f,{show:d,setShow:m,event:c,setEvent:n,idInvitation:l})}),(s==null?void 0:s.length)==0?a.jsx(u,{}):s==null?void 0:s.map((x,o)=>a.jsxs("div",{children:[a.jsx(p,{setShowModal:m,setEvent:n,event:x}),a.jsx("hr",{})]},o)),a.jsxs("div",{className:"flex md:flex-row flex-col gap-4 p-6 border-t bg-slate-50",children:[a.jsxs(t,{onClick:()=>e(0),type:"button",variant:"primary-outline",className:"text-[--primary-color]",children:[a.jsx("i",{className:"fa fa-arrow-left"})," Kembali"]}),a.jsxs(t,{onClick:()=>e(2),type:"button",variant:"primary",className:"md:ms-auto",children:["Lanjut ",a.jsx("i",{className:"fa fa-arrow-right"})]})]})]})};function u(){return a.jsxs("div",{className:"h-52 text-center p-6",children:[a.jsxs("h2",{className:"text-slate-700 ",children:[a.jsx("i",{className:"fa-regular text-6xl fa-calendar me-2 block mb-2"}),a.jsx("span",{className:"font-bold",children:"Belum Ada Acara"})]}),a.jsx("p",{className:"text-slate-500",children:"Silahkan tambahkan acara, Data acara dapat diubah setelah undangan selesai dibuat"})]})}function p(e){const[i,l]=r.useState(!1),{delete:s}=h(),c=n=>{n.preventDefault(),s(route("invitation.deleteEvent",e.event.id))};return a.jsxs("div",{className:"px-6 py-4 md:flex-row flex-col flex md:justify-between gap-4 md:items-center",children:[a.jsxs("div",{className:"",children:[a.jsxs("h3",{className:"text-xl font-medium mb-2",children:[e.event.event_name," ",e.event.is_primary?a.jsx("span",{className:"text-base text-slate-600",children:"(Acara utama)"}):""]}),a.jsxs("div",{className:" grid grid-cols-6 w-full flex-1 md:gap-3 gap-2",children:[a.jsx("div",{className:"md:col-span-2 col-span-6",children:a.jsxs("p",{className:"text-slate-600 text-sm",children:[a.jsx("i",{className:"fa fa-map me-2"}),e.event.address]})}),a.jsxs("div",{className:"flex md:col-span-4 gap-2 col-span-6 flex-col",children:[a.jsxs("span",{className:"text-slate-600 text-sm",children:[a.jsx("i",{className:"fa   fa-calendar me-2"})," Tanggal acara ",e.event.event_date]}),a.jsxs("span",{className:"text-slate-600 text-sm",children:[a.jsx("i",{className:"fa fa-clock me-2"})," Waktu acara"," ",e.event.start_time," -"," ",e.event.end_time?e.event.end_time:"Selesai"]})]})]})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(t,{onClick:()=>l(!0),type:"button",variant:"danger-outline",className:"text-red-500",children:a.jsx("i",{className:"fa fa-trash text-sm"})}),a.jsx(t,{onClick:()=>{e.setEvent(e.event),e.setShowModal(!0)},type:"button",children:a.jsx("i",{className:"fa fa-pencil text-sm"})})]}),a.jsx(j,{maxWidth:"lg",onClose:()=>l(!1),show:i,closeable:!0,children:a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"p-6",children:[a.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Pemberitahuan"}),a.jsxs("h6",{className:"text-lg font-medium",children:["Apakah anda yakin menghapus acara"," ",e.event.event_name,"?"]}),a.jsx("p",{className:"text-slate-600",children:"Tindakan ini akan menghapus data acara secara permanen"})]}),a.jsxs("div",{className:"px-6 pb-6 flex gap-2 md:flex-row flex-col md:justify-end",children:[a.jsx(t,{onClick:()=>l(!1),type:"button",variant:"primary-outline",className:"text-[--primary-color]",children:"Batal"}),a.jsx(t,{type:"submit",variant:"danger",children:"Hapus"})]})]})})]})}export{E as default};
