import './App.css';
import { BrowserHistory } from 'history';
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  RouteProps,
} from 'react-router-dom';
import { myLocalStorageKeyName } from './shared/common/constant';
import { getCookie } from './utils/myCookies';
import BasicLayout from './preseters/layouts/BasicLayout';
import LoginForm from './preseters/layouts/components/LoginForm';
import { message } from 'antd';
interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode;
}

interface AppProps {
  history: BrowserHistory;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const tokenValue = localStorage.getItem(myLocalStorageKeyName);
  const cookieValue = getCookie(myLocalStorageKeyName);
  const location = useLocation();

  return cookieValue || tokenValue ? (
    <>{children}</>
  ) : (
    <Navigate to={`/`} state={{ from: location }} />
  );
}

const KAKAO_CLIENTID = '05ee8f0cd81a9faa258924cd52286687';
const REDIRECT_URI = 'http://localhost:3000/kakaoLogin';
const LOGIN_URL = `http://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENTID}\
&redirect_uri=${REDIRECT_URI}&response_type=code`;

function App({ history }: AppProps) {
  const onFinish = () => {
    message.success('로그인 성공하셨습니다.');
  };

  const handleLogin = () => {
    window.location.href = LOGIN_URL;
  };

  return (
    <HistoryRouter history={history}>
      <Routes>
        {/* {home} */}
        {/* <Route path="/*" element={<BasicLayout />}></Route> */}
        <Route>
          <Route
            path="/login"
            element={<LoginForm handleLogin={handleLogin} onFinish={onFinish} />}
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
