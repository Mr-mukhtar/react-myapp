
import React, {useState }from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DummyData = [
 
  { id: 'e3', date: new Date(2022, 2, 28), title: 'Internet Bill', amount: 80.00, location: 'Home' },
  { id: 'e5', date: new Date(2021, 4, 10), title: 'Movie Tickets', amount: 20.00, location: 'Cinema' },
  { id: 'e6', date: new Date(2020, 5, 5), title: 'Clothing', amount: 75.00, location: 'Mall' },
  
  // ... Add more expenses as needed
];
const App = () => {
    const [expenses, setExpenses]=useState(DummyData);
  
   const addExpenseHAndler = expense =>{
     setExpenses(prevExpenses =>{
      return [expense, ...expenses]
     });
    
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
