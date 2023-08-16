import React from 'react';
import ExpenseForm from './components/NewExpense/NewExpense';
import Card from './components/UI/Card';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const currentDate = new Date();
  const expenses = [
    { id: 'e1', date: currentDate, title: 'Car Insurance', amount: 290.90, location: 'Food' },
    { id: 'e2', date: new Date(2020, 2, 28), title: 'Groceries', amount: 50.25, location: 'Supermarket' },
    { id: 'e3', date: new Date(2020, 2, 28), title: 'Internet Bill', amount: 80.00, location: 'Home' },
    { id: 'e4', date: new Date(2020, 3, 15), title: 'Dinner', amount: 35.50, location: 'Restaurant' },
    { id: 'e5', date: new Date(2020, 4, 10), title: 'Movie Tickets', amount: 20.00, location: 'Cinema' },
    { id: 'e6', date: new Date(2020, 5, 5), title: 'Clothing', amount: 75.00, location: 'Mall' },
    
    // ... Add more expenses as needed
  ];
   const addExpenseHAndler = expense =>{
     console.log('In App.js');
     console.log(expense);
   };

  return (
    <div>
       
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addExpenseHAndler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
