'use client';
import { useState } from 'react';
import styles from './new-post.module.scss';

const NewPost = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Cristiano Ronaldo góp vốn phát triển game bóng đá miễn phí UFL',
      thumbnail:
        'https://imgproxy7.tinhte.vn/vT7kluaMgjyhUhegCZxOqbANTSbspJ1K3h9kHjii9bM/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/12/8213064_GettyImages-1632006227.webp',
      createdDate: '01/01/2023 10:00',
      description: `Được giới thiệu cách đây vài năm, UFL là một game bóng đá miễn phí với mục tiêu cạnh tranh trực tiếp với hai thương hiệu nổi tiếng và gần như duy nhất trên thị trường hiện giờ, EA FC, trước đây là FIFA, và eFootball, trước đây là PES.`,
      authorAvatar: '/media/dang-nhap/no-avatar.png',
      authorName: 'Mr. Huy'
    },
    {
      id: 2,
      title: 'Hyundai Venue ra mắt tại Việt Nam: SUV đô thị 5 chỗ, giá từ 539 triệu Đồng',
      thumbnail:
        'https://imgproxy7.tinhte.vn/wE4qnPbiL-rGwmSdswsmJijXgBikiZXZ0QAJjmDCWBY/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/12/8217166_hyundai-venue-ra-mat-tinhte.jpg',
      createdDate: '17/12/2023 14:20',
      description: `Trong khuôn khổ sự kiện Hyundai Exprerience Day 2023, Hyundai Thành Công đã chính thức ra mắt chiếc SUV đô thị cỡ nhỏ Hyundai Venue. Mẫu xe được định vị là chiếc SUV 5 chỗ cỡ A, hứa hẹn đáp ứng tốt cho nhu cầu di chuyển linh hoạt trong phố xong vẫn`,
      authorAvatar: '/media/avatar/1.jpg',
      authorName: 'Văn Hùng'
    }
  ]);

  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>
        <div className={styles.items}>
          {data.map(item => (
            <div className={styles.item} key={item.id}>
              <img className={styles.item_thumbnail} src={item.thumbnail} alt={item.title} />
              <div className={styles.item_content}>
                <div className={styles.item_title}>{item.title}</div>
                <div className={styles.item_time}>{item.createdDate}</div>
                <div className={styles.item_desc}>{item.description}</div>
                <div className={styles.item_author}>
                  <div className={styles.item_author_avatar}>
                    <img src={item.authorAvatar} />
                  </div>
                  <div className={styles.item_author_name}>{item.authorName}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewPost;
