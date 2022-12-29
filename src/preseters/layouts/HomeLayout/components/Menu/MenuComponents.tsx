import Menu, { SubMenuProps } from "antd/es/menu";
import { MenuItemProps, MenuProps } from "rc-menu";
import { ReactNode } from "react";

interface MenuComponentProps extends MenuProps {
    children?: ReactNode;
}
interface SubmenuComponentProps extends SubMenuProps {
    children: ReactNode;
}

const MenuComponent = ({ ...restProps }: MenuComponentProps) => {
    return <Menu {...restProps} />;
};

const MenuItems = ({ ...restProps }: MenuItemProps) => {
    return <Menu.Item {...restProps} />;
};

const SubMenu = ({ ...restProps }: SubmenuComponentProps) => {
    return <Menu.SubMenu {...restProps} />;
};

MenuComponent.Item = MenuItems;
MenuComponent.SubMenu = SubMenu;

export { MenuComponent, MenuItems };
