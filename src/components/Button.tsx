type Props = {
  text: string;
  variant: "primary" | "secondry";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const primaryStyles = "bg-[#6C25FF] text-white ";
const secondaryStyles = "bg-[#6C25FF4B] text-black ";
const disableStyles = "bg-[#CBCBCB] text-white";

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`${
        !props.disabled
          ? props.variant === "primary"
            ? primaryStyles
            : secondaryStyles
          : disableStyles
      } ${
        props.disabled ? "cursor-not-allowed" : "cursor-pointer"
      } font-semibold w-[335px] h-[46px] rounded-md`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
