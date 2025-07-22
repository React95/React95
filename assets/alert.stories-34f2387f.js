import{r as e}from"./index-9fa1aa67.js";import{A as l}from"./Alert-19e5bdc9.js";import{B as w}from"./Button-e77e23f5.js";import{C as A}from"./Checkbox-21fe22df.js";import{D as S}from"./Dropdown-3ad1daf5.js";import{T as C}from"./TitleBar-cd22ff01.js";import"./Write1-9f388b9d.js";/* empty css                             */import"./Modal-70b2fd91.js";import"./Frame-d1abb87e.js";import"./index-923230fa.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-4fd03fd3.js";import"./Button.css-afb77755.js";/* empty css                                *//* empty css                                */const _={title:"Alert",component:l,tags:["autodocs"]},t={render:()=>{const[c,r]=e.useState(!0),[o,m]=e.useState(!1),[p,g]=e.useState("error"),d=()=>r(!0),n=()=>r(!1),u=h=>{g(h.currentTarget.value)};return e.createElement(e.Fragment,null,e.createElement("div",{style:{marginBottom:10}},"Alert Type:",e.createElement(S,{options:["error","info","question","warning"],onChange:u}),e.createElement(A,{checked:o,onChange:()=>m(!o)},"sound")),e.createElement(w,{onClick:d},"Trigger Alert"),c&&e.createElement(l,{title:"Windows Networking",type:p,message:"The Windows password you typed is incorrect.",titleBarOptions:e.createElement(C.Close,{key:"close",onClick:n}),hasSound:o,buttons:[{value:"OK",onClick:n}]}))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1"}}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [showAlert, toggleShowAlert] = React.useState(true);
    const [withSound, toggleWithSound] = React.useState(false);
    const [type, setType] = React.useState<AlertType>('error');
    const handleOpenAlert = () => toggleShowAlert(true);
    const handleCloseAlert = () => toggleShowAlert(false);
    const onImageChange = (e: React.FormEvent<HTMLSelectElement>) => {
      setType(e.currentTarget.value as AlertType);
    };
    return <>
        <div style={{
        marginBottom: 10
      }}>
          Alert Type:
          <Dropdown options={['error', 'info', 'question', 'warning']} onChange={onImageChange} />
          <Checkbox checked={withSound} onChange={() => toggleWithSound(!withSound)}>
            sound
          </Checkbox>
        </div>
        <Button onClick={handleOpenAlert}>Trigger Alert</Button>
        {showAlert && <Alert title="Windows Networking" type={type} message="The Windows password you typed is incorrect." titleBarOptions={<TitleBar.Close key="close" onClick={handleCloseAlert} />} hasSound={withSound} buttons={[{
        value: 'OK',
        onClick: handleCloseAlert
      }]} />}
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1'
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const j=["Simple"];export{t as Simple,j as __namedExportsOrder,_ as default};
