import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm.jsx';
import ExpenseTable from './ExpenseTable.jsx'; 
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 

  // Function to add a new expense
  const addExpense = (newExpense) => {
    console.log("Adding new expense:", newExpense); 
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]); 
  };

  // Function to handle search
  const handleSearchChange = (event) => {
    console.log("Search term changed:", event.target.value); 
    setSearchTerm(event.target.value);
  };

  // Filter expenses 
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Rendering App component with expenses:", expenses, "Filtered:", filteredExpenses);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="container">
        <div className="form-section">
           <ExpenseForm onAddExpense={addExpense} />
        </div>
        <div className="table-section">
          <input
            type="text"
            placeholder="Search expenses by description..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: 'calc(100% - 22px)', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }} // Basic styling for search input
          />
          <ExpenseTable expenses={filteredExpenses} /> {/* filtered expenses */}
        </div>
      </div>
    </div>
  );
}

export default App;
