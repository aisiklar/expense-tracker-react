import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // multiple state ile yaparsak, aşağıdaki gibi olur.
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // console.log(`enteredTitle: ${enteredTitle}`);
    // console.log(`enteredAmount: ${enteredAmount}`);
    // console.log(`enteredDate: ${enteredDate}`);
    
  
    //tek state için:
/*     const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });
    console.log(userInput); */
    

    const titleChangeHandler = (event) =>{
        //console.log(`title, event.target.value: ${event.target.value}`);
        // multiple state ile yapılan çözüm:
        setEnteredTitle(event.target.value);

        //tek state ile yapılan çözüm:
        //bu aşağıdaki bazı durumlarda hata veriyor. Çünkü, useState schedule ederek güncelleme yapıyor
        // ve bu scheduling sebebi ile bazen yanlış -önceki- state'e referans olabiliyor.
        //bu durumda, ...userInput, hatalı bir state'i alıyor...
        /*setUserInput({
            ...userInput, //bu tüm diğer userinput parametrelerini açar
            enteredTitle: event.target.value
        }); 
        */
    
        // dolayısı ile, single state ile doğrusu bu:
        /* setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        }); */
    }
    const amountChangeHandler = (event) => {
        //console.log(`amount, event.target.value= ${event.target.value}`)
        // multiple state ile yapılan çözüm:
        setEnteredAmount(event.target.value);
        
        //tek state ile yapılan çözüm:
        //bu aşağıdaki bazı durumlarda hata veriyor. Çünkü, useState schedule ederek güncelleme yapıyor
        // ve bu scheduling sebebi ile bazen yanlış -önceki- state'e referans olabiliyor.
        //bu durumda, ...userInput, hatalı bir state'i alıyor...
        /* setUserInput({
            ...userInput, //bu tüm diğer userinput parametrelerini açar
            enteredAmount: event.target.value
        });
        */
                   // dolayısıyla aşağıdaki gibi kodu gir (tek state için)
        /* setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
        }) */
    }
    const dateChangeHandler = (event) => {
        //console.log(`date, event.target.value= ${event.target.value}`)
        // multiple state ile yapılan çözüm:
        setEnteredDate(event.target.value);
        
        //tek state ile yapılan çözüm:
        //bu aşağıdaki bazı durumlarda hata veriyor. Çünkü, useState schedule ederek güncelleme yapıyor
        // ve bu scheduling sebebi ile bazen yanlış -önceki- state'e referans olabiliyor.
        //bu durumda, ...userInput, hatalı bir state'i alıyor...
        /* setUserInput({
            ...userInput, //bu tüm diğer userinput parametrelerini açar
            enteredDate: event.target.value
        }); */
        /* 
            // dolayısıyla aşağıdaki gibi kodu gir (tek state için)
            setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value}
        }) */
    }

    const submitHandler = (event) => {
        // normalde, form submit ettiğimizde, sayfa refresh olur. Bunu engellemek için aşağıdaki metodu kullan.
        event.preventDefault();
        // multiple state yaklaşımında bu tip bir object gerekiyor. 
        //Diğer yaklaşımda object daha önceden tanımlanmış oluyor
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        //erase the input fields
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const cancelHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
    <div>    
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type='text' 
                    value={enteredTitle}
                    onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                    type='number' 
                    min="0.01" 
                    step="0.01" 
                    value={enteredAmount}
                    onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type='date' 
                    min="2019-01-01" 
                    max="2022-12-31" 
                    value={enteredDate}
                    onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        <form onSubmit={cancelHandler}>
            <div className="new-expense__actions">
                <button type="submit">Cancel</button>
            </div>
        </form>
    </div>

    )
}
    
export default ExpenseForm;