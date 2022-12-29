import "./App.css";
import { BrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  RouteProps,
} from "react-router-dom";
import { myLocalStorageKeyName } from "./shared/common/constant";
import { getCookie } from "./utils/myCookies";
import BasicLayout from "./preseters/layouts/BasicLayout";
import LoginForm from "./preseters/layouts/components/LoginForm";
import { message } from "antd";
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

const onFinish = () => {
  message.success("로그인 성공하셨습니다.");
};

function App({ history }: AppProps) {
  const login = () => {};
  return (
    <HistoryRouter history={history}>
      <Routes>
        {/* {home} */}
        <Route path="/*" element={<BasicLayout />}></Route>
        <Route>
          <Route path="/login" element={<LoginForm onFinish={onFinish} />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
