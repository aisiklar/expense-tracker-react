import React from 'react';
import Chart from '../Chart/Chart';


const ExpenseChart = (props) => {
    const chartDataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "June", value: 0},
        {label: "July", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0},
    ];
    for (const expense of props.expenses) {
        // expenseMonth in 0-... values:
        console.log(`expense.date.getMonth() of props.expenses is ${expense.date.getMonth()}`);
        const expenseMonth = expense.date.getMonth();
        console.log(`expenseMonth = ${expenseMonth}`);
        console.log(`type of expenseMonth = ${typeof(expenseMonth)}`);
        console.log(`chartDataPoints[expenseMonth].value = ${chartDataPoints[expenseMonth].value}`);
        console.log(`typeof expense.amount = ${typeof(expense.amount)}`);
        chartDataPoints[expenseMonth].value += parseInt(expense.amount, 10);
        console.log(` after adding; chartDataPoints[expenseMonth].value = ${chartDataPoints[expenseMonth].value}`);
        console.log(`typeof chartDataPoints[expenseMonth].value: ${typeof(chartDataPoints[expenseMonth].value)}`);
    }


    return (
        <Chart dataPoints={chartDataPoints}></Chart>
    )
}

export default ExpenseChart;