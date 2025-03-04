import AuthLayout from "./layouts/authlayout";
import { Route, Routes } from "react-router";
import Signin from "./pages/auth/signin/signin";
import Signup from "./pages/auth/signup/signup";
import About from "./pages/about/about";

const App = () => {
  return (
    <Routes>
      {/* Auth Route */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Signin />}></Route>
        <Route path="/Singup" element={<Signup />}></Route>
        {/* protect */}

        <Route path="/About" element={<About />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
