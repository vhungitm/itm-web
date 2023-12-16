import styles from './index.module.scss';

const Logo = () => {
  return (
    <div className={styles.site_name_container}>
      <div className={styles.site_name}>ITM</div>
      <div className={styles.site_name_sub}>MẠNG XÃ HỘI</div>
    </div>
  );
};

export default Logo;
