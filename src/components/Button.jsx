import "./styles/Button.css";

const Button = (props) => {
  return (
    <button
      className={`button-style ${props.delete ? "button-style-delete" : ""}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
