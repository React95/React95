import{s as n,j as t,a as r}from"./index-9af3809b.js";import{r as d}from"./index-ebeaab24.js";import{A as s}from"./Alert-afbf2d25.js";import{B as a}from"./Button-c53c5656.js";import{Simple as b}from"./avatar.stories-e836e863.js";import{Simple as S}from"./button.stories-04391718.js";import{All as c}from"./checkbox.stories-0b815200.js";import{Simple as f}from"./dropdown.stories-c180272b.js";import{Simple as u}from"./fieldset.stories-7336c49b.js";import{Simple as A}from"./input.stories-57f18b9d.js";import{WithIcons as v,Simple as h}from"./list.stories-d9a27c3e.js";import{Simple as x}from"./progressbar.stories-5df58f8a.js";import{Simple as $}from"./radiobutton.stories-eb2ce1c2.js";import{Simple as w}from"./range.stories-e1735e62.js";import{Simple as g}from"./tabs.stories-340aa5ae.js";import{Simple as y}from"./textarea.stories-5a2242a5.js";import{Simple as B,Inactive as k,Complete as C}from"./titlebar.stories-e5394048.js";import{Simple as O}from"./tooltip.stories-375daefc.js";import{Simple as T}from"./tree.stories-1f608192.js";import{FromURL as L}from"./video.stories-ed5b7c43.js";import"./Write1-4d3cd2cb.js";import"./Modal-2a1b1d05.js";import"./index-f50b85d6.js";import"./index-9c09ad76.js";import"./index-1842050f.js";import"./Frame-b3eb3b92.js";import"./ModalContext-2b18b259.js";import"./Checkbox-d5d444c7.js";import"./Dropdown-75460a15.js";import"./Fieldset-aaed928f.js";import"./Input-f9157678.js";import"./index.esm-061bac8e.js";import"./Cursor-8657a891.js";import"./List-0d80d9c5.js";import"./ListDivider-1ac362e6.js";import"./Range-fd9abf26.js";import"./Tooltip-53081f26.js";const W=n.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 620px;

  > * {
    margin-right: 10px;
  }
`,fr={title:"All"},e={render:()=>{const[p,i]=d.useState(!0);return t(W,{children:[r("div",{children:r(a,{onClick:()=>i(!0),children:" Show Alert "})}),p&&r(s,{title:"Windows Networking",type:"error",closeAlert:()=>{},defaultPosition:{x:-130,y:-130},message:"The Windows password you typed is incorrect.",buttons:[{value:"OK",onClick:()=>i(!1)}]}),r("br",{}),r("div",{children:r(S.render,{})}),r("br",{}),r(b.render,{}),r("br",{}),r(c.render,{}),r("br",{}),r(f.render,{}),r("br",{}),r(u.render,{}),r("br",{}),r("div",{children:r(A.render,{})}),r("br",{}),r("br",{}),r("div",{children:r(y.render,{})}),r("br",{}),r("br",{}),t("div",{children:[r(v.render,{}),r("br",{}),r(h.render,{})]}),r("br",{}),r(x.render,{}),r("br",{}),r($.render,{}),r("br",{}),r(w.render,{}),r("br",{}),r(g.render,{}),r("br",{}),r(T.render,{}),r("br",{}),r(O.render,{}),r("br",{}),r(L.render,{}),r("br",{}),r(B.render,{}),r("br",{}),r(k.render,{}),r("br",{}),r(C.render,{})]})}};var o,m,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const ur=["All"];export{e as All,ur as __namedExportsOrder,fr as default};
//# sourceMappingURL=all.stories-12b2495b.js.map
