import{s as t,t as e}from"./index-9af3809b.js";const o=t.button`
  background-color: material;
  padding: 7 20 5;
  border: none;
  color: materialText;

  font-size: 12px;

  box-shadow: inset 1px 1px 0px 1px ${e("colors.borderLightest")},
    inset 0 0 0 1px ${e("colors.borderDark")},
    1px 1px 0 0px ${e("colors.borderDarkest")};

  &:disabled {
    color: materialTextDisabled;
  }

  &:focus {
    outline: ${e("space.1")}px dotted ${e("colors.materialText")};
    outline-offset: -${e("space.5")}px;

    box-shadow: inset 1px 1px 0px 1px ${e("colors.borderLightest")},
      inset -0.5px -0.5px 0px 1px ${e("colors.borderDark")},
      1px 1px 0 1px ${e("colors.borderDarkest")};
  }

  &:active {
    padding: 8 20 4;

    outline: ${e("space.1")}px dotted ${e("colors.borderDarkest")};
    outline-offset: -${e("space.5")}px;

    box-shadow: inset 0 0 0 1px ${e("colors.borderDark")},
      0 0 0 1px ${e("colors.borderDarkest")};
  }
`;o.defaultProps={children:"Ok"};const s=o;try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{s as B};
//# sourceMappingURL=Button-c53c5656.js.map
