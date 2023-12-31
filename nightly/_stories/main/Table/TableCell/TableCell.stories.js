import { html } from "lit";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../../.storybook/docs";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
const component = "ui5-table";
export default {
    title: "Main/Table/Table Cell",
    component: "TableCell",
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
	<ui5-table-row>
		<ui5-table-cell>
			${unsafeHTML(args.default)}
		</ui5-table-cell>
	</ui5-table-row>
</ui5-table>
`;
export const Basic = Template.bind({});
Basic.tags = ["_hidden_"];
Basic.args = {
    default: `<span>Notebook Basic 15</span>`
};
//# sourceMappingURL=TableCell.stories.js.map