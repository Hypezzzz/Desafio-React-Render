import Button from "./Button";

import "./styles/Collaborator.css";

const Collaborator = (props) => {
  return (
    <li>
      <span className="collaborator-info">{`${props.name} - ${props.email}`}</span>
      <Button
        label="Eliminar"
        delete={true}
        onClick={() => {
          props.deleteCollaboratorFunc(props.id);
        }}
      />
    </li>
  );
};

export default Collaborator;
