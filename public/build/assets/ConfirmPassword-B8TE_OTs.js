import{a as d,j as s,M as p}from"./app-B1ljN0tO.js";import{I as l}from"./InputError-BRm_Ymff.js";import{I as c}from"./InputLabel-BgVNvm9X.js";import{P as u}from"./PrimaryButton-Bp1384WJ.js";import{T as f}from"./TextInput-CZyV8Kdr.js";import{G as x}from"./GuestLayout-Oy63B-tG.js";function y(){const{data:a,setData:e,post:o,processing:t,errors:i,reset:m}=d({password:""}),n=r=>{r.preventDefault(),o(route("password.confirm"),{onFinish:()=>m("password")})};return s.jsxs(x,{children:[s.jsx(p,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(c,{htmlFor:"password",value:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(l,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(u,{className:"ms-4",disabled:t,children:"Confirm"})})]})]})}export{y as default};
