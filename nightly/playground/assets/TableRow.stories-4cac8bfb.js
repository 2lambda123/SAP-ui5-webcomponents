import{x as r}from"./lit-element-c5a2b594.js";import{D as l}from"./docs-4672cf88.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as s}from"./unsafe-html-0ddd83da.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const c={type:{control:"select",options:["Active","Inactive"]},default:{control:{type:"text"}}},p={package:"@ui5/webcomponents"},m="ui5-table-row",k={title:"Main/Table/Table Row",component:"TableRow",parameters:{docs:{page:l({...p,component:m,showDefaultStoryOnly:!0})}},argTypes:c},u=t=>r`
<ui5-table>
    <ui5-table-column slot="columns">
        <span>Product</span>
    </ui5-table-column>
    <ui5-table-row
        ?navigated=${o(t.navigated)}
        ?selected=${o(t.selected)}
        type=${o(t.type)}
    >${s(t.default)}</ui5-table-row>
</ui5-table>
`,e=u.bind({});e.tags=["_hidden_"];e.args={default:`<ui5-table-cell>
    Notebook Basic 15
</ui5-table-cell>`};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => html\`
<ui5-table>
    <ui5-table-column slot="columns">
        <span>Product</span>
    </ui5-table-column>
    <ui5-table-row
        ?navigated=\${ifDefined(args.navigated)}
        ?selected=\${ifDefined(args.selected)}
        type=\${ifDefined(args.type)}
    >\${unsafeHTML(args.default)}</ui5-table-row>
</ui5-table>
\``,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const I=["Basic"];export{e as Basic,I as __namedExportsOrder,k as default};
