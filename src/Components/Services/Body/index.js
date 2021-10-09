import React, { useContext, useEffect } from "react";
import MenuList from "../../Common/MenuList";
import {
  getEstateList,
  getInsuranceList,
  getInvestmentList,
  getLoanList,
  getServiceList,
  setSelectService,
} from "../Action";
import { reducerContext } from "../Reducer";
import Card from "./Card";

function Body() {
  const {
    dispatch,
    state: {
      selectService,
      services,
      insuranceData,
      loanData,
      investData,
      estateData,
    },
  } = useContext(reducerContext);

  useEffect(() => {
    getServiceList({ dispatch });
    getInsuranceList({ dispatch });
    getLoanList({ dispatch });
    getInvestmentList({ dispatch });
    getEstateList({ dispatch });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const serviceArr = () => {
    switch (selectService) {
      case "Insurance":
        return insuranceData;
      case "Loans":
        return loanData;
      case "Investment Plans":
        return investData;
      case "Real Estate":
        return estateData;
      default:
        return insuranceData;
    }
  };

  const listArr =
    serviceArr().map(({ title, points }, id) => (
      <Card key={id} title={title} points={points} />
    )) || [];

  const handleSelect = (arg) => {
    setSelectService({ dispatch, service: arg });
  };

  return (
    <MenuList
      selected={selectService}
      clickOption={handleSelect}
      sideList={services}
      mainBody={listArr}
    />
  );
}

export default Body;
