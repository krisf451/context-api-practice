import React, { createContext, useReducer } from "react";
import reducer from "./AppReducer";

//set up the initial state for your global state
//for this we have a users array that wil hold user data, and a transactions array with
const initialState = {
  users: [
    { id: 1, username: "Becky", password: "abc123" },
    { id: 2, username: "Kristian", password: "buster2020" }
  ],
  transactions: []
};

//create Context
export const GlobalContext = createContext(initialState);

//Create a provider component to wrap all of our components in
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //THIS IS WHERE ACTIONS GO THAT CALL OUR REDUCER
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        users: state.users,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
