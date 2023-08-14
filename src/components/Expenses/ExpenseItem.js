import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'; // Import the CSS file
const ExpenseItem = (props) => {
   
  return (
    <div className="expense-item">
         
      <div className="expense-details">
       <ExpenseDate  date= {props.date}/>
        <div className="expense-title">{props.title}</div>
        <div className="expense-amount">${props.amount}</div>
        <div className="expense-location">{props.locationOfExpenditure}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
