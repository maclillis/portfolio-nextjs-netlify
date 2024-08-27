import { User } from "@nextui-org/react";

const UserAvatar = ({ src, alt }) => {
  return <User name="Marcus Liljehammar" description="Webbutvecklare & UX/Digital Designer" color="default" classNames={{img:"avatar_img"}} avatarProps={{src: src}} alt={alt} />;
};

export default UserAvatar;