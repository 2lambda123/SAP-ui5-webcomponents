import{x as S}from"./lit-element-c5a2b594.js";import{D as T}from"./docs-4672cf88.js";import{o as m}from"./unsafe-html-0ddd83da.js";import{l as i}from"./if-defined-c29cffe1.js";import{V as C}from"./ValueState-2c5e5904.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const L={filter:{control:"select",options:["Contains","None","StartsWith","StartsWithPerTerm"]},open:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"items",type:"Array",description:"an array of the selected items."}]}}},N={package:"@ui5/webcomponents",since:"0.11.0"},q="ui5-multi-combobox",O={title:"Main/Multi-Combo Box",component:"MultiComboBox",parameters:{docs:{page:T({...N,component:q})}},argTypes:L},s=e=>S`
<ui5-multi-combobox
    value="${i(e.value)}"
    ?no-typeahead="${i(e.noTypeahead)}"
    placeholder="${i(e.placeholder)}"
    ?allow-custom-values="${i(e.allowCustomValues)}"
    ?disabled="${i(e.disabled)}"
    value-state="${i(e.valueState)}"
    ?readonly="${i(e.readonly)}"
    ?required="${i(e.required)}"
    filter="${i(e.filter)}"
    ?open="${i(e.open)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
>
    ${m(e.default)}
    ${m(e.icon)}
    ${m(e.valueStateMessage)}
</ui5-multi-combobox>`,o=s.bind({});o.args={placeholder:"Type your value",default:`
    <ui5-mcb-item text="Albania"></ui5-mcb-item>
    <ui5-mcb-item selected="" text="Argentina"></ui5-mcb-item>
    <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
    <ui5-mcb-item text="Denmark"></ui5-mcb-item>
    <ui5-mcb-item text="England"></ui5-mcb-item>
    <ui5-mcb-item text="Germany"></ui5-mcb-item>
    <ui5-mcb-item text="Philippines"></ui5-mcb-item>
    <ui5-mcb-item text="Portugal"></ui5-mcb-item>
    <ui5-mcb-item text="The United Kingdom of Great Britain and Northern Ireland"></ui5-mcb-item>
    `};const a=s.bind({});a.args={placeholder:"Choose your state",valueState:C.Success,allowCustomValues:!0,default:`
    <ui5-mcb-item text="Fortune"></ui5-mcb-item>
    <ui5-mcb-item text="Luck"></ui5-mcb-item>
    <ui5-mcb-item selected="" text="Success"></ui5-mcb-item>
    <ui5-mcb-item text="Attention"></ui5-mcb-item>
    <ui5-mcb-item text="Caution"></ui5-mcb-item>
    <ui5-mcb-item text="Warning"></ui5-mcb-item>
    <ui5-mcb-item text="Fault"></ui5-mcb-item>
    <ui5-mcb-item text="Error"></ui5-mcb-item>
    <ui5-mcb-item text="Mistake"></ui5-mcb-item>`};a.storyName="Custom Value";const t=s.bind({});t.args={placeholder:"Select a country",default:`
    <ui5-mcb-group-item text="Asia"></ui5-mcb-group-item>
    <ui5-mcb-item text="Afghanistan"></ui5-mcb-item>
    <ui5-mcb-item text="China"></ui5-mcb-item>
    <ui5-mcb-item text="India"></ui5-mcb-item>
    <ui5-mcb-item text="Indonesia"></ui5-mcb-item>
    <ui5-mcb-group-item text="Europe"></ui5-mcb-group-item>
    <ui5-mcb-item text="Austria"></ui5-mcb-item>
    <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
    <ui5-mcb-item text="Germany"></ui5-mcb-item>
    <ui5-mcb-item text="Italy"></ui5-mcb-item>
    <ui5-mcb-item text="The United Kingdom of Great Britain and Northern Ireland"></ui5-mcb-item>
    <ui5-mcb-group-item text="North America"></ui5-mcb-group-item>
    <ui5-mcb-item text="Canada"></ui5-mcb-item>
    <ui5-mcb-item text="Granada"></ui5-mcb-item>
    <ui5-mcb-item text="Haiti"></ui5-mcb-item>
    <ui5-mcb-item text="United States"></ui5-mcb-item>`};t.storyName="Grouping";const n=s.bind({});n.args={placeholder:"MultiComboBox with single long token",default:'<ui5-mcb-item selected="" text="Very long long long long long long long text"></ui5-mcb-item>'};n.storyName="Single Long Token";const r=s.bind({});r.args={placeholder:"Enter product",default:`
    <ui5-mcb-item text="Wireless DSL/ Repeater and Print Server Lorem ipsum dolar st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor incidunt ut labore et dolore magna aliquyam erat, diam nonumy eirmod tempor individunt ut labore et dolore magna aliquyam erat, sed justo et ea rebum."></ui5-mcb-item>
    <ui5-mcb-item text="Widescreen Portable DVD Player w MP3, consetetur sadipscing, sed diam nonumy eirmod tempor invidunt ut labore et dolore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergen, no sea takimata. Tortor pretium viverra suspendisse potenti nullam. Congue quisque egestas diam in arcu cursus.Rutrum tellus pellentesque eu tincidunt tortor. Nec tincidunt praesent semper feugiat nibh sed"></ui5-mcb-item>
    <ui5-mcb-item text="Portable DVD Player with 9 inches LCD Monitor"></ui5-mcb-item>`};var u,l,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,f,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,p,$;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...($=(p=t.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};var D,x,h;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,v,M;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(M=(v=r.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const z=["Basic","MultiComboBoxCustomValue","MultiComboBoxGrouping","MultiComboBoxLongToken","SuggestionsWrapping"];export{o as Basic,a as MultiComboBoxCustomValue,t as MultiComboBoxGrouping,n as MultiComboBoxLongToken,r as SuggestionsWrapping,z as __namedExportsOrder,O as default};
