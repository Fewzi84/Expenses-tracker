import React , {useState} from "react";

import './newExpenseForm.style.css'

const NewExpenseForm = props => {
const  [enterdtitle, setTitle] = useState('');
const  [enterdamount, setAmount]=useState('');
const  [enterddate, setDate] = useState('');
const titleChangeHandler = event=>{
    setTitle(event.target.value);
}

const amountChangeHandler = event=>{
    setAmount(event.target.value);
}
const dateChangeHundler = event=>{
    setDate(event.target.value);
}
const submitHandler =event=>{
    event.preventDefault();

    const expenseData = {
        title: enterdtitle,
        amount: enterdamount,
        date : new Date(enterddate)
    }
   props.onSaveChangeHandler(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
}
    return (<form onSubmit={submitHandler}>
        <div className="new-expense-controles">
        <div className="new-expense-controle">    
        <label for="title" >Title</label>
            <input type="text" value={enterdtitle} onChange={titleChangeHandler} id="title" />
        </div>
        <div className="new-expense-controle">   
         <label for="amount"  >Amount</label>
            <input type="number" value={enterdamount} onChange={amountChangeHandler} id="amount" />
        </div>
        <div className="new-expense-controle">    
        <label for="date" >Date</label>
            <input type="date" value={enterddate} onChange={dateChangeHundler} id="date" />
        </div>

        </div>
        <div className="submit">
            <button type="button" onClick={props.onCancel} className="cancle">Cancle</button>
            <button type="submit" className="sbt">Add Expense</button>
        </div>

    </form>)
}
export default NewExpenseForm