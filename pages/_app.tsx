import type { AppProps} from 'next/app'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ToastContainer/>
      <Component {...pageProps} />
    </>
    
  );
}

export default MyApp;
