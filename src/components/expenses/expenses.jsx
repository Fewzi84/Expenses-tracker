import React from "react";
import Card from "../Card/card.component";
import ExpenseList from "../expense-list/expense-list.component";

import './expenses.css'


const Expenses = (props)=>{
       
       if(props.items.length === 0){
        return <p className="text">Found no expenses</p>
       }

  return (
        <Card className = 'expenses'>
      {props.items.map(({id, ...otherExpensedata})=> (
        <ExpenseList  key= {id} {...otherExpensedata}/>
      ))}

    </Card>

  )
}
    


export default Expenses;