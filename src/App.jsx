import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
  }

  return (
    <div style={styles}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

export default App
