(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),c=t.n(o),i=(t(84),t(19)),l=t(151),s=t(76),d=t(153),u=t(22),m=t(29),p=t(26),g=t(101),f=t(103),h=t(102),b=t(145),E=t(144),v=t(143),y=Object(g.a)({root:{flexGrow:1}});function w(){var e=y();return r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{color:"secondary",variant:"query"}))}var O=Object(g.a)(function(e){return{container:{height:"100%",width:"100%",top:"25%",display:"flex",alignItems:"center",justifyContent:"center"},paper:{flexGrow:1,position:"absolute",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4),outline:"none"},modal:{position:"absolute",top:100,width:"100%",height:"80%",frameBorder:0,border:0,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4),outline:"none"},button:{backgroundColor:e.palette.primary.main}}}),_=Object(i.b)(function(e,a){return{state:e}})(function(e){var a=O(),t=r.a.useState(!1),n=Object(p.a)(t,2),o=n[0],c=n[1],i=function(){return c(!0)},l=e.state.validationReducer.validatedAddress,s=l.validOrigin,d=l.validDestination,u=s&&d?"&origin=".concat(s.geocoded_address.formatted_address,"&destination=").concat(d.geocoded_address.formatted_address):"";return r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement(w,{className:a.progress}),r.a.createElement(h.a,{className:a.container},function(e){var t="https://www.google.com/maps/embed/v1/directions?key=".concat("AIzaSyCdzWIj6TClthKXG8r9Htw3frZQD8Sc-n8").concat(e,"&avoid=tolls");return r.a.createElement("iframe",{onLoad:i,className:a.modal,title:"Directions",src:t,allowFullScreen:!0})}(u)))}),j=Object(g.a)(function(e){return{container:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},paper:{position:"absolute",top:"25%",flexGrow:1,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(3,2),outline:"none"},header:{margin:15},card:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[2],padding:e.spacing(4),margin:15,outline:"none"},button:{float:"right",display:"flex",margin:e.spacing(1),backgroundColor:e.palette.primary.main},progress:{position:"relative",top:0}}}),A=Object(i.b)(function(e,a){return{state:e}})(function(e){var a=e.state.validationReducer.validatedAddress,t=a.validOrigin,o=a.validDestination,c=j(),i=r.a.useState(!0),l=Object(p.a)(i,2),s=l[0],d=l[1];return Object(n.useEffect)(function(){return d(!t&&!o)}),r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(w,{className:c.progress}),r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("div",{className:c.container},r.a.createElement(h.a,{className:c.paper},r.a.createElement(f.a,{className:c.header,variant:"h5",gutterBottom:!0},"Confirm Address"),r.a.createElement(h.a,{className:c.card},t&&r.a.createElement(f.a,{variant:"body1",className:c.title},t.geocoded_address&&t.geocoded_address.formatted_address)||r.a.createElement(f.a,{color:"textSecondary",variant:"overline",className:c.title},"Orgin")),r.a.createElement(h.a,{className:c.card},o&&r.a.createElement(f.a,{variant:"body1",className:c.title},o.geocoded_address&&o.geocoded_address.formatted_address)||r.a.createElement(f.a,{color:"textSecondary",variant:"overline",className:c.title},"Destination")),r.a.createElement(b.a,{disabled:s,component:u.b,to:"/map",className:c.button},"Map"),r.a.createElement(b.a,{onClick:e.history.goBack,className:c.button},"Back"))))))}),S=t(152),D=function(e,a){return console.log({origin:e,destination:a}),function(t){var n=function(e){return fetch("https://dev-api.shipwell.com/v2/locations/addresses/validate/",function(e){return{method:"POST",headers:{"Cache-Control":"no-cache","Content-Type":"application/json"},body:JSON.stringify({formatted_address:e})}}(e)).then(function(e){return e.json()})},r={validOrigin:{},validDestination:{}};Promise.all([n(e),n(a)]).then(function(e){r.validOrigin=e[0],r.validDestination=e[1],t({type:"VALIDATE_ADDRESS",payload:r}),(e[0].error||e[1].error)&&alert("Please check your inputs and try again.")}).catch(function(e){return console.error(e)})}},N=Object(g.a)(function(e){return{container:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},root:{padding:e.spacing(3,2),position:"absolute",top:"25%",flexGrow:1},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},button:{margin:e.spacing(1),backgroundColor:e.palette.primary.main,display:"flex",bottom:-10}}}),x=Object(i.b)(function(e,a){return{state:e}})(function(e){var a=e.dispatch,t=e.state,n=N(),o=r.a.useState(!0),c=Object(p.a)(o,2),i=c[0],l=c[1],s=function(e){return function(t){a("origin"===e?{type:"ADD_FROM_ADDRESS",payload:t.target.value}:function(e){return{type:"ADD_TO_ADDRESS",payload:e}}(t.target.value)),d()}},d=function(){return t.addressReducer.originAddress.length<1||t.addressReducer.destinationAddress<1?l(!0):l(!1)};return r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement("div",{className:n.container},r.a.createElement(h.a,{className:n.root},r.a.createElement(f.a,{variant:"h5"}," Get Route"),r.a.createElement(S.a,{required:!0,id:"standard-required",label:"From",value:t.originAddress,onChange:s("origin"),className:n.textField,margin:"normal"}),r.a.createElement(S.a,{required:!0,id:"standard-required",label:"To",value:t.destinationAddress,onChange:s("destination"),className:n.textField,margin:"normal"}),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(b.a,{onClick:function(e){return a(D(t.addressReducer.originAddress,t.addressReducer.destinationAddress))},to:"/confirm",component:u.b,className:n.button,disabled:i},"Search")))))}),C=Object(g.a)(function(e){return{container:{height:"100%",alignItems:"center",justifyContent:"center",top:"25%",position:"absolute"},root:{padding:e.spacing(3,2)}}}),k=Object(i.b)(function(e,a){return{state:e}})(function(e){var a=C(),t=e.state.userReducer.user.user,n=e.state.userReducer.user.company;return console.log({user:t,company:n}),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},t&&r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.root},r.a.createElement(f.a,{variant:"h2"},"Profile"),t.completed_onboarding&&r.a.createElement(f.a,{variant:"caption"},r.a.createElement("span",{"aria-label":"home-icon",role:"img"},"\u2705 Onboarding Completed"))),r.a.createElement(h.a,{className:a.root},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"h5"},t.first_name," ",t.last_name),r.a.createElement(f.a,{variant:"caption"},n.name),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"body1"},t.email," ",r.a.createElement("br",null),t.phone_number)))))}),R=t(146),F=t(147),T=t(148),I=t(73),G=t.n(I),B=t(149),M=t(154),P=t(75),q=t(150),z=Object(g.a)(function(e){return{root:{top:0,flexGrow:1,width:"100%",position:"fixed"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},avatar:{backgroundColor:e.palette.secondary.main}}}),L=Object(i.b)(function(e,a){return{state:e}})(function(e){var a=z(),t=r.a.useState(null),o=Object(p.a)(t,2),c=o[0],i=o[1],l=Boolean(c),s=e.dispatch,d=e.state.userReducer.user.user,m=e.state.userReducer.user.company;Object(n.useEffect)(function(){d||s(function(e){fetch("https://dev-api.shipwell.com/v2/auth/me/",{method:"GET",headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Token 4c4547fe6ad68c57cbac0a8cfbfec35b"}}).then(function(e){return e.json()}).then(function(a){return e(function(e){return{type:"GET_USER",payload:e}}(a))}).catch(function(e){return console.error(e)})})},[d,s]);var g=function(){return i(null)};return r.a.createElement("div",{className:a.root},r.a.createElement(R.a,{position:"static"},r.a.createElement(F.a,null,r.a.createElement(T.a,{component:u.b,to:"/",color:"secondary",edge:"start",className:a.menuButton,"aria-label":"Menu"},r.a.createElement(G.a,null)),d&&r.a.createElement(f.a,{variant:"overline",className:a.title},m.name)||r.a.createElement(f.a,{variant:"overline",className:a.title}),d&&r.a.createElement("div",null,r.a.createElement(T.a,{"aria-label":"Account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){return i(e.currentTarget)},color:"inherit"},r.a.createElement(B.a,{className:a.avatar}," ",d.first_name[0]," ")),r.a.createElement(P.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:g},r.a.createElement(M.a,{component:u.b,to:"/user",onClick:g},"Profile"),r.a.createElement(M.a,{component:q.a,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",href:"https://youtu.be/dQw4w9WgXcQ",onClick:g},"My account"))))))}),W=function(e){return r.a.createElement(u.a,null,r.a.createElement(m.a,{path:"/",component:L}),r.a.createElement(m.a,{exact:!0,path:"/",component:x}),r.a.createElement(m.a,{exact:!0,path:"/user",component:k}),r.a.createElement(m.a,{exact:!0,path:"/map",component:_}),r.a.createElement(m.a,{exact:!0,path:"/confirm",component:A}))},X=t(28),J=t(74),Q=t(30),U={isFetching:!1,didInvalidate:!1,validatedAddress:{}},V={originAddress:"",destinationAddress:""},H={user:{}},K=Object(X.c)({addressReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FROM_ADDRESS":var t=a.payload;return Object(Q.a)({},e,{originAddress:t});case"ADD_TO_ADDRESS":var n=a.payload;return Object(Q.a)({},e,{destinationAddress:n});default:return e}},validationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"VALIDATE_ADDRESS":var t=a.payload;return Object(Q.a)({},e,{validatedAddress:t,isFetching:!0});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_USER":var t=a.payload;return Object(Q.a)({},e,{user:t});default:return e}}}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,$=Object(X.e)(K,Z(Object(X.a)(J.a))),Y=(t(99),Object(s.a)({palette:{primary:{main:"#38a3dc"},secondary:{main:"#f44336"},background:{default:"#F6F8FA"}}})),ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{store:$},r.a.createElement(d.a,{theme:Y},r.a.createElement(l.a,null),r.a.createElement(W,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,a,t){e.exports=t(100)},84:function(e,a,t){},99:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.465bc023.chunk.js.map