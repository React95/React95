import{g as p}from"./index-9fa1aa67.js";var i={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var f={}.hasOwnProperty;function e(){for(var t="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(t=o(t,c(n)))}return t}function c(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return e.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var n in t)f.call(t,n)&&t[n]&&(r=o(r,n));return r}function o(t,r){return r?t?t+" "+r:t+r:t}s.exports?(e.default=e,s.exports=e):window.classNames=e})()})(i);var a=i.exports;const l=p(a);export{l as c};
