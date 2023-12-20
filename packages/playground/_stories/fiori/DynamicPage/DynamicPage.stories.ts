import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type { Meta } from "@storybook/web-components";
import type { PartialStoryFn } from "@storybook/types";

import argTypes, { componentInfo } from "./argTypes.js";
import type { StoryArgsSlots } from "./argTypes.js";
import type { UI5StoryArgs } from "../../../types.js";

import { DocsPage } from "../../../.storybook/docs.js";

import type DynamicPage from "@ui5/webcomponents-fiori/dist/DynamicPage.js";

const component = "ui5-dynamic-page";

const stylesDecorator = (storyFn: PartialStoryFn) => html`
    <style>
        #root-inner,
        #storybook-root,
        html, body {
            height: 100%;
            padding: 0;
            margin: 0;
        }
    </style>
    ${storyFn()}
`;

export default {
  title: "Fiori/Dynamic Page",
  component: "DynamicPage",
  parameters: {
    docs: {
      page: DocsPage({ ...componentInfo, component })
    },
  },
  decorators: [stylesDecorator],
  argTypes,
} as Meta<DynamicPage>;

const Template: UI5StoryArgs<DynamicPage, StoryArgsSlots> = (args) => {
  return html`
    <ui5-dynamic-page id="page"
    headerSnapped = ${ifDefined(args.headerSnapped)}
    headerPinned = ${ifDefined(args.headerPinned)}
    showFooter = ${ifDefined(args.showFooter)}
    >
      ${unsafeHTML(args.headerArea)}
      ${unsafeHTML(args.titleArea)}
      ${unsafeHTML(args.content)}
      ${unsafeHTML(args.footer)}
    </ui5-dynamic-page>
`;
};

export const Basic = Template.bind({});
Basic.args = {
  titleArea: `
    <ui5-dynamic-page-title slot="titleArea">
        <ui5-breadcrumbs slot="breadcrumbs">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Link1
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item
                href="https://www.sap.com"
                target="_blank"
                >Link2</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item href="#">Link3</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="#">Link4</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="#">Link5</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="#">Link6</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="#">Link7</ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item>Location</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>

        <ui5-title slot="expandedHeading">Expanded Heading</ui5-title>

        <ui5-title slot="snappedHeading">Snapped Heading</ui5-title>

        <div slot="expandedContent">
            <ui5-title level="H6"
                >This is an expanded subheading</ui5-title
            >
        </div>

        <div slot="snappedContent">
            <ui5-title level="H6"
                >This is a snapped subheading</ui5-title
            >
        </div>

        <ui5-toolbar style="border: none" align-content="Start">
            <ui5-toolbar-button overflow-priority="NeverOverflow"
                text="KPI Generic tag"
            ></ui5-toolbar-button>
        </ui5-toolbar>

        <ui5-toolbar slot="actions">
            <ui5-toolbar-button id="toggleFooterBtn" text="Toggle Footer"></ui5-toolbar-button>
            <ui5-toolbar-button text="Edit" overflow-priority="NeverOverflow"></ui5-toolbar-button>
            <ui5-toolbar-button icon="delete"></ui5-toolbar-button>
            <ui5-toolbar-button icon="copy"></ui5-toolbar-button>
            <ui5-toolbar-button icon="share"></ui5-toolbar-button>
        </ui5-toolbar>

        <ui5-toolbar slot="navigationActions">
            <ui5-toolbar-button icon="full-screen"></ui5-toolbar-button>
            <ui5-toolbar-button icon="decline"></ui5-toolbar-button>
        </ui5-toolbar>
    </ui5-dynamic-page-title>`,
    headerArea: `
    <ui5-dynamic-page-header slot="headerArea">
    <div
        style="
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        "
    >
        <div
            style="
                display: flex;
                flex-direction: row;
                align-items: center;
            "
        >
            <ui5-avatar
                id="avatar"
                icon="laptop"
                color-scheme="Accent5"
                size="XL"
                style="margin: 0 1rem; min-width: 7rem"
            >
            </ui5-avatar>
            <div>
                <div class="productInfo">
                    <ui5-title level="H5">Product:</ui5-title>
                    <ui5-title level="H5" id="lblName"></ui5-title>
                </div>
                <br />
                <div class="productInfo">
                    <ui5-title level="H5">Description:</ui5-title>
                    <ui5-title level="H5" id="lblDesc"></ui5-title>
                </div>
                <br />
                <div class="productInfo">
                    <ui5-title level="H5">Supplier:</ui5-title>
                    <ui5-title level="H5" id="lblSupplier"
                        ><b>Titanium</b></ui5-title>
                    <ui5-button id="scrollBtn">Scroll to bottom</ui5-button>
                </div>
            </div>
        </div>
        <div class="productInfo" style="align-self: start">
            <ui5-title level="H5">Progress:</ui5-title>
            <ui5-progress-indicator
                id="progress"
                accessible-name="Hello World"
                value="40"
                style="width: 9rem"
            ></ui5-rating-indicator>
        </div>
        <span></span>
    </div>
    </ui5-dynamic-page-header>`,
    content: `
    <ui5-list
    id="col1list"
    header-text="Products (13)"
    mode="SingleSelect"
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-1001"
        icon="slim-arrow-right"
        icon-end
        additional-text="87.90 EUR"
        >Gladiator MX</ui5-li
    >
    </ui5-list>`,
    footer: `<ui5-bar id="footer" slot="footer" design="FloatingFooter">
    <ui5-button slot="endContent">Edit</ui5-button>
    <ui5-button slot="endContent">Close</ui5-button>
    </ui5-bar>`,

};
Basic.parameters = {
  docs: {
    story: {
      // Opt-out of inline rendering
      inline: false,
      iframeHeight: 600,
    }
  },
};

