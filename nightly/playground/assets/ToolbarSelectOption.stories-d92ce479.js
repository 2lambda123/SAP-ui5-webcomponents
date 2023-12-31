import{x as i}from"./lit-element-c5a2b594.js";import{l}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as s}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const c={default:{control:{type:"text"}}},p={package:"@ui5/webcomponents",since:"1.17.0"},m="ui5-toolbar-select-option",k={title:"Main/Toolbar/Toolbar Select Option",component:"ToolbarSelectOption",argTypes:c,parameters:{docs:{page:s({...p,component:m,showDefaultStoryOnly:!0})}}},u=t=>i`
    <ui5-toolbar align-content="Start">
    <ui5-toolbar-select>
        <ui5-toolbar-select-option ?selected=${l(t.selected)}>${n(t.default)}</ui5-toolbar-select-option>
    </ui5-toolbar-select>
</ui5-toolbar>`,o=u.bind({});o.tags=["_hidden_"];o.args={default:"Toolbar select option 1"};var e,r,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  return html\`
    <ui5-toolbar align-content="Start">
    <ui5-toolbar-select>
        <ui5-toolbar-select-option ?selected=\${ifDefined(args.selected)}>\${unsafeHTML(args.default)}</ui5-toolbar-select-option>
    </ui5-toolbar-select>
</ui5-toolbar>\`;
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const E=["Basic"];export{o as Basic,E as __namedExportsOrder,k as default};
