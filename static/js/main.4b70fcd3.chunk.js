(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var i=c(0),a=c(7),n=c.n(a),l=c(11),b=c(6),o=c.n(b),s=c(8),r=c(2),j=(c(17),c(9)),I=(c(21),c(1)),d=new Intl.NumberFormat("id",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0});var m=function(e){var t=e.coin,c=e.price,a=e.total,n=e.name,l=e.isBold,b=(e.TP,e.TPwtBTC,e.pair),o=Object(i.useState)(a),s=Object(r.a)(o,2),j=s[0],m=s[1],A=Object(i.useState)(""),h=Object(r.a)(A,2),u=h[0],N=h[1];return Object(i.useEffect)((function(){N(a<j?"loss":a===j?"":"gain"),setTimeout((function(){N("")}),1e3),m(a)}),[a]),Object(I.jsxs)("tr",{className:u,children:[Object(I.jsx)("td",{children:b&&Object(I.jsxs)("a",{className:"asset-name",target:"_blank",href:"https://indodax.com/market/".concat(b),children:[t," ",n]})}),Object(I.jsx)("td",{children:c>0?Object(I.jsx)("a",{className:"asset-name",target:"_blank",href:"https://indodax.com/chart/".concat(b),children:d.format(c)}):c}),Object(I.jsx)("td",{className:l?"bold":"",children:d.format(a)})]})};function A(e){var t=e.total,c=(e.losses/(t/100)).toFixed(1);return Object(I.jsxs)("div",{style:{color:"#FFF",marginTop:5,fontSize:11},children:["Need to regain ",Object(I.jsxs)("strong",{children:[c,"%"]})," to reclaim all losses"]})}var h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDYtMjRUMjE6NDY6MjUrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDYtMjRUMjE6NDY6MjUrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTI0VDIxOjQ2OjI1KzA3OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNjZDk5ZGFiLWQzMTEtNGFmMS04ZDNiLWFhZTE3ODc3YTFmMSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJhZmQ0YjMzLTY4ZDktZTU0Yi05ODkzLWQwNzgwNWFlZGVhOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhmNGY3Y2E1LTc4NTYtNGQ4ZS05N2RkLTVlOTY5YmRjNjJlYyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGY0ZjdjYTUtNzg1Ni00ZDhlLTk3ZGQtNWU5NjliZGM2MmVjIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTI0VDIxOjQ2OjI1KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2NkOTlkYWItZDMxMS00YWYxLThkM2ItYWFlMTc4NzdhMWYxIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTI0VDIxOjQ2OjI1KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7XJuKVAAABgElEQVRo3t2aPW7CQBCFt0I0NFGo01CmS0EouQnKERAXQBwB0RL6SHTUVJFyB9KjWFQUFIBE3kpvU1hYiY3t7Lziayy8nk/+YXZm3Fe77UqgBZ7BEMzBGnyCBOxJwmNr/mbIc1plxHDrAk9gDN7BGVxycua5Y65Vu0gfvIFDgeCzOHDNfh0iHfAKjiUKpDnyGp2qRF7AtkKBNFteszSRJpjWKJBmyhhuErkHq3+UCKwYSyGRO34qL5GwZky5RBqR3Ilrd6aRR2QWoURg9leRQcQSgcFvIg9gZ0Bkx1gzRRYGJAKLLJGeIYlA75rI0qDIMi3yCE4GRU6M/UdkYlAiMAkiPo/5MCziY296kW7FaXnV+Ni7XmRkWCIwctw/WxeZu8gy3MKZsRfZCIhsHMs01kUSx5qTdZG9lIjMoyXzsst8fmX+EGVSFJmkUSaNl9lYSW11ZYoPUuUgmQKdVMlUpogt1VaQavTItN6kmqFS7WmpgQG5EQ6poRq5MafoBs++AUqiIqfg6b4fAAAAAElFTkSuQmCC",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDYtMjRUMjE6NDc6MjIrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDYtMjRUMjE6NDc6MjIrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTI0VDIxOjQ3OjIyKzA3OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRhODMzZWM5LTg2NmYtNDc0Zi1iNjA1LWIxZWMxMGJmYWIxMSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmZiYzU5MzI0LTNjYzEtYzk0ZC05ZDk2LTkyMWMzZTFiNWVjZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjlmMGY3YTZkLTZlMTAtNDhiMC1iMWJhLTQ0Mjg4YTVhOTk2MyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWYwZjdhNmQtNmUxMC00OGIwLWIxYmEtNDQyODhhNWE5OTYzIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTI0VDIxOjQ3OjIyKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGE4MzNlYzktODY2Zi00NzRmLWI2MDUtYjFlYzEwYmZhYjExIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTI0VDIxOjQ3OjIyKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RpNIeAAACAklEQVRo3t2aP0vDQBjGDwSbJpcgKIiTguCkg5NQnHTQzYKtpbVLJSVitVgrim4dpCBS/QDidxA/gfgJxK26iYuLoFuh1TySU6wWremfu3d4oCS5954fl+bee+9Yz0mA+VUuag2tJkw7avPzmaxRntzVn4YLwcpAUatah1oNwm9cwz08g2fRBm1b4cFX47W4mQw7/HJiT3/uPQ68uteaEtqgLWIgVsdB7KSZm97S742j5s03EmIhJmK3HWQjZs66r8WtVmodQL0QG32gr7aAJFL8bPBAq7YLoF7oC322DGRn0eqbzxjXnQKoF/qGB18gm0vW2NS2/tgtCCF4gJd/geQj1ig+ld2GEIIXeGoKxB1KLsNI/DQy8PZnkLl140Y2CCHP2+8gyyl+KiuEkOexMUg2ZoX6i1pNdhB4hNeGIO5EdCc7hJDn9TuIkzDTqkAIeZ6/goTy+oNqIJ7nT5BM3AwHSmpBQPAM7x8gCw6/Ug1CyPPO3nOp8f3gi6og8A4G5q7SVrSSmhAi7QcDi6T5haoQQmDA3FFWHQQMTKYM109mzEYKwYrqIGBgKNOoDgIGhpqT6iBgoANC5tUi82cn8/klMyGSSVHIJI1k0ngyCytSS10yxQdS5SAyBTpSJVMyRWxS2wqkNnrIbL2R2gwltT1N6sAAuSMcpA7VkDvmJOPBsze6EbjA6IkoLwAAAABJRU5ErkJggg==",N=(c(23),new Intl.NumberFormat("id",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0})),O={btc_idr:{asset:.05683704,name:"BTC",color:"#EBAC1C"},eth_idr:{asset:.56278735,name:"ETH",color:"#000000"},ada_idr:{asset:1006.010224,name:"ADA",color:"#1365EA"},theta_idr:{asset:177.9221,name:"THETA",color:"#5C50DD"},bnb_idr:{asset:.6151854,name:"BNB",color:"#FC5731"},cake_idr:{asset:5.7543806,name:"CAKE",color:"#5CACDD"},uni_idr:{asset:5.81466346,name:"UNI",color:"#fcc19b"},link_idr:{asset:5.37634408,name:"LINK",color:"#fcc19b"},sol_idr:{asset:1.02218295,name:"SOL",color:"#5CACDD"},usdt_idr:{asset:0,name:"USDT",color:"#8c8c8c"}};function p(e){var t="";return e>=90&&(t="65c64c"),e<90&&(t="79d23c"),e<=75&&(t="9bbe44"),e<=63&&(t="c6bf22"),e<=54&&(t="dfce60"),e<=46&&(t="d8bc59"),e<=35&&(t="e39d64"),e<=25&&(t="d17339"),e<=10&&(t="b74d34"),t}var D,Z=91879047;function g(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)({}),b=Object(r.a)(n,2),d=b[0],g=b[1],M=Object(i.useState)(0),R=Object(r.a)(M,2),G=R[0],W=R[1],S=Object(i.useState)(0),T=Object(r.a)(S,2),v=T[0],x=T[1],Y=Object(i.useState)([]),z=Object(r.a)(Y,2),L=z[0],y=z[1],B=Object(i.useState)(0),E=Object(r.a)(B,2),k=E[0],w=E[1];Object(i.useEffect)((function(){clearInterval(D);var e=function(){var t=Object(s.a)(o.a.mark((function t(){var c,i,n,l,b,s,r,j,I,d,m,A,h,u,p,M,R,G;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://indodax.com/api/summaries",{cache:"no-cache"});case 3:return c=t.sent,t.next=6,c.json();case 6:for(i=t.sent,n=i.tickers,l=0,b={},s=Object.keys(O),r=0;r<s.length;r++)j=s[r],I=O[j].asset,d=O[j].name,m=O[j].color,A=n[j].last,h=I*Number(A),"BTC"===d&&x(h),b[j]={pair:j.replace("_","").toUpperCase(),color:m,name:d,coin:I,price:A,total:h},l+=h;u=((l-Z)/918790.47).toFixed(1),a(l),g(b),W(u),document.title="My Gain:  ".concat(N.format(l-Z)," (").concat(u,"%)"),D=setTimeout((function(){e()}),3e3),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(0),console.log("error",t.t0),e();case 24:return t.prev=24,t.next=27,fetch("https://api.alternative.me/fng/?limit=2",{cache:"no-cache"});case 27:return p=t.sent,t.next=30,p.json();case 30:M=t.sent,y(M.data),t.next=37;break;case 34:t.prev=34,t.t1=t.catch(24),console.log("error",t.t1);case 37:return t.prev=37,t.next=40,fetch("https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmRyb2JyYXllbkBnbWFpbC5jb20iLCJpYXQiOjE2NDI4ODQyNTksImV4cCI6Nzk1MDA4NDI1OX0.ZYR1fjAYGGkUgW1DpcUxYbB4cQ9ff9jHSJCWg5YShAc&exchange=binance&symbol=BTC/USDT&interval=1d");case 40:return R=t.sent,t.next=43,R.json();case 43:(G=t.sent).value&&w(G.value),t.next=50;break;case 47:t.prev=47,t.t2=t.catch(37),console.log("error",t.t2);case 50:case"end":return t.stop()}}),t,null,[[0,20],[24,34],[37,47]])})));return function(){return t.apply(this,arguments)}}();e()}),[]);var F=c<Z,J=c-Z;Object(i.useEffect)((function(){document.getElementById("favicon").href=F?h:u}),[F]);var U=(J/(c/100)).toFixed(1),Q=(J/((c-v)/100)).toFixed(1);console.log(L);var C=null===L||void 0===L?void 0:L[0];return Object(I.jsxs)("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.8)",height:"100%"},children:[Object(I.jsx)("div",{className:"table-responsive table-striped",children:Object(I.jsxs)("table",{className:"table table table-dark table-striped",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Asset"}),Object(I.jsx)("th",{children:"Price"}),Object(I.jsx)("th",{children:"Total"})]})}),Object(I.jsxs)("tbody",{children:[Object.keys(d).map((function(e){var t=d[e],c=t.coin,i=t.price,a=t.total,n=t.name,l=t.pair;return Object(I.jsx)(m,{pair:l,coin:c,price:i,name:n,total:a,isLoss:F,TPwtBTC:Q,TP:U},e)})),Object(I.jsx)(m,{price:"Total:",total:c,isBold:!0})]})]})}),Object(I.jsx)("div",{style:{padding:20},children:c>0&&Object(I.jsxs)("div",{className:"alert ".concat(F?"alert-danger":"alert-success"),children:["Gain"," ",Object(I.jsxs)("strong",{children:[N.format(J)," (",G,"%)"]}),F&&Object(I.jsx)(A,{total:c,losses:Math.abs(J)})]})}),Object(I.jsx)("div",{style:{width:500,maxWidth:"100%"},className:"cart",children:Object(I.jsx)(j.a,{width:"100%",height:"300px",chartType:"PieChart",loader:Object(I.jsx)("div",{}),data:[["Asset","Value"]].concat(Object(l.a)(Object.keys(d).map((function(e){var t=d[e],c=(t.coin,t.price,t.total),i=t.name;t.color;return[i,c]})))),rootProps:{"data-testid":"1"},options:{backgroundColor:"333333",legend:{textStyle:{color:"white"}}}})}),C&&Object(I.jsx)("div",{style:{padding:20},children:Object(I.jsxs)("div",{className:"alert",style:{backgroundColor:"#".concat(p(+(null===C||void 0===C?void 0:C.value)))},children:[Object(I.jsx)("strong",{children:"Fear Index"}),": ",null===C||void 0===C?void 0:C.value_classification," ",Object(I.jsx)("strong",{children:+(null===C||void 0===C?void 0:C.value)})]})}),k>0&&Object(I.jsxs)("div",{style:{padding:20,paddingTop:0,marginTop:-15,color:"white"},children:["Daily RSI : ",Object(I.jsx)("strong",{children:k.toFixed(2)})]}),Object(I.jsxs)("div",{style:{display:"none"},children:[Object(I.jsx)("img",{src:h}),Object(I.jsx)("img",{src:u})]})]})}n.a.render(Object(I.jsx)(g,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4b70fcd3.chunk.js.map