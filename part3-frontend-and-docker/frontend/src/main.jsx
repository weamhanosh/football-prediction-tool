import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RecoilRoot} from "recoil"
import {QueryClient, QueryClientProvider} from "react-query"

const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnmount: false,
                refetchOnReconnect: false,
                retry: 1,
                staleTime: 5 * 1000,
            },
        },
    });

ReactDOM.createRoot(document.getElementById('root')).render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </RecoilRoot>
)
