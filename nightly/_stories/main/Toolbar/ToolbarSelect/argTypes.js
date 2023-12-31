export default {
    "valueState": {
        "control": "select",
        "options": [
            "Error",
            "Information",
            "None",
            "Success",
            "Warning"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "change": {
        "description": "Fired when the selected option changes.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "selectedOption",
                    "type": "HTMLElement",
                    "description": "the selected option."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.17.0"
};
//# sourceMappingURL=argTypes.js.map