type Props = {
  content: string;
};

const Paragraph: React.FC<Props> = (props) => {
  return (
    <p className="leading-6 text-[18px]  text-black/60">{props.content}</p>
  );
};

export default Paragraph;
