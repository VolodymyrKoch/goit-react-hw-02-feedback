(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={Bad:"Statistics_Bad__1yR1X",Neutral:"Statistics_Neutral__2swXB",Good:"Statistics_Good__ythFp",positivePercentage:"Statistics_positivePercentage__LC8zt"}},,function(e,t,a){e.exports={FeedbackOptions:"FeedbackOptions_FeedbackOptions__3fM8C"}},,function(e,t,a){e.exports={Section:"Section_Section__3TP3H"}},function(e,t,a){},,,,,function(e,t,a){e.exports={Notification:"Notification_Notification__3QRHp"}},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),s=a.n(n),i=a(7),o=a.n(i),r=(a(19),a(6),a(8)),l=a(9),d=a(10),b=a(13),j=a(12),u=a(11),h=a.n(u),O=function(e){var t=e.message;return Object(c.jsx)("div",{className:h.a.Notification,children:t})},m=O;O.defaultProps={message:"No feedback given"};var p=a(1),x=a.n(p),f=function(e){var t=e.good,a=e.neutral,n=e.bad,s=e.total,i=e.positivePercentage;return Object(c.jsx)("div",{className:x.a.Statistics,children:Object(c.jsxs)("ul",{className:x.a.list,children:[Object(c.jsx)("li",{className:x.a.item,children:Object(c.jsxs)("p",{className:x.a.Good,children:["Good: ",t]})}),Object(c.jsx)("li",{className:x.a.item,children:Object(c.jsxs)("p",{className:x.a.Neutral,children:["Neutral: ",a]})}),Object(c.jsx)("li",{className:x.a.item,children:Object(c.jsxs)("p",{className:x.a.Bad,children:["Bad: ",n]})}),Object(c.jsx)("li",{className:x.a.item,children:Object(c.jsxs)("p",{className:x.a.Total,children:["Total: ",s]})}),Object(c.jsx)("li",{className:x.a.item,children:Object(c.jsxs)("p",{className:x.a.positivePercentage,children:["Positive feedback: ",i,"%"]})})]})})},N=a(3),g=a.n(N),v=function(e){var t=e.options;return console.log(t),Object(c.jsx)("section",{children:Object(c.jsxs)("div",{className:g.a.FeedbackOptions,children:[Object(c.jsx)("button",{className:g.a.btnGood,type:"button",name:"good",onClick:t,children:"Good"}),Object(c.jsx)("button",{className:g.a.btnNeutral,type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(c.jsx)("button",{className:g.a.btnBad,type:"button",name:"bad",onClick:t,children:"Bad"})]})})},k=a(5),_=a.n(k),S=function(e){var t=e.title,a=e.children;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("section",{className:_.a.Section,children:[Object(c.jsx)("h2",{className:_.a.title,children:t}),a]})})},F=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.handlSetState=function(t){e.setState((function(e){return Object(r.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return e.state.good/e.countTotalFeedback()*100},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(S,{title:"Please leave feedback",children:Object(c.jsx)(v,{options:this.handlSetState})}),Object(c.jsx)(S,{title:"Statisticsk",children:this.countTotalFeedback()?Object(c.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(c.jsx)(m,{message:"No feedback given"})})]})}}]),a}(n.Component);o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.316068c3.chunk.js.map