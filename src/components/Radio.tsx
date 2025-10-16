type Props = {
  values: string[];
  label: string;
  value: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<Props> = (props) => {
  return (
    <div>
      <p>
        {props.label}
        {props.required ? <span className="text-red-500 ">*</span> : null}
      </p>
      <div className="flex gap-3">
        {props.values.map((val) => {
          return (
            <div className="flex gap-2 " key={val}>
              <input
                id={val}
                type="radio"
                value={val}
                name="agency"
                className="accent-[#642AF5] cursor-pointer w-5"
                onChange={props.onChange}
                checked={props.value === val}
              />
              <label htmlFor={val} className="cursor-pointer text-sm">
                {val}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
