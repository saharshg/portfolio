(this["webpackJsonpsaharsh-goyal-portfolio"]=this["webpackJsonpsaharsh-goyal-portfolio"]||[]).push([[3],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a),o=n(121),i=n(108),l=n(118),c=n(40),s=n(107),u=n(125),m=function(e){var t=e.title,n=e.featureImage,a=n.src,o=n.credit,i=n.url;return r.a.createElement(l.a,{mt:10,mb:10,style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(c.a,{gutterBottom:!0,variant:"h4",style:{color:"darkmagenta"}},t),r.a.createElement(l.a,null,r.a.createElement("img",{src:a,alt:o,style:{width:"100%"}})),r.a.createElement(c.a,{gutterBottom:!0},"Photo by"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},o)))},d=n(114),p=function(e){var t=e.src,n=e.alt;return r.a.createElement(d.a,{item:!0,md:8},r.a.createElement(l.a,{mb:5},r.a.createElement("img",{src:t,alt:n,style:{width:"100%"}})))},f=function(e){var t=e.children;return r.a.createElement(c.a,{paragraph:!0,variant:"body1"},t)},h=function(e){var t=e.children;return r.a.createElement(l.a,{style:{borderLeft:"5px solid darkviolet",paddingLeft:15,fontStyle:"italic"},mt:5,mb:5},r.a.createElement(c.a,{variant:"body1"},t))},b=function(e){var t=e.children;return r.a.createElement(c.a,{paragraph:!0,variant:"body1",color:"secondary"},t)},v=function(){var e=function(e){return e.map((function(e,t){return r.a.createElement(o.a,{key:e},r.a.createElement(i.a,{primary:"".concat(t+1,". ").concat(e)}))}))},t=function(e){return e.preventDefault()};return r.a.createElement(l.a,null,r.a.createElement(m,{title:"Closures",featureImage:{src:"/images/closure.jpg",credit:"Cody Black",url:"https://unsplash.com/@cblack09?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"}}),r.a.createElement(f,null,"Definition: A ",r.a.createElement("strong",null,"closure")," is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function\u2019s scope from an inner function."),r.a.createElement(h,null,"Closure =",">"," function + environment (place where the function is defined called as scope ","{ }",")"),r.a.createElement(p,{src:"/images/closure.svg",alt:"closure implementation"}),r.a.createElement(f,null,"Line 2-6 comprises of the lexical environment in which innerFunction is defined."),r.a.createElement(c.a,null,"What it appears -"),r.a.createElement(s.a,{"aria-label":"What it appears"},e(["newFunction is equal to outerFunction call.","When innerFunction() is executed it searches for the \u201cname\u201d variable\n    and finds it in outerFunction scope."])),r.a.createElement(c.a,null,"Truth -"),r.a.createElement(s.a,{"aria-label":"Truth"},e(["newFunction is equal to innerFunction definition.","innerFunction bundles the environment with its definition (lexical/static scoping) and takes this bundle wherever it is executed."])),r.a.createElement(f,null,"Closure helps to implement the object-oriented flavor of classes with accessibility, by creating private and public properties of a function, the variables defined inside the lexical environment of innerFunction are private and can\u2019t be accessed from outside its scope and whatever the outerFunction returns is accessible by the global scope i.e innerFunction is exposed as public method."),r.a.createElement(f,null,"Creating closure is also feasible for situations where you want to share the lexical scope of a function with multiple bindings and it is not recommended to use nested closures since sharing the lexical environment for any event based binding among multiple elements may lead to unexpected behavior."),r.a.createElement(f,null,"So, closure is just a bundle of the environment, scope, variables, definition packed together as a ",r.a.createElement("strong",null,"BACKPACK")," taken by the inner function."),r.a.createElement(b,null,"Beyond"),r.a.createElement(f,null,"This is just a brief about closures in javascript, for further reading or examples refer"," ",r.a.createElement(u.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",onClick:t},"this.")," ","See power of closures, refer"," ",r.a.createElement(u.a,{href:"http://csbin.io/closures",onClick:t},"these examples.")))},g={closures:{title:"Closures in JS",createdAt:"12-07-2020",modifiedAt:"15-07-2020",slug:"Briefly understanding closure and lexical environment in javascript.",tags:["javascript","closures","scoping"],component:r.a.createElement(v,null)}}},125:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),i=(n(5),n(3)),l=n(6),c=n(4),s=n(47),u=n(11),m=n(40),d=o.forwardRef((function(e,t){var n=e.classes,c=e.className,d=e.color,p=void 0===d?"primary":d,f=e.component,h=void 0===f?"a":f,b=e.onBlur,v=e.onFocus,g=e.TypographyClasses,y=e.underline,E=void 0===y?"hover":y,w=e.variant,x=void 0===w?"inherit":w,k=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),C=Object(s.a)(),j=C.isFocusVisible,F=C.onBlurVisible,B=C.ref,O=o.useState(!1),S=O[0],T=O[1],A=Object(u.a)(t,B);return o.createElement(m.a,Object(a.a)({className:Object(i.a)(n.root,n["underline".concat(Object(l.a)(E))],c,S&&n.focusVisible,"button"===h&&n.button),classes:g,color:p,component:h,onBlur:function(e){S&&(F(),T(!1)),b&&b(e)},onFocus:function(e){j(e)&&T(!0),v&&v(e)},ref:A,variant:x},k))}));t.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(d)},126:function(e,t,n){"use strict";n.r(t);var a=n(40),r=n(107),o=n(121),i=n(108),l=n(0),c=n.n(l),s=n(7),u=n(124);t.default=function(){var e=Object(s.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(a.a,{variant:"h5",gutterBottom:!0,color:"secondary"},"Blogs"),c.a.createElement(r.a,null,Object.keys(u.a).map((function(t){return c.a.createElement(o.a,{button:!0,disableGutters:!0,key:t},c.a.createElement(i.a,{onClick:function(){return e.push("/blogs/".concat(t))},primaryTypographyProps:{gutterBottom:!0},primary:u.a[t].title,secondary:u.a[t].slug}))}))))}}}]);
//# sourceMappingURL=3.0156c5ad.chunk.js.map