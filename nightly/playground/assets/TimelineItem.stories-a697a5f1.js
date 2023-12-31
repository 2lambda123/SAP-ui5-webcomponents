import{x as r}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{D as l}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const s={default:{control:{type:"text"}}},c={package:"@ui5/webcomponents-fiori"},p="ui5-timeline-item",v={title:"Fiori/Timeline/Timeline Item",component:"TimelineItem",parameters:{docs:{page:l({...c,component:p,showDefaultStoryOnly:!0})}},argTypes:s},u=e=>r`
<ui5-timeline>
    <ui5-timeline-item
        title-text="${i(e.titleText)}"
        subtitle-text="${i(e.subtitleText)}"
        icon="${i(e.icon)}"
        name="${i(e.name)}"
        ?name-clickable="${i(e.nameClickable)}"
        >
        ${a(e.default)}
    </ui5-timeline-item>
</ui5-timeline>`,t=u.bind({});t.tags=["_hidden_"];t.args={icon:"calendar",titleText:"Weekly Sync - CP Design",subtitleText:"27.07.2017 (11:00 - 12:30)",default:"<div>MR SOF02 2.43</div>"};var n,m,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
<ui5-timeline>
    <ui5-timeline-item
        title-text="\${ifDefined(args.titleText)}"
        subtitle-text="\${ifDefined(args.subtitleText)}"
        icon="\${ifDefined(args.icon)}"
        name="\${ifDefined(args.name)}"
        ?name-clickable="\${ifDefined(args.nameClickable)}"
        >
        \${unsafeHTML(args.default)}
    </ui5-timeline-item>
</ui5-timeline>\``,...(o=(m=t.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const w=["Basic"];export{t as Basic,w as __namedExportsOrder,v as default};
