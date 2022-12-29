import { Layout } from "antd";
import { ReactNode } from "react";
import { TopMenuItemWithIcon } from "../../../shared/common/types";
import Header from "../components/Header";
import BasicSider from "./components/Sider";
import "./HomeLayout.scss";
const { Content } = Layout;
interface HomeLayoutProps {
    children: ReactNode;
    menus: TopMenuItemWithIcon[];
    linkTo?: string;
    state?: any;
    rightAddons?: ReactNode;
}

export default function HomeLayout({
    rightAddons,
    children,
    menus,
    state,
    linkTo,
}: HomeLayoutProps) {
    return (
        <Layout className="base-layout">
            {/* <Header linkTo={linkTo} rightAddons={rightAddons} state={state} /> */}
            <Layout>
                <BasicSider menus={menus} width="264px" />
                <Layout>
                    <Content style={{ padding: "0 1.5rem" }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
