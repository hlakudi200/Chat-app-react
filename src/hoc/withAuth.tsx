import { Navigate } from "react-router";
import { useAuth } from "../provider/authprovider/authProvider";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const { user } = useAuth();
    if (user == null) {
      return <Navigate to="/" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};
export default withAuth;
