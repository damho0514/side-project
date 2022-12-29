import { Outlet } from "react-router-dom";
import { TopMenuItemWithIcon } from "../../shared/common/types";
import HomeLayout from "./HomeLayout/HomeLayout";

const MENU_LIST: TopMenuItemWithIcon[] = [
    {
        link: `/home`,
        key: "Home",
        label: "Home",
    },
];

const BasicLayout = () => {
    return (
        <>
            <HomeLayout menus={MENU_LIST} state={{ key: "Home" }} linkTo="/">
                <Outlet />
            </HomeLayout>
        </>
    );
};

export default BasicLayout;
