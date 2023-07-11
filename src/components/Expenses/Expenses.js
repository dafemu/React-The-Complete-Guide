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

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter year={filterYear} onFilter={filterChamgedHandler} />

                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
            </Card>
        </div>
    );
}

export default Expenses; 