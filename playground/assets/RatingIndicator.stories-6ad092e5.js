import{x as p}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{D as $}from"./docs-a58dd199.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const D={},x={package:"@ui5/webcomponents",since:"1.0.0-rc.8"},q="ui5-rating-indicator";let b=0;const E={title:"Main/Rating Indicator",component:"RatingIndicator",parameters:{docs:{page:$({...x,component:q})}},argTypes:D},s=e=>p`
<ui5-rating-indicator
    id="rating-indicator-${++b}"
    value="${a(e.value)}"
    max="${a(e.max)}"
    ?disabled="${a(e.disabled)}"
    ?readonly="${a(e.readonly)}"
    ?required="${a(e.required)}"
    accessible-name="${a(e.accessibleName)}"
    accessible-name-ref="${a(e.accessibleNameRef)}"
></ui5-rating-indicator>`,r=s.bind({});r.args={value:3.7};const n=s.bind({});n.args={value:5,max:10};const i=s.bind({});i.args={value:5,max:7,accessibleNameRef:"label-acc-name-ref",required:!0};i.decorators=[e=>p`
    <ui5-label id="label-acc-name-ref" required="true" for="rating-indicator-${b+1}">Rate us</ui5-label>
    ${e()}`];var d,c,t;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`\n<ui5-rating-indicator\n    id="rating-indicator-${++index}"\n    value="${ifDefined(args.value)}"\n    max="${ifDefined(args.max)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?required="${ifDefined(args.required)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n></ui5-rating-indicator>`',...(t=(c=r.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var o,m,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`\n<ui5-rating-indicator\n    id="rating-indicator-${++index}"\n    value="${ifDefined(args.value)}"\n    max="${ifDefined(args.max)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?required="${ifDefined(args.required)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n></ui5-rating-indicator>`',...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var f,u,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`\n<ui5-rating-indicator\n    id="rating-indicator-${++index}"\n    value="${ifDefined(args.value)}"\n    max="${ifDefined(args.max)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?required="${ifDefined(args.required)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n></ui5-rating-indicator>`',...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const O=["Basic","MaxValue","RequiredLabel"];export{r as Basic,n as MaxValue,i as RequiredLabel,O as __namedExportsOrder,E as default};
//# sourceMappingURL=RatingIndicator.stories-6ad092e5.js.map
