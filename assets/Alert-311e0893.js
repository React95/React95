import{r as a,R as e}from"./index-ff614419.js";import{U as l,k as d,l as u,m as f}from"./Write1-f730c4ea.js";import{M as c}from"./Modal-a4c7e6c0.js";var m="r95_lcz1rw0",h="r95_lcz1rw1",w="r95_lcz1rw2";const p=""+new URL("chord-e2c48e95.mp3",import.meta.url).href,v=({option:t})=>{switch(t){case"info":return e.createElement(f,{width:32,height:32,variant:"32x32_4"});case"question":return e.createElement(u,{width:32,height:32,variant:"32x32_4"});case"warning":return e.createElement(d,{width:32,height:32,variant:"32x32_4"});case"error":default:return e.createElement(l,{width:32,height:32,variant:"32x32_4"})}},r=a.forwardRef(({type:t="error",message:n,hasSound:o,...i},s)=>(o&&a.useEffect(()=>{new Audio(p).play()},[]),e.createElement(c,{height:"120",hasWindowButton:!1,...i,ref:s},e.createElement("div",{className:w},e.createElement("div",{className:h},e.createElement(v,{option:t})),e.createElement("div",{className:m},n)))));r.defaultProps={type:"error",buttons:[{value:"OK",onClick:()=>{}}],buttonsAlignment:"center",positionOffset:{x:typeof window>"u"?0:Math.floor(window.innerWidth/2)-150,y:typeof window>"u"?0:Math.floor(window.innerHeight/2)-100},hasSound:!1};r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{defaultValue:{value:"'error'",computed:!1},required:!1},buttons:{defaultValue:{value:"[{ value: 'OK', onClick: () => {} }]",computed:!1},required:!1},buttonsAlignment:{defaultValue:{value:"'center'",computed:!1},required:!1},positionOffset:{defaultValue:{value:`{
  x:
    typeof window == 'undefined'
      ? 0
      : Math.floor(window.innerWidth / 2) - 150,
  y:
    typeof window == 'undefined'
      ? 0
      : Math.floor(window.innerHeight / 2) - 100,
}`,computed:!1},required:!1},hasSound:{defaultValue:{value:"false",computed:!1},required:!1}}};export{r as A};
