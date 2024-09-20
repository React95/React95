import{r as e}from"./index-9fa1aa67.js";import{A as i}from"./Alert-9693ee72.js";import{B as w}from"./Button-9c3a5d19.js";import{C as A}from"./Checkbox-788d443e.js";import{D as S}from"./Dropdown-404a55b1.js";import{T as C}from"./TitleBar-83565a4b.js";import"./Write1-c92272e3.js";import"./Modal-4e7d4003.js";import"./Frame-8a2a37ef.js";import"./index-923230fa.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";const R={title:"Alert",component:i,tags:["autodocs"]},t={render:()=>{const[c,r]=e.useState(!0),[o,m]=e.useState(!1),[p,g]=e.useState("error"),d=()=>r(!0),n=()=>r(!1),u=h=>{g(h.currentTarget.value)};return e.createElement(e.Fragment,null,e.createElement("div",{style:{marginBottom:10}},"Alert Type:",e.createElement(S,{options:["error","info","question","warning"],onChange:u}),e.createElement(A,{checked:o,onChange:()=>m(!o)},"sound")),e.createElement(w,{onClick:d},"Trigger Alert"),c&&e.createElement(i,{title:"Windows Networking",type:p,message:"The Windows password you typed is incorrect.",titleBarOptions:e.createElement(C.Close,{key:"close",onClick:n}),hasSound:o,buttons:[{value:"OK",onClick:n}]}))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1"}}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const I=["Simple"];export{t as Simple,I as __namedExportsOrder,R as default};
