import React from "react";

export interface TopMenuItem {
    link: string;
    key: string;
    label: string;
    subMenu?: TopMenuItem[];
    outlink?: string;
    disabled?: string;
}

export interface TopMenuItemWithIcon extends TopMenuItem {
    icon?: React.ReactNode;
    subMenu?: TopMenuItemWithIcon[];
}
