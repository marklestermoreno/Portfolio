interface Tab {
    title: string;
    component: JSX.Element;
}

export interface TabsProps {
    tabs: Tab[];
}
