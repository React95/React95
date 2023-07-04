import{s as u,t as o,c as W,a as e,j as r,F as B}from"./index-9af3809b.js";import{C as i}from"./Checkbox-d5d444c7.js";import{D as F}from"./Dropdown-75460a15.js";import{F as l}from"./Fieldset-aaed928f.js";import{I as R}from"./Input-31bbebc5.js";import{r as k,R as d}from"./index-ebeaab24.js";import{F as T}from"./Frame-b3eb3b92.js";import"./index.esm-061bac8e.js";const I=u.li`
  list-style: none;
  padding: 3 6;
  background-color: material;
  box-shadow: inset 0 1px 0 0 ${o("colors.borderLightest")},
    -2px 1px 0 -1px ${o("colors.material")},
    -3px 1px 0 -1px ${o("colors.borderLightest")},
    -2px 0 0 -1px ${o("colors.borderLightest")},
    2px 1px 0 -1px ${o("colors.borderDark")},
    2px 0 0 -1px ${o("colors.borderDarkest")},
    3px 1px 0 -1px ${o("colors.borderDarkest")};
  margin-right: 2;
  margin-left: 2;

  &:first-child {
    margin-left: 4;
  }

  ${({active:t})=>t&&W`
      margin-top: -2;
      margin-left: -2;
      margin-bottom: 1;

      &:first-child {
        margin-left: 2;
      }

      box-shadow: inset 0 1px 0 0 ${o("colors.borderLightest")},
        -2px 1px 0 -1px ${o("colors.material")},
        -0.5px 3px 0 0.5px ${o("colors.material")},
        -2px 2px 0 0 ${o("colors.borderLightest")},
        -2px 0 0 -1px ${o("colors.borderLightest")},
        1px 2px 0 0 ${o("colors.borderDark")},
        2px 0 0 -1px ${o("colors.borderDarkest")},
        2px 2px 0 0 ${o("colors.borderDarkest")};

      & + li {
        margin-left: 0;
        box-shadow: inset 0 1px 0 0 ${o("colors.borderLightest")},
          2px 1px 0 -1px ${o("colors.borderDark")},
          2px 0 0 -1px ${o("colors.borderDarkest")},
          3px 1px 0 -1px ${o("colors.borderDarkest")};
      }
    `}
`,h=k.forwardRef(({activeTab:t,title:n,...b},s)=>e(I,{...b,active:t===n,ref:s,children:n})),c=h;try{h.displayName="Tab",h.__docgenInfo={description:"",displayName:"Tab",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const q=u(T)`
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  box-shadow: none;
  background-color: unset;
`,m=u(T)`
  padding: 12;
  box-shadow: out;
`;m.displayName="NavContainer";const A=k.forwardRef(({children:t,style:n,defaultActiveTab:b,onChange:s,...C},L)=>{const[$]=d.Children.toArray(t),[x,N]=d.useState(b||$.props.title);return r(B,{children:[e(q,{style:n,...C,as:"ol",ref:L,children:d.Children.map(t,a=>{const{title:g,disabled:D}=a.props;return e(c,{...a.props,activeTab:x,onClick:_=>{D||(s&&s(g,_),N(g))}},g)})}),e(m,{style:n,children:d.Children.map(t,a=>a.props.title===x&&a.props.children)})]})}),v=A;try{m.displayName="NavContainer",m.__docgenInfo={description:"",displayName:"NavContainer",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},defaultActiveTab:{defaultValue:null,description:"",name:"defaultActiveTab",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((title: string, e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const Z={title:"Tabs, Tab",component:v,subcomponents:{Tab:c}},p={render:()=>r(v,{style:{width:350},defaultActiveTab:"Compatibility",children:[r(c,{title:"General",children:[r(l,{legend:"Logon validation",style:{marginBottom:"1em"},children:[e(i,{checked:!0,children:"Log on to Windows NT domain"}),e("br",{}),e("p",{style:{marginLeft:22,marginTop:4},children:"When you log on, your password will be verified in a Windows NT domain."}),e("p",{style:{marginBottom:4,marginLeft:22},children:"Windows NT domain:"}),e(R,{style:{width:180,marginLeft:22}})]}),r(l,{legend:"Network logon options",children:[e(i,{children:"Quick logon"}),e("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"Windows logs you onto the network, but network drives are not reconnected until you use them."}),e(i,{children:"Logon and restore network connections"}),e("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"When you log onto the network, Windows verifies that each network drive is ready to use."})]})]}),r(c,{title:"Compatibility",children:[e("p",{style:{marginTop:0,marginBottom:"1.6em"},children:"If you have problems with this program and it worked correctly on an earlier version of Windows, select the compatibility mode that matches that earlier version."}),r(l,{legend:"Compatibility mode",style:{marginBottom:"1.6em"},children:[e(i,{checked:!0,children:"Run this program in compatibility mode for:"}),e(F,{style:{width:200},options:["Windows 95"]})]}),r(l,{legend:"Display Settings",children:[e(i,{children:"Run in 256 colors"}),e(i,{children:"Run in 640 x 480 screen resolution"}),e(i,{children:"Disable visual themes"})]}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),r("p",{children:["Learn more about ",e("a",{href:"#",children:"program compatibility."})]})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16"}}};var y,f,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Tabs style={{
    width: 350
  }} defaultActiveTab="Compatibility">
      <Tab title="General">
        <Fieldset legend="Logon validation" style={{
        marginBottom: '1em'
      }}>
          <Checkbox checked>Log on to Windows NT domain</Checkbox>
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
          <Checkbox checked>
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
}`,...(w=(f=p.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const O=["Simple"];export{p as Simple,O as __namedExportsOrder,Z as default};
//# sourceMappingURL=tabs.stories-f220ae0e.js.map
