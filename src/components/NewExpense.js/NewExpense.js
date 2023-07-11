import React, { useState } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './NewExpense.css';

const NewExpense = ({onAppExpense}) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    onAppExpense(expenseData);
  };

  const addExpenseClickHandler = () => {
    setIsAddingExpense(true);
  };

  const stopEditingHanlder = () => {
    setIsAddingExpense(false);
  };

  return (
    <div className='new-expense'>
      { !isAddingExpense && <button onClick={addExpenseClickHandler}>Add Expense</button>}
      { isAddingExpense && <ExpenseForm onStopEditing={stopEditingHanlder} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense;
