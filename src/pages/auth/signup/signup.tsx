import { Button, Form, Input, Image, Flex } from "antd";
import signupImage from "../../../../public/assets/images/signImg.jpg";
import logoImage from "../../../../public/assets/images/NobgLogo.png"
import styles from "./signup.module.css";
import globalStyles from "../../global.module.css";


const Signup = () => {
  const inputClasses: string = `${globalStyles.inputBox} ${globalStyles.inputBox}`;
  const btnClick=()=>{
      alert("Touched")          
  }
  return (
    <Flex
      vertical={false}
      className={styles.flexContainer}
    >  
  
      <div id="right-container" className={styles.rightContainer}>
        <Image src={signupImage} preview={false} style={{ borderRadius: 18 }} />
      </div>
      <div id="left-container" className={styles.leftContainer}>
        <Image src={logoImage} className={styles.img} preview={false} width={"50%"} />
        <div className={styles.singinText}>Sign Up</div>
        <Form className={styles.signUpForm}>
          <Form.Item>
            <Input placeholder="Username" className={globalStyles.inputBox} />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input type="email" placeholder="Email" className={inputClasses} />
          </Form.Item>
          <Form.Item>
            <select id="role" className={globalStyles.select} name="user-role">
              <option value="role">----Select role----</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Business Analyst">Business Analyst</option>
            </select>
          </Form.Item>
          <Form.Item>
            <Input.Password
              placeholder="Password"
              className={globalStyles.inputBox}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className={globalStyles.primaryBtn} onClick={btnClick}>
              Sign Up
            </Button>
          </Form.Item>
          <p className={styles.urlText}>Already have an account ? sign in.</p>
        </Form>
      </div>
    </Flex>
  );
};

export default Signup;
