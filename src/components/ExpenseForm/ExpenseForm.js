import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData}) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [isAddingExpense, setIsAddingExpense] = useState(false);

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHanlder = (event) => {
        setEnteredDate(event.target.value);
    };

    const cancelClickHandler = () => {
        setIsAddingExpense(false);
    };

    const addExpenseClickHandler = () => {
        setIsAddingExpense(true);
    };
    

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount,
        };
        
        onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setIsAddingExpense(false);
    };

  return (
    <div>
        { 
            (isAddingExpense) 
            ? (<form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                </div>
        
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Ammount</label>
                        <input type='number' value={enteredAmount} min={"0.001"} step={"0.001"} onChange={amountChangeHandler}/>
                    </div>
                </div>
        
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={enteredDate} min={"2019-01-01"} max={"2024-12-31"} onChange={dateChangeHanlder} />
                    </div>
                </div>

                {
                    (isAddingExpense) && (
                        <div className='new-expense__actions'>
                            <button type='submit' onClick={submitHandler}>Add Expense</button>
                        </div>
                    )
                }
            </form>)
            : ('')
        }
        {
            (!isAddingExpense) && (
                <div className='new-expense__actions'>
                    <button type='button' onClick={cancelClickHandler}>Cancel</button>
                    <button type='button' onClick={addExpenseClickHandler}>Add Expense</button>
                </div>
            )
        }
    </div>
  );
}

export default ExpenseForm;
