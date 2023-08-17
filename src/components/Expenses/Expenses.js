import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('All');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // Filtering the expenses based on the selected year or showing all if "All" is selected
  const filteredExpenses =
    filterYear === 'All'
      ? props.expenses
      : props.expenses.filter(
          (expense) => expense.date.getFullYear().toString() === filterYear
        );

  return (
    <div className='expenses'>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            locationOfExpenditure={expense.location}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
