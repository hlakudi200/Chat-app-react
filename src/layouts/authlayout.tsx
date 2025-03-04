import Layout, { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";
import DefaultFooter from "../components/footer/footer";

const AuthLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <Outlet />
      </Content>
      <DefaultFooter />
    </Layout>
  );
};

export default AuthLayout;
