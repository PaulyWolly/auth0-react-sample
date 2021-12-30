import UserProfileButton from "./user-profile-button";
import { useAuth0 } from "@auth0/auth0-react";

const UserAuthProfileButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <UserProfileButton /> : "";
};

export default UserAuthProfileButton;
