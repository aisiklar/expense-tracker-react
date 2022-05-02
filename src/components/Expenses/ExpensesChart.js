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
    for (const expense of props.expense) {
        // expenseMonth in 0-... values:
        const expenseMonth = expense.date.getMouth();
        chartDataPoints[expenseMonth].value += expense.amount;

    }


    return (
        <chart dataPoints={chartDataPoints}></chart>
    )
}

export default ExpenseChart;