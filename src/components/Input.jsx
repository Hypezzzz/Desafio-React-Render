import "./styles/Input.css";

const Input = (props) => {
  return (
    <div className="input-manager">
      <label className={props.newLine === true ? "input-label-block" : ""}>
        {props.labelText}
      </label>
      <input
        className={
          props.newLine === true
            ? "input-margin-top input-width"
            : "input-margin-left input-width"
        }
        type={props.type}
        placeholder={props.placeholderText}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
