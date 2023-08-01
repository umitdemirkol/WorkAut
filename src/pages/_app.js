import Layout from '@/components/Layout';
import '@/styles/globals.css';
import store from '@/utils/store';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
