import{x as o}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as u}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const l={default:{control:{type:"text"}}},d={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.10"},m="ui5-wizard-step",W={title:"Fiori/Wizard/Wizard Step",component:"WizardStep",parameters:{docs:{page:u({...d,component:m,showDefaultStoryOnly:!0})}},argTypes:l},p=e=>o`
<ui5-wizard>
    <ui5-wizard-step
        icon="${i(e.icon)}"
        title-text="${i(e.titleText)}"
        ?selected="${i(e.selected)}"
        ?branching="${i(e.branching)}"
        ?disabled="${i(e.disabled)}"
        subtitle-text="${i(e.subtitleText)}"
    >
        ${n(e.default)}
    </ui5-wizard-step>
</ui5-wizard>`,t=p.bind({});t.tags=["_hidden_"];t.args={titleText:"Product type",icon:"product",default:`<div style="display: flex; min-height: 200px; flex-direction: column;">
    <ui5-title>1. Product Type</ui5-title><br/>
    <ui5-message-strip>
        The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
    </ui5-message-strip><br/>
    <ui5-label wrapping-type="Normal">Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat.
    </ui5-label>
</div>
<ui5-button design="Emphasized">Step 2</ui5-button>`};var s,a,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`
<ui5-wizard>
    <ui5-wizard-step
        icon="\${ifDefined(args.icon)}"
        title-text="\${ifDefined(args.titleText)}"
        ?selected="\${ifDefined(args.selected)}"
        ?branching="\${ifDefined(args.branching)}"
        ?disabled="\${ifDefined(args.disabled)}"
        subtitle-text="\${ifDefined(args.subtitleText)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-wizard-step>
</ui5-wizard>\`;
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const _=["Basic"];export{t as Basic,_ as __namedExportsOrder,W as default};
