import { Avatar as AntAvatar, AvatarProps } from 'antd';
import styles from './index.module.scss';

export interface IAvatarProps extends AvatarProps {
  size?: number;
}

const Avatar = (props: IAvatarProps) => {
  const noAvatar = '/media/dang-nhap/no-avatar.png';
  const src = props.src || noAvatar;
  const size = props.size || 32;
  const icon = props.icon || <img src={noAvatar} />;
  const alt = props.alt || 'Avatar';
  const className = props.className + ' ' + styles.container;
  const style = { ...props.style, minWidth: size || 32 };

  return <AntAvatar {...props} src={src} size={size} alt={alt} icon={icon} className={className} style={style} />;
};

export default Avatar;
