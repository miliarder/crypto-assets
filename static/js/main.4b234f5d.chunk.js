(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c(10),n=c.n(i),s=c(15),l=c(8),o=c.n(l),r=c(11),b=c(12),j=c(2),m=(c(21),c(13)),I=(c(25),c(1)),d=new Intl.NumberFormat("id",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0});var A=function(e){var t=e.coin,c=e.price,i=e.total,n=e.name,s=e.isBold,l=(e.TP,e.TPwtBTC,e.pair),o=Object(a.useState)(i),r=Object(j.a)(o,2),b=r[0],m=r[1],A=Object(a.useState)(""),h=Object(j.a)(A,2),u=h[0],p=h[1];return Object(a.useEffect)((function(){p(i<b?"loss":i===b?"":"gain"),setTimeout((function(){p("")}),1e3),m(i)}),[i]),Object(I.jsxs)("tr",{className:u,children:[Object(I.jsx)("td",{children:l&&Object(I.jsxs)("a",{className:"asset-name",target:"_blank",href:"https://indodax.com/market/".concat(l),children:[t," ",n]})}),Object(I.jsx)("td",{children:c>0?Object(I.jsx)("a",{className:"asset-name",target:"_blank",href:"https://indodax.com/chart/".concat(l),children:d.format(c)}):c}),Object(I.jsx)("td",{className:s?"bold":"",children:d.format(i)})]})};function h(e){var t=e.total,c=(e.losses/(t/100)).toFixed(1);return Object(I.jsxs)("div",{style:{color:"#FFF",marginTop:5,fontSize:11},children:["Need to regain ",Object(I.jsxs)("strong",{children:[c,"%"]})," to reclaim all losses"]})}var u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDYtMjRUMjE6NDY6MjUrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDYtMjRUMjE6NDY6MjUrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTI0VDIxOjQ2OjI1KzA3OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNjZDk5ZGFiLWQzMTEtNGFmMS04ZDNiLWFhZTE3ODc3YTFmMSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJhZmQ0YjMzLTY4ZDktZTU0Yi05ODkzLWQwNzgwNWFlZGVhOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhmNGY3Y2E1LTc4NTYtNGQ4ZS05N2RkLTVlOTY5YmRjNjJlYyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGY0ZjdjYTUtNzg1Ni00ZDhlLTk3ZGQtNWU5NjliZGM2MmVjIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTI0VDIxOjQ2OjI1KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2NkOTlkYWItZDMxMS00YWYxLThkM2ItYWFlMTc4NzdhMWYxIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTI0VDIxOjQ2OjI1KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7XJuKVAAABgElEQVRo3t2aPW7CQBCFt0I0NFGo01CmS0EouQnKERAXQBwB0RL6SHTUVJFyB9KjWFQUFIBE3kpvU1hYiY3t7Lziayy8nk/+YXZm3Fe77UqgBZ7BEMzBGnyCBOxJwmNr/mbIc1plxHDrAk9gDN7BGVxycua5Y65Vu0gfvIFDgeCzOHDNfh0iHfAKjiUKpDnyGp2qRF7AtkKBNFteszSRJpjWKJBmyhhuErkHq3+UCKwYSyGRO34qL5GwZky5RBqR3Ilrd6aRR2QWoURg9leRQcQSgcFvIg9gZ0Bkx1gzRRYGJAKLLJGeIYlA75rI0qDIMi3yCE4GRU6M/UdkYlAiMAkiPo/5MCziY296kW7FaXnV+Ni7XmRkWCIwctw/WxeZu8gy3MKZsRfZCIhsHMs01kUSx5qTdZG9lIjMoyXzsst8fmX+EGVSFJmkUSaNl9lYSW11ZYoPUuUgmQKdVMlUpogt1VaQavTItN6kmqFS7WmpgQG5EQ6poRq5MafoBs++AUqiIqfg6b4fAAAAAElFTkSuQmCC",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDYtMjRUMjE6NDc6MjIrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDYtMjRUMjE6NDc6MjIrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTI0VDIxOjQ3OjIyKzA3OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRhODMzZWM5LTg2NmYtNDc0Zi1iNjA1LWIxZWMxMGJmYWIxMSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmZiYzU5MzI0LTNjYzEtYzk0ZC05ZDk2LTkyMWMzZTFiNWVjZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjlmMGY3YTZkLTZlMTAtNDhiMC1iMWJhLTQ0Mjg4YTVhOTk2MyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWYwZjdhNmQtNmUxMC00OGIwLWIxYmEtNDQyODhhNWE5OTYzIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTI0VDIxOjQ3OjIyKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGE4MzNlYzktODY2Zi00NzRmLWI2MDUtYjFlYzEwYmZhYjExIiBzdEV2dDp3aGVuPSIyMDIxLTA2LTI0VDIxOjQ3OjIyKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RpNIeAAACAklEQVRo3t2aP0vDQBjGDwSbJpcgKIiTguCkg5NQnHTQzYKtpbVLJSVitVgrim4dpCBS/QDidxA/gfgJxK26iYuLoFuh1TySU6wWremfu3d4oCS5954fl+bee+9Yz0mA+VUuag2tJkw7avPzmaxRntzVn4YLwcpAUatah1oNwm9cwz08g2fRBm1b4cFX47W4mQw7/HJiT3/uPQ68uteaEtqgLWIgVsdB7KSZm97S742j5s03EmIhJmK3HWQjZs66r8WtVmodQL0QG32gr7aAJFL8bPBAq7YLoF7oC322DGRn0eqbzxjXnQKoF/qGB18gm0vW2NS2/tgtCCF4gJd/geQj1ig+ld2GEIIXeGoKxB1KLsNI/DQy8PZnkLl140Y2CCHP2+8gyyl+KiuEkOexMUg2ZoX6i1pNdhB4hNeGIO5EdCc7hJDn9TuIkzDTqkAIeZ6/goTy+oNqIJ7nT5BM3AwHSmpBQPAM7x8gCw6/Ug1CyPPO3nOp8f3gi6og8A4G5q7SVrSSmhAi7QcDi6T5haoQQmDA3FFWHQQMTKYM109mzEYKwYrqIGBgKNOoDgIGhpqT6iBgoANC5tUi82cn8/klMyGSSVHIJI1k0ngyCytSS10yxQdS5SAyBTpSJVMyRWxS2wqkNnrIbL2R2gwltT1N6sAAuSMcpA7VkDvmJOPBsze6EbjA6IkoLwAAAABJRU5ErkJggg==",N=(c(27),new Intl.NumberFormat("id",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0})),O={btc_idr:{asset:.13622025999999998,name:"BTC",color:"#EBAC1C"},eth_idr:{asset:.62987872,name:"ETH",color:"#000000"},ada_idr:{asset:2802.825374,name:"ADA",color:"#1365EA"},theta_idr:{asset:177.9221,name:"THETA",color:"#5C50DD"},bnb_idr:{asset:.61486509,name:"BNB",color:"#FC5731"},cake_idr:{asset:5.7543806+21.6,name:"CAKE",color:"#5CACDD"},uni_idr:{asset:5.81466346,name:"UNI",color:"#fcc19b"},link_idr:{asset:5.37634408,name:"LINK",color:"#fcc19b"},sol_idr:{asset:3.76353346,name:"SOL",color:"#5CACDD"},xrp_idr:{asset:46.95399,name:"XRP",color:"#CFE542"},doge_idr:{asset:1023.8039,name:"DOGE",color:"#fce51c"},enj_idr:{asset:185.29151978,name:"ENJ",color:"#fce51c"},usdt_idr:{asset:0,name:"USDT",color:"#8c8c8c"}},D={ONEUSDT:{asset:3749.04183,name:"ONE",color:"#8c8c8c",inUSD:!0},USDTBIDR:{asset:0,name:"USDT (Binance)",color:"#8c8c8c",inUSD:!1}};function Z(e){var t="";return e>=90&&(t="65c64c"),e<90&&(t="79d23c"),e<=75&&(t="9bbe44"),e<=63&&(t="c6bf22"),e<=54&&(t="dfce60"),e<=46&&(t="d8bc59"),e<=35&&(t="e39d64"),e<=25&&(t="d17339"),e<=10&&(t="b74d34"),t}var g,S=143471050;function R(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)({}),l=Object(j.a)(n,2),d=l[0],R=l[1],M=Object(a.useState)(0),x=Object(j.a)(M,2),T=x[0],G=x[1],v=Object(a.useState)(0),W=Object(j.a)(v,2),Y=W[0],y=W[1],z=Object(a.useState)([]),L=Object(j.a)(z,2),E=L[0],B=L[1],k=Object(a.useState)(0),U=Object(j.a)(k,2),F=U[0],w=U[1];Object(a.useEffect)((function(){clearInterval(g);var e=function(){var t=Object(b.a)(o.a.mark((function t(){var c,a,n,s,l,b,j,m,I,d,A,h,u,p,Z,M,x,T,v,W,Y,z,L,E,k,U,F,J,C,Q,P,f,V,X,H;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a in t.prev=0,(c=[]).push(fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTBIDR",{cache:"no-cache"})),c.push(fetch("https://indodax.com/api/summaries",{cache:"no-cache"})),D)D[a].name,c.push(fetch("https://api.binance.com/api/v3/ticker/price?symbol="+a,{cache:"no-cache"}));return t.next=7,Promise.all(c);case 7:return n=t.sent,s=Object(r.a)(n),l=s[0],b=s[1],j=s.slice(2),t.next=14,l.json();case 14:return m=t.sent,I=m.price,m.symbol,t.next=19,b.json();case 19:for(d=t.sent,A=d.tickers,h=0,u={},p=Object.keys(O),Z=0;Z<p.length;Z++)M=p[Z],x=O[M].asset,T=O[M].name,v=O[M].color,W=A[M].last,Y=x*Number(W),"BTC"===T&&y(Y),u[M]={pair:M.replace("_","").toUpperCase(),color:v,name:T,coin:x,price:W,total:Y},h+=Y;t.t0=o.a.keys(j);case 26:if((t.t1=t.t0()).done){t.next=35;break}return z=t.t1.value,t.next=30,j[z].json();case 30:L=t.sent,E=L.price,(k=L.symbol)in D&&(F=(U=D[k]).asset,J=U.name,C=U.color,U.inUSD&&(E*=I),Q=F*Number(E),u[k]={pair:k,color:C,name:J,coin:F,price:E,total:Q},h+=Q),t.next=26;break;case 35:P=((h-S)/1434710.5).toFixed(1),i(h),R(u),G(P),document.title="My Gain:  ".concat(N.format(h-S)," (").concat(P,"%)"),g=setTimeout((function(){e()}),3e3),t.next=47;break;case 43:t.prev=43,t.t2=t.catch(0),console.log("error",t.t2),e();case 47:return t.prev=47,t.next=50,fetch("https://api.alternative.me/fng/?limit=2",{cache:"no-cache"});case 50:return f=t.sent,t.next=53,f.json();case 53:V=t.sent,B(V.data),t.next=60;break;case 57:t.prev=57,t.t3=t.catch(47),console.log("error",t.t3);case 60:return t.prev=60,t.next=63,fetch("https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmRyb2JyYXllbkBnbWFpbC5jb20iLCJpYXQiOjE2NDI4ODQyNTksImV4cCI6Nzk1MDA4NDI1OX0.ZYR1fjAYGGkUgW1DpcUxYbB4cQ9ff9jHSJCWg5YShAc&exchange=binance&symbol=BTC/USDT&interval=1d");case 63:return X=t.sent,t.next=66,X.json();case 66:(H=t.sent).value&&w(H.value),t.next=73;break;case 70:t.prev=70,t.t4=t.catch(60),console.log("error",t.t4);case 73:case"end":return t.stop()}}),t,null,[[0,43],[47,57],[60,70]])})));return function(){return t.apply(this,arguments)}}();e()}),[]);var J=c<S,C=c-S;Object(a.useEffect)((function(){document.getElementById("favicon").href=J?u:p}),[J]);var Q=(C/(c/100)).toFixed(1),P=(C/((c-Y)/100)).toFixed(1),f=null===E||void 0===E?void 0:E[0];return Object(I.jsxs)("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.8)",height:"100%"},children:[Object(I.jsx)("div",{className:"table-responsive table-striped",children:Object(I.jsxs)("table",{className:"table table table-dark table-striped",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Asset"}),Object(I.jsx)("th",{children:"Price"}),Object(I.jsx)("th",{children:"Total"})]})}),Object(I.jsxs)("tbody",{children:[Object.keys(d).map((function(e){var t=d[e],c=t.coin,a=t.price,i=t.total,n=t.name,s=t.pair;return Object(I.jsx)(A,{pair:s,coin:c,price:a,name:n,total:i,isLoss:J,TPwtBTC:P,TP:Q},e)})),Object(I.jsx)(A,{price:"Total:",total:c,isBold:!0})]})]})}),Object(I.jsx)("div",{style:{padding:20},children:c>0&&Object(I.jsxs)("div",{className:"alert ".concat(J?"alert-danger":"alert-success"),children:["Gain"," ",Object(I.jsxs)("strong",{children:[N.format(C)," (",T,"%)"]}),J&&Object(I.jsx)(h,{total:c,losses:Math.abs(C)})]})}),Object(I.jsx)("div",{style:{width:500,maxWidth:"100%"},className:"cart",children:Object(I.jsx)(m.a,{width:"100%",height:"300px",chartType:"PieChart",loader:Object(I.jsx)("div",{}),data:[["Asset","Value"]].concat(Object(s.a)(Object.keys(d).map((function(e){var t=d[e],c=(t.coin,t.price,t.total),a=t.name;t.color;return[a,c]})))),rootProps:{"data-testid":"1"},options:{backgroundColor:"333333",legend:{textStyle:{color:"white"}}}})}),f&&Object(I.jsx)("div",{style:{padding:20},children:Object(I.jsxs)("div",{className:"alert",style:{backgroundColor:"#".concat(Z(+(null===f||void 0===f?void 0:f.value)))},children:[Object(I.jsx)("strong",{children:"Fear Index"}),": ",null===f||void 0===f?void 0:f.value_classification," ",Object(I.jsx)("strong",{children:+(null===f||void 0===f?void 0:f.value)})]})}),F>0&&Object(I.jsxs)("div",{style:{padding:20,paddingTop:0,marginTop:-15,color:"white"},children:["Daily RSI : ",Object(I.jsx)("strong",{children:F.toFixed(2)})]}),Object(I.jsxs)("div",{style:{display:"none"},children:[Object(I.jsx)("img",{src:u}),Object(I.jsx)("img",{src:p})]})]})}n.a.render(Object(I.jsx)(R,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4b234f5d.chunk.js.map