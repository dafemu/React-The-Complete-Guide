import React, { useState } from 'react'
import './Expenses.css';
import Card from "../Card/Card";
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from '../ExpensesList/ExpensesList';

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
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses; 