(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(t,e,n){t.exports=n(39)},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),c=(n(28),n(7)),u=n(8),l=n(10),d=n(9),s=n(11),f=n(20),h=n(6),m=n(2),v=function(t,e,n,a){var r=m.i(t),o=window.outerWidth,i=window.outerHeight,c=m.f(e).force("link",m.d(n).distance(o/20).id(function(t){return t.id})).force("charge",m.e()).force("center",m.c(.6*o,i/2)),u=function(t){return m.a().on("start",function(e){m.b.active||t.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}).on("drag",function(t){t.fx=m.b.x,t.fy=m.b.y}).on("end",function(e){m.b.active||t.alphaTarget(0),e.fx=null,e.fy=null})},l=r.append("g").attr("stroke","#fff").attr("stroke-width",1.5).selectAll("circle").data(e).join("circle").attr("r",10).style("fill","#5B8BDA").call(u(c)),d=r.append("g").attr("stroke","#999").selectAll("text").data(e).join("text").text(function(t){return t.id}),s=r.append("g").attr("stroke","#999").attr("stroke-opacity",.6).selectAll("line").data(n).join("line").attr("stroke-width",function(t){return Math.sqrt(t.value)});c.on("tick",function(){a&&d.attr("x",function(t){return t.x+10}).attr("dy",function(t){return t.y}),l.attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y}),s.attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y})});m.g(function(){if(e.length<15){var t=Math.random().toString(),r=Math.floor(Math.random()*e.length)-1;-1===r&&(r=0);var o=Math.floor(Math.random()*e.length)-1;-1===o&&(o=0),e.push({id:t,group:"1"}),n.push({source:t,value:"1",target:e[r].id}),n.push({source:e[o].id,value:"1",target:e[r].id}),(l=l.data(e,function(t){return t.id})).exit().remove(),l=l.enter().append("circle").attr("r",10).style("fill","#5B8BDA").merge(l).call(u(c)),(s=s.data(n,function(t){return t.source.id+"-"+t.target.id})).exit().remove(),s=s.enter().append("line").merge(s),a&&((d=d.data(e,function(t){return t.id})).exit().remove(),d=d.enter().append("text").text(function(t){return t.id}).merge(d).call(u(c))),c.nodes(e),c.force("link").links(n),c.alpha(1).restart()}},2e3,m.h())},g=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).componentDidMount=function(){var t=document.getElementById("directed-background");v(t,[{id:"a"},{id:"b"},{id:"c"},{id:"d"}],[{source:"a",value:1,target:"b"},{source:"a",value:1,target:"c"},{source:"d",value:1,target:"b"}],!1)},n}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("svg",{id:"directed-background",width:"100vw",height:"100vh"})}}]),e}(a.Component),p=(n(29),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(d.a)(e).call(this,t))).onHover=function(t){n.setState({text:"Drag on the nodes"})},n.mouseOut=function(t){n.setState({text:"Data visualization learning tool"})},n.state={text:"Data visualization learning tool"},n}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"landing"},r.a.createElement("h1",null,"Graphalizer",r.a.createElement("span",{className:"loader__dot"},"."),r.a.createElement("span",{className:"loader__dot"},"."),r.a.createElement("span",{className:"loader__dot"},".")),r.a.createElement("h2",{onMouseEnter:this.onHover,onMouseLeave:this.mouseOut},this.state.text),r.a.createElement("button",null,"Get Started")),r.a.createElement(g,null))}}]),e}(a.Component)),b=(n(30),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(d.a)(e).call(this,t))).state={},n}return Object(s.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){document.title="Timothy Li- Interactive Media"}},{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(h.a,{path:"/",exact:!0,component:p})))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.a9089514.chunk.js.map