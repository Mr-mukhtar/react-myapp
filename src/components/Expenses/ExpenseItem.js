import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
 
const ExpenseItem = (props) => {
  //const [amount, subTitle] = useState(props.amount);
  // const clickHandle = () => {
  //   subTitle('100');
  //   //console.log(props.title);
  // };
  return (
   <li>
   
         
         <div className="expense-item">
          
          <ExpenseDate  date= {props.date}/>
           <div className=".expense-item h2">{props.title}</div>
           <div className="expense-item__price">${props.amount}</div>
           <div className="expense-location">{props.locationOfExpenditure}</div>
          {/* <div>
           <button className='btn'  onClick={clickHandle}>update</button>
          </div> */}
         </div>
      
   </li>
  );
}

export default ExpenseItem;
