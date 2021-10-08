const serviceActionCreator = (payload) => {
  return {
    type: "SERVICES",
    payload,
  };
};

const selectedServiceActionCreator = (payload) => {
  return {
    type: 'SELECTED_SERVICE',
    payload
  }
};

const insuranceActionCreator = (payload) => {
  return {
    type: "INSURANCE",
    payload,
  };
};

const loanActionCreator = (payload) => {
  return {
    type: "LOANS",
    payload,
  };
};

const investmentActionCreator = (payload) => {
  return {
    type: "INVESTMENT",
    payload,
  };
};

const estateActionCreator = (payload) => {
    return {
      type: "REAL_ESTATE",
      payload,
    };
  };

export {
  selectedServiceActionCreator,
  serviceActionCreator,
  insuranceActionCreator,
  loanActionCreator,
  investmentActionCreator,
  estateActionCreator
};
