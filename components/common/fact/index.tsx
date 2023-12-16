'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';

const Fact = () => {
  const [data] = useState([
    { id: 1, avatar: '/media/dang-nhap/no-avatar.png', fullName: 'Văn Hùng' },
    { id: 2, avatar: '/media/dang-nhap/no-avatar.png', fullName: 'Lê Huy' },
    { id: 3, avatar: '/media/dang-nhap/no-avatar.png', fullName: 'Quốc Quân' }
  ]);

  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>
        <div className={styles.header}>
          <h2 className={styles.title}>ITM Fact</h2>
          <Link href="/facts" className={styles.view_more}>
            Xem tất cả
          </Link>
        </div>
        <div className={styles.body}>
          <Swiper className={styles.items} spaceBetween={12} slidesPerView="auto" pagination={{ clickable: true }}>
            <SwiperSlide className={styles.create_new_item}>
              <div className={styles.icon}>
                <svg viewBox="0 0 20 20" width="20" height="20">
                  <path d="M0 10H20 10M10 0V10 20" strokeWidth={2} stroke="white" />
                </svg>
              </div>
              <div className={styles.title}>Tạo fact mới</div>
            </SwiperSlide>
            {data.map(item => (
              <SwiperSlide className={styles.item} key={item.id}>
                <img src={item.avatar} className={styles.avatar}></img>
                <div className={styles.full_name}>{item.fullName}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Fact;
