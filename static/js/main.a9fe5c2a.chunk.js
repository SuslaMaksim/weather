(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{121:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),i=a(25),r=a.n(i),s=(a(88),a(121),a(163)),l=function(e){return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)(s.a,{className:"header__title",as:"h2",align:"center",children:"Weather at Home :)"})})},o=(a(127),a(92),a.p+"static/media/world-map.1433676d.jpg"),d=a(165),j=a(29),m=a.p+"static/media/loading.149a7823.gif",u=function(e){var t=e.cityName,a=e.otherDays,c=e.currentCity,i=e.someSityOfOurCountry;return Object(n.jsxs)("div",{className:"mainpage",children:[Object(n.jsx)("div",{style:{backgroundImage:"url("+o+")"},className:"mainpage__weather",children:c?Object(n.jsx)(U,{cityName:t,otherDays:a,currentCity:c}):Object(n.jsx)("img",{className:"sitypage__loading",src:m,alt:"loading"})}),Object(n.jsxs)("div",{className:"mainpage__sities",children:[Object(n.jsx)(s.a,{className:"mainpage__sities-header",align:"center",as:"h6",children:" Most popular Cities of Country"}),Object(n.jsx)(d.a,{className:"mainpage__grid",children:Object(n.jsx)(d.a.Row,{children:i&&i.map((function(e){return Object(n.jsx)(d.a.Column,{mobile:6,tablet:4,computer:4,className:"mainpage__grid-city",children:Object(n.jsx)(j.b,{to:"/city/".concat(e.link),children:Object(n.jsx)("span",{children:e.name})})},e.id)}))})})]})]})},h=(a(129),function(e){return["\u0412\u0421","\u041f\u041d","\u0412\u0422","\u0421\u0420","\u0427\u0422","\u041f\u0422","\u0421\u0411"][e.getDay()]}),b=function(e){return e.toLocaleTimeString()},p=function(e){return e.weather.find((function(e){return e.icon})).icon},O=a(162),y=a(54),g=function(e){var t=e.cityName,a=e.currentCitysDays,c=new Date(1e3*a[0].dt).toLocaleDateString(),i=h(new Date(1e3*a[0].dt));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"sitypage",children:Object(n.jsx)("div",{className:"sitypage__content",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(d.a.Column,{align:"center",width:16,className:"sitypage__content-header",children:Object(n.jsxs)("span",{children:[" ",t," "]})}),Object(n.jsx)(d.a.Row,{children:Object(n.jsx)(d.a.Column,{width:16,className:"sitypage__content-day",children:Object(n.jsx)("span",{children:"".concat(i," ").concat(c)})})}),Object(n.jsx)(d.a.Row,{className:"sitypage__content-row",children:a&&a.map((function(e){return Object(n.jsx)(d.a.Column,{tablet:2,mobile:4,computer:2,align:"center",children:Object(n.jsxs)("div",{className:"mainpage__bord-clouds",children:[Object(n.jsx)("span",{children:h(new Date(1e3*e.dt))}),Object(n.jsx)("div",{className:"mainpage__bord-icon",children:Object(n.jsx)("img",{src:"//openweathermap.org/img/wn/".concat(p(e),"@2x.png"),alt:"icon"})}),Object(n.jsx)("span",{className:"mainpage__bord-degrees",children:Math.round(e.temp.day-273)})]})},e.dt)}))}),Object(n.jsx)(d.a.Row,{className:"sitypage__content-speed",children:Object(n.jsx)(d.a.Column,{width:16,align:"center",children:Object(n.jsx)("span",{children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430 \u043c/c"})})}),Object(n.jsx)(d.a.Row,{className:"sitypage__content-wind",children:a&&a.map((function(e){return Object(n.jsxs)(d.a.Column,{className:"sitypage__content-wind-column",tablet:2,mobile:4,computer:2,align:"center",children:[Object(n.jsx)("span",{className:"sitypage__content-time",children:h(new Date(1e3*e.dt))}),Object(n.jsx)("span",{className:"mainpage__bord-wind",children:Math.round(e.wind_speed)})]},e.dt)}))})]})})}),Object(n.jsx)(j.b,{to:"/",children:Object(n.jsxs)(O.a,{className:"sitypage__button",children:[Object(n.jsx)(y.a,{name:"arrow left"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"]})})]})},x=a(24),_=a(86),w=a(49),f=a(52),N=a.n(f),C=a(69),v=a(75),D=a.n(v),k=function(e,t){return D.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(t)).then((function(e){return e.data}))},R=function(e,t,a){return D.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(a)).then((function(e){return e.data}))},S=function(e,t,a){return D.a.get("http://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&lang=ru&exclude=hourly,minutely&appid=").concat(a)).then((function(e){return e.data}))},T="SET_CURRENT_CITY",E={cityName:"",apiKey:"db775b25dcce0743bac3b9c39ee3610f",date:new Date(1607126352e3).toLocaleDateString(),currentCity:null,currentCitysOhterDays:[],someSityOfOurCountry:[{name:"\u0412\u0438\u043d\u043d\u0438\u0446\u0430",link:"Vinnytsia",id:1},{name:"\u041a\u0438\u0435\u0432",link:"Kyiv",id:2},{name:"\u0425\u0430\u0440\u044c\u043a\u043e\u0432",link:"Kharkiv",id:3},{name:"\u041e\u0434\u0435\u0441\u0441\u0430",link:"Odesa",id:4},{name:"\u0418\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u043e\u0432\u0441\u043a",link:"Ivano-Frankivsk",id:5},{name:"\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432",link:"Chernihiv",id:6},{name:"\u041a\u0430\u043c\u0435\u043d\u0435\u0446-\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a\u0438\u0439",link:"Kamianets-Podilskyi",id:7},{name:"\u041f\u043e\u043b\u0442\u0430\u0432\u0430",link:"Poltava",id:8},{name:"\u0425\u0435\u0440\u0441\u043e\u043d",link:"Kherson",id:9},{name:"\u041e\u0434\u0435\u0441\u0441\u0430",link:"Odesa",id:10},{name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432",link:"Mykolaiv",id:11},{name:"\u0414\u043e\u043d\u0435\u0446\u043a",link:"Donetsk",id:12},{name:"\u041a\u0440\u0438\u0432\u043e\u0439 \u0420\u043e\u0433",link:"Kryvyi Rih",id:13},{name:"\u041b\u044c\u0432\u043e\u0432",link:"Lviv",id:14},{name:"\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",link:"Zaporizhzhia",id:15},{name:"\u0414\u043d\u0435\u043f\u0440",link:"Dnipro",id:16}]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(x.a)(Object(x.a)({},e),{},{cityName:t.cityName,currentCity:Object(x.a)({},t.city),currentCitysOhterDays:t.daily.filter((function(t){return new Date(1e3*t.dt).toLocaleDateString()!==e.date}))});default:return e}},L=function(e,t,a){return{type:T,city:e,cityName:t,daily:a}},M=Object(w.b)((function(e){return{cityName:e.data.cityName,currentCity:e.data.currentCity,otherDays:e.data.currentCitysOhterDays,someSityOfOurCountry:e.data.someSityOfOurCountry}}),{getWeatherByCoordinate:function(e,t){return function(){var a=Object(C.a)(N.a.mark((function a(n,c){var i,r,s,l,o,d;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=c().data.apiKey,a.next=3,R(e,t,i);case 3:return r=a.sent,s=r.name,a.next=7,S(e,t,i);case 7:l=a.sent,o=l.current,d=l.daily,n(L(o,s,d));case 11:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}})((function(e){var t=e.cityName,a=e.currentCity,i=e.otherDays,r=e.getWeatherByCoordinate,s=e.someSityOfOurCountry,l=function(){var e=Object(c.useState)({}),t=Object(_.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(null),r=Object(_.a)(i,2),s=r[0],l=r[1],o=function(e){var t=e.coords;n({latitude:t.latitude,longitude:t.longitude})},d=function(e){l("ERROR(".concat(e.code,"): ").concat(e.message))};return Object(c.useEffect)((function(){var e=navigator.geolocation;if(e){var t=e.getCurrentPosition(o,d);return function(){return e.clearWatch(t)}}l("\u0413\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c")}),[]),Object(x.a)(Object(x.a)({},a),{},{error:s})}(),o=l.latitude,d=l.longitude,j=l.err;return Object(c.useEffect)((function(){if(!o||!d||j)return!1;r(o,d)}),[o,d,j]),Object(n.jsx)(u,{cityName:t,otherDays:i,currentCity:a,someSityOfOurCountry:s})})),F="SET_CURRENTS_CITY",B={citysName:"",apiKeys:"db775b25dcce0743bac3b9c39ee3610f",currentCitysDays:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(x.a)(Object(x.a)({},e),{},{citysName:t.cityName,currentCitysDays:t.daily});default:return e}},W=function(e,t){return{type:F,cityName:e,daily:t}},P=a(10),z=a(35),J=Object(z.d)(Object(w.b)((function(e){return{cityName:e.citysData.citysName,currentCitysDays:e.citysData.currentCitysDays}}),{getWeatherByCityName:function(e){return function(){var t=Object(C.a)(N.a.mark((function t(a,n){var c,i,r,s,l,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().citysData.apiKeys,t.next=3,k(e,c);case 3:return i=t.sent,r=i.coord,s=r.lat,l=r.lon,t.next=7,S(s,l,c);case 7:o=t.sent,a(W(e,o.daily));case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}}),P.f)((function(e){var t=e.getWeatherByCityName,a=e.cityName,i=e.currentCitysDays,r=e.match,s=(e.history,r.params.id);return Object(c.useEffect)((function(){s&&t(s)}),[]),Object(n.jsx)(n.Fragment,{children:i?Object(n.jsx)(g,{cityName:a,currentCitysDays:i}):Object(n.jsx)("div",{className:"sitypage",style:{marginTop:"10px"},children:Object(n.jsx)("img",{className:"sitypage__loading",src:m,alt:"loading"})})})})),U=function(e){var t=e.cityName,a=e.otherDays,c=e.currentCity,i=new Date(1e3*c.dt).toLocaleDateString(),r=h(new Date(1e3*c.dt)),s=Math.round(c.temp-273),l=c.weather[0].description,o=Math.round(c.feels_like-273),j=b(new Date(1e3*c.sunrise)),m=b(new Date(1e3*c.sunset)),u=p(c);return Object(n.jsx)("div",{className:"mainpage__weather-content",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(d.a.Row,{children:Object(n.jsx)(d.a.Column,{width:16,className:"mainpage__weather-header",children:Object(n.jsx)("span",{children:t})})}),Object(n.jsxs)(d.a.Row,{style:{marginTop:"20px"},children:[Object(n.jsxs)(d.a.Column,{mobile:16,tablet:6,computer:6,className:"mainpage__weather-description",children:[Object(n.jsxs)(d.a.Column,{width:16,className:"mainpage__weather-date",children:[Object(n.jsx)("span",{children:r}),Object(n.jsxs)("span",{children:[" ",i," "]})]}),Object(n.jsxs)(d.a.Column,{width:16,className:"mainpage__weather-img",children:[Object(n.jsx)("div",{className:"mainpage__weather-degrees",children:Object(n.jsxs)("span",{className:"mainpage__weather-tem",children:[s,Object(n.jsx)("span",{className:"mainpage__weather-deg",children:"\xb0"})]})}),Object(n.jsx)("span",{children:l}),Object(n.jsx)("div",{className:"mainpage__weather-icon",children:Object(n.jsx)("img",{src:"//openweathermap.org/img/wn/".concat(u,"@2x.png"),alt:"icon"})})]}),Object(n.jsxs)(d.a.Column,{width:16,className:"mainpage__weather-text",children:[Object(n.jsx)("span",{children:"\u041f\u043e \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044e"})," ",Object(n.jsxs)("span",{className:"mainpage__weather-number",children:[" ",Object(n.jsx)("span",{children:o})]})]}),Object(n.jsxs)(d.a.Column,{width:16,className:"mainpage__weather-text",children:[Object(n.jsx)("span",{children:"\u0412\u0435\u0442\u0435\u0440"})," ",Object(n.jsxs)("span",{className:"mainpage__weather-number",children:[" ",Object(n.jsx)("span",{children:c.wind_speed})," \u043c/c"]})]}),Object(n.jsxs)(d.a.Column,{width:16,className:"mainpage__weather-text",children:[Object(n.jsx)("span",{children:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"})," ",Object(n.jsxs)("span",{className:"mainpage__weather-number",children:[" ",Object(n.jsxs)("span",{children:[c.humidity,"%"]})]})]}),Object(n.jsxs)(d.a.Column,{width:16,className:"mainpage__weather-text",children:[Object(n.jsx)("span",{children:"\u0420\u0430\u0441\u0441\u0432\u0435\u0442"})," ",Object(n.jsxs)("span",{className:"mainpage__weather-number",children:[" ",j," "]})]}),Object(n.jsxs)(d.a.Column,{width:16,className:"mainpage__weather-text",children:[Object(n.jsx)("span",{children:"\u0417\u0430\u043a\u0430\u0442"})," ",Object(n.jsxs)("span",{className:"mainpage__weather-number",children:[" ",m," "]})]})]}),Object(n.jsx)(d.a.Column,{mobile:16,tablet:10,computer:10,className:"mainpage__weather-bord",children:Object(n.jsxs)(d.a,{children:[a&&a.map((function(e){return Object(n.jsx)(d.a.Column,{align:"center",mobile:3,tablet:2,computer:2,children:Object(n.jsxs)("div",{className:"mainpage__bord-clouds",children:[Object(n.jsx)("span",{children:h(new Date(1e3*e.dt))}),Object(n.jsx)("div",{className:"mainpage__bord-icon",children:Object(n.jsx)("img",{src:"//openweathermap.org/img/wn/".concat(p(e),"@2x.png"),alt:"icon"})}),Object(n.jsx)("span",{className:"mainpage__bord-degrees",children:Math.round(e.temp.day-273)})]})},e.dt)})),Object(n.jsx)(d.a.Row,{className:"mainpage__bord-second",children:Object(n.jsx)(d.a.Column,{width:16,align:"center",children:Object(n.jsx)("span",{children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430 \u043c/c"})})}),Object(n.jsx)(d.a.Row,{className:"mainpage__bord-third",children:a&&a.map((function(e){return Object(n.jsxs)(d.a.Column,{mobile:3,tablet:2,computer:2,align:"center",children:[Object(n.jsx)("span",{className:"mainpage__bord-day",children:h(new Date(1e3*e.dt))}),Object(n.jsx)("span",{className:"mainpage__bord-wind",children:Math.round(e.wind_speed)})]},e.dt)}))})]})})]})]})})},Y=function(e){return Object(n.jsx)("div",{className:"body",children:Object(n.jsxs)(P.c,{children:[Object(n.jsx)(P.a,{exact:!0,path:"/",component:function(){return Object(n.jsx)(M,{})}}),Object(n.jsx)(P.a,{path:"/city/:id",component:function(){return Object(n.jsx)(J,{})}})]})})},q=function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(l,{}),Object(n.jsx)(Y,{})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,166)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},V=a(106),Z=Object(z.c)({data:K,citysData:I}),A=Object(z.e)(Z,Object(z.a)(V.a)),G=A;window.store=A,r.a.render(Object(n.jsx)(w.a,{store:G,children:Object(n.jsx)(j.a,{children:Object(n.jsx)(q,{})})}),document.getElementById("root")),H()},88:function(e,t,a){},92:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.a9fe5c2a.chunk.js.map