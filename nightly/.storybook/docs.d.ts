interface DocsPageArgs {
    showDefaultStoryOnly?: boolean;
    component: string;
    package: string;
    since?: string;
}
export declare const DocsPage: (args: DocsPageArgs) => () => import("react/jsx-runtime").JSX.Element;
export {};
