import { Button } from "antd";
import { useAuth } from "../../provider/authprovider/authProvider";
import { useNavigate } from "react-router";

const About = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut().then(() => navigate("/"));
  };
  return (
    <div>
      <Button onClick={handleSignOut}>SingOut</Button>
    </div>
  );
};

export default About;
