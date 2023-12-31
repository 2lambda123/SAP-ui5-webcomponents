import{x as l}from"./lit-element-c5a2b594.js";import{o as p}from"./unsafe-html-0ddd83da.js";import{l as i}from"./if-defined-c29cffe1.js";import{D as u}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const d={values:{control:{type:"text"}}},c={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.16"};var o=Object.freeze,f=Object.defineProperty,g=(t,m)=>o(f(t,"raw",{value:o(m||t.slice())})),r;const v="ui5-filter-item",E={title:"Fiori/View Settings Dialog/Filter Item",component:"FilterItem",parameters:{docs:{page:u({...c,component:v,showDefaultStoryOnly:!0})}},argTypes:d},x=t=>l`<ui5-view-settings-dialog id="vsd1">
    <ui5-filter-item slot="filterItems" text="${i(t.text)}" additional-text="${i(t.additionalText)}">
        ${p(t.values)}
    </ui5-filter-item>
</ui5-view-settings-dialog>`,e=x.bind({});e.tags=["_hidden_"];e.args={text:"Department",values:`<ui5-filter-item-option slot="values" text="Sales"></ui5-filter-item-option>
<ui5-filter-item-option slot="values" text="Management"></ui5-filter-item-option>
<ui5-filter-item-option slot="values" text="PR"></ui5-filter-item-option>`};e.decorators=[t=>l(r||(r=g([`<ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
	`,`
	<script>
		btnOpenDialog1.addEventListener("click", function () {
			vsd1.show();
		});
	<\/script>
	`])),t())];e.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-view-settings-dialog id="vsd1">\n    <ui5-filter-item slot="filterItems" text="${ifDefined(args.text)}" additional-text="${ifDefined(args.additionalText)}">\n        ${unsafeHTML(args.values)}\n    </ui5-filter-item>\n</ui5-view-settings-dialog>`',...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const H=["Basic"];export{e as Basic,H as __namedExportsOrder,E as default};
