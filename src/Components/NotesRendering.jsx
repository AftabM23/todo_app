import styles from "./NotesRendering.module.css";
function NotesRendering({ note }) {
  return (
    <div className={styles.notesItem}>
      <p>{note}</p>
    </div>
  );
}

export default NotesRendering;
