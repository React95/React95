import{R as f}from"./index-9fa1aa67.js";import{_ as E}from"./iframe-1821ddf2.js";import"../sb-preview/runtime.js";const M=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const P=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const I=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const C=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const L=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const z=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const D=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const F=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const W=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const N=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const R=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const H=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const Q=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const B=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const q=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const G=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const U=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const V=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const X=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const Y=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const J=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const Z=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const K=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const $=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const tt=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const et=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const ot=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const nt=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const it=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const rt=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const st=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const at=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const lt=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const ct=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const _t=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const ut=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),pt=Object.freeze(Object.defineProperty({__proto__:null,azureOrange:P,bee:I,blackAndWhite:C,brick:L,candy:z,coldGray:D,counterStrike:F,eggplant:W,highContrast:N,lilac:R,lilacRoseDark:H,maple:Q,marine:B,matrix:q,millenium:G,modernDark:U,molecule:V,ninjaTurtles:X,olive:Y,pamelaAnderson:J,plum:Z,rainyDay:K,rose:$,slate:tt,spruce:et,storm:ot,theSixtiesUSA:nt,tokyoDark:it,tooSexy:rt,travel:st,vaporTeal:at,vermillion:lt,violetDark:ct,water:_t,win95:ut},Symbol.toStringTag,{value:"Module"}));console.log({GlobalStyle:M});global.themes=Object.keys(pt);const j=(t,{globals:e})=>{const{selectedTheme:o}=e;return f.useEffect(()=>{{const n=`r95_theme_${o}`;return document.body.classList.add(n),()=>{document.body.classList.remove(n)}}},[o]),f.createElement("div",{style:{padding:10}},f.createElement(t,null))},ht=j;j.__docgenInfo={description:"",methods:[],displayName:"Frame"};var g=function(t){this._queue=[],this._onEmptyCallback=t};g.prototype.queue=function(t){this._queue.push(t),this._queue.length!==1||this._active||this._progressQueue()},g.prototype._progressQueue=function(){if(this._queue.length){var t=this._queue.shift();this._active=!0;var e=this.next.bind(this);t&&t(e)}else this._onEmptyCallback()},g.prototype.clear=function(){this._queue=[]},g.prototype.next=function(){this._active=!1,this._progressQueue()};var _=function(t,e,o){this._el=t,this._data=e.config,this._path=e.image,this._currentFrameIndex=0,this._currentFrame=void 0,this._exiting=!1,this._currentAnimation=void 0,this._endCallback=void 0,this._started=!1,this._sounds={},this.currentAnimationName=void 0,this.preloadSounds(o),this._overlays=[this._el];var n=this._el;this._setupElement(this._el);for(var i=1;i<this._data.overlayCount;i++){var a=document.createElement("div"),r=this._setupElement(a);n.append(r),this._overlays.push(r),n=r}};_.prototype._setupElement=function(t){var e=this._data.framesize;return t.style.display="none",t.style.width=e[0]+"px",t.style.height=e[1]+"px",t.style.background="url('"+this._path+"') no-repeat",t},_.prototype.animations=function(){var t=[],e=this._data.animations;for(var o in e)t.push(o);return t},_.prototype.preloadSounds=function(t){},_.prototype.hasAnimation=function(t){return!!this._data.animations[t]},_.prototype.exitAnimation=function(){this._exiting=!0},_.prototype.showAnimation=function(t,e){return this._exiting=!1,!!this.hasAnimation(t)&&(this._currentAnimation=this._data.animations[t],this.currentAnimationName=t,this._started||(this._step(),this._started=!0),this._currentFrameIndex=0,this._currentFrame=void 0,this._endCallback=e,!0)},_.prototype._draw=function(){var t=[];this._currentFrame&&(t=this._currentFrame.images||[]);for(var e=0;e<this._overlays.length;e++)if(e<t.length){var o=t[e],n=-o[0]+"px "+-o[1]+"px";this._overlays[e].style.backgroundPosition=n,this._overlays[e].style.display="block"}else this._overlays[e].style.display="none"},_.prototype._getNextAnimationFrame=function(){if(!this._currentAnimation||!this._currentFrame)return 0;var t=this._currentFrame,e=this._currentFrame.branching;if(this._exiting&&t.exitBranch!==void 0)return t.exitBranch;if(e)for(var o=100*Math.random(),n=0;n<e.branches.length;n++){var i=e.branches[n];if(o<=i.weight)return i.frameIndex;o-=i.weight}return this._currentFrameIndex+1},_.prototype._playSound=function(){var t,e=(t=this._currentFrame)===null||t===void 0?void 0:t.sound;if(e){var o=this._sounds[e];o&&o.play()}},_.prototype._atLastFrame=function(){return!!this._currentAnimation&&this._currentFrameIndex>=this._currentAnimation.frames.length-1},_.prototype._step=function(){if(this._currentAnimation){var t=Math.min(this._getNextAnimationFrame(),this._currentAnimation.frames.length-1),e=!this._currentFrame||this._currentFrameIndex!==t;this._currentFrameIndex=t,this._atLastFrame()&&this._currentAnimation.useExitBranching||(this._currentFrame=this._currentAnimation.frames[this._currentFrameIndex]),this._draw(),this._playSound(),this._loop=window.setTimeout(this._step.bind(this),this._currentFrame.duration),this._endCallback&&e&&this._atLastFrame()&&(this._currentAnimation.useExitBranching&&!this._exiting?this._endCallback(this.currentAnimationName,_.States.WAITING):this._endCallback(this.currentAnimationName,_.States.EXITED))}},_.prototype.pause=function(){window.clearTimeout(this._loop)},_.prototype.resume=function(){this._step()},_.States={WAITING:1,EXITED:0};var w=function(){var t=window.pageXOffset!==void 0,e=(document.compatMode||"")==="CSS1Compat";return{scrollLeft:t?window.pageXOffset:e?document.documentElement.scrollLeft:document.body.scrollLeft,scrollTop:t?window.pageYOffset:e?document.documentElement.scrollTop:document.body.scrollTop}};function v(t){if(!t.getClientRects().length)return{top:0,left:0};var e=t.getBoundingClientRect(),o=t.ownerDocument.defaultView||{pageXOffset:0,pageYOffset:0};return{top:e.top+o.pageYOffset,left:e.left+o.pageXOffset}}function b(t,e){if(e==="inner")return t.clientWidth;if(e==="outer")return t.offsetWidth;var o=window.getComputedStyle(t,null);return e==="width"?t.clientWidth-parseInt(o.getPropertyValue("padding-left"))-parseInt(o.getPropertyValue("padding-right")):e==="full"?t.offsetWidth+parseInt(o.getPropertyValue("margin-left"))+parseInt(o.getPropertyValue("margin-right")):null}function S(t,e){if(e==="inner")return t.clientHeight;if(e==="outer")return t.offsetHeight;var o=window.getComputedStyle(t,null);return e==="height"?t.clientHeight-parseInt(o.getPropertyValue("padding-top"))-parseInt(o.getPropertyValue("padding-bottom")):e==="full"?t.offsetHeight+parseInt(o.getPropertyValue("margin-top"))+parseInt(o.getPropertyValue("margin-bottom")):null}var dt=function(){var t=this;this.promise=new Promise(function(e,o){t.resolve=e,t.reject=o})},p=function(t){this._hiding=null,this._loop=null,this._active=!0,this._hold=!1,this._addWord=null,this._targetEl=t,this._hidden=!0,this._setup()};p.prototype._setup=function(){var t=document.createElement("div");t.className="clippy-balloon",t.setAttribute("hidden","true");var e=document.createElement("div");e.className="clippy-tip";var o=document.createElement("div");o.className="clippy-content",t.appendChild(e),t.appendChild(o),this._balloon=t,this._content=o,this._targetEl.insertAdjacentElement("afterend",t)},p.prototype.reposition=function(){for(var t=["top-left","top-right","bottom-left","bottom-right"],e=0;e<t.length;e++){var o=t[e];if(this._position(o),!this._isOut())break}},p.prototype._position=function(t){if(this._balloon){var e=v(this._targetEl),o=S(this._targetEl,"height"),n=b(this._targetEl,"width"),i=w(),a=i.scrollLeft,r=i.scrollTop;e.top-=a,e.left-=r;var u=S(this._balloon,"outer"),l=b(this._balloon,"outer");this._balloon.classList.remove("clippy-top-left"),this._balloon.classList.remove("clippy-top-right"),this._balloon.classList.remove("clippy-bottom-right"),this._balloon.classList.remove("clippy-bottom-left");var c=0,h=0;switch(t){case"top-left":c=e.left+n-l,h=e.top-u-15;break;case"top-right":c=e.left,h=e.top-u-15;break;case"bottom-right":c=e.left,h=e.top+o+15;break;case"bottom-left":c=e.left+n-l,h=e.top+o+15}this._balloon.style.top=h+"px",this._balloon.style.left=c+"px",this._balloon.classList.add("clippy-"+t)}},p.prototype._isOut=function(){if(this._balloon){var t=v(this._balloon),e=S(this._balloon,"outer"),o=b(this._balloon,"outer"),n=document.querySelector("html").clientWidth,i=document.querySelector("html").clientHeight,a=w(),r=a.scrollLeft,u=a.scrollTop,l=t.top-r,c=t.left-u;return l-5<0||c-5<0||l+e+5>i||c+o+5>n}},p.prototype.speak=function(t,e,o){this._hidden=!1,this.show();var n=this._content;n&&(n.style.height="auto",n.style.width="auto",n.innerHTML=e,n.style.height=n.style.height||"",n.style.width=n.style.width||"",n.innerHTML="",this.reposition(),this._complete=t,this._sayWords(e,o,t))},p.prototype.show=function(){this._balloon&&(this._hidden||this._balloon.removeAttribute("hidden"))},p.prototype.hide=function(t){var e;t?(e=this._balloon)===null||e===void 0||e.setAttribute("hidden","true"):this._hiding=window.setTimeout(this._finishHideBalloon.bind(this),2e3)},p.prototype._finishHideBalloon=function(){var t;this._active||((t=this._balloon)===null||t===void 0||t.setAttribute("hidden","true"),this._hidden=!0,this._hiding=null)},p.prototype._sayWords=function(t,e,o){var n=this;this._active=!0,this._hold=e;var i=t.split(/[^\S-]/),a=this._content,r=1;this._addWord=function(){var u;n._active&&(r>i.length?(n._addWord=null,n._active=!1,n._hold||(o(),n.hide(!1))):(a&&(a.innerHTML=i.slice(0,r).join(" ")),r++,n._loop=window.setTimeout((u=n._addWord)===null||u===void 0?void 0:u.bind(n),200)))},this._addWord()},p.prototype.close=function(){this._active?this._hold=!1:this._hold&&this._complete&&this._complete()},p.prototype.pause=function(){this._loop&&window.clearTimeout(this._loop),this._hiding&&(window.clearTimeout(this._hiding),this._hiding=null)},p.prototype.resume=function(){this._addWord?this._addWord():this._hold||this._hidden||(this._hiding=window.setTimeout(this._finishHideBalloon.bind(this),2e3))};var s=function(t){this._hidden=!1,this._offset={top:0,left:0};var e=t.agent,o=t.selector;this._queue=new g(this._onQueueEmpty.bind(this));var n=document.createElement("div");n.className="clippy",n.setAttribute("hidden","true"),this._el=n,((o?document.getElementsByClassName(o)[0]:void 0)||document.body).appendChild(this._el),this._animator=new _(this._el,e,[]),this._balloon=new p(this._el),this._setupEvents()};function d(t){return new Promise(function(e,o){E(()=>import("./agents/"+t+".js"),[],import.meta.url).then(function(n){e(n.default)}).catch(function(n){o(n)})})}s.prototype.gestureAt=function(t,e){var o=this._getDirection(t,e),n="Gesture"+o,i="Look"+o,a=this.hasAnimation(n)?n:i;return this.play(a)},s.prototype.hide=function(t,e){var o=this;return this._hidden=!0,this._el,this.stop(),t?(this._el.setAttribute("hidden","true"),this.stop(),this.pause(),void(e&&e())):this._playInternal("Hide",function(){o._el.setAttribute("hidden","true"),o.pause(),e&&e()})},s.prototype.moveTo=function(t,e,o){var n=this,i="Move"+this._getDirection(t,e);o===void 0&&(o=1e3),this._addToQueue(function(a){if(o===0)return n._el.style.top=e+"px",n._el.style.left=t+"px",n.reposition(),void a();if(!n.hasAnimation(i)){var r=function(){n._el.removeEventListener("animationend",r),a()};return n._el.addEventListener("animationend",r),void n._el.animate({top:e,left:t},{duration:o,iterations:1})}n._playInternal(i,function(u,l){if(l===_.States.EXITED&&a(),l===_.States.WAITING){var c=function(){n._el.removeEventListener("animationend",c),n._animator.exitAnimation()};n._el.addEventListener("animationend",c),n._el.animate({top:e,left:t},{duration:o,iterations:1})}})},this)},s.prototype._playInternal=function(t,e){var o=this;this._isIdleAnimation()&&this._idleDfd&&this._idleDfd.promise.finally(function(){o._playInternal(t,e)}),this._animator.showAnimation(t,e)},s.prototype.play=function(t,e,o){var n=this;return!!this.hasAnimation(t)&&(e===void 0&&(e=5e3),this._addToQueue(function(i){var a=!1;e&&window.setTimeout(function(){a||n._animator.exitAnimation()},e),n._playInternal(t,function(r,u){u===_.States.EXITED&&(a=!0,o&&o(),i())})},this),!0)},s.prototype.show=function(t){if(this._hidden=!1,t)return this._el.removeAttribute("hidden"),this.resume(),void this._onQueueEmpty();var e=this._el.style.top,o=this._el.style.left;if(e==="auto"||o!=="auto"){var n=.8*document.querySelector("html").clientWidth,i=.8*(document.querySelector("html").clientHeight+w().scrollLeft);this._el.style.top=i+"px",this._el.style.left=n+"px"}return this.resume(),this.play("Show")},s.prototype.speak=function(t,e){var o=this;this._addToQueue(function(n){o._balloon.speak(n,t,e)},this)},s.prototype.closeBalloon=function(){this._balloon.hide()},s.prototype.delay=function(t){var e=this;t=t||250,this._addToQueue(function(o){e._onQueueEmpty(),window.setTimeout(o,t)})},s.prototype.stopCurrent=function(){this._animator.exitAnimation(),this._balloon.close()},s.prototype.stop=function(){this._queue.clear(),this._animator.exitAnimation(),this._balloon.hide()},s.prototype.hasAnimation=function(t){return this._animator.hasAnimation(t)},s.prototype.animations=function(){return this._animator.animations()},s.prototype.animate=function(){var t=this.animations(),e=t[Math.floor(Math.random()*t.length)];return e.indexOf("Idle")===0?this.animate():this.play(e)},s.prototype._getDirection=function(t,e){var o=v(this._el),n=S(this._el,"height"),i=b(this._el,"width"),a=o.left+i/2,r=o.top+n/2-e,u=a-t,l=Math.round(180*Math.atan2(r,u)/Math.PI);return-45<=l&&l<45?"Right":45<=l&&l<135?"Up":135<=l&&l<=180||-180<=l&&l<-135?"Left":-135<=l&&l<-45?"Down":"Top"},s.prototype._onQueueEmpty=function(){if(!this._hidden&&!this._isIdleAnimation()){var t=this._getIdleAnimation();this._idleDfd=new dt,this._animator.showAnimation(t,this._onIdleComplete.bind(this))}},s.prototype._onIdleComplete=function(t,e){var o;e===_.States.EXITED&&((o=this._idleDfd)===null||o===void 0||o.resolve(void 0))},s.prototype._isIdleAnimation=function(){var t=this._animator.currentAnimationName;return t&&t.indexOf("Idle")===0},s.prototype._getIdleAnimation=function(){for(var t=this.animations(),e=[],o=0;o<t.length;o++){var n=t[o];n.indexOf("Idle")===0&&e.push(n)}return e[Math.floor(Math.random()*e.length)]},s.prototype._setupEvents=function(){window.addEventListener("resize",this.reposition.bind(this)),this._el.addEventListener("mousedown",this._onMouseDown.bind(this)),this._el.addEventListener("dblclick",this._onDoubleClick.bind(this))},s.prototype._onDoubleClick=function(){this.play("ClickedOn")||this.animate()},s.prototype.reposition=function(){if(this._el.getAttribute("hidden")==="true"){var t=v(this._el),e=S(this._el,"outer"),o=b(this._el,"outer"),n=document.querySelector("html").clientWidth,i=document.querySelector("html").clientHeight,a=w(),r=a.scrollLeft,u=a.scrollTop,l=t.top-r,c=t.left-u;l-5<0?l=5:l+e+5>i&&(l=i-e-5),c-5<0?c=5:c+o+5>n&&(c=n-o-5),this._el.style.left=c+"px",this._el.style.top=l+"px",this._balloon.reposition()}},s.prototype._onMouseDown=function(t){t.preventDefault(),this._startDrag(t)},s.prototype._startDrag=function(t){this.pause(),this._balloon.hide(!0),this._offset=this._calculateClickOffset(t),this._moveHandle=this._dragMove.bind(this),this._upHandle=this._finishDrag.bind(this),window.addEventListener("mousemove",this._moveHandle),window.addEventListener("mouseup",this._upHandle),this._dragUpdateLoop=window.setTimeout(this._updateLocation.bind(this),10)},s.prototype._calculateClickOffset=function(t){var e=t.pageX,o=t.pageY,n=v(this._el);return{top:o-n.top,left:e-n.left}},s.prototype._updateLocation=function(){this._el.style.top=(this._targetY||0)+"px",this._el.style.left=(this._targetX||0)+"px",this._dragUpdateLoop=window.setTimeout(this._updateLocation.bind(this),10)},s.prototype._dragMove=function(t){t.preventDefault();var e=t.clientX-this._offset.left,o=t.clientY-this._offset.top;this._targetX=e,this._targetY=o},s.prototype._finishDrag=function(){window.clearTimeout(this._dragUpdateLoop),this._moveHandle&&window.removeEventListener("mousemove",this._moveHandle),this._upHandle&&window.removeEventListener("mouseup",this._upHandle),this._balloon.show(),this.reposition(),this.resume()},s.prototype._addToQueue=function(t,e){e&&(t=t.bind(e)),this._queue.queue(t)},s.prototype.pause=function(){this._animator.pause(),this._balloon.pause()},s.prototype.resume=function(){this._animator.resume(),this._balloon.resume()};var mt={Bonzi:function(){return d("Bonzi")},Clippy:function(){return d("Clippy")},F1:function(){return d("F1")},Genie:function(){return d("Genie")},Genius:function(){return d("Genius")},Links:function(){return d("Links")},Merlin:function(){return d("Merlin")},Peedy:function(){return d("Peedy")},Rocky:function(){return d("Rocky")},Rover:function(){return d("Rover")}},O=[],y=[];(function(t,e){if(t&&typeof document<"u"){var o,n=e.prepend===!0?"prepend":"append",i=e.singleTag===!0,a=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(i){var r=O.indexOf(a);r===-1&&(r=O.push(a)-1,y[r]={}),o=y[r]&&y[r][n]?y[r][n]:y[r][n]=u()}else o=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),o.styleSheet?o.styleSheet.cssText+=t:o.appendChild(document.createTextNode(t))}function u(){var l=document.createElement("style");if(l.setAttribute("type","text/css"),e.attributes)for(var c=Object.keys(e.attributes),h=0;h<c.length;h++)l.setAttribute(c[h],e.attributes[c[h]]);var k=n==="prepend"?"afterbegin":"beforeend";return a.insertAdjacentElement(k,l),l}})(`.clippy, .clippy-balloon {
    position: fixed;
    z-index: 1000;
    cursor: pointer;
}

.clippy-balloon {

    background: #FFC;
    color: black;
    padding: 8px;
    border: 1px solid black;
    border-radius: 5px;

}

.clippy-content {
    max-width: 200px;
    min-width: 120px;
    font-family: "Microsoft Sans", sans-serif;
    font-size: 10pt;
}

.clippy-tip {
    width: 10px;
    height: 16px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAMAAAAlvKiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRF///MAAAA////52QwgAAAAAN0Uk5T//8A18oNQQAAAGxJREFUeNqs0kEOwCAIRFHn3//QTUU6xMyyxii+jQosrTPkyPEM6IN3FtzIRk1U4dFeKWQiH6pRRowMVKEmvronEynkwj0uZJgR22+YLopPSo9P34wJSamLSU7lSIWLJU7NkNomNlhqxUeAAQC+TQLZyEuJBwAAAABJRU5ErkJggg==) no-repeat;
    position: absolute;
}

.clippy-top-left .clippy-tip {
    top: 100%;
    margin-top: 0px;
    left: 100%;
    margin-left: -50px;
}

.clippy-top-right .clippy-tip {
    top: 100%;
    margin-top: 0px;
    left: 0;
    margin-left: 50px;
    background-position: -10px 0;

}

.clippy-bottom-right .clippy-tip {
    top: 0;
    margin-top: -16px;
    left: 0;
    margin-left: 50px;
    background-position: -10px -16px;
}

.clippy-bottom-left .clippy-tip {
    top: 0;
    margin-top: -16px;
    left: 100%;
    margin-left: -50px;
    background-position: 0px -16px;
}

`,{});var ft={load:function(t){var e=t||{},o=e.name,n=e.successCb,i=e.failCb,a=e.selector;mt[o]().then(function(r){var u=new s({agent:r,selector:a});n&&n(u)}).catch(function(r){i&&i(r)})},agents:{}};let m;const T=["Bonzi","Clippy","F1","Genie","Genius","Links","Merlin","Peedy","Rocky","Rover"],A=["New to our project? Let me show you around!","What brings you here today? Need help with something?","We're always improving! Check out our latest updates.","Want to get involved? We love contributions from our community!","Stuck on something? Don't worry, we've got resources to help!","Thanks for checking out our project! We're glad you're here.","We're passionate about building something amazing. Want to join us?","What do you think of our project so far? We'd love to hear your feedback!","Ready to dig in? We've got plenty of resources to get you started.","We're always learning and growing. Stay tuned for exciting updates!"],yt=f.createContext({speak:()=>{}}),x=({children:t,...e})=>{f.useEffect(()=>{const n=T[Math.floor(Math.random()*T.length)];m||ft.load({name:n,successCb:i=>{m=i,m.show(),m.play("Wave");const a=A[Math.floor(Math.random()*A.length)];m.speak(a),m._el.addEventListener("click",()=>{const r=A[Math.floor(Math.random()*A.length)];o(r,!0)})}})},[]);const o=(n,i=!1)=>{m.speak(n),i&&m.animate()};return f.createElement(yt.Provider,{value:{speak:o}},t({...e,speak:o}))};x.__docgenInfo={description:"",methods:[],displayName:"ClippyProvider"};const{makeDecorator:gt}=__STORYBOOK_MODULE_PREVIEW_API__,vt=gt({name:"withClippy",parameterName:"clippy",skipIfNoParametersOrOptions:!1,wrapper:(t,e)=>f.createElement(x,null,o=>t({...e,...o}))}),wt={selectedTheme:{name:"Theme",description:"Global theme for components",defaultValue:"win95"}},Ot=[ht,vt];export{Ot as decorators,wt as globalTypes};