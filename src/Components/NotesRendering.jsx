/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNotes } from "../Contexts/NotesContext";
import Button from "./Button";
import styles from "./NotesRendering.module.css";
function NotesRendering({ note }) {
  const { dispatch } = useNotes();
  const [completed, setCompleted] = useState(false);
  const [showBody, setShowBody] = useState(false);

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setCompleted(true);
    } else setCompleted(false);
  };

  const handleShowBody = () => {
    setShowBody(!showBody);
  };
  console.log(note.note);
  return (
    <div className={`${styles.notesItem} ${styles[note.note.severity]}`}>
      <input type="checkbox" onChange={(e) => handleCheckBox(e)} />
      <div>
        <h1 className={completed ? styles.taskCompleted : ""}>
          {note.note.title}
        </h1>
        {showBody ? (
          <p>{note.note.body}</p>
        ) : (
          <p>{note.note.body.slice(0, 5) + "..."}</p>
        )}
        <Button onClick={handleShowBody}>{!showBody ? "↓" : "↑"}</Button>
      </div>

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
