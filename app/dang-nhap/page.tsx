'use client';
import RequiredMark from '@/components/common/form/required-mark';
import Logo from '@/components/common/logo';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import HidePasswordIcon from './hide-password-icon';
import styles from './page.module.scss';
import PasswordIcon from './password-icon';
import UserIcon from './user-icon';
import ViewPasswordIcon from './view-password-icon';

const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    const res: any = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          succeeded: true,
          message: 'Login successfully'
        });
      }, 2000);
    });

    if (res.succeeded) {
      router.push('/');
      setLoading(false);
    }
  };

  const onChangeViewPassword = () => setViewPassword(!viewPassword);

  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>
        <Form form={form} layout="vertical" requiredMark={RequiredMark} onFinish={onLogin}>
          <div className={styles.header}>
            <Logo />
          </div>
          <div className={styles.body}>
            <Form.Item
              name="username"
              label="Tài khoản"
              rules={[{ required: true, message: 'Vui lòng nhập tài khoản' }]}
            >
              <Input
                placeholder="Tài khoản"
                prefix={
                  <Flex align="center">
                    <UserIcon />
                  </Flex>
                }
              />
            </Form.Item>
            <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}>
              <Input
                type={viewPassword ? 'text' : 'password'}
                placeholder="Mật khẩu"
                prefix={
                  <Flex align="center">
                    <PasswordIcon />
                  </Flex>
                }
                suffix={
                  <Flex align="center" style={{ cursor: 'pointer' }} onClick={onChangeViewPassword}>
                    {viewPassword ? <HidePasswordIcon /> : <ViewPasswordIcon />}
                  </Flex>
                }
              />
            </Form.Item>
            <Flex justify="space-between" align="center" className={styles.remember_me_container}>
              <Form.Item name="isRemember" className={styles.remember_me} valuePropName="checked">
                <Checkbox>Nhớ tài khoản</Checkbox>
              </Form.Item>
              <Link href="/quen-mat-khau">Quên mật khẩu</Link>
            </Flex>
          </div>
          <Flex gap={8} vertical className={styles.footer}>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Đăng nhập
            </Button>
            <Button block>
              <img src="/media/icons/google.png" />
              Đăng nhập bằng Google
            </Button>
            <Button block>
              <img src="/media/icons/facebook.png" />
              Đăng nhập bằng Facebook
            </Button>
            <div className={styles.register_link}>
              Chưa có tài khoản? <Link href="/dang-ky">Đăng ký</Link>
            </div>
          </Flex>
        </Form>
        <div className={styles.banner}>
          <img src="/media/dang-nhap/login-background.png" />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
