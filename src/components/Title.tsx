type Props = {
  content: string;
};

const Title: React.FC<Props> = (props) => {
  return (
    <h1 className="leading-8 text-[28px] font-semibold">{props.content}</h1>
  );
};

export default Title;
