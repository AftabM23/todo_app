import InputField from "../Components/InputField";
import styles from "./InputSection.module.css";
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
      <InputField />
      <Button onClick={handleOpenForm}> Open form</Button>
      {showForm && <Form setShowForm={setShowForm} />}
      <Notes />
    </div>
  );
}

export default InputSection;
