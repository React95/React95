import{s as d,j as m,a as f}from"./index-0559674c.js";import{r as s}from"./index-1b03fe98.js";import{F as g}from"./Frame-f3688d20.js";const x=d(g)`
  background: radial-gradient(#ff0 20%, transparent 20%) 0 0,
    radial-gradient(#ff0 20%, transparent 20%) 4px 4px,
    radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 3px 4px;
  background-size: 7px 7px;
  background-color: borderLightest;
  border: 1;
  padding: 2 2 2 4;
  box-shadow: none;
  position: absolute;
  top: -20px;
  text-align: center;
  z-index: taskbar;
`,y=d.div`
  display: inline-block;
  position: relative;
  cursor: default;
  white-space: nowrap;
`,b=({children:e,text:a,delay:r,...o},n)=>{const[l,i]=s.useState(!1),[p,c]=s.useState(0);return m(y,{onMouseEnter:()=>{const u=window.setTimeout(()=>{i(!0)},r);c(u)},onMouseLeave:()=>{clearTimeout(p),i(!1)},...o,ref:n,children:[l&&f(x,{children:a}),e]})},t=s.forwardRef(b);function h(e){const a=["January","February","March","April","May","June","July","August","September","October","November","December"],r=e.getDate(),o=e.getMonth(),n=e.getFullYear();return`${r.toString().padStart(2,"0")} ${a[o]} ${n}`}t.defaultProps={delay:1e3,text:h(new Date)};const S=t;try{t.displayName="Tooltip",t.__docgenInfo={description:"",displayName:"Tooltip",props:{text:{defaultValue:{value:"formatDate(new Date())"},description:"",name:"text",required:!1,type:{name:"string"}},delay:{defaultValue:{value:"1000"},description:"",name:"delay",required:!1,type:{name:"number"}}}}}catch{}export{S as T};
