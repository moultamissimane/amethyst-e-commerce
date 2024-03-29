import { Fragment, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Carousels from '../carousels';
import DownFooter from '../footer/down-footer';
import Footer from '../footer/footer';
import Header from '../header';
import Meta from '../UI/meta';

type LayoutProvider = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const DefaultLayout = ({
  title = '',
  description = '',
  children,
}: LayoutProvider) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <Fragment>
      <Meta title={title} description={description} />
      <Header />
      {isHome && <Carousels />}
      <main id='main' className='py-3' style={{backgroundColor: "#EEE7DA" }}>
        {children}
      </main>
      {isHome}
      <div id='footer'>
        {isHome && <DownFooter />}
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
};

export default DefaultLayout;
