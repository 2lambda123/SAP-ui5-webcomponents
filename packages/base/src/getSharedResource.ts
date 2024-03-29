import getSingletonElementInstance from "./util/getSingletonElementInstance.js";

const getMetaDomEl = () => {
	const el = document.createElement("meta");
	el.setAttribute("name", "ui5-shared-resources");
	el.setAttribute("content", ""); // attribute "content" should be present when "name" is set.
	return el;
};

const getSharedResourcesInstance = (): Element | null => {
	if (typeof document === "undefined") {
		return null;
	}
	return getSingletonElementInstance(`meta[name="ui5-shared-resources"]`, document.head, getMetaDomEl);
};

/**
 * Use this method to initialize/get resources that you would like to be shared among UI5 Web Components runtime instances.
 * The data will be accessed via a singleton "ui5-shared-resources" HTML element in the "body" element of the page.
 *
 * @public
 * @param namespace Unique ID of the resource, may contain "." to denote hierarchy
 * @param initialValue Object or primitive that will be used as an initial value if the resource does not exist
 * @returns {*}
 */
const getSharedResource = <T>(namespace: string, initialValue: T): T => {
	const parts = namespace.split(".");
	let current = getSharedResourcesInstance() as Record<string, any>;

	if (!current) {
		return initialValue;
	}

	for (let i = 0; i < parts.length; i++) {
		const part = parts[i];
		const lastPart = i === parts.length - 1;
		if (!Object.prototype.hasOwnProperty.call(current, part)) {
			current[part] = lastPart ? initialValue : {};
		}
		current = current[part];
	}

	return current as T;
};

export default getSharedResource;
