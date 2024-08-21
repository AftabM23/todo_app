import { useContext, createContext, useReducer } from "react";

const initialState = { notes: [{ message: null, id: null }] };
function reduceer(state, action) {
  switch (action.type) {
    case "notes/created":
      return {
        ...state,
        notes: [
          ...state.notes,
          { message: action.payload, id: state.notes.length },
        ],
      };
    default:
      throw new Error("invalid state");
  }
}
const NotesContext = createContext(null);
function NotesContextProvider({ children }) {
  const [{ notes }, dispatch] = useReducer(reduceer, initialState);
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
