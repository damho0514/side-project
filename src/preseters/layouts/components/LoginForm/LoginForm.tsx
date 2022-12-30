import { Button, Divider, Form, Input, Typography } from "antd";
import "./LoginForm.scss";

import KAKAO_IMG from "../../../../assets/imges/kakao_login.png";
interface LoginProps {
    onFinish: () => void;

    handleLogin: () => void;
}

export default function Login({
    onFinish,

    handleLogin,
}: LoginProps) {
    return (
        <div className="appBg">
            <Form className="loginForm" onFinish={onFinish}>
                <Typography.Title>Welcome User!</Typography.Title>
                <Form.Item
                    label="Email"
                    name={"myEmail"}
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: "Plase enter valid email",
                        },
                    ]}
                >
                    <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name={"myPassword"}
                    rules={[
                        {
                            required: true,
                            message: "Plase enter valid password",
                        },
                    ]}
                >
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Login
                </Button>
                <Divider style={{ borderColor: "black" }}>
                    or Login with
                </Divider>
                <div className="socialLogin" onClick={handleLogin}>
                    <img src={KAKAO_IMG} alt="kakao_img" />
                </div>
            </Form>
        </div>
    );
}
