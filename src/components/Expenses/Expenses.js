import React, { useState } from "react"; // aslında yeni nesil react app'de gerekmiyor
import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  /*  const propsExp = props.expenses;
    console.log('propsExp (=props.expenses), at each reload in expenses.js:');
    console.log(propsExp);
*/
  const [selectedYear, setSelectedYear] = useState("all-years");
  // props to print to the screen. After/before selecting the filter
  //const [expensesFiltered, setExpensesFiltered] = useState(props.expenses);
  /* console.log(`selected Year State: ${selectedYear}`);
    console.log('expenseToPrint at reload, all-years case:');
    console.log(expenseToPrint); 
 */
  /*     console.log(`selectedYear = ${selectedYear}`);
    console.log('props.expenses in Expenses.js:');
    console.log(props.expenses);
    console.log('props.expenses.filter(expenses => expenses.date.getFullYear() == selectedYear):');
    console.log(props.expenses.filter(expenses => expenses.date.getFullYear() == selectedYear)) 
    */

  const filterHandler = (selectedFilterYear) => {
    console.log("in Expenses, filter year selected:");
    console.log(selectedFilterYear);
    setSelectedYear(selectedFilterYear);
    console.log('props.expenses in Expense.js:');
    console.log(props.expenses);
    //console.log('props.expenses[0].date.getFullYear()');
    //console.log(props.expenses[0].date.getFullYear());
    /* if (selectedFilterYear != "all-years") {
        let filteredExpenses = props.expenses.filter(expenses => expenses.date.getFullYear() == selectedFilterYear)
        console.log(`filtered Expenses in Expenses.js:`);
        console.log(filteredExpenses);
        setExpensesFiltered(filteredExpenses);
        console.log('props.expenses.filter(expenses => expenses.date == selectedYear):');
        console.log(props.expenses.filter(expenses => expenses.date == selectedYear))
    } else {
        // no change
        console.log('props.expenses:');
        console.log(props.expenses);
    } */
  };
  if (selectedYear == "all-years") {
    console.log(
      'selectedYear == "all-year" true, so returning all the expenses...'
    );
    console.log(`sending `)
    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selectedFilter={selectedYear}
            onChangeFilter={filterHandler}
          ></ExpenseFilter>
          <ExpensesChart expenses={props.expenses}></ExpensesChart>
          {props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
            </Card>
      </div>
    );
  } else { //if selectedYear != "all-year"
    console.log(`selectedYear == "all-year" false, it is ${selectedYear}, so returning filtered expenses...`);
    let expensesContent = <p>no expenses found</p>;
    if (
      props.expenses.filter(
        (expenses) => expenses.date.getFullYear().toString() === selectedYear
      ).length > 0
    ) {
      expensesContent = props.expenses
        .filter(
          (expenses) => expenses.date.getFullYear().toString() === selectedYear
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ));
    }

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selectedFilter={selectedYear}
            onChangeFilter={filterHandler}
          ></ExpenseFilter>
          
         {<ExpensesChart expenses={props.expenses.filter(expenses => expenses.date.getFullYear().toString() === selectedYear)}></ExpensesChart> }
          {expensesContent}
          {/* yukarıdaki ifade en yalın ifade...  Alternatifleri aşağıda: */}

          {/* burada bir trick yaptık.. normalte ternary operator ile yapılabilecek bir conditional rendering && operatoru
                        ile daha sade bir şekilde yapıldı... ternary operator ile olan çözüm de aşağıda comment şeklinde verildi.. */}
          {/*  {props.expenses.filter(expenses => expenses.date.getFullYear().toString() === selectedYear).length === 0 && 
                        <p>no expenses found</p>}
                        {props.expenses.filter(expenses => expenses.date.getFullYear().toString() === selectedYear).length > 0 && (
                            props.expenses.filter(expenses => expenses.date.getFullYear().toString() === selectedYear).map(expense => (
                                <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                                />
                            )))} */}

          {/* alternative yöntem:   
                         {props.expenses.filter(expenses => expenses.date.getFullYear().toString() === selectedYear).length === 0 ? (
                            <p>no expenses found</p>) : (
                             props.expenses.filter(expenses => expenses.date.getFullYear().toString() === selectedYear).map(expense => (
                                <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                                />
                            )))}
                       */}
        </Card>
      </div>
    );
  }
};

export default Expenses;
