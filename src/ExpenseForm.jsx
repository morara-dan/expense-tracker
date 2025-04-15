import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState(''); // Add state for name
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // Add handler for name change
  const handleNameChange = (event) => {
    console.log("Name changed:", event.target.value);
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    console.log("Description changed:", event.target.value); 
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    console.log("Amount changed:", event.target.value); 
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log("Date changed:", event.target.value); 
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted with:", { name, description, amount, date }); // Log name

    if (!name || !description || !amount || !date) { // Add name to validation
      console.warn("Form submission blocked: All fields required.");
      alert('Please fill in all fields');
      return;
    }

    const newExpense = {
      name, // Add name to expense object
      description,
      amount: parseFloat(amount), 
      date,
    };

    onAddExpense(newExpense);

    // Clear the form fields after submission
    console.log("Clearing form fields.");
    setName(''); // Clear name field
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>
      {/* Add Name Input Field */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Expense name"
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Expense description"
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Amount"
          step="0.01" 
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
