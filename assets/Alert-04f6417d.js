import{r,R as e}from"./index-9fa1aa67.js";import{U as d,l as c,m as u,n as m}from"./Write1-9175756e.js";import{M as a}from"./Modal-f30c9f3b.js";var f="r95_lcz1rw0",h="r95_lcz1rw1",w="r95_lcz1rw2";const p=""+new URL("chord-e2c48e95.mp3",import.meta.url).href,g=({option:t})=>{switch(t){case"info":return e.createElement(m,{width:32,height:32,variant:"32x32_4"});case"question":return e.createElement(u,{width:32,height:32,variant:"32x32_4"});case"warning":return e.createElement(c,{width:32,height:32,variant:"32x32_4"});case"error":default:return e.createElement(d,{width:32,height:32,variant:"32x32_4"})}},v=r.forwardRef(({type:t="error",message:n,hasSound:o=!1,dragOptions:s,...i},l)=>(o&&r.useEffect(()=>{new Audio(p).play()},[]),e.createElement(a,{height:"120",dragOptions:{defaultPosition:{x:typeof window>"u"?0:Math.floor(window.innerWidth/2)-150,y:typeof window>"u"?0:Math.floor(window.innerHeight/2)-100},...s},buttons:[{value:"OK",onClick:()=>{}}],hasWindowButton:!1,buttonsAlignment:"center",...i,ref:l},e.createElement(a.Content,{className:w},e.createElement("div",{className:h},e.createElement(g,{option:t})),e.createElement("div",{className:f},n)))));v.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{defaultValue:{value:"'error'",computed:!1},required:!1},hasSound:{defaultValue:{value:"false",computed:!1},required:!1}}};export{v as A};