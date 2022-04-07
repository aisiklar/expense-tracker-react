import React, {useState} from 'react'; //no need to import useState now!!
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    //const [selectedFilter, setFilter] = useState('');
    //console.log(`selectedFilter in ExpenseFilter: ${selectedFilter}`);
    
    const dropdownChangeHandler = (event) => {
        //console.log(event.target.value);
        props.onChangeFilter(event.target.value);
        // aşağıdakine gerek yok. Doğrudan parent component'a ilet.
        //setFilter(event.target.value);
    }
    
    // State'i bu comp. içinde değiştirmediğimiz için bu fonksiyona ihtiyaç kalmadı.
/*     const onSelectFilter = ()=>{
        console.log(`in onSelectFilter under ExpenseFilter.js, selectedFilter:${selectedFilter}`);
        props.onChangeFilter(selectedFilter);
    }
    onSelectFilter(); */

    return (
        <div className="expenses-filter">
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedFilter} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='all-years'>all years</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;