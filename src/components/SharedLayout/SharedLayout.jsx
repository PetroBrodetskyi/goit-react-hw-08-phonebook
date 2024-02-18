import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Navbar from 'components/Navbar/Navbar';
// import css from "./SharedLayout.module.css"

const SharedLayout = () => {
    return (
      <>
        <Navbar />
        <Suspense fallback={<Loader />}>
                <Outlet />
        </Suspense>
      </>
    );
}

export default SharedLayout;