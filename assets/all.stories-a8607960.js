import{r as e}from"./index-9fa1aa67.js";import{A as c}from"./Alert-d22fc9a6.js";import{B as d}from"./Button-e77e23f5.js";import{T as u}from"./TitleBar-2f5efff3.js";import{Simple as n}from"./avatar.stories-38091098.js";import{Simple as E}from"./button.stories-cf8e0b8e.js";import{All as S}from"./checkbox.stories-75a6eea2.js";import{Simple as b}from"./dropdown.stories-20c556e6.js";import{Simple as v}from"./fieldset.stories-71850c15.js";import{Simple as f}from"./input.stories-487daa61.js";import{WithIcons as A,Simple as g}from"./list.stories-14f11c6c.js";import{Simple as m}from"./progressbar.stories-5b5cca5f.js";import{Simple as $}from"./radiobutton.stories-be87fa6b.js";import{Simple as B}from"./range.stories-539cddc7.js";import{Simple as y}from"./tabs.stories-8afe1d59.js";import{Simple as k}from"./textarea.stories-ea10b69b.js";import{Simple as w,Inactive as C,Complete as O}from"./titlebar.stories-4b6ce9b5.js";import{Simple as i}from"./tooltip.stories-8b6b420a.js";import{Simple as T}from"./tree.stories-dfb2cda4.js";import{FromURL as _}from"./video.stories-3b552931.js";import"./Write1-9f388b9d.js";/* empty css                             */import"./Modal-aca7cb63.js";import"./Frame-d1abb87e.js";import"./index-923230fa.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-4fd03fd3.js";import"./Button.css-afb77755.js";/* empty css                              */import"./Checkbox-21fe22df.js";/* empty css                                */import"./Dropdown-3ad1daf5.js";/* empty css                                */import"./Fieldset-d5757425.js";import"./Input-05301331.js";import"./Input.css-f9ede444.js";/* empty css                              */import"./List-9538676d.js";/* empty css                            *//* empty css                                   *//* empty css                                   */import"./Range-b319d4d6.js";/* empty css                             */import"./Tabs-7bcab400.js";import"./TextArea-4342d364.js";import"./Tooltip-210aa1f5.js";/* empty css                               */import"./Tree-2769fcfa.js";/* empty css                             */var h="r95_na754y0";const Oe={title:"All"},r={render:()=>{const[s,t]=e.useState(!0),l=()=>t(!1);return e.createElement("div",{className:h},e.createElement("div",null,e.createElement(d,{onClick:()=>t(!0)}," Show Alert ")),s&&e.createElement(c,{title:"Windows Networking",type:"error",dragOptions:{defaultPosition:{x:130,y:130}},titleBarOptions:e.createElement(u.Close,{key:"close",onClick:l}),message:"The Windows password you typed is incorrect.",buttons:[{value:"OK",onClick:l}]}),e.createElement("br",null),e.createElement("div",null,e.createElement(E.render,null)),e.createElement("br",null),e.createElement(n.render,{...n.args}),e.createElement("br",null),e.createElement(S.render,null),e.createElement("br",null),e.createElement(b.render,null),e.createElement("br",null),e.createElement(v.render,null),e.createElement("br",null),e.createElement("div",null,e.createElement(f.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(k.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(A.render,null),e.createElement("br",null),e.createElement(g.render,null)),e.createElement("br",null),e.createElement(m.render,{...m.args}),e.createElement("br",null),e.createElement($.render,null),e.createElement("br",null),e.createElement(B.render,null),e.createElement("br",null),e.createElement(y.render,null),e.createElement("br",null),e.createElement(T.render,null),e.createElement("br",null),e.createElement(i.render,{...i.args}),e.createElement("br",null),e.createElement(_.render,null),e.createElement("br",null),e.createElement(w.render,null),e.createElement("br",null),e.createElement(C.render,null),e.createElement("br",null),e.createElement(O.render,null))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Te=["All"];export{r as All,Te as __namedExportsOrder,Oe as default};
