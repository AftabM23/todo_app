import { useNotes } from "../Contexts/NotesContext";
import NotesRendering from "./NotesRendering";
import styles from "./Notes.module.css";
function Notes() {
  const { notes, id } = useNotes();
  return (
    <div className={styles.notes}>
      {notes.map((note) => (
        <li key={id}>
          <NotesRendering note={note} />
        </li>
      ))}
    </div>
  );
}

export default Notes;
