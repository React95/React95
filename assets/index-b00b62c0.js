import{s as i,t as o,j as c,a as p}from"./index-9af3809b.js";import{R as m}from"./index-ebeaab24.js";import{B as u}from"./Button-c53c5656.js";import{F as g}from"./Frame-b3eb3b92.js";const f=i.ul`
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
  height: 18;
  margin-bottom: 2;

  padding: 2;

  display: flex;

  box-shadow: none;

  img {
    width: 15;
    height: 14;
    margin-right: 4;
  }

  background: ${({active:e,theme:t})=>e?t.colors.headerBackground:t.colors.headerNotActiveBackground};
`,y=i.div`
  flex-grow: 1;
  font-weight: bold;
  line-height: 1.4em;
  margin: 0;
  font-size: 1em;
`,x=({children:e,title:t="UNKNOWN.EXE",icon:r,active:n=!0,className:s},d)=>c(h,{active:n,color:n?"headerText":"headerNotActiveText",ref:d,children:[r&&r,p(y,{className:s,children:t}),e]}),N=Object.assign(m.forwardRef(x),{Option:a,OptionsBox:f}),l=N;try{a.displayName="Option",a.__docgenInfo={description:"",displayName:"Option",props:{active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},title:{defaultValue:{value:"UNKNOWN.EXE"},description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="TitleBar",l.__docgenInfo={description:"",displayName:"TitleBar",props:{active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},title:{defaultValue:{value:"UNKNOWN.EXE"},description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{l as T};
//# sourceMappingURL=index-b00b62c0.js.map
