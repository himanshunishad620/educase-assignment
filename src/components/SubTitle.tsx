type Props = {
  content: string;
};

const SubTitle: React.FC<Props> = (props) => {
  return (
    <h3 className="leading-6 text-[18px]  text-black/60">{props.content}</h3>
  );
};

export default SubTitle;
