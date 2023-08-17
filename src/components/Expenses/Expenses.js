import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020')
  const filterChangeHandler = selectedYear =>{
    setFilterYear(selectedYear);
  }
  return (
    <div className='expenses'>
      <ExpensesFilter selected={filterYear} onChange={filterChangeHandler}/>
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
