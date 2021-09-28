// APIS to be done here

const fetchFnActionCreator = (payload) => {
  const { status } = payload || {};
  if (status) {
    return {
      type: "FETCH_LINE_NAME",
      payload,
    };
  }
  return { type: "FETCH_LINE_NAME", payload: null };
};

const getLineName = ({ dispatch, body }) => {
  // fetchFN is the fetch API function
  fetchFN()
    .then((response) => {
      if (response.status !== 200)
        throw new Error("Server responds with error");
      return response.json();
    })
    .then((resultJson) => {
      dispatch(fetchFnActionCreator(resultJson));
    });
};

const fetchFn1ActionCreator = (payload) => {
  const { status } = payload || {};
  if (status) {
    return {
      type: "FETCH_LINE_NAME1",
      payload,
    };
  }
  return { type: "FETCH_LINE_NAME1", payload: null };
};

const getLineName1 = async ({ dispatch, body }) => {
  // fetchFN1 is the fetch API function
  const result = await fetchFn1(body);
  dispatch(fetchFn1ActionCreator(result.json()));
};

export { getLineName, getLineName1 };
