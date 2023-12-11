import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type { ITabbable } from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";

/**
 * Interface for components that represent an avatar and may be slotted in numerous higher-order components such as <code>ui5-avatar-group</code>
 *
 * @public
 */
interface IAvatar {
	isUI5Element: boolean,
}

/**
 * Interface for components that may be used as a button inside numerous higher-order components
 *
 * @public
 */
interface IButton extends HTMLElement, ITabbable {
	nonInteractive: boolean;
}

/**
 * Interface for components that may be slotted inside a <code>ui5-combobox</code>
 *
 * @name sap.ui.webc.main.IComboBoxItem
 * @interface
 * @public
 */
const IComboBoxItem = "sap.ui.webc.main.IComboBoxItem";

/**
 * Interface for components that may be used inside a <code>ui5-color-palette</code> or <code>ui5-color-palette-popover</code>
 *
 * @public
 */
interface IColorPaletteItem extends UI5Element, ITabbable {
	value?: string,
	index?: number,
}

/**
 * Interface for components that represent an icon, usable in numerous higher-order components
 *
 * @public
 */
interface IIcon extends HTMLElement { }

/**
 * Interface for components that represent an input, usable in numerous higher-order components
 *
 * @public
 */
interface IInput extends HTMLElement { }

/**
 * Interface for components that may be slotted inside a <code>ui5-multi-combobox</code> as items
 *
 * @name sap.ui.webc.main.IMultiComboBoxItem
 * @interface
 * @public
 */
const IMultiComboBoxItem = "sap.ui.webc.main.IMultiComboBoxItem";

/**
 * Interface for components that may be slotted inside <code>ui5-segmented-button</code> as items
 *
 * @public
 */
interface ISegmentedButtonItem extends UI5Element {
	disabled: boolean,
	pressed: boolean,
	_tabIndex: string,
}

/**
 * Interface for components that may be slotted inside <code>ui5-select</code> as options
 *
 * @public
 */
interface IOption extends UI5Element {
	selected: boolean,
	disabled: boolean,
	title: string,
	icon?: string | null,
	value: string,
	additionalText?: string,
	_focused?: boolean,
	focused?: boolean,
	text?: Array<Node>,
	stableDomRef: string,
	displayText?: string,
}

/**
 * Interface for components that may be slotted inside a <code>ui5-table</code> as rows
 *
 * @name sap.ui.webc.main.ITableRow
 * @interface
 * @public
 */
const ITableRow = "sap.ui.webc.main.ITableRow";

/**
 * Interface for components that represent a token and are usable in components such as <code>ui5-multi-input</code>
 *
 * @public
 */
interface IToken extends HTMLElement, ITabbable {
	text: string;
	readonly: boolean,
	selected: boolean,
	isTruncatable: boolean,
}

/**
 * Interface for tree items for the purpose of <code>ui5-tree</code>
 *
 * @public
 */
interface ITreeItem extends HTMLElement {
	items: Array<ITreeItem>;
	_setsize: number;
	_posinset: number;
}

export {
	IAvatar,
	IButton,
	IColorPaletteItem,
	IComboBoxItem,
	IIcon,
	IInput,
	IMultiComboBoxItem,
	ISegmentedButtonItem,
	IOption,
	ITableRow,
	IToken,
	ITreeItem,
};
