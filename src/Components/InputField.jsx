import Button from "./Button";
import { useNotes } from "../Contexts/NotesContext";
import { useState } from "react";
import styles from "./InputField.module.css";

function InputField() {
  const [newNotesTitle, setNewNotesTitle] = useState("");
  const [newNotesBody, setNewNotesBody] = useState("");
  const { dispatch } = useNotes();
  const handleClick = () => {
    dispatch({
      type: "notes/created",
      payload: { title: newNotesTitle, body: newNotesBody },
    });
    setNewNotesTitle("");
    setNewNotesBody("");
  };
  return (
    <div className={styles.inputFields}>
      <input
        type="text"
        placeholder="Enter title..."
        onChange={(e) => setNewNotesTitle(e.target.value)}
        value={newNotesTitle}
      />
      <textarea
        placeholder="Enter Task ..."
        onChange={(e) => setNewNotesBody(e.target.value)}
        value={newNotesBody}
        rows={3} // You can adjust the number of rows to fit your needs
        cols={15} // Adjust the width of the textarea
      ></textarea>
      <Button onClick={handleClick}>Add note</Button>
    </div>
  );
}

export default InputField;
