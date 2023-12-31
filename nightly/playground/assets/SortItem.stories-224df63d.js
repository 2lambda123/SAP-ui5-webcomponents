import{x as m}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{D as c}from"./docs-4672cf88.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f93322bc.js";import"./index-a5147204.js";import"./iframe-5ad253a6.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-73fbb102.js";import"./client-fb0f3103.js";const d={},l={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.16"};var o=Object.freeze,u=Object.defineProperty,g=(e,p)=>o(u(e,"raw",{value:o(p||e.slice())})),s;const f="ui5-sort-item",E={title:"Fiori/View Settings Dialog/Sort Item",component:"SortItem",parameters:{docs:{page:c({...l,component:f,showDefaultStoryOnly:!0})}},argTypes:d},v=e=>m`<ui5-view-settings-dialog id="vsd1">
    <ui5-sort-item slot="sortItems" text="${i(e.text)}" ?selected="${i(e.selected)}"></ui5-sort-item>
    <ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>
</ui5-view-settings-dialog>`,t=v.bind({});t.tags=["_hidden_"];t.args={text:"Current sort item"};t.decorators=[e=>m(s||(s=g([`<ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
	`,`
	<script>
		btnOpenDialog1.addEventListener("click", function () {
			vsd1.show();
		});
	<\/script>
	`])),e())];t.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:'args => html`<ui5-view-settings-dialog id="vsd1">\n    <ui5-sort-item slot="sortItems" text="${ifDefined(args.text)}" ?selected="${ifDefined(args.selected)}"></ui5-sort-item>\n    <ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>\n</ui5-view-settings-dialog>`',...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const N=["Basic"];export{t as Basic,N as __namedExportsOrder,E as default};
