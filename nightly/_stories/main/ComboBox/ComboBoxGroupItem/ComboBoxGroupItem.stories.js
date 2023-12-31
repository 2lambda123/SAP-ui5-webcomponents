import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../../.storybook/docs.js";
const component = "ui5-cb-group-item";
export default {
    title: "Main/Combo Box/Combo Box Group Item",
    component: "ComboBoxGroupItem",
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component, showDefaultStoryOnly: true }),
        },
    },
    argTypes,
};
const Template = (args) => html `<ui5-combobox placeholder="Group item showcase">
	<ui5-cb-group-item text="${ifDefined(args.text)}"></ui5-cb-group-item>
	<ui5-cb-item text="Canada"></ui5-cb-item>
	<ui5-cb-item text="Chile"></ui5-cb-item>
</ui5-combobox>`;
export const Basic = Template.bind({});
Basic.tags = ["_hidden_"];
Basic.args = {
    text: "My group 1"
};
//# sourceMappingURL=ComboBoxGroupItem.stories.js.map