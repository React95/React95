import{r as e,R as r}from"./index-9fa1aa67.js";import{c as f}from"./index-923230fa.js";import{c as C}from"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import{F as p}from"./Frame-8a2a37ef.js";import{C as t}from"./Checkbox-b7f7dbf3.js";import{D as x}from"./Dropdown-f17592c2.js";import{F as m}from"./Fieldset-c8d13718.js";import{I as N}from"./Input-be03e24b.js";import"./Input.css-f9ede444.js";/* empty css                              */var L="r95_fyllcd0",W="r95_fyllcd1",B=C({defaultClassName:"r95_fyllcd2",variantClassNames:{active:{true:"r95_fyllcd3"}},defaultVariants:{},compoundVariants:[]});const l=e.forwardRef(({activeTab:a,title:s,...n},o)=>r.createElement(p,{...n,className:f(B({active:a===s}),n.className),ref:o,as:"li"},s));l.__docgenInfo={description:"",methods:[],displayName:"Tab"};const b=e.forwardRef(({children:a,defaultActiveTab:s,onChange:n,...o},w)=>{const[E]=e.Children.toArray(a),[g,k]=e.useState(s||E.props.title);return r.createElement(r.Fragment,null,r.createElement(p,{...o,className:f(L,o.className),as:"ol",ref:w},e.Children.map(a,i=>{const{title:d,disabled:T}=i.props;return r.createElement(l,{key:d,...i.props,activeTab:g,onClick:v=>{T||(n&&n(d,v),k(d))}})})),r.createElement(p,{className:W,width:o.width||o.w},e.Children.map(a,i=>i.props.title===g&&i.props.children)))});b.__docgenInfo={description:"",methods:[],displayName:"Tabs"};const G={title:"Tabs, Tab",component:b,tags:["autodocs"],subcomponents:{Tab:l}},c={render:()=>e.createElement(b,{width:"350px",defaultActiveTab:"Compatibility"},e.createElement(l,{title:"General"},e.createElement(m,{legend:"Logon validation",style:{marginBottom:"1em"}},e.createElement(t,{readOnly:!0,checked:!0},"Log on to Windows NT domain"),e.createElement("br",null),e.createElement("p",{style:{marginLeft:22,marginTop:4}},"When you log on, your password will be verified in a Windows NT domain."),e.createElement("p",{style:{marginBottom:4,marginLeft:22}},"Windows NT domain:"),e.createElement(N,{style:{width:180,marginLeft:22}})),e.createElement(m,{legend:"Network logon options"},e.createElement(t,null,"Quick logon"),e.createElement("p",{style:{marginBottom:4,marginLeft:22,marginTop:4}},"Windows logs you onto the network, but network drives are not reconnected until you use them."),e.createElement(t,null,"Logon and restore network connections"),e.createElement("p",{style:{marginBottom:4,marginLeft:22,marginTop:4}},"When you log onto the network, Windows verifies that each network drive is ready to use."))),e.createElement(l,{title:"Compatibility"},e.createElement("p",{style:{marginTop:0,marginBottom:"1.6em"}},"If you have problems with this program and it worked correctly on an earlier version of Windows, select the compatibility mode that matches that earlier version."),e.createElement(m,{legend:"Compatibility mode",style:{marginBottom:"1.6em"}},e.createElement(t,{readOnly:!0,checked:!0},"Run this program in compatibility mode for:"),e.createElement(x,{style:{width:200},options:["Windows 95"]})),e.createElement(m,{legend:"Display Settings"},e.createElement(t,null,"Run in 256 colors"),e.createElement(t,null,"Run in 640 x 480 screen resolution"),e.createElement(t,null,"Disable visual themes")),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("p",null,"Learn more about ",e.createElement("a",{href:"#"},"program compatibility.")))),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16"}}};var u,h,y;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const K=["Simple"];export{c as Simple,K as __namedExportsOrder,G as default};
