import{s as p,j as i,a as r}from"./index-0559674c.js";import{r as d}from"./index-1b03fe98.js";import{A as s}from"./Alert-94802ef2.js";import{B as a}from"./Button-1674c104.js";import{Simple as b}from"./avatar.stories-86986632.js";import{Simple as S}from"./button.stories-f1ce151c.js";import{All as c}from"./checkbox.stories-c0c9be45.js";import{Simple as f}from"./dropdown.stories-f2ccd615.js";import{Simple as u}from"./fieldset.stories-a82e2cdf.js";import{Simple as A}from"./input.stories-fff3adf7.js";import{WithIcons as v,Simple as h}from"./list.stories-d4147833.js";import{Simple as x}from"./progressbar.stories-4911a34b.js";import{Simple as $}from"./radiobutton.stories-4adcd875.js";import{Simple as w}from"./range.stories-cac585e4.js";import{Simple as g}from"./tabs.stories-d5e8aa4b.js";import{Simple as y}from"./textarea.stories-f1a5c937.js";import{Simple as B,Inactive as k,Complete as C}from"./titlebar.stories-a5cfbe2d.js";import{Simple as O}from"./tooltip.stories-ae9716db.js";import{Simple as T}from"./tree.stories-a463c828.js";import{FromURL as L}from"./video.stories-d64f91aa.js";import"./Write1-0f5c28b2.js";import"./Modal-8fadfb13.js";import"./index-f6b105ee.js";import"./index-6fd5a17b.js";import"./index-5d7a0789.js";import"./Frame-f3688d20.js";import"./ModalContext-69d2d970.js";import"./Checkbox-a6eb1760.js";import"./Dropdown-4d9e4f7e.js";import"./Fieldset-12d110ba.js";import"./Input-d7429e43.js";import"./index.esm-544253ed.js";import"./Cursor-2670fd72.js";import"./List-87ea133f.js";import"./ListDivider-6693db38.js";import"./Range-f6ea9f25.js";import"./Tooltip-701ed5c6.js";const W=p.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 620px;

  > * {
    margin-right: 10px;
  }
`,fr={title:"All"},e={render:()=>{const[l,n]=d.useState(!0);return i(W,{children:[r("div",{children:r(a,{onClick:()=>n(!0),children:" Show Alert "})}),l&&r(s,{title:"Windows Networking",type:"error",closeAlert:()=>{},defaultPosition:{x:-130,y:-130},message:"The Windows password you typed is incorrect.",buttons:[{value:"OK",onClick:()=>n(!1)}]}),r("br",{}),r("div",{children:r(S.render,{})}),r("br",{}),r(b.render,{}),r("br",{}),r(c.render,{}),r("br",{}),r(f.render,{}),r("br",{}),r(u.render,{}),r("br",{}),r("div",{children:r(A.render,{})}),r("br",{}),r("br",{}),r("div",{children:r(y.render,{})}),r("br",{}),r("br",{}),i("div",{children:[r(v.render,{}),r("br",{}),r(h.render,{})]}),r("br",{}),r(x.render,{}),r("br",{}),r($.render,{}),r("br",{}),r(w.render,{}),r("br",{}),r(g.render,{}),r("br",{}),r(T.render,{}),r("br",{}),r(O.render,{}),r("br",{}),r(L.render,{}),r("br",{}),r(B.render,{}),r("br",{}),r(k.render,{}),r("br",{}),r(C.render,{})]})}};var t,o,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ur=["All"];export{e as All,ur as __namedExportsOrder,fr as default};
