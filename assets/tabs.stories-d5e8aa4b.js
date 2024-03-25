import{s as u,t as n,c as W,a as e,j as t,F as B}from"./index-0559674c.js";import{C as r}from"./Checkbox-a6eb1760.js";import{D as F}from"./Dropdown-4d9e4f7e.js";import{F as l}from"./Fieldset-12d110ba.js";import{I as R}from"./Input-d7429e43.js";import{r as k,R as d}from"./index-1b03fe98.js";import{F as T}from"./Frame-f3688d20.js";import"./index.esm-544253ed.js";import"./Cursor-2670fd72.js";const I=u.li`
  list-style: none;
  padding: 3 6;
  background-color: material;
  box-shadow: inset 0 1px 0 0 ${n("colors.borderLightest")},
    -2px 1px 0 -1px ${n("colors.material")},
    -3px 1px 0 -1px ${n("colors.borderLightest")},
    -2px 0 0 -1px ${n("colors.borderLightest")},
    2px 1px 0 -1px ${n("colors.borderDark")},
    2px 0 0 -1px ${n("colors.borderDarkest")},
    3px 1px 0 -1px ${n("colors.borderDarkest")};
  margin-right: 2;
  margin-left: 2;

  &:first-child {
    margin-left: 4;
  }

  ${({active:o})=>o&&W`
      margin-top: -2;
      margin-left: -2;
      margin-bottom: 1;

      &:first-child {
        margin-left: 2;
      }

      box-shadow: inset 0 1px 0 0 ${n("colors.borderLightest")},
        -2px 1px 0 -1px ${n("colors.material")},
        -0.5px 3px 0 0.5px ${n("colors.material")},
        -2px 2px 0 0 ${n("colors.borderLightest")},
        -2px 0 0 -1px ${n("colors.borderLightest")},
        1px 2px 0 0 ${n("colors.borderDark")},
        2px 0 0 -1px ${n("colors.borderDarkest")},
        2px 2px 0 0 ${n("colors.borderDarkest")};

      & + li {
        margin-left: 0;
        box-shadow: inset 0 1px 0 0 ${n("colors.borderLightest")},
          2px 1px 0 -1px ${n("colors.borderDark")},
          2px 0 0 -1px ${n("colors.borderDarkest")},
          3px 1px 0 -1px ${n("colors.borderDarkest")};
      }
    `}
`,h=k.forwardRef(({activeTab:o,title:i,...b},s)=>e(I,{...b,active:o===i,ref:s,children:i})),c=h;try{h.displayName="Tab",h.__docgenInfo={description:"",displayName:"Tab",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const q=u(T)`
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  box-shadow: none;
  background-color: unset;
`,m=u(T)`
  padding: 12;
  box-shadow: out;
`;m.displayName="NavContainer";const A=k.forwardRef(({children:o,style:i,defaultActiveTab:b,onChange:s,...C},L)=>{const[$]=d.Children.toArray(o),[x,N]=d.useState(b||$.props.title);return t(B,{children:[e(q,{style:i,...C,as:"ol",ref:L,children:d.Children.map(o,a=>{const{title:g,disabled:D}=a.props;return e(c,{...a.props,activeTab:x,onClick:_=>{D||(s&&s(g,_),N(g))}},g)})}),e(m,{style:i,children:d.Children.map(o,a=>a.props.title===x&&a.props.children)})]})}),v=A;try{m.displayName="NavContainer",m.__docgenInfo={description:"",displayName:"NavContainer",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},defaultActiveTab:{defaultValue:null,description:"",name:"defaultActiveTab",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((title: string, e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const O={title:"Tabs, Tab",component:v,subcomponents:{Tab:c}},p={render:()=>t(v,{style:{width:350},defaultActiveTab:"Compatibility",children:[t(c,{title:"General",children:[t(l,{legend:"Logon validation",style:{marginBottom:"1em"},children:[e(r,{checked:!0,children:"Log on to Windows NT domain"}),e("br",{}),e("p",{style:{marginLeft:22,marginTop:4},children:"When you log on, your password will be verified in a Windows NT domain."}),e("p",{style:{marginBottom:4,marginLeft:22},children:"Windows NT domain:"}),e(R,{style:{width:180,marginLeft:22}})]}),t(l,{legend:"Network logon options",children:[e(r,{children:"Quick logon"}),e("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"Windows logs you onto the network, but network drives are not reconnected until you use them."}),e(r,{children:"Logon and restore network connections"}),e("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"When you log onto the network, Windows verifies that each network drive is ready to use."})]})]}),t(c,{title:"Compatibility",children:[e("p",{style:{marginTop:0,marginBottom:"1.6em"},children:"If you have problems with this program and it worked correctly on an earlier version of Windows, select the compatibility mode that matches that earlier version."}),t(l,{legend:"Compatibility mode",style:{marginBottom:"1.6em"},children:[e(r,{checked:!0,children:"Run this program in compatibility mode for:"}),e(F,{style:{width:200},options:["Windows 95"]})]}),t(l,{legend:"Display Settings",children:[e(r,{children:"Run in 256 colors"}),e(r,{children:"Run in 640 x 480 screen resolution"}),e(r,{children:"Disable visual themes"})]}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),t("p",{children:["Learn more about ",e("a",{href:"#",children:"program compatibility."})]})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16"}}};var y,f,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(f=p.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const P=["Simple"];export{p as Simple,P as __namedExportsOrder,O as default};
