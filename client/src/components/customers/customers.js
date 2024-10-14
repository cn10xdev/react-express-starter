import React from "react";
import "./customers.css";

class Customers extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      error: null,
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
        this.setState({ customers: [], error:"Failed to fetch customers. Please try again later."});
      });
  }

  render() {
    return (
      <div>
        <h1>F.R.I.E.N.D.S</h1>
        <ul>
        {this.state.error && (
          <p>{this.state.error}</p>
        )}  
          {this.state.customers.length === 0 && !this.state.error &&(
            <p>No customers available</p>
          )}
          {this.state.customers.map((customer) => (
            <li key={customer.id}>{customer.name}</li>
            
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
