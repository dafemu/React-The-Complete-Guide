import React, { useState } from 'react'
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from "../Card/Card";
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses({expenses}){
    const [filterYear, setFilterYear] = useState('2020');

    const filterChamgedHandler = (yearSelected) => {
        setFilterYear(yearSelected);
    };
    
    const filteredExpenses = expenses.filter(expense => (expense.date.getFullYear().toString()) === filterYear);

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter year={filterYear} onFilter={filterChamgedHandler} />
                {/* {expenses.map((expense, index) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)} */}
                {filteredExpenses.map((expense, index) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
        </div>
    );
}

export default Expenses; 