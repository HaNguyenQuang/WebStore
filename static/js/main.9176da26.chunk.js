(this["webpackJsonptest-project"]=this["webpackJsonptest-project"]||[]).push([[0],{18:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),i=n.n(s),r=(n(18),n(2)),o=n(3),l=n(5),d=n(4),u=n(13),j=n.n(u),h=n(0),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.colors;return Object(h.jsx)("div",{className:"colors",children:e.map((function(e,t){return Object(h.jsx)("button",{style:{background:e}},t)}))})}}]),n}(c.Component),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.tab,c=e.myRef;return Object(h.jsx)("div",{className:"thumb",ref:c,children:t.map((function(e,t){return Object(h.jsx)("img",{src:e,alt:"",onClick:function(){return n(t)}},t)}))})}}]),n}(c.Component),p=(n(31),n.p+"static/media/7b719b33aa5d5e03074c.c2f1095b.jpg"),g=n.p+"static/media/26850c243d4ac914905b.691a124c.jpg",O=n.p+"static/media/943560b751d9a587fcc8.3d856c84.jpg",x=n.p+"static/media/d028ea4edb202f7e7631.5aa4aa8a.jpg",f=n.p+"static/media/bo-thai-doc-caruso-quick-clean.222d5434.mp4",v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={modalIsOpen:!1,products:[{_id:"1",title:"Th\u1ea3i \u0110\u1ed9c & L\xe0m S\u1ea1ch N\u1ed9i T\u1ea1ng 15 Ng\xe0y Carusos Natural Health Quick Cleanse 15 Day Detox Program",src:[p,p,g,O,x],description:"UI/UX designing, html css tutorials",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",price:168e4,discount:242e4,colors:["red","black","crimson","teal"],count:1}],index:0,email:"nguyenquangha0209@gmail.com",feedback:"Test",name:"HaNguyenQuang"},e.myRef=a.a.createRef(),e.handleTab=function(t){e.setState({index:t});for(var n=e.myRef.current.children,c=0;c<n.length;c++)n[c].className=n[c].className.replace("active","");n[t].className="active"},e.openModal=function(){e.setState({modalIsOpen:!0})},e.closeModal=function(){e.setState({modalIsOpen:!1})},e.handleSubmit=function(e){window.emailjs.send("service_c4hnuvu","template_vmilezr",{from_name:"HaNguyenQuang",to_name:"HaiNguyenQuang",message:"Testtt"},"user_H6ukGjWJ9Rx5YGWttv3Ew").then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))},e.handeChangeName=function(t){e.setState({name:t})},e.handeChangeEmail=function(t){e.setState({email:t})},e.handeChangePhoneNumber=function(t){e.setState({name:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.state.index;this.myRef.current.children[e].className="active"}},{key:"render",value:function(){var e=this,t=this.state,n=t.products,c=t.index;return Object(h.jsxs)("div",{className:"app",children:[n.map((function(t){return Object(h.jsxs)("div",{className:"details",children:[0===e.state.index?Object(h.jsx)("video",{className:"video1",width:"700",height:"700",controls:!0,children:Object(h.jsx)("source",{src:f,type:"video/mp4"})}):Object(h.jsx)("div",{className:"big-img",children:Object(h.jsx)("img",{src:t.src[c],alt:""})}),Object(h.jsxs)("div",{className:"box",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("h2",{children:t.title}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{className:"discount",children:["\u20ab",t.discount.toLocaleString()]}),Object(h.jsxs)("span",{className:"price",children:["\u20ab",t.price.toLocaleString()]})]})]}),Object(h.jsx)(m,{colors:t.colors}),Object(h.jsx)("p",{children:t.description}),Object(h.jsx)("p",{children:t.content}),0===e.state.index?Object(h.jsx)("video",{className:"video2",width:"700",height:"700",controls:!0,children:Object(h.jsx)("source",{src:f,type:"video/mp4"})}):Object(h.jsx)("div",{className:"big-img2",children:Object(h.jsx)("img",{src:t.src[c],alt:""})}),Object(h.jsx)(b,{images:t.src,tab:e.handleTab,myRef:e.myRef}),Object(h.jsx)("button",{onClick:e.openModal,className:"cart",children:"Add to cart"})]})]},t._id)})),Object(h.jsxs)(j.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"Name"}),Object(h.jsx)("input",{type:"text",name:"user_name",onChange:function(t){return e.handeChangeName(t.target.value)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"Email"}),Object(h.jsx)("input",{type:"text",name:"email",onChange:function(t){return e.handeChangeEmail(t.target.value)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"Phone Number"}),Object(h.jsx)("input",{type:"text",name:"phone_number",onChange:function(t){return e.handeChangePhoneNumber(t.target.value)}})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:this.closeModal,children:"close"}),Object(h.jsx)("button",{onClick:this.handleSubmit,children:"submit"})]})]})]})}}]),n}(c.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.9176da26.chunk.js.map