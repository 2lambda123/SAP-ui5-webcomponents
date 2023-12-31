import{x as a}from"./lit-element-c5a2b594.js";import{D as n}from"./docs-4672cf88.js";import{l as e}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const s={},c={package:"@ui5/webcomponents"},p="ui5-mcb-item",y={title:"Main/Multi-Combo Box/Multi-Combo Box Item",component:"MultiComboBoxItem",parameters:{docs:{page:n({...c,component:p,showDefaultStoryOnly:!0})}},argTypes:s},d=o=>a`
<ui5-multi-combobox>
    <ui5-mcb-item
        text="${e(o.text)}"
        additional-text="${e(o.additionalText)}"
        ?selected="${e(o.selected)}"
    ></ui5-mcb-item>
</ui5-multi-combobox>`,t=d.bind({});t.tags=["_hidden_"];t.args={text:"Argentina",selected:!0};var i,m,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox>
    <ui5-mcb-item
        text="\${ifDefined(args.text)}"
        additional-text="\${ifDefined(args.additionalText)}"
        ?selected="\${ifDefined(args.selected)}"
    ></ui5-mcb-item>
</ui5-multi-combobox>\``,...(r=(m=t.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const w=["Basic"];export{t as Basic,w as __namedExportsOrder,y as default};
