import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
  // const [enterTitle, setEnterTitle] = useState('');
  // const [enterAmount, setEnterAmount] = useState('');
  // const [enterDate, setEnterDate] = useState('');
  const [userInput, setUserinput] = useState({
    enterTitle :'',
    enterAmount: '',
    enterDate:''
  });


    const titleChangeHandler = (event) =>{
      //  setEnterTitle(event.target.value);
      // setUserinput({
      //   ...userInput,
      //   enterTitle: event.target.value
      // })
      setUserinput((prevState) =>{
        return {
          ...prevState,
          enterTitle: event.target.value
        }
        });
    };
    const amountChangeHandler = (event) =>{
      //  setEnterAmount(event.target.value);
      // setUserinput({
      //   ...userInput,
      // enterAmount: event.target.value
      // });
      setUserinput((prevState) =>{
        return {
          ...prevState,
          enterAmount: event.target.value
        }
        });
    };
    const dateChangeHandler = (event) =>{
    //    setEnterDate(event.target.value);
    // 
    // setUserinput({
    //   ...userInput,
    //   enterDate: event.target.value
    // });
    setUserinput((prevState) =>{
      return {
        ...prevState,
        enterDate: event.target.value
      }
      });
  };
  return (
    <form>
    <div className="expense-form">
  <div className="input-row">
    <label >Expense Title</label>
    <input type="text"   onChange={titleChangeHandler} placeholder="Expense Title" />
  </div>
  <div className="input-row">
    <label>Expense Amount</label>
    <input type="number"   placeholder="Expense Amount"  min="0.01" step="0.01" onChange={amountChangeHandler}/>
   
  </div>
  <div className="input-row">
    <label>Expense Date</label>
    <input type="date"  placeholder="Expense Date" min="2019-01-01" max="02024-01-01" onChange={dateChangeHandler}   />
  </div>
  <div className="button-row">
    <button>Add Expense</button>
  </div>
</div>

 </form>
  );
};

export default ExpenseForm;
