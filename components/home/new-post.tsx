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
      authorAvatar: 'https://image.sggp.org.vn/w1000/Uploaded/2023/dqmbbcvo/2023_06_20/cristiano-ronaldo-5762.jpg.webp',
      authorName: 'Cristiano Ronaldo'
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
    },
    {
      id: 3,
      title: 'GTA V tròn 10 tuổi: "Nghệ thuật vị nhân sinh", hay mọi lối mòn của điện ảnh Mỹ ghép lại làm một?',
      thumbnail:
        'https://imgproxy7.tinhte.vn/yhOYCcz1NUyovmq_J8zfF5CX9T_-9a3jVuW70QIeuWY/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/12/8217121_3-gtavpc-03272015.jpg',
      createdDate: '17/12/2023 14:20',
      description: `Trước khi GTA VI công bố trailer đầu tiên hôm mùng 5/12 vừa rồi, có một tuyên bố từ Rockstar Games thực sự khiến mình để ý. Thời điểm có những tin đồn nói cốt truyện GTA VI sẽ là một câu chuyện “Bonnie và Clyde” thời hiện đại`,
      authorAvatar:
        'data:image/jpeg;base64,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',
      authorName: 'GTA Gamer'
    },
    {
      id: 4,
      title: '5 mẫu “AI Laptop” nổi bật trang bị chip Intel Core Ultra vừa mới ra mắt',
      thumbnail:
        'https://imgproxy7.tinhte.vn/UKuKzl_HzvnvW1nJxLUF3WuZTBZrUaUAwWpUtNzBIR4/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/12/8217018_cover-AI-Laptop-Intel-Meteor-Lake-tinhte.jpg',
      createdDate: '17/12/2023 14:20',
      description: `Intel đã chính thức ra mắt thế hệ chip Intel Core Ultra mới với rất nhiều cải tiến đồng thời mang đến khái niệm “AI PC”, nhưng chiếc máy tính có bộ xử lý tích hợp NPU chuyên dụng để xử lý các tác vụ AI và machine learning.`,
      authorAvatar: 'https://photo2.tinhte.vn/data/avatars/m/43/43700.jpg?1700402708',
      authorName: 'Sharingan Shop'
    },
    {
      id: 5,
      title: 'Review hệ thống đèn Philips trong phòng làm việc của mình',
      thumbnail:
        'https://imgproxy7.tinhte.vn/8LfKEBXeILcr43QvxwQOUvJTrETdksuf7tiZqbtWlJo/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/12/8216698_philips-hue-tinhte-didu-01.jpg',
      createdDate: '17/12/2023 14:20',
      description: `Mình sử dụng tổng cộng 5 đèn Philips Hue trong đó 3 cái để trên bàn làm việc. Đây là những đèn có màu, mình kết hợp cả 5 lại để tạo thành một không gian với các màu sắc cho các khu vực trong phòng vào buổi tối.`,
      authorAvatar: 'https://photo2.tinhte.vn/data/avatars/m/2462/2462268.jpg?1514212950',
      authorName: 'Reviewer'
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
