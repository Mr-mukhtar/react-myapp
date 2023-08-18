import React from "react";
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'
const ExpensesList = (props) =>{
    let item =   props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          locationOfExpenditure={expense.location}
        />
      ));

    if(props.expenses.length ===0) {
     return <h2 className="expenses-list__fallback ">No Expenses Found.</h2>
    } else  if (props.expenses.length === 1) {
        return (
          <>
            {item}
            <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
          </>
        );
      }
      
    return (
        <ul className="expenses-list">
         {item}
        </ul>
    )
   
}
export default ExpensesList;