export const FitContent = Template.bind({});
FitContent.args = {
  titleArea: `<ui5-dynamic-page-title slot="titleArea">
  <ui5-breadcrumbs slot="breadcrumbs">
      <ui5-breadcrumbs-item href="https://www.sap.com"
          >Link1
      </ui5-breadcrumbs-item>
      <ui5-breadcrumbs-item
          href="https://www.sap.com"
          target="_blank"
          >Link2</ui5-breadcrumbs-item
      >
      <ui5-breadcrumbs-item href="#">Link3</ui5-breadcrumbs-item>
      <ui5-breadcrumbs-item href="#">Link4</ui5-breadcrumbs-item>
      <ui5-breadcrumbs-item href="#">Link5</ui5-breadcrumbs-item>
      <ui5-breadcrumbs-item href="#">Link6</ui5-breadcrumbs-item>
      <ui5-breadcrumbs-item href="#">Link7</ui5-breadcrumbs-item>
      <ui5-breadcrumbs-item>Location</ui5-breadcrumbs-item>
  </ui5-breadcrumbs>

  <ui5-title slot="heading">Select page content: </ui5-title>


  <div slot="expandedContent">
      <ui5-title level="H6"
          >Select content type from the dropdown</ui5-title
      >
  </div>

  <div slot="snappedContent">
      <ui5-title level="H6"
          >Select content type from the dropdown</ui5-title
      >
  </div>

  <ui5-select id="contentSelect" overflow-priority="NeverOverflow">
      <ui5-option value="templateDiv">div with height="100%"</ui5-option>
      <ui5-option value="templateIllustratedMsg">IllustratedMessage</ui5-option>
      <ui5-option value="templateDynamicSideContent">DynamicSideContent</ui5-option>
      <ui5-option value="templateMediaGallery">MediaGallery</ui5-option>
      <ui5-option value="templateProductSwitch">ProductSwitch</ui5-option>
      <ui5-option value="templateCaroussel">Carrousel</ui5-option>
      <ui5-option value="templateTable">Table</ui5-option>
      <ui5-option value="templateTableGrowingWithButton">Table growing with button</ui5-option>
      <ui5-option value="templateTableGrowingWithScroll">Table growing with scroll</ui5-option>
  </ui5-select>

  <ui5-toolbar slot="actions">
      <ui5-toolbar-button id="toggleFooterBtn" text="Toggle Footer" overflow-priority="NeverOverflow"></ui5-toolbar-button>
  </ui5-toolbar>

  <ui5-toolbar slot="navigationActions">
      <ui5-toolbar-button icon="full-screen"></ui5-toolbar-button>
      <ui5-toolbar-button icon="decline"></ui5-toolbar-button>
  </ui5-toolbar>
</ui5-dynamic-page-title>`,
  headerArea: `<ui5-dynamic-page-header slot="headerArea">
  <div
      style="
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
      "
  >
      <div
          style="
              display: flex;
              flex-direction: row;
              align-items: center;
          "
      >
          <ui5-avatar
              id="avatar"
              icon="laptop"
              color-scheme="Accent5"
              size="XL"
              style="margin: 0 1rem; min-width: 7rem"
          >
          </ui5-avatar>
          <div>
              <div class="productInfo">
                  <ui5-title level="H5">Product:</ui5-title>
                  <ui5-title level="H5" id="lblName"></ui5-title>
              </div>
              <br />
              <div class="productInfo">
                  <ui5-title level="H5">Description:</ui5-title>
                  <ui5-title level="H5" id="lblDesc"></ui5-title>
              </div>
              <br />
              <div class="productInfo">
                  <ui5-title level="H5">Supplier:</ui5-title>
                  <ui5-title level="H5" id="lblSupplier"
                      ><b>Titanium</b></ui5-title
                  >
              </div>
          </div>
      </div>
      <div class="productInfo" style="align-self: start">
          <ui5-title level="H5">Rating:</ui5-title>
          <ui5-rating-indicator
              id="productRating"
              accessible-name="Hello World"
              value="3.5"
          ></ui5-rating-indicator>
      </div>
      <span></span>
  </div>
</ui5-dynamic-page-header>`,
  footer: `<ui5-bar id="footer" slot="footer" design="FloatingFooter">
  <ui5-button slot="endContent">Edit</ui5-button>
  <ui5-button slot="endContent">Close</ui5-button>
</ui5-bar>`
}

