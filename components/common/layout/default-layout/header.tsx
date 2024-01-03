'use client';

import { authActions, selectAuth } from '@/redux/auth-slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '../../logo';
import styles from './header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user: any = useAppSelector(selectAuth).user;

  const onLogout = () => {
    dispatch(authActions.setUser(null));
    router.push('/dang-nhap');
  };

  return (
    <header id={styles.main}>
      <div className={styles.container + ' container'}>
        <Link href="/">
          <Logo />
        </Link>
        {user ? (
          <Dropdown
            className={styles.user_container}
            menu={{ items: [{ key: 'logout', label: 'Đăng xuất', onClick: onLogout }] }}
          >
            <Space>
              <div className={styles.user_avatar}>
                <img src={user.avatar} />
              </div>
              <div className={styles.user_name}>{user.fullName}</div>
            </Space>
          </Dropdown>
        ) : (
          <div className={styles.auth_link}>
            <Link href={'/dang-nhap'} className={styles.auth_link_item}>
              Đăng nhập
            </Link>
            <Link href={'/dang-ky'} className={styles.auth_link_item}>
              Đăng ký
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
