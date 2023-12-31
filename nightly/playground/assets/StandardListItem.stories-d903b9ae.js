import{x as d}from"./lit-element-c5a2b594.js";import{l as e}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as r}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const c={additionalTextState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},imageContent:{control:{type:"text"}},type:{control:"select",options:["Active","Detail","Inactive","Navigation"]},deleteButton:{control:{type:"text"}}},l={package:"@ui5/webcomponents"},p="ui5-li",E={title:"Main/List/Standard List Item",component:"StandardListItem",parameters:{docs:{page:r({...l,component:p,showDefaultStoryOnly:!0})}},argTypes:c},m=t=>d` <ui5-list>
  <ui5-li
    icon="${e(t.icon)}"
    description="${e(t.description)}"
    additional-text="${e(t.additionalText)}"
    additional-text-state="${e(t.additionalTextState)}"
    accessible-name="${e(t.accessibleName)}"
    ?icon-end="${e(t.iconEnd)}"
    image="${e(t.image)}"
    accessibility-attributes="${e(t.accessibilityAttributes)}"
    ?navigated="${e(t.navigated)}"
    type="${e(t.type)}"
    ?selected="${e(t.selected)}"
  >
    ${n(t.default)}
    ${n(t.imageContent)}
    ${n(t.deleteButton)}
  </ui5-li>
  </ui5-list>`,i=m.bind({});i.tags=["_hidden_"];i.args={default:"Pineapple",icon:"nutrition-activity",description:"Tropical plant with an edible fruit",additionalText:"In-stock",additionalTextState:"Success"};var a,o,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return html\` <ui5-list>
  <ui5-li
    icon="\${ifDefined(args.icon)}"
    description="\${ifDefined(args.description)}"
    additional-text="\${ifDefined(args.additionalText)}"
    additional-text-state="\${ifDefined(args.additionalTextState)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?icon-end="\${ifDefined(args.iconEnd)}"
    image="\${ifDefined(args.image)}"
    accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
    ?navigated="\${ifDefined(args.navigated)}"
    type="\${ifDefined(args.type)}"
    ?selected="\${ifDefined(args.selected)}"
  >
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.imageContent)}
    \${unsafeHTML(args.deleteButton)}
  </ui5-li>
  </ui5-list>\`;
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const M=["Basic"];export{i as Basic,M as __namedExportsOrder,E as default};
