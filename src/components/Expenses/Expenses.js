import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <div>
      {props.expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          locationOfExpenditure={expense.location}
        />
      ))}
    </div>
  );
}

export default Expenses;
