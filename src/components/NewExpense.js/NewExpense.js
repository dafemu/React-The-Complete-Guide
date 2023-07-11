import React from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './NewExpense.css';

const NewExpense = ({onAppExpense}) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    onAppExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;
