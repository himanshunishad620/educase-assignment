import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="w-screen h-[100dvh] ">
      <Outlet />
    </div>
  );
};

export default App;
