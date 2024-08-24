// import InputField from "../Components/InputField";
import styles from "./InputSection.module.css";
import { NotesContextProvider } from "../Contexts/NotesContext";
import Notes from "../Components/Notes";
import Button from "../Components/Button";
import Form from "../Components/Form";
import { useState } from "react";
function InputSection() {
  const [showForm, setShowForm] = useState(false);
  const handleOpenForm = () => {
    setShowForm((show) => !show);
  };
  return (
    <div className={`${styles.inputSection} ${showForm && styles.overLay}`}>
      <NotesContextProvider>
        <Button type="addNewTask" onClick={handleOpenForm}>
          <span>&#43;</span> Add new Task
        </Button>
        {showForm && <Form setShowForm={setShowForm} />}
        <Notes />
      </NotesContextProvider>
    </div>
  );
}

export default InputSection;
