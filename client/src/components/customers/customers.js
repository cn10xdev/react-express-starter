import React from "react";
import "./customers.css";

class Customers extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }
  componentDidMount() {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) =>
        this.setState({ customers }, () =>
          console.log("Customers fetched!", customers)
        )
      );
  }
  render() {
    return (
      <div>
        <h1>F.R.I.E.N.D.S</h1>
        <ul>
          {this.state.customers.map((customer) => (
            <li key={customer.id}>{customer.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
