import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 04th 2022</div>
            <div clssName="expense-item__description">
                <h2>Car insurance</h2>
                <div className="expense-item__price">294 USD</div>
            </div>    
        </div>
    )
}

export default ExpenseItem;
