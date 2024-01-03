'use client';
import { selectMessage } from '@/redux/message-slice';
import { useAppSelector } from '@/redux/store';
import { message } from 'antd';
import { ReactNode, useEffect } from 'react';

const MessageProvider = ({ children }: { children: ReactNode }) => {
  const messageRedux = useAppSelector(selectMessage);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (message) {
      const { type, content, duration } = messageRedux;
      if (content) messageApi.open({ type, content, duration });
    }
  }, [messageRedux]);

  return (
    <>
      {children}
      {contextHolder}
    </>
  );
};

export default MessageProvider;
