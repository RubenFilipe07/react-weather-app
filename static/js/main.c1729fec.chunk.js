(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(15),o=n.n(i),r=(n(21),n(3)),s=n.n(r),l=n(5),u=n(6),d=n(16),j=n.n(d),p=(n(41),n(0)),h=function(){return Object(p.jsx)(a.Fragment,{children:Object(p.jsx)("h1",{className:"center",children:"Enable location access in your browser"})})},f=(n(43),n.p+"static/media/loading.063d965a.gif"),b=function(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("h1",{className:"center",children:"loading weather information"}),Object(p.jsx)("img",{class:"loading",src:f,alt:"loading"})]})};n(44);var g=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),o=Object(u.a)(i,2),r=o[0],d=o[1],f=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{lat:t,lon:n,appid:"896a6b593a53f8475e7abec699cd3ac6",lang:"pt",units:"metric"}});case 2:a=e.sent,d(a.data),console.log(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function g(){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){f(e.coords.latitude,e.coords.longitude),c(!0)}),(function(e){1===e.code?alert("Permita que este site utilize localiza\xe7\xe3o do seu dispositivo e verifique se a localiza\xe7\xe3o est\xe1 ativada"):1===e.code?alert("N\xe3o foi poss\xedvel obter a localiza\xe7\xe3o. Verifique se a localiza\xe7\xe3o do seu dispositivo est\xe1 ativada"):alert("ERROR(".concat(e.code,"): ").concat(e.message))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(Object(a.useEffect)((function(){g()}),[]),!1===n)return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(h,{}),Object(p.jsx)("button",{onClick:g,children:"Get location"})]});if(!1===r)return Object(p.jsx)(a.Fragment,{children:Object(p.jsx)(b,{})});var O=r.weather[0].icon;return Object(p.jsxs)("div",{className:"interface",children:[Object(p.jsx)("h3",{className:"city",children:r.name}),Object(p.jsxs)("h1",{className:"temperature",children:[r.main.temp.toFixed(0),"\xb0C"]}),Object(p.jsx)("p",{className:"condition",children:r.weather[0].description}),Object(p.jsx)("img",{className:"condition-icon",src:"http://openweathermap.org/img/wn/".concat(O,"@2x.png"),alt:"condition"})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),m()}},[[45,1,2]]]);
//# sourceMappingURL=main.c1729fec.chunk.js.map