/* eslint-disable react/prop-types */
import Button from "./Button";
import styles from "./Form.module.css";
import { useState } from "react";
import { useNotes } from "../Contexts/NotesContext";
function Form({ setShowForm }) {
  const [newNotesTitle, setNewNotesTitle] = useState("");
  const [newNotesBody, setNewNotesBody] = useState("");
  const [severity, setSeverity] = useState("");
  const { dispatch } = useNotes();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "notes/created",
      payload: { title: newNotesTitle, body: newNotesBody, severity: severity },
    });
    setNewNotesTitle("");
    setNewNotesBody("");
    setShowForm(false);
  };
  return (
    <div className={styles.form}>
      <form>
        <span className={styles.titleSection}>
          <span className={styles.ttl}>
            <input
              type="text"
              placeholder="Title..."
              onChange={(e) => setNewNotesTitle(e.target.value)}
              value={newNotesTitle}
            />
          </span>

          <select onChange={(e) => setSeverity(e.target.value)}>
            <option>Default</option> <option>Critical</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </span>
        <span className={styles.notesArea}>
          <label>Note</label>
          <textarea
            placeholder="Enter Task ..."
            onChange={(e) => setNewNotesBody(e.target.value)}
            value={newNotesBody}
            rows={3} // You can adjust the number of rows to fit your needs
            cols={5} // Adjust the width of the textarea
          ></textarea>
        </span>
        <span>
          <button>Flair</button>
        </span>

        <span className={styles.btnSection}>
          <Button onClick={handleClick}>Add note</Button>
          <Button>Reset</Button>
        </span>
      </form>
    </div>
  );
}

export default Form;
