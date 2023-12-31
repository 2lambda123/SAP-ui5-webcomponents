import { html } from "lit";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../../.storybook/docs.js";
const component = "ui5-toolbar-separator";
export default {
    title: "Main/Toolbar/Toolbar Separator",
    component: "ToolbarSeparator",
    argTypes,
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component, showDefaultStoryOnly: true })
        },
    },
};
const Template = (args) => {
    return html `
<ui5-toolbar align-content="Start">
	<ui5-toolbar-button text="Simple button 1"></ui5-toolbar-button>
	<ui5-toolbar-separator></ui5-toolbar-separator>
	<ui5-toolbar-button text="Simple button 2"></ui5-toolbar-button>
</ui5-toolbar>`;
};
export const Basic = Template.bind({});
Basic.tags = ["_hidden_"];
Basic.args = {};
//# sourceMappingURL=ToolbarSeparator.stories.js.map