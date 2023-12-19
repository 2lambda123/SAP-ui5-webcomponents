import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import ItemNavigation from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import NavigationMode from "@ui5/webcomponents-base/dist/types/NavigationMode.js";
import {
	isDown,
	isUp,
} from "@ui5/webcomponents-base/dist/Keys.js";
import ItemNavigationBehavior from "@ui5/webcomponents-base/dist/types/ItemNavigationBehavior.js";
import CalendarLegendItemType from "./types/CalendarLegendItemType.js";
import CalendarLegendTemplate from "./generated/templates/CalendarLegendTemplate.lit.js";

// Styles
import CalendarLegendCss from "./generated/themes/CalendarLegend.css.js";
import CalendarLegendItem from "./CalendarLegendItem.js";

type CalendarLegendItemSelectionChangeEventDetail = {
	item: CalendarLegendItem;
}

/**
 * @class CalendarLegend
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-calendar-legend</code> component is used to display a legend of special calendar dates
 * with their corresponding textual descriptions and types.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/CalendarLegend.js";</code>
 *
 * @constructor
 * @extends UI5Element
 * @public
 */
@customElement({
	tag: "ui5-calendar-legend",
	renderer: litRender,
	styles: CalendarLegendCss,
	template: CalendarLegendTemplate,
	dependencies: [CalendarLegendItem],
})
@event("_calendar-legend-item-selection-change", {
	detail: {
		item: { type: CalendarLegendItem },
	},
})
class CalendarLegend extends UI5Element {
	/**
	 * Hides the Today item in the legend.
	 * @type {boolean}
	 * @public
	 */
	@property({ type: Boolean })
	hideToday!: boolean;

	/**
	 * Hides the Selected day item in the legend.
	 * @type {boolean}
	 * @public
	 */
	@property({ type: Boolean })
	hideSelectedDay!: boolean;

	/**
	 * Hides the Non-Working day item in the legend.
	 * @type {boolean}
	 * @public
	 */
	@property({ type: Boolean })
	hideNonWorkingDay!: boolean;

	/**
	 * Hides the Working day item in the legend.
	 * @type {boolean}
	 * @public
	 */
	@property({ type: Boolean })
	hideWorkingDay!: boolean;

	@slot({
		"default": true,
		type: HTMLElement,
		invalidateOnChildChange: true,
		individualSlots: true,
	 })
	items!: Array<CalendarLegendItem>;

	_itemNavigation: ItemNavigation;

	constructor() {
		super();

		this._itemNavigation = new ItemNavigation(this, {
			navigationMode: NavigationMode.Horizontal,
			behavior: ItemNavigationBehavior.Static,
			getItemsCallback: () => this.focusableElements,
		});
	}

	_onMouseDown(e: MouseEvent) {
		e.stopPropagation();
		const target = e.target as CalendarLegendItem;

		this._itemNavigation.setCurrentItem(target);
		this._itemNavigation._focusCurrentItem();
	}

	_onFocusIn(e: MouseEvent) {
		const target = e.target as CalendarLegendItem;

		this.fireEvent<CalendarLegendItemSelectionChangeEventDetail>("_calendar-legend-item-selection-change", {
			item: target,
		});
	}

	_onItemKeyDown(e: KeyboardEvent) {
		const items = this.focusableElements;
		const itemsCount = items.length;
		const currentItem = e.target as CalendarLegendItem;
		const currentIndex = items.indexOf(currentItem);

		if (isDown(e)) {
			e.preventDefault();
			const nextIndex = currentIndex + 1;

			if (nextIndex < itemsCount) {
				this._itemNavigation.setCurrentItem(items[nextIndex]);
				this._itemNavigation._focusCurrentItem();
			}
		}

		if (isUp(e)) {
			e.preventDefault();
			const nextIndex = currentIndex - 1;

			if (nextIndex >= 0) {
				this._itemNavigation.setCurrentItem(items[nextIndex]);
				this._itemNavigation._focusCurrentItem();
			}
		}
	}

	get focusableElements() {
		let allFocusableItems = [...this.shadowRoot!.querySelectorAll<CalendarLegendItem>("[ui5-calendar-legend-item]"), ...this.legendItems];
		const rearrangedItems: Array<CalendarLegendItem> = [];

		/**
		 * Rearrange items for better keyboard navigation.
		 * Resolves uneven indexing in the 2-column display (e.g., [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]),
		 * which ensures a linear and logical navigation sequence
		 * for the desired itemNavigation behaviour.
		 */
		allFocusableItems.forEach(item => rearrangedItems.push(item));

		const itemsFirstColumn = rearrangedItems.filter((item, index) => index % 2 === 0);
		const itemsSecondColumn = rearrangedItems.filter((item, index) => index % 2 !== 0);

		allFocusableItems = [...itemsFirstColumn, ...itemsSecondColumn];
		return allFocusableItems;
	}

	get legendItems() {
		const items = this.getSlottedNodes<CalendarLegendItem>("items");
		return items.filter(item => item instanceof CalendarLegendItem);
	}

	get defaultItemsMapping() {
		const typeMapping = [
			{ type: [CalendarLegendItemType.Today], hide: this.hideToday },
			{ type: [CalendarLegendItemType.Selected], hide: this.hideSelectedDay },
			{ type: [CalendarLegendItemType.Working], hide: this.hideWorkingDay },
			{ type: [CalendarLegendItemType.NonWorking], hide: this.hideNonWorkingDay },
		];

		return typeMapping;
	}
}

CalendarLegend.define();

export default CalendarLegend;
export type {
	CalendarLegendItemSelectionChangeEventDetail,
};
