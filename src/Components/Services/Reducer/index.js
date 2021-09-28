import { createContext } from "react";

const init = (initState) => {
  return {
    ...initState,
    lineList: [],
  };
};

const initialState = {
  lineName: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LINE_NAME": {
      const {
        saveHeading: { name },
      } = action.payload || {};
      return {
        ...state,
        lineName: name,
      };
    }
    case "FETCH_LINE_NAME1": {
      const {
        saveHeading: { name },
      } = action.payload || {};
      return {
        ...state,
        lineName: name,
      };
    }
    default:
      return state;
  }
};

const reducerContext = createContext();
const { Provider } = reducerContext || {};

export { initialState, reducer, Provider, init, reducerContext };
// destructure initial state in components as
// const { dispatch, state: { anything from initialState } } = useContext(reducerContext)
