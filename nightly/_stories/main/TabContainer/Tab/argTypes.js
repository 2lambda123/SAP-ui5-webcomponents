export default {
    "design": {
        "control": "select",
        "options": [
            "Critical",
            "Default",
            "Negative",
            "Neutral",
            "Positive"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "subTabs": {
        "control": {
            "type": "text"
        }
    },
    "getTabInStripDomRef": {
        "description": "Returns the DOM reference of the tab that is placed in the header. <b>Note:</b> Tabs, placed in the <code>subTabs</code> slot of other tabs are not shown in the header. Calling this method on such tabs will return <code>null</code>. <b>Note:</b> If you need a DOM ref to the tab content please use the <code>getDomRef</code> method.",
        "table": {
            "category": "methods"
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map