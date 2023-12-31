import{x as r}from"./lit-element-c5a2b594.js";import{l as e}from"./if-defined-c29cffe1.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{D as d}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const b={design:{control:"select",options:["Critical","Default","Negative","Neutral","Positive"]},default:{control:{type:"text"}},subTabs:{control:{type:"text"}},getTabInStripDomRef:{description:"Returns the DOM reference of the tab that is placed in the header. <b>Note:</b> Tabs, placed in the <code>subTabs</code> slot of other tabs are not shown in the header. Calling this method on such tabs will return <code>null</code>. <b>Note:</b> If you need a DOM ref to the tab content please use the <code>getDomRef</code> method.",table:{category:"methods"}}},u={package:"@ui5/webcomponents"},c="ui5-tab",L={title:"Main/Tab Container/Tab",component:"Tab",parameters:{docs:{page:d({...u,component:c,showDefaultStoryOnly:!0})}},argTypes:b},l=t=>r`
<ui5-tabcontainer>
    <ui5-tab
    additional-text="${e(t.additionalText)}"
    design="${e(t.design)}"
    ?disabled="${e(t.disabled)}"
    icon="${e(t.icon)}"
    ?selected="${e(t.selected)}"
    text="${e(t.text)}"
    >
        ${a(t.default)}	
        ${a(t.subTabs)}	
    </ui5-tab>
</ui5-tabcontainer>`,o=l.bind({});o.tags=["_hidden_"];o.args={text:"Products",default:"Products go here",subTabs:`	<ui5-tab slot="subTabs" text="Computers">
    Computers go here ...
    <ui5-tab slot="subTabs" text="Laptops">
        Laptops go here ...
    </ui5-tab>
    <ui5-tab slot="subTabs" text="Desktops">
        <ui5-tab slot="subTabs" text="Work Stations">
            Work Stations go here ...
        </ui5-tab>
        <ui5-tab slot="subTabs" text="Game Stations">
            Game Stations go here ...
        </ui5-tab>
        Desktops go here ...
    </ui5-tab>
</ui5-tab>`};var i,s,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return html\`
<ui5-tabcontainer>
    <ui5-tab
    additional-text="\${ifDefined(args.additionalText)}"
    design="\${ifDefined(args.design)}"
    ?disabled="\${ifDefined(args.disabled)}"
    icon="\${ifDefined(args.icon)}"
    ?selected="\${ifDefined(args.selected)}"
    text="\${ifDefined(args.text)}"
    >
        \${unsafeHTML(args.default)}	
        \${unsafeHTML(args.subTabs)}	
    </ui5-tab>
</ui5-tabcontainer>\`;
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const N=["Basic"];export{o as Basic,N as __namedExportsOrder,L as default};
