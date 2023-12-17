'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';

const Fact = () => {
  const [data] = useState([
    {
      id: 1,
      avatar: '/media/avatar/1.jpg',
      fullName: 'Văn Hùng',
      thumbnail: '/media/avatar/1.jpg'
    },
    {
      id: 2,
      avatar: '/media/dang-nhap/no-avatar.png',
      fullName: 'I',
      thumbnail:
        'https://imgproxy7.tinhte.vn/HBLxOIMdvXzQxxGjzPE3d12MasZNEbg4LKbhDPCtQvg/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/12/8212102_cover-trentay-amazfit-balance-tinhte-pnghuy14.jpg'
    },
    {
      id: 3,
      avatar: '/media/dang-nhap/no-avatar.png',
      fullName: 'Love',
      thumbnail: 'https://didongviet.vn/dchannel/wp-content/uploads/2023/07/hinh-nen-may-tinh-12-didongviet.jpg'
    },
    {
      id: 4,
      avatar: '/media/dang-nhap/no-avatar.png',
      fullName: 'You',
      thumbnail:
        'https://imgproxy7.tinhte.vn/vT7kluaMgjyhUhegCZxOqbANTSbspJ1K3h9kHjii9bM/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/12/8213064_GettyImages-1632006227.webp'
    },
    {
      id: 5,
      avatar: '/media/dang-nhap/no-avatar.png',
      fullName: 'Very',
      thumbnail: 'https://photo2.tinhte.vn/data/attachment-files/2023/12/8215082_Cover.jpg'
    },
    {
      id: 6,
      avatar: '/media/dang-nhap/no-avatar.png',
      fullName: 'Nhiều',
      thumbnail:
        'https://imgproxy7.tinhte.vn/CoLOqHfcJfdUkp7222fh1USjQdaIb8OY_zD3byLhxh4/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/12/8215430_CoverTinhte.jpg'
    },
    {
      id: 7,
      avatar: '/media/dang-nhap/no-avatar.png',
      fullName: '> 3000',
      thumbnail: 'https://img6.thuthuatphanmem.vn/uploads/2022/04/16/hinh-nen-doi-bong-mu-full-hd-dep_052500093.jpg'
    }
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
                <img src={item.thumbnail} className={styles.thumbnail} />
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
