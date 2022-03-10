import './App.css';
//import './components/ExpenseItem';
//import ExpenseItems from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)      
    },
    {
      id: 'e2',
      title: 'new TV',
      amount: 799.12,
      date: new Date(2022, 1, 14)      
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294,
      date: new Date(2022, 2, 5)      
    }
  ]
  return (
    <div>
     <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
