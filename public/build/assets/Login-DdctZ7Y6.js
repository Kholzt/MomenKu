import{j as e,a as h,M as j,U as l}from"./app-xu7UVhn6.js";import{B as f}from"./Button-Bcm3gq5K.js";import{T as n,I as i}from"./TextInput-BqU-90qf.js";import{I as d}from"./InputLabel-Dbydf5xj.js";import{G as g}from"./GuestLayout-UUttChJd.js";function b({className:a="",...r}){return e.jsx("input",{...r,type:"checkbox",className:"rounded border-gray-300 text-[--primary-color] shadow-sm focus:ring-[--primary-color]   dark:focus:ring-[--primary-color] "+a})}function C({status:a,canResetPassword:r}){const{data:t,setData:m,post:c,processing:u,errors:o,reset:x}=h({email:"",password:"",remember:!1}),p=s=>{s.preventDefault(),c(route("login"),{onFinish:()=>x("password")})};return e.jsxs(g,{children:[e.jsx(j,{title:"Masuk"}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-[--secondary-color]",children:a}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(d,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>m("email",s.target.value)}),e.jsx(i,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(d,{htmlFor:"password",value:"Password"}),e.jsx(n,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>m("password",s.target.value)}),e.jsx(i,{message:o.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 flex justify-between items-center",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx(b,{name:"remember",checked:t.remember,onChange:s=>m("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600 ",children:"Ingat saya"})]}),r&&e.jsx(l,{href:route("password.request"),className:" text-center   rounded-md text-sm text-gray-600 underline hover:text-gray-900  ",children:"Lupa kata sandi?"})]}),e.jsx(f,{type:"submit",className:"w-full mt-4",disabled:u,children:"Masuk"}),e.jsx(l,{href:route("register"),className:"  block mt-2 text-center  rounded-md text-sm text-gray-600 underline hover:text-gray-900  ",children:"Tidak memiliki akun? Buat akun baru"})]})]})}export{C as default};
