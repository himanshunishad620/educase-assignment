import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Title from "../components/Title";
import useHandleForm from "../hooks/useHandleForm";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/setting");
  };
  const { values, handleChange, allFilled } = useHandleForm({
    email: "",
    password: "",
    companyName: "",
    fullName: "",
    phoneNumber: "",
    agency: "Yes",
  });
  return (
    <div className="relative flex flex-col gap-6 pt-10 px-5 m-auto h-[100dvh] max-w-[375px] bg-[#F7F8F9]">
      <div>
        <Title content="Create your" />
        <Title content="PopX account" />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
        <Input
          legend="Full Name"
          placeholder="Enter Full Name"
          type="text"
          value={values.fullName}
          name="fullName"
          onChange={handleChange}
          required={true}
        />
        <Input
          legend="Phone Number"
          placeholder="Enter Phone Number"
          type="tel"
          value={values.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          required={true}
          pattern="[0-9]{10}"
        />
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
          placeholder="Enter password"
          type="password"
          value={values.password}
          name="password"
          onChange={handleChange}
          required={true}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        />
        <Input
          legend="Company Name"
          placeholder="Enter Company Name"
          type="text"
          value={values.companyName}
          name="companyName"
          onChange={handleChange}
          required={true}
        />

        <Radio
          label="Are you an agency?"
          value={values.agency}
          values={["Yes", "No"]}
          onChange={handleChange}
          required={true}
        />
        <div className="absolute bottom-5">
          <Button
            variant="primary"
            text="Create Account"
            disabled={!allFilled}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
