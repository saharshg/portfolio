(this["webpackJsonpsaharsh-goyal-portfolio"]=this["webpackJsonpsaharsh-goyal-portfolio"]||[]).push([[5],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(0),r=a.n(n),i=a(121),o=a(109),l=a(118),c=a(40),s=a(108),m=a(129),u=function(e){var t=e.title,a=e.featureImage,n=a.src,i=a.credit,o=a.url;return r.a.createElement(l.a,{mt:10,mb:10,style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(c.a,{gutterBottom:!0,variant:"h4",style:{color:"darkmagenta"}},t),r.a.createElement(l.a,null,r.a.createElement("img",{src:n,alt:i,style:{width:"100%"}})),r.a.createElement(c.a,{gutterBottom:!0},"Photo by"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o},i)))},p=a(114),h=function(e){var t=e.src,a=e.alt;return r.a.createElement(p.a,{item:!0,md:8},r.a.createElement(l.a,{mb:5},r.a.createElement("img",{src:t,alt:a,style:{width:"100%"}})))},d=function(e){var t=e.children,a=e.variant,n=void 0===a?"body1":a;return r.a.createElement(c.a,Object.assign({paragraph:!0,variant:n},e),t)},g=function(e){var t=e.children;return r.a.createElement(l.a,{style:{borderLeft:"5px solid darkviolet",paddingLeft:15,fontStyle:"italic"},mt:5,mb:5},r.a.createElement(c.a,{variant:"body1"},t))},f=function(e){var t=e.children;return r.a.createElement(c.a,{paragraph:!0,variant:"body1",color:"secondary"},t)},b=function(){var e=function(e){return e.map((function(e,t){return r.a.createElement(i.a,{key:e},r.a.createElement(o.a,{primary:"".concat(t+1,". ").concat(e)}))}))},t=v.closures,a=t.title,n=t.featureImage;return r.a.createElement(l.a,null,r.a.createElement(u,{title:a,featureImage:n}),r.a.createElement(d,null,"Definition: A ",r.a.createElement("strong",null,"closure")," is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function\u2019s scope from an inner function."),r.a.createElement(g,null,"Closure =",">"," function + environment (place where the function is defined called as scope ","{ }",")"),r.a.createElement(h,{src:"/images/closure.svg",alt:"closure implementation"}),r.a.createElement(d,null,"Line 2-6 comprises of the lexical environment in which innerFunction is defined."),r.a.createElement(c.a,null,"What it appears -"),r.a.createElement(s.a,{"aria-label":"What it appears"},e(["newFunction is equal to outerFunction call.","When innerFunction() is executed it searches for the \u201cname\u201d variable\n    and finds it in outerFunction scope."])),r.a.createElement(c.a,null,"Truth -"),r.a.createElement(s.a,{"aria-label":"Truth"},e(["newFunction is equal to innerFunction definition.","innerFunction bundles the environment with its definition (lexical/static scoping) and takes this bundle wherever it is executed."])),r.a.createElement(d,null,"Closure helps to implement the object-oriented flavor of classes with accessibility, by creating private and public properties of a function, the variables defined inside the lexical environment of innerFunction are private and can\u2019t be accessed from outside its scope and whatever the outerFunction returns is accessible by the global scope i.e innerFunction is exposed as public method."),r.a.createElement(d,null,"Creating closure is also feasible for situations where you want to share the lexical scope of a function with multiple bindings and it is not recommended to use nested closures since sharing the lexical environment for any event based binding among multiple elements may lead to unexpected behavior."),r.a.createElement(d,null,"So, closure is just a bundle of the environment, scope, variables, definition packed together as a ",r.a.createElement("strong",null,"BACKPACK")," taken by the inner function."),r.a.createElement(f,null,"Beyond"),r.a.createElement(d,null,"This is just a brief about closures in javascript, for further reading or examples refer"," ",r.a.createElement(m.a,{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"},"this.")," ","See power of closures, refer"," ",r.a.createElement(m.a,{target:"_blank",href:"http://csbin.io/closures"},"these examples.")))},E=function(){var e=v.negativezero,t=e.title,a=e.featureImage;return r.a.createElement(l.a,null,r.a.createElement(u,{title:t,featureImage:a}),r.a.createElement(d,null,"In mathematics negative zero is something which is equal to normal zero but 0 is neither positive nor negative. In javascript -0 holds a more practical significance than in theory so it is mostly avoided in basic javascript lessons."),r.a.createElement(d,null,"-0 is signed number but similar to other not so popular javascript concepts/ features we usually don't give it much importance."),r.a.createElement(g,null,"We should be responsible for the code we write"," ",r.a.createElement("span",{role:"img","aria-label":"not surprised"},"(\ud83d\ude0fI know!)")),r.a.createElement(d,null,"It does happen mostly in javascript that we are not sure how our code is working but it works with some magic, writing tests for your code is not enough. For example -"),r.a.createElement(h,{src:"/images/negativeZero.png",alt:"negative zero problems"}),r.a.createElement(d,null,"Then how to determine the sign of 0? but who cares?"," ",r.a.createElement("span",{role:"img","aria-label":"not surprised"},"\ud83d\ude2a")," ","Why I should be interested to know the sign 0? Think of listing stocks or tracking a location on the map, for determining direction of something we need signs negative/ positive, up/ down. So how to find the sign of -0 in javascript?"),r.a.createElement(h,{src:"/images/negativeZeroSolution.png",alt:"determine sign of -0 using Object.is(obj, -0)"}),r.a.createElement(d,null,"Object.is function is used to correctly compare between the two given values, by not only comparing the type/equality of values but many other aspects."),r.a.createElement(d,null,"Share some ideas which involve determining directions (like in gaming) on my social media handles and let's develop something in pair programming",r.a.createElement("span",{role:"img","aria-label":"pair programming"},"\ud83d\udc35\ud83d\udc35")),r.a.createElement(f,null,"Beyond"),r.a.createElement(d,null,"Read complete specification of how Object.is function actually works"," ",r.a.createElement(m.a,{target:"_blank",href:"https://tc39.es/ecma262/#sec-object.is"},"here.")))},v={closures:{title:"Closures in JavaScript",createdAt:"July 12, 2020",modifiedAt:"September 16, 2020",slug:"Briefly understanding closure and the lexical environment in javascript.",hashtags:["closures","scoping","javascript"],component:r.a.createElement(b,null),url:"https://saharshgoyal.com/#/blogs/closures",featureImage:{src:"https://images.unsplash.com/photo-1450562624248-869a3ec195f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",url:"https://unsplash.com/@cblack09?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",credit:"Cody Black"}},negativezero:{title:"Negative Zero in JavaScript",createdAt:"September 23, 2020",modifiedAt:"September 23, 2020",slug:"Understanding negative zero and comparing objects in js.",hashtags:["negativezero","javascript","object.is"],component:r.a.createElement(E,null),url:"https://saharshgoyal.com/#/blogs/negativezero",featureImage:{src:"https://images.unsplash.com/photo-1528797471109-9a6649153bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1141&q=80",url:"https://unsplash.com/@designwilde",credit:"Melanie Dretvic"}}}},136:function(e,t,a){"use strict";a.r(t);var n=a(106),r=a(118),i=a(114),o=a(40),l=a(0),c=a.n(l),s=a(130),m=a(6),u=a(137),p=a(138),h=a(139),d=a(140),g=a(141),f=a(142),b=a(143),E=a(144),v=a(128),y=Object(n.a)((function(e){return{blogSharing:{margin:"60px 0"},shareButtons:{display:"flex",justifyContent:"space-between",marginTop:"12px"}}}));t.default=function(){var e=y(),t=Object(m.g)().blog,a=v.a[t],n=a.title,l=a.modifiedAt,w=a.slug,j=a.featureImage,x=a.url,k=a.hashtags;return c.a.createElement(r.a,null,c.a.createElement(s.a,null,c.a.createElement("title",null,n),c.a.createElement("meta",{name:"title",content:n}),c.a.createElement("meta",{name:"description",content:w}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{property:"og:url",content:x}),c.a.createElement("meta",{property:"og:title",content:n}),c.a.createElement("meta",{property:"og:description",content:w}),c.a.createElement("meta",{property:"og:image",content:j.src}),c.a.createElement("meta",{property:"og:image:width",content:"1200"}),c.a.createElement("meta",{property:"og:image:height",content:"628"}),c.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),c.a.createElement("meta",{property:"twitter:url",content:x}),c.a.createElement("meta",{property:"twitter:title",content:n}),c.a.createElement("meta",{property:"twitter:description",content:w}),c.a.createElement("meta",{property:"twitter:image",content:j.src})),v.a[t].component,c.a.createElement(r.a,{className:e.blogSharing},c.a.createElement(i.a,{item:!0},c.a.createElement(o.a,{color:"secondary"},l)),c.a.createElement(i.a,{item:!0,sm:4,className:e.shareButtons},c.a.createElement(u.a,{url:x,title:n,hashtags:k},c.a.createElement(p.a,{size:32,round:!0})),c.a.createElement(h.a,{url:x,title:n,summary:w,source:x},c.a.createElement(d.a,{size:32,round:!0})),c.a.createElement(g.a,{url:x,quote:"".concat(n,"\n").concat(w),hashtag:"#".concat(k[0])},c.a.createElement(f.a,{size:32,round:!0})),c.a.createElement(b.a,{url:x,title:n,separator:":: ".concat(w," ")},c.a.createElement(E.a,{size:32,round:!0})))))}}}]);
//# sourceMappingURL=5.b295ed6f.chunk.js.map