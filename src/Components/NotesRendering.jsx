import { useNotes } from "../Contexts/NotesContext";
import Button from "./Button";
import styles from "./NotesRendering.module.css";
function NotesRendering({ note }) {
  const { dispatch } = useNotes();
  return (
    <div className={styles.notesItem}>
      <p>{note.message}</p>
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
