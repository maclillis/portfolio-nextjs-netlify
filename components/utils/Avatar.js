import { Avatar } from "@nextui-org/react";

const UserAvatar = ({ src, alt }) => {
  return <Avatar size="sm" isBordered color="default" classNames={{img:"avatar_img"}} src={src} alt={alt} />;
};

export default UserAvatar;