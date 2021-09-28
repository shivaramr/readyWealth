import React, { useReducer, memo } from "react";
import { Provider, reducer, initialState, init } from "./Reducer";

const Services = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <Provider value={{ state, dispatch }}>
      Services
      {/* <Main /> */}
    </Provider>
  );
});

export default Services;
