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

function App({ history }: AppProps) {
    return (
        <HistoryRouter history={history}>
            <Routes>
                {/* {home} */}
                <Route path="/*" element={<BasicLayout />}>
                    <Route path="/login" element={<}/>
                </Route>
            </Routes>
        </HistoryRouter>
    );
}

export default App;
