/* eslint-disable react/prop-types */
import { useContext, createContext, useReducer } from "react";

const initialState = { notes: [] };
function reducer(state, action) {
  switch (action.type) {
    case "notes/created":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            note: { title: action.payload.title, body: action.payload.body },
            id: state.notes.length,
          },
        ],
      };

    case "notes/deleted":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    default:
      throw new Error("invalid state");
  }
}
const NotesContext = createContext(null);

function NotesContextProvider({ children }) {
  const [{ notes }, dispatch] = useReducer(reducer, initialState);
  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
}

function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined)
    throw new Error("Notes context used out of the context range");
  return context;
}
export { NotesContextProvider, useNotes };
