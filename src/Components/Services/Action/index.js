import * as data from "./dummyData.json";
import {
  estateActionCreator,
  insuranceActionCreator,
  investmentActionCreator,
  loanActionCreator,
  selectedServiceActionCreator,
  serviceActionCreator,
} from "./actionCreator";

const setSelectService = ({ dispatch, service, id }) => {
  dispatch(selectedServiceActionCreator({ service, id }));
};

const getServiceList = ({ dispatch }) => {
  dispatch(serviceActionCreator(data.services));
};

const getInsuranceList = ({ dispatch }) => {
  dispatch(insuranceActionCreator(data.insuranceData));
};

const getLoanList = ({ dispatch }) => {
  dispatch(loanActionCreator(data.loanData));
};

const getInvestmentList = ({ dispatch }) => {
  dispatch(investmentActionCreator(data.investData));
};

const getEstateList = ({ dispatch }) => {
  dispatch(estateActionCreator(data.estateData));
};

export {
  setSelectService,
  getServiceList,
  getInsuranceList,
  getLoanList,
  getInvestmentList,
  getEstateList,
};
