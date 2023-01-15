import Collaborator from "./Collaborator";

import "./styles/CollaboratorsList.css";

const CollaboratorsList = (props) => {
  return (
    <section className="collaborators-list">
      <h2 className="collaborators-list-header">{props.title}</h2>
      <ul className="ul-style">
        {props.list
          .filter((collaborator) => {
            if (props.filter === "") {
              return collaborator;
            } else if (
              collaborator.nombre
                .toLowerCase()
                .includes(props.filter.toLowerCase())
            ) {
              return collaborator;
            }
          })
          .map((collaborator) => {
            return (
              <Collaborator
                key={collaborator.id}
                name={collaborator.nombre}
                email={collaborator.correo}
                id={collaborator.id}
                deleteCollaboratorFunc={props.deleteCollaboratorFunc}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default CollaboratorsList;
