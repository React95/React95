try{
(()=>{var Mo=Object.defineProperty;var To=(o,e)=>{for(var t in e)Mo(o,t,{get:e[t],enumerable:!0})};var g={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."};var le={};To(le,{Children:()=>No,Component:()=>Te,Fragment:()=>_,Profiler:()=>Ro,PureComponent:()=>Oo,StrictMode:()=>Bo,Suspense:()=>ke,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Lo,cloneElement:()=>Ho,createContext:()=>Io,createElement:()=>Fo,createFactory:()=>Uo,createRef:()=>jo,default:()=>Po,forwardRef:()=>Do,isValidElement:()=>zo,lazy:()=>Pe,memo:()=>Vo,startTransition:()=>Yo,unstable_act:()=>Wo,useCallback:()=>T,useContext:()=>Go,useDebugValue:()=>Zo,useDeferredValue:()=>qo,useEffect:()=>N,useId:()=>Xo,useImperativeHandle:()=>Ko,useInsertionEffect:()=>Jo,useLayoutEffect:()=>Qo,useMemo:()=>W,useReducer:()=>er,useRef:()=>tr,useState:()=>k,useSyncExternalStore:()=>or,useTransition:()=>rr,version:()=>ir});var Po=__REACT__,{Children:No,Component:Te,Fragment:_,Profiler:Ro,PureComponent:Oo,StrictMode:Bo,Suspense:ke,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Lo,cloneElement:Ho,createContext:Io,createElement:Fo,createFactory:Uo,createRef:jo,forwardRef:Do,isValidElement:zo,lazy:Pe,memo:Vo,startTransition:Yo,unstable_act:Wo,useCallback:T,useContext:Go,useDebugValue:Zo,useDeferredValue:qo,useEffect:N,useId:Xo,useImperativeHandle:Ko,useInsertionEffect:Jo,useLayoutEffect:Qo,useMemo:W,useReducer:er,useRef:tr,useState:k,useSyncExternalStore:or,useTransition:rr,version:ir}=__REACT__;var ci=__STORYBOOK_THEMING__,{CacheProvider:di,ClassNames:hi,Global:pi,ThemeProvider:ui,background:fi,color:mi,convert:gi,create:vi,createCache:yi,createGlobal:bi,createReset:xi,css:P,darken:wi,ensure:_i,ignoreSsrWarning:$i,isPropValid:Ei,jsx:p,keyframes:Si,lighten:Ai,styled:Ci,themes:Mi,typography:Ti,useTheme:ki,withTheme:Pi}=__STORYBOOK_THEMING__;var Li=__STORYBOOK_COMPONENTS__,{A:Hi,ActionBar:Ii,AddonPanel:ht,Badge:Fi,Bar:Ui,Blockquote:ji,Button:Di,ClipboardCode:zi,Code:Vi,DL:Yi,Div:Wi,DocumentWrapper:Gi,EmptyTabContent:Zi,ErrorFormatter:qi,FlexBar:pt,Form:Xi,H1:Ki,H2:Ji,H3:Qi,H4:es,H5:ts,H6:os,HR:rs,IconButton:ce,IconButtonSkeleton:is,Icons:de,Img:ss,LI:ns,Link:K,ListItem:as,Loader:ls,Modal:cs,OL:ds,P:hs,Placeholder:I,Pre:ps,ResetWrapper:us,ScrollArea:fs,Separator:ut,Spaced:ms,Span:gs,StorybookIcon:vs,StorybookLogo:ys,Symbols:bs,SyntaxHighlighter:xs,TT:ws,TabBar:_s,TabButton:$s,TabWrapper:Es,Table:Ss,Tabs:ft,TabsState:As,TooltipLinkList:Cs,TooltipMessage:Ms,TooltipNote:Ts,UL:ks,WithTooltip:Ps,WithTooltipPure:Ns,Zoom:Rs,codeCommon:Os,components:Bs,createCopyToClipboardFunction:Ls,getStoryHref:Hs,icons:Is,interleaveSeparators:Fs,nameSpaceClassNames:Us,resetComponents:js,withReset:Ds}=__STORYBOOK_COMPONENTS__;var he=window,pe=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ne=Symbol(),mt=new WeakMap,J=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(pe&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=mt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&mt.set(t,e))}return e}toString(){return this.cssText}},gt=o=>new J(typeof o=="string"?o:o+"",void 0,Ne),A=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new J(t,o,Ne)},Re=(o,e)=>{pe?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),i=he.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)})},ue=pe?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return gt(t)})(o):o;var Oe,fe=window,vt=fe.trustedTypes,sr=vt?vt.emptyScript:"",yt=fe.reactiveElementPolyfillSupport,Le={toAttribute(o,e){switch(e){case Boolean:o=o?sr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},bt=(o,e)=>e!==o&&(e==e||o==o),Be={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:bt},He="finalized",B=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=Be){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){let s=this[e];this[t]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Be}static finalize(){if(this.hasOwnProperty(He))return!1;this[He]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(ue(i))}else e!==void 0&&t.push(ue(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Re(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Be){var i;let s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){let n=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Le).toAttribute(t,r.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var r;let i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){let n=i.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Le;this._$El=s,this[s]=c.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||bt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};B[He]=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},yt?.({ReactiveElement:B}),((Oe=fe.reactiveElementVersions)!==null&&Oe!==void 0?Oe:fe.reactiveElementVersions=[]).push("1.6.3");var Ie,me=window,G=me.trustedTypes,xt=G?G.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ue="$lit$",F=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+F,nr=`<${Ct}>`,V=document,ee=()=>V.createComment(""),te=o=>o===null||typeof o!="object"&&typeof o!="function",Mt=Array.isArray,ar=o=>Mt(o)||typeof o?.[Symbol.iterator]=="function",Fe=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,_t=/>/g,D=RegExp(`>|${Fe}(?:([^\\s"'>=/]+)(${Fe}*=${Fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,Et=/"/g,Tt=/^(?:script|style|textarea|title)$/i,kt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=kt(1),C=kt(2),L=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),St=new WeakMap,z=V.createTreeWalker(V,129,null,!1);function Pt(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(e):e}var lr=(o,e)=>{let t=o.length-1,r=[],i,s=e===2?"<svg>":"",n=Q;for(let c=0;c<t;c++){let a=o[c],d,l,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,l=n.exec(a),l!==null);)u=n.lastIndex,n===Q?l[1]==="!--"?n=wt:l[1]!==void 0?n=_t:l[2]!==void 0?(Tt.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=D):l[3]!==void 0&&(n=D):n===D?l[0]===">"?(n=i??Q,h=-1):l[1]===void 0?h=-2:(h=n.lastIndex-l[2].length,d=l[1],n=l[3]===void 0?D:l[3]==='"'?Et:$t):n===Et||n===$t?n=D:n===wt||n===_t?n=Q:(n=D,i=void 0);let f=n===D&&o[c+1].startsWith("/>")?" ":"";s+=n===Q?a+nr:h>=0?(r.push(d),a.slice(0,h)+Ue+a.slice(h)+F+f):a+F+(h===-2?(r.push(void 0),c):f)}return[Pt(o,s+(o[t]||"<?>")+(e===2?"</svg>":"")),r]},oe=class o{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,n=0,c=e.length-1,a=this.parts,[d,l]=lr(e,t);if(this.el=o.createElement(d,r),z.currentNode=this.el.content,t===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=z.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let u of i.getAttributeNames())if(u.endsWith(Ue)||u.startsWith(F)){let f=l[n++];if(h.push(u),f!==void 0){let m=i.getAttribute(f.toLowerCase()+Ue).split(F),x=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:x[2],strings:m,ctor:x[1]==="."?De:x[1]==="?"?ze:x[1]==="@"?Ve:q})}else a.push({type:6,index:s})}for(let u of h)i.removeAttribute(u)}if(Tt.test(i.tagName)){let h=i.textContent.split(F),u=h.length-1;if(u>0){i.textContent=G?G.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],ee()),z.nextNode(),a.push({type:2,index:++s});i.append(h[u],ee())}}}else if(i.nodeType===8)if(i.data===Ct)a.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(F,h+1))!==-1;)a.push({type:7,index:s}),h+=F.length-1}s++}}static createElement(e,t){let r=V.createElement("template");return r.innerHTML=e,r}};function Z(o,e,t=o,r){var i,s,n,c;if(e===L)return e;let a=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl,d=te(e)?void 0:e._$litDirective$;return a?.constructor!==d&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),d===void 0?a=void 0:(a=new d(o),a._$AT(o,t,r)),r!==void 0?((n=(c=t)._$Co)!==null&&n!==void 0?n:c._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=Z(o,a._$AS(o,e.values),a,r)),e}var je=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:i}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:V).importNode(r,!0);z.currentNode=s;let n=z.nextNode(),c=0,a=0,d=i[0];for(;d!==void 0;){if(c===d.index){let l;d.type===2?l=new re(n,n.nextSibling,this,e):d.type===1?l=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(l=new Ye(n,this,e)),this._$AV.push(l),d=i[++a]}c!==d?.index&&(n=z.nextNode(),c++)}return z.currentNode=V,s}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},re=class o{constructor(e,t,r,i){var s;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),te(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ar(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&te(this._$AH)?this._$AA.nextSibling.data=e:this.$(V.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oe.createElement(Pt(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(r);else{let n=new je(s,this),c=n.u(this.options);n.v(r),this.$(c),this._$AH=n}}_$AC(e){let t=St.get(e.strings);return t===void 0&&St.set(e.strings,t=new oe(e)),t}T(e){Mt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let s of e)i===t.length?t.push(r=new o(this.k(ee()),this.k(ee()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},q=class{constructor(e,t,r,i,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let s=this.strings,n=!1;if(s===void 0)e=Z(this,e,t,0),n=!te(e)||e!==this._$AH&&e!==L,n&&(this._$AH=e);else{let c=e,a,d;for(e=s[0],a=0;a<s.length-1;a++)d=Z(this,c[r+a],t,a),d===L&&(d=this._$AH[a]),n||(n=!te(d)||d!==this._$AH[a]),d===$?e=$:e!==$&&(e+=(d??"")+s[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},De=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}},cr=G?G.emptyScript:"",ze=class extends q{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,cr):this.element.removeAttribute(this.name)}},Ve=class extends q{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=Z(this,e,t,0))!==null&&r!==void 0?r:$)===L)return;let i=this._$AH,s=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==$&&(i===$||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Ye=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}};var At=me.litHtmlPolyfillSupport;At?.(oe,re),((Ie=me.litHtmlVersions)!==null&&Ie!==void 0?Ie:me.litHtmlVersions=[]).push("2.8.0");var Nt=(o,e,t)=>{var r,i;let s=(r=t?.renderBefore)!==null&&r!==void 0?r:e,n=s._$litPart$;if(n===void 0){let c=(i=t?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new re(e.insertBefore(ee(),c),c,void 0,t??{})}return n._$AI(o),n};var We,Ge;var R=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return L}};R.finalized=!0,R._$litElement$=!0,(We=globalThis.litElementHydrateSupport)===null||We===void 0||We.call(globalThis,{LitElement:R});var Rt=globalThis.litElementPolyfillSupport;Rt?.({LitElement:R});((Ge=globalThis.litElementVersions)!==null&&Ge!==void 0?Ge:globalThis.litElementVersions=[]).push("3.3.3");var dr=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},hr=(o,e,t)=>{e.constructor.createProperty(t,o)};function E(o){return(e,t)=>t!==void 0?hr(o,e,t):dr(o,e)}var Ze,pa=((Ze=window.HTMLSlotElement)===null||Ze===void 0?void 0:Ze.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var H=({title:o,children:e})=>b`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${o}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,Ot=A`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`;var Bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=o=>(...e)=>({_$litDirective$:o,values:e}),ge=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Ht="important",pr=" !"+Ht,Y=Lt(class extends ge{constructor(o){var e;if(super(o),o.type!==Bt.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ht===void 0){this.ht=new Set;for(let r in e)this.ht.add(r);return this.render(e)}this.ht.forEach(r=>{e[r]==null&&(this.ht.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let i=e[r];if(i!=null){this.ht.add(r);let s=typeof i=="string"&&i.endsWith(pr);r.includes("-")||s?t.setProperty(r,s?i.slice(0,-11):i,s?Ht:""):t[r]=i}}return L}});function It(o){return{top:o.y,right:o.x+o.width,bottom:o.y+o.height,left:o.x}}function Ut(o,e){let t=It(o),r=It(e),i=!(t.top>r.bottom||t.bottom<r.top),s=!(t.left>r.right||t.right<r.left);if(s&&i){let l={x:(Math.max(t.left,r.left)+Math.min(t.right,r.right))/2,y:(Math.max(t.top,r.top)+Math.min(t.bottom,r.bottom))/2};return[{points:[{x:t.left,y:l.y},{x:r.left,y:l.y}]},{points:[{x:t.right,y:l.y},{x:r.right,y:l.y}]},{points:[{y:t.top,x:l.x},{y:r.top,x:l.x}]},{points:[{y:t.bottom,x:l.x},{y:r.bottom,x:l.x}]}]}let n=t.left>r.right,c=t.top>r.bottom,a={x:o.x+o.width/2,y:o.y+o.height/2};return[s?null:{points:[{x:n?t.left:t.right,y:a.y},{x:n?r.right:r.left,y:a.y}],bisector:i?void 0:[{x:n?r.right:r.left,y:a.y},{x:n?r.right:r.left,y:c?r.bottom:r.top}]},i?null:{points:[{y:c?t.top:t.bottom,x:a.x},{y:c?r.bottom:r.top,x:a.x}],bisector:s?void 0:[{y:c?r.bottom:r.top,x:a.x},{y:c?r.bottom:r.top,x:n?r.right:r.left}]}].filter(l=>!!l)}function se(o){return Math.round(o*100)/100}function ve(o,e){return[...Ft(o),...Ft(e)]}function Ft(o){return o?o instanceof Array?o:[o]:[]}var ur=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},jt=o=>{class e extends o{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return ur([E({attribute:!1})],e.prototype,"selectedNode",void 0),e};function ye(o){return o.touches.length===0||o.touches.length>2}function fr(o,e){return Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2))}var Dt=o=>class extends o{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{ye(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{ye(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{ye(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(ye(r))return;let i=Array.from(this.previousTouches||[]),s=Array.from(r.touches);if(this.previousTouches=r.touches,!(s.length!==i.length||!s.every(n=>i.some(c=>c.identifier===n.identifier)))){if(s.length===1){this.onTouchPan({x:s[0].pageX-i[0].pageX,y:s[0].pageY-i[0].pageY});return}this.onTouchPinch(fr({x:s[0].pageX,y:s[0].pageY},{x:i[0].pageX,y:i[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}};var ne=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},O=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},zt=function(o,e,t,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!i:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,t):i?i.value=t:e.set(o,t),t},Vt=o=>{var e,t,r,i,s;class n extends Dt(o){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(l,h)=>{this.panX+=l/this.scale/window.devicePixelRatio,this.panY+=h/this.scale/window.devicePixelRatio}),r.set(this,l=>{l.code==="Space"&&!O(this,e,"f")&&(zt(this,e,!0,"f"),document.body.style.cursor="grab")}),i.set(this,l=>{l.code==="Space"&&O(this,e,"f")&&(zt(this,e,!1,"f"),document.body.style.cursor="auto")}),s.set(this,()=>{document.addEventListener("keyup",O(this,i,"f")),document.addEventListener("keydown",O(this,r,"f"))}),this.addEventListener("wheel",l=>{if(this.isMovable)if(l.preventDefault(),l.ctrlKey){let{deltaY:h}=l;l.deltaMode===1&&(h*=15);let u=this.scale;this.scale*=1-h/((1e3-this.zoomSpeed)*.5);let f=l.offsetX-this.offsetWidth/2,m=l.offsetY-this.offsetHeight/2;this.panX+=f/this.scale-f/u,this.panY+=m/this.scale-m/u}else{let h=this.panSpeed*.002;this.panX-=l.deltaX*h/this.scale,this.panY-=l.deltaY*h/this.scale}},{passive:!1});let d=1;this.addEventListener("gesturestart",l=>{l.preventDefault(),d=this.scale}),this.addEventListener("gesturechange",l=>{let h=l;h.preventDefault(),this.scale=d*h.scale}),this.addEventListener("pointermove",l=>{l.buttons&4&&(l.preventDefault(),O(this,t,"f").call(this,l.movementX,l.movementY))}),O(this,s,"f").call(this),this.onmousedown=()=>{O(this,e,"f")&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:l,movementY:h})=>{O(this,t,"f").call(this,l,h)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",O(this,i,"f")),document.removeEventListener("keydown",O(this,r,"f")),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,s=new WeakMap,ne([E({attribute:!1})],n.prototype,"panX",void 0),ne([E({attribute:!1})],n.prototype,"panY",void 0),ne([E({attribute:!1})],n.prototype,"scale",void 0),ne([E({type:Number,attribute:"zoom-speed"})],n.prototype,"zoomSpeed",void 0),ne([E({type:Number,attribute:"pan-speed"})],n.prototype,"panSpeed",void 0),n};var mr=({guide:o,reverseScale:e})=>{let t=Math.abs(o.points[0].x-o.points[1].x),r=Math.abs(o.points[0].y-o.points[1].y);return t===0&&r===0?null:C`
    <line
      class="distance-line"
      x1=${o.points[0].x}
      y1=${o.points[0].y}
      x2=${o.points[1].x}
      y2=${o.points[1].y}
    />

    ${o.bisector&&C`
        <line
          class="distance-line"
          x1=${o.bisector[0].x}
          y1=${o.bisector[0].y}
          x2=${o.bisector[1].x}
          y2=${o.bisector[1].y}
          style=${Y({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},gr=({guide:o,reverseScale:e,fontSize:t})=>{let r=Math.abs(o.points[0].x-o.points[1].x),i=Math.abs(o.points[0].y-o.points[1].y);if(r===0&&i===0)return null;let s=se(Math.max(r,i)).toString(10),n=s.length*t*.5,c=t*.25,a=t*.25,d=t*.5,l=r>i?(o.points[0].x+o.points[1].x)/2-n/2:o.points[0].x,h=r>i?o.points[0].y:(o.points[0].y+o.points[1].y)/2-t/2,u=[`scale(${e})`,r>i?`translate(0, ${c+a})`:`translate(${c+d}, 0)`].join(" "),f=l+n/2,m=h+t/2,x=r>i?`${f} ${h}`:`${l} ${m}`;return C`
    <g class="distance-tooltip">
      <rect
        x=${l-d}
        y=${h-a}
        rx="2"
        width=${n+d*2}
        height=${t+a*2}
        transform=${u}
        transform-origin=${x}
        stroke="none"
      />

      <text
        x=${f}
        y=${h+t-a/2}
        text-anchor="middle"
        transform=${u}
        transform-origin=${x}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${s}
      </text>
    </g>
  `},Yt=new Map,Wt=({node:o,distanceTo:e,reverseScale:t,fontSize:r})=>{let i=o.id+`
`+e.id,s=Yt.get(i);return s||(s=Ut(o.absoluteBoundingBox,e.absoluteBoundingBox),Yt.set(i,s)),[...s.map(n=>mr({guide:n,reverseScale:t})),...s.map(n=>gr({guide:n,reverseScale:t,fontSize:r}))]},Gt=A`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`;var Zt=({onClick:o=()=>{}})=>C`
  <svg @click=${o} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Xe=({onClick:o=()=>{}})=>C`
  <svg @click=${o} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,qt=()=>C`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Xt=()=>C`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Kt=()=>C`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`;var X=o=>o.a===0?"transparent":o.a<1?`rgba(${Jt(o).join(", ")}, ${o.a.toFixed(2)})`:br(o),yr=o=>new Ke(o).cssColor,Ke=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>X(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},be=class{constructor(e){var t,r,i;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(n=>n===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let n=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=X(n)}let s=(i=e.fills)===null||i===void 0?void 0:i[0];if(s&&s.visible!==!1&&(e.type==="TEXT"?this.color=X(s.color):s.type.includes("GRADIENT")?this.backgroundImage=yr(s):s.type==="SOLID"&&(this.background=X(s.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=X(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:n,radius:c,color:a}=e.effects[0];this.boxShadowColor=X(a),this.boxShadow=`${n?.x||0}px ${n?.y||0}px 0 ${c} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(Je).join(`
`)}},Jt=o=>[Math.trunc(255*o.r),Math.trunc(255*o.g),Math.trunc(255*o.b)],br=o=>{let[e,t,r]=Jt(o);return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)},Je=({property:o,value:e})=>`${o}: ${e};`;var xr=function(o,e,t,r){function i(s){return s instanceof t?s:new t(function(n){n(s)})}return new(t||(t=Promise))(function(s,n){function c(l){try{d(r.next(l))}catch(h){n(h)}}function a(l){try{d(r.throw(l))}catch(h){n(h)}}function d(l){l.done?s(l.value):i(l.value).then(c,a)}d((r=r.apply(o,e||[])).next())})},Qe=o=>xr(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(o)}),Qt=({node:o,onClose:e})=>{if(!o)return null;let t=new be(o),r=i=>i.stopPropagation();return b`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${o.name}</h4>
          ${Zt({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?b`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?b`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&b`<p class="inspector-property">
              ${qt()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&b`<p class="inspector-property">
              ${Xt()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${o.characters?b`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${Xe({onClick:()=>Qe(o.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${o.characters}
            </p>
          </div>`:null}
      ${wr(t)}
    </div>
  `},wr=o=>{let e=()=>Qe(o.getStyleSheet()),t=o.getStyles();return b`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${Xe({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(_r)}
    </div>
  </div>`},_r=o=>{let{property:e,value:t,color:r}=o,i=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":i=b`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":i=b`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return b`<div class="css-property" @click=${()=>Qe(Je(o))}>
    <span>${e}:</span>${i}<span class="css-value">${t}</span>;</span>
  </div>`},eo=A`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`;var et=({node:o,selected:e=!1,computedThickness:t,onClick:r})=>{let{x:i,y:s,width:n,height:c}=o.absoluteBoundingBox,a="cornerRadius"in o&&o.cornerRadius?{topLeft:o.cornerRadius,topRight:o.cornerRadius,bottomRight:o.cornerRadius,bottomLeft:o.cornerRadius}:"rectangleCornerRadii"in o&&o.rectangleCornerRadii?{topLeft:o.rectangleCornerRadii[0],topRight:o.rectangleCornerRadii[1],bottomRight:o.rectangleCornerRadii[2],bottomLeft:o.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},d=t/2,l=(m,x)=>`M${m},${x}`,h=(m,x)=>`L${m},${x}`,u=(m,x,S)=>`A${m},${m} 0 0 1 ${x},${S}`,f=[l(a.topLeft+d,d),h(n-a.topRight,d),u(a.topRight-d,n-d,a.topRight),h(n-d,c-a.bottomRight),u(a.bottomRight-d,n-a.bottomRight,c-d),h(a.bottomLeft,c-d),u(a.bottomLeft-d,d,c-a.bottomLeft),h(d,a.topLeft),u(a.topLeft-d,a.topLeft,d),"Z"].join(" ");return C`
    <path
      class="guide"
      d=${f}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${i}, ${s})"
      ?data-selected=${e}
      @click=${r}
    />
  `},to=({nodeSize:{x:o,y:e,width:t,height:r},offsetX:i,offsetY:s,reverseScale:n})=>{let c={top:`${s+e+r}px`,left:`${i+o+t/2}px`,transform:`translateX(-50%) scale(${n}) translateY(0.25em)`};return b`
    <div class="tooltip" style="${Y(c)}">
      ${se(t)} x ${se(r)}
    </div>
  `},oo=A`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`;var Sr=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],ro=o=>(typeof o=="object"?o:new Date(o)).getTime(),io=(o,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let i=ro(e)-ro(o),s=Math.abs(i);for(let n of Sr)if(s>=n.gte){let c=Math.round(Math.abs(i)/n.divisor),a=i<0,d=n.unit;return d?t.format(a?c:-c,d):n.text}};var so=A`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,no=o=>{if(!o||!o.link||o.link===void 0||o.link==="undefined")return null;let{link:e,timestamp:t,fileName:r}=o;return b`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${Kt()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${io(t)}
    </span>
  </a>`};var ao=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},M=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},tt=function(o,e,t,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!i:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,t):i?i.value=t:e.set(o,t),t},we=o=>{var e,t,r,i,s;class n extends jt(Vt(o)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),r.set(this,void 0),i.set(this,d=>l=>{l.preventDefault(),l.stopPropagation(),this.selectedNode=d}),s.set(this,d=>{var l,h;return(h=(l=M(this,r,"f"))===null||l===void 0?void 0:l.find(u=>u.id===d))!==null&&h!==void 0?h:null})}static get styles(){let a=super.styles;return ve(a,[A`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,oo,Ot,Gt,eo,so])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!M(this,e,"f")||!M(this,r,"f")?H({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?H({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?H({title:"Error",children:this.error}):this.error;let a=M(this,e,"f"),d=1/this.scale,l=`calc(var(--guide-thickness) * ${d})`,h=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),u=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return b`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([f,m])=>{var x;let S=M(this,s,"f").call(this,f);if(!S||!("absoluteBoundingBox"in S)||!(!((x=M(this,t,"f"))===null||x===void 0)&&x[S.id]))return null;let w=M(this,t,"f")[S.id];return b`
                <img
                  class="rendered-image"
                  src="${m}"
                  style=${Y({top:`${S.absoluteBoundingBox.y-a.y}px`,left:`${S.absoluteBoundingBox.x-a.x}px`,marginTop:`${-w.top}px`,marginLeft:`${-w.left}px`,width:S.absoluteBoundingBox.width+w.left+w.right+"px",height:S.absoluteBoundingBox.height+w.top+w.bottom+"px"})}
                />
              `})}
            ${this.selectedNode&&to({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:d})}
            ${C`
            <svg
              class="guides"
              viewBox="0 0 ${a.width} ${a.height}"
              width=${a.width}
              height=${a.height}
              style=${Y({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:l})}
            >
              ${this.selectedNode&&et({node:this.selectedNode,selected:!0,computedThickness:h*d})}

              ${M(this,r,"f").map(f=>{var m;return f.id===((m=this.selectedNode)===null||m===void 0?void 0:m.id)?null:C`
                  <g>
                    ${et({node:f,computedThickness:h*d,onClick:M(this,i,"f").call(this,f)})}
                    ${this.selectedNode&&Wt({node:f,distanceTo:this.selectedNode,reverseScale:d,fontSize:u})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${Qt({node:this.selectedNode,onClose:this.deselectNode})}
          ${no(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");tt(this,e,a.type==="CANVAS"?Cr(a):a.absoluteBoundingBox,"f"),tt(this,r,xe(a),"f"),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(M(this,s,"f")).filter(d=>!!d);tt(this,t,a.reduce((d,l)=>"absoluteBoundingBox"in l?Object.assign(Object.assign({},d),{[l.id]:Mr(l,xe(l))}):d,{}),"f"),this.requestUpdate()}resetZoom(){if(M(this,e,"f")){let{width:a,height:d}=M(this,e,"f"),{width:l,height:h}=this.getBoundingClientRect(),u=l/(a+this.zoomMargin*2),f=h/(d+this.zoomMargin*2);this.scale=Math.min(u,f,1)}}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,s=new WeakMap,ao([E({type:Number,attribute:"zoom-margin"})],n.prototype,"zoomMargin",void 0),ao([E({type:String,attribute:"link"})],n.prototype,"link",void 0),n};function Cr(o){let e=[],t=[],r=[],i=[];for(let c of o.children){if(c.type!=="FRAME"&&c.type!=="COMPONENT")continue;let{x:a,y:d,width:l,height:h}=c.absoluteBoundingBox;e.push(a),t.push(a+l),r.push(d),i.push(d+h)}let s=Math.min(...e),n=Math.min(...r);return{x:s,y:n,width:Math.abs(Math.max(...t)-s),height:Math.abs(Math.min(...i)-n)}}function Mr(o,e){let t=e.map(i=>{if(!("effects"in i))return{top:i.absoluteBoundingBox.y,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height,left:i.absoluteBoundingBox.x};let s=i.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),n=i.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),c={top:Math.max(0,...s,...n.map(a=>a.top)),right:Math.max(0,...s,...n.map(a=>a.right)),bottom:Math.max(0,...s,...n.map(a=>a.bottom)),left:Math.max(0,...s,...n.map(a=>a.left))};return{top:i.absoluteBoundingBox.y-c.top,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width+c.right,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height+c.bottom,left:i.absoluteBoundingBox.x-c.left}}),r={top:Math.min(...t.map(i=>i.top)),right:Math.max(...t.map(i=>i.right)),bottom:Math.max(...t.map(i=>i.bottom)),left:Math.min(...t.map(i=>i.left))};return{top:o.absoluteBoundingBox.y-r.top,right:r.right-o.absoluteBoundingBox.x-o.absoluteBoundingBox.width,bottom:r.bottom-o.absoluteBoundingBox.y-o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x-r.left}}function xe(o,e=0){return"absoluteBoundingBox"in o?!("children"in o)||o.children.length===0?[Object.assign(Object.assign({},o),{depth:e})]:[Object.assign(Object.assign({},o),{depth:e}),...o.children.map(t=>xe(t,e+1)).flat()]:o.children.map(t=>xe(t,e+1)).flat()}var lo=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},U=class extends we(R){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return H({title:"Parameter error",children:b`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return H({title:"Parameter Error",children:b`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};lo([E({type:Object})],U.prototype,"nodes",void 0);lo([E({type:String,attribute:"rendered-image"})],U.prototype,"renderedImage",void 0);var co=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},ot=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},_e,rt,j=class extends we(R){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,_e.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),rt.set(this,e=>{var t,r;let i=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(s=>s.id===i.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return H({title:"Parameter error",children:b`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return ve(super.styles,[A`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return b`
      <div class="controls">
        <select @change=${ot(this,rt,"f")}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>b`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(ot(this,_e,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(ot(this,_e,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};_e=new WeakMap,rt=new WeakMap;co([E({type:Object,attribute:"document-node"})],j.prototype,"documentNode",void 0);co([E({type:Object,attribute:"rendered-images"})],j.prototype,"renderedImages",void 0);customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",j);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",U);var Tr=new Set(["children","localName","ref","style","className"]),ho=new WeakMap,kr=(o,e,t,r,i)=>{let s=i?.[e];s===void 0||t===r?t==null&&e in HTMLElement.prototype?o.removeAttribute(e):o[e]=t:((n,c,a)=>{let d=ho.get(n);d===void 0&&ho.set(n,d=new Map);let l=d.get(c);a!==void 0?l===void 0?(d.set(c,l={handleEvent:a}),n.addEventListener(c,l)):l.handleEvent=a:l!==void 0&&(d.delete(c),n.removeEventListener(c,l))})(o,s,t)},Pr=(o,e)=>{typeof o=="function"?o(e):o.current=e};function $e(o=window.React,e,t,r,i){let s,n,c;if(e===void 0){let f=o;({tagName:n,elementClass:c,events:r,displayName:i}=f),s=f.react}else s=o,c=t,n=e;let a=s.Component,d=s.createElement,l=new Set(Object.keys(r??{}));class h extends a{constructor(){super(...arguments),this.o=null}t(m){if(this.o!==null)for(let x in this.i)kr(this.o,x,this.props[x],m?m[x]:void 0,r)}componentDidMount(){var m;this.t(),(m=this.o)===null||m===void 0||m.removeAttribute("defer-hydration")}componentDidUpdate(m){this.t(m)}render(){let{_$Gl:m,...x}=this.props;this.h!==m&&(this.u=w=>{m!==null&&Pr(m,w),this.o=w,this.h=m}),this.i={};let S={ref:this.u};for(let[w,Me]of Object.entries(x))Tr.has(w)?S[w==="className"?"class":w]=Me:l.has(w)||w in c.prototype?this.i[w]=Me:S[w]=Me;return S.suppressHydrationWarning=!0,d(n,S)}}h.displayName=i??c.name;let u=s.forwardRef((f,m)=>d(h,{...f,_$Gl:m},f?.children));return u.displayName=h.displayName,u}var po=$e(le,"figspec-frame-viewer",U,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),uo=$e(le,"figspec-file-viewer",j,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"});var Jc=__STORYBOOK_API__,{ActiveTabs:Qc,Consumer:ed,ManagerContext:td,Provider:od,RequestResponseError:rd,addons:Ee,combineParameters:id,controlOrMetaKey:sd,controlOrMetaSymbol:nd,eventMatchesShortcut:ad,eventToShortcut:ld,experimental_requestResponse:cd,isMacLike:dd,isShortcutTaken:hd,keyToSymbol:pd,merge:ud,mockChannel:fd,optionOrAltSymbol:md,shortcutMatchesShortcut:gd,shortcutToHumanString:vd,types:it,useAddonState:yd,useArgTypes:bd,useArgs:xd,useChannel:wd,useGlobalTypes:_d,useGlobals:$d,useParameter:st,useSharedState:Ed,useStoryPrepared:Sd,useStorybookApi:Ad,useStorybookState:fo}=__STORYBOOK_API__;var Nr=Object.defineProperty,ct=(o,e)=>()=>(o&&(e=o(o=0)),e),Rr=(o,e)=>{for(var t in e)Nr(o,t,{get:e[t],enumerable:!0})},Ce,mo,go,vo,dt=ct(()=>{Ce=({config:o,defer:e=!1})=>{let[t,r]=k(e?void 0:o.url),[i,s]=k(!1);return N(()=>{if(!e)return;let n=requestAnimationFrame(()=>{r(o.url)});return()=>cancelAnimationFrame(n)},[e,o.url]),N(()=>{s(!1)},[t]),p("div",{css:mo},!i&&p(I,{css:go},"Loading..."),p("iframe",{css:vo,src:t,allowFullScreen:o.allowFullscreen,onLoad:()=>s(!0)}))},mo=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,go=P`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,vo=P`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`}),at,yo,_o,$o=ct(()=>{dt(),at=/https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,yo=o=>at.test(o),_o=({config:o})=>{let e=W(()=>yo(o.url)?{url:`https://www.figma.com/embed?embed_host=${o.embedHost||location.hostname}&url=${o.url}`,allowFullscreen:o.allowFullscreen}:(console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),o),[o.url,o.allowFullscreen,o.embedHost]);return p(Ce,{defer:!0,config:e})}}),Eo={};Rr(Eo,{Figspec:()=>lt,default:()=>Ao});function Se(o){return o.status!==200?Promise.reject(o.statusText):o.json()}function Or(o){if(o.accessToken)return o.accessToken;try{return g.STORYBOOK_FIGMA_ACCESS_TOKEN??null}catch{return null}}function So(o){return"absoluteBoundingBox"in o?[o]:!o.children||o.children.length===0?[]:o.children.map(So).reduce((e,t)=>e.concat(t),[])}var nt,lt,Ao,Br=ct(()=>{$o(),nt=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,lt=({config:o})=>{let[e,t]=k({state:"loading"}),r=async i=>{t({state:"loading"});try{let s=o.url.match(at);if(!s)throw new Error(o.url+" is not a valid Figma URL.");let[,,n]=s,c=new URL(o.url).searchParams.get("node-id"),a=Or(o);if(!a)throw new Error("Personal Access Token is required.");let d={"X-FIGMA-TOKEN":a},l=new URL(`https://api.figma.com/v1/files/${n}`),h=new URL(`https://api.figma.com/v1/images/${n}`);if(h.searchParams.set("format","svg"),!c){let m=await fetch(l.href,{headers:d,signal:i}).then(w=>Se(w)),x=So(m.document);h.searchParams.set("ids",x.map(w=>w.id).join(","));let S=await fetch(h.href,{headers:d,signal:i}).then(w=>Se(w));t({state:"fetched",value:{type:"file",props:{documentNode:m,renderedImages:S.images,link:o.url}}});return}l.pathname+="/nodes",l.searchParams.set("ids",c),h.searchParams.set("ids",c);let[u,f]=await Promise.all([fetch(l.href,{headers:d,signal:i}).then(m=>Se(m)),fetch(h.href,{headers:d,signal:i}).then(m=>Se(m))]);t({state:"fetched",value:{type:"frame",props:{nodes:u,renderedImage:Object.values(f.images)[0],link:o.url}}})}catch(s){if(s instanceof DOMException&&s.code===DOMException.ABORT_ERR)return;console.error(s),t({state:"failed",error:s instanceof Error?s.message:String(s)})}};switch(N(()=>{let i=!1,s=()=>{i=!0},n=new AbortController;return r(n.signal).then(s,s),()=>{i||n.abort()}},[o.url]),e.state){case"loading":return p(I,null,p(_,null,"Loading Figma file..."));case"failed":return p(I,null,p(_,null,"Failed to load Figma file"),p(_,null,e.error));case"fetched":return e.value.type==="file"?p(uo,{css:nt,...e.value.props}):p(po,{css:nt,...e.value.props})}},Ao=lt}),Co="STORYBOOK_ADDON_DESIGNS",bo=Co+"/panel",Ae="design",xo=class extends Te{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,e){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(o),console.log("--- React Component Stack ---"),console.error(e.componentStack),console.groupEnd()}render(){return this.state.hasError?p(I,null,p(_,null,"Failed to render addon UI"),p(_,null,p("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),p("pre",null,String(this.state.error)),p("p",null,"See console log for more details. To clear the error state, please reload the page."," ",p(K,{href:"https://github.com/storybookjs/addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children}};$o();dt();var Lr=(o,e)=>{let[t,r]=k([0,0]),[i,s]=k(!1),n=T(u=>{u.button===0&&(r([u.screenX,u.screenY]),s(!0))},[s,r]),c=T(u=>{let f=u.touches[0];r([f.screenX,f.screenY]),s(!0)},[s,r]),a=T(u=>{i&&r(f=>(o([u[0]-f[0],u[1]-f[1]]),u))},[r,i,...e]),d=T(u=>{let{screenX:f,screenY:m}=u;a([f,m])},[a]),l=T(u=>{let{screenX:f,screenY:m}=u.touches[0];a([f,m])},[r,i,...e]),h=T(()=>{r([0,0]),s(!1)},[s,r]);return{onMouseDown:n,onMouseMove:d,onMouseUp:h,onMouseLeave:h,onTouchStart:c,onTouchMove:l,onTouchCancel:h,onTouchEnd:h}},Hr=({children:o,className:e,style:t,defaultValue:r,value:i,onChange:s})=>{let[n,c]=k([0,0]);N(()=>{c(r||i||[0,0])},[r]);let a=Lr(l=>{s&&s(l),c(h=>[h[0]+l[0],h[1]+l[1]])},[c,s]),d=W(()=>{let l=i||n;return{transform:`translate(${l[0]}px, ${l[1]}px)`}},[i,n]);return p("div",{css:Ir,className:e,style:t,...a},p("div",{css:Fr,style:d},o))},Ir=P`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`,Fr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,Ur=({onZoomIn:o,onZoomOut:e,onReset:t})=>p(_,null,p(ce,{onClick:o},p(de,{icon:"zoom"})),p(ce,{onClick:e},p(de,{icon:"zoomout"})),p(ce,{onClick:t},p(de,{icon:"zoomreset"}))),jr=(o,e)=>{let[t,r]=k(1);N(()=>{r(o)},e);let i=T(()=>{r(c=>c+.1)},[r]),s=T(()=>{r(c=>Math.max(c-.1,.1))},[r]),n=T(()=>{r(1)},[r]);return{scale:t,zoomIn:i,zoomOut:s,resetZoom:n}},Dr=({config:o})=>{let e=jr(o.scale||1,[o.scale]),t=W(()=>({transform:`scale(${e.scale})`}),[e.scale]);return p("div",{css:zr},p(pt,{border:!0},p(_,{key:"left"},p("p",null,p("b",null,"Image")),p(ut,null),p(Ur,{onReset:e.resetZoom,onZoomIn:e.zoomIn,onZoomOut:e.zoomOut}))),p(Hr,{css:Vr,defaultValue:o.offset},p("img",{css:Yr,src:o.url,style:t})))},zr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,Vr=P`
  flex-grow: 1;
`,Yr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`,Wr=({config:o})=>p("div",{css:Gr},p(K,{cancel:!1,href:o.url,target:o.target??"_blank",rel:o.rel??"noopener",withArrow:o.showArrow??!0},o.label||o.url)),Gr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;dt();var Zr=o=>{if(o.protocol!=="https:")return{valid:!1,error:p(_,null,"Expected HTTPS link, received ",p("code",null,o.protocol),".")};if(o.hostname!=="www.sketch.com")return{valid:!1,error:p(_,null,"Expected a hostname ",p("code",null,"www.sketch.com"),", received"," ",p("code",null,o.hostname))};let e=p(_,null,"Expected pathname ",p("code",null,"/s/<string>/a/<string>"),", received"," ",p("code",null,o.pathname),"."),t=o.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:o.href,offscreen:!1}};let[r,i,s,n]=t;return r!=="s"||!i||s!=="a"||!n?{valid:!1,error:e}:{valid:!0,data:{url:`https://www.sketch.com/embed/s/${i}/a/${n}`,offscreen:!1}}},qr=({config:o})=>{let e=W(()=>{let t=Zr(new URL(o.url));return t.valid?{...t,data:{...o,...t.data}}:t},[o]);return e.valid?p(Ce,{defer:!0,config:e.data}):p(I,null,p(_,null,"Invalid Sketch URL"),p(_,null,e.error))},Xr=({tabs:o,deps:e=[]})=>{let[t,r]=k(o[0].id);return N(()=>{r(o[0].id)},e),p(ft,{absolute:!0,selected:t,actions:{onSelect:r}},o.map(i=>p("div",{key:i.id,id:i.id,title:i.name},i.offscreen||t===i.id?i.content:null)))},Kr=Pe(()=>Promise.resolve().then(()=>(Br(),Eo))),Jr=({config:o})=>{if(!o||"length"in o&&o.length===0)return p(I,null,p(_,null,"No designs found"),p(_,null,"Learn how to"," ",p(K,{href:"https://github.com/storybookjs/addon-designs#3-add-it-to-story",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));let e=[...o instanceof Array?o:[o]].map(t=>{let r={id:JSON.stringify(t),name:t.name||t.type?.toUpperCase()||"ERROR",offscreen:t.offscreen??!0};switch(t.type){case"iframe":return{...r,content:p(Ce,{config:t})};case"figma":return{...r,content:p(_o,{config:t}),offscreen:!1};case"sketch":return{...r,content:p(qr,{config:t})};case"figspec":case"experimental-figspec":return t.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),{...r,content:p(ke,{fallback:"Preparing Figspec viewer..."},p(Kr,{config:t})),offscreen:!1};case"image":return{...r,content:p(Dr,{config:t})};case"link":return{...r,content:p(Wr,{config:t})}}return{...r,content:p(I,null,p(_,null,"Invalid config type"),p(_,null,"Config type you set is not supported. Please choose one from"," ",p(K,{href:"https://github.com/storybookjs/addon-designs/blob/master/packages/storybook-addon-designs/src/config.ts",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))}});return e.length===1?p("div",null,e[0].content):p(Xr,{tabs:e,deps:[o]})},wo=({active:o})=>{let e=fo(),t=st(Ae),[r,i]=k(o);return N(()=>{i(o)},[t]),N(()=>{o&&i(!0)},[o]),r?p(Jr,{key:e.storyId,config:t}):null},ae="Design";function Qr(o){Ee.register(Co,e=>{let t=function(){let r=st(Ae);return r?Array.isArray(r)?r.length>0?`${ae} (${r.length})`:ae:(r.name||ae)+" (1)":ae};o==="tab"?Ee.add(bo,{title:ae,render({active:r}){return r?p(xo,null,p(wo,{active:!0})):p("noscript",null)},type:it.TAB,paramKey:Ae}):Ee.add(bo,{type:it.PANEL,title:t,paramKey:Ae,render({active:r}){return p(ht,{active:!!r},p(xo,null,p(wo,{active:!!r})))}})})}Qr("panel");})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
