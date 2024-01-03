import MessageProvider from '@/components/common/message-provider';
import Providers from '@/redux/providers';
import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import { ReactNode, Suspense } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './layout.scss';
import AuthProvider from '@/components/common/auth-provider';
import Loading from './loading';

const Layout = ({ children }: { children: ReactNode }) => {
  const theme: ThemeConfig = {
    token: {
      borderRadius: 4,
      fontFamily: 'Montserrat, sans-serif'
    }
  };

  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,900;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense fallback={<Loading />}>
          <ConfigProvider theme={theme}>
            <Providers>
              <AuthProvider>
                <MessageProvider>
                  <main>{children}</main>
                </MessageProvider>
              </AuthProvider>
            </Providers>
          </ConfigProvider>
        </Suspense>
      </body>
    </html>
  );
};

export default Layout;
