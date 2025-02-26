import { Button, Form, Input, Image, Flex } from "antd";
import signInImage from "../../../assets/images/signImg.jpg";
import logoImage from "../../../assets/images/NobgLogo.png";
import styles from "./signin.module.css";
import globalStyles from "../../global.module.css";

const Singin = () => {
  const btnClick = () => {
    alert("Touched");
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
          <Form.Item>
            <Input placeholder="Username" className={globalStyles.inputBox} />
          </Form.Item>

          <Form.Item>
            <Input.Password
              placeholder="Password"
              className={globalStyles.inputBox}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className={globalStyles.primaryBtn}
              onClick={btnClick}
            >
              Sign up
            </Button>
          </Form.Item>
          <p className={styles.urlText}>Don't have an account ? sign up.</p>
        </Form>
      </div>
    </Flex>
  );
};

export default Singin;
