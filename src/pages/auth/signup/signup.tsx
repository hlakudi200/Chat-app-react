import { Button, Form, Input, Image, Flex } from "antd";
import signupImage from "../../../assets/images/signImg.jpg";
import logoImage from "../../../assets/images/NobgLogo.png";
import styles from "./signup.module.css";
import globalStyles from "../../global.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import supabase from "../../../config/client";

const inputClasses: string = `${globalStyles.inputBox} ${globalStyles.inputBox}`;
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HandleLinkClick = () => {
    navigate("/");
  };

  //user interface
  interface User {
    userName: string;
    email: string;
    role: string;
    password: string;
  }
  const handleSignUp = () => {
    SignUp({
      userName: userName,
      email: email,
      role: role,
      password: password,
    });
  };

  //sign upfunction with auth
  const SignUp = async (user: User) => {
    //sign up a user
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });

    const userData = data.user;

    if (userData) {
      //insert into the users profile using the userid
      const { error: ProfilError } = await supabase
        .from('profile')
        .insert({ id: userData.id, role: user.role, username: user.userName });
      if (ProfilError) {
        alert(`${ProfilError.message}`);
      } else {
        navigate("/");
      }
    }

    if (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <Flex vertical={false} className={styles.flexContainer}>
      <div id="right-container" className={styles.rightContainer}>
        <Image src={signupImage} preview={false} style={{ borderRadius: 18 }} />
      </div>
      <div id="left-container" className={styles.leftContainer}>
        <Image
          src={logoImage}
          className={styles.img}
          preview={false}
          width={"50%"}
        />
        <div className={styles.singinText}>Sign Up</div>
        <Form className={styles.signUpForm}>
          <Form.Item>
            <Input
              placeholder="Username"
              className={globalStyles.inputBox}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input
              type="email"
              placeholder="Email"
              className={inputClasses}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <select
              id="role"
              className={globalStyles.select}
              name="user-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">----Select role----</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Business Analyst">Business Analyst</option>
            </select>
          </Form.Item>
          <Form.Item>
            <Input.Password
              placeholder="Password"
              className={globalStyles.inputBox}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className={globalStyles.primaryBtn}
              onClick={handleSignUp }
            >
              Sign Up
            </Button>
          </Form.Item>
          <p className={styles.urlText} onClick={HandleLinkClick}>
            Already have an account ? sign in.
          </p>
        </Form>
      </div>
    </Flex>
  );
};

export default Signup;
