'use client';
import { selectAuth } from '@/redux/auth-slice';
import { useAppSelector } from '@/redux/store';
import { Button, Form, Input } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import RequiredMark from '../common/form/required-mark';
import styles from './chat.module.scss';
import Avatar from '../common/avatar';
const { TextArea } = Input;

export interface IChat {
  authorAvatar: string;
  authorName: string;
  createdDate: string;
  message: string;
}

const Chat = () => {
  const user = useAppSelector(selectAuth).user;
  const [loadingForm, setLoadingForm] = useState(false);
  const [form] = Form.useForm();
  const [data, setData] = useState<IChat[]>([]);

  const onSubmitChat = async (value: any) => {
    let { message } = value;

    setLoadingForm(true);
    const newItem: IChat = {
      authorAvatar: '/media/avatar/1.jpg',
      authorName: 'Văn Hùng',
      createdDate: dayjs().format('DD/MM/YYYY HH:mm:ss'),
      message: message
    };

    await new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    let newData = [newItem, ...data];

    form.resetFields();
    setData(newData);
    setLoadingForm(false);

    message = message.toLowerCase();
    if (message.includes('hương')) {
      let flagAutoChat = false;
      let botMessage = '';

      if (message.includes('chào')) {
        botMessage = 'Dạ em chào anh <b>@Văn Hùng</b>';
        flagAutoChat = true;
      }
      if (message.includes('yêu')) {
        botMessage = 'Em cũng yêu anh <b>@Văn Hùng</b> nhiều lắm 😍 Hí hí';
        flagAutoChat = true;
      } else if (message.includes('nhớ')) {
        botMessage =
          'Chẳng phải là Xuân Diệu em cũng biết làm thơ. Vì giờ trong đầu em toàn là thương với nhớ 💕 Nhớ anh <b>@Văn Hùng</b>';
        flagAutoChat = true;
      }

      if (flagAutoChat)
        setTimeout(() => {
          newData = [
            {
              authorName: 'Lan Hương',
              authorAvatar: 'https://bookkol.com/wp-content/uploads/2022/12/lan-huong-1.jpg',
              createdDate: dayjs().format('DD/MM/YYYY HH:mm:ss'),
              message: botMessage
            },
            ...newData
          ];

          setData(newData);
        }, 1000);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>
        <div className={styles.header}>
          <h2>Phòng Chat</h2>
        </div>
        <div className={styles.body}>
          {user && (
            <Form
              form={form}
              onFinish={onSubmitChat}
              className={styles.form}
              layout="vertical"
              requiredMark={RequiredMark}
            >
              <div className={styles.form_item_content}>
                <Avatar src={user.avatar} />
                <div className={styles.form_item_end}>
                  <Form.Item
                    name="message"
                    className={styles.form_item}
                    rules={[{ required: true, message: 'Vui lòng nhập nội dung chat' }]}
                  >
                    <TextArea placeholder="Nhập nội dung" />
                  </Form.Item>

                  <Button type="primary" htmlType="submit" loading={loadingForm}>
                    Gửi
                  </Button>
                </div>
              </div>
            </Form>
          )}

          {/* Chat items */}
          <div className={styles.items}>
            {data.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.item_header}>
                  <div className={styles.item_avatar}>
                    <Avatar src={item.authorAvatar} />
                  </div>
                  <div className={styles.item_end}>
                    <div className={styles.item_full_name}>{item.authorName}</div>
                    <div className={styles.item_created_date}>{item.createdDate}</div>
                  </div>
                </div>
                <div className={styles.item_body} dangerouslySetInnerHTML={{ __html: item.message }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
