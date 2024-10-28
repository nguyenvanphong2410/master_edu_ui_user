import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import './styles.scss';
import {Input, Popover} from 'antd';
import ImageUser from '@/assets/images/logos/user_default.png';
import {useDispatch, useSelector} from 'react-redux';
import logoLight from '@/assets/images/logos/logoLight.png';
import {useNavigate} from 'react-router-dom';
import InlineSVG from 'react-inlinesvg';
import SearchIcon from '@/assets/images/icons/duotone/magnifying-glass.svg';
import contentInfo from '@/layouts/UserLayout/Header/components/PopoverProfile';

import { useDebounce } from '@/utils/hooks/useDebounce';
import { setDataFilterCourse } from '@/states/modules/package';
import { handleGetListDataPackages } from '@/api/package';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const authUser = useSelector((state) => state.auth.authUser);
  const path = useSelector((state) => state.app.location.pathName);
  const dataFilter = useSelector((state) => state.package.dataFilter)
  const debouncedQuery = useDebounce(dataFilter.keySearch, 500);

  useEffect(() => {
      dispatch(setDataFilterCourse({...dataFilter, keySearch: debouncedQuery}));
      dispatch(handleGetListDataPackages());
  }, [debouncedQuery]);
  
  return (
    <>
      <header className={styles.headerWrap}>
        <div className={styles.headerContent}>
          <div className={styles.headerLeftWrap}>
            <div className={styles.logoHeader}>
              <div className={`${styles.imgWrap}`}>
                <img src={logoLight} alt="img-logo" onClick={() => navigate('/')} />
              </div>
            </div>
          </div>
          <div className={styles.navBar}>
          <div className="w-[350px]">
              <Input
                prefix={<InlineSVG src={SearchIcon} 
                className={`w-3.5 ml-[-7px] mr-1`} alt="img" />}
                className={`main-input-home`}
                placeholder="Tìm kiếm khóa học phù hợp với bạn"
                value={dataFilter.keySearch}
                onChange={(e) =>
                  dispatch(
                    setDataFilterCourse({
                      ...dataFilter,
                      keySearch: e.target.value,
                    })
                  )
                }
              />
            </div>
            <ul className={styles.navContent}>
              <li
                className={path === '/' ? `${styles.navItem} ${styles.activePath}` : styles.navItem}
                onClick={() => navigate('/')}
              >
                Trang chủ
              </li>

              <li
                className={path === '/my-courses' ? `${styles.navItem} ${styles.activePath}` : styles.navItem}
                onClick={() => navigate('/my-courses')}
              >
                Khóa học của bạn
              </li>
              <li
                className={path === '/intro' ? `${styles.navItem} ${styles.activePath}` : styles.navItem}
                onClick={() => navigate('/intro')}
              >
                Giới thiệu
              </li>
              <li
                className={path === '/contact' ? `${styles.navItem} ${styles.activePath}` : styles.navItem}
                onClick={() => navigate('/contact')}
              >
                Liên hệ
              </li>
            </ul>
            
          </div>
          <div className={`${styles.headerRightWrap}`}>
            <div className={`${styles.itemHeaderRight}`}>
              <Popover
                className={`popover-info-wrap`}
                placement="bottomRight"
                content={contentInfo}
                trigger="click"
              >
                <div className={styles.infoWrap}>
                  <div className={styles.avatarWrap}>
                    <img crossOrigin="anonymous" src={authUser.avatar ? authUser.avatar : ImageUser} alt="" />
                  </div>
                </div>
              </Popover>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
