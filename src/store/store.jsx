import React, { createContext, useReducer } from "react";

const init = {
      cartItem: [],
};

const store = createContext(init);
const { Provider } = store;

const reducer = (state, action) => {
      switch (action.type) {
            case "SET_CART_ITEM":
                  return {
                        ...state,
                        cartItems: action.playload,
                  };
            default:
                  return state;
      }
};

const StateProvider = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, init);
      return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export {
      store,
      StateProvider
};
