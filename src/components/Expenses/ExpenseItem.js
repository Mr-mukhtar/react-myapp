import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'; // Import the CSS file
const ExpenseItem = (props) => {
  const [amount, subTitle] = useState(props.amount);
  const clickHandle = () => {
    subTitle('100');
    //console.log(props.title);
  };
  return (
    <div className="expense-item">
         
      <div className="expense-details">
       <ExpenseDate  date= {props.date}/>
        <div className="expense-title">{props.title}</div>
        <div className="expense-amount">${amount}</div>
        <div className="expense-location">{props.locationOfExpenditure}</div>
       <div>
        <button className='btn'  onClick={clickHandle}>update</button>
       </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
