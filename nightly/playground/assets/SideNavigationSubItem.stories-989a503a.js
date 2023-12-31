import{x as r}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{D as s}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const d={},m={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"},c="ui5-side-navigation-sub-item",E={title:"Fiori/Side Navigation/Side Navigation Sub Item",component:"SideNavigationSubItem",parameters:{docs:{page:s({...m,component:c,showDefaultStoryOnly:!0})}},argTypes:d},p=e=>r`
    <ui5-side-navigation>
    <ui5-side-navigation-item text="Events" icon="calendar" expanded>
        <ui5-side-navigation-sub-item
            text="${t(e.text)}"
            icon="${t(e.icon)}"
            href="${t(e.href)}"
            ?selected="${t(e.selected)}"
            target="${t(e.target)}"
        ></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
</ui5-side-navigation>`,i=p.bind({});i.tags=["_hidden_"];i.args={text:"Local",selected:!0};var n,o,a;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return html\`
    <ui5-side-navigation>
    <ui5-side-navigation-item text="Events" icon="calendar" expanded>
        <ui5-side-navigation-sub-item
            text="\${ifDefined(args.text)}"
            icon="\${ifDefined(args.icon)}"
            href="\${ifDefined(args.href)}"
            ?selected="\${ifDefined(args.selected)}"
            target="\${ifDefined(args.target)}"
        ></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
</ui5-side-navigation>\`;
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const w=["Basic"];export{i as Basic,w as __namedExportsOrder,E as default};
