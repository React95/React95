import{r as e}from"./index-9fa1aa67.js";import{A as c}from"./Alert-04f6417d.js";import{B as d}from"./Button-9c3a5d19.js";import{T as u}from"./TitleBar-83565a4b.js";import{Simple as n}from"./avatar.stories-90fcea31.js";import{Simple as E}from"./button.stories-6750fb1a.js";import{All as S}from"./checkbox.stories-65acf778.js";import{Simple as b}from"./dropdown.stories-9e212bf6.js";import{Simple as v}from"./fieldset.stories-5a7ad83a.js";import{Simple as f}from"./input.stories-e8d4ad53.js";import{WithIcons as A,Simple as g}from"./list.stories-d2af6b62.js";import{Simple as m}from"./progressbar.stories-34dbf414.js";import{Simple as $}from"./radiobutton.stories-de05bc3c.js";import{Simple as B}from"./range.stories-da56a979.js";import{Simple as y}from"./tabs.stories-87b83aef.js";import{Simple as k}from"./textarea.stories-ced7062d.js";import{Simple as w,Inactive as C,Complete as O}from"./titlebar.stories-77fbe793.js";import{Simple as i}from"./tooltip.stories-f3da9132.js";import{Simple as T}from"./tree.stories-68c99e8b.js";import{FromURL as _}from"./video.stories-997f05db.js";import"./Write1-9175756e.js";import"./Modal-f30c9f3b.js";import"./Frame-8a2a37ef.js";import"./index-923230fa.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";import"./Checkbox-788d443e.js";import"./Dropdown-f17592c2.js";import"./Fieldset-29d17e63.js";import"./Input-30310200.js";import"./Input.css-f9ede444.js";/* empty css                              */import"./List-661317e0.js";import"./Range-1bc44aab.js";import"./Tooltip-61eba74b.js";var h="r95_na754y0";const de={title:"All"},r={render:()=>{const[s,l]=e.useState(!0),t=()=>l(!1);return e.createElement("div",{className:h},e.createElement("div",null,e.createElement(d,{onClick:()=>l(!0)}," Show Alert ")),s&&e.createElement(c,{title:"Windows Networking",type:"error",dragOptions:{defaultPosition:{x:130,y:130}},titleBarOptions:e.createElement(u.Close,{key:"close",onClick:t}),message:"The Windows password you typed is incorrect.",buttons:[{value:"OK",onClick:t}]}),e.createElement("br",null),e.createElement("div",null,e.createElement(E.render,null)),e.createElement("br",null),e.createElement(n.render,{...n.args}),e.createElement("br",null),e.createElement(S.render,null),e.createElement("br",null),e.createElement(b.render,null),e.createElement("br",null),e.createElement(v.render,null),e.createElement("br",null),e.createElement("div",null,e.createElement(f.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(k.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(A.render,null),e.createElement("br",null),e.createElement(g.render,null)),e.createElement("br",null),e.createElement(m.render,{...m.args}),e.createElement("br",null),e.createElement($.render,null),e.createElement("br",null),e.createElement(B.render,null),e.createElement("br",null),e.createElement(y.render,null),e.createElement("br",null),e.createElement(T.render,null),e.createElement("br",null),e.createElement(i.render,{...i.args}),e.createElement("br",null),e.createElement(_.render,null),e.createElement("br",null),e.createElement(w.render,null),e.createElement("br",null),e.createElement(C.render,null),e.createElement("br",null),e.createElement(O.render,null))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [openAlert, setOpenAlert] = React.useState(true);
    const closeAlert = () => setOpenAlert(false);
    return <div className={styles.list}>
        <div>
          <Button onClick={() => setOpenAlert(true)}> Show Alert </Button>
        </div>
        {openAlert && <Alert title="Windows Networking" type="error" dragOptions={{
        defaultPosition: {
          x: 130,
          y: 130
        }
      }} titleBarOptions={<TitleBar.Close key="close" onClick={closeAlert} />} message="The Windows password you typed is incorrect." buttons={[{
        value: 'OK',
        onClick: closeAlert
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ue=["All"];export{r as All,ue as __namedExportsOrder,de as default};
