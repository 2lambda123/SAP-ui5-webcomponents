import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { ITabbable } from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import CalendarLegendItemType from "./types/CalendarLegendItemType.js";
import {
	CAL_LEGEND_TODAY_TEXT,
	CAL_LEGEND_SELECTED_TEXT,
	CAL_LEGEND_WORKING_DAY_TEXT,
	CAL_LEGEND_NON_WORKING_DAY_TEXT,
} from "./generated/i18n/i18n-defaults.js";

import CalendarLegendStandardItemTemplate from "./generated/templates/CalendarLegendItemTemplate.lit.js";

// Styles
import CalendarLegendStandardItemCss from "./generated/themes/CalendarLegendItem.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * <h3>Usage</h3>
 * The <code>ui5-calendar-legend-item</code> is intended to be used within the <code>ui5-calendar-legend</code> component.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/CalendarLegendItem.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webc.main.CalendarLegendItem
 * @extends sap.ui.webc.base.UI5Element
 * @tagname ui5-calendar-legend-item
 * @private
 */
@customElement({
	tag: "ui5-calendar-legend-item",
	renderer: litRender,
	styles: CalendarLegendStandardItemCss,
	template: CalendarLegendStandardItemTemplate,
	dependencies: [],
})

class CalendarLegendItem extends UI5Element implements ITabbable {
	/**
	 * Tab index of the component.
	 * @private
	 */
	@property({ defaultValue: "-1", noAttribute: true })
	_tabIndex!: string;

	/**
	 * Defines the type of the Calendar Legend Standard Item.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.CalendarLegendItem.prototype.type
	 * @defaultvalue ""
	 * @private
	 */
	@property()
	type!: `${CalendarLegendItemType}`;

	static i18nBundle: I18nBundle;

	static async onDefine() {
		CalendarLegendItem.i18nBundle = await getI18nBundle("@ui5/webcomponents");
	}

	get effectiveText() {
		const TodayI18n = CalendarLegendItem.i18nBundle.getText(CAL_LEGEND_TODAY_TEXT);
		const SelectedI18n = CalendarLegendItem.i18nBundle.getText(CAL_LEGEND_SELECTED_TEXT);
		const WorkingI18n = CalendarLegendItem.i18nBundle.getText(CAL_LEGEND_WORKING_DAY_TEXT);
		const NonWorkingI18n = CalendarLegendItem.i18nBundle.getText(CAL_LEGEND_NON_WORKING_DAY_TEXT);

		const typeMapping = {
			[CalendarLegendItemType.Today]: TodayI18n,
			[CalendarLegendItemType.Selected]: SelectedI18n,
			[CalendarLegendItemType.NonWorking]: NonWorkingI18n,
			[CalendarLegendItemType.Working]: WorkingI18n,
		};

		this.textContent = typeMapping[this.type as keyof typeof typeMapping] || this.type;

		return this.textContent;
	}
}

CalendarLegendItem.define();

export default CalendarLegendItem;