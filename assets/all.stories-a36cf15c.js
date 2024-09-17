import{r as e}from"./index-ff614419.js";import{A as s}from"./Alert-311e0893.js";import{B as c}from"./Button-2ad9a764.js";import{Simple as t}from"./avatar.stories-cc2f6276.js";import{Simple as d}from"./button.stories-83f8f4e1.js";import{All as u}from"./checkbox.stories-9ac5f8df.js";import{Simple as E}from"./dropdown.stories-a416fdae.js";import{Simple as S}from"./fieldset.stories-dc3cb0d1.js";import{Simple as b}from"./input.stories-7ed908b2.js";import{WithIcons as v,Simple as f}from"./list.stories-b46626c4.js";import{Simple as n}from"./progressbar.stories-38f7d1b8.js";import{Simple as A}from"./radiobutton.stories-9572fcd5.js";import{Simple as g}from"./range.stories-f6978deb.js";import{Simple as $}from"./tabs.stories-877a70ac.js";import{Simple as w}from"./textarea.stories-86912b96.js";import{Simple as y,Inactive as B,Complete as C}from"./titlebar.stories-1e10336f.js";import{Simple as m}from"./tooltip.stories-70be3aef.js";import{Simple as T}from"./tree.stories-60209eb8.js";import{FromURL as _}from"./video.stories-9b8a79e6.js";import"./Write1-f730c4ea.js";import"./Modal-a4c7e6c0.js";import"./index-a1ecae5a.js";import"./index-0c06dfaf.js";import"./TitleBar-dbb9a1f2.js";import"./Frame-43ccd6dd.js";import"./index-a20f67f3.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";import"./ModalContext-84fff0fd.js";import"./help-4ccdb1ed.js";import"./Checkbox-831a77ad.js";import"./Dropdown-df80b455.js";import"./Fieldset-4bb8ee78.js";import"./Input-bf318249.js";import"./Input.css-f9ede444.js";/* empty css                              */import"./List-e7819dce.js";import"./Range-932b777a.js";import"./Tooltip-65e0b881.js";var h="r95_na754y0";const Ee={title:"All"},r={render:()=>{const[p,l]=e.useState(!0);return e.createElement("div",{className:h},e.createElement("div",null,e.createElement(c,{onClick:()=>l(!0)}," Show Alert ")),p&&e.createElement(s,{title:"Windows Networking",type:"error",onClose:()=>{},defaultPosition:{x:-130,y:-130},message:"The Windows password you typed is incorrect.",buttons:[{value:"OK",onClick:()=>l(!1)}]}),e.createElement("br",null),e.createElement("div",null,e.createElement(d.render,null)),e.createElement("br",null),e.createElement(t.render,{...t.args}),e.createElement("br",null),e.createElement(u.render,null),e.createElement("br",null),e.createElement(E.render,null),e.createElement("br",null),e.createElement(S.render,null),e.createElement("br",null),e.createElement("div",null,e.createElement(b.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(w.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(v.render,null),e.createElement("br",null),e.createElement(f.render,null)),e.createElement("br",null),e.createElement(n.render,{...n.args}),e.createElement("br",null),e.createElement(A.render,null),e.createElement("br",null),e.createElement(g.render,null),e.createElement("br",null),e.createElement($.render,null),e.createElement("br",null),e.createElement(T.render,null),e.createElement("br",null),e.createElement(m.render,{...m.args}),e.createElement("br",null),e.createElement(_.render,null),e.createElement("br",null),e.createElement(y.render,null),e.createElement("br",null),e.createElement(B.render,null),e.createElement("br",null),e.createElement(C.render,null))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Se=["All"];export{r as All,Se as __namedExportsOrder,Ee as default};
