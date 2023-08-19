import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart.js';
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
    <div>
       <div className='expenses'>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses}/>
    </div>

    </div>
   
  );
};

export default Expenses;
