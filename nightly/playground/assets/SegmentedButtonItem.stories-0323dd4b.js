import{x as m}from"./lit-element-c5a2b594.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{l as t}from"./if-defined-c29cffe1.js";import{D as d}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const r={design:{control:"select",options:["Attention","Default","Emphasized","Negative","Positive","Transparent"]},type:{control:"select",options:["Button","Reset","Submit"]},default:{control:{type:"text"}}},u={package:"@ui5/webcomponents"},c="ui5-segmented-button-item",M={title:"Main/Segmented Button/Segmented Button Item",component:"SegmentedButtonItem",parameters:{docs:{page:d({...u,component:c,showDefaultStoryOnly:!0})}},argTypes:r},p=e=>m`
<ui5-segmented-button>
    <ui5-segmented-button-item>Map</ui5-segmented-button-item>
    <ui5-segmented-button-item
        design="${t(e.design)}"
        ?icon-end="${t(e.iconEnd)}"
        ?submits="${t(e.submits)}"
        ?pressed="${t(e.pressed)}"
        accessibility-attributes="${t(e.accessibilityAttributes)}"
        accessible-name="${t(e.accessibleName)}"
        accessible-name-ref="${t(e.accessibleNameRef)}"
        ?disabled="${t(e.disabled)}"
        icon="${t(e.icon)}"
        tooltip="${t(e.tooltip)}"
        type="${t(e.type)}"
    >${a(e.default)}</ui5-segmented-button-item>
    <ui5-segmented-button-item>Terrain</ui5-segmented-button-item>
</ui5-segmented-button>`,i=p.bind({});i.tags=["_hidden_"];i.args={default:"Current item",pressed:!0};var n,s,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
<ui5-segmented-button>
    <ui5-segmented-button-item>Map</ui5-segmented-button-item>
    <ui5-segmented-button-item
        design="\${ifDefined(args.design)}"
        ?icon-end="\${ifDefined(args.iconEnd)}"
        ?submits="\${ifDefined(args.submits)}"
        ?pressed="\${ifDefined(args.pressed)}"
        accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        ?disabled="\${ifDefined(args.disabled)}"
        icon="\${ifDefined(args.icon)}"
        tooltip="\${ifDefined(args.tooltip)}"
        type="\${ifDefined(args.type)}"
    >\${unsafeHTML(args.default)}</ui5-segmented-button-item>
    <ui5-segmented-button-item>Terrain</ui5-segmented-button-item>
</ui5-segmented-button>\``,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const A=["Basic"];export{i as Basic,A as __namedExportsOrder,M as default};
