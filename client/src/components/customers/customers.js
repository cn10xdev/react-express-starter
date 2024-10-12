import React from "react";
import "./customers.css";

class Customers extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      loading: true, // Initially set loading to true
    };
  }

  componentDidMount() {
    fetch("/api/customers")
      .then((res) => res.json())
      .then(
        (customers) => this.setState({ customers, loading: false }) // Set loading to false once data is fetched
      )
      .catch((error) => {
        console.error("Error fetching customers", error);
        this.setState({ customers: [], loading: false }); // Set loading to false even on error
      });
  }

  render() {
    return (
      <div>
        <h1>F.R.I.E.N.D.S</h1>
        {this.state.loading ? (
          <p>Loading customers...</p> // Show loading message while fetching
        ) : (
          <ul>
            {this.state.customers.length === 0 ? (
              <p>No customers available</p> // Show this message if no customers are returned
            ) : (
              this.state.customers.map((customer, index) => (
                <li key={index}>{customer.name}</li>
              ))
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default Customers;
