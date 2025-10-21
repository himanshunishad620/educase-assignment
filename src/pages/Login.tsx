import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import useHandleForm from "../hooks/useHandleForm";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/setting");
  };
  const { values, handleChange, allFilled } = useHandleForm({
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col gap-4 pt-20 px-5 m-auto h-[100dvh] max-w-[375px] bg-[#F7F8F9]">
      <div>
        <Title content="Signin to your" />
        <Title content="PopX account" />
      </div>
      <div>
        <Paragraph content="Lorem ipsum dolor sit amet," />
        <Paragraph content="consectetur adipiscing elit," />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
        <Input
          legend="Email Address"
          placeholder="Enter Email Address"
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          required={true}
        />
        <Input
          legend="Password"
          placeholder="Enter Password"
          type="password"
          value={values.password}
          name="password"
          onChange={handleChange}
          required={true}
        />
        <Button variant="primary" text="Login" disabled={!allFilled} />
      </form>
    </div>
  );
};

export default Login;
