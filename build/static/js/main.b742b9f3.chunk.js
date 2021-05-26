/*!

=========================================================
* Notus React - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
(this["webpackJsonpnotus-react"]=this["webpackJsonpnotus-react"]||[]).push([[0],{44:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/pattern_react.01996482.png"},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var l=a(3),s=a.n(l),n=a(31),r=a.n(n),c=a(6),o=a(7),i=a(11),u=(a(55),a(2));function b(e){var t=s.a.useState(!1),a=Object(i.a)(t,2),l=a[0],n=a[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{className:"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow",children:Object(u.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[Object(u.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(u.jsx)(c.b,{to:"/",className:"text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",children:"Friend Location Meetup"}),Object(u.jsx)("button",{className:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return n(!l)},children:Object(u.jsx)("i",{className:"fas fa-bars"})})]}),Object(u.jsx)("div",{className:"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"+(l?" block":" hidden"),id:"example-navbar-warning",children:Object(u.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto",children:[Object(u.jsx)("li",{className:"flex items-center",children:Object(u.jsxs)("a",{className:"hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",href:"https://www.youtube.com/watch?v=rTgj1HxmUbg",target:"_blank",children:[Object(u.jsx)("i",{className:"text-blueGray-400 fas fa-info-circle text-lg leading-lg "}),Object(u.jsx)("span",{className:"lg:hidden inline-block ml-2",children:"About"})]})}),Object(u.jsx)("li",{className:"flex items-center",children:Object(u.jsxs)("a",{className:"hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",href:"https://github.com/kevin-chen/Friends-Location-Meetup",target:"_blank",children:[Object(u.jsx)("i",{className:"text-blueGray-400 fab fa-github text-lg leading-lg "}),Object(u.jsx)("span",{className:"lg:hidden inline-block ml-2",children:"GitHub"})]})})]})})]})})})}var d=a(10);a(30);function x(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{fixed:!0}),Object(u.jsxs)("section",{className:"header relative pt-16 items-center flex h-screen max-h-860-px",children:[Object(u.jsx)("div",{className:"container mx-auto items-center flex flex-wrap",children:Object(u.jsx)("div",{className:"w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4",children:Object(u.jsxs)("div",{className:"pt-32 sm:pt-0",children:[Object(u.jsx)("h2",{className:"font-semibold text-4xl text-blueGray-600",children:"Track Friend Locations"}),Object(u.jsxs)("p",{className:"mt-4 text-lg leading-relaxed text-blueGray-500",children:["not creppy at all."," "]}),Object(u.jsxs)("div",{className:"mt-12",children:[Object(u.jsx)(c.b,{className:"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150",to:"/enter_group",children:"Enter Group"}),Object(u.jsx)(c.b,{className:"github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150",to:"/create_group",children:"Create Group"})]})]})})}),Object(u.jsx)("img",{className:"absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px",src:a(44).default,alt:"..."})]})]})}a(23);function j(){var e=Object(o.g)().id,t=Object(l.useState)(""),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(l.useState)(e||""),x=Object(i.a)(r,2),j=x[0],m=x[1],p=function(){var e=d.a.auth().currentUser.uid;d.a.database().ref("groups/".concat(j,"/users/").concat(e)).update({name:s}).then((function(){console.log("Added user "+e+" to group "+j)}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{transparent:!0}),Object(u.jsxs)("main",{className:"profile-page",children:[Object(u.jsxs)("section",{className:"relative block h-500-px",children:[Object(u.jsx)("div",{className:"absolute top-0 w-full h-full bg-center bg-cover",style:{backgroundImage:"url('https://source.unsplash.com/user/erondu/1600x900')"},children:Object(u.jsx)("span",{id:"blackOverlay",className:"w-full h-full absolute opacity-50 bg-black"})}),Object(u.jsx)("div",{className:"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px",style:{transform:"translateZ(0)"},children:Object(u.jsx)("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:Object(u.jsx)("polygon",{className:"text-blueGray-200 fill-current",points:"2560 0 2560 100 0 100"})})})]}),Object(u.jsx)("section",{className:"relative py-16 bg-blueGray-200",children:Object(u.jsx)("div",{className:"container mx-auto px-4",children:Object(u.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64",children:Object(u.jsx)("div",{className:"px-6",children:Object(u.jsx)("div",{className:"flex-auto px-4 lg:px-10 py-10 pt-10",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p()},children:[Object(u.jsxs)("div",{className:"relative w-full mb-3",children:[Object(u.jsx)("label",{className:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Your Name"}),Object(u.jsx)("input",{type:"text",className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Name",value:s,onChange:function(e){var t=e.target.value;n(t)}})]}),Object(u.jsxs)("div",{className:"relative w-full mb-3",children:[Object(u.jsx)("label",{className:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-groupid",children:"Group ID"}),Object(u.jsx)("input",{type:"text",className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Group ID",value:j,onChange:function(e){var t=e.target.value;m(t)}})]}),Object(u.jsx)("div",{className:"text-center mt-6",children:Object(u.jsx)(c.b,{to:"/location/".concat(j),children:Object(u.jsx)("button",{type:"submit",className:"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",onClick:function(){p()},children:"Enter"})})})]})})})})})})]})]})}var m=function(e){return Object(u.jsx)(u.Fragment,{children:e.alert?Object(u.jsxs)("div",{className:"text-white px-6 py-4 border-0 rounded relative mb-4 bg-orange-500",children:[Object(u.jsx)("span",{className:"text-xl inline-block mr-5 align-middle",style:{marginRight:"1.25rem"},children:Object(u.jsx)("i",{className:"fas fa-bell"})}),Object(u.jsx)("span",{className:"inline-block align-middle mr-8",children:Object(u.jsx)("b",{className:"capitalize",children:" Copied Link!"})}),Object(u.jsx)("button",{className:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none",style:{marginRight:"1.25rem"},onClick:function(){return e.setShow(!1)},children:Object(u.jsx)("span",{children:"\xd7"})})]}):null})},p=a(56);a(29);function h(){var e=Object(l.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(l.useState)(""),r=Object(i.a)(n,2),o=r[0],x=r[1],j=Object(l.useState)(!1),h=Object(i.a)(j,2),g=h[0],f=h[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{transparent:!0}),Object(u.jsxs)("main",{className:"profile-page",children:[Object(u.jsxs)("section",{className:"relative block h-500-px",children:[Object(u.jsx)("div",{className:"absolute top-0 w-full h-full bg-center bg-cover",style:{backgroundImage:"url('https://source.unsplash.com/user/erondu/1600x900')"},children:Object(u.jsx)("span",{id:"blackOverlay",className:"w-full h-full absolute opacity-50 bg-black"})}),Object(u.jsx)("div",{className:"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px",style:{transform:"translateZ(0)"},children:Object(u.jsx)("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:Object(u.jsx)("polygon",{className:"text-blueGray-200 fill-current",points:"2560 0 2560 100 0 100"})})})]}),Object(u.jsx)("section",{className:"relative py-16 bg-blueGray-200",children:Object(u.jsx)("div",{className:"container mx-auto px-4",children:Object(u.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64",children:Object(u.jsx)("div",{className:"px-6",children:Object(u.jsxs)("div",{className:"flex-auto px-4 lg:px-10 py-10 pt-10",children:[Object(u.jsx)(m,{alert:g,setShow:f}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e=Object(p.a)();d.a.database().ref("groups/".concat(e)).set({id:e,name:o}).then((function(){s(e);var t="/enter_group/"+e;navigator.clipboard.writeText(t),f(!0),console.log("Added new group")}))}()},children:[g?Object(u.jsxs)("div",{className:"relative w-full mb-3",children:[Object(u.jsx)("label",{className:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-groupid",children:"Group ID"}),Object(u.jsx)("input",{id:"group_id_input",type:"text",className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Group ID",value:a,disabled:!0,readOnly:!0})]}):Object(u.jsxs)("div",{className:"relative w-full mb-3",children:[Object(u.jsx)("label",{className:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-groupname",children:"Group Name"}),Object(u.jsx)("input",{id:"group_name_input",type:"text",className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Group Name",value:o,onChange:function(e){var t=e.target.value;x(t)}})]}),Object(u.jsx)("div",{className:"text-center mt-6",children:g?Object(u.jsx)(c.b,{to:"/enter_group/".concat(a),children:Object(u.jsx)("button",{className:"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",children:"Enter Group"})}):Object(u.jsx)("button",{className:"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",type:"submit",children:"Create Group"})})]})]})})})})})]})]})}var g=function(e){var t=s.a.useRef(null);return s.a.useEffect((function(){var a=window.google,l=t.current,s=0,n=0;e.markers.length<1?(console.log("Creating Markers with no values on map: ",e.markers),s=0,n=0):(console.log("Creating Markers on map: ",e.markers),s=e.markers[0][0].lat,n=e.markers[0][0].lng);var r=new a.maps.LatLng(s,n),c=new a.maps.InfoWindow,o={zoom:12,center:r,scrollwheel:!1,zoomControl:!0};l=new a.maps.Map(l,o),e.markers.forEach((function(e,t){var s=Object(i.a)(e,2),n=s[0],r=s[1],o=new a.maps.Marker({position:n,map:l,title:"".concat(r,"'s Location: ").concat(n.lat,", ").concat(n.lng),label:"".concat(r?r[0]:""),optimized:!1});o.addListener("click",(function(){c.close(),c.setContent(o.getTitle()),c.open(o.getMap(),o)}))}))})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"relative w-full rounded h-600-px",children:Object(u.jsx)("div",{className:"rounded h-full",ref:t})})})};function f(e){var t=e.groupID,a=e.userID,l=e.statSubtitle,s=e.statTitle,n=e.directions,r=e.statIconName,c=e.statIconColor;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg",children:Object(u.jsxs)("div",{className:"flex-auto p-4",children:[Object(u.jsxs)("div",{className:"flex flex-wrap",children:[Object(u.jsxs)("div",{className:"relative w-full pr-4 max-w-full flex-grow flex-1",children:[Object(u.jsxs)("h5",{className:"text-blueGray-400 uppercase font-bold text-xs",children:[l.lat,", ",l.lng]}),Object(u.jsx)("span",{className:"font-semibold text-xl text-blueGray-700",children:s})]}),Object(u.jsx)("div",{className:"relative w-auto pl-4 flex-initial",children:Object(u.jsx)("div",{className:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "+c,children:Object(u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{className:r})})})})]}),Object(u.jsx)("p",{className:"text-sm text-blueGray-400 mt-4",children:Object(u.jsx)("span",{className:"whitespace-nowrap",children:Object(u.jsx)("button",{onClick:function(){d.a.database().ref("groups/".concat(t,"/users/").concat(a)).remove()},children:"Delete"})})})]})})})}function O(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(l.useState)(""),r=Object(i.a)(n,2),c=r[0],x=r[1],j=Object(l.useState)(!1),m=Object(i.a)(j,2),p=m[0],h=m[1],O=Object(o.g)().groupID;return Object(l.useEffect)((function(){console.log("LOCATION TOP: ",O),d.a.database().ref("groups/".concat(O)).on("value",(function(e){var t=e.val();if(t&&(console.log("DATA: ",t),x(t.name),t)){console.log("Retrieved Users: ",t.users);var a=[];for(var l in t.users){var n=t.users[l];console.log("User: ",n);var r=[],c={};c=n.lat||n.lng?{lat:n.lat,lng:n.lng}:{lat:0,lng:0},r.push(c),r.push(n.name),r.push(l),console.log("Entry: ",r),a.push(r)}console.log("Finished Retrieve: ",a),s(a)}}))}),[O]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{transparent:!0}),Object(u.jsx)("div",{className:"flex flex-wrap",children:Object(u.jsx)("div",{className:"w-full px-4",style:{marginTop:"80px"},children:Object(u.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",children:Object(u.jsx)(g,{markers:a})})})}),Object(u.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center",children:[Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),h(!0),function(){var e=d.a.auth().currentUser.uid;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var a,l;a=t.coords.latitude,l=t.coords.longitude,console.log(a,l),d.a.database().ref("groups/".concat(O,"/users/").concat(e)).update({lat:a,lng:l}).then((function(){console.log("Added user "+e+" Location Lat "+a+" Lng "+l),h(!1)}))}))}()},children:Object(u.jsx)("button",{className:"bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"submit",children:Object(u.jsx)("i",{id:"locationIcon",className:p?"fas fa-spinner":"fas fa-location-arrow"})})}),Object(u.jsxs)("h4",{className:"text-3xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800",children:[" Group Name: ",c]})]}),Object(u.jsx)("div",{className:"relative bg-white-600 md:pt-20 pb-32 pt-12",children:Object(u.jsx)("div",{className:"container px-4 md:px-10 mx-auto w-full",children:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"flex flex-wrap",children:a.map((function(e,t){var a=Object(i.a)(e,3),l=a[0],s=a[1],n=a[2];return console.log("Creating Cards: ",n),Object(u.jsx)("div",{className:"w-full lg:w-6/12 xl:w-3/12 px-4",children:Object(u.jsx)(f,{groupID:O,userID:n,statSubtitle:l,statTitle:s,directions:"https://www.google.com/maps/search/?api=1&query="+l.lat+","+l.lng,statIconColor:"bg-pink-500"})},t)}))})})})})]})}f.defaultProps={statSubtitle:{lat:0,lng:0},statIconName:"fas fa-directions",statIconColor:"bg-red-500"};var v={apiKey:"AIzaSyCE1bi9JTS_fabGOU4QeVKj8rNpxip6b0c",projectId:"friends-location-meetup",databaseURL:"https://friends-location-meetup-default-rtdb.firebaseio.com/",authDomain:"friends-location-meetup.firebaseapp.com"},w=function(){return d.a.initializeApp(v),d.a.auth().signInAnonymously().then((function(){console.log("Successfully Signed into Firebase")})).catch((function(e){console.error("Error Signing Anonymously into Firebase")})),d.a.auth().setPersistence(d.a.auth.Auth.Persistence.LOCAL).then((function(){console.log("Locally Persistent Auth")})),d.a.auth().onAuthStateChanged((function(e){if(e){var t=e.uid;console.log("Signed In: ",t)}else console.log("Signed out")})),Object(u.jsx)(c.a,{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/",exact:!0,component:x}),Object(u.jsx)(o.b,{path:"/enter_group",exact:!0,component:j}),Object(u.jsx)(o.b,{path:"/enter_group/:id",exact:!0,component:j}),Object(u.jsx)(o.b,{path:"/create_group",exact:!0,component:h}),Object(u.jsx)(o.b,{path:"/location",exact:!0,component:O}),Object(u.jsx)(o.b,{path:"/location/:groupID",exact:!0,component:O}),Object(u.jsx)(o.a,{from:"*",to:"/"})]})})};a(48),a(49);r.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b742b9f3.chunk.js.map