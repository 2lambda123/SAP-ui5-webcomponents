import{x as r}from"./lit-element-c5a2b594.js";import{o as l}from"./unsafe-html-0ddd83da.js";import{D as a}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const p={default:{control:{type:"text"}}},m={package:"@ui5/webcomponents",since:"1.17.0"};var t=Object.freeze,d=Object.defineProperty,y=(n,u)=>t(d(n,"raw",{value:t(u||n.slice())})),i;const f="ui5-select-menu",T={title:"Main/Select/Select Menu",component:"SelectMenu",argTypes:p,parameters:{docs:{page:a({...m,component:f,showDefaultStoryOnly:!0})}}},M=n=>r(i||(i=y([`<style>
  .optionContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
  }
</style>
<ui5-select-menu id="selectMenu">
  `,`
</ui5-select-menu>

<ui5-select menu="selectMenu"></ui5-select>
<script>
    var selectMenu = document.querySelector("#selectMenu");

    document.body.appendChild(selectMenu);
<\/script>`])),l(n.default)),e=M.bind({});e.tags=["_hidden_"];e.args={default:`<ui5-select-menu-option display-text="AR">
  <div class="optionContent">
      <ui5-icon name="soccer"></ui5-icon>
      Argentina
      <ui5-icon name="employee"></ui5-icon>
  </div>
</ui5-select-menu-option>

<ui5-select-menu-option display-text="BE">
  <div class="optionContent">
      <ui5-icon name="soccer"></ui5-icon>
      Belgium
      <ui5-icon name="employee"></ui5-icon>
  </div>
</ui5-select-menu-option>

<ui5-select-menu-option display-text="BR">
  <div class="optionContent">
      <ui5-icon name="soccer"></ui5-icon>
      Brazil
      <ui5-icon name="employee"></ui5-icon>
  </div>
</ui5-select-menu-option>`};var o,c,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return html\`<style>
  .optionContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
  }
</style>
<ui5-select-menu id="selectMenu">
  \${unsafeHTML(args.default)}
</ui5-select-menu>

<ui5-select menu="selectMenu"></ui5-select>
<script>
    var selectMenu = document.querySelector("#selectMenu");

    document.body.appendChild(selectMenu);
<\/script>\`;
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const q=["Basic"];export{e as Basic,q as __namedExportsOrder,T as default};
