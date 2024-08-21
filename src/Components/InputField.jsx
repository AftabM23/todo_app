import Button from "./Button";
import { useNotes } from "../Contexts/NotesContext";
import { useState } from "react";
import styles from "./InputField.module.css";

function InputField() {
  const [newNotes, setNewNotes] = useState("");
  const { dispatch } = useNotes();

  return (
    <div className={styles.inputFields}>
      <input
        type="text"
        placeholder="Enter Task to add..."
        onChange={(e) => setNewNotes(e.target.value)}
      ></input>
      <Button
        onClick={() => dispatch({ type: "notes/created", payload: newNotes })}
      >
        Add note
      </Button>
    </div>
  );
}

export default InputField;
