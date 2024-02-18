import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
// import css from "./SharedLayout.module.css"

const SharedLayout = () => {
    return (
      <>
        <Suspense fallback={<Loader />}>
                <Outlet />
        </Suspense>
      </>
    );
}

export default SharedLayout;