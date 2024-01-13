import React from 'react';
import styles from './new-post.module.scss';

const NewPost = () => {
  const data = [
    {
      id: 0,
      title: '"Trên tay" đèo Prenn phiên bản mới: 4 làn đường, rộng rãi, láng mịn',
      thumbnail: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8230865_Cover.jpg',
      imageURL: 'https://photo2.tinhte.vn/data/attachment-files/2024/01/8230865_Cover.jpg',
      imageAlt: ''
    }
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Bài viết mới</h3>
      <div className={styles.items}>
        {data.map(item => (
          <div className={styles.item} key={item.id}>
            <div className={styles.item_thumbnail}>
              <img src={item.imageURL} alt={item.imageAlt} />
            </div>
            <div className={styles.item_title}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPost;
