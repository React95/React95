import{s as n,j as t,a as r}from"./index-828bd9af.js";import{r as d}from"./index-ebeaab24.js";import{A as s}from"./Alert-72072dc1.js";import{B as a}from"./Button-033dc69c.js";import{Simple as b}from"./avatar.stories-e2cd2083.js";import{Simple as S}from"./button.stories-fa30e9c4.js";import{All as c}from"./checkbox.stories-54afe221.js";import{Simple as f}from"./dropdown.stories-7fe13c13.js";import{Simple as u}from"./fieldset.stories-b1aa4f0f.js";import{Simple as A}from"./input.stories-773228f0.js";import{WithIcons as v,Simple as h}from"./list.stories-08b04c59.js";import{Simple as x}from"./progressbar.stories-e9c1032b.js";import{Simple as $}from"./radiobutton.stories-b0bb7ddf.js";import{Simple as w}from"./range.stories-c85a0ebc.js";import{Simple as g}from"./tabs.stories-e663f7d6.js";import{Simple as y}from"./textarea.stories-6392ac05.js";import{Simple as B,Inactive as k,Complete as C}from"./titlebar.stories-3190940b.js";import{Simple as O}from"./tooltip.stories-c1b40a02.js";import{Simple as T}from"./tree.stories-2212cae8.js";import{FromURL as L}from"./video.stories-c141266b.js";import"./Write1-7fc0a614.js";import"./Modal-5ee6d940.js";import"./index-f50b85d6.js";import"./index-9c09ad76.js";import"./index-ab123da1.js";import"./Frame-f46249f2.js";import"./ModalContext-2b18b259.js";import"./Checkbox-cb3068d1.js";import"./Dropdown-11e6794b.js";import"./Fieldset-f088d34e.js";import"./Input-4dd28d71.js";import"./index.esm-061bac8e.js";import"./List-999d6abb.js";import"./ListDivider-60fe1961.js";import"./Range-5a0f6b0d.js";import"./Tooltip-e50daaf0.js";const W=n.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 620px;

  > * {
    margin-right: 10px;
  }
`,cr={title:"All"},e={render:()=>{const[p,i]=d.useState(!0);return t(W,{children:[r("div",{children:r(a,{onClick:()=>i(!0),children:" Show Alert "})}),p&&r(s,{title:"Windows Networking",type:"error",closeAlert:()=>{},defaultPosition:{x:-130,y:-130},message:"The Windows password you typed is incorrect.",buttons:[{value:"OK",onClick:()=>i(!1)}]}),r("br",{}),r("div",{children:r(S.render,{})}),r("br",{}),r(b.render,{}),r("br",{}),r(c.render,{}),r("br",{}),r(f.render,{}),r("br",{}),r(u.render,{}),r("br",{}),r("div",{children:r(A.render,{})}),r("br",{}),r("br",{}),r("div",{children:r(y.render,{})}),r("br",{}),r("br",{}),t("div",{children:[r(v.render,{}),r("br",{}),r(h.render,{})]}),r("br",{}),r(x.render,{}),r("br",{}),r($.render,{}),r("br",{}),r(w.render,{}),r("br",{}),r(g.render,{}),r("br",{}),r(T.render,{}),r("br",{}),r(O.render,{}),r("br",{}),r(L.render,{}),r("br",{}),r(B.render,{}),r("br",{}),r(k.render,{}),r("br",{}),r(C.render,{})]})}};var o,m,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [openAlert, setOpenAlert] = React.useState(true);
    return <AllList>
        <div>
          <Button onClick={() => setOpenAlert(true)}> Show Alert </Button>
        </div>
        {openAlert && <Alert title="Windows Networking" type="error" closeAlert={() => {}} defaultPosition={{
        x: -130,
        y: -130
      }} message="The Windows password you typed is incorrect." buttons={[{
        value: 'OK',
        onClick: () => setOpenAlert(false)
      }]} />}

        <br />

        <div>
          <SimpleButton.render />
        </div>

        <br />
        <SimpleAvatar.render />

        <br />
        <AllCheckbox.render />

        <br />
        <SimpleDropdown.render />

        <br />
        <SimpleFieldset.render />

        <br />
        <div>
          <SimpleInput.render />
        </div>

        <br />
        <br />

        <div>
          <SimpleTextArea.render />
        </div>

        <br />
        <br />

        <div>
          <WithIcons.render />
          <br />
          <SimpleList.render />
        </div>

        <br />
        <SimpleProgressBar.render />

        <br />
        <SimpleRadioButton.render />

        <br />
        <SimpleRange.render />

        <br />
        <SimpleTabs.render />

        <br />
        <SimpleTree.render />

        <br />
        <SimpleTooltip.render />

        <br />
        <FromURL.render />

        <br />
        <SimpleTitleBar.render />

        <br />
        <Inactive.render />

        <br />
        <Complete.render />
      </AllList>;
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const fr=["All"];export{e as All,fr as __namedExportsOrder,cr as default};
//# sourceMappingURL=all.stories-d2a4eee4.js.map
