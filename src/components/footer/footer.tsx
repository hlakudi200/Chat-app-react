import { Footer } from "antd/es/layout/layout";

const DefaultFooter = () => {
  return (
    <Footer style={{textAlign:"center",backgroundColor:'#D9D9D9',borderRadius:'10px',color:"#DB4A2B"}}>
     ©{new Date().getFullYear()} Bontle. All rights reserved.
  </Footer>
  );
};
export default DefaultFooter;
