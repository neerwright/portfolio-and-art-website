import { FaRegUser } from "react-icons/fa";
import { currentUser } from "@clerk/nextjs/server";

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  return <FaRegUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
