import { Button, Form, Input, Image, Flex } from "antd";
import signInImage from "../../../assets/images/signImg.jpg";
import logoImage from "../../../assets/images/NobgLogo.png";
import styles from "./signin.module.css";
import globalStyles from "../../global.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import supabase from "../../../config/client";

const inputClasses: string = `${globalStyles.inputBox} ${globalStyles.inputBox}`;
const Singin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  interface User {
    email: string;
    password: string;
  }
  const  handleSingIn=()=>{
    Singin({email:email,password:password})
  }
  const Singin = async (user: User) => {
    const { data: Userdata, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });

    if (Userdata) {
      navigate("/about");
    }

    if (error) {
      alert(`${error.message}`);
    }
  };
  const HandleLinkClick = () => {
    navigate("/Singup");
  };
  return (
    <Flex vertical={false} className={styles.flexContainer}>
      <div id="right-container" className={styles.rightContainer}>
        <Image src={signInImage} preview={false} style={{ borderRadius: 18 }} />
      </div>
      <div id="left-container" className={styles.leftContainer}>
        <Image
          src={logoImage}
          className={styles.img}
          preview={false}
          width={"50%"}
        />
        <div className={styles.singinText}>Sign in</div>
        <Form className={styles.signUpForm}>
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
              onClick={handleSingIn}
            >
              Sign In
            </Button>
          </Form.Item>

          <p className={styles.urlText} onClick={HandleLinkClick}>
            Don't have an account ? sign up.
          </p>
        </Form>
      </div>
    </Flex>
  );
};

export default Singin;
