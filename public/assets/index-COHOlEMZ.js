(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var Ga={exports:{}};var xm=Ga.exports,nu;function ym(){return nu||(nu=1,(function(s,e){(function(t,n){s.exports=n()})(xm,function(){const t=new Map,n={set(x,l,p){t.has(x)||t.set(x,new Map);const E=t.get(x);E.has(l)||E.size===0?E.set(l,p):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(E.keys())[0]}.`)},get:(x,l)=>t.has(x)&&t.get(x).get(l)||null,remove(x,l){if(!t.has(x))return;const p=t.get(x);p.delete(l),p.size===0&&t.delete(x)}},i="transitionend",r=x=>(x&&window.CSS&&window.CSS.escape&&(x=x.replace(/#([^\s"#']+)/g,(l,p)=>`#${CSS.escape(p)}`)),x),a=x=>x==null?`${x}`:Object.prototype.toString.call(x).match(/\s([a-z]+)/i)[1].toLowerCase(),o=x=>{x.dispatchEvent(new Event(i))},c=x=>!(!x||typeof x!="object")&&(x.jquery!==void 0&&(x=x[0]),x.nodeType!==void 0),h=x=>c(x)?x.jquery?x[0]:x:typeof x=="string"&&x.length>0?document.querySelector(r(x)):null,u=x=>{if(!c(x)||x.getClientRects().length===0)return!1;const l=getComputedStyle(x).getPropertyValue("visibility")==="visible",p=x.closest("details:not([open])");if(!p)return l;if(p!==x){const E=x.closest("summary");if(E&&E.parentNode!==p||E===null)return!1}return l},f=x=>!x||x.nodeType!==Node.ELEMENT_NODE||!!x.classList.contains("disabled")||(x.disabled!==void 0?x.disabled:x.hasAttribute("disabled")&&x.getAttribute("disabled")!=="false"),d=x=>{if(!document.documentElement.attachShadow)return null;if(typeof x.getRootNode=="function"){const l=x.getRootNode();return l instanceof ShadowRoot?l:null}return x instanceof ShadowRoot?x:x.parentNode?d(x.parentNode):null},m=()=>{},v=x=>{x.offsetHeight},S=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,_=[],g=()=>document.documentElement.dir==="rtl",T=x=>{var l;l=()=>{const p=S();if(p){const E=x.NAME,O=p.fn[E];p.fn[E]=x.jQueryInterface,p.fn[E].Constructor=x,p.fn[E].noConflict=()=>(p.fn[E]=O,x.jQueryInterface)}},document.readyState==="loading"?(_.length||document.addEventListener("DOMContentLoaded",()=>{for(const p of _)p()}),_.push(l)):l()},A=(x,l=[],p=x)=>typeof x=="function"?x.call(...l):p,w=(x,l,p=!0)=>{if(!p)return void A(x);const E=(K=>{if(!K)return 0;let{transitionDuration:se,transitionDelay:ge}=window.getComputedStyle(K);const we=Number.parseFloat(se),Re=Number.parseFloat(ge);return we||Re?(se=se.split(",")[0],ge=ge.split(",")[0],1e3*(Number.parseFloat(se)+Number.parseFloat(ge))):0})(l)+5;let O=!1;const z=({target:K})=>{K===l&&(O=!0,l.removeEventListener(i,z),A(x))};l.addEventListener(i,z),setTimeout(()=>{O||o(l)},E)},P=(x,l,p,E)=>{const O=x.length;let z=x.indexOf(l);return z===-1?!p&&E?x[O-1]:x[0]:(z+=p?1:-1,E&&(z=(z+O)%O),x[Math.max(0,Math.min(z,O-1))])},I=/[^.]*(?=\..*)\.|.*/,D=/\..*/,b=/::\d+$/,C={};let te=1;const L={mouseenter:"mouseover",mouseleave:"mouseout"},j=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function $(x,l){return l&&`${l}::${te++}`||x.uidEvent||te++}function J(x){const l=$(x);return x.uidEvent=l,C[l]=C[l]||{},C[l]}function X(x,l,p=null){return Object.values(x).find(E=>E.callable===l&&E.delegationSelector===p)}function q(x,l,p){const E=typeof l=="string",O=E?p:l||p;let z=be(x);return j.has(z)||(z=x),[E,O,z]}function H(x,l,p,E,O){if(typeof l!="string"||!x)return;let[z,K,se]=q(l,p,E);l in L&&(K=(Ke=>function(Xe){if(!Xe.relatedTarget||Xe.relatedTarget!==Xe.delegateTarget&&!Xe.delegateTarget.contains(Xe.relatedTarget))return Ke.call(this,Xe)})(K));const ge=J(x),we=ge[se]||(ge[se]={}),Re=X(we,K,z?p:null);if(Re)return void(Re.oneOff=Re.oneOff&&O);const ye=$(K,l.replace(I,"")),tt=z?(function(He,Ke,Xe){return function Ze(It){const Ot=He.querySelectorAll(Ke);for(let{target:lt}=It;lt&&lt!==this;lt=lt.parentNode)for(const yt of Ot)if(yt===lt)return Se(It,{delegateTarget:lt}),Ze.oneOff&&V.off(He,It.type,Ke,Xe),Xe.apply(lt,[It])}})(x,p,K):(function(He,Ke){return function Xe(Ze){return Se(Ze,{delegateTarget:He}),Xe.oneOff&&V.off(He,Ze.type,Ke),Ke.apply(He,[Ze])}})(x,K);tt.delegationSelector=z?p:null,tt.callable=K,tt.oneOff=O,tt.uidEvent=ye,we[ye]=tt,x.addEventListener(se,tt,z)}function he(x,l,p,E,O){const z=X(l[p],E,O);z&&(x.removeEventListener(p,z,!!O),delete l[p][z.uidEvent])}function oe(x,l,p,E){const O=l[p]||{};for(const[z,K]of Object.entries(O))z.includes(E)&&he(x,l,p,K.callable,K.delegationSelector)}function be(x){return x=x.replace(D,""),L[x]||x}const V={on(x,l,p,E){H(x,l,p,E,!1)},one(x,l,p,E){H(x,l,p,E,!0)},off(x,l,p,E){if(typeof l!="string"||!x)return;const[O,z,K]=q(l,p,E),se=K!==l,ge=J(x),we=ge[K]||{},Re=l.startsWith(".");if(z===void 0){if(Re)for(const ye of Object.keys(ge))oe(x,ge,ye,l.slice(1));for(const[ye,tt]of Object.entries(we)){const He=ye.replace(b,"");se&&!l.includes(He)||he(x,ge,K,tt.callable,tt.delegationSelector)}}else{if(!Object.keys(we).length)return;he(x,ge,K,z,O?p:null)}},trigger(x,l,p){if(typeof l!="string"||!x)return null;const E=S();let O=null,z=!0,K=!0,se=!1;l!==be(l)&&E&&(O=E.Event(l,p),E(x).trigger(O),z=!O.isPropagationStopped(),K=!O.isImmediatePropagationStopped(),se=O.isDefaultPrevented());const ge=Se(new Event(l,{bubbles:z,cancelable:!0}),p);return se&&ge.preventDefault(),K&&x.dispatchEvent(ge),ge.defaultPrevented&&O&&O.preventDefault(),ge}};function Se(x,l={}){for(const[p,E]of Object.entries(l))try{x[p]=E}catch{Object.defineProperty(x,p,{configurable:!0,get:()=>E})}return x}function Je(x){if(x==="true")return!0;if(x==="false")return!1;if(x===Number(x).toString())return Number(x);if(x===""||x==="null")return null;if(typeof x!="string")return x;try{return JSON.parse(decodeURIComponent(x))}catch{return x}}function wt(x){return x.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const ht={setDataAttribute(x,l,p){x.setAttribute(`data-bs-${wt(l)}`,p)},removeDataAttribute(x,l){x.removeAttribute(`data-bs-${wt(l)}`)},getDataAttributes(x){if(!x)return{};const l={},p=Object.keys(x.dataset).filter(E=>E.startsWith("bs")&&!E.startsWith("bsConfig"));for(const E of p){let O=E.replace(/^bs/,"");O=O.charAt(0).toLowerCase()+O.slice(1),l[O]=Je(x.dataset[E])}return l},getDataAttribute:(x,l)=>Je(x.getAttribute(`data-bs-${wt(l)}`))};class ne{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,p){const E=c(p)?ht.getDataAttribute(p,"config"):{};return{...this.constructor.Default,...typeof E=="object"?E:{},...c(p)?ht.getDataAttributes(p):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,p=this.constructor.DefaultType){for(const[E,O]of Object.entries(p)){const z=l[E],K=c(z)?"element":a(z);if(!new RegExp(O).test(K))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${E}" provided type "${K}" but expected type "${O}".`)}}}class ce extends ne{constructor(l,p){super(),(l=h(l))&&(this._element=l,this._config=this._getConfig(p),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),V.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,p,E=!0){w(l,p,E)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return n.get(h(l),this.DATA_KEY)}static getOrCreateInstance(l,p={}){return this.getInstance(l)||new this(l,typeof p=="object"?p:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const pe=x=>{let l=x.getAttribute("data-bs-target");if(!l||l==="#"){let p=x.getAttribute("href");if(!p||!p.includes("#")&&!p.startsWith("."))return null;p.includes("#")&&!p.startsWith("#")&&(p=`#${p.split("#")[1]}`),l=p&&p!=="#"?p.trim():null}return l?l.split(",").map(p=>r(p)).join(","):null},le={find:(x,l=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(l,x)),findOne:(x,l=document.documentElement)=>Element.prototype.querySelector.call(l,x),children:(x,l)=>[].concat(...x.children).filter(p=>p.matches(l)),parents(x,l){const p=[];let E=x.parentNode.closest(l);for(;E;)p.push(E),E=E.parentNode.closest(l);return p},prev(x,l){let p=x.previousElementSibling;for(;p;){if(p.matches(l))return[p];p=p.previousElementSibling}return[]},next(x,l){let p=x.nextElementSibling;for(;p;){if(p.matches(l))return[p];p=p.nextElementSibling}return[]},focusableChildren(x){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(p=>`${p}:not([tabindex^="-"])`).join(",");return this.find(l,x).filter(p=>!f(p)&&u(p))},getSelectorFromElement(x){const l=pe(x);return l&&le.findOne(l)?l:null},getElementFromSelector(x){const l=pe(x);return l?le.findOne(l):null},getMultipleElementsFromSelector(x){const l=pe(x);return l?le.find(l):[]}},ze=(x,l="hide")=>{const p=`click.dismiss${x.EVENT_KEY}`,E=x.NAME;V.on(document,p,`[data-bs-dismiss="${E}"]`,function(O){if(["A","AREA"].includes(this.tagName)&&O.preventDefault(),f(this))return;const z=le.getElementFromSelector(this)||this.closest(`.${E}`);x.getOrCreateInstance(z)[l]()})},Ve=".bs.alert",qt=`close${Ve}`,ut=`closed${Ve}`;class dt extends ce{static get NAME(){return"alert"}close(){if(V.trigger(this._element,qt).defaultPrevented)return;this._element.classList.remove("show");const l=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),V.trigger(this._element,ut),this.dispose()}static jQueryInterface(l){return this.each(function(){const p=dt.getOrCreateInstance(this);if(typeof l=="string"){if(p[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);p[l](this)}})}}ze(dt,"close"),T(dt);const bt='[data-bs-toggle="button"]';class $e extends ce{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(l){return this.each(function(){const p=$e.getOrCreateInstance(this);l==="toggle"&&p[l]()})}}V.on(document,"click.bs.button.data-api",bt,x=>{x.preventDefault();const l=x.target.closest(bt);$e.getOrCreateInstance(l).toggle()}),T($e);const Ct=".bs.swipe",N=`touchstart${Ct}`,Vt=`touchmove${Ct}`,gt=`touchend${Ct}`,Rt=`pointerdown${Ct}`,Ne=`pointerup${Ct}`,R={endCallback:null,leftCallback:null,rightCallback:null},y={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class F extends ne{constructor(l,p){super(),this._element=l,l&&F.isSupported()&&(this._config=this._getConfig(p),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return R}static get DefaultType(){return y}static get NAME(){return"swipe"}dispose(){V.off(this._element,Ct)}_start(l){this._supportPointerEvents?this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX):this._deltaX=l.touches[0].clientX}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),A(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=40)return;const p=l/this._deltaX;this._deltaX=0,p&&A(p>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(V.on(this._element,Rt,l=>this._start(l)),V.on(this._element,Ne,l=>this._end(l)),this._element.classList.add("pointer-event")):(V.on(this._element,N,l=>this._start(l)),V.on(this._element,Vt,l=>this._move(l)),V.on(this._element,gt,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType==="pen"||l.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Q=".bs.carousel",ie=".data-api",ee="ArrowLeft",Ie="ArrowRight",ue="next",Ue="prev",ke="left",re="right",de=`slide${Q}`,Ce=`slid${Q}`,De=`keydown${Q}`,Me=`mouseenter${Q}`,et=`mouseleave${Q}`,U=`dragstart${Q}`,me=`load${Q}${ie}`,fe=`click${Q}${ie}`,Ae="carousel",ae="active",Z=".active",Pe=".carousel-item",We=Z+Pe,Pt={[ee]:re,[Ie]:ke},_t={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Vn={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class hn extends ce{constructor(l,p){super(l,p),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=le.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Ae&&this.cycle()}static get Default(){return _t}static get DefaultType(){return Vn}static get NAME(){return"carousel"}next(){this._slide(ue)}nextWhenVisible(){!document.hidden&&u(this._element)&&this.next()}prev(){this._slide(Ue)}pause(){this._isSliding&&o(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?V.one(this._element,Ce,()=>this.cycle()):this.cycle())}to(l){const p=this._getItems();if(l>p.length-1||l<0)return;if(this._isSliding)return void V.one(this._element,Ce,()=>this.to(l));const E=this._getItemIndex(this._getActive());if(E===l)return;const O=l>E?ue:Ue;this._slide(O,p[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&V.on(this._element,De,l=>this._keydown(l)),this._config.pause==="hover"&&(V.on(this._element,Me,()=>this.pause()),V.on(this._element,et,()=>this._maybeEnableCycle())),this._config.touch&&F.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const p of le.find(".carousel-item img",this._element))V.on(p,U,E=>E.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(ke)),rightCallback:()=>this._slide(this._directionToOrder(re)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new F(this._element,l)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const p=Pt[l.key];p&&(l.preventDefault(),this._slide(this._directionToOrder(p)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const p=le.findOne(Z,this._indicatorsElement);p.classList.remove(ae),p.removeAttribute("aria-current");const E=le.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);E&&(E.classList.add(ae),E.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const p=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=p||this._config.defaultInterval}_slide(l,p=null){if(this._isSliding)return;const E=this._getActive(),O=l===ue,z=p||P(this._getItems(),E,O,this._config.wrap);if(z===E)return;const K=this._getItemIndex(z),se=ye=>V.trigger(this._element,ye,{relatedTarget:z,direction:this._orderToDirection(l),from:this._getItemIndex(E),to:K});if(se(de).defaultPrevented||!E||!z)return;const ge=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(K),this._activeElement=z;const we=O?"carousel-item-start":"carousel-item-end",Re=O?"carousel-item-next":"carousel-item-prev";z.classList.add(Re),v(z),E.classList.add(we),z.classList.add(we),this._queueCallback(()=>{z.classList.remove(we,Re),z.classList.add(ae),E.classList.remove(ae,Re,we),this._isSliding=!1,se(Ce)},E,this._isAnimated()),ge&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return le.findOne(We,this._element)}_getItems(){return le.find(Pe,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return g()?l===ke?Ue:ue:l===ke?ue:Ue}_orderToDirection(l){return g()?l===Ue?ke:re:l===Ue?re:ke}static jQueryInterface(l){return this.each(function(){const p=hn.getOrCreateInstance(this,l);if(typeof l!="number"){if(typeof l=="string"){if(p[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);p[l]()}}else p.to(l)})}}V.on(document,fe,"[data-bs-slide], [data-bs-slide-to]",function(x){const l=le.getElementFromSelector(this);if(!l||!l.classList.contains(Ae))return;x.preventDefault();const p=hn.getOrCreateInstance(l),E=this.getAttribute("data-bs-slide-to");return E?(p.to(E),void p._maybeEnableCycle()):ht.getDataAttribute(this,"slide")==="next"?(p.next(),void p._maybeEnableCycle()):(p.prev(),void p._maybeEnableCycle())}),V.on(window,me,()=>{const x=le.find('[data-bs-ride="carousel"]');for(const l of x)hn.getOrCreateInstance(l)}),T(hn);const ki=".bs.collapse",xr=`show${ki}`,co=`shown${ki}`,Zr=`hide${ki}`,Jr=`hidden${ki}`,yi=`click${ki}.data-api`,ts="show",bi="collapse",ns="collapsing",As=`:scope .${bi} .${bi}`,ws='[data-bs-toggle="collapse"]',Cs={parent:null,toggle:!0},Qr={parent:"(null|element)",toggle:"boolean"};class Si extends ce{constructor(l,p){super(l,p),this._isTransitioning=!1,this._triggerArray=[];const E=le.find(ws);for(const O of E){const z=le.getSelectorFromElement(O),K=le.find(z).filter(se=>se===this._element);z!==null&&K.length&&this._triggerArray.push(O)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Cs}static get DefaultType(){return Qr}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(O=>O!==this._element).map(O=>Si.getOrCreateInstance(O,{toggle:!1}))),l.length&&l[0]._isTransitioning||V.trigger(this._element,xr).defaultPrevented)return;for(const O of l)O.hide();const p=this._getDimension();this._element.classList.remove(bi),this._element.classList.add(ns),this._element.style[p]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const E=`scroll${p[0].toUpperCase()+p.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ns),this._element.classList.add(bi,ts),this._element.style[p]="",V.trigger(this._element,co)},this._element,!0),this._element.style[p]=`${this._element[E]}px`}hide(){if(this._isTransitioning||!this._isShown()||V.trigger(this._element,Zr).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,v(this._element),this._element.classList.add(ns),this._element.classList.remove(bi,ts);for(const p of this._triggerArray){const E=le.getElementFromSelector(p);E&&!this._isShown(E)&&this._addAriaAndCollapsedClass([p],!1)}this._isTransitioning=!0,this._element.style[l]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ns),this._element.classList.add(bi),V.trigger(this._element,Jr)},this._element,!0)}_isShown(l=this._element){return l.classList.contains(ts)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=h(l.parent),l}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(ws);for(const p of l){const E=le.getElementFromSelector(p);E&&this._addAriaAndCollapsedClass([p],this._isShown(E))}}_getFirstLevelChildren(l){const p=le.find(As,this._config.parent);return le.find(l,this._config.parent).filter(E=>!p.includes(E))}_addAriaAndCollapsedClass(l,p){if(l.length)for(const E of l)E.classList.toggle("collapsed",!p),E.setAttribute("aria-expanded",p)}static jQueryInterface(l){const p={};return typeof l=="string"&&/show|hide/.test(l)&&(p.toggle=!1),this.each(function(){const E=Si.getOrCreateInstance(this,p);if(typeof l=="string"){if(E[l]===void 0)throw new TypeError(`No method named "${l}"`);E[l]()}})}}V.on(document,yi,ws,function(x){(x.target.tagName==="A"||x.delegateTarget&&x.delegateTarget.tagName==="A")&&x.preventDefault();for(const l of le.getMultipleElementsFromSelector(this))Si.getOrCreateInstance(l,{toggle:!1}).toggle()}),T(Si);var an="top",fn="bottom",pn="right",on="left",Rs="auto",zi=[an,fn,pn,on],M="start",B="end",Y="clippingParents",W="viewport",G="popper",ve="reference",Ee=zi.reduce(function(x,l){return x.concat([l+"-"+M,l+"-"+B])},[]),_e=[].concat(zi,[Rs]).reduce(function(x,l){return x.concat([l,l+"-"+M,l+"-"+B])},[]),Le="beforeRead",Oe="read",qe="afterRead",Qe="beforeMain",Fe="main",vt="afterMain",kt="beforeWrite",Ft="write",xt="afterWrite",Kt=[Le,Oe,qe,Qe,Fe,vt,kt,Ft,xt];function Te(x){return x?(x.nodeName||"").toLowerCase():null}function Nt(x){if(x==null)return window;if(x.toString()!=="[object Window]"){var l=x.ownerDocument;return l&&l.defaultView||window}return x}function it(x){return x instanceof Nt(x).Element||x instanceof Element}function zt(x){return x instanceof Nt(x).HTMLElement||x instanceof HTMLElement}function Mn(x){return typeof ShadowRoot<"u"&&(x instanceof Nt(x).ShadowRoot||x instanceof ShadowRoot)}const Gn={name:"applyStyles",enabled:!0,phase:"write",fn:function(x){var l=x.state;Object.keys(l.elements).forEach(function(p){var E=l.styles[p]||{},O=l.attributes[p]||{},z=l.elements[p];zt(z)&&Te(z)&&(Object.assign(z.style,E),Object.keys(O).forEach(function(K){var se=O[K];se===!1?z.removeAttribute(K):z.setAttribute(K,se===!0?"":se)}))})},effect:function(x){var l=x.state,p={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,p.popper),l.styles=p,l.elements.arrow&&Object.assign(l.elements.arrow.style,p.arrow),function(){Object.keys(l.elements).forEach(function(E){var O=l.elements[E],z=l.attributes[E]||{},K=Object.keys(l.styles.hasOwnProperty(E)?l.styles[E]:p[E]).reduce(function(se,ge){return se[ge]="",se},{});zt(O)&&Te(O)&&(Object.assign(O.style,K),Object.keys(z).forEach(function(se){O.removeAttribute(se)}))})}},requires:["computeStyles"]};function ln(x){return x.split("-")[0]}var ft=Math.max,Gt=Math.min,mn=Math.round;function Wt(){var x=navigator.userAgentData;return x!=null&&x.brands&&Array.isArray(x.brands)?x.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function Wn(){return!/^((?!chrome|android).)*safari/i.test(Wt())}function An(x,l,p){l===void 0&&(l=!1),p===void 0&&(p=!1);var E=x.getBoundingClientRect(),O=1,z=1;l&&zt(x)&&(O=x.offsetWidth>0&&mn(E.width)/x.offsetWidth||1,z=x.offsetHeight>0&&mn(E.height)/x.offsetHeight||1);var K=(it(x)?Nt(x):window).visualViewport,se=!Wn()&&p,ge=(E.left+(se&&K?K.offsetLeft:0))/O,we=(E.top+(se&&K?K.offsetTop:0))/z,Re=E.width/O,ye=E.height/z;return{width:Re,height:ye,top:we,right:ge+Re,bottom:we+ye,left:ge,x:ge,y:we}}function Ps(x){var l=An(x),p=x.offsetWidth,E=x.offsetHeight;return Math.abs(l.width-p)<=1&&(p=l.width),Math.abs(l.height-E)<=1&&(E=l.height),{x:x.offsetLeft,y:x.offsetTop,width:p,height:E}}function Gc(x,l){var p=l.getRootNode&&l.getRootNode();if(x.contains(l))return!0;if(p&&Mn(p)){var E=l;do{if(E&&x.isSameNode(E))return!0;E=E.parentNode||E.host}while(E)}return!1}function Mi(x){return Nt(x).getComputedStyle(x)}function Rf(x){return["table","td","th"].indexOf(Te(x))>=0}function Hi(x){return((it(x)?x.ownerDocument:x.document)||window.document).documentElement}function ea(x){return Te(x)==="html"?x:x.assignedSlot||x.parentNode||(Mn(x)?x.host:null)||Hi(x)}function Wc(x){return zt(x)&&Mi(x).position!=="fixed"?x.offsetParent:null}function yr(x){for(var l=Nt(x),p=Wc(x);p&&Rf(p)&&Mi(p).position==="static";)p=Wc(p);return p&&(Te(p)==="html"||Te(p)==="body"&&Mi(p).position==="static")?l:p||(function(E){var O=/firefox/i.test(Wt());if(/Trident/i.test(Wt())&&zt(E)&&Mi(E).position==="fixed")return null;var z=ea(E);for(Mn(z)&&(z=z.host);zt(z)&&["html","body"].indexOf(Te(z))<0;){var K=Mi(z);if(K.transform!=="none"||K.perspective!=="none"||K.contain==="paint"||["transform","perspective"].indexOf(K.willChange)!==-1||O&&K.willChange==="filter"||O&&K.filter&&K.filter!=="none")return z;z=z.parentNode}return null})(x)||l}function ho(x){return["top","bottom"].indexOf(x)>=0?"x":"y"}function br(x,l,p){return ft(x,Gt(l,p))}function Xc(x){return Object.assign({},{top:0,right:0,bottom:0,left:0},x)}function jc(x,l){return l.reduce(function(p,E){return p[E]=x,p},{})}const $c={name:"arrow",enabled:!0,phase:"main",fn:function(x){var l,p=x.state,E=x.name,O=x.options,z=p.elements.arrow,K=p.modifiersData.popperOffsets,se=ln(p.placement),ge=ho(se),we=[on,pn].indexOf(se)>=0?"height":"width";if(z&&K){var Re=(function(Lt,Mt){return Xc(typeof(Lt=typeof Lt=="function"?Lt(Object.assign({},Mt.rects,{placement:Mt.placement})):Lt)!="number"?Lt:jc(Lt,zi))})(O.padding,p),ye=Ps(z),tt=ge==="y"?an:on,He=ge==="y"?fn:pn,Ke=p.rects.reference[we]+p.rects.reference[ge]-K[ge]-p.rects.popper[we],Xe=K[ge]-p.rects.reference[ge],Ze=yr(z),It=Ze?ge==="y"?Ze.clientHeight||0:Ze.clientWidth||0:0,Ot=Ke/2-Xe/2,lt=Re[tt],yt=It-ye[we]-Re[He],st=It/2-ye[we]/2+Ot,pt=br(lt,st,yt),St=ge;p.modifiersData[E]=((l={})[St]=pt,l.centerOffset=pt-st,l)}},effect:function(x){var l=x.state,p=x.options.element,E=p===void 0?"[data-popper-arrow]":p;E!=null&&(typeof E!="string"||(E=l.elements.popper.querySelector(E)))&&Gc(l.elements.popper,E)&&(l.elements.arrow=E)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Is(x){return x.split("-")[1]}var Pf={top:"auto",right:"auto",bottom:"auto",left:"auto"};function qc(x){var l,p=x.popper,E=x.popperRect,O=x.placement,z=x.variation,K=x.offsets,se=x.position,ge=x.gpuAcceleration,we=x.adaptive,Re=x.roundOffsets,ye=x.isFixed,tt=K.x,He=tt===void 0?0:tt,Ke=K.y,Xe=Ke===void 0?0:Ke,Ze=typeof Re=="function"?Re({x:He,y:Xe}):{x:He,y:Xe};He=Ze.x,Xe=Ze.y;var It=K.hasOwnProperty("x"),Ot=K.hasOwnProperty("y"),lt=on,yt=an,st=window;if(we){var pt=yr(p),St="clientHeight",Lt="clientWidth";pt===Nt(p)&&Mi(pt=Hi(p)).position!=="static"&&se==="absolute"&&(St="scrollHeight",Lt="scrollWidth"),(O===an||(O===on||O===pn)&&z===B)&&(yt=fn,Xe-=(ye&&pt===st&&st.visualViewport?st.visualViewport.height:pt[St])-E.height,Xe*=ge?1:-1),O!==on&&(O!==an&&O!==fn||z!==B)||(lt=pn,He-=(ye&&pt===st&&st.visualViewport?st.visualViewport.width:pt[Lt])-E.width,He*=ge?1:-1)}var Mt,jt=Object.assign({position:se},we&&Pf),wn=Re===!0?(function(jn,gn){var Un=jn.x,On=jn.y,Xt=gn.devicePixelRatio||1;return{x:mn(Un*Xt)/Xt||0,y:mn(On*Xt)/Xt||0}})({x:He,y:Xe},Nt(p)):{x:He,y:Xe};return He=wn.x,Xe=wn.y,ge?Object.assign({},jt,((Mt={})[yt]=Ot?"0":"",Mt[lt]=It?"0":"",Mt.transform=(st.devicePixelRatio||1)<=1?"translate("+He+"px, "+Xe+"px)":"translate3d("+He+"px, "+Xe+"px, 0)",Mt)):Object.assign({},jt,((l={})[yt]=Ot?Xe+"px":"",l[lt]=It?He+"px":"",l.transform="",l))}const uo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(x){var l=x.state,p=x.options,E=p.gpuAcceleration,O=E===void 0||E,z=p.adaptive,K=z===void 0||z,se=p.roundOffsets,ge=se===void 0||se,we={placement:ln(l.placement),variation:Is(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:O,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,qc(Object.assign({},we,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:K,roundOffsets:ge})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,qc(Object.assign({},we,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:ge})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}};var ta={passive:!0};const fo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(x){var l=x.state,p=x.instance,E=x.options,O=E.scroll,z=O===void 0||O,K=E.resize,se=K===void 0||K,ge=Nt(l.elements.popper),we=[].concat(l.scrollParents.reference,l.scrollParents.popper);return z&&we.forEach(function(Re){Re.addEventListener("scroll",p.update,ta)}),se&&ge.addEventListener("resize",p.update,ta),function(){z&&we.forEach(function(Re){Re.removeEventListener("scroll",p.update,ta)}),se&&ge.removeEventListener("resize",p.update,ta)}},data:{}};var If={left:"right",right:"left",bottom:"top",top:"bottom"};function na(x){return x.replace(/left|right|bottom|top/g,function(l){return If[l]})}var Lf={start:"end",end:"start"};function Yc(x){return x.replace(/start|end/g,function(l){return Lf[l]})}function po(x){var l=Nt(x);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function mo(x){return An(Hi(x)).left+po(x).scrollLeft}function go(x){var l=Mi(x),p=l.overflow,E=l.overflowX,O=l.overflowY;return/auto|scroll|overlay|hidden/.test(p+O+E)}function Kc(x){return["html","body","#document"].indexOf(Te(x))>=0?x.ownerDocument.body:zt(x)&&go(x)?x:Kc(ea(x))}function Sr(x,l){var p;l===void 0&&(l=[]);var E=Kc(x),O=E===((p=x.ownerDocument)==null?void 0:p.body),z=Nt(E),K=O?[z].concat(z.visualViewport||[],go(E)?E:[]):E,se=l.concat(K);return O?se:se.concat(Sr(ea(K)))}function _o(x){return Object.assign({},x,{left:x.x,top:x.y,right:x.x+x.width,bottom:x.y+x.height})}function Zc(x,l,p){return l===W?_o((function(E,O){var z=Nt(E),K=Hi(E),se=z.visualViewport,ge=K.clientWidth,we=K.clientHeight,Re=0,ye=0;if(se){ge=se.width,we=se.height;var tt=Wn();(tt||!tt&&O==="fixed")&&(Re=se.offsetLeft,ye=se.offsetTop)}return{width:ge,height:we,x:Re+mo(E),y:ye}})(x,p)):it(l)?(function(E,O){var z=An(E,!1,O==="fixed");return z.top=z.top+E.clientTop,z.left=z.left+E.clientLeft,z.bottom=z.top+E.clientHeight,z.right=z.left+E.clientWidth,z.width=E.clientWidth,z.height=E.clientHeight,z.x=z.left,z.y=z.top,z})(l,p):_o((function(E){var O,z=Hi(E),K=po(E),se=(O=E.ownerDocument)==null?void 0:O.body,ge=ft(z.scrollWidth,z.clientWidth,se?se.scrollWidth:0,se?se.clientWidth:0),we=ft(z.scrollHeight,z.clientHeight,se?se.scrollHeight:0,se?se.clientHeight:0),Re=-K.scrollLeft+mo(E),ye=-K.scrollTop;return Mi(se||z).direction==="rtl"&&(Re+=ft(z.clientWidth,se?se.clientWidth:0)-ge),{width:ge,height:we,x:Re,y:ye}})(Hi(x)))}function Jc(x){var l,p=x.reference,E=x.element,O=x.placement,z=O?ln(O):null,K=O?Is(O):null,se=p.x+p.width/2-E.width/2,ge=p.y+p.height/2-E.height/2;switch(z){case an:l={x:se,y:p.y-E.height};break;case fn:l={x:se,y:p.y+p.height};break;case pn:l={x:p.x+p.width,y:ge};break;case on:l={x:p.x-E.width,y:ge};break;default:l={x:p.x,y:p.y}}var we=z?ho(z):null;if(we!=null){var Re=we==="y"?"height":"width";switch(K){case M:l[we]=l[we]-(p[Re]/2-E[Re]/2);break;case B:l[we]=l[we]+(p[Re]/2-E[Re]/2)}}return l}function Ls(x,l){l===void 0&&(l={});var p=l,E=p.placement,O=E===void 0?x.placement:E,z=p.strategy,K=z===void 0?x.strategy:z,se=p.boundary,ge=se===void 0?Y:se,we=p.rootBoundary,Re=we===void 0?W:we,ye=p.elementContext,tt=ye===void 0?G:ye,He=p.altBoundary,Ke=He!==void 0&&He,Xe=p.padding,Ze=Xe===void 0?0:Xe,It=Xc(typeof Ze!="number"?Ze:jc(Ze,zi)),Ot=tt===G?ve:G,lt=x.rects.popper,yt=x.elements[Ke?Ot:tt],st=(function(gn,Un,On,Xt){var ii=Un==="clippingParents"?(function(Ut){var _n=Sr(ea(Ut)),Fn=["absolute","fixed"].indexOf(Mi(Ut).position)>=0&&zt(Ut)?yr(Ut):Ut;return it(Fn)?_n.filter(function(Gi){return it(Gi)&&Gc(Gi,Fn)&&Te(Gi)!=="body"}):[]})(gn):[].concat(Un),si=[].concat(ii,[On]),Us=si[0],nn=si.reduce(function(Ut,_n){var Fn=Zc(gn,_n,Xt);return Ut.top=ft(Fn.top,Ut.top),Ut.right=Gt(Fn.right,Ut.right),Ut.bottom=Gt(Fn.bottom,Ut.bottom),Ut.left=ft(Fn.left,Ut.left),Ut},Zc(gn,Us,Xt));return nn.width=nn.right-nn.left,nn.height=nn.bottom-nn.top,nn.x=nn.left,nn.y=nn.top,nn})(it(yt)?yt:yt.contextElement||Hi(x.elements.popper),ge,Re,K),pt=An(x.elements.reference),St=Jc({reference:pt,element:lt,placement:O}),Lt=_o(Object.assign({},lt,St)),Mt=tt===G?Lt:pt,jt={top:st.top-Mt.top+It.top,bottom:Mt.bottom-st.bottom+It.bottom,left:st.left-Mt.left+It.left,right:Mt.right-st.right+It.right},wn=x.modifiersData.offset;if(tt===G&&wn){var jn=wn[O];Object.keys(jt).forEach(function(gn){var Un=[pn,fn].indexOf(gn)>=0?1:-1,On=[an,fn].indexOf(gn)>=0?"y":"x";jt[gn]+=jn[On]*Un})}return jt}function Df(x,l){l===void 0&&(l={});var p=l,E=p.placement,O=p.boundary,z=p.rootBoundary,K=p.padding,se=p.flipVariations,ge=p.allowedAutoPlacements,we=ge===void 0?_e:ge,Re=Is(E),ye=Re?se?Ee:Ee.filter(function(Ke){return Is(Ke)===Re}):zi,tt=ye.filter(function(Ke){return we.indexOf(Ke)>=0});tt.length===0&&(tt=ye);var He=tt.reduce(function(Ke,Xe){return Ke[Xe]=Ls(x,{placement:Xe,boundary:O,rootBoundary:z,padding:K})[ln(Xe)],Ke},{});return Object.keys(He).sort(function(Ke,Xe){return He[Ke]-He[Xe]})}const Qc={name:"flip",enabled:!0,phase:"main",fn:function(x){var l=x.state,p=x.options,E=x.name;if(!l.modifiersData[E]._skip){for(var O=p.mainAxis,z=O===void 0||O,K=p.altAxis,se=K===void 0||K,ge=p.fallbackPlacements,we=p.padding,Re=p.boundary,ye=p.rootBoundary,tt=p.altBoundary,He=p.flipVariations,Ke=He===void 0||He,Xe=p.allowedAutoPlacements,Ze=l.options.placement,It=ln(Ze),Ot=ge||(It!==Ze&&Ke?(function(Ut){if(ln(Ut)===Rs)return[];var _n=na(Ut);return[Yc(Ut),_n,Yc(_n)]})(Ze):[na(Ze)]),lt=[Ze].concat(Ot).reduce(function(Ut,_n){return Ut.concat(ln(_n)===Rs?Df(l,{placement:_n,boundary:Re,rootBoundary:ye,padding:we,flipVariations:Ke,allowedAutoPlacements:Xe}):_n)},[]),yt=l.rects.reference,st=l.rects.popper,pt=new Map,St=!0,Lt=lt[0],Mt=0;Mt<lt.length;Mt++){var jt=lt[Mt],wn=ln(jt),jn=Is(jt)===M,gn=[an,fn].indexOf(wn)>=0,Un=gn?"width":"height",On=Ls(l,{placement:jt,boundary:Re,rootBoundary:ye,altBoundary:tt,padding:we}),Xt=gn?jn?pn:on:jn?fn:an;yt[Un]>st[Un]&&(Xt=na(Xt));var ii=na(Xt),si=[];if(z&&si.push(On[wn]<=0),se&&si.push(On[Xt]<=0,On[ii]<=0),si.every(function(Ut){return Ut})){Lt=jt,St=!1;break}pt.set(jt,si)}if(St)for(var Us=function(Ut){var _n=lt.find(function(Fn){var Gi=pt.get(Fn);if(Gi)return Gi.slice(0,Ut).every(function(ua){return ua})});if(_n)return Lt=_n,"break"},nn=Ke?3:1;nn>0&&Us(nn)!=="break";nn--);l.placement!==Lt&&(l.modifiersData[E]._skip=!0,l.placement=Lt,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function eh(x,l,p){return p===void 0&&(p={x:0,y:0}),{top:x.top-l.height-p.y,right:x.right-l.width+p.x,bottom:x.bottom-l.height+p.y,left:x.left-l.width-p.x}}function th(x){return[an,pn,fn,on].some(function(l){return x[l]>=0})}const nh={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(x){var l=x.state,p=x.name,E=l.rects.reference,O=l.rects.popper,z=l.modifiersData.preventOverflow,K=Ls(l,{elementContext:"reference"}),se=Ls(l,{altBoundary:!0}),ge=eh(K,E),we=eh(se,O,z),Re=th(ge),ye=th(we);l.modifiersData[p]={referenceClippingOffsets:ge,popperEscapeOffsets:we,isReferenceHidden:Re,hasPopperEscaped:ye},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":Re,"data-popper-escaped":ye})}},ih={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(x){var l=x.state,p=x.options,E=x.name,O=p.offset,z=O===void 0?[0,0]:O,K=_e.reduce(function(Re,ye){return Re[ye]=(function(tt,He,Ke){var Xe=ln(tt),Ze=[on,an].indexOf(Xe)>=0?-1:1,It=typeof Ke=="function"?Ke(Object.assign({},He,{placement:tt})):Ke,Ot=It[0],lt=It[1];return Ot=Ot||0,lt=(lt||0)*Ze,[on,pn].indexOf(Xe)>=0?{x:lt,y:Ot}:{x:Ot,y:lt}})(ye,l.rects,z),Re},{}),se=K[l.placement],ge=se.x,we=se.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=ge,l.modifiersData.popperOffsets.y+=we),l.modifiersData[E]=K}},vo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(x){var l=x.state,p=x.name;l.modifiersData[p]=Jc({reference:l.rects.reference,element:l.rects.popper,placement:l.placement})},data:{}},sh={name:"preventOverflow",enabled:!0,phase:"main",fn:function(x){var l=x.state,p=x.options,E=x.name,O=p.mainAxis,z=O===void 0||O,K=p.altAxis,se=K!==void 0&&K,ge=p.boundary,we=p.rootBoundary,Re=p.altBoundary,ye=p.padding,tt=p.tether,He=tt===void 0||tt,Ke=p.tetherOffset,Xe=Ke===void 0?0:Ke,Ze=Ls(l,{boundary:ge,rootBoundary:we,padding:ye,altBoundary:Re}),It=ln(l.placement),Ot=Is(l.placement),lt=!Ot,yt=ho(It),st=yt==="x"?"y":"x",pt=l.modifiersData.popperOffsets,St=l.rects.reference,Lt=l.rects.popper,Mt=typeof Xe=="function"?Xe(Object.assign({},l.rects,{placement:l.placement})):Xe,jt=typeof Mt=="number"?{mainAxis:Mt,altAxis:Mt}:Object.assign({mainAxis:0,altAxis:0},Mt),wn=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,jn={x:0,y:0};if(pt){if(z){var gn,Un=yt==="y"?an:on,On=yt==="y"?fn:pn,Xt=yt==="y"?"height":"width",ii=pt[yt],si=ii+Ze[Un],Us=ii-Ze[On],nn=He?-Lt[Xt]/2:0,Ut=Ot===M?St[Xt]:Lt[Xt],_n=Ot===M?-Lt[Xt]:-St[Xt],Fn=l.elements.arrow,Gi=He&&Fn?Ps(Fn):{width:0,height:0},ua=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Wh=ua[Un],Xh=ua[On],da=br(0,St[Xt],Gi[Xt]),um=lt?St[Xt]/2-nn-da-Wh-jt.mainAxis:Ut-da-Wh-jt.mainAxis,dm=lt?-St[Xt]/2+nn+da+Xh+jt.mainAxis:_n+da+Xh+jt.mainAxis,Lo=l.elements.arrow&&yr(l.elements.arrow),fm=Lo?yt==="y"?Lo.clientTop||0:Lo.clientLeft||0:0,jh=(gn=wn?.[yt])!=null?gn:0,pm=ii+dm-jh,$h=br(He?Gt(si,ii+um-jh-fm):si,ii,He?ft(Us,pm):Us);pt[yt]=$h,jn[yt]=$h-ii}if(se){var qh,mm=yt==="x"?an:on,gm=yt==="x"?fn:pn,hs=pt[st],fa=st==="y"?"height":"width",Yh=hs+Ze[mm],Kh=hs-Ze[gm],Do=[an,on].indexOf(It)!==-1,Zh=(qh=wn?.[st])!=null?qh:0,Jh=Do?Yh:hs-St[fa]-Lt[fa]-Zh+jt.altAxis,Qh=Do?hs+St[fa]+Lt[fa]-Zh-jt.altAxis:Kh,eu=He&&Do?(function(_m,vm,No){var tu=br(_m,vm,No);return tu>No?No:tu})(Jh,hs,Qh):br(He?Jh:Yh,hs,He?Qh:Kh);pt[st]=eu,jn[st]=eu-hs}l.modifiersData[E]=jn}},requiresIfExists:["offset"]};function Nf(x,l,p){p===void 0&&(p=!1);var E,O,z=zt(l),K=zt(l)&&(function(ye){var tt=ye.getBoundingClientRect(),He=mn(tt.width)/ye.offsetWidth||1,Ke=mn(tt.height)/ye.offsetHeight||1;return He!==1||Ke!==1})(l),se=Hi(l),ge=An(x,K,p),we={scrollLeft:0,scrollTop:0},Re={x:0,y:0};return(z||!z&&!p)&&((Te(l)!=="body"||go(se))&&(we=(E=l)!==Nt(E)&&zt(E)?{scrollLeft:(O=E).scrollLeft,scrollTop:O.scrollTop}:po(E)),zt(l)?((Re=An(l,!0)).x+=l.clientLeft,Re.y+=l.clientTop):se&&(Re.x=mo(se))),{x:ge.left+we.scrollLeft-Re.x,y:ge.top+we.scrollTop-Re.y,width:ge.width,height:ge.height}}function Uf(x){var l=new Map,p=new Set,E=[];function O(z){p.add(z.name),[].concat(z.requires||[],z.requiresIfExists||[]).forEach(function(K){if(!p.has(K)){var se=l.get(K);se&&O(se)}}),E.push(z)}return x.forEach(function(z){l.set(z.name,z)}),x.forEach(function(z){p.has(z.name)||O(z)}),E}var rh={placement:"bottom",modifiers:[],strategy:"absolute"};function ah(){for(var x=arguments.length,l=new Array(x),p=0;p<x;p++)l[p]=arguments[p];return!l.some(function(E){return!(E&&typeof E.getBoundingClientRect=="function")})}function ia(x){x===void 0&&(x={});var l=x,p=l.defaultModifiers,E=p===void 0?[]:p,O=l.defaultOptions,z=O===void 0?rh:O;return function(K,se,ge){ge===void 0&&(ge=z);var we,Re,ye={placement:"bottom",orderedModifiers:[],options:Object.assign({},rh,z),modifiersData:{},elements:{reference:K,popper:se},attributes:{},styles:{}},tt=[],He=!1,Ke={state:ye,setOptions:function(Ze){var It=typeof Ze=="function"?Ze(ye.options):Ze;Xe(),ye.options=Object.assign({},z,ye.options,It),ye.scrollParents={reference:it(K)?Sr(K):K.contextElement?Sr(K.contextElement):[],popper:Sr(se)};var Ot,lt,yt=(function(st){var pt=Uf(st);return Kt.reduce(function(St,Lt){return St.concat(pt.filter(function(Mt){return Mt.phase===Lt}))},[])})((Ot=[].concat(E,ye.options.modifiers),lt=Ot.reduce(function(st,pt){var St=st[pt.name];return st[pt.name]=St?Object.assign({},St,pt,{options:Object.assign({},St.options,pt.options),data:Object.assign({},St.data,pt.data)}):pt,st},{}),Object.keys(lt).map(function(st){return lt[st]})));return ye.orderedModifiers=yt.filter(function(st){return st.enabled}),ye.orderedModifiers.forEach(function(st){var pt=st.name,St=st.options,Lt=St===void 0?{}:St,Mt=st.effect;if(typeof Mt=="function"){var jt=Mt({state:ye,name:pt,instance:Ke,options:Lt});tt.push(jt||function(){})}}),Ke.update()},forceUpdate:function(){if(!He){var Ze=ye.elements,It=Ze.reference,Ot=Ze.popper;if(ah(It,Ot)){ye.rects={reference:Nf(It,yr(Ot),ye.options.strategy==="fixed"),popper:Ps(Ot)},ye.reset=!1,ye.placement=ye.options.placement,ye.orderedModifiers.forEach(function(Mt){return ye.modifiersData[Mt.name]=Object.assign({},Mt.data)});for(var lt=0;lt<ye.orderedModifiers.length;lt++)if(ye.reset!==!0){var yt=ye.orderedModifiers[lt],st=yt.fn,pt=yt.options,St=pt===void 0?{}:pt,Lt=yt.name;typeof st=="function"&&(ye=st({state:ye,options:St,name:Lt,instance:Ke})||ye)}else ye.reset=!1,lt=-1}}},update:(we=function(){return new Promise(function(Ze){Ke.forceUpdate(),Ze(ye)})},function(){return Re||(Re=new Promise(function(Ze){Promise.resolve().then(function(){Re=void 0,Ze(we())})})),Re}),destroy:function(){Xe(),He=!0}};if(!ah(K,se))return Ke;function Xe(){tt.forEach(function(Ze){return Ze()}),tt=[]}return Ke.setOptions(ge).then(function(Ze){!He&&ge.onFirstUpdate&&ge.onFirstUpdate(Ze)}),Ke}}var Of=ia(),Ff=ia({defaultModifiers:[fo,vo,uo,Gn]}),xo=ia({defaultModifiers:[fo,vo,uo,Gn,ih,Qc,sh,$c,nh]});const oh=Object.freeze(Object.defineProperty({__proto__:null,afterMain:vt,afterRead:qe,afterWrite:xt,applyStyles:Gn,arrow:$c,auto:Rs,basePlacements:zi,beforeMain:Qe,beforeRead:Le,beforeWrite:kt,bottom:fn,clippingParents:Y,computeStyles:uo,createPopper:xo,createPopperBase:Of,createPopperLite:Ff,detectOverflow:Ls,end:B,eventListeners:fo,flip:Qc,hide:nh,left:on,main:Fe,modifierPhases:Kt,offset:ih,placements:_e,popper:G,popperGenerator:ia,popperOffsets:vo,preventOverflow:sh,read:Oe,reference:ve,right:pn,start:M,top:an,variationPlacements:Ee,viewport:W,write:Ft},Symbol.toStringTag,{value:"Module"})),lh="dropdown",is=".bs.dropdown",yo=".data-api",Bf="ArrowUp",ch="ArrowDown",kf=`hide${is}`,zf=`hidden${is}`,Hf=`show${is}`,Vf=`shown${is}`,hh=`click${is}${yo}`,uh=`keydown${is}${yo}`,Gf=`keyup${is}${yo}`,Ds="show",ss='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Wf=`${ss}.${Ds}`,sa=".dropdown-menu",Xf=g()?"top-end":"top-start",jf=g()?"top-start":"top-end",$f=g()?"bottom-end":"bottom-start",qf=g()?"bottom-start":"bottom-end",Yf=g()?"left-start":"right-start",Kf=g()?"right-start":"left-start",Zf={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Jf={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Xn extends ce{constructor(l,p){super(l,p),this._popper=null,this._parent=this._element.parentNode,this._menu=le.next(this._element,sa)[0]||le.prev(this._element,sa)[0]||le.findOne(sa,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Zf}static get DefaultType(){return Jf}static get NAME(){return lh}toggle(){return this._isShown()?this.hide():this.show()}show(){if(f(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!V.trigger(this._element,Hf,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const p of[].concat(...document.body.children))V.on(p,"mouseover",m);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ds),this._element.classList.add(Ds),V.trigger(this._element,Vf,l)}}hide(){if(f(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!V.trigger(this._element,kf,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const p of[].concat(...document.body.children))V.off(p,"mouseover",m);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ds),this._element.classList.remove(Ds),this._element.setAttribute("aria-expanded","false"),ht.removeDataAttribute(this._menu,"popper"),V.trigger(this._element,zf,l)}}_getConfig(l){if(typeof(l=super._getConfig(l)).reference=="object"&&!c(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${lh.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(oh===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let l=this._element;this._config.reference==="parent"?l=this._parent:c(this._config.reference)?l=h(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const p=this._getPopperConfig();this._popper=xo(l,this._menu,p)}_isShown(){return this._menu.classList.contains(Ds)}_getPlacement(){const l=this._parent;if(l.classList.contains("dropend"))return Yf;if(l.classList.contains("dropstart"))return Kf;if(l.classList.contains("dropup-center"))return"top";if(l.classList.contains("dropdown-center"))return"bottom";const p=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?p?jf:Xf:p?qf:$f}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(p=>Number.parseInt(p,10)):typeof l=="function"?p=>l(p,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ht.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...A(this._config.popperConfig,[void 0,l])}}_selectMenuItem({key:l,target:p}){const E=le.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(O=>u(O));E.length&&P(E,p,l===ch,!E.includes(p)).focus()}static jQueryInterface(l){return this.each(function(){const p=Xn.getOrCreateInstance(this,l);if(typeof l=="string"){if(p[l]===void 0)throw new TypeError(`No method named "${l}"`);p[l]()}})}static clearMenus(l){if(l.button===2||l.type==="keyup"&&l.key!=="Tab")return;const p=le.find(Wf);for(const E of p){const O=Xn.getInstance(E);if(!O||O._config.autoClose===!1)continue;const z=l.composedPath(),K=z.includes(O._menu);if(z.includes(O._element)||O._config.autoClose==="inside"&&!K||O._config.autoClose==="outside"&&K||O._menu.contains(l.target)&&(l.type==="keyup"&&l.key==="Tab"||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const se={relatedTarget:O._element};l.type==="click"&&(se.clickEvent=l),O._completeHide(se)}}static dataApiKeydownHandler(l){const p=/input|textarea/i.test(l.target.tagName),E=l.key==="Escape",O=[Bf,ch].includes(l.key);if(!O&&!E||p&&!E)return;l.preventDefault();const z=this.matches(ss)?this:le.prev(this,ss)[0]||le.next(this,ss)[0]||le.findOne(ss,l.delegateTarget.parentNode),K=Xn.getOrCreateInstance(z);if(O)return l.stopPropagation(),K.show(),void K._selectMenuItem(l);K._isShown()&&(l.stopPropagation(),K.hide(),z.focus())}}V.on(document,uh,ss,Xn.dataApiKeydownHandler),V.on(document,uh,sa,Xn.dataApiKeydownHandler),V.on(document,hh,Xn.clearMenus),V.on(document,Gf,Xn.clearMenus),V.on(document,hh,ss,function(x){x.preventDefault(),Xn.getOrCreateInstance(this).toggle()}),T(Xn);const dh="backdrop",fh="show",ph=`mousedown.bs.${dh}`,Qf={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},ep={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class mh extends ne{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return Qf}static get DefaultType(){return ep}static get NAME(){return dh}show(l){if(!this._config.isVisible)return void A(l);this._append();const p=this._getElement();this._config.isAnimated&&v(p),p.classList.add(fh),this._emulateAnimation(()=>{A(l)})}hide(l){this._config.isVisible?(this._getElement().classList.remove(fh),this._emulateAnimation(()=>{this.dispose(),A(l)})):A(l)}dispose(){this._isAppended&&(V.off(this._element,ph),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add("fade"),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=h(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),V.on(l,ph,()=>{A(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){w(l,this._getElement(),this._config.isAnimated)}}const ra=".bs.focustrap",tp=`focusin${ra}`,np=`keydown.tab${ra}`,gh="backward",ip={autofocus:!0,trapElement:null},sp={autofocus:"boolean",trapElement:"element"};class _h extends ne{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ip}static get DefaultType(){return sp}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),V.off(document,ra),V.on(document,tp,l=>this._handleFocusin(l)),V.on(document,np,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,V.off(document,ra))}_handleFocusin(l){const{trapElement:p}=this._config;if(l.target===document||l.target===p||p.contains(l.target))return;const E=le.focusableChildren(p);E.length===0?p.focus():this._lastTabNavDirection===gh?E[E.length-1].focus():E[0].focus()}_handleKeydown(l){l.key==="Tab"&&(this._lastTabNavDirection=l.shiftKey?gh:"forward")}}const vh=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",xh=".sticky-top",aa="padding-right",yh="margin-right";class bo{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,aa,p=>p+l),this._setElementAttributes(vh,aa,p=>p+l),this._setElementAttributes(xh,yh,p=>p-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,aa),this._resetElementAttributes(vh,aa),this._resetElementAttributes(xh,yh)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,p,E){const O=this.getWidth();this._applyManipulationCallback(l,z=>{if(z!==this._element&&window.innerWidth>z.clientWidth+O)return;this._saveInitialAttribute(z,p);const K=window.getComputedStyle(z).getPropertyValue(p);z.style.setProperty(p,`${E(Number.parseFloat(K))}px`)})}_saveInitialAttribute(l,p){const E=l.style.getPropertyValue(p);E&&ht.setDataAttribute(l,p,E)}_resetElementAttributes(l,p){this._applyManipulationCallback(l,E=>{const O=ht.getDataAttribute(E,p);O!==null?(ht.removeDataAttribute(E,p),E.style.setProperty(p,O)):E.style.removeProperty(p)})}_applyManipulationCallback(l,p){if(c(l))p(l);else for(const E of le.find(l,this._element))p(E)}}const Nn=".bs.modal",rp=`hide${Nn}`,ap=`hidePrevented${Nn}`,bh=`hidden${Nn}`,Sh=`show${Nn}`,op=`shown${Nn}`,lp=`resize${Nn}`,cp=`click.dismiss${Nn}`,hp=`mousedown.dismiss${Nn}`,up=`keydown.dismiss${Nn}`,dp=`click${Nn}.data-api`,Mh="modal-open",Eh="show",So="modal-static",fp={backdrop:!0,focus:!0,keyboard:!0},pp={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class rs extends ce{constructor(l,p){super(l,p),this._dialog=le.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new bo,this._addEventListeners()}static get Default(){return fp}static get DefaultType(){return pp}static get NAME(){return"modal"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||V.trigger(this._element,Sh,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Mh),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){this._isShown&&!this._isTransitioning&&(V.trigger(this._element,rp).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Eh),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){V.off(window,Nn),V.off(this._dialog,Nn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new mh({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new _h({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const p=le.findOne(".modal-body",this._dialog);p&&(p.scrollTop=0),v(this._element),this._element.classList.add(Eh),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,V.trigger(this._element,op,{relatedTarget:l})},this._dialog,this._isAnimated())}_addEventListeners(){V.on(this._element,up,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),V.on(window,lp,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),V.on(this._element,hp,l=>{V.one(this._element,cp,p=>{this._element===l.target&&this._element===p.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Mh),this._resetAdjustments(),this._scrollBar.reset(),V.trigger(this._element,bh)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(V.trigger(this._element,ap).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,p=this._element.style.overflowY;p==="hidden"||this._element.classList.contains(So)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(So),this._queueCallback(()=>{this._element.classList.remove(So),this._queueCallback(()=>{this._element.style.overflowY=p},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,p=this._scrollBar.getWidth(),E=p>0;if(E&&!l){const O=g()?"paddingLeft":"paddingRight";this._element.style[O]=`${p}px`}if(!E&&l){const O=g()?"paddingRight":"paddingLeft";this._element.style[O]=`${p}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,p){return this.each(function(){const E=rs.getOrCreateInstance(this,l);if(typeof l=="string"){if(E[l]===void 0)throw new TypeError(`No method named "${l}"`);E[l](p)}})}}V.on(document,dp,'[data-bs-toggle="modal"]',function(x){const l=le.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&x.preventDefault(),V.one(l,Sh,E=>{E.defaultPrevented||V.one(l,bh,()=>{u(this)&&this.focus()})});const p=le.findOne(".modal.show");p&&rs.getInstance(p).hide(),rs.getOrCreateInstance(l).toggle(this)}),ze(rs),T(rs);const Ei=".bs.offcanvas",Th=".data-api",mp=`load${Ei}${Th}`,Ah="show",wh="showing",Ch="hiding",Rh=".offcanvas.show",gp=`show${Ei}`,_p=`shown${Ei}`,vp=`hide${Ei}`,Ph=`hidePrevented${Ei}`,Ih=`hidden${Ei}`,xp=`resize${Ei}`,yp=`click${Ei}${Th}`,bp=`keydown.dismiss${Ei}`,Sp={backdrop:!0,keyboard:!0,scroll:!1},Mp={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ti extends ce{constructor(l,p){super(l,p),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Sp}static get DefaultType(){return Mp}static get NAME(){return"offcanvas"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||V.trigger(this._element,gp,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new bo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(wh),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ah),this._element.classList.remove(wh),V.trigger(this._element,_p,{relatedTarget:l})},this._element,!0))}hide(){this._isShown&&(V.trigger(this._element,vp).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ch),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Ah,Ch),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new bo().reset(),V.trigger(this._element,Ih)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=!!this._config.backdrop;return new mh({className:"offcanvas-backdrop",isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?()=>{this._config.backdrop!=="static"?this.hide():V.trigger(this._element,Ph)}:null})}_initializeFocusTrap(){return new _h({trapElement:this._element})}_addEventListeners(){V.on(this._element,bp,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():V.trigger(this._element,Ph))})}static jQueryInterface(l){return this.each(function(){const p=Ti.getOrCreateInstance(this,l);if(typeof l=="string"){if(p[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);p[l](this)}})}}V.on(document,yp,'[data-bs-toggle="offcanvas"]',function(x){const l=le.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&x.preventDefault(),f(this))return;V.one(l,Ih,()=>{u(this)&&this.focus()});const p=le.findOne(Rh);p&&p!==l&&Ti.getInstance(p).hide(),Ti.getOrCreateInstance(l).toggle(this)}),V.on(window,mp,()=>{for(const x of le.find(Rh))Ti.getOrCreateInstance(x).show()}),V.on(window,xp,()=>{for(const x of le.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(x).position!=="fixed"&&Ti.getOrCreateInstance(x).hide()}),ze(Ti),T(Ti);const Lh={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ep=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Tp=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Ap=(x,l)=>{const p=x.nodeName.toLowerCase();return l.includes(p)?!Ep.has(p)||!!Tp.test(x.nodeValue):l.filter(E=>E instanceof RegExp).some(E=>E.test(p))},wp={allowList:Lh,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Cp={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Rp={entry:"(string|element|function|null)",selector:"(string|element)"};class Pp extends ne{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return wp}static get DefaultType(){return Cp}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[O,z]of Object.entries(this._config.content))this._setContent(l,z,O);const p=l.children[0],E=this._resolvePossibleFunction(this._config.extraClass);return E&&p.classList.add(...E.split(" ")),p}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[p,E]of Object.entries(l))super._typeCheckConfig({selector:p,entry:E},Rp)}_setContent(l,p,E){const O=le.findOne(E,l);O&&((p=this._resolvePossibleFunction(p))?c(p)?this._putElementInTemplate(h(p),O):this._config.html?O.innerHTML=this._maybeSanitize(p):O.textContent=p:O.remove())}_maybeSanitize(l){return this._config.sanitize?(function(p,E,O){if(!p.length)return p;if(O&&typeof O=="function")return O(p);const z=new window.DOMParser().parseFromString(p,"text/html"),K=[].concat(...z.body.querySelectorAll("*"));for(const se of K){const ge=se.nodeName.toLowerCase();if(!Object.keys(E).includes(ge)){se.remove();continue}const we=[].concat(...se.attributes),Re=[].concat(E["*"]||[],E[ge]||[]);for(const ye of we)Ap(ye,Re)||se.removeAttribute(ye.nodeName)}return z.body.innerHTML})(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return A(l,[void 0,this])}_putElementInTemplate(l,p){if(this._config.html)return p.innerHTML="",void p.append(l);p.textContent=l.textContent}}const Ip=new Set(["sanitize","allowList","sanitizeFn"]),Mo="fade",oa="show",Lp=".tooltip-inner",Dh=".modal",Nh="hide.bs.modal",Mr="hover",Eo="focus",To="click",Dp={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},Np={allowList:Lh,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Up={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class as extends ce{constructor(l,p){if(oh===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(l,p),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Np}static get DefaultType(){return Up}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),V.off(this._element.closest(Dh),Nh,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const l=V.trigger(this._element,this.constructor.eventName("show")),p=(d(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!p)return;this._disposePopper();const E=this._getTipElement();this._element.setAttribute("aria-describedby",E.getAttribute("id"));const{container:O}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(O.append(E),V.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(E),E.classList.add(oa),"ontouchstart"in document.documentElement)for(const z of[].concat(...document.body.children))V.on(z,"mouseover",m);this._queueCallback(()=>{V.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!V.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(oa),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))V.off(l,"mouseover",m);this._activeTrigger[To]=!1,this._activeTrigger[Eo]=!1,this._activeTrigger[Mr]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),V.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const p=this._getTemplateFactory(l).toHtml();if(!p)return null;p.classList.remove(Mo,oa),p.classList.add(`bs-${this.constructor.NAME}-auto`);const E=(O=>{do O+=Math.floor(1e6*Math.random());while(document.getElementById(O));return O})(this.constructor.NAME).toString();return p.setAttribute("id",E),this._isAnimated()&&p.classList.add(Mo),p}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new Pp({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Lp]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Mo)}_isShown(){return this.tip&&this.tip.classList.contains(oa)}_createPopper(l){const p=A(this._config.placement,[this,l,this._element]),E=Dp[p.toUpperCase()];return xo(this._element,l,this._getPopperConfig(E))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(p=>Number.parseInt(p,10)):typeof l=="function"?p=>l(p,this._element):l}_resolvePossibleFunction(l){return A(l,[this._element,this._element])}_getPopperConfig(l){const p={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:E=>{this._getTipElement().setAttribute("data-popper-placement",E.state.placement)}}]};return{...p,...A(this._config.popperConfig,[void 0,p])}}_setListeners(){const l=this._config.trigger.split(" ");for(const p of l)if(p==="click")V.on(this._element,this.constructor.eventName("click"),this._config.selector,E=>{const O=this._initializeOnDelegatedTarget(E);O._activeTrigger[To]=!(O._isShown()&&O._activeTrigger[To]),O.toggle()});else if(p!=="manual"){const E=p===Mr?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),O=p===Mr?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");V.on(this._element,E,this._config.selector,z=>{const K=this._initializeOnDelegatedTarget(z);K._activeTrigger[z.type==="focusin"?Eo:Mr]=!0,K._enter()}),V.on(this._element,O,this._config.selector,z=>{const K=this._initializeOnDelegatedTarget(z);K._activeTrigger[z.type==="focusout"?Eo:Mr]=K._element.contains(z.relatedTarget),K._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},V.on(this._element.closest(Dh),Nh,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,p){clearTimeout(this._timeout),this._timeout=setTimeout(l,p)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const p=ht.getDataAttributes(this._element);for(const E of Object.keys(p))Ip.has(E)&&delete p[E];return l={...p,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:h(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[p,E]of Object.entries(this._config))this.constructor.Default[p]!==E&&(l[p]=E);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const p=as.getOrCreateInstance(this,l);if(typeof l=="string"){if(p[l]===void 0)throw new TypeError(`No method named "${l}"`);p[l]()}})}}T(as);const Op=".popover-header",Fp=".popover-body",Bp={...as.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},kp={...as.DefaultType,content:"(null|string|element|function)"};class la extends as{static get Default(){return Bp}static get DefaultType(){return kp}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Op]:this._getTitle(),[Fp]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const p=la.getOrCreateInstance(this,l);if(typeof l=="string"){if(p[l]===void 0)throw new TypeError(`No method named "${l}"`);p[l]()}})}}T(la);const Ao=".bs.scrollspy",zp=`activate${Ao}`,Uh=`click${Ao}`,Hp=`load${Ao}.data-api`,Ns="active",wo="[href]",Oh=".nav-link",Vp=`${Oh}, .nav-item > ${Oh}, .list-group-item`,Gp={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Wp={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Er extends ce{constructor(l,p){super(l,p),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Gp}static get DefaultType(){return Wp}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=h(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(p=>Number.parseFloat(p))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(V.off(this._config.target,Uh),V.on(this._config.target,Uh,wo,l=>{const p=this._observableSections.get(l.target.hash);if(p){l.preventDefault();const E=this._rootElement||window,O=p.offsetTop-this._element.offsetTop;if(E.scrollTo)return void E.scrollTo({top:O,behavior:"smooth"});E.scrollTop=O}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(p=>this._observerCallback(p),l)}_observerCallback(l){const p=K=>this._targetLinks.get(`#${K.target.id}`),E=K=>{this._previousScrollData.visibleEntryTop=K.target.offsetTop,this._process(p(K))},O=(this._rootElement||document.documentElement).scrollTop,z=O>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=O;for(const K of l){if(!K.isIntersecting){this._activeTarget=null,this._clearActiveClass(p(K));continue}const se=K.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(z&&se){if(E(K),!O)return}else z||se||E(K)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=le.find(wo,this._config.target);for(const p of l){if(!p.hash||f(p))continue;const E=le.findOne(decodeURI(p.hash),this._element);u(E)&&(this._targetLinks.set(decodeURI(p.hash),p),this._observableSections.set(p.hash,E))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(Ns),this._activateParents(l),V.trigger(this._element,zp,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains("dropdown-item"))le.findOne(".dropdown-toggle",l.closest(".dropdown")).classList.add(Ns);else for(const p of le.parents(l,".nav, .list-group"))for(const E of le.prev(p,Vp))E.classList.add(Ns)}_clearActiveClass(l){l.classList.remove(Ns);const p=le.find(`${wo}.${Ns}`,l);for(const E of p)E.classList.remove(Ns)}static jQueryInterface(l){return this.each(function(){const p=Er.getOrCreateInstance(this,l);if(typeof l=="string"){if(p[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);p[l]()}})}}V.on(window,Hp,()=>{for(const x of le.find('[data-bs-spy="scroll"]'))Er.getOrCreateInstance(x)}),T(Er);const os=".bs.tab",Xp=`hide${os}`,jp=`hidden${os}`,$p=`show${os}`,qp=`shown${os}`,Yp=`click${os}`,Kp=`keydown${os}`,Zp=`load${os}`,Jp="ArrowLeft",Fh="ArrowRight",Qp="ArrowUp",Bh="ArrowDown",Co="Home",kh="End",ls="active",zh="fade",Ro="show",Hh=".dropdown-toggle",Po=`:not(${Hh})`,Vh='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Io=`.nav-link${Po}, .list-group-item${Po}, [role="tab"]${Po}, ${Vh}`,em=`.${ls}[data-bs-toggle="tab"], .${ls}[data-bs-toggle="pill"], .${ls}[data-bs-toggle="list"]`;class cs extends ce{constructor(l){super(l),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),V.on(this._element,Kp,p=>this._keydown(p)))}static get NAME(){return"tab"}show(){const l=this._element;if(this._elemIsActive(l))return;const p=this._getActiveElem(),E=p?V.trigger(p,Xp,{relatedTarget:l}):null;V.trigger(l,$p,{relatedTarget:p}).defaultPrevented||E&&E.defaultPrevented||(this._deactivate(p,l),this._activate(l,p))}_activate(l,p){l&&(l.classList.add(ls),this._activate(le.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),V.trigger(l,qp,{relatedTarget:p})):l.classList.add(Ro)},l,l.classList.contains(zh)))}_deactivate(l,p){l&&(l.classList.remove(ls),l.blur(),this._deactivate(le.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),V.trigger(l,jp,{relatedTarget:p})):l.classList.remove(Ro)},l,l.classList.contains(zh)))}_keydown(l){if(![Jp,Fh,Qp,Bh,Co,kh].includes(l.key))return;l.stopPropagation(),l.preventDefault();const p=this._getChildren().filter(O=>!f(O));let E;if([Co,kh].includes(l.key))E=p[l.key===Co?0:p.length-1];else{const O=[Fh,Bh].includes(l.key);E=P(p,l.target,O,!0)}E&&(E.focus({preventScroll:!0}),cs.getOrCreateInstance(E).show())}_getChildren(){return le.find(Io,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,p){this._setAttributeIfNotExists(l,"role","tablist");for(const E of p)this._setInitialAttributesOnChild(E)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const p=this._elemIsActive(l),E=this._getOuterElement(l);l.setAttribute("aria-selected",p),E!==l&&this._setAttributeIfNotExists(E,"role","presentation"),p||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const p=le.getElementFromSelector(l);p&&(this._setAttributeIfNotExists(p,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(p,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,p){const E=this._getOuterElement(l);if(!E.classList.contains("dropdown"))return;const O=(z,K)=>{const se=le.findOne(z,E);se&&se.classList.toggle(K,p)};O(Hh,ls),O(".dropdown-menu",Ro),E.setAttribute("aria-expanded",p)}_setAttributeIfNotExists(l,p,E){l.hasAttribute(p)||l.setAttribute(p,E)}_elemIsActive(l){return l.classList.contains(ls)}_getInnerElement(l){return l.matches(Io)?l:le.findOne(Io,l)}_getOuterElement(l){return l.closest(".nav-item, .list-group-item")||l}static jQueryInterface(l){return this.each(function(){const p=cs.getOrCreateInstance(this);if(typeof l=="string"){if(p[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);p[l]()}})}}V.on(document,Yp,Vh,function(x){["A","AREA"].includes(this.tagName)&&x.preventDefault(),f(this)||cs.getOrCreateInstance(this).show()}),V.on(window,Zp,()=>{for(const x of le.find(em))cs.getOrCreateInstance(x)}),T(cs);const Vi=".bs.toast",tm=`mouseover${Vi}`,nm=`mouseout${Vi}`,im=`focusin${Vi}`,sm=`focusout${Vi}`,rm=`hide${Vi}`,am=`hidden${Vi}`,om=`show${Vi}`,lm=`shown${Vi}`,Gh="hide",ca="show",ha="showing",cm={animation:"boolean",autohide:"boolean",delay:"number"},hm={animation:!0,autohide:!0,delay:5e3};class Tr extends ce{constructor(l,p){super(l,p),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return hm}static get DefaultType(){return cm}static get NAME(){return"toast"}show(){V.trigger(this._element,om).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Gh),v(this._element),this._element.classList.add(ca,ha),this._queueCallback(()=>{this._element.classList.remove(ha),V.trigger(this._element,lm),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(V.trigger(this._element,rm).defaultPrevented||(this._element.classList.add(ha),this._queueCallback(()=>{this._element.classList.add(Gh),this._element.classList.remove(ha,ca),V.trigger(this._element,am)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ca),super.dispose()}isShown(){return this._element.classList.contains(ca)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,p){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=p;break;case"focusin":case"focusout":this._hasKeyboardInteraction=p}if(p)return void this._clearTimeout();const E=l.relatedTarget;this._element===E||this._element.contains(E)||this._maybeScheduleHide()}_setListeners(){V.on(this._element,tm,l=>this._onInteraction(l,!0)),V.on(this._element,nm,l=>this._onInteraction(l,!1)),V.on(this._element,im,l=>this._onInteraction(l,!0)),V.on(this._element,sm,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const p=Tr.getOrCreateInstance(this,l);if(typeof l=="string"){if(p[l]===void 0)throw new TypeError(`No method named "${l}"`);p[l](this)}})}}return ze(Tr),T(Tr),{Alert:dt,Button:$e,Carousel:hn,Collapse:Si,Dropdown:Xn,Modal:rs,Offcanvas:Ti,Popover:la,ScrollSpy:Er,Tab:cs,Toast:Tr,Tooltip:as}})})(Ga)),Ga.exports}ym();const iu={info:"text-bg-primary",success:"text-bg-success",warning:"text-bg-warning",error:"text-bg-danger"},su={info:"btn-close-white",success:"btn-close-white",warning:"",error:"btn-close-white"};class bm{constructor(e,t={}){this.parent=e,this.type=t.type??"info",this.title=t.title??"Уведомление",this.message=t.message??"",this.delay=t.delay??3500}get backgroundClass(){return iu[this.type]??iu.info}get closeButtonClass(){return su[this.type]??su.info}getHtml(e){return`
				<div id="${e}" class="toast align-items-center border-0 ${this.backgroundClass}" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="${this.delay}">
					<div class="d-flex">
						<div class="toast-body">
							<strong class="me-2">${this.title}</strong>
							<span>${this.message}</span>
						</div>
						<button type="button" class="btn-close ${this.closeButtonClass} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
					</div>
				</div>
			`}render(){if(!this.parent)return;const e=`toast_${crypto.randomUUID()}`;this.parent.insertAdjacentHTML("beforeend",this.getHtml(e));const t=document.getElementById(e);if(!t)return;t.addEventListener("hidden.bs.toast",()=>{t.remove()},{once:!0});const n=window.bootstrap;if(!n?.Toast){t.classList.add("show"),setTimeout(()=>t.remove(),this.delay);return}n.Toast.getOrCreateInstance(t,{autohide:!0,delay:this.delay}).show()}}class Sm{constructor(e=document.body){this.parent=e,this.containerId="global_toasts_container"}get container(){return document.getElementById(this.containerId)}render(){return this.container?this.container:(this.parent.insertAdjacentHTML("beforeend",`<div id="${this.containerId}" class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1080;"></div>`),this.container)}show(e,t={}){new bm(this.render(),{message:e,...t}).render()}showSuccess(e,t="Успешно"){this.show(e,{title:t,type:"success"})}showError(e,t="Ошибка"){this.show(e,{title:t,type:"error"})}showInfo(e,t="Информация"){this.show(e,{title:t,type:"info"})}showWarning(e,t="Внимание"){this.show(e,{title:t,type:"warning"})}}let Uo;const Kn=()=>(Uo||(Uo=new Sm),Uo);class Ms{constructor(e,t,n=()=>{},i="primary"){this.parent=e,this.text=t,this.type=i,this.onClick=n}render(){const e=document.createElement("button");e.type="button",e.className=`btn btn-${this.type}`,e.textContent=this.text,e.addEventListener("click",this.onClick),this.parent.appendChild(e)}}function Mm(...s){return[].concat(...s).sort((e,t)=>t-e).join(" ")}function ru(s){const e=String(s).toLowerCase().replace(/[^а-яa-z0-9]/g,"");return e===e.split("").reverse().join("")}function au(s){const e=String(s).toLowerCase().replace(/[^а-яa-z0-9]/g,"");let t=0,n=e.length-1;for(;t<n;){if(e[t]!==e[n])return!1;t++,n--}return!0}function Em(s){const e=[s.id*3,s.title.length,s.id*7],t=[s.description.length%20,s.id*5],n=[s.title.length*2,s.id,s.description.length%15];return{a:e,b:t,c:n}}class Tm{constructor(e){this.parent=e}getTasksHtml(e){const{a:t,b:n,c:i}=Em(e),r=Mm(t,n,i),a=e.title,o=e.secondTaskText.split(" ").slice(0,3).join(" "),c=h=>h?"Да":"Нет";return`
            <div class="border-top pt-3 mt-3 d-flex flex-column gap-3">
                <div>
                    <h4 class="text-primary fs-6 fw-semibold mb-2">Задача 1: mergeAndSort</h4>
                    <p class="text-secondary mb-2">Массивы: [${t}], [${n}], [${i}]</p>
                    <p class="mb-0">Результат: <span class="fw-semibold">${r}</span></p>
                </div>

                <div>
                    <h4 class="text-primary fs-6 fw-semibold mb-2">Задача 2: Проверка палиндрома</h4>
                    <p class="text-secondary mb-2">Текст: "${a}"</p>
                    <p class="mb-2">isPalindrome: <span class="fw-semibold">${c(ru(a))}</span></p>
                    <p class="mb-3">isPalindrome2: <span class="fw-semibold">${c(au(a))}</span></p>

                    <p class="text-secondary mb-2">Текст: "${o}"</p>
                    <p class="mb-2">isPalindrome: <span class="fw-semibold">${c(ru(o))}</span></p>
                    <p class="mb-0">isPalindrome2: <span class="fw-semibold">${c(au(o))}</span></p>
                </div>
            </div>
        `}getHtml(e){return`
            <div class="d-flex w-100" id="card-${e.id}">
                <div class="card p-3">
                    <div class="rounded-3 overflow-hidden">
                        <img src="${e.image}" alt="${e.title}" class="aspect-1 w-100 h-100 object-fit-cover">
                    </div>

                    <h3 class="text-primary fs-4 fw-medium pt-3">${e.title}</h3>

                    <p class="text-secondary flex-grow-1">${e.description}</p>

                    ${this.getTasksHtml(e)}

                    <div id="card-${e.id}-controls" class="d-flex gap-2 justify-content-end"></div>
                </div>
            </div>
        `}controlsContainer(e){return document.getElementById(`card-${e.id}-controls`)}render(e,t=()=>{},n=()=>{},i=()=>{}){const r=this.getHtml(e);this.parent.insertAdjacentHTML("beforeend",r);const a=this.controlsContainer(e);new Ms(a,"Удалить",()=>n(e),"danger").render(),new Ms(a,"Редактировать",()=>i(e),"secondary").render(),new Ms(a,"Подробнее",()=>t(e)).render()}}class Am{constructor(e,t=()=>{},n=()=>{},i=()=>{},r=()=>{},a=()=>{},o="",c=()=>{},h=3,u=()=>{}){this.parent=e,this.onCreatePageOpen=t,this.onClick=n,this.onDelete=i,this.onEditPageOpen=r,this.onSearchRequest=a,this.onSearchDraftChange=c,this.searchDraft=String(o??""),this.pageSize=Number(h)||1,this.onPageSizeChange=u,this.services=[]}getHtml(){return`
                <div class="d-flex flex-column gap-3">
                    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2" id="services_header">
                        <h2 class="text-primary fs-2 fw-medium">Наши услуги</h2>
                        <div id="services_header_controls" class="d-flex align-items-center gap-2"></div>
                    </div>

                    <div class="d-flex align-items-stretch gap-2">
                        <input id="services_search" class="form-control flex-grow-1" type="search" placeholder="Поиск по услугам..." aria-label="Поиск по услугам">
                        <button class="btn btn-outline-primary" id="services_search_btn" type="button">Найти</button>
                    </div>

                    <div id="services_cards" class="d-grid gap-4"></div>
                </div>
            `}get servicesContainer(){return document.getElementById("services_cards")}get headerControls(){return document.getElementById("services_header_controls")}get searchInput(){return document.getElementById("services_search")}get searchButton(){return document.getElementById("services_search_btn")}get pageSizeInput(){return document.getElementById("services_page_size")}renderCards(e){if(this.servicesContainer.innerHTML="",!e||e.length===0){this.servicesContainer.insertAdjacentHTML("beforeend",'<p class="text-secondary mb-0">Ничего не найдено по вашему запросу.</p>');return}e.forEach(t=>{new Tm(this.servicesContainer).render(t,this.onClick,this.onDelete,this.onEditPageOpen)})}onSearchDraftInput(e){const t=String(e.target.value??"");this.searchDraft=t,this.onSearchDraftChange(t)}onSearchSubmit(){const e=String(this.searchInput?.value??"").trim();this.onSearchRequest(e)}onPageSizeChangeEvent(e){const t=e?.target?.value,n=Number.parseInt(String(t??""),10),i=Number.isFinite(n)&&n>0?n:1;this.pageSize=i,this.pageSizeInput&&(this.pageSizeInput.value=String(i)),this.onPageSizeChange(i)}render(e){this.services=Array.isArray(e)?e:[];const t=this.getHtml();this.parent.insertAdjacentHTML("beforeend",t),this.headerControls?.insertAdjacentHTML("beforeend",`
                <div class="d-flex align-items-center gap-2">
                    <label for="services_page_size" class="text-secondary mb-0">На странице</label>
                    <input
                        id="services_page_size"
                        class="form-control form-control-sm w-auto"
                        type="number"
                        min="1"
                        step="1"
                        value="${this.pageSize}"
                        aria-label="Количество карточек на странице"
                    >
                </div>
            `),new Ms(this.headerControls,"Создать",this.onCreatePageOpen,"primary").render(),this.renderCards(this.services),this.searchInput&&(this.searchInput.value=this.searchDraft,this.searchInput.addEventListener("input",this.onSearchDraftInput.bind(this))),this.searchButton?.addEventListener("click",this.onSearchSubmit.bind(this)),this.pageSizeInput?.addEventListener("change",this.onPageSizeChangeEvent.bind(this))}}class wm{constructor(e){this.parent=e}onClick(){es("main")}render(){new Ms(this.parent,"Домой",this.onClick.bind(this)).render()}}class xc{constructor(e,t="page_header"){this.parent=e,this.headerId=t}get homeButtonId(){return`${this.headerId}_home_button`}get homeButtonContainer(){return document.getElementById(this.homeButtonId)}onHomeClick(){es("main")}getHtml(){return`
                <header class="d-flex justify-content-between align-items-center flex-wrap gap-2 bg-white rounded-3 border px-3 py-2">
                <div id="${this.homeButtonId}"></div>
                    <h2 class="text-primary fs-3 fw-bold mb-0">RT-Bank</h2>
                </header>
            `}render(){this.parent.insertAdjacentHTML("beforeend",this.getHtml()),new wm(this.homeButtonContainer).render()}}class Cm{get(e,t){return this._request(e,{method:"GET"},t)}post(e,t,n){return this._request(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t??null)},n)}patch(e,t,n){return this._request(e,{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t??null)},n)}delete(e,t){return this._request(e,{method:"DELETE"},t)}async _request(e,t,n){try{const i=await fetch(e,t),r=i.status,a=await i.text();if(!a){n(null,r);return}try{const o=JSON.parse(a);n(o,r)}catch(o){console.error("Ошибка парсинга JSON:",o),n(null,r)}}catch(i){console.error("Ошибка запроса:",i),n(null,0)}}}const Qs=new Cm;class Rm{constructor(){const e="http://localhost:3001";typeof window<"u"&&window.location?this.baseUrl=window.location.origin:this.baseUrl=e}getServices(e,t=1,n=10){const i=new URLSearchParams;return e&&i.append("title",e),i.append("page",t),i.append("limit",n),`${this.baseUrl}/services?${i.toString()}`}getServiceById(e){return`${this.baseUrl}/services/${e}`}getServiceByPath(e){return`${this.baseUrl}/services/by-path/${encodeURIComponent(e)}`}createService(){return`${this.baseUrl}/services`}removeServiceById(e){return`${this.baseUrl}/services/${e}`}updateServiceById(e){return`${this.baseUrl}/services/${e}`}}const er=new Rm;class Pm{constructor(e){this.parent=e,this.currentPage=1,this.limit=3,this.total=0,this.currentQuery="",this.searchDraft="",this.pendingNavigatePath=null,this.pendingScrollToPath=null}getHtml(){return`
                <div class="container d-flex flex-column gap-4 py-5" id="main_page">
                    <div id="main_page_header"></div>
                    <div class="d-flex flex-column gap-1">
                        <h1 class="text-primary fs-1 fw-bold">RT-Bank</h1>
                        <p class="text-secondary">Добро пожаловать в РТ Банк! Мы рады приветствовать вас в нашем банке, который предлагает широкий спектр финансовых услуг и продуктов для удовлетворения ваших потребностей. Наша миссия - обеспечить вам надежные и инновационные решения для управления вашими финансами, чтобы вы могли достичь своих финансовых целей с уверенностью и комфортом.</p>
                    </div>
                    <div id="main_service_block"></div>
                    <nav class="d-flex justify-content-center">
                        <div class="d-flex align-items-center gap-3" id="services_pagination_nav">
                            <button class="btn btn-outline-primary" id="page_prev_btn" type="button" aria-label="Предыдущая страница">←</button>
                            <div class="text-primary fw-semibold" id="page_indicator" aria-live="polite"></div>
                            <button class="btn btn-outline-primary" id="page_next_btn" type="button" aria-label="Следующая страница">→</button>
                        </div>
                    </nav>
                </div>
            `}get mainPageContainer(){return document.getElementById("main_page")}get pageHeaderContainer(){return document.getElementById("main_page_header")}get serviceBlock(){return document.getElementById("main_service_block")}fetchData(e="",t=1){this.currentQuery=e,this.currentPage=t,Qs.get(er.getServices(e,t,this.limit),(n,i)=>{i===200&&n&&(this.services=n.items,this.total=n.total,this.renderCards())})}consumeNavigateRequest(){const e=sessionStorage.getItem("main.navigateTo");if(e){sessionStorage.removeItem("main.navigateTo");try{const t=JSON.parse(e),n=String(t?.path??"").trim();n&&(this.pendingNavigatePath=n)}catch{}}}navigateToServiceInList(e){const t=String(e??"").trim();if(!t){this.fetchData(this.currentQuery,this.currentPage);return}Qs.get(er.getServices("",1,1e4),(n,i)=>{if(i!==200||!n||!Array.isArray(n.items)){this.fetchData("",1);return}const r=n.items.findIndex(o=>String(o?.path??"")===t);if(r<0){this.fetchData("",1);return}const a=Math.floor(r/this.limit)+1;this.pendingScrollToPath=t,this.searchDraft="",this.fetchData("",a)})}renderCards(){if(this.serviceBlock.innerHTML="",this.currentServicesBlock=new Am(this.serviceBlock,this.onCreatePageOpen.bind(this),this.onClick.bind(this),this.onDelete.bind(this),this.onEditPageOpen.bind(this),this.onSearchSubmit.bind(this),this.searchDraft,this.onSearchDraftChange.bind(this),this.limit,this.onPageSizeChange.bind(this)),this.currentServicesBlock.render(this.services),this.renderPagination(),this.pendingScrollToPath){const e=this.services?.find(t=>String(t?.path??"")===this.pendingScrollToPath);e?.id&&document.getElementById(`card-${e.id}`)?.scrollIntoView({behavior:"smooth",block:"center"}),this.pendingScrollToPath=null}}onClick(e){es(e.path)}onCreatePageOpen(){sessionStorage.setItem("serviceEditor.mode","create"),sessionStorage.removeItem("serviceEditor.service"),es("serviceEditor")}onEditPageOpen(e){sessionStorage.setItem("serviceEditor.mode","edit"),sessionStorage.setItem("serviceEditor.service",JSON.stringify(e??{})),es("serviceEditor")}onDelete(e){Qs.delete(er.removeServiceById(e.id),(t,n)=>{if(n!==0){if(n===204){const i=Math.max(0,(this.total??0)-1),r=Math.max(1,Math.ceil(i/this.limit)),a=Math.min(this.currentPage,r);this.fetchData(this.currentQuery,a),Kn().showWarning(`Услуга "${e.title}" удалена из списка.`);return}Kn().showWarning(`Не удалось удалить услугу "${e.title}".`)}})}onPageChange(e){this.fetchData(this.currentQuery,e)}onSearchDraftChange(e){this.searchDraft=String(e??"")}onSearchSubmit(e){const t=String(e??"").trim();this.currentQuery=t,this.fetchData(t,1)}onPageSizeChange(e){const t=Number.parseInt(String(e??""),10),n=Number.isFinite(t)&&t>0?t:1;n!==this.limit&&(this.limit=n,this.fetchData(this.currentQuery,1))}renderPagination(){const e=Math.max(1,Math.ceil((this.total??0)/this.limit)),t=document.getElementById("services_pagination_nav"),n=document.getElementById("page_prev_btn"),i=document.getElementById("page_next_btn"),r=document.getElementById("page_indicator");if(!(!t||!n||!i||!r)){if(e<=1){t.classList.add("d-none");return}t.classList.remove("d-none"),r.textContent=String(this.currentPage),n.disabled=this.currentPage<=1,i.disabled=this.currentPage>=e,n.onclick=()=>{this.currentPage<=1||this.onPageChange(this.currentPage-1)},i.onclick=()=>{this.currentPage>=e||this.onPageChange(this.currentPage+1)}}}render(){this.parent.innerHTML="";const e=this.getHtml();if(this.parent.insertAdjacentHTML("beforeend",e),new xc(this.pageHeaderContainer,"main_page_header_block").render(),this.consumeNavigateRequest(),this.pendingNavigatePath){const n=this.pendingNavigatePath;this.pendingNavigatePath=null,this.navigateToServiceInList(n);return}this.fetchData()}}class Im{getListHtml(e){return e.map(t=>`<li>${t}</li>`).join("")}getHtml(e,t){return`
                <div class="row g-3">
                    <div class="col-12">
                        <div class="card p-4 border-0 shadow-sm h-100">
                            <h2 class="fs-5 fw-semibold mb-3">${e}</h2>
                            <ul class="mb-0 text-secondary d-flex flex-column gap-2">
                                ${this.getListHtml(t)}
                            </ul>
                        </div>
                    </div>
                </div>
            `}}const yc="183",tr={ROTATE:0,DOLLY:1,PAN:2},Js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lm=0,ou=1,Dm=2,Wa=1,Nm=2,Or=3,Oi=0,Tn=1,ci=2,Ni=0,nr=1,lu=2,cu=3,hu=4,Um=5,vs=100,Om=101,Fm=102,Bm=103,km=104,zm=200,Hm=201,Vm=202,Gm=203,Sl=204,Ml=205,Wm=206,Xm=207,jm=208,$m=209,qm=210,Ym=211,Km=212,Zm=213,Jm=214,El=0,Tl=1,Al=2,rr=3,wl=4,Cl=5,Rl=6,Pl=7,Ud=0,Qm=1,eg=2,di=0,Od=1,Fd=2,Bd=3,kd=4,zd=5,Hd=6,Vd=7,uu="attached",tg="detached",Gd=300,Es=301,ar=302,Oo=303,Fo=304,io=306,or=1e3,hi=1001,Za=1002,Jt=1003,Wd=1004,Fr=1005,Qt=1006,Xa=1007,Li=1008,Pn=1009,Xd=1010,jd=1011,Vr=1012,bc=1013,mi=1014,zn=1015,Fi=1016,Sc=1017,Mc=1018,Gr=1020,$d=35902,qd=35899,Yd=1021,Kd=1022,Hn=1023,Bi=1026,ys=1027,Ec=1028,Tc=1029,lr=1030,Ac=1031,wc=1033,ja=33776,$a=33777,qa=33778,Ya=33779,Il=35840,Ll=35841,Dl=35842,Nl=35843,Ul=36196,Ol=37492,Fl=37496,Bl=37488,kl=37489,zl=37490,Hl=37491,Vl=37808,Gl=37809,Wl=37810,Xl=37811,jl=37812,$l=37813,ql=37814,Yl=37815,Kl=37816,Zl=37817,Jl=37818,Ql=37819,ec=37820,tc=37821,nc=36492,ic=36494,sc=36495,rc=36283,ac=36284,oc=36285,lc=36286,Wr=2300,Xr=2301,Bo=2302,du=2303,fu=2400,pu=2401,mu=2402,ng=2500,ig=0,Zd=1,cc=2,sg=3200,Jd=0,rg=1,Ji="",cn="srgb",Sn="srgb-linear",Ja="linear",Et="srgb",Os=7680,gu=519,ag=512,og=513,lg=514,Cc=515,cg=516,hg=517,Rc=518,ug=519,hc=35044,_u="300 es",ui=2e3,jr=2001;function dg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pg(){const s=$r("canvas");return s.style.display="block",s}const vu={};function Qa(...s){const e="THREE."+s.shift();console.log(e,...s)}function Qd(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Be(...s){s=Qd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ge(...s){s=Qd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function eo(...s){const e=s.join(" ");e in vu||(vu[e]=!0,Be(...s))}function mg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const gg={[El]:Tl,[Al]:Rl,[wl]:Pl,[rr]:Cl,[Tl]:El,[Rl]:Al,[Pl]:wl,[Cl]:rr};class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xu=1234567;const kr=Math.PI/180,cr=180/Math.PI;function Qn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ot(s,e,t){return Math.max(e,Math.min(t,s))}function Pc(s,e){return(s%e+e)%e}function _g(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function vg(s,e,t){return s!==e?(t-s)/(e-s):0}function zr(s,e,t){return(1-t)*s+t*e}function xg(s,e,t,n){return zr(s,e,1-Math.exp(-t*n))}function yg(s,e=1){return e-Math.abs(Pc(s,e*2)-e)}function bg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Sg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Mg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Eg(s,e){return s+Math.random()*(e-s)}function Tg(s){return s*(.5-Math.random())}function Ag(s){s!==void 0&&(xu=s);let e=xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wg(s){return s*kr}function Cg(s){return s*cr}function Rg(s){return(s&s-1)===0&&s!==0}function Pg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ig(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lg(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),h=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*f,c*d,o*h);break;case"YZY":s.set(c*d,o*u,c*f,o*h);break;case"ZXZ":s.set(c*f,c*d,o*u,o*h);break;case"XZX":s.set(o*u,c*v,c*m,o*h);break;case"YXY":s.set(c*m,o*u,c*v,o*h);break;case"ZYZ":s.set(c*v,c*m,o*u,o*h);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ef={DEG2RAD:kr,RAD2DEG:cr,generateUUID:Qn,clamp:ot,euclideanModulo:Pc,mapLinear:_g,inverseLerp:vg,lerp:zr,damp:xg,pingpong:yg,smoothstep:bg,smootherstep:Sg,randInt:Mg,randFloat:Eg,randFloatSpread:Tg,seededRandom:Ag,degToRad:wg,radToDeg:Cg,isPowerOfTwo:Rg,ceilPowerOfTwo:Pg,floorPowerOfTwo:Ig,setQuaternionFromProperEuler:Lg,normalize:Tt,denormalize:Zn};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ei{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],h=n[i+1],u=n[i+2],f=n[i+3],d=r[a+0],m=r[a+1],v=r[a+2],S=r[a+3];if(f!==S||c!==d||h!==m||u!==v){let _=c*d+h*m+u*v+f*S;_<0&&(d=-d,m=-m,v=-v,S=-S,_=-_);let g=1-o;if(_<.9995){const T=Math.acos(_),A=Math.sin(T);g=Math.sin(g*T)/A,o=Math.sin(o*T)/A,c=c*g+d*o,h=h*g+m*o,u=u*g+v*o,f=f*g+S*o}else{c=c*g+d*o,h=h*g+m*o,u=u*g+v*o,f=f*g+S*o;const T=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=T,h*=T,u*=T,f*=T}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a],d=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+u*f+c*m-h*d,e[t+1]=c*v+u*d+h*f-o*m,e[t+2]=h*v+u*m+o*d-c*f,e[t+3]=u*v-o*f-c*d-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(i/2),f=o(r/2),d=c(n/2),m=c(i/2),v=c(r/2);switch(a){case"XYZ":this._x=d*u*f+h*m*v,this._y=h*m*f-d*u*v,this._z=h*u*v+d*m*f,this._w=h*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+h*m*v,this._y=h*m*f-d*u*v,this._z=h*u*v-d*m*f,this._w=h*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-h*m*v,this._y=h*m*f+d*u*v,this._z=h*u*v+d*m*f,this._w=h*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-h*m*v,this._y=h*m*f+d*u*v,this._z=h*u*v-d*m*f,this._w=h*u*f+d*m*v;break;case"YZX":this._x=d*u*f+h*m*v,this._y=h*m*f+d*u*v,this._z=h*u*v-d*m*f,this._w=h*u*f-d*m*v;break;case"XZY":this._x=d*u*f-h*m*v,this._y=h*m*f-d*u*v,this._z=h*u*v+d*m*f,this._w=h*u*f+d*m*v;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-h)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+h)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-h)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(r+h)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+i*h-r*c,this._y=i*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-i*o,this._w=a*u-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,t=Math.sin(t*h)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*i-o*n),u=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+c*h+a*f-o*u,this.y=n+c*u+o*h-r*f,this.z=i+c*f+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new k,yu=new ei;class nt{constructor(e,t,n,i,r,a,o,c,h){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,h)}set(e,t,n,i,r,a,o,c,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],f=n[7],d=n[2],m=n[5],v=n[8],S=i[0],_=i[3],g=i[6],T=i[1],A=i[4],w=i[7],P=i[2],I=i[5],D=i[8];return r[0]=a*S+o*T+c*P,r[3]=a*_+o*A+c*I,r[6]=a*g+o*w+c*D,r[1]=h*S+u*T+f*P,r[4]=h*_+u*A+f*I,r[7]=h*g+u*w+f*D,r[2]=d*S+m*T+v*P,r[5]=d*_+m*A+v*I,r[8]=d*g+m*w+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+i*r*h-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=u*a-o*h,d=o*c-u*r,m=h*r-a*c,v=t*f+n*d+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(i*h-u*n)*S,e[2]=(o*n-i*a)*S,e[3]=d*S,e[4]=(u*t-i*c)*S,e[5]=(i*r-o*t)*S,e[6]=m*S,e[7]=(n*c-h*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-i*h,i*c,-i*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zo.makeScale(e,t)),this}rotate(e){return this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new nt,bu=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dg(){const s={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?Ja:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Sn]:{primaries:e,whitePoint:n,transfer:Ja,toXYZ:bu,fromXYZ:Su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:bu,fromXYZ:Su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),s}const mt=Dg();function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class Ng{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=$r("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ug=0;class Ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ho(i[a].image)):r.push(Ho(i[a]))}else r=Ho(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ho(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ng.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let Og=0;const Vo=new k;class rn extends Ts{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=hi,i=hi,r=Qt,a=Li,o=Hn,c=Pn,h=rn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Qn(),this.name="",this.source=new Ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Gd;rn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,h=c[0],u=c[4],f=c[8],d=c[1],m=c[5],v=c[9],S=c[2],_=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(v+_)<.1&&Math.abs(h+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,w=(m+1)/2,P=(g+1)/2,I=(u+d)/4,D=(f+S)/4,b=(v+_)/4;return A>w&&A>P?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=I/n,r=D/n):w>P?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=I/i,r=b/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=D/r,i=b/r),this.set(n,i,r,t),this}let T=Math.sqrt((_-v)*(_-v)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(_-v)/T,this.y=(f-S)/T,this.z=(d-u)/T,this.w=Math.acos((h+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fg extends Ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new rn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ic(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Fg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tf extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bg extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class at{constructor(e,t,n,i,r,a,o,c,h,u,f,d,m,v,S,_){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,h,u,f,d,m,v,S,_)}set(e,t,n,i,r,a,o,c,h,u,f,d,m,v,S,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=h,g[6]=u,g[10]=f,g[14]=d,g[3]=m,g[7]=v,g[11]=S,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*f,v=o*u,S=o*f;t[0]=c*u,t[4]=-c*f,t[8]=h,t[1]=m+v*h,t[5]=d-S*h,t[9]=-o*c,t[2]=S-d*h,t[6]=v+m*h,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,v=h*u,S=h*f;t[0]=d+S*o,t[4]=v*o-m,t[8]=a*h,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=S+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,v=h*u,S=h*f;t[0]=d-S*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*f,v=o*u,S=o*f;t[0]=c*u,t[4]=v*h-m,t[8]=d*h+S,t[1]=c*f,t[5]=S*h+d,t[9]=m*h-v,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*h,v=o*c,S=o*h;t[0]=c*u,t[4]=S-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=m*f+v,t[10]=d-S*f}else if(e.order==="XZY"){const d=a*c,m=a*h,v=o*c,S=o*h;t[0]=c*u,t[4]=-f,t[8]=h*u,t[1]=d*f+S,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kg,e,zg)}lookAt(e,t,n){const i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Wi.crossVectors(n,Cn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Wi.crossVectors(n,Cn)),Wi.normalize(),pa.crossVectors(Cn,Wi),i[0]=Wi.x,i[4]=pa.x,i[8]=Cn.x,i[1]=Wi.y,i[5]=pa.y,i[9]=Cn.y,i[2]=Wi.z,i[6]=pa.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],f=n[5],d=n[9],m=n[13],v=n[2],S=n[6],_=n[10],g=n[14],T=n[3],A=n[7],w=n[11],P=n[15],I=i[0],D=i[4],b=i[8],C=i[12],te=i[1],L=i[5],j=i[9],$=i[13],J=i[2],X=i[6],q=i[10],H=i[14],he=i[3],oe=i[7],be=i[11],V=i[15];return r[0]=a*I+o*te+c*J+h*he,r[4]=a*D+o*L+c*X+h*oe,r[8]=a*b+o*j+c*q+h*be,r[12]=a*C+o*$+c*H+h*V,r[1]=u*I+f*te+d*J+m*he,r[5]=u*D+f*L+d*X+m*oe,r[9]=u*b+f*j+d*q+m*be,r[13]=u*C+f*$+d*H+m*V,r[2]=v*I+S*te+_*J+g*he,r[6]=v*D+S*L+_*X+g*oe,r[10]=v*b+S*j+_*q+g*be,r[14]=v*C+S*$+_*H+g*V,r[3]=T*I+A*te+w*J+P*he,r[7]=T*D+A*L+w*X+P*oe,r[11]=T*b+A*j+w*q+P*be,r[15]=T*C+A*$+w*H+P*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],S=e[7],_=e[11],g=e[15],T=c*m-h*d,A=o*m-h*f,w=o*d-c*f,P=a*m-h*u,I=a*d-c*u,D=a*f-o*u;return t*(S*T-_*A+g*w)-n*(v*T-_*P+g*I)+i*(v*A-S*P+g*D)-r*(v*w-S*I+_*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],S=e[13],_=e[14],g=e[15],T=t*o-n*a,A=t*c-i*a,w=t*h-r*a,P=n*c-i*o,I=n*h-r*o,D=i*h-r*c,b=u*S-f*v,C=u*_-d*v,te=u*g-m*v,L=f*_-d*S,j=f*g-m*S,$=d*g-m*_,J=T*$-A*j+w*L+P*te-I*C+D*b;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/J;return e[0]=(o*$-c*j+h*L)*X,e[1]=(i*j-n*$-r*L)*X,e[2]=(S*D-_*I+g*P)*X,e[3]=(d*I-f*D-m*P)*X,e[4]=(c*te-a*$-h*C)*X,e[5]=(t*$-i*te+r*C)*X,e[6]=(_*w-v*D-g*A)*X,e[7]=(u*D-d*w+m*A)*X,e[8]=(a*j-o*te+h*b)*X,e[9]=(n*te-t*j-r*b)*X,e[10]=(v*I-S*w+g*T)*X,e[11]=(f*w-u*I-m*T)*X,e[12]=(o*C-a*L-c*b)*X,e[13]=(t*L-n*C+i*b)*X,e[14]=(S*A-v*P-_*T)*X,e[15]=(u*P-f*A+d*T)*X,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,u*o+n,u*c-i*a,0,h*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,f=o+o,d=r*h,m=r*u,v=r*f,S=a*u,_=a*f,g=o*f,T=c*h,A=c*u,w=c*f,P=n.x,I=n.y,D=n.z;return i[0]=(1-(S+g))*P,i[1]=(m+w)*P,i[2]=(v-A)*P,i[3]=0,i[4]=(m-w)*I,i[5]=(1-(d+g))*I,i[6]=(_+T)*I,i[7]=0,i[8]=(v+A)*D,i[9]=(_-T)*D,i[10]=(1-(d+S))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Bs.set(i[0],i[1],i[2]).length();const o=Bs.set(i[4],i[5],i[6]).length(),c=Bs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),$n.copy(this);const h=1/a,u=1/o,f=1/c;return $n.elements[0]*=h,$n.elements[1]*=h,$n.elements[2]*=h,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=ui,c=!1){const h=this.elements,u=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i);let v,S;if(c)v=r/(a-r),S=a*r/(a-r);else if(o===ui)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===jr)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ui,c=!1){const h=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i);let v,S;if(c)v=1/(a-r),S=a/(a-r);else if(o===ui)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===jr)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=v,h[14]=S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bs=new k,$n=new at,kg=new k(0,0,0),zg=new k(1,1,1),Wi=new k,pa=new k,Cn=new k,Mu=new at,Eu=new ei;class gi{constructor(e=0,t=0,n=0,i=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hg=0;const Tu=new k,ks=new ei,Ai=new at,ma=new k,Ar=new k,Vg=new k,Gg=new ei,Au=new k(1,0,0),wu=new k(0,1,0),Cu=new k(0,0,1),Ru={type:"added"},Wg={type:"removed"},zs={type:"childadded",child:null},Go={type:"childremoved",child:null};class Ht extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new k,t=new gi,n=new ei,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new nt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(wu,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(wu,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ma.copy(e):ma.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ar,ma,this.up):Ai.lookAt(ma,Ar,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(Ai),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ru),zs.child=e,this.dispatchEvent(zs),zs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wg),Go.child=e,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ru),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Gg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DEFAULT_UP=new k(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bs extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xg={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const S of e.hand.values()){const _=t.getJointPose(S,n),g=this._getHandJoint(h,S);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;h.inputState.pinching&&d>m+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=m-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Xo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=Pc(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xo(a,r,e+1/3),this.g=Xo(a,r,e),this.b=Xo(a,r,e-1/3)}return mt.colorSpaceToWorking(this,i),this}setStyle(e,t=cn){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return mt.workingToColorSpace(dn.copy(this),e),Math.round(ot(dn.r*255,0,255))*65536+Math.round(ot(dn.g*255,0,255))*256+Math.round(ot(dn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,r=dn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=cn){mt.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ga);const n=zr(Xi.h,ga.h,t),i=zr(Xi.s,ga.s,t),r=zr(Xi.l,ga.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new je;je.NAMES=sf;class jg extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qn=new k,wi=new k,jo=new k,Ci=new k,Hs=new k,Vs=new k,Pu=new k,$o=new k,qo=new k,Yo=new k,Ko=new Bt,Zo=new Bt,Jo=new Bt;class Jn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qn.subVectors(i,t),wi.subVectors(n,t),jo.subVectors(e,t);const a=qn.dot(qn),o=qn.dot(wi),c=qn.dot(jo),h=wi.dot(wi),u=wi.dot(jo),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(h*c-o*u)*d,v=(a*u-o*c)*d;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ci.x),c.addScaledVector(a,Ci.y),c.addScaledVector(o,Ci.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ko.setScalar(0),Zo.setScalar(0),Jo.setScalar(0),Ko.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,n),Jo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ko,r.x),a.addScaledVector(Zo,r.y),a.addScaledVector(Jo,r.z),a}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),wi.subVectors(e,t),qn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Hs.subVectors(i,n),Vs.subVectors(r,n),$o.subVectors(e,n);const c=Hs.dot($o),h=Vs.dot($o);if(c<=0&&h<=0)return t.copy(n);qo.subVectors(e,i);const u=Hs.dot(qo),f=Vs.dot(qo);if(u>=0&&f<=u)return t.copy(i);const d=c*f-u*h;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Hs,a);Yo.subVectors(e,r);const m=Hs.dot(Yo),v=Vs.dot(Yo);if(v>=0&&m<=v)return t.copy(r);const S=m*h-c*v;if(S<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(Vs,o);const _=u*v-m*f;if(_<=0&&f-u>=0&&m-v>=0)return Pu.subVectors(r,i),o=(f-u)/(f-u+(m-v)),t.copy(i).addScaledVector(Pu,o);const g=1/(_+S+d);return a=S*g,o=d*g,t.copy(n).addScaledVector(Hs,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ti{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),va.subVectors(this.max,wr),Gs.subVectors(e.a,wr),Ws.subVectors(e.b,wr),Xs.subVectors(e.c,wr),ji.subVectors(Ws,Gs),$i.subVectors(Xs,Ws),us.subVectors(Gs,Xs);let t=[0,-ji.z,ji.y,0,-$i.z,$i.y,0,-us.z,us.y,ji.z,0,-ji.x,$i.z,0,-$i.x,us.z,0,-us.x,-ji.y,ji.x,0,-$i.y,$i.x,0,-us.y,us.x,0];return!Qo(t,Gs,Ws,Xs,va)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,Gs,Ws,Xs,va))?!1:(xa.crossVectors(ji,$i),t=[xa.x,xa.y,xa.z],Qo(t,Gs,Ws,Xs,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new k,new k,new k,new k,new k,new k,new k,new k],Yn=new k,_a=new ti,Gs=new k,Ws=new k,Xs=new k,ji=new k,$i=new k,us=new k,wr=new k,va=new k,xa=new k,ds=new k;function Qo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ds.fromArray(s,r);const o=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),c=e.dot(ds),h=t.dot(ds),u=n.dot(ds);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const Yt=new k,ya=new Ye;let $g=0;class bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$g++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}}class rf extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class af extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class In extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const qg=new ti,Cr=new k,el=new k;class vi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Cr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(el)),this.expandByPoint(Cr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Yg=0;const Bn=new at,tl=new Ht,js=new k,Rn=new ti,Rr=new ti,sn=new k;class Dn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dg(e)?af:rf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new In(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Rn.min,Rr.min),Rn.expandByPoint(sn),sn.addVectors(Rn.max,Rr.max),Rn.expandByPoint(sn)):(Rn.expandByPoint(Rr.min),Rn.expandByPoint(Rr.max))}Rn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)sn.fromBufferAttribute(o,h),c&&(js.fromBufferAttribute(e,h),sn.add(js)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let b=0;b<n.count;b++)o[b]=new k,c[b]=new k;const h=new k,u=new k,f=new k,d=new Ye,m=new Ye,v=new Ye,S=new k,_=new k;function g(b,C,te){h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,te),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),v.fromBufferAttribute(r,te),u.sub(h),f.sub(h),m.sub(d),v.sub(d);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(L),_.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(L),o[b].add(S),o[C].add(S),o[te].add(S),c[b].add(_),c[C].add(_),c[te].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let b=0,C=T.length;b<C;++b){const te=T[b],L=te.start,j=te.count;for(let $=L,J=L+j;$<J;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const A=new k,w=new k,P=new k,I=new k;function D(b){P.fromBufferAttribute(i,b),I.copy(P);const C=o[b];A.copy(C),A.sub(P.multiplyScalar(P.dot(C))).normalize(),w.crossVectors(I,C);const L=w.dot(c[b])<0?-1:1;a.setXYZW(b,A.x,A.y,A.z,L)}for(let b=0,C=T.length;b<C;++b){const te=T[b],L=te.start,j=te.count;for(let $=L,J=L+j;$<J;$+=3)D(e.getX($+0)),D(e.getX($+1)),D(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new k,r=new k,a=new k,o=new k,c=new k,h=new k,u=new k,f=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),S=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,_),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,_),o.add(u),c.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,c){const h=o.array,u=o.itemSize,f=o.normalized,d=new h.constructor(c.length*u);let m=0,v=0;for(let S=0,_=c.length;S<_;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*u;for(let g=0;g<u;g++)d[v++]=h[m++]}return new bn(d,u,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=e(c,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let u=0,f=h.length;u<f;u++){const d=h[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let f=0,d=h.length;f<d;f++){const m=h[f];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],f=r[h];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,u=a.length;h<u;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new k;class Lc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Zg=0;class pi extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=nr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=Ml,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ml&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pi=new k,nl=new k,ba=new k,qi=new k,il=new k,Sa=new k,sl=new k;class Yr{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nl.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(nl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=qi.dot(this.direction),c=-qi.dot(ba),h=qi.lengthSq(),u=Math.abs(1-a*a);let f,d,m,v;if(u>0)if(f=a*c-o,d=a*o-c,v=r*u,f>=0)if(d>=-v)if(d<=v){const S=1/u;f*=S,d*=S,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+h}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+h;else d<=-v?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+h):d<=v?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+h):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+h);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(nl).addScaledVector(ba,d),m}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,i=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,i=(e.min.x-d.x)*h),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,i,r){il.subVectors(t,e),Sa.subVectors(n,e),sl.crossVectors(il,Sa);let a=this.direction.dot(sl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const c=o*this.direction.dot(Sa.crossVectors(qi,Sa));if(c<0)return null;const h=o*this.direction.dot(il.cross(qi));if(h<0||c+h>a)return null;const u=-o*qi.dot(sl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ss extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Iu=new at,fs=new Yr,Ma=new vi,Lu=new k,Ea=new k,Ta=new k,Aa=new k,rl=new k,wa=new k,Du=new k,Ca=new k;class Ln extends Ht{constructor(e=new Dn,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){wa.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=o[c],f=r[c];u!==0&&(rl.fromBufferAttribute(f,e),a?wa.addScaledVector(rl,u):wa.addScaledVector(rl.sub(t),u))}t.add(wa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Ma.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Ma,Lu)===null||fs.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Iu.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const _=d[v],g=a[_.materialIndex],T=Math.max(_.start,m.start),A=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let w=T,P=A;w<P;w+=3){const I=o.getX(w),D=o.getX(w+1),b=o.getX(w+2);i=Ra(this,g,e,n,h,u,f,I,D,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let _=v,g=S;_<g;_+=3){const T=o.getX(_),A=o.getX(_+1),w=o.getX(_+2);i=Ra(this,a,e,n,h,u,f,T,A,w),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const _=d[v],g=a[_.materialIndex],T=Math.max(_.start,m.start),A=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let w=T,P=A;w<P;w+=3){const I=w,D=w+1,b=w+2;i=Ra(this,g,e,n,h,u,f,I,D,b),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let _=v,g=S;_<g;_+=3){const T=_,A=_+1,w=_+2;i=Ra(this,a,e,n,h,u,f,T,A,w),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function Jg(s,e,t,n,i,r,a,o){let c;if(e.side===Tn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Oi,o),c===null)return null;Ca.copy(o),Ca.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Ca);return h<t.near||h>t.far?null:{distance:h,point:Ca.clone(),object:s}}function Ra(s,e,t,n,i,r,a,o,c,h){s.getVertexPosition(o,Ea),s.getVertexPosition(c,Ta),s.getVertexPosition(h,Aa);const u=Jg(s,e,t,n,Ea,Ta,Aa,Du);if(u){const f=new k;Jn.getBarycoord(Du,Ea,Ta,Aa,f),i&&(u.uv=Jn.getInterpolatedAttribute(i,o,c,h,f,new Ye)),r&&(u.uv1=Jn.getInterpolatedAttribute(r,o,c,h,f,new Ye)),a&&(u.normal=Jn.getInterpolatedAttribute(a,o,c,h,f,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new k,materialIndex:0};Jn.getNormal(Ea,Ta,Aa,d.normal),u.face=d,u.barycoord=f}return u}const Nu=new k,Uu=new Bt,Ou=new Bt,Qg=new k,Fu=new at,Pa=new k,al=new vi,Bu=new at,ol=new Yr;class e_ extends Ln{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),al.copy(this.boundingSphere),al.applyMatrix4(i),e.ray.intersectsSphere(al)!==!1&&(Bu.copy(i).invert(),ol.copy(e.ray).applyMatrix4(Bu),!(this.boundingBox!==null&&ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Uu.fromBufferAttribute(i.attributes.skinIndex,e),Ou.fromBufferAttribute(i.attributes.skinWeight,e),Nu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ou.getComponent(r);if(a!==0){const o=Uu.getComponent(r);Fu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qg.copy(Nu).applyMatrix4(Fu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class of extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dc extends rn{constructor(e=null,t=1,n=1,i,r,a,o,c,h=Jt,u=Jt,f,d){super(null,a,o,c,h,u,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ku=new at,t_=new at;class Nc{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:t_;ku.multiplyMatrices(o,t[r]),ku.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Nc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Dc(t,e,e,Hn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Be("Skeleton: No bone found with UUID:",r),a=new of),this.bones.push(a),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class uc extends bn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new at,zu=new at,Ia=[],Hu=new ti,n_=new at,Pr=new Ln,Ir=new vi;class i_ extends Ln{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,n_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Hu.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Hu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Ir.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$s),zu.multiplyMatrices(n,$s),Pr.matrixWorld=zu,Pr.raycast(e,Ia);for(let a=0,o=Ia.length;a<o;a++){const c=Ia[a];c.instanceId=r,c.object=this,t.push(c)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dc(new Float32Array(i*this.count),i,this.count,Ec,zn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ll=new k,s_=new k,r_=new nt;class Zi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ll.subVectors(n,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ll),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||r_.getNormalMatrix(e),i=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new vi,a_=new Ye(.5,.5),La=new k;class Uc{constructor(e=new Zi,t=new Zi,n=new Zi,i=new Zi,r=new Zi,a=new Zi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],f=r[5],d=r[6],m=r[7],v=r[8],S=r[9],_=r[10],g=r[11],T=r[12],A=r[13],w=r[14],P=r[15];if(i[0].setComponents(h-a,m-u,g-v,P-T).normalize(),i[1].setComponents(h+a,m+u,g+v,P+T).normalize(),i[2].setComponents(h+o,m+f,g+S,P+A).normalize(),i[3].setComponents(h-o,m-f,g-S,P-A).normalize(),n)i[4].setComponents(c,d,_,w).normalize(),i[5].setComponents(h-c,m-d,g-_,P-w).normalize();else if(i[4].setComponents(h-c,m-d,g-_,P-w).normalize(),t===ui)i[5].setComponents(h+c,m+d,g+_,P+w).normalize();else if(t===jr)i[5].setComponents(c,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=a_.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(La.x=i.normal.x>0?e.max.x:e.min.x,La.y=i.normal.y>0?e.max.y:e.min.y,La.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oc extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const to=new k,no=new k,Vu=new at,Lr=new Yr,Da=new vi,cl=new k,Gu=new k;class Fc extends Ht{constructor(e=new Dn,t=new Oc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)to.fromBufferAttribute(t,i-1),no.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=to.distanceTo(no);e.setAttribute("lineDistance",new In(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;Vu.copy(i).invert(),Lr.copy(e.ray).applyMatrix4(Vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let S=m,_=v-1;S<_;S+=h){const g=u.getX(S),T=u.getX(S+1),A=Na(this,e,Lr,c,g,T,S);A&&t.push(A)}if(this.isLineLoop){const S=u.getX(v-1),_=u.getX(m),g=Na(this,e,Lr,c,S,_,v-1);g&&t.push(g)}}else{const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let S=m,_=v-1;S<_;S+=h){const g=Na(this,e,Lr,c,S,S+1,S);g&&t.push(g)}if(this.isLineLoop){const S=Na(this,e,Lr,c,v-1,m,v-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Na(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(to.fromBufferAttribute(o,i),no.fromBufferAttribute(o,r),t.distanceSqToSegment(to,no,cl,Gu)>n)return;cl.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(cl);if(!(h<e.near||h>e.far))return{distance:h,point:Gu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Wu=new k,Xu=new k;class lf extends Fc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Wu.fromBufferAttribute(t,i),Xu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wu.distanceTo(Xu);e.setAttribute("lineDistance",new In(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class o_ extends Fc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cf extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ju=new at,dc=new Yr,Ua=new vi,Oa=new k;class l_ extends Ht{constructor(e=new Dn,t=new cf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;ju.copy(i).invert(),dc.copy(e.ray).applyMatrix4(ju);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,S=m;v<S;v++){const _=h.getX(v);Oa.fromBufferAttribute(f,_),$u(Oa,_,c,i,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,S=m;v<S;v++)Oa.fromBufferAttribute(f,v),$u(Oa,v,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $u(s,e,t,n,i,r,a){const o=dc.distanceSqToPoint(s);if(o<t){const c=new k;dc.closestPointToPoint(s,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class hf extends rn{constructor(e=[],t=Es,n,i,r,a,o,c,h,u){super(e,t,n,i,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qr extends rn{constructor(e,t,n=mi,i,r,a,o=Jt,c=Jt,h,u=Bi,f=1){if(u!==Bi&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ic(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class c_ extends qr{constructor(e,t=mi,n=Es,i,r,a=Jt,o=Jt,c,h=Bi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,c,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uf extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kr extends Dn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new In(h,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(f,2));function v(S,_,g,T,A,w,P,I,D,b,C){const te=w/D,L=P/b,j=w/2,$=P/2,J=I/2,X=D+1,q=b+1;let H=0,he=0;const oe=new k;for(let be=0;be<q;be++){const V=be*L-$;for(let Se=0;Se<X;Se++){const Je=Se*te-j;oe[S]=Je*T,oe[_]=V*A,oe[g]=J,h.push(oe.x,oe.y,oe.z),oe[S]=0,oe[_]=0,oe[g]=I>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(Se/D),f.push(1-be/b),H+=1}}for(let be=0;be<b;be++)for(let V=0;V<D;V++){const Se=d+V+X*be,Je=d+V+X*(be+1),wt=d+(V+1)+X*(be+1),ht=d+(V+1)+X*be;c.push(Se,Je,ht),c.push(Je,wt,ht),he+=6}o.addGroup(m,he,C),m+=he,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class so extends Dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),h=o+1,u=c+1,f=e/o,d=t/c,m=[],v=[],S=[],_=[];for(let g=0;g<u;g++){const T=g*d-a;for(let A=0;A<h;A++){const w=A*f-r;v.push(w,-T,0),S.push(0,0,1),_.push(A/o),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let T=0;T<o;T++){const A=T+h*g,w=T+h*(g+1),P=T+1+h*(g+1),I=T+1+h*g;m.push(A,w,I),m.push(w,P,I)}this.setIndex(m),this.setAttribute("position",new In(v,3)),this.setAttribute("normal",new In(S,3)),this.setAttribute("uv",new In(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.widthSegments,e.heightSegments)}}function hr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xn(s){const e={};for(let t=0;t<s.length;t++){const n=hr(s[t]);for(const i in n)e[i]=n[i]}return e}function h_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function df(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const u_={clone:hr,merge:xn};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=h_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class p_ extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bc extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xi extends Bc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class m_ extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g_ extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Fa(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function __(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function qu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function ff(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class v_ extends pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case pu:r=e,o=2*t-n;break;case mu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pu:a=e,c=2*n-t;break;case mu:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(n-t)/(i-t),S=v*v,_=S*v,g=-d*_+2*d*S-d*v,T=(1+d)*_+(-1.5-2*d)*S+(-.5+d)*v+1,A=(-1-m)*_+(1.5+m)*S+.5*v,w=m*_-m*S;for(let P=0;P!==o;++P)r[P]=g*a[u+P]+T*a[h+P]+A*a[c+P]+w*a[f+P];return r}}class x_ extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==o;++d)r[d]=a[h+d]*f+a[c+d]*u;return r}}class y_ extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class b_ extends pr{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this.settings||this.DefaultSettings_,f=u.inTangents,d=u.outTangents;if(!f||!d){const S=(n-t)/(i-t),_=1-S;for(let g=0;g!==o;++g)r[g]=a[h+g]*_+a[c+g]*S;return r}const m=o*2,v=e-1;for(let S=0;S!==o;++S){const _=a[h+S],g=a[c+S],T=v*m+S*2,A=d[T],w=d[T+1],P=e*m+S*2,I=f[P],D=f[P+1];let b=(n-t)/(i-t),C,te,L,j,$;for(let J=0;J<8;J++){C=b*b,te=C*b,L=1-b,j=L*L,$=j*L;const q=$*t+3*j*b*A+3*L*C*I+te*i-n;if(Math.abs(q)<1e-10)break;const H=3*j*(A-t)+6*L*b*(I-A)+3*C*(i-I);if(Math.abs(H)<1e-10)break;b=b-q/H,b=Math.max(0,Math.min(1,b))}r[S]=$*_+3*j*b*w+3*L*C*D+te*g}return r}}class ni{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new y_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new x_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new v_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new b_(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case Xr:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break;case du:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Xr;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ge("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ge("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&fg(i))for(let o=0,c=i.length;o!==c;++o){const h=i[o];if(isNaN(h)){Ge("KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(i)c=!0;else{const f=o*n,d=f-n,m=f+n;for(let v=0;v!==n;++v){const S=t[f+v];if(S!==t[d+v]||S!==t[m+v]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Xr;class mr extends ni{constructor(e,t,n){super(e,t,n)}}mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=Wr;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class pf extends ni{constructor(e,t,n,i){super(e,t,n,i)}}pf.prototype.ValueTypeName="color";class ur extends ni{constructor(e,t,n,i){super(e,t,n,i)}}ur.prototype.ValueTypeName="number";class S_ extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let h=e*o;for(let u=h+o;h!==u;h+=4)ei.slerpFlat(r,0,a,h-o,a,h,c);return r}}class dr extends ni{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new S_(this.times,this.values,this.getValueSize(),e)}}dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends ni{constructor(e,t,n){super(e,t,n)}}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=Wr;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends ni{constructor(e,t,n,i){super(e,t,n,i)}}fr.prototype.ValueTypeName="vector";class M_{constructor(e="",t=-1,n=[],i=ng){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(T_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ni.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],h=[];c.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const u=__(c);c=qu(c,1,u),h=qu(h,1,u),!i&&c[0]===0&&(c.push(r),h.push(h[0])),a.push(new ur(".morphTargetInfluences["+t[o].name+"]",c,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const h=e[o],u=h.name.match(r);if(u&&u.length>1){const f=u[1];let d=i[f];d||(i[f]=d=[]),d.push(h)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ge("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,m,v,S){if(m.length!==0){const _=[],g=[];ff(m,_,g,v),_.length!==0&&S.push(new f(d,_,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const h=e.hierarchy||[];for(let f=0;f<h.length;f++){const d=h[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let S=0;S<d[v].morphTargets.length;S++)m[d[v].morphTargets[S]]=-1;for(const S in m){const _=[],g=[];for(let T=0;T!==d[v].morphTargets.length;++T){const A=d[v];_.push(A.time),g.push(A.morphTarget===S?1:0)}i.push(new ur(".morphTargetInfluence["+S+"]",_,g))}c=m.length*a}else{const m=".bones["+t[f].name+"]";n(fr,m+".position",d,"pos",i),n(dr,m+".quaternion",d,"rot",i),n(fr,m+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function E_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ur;case"vector":case"vector2":case"vector3":case"vector4":return fr;case"color":return pf;case"quaternion":return dr;case"bool":case"boolean":return mr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function T_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=E_(s.type);if(s.times===void 0){const t=[],n=[];ff(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Yu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Yu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Yu(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class A_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){const f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=h.length;f<d;f+=2){const m=h[f],v=h[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const w_=new A_;class _r{constructor(e){this.manager=e!==void 0?e:w_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_r.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class C_ extends Error{constructor(e,t){super(e),this.response=t}}class mf extends _r{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:i});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Ii[e],f=h.body.getReader(),d=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),m=d?parseInt(d):0,v=m!==0;let S=0;const _=new ReadableStream({start(g){T();function T(){f.read().then(({done:A,value:w})=>{if(A)g.close();else{S+=w.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:m});for(let I=0,D=u.length;I<D;I++){const b=u[I];b.onProgress&&b.onProgress(P)}g.enqueue(w),T()}},A=>{g.error(A)})}}});return new Response(_)}else throw new C_(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o==="")return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return h.arrayBuffer().then(v=>m.decode(v))}}}).then(h=>{Di.add(`file:${e}`,h);const u=Ii[e];delete Ii[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onLoad&&m.onLoad(h)}}).catch(h=>{const u=Ii[e];if(u===void 0)throw this.manager.itemError(e),h;delete Ii[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onError&&m.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qs=new WeakMap;class R_ extends _r{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=qs.get(a);f===void 0&&(f=[],qs.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=$r("img");function c(){u(),t&&t(this);const f=qs.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onLoad&&m.onLoad(this)}qs.delete(this),r.manager.itemEnd(e)}function h(f){u(),i&&i(f),Di.remove(`image:${e}`);const d=qs.get(this)||[];for(let m=0;m<d.length;m++){const v=d[m];v.onError&&v.onError(f)}qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class P_ extends _r{constructor(e){super(e)}load(e,t,n,i){const r=new rn,a=new R_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ro extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const hl=new at,Ku=new k,Zu=new k;class kc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===jr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ba=new k,ka=new ei,ri=new k;class gf extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,ka,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ba,ka,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new k,Ju=new Ye,Qu=new Ye;class yn extends gf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,Qu),t.subVectors(Qu,Ju)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class I_ extends kc{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=cr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class L_ extends ro{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new I_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class D_ extends kc{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class N_ extends ro{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new D_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ao extends gf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class U_ extends kc{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _f extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new U_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class O_ extends ro{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ul=new WeakMap;class F_ extends _r{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(h=>{if(ul.has(a)===!0)i&&i(ul.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(h),r.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Di.add(`image-bitmap:${e}`,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),ul.set(c,h),Di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ys=-90,Ks=1;class B_ extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(Ys,Ks,e,t);i.layers=this.layers,this.add(i);const r=new yn(Ys,Ks,e,t);r.layers=this.layers,this.add(r);const a=new yn(Ys,Ks,e,t);a.layers=this.layers,this.add(a);const o=new yn(Ys,Ks,e,t);o.layers=this.layers,this.add(o);const c=new yn(Ys,Ks,e,t);c.layers=this.layers,this.add(c);const h=new yn(Ys,Ks,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class k_ extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zc="\\[\\]\\.:\\/",z_=new RegExp("["+zc+"]","g"),Hc="[^"+zc+"]",H_="[^"+zc.replace("\\.","")+"]",V_=/((?:WC+[\/:])*)/.source.replace("WC",Hc),G_=/(WCOD+)?/.source.replace("WCOD",H_),W_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),X_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),j_=new RegExp("^"+V_+G_+W_+X_+"$"),$_=["material","materials","bones","map"];class q_{constructor(e,t,n){const i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z_,"")}static parseTrackName(e){const t=j_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);$_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=q_;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ed{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Y_ extends lf{constructor(e=10,t=10,n=4473924,i=8947848){n=new je(n),i=new je(i);const r=t/2,a=e/t,o=e/2,c=[],h=[];for(let d=0,m=0,v=-o;d<=t;d++,v+=a){c.push(-o,0,v,o,0,v),c.push(v,0,-o,v,0,o);const S=d===r?n:i;S.toArray(h,m),m+=3,S.toArray(h,m),m+=3,S.toArray(h,m),m+=3,S.toArray(h,m),m+=3}const u=new Dn;u.setAttribute("position",new In(c,3)),u.setAttribute("color",new In(h,3));const f=new Oc({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class K_ extends Ts{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Be("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function td(s,e,t,n){const i=Z_(n);switch(t){case Yd:return s*e;case Ec:return s*e/i.components*i.byteLength;case Tc:return s*e/i.components*i.byteLength;case lr:return s*e*2/i.components*i.byteLength;case Ac:return s*e*2/i.components*i.byteLength;case Kd:return s*e*3/i.components*i.byteLength;case Hn:return s*e*4/i.components*i.byteLength;case wc:return s*e*4/i.components*i.byteLength;case ja:case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Nl:return Math.max(s,16)*Math.max(e,8)/4;case Il:case Dl:return Math.max(s,8)*Math.max(e,8)/2;case Ul:case Ol:case Bl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case zl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nc:case ic:case sc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rc:case ac:return Math.ceil(s/4)*Math.ceil(e/4)*8;case oc:case lc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z_(s){switch(s){case Pn:case Xd:return{byteLength:1,components:1};case Vr:case jd:case Fi:return{byteLength:2,components:1};case Sc:case Mc:return{byteLength:2,components:4};case mi:case bc:case zn:return{byteLength:4,components:1};case $d:case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);function vf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function J_(s){const e=new WeakMap;function t(o,c){const h=o.array,u=o.usage,f=h.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,h,u),o.onUploadCallback();let m;if(h instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=s.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=s.SHORT;else if(h instanceof Uint32Array)m=s.UNSIGNED_INT;else if(h instanceof Int32Array)m=s.INT;else if(h instanceof Int8Array)m=s.BYTE;else if(h instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,h){const u=c.array,f=c.updateRanges;if(s.bindBuffer(h,o),f.length===0)s.bufferSubData(h,0,u);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],S=f[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++d,f[d]=S)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const S=f[m];s.bufferSubData(h,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:i,remove:r,update:a}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ev=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ev=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Q_,alphahash_pars_fragment:ev,alphamap_fragment:tv,alphamap_pars_fragment:nv,alphatest_fragment:iv,alphatest_pars_fragment:sv,aomap_fragment:rv,aomap_pars_fragment:av,batching_pars_vertex:ov,batching_vertex:lv,begin_vertex:cv,beginnormal_vertex:hv,bsdfs:uv,iridescence_fragment:dv,bumpmap_pars_fragment:fv,clipping_planes_fragment:pv,clipping_planes_pars_fragment:mv,clipping_planes_pars_vertex:gv,clipping_planes_vertex:_v,color_fragment:vv,color_pars_fragment:xv,color_pars_vertex:yv,color_vertex:bv,common:Sv,cube_uv_reflection_fragment:Mv,defaultnormal_vertex:Ev,displacementmap_pars_vertex:Tv,displacementmap_vertex:Av,emissivemap_fragment:wv,emissivemap_pars_fragment:Cv,colorspace_fragment:Rv,colorspace_pars_fragment:Pv,envmap_fragment:Iv,envmap_common_pars_fragment:Lv,envmap_pars_fragment:Dv,envmap_pars_vertex:Nv,envmap_physical_pars_fragment:Xv,envmap_vertex:Uv,fog_vertex:Ov,fog_pars_vertex:Fv,fog_fragment:Bv,fog_pars_fragment:kv,gradientmap_pars_fragment:zv,lightmap_pars_fragment:Hv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Gv,lights_pars_begin:Wv,lights_toon_fragment:jv,lights_toon_pars_fragment:$v,lights_phong_fragment:qv,lights_phong_pars_fragment:Yv,lights_physical_fragment:Kv,lights_physical_pars_fragment:Zv,lights_fragment_begin:Jv,lights_fragment_maps:Qv,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:a0,map_particle_fragment:o0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:d0,morphnormal_vertex:f0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:_0,normal_pars_fragment:v0,normal_pars_vertex:x0,normal_vertex:y0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:T0,opaque_fragment:A0,packing:w0,premultiplied_alpha_fragment:C0,project_vertex:R0,dithering_fragment:P0,dithering_pars_fragment:I0,roughnessmap_fragment:L0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:U0,shadowmap_vertex:O0,shadowmask_pars_fragment:F0,skinbase_vertex:B0,skinning_pars_vertex:k0,skinning_vertex:z0,skinnormal_vertex:H0,specularmap_fragment:V0,specularmap_pars_fragment:G0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:j0,transmission_pars_fragment:$0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:K0,worldpos_vertex:Z0,background_vert:J0,background_frag:Q0,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distance_vert:ax,distance_frag:ox,equirect_vert:lx,equirect_frag:cx,linedashed_vert:hx,linedashed_frag:ux,meshbasic_vert:dx,meshbasic_frag:fx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:_x,meshnormal_vert:vx,meshnormal_frag:xx,meshphong_vert:yx,meshphong_frag:bx,meshphysical_vert:Sx,meshphysical_frag:Mx,meshtoon_vert:Ex,meshtoon_frag:Tx,points_vert:Ax,points_frag:wx,shadow_vert:Cx,shadow_frag:Rx,sprite_vert:Px,sprite_frag:Ix},xe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},li={basic:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:xn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:xn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:xn([xe.points,xe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:xn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:xn([xe.common,xe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:xn([xe.sprite,xe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:xn([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:xn([xe.lights,xe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};li.physical={uniforms:xn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const za={r:0,b:0,g:0},ms=new gi,Lx=new at;function Dx(s,e,t,n,i,r){const a=new je(0);let o=i===!0?0:1,c,h,u=null,f=0,d=null;function m(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){const w=T.backgroundBlurriness>0;A=e.get(A,w)}return A}function v(T){let A=!1;const w=m(T);w===null?_(a,o):w&&w.isColor&&(_(w,1),A=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(T,A){const w=m(A);w&&(w.isCubeTexture||w.mapping===io)?(h===void 0&&(h=new Ln(new Kr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:hr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),ms.copy(A.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(ms)),h.material.toneMapped=mt.getTransfer(w.colorSpace)!==Et,(u!==w||f!==w.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ln(new so(2,2),new _i({name:"BackgroundMaterial",uniforms:hr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=mt.getTransfer(w.colorSpace)!==Et,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function _(T,A){T.getRGB(za,df(s)),t.buffers.color.setClear(za.r,za.g,za.b,A,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),o=A,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,_(a,o)},render:v,addToRenderList:S,dispose:g}}function Nx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(L,j,$,J,X){let q=!1;const H=f(L,J,$,j);r!==H&&(r=H,h(r.object)),q=m(L,J,$,X),q&&v(L,J,$,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,w(L,j,$,J),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return s.createVertexArray()}function h(L){return s.bindVertexArray(L)}function u(L){return s.deleteVertexArray(L)}function f(L,j,$,J){const X=J.wireframe===!0;let q=n[j.id];q===void 0&&(q={},n[j.id]=q);const H=L.isInstancedMesh===!0?L.id:0;let he=q[H];he===void 0&&(he={},q[H]=he);let oe=he[$.id];oe===void 0&&(oe={},he[$.id]=oe);let be=oe[X];return be===void 0&&(be=d(c()),oe[X]=be),be}function d(L){const j=[],$=[],J=[];for(let X=0;X<t;X++)j[X]=0,$[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:$,attributeDivisors:J,object:L,attributes:{},index:null}}function m(L,j,$,J){const X=r.attributes,q=j.attributes;let H=0;const he=$.getAttributes();for(const oe in he)if(he[oe].location>=0){const V=X[oe];let Se=q[oe];if(Se===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),V===void 0||V.attribute!==Se||Se&&V.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==J}function v(L,j,$,J){const X={},q=j.attributes;let H=0;const he=$.getAttributes();for(const oe in he)if(he[oe].location>=0){let V=q[oe];V===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));const Se={};Se.attribute=V,V&&V.data&&(Se.data=V.data),X[oe]=Se,H++}r.attributes=X,r.attributesNum=H,r.index=J}function S(){const L=r.newAttributes;for(let j=0,$=L.length;j<$;j++)L[j]=0}function _(L){g(L,0)}function g(L,j){const $=r.newAttributes,J=r.enabledAttributes,X=r.attributeDivisors;$[L]=1,J[L]===0&&(s.enableVertexAttribArray(L),J[L]=1),X[L]!==j&&(s.vertexAttribDivisor(L,j),X[L]=j)}function T(){const L=r.newAttributes,j=r.enabledAttributes;for(let $=0,J=j.length;$<J;$++)j[$]!==L[$]&&(s.disableVertexAttribArray($),j[$]=0)}function A(L,j,$,J,X,q,H){H===!0?s.vertexAttribIPointer(L,j,$,X,q):s.vertexAttribPointer(L,j,$,J,X,q)}function w(L,j,$,J){S();const X=J.attributes,q=$.getAttributes(),H=j.defaultAttributeValues;for(const he in q){const oe=q[he];if(oe.location>=0){let be=X[he];if(be===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),be!==void 0){const V=be.normalized,Se=be.itemSize,Je=e.get(be);if(Je===void 0)continue;const wt=Je.buffer,ht=Je.type,ne=Je.bytesPerElement,ce=ht===s.INT||ht===s.UNSIGNED_INT||be.gpuType===bc;if(be.isInterleavedBufferAttribute){const pe=be.data,le=pe.stride,ze=be.offset;if(pe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<oe.locationSize;Ve++)g(oe.location+Ve,pe.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<oe.locationSize;Ve++)_(oe.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let Ve=0;Ve<oe.locationSize;Ve++)A(oe.location+Ve,Se/oe.locationSize,ht,V,le*ne,(ze+Se/oe.locationSize*Ve)*ne,ce)}else{if(be.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)g(oe.location+pe,be.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let pe=0;pe<oe.locationSize;pe++)_(oe.location+pe);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let pe=0;pe<oe.locationSize;pe++)A(oe.location+pe,Se/oe.locationSize,ht,V,Se*ne,Se/oe.locationSize*pe*ne,ce)}}else if(H!==void 0){const V=H[he];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(oe.location,V);break;case 3:s.vertexAttrib3fv(oe.location,V);break;case 4:s.vertexAttrib4fv(oe.location,V);break;default:s.vertexAttrib1fv(oe.location,V)}}}}T()}function P(){C();for(const L in n){const j=n[L];for(const $ in j){const J=j[$];for(const X in J){const q=J[X];for(const H in q)u(q[H].object),delete q[H];delete J[X]}}delete n[L]}}function I(L){if(n[L.id]===void 0)return;const j=n[L.id];for(const $ in j){const J=j[$];for(const X in J){const q=J[X];for(const H in q)u(q[H].object),delete q[H];delete J[X]}}delete n[L.id]}function D(L){for(const j in n){const $=n[j];for(const J in $){const X=$[J];if(X[L.id]===void 0)continue;const q=X[L.id];for(const H in q)u(q[H].object),delete q[H];delete X[L.id]}}}function b(L){for(const j in n){const $=n[j],J=L.isInstancedMesh===!0?L.id:0,X=$[J];if(X!==void 0){for(const q in X){const H=X[q];for(const he in H)u(H[he].object),delete H[he];delete X[q]}delete $[J],Object.keys($).length===0&&delete n[j]}}}function C(){te(),a=!0,r!==i&&(r=i,h(r.object))}function te(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:te,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfObject:b,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:_,disableUnusedAttributes:T}}function Ux(s,e,t){let n;function i(h){n=h}function r(h,u){s.drawArrays(n,h,u),t.update(u,n,1)}function a(h,u,f){f!==0&&(s.drawArraysInstanced(n,h,u,f),t.update(u,n,f))}function o(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,n,1)}function c(h,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h.length;v++)a(h[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S]*d[S];t.update(v,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ox(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==Hn&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const b=D===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Pn&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==zn&&!b)}function c(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=c(h);u!==h&&(Be("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:w,maxSamples:P,samples:I}}function Fx(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Zi,o=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||i;return i=d,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,S=f.clipIntersection,_=f.clipShadows,g=s.get(f);if(!i||v===null||v.length===0||r&&!_)r?u(null):h();else{const T=r?0:n,A=T*4;let w=g.clippingState||null;c.value=w,w=u(v,d,A,m);for(let P=0;P!==A;++P)w[P]=t[P];g.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,v){const S=f!==null?f.length:0;let _=null;if(S!==0){if(_=c.value,v!==!0||_===null){const g=m+S*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(_===null||_.length<g)&&(_=new Float32Array(g));for(let A=0,w=m;A!==S;++A,w+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(_,w),_[w+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}const Qi=4,nd=[.125,.215,.35,.446,.526,.582],xs=20,Bx=256,Dr=new ao,id=new je;let dl=null,fl=0,pl=0,ml=!1;const kx=new k;class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=kx}=r;dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,fl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Fi,format:Hn,colorSpace:Sn,depthBuffer:!1},i=rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zx(r)),this._blurMaterial=Vx(r,e,t),this._ggxMaterial=Hx(r,e,t)}return i}_compileMaterial(e){const t=new Ln(new Dn,e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,i,r){const c=new yn(90,1,t,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(id),f.toneMapping=di,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new Kr,new Ss({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,_=S.material;let g=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,g=!0):(_.color.copy(id),g=!0);for(let A=0;A<6;A++){const w=A%3;w===0?(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):w===1?(c.up.set(0,0,h[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));const P=this._cubeSize;Zs(i,w*P,A>2?P:0,P,P),f.setRenderTarget(i),g&&f.render(S,c),f.render(e,c)}f.toneMapping=m,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Es||e.mapping===ar;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Zs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,h=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(h*h-u*u),d=0+h*1.25,m=f*d,{_lodMax:v}=this,S=this._sizeLods[n],_=3*S*(n>v-Qi?n-v+Qi:0),g=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-t,Zs(r,_,g,3*S,2*S),i.setRenderTarget(r),i.render(o,Dr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,Zs(e,_,g,3*S,2*S),i.setRenderTarget(e),i.render(o,Dr)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=h;const d=h.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*xs-1),S=r/v,_=isFinite(r)?1+Math.floor(u*S):xs;_>xs&&Be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${xs}`);const g=[];let T=0;for(let D=0;D<xs;++D){const b=D/S,C=Math.exp(-b*b/2);g.push(C),D===0?T+=C:D<_&&(T+=2*C)}for(let D=0;D<g.length;D++)g[D]=g[D]/T;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=v,d.mipInt.value=A-n;const w=this._sizeLods[i],P=3*w*(i>A-Qi?i-A+Qi:0),I=4*(this._cubeSize-w);Zs(t,P,I,3*w,2*w),c.setRenderTarget(t),c.render(f,Dr)}}function zx(s){const e=[],t=[],n=[];let i=s;const r=s-Qi+1+nd.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Qi?c=nd[a-s+Qi-1]:a===0&&(c=0),t.push(c);const h=1/(o-2),u=-h,f=1+h,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,S=3,_=2,g=1,T=new Float32Array(S*v*m),A=new Float32Array(_*v*m),w=new Float32Array(g*v*m);for(let I=0;I<m;I++){const D=I%3*2/3-1,b=I>2?0:-1,C=[D,b,0,D+2/3,b,0,D+2/3,b+1,0,D,b,0,D+2/3,b+1,0,D,b+1,0];T.set(C,S*v*I),A.set(d,_*v*I);const te=[I,I,I,I,I,I];w.set(te,g*v*I)}const P=new Dn;P.setAttribute("position",new bn(T,S)),P.setAttribute("uv",new bn(A,_)),P.setAttribute("faceIndex",new bn(w,g)),n.push(new Ln(P,null)),i>Qi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function rd(s,e,t){const n=new fi(s,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hx(s,e,t){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Vx(s,e,t){const n=new Float32Array(xs),i=new k(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ad(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function od(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xf extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Kr(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Ni});r.uniforms.tEquirect.value=t;const a=new Ln(i,r),o=t.minFilter;return t.minFilter===Li&&(t.minFilter=Qt),new B_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function Gx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===Oo||m===Fo)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const S=new xf(v.height);return S.fromEquirectangularTexture(s,d),e.set(d,S),d.addEventListener("dispose",h),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,v=m===Oo||m===Fo,S=m===Es||m===ar;if(v||S){let _=t.get(d);const g=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new sd(s)),_=v?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const T=d.image;return v&&T&&T.height>0||S&&T&&c(T)?(n===null&&(n=new sd(s)),_=v?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d,m){return m===Oo?d.mapping=Es:m===Fo&&(d.mapping=ar),d}function c(d){let m=0;const v=6;for(let S=0;S<v;S++)d[S]!==void 0&&m++;return m===v}function h(d){const m=d.target;m.removeEventListener("dispose",h);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function u(d){const m=d.target;m.removeEventListener("dispose",u);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Wx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&eo("WebGLRenderer: "+n+" extension not supported."),i}}}function Xx(s,e,t,n){const i={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER)}function h(f){const d=[],m=f.index,v=f.attributes.position;let S=0;if(v===void 0)return;if(m!==null){const T=m.array;S=m.version;for(let A=0,w=T.length;A<w;A+=3){const P=T[A+0],I=T[A+1],D=T[A+2];d.push(P,I,I,D,D,P)}}else{const T=v.array;S=v.version;for(let A=0,w=T.length/3-1;A<w;A+=3){const P=A+0,I=A+1,D=A+2;d.push(P,I,I,D,D,P)}}const _=new(v.count>=65535?af:rf)(d,1);_.version=S;const g=r.get(f);g&&e.remove(g),r.set(f,_)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function jx(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,m){s.drawElements(n,m,r,d*a),t.update(m,n,1)}function h(d,m,v){v!==0&&(s.drawElementsInstanced(n,m,r,d*a,v),t.update(m,n,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,v);let _=0;for(let g=0;g<v;g++)_+=m[g];t.update(_,n,1)}function f(d,m,v,S){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d.length;g++)h(d[g]/a,m[g],S[g]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,S,0,v);let g=0;for(let T=0;T<v;T++)g+=m[T]*S[T];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function $x(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qx(s,e,t){const n=new WeakMap,i=new Bt;function r(a,o,c){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let te=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",te)};var m=te;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let w=0;v===!0&&(w=1),S===!0&&(w=2),_===!0&&(w=3);let P=o.attributes.position.count*w,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*I*4*f),b=new tf(D,P,I,f);b.type=zn,b.needsUpdate=!0;const C=w*4;for(let L=0;L<f;L++){const j=g[L],$=T[L],J=A[L],X=P*I*4*L;for(let q=0;q<j.count;q++){const H=q*C;v===!0&&(i.fromBufferAttribute(j,q),D[X+H+0]=i.x,D[X+H+1]=i.y,D[X+H+2]=i.z,D[X+H+3]=0),S===!0&&(i.fromBufferAttribute($,q),D[X+H+4]=i.x,D[X+H+5]=i.y,D[X+H+6]=i.z,D[X+H+7]=0),_===!0&&(i.fromBufferAttribute(J,q),D[X+H+8]=i.x,D[X+H+9]=i.y,D[X+H+10]=i.z,D[X+H+11]=J.itemSize===4?i.w:1)}}d={count:f,texture:b,size:new Ye(P,I)},n.set(o,d),o.addEventListener("dispose",te)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let v=0;for(let _=0;_<h.length;_++)v+=h[_];const S=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(s,"morphTargetBaseInfluence",S),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Yx(s,e,t,n,i){let r=new WeakMap;function a(h){const u=i.render.frame,f=h.geometry,d=e.get(h,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){const m=h.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}function o(){r=new WeakMap}function c(h){const u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Kx={[Od]:"LINEAR_TONE_MAPPING",[Fd]:"REINHARD_TONE_MAPPING",[Bd]:"CINEON_TONE_MAPPING",[kd]:"ACES_FILMIC_TONE_MAPPING",[Hd]:"AGX_TONE_MAPPING",[Vd]:"NEUTRAL_TONE_MAPPING",[zd]:"CUSTOM_TONE_MAPPING"};function Zx(s,e,t,n,i){const r=new fi(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new fi(e,t,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),o=new Dn;o.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new In([0,2,0,0,2,0],2));const c=new p_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ln(o,c),u=new ao(-1,1,1,-1,0,1);let f=null,d=null,m=!1,v,S=null,_=[],g=!1;this.setSize=function(T,A){r.setSize(T,A),a.setSize(T,A);for(let w=0;w<_.length;w++){const P=_[w];P.setSize&&P.setSize(T,A)}},this.setEffects=function(T){_=T,g=_.length>0&&_[0].isRenderPass===!0;const A=r.width,w=r.height;for(let P=0;P<_.length;P++){const I=_[P];I.setSize&&I.setSize(A,w)}},this.begin=function(T,A){if(m||T.toneMapping===di&&_.length===0)return!1;if(S=A,A!==null){const w=A.width,P=A.height;(r.width!==w||r.height!==P)&&this.setSize(w,P)}return g===!1&&T.setRenderTarget(r),v=T.toneMapping,T.toneMapping=di,!0},this.hasRenderPass=function(){return g},this.end=function(T,A){T.toneMapping=v,m=!0;let w=r,P=a;for(let I=0;I<_.length;I++){const D=_[I];if(D.enabled!==!1&&(D.render(T,P,w,A),D.needsSwap!==!1)){const b=w;w=P,P=b}}if(f!==T.outputColorSpace||d!==T.toneMapping){f=T.outputColorSpace,d=T.toneMapping,c.defines={},mt.getTransfer(f)===Et&&(c.defines.SRGB_TRANSFER="");const I=Kx[d];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,T.setRenderTarget(S),T.render(h,u),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const yf=new rn,fc=new qr(1,1),bf=new tf,Sf=new Bg,Mf=new hf,ld=[],cd=[],hd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function vr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ld[i];if(r===void 0&&(r=new Float32Array(i),ld[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function lo(s,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function ty(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function ny(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;dd.set(n),s.uniformMatrix2fv(this.addr,!1,dd),tn(t,n)}}function iy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;ud.set(n),s.uniformMatrix3fv(this.addr,!1,ud),tn(t,n)}}function sy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;hd.set(n),s.uniformMatrix4fv(this.addr,!1,hd),tn(t,n)}}function ry(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function oy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function ly(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function cy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function dy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function fy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fc.compareFunction=t.isReversedDepthBuffer()?Rc:Cc,r=fc):r=yf,t.setTexture2D(e||r,i)}function py(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sf,i)}function my(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mf,i)}function gy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bf,i)}function _y(s){switch(s){case 5126:return Jx;case 35664:return Qx;case 35665:return ey;case 35666:return ty;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return ay;case 35668:case 35672:return oy;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return hy;case 36295:return uy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}function vy(s,e){s.uniform1fv(this.addr,e)}function xy(s,e){const t=vr(e,this.size,2);s.uniform2fv(this.addr,t)}function yy(s,e){const t=vr(e,this.size,3);s.uniform3fv(this.addr,t)}function by(s,e){const t=vr(e,this.size,4);s.uniform4fv(this.addr,t)}function Sy(s,e){const t=vr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function My(s,e){const t=vr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ey(s,e){const t=vr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ty(s,e){s.uniform1iv(this.addr,e)}function Ay(s,e){s.uniform2iv(this.addr,e)}function wy(s,e){s.uniform3iv(this.addr,e)}function Cy(s,e){s.uniform4iv(this.addr,e)}function Ry(s,e){s.uniform1uiv(this.addr,e)}function Py(s,e){s.uniform2uiv(this.addr,e)}function Iy(s,e){s.uniform3uiv(this.addr,e)}function Ly(s,e){s.uniform4uiv(this.addr,e)}function Dy(s,e,t){const n=this.cache,i=e.length,r=lo(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=fc:a=yf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Ny(s,e,t){const n=this.cache,i=e.length,r=lo(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sf,r[a])}function Uy(s,e,t){const n=this.cache,i=e.length,r=lo(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Mf,r[a])}function Oy(s,e,t){const n=this.cache,i=e.length,r=lo(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bf,r[a])}function Fy(s){switch(s){case 5126:return vy;case 35664:return xy;case 35665:return yy;case 35666:return by;case 35674:return Sy;case 35675:return My;case 35676:return Ey;case 5124:case 35670:return Ty;case 35667:case 35671:return Ay;case 35668:case 35672:return wy;case 35669:case 35673:return Cy;case 5125:return Ry;case 36294:return Py;case 36295:return Iy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Oy}}class By{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_y(t.type)}}class ky{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fy(t.type)}}class zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function fd(s,e){s.seq.push(e),s.map[e.id]=e}function Hy(s,e,t){const n=s.name,i=n.length;for(gl.lastIndex=0;;){const r=gl.exec(n),a=gl.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){fd(t,h===void 0?new By(o,s,e):new ky(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new zy(o),fd(t,f)),t=f}}}class Ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Hy(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function pd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Vy=37297;let Gy=0;function Wy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const md=new nt;function Xy(s){mt._getMatrix(md,mt.workingColorSpace,s);const e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(s)){case Ja:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Wy(s.getShaderSource(e),o)}else return r}function jy(s,e){const t=Xy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $y={[Od]:"Linear",[Fd]:"Reinhard",[Bd]:"Cineon",[kd]:"ACESFilmic",[Hd]:"AgX",[Vd]:"Neutral",[zd]:"Custom"};function qy(s,e){const t=$y[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ha=new k;function Yy(){mt.getLuminanceCoefficients(Ha);const s=Ha.x.toFixed(4),e=Ha.y.toFixed(4),t=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ky(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function Zy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Br(s){return s!==""}function _d(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(s){return s.replace(Qy,tb)}const eb=new Map;function tb(s,e){let t=rt[e];if(t===void 0){const n=eb.get(e);if(n!==void 0)t=rt[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(s){return s.replace(nb,ib)}function ib(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sb={[Wa]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function rb(s){return sb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ab={[Es]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE_UV"};function ob(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ab[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const lb={[ar]:"ENVMAP_MODE_REFRACTION"};function cb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hb={[Ud]:"ENVMAP_BLENDING_MULTIPLY",[Qm]:"ENVMAP_BLENDING_MIX",[eg]:"ENVMAP_BLENDING_ADD"};function ub(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hb[s.combine]||"ENVMAP_BLENDING_NONE"}function db(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fb(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=rb(t),h=ob(t),u=cb(t),f=ub(t),d=db(t),m=Ky(t),v=Zy(r),S=i.createProgram();let _,g,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Br).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Br).join(`
`),g.length>0&&(g+=`
`)):(_=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),g=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?rt.tonemapping_pars_fragment:"",t.toneMapping!==di?qy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,jy("linearToOutputTexel",t.outputColorSpace),Yy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=pc(a),a=_d(a,t),a=vd(a,t),o=pc(o),o=_d(o,t),o=vd(o,t),a=xd(a),o=xd(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=T+_+a,w=T+g+o,P=pd(i,i.VERTEX_SHADER,A),I=pd(i,i.FRAGMENT_SHADER,w);i.attachShader(S,P),i.attachShader(S,I),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function D(L){if(s.debug.checkShaderErrors){const j=i.getProgramInfoLog(S)||"",$=i.getShaderInfoLog(P)||"",J=i.getShaderInfoLog(I)||"",X=j.trim(),q=$.trim(),H=J.trim();let he=!0,oe=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,S,P,I);else{const be=gd(i,P,"vertex"),V=gd(i,I,"fragment");Ge("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+be+`
`+V)}else X!==""?Be("WebGLProgram: Program Info Log:",X):(q===""||H==="")&&(oe=!1);oe&&(L.diagnostics={runnable:he,programLog:X,vertexShader:{log:q,prefix:_},fragmentShader:{log:H,prefix:g}})}i.deleteShader(P),i.deleteShader(I),b=new Ka(i,S),C=Jy(i,S)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=i.getProgramParameter(S,Vy)),te},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gy++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=I,this}let pb=0;class mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gb(e),t.set(e,n)),n}}class gb{constructor(e){this.id=pb++,this.code=e,this.usedTimes=0}}function _b(s,e,t,n,i,r){const a=new nf,o=new mb,c=new Set,h=[],u=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function S(b,C,te,L,j){const $=L.fog,J=j.geometry,X=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,H=e.get(b.envMap||X,q),he=H&&H.mapping===io?H.image.height:null,oe=m[b.type];b.precision!==null&&(d=n.getMaxPrecision(b.precision),d!==b.precision&&Be("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const be=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,V=be!==void 0?be.length:0;let Se=0;J.morphAttributes.position!==void 0&&(Se=1),J.morphAttributes.normal!==void 0&&(Se=2),J.morphAttributes.color!==void 0&&(Se=3);let Je,wt,ht,ne;if(oe){const _t=li[oe];Je=_t.vertexShader,wt=_t.fragmentShader}else Je=b.vertexShader,wt=b.fragmentShader,o.update(b),ht=o.getVertexShaderID(b),ne=o.getFragmentShaderID(b);const ce=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),le=j.isInstancedMesh===!0,ze=j.isBatchedMesh===!0,Ve=!!b.map,qt=!!b.matcap,ut=!!H,dt=!!b.aoMap,bt=!!b.lightMap,$e=!!b.bumpMap,Ct=!!b.normalMap,N=!!b.displacementMap,Vt=!!b.emissiveMap,gt=!!b.metalnessMap,Rt=!!b.roughnessMap,Ne=b.anisotropy>0,R=b.clearcoat>0,y=b.dispersion>0,F=b.iridescence>0,Q=b.sheen>0,ie=b.transmission>0,ee=Ne&&!!b.anisotropyMap,Ie=R&&!!b.clearcoatMap,ue=R&&!!b.clearcoatNormalMap,Ue=R&&!!b.clearcoatRoughnessMap,ke=F&&!!b.iridescenceMap,re=F&&!!b.iridescenceThicknessMap,de=Q&&!!b.sheenColorMap,Ce=Q&&!!b.sheenRoughnessMap,De=!!b.specularMap,Me=!!b.specularColorMap,et=!!b.specularIntensityMap,U=ie&&!!b.transmissionMap,me=ie&&!!b.thicknessMap,fe=!!b.gradientMap,Ae=!!b.alphaMap,ae=b.alphaTest>0,Z=!!b.alphaHash,Pe=!!b.extensions;let We=di;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(We=s.toneMapping);const Pt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:wt,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ze,batchingColor:ze&&j._colorsTexture!==null,instancing:le,instancingColor:le&&j.instanceColor!==null,instancingMorph:le&&j.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Sn,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:qt,envMap:ut,envMapMode:ut&&H.mapping,envMapCubeUVHeight:he,aoMap:dt,lightMap:bt,bumpMap:$e,normalMap:Ct,displacementMap:N,emissiveMap:Vt,normalMapObjectSpace:Ct&&b.normalMapType===rg,normalMapTangentSpace:Ct&&b.normalMapType===Jd,metalnessMap:gt,roughnessMap:Rt,anisotropy:Ne,anisotropyMap:ee,clearcoat:R,clearcoatMap:Ie,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ue,dispersion:y,iridescence:F,iridescenceMap:ke,iridescenceThicknessMap:re,sheen:Q,sheenColorMap:de,sheenRoughnessMap:Ce,specularMap:De,specularColorMap:Me,specularIntensityMap:et,transmission:ie,transmissionMap:U,thicknessMap:me,gradientMap:fe,opaque:b.transparent===!1&&b.blending===nr&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ae,alphaHash:Z,combine:b.combine,mapUv:Ve&&v(b.map.channel),aoMapUv:dt&&v(b.aoMap.channel),lightMapUv:bt&&v(b.lightMap.channel),bumpMapUv:$e&&v(b.bumpMap.channel),normalMapUv:Ct&&v(b.normalMap.channel),displacementMapUv:N&&v(b.displacementMap.channel),emissiveMapUv:Vt&&v(b.emissiveMap.channel),metalnessMapUv:gt&&v(b.metalnessMap.channel),roughnessMapUv:Rt&&v(b.roughnessMap.channel),anisotropyMapUv:ee&&v(b.anisotropyMap.channel),clearcoatMapUv:Ie&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(b.sheenRoughnessMap.channel),specularMapUv:De&&v(b.specularMap.channel),specularColorMapUv:Me&&v(b.specularColorMap.channel),specularIntensityMapUv:et&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:me&&v(b.thicknessMap.channel),alphaMapUv:Ae&&v(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ct||Ne),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!J.attributes.uv&&(Ve||Ae),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||J.attributes.normal===void 0&&Ct===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:j.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&te.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&mt.getTransfer(b.map.colorSpace)===Et,decodeVideoTextureEmissive:Vt&&b.emissiveMap.isVideoTexture===!0&&mt.getTransfer(b.emissiveMap.colorSpace)===Et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ci,flipSided:b.side===Tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pe&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&b.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function _(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const te in b.defines)C.push(te),C.push(b.defines[te]);return b.isRawShaderMaterial===!1&&(g(C,b),T(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function g(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function T(b,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),b.push(a.mask)}function A(b){const C=m[b.type];let te;if(C){const L=li[C];te=u_.clone(L.uniforms)}else te=b.uniforms;return te}function w(b,C){let te=u.get(C);return te!==void 0?++te.usedTimes:(te=new fb(s,C,b,i),h.push(te),u.set(C,te)),te}function P(b){if(--b.usedTimes===0){const C=h.indexOf(b);h[C]=h[h.length-1],h.pop(),u.delete(b.cacheKey),b.destroy()}}function I(b){o.remove(b)}function D(){o.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:A,acquireProgram:w,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:D}}function vb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function xb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function bd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,v,S,_,g){let T=s[e];return T===void 0?(T={id:d.id,object:d,geometry:m,material:v,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:_,group:g},s[e]=T):(T.id=d.id,T.object=d,T.geometry=m,T.material=v,T.materialVariant=a(d),T.groupOrder=S,T.renderOrder=d.renderOrder,T.z=_,T.group=g),e++,T}function c(d,m,v,S,_,g){const T=o(d,m,v,S,_,g);v.transmission>0?n.push(T):v.transparent===!0?i.push(T):t.push(T)}function h(d,m,v,S,_,g){const T=o(d,m,v,S,_,g);v.transmission>0?n.unshift(T):v.transparent===!0?i.unshift(T):t.unshift(T)}function u(d,m){t.length>1&&t.sort(d||xb),n.length>1&&n.sort(m||bd),i.length>1&&i.sort(m||bd)}function f(){for(let d=e,m=s.length;d<m;d++){const v=s[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:h,finish:f,sort:u}}function yb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Sd,s.set(n,[a])):i>=r.length?(a=new Sd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function bb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new je};break;case"SpotLight":t={position:new k,direction:new k,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function Sb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Mb=0;function Eb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Tb(s){const e=new bb,t=Sb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new k);const i=new k,r=new at,a=new at;function o(h){let u=0,f=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let m=0,v=0,S=0,_=0,g=0,T=0,A=0,w=0,P=0,I=0,D=0;h.sort(Eb);for(let C=0,te=h.length;C<te;C++){const L=h[C],j=L.color,$=L.intensity,J=L.distance;let X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===lr?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=j.r*$,f+=j.g*$,d+=j.b*$;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],$);D++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,he=t.get(L);he.shadowIntensity=H.intensity,he.shadowBias=H.bias,he.shadowNormalBias=H.normalBias,he.shadowRadius=H.radius,he.shadowMapSize=H.mapSize,n.directionalShadow[m]=he,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=q,m++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(j).multiplyScalar($),q.distance=J,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[S]=q;const H=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,H.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[S]=H.matrix,L.castShadow){const he=t.get(L);he.shadowIntensity=H.intensity,he.shadowBias=H.bias,he.shadowNormalBias=H.normalBias,he.shadowRadius=H.radius,he.shadowMapSize=H.mapSize,n.spotShadow[S]=he,n.spotShadowMap[S]=X,w++}S++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(j).multiplyScalar($),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=q,_++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const H=L.shadow,he=t.get(L);he.shadowIntensity=H.intensity,he.shadowBias=H.bias,he.shadowNormalBias=H.normalBias,he.shadowRadius=H.radius,he.shadowMapSize=H.mapSize,he.shadowCameraNear=H.camera.near,he.shadowCameraFar=H.camera.far,n.pointShadow[v]=he,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=L.shadow.matrix,A++}n.point[v]=q,v++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar($),q.groundColor.copy(L.groundColor).multiplyScalar($),n.hemi[g]=q,g++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==m||b.pointLength!==v||b.spotLength!==S||b.rectAreaLength!==_||b.hemiLength!==g||b.numDirectionalShadows!==T||b.numPointShadows!==A||b.numSpotShadows!==w||b.numSpotMaps!==P||b.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=_,n.point.length=v,n.hemi.length=g,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=w+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,b.directionalLength=m,b.pointLength=v,b.spotLength=S,b.rectAreaLength=_,b.hemiLength=g,b.numDirectionalShadows=T,b.numPointShadows=A,b.numSpotShadows=w,b.numSpotMaps=P,b.numLightProbes=D,n.version=Mb++)}function c(h,u){let f=0,d=0,m=0,v=0,S=0;const _=u.matrixWorldInverse;for(let g=0,T=h.length;g<T;g++){const A=h[g];if(A.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(_),f++}else if(A.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(_),m++}else if(A.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(_),a.identity(),r.copy(A.matrixWorld),r.premultiply(_),a.extractRotation(r),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(_),d++}else if(A.isHemisphereLight){const w=n.hemi[S];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(_),S++}}}return{setup:o,setupView:c,state:n}}function Md(s){const e=new Tb(s),t=[],n=[];function i(u){h.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ab(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Md(s),e.set(i,[o])):r>=a.length?(o=new Md(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rb=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Pb=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Ed=new at,Nr=new k,_l=new k;function Ib(s,e,t){let n=new Uc;const i=new Ye,r=new Ye,a=new Bt,o=new m_,c=new g_,h={},u=t.maxTextureSize,f={[Oi]:Tn,[Tn]:Oi,[ci]:ci},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:wb,fragmentShader:Cb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Dn;v.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ln(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let g=this.type;this.render=function(I,D,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;this.type===Nm&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wa);const C=s.getRenderTarget(),te=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),j=s.state;j.setBlending(Ni),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const $=g!==this.type;$&&D.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(X=>X.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,X=I.length;J<X;J++){const q=I[J],H=q.shadow;if(H===void 0){Be("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const he=H.getFrameExtents();i.multiply(he),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/he.x),i.x=r.x*he.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/he.y),i.y=r.y*he.y,H.mapSize.y=r.y));const oe=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=oe,H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Or){if(q.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new fi(i.x,i.y,{format:lr,type:Fi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new qr(i.x,i.y,zn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=Bi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt}else q.isPointLight?(H.map=new xf(i.x),H.map.depthTexture=new c_(i.x,mi)):(H.map=new fi(i.x,i.y),H.map.depthTexture=new qr(i.x,i.y,mi)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=Bi,this.type===Wa?(H.map.depthTexture.compareFunction=oe?Rc:Cc,H.map.depthTexture.minFilter=Qt,H.map.depthTexture.magFilter=Qt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt);H.camera.updateProjectionMatrix()}const be=H.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<be;V++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,V),s.clear();else{V===0&&(s.setRenderTarget(H.map),s.clear());const Se=H.getViewport(V);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),j.viewport(a)}if(q.isPointLight){const Se=H.camera,Je=H.matrix,wt=q.distance||Se.far;wt!==Se.far&&(Se.far=wt,Se.updateProjectionMatrix()),Nr.setFromMatrixPosition(q.matrixWorld),Se.position.copy(Nr),_l.copy(Se.position),_l.add(Rb[V]),Se.up.copy(Pb[V]),Se.lookAt(_l),Se.updateMatrixWorld(),Je.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Ed.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ed,Se.coordinateSystem,Se.reversedDepth)}else H.updateMatrices(q);n=H.getFrustum(),w(D,b,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Or&&T(H,b),H.needsUpdate=!1}g=this.type,_.needsUpdate=!1,s.setRenderTarget(C,te,L)};function T(I,D){const b=e.update(S);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new fi(i.x,i.y,{format:lr,type:Fi})),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(D,null,b,d,S,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(D,null,b,m,S,null)}function A(I,D,b,C){let te=null;const L=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(L!==void 0)te=L;else if(te=b.isPointLight===!0?c:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const j=te.uuid,$=D.uuid;let J=h[j];J===void 0&&(J={},h[j]=J);let X=J[$];X===void 0&&(X=te.clone(),J[$]=X,D.addEventListener("dispose",P)),te=X}if(te.visible=D.visible,te.wireframe=D.wireframe,C===Or?te.side=D.shadowSide!==null?D.shadowSide:D.side:te.side=D.shadowSide!==null?D.shadowSide:f[D.side],te.alphaMap=D.alphaMap,te.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,te.map=D.map,te.clipShadows=D.clipShadows,te.clippingPlanes=D.clippingPlanes,te.clipIntersection=D.clipIntersection,te.displacementMap=D.displacementMap,te.displacementScale=D.displacementScale,te.displacementBias=D.displacementBias,te.wireframeLinewidth=D.wireframeLinewidth,te.linewidth=D.linewidth,b.isPointLight===!0&&te.isMeshDistanceMaterial===!0){const j=s.properties.get(te);j.light=b}return te}function w(I,D,b,C,te){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&te===Or)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);const $=e.update(I),J=I.material;if(Array.isArray(J)){const X=$.groups;for(let q=0,H=X.length;q<H;q++){const he=X[q],oe=J[he.materialIndex];if(oe&&oe.visible){const be=A(I,oe,C,te);I.onBeforeShadow(s,I,D,b,$,be,he),s.renderBufferDirect(b,null,$,be,I,he),I.onAfterShadow(s,I,D,b,$,be,he)}}}else if(J.visible){const X=A(I,J,C,te);I.onBeforeShadow(s,I,D,b,$,X,null),s.renderBufferDirect(b,null,$,X,I,null),I.onAfterShadow(s,I,D,b,$,X,null)}}const j=I.children;for(let $=0,J=j.length;$<J;$++)w(j[$],D,b,C,te)}function P(I){I.target.removeEventListener("dispose",P);for(const b in h){const C=h[b],te=I.target.uuid;te in C&&(C[te].dispose(),delete C[te])}}}function Lb(s,e){function t(){let U=!1;const me=new Bt;let fe=null;const Ae=new Bt(0,0,0,0);return{setMask:function(ae){fe!==ae&&!U&&(s.colorMask(ae,ae,ae,ae),fe=ae)},setLocked:function(ae){U=ae},setClear:function(ae,Z,Pe,We,Pt){Pt===!0&&(ae*=We,Z*=We,Pe*=We),me.set(ae,Z,Pe,We),Ae.equals(me)===!1&&(s.clearColor(ae,Z,Pe,We),Ae.copy(me))},reset:function(){U=!1,fe=null,Ae.set(-1,0,0,0)}}}function n(){let U=!1,me=!1,fe=null,Ae=null,ae=null;return{setReversed:function(Z){if(me!==Z){const Pe=e.get("EXT_clip_control");Z?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),me=Z;const We=ae;ae=null,this.setClear(We)}},getReversed:function(){return me},setTest:function(Z){Z?ce(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(Z){fe!==Z&&!U&&(s.depthMask(Z),fe=Z)},setFunc:function(Z){if(me&&(Z=gg[Z]),Ae!==Z){switch(Z){case El:s.depthFunc(s.NEVER);break;case Tl:s.depthFunc(s.ALWAYS);break;case Al:s.depthFunc(s.LESS);break;case rr:s.depthFunc(s.LEQUAL);break;case wl:s.depthFunc(s.EQUAL);break;case Cl:s.depthFunc(s.GEQUAL);break;case Rl:s.depthFunc(s.GREATER);break;case Pl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=Z}},setLocked:function(Z){U=Z},setClear:function(Z){ae!==Z&&(ae=Z,me&&(Z=1-Z),s.clearDepth(Z))},reset:function(){U=!1,fe=null,Ae=null,ae=null,me=!1}}}function i(){let U=!1,me=null,fe=null,Ae=null,ae=null,Z=null,Pe=null,We=null,Pt=null;return{setTest:function(_t){U||(_t?ce(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(_t){me!==_t&&!U&&(s.stencilMask(_t),me=_t)},setFunc:function(_t,Vn,hn){(fe!==_t||Ae!==Vn||ae!==hn)&&(s.stencilFunc(_t,Vn,hn),fe=_t,Ae=Vn,ae=hn)},setOp:function(_t,Vn,hn){(Z!==_t||Pe!==Vn||We!==hn)&&(s.stencilOp(_t,Vn,hn),Z=_t,Pe=Vn,We=hn)},setLocked:function(_t){U=_t},setClear:function(_t){Pt!==_t&&(s.clearStencil(_t),Pt=_t)},reset:function(){U=!1,me=null,fe=null,Ae=null,ae=null,Z=null,Pe=null,We=null,Pt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,h=new WeakMap;let u={},f={},d=new WeakMap,m=[],v=null,S=!1,_=null,g=null,T=null,A=null,w=null,P=null,I=null,D=new je(0,0,0),b=0,C=!1,te=null,L=null,j=null,$=null,J=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const he=s.getParameter(s.VERSION);he.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(he)[1]),q=H>=1):he.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),q=H>=2);let oe=null,be={};const V=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Je=new Bt().fromArray(V),wt=new Bt().fromArray(Se);function ht(U,me,fe,Ae){const ae=new Uint8Array(4),Z=s.createTexture();s.bindTexture(U,Z),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<fe;Pe++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(me,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(me+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return Z}const ne={};ne[s.TEXTURE_2D]=ht(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(s.DEPTH_TEST),a.setFunc(rr),$e(!1),Ct(ou),ce(s.CULL_FACE),dt(Ni);function ce(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function pe(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function le(U,me){return f[U]!==me?(s.bindFramebuffer(U,me),f[U]=me,U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=me),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=me),!0):!1}function ze(U,me){let fe=m,Ae=!1;if(U){fe=d.get(me),fe===void 0&&(fe=[],d.set(me,fe));const ae=U.textures;if(fe.length!==ae.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,Pe=ae.length;Z<Pe;Z++)fe[Z]=s.COLOR_ATTACHMENT0+Z;fe.length=ae.length,Ae=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(fe)}function Ve(U){return v!==U?(s.useProgram(U),v=U,!0):!1}const qt={[vs]:s.FUNC_ADD,[Om]:s.FUNC_SUBTRACT,[Fm]:s.FUNC_REVERSE_SUBTRACT};qt[Bm]=s.MIN,qt[km]=s.MAX;const ut={[zm]:s.ZERO,[Hm]:s.ONE,[Vm]:s.SRC_COLOR,[Sl]:s.SRC_ALPHA,[qm]:s.SRC_ALPHA_SATURATE,[jm]:s.DST_COLOR,[Wm]:s.DST_ALPHA,[Gm]:s.ONE_MINUS_SRC_COLOR,[Ml]:s.ONE_MINUS_SRC_ALPHA,[$m]:s.ONE_MINUS_DST_COLOR,[Xm]:s.ONE_MINUS_DST_ALPHA,[Ym]:s.CONSTANT_COLOR,[Km]:s.ONE_MINUS_CONSTANT_COLOR,[Zm]:s.CONSTANT_ALPHA,[Jm]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(U,me,fe,Ae,ae,Z,Pe,We,Pt,_t){if(U===Ni){S===!0&&(pe(s.BLEND),S=!1);return}if(S===!1&&(ce(s.BLEND),S=!0),U!==Um){if(U!==_||_t!==C){if((g!==vs||w!==vs)&&(s.blendEquation(s.FUNC_ADD),g=vs,w=vs),_t)switch(U){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lu:s.blendFunc(s.ONE,s.ONE);break;case cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ge("WebGLState: Invalid blending: ",U);break}else switch(U){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case cu:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",U);break}T=null,A=null,P=null,I=null,D.set(0,0,0),b=0,_=U,C=_t}return}ae=ae||me,Z=Z||fe,Pe=Pe||Ae,(me!==g||ae!==w)&&(s.blendEquationSeparate(qt[me],qt[ae]),g=me,w=ae),(fe!==T||Ae!==A||Z!==P||Pe!==I)&&(s.blendFuncSeparate(ut[fe],ut[Ae],ut[Z],ut[Pe]),T=fe,A=Ae,P=Z,I=Pe),(We.equals(D)===!1||Pt!==b)&&(s.blendColor(We.r,We.g,We.b,Pt),D.copy(We),b=Pt),_=U,C=!1}function bt(U,me){U.side===ci?pe(s.CULL_FACE):ce(s.CULL_FACE);let fe=U.side===Tn;me&&(fe=!fe),$e(fe),U.blending===nr&&U.transparent===!1?dt(Ni):dt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ae=U.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){te!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),te=U)}function Ct(U){U!==Lm?(ce(s.CULL_FACE),U!==L&&(U===ou?s.cullFace(s.BACK):U===Dm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),L=U}function N(U){U!==j&&(q&&s.lineWidth(U),j=U)}function Vt(U,me,fe){U?(ce(s.POLYGON_OFFSET_FILL),($!==me||J!==fe)&&($=me,J=fe,a.getReversed()&&(me=-me),s.polygonOffset(me,fe))):pe(s.POLYGON_OFFSET_FILL)}function gt(U){U?ce(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function Rt(U){U===void 0&&(U=s.TEXTURE0+X-1),oe!==U&&(s.activeTexture(U),oe=U)}function Ne(U,me,fe){fe===void 0&&(oe===null?fe=s.TEXTURE0+X-1:fe=oe);let Ae=be[fe];Ae===void 0&&(Ae={type:void 0,texture:void 0},be[fe]=Ae),(Ae.type!==U||Ae.texture!==me)&&(oe!==fe&&(s.activeTexture(fe),oe=fe),s.bindTexture(U,me||ne[U]),Ae.type=U,Ae.texture=me)}function R(){const U=be[oe];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(U){Ge("WebGLState:",U)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(U){Ge("WebGLState:",U)}}function Q(){try{s.texSubImage2D(...arguments)}catch(U){Ge("WebGLState:",U)}}function ie(){try{s.texSubImage3D(...arguments)}catch(U){Ge("WebGLState:",U)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Ge("WebGLState:",U)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Ge("WebGLState:",U)}}function ue(){try{s.texStorage2D(...arguments)}catch(U){Ge("WebGLState:",U)}}function Ue(){try{s.texStorage3D(...arguments)}catch(U){Ge("WebGLState:",U)}}function ke(){try{s.texImage2D(...arguments)}catch(U){Ge("WebGLState:",U)}}function re(){try{s.texImage3D(...arguments)}catch(U){Ge("WebGLState:",U)}}function de(U){Je.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function Ce(U){wt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),wt.copy(U))}function De(U,me){let fe=h.get(me);fe===void 0&&(fe=new WeakMap,h.set(me,fe));let Ae=fe.get(U);Ae===void 0&&(Ae=s.getUniformBlockIndex(me,U.name),fe.set(U,Ae))}function Me(U,me){const Ae=h.get(me).get(U);c.get(me)!==Ae&&(s.uniformBlockBinding(me,Ae,U.__bindingPointIndex),c.set(me,Ae))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},oe=null,be={},f={},d=new WeakMap,m=[],v=null,S=!1,_=null,g=null,T=null,A=null,w=null,P=null,I=null,D=new je(0,0,0),b=0,C=!1,te=null,L=null,j=null,$=null,J=null,Je.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:pe,bindFramebuffer:le,drawBuffers:ze,useProgram:Ve,setBlending:dt,setMaterial:bt,setFlipSided:$e,setCullFace:Ct,setLineWidth:N,setPolygonOffset:Vt,setScissorTest:gt,activeTexture:Rt,bindTexture:Ne,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:ke,texImage3D:re,updateUBOMapping:De,uniformBlockBinding:Me,texStorage2D:ue,texStorage3D:Ue,texSubImage2D:Q,texSubImage3D:ie,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ie,scissor:de,viewport:Ce,reset:et}}function Db(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ye,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return m?new OffscreenCanvas(R,y):$r("canvas")}function S(R,y,F){let Q=1;const ie=Ne(R);if((ie.width>F||ie.height>F)&&(Q=F/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(Q*ie.width),Ie=Math.floor(Q*ie.height);f===void 0&&(f=v(ee,Ie));const ue=y?v(ee,Ie):f;return ue.width=ee,ue.height=Ie,ue.getContext("2d").drawImage(R,0,0,ee,Ie),Be("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Ie+")."),ue}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function _(R){return R.generateMipmaps}function g(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(R,y,F,Q,ie=!1){if(R!==null){if(s[R]!==void 0)return s[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=y;if(y===s.RED&&(F===s.FLOAT&&(ee=s.R32F),F===s.HALF_FLOAT&&(ee=s.R16F),F===s.UNSIGNED_BYTE&&(ee=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(ee=s.R8UI),F===s.UNSIGNED_SHORT&&(ee=s.R16UI),F===s.UNSIGNED_INT&&(ee=s.R32UI),F===s.BYTE&&(ee=s.R8I),F===s.SHORT&&(ee=s.R16I),F===s.INT&&(ee=s.R32I)),y===s.RG&&(F===s.FLOAT&&(ee=s.RG32F),F===s.HALF_FLOAT&&(ee=s.RG16F),F===s.UNSIGNED_BYTE&&(ee=s.RG8)),y===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(ee=s.RG8UI),F===s.UNSIGNED_SHORT&&(ee=s.RG16UI),F===s.UNSIGNED_INT&&(ee=s.RG32UI),F===s.BYTE&&(ee=s.RG8I),F===s.SHORT&&(ee=s.RG16I),F===s.INT&&(ee=s.RG32I)),y===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),F===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),F===s.UNSIGNED_INT&&(ee=s.RGB32UI),F===s.BYTE&&(ee=s.RGB8I),F===s.SHORT&&(ee=s.RGB16I),F===s.INT&&(ee=s.RGB32I)),y===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),F===s.UNSIGNED_INT&&(ee=s.RGBA32UI),F===s.BYTE&&(ee=s.RGBA8I),F===s.SHORT&&(ee=s.RGBA16I),F===s.INT&&(ee=s.RGBA32I)),y===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),y===s.RGBA){const Ie=ie?Ja:mt.getTransfer(Q);F===s.FLOAT&&(ee=s.RGBA32F),F===s.HALF_FLOAT&&(ee=s.RGBA16F),F===s.UNSIGNED_BYTE&&(ee=Ie===Et?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(R,y){let F;return R?y===null||y===mi||y===Gr?F=s.DEPTH24_STENCIL8:y===zn?F=s.DEPTH32F_STENCIL8:y===Vr&&(F=s.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===Gr?F=s.DEPTH_COMPONENT24:y===zn?F=s.DEPTH_COMPONENT32F:y===Vr&&(F=s.DEPTH_COMPONENT16),F}function P(R,y){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==Qt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function I(R){const y=R.target;y.removeEventListener("dispose",I),b(y),y.isVideoTexture&&u.delete(y)}function D(R){const y=R.target;y.removeEventListener("dispose",D),te(y)}function b(R){const y=n.get(R);if(y.__webglInit===void 0)return;const F=R.source,Q=d.get(F);if(Q){const ie=Q[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(R),Object.keys(Q).length===0&&d.delete(F)}n.remove(R)}function C(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const F=R.source,Q=d.get(F);delete Q[y.__cacheKey],a.memory.textures--}function te(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let ie=0;ie<y.__webglFramebuffer[Q].length;ie++)s.deleteFramebuffer(y.__webglFramebuffer[Q][ie]);else s.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[Q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let Q=0,ie=F.length;Q<ie;Q++){const ee=n.get(F[Q]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(F[Q])}n.remove(R)}let L=0;function j(){L=0}function $(){const R=L;return R>=i.maxTextures&&Be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function J(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function X(R,y){const F=n.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const Q=R.image;if(Q===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(F,R,y);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function q(R,y){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){ne(F,R,y);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function H(R,y){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){ne(F,R,y);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function he(R,y){const F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){ce(F,R,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}const oe={[or]:s.REPEAT,[hi]:s.CLAMP_TO_EDGE,[Za]:s.MIRRORED_REPEAT},be={[Jt]:s.NEAREST,[Wd]:s.NEAREST_MIPMAP_NEAREST,[Fr]:s.NEAREST_MIPMAP_LINEAR,[Qt]:s.LINEAR,[Xa]:s.LINEAR_MIPMAP_NEAREST,[Li]:s.LINEAR_MIPMAP_LINEAR},V={[ag]:s.NEVER,[ug]:s.ALWAYS,[og]:s.LESS,[Cc]:s.LEQUAL,[lg]:s.EQUAL,[Rc]:s.GEQUAL,[cg]:s.GREATER,[hg]:s.NOTEQUAL};function Se(R,y){if(y.type===zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Qt||y.magFilter===Xa||y.magFilter===Fr||y.magFilter===Li||y.minFilter===Qt||y.minFilter===Xa||y.minFilter===Fr||y.minFilter===Li)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,oe[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,oe[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,oe[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,be[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,be[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,V[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jt||y.minFilter!==Fr&&y.minFilter!==Li||y.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Je(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",I));const Q=y.source;let ie=d.get(Q);ie===void 0&&(ie={},d.set(Q,ie));const ee=J(y);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ie[ee].usedTimes++;const Ie=ie[R.__cacheKey];Ie!==void 0&&(ie[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&C(y)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return F}function wt(R,y,F){return Math.floor(Math.floor(R/F)/y)}function ht(R,y,F,Q){const ee=R.updateRanges;if(ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,F,Q,y.data);else{ee.sort((re,de)=>re.start-de.start);let Ie=0;for(let re=1;re<ee.length;re++){const de=ee[Ie],Ce=ee[re],De=de.start+de.count,Me=wt(Ce.start,y.width,4),et=wt(de.start,y.width,4);Ce.start<=De+1&&Me===et&&wt(Ce.start+Ce.count-1,y.width,4)===Me?de.count=Math.max(de.count,Ce.start+Ce.count-de.start):(++Ie,ee[Ie]=Ce)}ee.length=Ie+1;const ue=s.getParameter(s.UNPACK_ROW_LENGTH),Ue=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let re=0,de=ee.length;re<de;re++){const Ce=ee[re],De=Math.floor(Ce.start/4),Me=Math.ceil(Ce.count/4),et=De%y.width,U=Math.floor(De/y.width),me=Me,fe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,et),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,et,U,me,fe,F,Q,y.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function ne(R,y,F){let Q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=s.TEXTURE_3D);const ie=Je(R,y),ee=y.source;t.bindTexture(Q,R.__webglTexture,s.TEXTURE0+F);const Ie=n.get(ee);if(ee.version!==Ie.__version||ie===!0){t.activeTexture(s.TEXTURE0+F);const ue=mt.getPrimaries(mt.workingColorSpace),Ue=y.colorSpace===Ji?null:mt.getPrimaries(y.colorSpace),ke=y.colorSpace===Ji||ue===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let re=S(y.image,!1,i.maxTextureSize);re=Rt(y,re);const de=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type);let De=A(y.internalFormat,de,Ce,y.colorSpace,y.isVideoTexture);Se(Q,y);let Me;const et=y.mipmaps,U=y.isVideoTexture!==!0,me=Ie.__version===void 0||ie===!0,fe=ee.dataReady,Ae=P(y,re);if(y.isDepthTexture)De=w(y.format===ys,y.type),me&&(U?t.texStorage2D(s.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,De,re.width,re.height,0,de,Ce,null));else if(y.isDataTexture)if(et.length>0){U&&me&&t.texStorage2D(s.TEXTURE_2D,Ae,De,et[0].width,et[0].height);for(let ae=0,Z=et.length;ae<Z;ae++)Me=et[ae],U?fe&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Me.width,Me.height,de,Ce,Me.data):t.texImage2D(s.TEXTURE_2D,ae,De,Me.width,Me.height,0,de,Ce,Me.data);y.generateMipmaps=!1}else U?(me&&t.texStorage2D(s.TEXTURE_2D,Ae,De,re.width,re.height),fe&&ht(y,re,de,Ce)):t.texImage2D(s.TEXTURE_2D,0,De,re.width,re.height,0,de,Ce,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,De,et[0].width,et[0].height,re.depth);for(let ae=0,Z=et.length;ae<Z;ae++)if(Me=et[ae],y.format!==Hn)if(de!==null)if(U){if(fe)if(y.layerUpdates.size>0){const Pe=td(Me.width,Me.height,y.format,y.type);for(const We of y.layerUpdates){const Pt=Me.data.subarray(We*Pe/Me.data.BYTES_PER_ELEMENT,(We+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,We,Me.width,Me.height,1,de,Pt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,re.depth,de,Me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,De,Me.width,Me.height,re.depth,0,Me.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,re.depth,de,Ce,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,De,Me.width,Me.height,re.depth,0,de,Ce,Me.data)}else{U&&me&&t.texStorage2D(s.TEXTURE_2D,Ae,De,et[0].width,et[0].height);for(let ae=0,Z=et.length;ae<Z;ae++)Me=et[ae],y.format!==Hn?de!==null?U?fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Me.width,Me.height,de,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,De,Me.width,Me.height,0,Me.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?fe&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Me.width,Me.height,de,Ce,Me.data):t.texImage2D(s.TEXTURE_2D,ae,De,Me.width,Me.height,0,de,Ce,Me.data)}else if(y.isDataArrayTexture)if(U){if(me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,De,re.width,re.height,re.depth),fe)if(y.layerUpdates.size>0){const ae=td(re.width,re.height,y.format,y.type);for(const Z of y.layerUpdates){const Pe=re.data.subarray(Z*ae/re.data.BYTES_PER_ELEMENT,(Z+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,de,Ce,Pe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,Ce,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,de,Ce,re.data);else if(y.isData3DTexture)U?(me&&t.texStorage3D(s.TEXTURE_3D,Ae,De,re.width,re.height,re.depth),fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,Ce,re.data)):t.texImage3D(s.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,de,Ce,re.data);else if(y.isFramebufferTexture){if(me)if(U)t.texStorage2D(s.TEXTURE_2D,Ae,De,re.width,re.height);else{let ae=re.width,Z=re.height;for(let Pe=0;Pe<Ae;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,De,ae,Z,0,de,Ce,null),ae>>=1,Z>>=1}}else if(et.length>0){if(U&&me){const ae=Ne(et[0]);t.texStorage2D(s.TEXTURE_2D,Ae,De,ae.width,ae.height)}for(let ae=0,Z=et.length;ae<Z;ae++)Me=et[ae],U?fe&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,de,Ce,Me):t.texImage2D(s.TEXTURE_2D,ae,De,de,Ce,Me);y.generateMipmaps=!1}else if(U){if(me){const ae=Ne(re);t.texStorage2D(s.TEXTURE_2D,Ae,De,ae.width,ae.height)}fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Ce,re)}else t.texImage2D(s.TEXTURE_2D,0,De,de,Ce,re);_(y)&&g(Q),Ie.__version=ee.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ce(R,y,F){if(y.image.length!==6)return;const Q=Je(R,y),ie=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+F);const ee=n.get(ie);if(ie.version!==ee.__version||Q===!0){t.activeTexture(s.TEXTURE0+F);const Ie=mt.getPrimaries(mt.workingColorSpace),ue=y.colorSpace===Ji?null:mt.getPrimaries(y.colorSpace),Ue=y.colorSpace===Ji||Ie===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ke=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!ke&&!re?de[Z]=S(y.image[Z],!0,i.maxCubemapSize):de[Z]=re?y.image[Z].image:y.image[Z],de[Z]=Rt(y,de[Z]);const Ce=de[0],De=r.convert(y.format,y.colorSpace),Me=r.convert(y.type),et=A(y.internalFormat,De,Me,y.colorSpace),U=y.isVideoTexture!==!0,me=ee.__version===void 0||Q===!0,fe=ie.dataReady;let Ae=P(y,Ce);Se(s.TEXTURE_CUBE_MAP,y);let ae;if(ke){U&&me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,et,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){ae=de[Z].mipmaps;for(let Pe=0;Pe<ae.length;Pe++){const We=ae[Pe];y.format!==Hn?De!==null?U?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe,0,0,We.width,We.height,De,We.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe,et,We.width,We.height,0,We.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe,0,0,We.width,We.height,De,Me,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe,et,We.width,We.height,0,De,Me,We.data)}}}else{if(ae=y.mipmaps,U&&me){ae.length>0&&Ae++;const Z=Ne(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,et,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){U?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,De,Me,de[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,et,de[Z].width,de[Z].height,0,De,Me,de[Z].data);for(let Pe=0;Pe<ae.length;Pe++){const Pt=ae[Pe].image[Z].image;U?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe+1,0,0,Pt.width,Pt.height,De,Me,Pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe+1,et,Pt.width,Pt.height,0,De,Me,Pt.data)}}else{U?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,Me,de[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,et,De,Me,de[Z]);for(let Pe=0;Pe<ae.length;Pe++){const We=ae[Pe];U?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe+1,0,0,De,Me,We.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe+1,et,De,Me,We.image[Z])}}}_(y)&&g(s.TEXTURE_CUBE_MAP),ee.__version=ie.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function pe(R,y,F,Q,ie,ee){const Ie=r.convert(F.format,F.colorSpace),ue=r.convert(F.type),Ue=A(F.internalFormat,Ie,ue,F.colorSpace),ke=n.get(y),re=n.get(F);if(re.__renderTarget=y,!ke.__hasExternalTextures){const de=Math.max(1,y.width>>ee),Ce=Math.max(1,y.height>>ee);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,ee,Ue,de,Ce,y.depth,0,Ie,ue,null):t.texImage2D(ie,ee,Ue,de,Ce,0,Ie,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Vt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ie,re.__webglTexture,0,N(y)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ie,re.__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(R,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const Q=y.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,ee=w(y.stencilBuffer,ie),Ie=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(y),ee,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(y),ee,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ee,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,R)}else{const Q=y.textures;for(let ie=0;ie<Q.length;ie++){const ee=Q[ie],Ie=r.convert(ee.format,ee.colorSpace),ue=r.convert(ee.type),Ue=A(ee.internalFormat,Ie,ue,ee.colorSpace);Vt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(y),Ue,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(y),Ue,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ze(R,y,F){const Q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(y.depthTexture);if(ie.__renderTarget=y,(!ie.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),ie.__webglTexture===void 0){ie.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Se(s.TEXTURE_CUBE_MAP,y.depthTexture);const ke=r.convert(y.depthTexture.format),re=r.convert(y.depthTexture.type);let de;y.depthTexture.format===Bi?de=s.DEPTH_COMPONENT24:y.depthTexture.format===ys&&(de=s.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,de,y.width,y.height,0,ke,re,null)}}else X(y.depthTexture,0);const ee=ie.__webglTexture,Ie=N(y),ue=Q?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,Ue=y.depthTexture.format===ys?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Bi)Vt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ue,ue,ee,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Ue,ue,ee,0);else if(y.depthTexture.format===ys)Vt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ue,ue,ee,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Ue,ue,ee,0);else throw new Error("Unknown depthTexture format")}function Ve(R){const y=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=Q}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(F)for(let Q=0;Q<6;Q++)ze(y.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?ze(y.__webglFramebuffer[0],R,0):ze(y.__webglFramebuffer,R,0)}else if(F){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=s.createRenderbuffer(),le(y.__webglDepthbuffer[Q],R,!1);else{const ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ee)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),le(y.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(R,y,F){const Q=n.get(R);y!==void 0&&pe(Q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ve(R)}function ut(R){const y=R.texture,F=n.get(R),Q=n.get(y);R.addEventListener("dispose",D);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Ie=ie.length>1;if(Ie||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=y.version,a.memory.textures++),ee){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let Ue=0;Ue<y.mipmaps.length;Ue++)F.__webglFramebuffer[ue][Ue]=s.createFramebuffer()}else F.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)F.__webglFramebuffer[ue]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let ue=0,Ue=ie.length;ue<Ue;ue++){const ke=n.get(ie[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Vt(R)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const Ue=ie[ue];F.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const ke=r.convert(Ue.format,Ue.colorSpace),re=r.convert(Ue.type),de=A(Ue.internalFormat,ke,re,Ue.colorSpace,R.isXRRenderTarget===!0),Ce=N(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,de,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),le(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Se(s.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ue=0;Ue<y.mipmaps.length;Ue++)pe(F.__webglFramebuffer[ue][Ue],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue);else pe(F.__webglFramebuffer[ue],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(y)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ue=0,Ue=ie.length;ue<Ue;ue++){const ke=ie[ue],re=n.get(ke);let de=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,re.__webglTexture),Se(de,ke),pe(F.__webglFramebuffer,R,ke,s.COLOR_ATTACHMENT0+ue,de,0),_(ke)&&g(de)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),Se(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let Ue=0;Ue<y.mipmaps.length;Ue++)pe(F.__webglFramebuffer[Ue],R,y,s.COLOR_ATTACHMENT0,ue,Ue);else pe(F.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,ue,0);_(y)&&g(ue),t.unbindTexture()}R.depthBuffer&&Ve(R)}function dt(R){const y=R.textures;for(let F=0,Q=y.length;F<Q;F++){const ie=y[F];if(_(ie)){const ee=T(R),Ie=n.get(ie).__webglTexture;t.bindTexture(ee,Ie),g(ee),t.unbindTexture()}}}const bt=[],$e=[];function Ct(R){if(R.samples>0){if(Vt(R)===!1){const y=R.textures,F=R.width,Q=R.height;let ie=s.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(R),ue=y.length>1;if(ue)for(let ke=0;ke<y.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Ue=R.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ke=0;ke<y.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const re=n.get(y[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,re,0)}s.blitFramebuffer(0,0,F,Q,0,0,F,Q,ie,s.NEAREST),c===!0&&(bt.length=0,$e.length=0,bt.push(s.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(bt.push(ee),$e.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let ke=0;ke<y.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const re=n.get(y[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function N(R){return Math.min(i.maxSamples,R.samples)}function Vt(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function gt(R){const y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Rt(R,y){const F=R.colorSpace,Q=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Sn&&F!==Ji&&(mt.getTransfer(F)===Et?(Q!==Hn||ie!==Pn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",F)),y}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=j,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=he,this.rebindTextures=qt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Nb(s,e){function t(n,i=Ji){let r;const a=mt.getTransfer(i);if(n===Pn)return s.UNSIGNED_BYTE;if(n===Sc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===$d)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xd)return s.BYTE;if(n===jd)return s.SHORT;if(n===Vr)return s.UNSIGNED_SHORT;if(n===bc)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===zn)return s.FLOAT;if(n===Fi)return s.HALF_FLOAT;if(n===Yd)return s.ALPHA;if(n===Kd)return s.RGB;if(n===Hn)return s.RGBA;if(n===Bi)return s.DEPTH_COMPONENT;if(n===ys)return s.DEPTH_STENCIL;if(n===Ec)return s.RED;if(n===Tc)return s.RED_INTEGER;if(n===lr)return s.RG;if(n===Ac)return s.RG_INTEGER;if(n===wc)return s.RGBA_INTEGER;if(n===ja||n===$a||n===qa||n===Ya)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Ll||n===Dl||n===Nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ul||n===Ol||n===Fl||n===Bl||n===kl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ul||n===Ol)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bl)return r.COMPRESSED_R11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zl)return r.COMPRESSED_RG11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vl||n===Gl||n===Wl||n===Xl||n===jl||n===$l||n===ql||n===Yl||n===Kl||n===Zl||n===Jl||n===Ql||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nc)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===ac||n===oc||n===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new uf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:Ub,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ln(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bb extends Ts{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,f=null,d=null,m=null,v=null;const S=typeof XRWebGLBinding<"u",_=new Fb,g={},T=t.getContextAttributes();let A=null,w=null;const P=[],I=[],D=new Ye;let b=null;const C=new yn;C.viewport=new Bt;const te=new yn;te.viewport=new Bt;const L=[C,te],j=new k_;let $=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ce=P[ne];return ce===void 0&&(ce=new Wo,P[ne]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ne){let ce=P[ne];return ce===void 0&&(ce=new Wo,P[ne]=ce),ce.getGripSpace()},this.getHand=function(ne){let ce=P[ne];return ce===void 0&&(ce=new Wo,P[ne]=ce),ce.getHandSpace()};function X(ne){const ce=I.indexOf(ne.inputSource);if(ce===-1)return;const pe=P[ce];pe!==void 0&&(pe.update(ne.inputSource,ne.frame,h||a),pe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function q(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",H);for(let ne=0;ne<P.length;ne++){const ce=I[ne];ce!==null&&(I[ne]=null,P[ne].disconnect(ce))}$=null,J=null,_.reset();for(const ne in g)delete g[ne];e.setRenderTarget(A),m=null,d=null,f=null,i=null,w=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",q),i.addEventListener("inputsourceschange",H),T.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(D),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,le=null,ze=null;T.depth&&(ze=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=T.stencil?ys:Bi,le=T.stencil?Gr:mi);const Ve={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new fi(d.textureWidth,d.textureHeight,{format:Hn,type:Pn,depthTexture:new qr(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new fi(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(ne){for(let ce=0;ce<ne.removed.length;ce++){const pe=ne.removed[ce],le=I.indexOf(pe);le>=0&&(I[le]=null,P[le].disconnect(pe))}for(let ce=0;ce<ne.added.length;ce++){const pe=ne.added[ce];let le=I.indexOf(pe);if(le===-1){for(let Ve=0;Ve<P.length;Ve++)if(Ve>=I.length){I.push(pe),le=Ve;break}else if(I[Ve]===null){I[Ve]=pe,le=Ve;break}if(le===-1)break}const ze=P[le];ze&&ze.connect(pe)}}const he=new k,oe=new k;function be(ne,ce,pe){he.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const le=he.distanceTo(oe),ze=ce.projectionMatrix.elements,Ve=pe.projectionMatrix.elements,qt=ze[14]/(ze[10]-1),ut=ze[14]/(ze[10]+1),dt=(ze[9]+1)/ze[5],bt=(ze[9]-1)/ze[5],$e=(ze[8]-1)/ze[0],Ct=(Ve[8]+1)/Ve[0],N=qt*$e,Vt=qt*Ct,gt=le/(-$e+Ct),Rt=gt*-$e;if(ce.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Rt),ne.translateZ(gt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ze[10]===-1)ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ne=qt+gt,R=ut+gt,y=N-Rt,F=Vt+(le-Rt),Q=dt*ut/R*Ne,ie=bt*ut/R*Ne;ne.projectionMatrix.makePerspective(y,F,Q,ie,Ne,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function V(ne,ce){ce===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ce.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let ce=ne.near,pe=ne.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),j.near=te.near=C.near=ce,j.far=te.far=C.far=pe,($!==j.near||J!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),$=j.near,J=j.far),j.layers.mask=ne.layers.mask|6,C.layers.mask=j.layers.mask&-5,te.layers.mask=j.layers.mask&-3;const le=ne.parent,ze=j.cameras;V(j,le);for(let Ve=0;Ve<ze.length;Ve++)V(ze[Ve],le);ze.length===2?be(j,C,te):j.projectionMatrix.copy(C.projectionMatrix),Se(ne,j,le)};function Se(ne,ce,pe){pe===null?ne.matrix.copy(ce.matrixWorld):(ne.matrix.copy(pe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ce.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=cr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(ne){return g[ne]};let Je=null;function wt(ne,ce){if(u=ce.getViewerPose(h||a),v=ce,u!==null){const pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let le=!1;pe.length!==j.cameras.length&&(j.cameras.length=0,le=!0);for(let ut=0;ut<pe.length;ut++){const dt=pe[ut];let bt=null;if(m!==null)bt=m.getViewport(dt);else{const Ct=f.getViewSubImage(d,dt);bt=Ct.viewport,ut===0&&(e.setRenderTargetTextures(w,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(w))}let $e=L[ut];$e===void 0&&($e=new yn,$e.layers.enable(ut),$e.viewport=new Bt,L[ut]=$e),$e.matrix.fromArray(dt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(dt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(bt.x,bt.y,bt.width,bt.height),ut===0&&(j.matrix.copy($e.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),le===!0&&j.cameras.push($e)}const ze=i.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const ut=f.getDepthInformation(pe[0]);ut&&ut.isValid&&ut.texture&&_.init(ut,i.renderState)}if(ze&&ze.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let ut=0;ut<pe.length;ut++){const dt=pe[ut].camera;if(dt){let bt=g[dt];bt||(bt=new uf,g[dt]=bt);const $e=f.getCameraImage(dt);bt.sourceTexture=$e}}}}for(let pe=0;pe<P.length;pe++){const le=I[pe],ze=P[pe];le!==null&&ze!==void 0&&ze.update(le,ce,h||a)}Je&&Je(ne,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),v=null}const ht=new vf;ht.setAnimationLoop(wt),this.setAnimationLoop=function(ne){Je=ne},this.dispose=function(){}}}const gs=new gi,kb=new at;function zb(s,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,df(s)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function i(_,g,T,A,w){g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),f(_,g)):g.isMeshPhongMaterial?(r(_,g),u(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),d(_,g),g.isMeshPhysicalMaterial&&m(_,g,w)):g.isMeshMatcapMaterial?(r(_,g),v(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),S(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?c(_,g,T,A):g.isSpriteMaterial?h(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Tn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Tn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const T=e.get(g),A=T.envMap,w=T.envMapRotation;A&&(_.envMap.value=A,gs.copy(w),gs.x*=-1,gs.y*=-1,gs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),_.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(gs)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,T,A){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*T,_.scale.value=A*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function f(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,T){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Tn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,g){g.matcap&&(_.matcap.value=g.matcap)}function S(_,g){const T=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hb(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,A){const w=A.program;n.uniformBlockBinding(T,w)}function h(T,A){let w=i[T.id];w===void 0&&(v(T),w=u(T),i[T.id]=w,T.addEventListener("dispose",_));const P=A.program;n.updateUBOMapping(T,P);const I=e.render.frame;r[T.id]!==I&&(d(T),r[T.id]=I)}function u(T){const A=f();T.__bindingPointIndex=A;const w=s.createBuffer(),P=T.__size,I=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,w),w}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const A=i[T.id],w=T.uniforms,P=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let I=0,D=w.length;I<D;I++){const b=Array.isArray(w[I])?w[I]:[w[I]];for(let C=0,te=b.length;C<te;C++){const L=b[C];if(m(L,I,C,P)===!0){const j=L.__offset,$=Array.isArray(L.value)?L.value:[L.value];let J=0;for(let X=0;X<$.length;X++){const q=$[X],H=S(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,j+J,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,J),J+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(T,A,w,P){const I=T.value,D=A+"_"+w;if(P[D]===void 0)return typeof I=="number"||typeof I=="boolean"?P[D]=I:P[D]=I.clone(),!0;{const b=P[D];if(typeof I=="number"||typeof I=="boolean"){if(b!==I)return P[D]=I,!0}else if(b.equals(I)===!1)return b.copy(I),!0}return!1}function v(T){const A=T.uniforms;let w=0;const P=16;for(let D=0,b=A.length;D<b;D++){const C=Array.isArray(A[D])?A[D]:[A[D]];for(let te=0,L=C.length;te<L;te++){const j=C[te],$=Array.isArray(j.value)?j.value:[j.value];for(let J=0,X=$.length;J<X;J++){const q=$[J],H=S(q),he=w%P,oe=he%H.boundary,be=he+oe;w+=oe,be!==0&&P-be<H.storage&&(w+=P-be),j.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=H.storage}}}const I=w%P;return I>0&&(w+=P-I),T.__size=w,T.__cache={},this}function S(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",T),A}function _(T){const A=T.target;A.removeEventListener("dispose",_);const w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function g(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:c,update:h,dispose:g}}const Vb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function Gb(){return ai===null&&(ai=new Dc(Vb,16,16,lr,Fi),ai.name="DFG_LUT",ai.minFilter=Qt,ai.magFilter=Qt,ai.wrapS=hi,ai.wrapT=hi,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class Wb{constructor(e={}){const{canvas:t=pg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Pn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const S=m,_=new Set([wc,Ac,Tc]),g=new Set([Pn,mi,Vr,Gr,Sc,Mc]),T=new Uint32Array(4),A=new Int32Array(4);let w=null,P=null;const I=[],D=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let te=!1;this._outputColorSpace=cn;let L=0,j=0,$=null,J=-1,X=null;const q=new Bt,H=new Bt;let he=null;const oe=new je(0);let be=0,V=t.width,Se=t.height,Je=1,wt=null,ht=null;const ne=new Bt(0,0,V,Se),ce=new Bt(0,0,V,Se);let pe=!1;const le=new Uc;let ze=!1,Ve=!1;const qt=new at,ut=new k,dt=new Bt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Ct(){return $===null?Je:1}let N=n;function Vt(M,B){return t.getContext(M,B)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yc}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),N===null){const B="webgl2";if(N=Vt(B,M),N===null)throw Vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ge("WebGLRenderer: "+M.message),M}let gt,Rt,Ne,R,y,F,Q,ie,ee,Ie,ue,Ue,ke,re,de,Ce,De,Me,et,U,me,fe,Ae;function ae(){gt=new Wx(N),gt.init(),me=new Nb(N,gt),Rt=new Ox(N,gt,e,me),Ne=new Lb(N,gt),Rt.reversedDepthBuffer&&d&&Ne.buffers.depth.setReversed(!0),R=new $x(N),y=new vb,F=new Db(N,gt,Ne,y,Rt,me,R),Q=new Gx(C),ie=new J_(N),fe=new Nx(N,ie),ee=new Xx(N,ie,R,fe),Ie=new Yx(N,ee,ie,fe,R),Me=new qx(N,Rt,F),de=new Fx(y),ue=new _b(C,Q,gt,Rt,fe,de),Ue=new zb(C,y),ke=new yb,re=new Ab(gt),De=new Dx(C,Q,Ne,Ie,v,c),Ce=new Ib(C,Ie,Rt),Ae=new Hb(N,R,Rt,Ne),et=new Ux(N,gt,R),U=new jx(N,gt,R),R.programs=ue.programs,C.capabilities=Rt,C.extensions=gt,C.properties=y,C.renderLists=ke,C.shadowMap=Ce,C.state=Ne,C.info=R}ae(),S!==Pn&&(b=new Zx(S,t.width,t.height,i,r));const Z=new Bb(C,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Je},this.setPixelRatio=function(M){M!==void 0&&(Je=M,this.setSize(V,Se,!1))},this.getSize=function(M){return M.set(V,Se)},this.setSize=function(M,B,Y=!0){if(Z.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,Se=B,t.width=Math.floor(M*Je),t.height=Math.floor(B*Je),Y===!0&&(t.style.width=M+"px",t.style.height=B+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(V*Je,Se*Je).floor()},this.setDrawingBufferSize=function(M,B,Y){V=M,Se=B,Je=Y,t.width=Math.floor(M*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(S===Pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(q)},this.getViewport=function(M){return M.copy(ne)},this.setViewport=function(M,B,Y,W){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,B,Y,W),Ne.viewport(q.copy(ne).multiplyScalar(Je).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,B,Y,W){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,B,Y,W),Ne.scissor(H.copy(ce).multiplyScalar(Je).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){Ne.setScissorTest(pe=M)},this.setOpaqueSort=function(M){wt=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,Y=!0){let W=0;if(M){let G=!1;if($!==null){const ve=$.texture.format;G=_.has(ve)}if(G){const ve=$.texture.type,Ee=g.has(ve),_e=De.getClearColor(),Le=De.getClearAlpha(),Oe=_e.r,qe=_e.g,Qe=_e.b;Ee?(T[0]=Oe,T[1]=qe,T[2]=Qe,T[3]=Le,N.clearBufferuiv(N.COLOR,0,T)):(A[0]=Oe,A[1]=qe,A[2]=Qe,A[3]=Le,N.clearBufferiv(N.COLOR,0,A))}else W|=N.COLOR_BUFFER_BIT}B&&(W|=N.DEPTH_BUFFER_BIT),Y&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),De.dispose(),ke.dispose(),re.dispose(),y.dispose(),Q.dispose(),Ie.dispose(),fe.dispose(),Ae.dispose(),ue.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Zr),Z.removeEventListener("sessionend",Jr),yi.stop()};function Pe(M){M.preventDefault(),Qa("WebGLRenderer: Context Lost."),te=!0}function We(){Qa("WebGLRenderer: Context Restored."),te=!1;const M=R.autoReset,B=Ce.enabled,Y=Ce.autoUpdate,W=Ce.needsUpdate,G=Ce.type;ae(),R.autoReset=M,Ce.enabled=B,Ce.autoUpdate=Y,Ce.needsUpdate=W,Ce.type=G}function Pt(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _t(M){const B=M.target;B.removeEventListener("dispose",_t),Vn(B)}function Vn(M){hn(M),y.remove(M)}function hn(M){const B=y.get(M).programs;B!==void 0&&(B.forEach(function(Y){ue.releaseProgram(Y)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,Y,W,G,ve){B===null&&(B=bt);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,_e=an(M,B,Y,W,G);Ne.setMaterial(W,Ee);let Le=Y.index,Oe=1;if(W.wireframe===!0){if(Le=ee.getWireframeAttribute(Y),Le===void 0)return;Oe=2}const qe=Y.drawRange,Qe=Y.attributes.position;let Fe=qe.start*Oe,vt=(qe.start+qe.count)*Oe;ve!==null&&(Fe=Math.max(Fe,ve.start*Oe),vt=Math.min(vt,(ve.start+ve.count)*Oe)),Le!==null?(Fe=Math.max(Fe,0),vt=Math.min(vt,Le.count)):Qe!=null&&(Fe=Math.max(Fe,0),vt=Math.min(vt,Qe.count));const kt=vt-Fe;if(kt<0||kt===1/0)return;fe.setup(G,W,_e,Y,Le);let Ft,xt=et;if(Le!==null&&(Ft=ie.get(Le),xt=U,xt.setIndex(Ft)),G.isMesh)W.wireframe===!0?(Ne.setLineWidth(W.wireframeLinewidth*Ct()),xt.setMode(N.LINES)):xt.setMode(N.TRIANGLES);else if(G.isLine){let Kt=W.linewidth;Kt===void 0&&(Kt=1),Ne.setLineWidth(Kt*Ct()),G.isLineSegments?xt.setMode(N.LINES):G.isLineLoop?xt.setMode(N.LINE_LOOP):xt.setMode(N.LINE_STRIP)}else G.isPoints?xt.setMode(N.POINTS):G.isSprite&&xt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)eo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Kt=G._multiDrawStarts,Te=G._multiDrawCounts,Nt=G._multiDrawCount,it=Le?ie.get(Le).bytesPerElement:1,zt=y.get(W).currentProgram.getUniforms();for(let Mn=0;Mn<Nt;Mn++)zt.setValue(N,"_gl_DrawID",Mn),xt.render(Kt[Mn]/it,Te[Mn])}else if(G.isInstancedMesh)xt.renderInstances(Fe,kt,G.count);else if(Y.isInstancedBufferGeometry){const Kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,Kt);xt.renderInstances(Fe,kt,Te)}else xt.render(Fe,kt)};function ki(M,B,Y){M.transparent===!0&&M.side===ci&&M.forceSinglePass===!1?(M.side=Tn,M.needsUpdate=!0,Cs(M,B,Y),M.side=Oi,M.needsUpdate=!0,Cs(M,B,Y),M.side=ci):Cs(M,B,Y)}this.compile=function(M,B,Y=null){Y===null&&(Y=M),P=re.get(Y),P.init(B),D.push(P),Y.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(P.pushLight(G),G.castShadow&&P.pushShadow(G))}),M!==Y&&M.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(P.pushLight(G),G.castShadow&&P.pushShadow(G))}),P.setupLights();const W=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const _e=ve[Ee];ki(_e,Y,G),W.add(_e)}else ki(ve,Y,G),W.add(ve)}),P=D.pop(),W},this.compileAsync=function(M,B,Y=null){const W=this.compile(M,B,Y);return new Promise(G=>{function ve(){if(W.forEach(function(Ee){y.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){G(M);return}setTimeout(ve,10)}gt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let xr=null;function co(M){xr&&xr(M)}function Zr(){yi.stop()}function Jr(){yi.start()}const yi=new vf;yi.setAnimationLoop(co),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(M){xr=M,Z.setAnimationLoop(M),M===null?yi.stop():yi.start()},Z.addEventListener("sessionstart",Zr),Z.addEventListener("sessionend",Jr),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(te===!0)return;const Y=Z.enabled===!0&&Z.isPresenting===!0,W=b!==null&&($===null||Y)&&b.begin(C,$);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,B,$),P=re.get(M,D.length),P.init(B),D.push(P),qt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),le.setFromProjectionMatrix(qt,ui,B.reversedDepth),Ve=this.localClippingEnabled,ze=de.init(this.clippingPlanes,Ve),w=ke.get(M,I.length),w.init(),I.push(w),Z.enabled===!0&&Z.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&ts(Ee,B,-1/0,C.sortObjects)}ts(M,B,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(wt,ht),$e=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,$e&&De.addToRenderList(w,M),this.info.render.frame++,ze===!0&&de.beginShadows();const G=P.state.shadowsArray;if(Ce.render(G,M,B),ze===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&b.hasRenderPass())===!1){const Ee=w.opaque,_e=w.transmissive;if(P.setupLights(),B.isArrayCamera){const Le=B.cameras;if(_e.length>0)for(let Oe=0,qe=Le.length;Oe<qe;Oe++){const Qe=Le[Oe];ns(Ee,_e,M,Qe)}$e&&De.render(M);for(let Oe=0,qe=Le.length;Oe<qe;Oe++){const Qe=Le[Oe];bi(w,M,Qe,Qe.viewport)}}else _e.length>0&&ns(Ee,_e,M,B),$e&&De.render(M),bi(w,M,B)}$!==null&&j===0&&(F.updateMultisampleRenderTarget($),F.updateRenderTargetMipmap($)),W&&b.end(C),M.isScene===!0&&M.onAfterRender(C,M,B),fe.resetDefaultState(),J=-1,X=null,D.pop(),D.length>0?(P=D[D.length-1],ze===!0&&de.setGlobalState(C.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?w=I[I.length-1]:w=null};function ts(M,B,Y,W){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)P.pushLight(M),M.castShadow&&P.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||le.intersectsSprite(M)){W&&dt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(qt);const Ee=Ie.update(M),_e=M.material;_e.visible&&w.push(M,Ee,_e,Y,dt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||le.intersectsObject(M))){const Ee=Ie.update(M),_e=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),dt.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),dt.copy(Ee.boundingSphere.center)),dt.applyMatrix4(M.matrixWorld).applyMatrix4(qt)),Array.isArray(_e)){const Le=Ee.groups;for(let Oe=0,qe=Le.length;Oe<qe;Oe++){const Qe=Le[Oe],Fe=_e[Qe.materialIndex];Fe&&Fe.visible&&w.push(M,Ee,Fe,Y,dt.z,Qe)}}else _e.visible&&w.push(M,Ee,_e,Y,dt.z,null)}}const ve=M.children;for(let Ee=0,_e=ve.length;Ee<_e;Ee++)ts(ve[Ee],B,Y,W)}function bi(M,B,Y,W){const{opaque:G,transmissive:ve,transparent:Ee}=M;P.setupLightsView(Y),ze===!0&&de.setGlobalState(C.clippingPlanes,Y),W&&Ne.viewport(q.copy(W)),G.length>0&&As(G,B,Y),ve.length>0&&As(ve,B,Y),Ee.length>0&&As(Ee,B,Y),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function ns(M,B,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[W.id]===void 0){const Fe=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[W.id]=new fi(1,1,{generateMipmaps:!0,type:Fe?Fi:Pn,minFilter:Li,samples:Math.max(4,Rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const ve=P.state.transmissionRenderTarget[W.id],Ee=W.viewport||q;ve.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);const _e=C.getRenderTarget(),Le=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(oe),be=C.getClearAlpha(),be<1&&C.setClearColor(16777215,.5),C.clear(),$e&&De.render(Y);const qe=C.toneMapping;C.toneMapping=di;const Qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),P.setupLightsView(W),ze===!0&&de.setGlobalState(C.clippingPlanes,W),As(M,Y,W),F.updateMultisampleRenderTarget(ve),F.updateRenderTargetMipmap(ve),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let vt=0,kt=B.length;vt<kt;vt++){const Ft=B[vt],{object:xt,geometry:Kt,material:Te,group:Nt}=Ft;if(Te.side===ci&&xt.layers.test(W.layers)){const it=Te.side;Te.side=Tn,Te.needsUpdate=!0,ws(xt,Y,W,Kt,Te,Nt),Te.side=it,Te.needsUpdate=!0,Fe=!0}}Fe===!0&&(F.updateMultisampleRenderTarget(ve),F.updateRenderTargetMipmap(ve))}C.setRenderTarget(_e,Le,Oe),C.setClearColor(oe,be),Qe!==void 0&&(W.viewport=Qe),C.toneMapping=qe}function As(M,B,Y){const W=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ve=M.length;G<ve;G++){const Ee=M[G],{object:_e,geometry:Le,group:Oe}=Ee;let qe=Ee.material;qe.allowOverride===!0&&W!==null&&(qe=W),_e.layers.test(Y.layers)&&ws(_e,B,Y,Le,qe,Oe)}}function ws(M,B,Y,W,G,ve){M.onBeforeRender(C,B,Y,W,G,ve),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(C,B,Y,W,M,ve),G.transparent===!0&&G.side===ci&&G.forceSinglePass===!1?(G.side=Tn,G.needsUpdate=!0,C.renderBufferDirect(Y,B,W,G,M,ve),G.side=Oi,G.needsUpdate=!0,C.renderBufferDirect(Y,B,W,G,M,ve),G.side=ci):C.renderBufferDirect(Y,B,W,G,M,ve),M.onAfterRender(C,B,Y,W,G,ve)}function Cs(M,B,Y){B.isScene!==!0&&(B=bt);const W=y.get(M),G=P.state.lights,ve=P.state.shadowsArray,Ee=G.state.version,_e=ue.getParameters(M,G.state,ve,B,Y),Le=ue.getProgramCacheKey(_e);let Oe=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=Q.get(M.envMap||W.environment,qe),W.envMapRotation=W.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",_t),Oe=new Map,W.programs=Oe);let Qe=Oe.get(Le);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===Ee)return Si(M,_e),Qe}else _e.uniforms=ue.getUniforms(M),M.onBeforeCompile(_e,C),Qe=ue.acquireProgram(_e,Le),Oe.set(Le,Qe),W.uniforms=_e.uniforms;const Fe=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Fe.clippingPlanes=de.uniform),Si(M,_e),W.needsLights=pn(M),W.lightsStateVersion=Ee,W.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Qe,W.uniformsList=null,Qe}function Qr(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=Ka.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Si(M,B){const Y=y.get(M);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function an(M,B,Y,W,G){B.isScene!==!0&&(B=bt),F.resetTextureUnits();const ve=B.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,_e=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Sn,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Oe=Q.get(W.envMap||Ee,Le),qe=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qe=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,kt=!!Y.morphAttributes.color;let Ft=di;W.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ft=C.toneMapping);const xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Kt=xt!==void 0?xt.length:0,Te=y.get(W),Nt=P.state.lights;if(ze===!0&&(Ve===!0||M!==X)){const Wt=M===X&&W.id===J;de.setState(W,M,Wt)}let it=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Nt.state.version||Te.outputColorSpace!==_e||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==Oe||W.fog===!0&&Te.fog!==ve||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==de.numPlanes||Te.numIntersection!==de.numIntersection)||Te.vertexAlphas!==qe||Te.vertexTangents!==Qe||Te.morphTargets!==Fe||Te.morphNormals!==vt||Te.morphColors!==kt||Te.toneMapping!==Ft||Te.morphTargetsCount!==Kt)&&(it=!0):(it=!0,Te.__version=W.version);let zt=Te.currentProgram;it===!0&&(zt=Cs(W,B,G));let Mn=!1,Gn=!1,ln=!1;const ft=zt.getUniforms(),Gt=Te.uniforms;if(Ne.useProgram(zt.program)&&(Mn=!0,Gn=!0,ln=!0),W.id!==J&&(J=W.id,Gn=!0),Mn||X!==M){Ne.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(N,"projectionMatrix",M.projectionMatrix),ft.setValue(N,"viewMatrix",M.matrixWorldInverse);const Wn=ft.map.cameraPosition;Wn!==void 0&&Wn.setValue(N,ut.setFromMatrixPosition(M.matrixWorld)),Rt.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,Gn=!0,ln=!0)}if(Te.needsLights&&(Nt.state.directionalShadowMap.length>0&&ft.setValue(N,"directionalShadowMap",Nt.state.directionalShadowMap,F),Nt.state.spotShadowMap.length>0&&ft.setValue(N,"spotShadowMap",Nt.state.spotShadowMap,F),Nt.state.pointShadowMap.length>0&&ft.setValue(N,"pointShadowMap",Nt.state.pointShadowMap,F)),G.isSkinnedMesh){ft.setOptional(N,G,"bindMatrix"),ft.setOptional(N,G,"bindMatrixInverse");const Wt=G.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ft.setValue(N,"boneTexture",Wt.boneTexture,F))}G.isBatchedMesh&&(ft.setOptional(N,G,"batchingTexture"),ft.setValue(N,"batchingTexture",G._matricesTexture,F),ft.setOptional(N,G,"batchingIdTexture"),ft.setValue(N,"batchingIdTexture",G._indirectTexture,F),ft.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(N,"batchingColorTexture",G._colorsTexture,F));const mn=Y.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Me.update(G,Y,zt),(Gn||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,ft.setValue(N,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Gt.envMapIntensity.value=B.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Gb()),Gn&&(ft.setValue(N,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&fn(Gt,ln),ve&&W.fog===!0&&Ue.refreshFogUniforms(Gt,ve),Ue.refreshMaterialUniforms(Gt,W,Je,Se,P.state.transmissionRenderTarget[M.id]),Ka.upload(N,Qr(Te),Gt,F)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ka.upload(N,Qr(Te),Gt,F),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(N,"center",G.center),ft.setValue(N,"modelViewMatrix",G.modelViewMatrix),ft.setValue(N,"normalMatrix",G.normalMatrix),ft.setValue(N,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Wt=W.uniformsGroups;for(let Wn=0,An=Wt.length;Wn<An;Wn++){const Ps=Wt[Wn];Ae.update(Ps,zt),Ae.bind(Ps,zt)}}return zt}function fn(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function pn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(M,B,Y){const W=y.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),y.get(M.texture).__webglTexture=B,y.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const Y=y.get(M);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const on=N.createFramebuffer();this.setRenderTarget=function(M,B=0,Y=0){$=M,L=B,j=Y;let W=null,G=!1,ve=!1;if(M){const _e=y.get(M);if(_e.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(N.FRAMEBUFFER,_e.__webglFramebuffer),q.copy(M.viewport),H.copy(M.scissor),he=M.scissorTest,Ne.viewport(q),Ne.scissor(H),Ne.setScissorTest(he),J=-1;return}else if(_e.__webglFramebuffer===void 0)F.setupRenderTarget(M);else if(_e.__hasExternalTextures)F.rebindTextures(M,y.get(M.texture).__webglTexture,y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const qe=M.depthTexture;if(_e.__boundDepthTexture!==qe){if(qe!==null&&y.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ve=!0);const Oe=y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?W=Oe[B][Y]:W=Oe[B],G=!0):M.samples>0&&F.useMultisampledRTT(M)===!1?W=y.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[Y]:W=Oe,q.copy(M.viewport),H.copy(M.scissor),he=M.scissorTest}else q.copy(ne).multiplyScalar(Je).floor(),H.copy(ce).multiplyScalar(Je).floor(),he=pe;if(Y!==0&&(W=on),Ne.bindFramebuffer(N.FRAMEBUFFER,W)&&Ne.drawBuffers(M,W),Ne.viewport(q),Ne.scissor(H),Ne.setScissorTest(he),G){const _e=y.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e.__webglTexture,Y)}else if(ve){const _e=B;for(let Le=0;Le<M.textures.length;Le++){const Oe=y.get(M.textures[Le]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,Y,_e)}}else if(M!==null&&Y!==0){const _e=y.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_e.__webglTexture,Y)}J=-1},this.readRenderTargetPixels=function(M,B,Y,W,G,ve,Ee,_e=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){Ne.bindFramebuffer(N.FRAMEBUFFER,Le);try{const Oe=M.textures[_e],qe=Oe.format,Qe=Oe.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e),!Rt.textureFormatReadable(qe)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Qe)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-W&&Y>=0&&Y<=M.height-G&&N.readPixels(B,Y,W,G,me.convert(qe),me.convert(Qe),ve)}finally{const Oe=$!==null?y.get($).__webglFramebuffer:null;Ne.bindFramebuffer(N.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(M,B,Y,W,G,ve,Ee,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le)if(B>=0&&B<=M.width-W&&Y>=0&&Y<=M.height-G){Ne.bindFramebuffer(N.FRAMEBUFFER,Le);const Oe=M.textures[_e],qe=Oe.format,Qe=Oe.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e),!Rt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.bufferData(N.PIXEL_PACK_BUFFER,ve.byteLength,N.STREAM_READ),N.readPixels(B,Y,W,G,me.convert(qe),me.convert(Qe),0);const vt=$!==null?y.get($).__webglFramebuffer:null;Ne.bindFramebuffer(N.FRAMEBUFFER,vt);const kt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await mg(N,kt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ve),N.deleteBuffer(Fe),N.deleteSync(kt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,Y=0){const W=Math.pow(2,-Y),G=Math.floor(M.image.width*W),ve=Math.floor(M.image.height*W),Ee=B!==null?B.x:0,_e=B!==null?B.y:0;F.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Ee,_e,G,ve),Ne.unbindTexture()};const Rs=N.createFramebuffer(),zi=N.createFramebuffer();this.copyTextureToTexture=function(M,B,Y=null,W=null,G=0,ve=0){let Ee,_e,Le,Oe,qe,Qe,Fe,vt,kt;const Ft=M.isCompressedTexture?M.mipmaps[ve]:M.image;if(Y!==null)Ee=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,qe=Y.min.y,Qe=Y.isBox3?Y.min.z:0;else{const Gt=Math.pow(2,-G);Ee=Math.floor(Ft.width*Gt),_e=Math.floor(Ft.height*Gt),M.isDataArrayTexture?Le=Ft.depth:M.isData3DTexture?Le=Math.floor(Ft.depth*Gt):Le=1,Oe=0,qe=0,Qe=0}W!==null?(Fe=W.x,vt=W.y,kt=W.z):(Fe=0,vt=0,kt=0);const xt=me.convert(B.format),Kt=me.convert(B.type);let Te;B.isData3DTexture?(F.setTexture3D(B,0),Te=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(F.setTexture2DArray(B,0),Te=N.TEXTURE_2D_ARRAY):(F.setTexture2D(B,0),Te=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Nt=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zt=N.getParameter(N.UNPACK_SKIP_PIXELS),Mn=N.getParameter(N.UNPACK_SKIP_ROWS),Gn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),N.pixelStorei(N.UNPACK_SKIP_ROWS,qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe);const ln=M.isDataArrayTexture||M.isData3DTexture,ft=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const Gt=y.get(M),mn=y.get(B),Wt=y.get(Gt.__renderTarget),Wn=y.get(mn.__renderTarget);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let An=0;An<Le;An++)ln&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,y.get(M).__webglTexture,G,Qe+An),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,y.get(B).__webglTexture,ve,kt+An)),N.blitFramebuffer(Oe,qe,Ee,_e,Fe,vt,Ee,_e,N.DEPTH_BUFFER_BIT,N.NEAREST);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||y.has(M)){const Gt=y.get(M),mn=y.get(B);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,Rs),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,zi);for(let Wt=0;Wt<Le;Wt++)ln?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Gt.__webglTexture,G,Qe+Wt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Gt.__webglTexture,G),ft?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mn.__webglTexture,ve,kt+Wt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mn.__webglTexture,ve),G!==0?N.blitFramebuffer(Oe,qe,Ee,_e,Fe,vt,Ee,_e,N.COLOR_BUFFER_BIT,N.NEAREST):ft?N.copyTexSubImage3D(Te,ve,Fe,vt,kt+Wt,Oe,qe,Ee,_e):N.copyTexSubImage2D(Te,ve,Fe,vt,Oe,qe,Ee,_e);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ft?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Te,ve,Fe,vt,kt,Ee,_e,Le,xt,Kt,Ft.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,ve,Fe,vt,kt,Ee,_e,Le,xt,Ft.data):N.texSubImage3D(Te,ve,Fe,vt,kt,Ee,_e,Le,xt,Kt,Ft):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ve,Fe,vt,Ee,_e,xt,Kt,Ft.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ve,Fe,vt,Ft.width,Ft.height,xt,Ft.data):N.texSubImage2D(N.TEXTURE_2D,ve,Fe,vt,Ee,_e,xt,Kt,Ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,Nt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Mn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gn),ve===0&&B.generateMipmaps&&N.generateMipmap(Te),Ne.unbindTexture()},this.initRenderTarget=function(M){y.get(M).__webglFramebuffer===void 0&&F.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?F.setTextureCube(M,0):M.isData3DTexture?F.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?F.setTexture2DArray(M,0):F.setTexture2D(M,0),Ne.unbindTexture()},this.resetState=function(){L=0,j=0,$=null,Ne.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const Td={type:"change"},Vc={type:"start"},Ef={type:"end"},Va=new Yr,Ad=new Zi,Xb=Math.cos(70*ef.DEG2RAD),Zt=new k,En=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vl=1e-6;class jb extends K_{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:Js.ROTATE,TWO:Js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new ei,this._lastTargetPosition=new k,this._quat=new ei().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ed,this._sphericalDelta=new ed,this._scale=1,this._panOffset=new k,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new k,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qb.bind(this),this._onPointerDown=$b.bind(this),this._onPointerUp=Yb.bind(this),this._onContextMenu=nS.bind(this),this._onMouseWheel=Jb.bind(this),this._onKeyDown=Qb.bind(this),this._onTouchStart=eS.bind(this),this._onTouchMove=tS.bind(this),this._onMouseDown=Kb.bind(this),this._onMouseMove=Zb.bind(this),this._interceptControlDown=iS.bind(this),this._interceptControlUp=sS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Td),this.update(),this.state=Dt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=En:n>Math.PI&&(n-=En),i<-Math.PI?i+=En:i>Math.PI&&(i-=En),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Zt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new k(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Va.origin.copy(this.object.position),Va.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Va.direction))<Xb?this.object.lookAt(this.target):(Ad.setFromNormalAndCoplanarPoint(this.object.up,this.target),Va.intersectPlane(Ad,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vl||this._lastTargetPosition.distanceToSquared(this.target)>vl?(this.dispatchEvent(Td),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Zt.copy(i).sub(this.target);let r=Zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $b(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Yb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ef),this.state=Dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Kb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Dt.DOLLY;break;case tr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}break;case tr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Vc)}function Zb(s){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Jb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(s.preventDefault(),this.dispatchEvent(Vc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ef))}function Qb(s){this.enabled!==!1&&this._handleKeyDown(s)}function eS(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Dt.TOUCH_ROTATE;break;case Js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case Js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Dt.TOUCH_DOLLY_PAN;break;case Js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Vc)}function tS(s){switch(this._trackPointer(s),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Dt.NONE}}function nS(s){this.enabled!==!1&&s.preventDefault()}function iS(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sS(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wd(s,e){if(e===ig)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===cc||e===Zd){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===cc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function rS(s){const e=new Map,t=new Map,n=s.clone();return Tf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Tf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Tf(s.children[n],e.children[n],t)}class aS extends _r{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new Cd(t,ct.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cd(t,ct.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ES(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=Hr.extractUrlBase(e);a=Hr.resolveURL(h,this.path)}else a=Hr.extractUrlBase(e);this.manager.itemStart(e);const o=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},c=new mf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{r.parse(h,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Af){try{a[ct.KHR_BINARY_GLTF]=new TS(e)}catch(f){i&&i(f);return}r=JSON.parse(a[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new BS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](h);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(f){case ct.KHR_MATERIALS_UNLIT:a[f]=new cS;break;case ct.KHR_DRACO_MESH_COMPRESSION:a[f]=new AS(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:a[f]=new wS;break;case ct.KHR_MESH_QUANTIZATION:a[f]=new CS;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function oS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function $t(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lS{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const u=new je(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Sn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new _f(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new N_(u),h.distance=f;break;case"spot":h=new L_(u),h.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),oi(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class cS{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Ss}extendParams(e,t,n){const i=[];e.color=new je(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,cn))}return Promise.all(i)}}class hS{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class uS{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(r,r)}return Promise.all(i)}}class dS{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class fS{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class pS{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,cn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class mS{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class gS{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(r[0],r[1],r[2],Sn),Promise.all(i)}}class _S{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class vS{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(r[0],r[1],r[2],Sn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,cn)),Promise.all(i)}}class xS{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class yS{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?xi:null}extendMaterialParams(e,t){const n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class bS{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class SS{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(c=h)}return n.loadTextureImage(e,a.source,c)}}class MS{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(c=h)}return n.loadTextureImage(e,a.source,c)}}class Cd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,h=i.byteLength||0,u=i.count,f=i.byteStride,d=new Uint8Array(o,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,d,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(m),u,f,d,i.mode,i.filter),m})})}else return null}}class ES{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==kn.TRIANGLES&&h.mode!==kn.TRIANGLE_STRIP&&h.mode!==kn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const h in a)o.push(this.parser.getDependency("accessor",a[h]).then(u=>(c[h]=u,c[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const u=h.pop(),f=u.isGroup?u.children:[u],d=h[0].count,m=[];for(const v of f){const S=new at,_=new k,g=new ei,T=new k(1,1,1),A=new i_(v.geometry,v.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&_.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,w),c.SCALE&&T.fromBufferAttribute(c.SCALE,w),A.setMatrixAt(w,S.compose(_,g,T));for(const w in c)if(w==="_COLOR_0"){const P=c[w];A.instanceColor=new uc(P.array,P.itemSize,P.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&v.geometry.setAttribute(w,c[w]);Ht.prototype.copy.call(A,v),this.parser.assignFinalMaterial(A),m.push(A)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const Af="glTF",Ur=12,Rd={JSON:1313821514,BIN:5130562};class TS{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ur),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Af)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ur,r=new DataView(e,Ur);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Rd.JSON){const h=new Uint8Array(e,Ur+a,o);this.content=n.decode(h)}else if(c===Rd.BIN){const h=Ur+a;this.body=e.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class AS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},h={};for(const u in a){const f=mc[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=mc[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],m=sr[d.componentType];h[f]=m.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,d){i.decodeDracoFile(u,function(m){for(const v in m.attributes){const S=m.attributes[v],_=c[v];_!==void 0&&(S.normalized=_)}f(m)},o,h,Sn,d)})})}}class wS{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class CS{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class wf extends pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,u=i-t,f=(n-t)/u,d=f*f,m=d*f,v=e*h,S=v-h,_=-2*m+3*d,g=m-d,T=1-_,A=g-d+f;for(let w=0;w!==o;w++){const P=a[S+w+o],I=a[S+w+c]*u,D=a[v+w+o],b=a[v+w]*u;r[w]=T*P+A*I+_*D+g*b}return r}}const RS=new ei;class PS extends wf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return RS.fromArray(r).normalize().toArray(r),r}}const kn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pd={9728:Jt,9729:Qt,9984:Wd,9985:Xa,9986:Fr,9987:Li},Id={33071:hi,33648:Za,10497:or},xl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},IS={CUBICSPLINE:void 0,LINEAR:Xr,STEP:Wr},yl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function LS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Bc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),s.DefaultMaterial}function _s(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function DS(s,e,t){let n=!1,i=!1,r=!1;for(let h=0,u=e.length;h<u;h++){const f=e[h];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let h=0,u=e.length;h<u;h++){const f=e[h];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(d)}if(i){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(h){const u=h[0],f=h[1],d=h[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function NS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function US(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bl(t.attributes):e=s.indices+":"+bl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bl(s.targets[n]);return e}function bl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function gc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const FS=new at;class BS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new P_(this.options.manager):this.textureLoader=new F_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return _s(r,o,i),oi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[h,u]of a.children.entries())r(u,o.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Hr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=xl[i.type],o=sr[i.componentType],c=i.normalized===!0,h=new o(i.count*a);return Promise.resolve(new bn(h,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=xl[i.type],h=sr[i.componentType],u=h.BYTES_PER_ELEMENT,f=u*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let S,_;if(m&&m!==f){const g=Math.floor(d/m),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let A=t.cache.get(T);A||(S=new h(o,g*m,i.count*m/u),A=new Kg(S,m/u),t.cache.add(T,A)),_=new Lc(A,c,d%m/u,v)}else o===null?S=new h(i.count*c):S=new h(o,d,i.count*c),_=new bn(S,c,v);if(i.sparse!==void 0){const g=xl.SCALAR,T=sr[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,P=new T(a[1],A,i.sparse.count*g),I=new h(a[2],w,i.sparse.count*c);o!==null&&(_=new bn(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let D=0,b=P.length;D<b;D++){const C=P[D];if(_.setX(C,I[D*c]),c>=2&&_.setY(C,I[D*c+1]),c>=3&&_.setZ(C,I[D*c+2]),c>=4&&_.setW(C,I[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=v}return _})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Pd[d.magFilter]||Qt,u.minFilter=Pd[d.minFilter]||Li,u.wrapS=Id[d.wrapS]||or,u.wrapT=Id[d.wrapT]||or,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==Qt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){h=!0;const d=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(d,m){let v=d;t.isImageBitmapLoader===!0&&(v=function(S){const _=new rn(S);_.needsUpdate=!0,d(_)}),t.load(Hr.resolveURL(f,r.path),v,void 0,m)})}).then(function(f){return h===!0&&o.revokeObjectURL(c),oi(f,a),f.userData.mimeType=a.mimeType||OS(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new cf,pi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Oc,pi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},h=[];if(c[ct.KHR_MATERIALS_UNLIT]){const f=i[ct.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),h.push(f.extendParams(o,r,t))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new je(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Sn),o.opacity=d[3]}f.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",f.baseColorTexture,cn)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ci);const u=r.alphaMode||yl.OPAQUE;if(u===yl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===yl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ss&&(h.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==Ss&&(h.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ss){const f=r.emissiveFactor;o.emissive=new je().setRGB(f[0],f[1],f[2],Sn)}return r.emissiveTexture!==void 0&&a!==Ss&&h.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,cn)),Promise.all(h).then(function(){const f=new a(o);return r.name&&(f.name=r.name),oi(f,r),t.associations.set(f,{materials:e}),r.extensions&&_s(i,f,r),f})}createUniqueName(e){const t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ld(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const h=e[o],u=US(h),f=i[u];if(f)a.push(f.promise);else{let d;h.extensions&&h.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=r(h):d=Ld(new Dn,h,t),i[u]={primitive:h,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,h=a.length;c<h;c++){const u=a[c].material===void 0?LS(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const h=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let m=0,v=u.length;m<v;m++){const S=u[m],_=a[m];let g;const T=h[m];if(_.mode===kn.TRIANGLES||_.mode===kn.TRIANGLE_STRIP||_.mode===kn.TRIANGLE_FAN||_.mode===void 0)g=r.isSkinnedMesh===!0?new e_(S,T):new Ln(S,T),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),_.mode===kn.TRIANGLE_STRIP?g.geometry=wd(g.geometry,Zd):_.mode===kn.TRIANGLE_FAN&&(g.geometry=wd(g.geometry,cc));else if(_.mode===kn.LINES)g=new lf(S,T);else if(_.mode===kn.LINE_STRIP)g=new Fc(S,T);else if(_.mode===kn.LINE_LOOP)g=new o_(S,T);else if(_.mode===kn.POINTS)g=new l_(S,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(g.geometry.morphAttributes).length>0&&NS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),oi(g,r),_.extensions&&_s(i,g,_),t.assignFinalMaterial(g),f.push(g)}for(let m=0,v=f.length;m<v;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return r.extensions&&_s(i,f[0],r),f[0];const d=new bs;r.extensions&&_s(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,v=f.length;m<v;m++)d.add(f[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(ef.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ao(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let h=0,u=a.length;h<u;h++){const f=a[h];if(f){o.push(f);const d=new at;r!==null&&d.fromArray(r.array,h*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Nc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],h=[],u=[];for(let f=0,d=i.channels.length;f<d;f++){const m=i.channels[f],v=i.samplers[m.sampler],S=m.target,_=S.node,g=i.parameters!==void 0?i.parameters[v.input]:v.input,T=i.parameters!==void 0?i.parameters[v.output]:v.output;S.node!==void 0&&(a.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",T)),h.push(v),u.push(S))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(h),Promise.all(u)]).then(function(f){const d=f[0],m=f[1],v=f[2],S=f[3],_=f[4],g=[];for(let A=0,w=d.length;A<w;A++){const P=d[A],I=m[A],D=v[A],b=S[A],C=_[A];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const te=n._createAnimationTracks(P,I,D,b,C);if(te)for(let L=0;L<te.length;L++)g.push(te[L])}const T=new M_(r,void 0,g);return oi(T,i),T})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,h=i.weights.length;c<h;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let h=0,u=o.length;h<u;h++)a.push(n.getDependency("node",o[h]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(h){const u=h[0],f=h[1],d=h[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,FS)});for(let m=0,v=f.length;m<v;m++)u.add(f[m]);if(u.userData.pivot!==void 0&&f.length>0){const m=u.userData.pivot,v=f[0];u.pivot=new k().fromArray(m),u.position.x-=m[0],u.position.y-=m[1],u.position.z-=m[2],v.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let u;if(r.isBone===!0?u=new of:h.length>1?u=new bs:h.length===1?u=h[0]:u=new Ht,u!==h[0])for(let f=0,d=h.length;f<d;f++)u.add(h[f]);if(r.name&&(u.userData.name=r.name,u.name=a),oi(u,r),r.extensions&&_s(n,u,r),r.matrix!==void 0){const f=new at;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new bs;n.name&&(r.name=i.createUniqueName(n.name)),oi(r,n),n.extensions&&_s(t,r,n);const a=n.nodes||[],o=[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,f=c.length;u<f;u++){const d=c[u];d.parent!==null?r.add(rS(d)):r.add(d)}const h=u=>{const f=new Map;for(const[d,m]of i.associations)(d instanceof pi||d instanceof rn)&&f.set(d,m);return u.traverse(d=>{const m=i.associations.get(d);m!=null&&f.set(d,m)}),f};return i.associations=h(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Ki[r.path]===Ki.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let h;switch(Ki[r.path]){case Ki.weights:h=ur;break;case Ki.rotation:h=dr;break;case Ki.translation:case Ki.scale:h=fr;break;default:n.itemSize===1?h=ur:h=fr;break}const u=i.interpolation!==void 0?IS[i.interpolation]:Xr,f=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const v=new h(c[d]+"."+Ki[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof dr?PS:wf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kS(s,e,t){const n=e.attributes,i=new ti;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,h=o.max;if(c!==void 0&&h!==void 0){if(i.set(new k(c[0],c[1],c[2]),new k(h[0],h[1],h[2])),o.normalized){const u=gc(sr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new k,c=new k;for(let h=0,u=r.length;h<u;h++){const f=r[h];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],m=d.min,v=d.max;if(m!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),d.normalized){const S=gc(sr[d.componentType]);c.multiplyScalar(S)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new vi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ld(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=mc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return mt.workingColorSpace!==Sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),oi(s,e),kS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?DS(s,e.targets,t):s})}class zS{constructor(e,t={}){this.parent=e,this.viewerId=t.viewerId??"service_model_viewer",this.title=t.title??"Просмотр 3D-модели",this.modelPath=t.modelPath??"",this.renderer=null,this.scene=null,this.camera=null,this.controls=null,this.animationFrameId=null,this.onResizeBound=this.onResize.bind(this),this.animate=this.animate.bind(this)}get canvasId(){return`${this.viewerId}_canvas`}get canvas(){return document.getElementById(this.canvasId)}get errorId(){return`${this.viewerId}_error`}get errorElement(){return document.getElementById(this.errorId)}get zoomInContainerId(){return`${this.viewerId}_zoom_in`}get zoomOutContainerId(){return`${this.viewerId}_zoom_out`}get frontViewContainerId(){return`${this.viewerId}_front`}get backViewContainerId(){return`${this.viewerId}_back`}get leftViewContainerId(){return`${this.viewerId}_left`}get rightViewContainerId(){return`${this.viewerId}_right`}getHtml(){return`
                <section class="card p-4 border-0 shadow-sm">
                    <div class="d-flex flex-column gap-3">
                        <h2 class="fs-5 fw-semibold mb-0">${this.title}</h2>
                        <p class="text-secondary mb-0">Путь модели: ${this.modelPath}</p>
                        <canvas id="${this.canvasId}" class="service-model-viewer-canvas"></canvas>
                        <div id="${this.errorId}" class="text-danger small"></div>

                        <div class="d-flex flex-wrap gap-2">
                            <div id="${this.zoomInContainerId}"></div>
                            <div id="${this.zoomOutContainerId}"></div>
                        </div>

                        <div class="d-flex flex-wrap gap-2">
                            <div id="${this.frontViewContainerId}"></div>
                            <div id="${this.backViewContainerId}"></div>
                            <div id="${this.leftViewContainerId}"></div>
                            <div id="${this.rightViewContainerId}"></div>
                        </div>
                    </div>
                </section>
            `}renderButton(e,t,n){const i=document.getElementById(e);if(!i)return;new Ms(i,t,n,"outline-primary").render()}renderControls(){this.renderButton(this.zoomInContainerId,"+",this.zoomIn.bind(this)),this.renderButton(this.zoomOutContainerId,"-",this.zoomOut.bind(this)),this.renderButton(this.frontViewContainerId,"Вид спереди",()=>this.setCameraDirection("front")),this.renderButton(this.backViewContainerId,"Вид сзади",()=>this.setCameraDirection("back")),this.renderButton(this.leftViewContainerId,"Вид слева",()=>this.setCameraDirection("left")),this.renderButton(this.rightViewContainerId,"Вид справа",()=>this.setCameraDirection("right"))}setError(e=""){this.errorElement&&(this.errorElement.textContent=e)}normalizeModelToFloor(e){const t=new ti().setFromObject(e),n=t.getSize(new k),i=t.getCenter(new k);e.position.x-=i.x,e.position.z-=i.z,e.position.y-=t.min.y;const r=Math.max(n.x,n.y,n.z);r>0&&e.scale.multiplyScalar(2.2/r)}focusCameraOnModel(e){const t=new ti().setFromObject(e),n=t.getSize(new k),i=t.getCenter(new k),r=Math.max(n.x,n.y,n.z,1);this.controls.target.copy(i),this.camera.position.set(i.x,i.y+r*.8,i.z+r*1.8),this.camera.near=.1,this.camera.far=1e3,this.camera.updateProjectionMatrix(),this.controls.update()}loadModel(){if(!this.modelPath){this.setError("Путь до модели не задан.");return}new aS().load(encodeURI(this.modelPath),t=>{const n=t.scene;this.normalizeModelToFloor(n),this.scene.add(n),this.focusCameraOnModel(n),this.setError("")},void 0,()=>{this.setError("Не удалось загрузить модель по указанному пути.")})}zoomIn(){if(!this.camera||!this.controls)return;const e=new k().subVectors(this.camera.position,this.controls.target).normalize();this.camera.position.addScaledVector(e,-.5),this.controls.update()}zoomOut(){if(!this.camera||!this.controls)return;const e=new k().subVectors(this.camera.position,this.controls.target).normalize();this.camera.position.addScaledVector(e,.5),this.controls.update()}setCameraDirection(e){if(!this.camera||!this.controls)return;const t=this.controls.target.clone(),n=this.camera.position.distanceTo(t);let i=t.x,r=t.y+1,a=t.z;e==="front"&&(a+=n),e==="back"&&(a-=n),e==="left"&&(i-=n),e==="right"&&(i+=n),this.camera.position.set(i,r,a),this.controls.update()}onResize(){if(!this.renderer||!this.camera||!this.canvas)return;const e=this.canvas.clientWidth,t=this.canvas.clientHeight;e===0||t===0||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}animate(){!this.renderer||!this.scene||!this.camera||!this.controls||(this.animationFrameId=requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera))}initThree(){if(!this.canvas)return;this.renderer=new Wb({canvas:this.canvas,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene=new jg,this.scene.background=new je(15133685),this.camera=new yn(60,1,.1,1e3),this.camera.position.set(0,2,5),this.controls=new jb(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.enableZoom=!0,this.scene.add(new O_(16777215,.7));const e=new _f(16777215,.8);e.position.set(4,10,8),this.scene.add(e);const t=new Y_(12,12,10205355,13163731);this.scene.add(t),this.loadModel(),this.onResize(),this.animate(),window.addEventListener("resize",this.onResizeBound)}render(){this.parent.insertAdjacentHTML("beforeend",this.getHtml()),this.renderControls(),this.initThree()}destroy(){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),window.removeEventListener("resize",this.onResizeBound),this.controls&&(this.controls.dispose(),this.controls=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.scene=null,this.camera=null}}class HS{constructor(e){this.parent=e,this.infoResult=new Im,this.modelViewer=null,this.currentService="insuranceService",this.serviceData=null}setService(e){this.currentService=String(e??"").trim()||"insuranceService"}get pageId(){return"service_page"}get defaultTitle(){return"Услуга"}get defaultDescription(){return""}get defaultInfoTitle(){return"Информация"}get defaultInfoItems(){return["Дополнительная информация отсутствует."]}get effectiveTitle(){return this.serviceData?.title??this.defaultTitle}get effectiveDescription(){return this.serviceData?.description??this.defaultDescription}get effectiveInfoTitle(){return this.serviceData?.infoTitle??this.defaultInfoTitle}get effectiveInfoItems(){const e=this.serviceData?.infoItems;return Array.isArray(e)&&e.length>0?e:this.defaultInfoItems}get effectiveModelPath(){const e=this.serviceData?.modelPath;return e!=null?String(e):""}getContentHtml(){return this.infoResult.getHtml(this.effectiveInfoTitle,this.effectiveInfoItems)}get pageHeaderId(){return`${this.pageId}_header`}get pageHeaderContainer(){return document.getElementById(this.pageHeaderId)}get modelViewerId(){return`${this.pageId}_model_viewer`}get modelViewerContainer(){return document.getElementById(this.modelViewerId)}get infoContainerId(){return`${this.pageId}_info`}get infoContainer(){return document.getElementById(this.infoContainerId)}getHtml(){return`
                <div class="container d-flex flex-column gap-4 py-5" id="${this.pageId}">
                    <div id="${this.pageHeaderId}"></div>
                    <div class="d-flex flex-column gap-1">
                        <h1 class="text-primary fs-1 fw-bold" id="service_page_title">${this.effectiveTitle}</h1>
                        <p class="text-secondary" id="service_page_description">${this.effectiveDescription}</p>
                    </div>
                    <div id="${this.infoContainerId}">${this.getContentHtml()}</div>
                    <div id="${this.modelViewerId}"></div>
                </div>
            `}loadServiceData(){Qs.get(er.getServiceByPath(this.currentService),(e,t)=>{if(t!==0){if(t!==200||!e){Kn().showWarning("Не удалось загрузить данные услуги с сервера.");return}this.serviceData=e,this.updatePageFromServiceData()}})}updatePageFromServiceData(){const e=document.getElementById("service_page_title"),t=document.getElementById("service_page_description");e&&(e.textContent=this.effectiveTitle),t&&(t.textContent=this.effectiveDescription),this.infoContainer&&(this.infoContainer.innerHTML=this.getContentHtml()),this.renderModelViewer();const n=`${this.pageId}_viewer_component`,a=document.getElementById(`${n}_canvas`)?.closest("section")?.querySelector("h2");a&&(a.textContent=`3D просмотр: ${this.effectiveTitle}`)}renderModelViewer(){if(this.modelViewer&&(this.modelViewer.destroy(),this.modelViewer=null),!this.modelViewerContainer)return;this.modelViewerContainer.innerHTML="";const e=this.effectiveModelPath;e&&(this.modelViewer=new zS(this.modelViewerContainer,{viewerId:`${this.pageId}_viewer_component`,title:`3D просмотр: ${this.effectiveTitle}`,modelPath:e}),this.modelViewer.render())}render(){this.serviceData=null,this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHtml()),new xc(this.pageHeaderContainer,`${this.pageId}_header_block`).render(),this.renderModelViewer(),this.loadServiceData()}}class VS{constructor(e){this.parent=e,this.mode="create",this.serviceDraft={id:"",path:"",title:"",description:"",image:"",secondTaskText:"",infoTitle:"",infoItemsText:""}}loadContextFromSession(){const e=sessionStorage.getItem("serviceEditor.mode"),t=sessionStorage.getItem("serviceEditor.service");if(this.mode=e==="edit"?"edit":"create",!!t)try{const n=JSON.parse(t),i=Array.isArray(n?.infoItems)?n.infoItems:[];this.serviceDraft={id:n?.id??"",path:n?.path??"",title:n?.title??"",description:n?.description??"",image:n?.image??"",secondTaskText:n?.secondTaskText??"",infoTitle:n?.infoTitle??"",infoItemsText:i.map(r=>String(r??"").trim()).filter(Boolean).join(`
`)}}catch{}}get title(){return this.mode==="edit"?"Редактирование услуги":"Создание услуги"}get pageId(){return"service_editor_page"}get pageHeaderId(){return`${this.pageId}_header`}get pageHeaderContainer(){return document.getElementById(this.pageHeaderId)}get actionsContainerId(){return`${this.pageId}_actions`}get actionsContainer(){return document.getElementById(this.actionsContainerId)}readDraftFromForm(){const e=t=>String(document.getElementById(t)?.value??"").trim();return{id:e("service_editor_id"),path:e("service_editor_path"),title:e("service_editor_title"),description:e("service_editor_description"),image:e("service_editor_image"),secondTaskText:e("service_editor_second_task_text"),infoTitle:e("service_editor_info_title"),infoItemsText:String(document.getElementById("service_editor_info_items")?.value??"")}}validateDraft(e){return[{key:"path",label:"Path"},{key:"title",label:"Название"},{key:"description",label:"Описание"},{key:"image",label:"Image"},{key:"secondTaskText",label:"Second Task Text"}].filter(({key:i})=>!String(e?.[i]??"").trim()).map(({label:i})=>i)}onSave(){const e=this.readDraftFromForm(),t=this.validateDraft(e);if(t.length>0){Kn().showWarning(`Заполните поля: ${t.join(", ")}`);return}const n=String(e.infoItemsText??"").split(/\r?\n/).map(r=>String(r??"").trim()).filter(Boolean),i={path:e.path,title:e.title,description:e.description,image:e.image,secondTaskText:e.secondTaskText,infoTitle:String(e.infoTitle??"").trim(),infoItems:n};if(this.mode==="edit"){const r=Number.parseInt(String(e.id??""),10);if(!Number.isFinite(r)||r<=0){Kn().showWarning("Не удалось определить ID услуги для редактирования.");return}Qs.patch(er.updateServiceById(r),i,(a,o)=>{if(o!==0){if(o===200){Kn().showSuccess(`Услуга "${i.title}" сохранена.`),sessionStorage.removeItem("serviceEditor.mode"),sessionStorage.removeItem("serviceEditor.service"),sessionStorage.setItem("main.navigateTo",JSON.stringify({path:i.path})),es("main");return}Kn().showWarning(`Не удалось сохранить услугу "${i.title}".`)}});return}Qs.post(er.createService(),i,(r,a)=>{if(a!==0){if(a===201&&r&&r.path){Kn().showSuccess(`Услуга "${i.title}" создана.`),sessionStorage.removeItem("serviceEditor.mode"),sessionStorage.removeItem("serviceEditor.service"),sessionStorage.setItem("main.navigateTo",JSON.stringify({path:r.path})),es("main");return}if(a===201){Kn().showSuccess(`Услуга "${i.title}" создана.`),sessionStorage.removeItem("serviceEditor.mode"),sessionStorage.removeItem("serviceEditor.service"),sessionStorage.setItem("main.navigateTo",JSON.stringify({path:i.path})),es("main");return}Kn().showWarning(`Не удалось создать услугу "${i.title}".`)}})}getHtml(){return`
            <div class="container d-flex flex-column gap-4 py-5" id="${this.pageId}">
                <div id="${this.pageHeaderId}"></div>

                <div class="d-flex flex-column gap-1">
                    <h1 class="text-primary fs-1 fw-bold mb-0">${this.title}</h1>
                    <p class="text-secondary mb-0">Заполните поля карточки услуги и нажмите "Сохранить".</p>
                </div>

                <form class="card p-4 border-0 shadow-sm d-flex flex-column gap-3" autocomplete="off" onsubmit="return false;">
                    <div>
                        <label class="form-label" for="service_editor_id">ID</label>
                        <input class="form-control" id="service_editor_id" type="text" value="${String(this.serviceDraft.id??"")}" disabled>
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_path">Path</label>
                        <input class="form-control" id="service_editor_path" type="text" value="${String(this.serviceDraft.path??"")}" placeholder="insuranceService">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_title">Название</label>
                        <input class="form-control" id="service_editor_title" type="text" value="${String(this.serviceDraft.title??"")}" placeholder="Страховка">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_description">Описание</label>
                        <textarea class="form-control" id="service_editor_description" rows="4" placeholder="Описание услуги">${String(this.serviceDraft.description??"")}</textarea>
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_image">Image</label>
                        <input class="form-control" id="service_editor_image" type="text" value="${String(this.serviceDraft.image??"")}" placeholder="/images/insurance.png">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_second_task_text">Second Task Text</label>
                        <input class="form-control" id="service_editor_second_task_text" type="text" value="${String(this.serviceDraft.secondTaskText??"")}" placeholder="Страховка и автомобиль">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_info_title">Заголовок дополнительной информации</label>
                        <input class="form-control" id="service_editor_info_title" type="text" value="${String(this.serviceDraft.infoTitle??"")}" placeholder="Информация">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_info_items">Пункты дополнительной информации</label>
                        <textarea class="form-control" id="service_editor_info_items" rows="4" placeholder="Каждый пункт с новой строки">${String(this.serviceDraft.infoItemsText??"")}</textarea>
                        <div class="form-text">Каждый пункт выводится отдельной строкой на странице "Подробнее".</div>
                    </div>

                    <div class="d-flex justify-content-end gap-2 pt-2" id="${this.actionsContainerId}"></div>
                </form>
            </div>
        `}render(){this.loadContextFromSession(),this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHtml()),new xc(this.pageHeaderContainer,`${this.pageId}_header_block`).render(),new Ms(this.actionsContainer,"Сохранить",this.onSave.bind(this),"primary").render()}}const _c=document.querySelector("#root");Kn().render();const Dd=new HS(_c),Nd={main:new Pm(_c),serviceEditor:new VS(_c)};let vc="main";const Cf=s=>{if(typeof s=="string"&&s!=="main"&&s!=="serviceEditor"){Dd.setService(s),Dd.render();return}s in Nd&&Nd[s].render()};Cf(vc);const es=s=>{vc=s,Cf(vc)};
