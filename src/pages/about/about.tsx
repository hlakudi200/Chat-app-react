import { Button } from "antd";
import { useAuth } from "../../provider/authprovider/authProvider";
import { useNavigate } from "react-router";
import {
  useUserProfileAction,
  useUserStateProfile,
} from "../../provider/userProfileProvider";
import { useEffect } from "react";
const About = () => {
  const { signOut } = useAuth();
  const { userProfile} = useUserStateProfile();
  const {fetchUserProfile}=useUserProfileAction()
  const navigate = useNavigate();
  const {user}=useAuth();


  console.log(user?.id)
  useEffect(()=>{
      fetchUserProfile(user?.id) //will update the intial state using dispacth action 
  },[])

  console.log(userProfile,"on About Page")
  const handleSignOut = () => {
    signOut().then(() => navigate("/"));
  };
 

  return (
    <div>
      <Button onClick={handleSignOut}>SingOut</Button>
      <h2>{userProfile?.username}</h2>
      <h2>{userProfile?.role}</h2>
    </div>
  );
};

export default About;
