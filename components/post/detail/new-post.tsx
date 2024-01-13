import React from 'react';
import styles from './new-post.module.scss';
import posts from '@/data/posts';
import Link from 'next/link';
import Avatar from '@/components/common/avatar';

const NewPost = () => {
  const data = posts;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Bài viết mới</h3>
      <div className={styles.items}>
        {data.map(item => (
          <Link href={'/bai-viet/' + item.pathname} className={styles.item} key={item.id}>
            <div className={styles.item_thumbnail}>
              <img src={item.thumbnail} alt={item.thumbnailAlt} />
            </div>
            <div>
              <div className={styles.item_title}>{item.title}</div>
              <div className={styles.item_author}>
                <Avatar src={item.authorAvatar} />
                <div className={styles.item_author_name}>{item.authorName}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewPost;
