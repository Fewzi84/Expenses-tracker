import React from "react";
import ExpenseDate from "../expenseDate/expenseDate.component";
import Card from "../Card/card.component";
import './expense-list.style.css'

const ExpenseList = props => (
    <Card className = 'expense-list'>
            <ExpenseDate date={props.date} />
            <div className="expense-list_description">
                <h2 className="title">{props.title}</h2>
                <p className="amount">{props.amount} $</p>
            </div>

    </Card>

)
export default ExpenseList;