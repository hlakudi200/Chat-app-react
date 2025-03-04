import AuthLayout from "./layouts/authlayout";
import { Route, Routes } from "react-router";
import Signin from "./pages/auth/signin/signin";
import Signup from "./pages/auth/signup/signup";
import About from "./pages/about/about";
import withAuth from "./hoc/withAuth";

//protect routes

const ProtectedAbout = withAuth(About);

const App = () => {
  return (
    <Routes>
      {/* Auth Route */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Signin />}></Route>
        <Route path="/Singup" element={<Signup />}></Route>
        <Route path="/About" element={<ProtectedAbout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
