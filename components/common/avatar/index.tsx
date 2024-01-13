import { Avatar as AntAvatar, AvatarProps } from 'antd';
import styles from './index.module.scss';

const Avatar = (props: AvatarProps) => {
  const noAvatar = '/media/dang-nhap/no-avatar.png';
  const src = props.src || noAvatar;
  const size = props.size || 32;
  const icon = props.icon || <img src={noAvatar} />;
  const alt = props.alt || 'Avatar';
  const className = props.className + ' ' + styles.container;

  return <AntAvatar {...props} src={src} size={size} alt={alt} icon={icon} className={className} />;
};

export default Avatar;
