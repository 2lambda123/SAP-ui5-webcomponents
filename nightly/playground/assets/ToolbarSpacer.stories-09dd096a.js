import{x as i}from"./lit-element-c5a2b594.js";import{l as n}from"./if-defined-c29cffe1.js";import{D as p}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const l={overflowPriority:{control:"select",options:["AlwaysOverflow","Default","NeverOverflow"]}},s={package:"@ui5/webcomponents",since:"1.17.0"},u="ui5-toolbar-spacer",B={title:"Main/Toolbar/Toolbar Spacer",component:"ToolbarSpacer",argTypes:l,parameters:{docs:{page:p({...s,component:u,showDefaultStoryOnly:!0})}}},b=e=>i`
<ui5-toolbar align-content="Start">
    <ui5-toolbar-button text="Simple button 1"></ui5-toolbar-button>
    <ui5-toolbar-spacer width="${n(e.width)}"></ui5-toolbar-spacer>
    <ui5-toolbar-button text="Simple button 2"></ui5-toolbar-button>
</ui5-toolbar>`,o=b.bind({});o.tags=["_hidden_"];o.args={width:"300px"};var t,r,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return html\`
<ui5-toolbar align-content="Start">
    <ui5-toolbar-button text="Simple button 1"></ui5-toolbar-button>
    <ui5-toolbar-spacer width="\${ifDefined(args.width)}"></ui5-toolbar-spacer>
    <ui5-toolbar-button text="Simple button 2"></ui5-toolbar-button>
</ui5-toolbar>\`;
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const P=["Basic"];export{o as Basic,P as __namedExportsOrder,B as default};
