import Title from "../components/Title";

const NoTFound = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Title content="☹️" />
      <Title content="Page Not Found!" />
    </div>
  );
};

export default NoTFound;
