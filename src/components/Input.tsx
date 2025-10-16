type Props = {
  legend: string;
  placeholder: string;
  type: string;
  value: string | number;
  name: string;
  required: boolean;
  pattern?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = (props) => {
  return (
    <div className="relative">
      <label
        className="absolute text-[13px] outline-none font-medium top-[-10px] text-[#6C25FF] left-3 px-2 bg-[#F7F8F9] "
        htmlFor={props.name}
      >
        {props.legend}
        {props.required ? <span className="text-red-500 ">*</span> : null}
      </label>
      <input
        id={props.name}
        className="px-4 w-[335px] h-10 rounded-md border-2 outline-none border-[#CBCBCB] focus:border-[#6c25ff] placeholder:text-sm"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        pattern={props.pattern}
      />
    </div>
  );
};

export default Input;
