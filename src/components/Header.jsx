import Input from "./Input";
import "./styles/Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header-title">{props.title}</h1>
      <Input
        labelText="Buscar colaborador"
        type="text"
        placeholderText="Filtra colaboradores"
        newLine={true}
        onChange={props.changeFilterFunc}
      />
    </header>
  );
};

export default Header;
