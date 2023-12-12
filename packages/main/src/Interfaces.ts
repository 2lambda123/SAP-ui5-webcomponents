import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type { ITabbable } from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import type TreeItemBase from "./TreeItemBase.js";
import type { TableColumnInfo } from "./Table.js";
import type TableMode from "./types/TableMode.js";
import type SemanticColor from "./types/SemanticColor.js";
import type Tab from "./Tab.js";

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
 * Interface for components that may be slotted inside <code>ui5-card</code> as header
 *
 * @public
 */
interface ICardHeader extends UI5Element {
	subtitleText: string,
	titleText: string,
	status: string,
	interactive: boolean,
}

/**
 * Interface for components that may be slotted inside a <code>ui5-combobox</code>
 *
 * @public
 */
interface IComboBoxItem extends UI5Element {
	text: string,
	focused: boolean,
	isGroupItem: boolean,
	selected?: boolean,
	additionalText?: string,
}

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
 * @public
 */
interface IMultiComboBoxItem extends UI5Element {
	text: string,
	selected: boolean,
	isGroupItem?: boolean,
	stableDomRef: string,
}

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
 * Interface for components that may be slotted inside <code>ui5-tabcontainer</code> as items
 *
 * @public
 */
interface ITab extends UI5Element {
	isSeparator: boolean;
	getTabInStripDomRef: () => ITab | null;
	stableDomRef: string;
	additionalText?: string;
	design?: `${SemanticColor}`;
	disabled?: boolean;
	icon?: string;
	isSingleClickArea?: boolean;
	requiresExpandButton?: boolean;
	selected?: boolean;
	subTabs?: Array<ITab>;
	tabs?: Array<ITab>
	text?: string;
	_tabIndex?: string;
	_hasOwnContent?: boolean;
	_level?: number;
	_selected?: boolean;
	_getElementInStrip?: () => ITab | null;
	_isInline?: boolean;
	_mixedMode?: boolean;
	_posinset?: number;
	_setsize?: number;
	_realTab?: Tab;
	_isTopLevelTab?: boolean;
	_style?: Record<string, any>;
}

/**
 * Interface for components that may be slotted inside a <code>ui5-table</code> as rows
 *
 * @public
 */
interface ITableRow extends UI5Element {
	mode: `${TableMode}`,
	selected: boolean,
	_busy: boolean,
	_tabIndex: string,
	_ariaPosition: string,
	_columnsInfoString: string,
	_columnsInfo: Array<TableColumnInfo>,
	_tabbables: Array<HTMLElement>,
}

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
interface ITreeItem extends TreeItemBase {}

export {
	IAvatar,
	IButton,
	ICardHeader,
	IColorPaletteItem,
	IComboBoxItem,
	IIcon,
	IInput,
	IMultiComboBoxItem,
	ISegmentedButtonItem,
	IOption,
	ITab,
	ITableRow,
	IToken,
	ITreeItem,
};
