import { html } from "lit";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../../.storybook/docs.js";
const component = "ui5-mcb-group-item";
export default {
    title: "Main/Multi-Combo Box/Multi-Combo Box Group Item",
    component: "MultiComboBoxGroupItem",
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component, showDefaultStoryOnly: true })
        },
    },
    argTypes,
};
const Template = (args) => html `
<ui5-multi-combobox>
<ui5-mcb-group-item text="${args.text}"></ui5-mcb-group-item>
<ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
<ui5-mcb-item text="Denmark"></ui5-mcb-item>
<ui5-mcb-item text="England"></ui5-mcb-item>
<ui5-mcb-item text="Germany"></ui5-mcb-item>
</ui5-multi-combobox>`;
export const Basic = Template.bind({});
Basic.tags = ["_hidden_"];
Basic.args = {
    text: "Europe"
};
//# sourceMappingURL=MultiComboBoxGroupItem.stories.js.map