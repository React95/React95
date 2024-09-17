import{r as e}from"./index-ff614419.js";import{A as l}from"./Alert-311e0893.js";import{B as w}from"./Button-2ad9a764.js";import{C as A}from"./Checkbox-831a77ad.js";import{D as S}from"./Dropdown-df80b455.js";import"./Write1-f730c4ea.js";import"./Modal-a4c7e6c0.js";import"./index-a1ecae5a.js";import"./index-0c06dfaf.js";import"./TitleBar-dbb9a1f2.js";import"./Frame-43ccd6dd.js";import"./index-a20f67f3.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";import"./ModalContext-84fff0fd.js";import"./help-4ccdb1ed.js";const K={title:"Alert",component:l,tags:["autodocs"]},t={render:()=>{const[c,r]=e.useState(!1),[o,m]=e.useState(!1),[p,g]=e.useState("error"),d=()=>r(!0),n=()=>r(!1),u=h=>{g(h.currentTarget.value)};return e.createElement(e.Fragment,null,e.createElement("div",{style:{marginBottom:10}},"Alert Type:",e.createElement(S,{options:["error","info","question","warning"],onChange:u}),e.createElement(A,{checked:o,onChange:()=>m(!o)},"sound")),e.createElement(w,{onClick:d},"Trigger Alert"),c&&e.createElement(l,{title:"Windows Networking",type:p,message:"The Windows password you typed is incorrect.",onClose:n,hasSound:o,buttons:[{value:"OK",onClick:n}]}))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1"}}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [showAlert, toggleShowAlert] = React.useState(false);
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
        {showAlert && <Alert title="Windows Networking" type={type} message="The Windows password you typed is incorrect." onClose={handleCloseAlert} hasSound={withSound} buttons={[{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const N=["Simple"];export{t as Simple,N as __namedExportsOrder,K as default};
