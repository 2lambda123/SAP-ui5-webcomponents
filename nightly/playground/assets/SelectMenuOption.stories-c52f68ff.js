import{x as u}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as i}from"./unsafe-html-0ddd83da.js";import{D as p}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const d={type:{control:"select",options:["Active","Detail","Inactive","Navigation"]},default:{control:{type:"text"}},deleteButton:{control:{type:"text"}}},m={package:"@ui5/webcomponents",since:"1.17.0"};var s=Object.freeze,f=Object.defineProperty,y=(e,r)=>s(f(e,"raw",{value:s(r||e.slice())})),c;const b="ui5-select-menu-option",P={title:"Main/Select/Select Menu Option",component:"SelectMenuOption",argTypes:d,parameters:{docs:{page:p({...m,component:b,showDefaultStoryOnly:!0})}}},v=e=>u(c||(c=y([`<style>
  .optionContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
  }
</style>
<ui5-select-menu id="selectMenu">
  <ui5-select-menu-option
    accessibility-attributes="`,`"
    ?disabled="`,`"
    display-text="`,`"
    ?navigated="`,`"
    type="`,`"
    value="`,`"
    accessible-name="`,`"
    ?selected="`,`"
  >
  `,`
  `,`
  </ui5-select-menu-option>
</ui5-select-menu>

<ui5-select menu="selectMenu"></ui5-select>
<script>
    var selectMenu = document.querySelector("#selectMenu");

    document.body.appendChild(selectMenu);
<\/script>`])),t(e.accessibilityAttributes),t(e.disabled),t(e.displayText),t(e.navigated),t(e.type),t(e.value),t(e.accessibleName),t(e.selected),i(e.default),i(e.deleteButton)),n=v.bind({});n.tags=["_hidden_"];n.args={displayText:"AR",default:`<div class="optionContent">
  <ui5-icon name="soccer"></ui5-icon>
  Argentina
  <ui5-icon name="employee"></ui5-icon>
</div>`};var o,a,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return html\`<style>
  .optionContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
  }
</style>
<ui5-select-menu id="selectMenu">
  <ui5-select-menu-option
    accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
    ?disabled="\${ifDefined(args.disabled)}"
    display-text="\${ifDefined(args.displayText)}"
    ?navigated="\${ifDefined(args.navigated)}"
    type="\${ifDefined(args.type)}"
    value="\${ifDefined(args.value)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?selected="\${ifDefined(args.selected)}"
  >
  \${unsafeHTML(args.default)}
  \${unsafeHTML(args.deleteButton)}
  </ui5-select-menu-option>
</ui5-select-menu>

<ui5-select menu="selectMenu"></ui5-select>
<script>
    var selectMenu = document.querySelector("#selectMenu");

    document.body.appendChild(selectMenu);
<\/script>\`;
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const q=["Basic"];export{n as Basic,q as __namedExportsOrder,P as default};
