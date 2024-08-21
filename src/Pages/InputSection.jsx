import InputField from "../Components/InputField";
import styles from "./InputSection.module.css";
import Notes from "../Components/Notes";
function InputSection() {
  return (
    <div className={styles.inputSection}>
      <InputField />
      <Notes />
    </div>
  );
}

export default InputSection;
