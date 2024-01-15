import React, {useState} from "react";
import NewExpenseForm from "../newExpenseForm/newExpenseForm.component";
import './newExpense.style.css'

const NewExpense = props => {
    const [isEditing, setIsEditing] = useState(false);

    const expenseDataHandler = (newData) => {
        const enteredData = {
            ...newData, id: Math.random().toString()
        }
        props.onAddExpense(enteredData);
    }
   const startEditingHandler = ()=>{
    setIsEditing(true);
   }
   const stopEditingHandler = ()=>{
    setIsEditing(false)
   }

    
    return (
        <div className="newExpense">
            {!isEditing && (
            <button className=" addexpense-btn" onClick={startEditingHandler} type="button">Add new expense</button> )}
            {isEditing && (
            <NewExpenseForm onSaveChangeHandler={expenseDataHandler}  onCancel = {stopEditingHandler}/>

            )}
        </div>
    )
}
export default NewExpense