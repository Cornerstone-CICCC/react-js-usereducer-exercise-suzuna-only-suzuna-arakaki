import { useReducer } from "react";
import { toggleReducer } from "./reducres/ToggleReducer";

const initialState = {
  isDark: false,
  fSize: 16,
};

const App = () => {
  const [state, dispatch] = useReducer(toggleReducer, initialState);

  return (
    <div
      style={{
        backgroundColor: state.isDark ? "#222" : "#fff",
        color: state.isDark ? "White" : "black",
      }}
    >
      <h1>Toggle Reducers</h1>
      <h3>Toggle Dark mode</h3>
      <button onClick={() => dispatch({ type: "DarkMode" })}>
        Toggle Dark Mode
      </button>
      <h3 style={{ fontSize: `${state.fSize}px` }}>Change the font size</h3>
      <button onClick={() => dispatch({ type: "IncrementFont" })}>
        Increase Font Size
      </button>
      <button onClick={() => dispatch({ type: "DecrementFont" })}>
        Decrease Font Size
      </button>
    </div>
  );
};

export default App;
