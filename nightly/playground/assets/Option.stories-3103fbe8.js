import{x as r}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as s}from"./unsafe-html-0ddd83da.js";import{D as p}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const d={default:{control:{type:"text"}}},c={package:"@ui5/webcomponents"},l="ui5-option",B={title:"Main/Select/Option",component:"Option",argTypes:d,parameters:{docs:{page:p({...c,component:l,showDefaultStoryOnly:!0})}}},m=e=>r`<ui5-select>
   <ui5-option
   additional-text="${o(e.additionalText)}"
   ?disabled="${o(e.disabled)}"
   icon="${o(e.icon)}"
   ?selected="${o(e.selected)}"
   value="${o(e.value)}"
   >${s(e.default)}</ui5-option>
</ui5-select> `,t=m.bind({});t.tags=["_hidden_"];t.args={icon:"laptop",default:"Desktop",selected:!0};var i,n,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return html\`<ui5-select>
   <ui5-option
   additional-text="\${ifDefined(args.additionalText)}"
   ?disabled="\${ifDefined(args.disabled)}"
   icon="\${ifDefined(args.icon)}"
   ?selected="\${ifDefined(args.selected)}"
   value="\${ifDefined(args.value)}"
   >\${unsafeHTML(args.default)}</ui5-option>
</ui5-select> \`;
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const M=["Basic"];export{t as Basic,M as __namedExportsOrder,B as default};
