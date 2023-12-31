import { html } from "lit";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../../.storybook/docs";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
const component = "ui5-table-row";
export default {
    title: "Main/Table/Table Row",
    component: "TableRow",
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component, showDefaultStoryOnly: true })
        },
    },
    argTypes,
};
const Template = (args) => html `
<ui5-table>
	<ui5-table-column slot="columns">
		<span>Product</span>
	</ui5-table-column>
	<ui5-table-row
		?navigated=${ifDefined(args.navigated)}
		?selected=${ifDefined(args.selected)}
		type=${ifDefined(args.type)}
	>${unsafeHTML(args.default)}</ui5-table-row>
</ui5-table>
`;
export const Basic = Template.bind({});
Basic.tags = ["_hidden_"];
Basic.args = {
    default: `<ui5-table-cell>
	Notebook Basic 15
</ui5-table-cell>`
};
//# sourceMappingURL=TableRow.stories.js.map