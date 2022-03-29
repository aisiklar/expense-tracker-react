import React, {useState} from 'react'; 
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const [selectedFilter, setFilter] = useState('');
    console.log(`selectedFilter in ExpenseFilter: ${selectedFilter}`);
    onSelectFilter();
    const dropdownChangeHandler = (event) => {
        //console.log(event.target.value);
        setFilter(event.target.value);
    }
    const onSelectFilter = ()=>{
        console.log(`in onSelectFilter under ExpenseFilter.js, selectedFilter:${selectedFilter}`);
        props.filterHandler(selectedFilter);
    }
    return (
        <div className="expenses-filter">
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;