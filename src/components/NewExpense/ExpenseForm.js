import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState('');
  const [enterLocation, setEnterLocation] = useState('');
  // const [userInput, setUserinput] = useState({
  //   enterTitle :'',
  //   enterAmount: '',
  //   enterDate:''
  // });

  const LocationChangeHandler = (event) =>{
    setEnterLocation(event.target.value);
   // setUserinput({
   //   ...userInput,
   //   enterTitle: event.target.value
   // })
   // setUserinput((prevState) =>{
   //   return {
   //     ...prevState,
   //     enterTitle: event.target.value
   //   }
   //   });
 };

    const titleChangeHandler = (event) =>{
       setEnterTitle(event.target.value);
      // setUserinput({
      //   ...userInput,
      //   enterTitle: event.target.value
      // })
      // setUserinput((prevState) =>{
      //   return {
      //     ...prevState,
      //     enterTitle: event.target.value
      //   }
      //   });
    };
    const amountChangeHandler = (event) =>{
       setEnterAmount(event.target.value);
      // setUserinput({
      //   ...userInput,
      // enterAmount: event.target.value
      // });
      // setUserinput((prevState) =>{
      //   return {
      //     ...prevState,
      //     enterAmount: event.target.value
      //   }
      //   });
    };
    const dateChangeHandler = (event) =>{
       setEnterDate(event.target.value);
    
    // setUserinput({
    //   ...userInput,
    //   enterDate: event.target.value
    // });
    // setUserinput((prevState) =>{
    //   return {
    //     ...prevState,
    //     enterDate: event.target.value
    //   }
    //   });
  };
   const submitHandler =(event) => {
    event.preventDefault();
     const expenseData = {
      location: enterLocation,
      title: enterTitle,
      amount:enterAmount,
      date: new Date(enterDate)
     };
   props.onSaveExpenseData(expenseData);
   setEnterLocation('');
   setEnterTitle('');
   setEnterAmount('');
   setEnterDate('');
    };

  return (
    <form onSubmit={submitHandler}>
    <div className="new-expense">
    <div className="new-expense__control">
    <label >Expense Location</label>
    <input 
    type="text"  
    value={enterLocation} 
    onChange={LocationChangeHandler} 
   />
   </div>
  <div className="new-expense__control">
    <label >Expense Title</label>
    <input 
    type="text"  
    value={enterTitle} 
    onChange={titleChangeHandler} 
   />
  </div> 
  <div className="new-expense__control">
    <label>Expense Amount</label>
    <input 
    type="number" 
     value={enterAmount}  
     min="0.01" step="0.01" 
     onChange={amountChangeHandler}/>
   
  </div>
  <div className="new-expense__control">
    <label>Expense Date</label>
    <input 
    type="date" 
    value={enterDate}   
    min="2019-01-01" max="2024-01-01" 
    onChange={dateChangeHandler}   />
  </div>
  
</div>
<div className=".new-expense__actionsow">
    <button>Add Expense</button>
  </div>
 </form>
  );
};

export default ExpenseForm;
