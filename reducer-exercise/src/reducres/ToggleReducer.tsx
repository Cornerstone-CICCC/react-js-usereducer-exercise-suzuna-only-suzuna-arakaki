export type State = {
  isDark: boolean;
  fSize: number;
};

type Action =
  | { type: "DarkMode" }
  | { type: "IncrementFont" }
  | { type: "DecrementFont" };

export const toggleReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "DarkMode":
      return { ...state, isDark: !state.isDark };
    case "IncrementFont":
      return { ...state, fSize: state.fSize + 2 };
    case "DecrementFont":
      return { ...state, fSize: state.fSize - 2 };
    default:
      return state;
  }
};
