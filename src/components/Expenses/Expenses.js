import React, { useState } from 'react'; // aslında yeni nesil react app'de gerekmiyor
import ExpenseItem from './ExpenseItem';
import './expenses.css';
import Card from'../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
 const propsExp = props.expenses;
 const [selectedYear, setSelectedYear] = useState('2022');
 console.log(`selected Year State: ${selectedYear}`);

 const filterHandler = (selectedFilterYear)=>{
    console.log('in Expenses, filter year selected:')
    console.log(selectedFilterYear);
    setSelectedYear(selectedFilterYear);
 }
    return (
        <div>
           
            <Card className='expenses'>
                <ExpenseFilter selectedFilter={selectedYear} onChangeFilter={filterHandler}></ExpenseFilter>
                {props.expenses.map(expense => (
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                ))} 
            </Card>
        </div>
    )
}

export default Expenses;