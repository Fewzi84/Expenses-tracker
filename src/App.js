import React, {useState} from 'react';
import './App.css';
import NewExpense from './components/newExpense/newExpense.component';
import FilterByDate from './components/filter-by-date/filterByDate.component';
import Chart from './components/chart/chart.component';
import Expenses from './components/expenses/expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenses = (expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    });

  }
  const [filteredYear, setFilteredYear] = useState('2024');
  const filteredYearHandler = (year) =>{
    setFilteredYear(year.toString());
  }
  
  const filteredData = expenses.filter(item=>(item.date.getFullYear().toString() === filteredYear));

  return (
    <div>
        <NewExpense  onAddExpense = {addExpenses}/>
        <div className='expenses'>
         <FilterByDate onFilterByYear={filteredYearHandler} selected = {filteredYear} />
         <Chart expenses = {filteredData}/>
          <Expenses  items = {filteredData} />

        </div>

    </div>
  )
    
}

export default App;
