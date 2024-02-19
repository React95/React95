import{s as a,a as e,j as u}from"./index-0559674c.js";import{U as f,k as p,l as c,m}from"./Write1-0f5c28b2.js";import{r as i}from"./index-1b03fe98.js";import{M as h}from"./Modal-a0fc7174.js";const y=""+new URL("chord-e2c48e95.mp3",import.meta.url).href,w=({option:n})=>{switch(n){case"info":return e(m,{width:32,height:32,variant:"32x32_4"});case"question":return e(c,{width:32,height:32,variant:"32x32_4"});case"warning":return e(p,{width:32,height:32,variant:"32x32_4"});case"error":default:return e(f,{width:32,height:32,variant:"32x32_4"})}},g=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,v=a.div`
  padding: 7 15 7 7;
`,q=a.div`
  display: flex;
  flex-direction: row;
`,t=i.forwardRef(({type:n="error",message:r,closeAlert:o,hasSound:l,...s},d)=>(l&&i.useEffect(()=>{new Audio(y).play()},[]),e(h,{closeModal:o,height:"120",hasWindowButton:!1,...s,ref:d,children:u(q,{children:[e(v,{children:e(w,{option:n})}),e(g,{children:r})]})})));t.displayName="Alert";t.defaultProps={type:"error",buttons:[{value:"OK",onClick:()=>{}}],closeAlert:()=>{},buttonsAlignment:"center",positionOffset:{x:typeof window>"u"?0:Math.floor(window.innerWidth/2)-150,y:typeof window>"u"?0:Math.floor(window.innerHeight/2)-80},hasSound:!1};const b=t;try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{menu:{defaultValue:null,description:"",name:"menu",required:!1,type:{name:"ModalMenu[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<0 | (string & {})>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<0 | (string & {})>"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},buttons:{defaultValue:{value:"[{ value: 'OK', onClick: () => {} }]"},description:"",name:"buttons",required:!1,type:{name:"ModalButtons[]"}},defaultPosition:{defaultValue:null,description:"",name:"defaultPosition",required:!1,type:{name:"ControlPosition"}},positionOffset:{defaultValue:{value:`{
    x:
      typeof window == 'undefined'
        ? 0
        : Math.floor(window.innerWidth / 2) - 150,
    y:
      typeof window == 'undefined'
        ? 0
        : Math.floor(window.innerHeight / 2) - 80,
  }`},description:"",name:"positionOffset",required:!1,type:{name:"PositionOffsetControlPosition"}},hasWindowButton:{defaultValue:null,description:"",name:"hasWindowButton",required:!1,type:{name:"boolean"}},buttonsAlignment:{defaultValue:{value:"center"},description:"",name:"buttonsAlignment",required:!1,type:{name:"JustifyContent"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},closeAlert:{defaultValue:{value:"() => {}"},description:"",name:"closeAlert",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>) => void"}},hasSound:{defaultValue:{value:"false"},description:"",name:"hasSound",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"error"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"question"'},{value:'"warning"'}]}}}}}catch{}export{b as A};
