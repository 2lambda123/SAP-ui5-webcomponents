import{x as s}from"./lit-element-c5a2b594.js";import{D as p}from"./docs-4672cf88.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as m}from"./unsafe-html-0ddd83da.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const a={closeIcon:{control:{type:"text"}}},c={package:"@ui5/webcomponents",since:"1.0.0-rc.9"},l="ui5-token",O={title:"Main/Multi Input/Token",component:"Token",parameters:{docs:{page:p({...c,component:l,showDefaultStoryOnly:!0})}},argTypes:a},u=e=>s`
<ui5-multi-input>
    <ui5-token
        slot="tokens"
        text="${o(e.text)}"
        ?selected="${o(e.selected)}"
        ?readonly="${o(e.readonly)}"
    >
    ${m(e.closeIcon)}
    </ui5-token>
</ui5-multi-input>`,t=u.bind({});t.tags=["_hidden_"];t.args={text:"Argentina"};var n,i,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
<ui5-multi-input>
    <ui5-token
        slot="tokens"
        text="\${ifDefined(args.text)}"
        ?selected="\${ifDefined(args.selected)}"
        ?readonly="\${ifDefined(args.readonly)}"
    >
    \${unsafeHTML(args.closeIcon)}
    </ui5-token>
</ui5-multi-input>\``,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const S=["Basic"];export{t as Basic,S as __namedExportsOrder,O as default};
