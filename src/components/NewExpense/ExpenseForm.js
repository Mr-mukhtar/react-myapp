import React from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
  
    const TitleChangeHandler = (event) =>{
    console.log(event.target.value);
    };

  return (
    <form>
    <div className="expense-form">
  <div className="input-row">
    <label htmlFor="title">Expense Title</label><br/>
    <input type="text" id="title"  onChange={TitleChangeHandler} placeholder="Expense Title" />
  </div>
  <div className="input-row">
    <label htmlFor="amount">Expense Amount</label><br/>
    <input type="number" id="amount"  placeholder="Expense Amount" />
  </div>
  <div className="input-row">
    <label htmlFor="date">Expense Date</label>
    <input type="date" id="date" placeholder="Expense Date" />
  </div>
  <div className="button-row">
    <button>Add Expense</button>
  </div>
</div>

 </form>
  );
};

export default ExpenseForm;
