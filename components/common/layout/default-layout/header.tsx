'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../logo';
import styles from './header.module.scss';

const Header = () => {
  const headerMenu = [
    { name: 'Đăng nhập', url: '/dang-nhap' },
    { name: 'Đăng ký', url: '/dang-ky' }
  ];

  const pathname = usePathname();

  return (
    <header id={styles.main}>
      <div className={styles.container + ' container'}>
        <Link href="/">
          <Logo />
        </Link>
        <div className={styles.menu}>
          {headerMenu.map(menu => {
            let className = styles.menu_item;
            const isActive = menu.url === pathname;
            if (isActive) className += ' ' + styles.is_active;

            return (
              <Link href={menu.url} className={className} key={menu.name}>
                {menu.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
