import { Layout, SiderProps } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TopMenuItemWithIcon } from "../../../../../shared/common/types";
import { Menu } from "../Menu";
import "./BasicSider.scss";
const { Sider } = Layout;

interface BasicSiderProps extends SiderProps {
    menus: TopMenuItemWithIcon[];
}
const BasicSider = ({ menus, ...restProps }: BasicSiderProps) => {
    const location = useLocation();
    const defaultKey = menus
        .flatMap((menu) => [menu, ...(menu.subMenu ? menu.subMenu : [])])
        .find(
            (menu) =>
                menu.link === location.pathname.substring(0, menu.link.length)
        )?.key;

    const [selectedKey, setSelectedKey] = useState(defaultKey);
    const items = menus.map((item) => {
        return item.subMenu
            ? {
                  className: "yennefer-sider__content__submenu",
                  label: (
                      <>
                          {item.icon}
                          <span>{item.label}</span>
                      </>
                  ),
                  key: item.key,
                  children: item.subMenu.map((m) => {
                      return {
                          className: "yennefer-sider__content__submenu-item",
                          label: (
                              <>
                                  {m.icon}
                                  <Link to={m.link}>
                                      <span>{m.label}</span>
                                  </Link>
                              </>
                          ),
                          key: m.key,
                          onClick: () => {
                              setSelectedKey(m.key);
                          },
                      };
                  }),
              }
            : {
                  className: "yennefer-sider__content__menu-item",
                  label: (
                      <>
                          <>
                              {item.icon}
                              <Link to={item.link}>
                                  <span>{item.label}</span>
                              </Link>
                          </>
                      </>
                  ),
                  key: item.key,
                  //   disabled: item.key === "Home",
              };
    });
    return (
        <Sider {...restProps} className="yennefer-sider">
            <Menu
                mode="inline"
                className="yennefer-sider__content"
                items={items}
                selectedKeys={selectedKey ? [selectedKey] : []}
            />
        </Sider>
    );
};

export default BasicSider;
