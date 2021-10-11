import { createContext } from "react";

const init = (initState) => {
    return {
        ...initState,
        selectService : 'Protect',
        services: [],
        insuranceData: [],
        loanData: [],
        investData: [],
        estateData: []
    }
};

const initialState = {

};

const reducer = (state, action) => {
    switch (action.type) {
        case "SELECTED_SERVICE": {
            const { payload } = action;
            // const {} = action.payload || {};
            return { 
                ...state,
                selectService: payload
            }
        }
        case "SERVICES": {
            const { payload } = action;
            return { 
                ...state,
                services: payload
            }
        }
        case "INSURANCE": {
            const { insurance } = action.payload || {};
            return { 
                ...state,
                insuranceData: insurance
            }
        }
        case "LOANS": {
            const { loans } = action.payload || {};
            return { 
                ...state,
                loanData: loans
            }
        }
        case "INVESTMENT": {
            const { investmentPlans } = action.payload || {};
            return { 
                ...state,
                investData: investmentPlans
            }
        }
        case "REAL_ESTATE": {
            const { realEstate } = action.payload || {};
            return { 
                ...state,
                estateData: realEstate
            }
        }
        default:
            return state;
    }
}

const reducerContext = createContext();
const { Provider } = reducerContext || {};

export { initialState, reducer, Provider, init, reducerContext};