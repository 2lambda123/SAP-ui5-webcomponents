import{x as p}from"./lit-element-c5a2b594.js";import{D as l}from"./docs-4672cf88.js";import{l as e}from"./if-defined-c29cffe1.js";import{o as r}from"./unsafe-html-0ddd83da.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const m={minWidth:{control:{type:"number"}},default:{control:{type:"text"}}},s={package:"@ui5/webcomponents"},u="ui5-table-column",W={title:"Main/Table/Table Column",component:"TableColumn",parameters:{docs:{page:l({...s,component:u,showDefaultStoryOnly:!0})}},argTypes:m},c=t=>p`
<ui5-table>
    <ui5-table-column
        slot="columns"
        ?demand-popin="${e(t.demandPopin)}"
        min-width="${e(t.minWidth)}"
        popin-display="${e(t.popinDisplay)}"
        popin-text="${e(t.popinText)}"
    >
        ${r(t.default)}
    </ui5-table-column>
    <ui5-table-row>
        <ui5-table-cell>
            <span>Notebook Basic 15</span>
        </ui5-table-cell>
    </ui5-table-row>
</ui5-table>
`,o=c.bind({});o.tags=["_hidden_"];o.args={default:"<span>Product</span>"};var n,i,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
<ui5-table>
    <ui5-table-column
        slot="columns"
        ?demand-popin="\${ifDefined(args.demandPopin)}"
        min-width="\${ifDefined(args.minWidth)}"
        popin-display="\${ifDefined(args.popinDisplay)}"
        popin-text="\${ifDefined(args.popinText)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-table-column>
    <ui5-table-row>
        <ui5-table-cell>
            <span>Notebook Basic 15</span>
        </ui5-table-cell>
    </ui5-table-row>
</ui5-table>
\``,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const M=["Basic"];export{o as Basic,M as __namedExportsOrder,W as default};
