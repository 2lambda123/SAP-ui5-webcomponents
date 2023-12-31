import{x as d}from"./lit-element-c5a2b594.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as s}from"./docs-4672cf88.js";import{l as t}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const c={additionalTextState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},toggle:{description:"Call this method to manually switch the <code>expanded</code> state of a tree item.",table:{category:"methods"}},type:{control:"select",options:["Active","Detail","Inactive","Navigation"]},deleteButton:{control:{type:"text"}}},m={package:"@ui5/webcomponents",since:"1.0.0-rc.8"},l="ui5-tree-item",w={title:"Main/Tree/Tree Item",component:"TreeItem",parameters:{docs:{page:s({...m,component:l,showDefaultStoryOnly:!0})}},argTypes:c},p=e=>d`<ui5-tree>
    <ui5-tree-item
        additional-text="${t(e.additionalText)}"
        additional-text-state="${t(e.additionalTextState)}"
        text="${t(e.text)}"
        accessible-name="${t(e.accessibleName)}"
        expanded="${t(e.expanded)}"
        has-children="${t(e.hasChildren)}"
        icon="${t(e.icon)}"
        indeterminate="${t(e.indeterminate)}"
        accessibility-attributes="${t(e.accessibilityAttributes)}"
        navigated="${t(e.navigated)}"
        type="${t(e.type)}"
        selected="${t(e.selected)}"
    >
        ${n(e.default)}
        ${n(e.deleteButton)}
    </ui5-tree-item>
</ui5-tree>`,i=p.bind({});i.tags=["_hidden_"];i.args={text:"Tree 1",expanded:!0,icon:"paste",default:`<ui5-tree-item text="Tree 1.1">
    <ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>
</ui5-tree-item>`};var a,o,r;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`args => html\`<ui5-tree>
    <ui5-tree-item
        additional-text="\${ifDefined(args.additionalText)}"
        additional-text-state="\${ifDefined(args.additionalTextState)}"
        text="\${ifDefined(args.text)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        expanded="\${ifDefined(args.expanded)}"
        has-children="\${ifDefined(args.hasChildren)}"
        icon="\${ifDefined(args.icon)}"
        indeterminate="\${ifDefined(args.indeterminate)}"
        accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
        navigated="\${ifDefined(args.navigated)}"
        type="\${ifDefined(args.type)}"
        selected="\${ifDefined(args.selected)}"
    >
        \${unsafeHTML(args.default)}
        \${unsafeHTML(args.deleteButton)}
    </ui5-tree-item>
</ui5-tree>\``,...(r=(o=i.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const A=["Basic"];export{i as Basic,A as __namedExportsOrder,w as default};
