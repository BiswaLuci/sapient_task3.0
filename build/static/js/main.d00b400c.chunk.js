(this.webpackJsonptask2=this.webpackJsonptask2||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(14),l=a.n(s),r=a(16),u=a(2),i=(a(23),a(17)),m=function(e){var t=e.selectedYears,a=(e.setYear,Object(i.a)(e,["selectedYears","setYear"]));return n.a.createElement("div",{className:"years"},n.a.createElement("h5",null,"launch year"),n.a.createElement("div",{className:"year-list"},["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"].map((function(e,c){return n.a.createElement("button",{className:"year"+(t.includes(e)?" selected-year":""),key:c,onClick:function(t){a.yearSelected(t,e)}},e)}))),n.a.createElement("h5",null,"sucessful launch"),n.a.createElement("div",{className:"year-list"},["true","false"].map((function(e,c){return n.a.createElement("button",{className:"year"+(t.includes(e)?" selected-year":""),key:c,onClick:function(t){a.lunchSelected(t,e)}},e)}))),n.a.createElement("h5",null,"sucessful land"),n.a.createElement("div",{className:"year-list"},["true","false"].map((function(e,c){return n.a.createElement("button",{className:"year"+(t.includes(e)?" selected-year":""),key:c,onClick:function(t){a.landSelected(t,e)}},e)}))))},o=function(e){var t=e.data;return n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:t.links.mission_patch,className:"card-image",alt:"product",title:t.title}),n.a.createElement("h3",{className:"card-title"},t.mission_name),n.a.createElement("h5",{className:"card-title"},"mission id:",t.mission_name),n.a.createElement("h5",{className:"card-title"},"launch-year:",t.launch_year),n.a.createElement("h5",{className:"card-title"},"sucessful lunch:",t.launch_success.toString()),n.a.createElement("h5",{className:"card-title"},"sucessful land:",null===t.rocket.first_stage.cores[0].land_success?"":t.rocket.first_stage.cores[0].land_success.toString()))},d=function(e){var t=e.products,a=Object(c.useState)(!0),s=Object(u.a)(a,2),l=s[0],r=s[1];return Object(c.useEffect)((function(){r(!0),setTimeout((function(){r(!1)}),1e3)}),[t]),n.a.createElement(c.Fragment,null,l?n.a.createElement("img",{src:"https://career.alliedvision.com/persis/images_avt/gicccccphy.gif",alt:"loader",className:"loader"}):n.a.createElement("div",null,n.a.createElement("span",{className:"products-length"},t.length," Product(s) found."),n.a.createElement("div",{className:"card-list"},0===t.length?n.a.createElement("p",{className:"text-center"},"Sorry, No products of the specified categories :-("):t.map((function(e){return n.a.createElement(o,{key:e.flight_number,data:e})})))))},f=function(e){var t=e.products,a=Object(c.useState)("Select"),s=Object(u.a)(a,2);s[0],s[1];return n.a.createElement("div",{className:"products"},n.a.createElement("div",{className:"products-nav"},n.a.createElement("h3",null,"Products")),n.a.createElement(d,{products:t}))},h=a(15),E=a.n(h),p=function(e){var t=Object(c.useState)([]),a=Object(u.a)(t,2),s=a[0],l=a[1],i=Object(c.useState)([]),o=Object(u.a)(i,2),d=o[0],h=o[1],p=Object(c.useState)([]),y=Object(u.a)(p,2),b=y[0],v=y[1],N=Object(c.useState)([]),g=Object(u.a)(N,2),O=g[0],j=g[1],S="https://api.spaceXdata.com/v3/launches?limit=100&launch_success=".concat(O,"&land_success=").concat(b,"&launch_year=").concat(d);Object(c.useEffect)((function(){E.a.get(S).then((function(e){l(e.data)}))}),[d,O,b]);return n.a.createElement("div",{className:"App"},n.a.createElement(m,{selectedYears:d,setYear:function(e){var t=Object(r.a)(d);if(t.includes(e)){var a=t.indexOf(e);t.splice(a,1)}else t.push(e)},yearSelected:function(e,t){return function(e){h(e)}(t)},lunchSelected:function(e,t){j(t)},landSelected:function(e,t){return function(e){v(e)}(t)}}),n.a.createElement(f,{products:s}))};l.a.hydrate(n.a.createElement(p,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d00b400c.chunk.js.map