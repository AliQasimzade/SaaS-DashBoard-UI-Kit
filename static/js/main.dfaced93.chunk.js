(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,A,s){},108:function(e,A,s){},109:function(e,A,s){},110:function(e,A,s){},111:function(e,A,s){},112:function(e,A,s){},113:function(e,A,s){},116:function(e,A,s){"use strict";s.r(A);var t=s(0),c=s(7),a=s.n(c),i=(s(80),s(66)),n=s.n(i),l=(s(99),s(40)),r="FETCH_ITEMS",j="CHANGE_LIST",d=s.p+"static/media/list-1.48779eb8.svg",o=s.p+"static/media/list-2.de73f3c8.svg",h=s.p+"static/media/email.1a0ba70b.svg",g=s.p+"static/media/contacts.a7f47b5c.svg",b=s.p+"static/media/chat.6b67ee50.svg",O=s.p+"static/media/deals.69540639.svg",m=s(42),x=s(2),p=function(){var e=Object(l.b)(),A=Object(l.c)((function(e){return e.changeListReducer})),s=Object(t.useRef)(null),c=[{image:d,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACqSURBVHgBvVNBDsIgEJxFzton1JfYpxD1W030J/2J/EB8wVpEIxjpbpOmcyBsdjIwMEtN/7iB0eI/fDjv9nEj8ey7eYGhoWgxd2PPfetpnk0VDeG4veb9pr8TYFx5cJ1nsBDsTH6XbpBjc4i+9UIEP76HA//a5bh4tVA4pd+rYfE3qnr/QM6R4D0rW0zlSPJeYo0caWdNFFLPmij0gnbW6lg/RxJPnyOB9wRyPGow/jPS6gAAAABJRU5ErkJggg==",list:"Dashboard"},{image:o,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABnSURBVHgB7dO9DYAgEAXgd0htGMFNZBTiXiS6CZvIBuoEJwkswEFBwddd85L7I+O/G4wN7aIuQScUBUgx25TjdK4ovMd6Qcj4hwDlFDoaN6zMDDb3LbXsaQugnqeBYdH8gGrzA6rFH+XSLhWFm5SYAAAAAElFTkSuQmCC",list:"Tasks"},{image:h,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgB7ZFBbsIwEEW/Hbot5gbkBnCEnqC5QVWVTXftCeLegF2lFoQ4EeIEyQ3irJFsxiYgInBI5AUs8qTEljwzf/4M0HNv2PEiFkUC8JW9Ioycyko1e17XBZZlBgMFzuYIQRuXr2bDkT0HpweDcRUgsdMv6nOUowPir5iAX06A16IYpPP0xDPxX0q0LW5jOd9UNeZ+AcNy9TGMK6FULMpM/BZjNHRNMRsba3NoLFMawdYvUEEiP4h03OSm1rXWU5dzhQE8qHe3g5iWn9IpqdM3uxtENOPDrCeua0/hRgdNbtp03coB/G7QpnAngZNQh8JHbo4olF7gJudLVvQlYlkwhGCiV/rllwJMf5OhFIYnCMJQo+wLPQ/DHuDxaEUWoGQjAAAAAElFTkSuQmCC",list:"Email"},{image:g,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG8SURBVHgBvVPtTcMwFDw7gPgDuBuECSgTUCagG7R8SvwCJqBMAPxCokXABIgJaCcgG5AN4vILKLE5OxWlJS1tQTwpiZP3fDm/uyfwQ6jrRCFFyb90EOn9QjyqXowGkjUuD/p3iDPI9ERvFnTePjkMECY45b3CX9aAuRDGrMKaI1hbRRpcY5JQjaSsGm2rGs+Vb7l6UvI5PjE2QyHXeI/1zuLtYErvFppkHUPKjfEBSQSwMYaFFTGsqxkfMCbNohcmH7FIlhOIIs2tZ2mC48GUqrdrPvdmzvO2DrdNPTlkL53SEa+bbnmZ7EpOeb29dDIRoAel2iyhD0WJrzyijSCDmt5aaOG/IpehukhCzLlxC1aoZghBEaxjKDR3RFxH6KStvDHsA1RXSRU2qPg++SytY0WzV2Gd6qFzQPcD+yvOvvrVA9IeIef2jksW2iZNewOR3g+bV28ngzJ/tpEJRZt1zLpjnAFetZ94DNpFVidtuCdj5IPfH5hVkSlJdhx+vVeIMEWoy6RIMo+Qoix56Gwa5HyCaWO2OzUGaubzo31ZproC08S7c0K27AEK9mEWv44ZTnOTalXxF/Gatj4AmAyiXOaUwBYAAAAASUVORK5CYII=",list:"Contacts"},{image:b,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgB7ZTNDcIwDEZfQs+QERiBEdiAjoBggW7QMAF3oAc2YBQ2oBs0ZQCMhfg7Vk2OeZJt+fJk+fAZd7ivsbIHHHG0YLxxTX9D5Iq1F2J4UIIsC4Q5WB820zMRuKYziC0ticnCLMzCIRT/izt1JWZk6shkpa39Ct2x9zpqDYuRSND4qt5CqfSyhZYP29mOCD4/TCL7CRPJXmhi1yTkCRtUKoXtGL4qAAAAAElFTkSuQmCC",list:"Chat"},{image:O,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACqSURBVHgB7VTBDcIwDDybfoFsAN2ADegIjIAQAzACe6BKsEmZhDJBywI1rqoEWik/qkrI97LvkrsojwMMU4P84PLXA4I1foOyPi7TdkgC1ZlfwVR8ONkof9JnnEFU9iximkim/N6vST+YivqwuPnNXaoniNWElZ/fv0/GNJdX+iscAhgjwwIswAL+IWDQRci6LgnyCtJogTU75dPB1Yg227bN6TF6XRumxxsXNDwZaUEN7wAAAABJRU5ErkJggg==",list:"Deals"},{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAECAYAAACHtL/sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABbSURBVHgBjYxdDYBADIPbKcABWEABVrCAAs4BWMAKBpAAEjBARsPP3euaLGm/NeW67T3ACcDpYOraepFHlJvCqFDpGsJnZMW4feGRa7UUY9wu+CBzvCWm/xnlN77lNMlPFFHoAAAAAElFTkSuQmCC",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAECAYAAACHtL/sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABVSURBVHgBjc6xDYBACIXhH+yNIziahQs4gW6gtZ2bOQJxAPG8hKt5Ccnjo0GG85lQ3wED2Wzur9LJutL5+nuZEfwgknTF6xKx1pKuyLsg3PFSOyX9A+AvLghTE/5sAAAAAElFTkSuQmCC",list:"Settings"}],a=function(A){e(function(e){return{type:j,key:e}}(A))};return Object(x.jsxs)("div",{className:"side-bar",ref:s,children:[Object(x.jsx)("div",{className:"heading",children:Object(x.jsxs)("p",{children:["SaaS ",Object(x.jsx)("span",{className:"kit",children:"Kit"})]})}),Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)("div",{className:"profile-image",children:Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:"profile_image"})}),Object(x.jsxs)("div",{className:"profile-info",children:[Object(x.jsx)("p",{className:"name",children:"Sierra Ferguson"}),Object(x.jsx)("p",{className:"gmail",children:"s.ferguson@gmail.com"})]})]}),Object(x.jsx)("ul",{className:"side-lists",children:c.map((function(e,s){return Object(x.jsxs)("li",{className:6===s?"settings":"",onClick:function(){return a(s)},children:[Object(x.jsxs)("div",{className:"list-images",children:[Object(x.jsx)("img",{src:e.image,alt:"",className:"able-image",style:s===A.key?{opacity:"0"}:{}},s),Object(x.jsx)("img",{src:e.img,alt:"",className:"disable-image",style:s===A.key?{opacity:"1"}:{}},s-1)]}),Object(x.jsx)(m.b,{to:0===s?"/dashboard":"/contacts",style:s===A.key?{color:"#109CF1"}:{},children:e.list},s)]},s)}))}),Object(x.jsxs)("div",{className:"toggle-side-bar",onClick:function(){s.current.classList.toggle("active")},children:[Object(x.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z",fill:"#C2CFE0"})}),Object(x.jsx)("p",{children:"Toggle sidebar"})]})]})},B=s(24),u=(s(106),s(6)),C=s(148),w=s(147),N=s(151),E=s(149),S=s(150),Y=Object(u.a)((function(e){return{root:{height:4,borderRadius:10},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:10,backgroundColor:"#2ED47A"}}}))(w.a),v=Object(C.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),Q=function(){var e=v(),A=Object(t.useState)(""),s=Object(B.a)(A,2),c=s[0],a=s[1];return Object(x.jsxs)("main",{className:"tasks",children:[Object(x.jsx)("section",{className:"section-1",children:Object(x.jsxs)("div",{className:"section-one",children:[Object(x.jsxs)("div",{className:"section-one-header",children:[Object(x.jsx)("p",{className:"remaining-tasks",children:"8 task completed out of 10"}),Object(x.jsxs)("div",{className:"show-tasks",children:[Object(x.jsx)("span",{className:"show",children:"Show:"}),Object(x.jsx)(E.a,{className:e.formControl,style:{paddingLeft:"3px"},children:Object(x.jsxs)(S.a,{value:c,onChange:function(e){a(e.target.value)},displayEmpty:!0,className:e.selectEmpty,inputProps:{"aria-label":"Without label"},children:[Object(x.jsx)(N.a,{value:"",children:Object(x.jsx)("span",{children:"This week"})}),Object(x.jsx)(N.a,{value:10,children:Object(x.jsx)("span",{children:" This month"})}),Object(x.jsx)(N.a,{value:20,children:Object(x.jsx)("span",{children:"This year"})})]})})]})]}),Object(x.jsx)("div",{className:e.root,children:Object(x.jsx)(Y,{variant:"determinate",value:74})}),Object(x.jsx)("div",{className:"date",children:"23 December, Sunday"}),Object(x.jsxs)("div",{className:"week-days",children:[Object(x.jsxs)("div",{className:"sunday",children:[Object(x.jsx)("p",{className:"short-day-name",children:"Sun"}),Object(x.jsx)("p",{className:"day day-1",children:"23"})]}),Object(x.jsxs)("div",{className:"monday",children:[Object(x.jsx)("p",{className:"short-day-name",children:"Mon"}),Object(x.jsx)("p",{className:"day",children:"24"})]}),Object(x.jsxs)("div",{className:"tuesday",children:[Object(x.jsx)("p",{className:"short-day-name",children:"Tue"}),Object(x.jsx)("p",{className:"day",children:"25"})]}),Object(x.jsxs)("div",{className:"wednesday",children:[Object(x.jsx)("p",{className:"short-day-name",children:"Wed"}),Object(x.jsx)("p",{className:"day",children:"26"})]}),Object(x.jsxs)("div",{className:"thursday",children:[Object(x.jsx)("p",{className:"short-day-name",children:"Thu"}),Object(x.jsx)("p",{className:"day",children:"27"})]}),Object(x.jsxs)("div",{className:"friday",children:[Object(x.jsx)("p",{className:"short-day-name",children:"Fri"}),Object(x.jsx)("p",{className:"day",children:"28"})]}),Object(x.jsxs)("div",{className:"saturday",children:[Object(x.jsx)("p",{className:"short-day-name",children:"Sat"}),Object(x.jsx)("p",{className:"day",children:"29"})]})]})]})}),Object(x.jsx)("section",{children:Object(x.jsxs)("div",{className:"section-two",children:[Object(x.jsxs)("div",{className:"section-two-header",children:[Object(x.jsx)("p",{children:"Send benefit review by Sunday"}),Object(x.jsx)("span",{children:"Reminder"})]}),Object(x.jsxs)("div",{className:"due-date",children:[Object(x.jsx)("span",{children:"Due date:"}),Object(x.jsx)("p",{children:"December 23, 2018"})]}),Object(x.jsxs)("div",{className:"completed",children:[Object(x.jsxs)("div",{className:"person",children:[Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVLSURBVHgBfVVbbBRVGP7O7P3WvbWUUqTbgr1YKS1WBCLQGBKNiYHEGBMiCpr4QDTUB6LGB4qJUQymEB+MT/BovAXCEyZoJRBRErYChV4WOm23tbvLdrfbbXe7O3OOZ85sl2lT2MmZ2Tlz5vv+//u/8w/BE36MMV92Id8Ngj2MIcRnQmD8TJBmjPYTSTpPCbngdzjkx2GQ1SZzuVxIYTjLwboMdGK5dqb8WBHIOZhMJ1YjklZOZLML3UXKwjo4WwauAVNGxS0H1QfVbnAIihpOzWa7n0gwN5/rYYT0EhDfUoKsBE+JBiqmoKoqJienHvHrWfg4Wm9ydq4Hq0mkRa6BGx8y7SiteJhMInzzJn7+4Txu3r4Hl92Gg2+9gQMHD8BqsRiJeDTso6Dfe7pMIDTXZBGRL2nNxEOVX2dnMzjWfQz9twYhSRakMhnYbVYOpGLHjg70njkFq9UGQjQZGcdnaZXSjhq/XxYSqVQ6roGzclL6P1WIDZz88huMD4/g3ddewLG3X8I7r3Rgg88Owutx7eoN3B0YKBVfgAu5TIScFWh69Bg1CkPLFAypdBofH/kAn3/4Orwuj5BgcSGNZHIGkdFxfPvjVYTaOtF7+iuOxjOgVBRLez9PiF9ijOwDjPXS5VmamRgbx862BlS4PZC4DJLJAsnigMvlRuipdTh6cC8qPE79jRK4loVGZKXKUTOXYf8jYUpFNbjDRCi2b9uCSDSOxEwG6yorsa46CDk2heRMClUBD/zuOT3qZYNqhF0Sp2s3WEB3gcERDkmF3+eGVJjndYjw+0VMjt3HeGQQtKggGp9F+9Y2LKlQqoHIQGU0ZOa6Cc9rkTMs/xWjIwhmJmDxB+BYuxZVe9ywcamyqTR3kR0zD1PY1FIHq9ulS7QMXGQRksqOLxXGGL3krsB8bgFmqxWuwBpUBKowHIkimshgfdCDvbs74eJrTKN3hP5LBNyigkQbEp+SWUl/LK82JKcPBZsHuYIKhS+ejMURm05gkrtnirtI290Lc1me3YZyBlor0XzImCr2g8S7oUwNqKLQen8BsdigVjfj3vB9zOWysPAO2MSlabS78V8sjYg8jkQ6g8rWjnLElLLSEI7ql7h1+4zNa2UhqoJ+DEVGMTE1DV9dLVI+B4q1HmxsCSEyHsPaLV1wBmpK0esZUD16LY/zZprPnyEWa8+KxiW2vXa1swLamhpw6vtfsbV1E4IeO+SJKdwYkFHX0IA325/jL6hcd31QMaiwKdTCBdGLUnPZP/ilC2UnACMPxhDwe1GYGkTAXMSIPIYvvvuFS5MSEnS2bsB7R95H/eZOUVSVKnr0lC4V/FxLaONhnSCVCl3551b4r7/DvrtDEYT77/LuGcdI+DJiQ7fgVhJwerzIL/I9EI1iJhmD0+0E3DVo2vUqB1X0yIVFVU3mNFiho6W+RTZrBH7e9Vw1bScYVXsZ1aWx2S0iA9K8GfcunkVzRzssZhtsvMiBYCXUYh5DIzI27SyKyLVvhL57NXlZzzMcXHSC8qbKxq6bHNXcOrRLc5LZbELAW4GfLl7C8+2tyM9Mw8JbtKIqMJtMSExMoOnFl9F3/V9OyveJ0yHAOXzPsw2NJ8utxugYZSH+p8m5ZpazbC8WFftvl69gePgBzBXV8NhNcPK+ZHfYUVhU4G7chkvX7yAeT+DTz77G+rradKi+9pO2jU0njZirfvTtvuYQNUnHeaqHjL2pqb4WTzc2wOX1YnBoCAO3h7Fr93Zc/v1an5kph/NpWV6JtSqBkUiVyD6JsP0UpJ1rUPpWQ+Z6y1z0PgXKGaTl9OMw/ge9fRnP2BWsYQAAAABJRU5ErkJggg==",alt:"associated_image"}),Object(x.jsx)("p",{children:"George Fields"})]}),Object(x.jsx)("button",{children:"Completed"})]})]})}),Object(x.jsx)("section",{children:Object(x.jsxs)("div",{className:"section-three",children:[Object(x.jsxs)("div",{className:"section-three-header",children:[Object(x.jsx)("p",{children:"Invite to office meet-up"}),Object(x.jsx)("span",{children:"Call"})]}),Object(x.jsxs)("div",{className:"due-date",children:[Object(x.jsx)("span",{children:"Due date : "}),Object(x.jsx)("p",{children:"December 23, 2018"})]}),Object(x.jsxs)("div",{className:"ended",children:[Object(x.jsxs)("div",{className:"person",children:[Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(x.jsx)("p",{children:"Rebecca Moore"})]}),Object(x.jsxs)("div",{className:"edit-delete-person",children:[Object(x.jsxs)("div",{className:"edit-delete-icons",children:[Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgBhVHJbcNADOQwgSDklXTgdKBUkPXDuV5OB0kFcTpIB3EqEFKB7ZePj9WBVcKW4Jcegi2a2l3BByyYwAJLcjgkh6BgMjK3dBMNCHgkERPCub4hnhf/DQ4OPH3pEFdL/XbovFmquIvXmWXn7sGWoOxFeaesIEbfxeqcYuopINPehyZSlyjKB7xn60NqWeqoZbQKhD9MV/jyXTA4BbuZuxqrqk9fLYZJKHGJ3nxCbRZvcl8Nw0cqtZjrEox1ycyzXCdtBTJ/6odvrgXwBczpuS4h9hvcIU5UsLSlb7wtxg4Yx4nKmTY5lfo+HM6oztGFw5V6uMziqL2/SS2z30d0v3rHYvPXSL4DNRRol8RQ/vYAAAAASUVORK5CYII=",alt:"ellipse"}),Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAExSURBVHgBdVHLTcNAEN0ZO3zEJXRgbkQkyK4Ap4OUECrAnIIQEnCAyCdMBRYdQAVJB14ZJDhuCVGEANnJDp5NrHxkv9PMznt+M88glnCToKnt/QAAz0iQz28ghCQLorT18FLywJA/B47W1kiQcEQVQCjEeVe2QoXcr8ikCMmf5j+HafsRCKDHbzxjDm8BnY/rfmET82Ca/3rKiybrH3eT26ZuZElh4xROdwgCLnhAoINtMkN69xNN+txwiPxiJXK5eT8J30QN7NmeXJwCPq6nVCdgl7LGIsIxFzN7160TdNKb3qIiiQBgBIhWXOVikrH007KNYCsFhXO6lKfDVyO2D1yNFJeRp+3hkflxx8nA2WngyIgqQSrLdffLCxVs7nrVB0SO2dzD9xHQ+Dv7ey4j/we8qIkUNsfcggAAAABJRU5ErkJggg==",alt:"ellipse1"}),Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACuSURBVHgBzZLBDcIwDEV/0u5BugFZAJQRmKAwAhOQDRATICapmKAjtCMwAMQ4EkFtDyTNhfpiyfF7+QcD/y6Ruti0nSogGgLdtrqyYS5TBQyfuSkBcbq3nQ3zMgb6n0vI+gl3kBAswJqD1/xko4JBbN/VC2S4Xx3oGE0QYB/7M9oXkI+NXu2Ge2UiDAJ6B3eZ7op0mIzRVf9TMBceCXJgX987yIFHghx4KpgNL6Peu49W1JXZzEgAAAAASUVORK5CYII=",alt:"edit",title:"edit"}),Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgB7Y7BEUAwFET3owAlUIIGDJVQig7oQDphNKAESqAAIpkJkxmRi0McvEMyO/v/7gdcQ7roxinzgUhZtXhCZS0Eqjj2dQPmPIn7cyfQA3xQIb7SUBRy8Eb2iQImdG+8QDKMkyngIk1ipuvgPkIt7DBdeHjJH/DRAGqehrnFc8cBCKkXQWwg2QQAAAAASUVORK5CYII=",alt:"delete",title:"delete"})]}),Object(x.jsx)("button",{children:"Ended"})]})]})]})}),Object(x.jsx)("section",{children:Object(x.jsxs)("div",{className:"section-four",children:[Object(x.jsxs)("div",{className:"section-four-header",children:[Object(x.jsx)("p",{children:"Office meet-up"}),Object(x.jsx)("span",{children:"Event"})]}),Object(x.jsxs)("div",{className:"due-date",children:[Object(x.jsx)("span",{children:"Due date : "}),Object(x.jsx)("p",{children:"December 23, 2018"})]}),Object(x.jsxs)("div",{className:"completed",children:[Object(x.jsxs)("div",{className:"person",children:[Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(x.jsx)("p",{children:"Lindsey Stroud"})]}),Object(x.jsx)("button",{children:"Completed"})]})]})}),Object(x.jsx)("a",{href:"/",children:"Show more"})]})},I=s(45),U=s.n(I),y=(s(108),Object(C.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}))),R=function(){var e=Object(t.useState)({series:[20,60,10],labels:["Active","Completed","Ended"],plotOptions:{pie:{donut:{size:95,labels:{show:!0,name:{show:!1},value:{show:!0,color:"#2ED47A",fontSize:"56px",offsetY:20,formatter:function(e){return e+"%"}},total:{show:!0,color:"blue",formatter:function(e){return e.config.series.filter((function(e){return 60===e}))+"%"}}}}}},stroke:{colors:["#FFB946","#2ED47A","#F7685B"],width:1},chart:{type:"donut"},colors:["orange","green","red"],fill:{colors:["#FFB946","#2ED47A","#F7685B"]},dataLabels:{enabled:!1},legend:{position:"right",offsetY:60,fontFamily:"sans-serif"}}),A=Object(B.a)(e,1)[0],s=y(),c=Object(t.useState)(""),a=Object(B.a)(c,2),i=a[0],n=a[1];return Object(x.jsxs)("div",{className:"tasks-chart",children:[Object(x.jsxs)("div",{className:"donut-chart-tasks",children:[Object(x.jsx)("p",{children:"Tasks"}),Object(x.jsxs)("div",{className:"show-chart",children:[Object(x.jsx)("p",{children:"Show"}),":",Object(x.jsx)(E.a,{className:s.formControl,style:{paddingLeft:"3px"},children:Object(x.jsxs)(S.a,{value:i,onChange:function(e){n(e.target.value)},displayEmpty:!0,className:s.selectEmpty,inputProps:{"aria-label":"Without label"},children:[Object(x.jsx)(N.a,{value:"",children:Object(x.jsx)("span",{children:"This week"})}),Object(x.jsx)(N.a,{value:10,children:Object(x.jsx)("span",{children:" This month"})}),Object(x.jsx)(N.a,{value:20,children:Object(x.jsx)("span",{children:"This year"})})]})})]})]}),Object(x.jsx)(U.a,{options:A,series:A.series,type:"donut",style:{width:"370px"},className:"donut"})]})},f=s(46),k=(s(109),Object(C.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}))),V=function(){var e=Object(t.useState)({series:[{data:[47,100,95,170,60,160,150]}],options:{grid:{show:!0,borderColor:"#D7DBDE",strokeWidth:1,strokeDashArray:6},markers:{colors:"#fff",strokeColors:"#109CF1",strokeWidth:2,strokeOpacity:.9,hover:{size:void 0,sizeOffset:4}},stroke:{curve:"smooth",width:2,lineCap:"round",show:!0,dashArray:0},tooltip:{enabled:!0,style:{fontSize:"16px",fontFamily:"Lato"},x:{show:!1},y:{title:{formatter:function(e){return e.data}}}},chart:{stacked:!0,height:350,zoom:{enabled:!1},toolbar:{tools:{download:!1}}},dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},xaxis:Object(f.a)({type:"category",categories:["1 Dec","","8 Dec","","16 Dec","","31 Dec"],axisBorder:{show:!1},tooltip:{enabled:!1},axisTicks:{show:!1}},"axisBorder",{show:!1}),yaxis:{tickAmount:4,min:0,max:200,labels:{style:{colors:"#8e8da4"}},axisBorder:{show:!1},axisTicks:{show:!1}},legend:{show:!0,position:"top",horizontalAlign:"right",offsetX:-10}}}),A=Object(B.a)(e,1)[0],s=k(),c=Object(t.useState)(""),a=Object(B.a)(c,2),i=a[0],n=a[1];return Object(x.jsxs)("div",{className:"deals-graphic",children:[Object(x.jsxs)("div",{className:"area-chart-tasks",children:[Object(x.jsx)("p",{children:"Tasks"}),Object(x.jsxs)("div",{className:"show-chart",children:[Object(x.jsx)("p",{children:"Show"}),":",Object(x.jsx)(E.a,{className:s.formControl,style:{paddingLeft:"3px"},children:Object(x.jsxs)(S.a,{value:i,onChange:function(e){n(e.target.value)},displayEmpty:!0,className:s.selectEmpty,inputProps:{"aria-label":"Without label"},children:[Object(x.jsx)(N.a,{value:"",children:Object(x.jsx)("span",{children:"This week"})}),Object(x.jsx)(N.a,{value:10,children:Object(x.jsx)("span",{children:" This month"})}),Object(x.jsx)(N.a,{value:20,children:Object(x.jsx)("span",{children:"This year"})})]})})]})]}),Object(x.jsx)(U.a,{options:A.options,series:A.series,type:"area",height:222,width:397})]})},L=(s(110),function(){return Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)(Q,{}),Object(x.jsxs)("div",{className:"charts",children:[Object(x.jsx)(V,{}),Object(x.jsx)(R,{})]})]})}),T=(s(111),s(112),function(){return Object(x.jsxs)("div",{className:"navigation",children:[Object(x.jsxs)("div",{className:"search",children:[Object(x.jsx)("button",{className:"search-button",children:Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE+SURBVHgBrZPRTcMwEIbPTt7pBiQTkAwATSaADaAbMEI2gA0aJkBMkLiIV6xOEPPCK32nifntulKp3UKr/pLti+377nynMNpQI7tRTJQR8fFqZxCXedrSHrG18Sq7QhN7hjnauqN60mWZpyoE4Gaaye4Gzo2GjbWCQ046MsBHbCURMYnskhAgdok8wFkNNlKiNs4FHF8AaDCm+C69DEx0EwWQKpRmuapBjVG8vX+eewBG/MIYAw1z2ikt7My+Cw+AsaA/hCBnNojmygMsXeSY+PUugCadmbVny4/gBSGVnEn1hYJl/ll3jzONMQ352i6g+hNXaQOq129mxG7RncJlMQ8/z8n02bWq2LrTAtQCUMGur/JkEgT8BkW2Mz31Am1cuKfUJqMQ5N8ykH31OArC6UCN8/QO9XjCf6LoFPoBzIaUO7/zoekAAAAASUVORK5CYII=",alt:"search-button"})}),Object(x.jsx)("input",{type:"text",placeholder:"Global search"})]}),Object(x.jsx)("button",{className:"notification-button",children:Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGsSURBVHgB7VVPSwJBFH+76vqXlEyMBFOIoEspHYO0D+Gt0FvXutZh95IfwksZnfoS/rlEQSwUnVfJThF2smyz6b2tpdC1HfsDQf1gmNk37/1+82bfzAD8VjDGstgq2NrsBTTO9/s5YQTUVa0ggsiWUvEku7mW9XIJ2FUTWKcDjoXFrDO3SqJJQRAUM0YYhdzvde9Gx/0wJXbhobhtEL+H4POBtLUDQjiygiJVsok85BVVC2F4Jhz0QiwyBvrhwQA5gWz6fomGsmmzFaip2oYDBC0Y8BRCAY9hezo7HerPWk3qUua304Zc8UoueX4mCm7pzZW2wioDMwtECOwywG1JWJEbArHpYWH0s6mr2grgtsjxyeAAOcGVXzey6AfZnLk1Gu7ZCmB5pQJeyXouPIHVUjRXaxCLs3OGDecUrKAy2KGuNhgv9MeeedAy/TxcZWqHo/NLwFVT7dd+ROAj/At8ToBOsEfiv2jprFAMlzM5nly02H1X5y7TO/Q9xhgrkYHrmuofvoDldIL7CfgWjPDgNNrwektiio1MOpHkieOuoh6wTSLGdovrUuDP4BkmuvK18Kj8kgAAAABJRU5ErkJggg==",alt:"notification-button"})})]})}),J=function(){return Object(x.jsxs)("div",{className:"dashboard",children:[Object(x.jsx)(T,{}),Object(x.jsx)(L,{})]})},M=s(11),D=function(){return Object(t.useEffect)((function(){n.a.get("https://herokuhosting2.herokuapp.com/getData").then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}),[]),Object(x.jsx)(m.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(p,{}),Object(x.jsx)(M.d,{children:Object(x.jsxs)(M.b,{excat:!0,path:"/",children:[Object(x.jsx)(M.a,{to:"/dashboard"}),Object(x.jsx)(J,{})]})})]})})},F=(s(113),s(16)),Z=s(37),X={items:{}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case r:return Object(Z.a)(Object(Z.a)({},e),{},{items:A.data});default:return e}},W={key:0},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case j:return Object(Z.a)(Object(Z.a)({},e),{},{key:A.key});default:return e}},H=Object(F.combineReducers)({data:K,changeListReducer:G}),z=s(68),P=s.n(z),q=s(52),_=s(69),$=s.n(_),ee=s(70),Ae={key:"root",storage:P.a},se=Object(q.a)(Ae,H),te=Object(F.createStore)(se,Object(ee.composeWithDevTools)(Object(F.applyMiddleware)($.a))),ce=Object(q.b)(te),ae=s(71);a.a.render(Object(x.jsx)(l.a,{store:te,children:Object(x.jsx)(ae.a,{loading:null,persistor:ce,children:Object(x.jsx)(D,{})})}),document.getElementById("root"))},80:function(e,A,s){},99:function(e,A,s){}},[[116,1,2]]]);
//# sourceMappingURL=main.dfaced93.chunk.js.map