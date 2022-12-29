import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import App from "./App";
import history from "./utils/history";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            keepPreviousData: true,
        },
    },
});
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App history={history} />
        </QueryClientProvider>
    </React.StrictMode>
);
