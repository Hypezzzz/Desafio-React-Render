import Button from "./Button";
import Input from "./Input";

import "./styles/NewCollaborator.css";

const NewCollaborator = (props) => {
  return (
    <section className="new-collaborator">
      <h2 className="new-collaborator-title">{props.title}</h2>
      <form>
        <Input
          labelText="Nombre del colaborador"
          type="text"
          placeholderText="Ingrese el nombre del colaborador"
          newLine={true}
          onChange={props.changeNameFunc}
        />
        <Input
          labelText="Correo del colaborador"
          type="email"
          placeholderText="Ingrese el email del colaborador"
          newLine={true}
          onChange={props.changeEmailFunc}
        />
        <Button
          type="submit"
          label="Agregar Colaborador"
          onClick={props.addFunc}
        />
      </form>
    </section>
  );
};

export default NewCollaborator;
