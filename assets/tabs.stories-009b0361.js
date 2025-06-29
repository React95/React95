import{r as e}from"./index-9fa1aa67.js";import{T as m,a as n}from"./Tabs-155c1dee.js";import{C as t}from"./Checkbox-b7f7dbf3.js";import{D as s}from"./Dropdown-f17592c2.js";import{F as o}from"./Fieldset-c8d13718.js";import{I as c}from"./Input-be03e24b.js";import"./index-923230fa.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Frame-8a2a37ef.js";import"./Input.css-f9ede444.js";/* empty css                              */const T={title:"Tabs, Tab",component:m,tags:["autodocs"],subcomponents:{Tab:n}},r={render:()=>e.createElement(m,{width:"350px",defaultActiveTab:"Compatibility"},e.createElement(n,{title:"General"},e.createElement(o,{legend:"Logon validation",style:{marginBottom:"1em"}},e.createElement(t,{readOnly:!0,checked:!0},"Log on to Windows NT domain"),e.createElement("br",null),e.createElement("p",{style:{marginLeft:22,marginTop:4}},"When you log on, your password will be verified in a Windows NT domain."),e.createElement("p",{style:{marginBottom:4,marginLeft:22}},"Windows NT domain:"),e.createElement(c,{style:{width:180,marginLeft:22}})),e.createElement(o,{legend:"Network logon options"},e.createElement(t,null,"Quick logon"),e.createElement("p",{style:{marginBottom:4,marginLeft:22,marginTop:4}},"Windows logs you onto the network, but network drives are not reconnected until you use them."),e.createElement(t,null,"Logon and restore network connections"),e.createElement("p",{style:{marginBottom:4,marginLeft:22,marginTop:4}},"When you log onto the network, Windows verifies that each network drive is ready to use."))),e.createElement(n,{title:"Compatibility"},e.createElement("p",{style:{marginTop:0,marginBottom:"1.6em"}},"If you have problems with this program and it worked correctly on an earlier version of Windows, select the compatibility mode that matches that earlier version."),e.createElement(o,{legend:"Compatibility mode",style:{marginBottom:"1.6em"}},e.createElement(t,{readOnly:!0,checked:!0},"Run this program in compatibility mode for:"),e.createElement(s,{style:{width:200},options:["Windows 95"]})),e.createElement(o,{legend:"Display Settings"},e.createElement(t,null,"Run in 256 colors"),e.createElement(t,null,"Run in 640 x 480 screen resolution"),e.createElement(t,null,"Disable visual themes")),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("p",null,"Learn more about ",e.createElement("a",{href:"#"},"program compatibility.")))),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16"}}};var i,a,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Tabs width="350px" defaultActiveTab="Compatibility">
      <Tab title="General">
        <Fieldset legend="Logon validation" style={{
        marginBottom: '1em'
      }}>
          <Checkbox readOnly checked>
            Log on to Windows NT domain
          </Checkbox>
          <br />
          <p style={{
          marginLeft: 22,
          marginTop: 4
        }}>
            When you log on, your password will be verified in a Windows NT
            domain.
          </p>
          <p style={{
          marginBottom: 4,
          marginLeft: 22
        }}>Windows NT domain:</p>
          <Input style={{
          width: 180,
          marginLeft: 22
        }} />
        </Fieldset>

        <Fieldset legend="Network logon options">
          <Checkbox>Quick logon</Checkbox>
          <p style={{
          marginBottom: 4,
          marginLeft: 22,
          marginTop: 4
        }}>
            Windows logs you onto the network, but network drives are not
            reconnected until you use them.
          </p>
          <Checkbox>Logon and restore network connections</Checkbox>
          <p style={{
          marginBottom: 4,
          marginLeft: 22,
          marginTop: 4
        }}>
            When you log onto the network, Windows verifies that each network
            drive is ready to use.
          </p>
        </Fieldset>
      </Tab>
      <Tab title="Compatibility">
        <p style={{
        marginTop: 0,
        marginBottom: '1.6em'
      }}>
          If you have problems with this program and it worked correctly on an
          earlier version of Windows, select the compatibility mode that matches
          that earlier version.
        </p>

        <Fieldset legend="Compatibility mode" style={{
        marginBottom: '1.6em'
      }}>
          <Checkbox readOnly checked>
            Run this program in compatibility mode for:
          </Checkbox>
          <Dropdown style={{
          width: 200
        }} options={['Windows 95']} />
        </Fieldset>

        <Fieldset legend="Display Settings">
          <Checkbox>Run in 256 colors</Checkbox>
          <Checkbox>Run in 640 x 480 screen resolution</Checkbox>
          <Checkbox>Disable visual themes</Checkbox>
        </Fieldset>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          Learn more about <a href="#">program compatibility.</a>
        </p>
      </Tab>
    </Tabs>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16'
    }
  }
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const x=["Simple"];export{r as Simple,x as __namedExportsOrder,T as default};
