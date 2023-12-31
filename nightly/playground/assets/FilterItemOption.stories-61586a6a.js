import{x as l}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{D as p}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const c={},u={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.16"};var o=Object.freeze,f=Object.defineProperty,d=(e,m)=>o(f(e,"raw",{value:o(m||e.slice())})),r;const g="ui5-filter-item-option",B={title:"Fiori/View Settings Dialog/Filter Item Option",component:"FilterItemOption",parameters:{docs:{page:p({...u,component:g,showDefaultStoryOnly:!0})}},argTypes:c},v=e=>l`<ui5-view-settings-dialog id="vsd1">
    <ui5-filter-item slot="filterItems" text="Department">
        <ui5-filter-item-option
            slot="values"
            text="${i(e.text)}"
            ?selected="${i(e.selected)}"
        ></ui5-filter-item-option>
        <ui5-filter-item-option
            slot="values"
            text="Management"
        ></ui5-filter-item-option>
    </ui5-filter-item>
</ui5-view-settings-dialog>`,t=v.bind({});t.tags=["_hidden_"];t.args={text:"Current filter item option",selected:!0};t.decorators=[e=>l(r||(r=d([`<ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
	`,`
	<script>
		btnOpenDialog1.addEventListener("click", function () {
			vsd1.show();
		});
	<\/script>
	`])),e())];t.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`<ui5-view-settings-dialog id="vsd1">
    <ui5-filter-item slot="filterItems" text="Department">
        <ui5-filter-item-option
            slot="values"
            text="\${ifDefined(args.text)}"
            ?selected="\${ifDefined(args.selected)}"
        ></ui5-filter-item-option>
        <ui5-filter-item-option
            slot="values"
            text="Management"
        ></ui5-filter-item-option>
    </ui5-filter-item>
</ui5-view-settings-dialog>\``,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,B as default};
