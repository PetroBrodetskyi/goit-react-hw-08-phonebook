(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[108],{108:(t,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>L});var i=e(420),n=e(791),a=e(734),s=e(553);const r=t=>t.contacts,l=(0,s.P1)(r,(t=>t.contacts)),c=(0,s.P1)(r,(t=>t.isLoading)),f=(0,s.P1)(r,(t=>t.error)),m=(0,s.P1)(r,(t=>t.filter));var p=e(393),d=e(184);const x=t=>{let{message:o}=t;return(0,d.jsx)("p",{className:"error",children:o})},y="Filter_filterinput__Rk5X8",u=()=>{const t=(0,i.v9)(m),o=(0,i.I0)();return(0,d.jsx)("input",{className:y,onChange:t=>{const{value:e}=t.target;o((0,a.Tv)(e))},value:t,type:"text",name:"filter",placeholder:"Search"})},g="ContactForm_contactsflex__D93ew",b="ContactForm_contactinput__KES5x",h="ContactForm_contactbutton__auEqg";var w=e(264);let v=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce(((t,o)=>t+=(o&=63)<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o>62?"-":"_"),"")};const N=()=>{const[t,o]=(0,n.useState)(""),[e,s]=(0,n.useState)(""),r=(0,i.v9)(l),c=(0,i.I0)(),f=t=>{const o=t.replace(/[^0-9]/g,"");return o.length<4?o:o.length<7?"".concat(o.slice(0,3),"-").concat(o.slice(3)):"".concat(o.slice(0,3),"-").concat(o.slice(3,6),"-").concat(o.slice(6,10))},m=t=>{let{target:{name:e,value:i}}=t;"name"===e?o(i):"number"===e&&s(f(i))};return(0,d.jsxs)("form",{className:g,onSubmit:i=>{i.preventDefault(),((t,o)=>{const e=t.toLowerCase(),i=o?o.replace(/[^0-9]/g,""):"";if(r.some((t=>t.name.toLowerCase()===e||t.phone&&t.phone.replace(/[^0-9]/g,"")===i)))return void w.Notify.failure("".concat(t," is already in the contacts list."),{position:"center-bottom",timeout:3e3,width:"320px",fontSize:"18px"});const n=f(i),s={id:v(),name:t,phone:n};c((0,a.uK)(s))})(t,e),o(""),s("")},children:[(0,d.jsx)("input",{className:b,type:"text",name:"name",value:t,onChange:m,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,d.jsx)("input",{className:b,type:"tel",name:"number",value:e,onChange:m,placeholder:"Phone Number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0}),(0,d.jsx)("button",{className:h,type:"submit",children:"Add Contact"})]})},k="ContactsPage_linone__ylNrQ",C="ContactsPage_liflex__i0Glp",I="ContactsPage_divflex__qv3sp",z="ContactsPage_contactlistbutton__5ntvW",A="ContactsPage_titleflex__P9jkO",W="ContactsPage_sectiontitle__EStHC",_="ContactsPage_iconphone__0bp6+",j="ContactsPage_iconcontacts__Nn8FH";var S=e(206);const L=()=>{const t=(0,i.v9)(l),o=(0,i.v9)(m),e=(0,i.v9)(f),s=(0,i.v9)(c),r=(0,i.I0)();(0,n.useEffect)((()=>{r((0,a.yF)())}),[r]);const y=(()=>{if(!o)return t;const e=o.toLowerCase();return t.filter((t=>t.name.toLowerCase().includes(e)))})();return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:A,children:[(0,d.jsx)("h1",{className:W,children:"Phonebook"}),(0,d.jsx)(S.rJP,{className:_})]}),(0,d.jsx)(N,{}),(0,d.jsxs)("div",{className:A,children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(S.b4C,{className:j})]}),(0,d.jsx)(u,{}),s&&(0,d.jsx)(p.Z,{}),e&&(0,d.jsx)(x,{message:e}),(0,d.jsx)("ul",{className:k,children:Array.isArray(y)&&y.map((t=>(0,d.jsxs)("li",{className:C,children:[(0,d.jsxs)("div",{className:I,children:[t.name,": ",t.phone]}),(0,d.jsx)("div",{className:z,onClick:()=>{return o=t.id,void r((0,a.GK)(o));var o},children:(0,d.jsx)(S.FNM,{className:j})})]},t.id)))})]})}},264:function(t,o,e){var i,n;n="undefined"!==typeof e.g?e.g:"undefined"!==typeof window?window:this,i=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var o,e="Notiflix",i="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(t){return console.error("%c "+e+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+i)},l=function(o){return o||(o="head"),null!==t.document[o]||(r('\nNotiflix needs to be appended to the "<'+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},c=function(o,e){if(!l("head"))return!1;if(null!==o()&&!t.document.getElementById(e)){var i=t.document.createElement("style");i.id=e,i.innerHTML=o(),t.document.head.appendChild(i)}},f=function(){var t={},o=!1,e=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],e++);for(var i=function(e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o&&"[object Object]"===Object.prototype.toString.call(e[i])?t[i]=f(t[i],e[i]):t[i]=e[i])};e<arguments.length;e++)i(arguments[e]);return t},m=function(o){var e=t.document.createElement("div");return e.innerHTML=o,e.textContent||e.innerText||""},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,x=function(e,i,r,c){if(!l("body"))return!1;o||y.Notify.init({});var p=f(!0,o,{});if("object"===typeof r&&!Array.isArray(r)||"object"===typeof c&&!Array.isArray(c)){var x={};"object"===typeof r?x=r:"object"===typeof c&&(x=c),o=f(!0,o,x)}var u=o[e.toLocaleLowerCase("en")];d++,"string"!==typeof i&&(i="Notiflix "+e),o.plainText&&(i=m(i)),!o.plainText&&i.length>o.messageMaxLength&&(o=f(!0,o,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>o.messageMaxLength&&(i=i.substring(0,o.messageMaxLength)+"..."),"shadow"===o.fontAwesomeIconStyle&&(u.fontAwesomeIconColor=u.background),o.cssAnimation||(o.cssAnimationDuration=0);var g=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(g.id=s.wrapID,g.style.width=o.width,g.style.zIndex=o.zindex,g.style.opacity=o.opacity,"center-center"===o.position?(g.style.left=o.distance,g.style.top=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===o.position?(g.style.left=o.distance,g.style.right=o.distance,g.style.top=o.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===o.position?(g.style.left=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===o.position?(g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.left="auto"):"left-top"===o.position?(g.style.left=o.distance,g.style.top=o.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===o.position?(g.style.left=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=o.distance,g.style.top=o.distance,g.style.left="auto",g.style.bottom="auto"),o.backOverlay){var b=t.document.getElementById(s.overlayID)||t.document.createElement("div");b.id=s.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=o.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=u.backOverlayColor||o.backOverlayColor,b.className=o.cssAnimation?"nx-with-animation":"",b.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(b)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(g);var h=t.document.createElement("div");h.id=o.ID+"-"+d,h.className=o.className+" "+u.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&"function"!==typeof r?"nx-with-close-button":"")+" "+("function"===typeof r?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),h.style.fontSize=o.fontSize,h.style.color=u.textColor,h.style.background=u.background,h.style.borderRadius=o.borderRadius,h.style.pointerEvents="all",o.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.fontFamily='"'+o.fontFamily+'", '+n,o.cssAnimation&&(h.style.animationDuration=o.cssAnimationDuration+"ms");var w="";if(o.closeButton&&"function"!==typeof r&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+u.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)h.innerHTML='<i style="color:'+u.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+u.fontAwesomeClassName+" "+("shadow"===o.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(o.closeButton?w:"");else{var v="";e===a.Success?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':e===a.Failure?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':e===a.Warning?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':e===a.Info&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),h.innerHTML=v+'<span class="nx-message nx-with-icon">'+i+"</span>"+(o.closeButton?w:"")}else h.innerHTML='<span class="nx-message">'+i+"</span>"+(o.closeButton?w:"");if("left-bottom"===o.position||"right-bottom"===o.position){var N=t.document.getElementById(s.wrapID);N.insertBefore(h,N.firstChild)}else t.document.getElementById(s.wrapID).appendChild(h);var k=t.document.getElementById(h.id);if(k){var C,I,z=function(){k.classList.add("nx-remove");var o=t.document.getElementById(s.overlayID);o&&g.childElementCount<=0&&o.classList.add("nx-remove"),clearTimeout(C)},A=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var o=t.document.getElementById(s.overlayID);o&&null!==o.parentNode&&o.parentNode.removeChild(o)}clearTimeout(I)};if(o.closeButton&&"function"!==typeof r&&t.document.getElementById(h.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){A(),clearTimeout(t)}),o.cssAnimationDuration)})),("function"===typeof r||o.clickToClose)&&k.addEventListener("click",(function(){"function"===typeof r&&r(),z();var t=setTimeout((function(){A(),clearTimeout(t)}),o.cssAnimationDuration)})),!o.closeButton&&"function"!==typeof r){var W=function(){C=setTimeout((function(){z()}),o.timeout),I=setTimeout((function(){A()}),o.timeout+o.cssAnimationDuration)};W(),o.pauseOnHover&&(k.addEventListener("mouseenter",(function(){k.classList.add("nx-paused"),clearTimeout(C),clearTimeout(I)})),k.addEventListener("mouseleave",(function(){k.classList.remove("nx-paused"),W()})))}}if(o.showOnlyTheLastOne&&d>0)for(var _=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+d+"])"),j=0;j<_.length;j++){var S=_[j];null!==S.parentNode&&S.parentNode.removeChild(S)}o=f(!0,o,p)},y={Notify:{init:function(t){o=f(!0,s,t),c(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!o)return r("You have to initialize the Notify module before call Merge function."),!1;o=f(!0,o,t)},success:function(t,o,e){x(a.Success,t,o,e)},failure:function(t,o,e){x(a.Failure,t,o,e)},warning:function(t,o,e){x(a.Warning,t,o,e)},info:function(t,o,e){x(a.Info,t,o,e)}}};return"object"===typeof t.Notiflix?f(!0,t.Notiflix,{Notify:y.Notify}):{Notify:y.Notify}}(n)}.apply(o,[]),void 0===i||(t.exports=i)}}]);
//# sourceMappingURL=108.418cd312.chunk.js.map