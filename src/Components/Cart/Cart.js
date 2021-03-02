import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const budget = cart[i];
    total = total + budget.salary;
  }
  const finalTotal = total.toFixed(2);

  let singleSalary = 0;
  for (let i = 0; i < cart.length; i++) {
    const salary = cart[i];
    singleSalary = salary.salary;
  }

  let playerName = [];
  for (let i = 0; i < cart.length; i++) {
    const singleName = cart[i];
    playerName = singleName.name;
  }
  return (
    <div>
      <h1>Team</h1>
      <h3>Total players: {cart.length}</h3>

      <h6>Player Name: {playerName}</h6>
      <p>Player's Salary: {singleSalary}</p>
      <h3>Total budget: {parseFloat(finalTotal)}</h3>
    </div>
  );
};

export default Cart;
