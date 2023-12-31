import{x as a}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as l}from"./unsafe-html-0ddd83da.js";import{D as r}from"./docs-4672cf88.js";import{T as s}from"./TimelineLayout-651ea8a4.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const c={layout:{control:"select",options:["Horizontal","Vertical"]},default:{control:{type:"text"}}},p={package:"@ui5/webcomponents-fiori",since:"0.8.0"},u="ui5-timeline",V={title:"Fiori/Timeline",component:"Timeline",parameters:{docs:{page:r({...p,component:u})}},argTypes:c},d=t=>a`<ui5-timeline
    layout="${i(t.layout)}"
    accessible-name="${i(t.accessibleName)}"
>
    ${l(t.default)}
</ui5-timeline>`,e=d.bind({});e.storyName="With Items and Layout";e.args={layout:s.Vertical,default:`<ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="phone" name="John Smith" name-clickable=""></ui5-timeline-item>
<ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="calendar">
    <div>MR SOF02 2.43</div>
</ui5-timeline-item>
<ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="calendar">
    <div>Online meeting</div>
</ui5-timeline-item>`};var o,m,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-timeline\n    layout="${ifDefined(args.layout)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-timeline>`',...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const _=["Basic"];export{e as Basic,_ as __namedExportsOrder,V as default};
