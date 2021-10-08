import React, { memo, useReducer } from "react";
import Main from "./Main";
import { Provider, reducer, initialState, init } from "./Reducer";

const Services = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <Provider value={{ state, dispatch }}>
      <Main />
    </Provider>
  );
});

export default Services;
