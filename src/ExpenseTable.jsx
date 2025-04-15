import React from 'react';

function ExpenseTable({ expenses }) {
  console.log("Rendering ExpenseTable with expenses:", expenses); // Log expenses received by the table

  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th> {}
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              console.log("Mapping expense:", expense); 
              return (
                <tr key={expense.id}>
                  <td>{expense.name}</td> {/* Display name */}
                  <td>{expense.description}</td>
                  <td>${expense.amount.toFixed(2)}</td> {}
                  <td>{expense.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExpenseTable;
