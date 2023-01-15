import { useState } from "react";
import "./App.css";
import CollaboratorsList from "./components/CollaboratorsList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewCollaborator from "./components/NewCollaborator";

import { BaseColaboradores } from "./database/baseColaboradores.js";

function App() {
  const [collaborators, setCollaborators] = useState(BaseColaboradores);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleClickAdd = (e) => {
    e.preventDefault();

    if (newName.trim() === "" || newEmail.trim() === "") {
      alert("Por favor, ingrese un nombre y un correo");
      return;
    }

    const newCollaborator = {
      id: Date.now(),
      nombre: newName,
      correo: newEmail,
    };
    setCollaborators([...collaborators, newCollaborator]);
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setNewEmail(e.target.value);
  };

  const deleteCollaborator = (id) => {
    const newCollaborators = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setCollaborators(newCollaborators);
  };

  return (
    <>
      <Header
        title="Buscador de Colaboradores"
        changeFilterFunc={handleChangeFilter}
      />
      <NewCollaborator
        title="Agregar Colaborador"
        addFunc={handleClickAdd}
        changeNameFunc={handleChangeName}
        changeEmailFunc={handleChangeEmail}
      />
      <CollaboratorsList
        title="Listado de Colaboradores"
        list={collaborators}
        deleteCollaboratorFunc={deleteCollaborator}
        filter={filter}
      />
      <Footer />
    </>
  );
}

export default App;
