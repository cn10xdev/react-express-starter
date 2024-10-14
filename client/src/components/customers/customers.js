import React from "react";
import "./customers.css";

class Customers extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],

      loading: true, // Initially set loading to true

      error: null,

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

        this.setState({ customers: [], loading: false, error: "Failed to fetch customers. Please try again later." }); // Set loading false and also set error message
        
      });
  }

  render() {
    const { loading, customers, error } = this.state;
    return (
      <div>
        <h1>F.R.I.E.N.D.S</h1>
 {loading ? (
          <p>Loading customers...</p> // Show loading message while fetching
        ) : error ? (
          <p>{error}</p> // Show error message if there's an error
        ) : customers.length === 0 ? (
          <p>No customers available</p> // Show this message if no customers are returned
        ) : (
          <ul>
            {customers.map((customer, index) => (
              <li key={index}>{customer.name}</li> // Map over customers if data is fetched
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Customers;
