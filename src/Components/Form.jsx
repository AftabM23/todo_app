import Button from "./Button";
import styles from "./Form.module.css";
function Form() {
  return (
    <div className={styles.form}>
      <form>
        <span className={styles.titleSection}>
          <span className={styles.ttl}>
            <label>Title</label>
            <input type="text" />
          </span>

          <select>
            <option>Critical</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </span>
        <span className={styles.notesArea}>
          <label>Note</label>
          <textarea placeholder="Enter Task ..." rows={3} cols={5}></textarea>
        </span>
        <span>
          {" "}
          <button>Flair</button>
        </span>

        <span className={styles.btnSection}>
          <Button>Submit</Button>
          <Button>Reset</Button>
        </span>
      </form>
    </div>
  );
}

export default Form;
