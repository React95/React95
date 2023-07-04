import{s as r,c as m,t as w,j as p,a as e,b as R}from"./index-9af3809b.js";import{r as h}from"./index-ebeaab24.js";const k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AQKBR8ecTMGkAAAAG5JREFUKM+FUNsRwDAIwlz3ymqOZiajP8mdIablSznAh0Hg7pTecm8qdHcNOI1TTABUZB4Anpw2OSg3xjh2vqYuRARJsmmimZX1wmH4Q6t2/rrpeke1/zYhIvZvTChnaTwrQe99PcA2gxrTpzbNC7UzjLtY6hmzAAAAAElFTkSuQmCC",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AQKBSIvSgVOFAAAAI1JREFUKM+FkcEVxCAIRIeshdgJlEZp0IlWwl6WPCW+7D/pOAOoZGZYMbNY9yJC675Vo6puBVQ11mBLcxprRxEBAEREuDu1Mg4qVfv03kNVtwMzwxgDvfdbm3OCmfV6q3jq+Aj84xHIS9Z1QmZ2v9JphISZ4e50vc17gtLIzAEA7v6o/NNp++kUMlj15Aun6lMg0OwfdAAAAABJRU5ErkJggg==",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAQAAAD8fJRsAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfgBAoFICGfiwGRAAAAVElEQVQY05WOwQ2AMAwDL4i9WK2jlcmOR5NWquCBP45sx0mQaCbH4CixVWCZTcTCmOEcOasRuWe3O7p68IH/xsuVruZGr09gTgGgS7iAiDTKJEWAB4ZgRt37Ih39AAAAAElFTkSuQmCC",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAQAAAD8fJRsAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfgBAoFIxjro9paAAAAVklEQVQY05WOQRKAMAgDNx3/pU/jafVleGiw1hkP5hLIwoCwIu0argqjBgwFkQF0gwNIpG20Fc9KkfGISzuND/0H/qq/Lkht/WnZgEw472mQDAriEOACnWkWUice+m0AAAAASUVORK5CYII=",d=r.span`
  width: 12px;
  height: 12px;

  content: '';
  display: inline-block;

  position: absolute;
  left: 0;
  top: 0;

  background-image: url(${b});
`,s=r.span`
  padding: 1;
  user-select: none;

  position: absolute;
  top: 0;
  left: 18px;
`,f=r.input.attrs({type:"radio"})`
  margin: 0;
  opacity: 0;

  &:focus ~ ${s}, &:active + ${s} {
    border-width: 1;
    border-style: dotted;
    padding: 0;
  }

  &:checked + ${d} {
    background-image: url(${k});
  }

  &:disabled + ${d} {
    background-image: url(${C});
  }

  &:checked:disabled + ${d} {
    background-image: url(${B});
  }
`,E=r.label`
  position: relative;
  margin-bottom: 10;
  display: block;

  ${({disabled:A})=>A&&m`
      color: materialTextDisabled;
      text-shadow: 0.5px 0.5px ${w("colors.materialTextDisabledShadow")};
    `}
`,i=h.forwardRef(({children:A,disabled:a,...o},c)=>p(E,{disabled:a,children:[e(f,{disabled:a,...o,ref:c}),e(d,{}),e(s,{children:A})]}));i.defaultProps={children:"",disabled:!1};const t=i;try{i.displayName="RadioButton",i.__docgenInfo={description:"",displayName:"RadioButton",props:{}}}catch{}const O=R.div`
  display: flex;
  flex-direction: column;
`,v={title:"RadioButton",component:t,tags:["autodocs"]},n={render:()=>{const[A,a]=h.useState("one"),o=c=>a(c.target.value);return p(O,{children:[e(t,{name:"working",value:"one",checked:A==="one",onChange:o,children:"Working"}),e(t,{name:"working",value:"two",checked:A==="two",onChange:o,children:"Working"}),e(t,{readOnly:!0,checked:!0,value:"three",children:"Checked"}),e(t,{readOnly:!0,disabled:!0,value:"four",children:"Disabled"}),e(t,{readOnly:!0,checked:!0,disabled:!0,value:"five",children:"Checked & Disabled"})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14"}}};var l,g,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = React.useState('one');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedOption(e.target.value);
    return <RadioButtonList>
        <RadioButton name="working" value="one" checked={selectedOption === 'one'} onChange={handleChange}>
          Working
        </RadioButton>
        <RadioButton name="working" value="two" checked={selectedOption === 'two'} onChange={handleChange}>
          Working
        </RadioButton>
        <RadioButton readOnly checked value="three">
          Checked
        </RadioButton>
        <RadioButton readOnly disabled value="four">
          Disabled
        </RadioButton>
        <RadioButton readOnly checked disabled value="five">
          Checked & Disabled
        </RadioButton>
      </RadioButtonList>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14'
    }
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const D=["Simple"];export{n as Simple,D as __namedExportsOrder,v as default};
//# sourceMappingURL=radiobutton.stories-eb2ce1c2.js.map
