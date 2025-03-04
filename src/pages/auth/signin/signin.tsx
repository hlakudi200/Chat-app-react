import { Button, Form, Input, Image, Flex, message } from "antd";
import signInImage from "../../../assets/images/signImg.jpg";
import logoImage from "../../../assets/images/NobgLogo.png";
import styles from "./signin.module.css";
import globalStyles from "../../global.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../../provider/authprovider/authProvider";

const inputClasses: string = `${globalStyles.inputBox} ${globalStyles.inputBox}`;

const Singin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSingIn = async () => {
    if (email.trim() === "" || password.trim() == "") {
      alert("Empty Fields");
      return null;
    }
    signIn(email, password).then(()=>navigate('/about')).catch(()=>{alert(`${message.error}`)});
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
