import { Breadcrumb } from 'antd';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import styles from './index.module.scss';
import NewPost from './new-post';
import Avatar from '@/components/common/avatar';

const PostDetail = () => {
  const breadcrumb: BreadcrumbItemType[] = [
    {
      href: '/',
      title: 'Trang chủ'
    },
    {
      href: '/bai-viet',
      title: 'Bài viết'
    }
  ];

  const data = {
    title: `"Trên tay" đèo Prenn phiên bản mới: 4 làn đường, rộng rãi, láng mịn`,
    authorAvatar: '/media/avatar/1.jpg',
    authorName: 'Văn Hùng',
    createdDate: '04/01/2024 00:12:00',
    content: `Đèo Prenn lên Đà Lạt đóng cửa từ hồi đầu năm 2023, đến cuối năm thì bắt đầu thông xe 3 km đầu tiên theo hướng từ Đà Lạt xuống khúc hồ Tuyền Lâm. Việc đóng cửa này là nhằm mở rộng, nâng cấp đường để lưu thông thuận tiện hơn, đặc biệt vào những dịp lễ. So với đèo Bảo Lộc, đèo Prenn ngắn hơn nhiều, nguyên đoạn đường đèo chỉ tầm 7 km. Trước đây, đèo chỉ có 2 làn xe ngược chiều nhau, nhưng giờ thì mở rộng ra đến 2 làn ở mỗi chiều, rộng rãi hơn rất nhiều.`
  };

  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>
        <div className={styles.container_start}>
          <Breadcrumb items={breadcrumb} />
          <div className={styles.header}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.detail}>
              <Avatar src={data.authorAvatar} />
              <div className={styles.detail_end}>
                <div className={styles.author_name}>{data.authorName}</div>
                <div className={styles.created_date}>{data.createdDate}</div>
              </div>
            </div>
          </div>

          <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
        <div className={styles.container_end}>
          <NewPost />
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
