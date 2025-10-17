import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

const Home = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => navigate("signup");
  const handleAlreadyRegistered = () => navigate("login");

  return (
    <div className="p-5 pb-15 gap-3 flex flex-col justify-end items-left m-auto h-[100dvh] max-w-[375px] bg-[#F7F8F9]">
      <Title content="Welcome to PopX" />
      <div className="py-1">
        <Paragraph content="Lorem ipsum dolor sit amet," />
        <Paragraph content="consectetur adipiscing elit," />
      </div>
      <Button
        text="Create Account"
        variant="primary"
        onClick={handleCreateAccount}
      />
      <Button
        text="Already Registered? Login"
        variant="secondry"
        onClick={handleAlreadyRegistered}
      />
    </div>
  );
};

export default Home;
