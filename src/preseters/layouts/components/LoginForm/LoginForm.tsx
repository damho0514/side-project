import { Button, Divider, Form, Input, Typography } from 'antd';
import './LoginForm.scss';

import KAKAO_IMG from '../../../../assets/imges/kakao_login.png';
import { useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import { useNavigate } from 'react-router';
interface LoginProps {
  onFinish: () => void;
}

const REST_API_KEY = '7038934895251cea79186382ff91203e';
const REDIRECT_URI = 'http://localhost:3000/oauth';
const code = new URL(window.location.href).searchParams.get('code');
const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export default function Login({ onFinish }: LoginProps) {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  };

  // calllback으로 받은 인가코드

  const navigate = useNavigate();

  // const getToken = async () => {
  //   const payload = qs.stringify({
  //     grant_type: 'authorization_code',
  //     client_id: REST_API_KEY,
  //     redirect_uri: REDIRECT_URI,
  //     code: code,
  //     client_secret: KAKAO_AUTH_URI,
  //   });

  //   try {
  //     const res = await axios.post('https://kauth.kakao.com/oauth/token', payload);

  //     navigate('/');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getToken();
  // }, []);

  return (
    <div className="appBg">
      <Form className="loginForm" onFinish={onFinish}>
        <Typography.Title>Welcome User!</Typography.Title>
        <Form.Item
          label="Email"
          name={'myEmail'}
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Plase enter valid email',
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name={'myPassword'}
          rules={[
            {
              required: true,
              message: 'Plase enter valid password',
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <Divider style={{ borderColor: 'black' }}>or Login with</Divider>
        <div className="socialLogin" onClick={handleLogin}>
          <img src={KAKAO_IMG} alt="kakao_img" />
        </div>
      </Form>
    </div>
  );
}
