import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css'

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('All');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // Filtering the expenses based on the selected year or showing all if "All" is selected
  const filteredExpenses =
    filterYear === 'All' ? props.expenses
      : props.expenses.filter(
          (expense) => expense.date.getFullYear().toString() === filterYear
        );
  
 

  return (
    <div className='expenses'>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList expenses={filteredExpenses}/>
    </div>
  );
};

export default Expenses;
