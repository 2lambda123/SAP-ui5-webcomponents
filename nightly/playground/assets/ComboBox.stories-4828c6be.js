import{x as S}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as d}from"./unsafe-html-0ddd83da.js";import{D as M}from"./docs-4672cf88.js";import{C as B}from"./ComboBoxFilter-4fbd0079.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const L={filter:{control:"select",options:["Contains","None","StartsWith","StartsWithPerTerm"]},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"sap.ui.webc.main.IComboBoxItem",description:"item to be selected."}]}}},C={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},q="ui5-combobox",V={title:"Main/Combo Box",component:"ComboBox",parameters:{docs:{page:M({...C,component:q})}},argTypes:L},o=e=>S`<ui5-combobox
        value="${i(e.value)}"
        ?no-typeahead="${i(e.noTypeahead)}"
        placeholder="${i(e.placeholder)}"
        ?disabled="${i(e.disabled)}"
        ?readonly="${i(e.readonly)}"
        ?required="${i(e.required)}"
        ?loading="${i(e.loading)}"
        filter="${i(e.filter)}"
        value-state="${i(e.valueState)}"
        accessible-name="${i(e.accessibleName)}"
        accessible-name-ref="${i(e.accessibleNameRef)}"
>
        ${d(e.default)}
        ${d(e.valueStateMessage)}
        ${d(e.icon)}
</ui5-combobox>`,a=o.bind({});a.args={placeholder:"Enter value",default:`
    <ui5-cb-item text="Austria"></ui5-cb-item>
    <ui5-cb-item text="Bulgaria"></ui5-cb-item>
    <ui5-cb-item text="Germany"></ui5-cb-item>
    <ui5-cb-item text="Italy"></ui5-cb-item>
    <ui5-cb-item text="Spain"></ui5-cb-item>
    `};const t=o.bind({});t.args={placeholder:"Contains Filtering",filter:B.Contains,default:`
        <ui5-cb-item text="Austria"></ui5-cb-item>
        <ui5-cb-item text="Bulgaria"></ui5-cb-item>
        <ui5-cb-item text="Germany"></ui5-cb-item>
        <ui5-cb-item text="Kazakhstan"></ui5-cb-item>
        <ui5-cb-item text="The United Kingdom of Great Britain and Northern Ireland"></ui5-cb-item>
    `};const n=o.bind({});n.args={placeholder:"Two-column layout",default:`
        <ui5-cb-item text="Austria" additional-text="AT"></ui5-cb-item>
        <ui5-cb-item text="Belgium" additional-text="BE"></ui5-cb-item>
        <ui5-cb-item text="Brazil" additional-text="BR"></ui5-cb-item>
        <ui5-cb-item text="Bulgaria" additional-text="BG"></ui5-cb-item>
        <ui5-cb-item text="Canada" additional-text="CA"></ui5-cb-item>
        <ui5-cb-item text="The United Kingdom of Great Britain and Northern Ireland" additional-text="UK"></ui5-cb-item>
    `};const r=o.bind({});r.args={placeholder:"Grouping of items",default:`
        <ui5-cb-group-item text="A"></ui5-cb-group-item>
        <ui5-cb-item text="Argentina"></ui5-cb-item>
        <ui5-cb-item text="Australia"></ui5-cb-item>
        <ui5-cb-item text="Austria"></ui5-cb-item>
        <ui5-cb-group-item text="B"></ui5-cb-group-item>
        <ui5-cb-item text="Bahrain"></ui5-cb-item>
        <ui5-cb-item text="Belgium"></ui5-cb-item>
        <ui5-cb-item text="Brazil"></ui5-cb-item>
        <ui5-cb-group-item text="C"></ui5-cb-group-item>
        <ui5-cb-item text="Canada"></ui5-cb-item>
        <ui5-cb-item text="Chile"></ui5-cb-item>
    `};const s=o.bind({});s.args={placeholder:"Enter product",default:`
    <ui5-cb-item text="Wireless DSL/ Repeater and Print Server Lorem ipsum dolar st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor incidunt ut labore et dolore magna aliquyam erat, diam nonumy eirmod tempor individunt ut labore et dolore magna aliquyam erat, sed justo et ea rebum."></ui5-cb-item>
    <ui5-cb-item text="Widescreen Portable DVD Player w MP3, consetetur sadipscing, sed diam nonumy eirmod tempor invidunt ut labore et dolore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergen, no sea takimata. Tortor pretium viverra suspendisse potenti nullam. Congue quisque egestas diam in arcu cursus.Rutrum tellus pellentesque eu tincidunt tortor. Nec tincidunt praesent semper feugiat nibh sed"></ui5-cb-item>
    <ui5-cb-item text="Portable DVD Player with 9 inches LCD Monitor"></ui5-cb-item>
    `};var u,c,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        ?no-typeahead="${ifDefined(args.noTypeahead)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,f,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        ?no-typeahead="${ifDefined(args.noTypeahead)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,p,$;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        ?no-typeahead="${ifDefined(args.noTypeahead)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...($=(p=n.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};var D,x,h;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        ?no-typeahead="${ifDefined(args.noTypeahead)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,v,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        ?no-typeahead="${ifDefined(args.noTypeahead)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const O=["Basic","Filters","TwoColumnsLayout","Grouping","SuggestionsWrapping"];export{a as Basic,t as Filters,r as Grouping,s as SuggestionsWrapping,n as TwoColumnsLayout,O as __namedExportsOrder,V as default};
