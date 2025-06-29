import{r as e}from"./index-9fa1aa67.js";import{A as c}from"./Alert-85643d52.js";import{B as d}from"./Button-e77e23f5.js";import{T as u}from"./TitleBar-cd22ff01.js";import{Simple as n}from"./avatar.stories-72bdbb34.js";import{Simple as E}from"./button.stories-cf8e0b8e.js";import{All as S}from"./checkbox.stories-ff08e309.js";import{Simple as b}from"./dropdown.stories-89ea207c.js";import{Simple as v}from"./fieldset.stories-680bf061.js";import{Simple as f}from"./input.stories-487daa61.js";import{WithIcons as A,Simple as g}from"./list.stories-995c486a.js";import{Simple as m}from"./progressbar.stories-cb194f65.js";import{Simple as $}from"./radiobutton.stories-9aacecfd.js";import{Simple as B}from"./range.stories-d3cb056b.js";import{Simple as y}from"./tabs.stories-91c6f260.js";import{Simple as k}from"./textarea.stories-ea10b69b.js";import{Simple as w,Inactive as C,Complete as O}from"./titlebar.stories-227fd293.js";import{Simple as i}from"./tooltip.stories-f3da9132.js";import{Simple as T}from"./tree.stories-9da06f06.js";import{FromURL as _}from"./video.stories-c2093c62.js";import"./Write1-d677703f.js";import"./Modal-859c0ccb.js";import"./Frame-d1abb87e.js";import"./index-923230fa.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-4fd03fd3.js";import"./Button.css-afb77755.js";import"./Checkbox-b7f7dbf3.js";import"./Dropdown-867543b0.js";import"./Fieldset-d5757425.js";import"./Input-05301331.js";import"./Input.css-f9ede444.js";/* empty css                              */import"./List-82813b00.js";import"./Range-bf94150a.js";import"./Tabs-7bcab400.js";import"./TextArea-4342d364.js";import"./Tooltip-61eba74b.js";import"./Tree-20d453f3.js";var h="r95_na754y0";const be={title:"All"},r={render:()=>{const[s,l]=e.useState(!0),t=()=>l(!1);return e.createElement("div",{className:h},e.createElement("div",null,e.createElement(d,{onClick:()=>l(!0)}," Show Alert ")),s&&e.createElement(c,{title:"Windows Networking",type:"error",dragOptions:{defaultPosition:{x:130,y:130}},titleBarOptions:e.createElement(u.Close,{key:"close",onClick:t}),message:"The Windows password you typed is incorrect.",buttons:[{value:"OK",onClick:t}]}),e.createElement("br",null),e.createElement("div",null,e.createElement(E.render,null)),e.createElement("br",null),e.createElement(n.render,{...n.args}),e.createElement("br",null),e.createElement(S.render,null),e.createElement("br",null),e.createElement(b.render,null),e.createElement("br",null),e.createElement(v.render,null),e.createElement("br",null),e.createElement("div",null,e.createElement(f.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(k.render,null)),e.createElement("br",null),e.createElement("br",null),e.createElement("div",null,e.createElement(A.render,null),e.createElement("br",null),e.createElement(g.render,null)),e.createElement("br",null),e.createElement(m.render,{...m.args}),e.createElement("br",null),e.createElement($.render,null),e.createElement("br",null),e.createElement(B.render,null),e.createElement("br",null),e.createElement(y.render,null),e.createElement("br",null),e.createElement(T.render,null),e.createElement("br",null),e.createElement(i.render,{...i.args}),e.createElement("br",null),e.createElement(_.render,null),e.createElement("br",null),e.createElement(w.render,null),e.createElement("br",null),e.createElement(C.render,null),e.createElement("br",null),e.createElement(O.render,null))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ve=["All"];export{r as All,ve as __namedExportsOrder,be as default};
