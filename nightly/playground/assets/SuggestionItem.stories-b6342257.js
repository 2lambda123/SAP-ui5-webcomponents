import{x as a}from"./lit-element-c5a2b594.js";import{D as r}from"./docs-4672cf88.js";import{l as i}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const p={additionalTextState:{control:"select",options:["Error","Information","None","Success","Warning"]},type:{control:"select",options:["Active","Detail","Inactive","Navigation"]}},d={package:"@ui5/webcomponents"},m="ui5-suggestion-item",v={title:"Main/Input/Suggestion Item",component:"SuggestionItem",parameters:{docs:{page:r({...d,component:m,showDefaultStoryOnly:!0})}},argTypes:p},c=t=>a`
<ui5-input show-suggestions>
    <ui5-suggestion-item
    additional-text="${i(t.additionalText)}"
    additional-text-state="${i(t.additionalTextState)}"
    description="${i(t.description)}"
    icon="${i(t.icon)}"
    ?icon-end="${i(t.iconEnd)}"
    image="${i(t.image)}"
    text="${i(t.text)}"
    type="${i(t.type)}"
    ></ui5-suggestion-item>
</ui5-input>`,e=c.bind({});e.tags=["_hidden_"];e.args={text:"Germany"};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
<ui5-input show-suggestions>
    <ui5-suggestion-item
    additional-text="\${ifDefined(args.additionalText)}"
    additional-text-state="\${ifDefined(args.additionalTextState)}"
    description="\${ifDefined(args.description)}"
    icon="\${ifDefined(args.icon)}"
    ?icon-end="\${ifDefined(args.iconEnd)}"
    image="\${ifDefined(args.image)}"
    text="\${ifDefined(args.text)}"
    type="\${ifDefined(args.type)}"
    ></ui5-suggestion-item>
</ui5-input>\``,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const b=["Basic"];export{e as Basic,b as __namedExportsOrder,v as default};
