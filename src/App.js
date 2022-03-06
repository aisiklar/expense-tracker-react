import logo from './logo.svg';
import './App.css';
import './components/ExpenseItem';
import ExpenseItems from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>So we have started!</h2>
      <ExpenseItems></ExpenseItems>
    </div>
  );
}

export default App;
