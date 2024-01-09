import{s as i,t as o,j as c,a as p}from"./index-0559674c.js";import{R as m}from"./index-1b03fe98.js";import{B as u}from"./Button-1674c104.js";import{F as g}from"./Frame-f3688d20.js";const f=i.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
`,a=i(u).attrs({as:"li"})`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 2;
  padding: 0;

  width: 17px;
  height: 14px;

  min-width: 0;
  font-weight: 600;
  font-size: 10;

  &:active {
    padding: 1 0 0 1;

    outline: none;
  }

  &:first-child {
    margin-right: 0;
  }

  &:focus {
    box-shadow: inset 1px 1px 0px 1px ${o("colors.borderLightest")},
      inset -1px -1px 0px 1px ${o("colors.borderDark")};
  }
`;a.displayName="Option";const h=i(g)`
  height: 20;
  margin-bottom: 2;

  padding: 2;

  display: flex;

  box-shadow: none;

  svg {
    width: 16;
    height: 16;
    margin-right: 4;
  }

  background: ${({active:e,theme:t})=>e?t.colors.headerBackground:t.colors.headerNotActiveBackground};
`,x=i.div`
  flex-grow: 1;
  line-height: 1.4em;
  margin: 0;
  font-size: 1em;
  text-shadow: 0.5px 0px white, 1.5px 0px white;
  color: transparent;
  letter-spacing: 1px;
  font-size: 1em;
`,y=({children:e,title:t="UNKNOWN.EXE",icon:r,active:n=!0,className:l},d)=>c(h,{active:n,color:n?"headerText":"headerNotActiveText",ref:d,className:"default",children:[r&&r,p(x,{className:l,children:t}),e]}),N=Object.assign(m.forwardRef(y),{Option:a,OptionsBox:f}),s=N;try{a.displayName="Option",a.__docgenInfo={description:"",displayName:"Option",props:{active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},title:{defaultValue:{value:"UNKNOWN.EXE"},description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}try{s.displayName="TitleBar",s.__docgenInfo={description:"",displayName:"TitleBar",props:{active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},title:{defaultValue:{value:"UNKNOWN.EXE"},description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{s as T};
