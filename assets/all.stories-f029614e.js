import{r as e}from"./index-9fa1aa67.js";import{A as c}from"./Alert-7b6a8ddc.js";import{B as d}from"./Button-a9a82e5e.js";import{T as u}from"./TitleBar-c81c9dc6.js";import{Simple as n}from"./avatar.stories-473d5934.js";import{Simple as E}from"./button.stories-ff76dcc6.js";import{All as S}from"./checkbox.stories-8082a7fc.js";import{Simple as b}from"./dropdown.stories-79ac77e5.js";import{Simple as v}from"./fieldset.stories-e657c52f.js";import{Simple as f}from"./input.stories-6d61c32c.js";import{WithIcons as A,Simple as g}from"./list.stories-a4acca33.js";import{Simple as m}from"./progressbar.stories-fd542db5.js";import{Simple as $}from"./radiobutton.stories-0c50c9b5.js";import{Simple as B}from"./range.stories-db379635.js";import{Simple as y}from"./tabs.stories-bced4a05.js";import{Simple as k}from"./textarea.stories-bdcf279b.js";import{Simple as w,Inactive as C,Complete as O}from"./titlebar.stories-03960709.js";import{Simple as i}from"./tooltip.stories-8b6b420a.js";import{Simple as T}from"./tree.stories-806eaea8.js";import{FromURL as _}from"./video.stories-9d6fb064.js";import"./Write1-9f388b9d.js";/* empty css                             */import"./Modal-9150379d.js";import"./Frame-f7ea70b0.js";import"./index-923230fa.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-4fd03fd3.js";import"./Button.css-afb77755.js";/* empty css                              */import"./Checkbox-21fe22df.js";/* empty css                                */import"./Dropdown-e0248f77.js";/* empty css                                */import"./Fieldset-bce85bc6.js";import"./Input-29a5de4e.js";import"./Input.css-f9ede444.js";/* empty css                              */import"./List-af164e5a.js";/* empty css                            *//* empty css                                   *//* empty css                                   */import"./Range-d77a6a3b.js";/* empty css                             */import"./Tabs-98cb732b.js";import"./TextArea-6f90ef2d.js";import"./Tooltip-210aa1f5.js";/* empty css                               */import"./Tree-d27223f7.js";/* empty css                             */var h="r95_na754y0";const Oe={title:"All"},r={render:()=>{const[s,t]=e.useState(!0),l=()=>t(!1);return e.createElement("div",{className:h},e.createElement("div",null,e.createElement(d,{onClick:()=>t(!0)}," Show Alert ")),s&&e.createElement(c,{title:"Windows Networking",type:"error",dragOptions:{defaultPosition:{x:130,y:130}},titleBarOptions:e.createElement(u.Close,{key:"close",onClick:l}),message:"The Windows password you typed is incorrect.",buttons:[{value:"OK",onClick:l}]}),e.createElement("br",null),e.createElement("div",null,e.createElement(E.render,null)),e.createElement("br",null),e.createElement(n.render,{...n.args}),e.createElement("br",null),e.createElement(S.render,null),e.createElement("br",null),e.createElement(b.render,null),e.createElement("br",null),e.createElement(v.render,null),e.createElement("br",null),e.createElement("div",null,e.createElement(f.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(k.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(A.render,null),e.createElement("br",null),e.createElement(g.render,null)),e.createElement("br",null),e.createElement(m.render,{...m.args}),e.createElement("br",null),e.createElement($.render,null),e.createElement("br",null),e.createElement(B.render,null),e.createElement("br",null),e.createElement(y.render,null),e.createElement("br",null),e.createElement(T.render,null),e.createElement("br",null),e.createElement(i.render,{...i.args}),e.createElement("br",null),e.createElement(_.render,null),e.createElement("br",null),e.createElement(w.render,null),e.createElement("br",null),e.createElement(C.render,null),e.createElement("br",null),e.createElement(O.render,null))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
