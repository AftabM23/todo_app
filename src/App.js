import "./App.css";
import { NotesContextProvider } from "./Contexts/NotesContext";
import InputSection from "./Pages/InputSection";

function App() {
  return (
    <div className="App">
      <NotesContextProvider>
        <InputSection />
      </NotesContextProvider>
    </div>
  );
}

export default App;
