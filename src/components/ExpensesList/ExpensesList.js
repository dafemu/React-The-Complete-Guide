import React from 'react';
import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpensesList = ({items}) => {
  return (
    <ul className='expenses-list'>
      {
        (items.length === 0) 
        ? (<h2 className='expenses-list__fallback'>Found no expenses</h2>) 
        : ( items.map((expense, index) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))
        }
    </ul>
  )
}

export default ExpensesList
