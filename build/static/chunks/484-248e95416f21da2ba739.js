(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{3128:function(e,t,n){"use strict";n.d(t,{Z:function(){return K}});var o=n(5987),r=n(7462),a=n(7294),i=(n(5697),n(6010)),l=n(2543),c=n(9693),s=n(3935),u=n(8485),d=n(5192),p=!0,f=!1,h=null,m={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function v(e){e.metaKey||e.altKey||e.ctrlKey||(p=!0)}function b(){p=!1}function y(){"hidden"===this.visibilityState&&f&&(p=!0)}function g(e){var t=e.target;try{return t.matches(":focus-visible")}catch(n){}return p||function(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!m[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function x(){f=!0,window.clearTimeout(h),h=window.setTimeout((function(){f=!1}),100)}function E(){return{isFocusVisible:g,onBlurVisible:x,ref:a.useCallback((function(e){var t,n=s.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",v,!0),t.addEventListener("mousedown",b,!0),t.addEventListener("pointerdown",b,!0),t.addEventListener("touchstart",b,!0),t.addEventListener("visibilitychange",y,!0))}),[])}}var k=n(2982),S=n(3366),w=n(7326),C=n(1721),R=n(220);function M(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,a.isValidElement)(e)?t(e):e}(e)})),n}function T(e,t,n){return null!=n[t]?n[t]:e.props[t]}function Z(e,t,n){var o=M(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,r=Object.create(null),a=[];for(var i in e)i in t?a.length&&(r[i]=a,a=[]):a.push(i);var l={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var s=r[c][o];l[r[c][o]]=n(s)}l[c]=n(c)}for(o=0;o<a.length;o++)l[a[o]]=n(a[o]);return l}(t,o);return Object.keys(r).forEach((function(i){var l=r[i];if((0,a.isValidElement)(l)){var c=i in t,s=i in o,u=t[i],d=(0,a.isValidElement)(u)&&!u.props.in;!s||c&&!d?s||!c||d?s&&c&&(0,a.isValidElement)(u)&&(r[i]=(0,a.cloneElement)(l,{onExited:n.bind(null,l),in:u.props.in,exit:T(l,"exit",e),enter:T(l,"enter",e)})):r[i]=(0,a.cloneElement)(l,{in:!1}):r[i]=(0,a.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:T(l,"exit",e),enter:T(l,"enter",e)})}})),r}var z=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},L=function(e){function t(t,n){var o,r=(o=e.call(this,t,n)||this).handleExited.bind((0,w.Z)(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}(0,C.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,o,r=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,o=i,M(n.children,(function(e){return(0,a.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:T(e,"appear",n),enter:T(e,"enter",n),exit:T(e,"exit",n)})}))):Z(e,r,i),firstRender:!1}},n.handleExited=function(e,t){var n=M(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=(0,S.Z)(e,["component","childFactory"]),r=this.state.contextValue,i=z(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?a.createElement(R.Z.Provider,{value:r},i):a.createElement(R.Z.Provider,{value:r},a.createElement(t,o,i))},t}(a.Component);L.propTypes={},L.defaultProps={component:"div",childFactory:function(e){return e}};var I=L,N="undefined"===typeof window?a.useEffect:a.useLayoutEffect;var V=function(e){var t=e.classes,n=e.pulsate,o=void 0!==n&&n,r=e.rippleX,l=e.rippleY,c=e.rippleSize,s=e.in,u=e.onExited,p=void 0===u?function(){}:u,f=e.timeout,h=a.useState(!1),m=h[0],v=h[1],b=(0,i.Z)(t.ripple,t.rippleVisible,o&&t.ripplePulsate),y={width:c,height:c,top:-c/2+l,left:-c/2+r},g=(0,i.Z)(t.child,m&&t.childLeaving,o&&t.childPulsate),x=(0,d.Z)(p);return N((function(){if(!s){v(!0);var e=setTimeout(x,f);return function(){clearTimeout(e)}}}),[x,s,f]),a.createElement("span",{className:b,style:y},a.createElement("span",{className:g}))},D=a.forwardRef((function(e,t){var n=e.center,l=void 0!==n&&n,c=e.classes,s=e.className,u=(0,o.Z)(e,["center","classes","className"]),d=a.useState([]),p=d[0],f=d[1],h=a.useRef(0),m=a.useRef(null);a.useEffect((function(){m.current&&(m.current(),m.current=null)}),[p]);var v=a.useRef(!1),b=a.useRef(null),y=a.useRef(null),g=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(b.current)}}),[]);var x=a.useCallback((function(e){var t=e.pulsate,n=e.rippleX,o=e.rippleY,r=e.rippleSize,i=e.cb;f((function(e){return[].concat((0,k.Z)(e),[a.createElement(V,{key:h.current,classes:c,timeout:550,pulsate:t,rippleX:n,rippleY:o,rippleSize:r})])})),h.current+=1,m.current=i}),[c]),E=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=t.pulsate,r=void 0!==o&&o,a=t.center,i=void 0===a?l||t.pulsate:a,c=t.fakeElement,s=void 0!==c&&c;if("mousedown"===e.type&&v.current)v.current=!1;else{"touchstart"===e.type&&(v.current=!0);var u,d,p,f=s?null:g.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(i||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(h.width/2),d=Math.round(h.height/2);else{var m=e.touches?e.touches[0]:e,E=m.clientX,k=m.clientY;u=Math.round(E-h.left),d=Math.round(k-h.top)}if(i)(p=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(p+=1);else{var S=2*Math.max(Math.abs((f?f.clientWidth:0)-u),u)+2,w=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(S,2)+Math.pow(w,2))}e.touches?null===y.current&&(y.current=function(){x({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})},b.current=setTimeout((function(){y.current&&(y.current(),y.current=null)}),80)):x({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[l,x]),S=a.useCallback((function(){E({},{pulsate:!0})}),[E]),w=a.useCallback((function(e,t){if(clearTimeout(b.current),"touchend"===e.type&&y.current)return e.persist(),y.current(),y.current=null,void(b.current=setTimeout((function(){w(e,t)})));y.current=null,f((function(e){return e.length>0?e.slice(1):e})),m.current=t}),[]);return a.useImperativeHandle(t,(function(){return{pulsate:S,start:E,stop:w}}),[S,E,w]),a.createElement("span",(0,r.Z)({className:(0,i.Z)(c.root,s),ref:g},u),a.createElement(I,{component:null,exit:!0},p))})),O=(0,l.Z)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(a.memo(D)),F=a.forwardRef((function(e,t){var n=e.action,l=e.buttonRef,c=e.centerRipple,p=void 0!==c&&c,f=e.children,h=e.classes,m=e.className,v=e.component,b=void 0===v?"button":v,y=e.disabled,g=void 0!==y&&y,x=e.disableRipple,k=void 0!==x&&x,S=e.disableTouchRipple,w=void 0!==S&&S,C=e.focusRipple,R=void 0!==C&&C,M=e.focusVisibleClassName,T=e.onBlur,Z=e.onClick,z=e.onFocus,L=e.onFocusVisible,I=e.onKeyDown,N=e.onKeyUp,V=e.onMouseDown,D=e.onMouseLeave,F=e.onMouseUp,P=e.onTouchEnd,$=e.onTouchMove,B=e.onTouchStart,K=e.onDragLeave,U=e.tabIndex,j=void 0===U?0:U,q=e.TouchRippleProps,X=e.type,_=void 0===X?"button":X,W=(0,o.Z)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),A=a.useRef(null);var H=a.useRef(null),Y=a.useState(!1),G=Y[0],J=Y[1];g&&G&&J(!1);var Q=E(),ee=Q.isFocusVisible,te=Q.onBlurVisible,ne=Q.ref;function oe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;return(0,d.Z)((function(o){return t&&t(o),!n&&H.current&&H.current[e](o),!0}))}a.useImperativeHandle(n,(function(){return{focusVisible:function(){J(!0),A.current.focus()}}}),[]),a.useEffect((function(){G&&R&&!k&&H.current.pulsate()}),[k,R,G]);var re=oe("start",V),ae=oe("stop",K),ie=oe("stop",F),le=oe("stop",(function(e){G&&e.preventDefault(),D&&D(e)})),ce=oe("start",B),se=oe("stop",P),ue=oe("stop",$),de=oe("stop",(function(e){G&&(te(e),J(!1)),T&&T(e)}),!1),pe=(0,d.Z)((function(e){A.current||(A.current=e.currentTarget),ee(e)&&(J(!0),L&&L(e)),z&&z(e)})),fe=function(){var e=s.findDOMNode(A.current);return b&&"button"!==b&&!("A"===e.tagName&&e.href)},he=a.useRef(!1),me=(0,d.Z)((function(e){R&&!he.current&&G&&H.current&&" "===e.key&&(he.current=!0,e.persist(),H.current.stop(e,(function(){H.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),I&&I(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!g&&(e.preventDefault(),Z&&Z(e))})),ve=(0,d.Z)((function(e){R&&" "===e.key&&H.current&&G&&!e.defaultPrevented&&(he.current=!1,e.persist(),H.current.stop(e,(function(){H.current.pulsate(e)}))),N&&N(e),Z&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&Z(e)})),be=b;"button"===be&&W.href&&(be="a");var ye={};"button"===be?(ye.type=_,ye.disabled=g):("a"===be&&W.href||(ye.role="button"),ye["aria-disabled"]=g);var ge=(0,u.Z)(l,t),xe=(0,u.Z)(ne,A),Ee=(0,u.Z)(ge,xe),ke=a.useState(!1),Se=ke[0],we=ke[1];a.useEffect((function(){we(!0)}),[]);var Ce=Se&&!k&&!g;return a.createElement(be,(0,r.Z)({className:(0,i.Z)(h.root,m,G&&[h.focusVisible,M],g&&h.disabled),onBlur:de,onClick:Z,onFocus:pe,onKeyDown:me,onKeyUp:ve,onMouseDown:re,onMouseLeave:le,onMouseUp:ie,onDragLeave:ae,onTouchEnd:se,onTouchMove:ue,onTouchStart:ce,ref:Ee,tabIndex:g?-1:j},ye,W),f,Ce?a.createElement(O,(0,r.Z)({ref:H,center:p},q)):null)})),P=(0,l.Z)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(F),$=n(3871),B=a.forwardRef((function(e,t){var n=e.children,l=e.classes,c=e.className,s=e.color,u=void 0===s?"default":s,d=e.component,p=void 0===d?"button":d,f=e.disabled,h=void 0!==f&&f,m=e.disableElevation,v=void 0!==m&&m,b=e.disableFocusRipple,y=void 0!==b&&b,g=e.endIcon,x=e.focusVisibleClassName,E=e.fullWidth,k=void 0!==E&&E,S=e.size,w=void 0===S?"medium":S,C=e.startIcon,R=e.type,M=void 0===R?"button":R,T=e.variant,Z=void 0===T?"text":T,z=(0,o.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),L=C&&a.createElement("span",{className:(0,i.Z)(l.startIcon,l["iconSize".concat((0,$.Z)(w))])},C),I=g&&a.createElement("span",{className:(0,i.Z)(l.endIcon,l["iconSize".concat((0,$.Z)(w))])},g);return a.createElement(P,(0,r.Z)({className:(0,i.Z)(l.root,l[Z],c,"inherit"===u?l.colorInherit:"default"!==u&&l["".concat(Z).concat((0,$.Z)(u))],"medium"!==w&&[l["".concat(Z,"Size").concat((0,$.Z)(w))],l["size".concat((0,$.Z)(w))]],v&&l.disableElevation,h&&l.disabled,k&&l.fullWidth),component:p,disabled:h,focusRipple:!y,focusVisibleClassName:(0,i.Z)(l.focusVisible,x),ref:t,type:M},z),a.createElement("span",{className:l.label},L,n,I))})),K=(0,l.Z)((function(e){return{root:(0,r.Z)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,c.Fq)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,c.Fq)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,c.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(B)},2167:function(e,t,n){"use strict";var o=n(3848);t.default=void 0;var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(1063),l=n(4651),c=n(7426);var s={};function u(e,t,n,o){if(e&&i.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;s[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),d=a.default.useMemo((function(){var t=i.resolveHref(r,e.href,!0),n=o(t,2),a=n[0],l=n[1];return{href:a,as:e.as?i.resolveHref(r,e.as):l||a}}),[r,e.href,e.as]),p=d.href,f=d.as,h=e.children,m=e.replace,v=e.shallow,b=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,x=c.useIntersection({rootMargin:"200px"}),E=o(x,2),k=E[0],S=E[1],w=a.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);a.default.useEffect((function(){var e=S&&n&&i.isLocalURL(p),t="undefined"!==typeof y?y:r&&r.locale,o=s[p+"%"+f+(t?"%"+t:"")];e&&!o&&u(r,p,f,{locale:t})}),[f,p,S,y,n,r]);var C={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&o.indexOf("#")>=0&&(l=!1),t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:l}))}(e,r,p,f,m,v,b,y)},onMouseEnter:function(e){i.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(r,p,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof y?y:r&&r.locale,M=r&&r.isLocaleDomain&&i.getDomainLocale(f,R,r&&r.locales,r&&r.domainLocales);C.href=M||i.addBasePath(i.addLocale(f,R,r&&r.defaultLocale))}return a.default.cloneElement(t,C)};t.default=d},7426:function(e,t,n){"use strict";var o=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=r.useRef(),s=r.useState(!1),u=o(s,2),d=u[0],p=u[1],f=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,a=o.observer,i=o.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(r))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,d]);return r.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[f,d]};var r=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var l=new Map},1664:function(e,t,n){e.exports=n(2167)}}]);