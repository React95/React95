import{s,c,j as d,t as r}from"./index-0559674c.js";import{r as m,R as o}from"./index-1b03fe98.js";import{D as g}from"./ListDivider-6693db38.js";const x=""+new URL("rightcaret-f6d1f28b.svg",import.meta.url).href,h=s.li`
  position: relative;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 2 6;

  color: materialText;

  svg {
    margin-right: 10;
  }

  &:hover {
    background-color: headerBackground;
    color: materialTextInvert;
  }

  ul {
    display: none;
    position: absolute;
    top: -2px;
    left: 97%;
    color: materialText;
    z-index: taskbar;

    svg {
      width: 16px;
      height: 16px;
      margin-right: 6;
    }
  }

  ${({icon:t})=>!t&&"padding-left: 26px;"};

  ${({hasList:t})=>t&&c`
      &:after {
        position: absolute;
        width: 5px;
        height: 8px;
        right: 8px;

        content: '';
        background-color: materialText;
        mask-image: url('${x}');
        mask-position: center center;
        mask-size: 5px 8px;
        mask-repeat: no-repeat;

        svg {
          fill: materialTextInvert;
        }
      }

      &:hover {
        &:after {
          background-color: materialTextInvert;
        }

        ul {
          display: block;
        }
      }
    `};
`,n=m.forwardRef(({icon:t,children:e=[],...l},p)=>d(h,{...l,icon:!!t,ref:p,hasList:!!(e&&o.Children.map(e,a=>o.isValidElement(a)).some(a=>a)),className:"default",children:[t,e]}));n.displayName="List.Item";const f=n;try{List.Item.displayName="List.Item",List.Item.__docgenInfo={description:"",displayName:"List.Item",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const u=s.ul`
  background-color: material;
  padding: 5 20 6;
  border: none;

  margin: 0;
  padding: 2;
  list-style: none;

  box-shadow: inset 1px 1px 0px 1px ${r("colors.borderLightest")},
    inset 0 0 0 1px ${r("colors.borderDark")},
    1px 1px 0 1px ${r("colors.borderDarkest")};

  ${({width:t})=>`
    width: ${t}px;
  `};
`,i=Object.assign(u,{Item:f,Divider:g});i.displayName="List";i.defaultProps={width:200};const k=i;export{k as L};
