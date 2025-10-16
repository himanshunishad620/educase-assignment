// import { Input } from "./components/Input";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-[100dvh] ">
      <Outlet />
    </div>
  );
};

export default App;
