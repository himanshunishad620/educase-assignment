import Card from "../components/Card";
import dp from "../assets/girldp.jpg";
import Paragraph from "../components/Paragraph";

const Setting: React.FC = () => {
  return (
    <div className="m-auto h-[100dvh] max-w-[375px] bg-[#F7F8F9]">
      <div className="h-17 flex items-center pl-5 shadow bg-white">
        <Paragraph content="Account Settings" />
      </div>

      <Card
        img={dp}
        name="Marry Doe"
        email="Marry@gmail.com"
        content="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
      />
    </div>
  );
};

export default Setting;
