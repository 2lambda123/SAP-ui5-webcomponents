import{x as r}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o}from"./unsafe-html-0ddd83da.js";import{D as c}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const u={default:{control:{type:"text"}},type:{control:"select",options:["Active","Detail","Inactive","Navigation"]},deleteButton:{control:{type:"text"}}},l={package:"@ui5/webcomponents"},m="ui5-li-custom",C={title:"Main/List/Custom List Item",component:"CustomListItem",parameters:{docs:{page:c({...l,component:m,showDefaultStoryOnly:!0})}},argTypes:u},p=t=>r` <ui5-list>
    <ui5-li-custom
      accessible-name="${i(t.accessibleName)}"
      accessibility-attributes="${i(t.accessibilityAttributes)}"
      ?navigated="${i(t.navigated)}"
      type="${i(t.type)}"
      ?selected="${i(t.selected)}"
    >
      ${o(t.default)}
      ${o(t.deleteButton)}
    </ui5-li-custom>
  </ui5-list>`,e=p.bind({});e.tags=["_hidden_"];e.args={default:`<ui5-button>Click me</ui5-button>
  <ui5-link href="https://www.google.bg" target="_blank">UI5 link</ui5-link>
  <ui5-radio-button text="Option B" disabled="disabled"></ui5-radio-button>
  <ui5-button>Click me</ui5-button>`};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\` <ui5-list>
    <ui5-li-custom
      accessible-name="\${ifDefined(args.accessibleName)}"
      accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
      ?navigated="\${ifDefined(args.navigated)}"
      type="\${ifDefined(args.type)}"
      ?selected="\${ifDefined(args.selected)}"
    >
      \${unsafeHTML(args.default)}
      \${unsafeHTML(args.deleteButton)}
    </ui5-li-custom>
  </ui5-list>\`;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const T=["Basic"];export{e as Basic,T as __namedExportsOrder,C as default};
