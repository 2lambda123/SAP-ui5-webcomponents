import{x as s}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as l}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const c={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},change:{description:"Fired when the selected option changes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedOption",type:"HTMLElement",description:"the selected option."}]}}},p={package:"@ui5/webcomponents",since:"1.17.0"},m="ui5-toolbar-select",I={title:"Main/Toolbar/Toolbar Select",component:"ToolbarSelect",argTypes:c,parameters:{docs:{page:l({...p,component:m,showDefaultStoryOnly:!0})}}},d=e=>s`
<ui5-toolbar align-content="Start">
    <ui5-toolbar-select
        accessible-name="${o(e.accessibleName)}"
        accessible-name-ref="${o(e.accessibleNameRef)}"
        ?disabled="${o(e.disabled)}"
        value-state="${o(e.valueState)}"
        width="${o(e.width)}"
    >
        ${n(e.default)}
    </ui5-toolbar-select>
</ui5-toolbar>`,t=d.bind({});t.tags=["_hidden_"];t.args={default:`<ui5-toolbar-select-option>Toolbar select option 1</ui5-toolbar-select-option>
<ui5-toolbar-select-option>Toolbar select option 2</ui5-toolbar-select-option>`};var a,i,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return html\`
<ui5-toolbar align-content="Start">
    <ui5-toolbar-select
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        ?disabled="\${ifDefined(args.disabled)}"
        value-state="\${ifDefined(args.valueState)}"
        width="\${ifDefined(args.width)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-toolbar-select>
</ui5-toolbar>\`;
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const M=["Basic"];export{t as Basic,M as __namedExportsOrder,I as default};
