(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{12:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return o}))},25:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var n=r(12),o=r(1),a={_origin:"https://api.emailjs.com"},i=function(e,t,r){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var s=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText},u=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,o){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var t=e.target,r=new s(t);200===r.status||"OK"===r.text?n(r):o(r)})),i.addEventListener("error",(function(e){var t=e.target;o(new s(t))})),i.open("POST",a._origin+e,!0),Object.keys(r).forEach((function(e){i.setRequestHeader(e,r[e])})),i.send(t)}))},l=function(e,t,r,n){var o=n||a._userID,s=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(r);i(o,e,t);var l=new FormData(s);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",o),u("/api/v1.0/email/send-form",l)},c=r(0);function d(){var e=Object(o.useState)(""),t=Object(n.a)(e,2),r=t[0],a=t[1],i=Object(o.useState)(""),s=Object(n.a)(i,2),u=s[0],d=s[1],m=Object(o.useState)(""),f=Object(n.a)(m,2),p=f[0],b=f[1];return Object(c.jsx)("section",{className:"bg-gray-200 flex justify-center pb-28",children:Object(c.jsxs)("div",{className:"w-large lg:w-medium 2xl:w-custom",children:[Object(c.jsx)("h2",{className:"text-4xl font-bold",children:"Contact"}),Object(c.jsxs)("form",{className:"flex flex-col mt-12",onSubmit:function(e){e.preventDefault(),r&&u&&p?l("gmail","template_d2ediih",e.target,"user_SejSu9xMGZA4EEOnNxrtZ").then((function(e){a(""),d(""),b(""),alert("message send")}),(function(e){console.log(e.text)})):alert("Please fill all fields")},children:[Object(c.jsx)("input",{name:"name",value:r,onChange:function(e){return a(e.target.value)},className:"p-3 rounded-md my-3 border-2 border-gray-300 outline-none focus:border-blue-500",type:"text",placeholder:"Your Name"}),Object(c.jsx)("input",{name:"email",value:u,onChange:function(e){return d(e.target.value)},className:"p-3 rounded-md my-3 border-2 border-gray-300 outline-none focus:border-blue-500",type:"email",placeholder:"Your Email"}),Object(c.jsx)("textarea",{name:"message",value:p,onChange:function(e){return b(e.target.value)},className:"p-3 rounded-md my-3 border-2 border-gray-300 outline-none focus:border-blue-500",placeholder:"Your Message",rows:"6"}),Object(c.jsx)("input",{className:"p-3 rounded-md my-3 bg-blue-500 text-white font-bold hover:bg-blue-400 cursor-pointer outline-none",type:"submit",value:"Send Message"})]})]})})}}}]);
//# sourceMappingURL=4.b6706bae.chunk.js.map