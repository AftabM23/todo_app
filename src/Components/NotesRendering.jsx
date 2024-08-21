import Button from "./Button";
import styles from "./NotesRendering.module.css";
function NotesRendering({ note }) {
  return (
    <div className={styles.notesItem}>
      <p>{note}</p>
      {note && <Button>delete</Button>}
    </div>
  );
}

export default NotesRendering;
