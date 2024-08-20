import { useNotes } from "../Contexts/NotesContext";
import NotesRendering from "./NotesRendering";

function Notes() {
  const { notes, id } = useNotes();
  return (
    <div>
      {notes.map((note) => (
        <li>
          <NotesRendering note={note} key={id} />
        </li>
      ))}
    </div>
  );
}

export default Notes;
