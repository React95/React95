import{j as e}from"./jsx-runtime-e5910377.js";import{T as v,a as u}from"./Tabs-3b9a0032.js";import{B as S}from"./Button-ab59f6ae.js";import{F as p}from"./Fieldset-8c79e49f.js";import{F as t}from"./Frame-ad175eaa.js";import{I as k}from"./Input-c80768f7.js";import{T as n}from"./TextArea-4ef0a52d.js";import{T as j}from"./Tree-2d0f29f6.js";import{T as i}from"./TitleBar-41e014c0.js";import{c as r}from"./contract.css-24916a0d.js";import{c}from"./index-f58b9a9f.js";import{p as B,q as m,r as A,s as D,t as G,u as _}from"./Write1-822344b2.js";import"./Button.css-afb77755.js";/* empty css                             *//* empty css                             *//* empty css                              *//* empty css                                *//* empty css                              *//* empty css                                */import"./Input.css-f9ede444.js";/* empty css                            *//* empty css                                   *//* empty css                                   *//* empty css                             *//* empty css                               *//* empty css                               *//* empty css                             */import"./index-66a3a5c2.js";import"./index-626ba1ae.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";var x="r95_1lr1pka0";const de={title:"Contract"},W=[{id:0,label:"space",icon:e.jsx(B,{variant:"16x16_4"}),children:Object.entries(r.space).map(([a,o],s)=>({id:s,label:`${a}: ${o}`,icon:e.jsx(m,{variant:"16x16_4"}),onClick:()=>{c(o)}}))},{id:1,label:"colors",icon:e.jsx(A,{variant:"16x16_4"}),children:Object.entries(r.colors).map(([a,o],s)=>({id:s,label:`${a}: ${o}`,icon:e.jsx(m,{variant:"16x16_4"}),onClick:()=>{c(o)}}))},{id:2,label:"zIndices",icon:e.jsx(D,{variant:"16x16_4"}),children:Object.entries(r.zIndices).map(([a,o],s)=>({id:s,label:`${a}: ${o}`,icon:e.jsx(m,{variant:"16x16_4"}),onClick:()=>{c(o)}}))},{id:3,label:"shadows",icon:e.jsx(G,{variant:"16x16_4"}),children:Object.entries(r.shadows).map(([a,o],s)=>({id:s,label:`${a}: ${o}`,icon:e.jsx(m,{variant:"16x16_4"}),onClick:()=>{c(o)}}))}],l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"The contract theme provides a set of design tokens that can be used to style components consistently across your application."}),e.jsx("p",{children:"It includes tokens for spacing, colors, z-indices, and shadows."}),e.jsxs(t,{width:"470px",p:"$10",bgColor:"$material",boxShadow:"$out",display:"flex",flexDirection:"column",gap:"$8",children:[e.jsx(t,{as:"p",fontWeight:"bold",mt:"$0",children:"Contract Theme"}),e.jsx(k,{w:"240px",value:"import { contract } from '@react95/core';"}),e.jsx(t,{children:e.jsx(j,{data:W,root:{id:-1,label:"contract",icon:e.jsx(_,{variant:"16x16_4"}),onClick:()=>{c("import { contract } from '@react95/core';")}}})})]}),e.jsxs(t,{width:"470px",p:"$10",bgColor:"$material",boxShadow:"$out",display:"flex",flexDirection:"column",gap:"$8",mt:"$16",children:[e.jsx(t,{as:"p",fontWeight:"bold",mt:"$0",children:"How to use"}),e.jsx(p,{legend:"Code",children:e.jsx(n,{fontFamily:"monospace",whiteSpace:"pre-line",overflow:"auto",rows:10,w:"100%",value:`<div
  style={{
    color: contract.colors.materialTextInvert,
    backgroundColor: contract.colors.headerBackground,
    padding: contract.space[16],
    boxShadow: contract.shadows.in,
  }}
>
  This is a rendered example of the contract theme.
</div>`})}),e.jsx(p,{legend:"Rendered",mt:"$8",children:e.jsx("div",{style:{color:r.colors.materialTextInvert,backgroundColor:r.colors.headerBackground,padding:r.space[16],boxShadow:r.shadows.in},children:"This is a rendered example of the contract theme."})})]})]}),parameters:{design:{disable:!0}}},d={render:()=>e.jsxs(t,{p:"$16",display:"flex",flexDirection:"column",gap:"$16",maxWidth:"700px",children:[e.jsx(t,{as:"h2",mt:"$0",children:"Code Usage Examples"}),e.jsxs(t,{children:[e.jsx(t,{as:"h3",mb:"$8",children:"Using Tokens in Components"}),e.jsx(n,{fontFamily:"monospace",whiteSpace:"pre-line",overflow:"auto",rows:24,cols:70,value:`import { Frame } from '@react95/core';

// Basic Frame usage with tokens
<Frame
  p="$16"                    // padding: 16px
  m="$8"                     // margin: 8px
  bgColor="$material"        // background-color: theme material color
  boxShadow="$out"           // Windows 95 raised shadow
  borderRadius="$4"          // border-radius: 4px
>
  Content
</Frame>

// Advanced layout patterns
<Frame
  display="flex"
  flexDirection="column"
  gap="$12"                  // gap: 12px between children
  p="$20"                    // padding: 20px
  maxWidth="400px"
  bgColor="$inputBackground"
  boxShadow="$in"            // inset shadow
/>`})]})]})},h={render:()=>e.jsxs(t,{p:"$16",display:"flex",flexDirection:"column",gap:"$16",maxWidth:"800px",children:[e.jsx(t,{as:"h2",mt:"$0",children:"Creating Custom Themes"}),e.jsxs(t,{children:[e.jsx("p",{className:x,children:"You can create custom themes by extending existing ones or creating completely new token sets."}),e.jsx("p",{className:x,children:"This example shows how to extend the Counter-Strike theme with custom colors."})]}),e.jsxs(t,{children:[e.jsx(t,{as:"h3",mb:"$8",children:"Step 1: Create Theme Tokens File"}),e.jsx(n,{fontFamily:"monospace",whiteSpace:"pre-line",overflow:"auto",rows:25,w:"100%",value:`// custom-theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from '@react95/core';
import { tokens as counterStrike } from '@react95/core/themes/tokens/counterStrike';

// Option 1: Global theme (affects :root)
createGlobalTheme(':root', contract, {
  ...counterStrike,
  colors: {
    ...counterStrike.colors,
    material: 'thistle',           // Custom material color
    headerBackground: 'tomato',    // Custom header color
  },
});

// Option 2: Scoped theme (affects specific class)
createGlobalTheme('.my-custom-theme', contract, {
  ...counterStrike,
  colors: {
    ...counterStrike.colors,
    material: 'lightblue',
    headerBackground: 'navy',
    materialText: 'darkblue',
  },
});`})]}),e.jsxs(t,{children:[e.jsx(t,{as:"h3",mb:"$8",children:"Step 2: Import and Apply"}),e.jsx(n,{fontFamily:"monospace",whiteSpace:"pre-line",overflow:"auto",rows:20,w:"100%",value:`// App.tsx or your main component
import '@react95/core/GlobalStyle';
import './custom-theme.css';  // Import your custom theme

function App() {
  return (
    // Option 1: Global theme (no class needed)
    <Frame p="$16" bgColor="$material">
      <h1>My App with Custom Global Theme</h1>
    </Frame>

    // Option 2: Scoped theme (apply class)
    <div className="my-custom-theme">
      <Frame p="$16" bgColor="$material">
        <h1>My App with Scoped Custom Theme</h1>
      </Frame>
    </div>
  );
}`})]}),e.jsxs(t,{children:[e.jsx(t,{as:"h3",mb:"$8",children:"Live Demo: Custom Theme"}),e.jsxs(t,{as:"p",mb:"$8",children:["This demo uses the"," ",e.jsx("em",{children:e.jsx("code",{children:".contract-story"})})," ","class to apply a custom theme that extends Counter-Strike with purple material and red header colors."]}),e.jsxs(v,{width:"500px",defaultActiveTab:"Demo",children:[e.jsx(u,{title:"Custom Theme",children:e.jsx(p,{legend:"Code",children:e.jsx(n,{rows:15,width:"100%",fontFamily:"monospace",whiteSpace:"pre-line",overflow:"auto",style:{resize:"none"},value:`import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from '@react95/core';

import { tokens as cs16 } from '@react95/core/themes/tokens/counterStrike';

createGlobalTheme('.contract-story', contract, {
  ...cs16,
  colors: {
    ...cs16.colors,
    material: 'thistle',
    headerBackground: 'tomato',
  },
});
`})})}),e.jsx(u,{title:"Demo",children:e.jsx(t,{boxShadow:"$in",p:"60px",bgColor:"#5aa",children:e.jsx("div",{className:"contract-story",children:e.jsxs(t,{boxShadow:"$out",maxWidth:"400px",children:[e.jsx(i,{mb:0,title:"Custom Theme Window",children:e.jsxs(i.OptionsBox,{children:[e.jsx(i.Help,{}),e.jsx(i.Restore,{}),e.jsx(i.Close,{})]})}),e.jsxs(t,{p:"$16",bgColor:"$material",children:[e.jsxs(t,{as:"p",mt:"$0",mb:"$12",children:["Notice how the material color is now"," ",e.jsx("strong",{children:"thistle"})," and the header background is"," ",e.jsx("strong",{children:"tomato"})," instead of the original Counter-Strike colors."]}),e.jsxs(t,{display:"flex",gap:"$8",children:[e.jsx(S,{children:"Custom"}),e.jsx(k,{placeholder:"Counter-Strike input"})]})]})]})})})})]})]}),e.jsxs(t,{children:[e.jsx(t,{as:"h3",mb:"$8",children:"Advanced: Creating Your Own Token Set"}),e.jsx(n,{fontFamily:"monospace",whiteSpace:"pre-line",overflow:"auto",rows:20,w:"100%",value:`// my-theme-tokens.ts
import { theme, generateShadows } from '@react95/core/themes/baseTheme';

export const myCustomColors = {
  anchor: '#0066cc',
  anchorVisited: '#8000ff',
  borderDark: '#666666',
  borderDarkest: '#000000',
  borderLight: '#cccccc',
  borderLighter: '#e0e0e0',
  borderLightest: '#ffffff',
  canvas: '#1a1a1a',
  canvasText: '#ffffff',
  headerBackground: '#ff6b35',
  headerNotActiveBackground: '#8f8f8f',
  headerNotActiveText: '#666666',
  headerText: '#ffffff',
  material: '#f0f8ff',
  materialText: '#2c3e50',
  materialTextDisabled: '#95a5a6',
  materialTextDisabledShadow: '#ecf0f1',
  materialTextInvert: '#ffffff',
  progress: '#ff6b35',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#f8f9fa',
};

export const myCustomTokens = {
  ...theme,
  colors: myCustomColors,
  shadows: generateShadows(myCustomColors),
};

// my-theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from '@react95/core';
import { myCustomTokens } from './my-theme-tokens';

createGlobalTheme('.my-brand-theme', contract, myCustomTokens);`})]}),e.jsxs(t,{children:[e.jsx(t,{as:"h3",mb:"$8",children:"Theme Switching"}),e.jsx(n,{fontFamily:"monospace",whiteSpace:"pre-line",overflow:"auto",rows:15,w:"100%",value:`// Dynamic theme switching
import { useState } from 'react';
import '@react95/core/GlobalStyle';
import './theme-a.css';  // Creates .theme-a class
import './theme-b.css';  // Creates .theme-b class

function App() {
  const [currentTheme, setCurrentTheme] = useState('theme-a');

  return (
    <div className={currentTheme}>
      <Frame p="$16" bgColor="$material">
        <h1>Theme Switcher Demo</h1>

        <Frame display="flex" gap="$8" mb="$16">
          <Button
            onClick={() => setCurrentTheme('theme-a')}
          >
            Theme A
          </Button>
          <Button
          >
            Theme B
          </Button>
        </Frame>

        <Frame p="$12" bgColor="$headerBackground" color="$headerText">
          Current theme: {currentTheme}
        </Frame>
      </Frame>
    </div>
  );
}`})]}),e.jsxs(t,{children:[e.jsx(t,{as:"h3",mb:"$8",children:"Best Practices"}),e.jsx(t,{p:"$12",bgColor:"$material",boxShadow:"$in",children:e.jsxs(t,{as:"ul",pl:"$16",m:"$0",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Extend existing themes:"})," Start with a base theme like Counter-Strike or Win95"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use scoped classes:"})," Avoid global themes unless you want site-wide changes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maintain contrast:"})," Ensure text remains readable with custom colors"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test all states:"})," Check disabled, hover, and active states"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep shadows consistent:"})," Use"," ",e.jsx("code",{children:"generateShadows()"})," with your colors"]})]})})]})]}),parameters:{design:{disable:!0},controls:{disable:!0}}};var f,b,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <>
        <p>
          The contract theme provides a set of design tokens that can be used to
          style components consistently across your application.
        </p>
        <p>It includes tokens for spacing, colors, z-indices, and shadows.</p>
        <Frame width="470px" p="$10" bgColor="$material" boxShadow="$out" display="flex" flexDirection="column" gap="$8">
          <Frame as="p" fontWeight="bold" mt="$0">
            Contract Theme
          </Frame>
          <Input w="240px" value="import { contract } from '@react95/core';" />
          <Frame>
            <Tree data={treeNodes} root={{
            id: -1,
            label: 'contract',
            icon: <FilePen variant="16x16_4" />,
            onClick: () => {
              copy("import { contract } from '@react95/core';");
            }
          }} />
          </Frame>
        </Frame>

        <Frame width="470px" p="$10" bgColor="$material" boxShadow="$out" display="flex" flexDirection="column" gap="$8" mt="$16">
          <Frame as="p" fontWeight="bold" mt="$0">
            How to use
          </Frame>
          <Fieldset legend="Code">
            <TextArea fontFamily="monospace" whiteSpace="pre-line" overflow="auto" rows={10} w="100%" value={\`<div
  style={{
    color: contract.colors.materialTextInvert,
    backgroundColor: contract.colors.headerBackground,
    padding: contract.space[16],
    boxShadow: contract.shadows.in,
  }}
>
  This is a rendered example of the contract theme.
</div>\`} />
          </Fieldset>

          <Fieldset legend="Rendered" mt="$8">
            <div style={{
            color: contract.colors.materialTextInvert,
            backgroundColor: contract.colors.headerBackground,
            padding: contract.space[16],
            boxShadow: contract.shadows.in
          }}>
              This is a rendered example of the contract theme.
            </div>
          </Fieldset>
        </Frame>
      </>;
  },
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,T,F;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <Frame p="$16" display="flex" flexDirection="column" gap="$16" maxWidth="700px">
        <Frame as="h2" mt="$0">
          Code Usage Examples
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Using Tokens in Components
          </Frame>
          <TextArea fontFamily="monospace" whiteSpace="pre-line" overflow="auto" rows={24} cols={70} value={\`import { Frame } from '@react95/core';

// Basic Frame usage with tokens
<Frame
  p="$16"                    // padding: 16px
  m="$8"                     // margin: 8px
  bgColor="$material"        // background-color: theme material color
  boxShadow="$out"           // Windows 95 raised shadow
  borderRadius="$4"          // border-radius: 4px
>
  Content
</Frame>

// Advanced layout patterns
<Frame
  display="flex"
  flexDirection="column"
  gap="$12"                  // gap: 12px between children
  p="$20"                    // padding: 20px
  maxWidth="400px"
  bgColor="$inputBackground"
  boxShadow="$in"            // inset shadow
/>\`} />
        </Frame>
      </Frame>;
  }
}`,...(F=(T=d.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var $,C,y;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return <Frame p="$16" display="flex" flexDirection="column" gap="$16" maxWidth="800px">
        <Frame as="h2" mt="$0">
          Creating Custom Themes
        </Frame>

        <Frame>
          <p className={styles.paragraph}>
            You can create custom themes by extending existing ones or creating
            completely new token sets.
          </p>
          <p className={styles.paragraph}>
            This example shows how to extend the Counter-Strike theme with
            custom colors.
          </p>
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Step 1: Create Theme Tokens File
          </Frame>
          <TextArea fontFamily="monospace" whiteSpace="pre-line" overflow="auto" rows={25} w="100%" value={\`// custom-theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from '@react95/core';
import { tokens as counterStrike } from '@react95/core/themes/tokens/counterStrike';

// Option 1: Global theme (affects :root)
createGlobalTheme(':root', contract, {
  ...counterStrike,
  colors: {
    ...counterStrike.colors,
    material: 'thistle',           // Custom material color
    headerBackground: 'tomato',    // Custom header color
  },
});

// Option 2: Scoped theme (affects specific class)
createGlobalTheme('.my-custom-theme', contract, {
  ...counterStrike,
  colors: {
    ...counterStrike.colors,
    material: 'lightblue',
    headerBackground: 'navy',
    materialText: 'darkblue',
  },
});\`} />
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Step 2: Import and Apply
          </Frame>
          <TextArea fontFamily="monospace" whiteSpace="pre-line" overflow="auto" rows={20} w="100%" value={\`// App.tsx or your main component
import '@react95/core/GlobalStyle';
import './custom-theme.css';  // Import your custom theme

function App() {
  return (
    // Option 1: Global theme (no class needed)
    <Frame p="$16" bgColor="$material">
      <h1>My App with Custom Global Theme</h1>
    </Frame>

    // Option 2: Scoped theme (apply class)
    <div className="my-custom-theme">
      <Frame p="$16" bgColor="$material">
        <h1>My App with Scoped Custom Theme</h1>
      </Frame>
    </div>
  );
}\`} />
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Live Demo: Custom Theme
          </Frame>
          <Frame as="p" mb="$8">
            This demo uses the{' '}
            <em>
              <code>.contract-story</code>
            </em>{' '}
            class to apply a custom theme that extends Counter-Strike with
            purple material and red header colors.
          </Frame>

          {/* Demo with custom theme applied */}
          <Tabs width="500px" defaultActiveTab="Demo">
            <Tab title="Custom Theme">
              <Fieldset legend="Code">
                <TextArea rows={15} width={'100%'} fontFamily="monospace" whiteSpace="pre-line" overflow="auto" style={{
                resize: 'none'
              }} value={\`import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from '@react95/core';

import { tokens as cs16 } from '@react95/core/themes/tokens/counterStrike';

createGlobalTheme('.contract-story', contract, {
  ...cs16,
  colors: {
    ...cs16.colors,
    material: 'thistle',
    headerBackground: 'tomato',
  },
});
\`} />
              </Fieldset>
            </Tab>
            <Tab title="Demo">
              <Frame boxShadow="$in" p="60px" bgColor="#5aa">
                <div className="contract-story">
                  <Frame boxShadow="$out" maxWidth="400px">
                    <TitleBar mb={0} title="Custom Theme Window">
                      <TitleBar.OptionsBox>
                        <TitleBar.Help />
                        <TitleBar.Restore />
                        <TitleBar.Close />
                      </TitleBar.OptionsBox>
                    </TitleBar>

                    <Frame p="$16" bgColor="$material">
                      <Frame as="p" mt="$0" mb="$12">
                        Notice how the material color is now{' '}
                        <strong>thistle</strong> and the header background is{' '}
                        <strong>tomato</strong> instead of the original
                        Counter-Strike colors.
                      </Frame>

                      <Frame display="flex" gap="$8">
                        <Button>Custom</Button>
                        <Input placeholder="Counter-Strike input" />
                      </Frame>
                    </Frame>
                  </Frame>
                </div>
              </Frame>
            </Tab>
          </Tabs>
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Advanced: Creating Your Own Token Set
          </Frame>
          <TextArea fontFamily="monospace" whiteSpace="pre-line" overflow="auto" rows={20} w="100%" value={\`// my-theme-tokens.ts
import { theme, generateShadows } from '@react95/core/themes/baseTheme';

export const myCustomColors = {
  anchor: '#0066cc',
  anchorVisited: '#8000ff',
  borderDark: '#666666',
  borderDarkest: '#000000',
  borderLight: '#cccccc',
  borderLighter: '#e0e0e0',
  borderLightest: '#ffffff',
  canvas: '#1a1a1a',
  canvasText: '#ffffff',
  headerBackground: '#ff6b35',
  headerNotActiveBackground: '#8f8f8f',
  headerNotActiveText: '#666666',
  headerText: '#ffffff',
  material: '#f0f8ff',
  materialText: '#2c3e50',
  materialTextDisabled: '#95a5a6',
  materialTextDisabledShadow: '#ecf0f1',
  materialTextInvert: '#ffffff',
  progress: '#ff6b35',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#f8f9fa',
};

export const myCustomTokens = {
  ...theme,
  colors: myCustomColors,
  shadows: generateShadows(myCustomColors),
};

// my-theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from '@react95/core';
import { myCustomTokens } from './my-theme-tokens';

createGlobalTheme('.my-brand-theme', contract, myCustomTokens);\`} />
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Theme Switching
          </Frame>
          <TextArea fontFamily="monospace" whiteSpace="pre-line" overflow="auto" rows={15} w="100%" value={\`// Dynamic theme switching
import { useState } from 'react';
import '@react95/core/GlobalStyle';
import './theme-a.css';  // Creates .theme-a class
import './theme-b.css';  // Creates .theme-b class

function App() {
  const [currentTheme, setCurrentTheme] = useState('theme-a');

  return (
    <div className={currentTheme}>
      <Frame p="$16" bgColor="$material">
        <h1>Theme Switcher Demo</h1>

        <Frame display="flex" gap="$8" mb="$16">
          <Button
            onClick={() => setCurrentTheme('theme-a')}
          >
            Theme A
          </Button>
          <Button
          >
            Theme B
          </Button>
        </Frame>

        <Frame p="$12" bgColor="$headerBackground" color="$headerText">
          Current theme: {currentTheme}
        </Frame>
      </Frame>
    </div>
  );
}\`} />
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Best Practices
          </Frame>
          <Frame p="$12" bgColor="$material" boxShadow="$in">
            <Frame as="ul" pl="$16" m="$0">
              <li>
                <strong>Extend existing themes:</strong> Start with a base theme
                like Counter-Strike or Win95
              </li>
              <li>
                <strong>Use scoped classes:</strong> Avoid global themes unless
                you want site-wide changes
              </li>
              <li>
                <strong>Maintain contrast:</strong> Ensure text remains readable
                with custom colors
              </li>
              <li>
                <strong>Test all states:</strong> Check disabled, hover, and
                active states
              </li>
              <li>
                <strong>Keep shadows consistent:</strong> Use{' '}
                <code>generateShadows()</code> with your colors
              </li>
            </Frame>
          </Frame>
        </Frame>
      </Frame>;
  },
  parameters: {
    design: {
      disable: true
    },
    controls: {
      disable: true
    }
  }
}`,...(y=(C=h.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const he=["Theme","CodeExamples","CustomTheme"];export{d as CodeExamples,h as CustomTheme,l as Theme,he as __namedExportsOrder,de as default};
