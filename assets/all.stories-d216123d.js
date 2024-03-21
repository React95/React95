import{j as i,a as r}from"./jsx-runtime-e43ccb36.js";import{r as a}from"./index-1b03fe98.js";import{A as S}from"./Alert-db74c0b6.js";import{B as b}from"./Button-71983f72.js";import{Simple as t}from"./avatar.stories-8e1a5a2b.js";import{Simple as c}from"./button.stories-33e7ad0e.js";import{All as u}from"./checkbox.stories-215cfb19.js";import{Simple as v}from"./dropdown.stories-e4c815d3.js";import{Simple as f}from"./fieldset.stories-8be89f57.js";import{Simple as A}from"./input.stories-fca8e86f.js";import{WithIcons as g,Simple as h}from"./list.stories-179ded89.js";import{Simple as o}from"./progressbar.stories-9e94c656.js";import{Simple as $}from"./radiobutton.stories-1b9e8738.js";import{Simple as w}from"./range.stories-15a1a467.js";import{Simple as y}from"./tabs.stories-b2ebbba9.js";import{Simple as x}from"./textarea.stories-8a4eb573.js";import{Simple as B,Inactive as C,Complete as T}from"./titlebar.stories-1cef0921.js";import{Simple as m}from"./tooltip.stories-6c7cd53c.js";import{Simple as _}from"./tree.stories-7ce211ef.js";import{FromURL as k}from"./video.stories-a376e02c.js";import"./Write1-31d87498.js";import"./Modal-32e36ab2.js";import"./index-f6b105ee.js";import"./index-6fd5a17b.js";import"./TitleBar-4003dbf8.js";import"./Frame-9c505601.js";import"./index-7332eacf.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";import"./ModalContext-888db322.js";import"./help-4ccdb1ed.js";import"./Checkbox-837d2263.js";import"./Dropdown-508d5fa6.js";import"./Fieldset-16ed2ea9.js";import"./Input-550d5749.js";import"./Input.css-f9ede444.js";/* empty css                              */import"./List-77cf638e.js";import"./Range-2813f350.js";import"./Tooltip-35b785ae.js";var O="r95_na754y0";const fr={title:"All"},e={render:()=>{const[d,n]=a.useState(!0);return i("div",{className:O,children:[r("div",{children:r(b,{onClick:()=>n(!0),children:" Show Alert "})}),d&&r(S,{title:"Windows Networking",type:"error",onClose:()=>{},defaultPosition:{x:-130,y:-130},message:"The Windows password you typed is incorrect.",buttons:[{value:"OK",onClick:()=>n(!1)}]}),r("br",{}),r("div",{children:r(c.render,{})}),r("br",{}),r(t.render,{...t.args}),r("br",{}),r(u.render,{}),r("br",{}),r(v.render,{}),r("br",{}),r(f.render,{}),r("br",{}),r("div",{children:r(A.render,{})}),r("br",{}),r("br",{}),r("div",{children:r(x.render,{})}),r("br",{}),r("br",{}),i("div",{children:[r(g.render,{}),r("br",{}),r(h.render,{})]}),r("br",{}),r(o.render,{...o.args}),r("br",{}),r($.render,{}),r("br",{}),r(w.render,{}),r("br",{}),r(y.render,{}),r("br",{}),r(_.render,{}),r("br",{}),r(m.render,{...m.args}),r("br",{}),r(k.render,{}),r("br",{}),r(B.render,{}),r("br",{}),r(C.render,{}),r("br",{}),r(T.render,{})]})}};var p,l,s;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [openAlert, setOpenAlert] = React.useState(true);
    return <div className={styles.list}>
        <div>
          <Button onClick={() => setOpenAlert(true)}> Show Alert </Button>
        </div>
        {openAlert && <Alert title="Windows Networking" type="error" onClose={() => {}} defaultPosition={{
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
        <SimpleAvatar.render {...SimpleAvatar.args} />

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
        <SimpleProgressBar.render {...SimpleProgressBar.args} />

        <br />
        <SimpleRadioButton.render />

        <br />
        <SimpleRange.render />

        <br />
        <SimpleTabs.render />

        <br />
        <SimpleTree.render />

        <br />
        <SimpleTooltip.render {...SimpleTooltip.args} />

        <br />
        <FromURL.render />

        <br />
        <SimpleTitleBar.render />

        <br />
        <Inactive.render />

        <br />
        <Complete.render />
      </div>;
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const Ar=["All"];export{e as All,Ar as __namedExportsOrder,fr as default};
