import { useState } from "react";
import { useNotes } from "../Contexts/NotesContext";
import Button from "./Button";
import styles from "./NotesRendering.module.css";
function NotesRendering({ note }) {
  const { dispatch } = useNotes();
  const [completed, setCompleted] = useState(false);

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setCompleted(true);
    } else setCompleted(false);
  };
  return (
    <div className={styles.notesItem}>
      <input type="checkbox" onChange={(e) => handleCheckBox(e)} />
      <p className={completed ? styles.taskCompleted : ""}>{note.message}</p>
      {note && (
        <Button
          onClick={() => dispatch({ type: "notes/deleted", payload: note.id })}
        >
          delete
        </Button>
      )}
    </div>
  );
}

export default NotesRendering;
