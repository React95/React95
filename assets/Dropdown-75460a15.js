import{s as a,t as e,a as n}from"./index-9af3809b.js";import{r as s}from"./index-ebeaab24.js";const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gERFgsEvq/LcwAAACRJREFUGNNjYBgwwAil/xNSw4gk8B+PQSgK0RUzEnLOf4bBBQBR3QQDezWEtAAAAABJRU5ErkJggg==",c=a.div`
  position: relative;
  width: 200px;
  height: 20px;

  &:after {
    display: flex;
    justify-content: center;
    width: 17px;
    height: 16px;
    font-size: 14px;
    line-height: 1.1;
    content: '';
    pointer-events: none;
    position: absolute;
    right: 1px;
    top: 2px;

    background-color: material;
    box-shadow: inset 0.5px 0.7px 0px 0.7px ${e("colors.material")},
      inset -1px 0px 0 1px ${e("colors.borderDark")},
      inset 1.5px 1.5px 0px 1.5px ${e("colors.borderLightest")};

    border-right: 1;
    border-bottom: 1;

    background-image: url('${d}');
    background-position: 60% 60%;
    background-repeat: no-repeat;
  }
`,A=a.select`
  position: relative;
  outline: none;
  border: none;
  border-radius: 0;
  width: 100%;
  height: 20px;

  padding: 3;

  color: materialText;
  background-color: inputBackground;

  border-left: 1;
  border-left-color: borderDark;
  border-top: 1;
  border-top-color: borderDark;

  box-shadow: inset -1px -1px 0 0 ${e("colors.material")},
    inset 1px 1px 0 0 ${e("colors.borderDarkest")},
    0.5px 0.5px 0 0.5px ${e("colors.borderLightest")};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,o=s.forwardRef(({options:r,...p},i)=>n(c,{children:n(A,{...p,ref:i,children:r&&r.map(t=>n("option",{value:t,children:t},t))})}));o.defaultProps={options:["","C:\\Documents and Settings","C:\\Documents and Settings\\Documents","iexplorer.exe"]};const g=o;try{o.displayName="Dropdown",o.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:{value:`[
    '',
    'C:\\\\Documents and Settings',
    'C:\\\\Documents and Settings\\\\Documents',
    'iexplorer.exe',
  ]`},description:"",name:"options",required:!1,type:{name:"(string | number)[]"}}}}}catch{}export{g as D};
//# sourceMappingURL=Dropdown-75460a15.js.map
