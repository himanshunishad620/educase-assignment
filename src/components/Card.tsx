type Props = {
  img: string;
  content: string;
  name: string;
  email: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className="text-neutral-700 text-[14px] flex flex-col border-b-1 border-dashed border-neutral-300 gap-[20px] p-[18px]">
      <div className="flex gap-[12px]">
        <div>
          <img
            className="rounded-4xl h-[60px] w-[60px] object-cover"
            src={props.img}
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="font-semibold">{props.name}</div>
          <div>{props.email}</div>
        </div>
      </div>
      <div>{props.content}</div>
    </div>
  );
};

export default Card;
