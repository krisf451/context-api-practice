import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";

export const Transaction = props => {
  const { transaction } = props;
  const sign = transaction.amount < 0 ? "-" : "+";
  //getting our action function form our global state
  const { deleteTransaction } = useContext(GlobalContext);
  console.log(transaction.text);
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
