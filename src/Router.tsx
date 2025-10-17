import App from "./App.tsx";
import { Routes, Route, BrowserRouter } from "react-router";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import SignUp from "./pages/SignUp.tsx";
import Setting from "./pages/Setting.tsx";
import NoTFound from "./pages/NoTFound.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" element={<NoTFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
