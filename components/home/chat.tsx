'use client';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import RequiredMark from '../common/form/required-mark';
import styles from './chat.module.scss';
const { TextArea } = Input;
import dayjs from 'dayjs';

const Chat = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([
    {
      id: 1,
      authorAvatar: '/media/avatar/1.jpg',
      authorName: 'Văn Hùng',
      createdDate: '17/12/2023 17:24',
      content: `Chào mọi người`
    }
  ]);

  const onSubmitChat = (value: any) => {
    const newItem = {
      id: 1,
      authorAvatar: '/media/avatar/1.jpg',
      authorName: 'Văn Hùng',
      createdDate: dayjs().format('DD/MM/YYYY HH:mm:ss'),
      content: value.content
    };

    const newData = [...data, newItem];
    setData(newData);
    form.resetFields();
  };

  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>
        <div className={styles.header}>
          <h2>Phòng Chat</h2>
        </div>
        <div className={styles.body}>
          <Form
            form={form}
            onFinish={onSubmitChat}
            className={styles.form}
            layout="vertical"
            requiredMark={RequiredMark}
          >
            <div className={styles.form_item_content}>
              <div className={styles.form_avatar}>
                <img src="/media/avatar/1.jpg" />
              </div>
              <div className={styles.form_item_end}>
                <Form.Item
                  name="content"
                  className={styles.form_item}
                  rules={[{ required: true, message: 'Vui lòng nhập nội dung chat' }]}
                >
                  <TextArea placeholder="Nhập nội dung" />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Gửi
                </Button>
              </div>
            </div>
          </Form>

          {/* Chat items */}
          <div className={styles.items}>
            {data.map(item => (
              <div className={styles.item} key={item.id}>
                <div className={styles.item_header}>
                  <div className={styles.item_avatar}>
                    <img src={item.authorAvatar} />
                  </div>
                  <div className={styles.item_end}>
                    <div className={styles.item_full_name}>{item.authorName}</div>
                    <div className={styles.item_created_date}>{item.createdDate}</div>
                  </div>
                </div>
                <div className={styles.item_body} dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
