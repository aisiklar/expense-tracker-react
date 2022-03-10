import ExpenseItems from './components/ExpenseItem';


function Expenses(props) {


    return (
        <div>
            <ExpenseItems
                title={props[0].title}
                amount={props[0].amount}
                date={props[0].date}
            ></ExpenseItems>
            <ExpenseItems
                title={props[1].title}
                amount={props[1].amount}
                date={props[1].date}
             ></ExpenseItems>
            <ExpenseItems
                title={props[2].title}
                amount={props[2].amount}
                date={props[2].date}
            ></ExpenseItems>
        </div>


    )


}

export default Expenses;