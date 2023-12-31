import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'short' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
    <div>{day }</div>
    <div>{month} </div>
    <div>{year} </div>
   
  </div>
    
    ); 
}
export default ExpenseDate;