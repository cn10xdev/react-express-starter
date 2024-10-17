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

        this.setState({
          customers: [],
          loading: false,
          error: "Failed to fetch customers. Please try again later.",
        }); // Set loading false and also set error message
      });
  }

  render() {
    const { loading, customers, error } = this.state;

    let content;

    if (loading) {
      content = <div className="spinner"></div>; // Show spinner while loading
    } else if (error) {
      content = <p>{error}</p>; // Show error message if there's an error
    } else if (customers.length === 0) {
      content = <p>No customers available</p>; // Show message if no customers are available
    } else {
      content = (
        <ul>
          {customers.map((customer, index) => (
            <li key={index}>{customer.name}</li> // Map over customers if data is fetched
          ))}
        </ul>
      );
    }

    return (
      <div>
        <h1>F.R.I.E.N.D.S</h1>
        {content}
      </div>
    );
  }
}

export default Customers;
