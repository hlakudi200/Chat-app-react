import { Button, Form, Input, Image, Flex,message } from "antd";
import signupImage from "../../../assets/images/signImg.jpg";
import logoImage from "../../../assets/images/NobgLogo.png";
import styles from "./signup.module.css";
import globalStyles from "../../global.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../../provider/authprovider/authProvider";

const inputClasses: string = `${globalStyles.inputBox} ${globalStyles.inputBox}`;
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const { singUp } = useAuth();

  const navigate = useNavigate();

  const HandleLinkClick = () => {
    navigate("/");
  };

  const handleSignUp = () => {
    if (role === "----Select role----" || role == "") {
      alert("Please select an valid role option");
      return null;
    }
    if (password.length < 8) {
      alert("Password must be 8 characters");
    }

    singUp(email, password, role, userName)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert(`Failed to sing up ${message.error}`);
      });
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
              required
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
          <Form.Item
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <select
              id="role"
              className={globalStyles.select}
              name="user-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option>----Select role----</option>
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
              required
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className={globalStyles.primaryBtn}
              onClick={handleSignUp}
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
