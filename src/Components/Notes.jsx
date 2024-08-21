import { useNotes } from "../Contexts/NotesContext";
import NotesRendering from "./NotesRendering";
import styles from "./Notes.module.css";
import { useEffect } from "react";
function Notes() {
  const { notes } = useNotes();
  useEffect(
    function () {
      console.log(notes);
    },
    [notes]
  );
  return (
    <div className={styles.notes}>
      {notes.map((note) => (
        <li key={note.id}>
          <NotesRendering note={note.message} />
        </li>
      ))}
    </div>
  );
}

export default Notes;
