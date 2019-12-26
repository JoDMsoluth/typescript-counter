import React, { useReducer } from "react";

type Color = "red" | "orange" | "yellow";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};
const initialState: State = {
  count: 0,
  text: "",
  color: "red",
  isGood: true
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT": {
      return { ...state, count: action.count };
    }
    case "SET_TEXT": {
      return { ...state, text: action.text };
    }
    case "SET_COLOR": {
      return { ...state, color: action.color };
    }
    case "TOGGLE_GOOD": {
      return { ...state, isGood: !state.isGood };
    }
    default:
      throw new Error("Unhandled action");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setText = () => dispatch({ type: "SET_TEXT", text: "..." });
  const setCount = () => dispatch({ type: "SET_COUNT", count: 12 });
  const setColor = () => dispatch({ type: "SET_COLOR", color: "yellow" });
  const onToggle = () => dispatch({ type: "TOGGLE_GOOD" });
  return (
    <div>
      {state.isGood && (
        <>
          <p>{state.count}</p>
          <p>{state.text}</p>
          <p>{state.color}</p>
          <p>{state.isGood}</p>
        </>
      )}
      <div>
        <button onClick={setText}>text</button>
        <button onClick={setCount}>count</button>
        <button onClick={setColor}>color</button>
        <button onClick={onToggle}>toggle</button>
      </div>
    </div>
  );
}
export default Counter;
