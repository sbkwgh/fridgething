!function(t,e){"use strict";function n(t){return document.createElement(t)}function o(t,e){if("undefined"!=typeof t)for(var n in e)e.hasOwnProperty(n)&&t.setAttribute(n,e[n])}function i(t,e){e.forEach(function(e){"undefined"!=typeof e&&t.appendChild(e)})}function s(){a(this)}function a(t){var e=d.indexOf(t);t.classList.add("Notify_fade-out"),setTimeout(function(){if("Notify_sub-div"===t.parentElement.getAttribute("class")){var e=document.getElementById("Notify_center-div");e.removeChild(t.parentElement)}t.parentElement.removeChild(t)},500),d.splice(e,1)}function c(t){var c;c=t.millisecondsToDelete===e?12e4:0===t.millisecondsToDelete?0:t.millisecondsToDelete;var u,r,l,y=n("div"),h=n("div"),w=n("div"),T=n("span"),g=n("span"),N=n("span"),_=n("p"),O=n("div");switch(g.innerHTML=t.title+" ",N.innerHTML="Just now",_.innerHTML=t.message,T.innerHTML="&times;",T.addEventListener("click",function(){var t=this.parentElement.parentElement;t.dispatchEvent(E.close),a(t)}),t.inputBox&&(u=n("input"),o(u,{type:"text"})),t.buttonOne&&(r=n("input"),r.addEventListener("click",function(){u&&(h.inputBox=u.value),r.dispatchEvent(E.buttonOne)})),t.buttonTwo&&(l=n("input"),l.addEventListener("click",function(){u&&(h.inputBox=u.value),l.dispatchEvent(E.buttonTwo)})),o(h,{"class":"Notify"}),h.classList.add("Notify_fade-in"),o(w,{"class":"Notify_title-section"}),o(T,{"class":"Notify_close"}),o(g,{"class":"Notify_title"}),o(N,{"class":"Notify_time-created","data-time-created":Date.now(),"data-milliseconds-to-delete":c}),o(_,{"class":"Notify_message"}),o(O,{"class":"Notify_center-buttons"}),o(r,{type:"button",value:t.buttonOne}),o(l,{type:"button",value:t.buttonTwo}),i(h,[w,_]),i(w,[T,g,N]),i(_,[u,O]),i(O,[r,l]),d.push(h),t.location){case"center":case"middle-center":o(y,{"class":"Notify_sub-div"}),i(p,[y]),i(y,[h]);break;case"top-left":i(f,[h]);break;case"top-center":h.classList.add("Notify_center-top"),i(document.body,[h]);break;case"bottom-center":h.classList.add("Notify_center-bottom"),i(document.body,[h]);break;case"bottom-left":i(m,[h]);break;case"top-right":i(b,[h]);break;case"bottom-right":i(v,[h]);break;default:i(b,[h])}return h.on=function(t,e){return this.removeEventListener(t,s),this.addEventListener(t,e),this},h.close=function(){a(this)},h}function u(t){return c({title:t.title||"",message:t.message,millisecondsToDelete:t.time,location:t.location})}function r(t){return c({title:t.title||"",message:t.message,millisecondsToDelete:t.time,inputBox:!0,buttonOne:t.buttonOne||"",buttonTwo:t.buttonTwo||"",location:t.location}).on("buttonTwo",s).on("buttonOne",s)}function l(t){return c({title:t.title||"",message:t.message,millisecondsToDelete:t.time,buttonOne:t.buttonOne||"",buttonTwo:t.buttonTwo||"",location:t.location}).on("buttonTwo",s).on("buttonOne",s)}var d=[],f=n("div"),m=n("div"),b=n("div"),v=n("div");o(f,{id:"Notify_notify-bar-top-left"}),o(b,{id:"Notify_notify-bar-top-right"}),o(m,{id:"Notify_notify-bar-bottom-left"}),o(v,{id:"Notify_notify-bar-bottom-right"}),i(document.body,[f,b,m,v]);var p=n("div");o(p,{id:"Notify_center-div"}),i(document.body,[p]);var E={};Event in t?E={close:new Event("close"),timeElapsed:new Event("timeElapsed"),buttonOne:new Event("buttonOne"),buttonTwo:new Event("buttonTwo")}:(E={close:document.createEvent("Event"),timeElapsed:document.createEvent("Event"),buttonOne:document.createEvent("Event"),buttonTwo:document.createEvent("Event")},E.close.initEvent("close",!0,!0),E.timeElapsed.initEvent("timeElapsed",!0,!0),E.buttonOne.initEvent("buttonOne",!0,!0),E.buttonTwo.initEvent("buttonTwo",!0,!0)),setInterval(function(){d&&d.forEach(function(t){var e=t.querySelector(".Notify_time-created"),n=new Date(+e.getAttribute("data-time-created")),o=+e.getAttribute("data-milliseconds-to-delete"),i=Date.now()-n,s="Just now",c=function(t,e){return e=" "+e,1===t?e+" ago":e+"s ago"},u={minutes:Math.floor(i/1e3/60),hours:Math.floor(i/1e3/60/60),date:n.getDate()+"/"+n.getMonth()+"1/"+n.getFullYear()};u.minutes&&(s=u.minutes+c(u.minutes,"minute")),u.hours&&(s=u.hours+c(u.hours,"hour")),u.hour>24&&(s=u.date),e.innerHTML=s,+o&&i>o&&(t.dispatchEvent(E.timeElapsed),a(t))})},1e3),t.Notify={notify:u,prompt:r,confirm:l}}(window);