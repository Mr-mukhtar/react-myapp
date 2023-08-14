//import '.ExpenseItem.css';
function ExpenseItem(props) {
    
    return (
        <div>
           <div>{props.date.toDateString()}</div>
            <div><h2>{props.title}</h2></div>
            <div>${props.amount}</div>
           <div><h3>{props.locationOfExpenditure}</h3></div>

            </div>
        
    );
}
export default ExpenseItem;