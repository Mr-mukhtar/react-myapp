import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e1', date: new Date(2020, 2, 28), title: 'Car Insurance', amount: 290.90, location: 'Food' },
    { id: 'e2', date: new Date(2020, 2, 28), title: 'Groceries', amount: 50.25, location: 'Supermarket' },
    { id: 'e3', date: new Date(2020, 2, 28), title: 'Internet Bill', amount: 80.00, location: 'Home' },
    // ... Add more expenses as needed
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          locationOfExpenditure={expense.location}
       ></ExpenseItem> 
      ))}
    </div>
  );
}

export default App;