FitContent.decorators = [
    (story) => html`
    ${story()}
<template id="templateDiv">
  <div id="content" style="height:100%;display:flex;flex-direction:column;background-color: #00800037;">
      <div>first item</div>
      <div style="height:100%;"></div>
      <div>last item</div>
  </div>
</template>

<template id="templateIllustratedMsg">
  <ui5-illustrated-message class="border">
      <ui5-button>Action 1</ui5-button>
  </ui5-illustrated-message>
</template>

<template id="templateDynamicSideContent">
  <ui5-dynamic-side-content
      class="content-padding">
      <div>
          <h1>Main Content</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
          <p>Sed mauris nunc, sollicitudin eget mi nec, tincidunt molestie diam. Aliquam orci dui, vestibulum quis blandit et, interdum vel arcu. Vestibulum sit amet quam ut sapien pulvinar consequat ac sed turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus quam diam, mattis vitae condimentum ac, ornare vel dui. Pellentesque orci tellus, tempor vel ex eget, luctus vehicula massa. Nullam laoreet, lacus ut vulputate maximus, quam sem molestie nunc, vitae convallis sem nisi nec magna.</p>
          <p>Nullam a felis odio. Curabitur quis tellus nec risus suscipit dictum vitae eget augue. Maecenas faucibus felis a arcu ultricies, sed tempor ante pellentesque. Ut hendrerit ipsum sit amet ligula bibendum, sit amet vehicula lacus condimentum. Morbi lacinia nibh eu placerat sollicitudin. Praesent accumsan pulvinar massa, eget finibus odio lacinia ullamcorper. Integer neque quam, pretium sed accumsan id, euismod non nibh.</p>
          <p>Quisque luctus non mi in mollis. Suspendisse id lectus felis. Aliquam elementum nibh nibh. Nullam eget condimentum dolor. Suspendisse id dui non lorem imperdiet iaculis. Pellentesque ex turpis, vehicula a arcu quis, mattis auctor tellus. In ornare, libero ac rhoncus eleifend, felis orci sagittis felis, ac molestie est lacus fermentum odio. Mauris et porta nibh. Integer tellus leo, laoreet nec odio non, rutrum bibendum magna.</p>
      </div>
      <div slot="sideContent">
          <h1>Side Content</h1>
          <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
          <p>Vivamus ut efficitur massa, ac porttitor dolor. Nullam nec elit quis urna convallis tincidunt. Suspendisse potenti. Phasellus dignissim eget mauris eu egestas. Phasellus accumsan pulvinar pharetra. Pellentesque egestas viverra ipsum. Maecenas a dapibus neque. Morbi tincidunt ultricies enim, ac vehicula elit dapibus sit amet. Donec vel felis at felis elementum sodales id id erat. Pellentesque rutrum placerat mollis. In hac habitasse platea dictumst. Sed eget quam aliquet, pretium ligula vitae, lobortis mauris. Aenean eget ipsum auctor, dapibus quam at, pharetra nunc.</p>
      </div>
  </ui5-dynamic-side-content>
</template>

<template id="templateMediaGallery">
  <ui5-media-gallery>
  <ui5-media-gallery-item>
  <img src="../assets/images/HT-1000.jpg" />
</ui5-media-gallery-item>
<ui5-media-gallery-item>
  <img src="../assets/images/HT-1010.jpg" />
</ui5-media-gallery-item>
<ui5-media-gallery-item>
  <img src="../assets/images/HT-1022.jpg" />
</ui5-media-gallery-item>
<ui5-media-gallery-item>
  <img src="../assets/images/HT-1030.jpg" />
</ui5-media-gallery-item>
<ui5-media-gallery-item>
  <img src="../assets/images/HT-2002.jpg" />
</ui5-media-gallery-item>
<ui5-media-gallery-item>
  <img src="../assets/images/HT-2026.jpg" />
</ui5-media-gallery-item>
  </ui5-media-gallery>
</template>

<template id="templateProductSwitch">
  <ui5-product-switch>
      <ui5-product-switch-item id="firstItem" title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Guided Buying" icon="credit-card"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Strategic Procurement" icon="cart-3"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Travel & Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Vendor Management" subtitle-text="Fieldglass" icon="shipping-status"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Human Capital Management" icon="customer"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Sales Cloud" subtitle-text="Sales Cloud" icon="sales-notification"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Commerce Cloud" subtitle-text="Commerce Cloud" icon="retail-store"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Marketing Cloud" subtitle-text="Marketing Cloud" icon="marketing-campaign"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Service Cloud" icon="family-care"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="Customer Data Cloud" icon="customer-briefing"></ui5-product-switch-item>
      <ui5-product-switch-item title-text="S/4HANA" icon="batch-payments"></ui5-product-switch-item>
  </ui5-product-switch>
</template>

<template id="templateCaroussel">
  <ui5-carousel cyclic="true">
      <ui5-button>Button 1</ui5-button>
      <ui5-button>Button 2</ui5-button>
      <ui5-button>Button 3</ui5-button>
  </ui5-carousel>
</template>

<template id="templateTable">
  <ui5-table class="demo-table" accessible-name-ref="tableLabel" id="tbl">
      <!-- Columns -->
      <ui5-table-column id="column-1" slot="columns" width="350px">
          <ui5-label>Product</ui5-label>
      </ui5-table-column>

      <ui5-table-column id="column-2" slot="columns" min-width="800" popin-text="Supplier">
          <ui5-label>Supplier</ui5-label>
      </ui5-table-column>

      <ui5-table-column id="column-3" slot="columns" min-width="600" popin-text="Dimensions" demand-popin popin-display="Inline">
          <div class="column-content">
              <ui5-label>Dimensions</ui5-label>
          </div>
      </ui5-table-column>

      <ui5-table-column id="column-4" slot="columns" min-width="600" popin-text="Weight" demand-popin>
          <ui5-label>Weight</ui5-label>
      </ui5-table-column>

      <ui5-table-column id="column-5" slot="columns">
          <ui5-label>Price</ui5-label>
      </ui5-table-column>
  </ui5-table>
</template>

<template id="templateTableGrowingWithButton">
  <ui5-table id="tbl" growing="Button">
      <ui5-table-column id="column-1" slot="columns" width="350px">
          <ui5-label>Product</ui5-label>
      </ui5-table-column>

      <ui5-table-column id="column-2" slot="columns" min-width="800" popin-text="Supplier">
          <ui5-label>Supplier</ui5-label>
      </ui5-table-column>

      <ui5-table-column id="column-3" slot="columns" min-width="600" popin-text="Dimensions" demand-popin>
          <div class="column-content">
              <ui5-label>Dimensions</ui5-label>
          </div>
      </ui5-table-column>

      <ui5-table-column id="column-4" slot="columns" min-width="600" popin-text="Weight" demand-popin>
          <ui5-label>Weight</ui5-label>
      </ui5-table-column>

      <ui5-table-column id="column-5" slot="columns">
          <ui5-label>Price</ui5-label>
      </ui5-table-column>
  </ui5-table>
</template>

<template id="templateTableGrowingWithScroll">
  <ui5-table id="tbl" growing="Scroll">
      <ui5-table-column id="column-1" slot="columns" width="350px">
          <ui5-label>Product</ui5-label>
      </ui5-table-column>

      <ui5-table-column id="column-2" slot="columns" min-width="800" popin-text="Supplier">
          <ui5-label>Supplier</ui5-label>
      </ui5-table-column>

      <ui5-table-column id="column-3" slot="columns" min-width="600" popin-text="Dimensions" demand-popin>
          <div class="column-content">
              <ui5-label>Dimensions</ui5-label>
          </div>
      </ui5-table-column>

      <ui5-table-column id="column-4" slot="columns" min-width="600" popin-text="Weight" demand-popin>
          <ui5-label>Weight</ui5-label>
      </ui5-table-column>

      <ui5-table-column id="column-5" slot="columns">
          <ui5-label>Price</ui5-label>
      </ui5-table-column>
  </ui5-table>
</template>
    <script>
    var products = {
        "ProductCollection": [{
            "ProductId": "HT-1000",
            "Category": "Laptops",
            "MainCategory": "Computer Systems",
            "TaxTarifCode": "1",
            "SupplierName": "Very Best Screens",
            "WeightMeasure": 4.2,
            "WeightUnit": "KG",
            "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15 LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
            "Name": "Notebook Basic 15",
            "DateOfSale": "2017-03-26",
            "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
            "Status": "Available",
            "Quantity": 10,
            "UoM": "PC",
            "CurrencyCode": "EUR",
            "Price": 956,
            "Width": 30,
            "Depth": 18,
            "Height": 3,
            "DimUnit": "cm"
        }, {
            "ProductId": "HT-1001",
            "Category": "Laptops",
            "MainCategory": "Computer Systems",
            "TaxTarifCode": "1",
            "SupplierName": "Very Best Screens",
            "WeightMeasure": 4.5,
            "WeightUnit": "KG",
            "Description": "Notebook Basic 17 with 2,80 GHz quad core, 17 LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
            "Name": "Notebook Basic 17",
            "DateOfSale": "2017-04-17",
            "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
            "Status": "Available",
            "Quantity": 20,
            "UoM": "PC",
            "CurrencyCode": "EUR",
            "Price": 1249,
            "Width": 29,
            "Depth": 17,
            "Height": 3.1,
            "DimUnit": "cm"
        }, {
            "ProductId": "HT-1002",
            "Category": "Laptops",
            "MainCategory": "Computer Systems",
            "TaxTarifCode": "1",
            "SupplierName": "Very Best Screens",
            "WeightMeasure": 4.2,
            "WeightUnit": "KG",
            "Description": "Notebook Basic 18 with 2,80 GHz quad core, 18 LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
            "Name": "Notebook Basic 18",
            "DateOfSale": "2017-01-07",
            "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg",
            "Status": "Available",
            "Quantity": 10,
            "UoM": "PC",
            "CurrencyCode": "EUR",
            "Price": 1570,
            "Width": 28,
            "Depth": 19,
            "Height": 2.5,
            "DimUnit": "cm"
        }, {
            "ProductId": "HT-1003",
            "Category": "Laptops",
            "MainCategory": "Computer Systems",
            "TaxTarifCode": "1",
            "SupplierName": "Smartcards",
            "WeightMeasure": 4.2,
            "WeightUnit": "KG",
            "Description": "Notebook Basic 19 with 2,80 GHz quad core, 19 LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
            "Name": "Notebook Basic 19",
            "DateOfSale": "2017-04-09",
            "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg",
            "Status": "Available",
            "Quantity": 15,
            "UoM": "PC",
            "CurrencyCode": "EUR",
            "Price": 1650,
            "Width": 32,
            "Depth": 21,
            "Height": 4,
            "DimUnit": "cm"
        }, {
            "ProductId": "HT-1007",
            "Category": "Accessories",
            "MainCategory": "Computer Components",
            "TaxTarifCode": "1",
            "SupplierName": "Technocom",
            "WeightMeasure": 0.2,
            "WeightUnit": "KG",
            "Description": "Digital Organizer with State-of-the-Art Storage Encryption",
            "Name": "ITelO Vault",
            "DateOfSale": "2017-05-17",
            "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",
            "Status": "Available",
            "Quantity": 15,
            "UoM": "PC",
            "CurrencyCode": "EUR",
            "Price": 299,
            "Width": 32,
            "Depth": 22,
            "Height": 3,
            "DimUnit": "cm"
        }, {
            "ProductId": "HT-1010",
            "Category": "Accessories",
            "MainCategory": "Computer Systems",
            "TaxTarifCode": "1",
            "SupplierName": "Very Best Screens",
            "WeightMeasure": 4.3,
            "WeightUnit": "KG",
            "Description": "Notebook Professional 15 with 2,80 GHz quad core, 15 Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
            "Name": "Notebook Professional 15",
            "DateOfSale": "2017-02-22",
            "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg",
            "Status": "Available",
            "Quantity": 16,
            "UoM": "PC",
            "CurrencyCode": "EUR",
            "Price": 1999,
            "Width": 33,
            "Depth": 20,
            "Height": 3,
            "DimUnit": "cm"
        }, {
            "ProductId": "HT-1011",
            "Category": "Laptops",
            "MainCategory": "Computer Systems",
            "TaxTarifCode": "1",
            "SupplierName": "Very Best Screens",
            "WeightMeasure": 4.1,
            "WeightUnit": "KG",
            "Description": "Notebook Professional 17 with 2,80 GHz quad core, 17 Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
            "Name": "Notebook Professional 17",
            "DateOfSale": "2017-01-02",
            "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1011.jpg",
            "Status": "Available",
            "Quantity": 17,
            "UoM": "PC",
            "CurrencyCode": "EUR",
            "Price": 2299,
            "Width": 33,
            "Depth": 23,
            "Height": 2,
            "DimUnit": "cm"
        }]
    };

    const page = document.getElementById("page"),
        maxTableRowsCount = 20;

    document.getElementById("contentSelect").addEventListener("ui5-change", (event) => {
        const currentContent = page.getSlottedNodes("content")[0];
        if (currentContent) {
            currentContent.remove();
        }

        const selectedTemplateId = event.detail.selectedOption.value,
            selectedTemplate = document.getElementById(selectedTemplateId);

        page.appendChild(selectedTemplate.content.cloneNode(true).children[0]);

        let table = document.querySelector("ui5-table");;
        if (table) {
            addTableRows(table, 7);
            table.addEventListener("ui5-load-more", () => {
                if (!maxRowsLengthReached(table)) {
                    addTableRows(table, 4);
                }
            });
        }
    });

    document.getElementById("toggleFooterBtn").addEventListener("click", () => {
        page.showFooter = !page.showFooter;
    });

    page.appendChild(templateDiv.content.cloneNode(true).children[0]);

    function addTableRows(tbl, rows) {
        tbl.busy = true;

        var html = '';
        products.ProductCollection.slice(0, rows).forEach(function (product, index, arr) {
            var test = "<ui5-table-row><ui5-table-cell><ui5-label>".concat(product.Name, "</ui5-label><ui5-label>").concat(product.ProductId, "</ui5-label></ui5-table-cell><ui5-table-cell><ui5-label>").concat(product.SupplierName, "</ui5-label></ui5-table-cell><ui5-table-cell><ui5-label >").concat(product.Width, " x ").concat(product.Depth, " x ").concat(product.Height, " ").concat(product.DimUnit, "</ui5-label></ui5-table-cell><ui5-table-cell><ui5-label>").concat(product.WeightMeasure, "</b> ").concat(product.WeightUnit, "</ui5-label></ui5-table-cell><ui5-table-cell><ui5-label>").concat(product.Price, "</b> ").concat(product.CurrencyCode, "</ui5-label></ui5-table-cell></ui5-table-row>");
            html += test;
        });

        tbl.insertAdjacentHTML('beforeend', html);

        setTimeout(function() {
            tbl.busy = false;
        }, 1500);
    }

    function maxRowsLengthReached(tbl) {
        return tbl.querySelectorAll("ui5-table-row").length > maxTableRowsCount;
    }

</script>`,
];

FitContent.storyName = "Dynamic page with fit content";

export const ShortContent = Template.bind({});
ShortContent.args = {
  titleArea: `<ui5-dynamic-page-title slot="titleArea">
                <ui5-title>Short Title text</ui5-title>
              </ui5-dynamic-page-title>`,
  headerArea: `<ui5-dynamic-page-header slot="headerArea">
                    <ui5-text>Short Heaader text</ui5-text>
                </ui5-dynamic-page-header>`,
  content: `<ui5-text>Short Content text</ui5-text>`
}
ShortContent.storyName = "Dynamic page with short content"
