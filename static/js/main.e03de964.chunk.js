(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,a){},44:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(16),r=a.n(c),i=a(4),s=a(10),o=(a(42),a(0));var l=function(){return Object(o.jsx)(s.b,{to:"/home",children:Object(o.jsx)("button",{className:"button",children:"INGRESAR"})})},u=a.p+"static/media/wallpaper1.6e44791f.jpg",j=a.p+"static/media/wallpaper2.1a534748.jpg",d=a.p+"static/media/wallpaper3.7be2afb3.jpg",b=a.p+"static/media/wallpaper4.60239b30.jpg",p=a.p+"static/media/wallpaper5.87599ffb.jpg",O=a.p+"static/media/phonewallpaper1.b991af9b.jpg",g=a.p+"static/media/phonewallpaper2.227b7a86.jpg",h=a.p+"static/media/phonewallpaper3.962a80a3.png",m=a.p+"static/media/phonewallpaper4.51f6cbb2.jpg",x=a.p+"static/media/phonewallpaper5.5496953b.jpg",v=(a(44),window.matchMedia("(max-width: 425px)"));var f=function(){return Object(o.jsxs)("div",{className:"images",children:[Object(o.jsx)("img",{className:"image1",src:v.matches?O:u,alt:"Dark Souls 3"}),Object(o.jsx)("img",{className:"image2",src:v.matches?g:j,alt:"GTA V"}),Object(o.jsx)("img",{className:"image3",src:v.matches?h:d,alt:"The Last Of Us: Part 2"}),Object(o.jsx)("img",{className:"image4",src:v.matches?m:b,alt:"Super Mario Odyssey"}),Object(o.jsx)("img",{className:"image5",src:v.matches?x:p,alt:"The Binding of Isaac Rebirth"})]})};var y=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(f,{})]})},S=a(12),E=a(7),C=a.n(E),k=a(11),A=a.n(k),P="SEARCH_REQUEST",L="SEARCH_SUCCESS",N="SEARCH_FAIL",w="SET_GAMES_ON_PAGE";function _(e,t){switch(e){case 1:return{type:w,payload:t.slice(0,15)};case 2:return{type:w,payload:t.slice(15,30)};case 3:return{type:w,payload:t.slice(30,45)};case 4:return{type:w,payload:t.slice(45,60)};case 5:return{type:w,payload:t.slice(60,75)};case 6:return{type:w,payload:t.slice(75,90)};default:return}}var G=a.p+"static/media/default-placeholder.6988980f.png";a(64);var R=function(e){var t,a=e.props;return Object(o.jsx)(s.b,{to:"/home/game/".concat(a.id),children:Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("h4",{children:a.name.replace(/-/g," ")}),Object(o.jsx)("img",{src:null!==(t=a.background_image)&&void 0!==t?t:G,alt:""}),Object(o.jsx)("p",{children:a.genres.map((function(e,t){return t===a.genres.length-1?e.name+".":e.name+", "}))})]})})};a(65);var D=function(){var e=Object(i.c)((function(e){return e.games})).games,t=Object(i.c)((function(e){return e.gamesOnPage})),a=t.gamesOnPage,c=t.isLoading,r=Object(i.b)();return n.useEffect((function(){r(_(1,e))}),[r,e]),c?Object(o.jsx)("div",{className:"loading"}):Object(o.jsx)("div",{className:"games-list",children:a.map((function(e){return Object(o.jsx)(R,{props:e},e.id)}))})};a(66),a(67);var T=function(){var e=Object(i.c)((function(e){return e.games})).games,t=Object(i.c)((function(e){return e.gamesOnPage})),a=t.gamesOnPage,n=t.isLoading,c=Object(i.c)((function(e){return e.filteredGames})).filteredGames,r=Object(i.b)();return n?Object(o.jsx)("div",{}):Object(o.jsx)("div",{className:15===a.length||c.length>15?"pagination":"nopagination",children:[1,2,3,4,5,6].map((function(t){return Object(o.jsx)("button",{onClick:function(){return function(t){c.length?r(_(t,c)):r(_(t,e))}(t)},children:t},t)}))})},F=a(5),M="RESET",I="SET_FILTERED_GAMES";function B(){return{type:M}}a(68);var U=function(){var e=n.useState(!1),t=Object(F.a)(e,2),a=t[0],c=t[1],r=n.useState(!1),s=Object(F.a)(r,2),l=s[0],u=s[1],j=n.useState("Seleccionar genero"),d=Object(F.a)(j,2),b=d[0],p=d[1],O=n.useState("Seleccionar orden alfab\xe9tico"),g=Object(F.a)(O,2),h=g[0],m=g[1],x=n.useState("Seleccionar orden rating"),v=Object(F.a)(x,2),f=v[0],y=v[1],S=Object(i.c)((function(e){return e.games})),E=S.games,C=S.isLoading,k=Object(i.c)((function(e){return e.filteredGames})).filteredGames,A=Object(i.b)();function P(e){var t=e.target.options.selectedIndex;"name"===e.target.name?(y("Seleccionar orden rating"),"ASC"===e.target.options[t].value?(m("ASC"),k.length?(k.sort((function(e,t){return e.name.localeCompare(t.name)})),A(_(1,k))):(E.sort((function(e,t){return e.name.localeCompare(t.name)})),A(_(1,E)))):"DESC"===e.target.options[t].value?(m("DESC"),k.length?(k.sort((function(e,t){return t.name.localeCompare(e.name)})),A(_(1,k))):(E.sort((function(e,t){return t.name.localeCompare(e.name)})),A(_(1,E)))):(m("Seleccionar orden alfab\xe9tico"),p("Seleccionar genero"),E.sort((function(e,t){var a=e.hasOwnProperty("added"),n=t.hasOwnProperty("added");return a&&n?t.added-e.added:a?1:n?-1:0})),A(B()),A(_(1,E)))):"rating"===e.target.name&&(m("Seleccionar orden alfab\xe9tico"),"ASC"===e.target.options[t].value?(y("ASC"),k.length?(k.sort((function(e,t){return e.rating-t.rating})),A(_(1,k))):(E.sort((function(e,t){return e.rating-t.rating})),A(_(1,E)))):"DESC"===e.target.options[t].value?(y("DESC"),k.length?(k.sort((function(e,t){return t.rating-e.rating})),A(_(1,k))):(E.sort((function(e,t){return t.rating-e.rating})),A(_(1,E)))):(y("Seleccionar orden rating"),p("Seleccionar genero"),E.sort((function(e,t){var a=e.hasOwnProperty("added"),n=t.hasOwnProperty("added");return a&&n?t.added-e.added:a?1:n?-1:0})),A(B()),A(_(1,E))))}return C?Object(o.jsx)("div",{}):Object(o.jsx)("nav",{className:"sidebar",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("label",{htmlFor:"creados",children:"Filtrar creados"}),Object(o.jsx)("input",{type:"checkbox",name:"creados",id:"creados",checked:a,onChange:function(e){if(c(!a),e.target.checked){var t=E.filter((function(e){return"number"!==typeof e.id}));if(!t.length)return c(!1),alert("No tenes ning\xfan juego creado");A(_(1,t))}else A(_(1,E))}})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("label",{htmlFor:"creados",children:"Filtrar solo API"}),Object(o.jsx)("input",{type:"checkbox",name:"creados",id:"creados",checked:l,onChange:function(e){if(u(!l),e.target.checked){var t=E.filter((function(e){return"number"===typeof e.id}));A(_(1,t))}else A(_(1,E))}})]}),Object(o.jsxs)("li",{children:["Genero:",Object(o.jsxs)("select",{name:"genres",id:"genres-select",value:b,onChange:function(e){var t=e.target.options.selectedIndex;if(0===t)p("Seleccionar genero"),y("Seleccionar orden rating"),m("Seleccionar orden alfab\xe9tico"),c(!1),E.sort((function(e,t){var a=e.hasOwnProperty("added"),n=t.hasOwnProperty("added");return a&&n?t.added-e.added:a?1:n?-1:0})),A(B()),A(_(1,E));else{p(e.target.options[t].value);var a=E.filter((function(a){return a.genres.some((function(a){return a.name===e.target.options[t].value}))}));A(function(e){return{type:I,payload:e}}(a)),A(_(1,a))}},children:[Object(o.jsx)("option",{value:"",children:"Seleccionar genero"}),Object(o.jsx)("option",{value:"Action",children:"Action"}),Object(o.jsx)("option",{value:"Indie",children:"Indie"}),Object(o.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(o.jsx)("option",{value:"RPG",children:"RPG"}),Object(o.jsx)("option",{value:"Strategy",children:"Strategy"}),Object(o.jsx)("option",{value:"Shooter",children:"Shooter"}),Object(o.jsx)("option",{value:"Casual",children:"Casual"}),Object(o.jsx)("option",{value:"Simulation",children:"Simulation"}),Object(o.jsx)("option",{value:"Puzzle",children:"Puzzle"}),Object(o.jsx)("option",{value:"Arcade",children:"Arcade"}),Object(o.jsx)("option",{value:"Platformer",children:"Platformer"}),Object(o.jsx)("option",{value:"Racing",children:"Racing"}),Object(o.jsx)("option",{value:"Massively Multiplayer",children:"Massively Multiplayer"}),Object(o.jsx)("option",{value:"Sports",children:"Sports"}),Object(o.jsx)("option",{value:"Fighting",children:"Fighting"}),Object(o.jsx)("option",{value:"Board Games",children:"Board Games"}),Object(o.jsx)("option",{value:"Family",children:"Family"}),Object(o.jsx)("option",{value:"Educational",children:"Educational"}),Object(o.jsx)("option",{value:"Card",children:"Card"})]})]}),Object(o.jsxs)("li",{children:["Nombre:",Object(o.jsxs)("select",{name:"name",id:"name-select",value:h,onChange:P,children:[Object(o.jsx)("option",{value:"",children:"Seleccionar orden alfab\xe9tico"}),Object(o.jsx)("option",{value:"ASC",children:"Ascendente"}),Object(o.jsx)("option",{value:"DESC",children:"Descendente"})]})]}),Object(o.jsxs)("li",{children:["Rating:",Object(o.jsxs)("select",{name:"rating",id:"rating-select",value:f,onChange:P,children:[Object(o.jsx)("option",{value:"",children:"Seleccionar orden rating"}),Object(o.jsx)("option",{value:"DESC",children:"Mejor votados"}),Object(o.jsx)("option",{value:"ASC",children:"Peor votados"})]})]})]})})};var z=function(){var e=Object(i.c)((function(e){return e.games})).isLoading;return Object(o.jsxs)("div",{children:[Object(o.jsx)(T,{}),Object(o.jsx)(U,{}),Object(o.jsx)("div",{className:"home",children:e?Object(o.jsx)("div",{className:"loading"}):Object(o.jsx)(D,{})})]})},H=a(3);a(69);var W=function(){var e=n.useState(""),t=Object(F.a)(e,2),a=t[0],c=t[1],r=Object(i.b)(),s=Object(H.f)();return Object(o.jsxs)("form",{className:"search-bar",onSubmit:function(e){var t;e.preventDefault(),r((t=a,function(){var e=Object(S.a)(C.a.mark((function e(a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:P}),e.prev=1,e.next=4,A.a.get("/videogames?name=".concat(t));case 4:n=e.sent,a({type:L,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:N,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())),document.getElementsByClassName("pagination")[0]&&(document.getElementsByClassName("pagination")[0].className="nopagination"),s("/home"),c("")},children:[Object(o.jsx)("input",{type:"search",placeholder:"Buscar videojuegos...",name:"name",value:a,onChange:function(e){return c(e.target.value)},required:!0}),a&&Object(o.jsx)("button",{children:"Buscar"}),!a&&Object(o.jsx)("button",{disabled:!0,children:"Buscar"})]})};a(70),a(71);var Q=function(){var e=Object(i.c)((function(e){return e.games})).games,t=Object(i.c)((function(e){return e.filteredGames})).filteredGames,a=Object(i.b)();return Object(o.jsxs)("ul",{className:"nav-buttons",children:[Object(o.jsx)(s.b,{to:"/home",onClick:function(){t.length?a(_(1,t)):a(_(1,e)),document.getElementsByClassName("nopagination")[0]&&(document.getElementsByClassName("nopagination")[0].className="pagination")},children:Object(o.jsx)("li",{id:"home",children:"Home"})}),Object(o.jsx)(s.b,{to:"/home/add",children:Object(o.jsx)("li",{id:"crear",children:"Crear"})})]})};var V=function(){return Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsx)(Q,{}),Object(o.jsx)(W,{})]})},X="GAME_DETAIL_REQUEST",q="GAME_DETAIL_SUCCESS",J="GAME_DETAIL_FAIL",K="RESET";a(72);var Y=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.games})).games,a=Object(i.c)((function(e){return e.gameDetail})),c=a.gameDetail,r=a.isLoading,s=Object(H.g)().id,l=c.background_image,u=c.description,j=c.genres,d=c.name,b=c.platforms,p=c.rating,O=c.released;return p||(p=""),O||(O="A\xfan no hay fecha"),n.useEffect((function(){return e(function(e){return function(){var t=Object(S.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:X}),t.prev=1,t.next=4,A.a.get("/videogame/".concat(e));case 4:n=t.sent,a({type:q,payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:J,payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(s)),function(){e({type:K})}}),[e,s]),n.useEffect((function(){e(B()),t.sort((function(e,t){var a=e.hasOwnProperty("added"),n=t.hasOwnProperty("added");return a&&n?t.added-e.added:a?1:n?-1:0}))}),[e,t]),r?Object(o.jsx)("div",{className:"loading"}):Object(o.jsxs)("div",{className:"detail-container",children:[Object(o.jsx)("div",{className:"detail-title",children:Object(o.jsxs)("p",{children:[null===d||void 0===d?void 0:d.replace(/-/g," ")," (","".concat(p,"\u2b50"),")"]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["Fecha de lanzamiento: ",O]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["Genero(s):",null===j||void 0===j?void 0:j.map((function(e,t){return t===j.length-1?e.name:" "+e.name+", "}))]})}),Array.isArray(b)?Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["Plataforma(s):",b.map((function(e,t){return t===b.length-1?e.platform.name:" "+e.platform.name+", "}))]})}):Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["Plataforma(s): ",b]})}),Object(o.jsx)("div",{className:"detail-description",dangerouslySetInnerHTML:{__html:u}}),Object(o.jsx)("div",{className:"detail-image-container",children:l?Object(o.jsx)("img",{className:"detail-image",src:l,alt:""}):Object(o.jsx)("img",{className:"detail-image-default",src:G,alt:""})})]})},Z="ALL_GAMES_REQUEST",$="ALL_GAMES_SUCCESS",ee="ALL_GAMES_FAIL";function te(){return function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:Z}),e.prev=1,e.next=4,A.a.get("/videogames");case 4:a=e.sent,t({type:$,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:ee,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}var ae=a(17),ne=a(2),ce=a(22);a(73);var re=function(){var e=n.useState({name:"",description:"",released:"",rating:"",background_image:""}),t=Object(F.a)(e,2),a=t[0],c=t[1],r=n.useState([]),s=Object(F.a)(r,2),l=s[0],u=s[1],j=n.useState([]),d=Object(F.a)(j,2),b=d[0],p=d[1],O=n.useState(!1),g=Object(F.a)(O,2),h=g[0],m=g[1],x=Object(H.f)(),v=Object(i.b)();function f(){return(f=Object(S.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,l.length){e.next=4;break}throw new Error("Deb\xe9s seleccionar al menos una plataforma");case 4:return m(!0),e.next=7,A.a.post("/videogame",Object(ne.a)(Object(ne.a)({},a),{},{platforms:l,genres:b}));case 7:n=e.sent,m(!1),v(te()),alert(n.data),x(0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function y(e){c(Object(ne.a)(Object(ne.a)({},a),{},Object(ae.a)({},e.target.name,e.target.value)))}return Object(o.jsxs)("div",{className:"add-game",children:[Object(o.jsx)("h1",{children:"A\xf1adir un juego"}),Object(o.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(o.jsxs)("label",{children:["Nombre:",Object(o.jsx)("input",{type:"text",required:!0,name:"name",value:a.name,onChange:y,placeholder:"Mi primer juego"})]}),Object(o.jsxs)("label",{children:["Descripci\xf3n:",Object(o.jsx)("textarea",{required:!0,name:"description",value:a.description,onChange:y,placeholder:"Escrib\xed una descripci\xf3n sobre tu juego..."})]}),Object(o.jsxs)("label",{children:["Fecha de Lanzamiento:",Object(o.jsx)("input",{type:"date",name:"released",value:a.released,onChange:y})]}),Object(o.jsxs)("label",{children:["Rating:",Object(o.jsx)("input",{type:"number",name:"rating",value:a.rating,onChange:y,placeholder:"3.50",step:"0.01",min:"0",max:"5"})]}),Object(o.jsxs)("label",{children:["Imagen:",Object(o.jsx)("input",{type:"url",name:"background_image",value:a.background_image,onChange:y})]}),Object(o.jsxs)("fieldset",{onChange:function(e){l.includes(e.target.value)?u(l.filter((function(t){return t!==e.target.value}))):u([].concat(Object(ce.a)(l),[e.target.value]))},children:[Object(o.jsx)("legend",{children:"Plataformas"}),Object(o.jsx)("input",{type:"checkbox",value:"PC"}),"PC",Object(o.jsx)("input",{type:"checkbox",value:"Xbox 360"}),"Xbox 360",Object(o.jsx)("input",{type:"checkbox",value:"Xbox One"}),"Xbox One",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 1"}),"PS1",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 2"}),"PS2",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 3"}),"PS3",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 4"}),"PS4",Object(o.jsx)("input",{type:"checkbox",value:"PlayStation 5"}),"PS5",Object(o.jsx)("input",{type:"checkbox",value:"Nintendo Wii"}),"Nintendo Wii",Object(o.jsx)("input",{type:"checkbox",value:"Nintendo Wii U"}),"Nintendo Wii U",Object(o.jsx)("input",{type:"checkbox",value:"Nintendo Switch"}),"Nintendo Switch",Object(o.jsx)("input",{type:"checkbox",value:"Mobile"}),"Mobile"]}),Object(o.jsxs)("fieldset",{onChange:function(e){if(b.length>3&&e.target.checked)return alert("No pod\xe9s seleccionar mas de 4"),void(e.target.checked=!1);b.includes(e.target.value)?p(b.filter((function(t){return t!==e.target.value}))):p([].concat(Object(ce.a)(b),[e.target.value]))},children:[Object(o.jsx)("legend",{children:"Generos (m\xe1ximo 4)"}),Object(o.jsx)("input",{type:"checkbox",value:"1"}),"Action",Object(o.jsx)("input",{type:"checkbox",value:"2"}),"Indie",Object(o.jsx)("input",{type:"checkbox",value:"3"}),"Adventure",Object(o.jsx)("input",{type:"checkbox",value:"4"}),"RPG",Object(o.jsx)("input",{type:"checkbox",value:"5"}),"Strategy",Object(o.jsx)("input",{type:"checkbox",value:"6"}),"Shooter",Object(o.jsx)("input",{type:"checkbox",value:"7"}),"Casual",Object(o.jsx)("input",{type:"checkbox",value:"8"}),"Simulation",Object(o.jsx)("input",{type:"checkbox",value:"9"}),"Puzzle",Object(o.jsx)("input",{type:"checkbox",value:"10"}),"Arcade",Object(o.jsx)("input",{type:"checkbox",value:"11"}),"Platformer",Object(o.jsx)("input",{type:"checkbox",value:"12"}),"Racing",Object(o.jsx)("input",{type:"checkbox",value:"13"}),"Massively Multiplayer",Object(o.jsx)("input",{type:"checkbox",value:"14"}),"Sports",Object(o.jsx)("input",{type:"checkbox",value:"15"}),"Fighting",Object(o.jsx)("input",{type:"checkbox",value:"16"}),"Family",Object(o.jsx)("input",{type:"checkbox",value:"17"}),"Board Games",Object(o.jsx)("input",{type:"checkbox",value:"18"}),"Educational",Object(o.jsx)("input",{type:"checkbox",value:"19"}),"Card"]}),!h&&Object(o.jsx)("button",{children:"A\xf1adir Juego"}),h&&Object(o.jsx)("button",{disabled:!0,children:"Loading..."})]})]})},ie="ALL_GENRES_REQUEST",se="ALL_GENRES_SUCCESS",oe="ALL_GENRES_FAIL";var le=function(){var e=Object(i.b)();return Object(n.useEffect)((function(){e(te()),e(function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:ie}),e.prev=1,e.next=4,A.a.get("/genres");case 4:a=e.sent,t({type:se,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:oe,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(H.c,{children:[Object(o.jsx)(H.a,{path:"/",element:Object(o.jsx)(y,{})}),Object(o.jsx)(H.a,{path:"/home",element:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(V,{}),Object(o.jsx)(z,{})]})}),Object(o.jsx)(H.a,{path:"/home/add",element:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(V,{}),Object(o.jsx)(re,{})]})}),Object(o.jsx)(H.a,{path:"/home/game/:id",element:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(V,{}),Object(o.jsx)(Y,{})]})})]})})},ue=(a(74),a(14)),je=a(32),de={isLoading:!1,games:[],error:void 0};var be={isLoading:!1,genres:[],error:void 0};var pe={isLoading:!1,gameDetail:{},error:void 0};var Oe={isLoading:!1,gamesOnPage:[],error:void 0};var ge={filteredGames:[]};var he=Object(ue.combineReducers)({games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!0});case $:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,games:t.payload});case ee:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},genres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!0});case se:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,genres:t.payload});case oe:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},gameDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!0});case q:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,gameDetail:Object(ne.a)(Object(ne.a)({},e.gameDetail),t.payload)});case J:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,error:t.payload});case K:return Object(ne.a)(Object(ne.a)({},e),{},{gameDetail:{}});default:return e}},gamesOnPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!0});case L:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,gamesOnPage:t.payload});case N:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,error:t.payload});case w:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,gamesOnPage:t.payload});default:return e}},filteredGames:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(ne.a)(Object(ne.a)({},e),{},{filteredGames:t.payload});case M:return Object(ne.a)(Object(ne.a)({},e),{},{filteredGames:[]});default:return e}}}),me=a(33),xe=Object(ue.createStore)(he,Object(je.composeWithDevTools)(Object(ue.applyMiddleware)(me.a))),ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},fe=a(34);a.n(fe).a.config(),A.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"/SPA-Videojuegos",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001",r.a.render(Object(o.jsx)(n.StrictMode,{children:Object(o.jsx)(i.a,{store:xe,children:Object(o.jsx)(s.a,{basename:"/SPA-Videojuegos",children:Object(o.jsx)(le,{})})})}),document.getElementById("root")),ve()}},[[78,1,2]]]);
//# sourceMappingURL=main.e03de964.chunk.js.map