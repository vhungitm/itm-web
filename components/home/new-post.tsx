'use client';
import Link from 'next/link';
import styles from './new-post.module.scss';
import Avatar from '../common/avatar';
import posts from '@/data/posts';

const NewPost = () => {
  const data = posts;

  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>
        <h2 className={styles.title}>Bài viết mới</h2>
        <div className={styles.items}>
          {data.map(item => (
            <Link href={'/bai-viet/' + item.pathname} className={styles.item} key={item.id}>
              <div className={styles.item_thumbnail}>
                <img src={item.thumbnail} alt={item.thumbnailAlt} />
              </div>
              <div className={styles.item_content}>
                <div className={styles.item_title}>{item.title}</div>
                <div className={styles.item_time}>{item.createdDate}</div>
                <div className={styles.item_desc}>{item.description}</div>
                <div className={styles.item_author}>
                  <Avatar src={item.authorAvatar} />
                  <div className={styles.item_author_name}>{item.authorName}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewPost;
