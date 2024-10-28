import React, {useEffect} from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {goToPageSuccess} from '@/states/modules/app';
import styles from './styles.module.scss';

function UserLayout(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToPage = useSelector((state) => state.app.goToPage);
  
  useEffect(() => {
    if (goToPage.path && !goToPage.redirected) {
      dispatch(goToPageSuccess());
      navigate(goToPage.path);
    }
  }, [goToPage, navigate, dispatch]);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className={`${styles.contentUserLayout}`}>
      {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout;
