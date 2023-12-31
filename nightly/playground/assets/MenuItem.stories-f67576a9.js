import{x as m}from"./lit-element-c5a2b594.js";import{o as c}from"./unsafe-html-0ddd83da.js";import{l as n}from"./if-defined-c29cffe1.js";import{D as d}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const p={busyDelay:{control:{type:"number"}},default:{control:{type:"text"}}},l={package:"@ui5/webcomponents",since:"1.3.0"};var i=Object.freeze,f=Object.defineProperty,b=(e,u)=>i(f(e,"raw",{value:i(u||e.slice())})),o;const y="ui5-menu-item",j={title:"Main/Menu/MenuItem",component:"MenuItem",parameters:{docs:{page:d({...l,component:y,showDefaultStoryOnly:!0})}},argTypes:p},$=e=>m`<ui5-menu id="menuBasic">
    <ui5-menu-item
    accessible-name="${n(e.accessibleName)}"
    additional-text="${n(e.additionalText)}"
    ?busy="${n(e.busy)}"
    busy-delay="${n(e.busyDelay)}"
    ?disabled="${n(e.disabled)}"
    icon="${n(e.icon)}"
    ?starts-section="${n(e.startsSection)}"
    text="${n(e.text)}"
    >
        ${c(e.default)}
    </ui5-menu-item>
</ui5-menu>`,t=$.bind({});t.storyName="MenuItem";t.args={icon:"open-folder",text:"Open",startsSection:!0,default:`<ui5-menu-item text="Open Locally" icon="open-folder"></ui5-menu-item>
  <ui5-menu-item text="Open from Cloud"></ui5-menu-item>`};t.decorators=[e=>m(o||(o=b([`<ui5-button id="btnOpenBasic" class="samples-margin" icon="slim-arrow-down" icon-end>Open Menu</ui5-button> <br/>
	`,`
	<script>
		btnOpenBasic.addEventListener("click", function(event) {
			menuBasic.showAt(btnOpenBasic);
		});
	<\/script>`])),e())];t.tags=["_hidden_"];t.parameters={docs:{story:{inline:!1}}};var s,a,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => html\`<ui5-menu id="menuBasic">
    <ui5-menu-item
    accessible-name="\${ifDefined(args.accessibleName)}"
    additional-text="\${ifDefined(args.additionalText)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?disabled="\${ifDefined(args.disabled)}"
    icon="\${ifDefined(args.icon)}"
    ?starts-section="\${ifDefined(args.startsSection)}"
    text="\${ifDefined(args.text)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-menu-item>
</ui5-menu>\``,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const z=["Basic"];export{t as Basic,z as __namedExportsOrder,j as default};
