import type { AppProps } from "next/app";
import { SSRProvider } from "@react-aria/ssr";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SSRProvider>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <ToastContainer />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </SSRProvider>
    </>
  );
}

export default MyApp;
