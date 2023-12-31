import{x as a}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{D as n}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const l={click:{description:"Fired, when the item is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"targetRef",type:"HTMLElement",description:"DOM ref of the clicked element"}]}}},m={package:"@ui5/webcomponents-fiori"},c="ui5-shellbar-item",k={title:"Fiori/ShellBar/ShellBarItem",component:"ShellBarItem",parameters:{docs:{page:n({...m,component:c,showDefaultStoryOnly:!0})}},argTypes:l},p=t=>a`<ui5-shellbar
    primary-title="Corporate Portal"
>
    <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
    <ui5-shellbar-item
        icon="${o(t.icon)}"
        text="${o(t.text)}"
        count="${o(t.count)}"
    ></ui5-shellbar-item>

</ui5-shellbar>`,e=p.bind({});e.tags=["_hidden_"];e.args={text:"2 notifications",icon:"bell",count:"2"};var r,i,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => html\`<ui5-shellbar
    primary-title="Corporate Portal"
>
    <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
    <ui5-shellbar-item
        icon="\${ifDefined(args.icon)}"
        text="\${ifDefined(args.text)}"
        count="\${ifDefined(args.count)}"
    ></ui5-shellbar-item>

</ui5-shellbar>\``,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const w=["Basic"];export{e as Basic,w as __namedExportsOrder,k as default};
