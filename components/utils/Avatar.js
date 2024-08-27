import { User } from "@nextui-org/react";

const UserAvatar = ({ src, alt }) => {
  return <User name={<span className="hidden md:inline">Marcus Liljehammar</span>} description={<span className="hidden md:inline">Webbutvecklare & UX/Digital Designer</span>} color="default" classNames={{img:"avatar_img"}} avatarProps={{src: src}} alt={alt} />;
};

export default UserAvatar;