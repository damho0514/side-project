import React, { ReactNode, useState } from "react";
import { Layout } from "antd";
import "./Header.scss";

import { useNavigate } from "react-router-dom";

const { Header } = Layout;

type YenneferHeaderProps = {
    linkTo?: string;
    rightAddons?: ReactNode;
    state?: any;
};

function YenneferHeader({ linkTo, rightAddons, state }: YenneferHeaderProps) {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const onClick = () => {
        navigate(linkTo || "#", { state });
    };

    return (
        <Header className="yennefer-header">
            <div className="yennefer-header__content">
                <div className="yennefer-header__content__right">
                    {rightAddons}
                </div>
            </div>
        </Header>
    );
}

export default YenneferHeader;
