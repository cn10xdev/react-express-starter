import React from "react";
import "./customers.css";

class Customers extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [], 
      loading: true,
    };
  }

  componentDidMount() {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) =>
        this.setState({ customers })
      )
      .catch((error) => {
        console.error("Error fetching customers", error);
        this.setState({ customers: [] });
      });
  }

  render() {
    return (
      <div>
        <h1>F.R.I.E.N.D.S</h1>
        <ul>
          {this.state.customers.length === 0 && (
            <p>No customers available</p>
          )}
          {this.state.customers.map((customer, index) => (
            <li key={index}>{customer.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
