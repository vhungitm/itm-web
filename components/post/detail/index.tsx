import Avatar from '@/components/common/avatar';
import posts from '@/data/posts';
import { Breadcrumb } from 'antd';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import styles from './index.module.scss';
import NewPost from './new-post';

const PostDetail = (props: any) => {
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

  const { pathname = '' } = props.params;
  const data = posts.find(post => post.pathname === pathname);

  return (
    data && (
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
    )
  );
};

export default PostDetail;
