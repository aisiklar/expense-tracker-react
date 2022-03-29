import React from 'react'; // aslında yeni nesil react app'de gerekmiyor
import ExpenseItem from './ExpenseItem';
import './expenses.css';
import Card from'../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
 const propsExp = props.expenses;
 const filterHandler = (selectedFilterYear)=>{
    console.log('in Expenses, filter year selected:')
    console.log(selectedFilterYear);
 }
    return (
        <div>
            <ExpenseFilter filterHandler={filterHandler}></ExpenseFilter>
            <Card className='expenses'>
                <ExpenseItem
                    title={propsExp[0].title}
                    amount={propsExp[0].amount}
                    date={propsExp[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={propsExp[1].title}
                    amount={propsExp[1].amount}
                    date={propsExp[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={propsExp[2].title}
                    amount={propsExp[2].amount}
                    date={propsExp[2].date}
                ></ExpenseItem>
                
            </Card>
        </div>
    )
}

export default Expenses;