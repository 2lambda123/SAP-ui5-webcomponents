/**
 * Different types of IllustrationMessageSize.
 *
 * @readonly
 * @enum {string}
 * @public
 * @author SAP SE
 * @alias sap.ui.webc.fiori.types.IllustrationMessageSize
 * @since 1.5.0
 */
enum IllustrationMessageSize {
	/**
	 * Automatically decides the <code>Illustration</code> size (<code>Base</code>, <code>Spot</code>,
	 * <code>Dialog</code>, or <code>Scene</code>) depending on the <code>IllustratedMessage</code> container width.
	 *
	 * <b>Note:</b> <code>Auto</code> is the only option where the illustration size is changed according to
	 * the available container width. If any other <code>IllustratedMessageSize</code> is chosen, it remains
	 * until changed by the app developer.
	 *
	 * @public
	 * @type {Auto}
	 */
	Auto = "Auto",
	/**
	 * Base <code>Illustration</code> size (XS breakpoint). Suitable for cards (two columns).
	 *
	 * <b>Note:</b> When <code>Base</code> is in use, no illustration is displayed.
	 *
	 * @public
	 * @type {Base}
	 */
	Base = "Base",

	/**
	 * Spot <code>Illustration</code> size (S breakpoint). Suitable for cards (four columns).
	 * @public
	 * @type {Spot}
	 */
	Spot = "Spot",

	/**
	 * Dialog <code>Illustration</code> size (M breakpoint). Suitable for dialogs.
	 * @public
	 * @type {Dialog}
	 */
	Dialog = "Dialog",

	/**
	 * Scene <code>Illustration</code> size (L breakpoint). Suitable for a <code>Page</code> or a table.
	 * @public
	 * @type {Scene}
	 */
	Scene = "Scene",
}

export default IllustrationMessageSize;
