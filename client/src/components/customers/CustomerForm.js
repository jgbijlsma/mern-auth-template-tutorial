import axios from "axios";
import React, { useState } from "react";

function CustomerForm({ getCustomers }) {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();

    try {
      const customerData = {
        name: customerName,
      };
      // await axios.post("http://localhost:5000/customer/", customerData);
      await axios.post(
        "https://mern-auth-template-tutorial.herokuapp.com/customer/",
        customerData
      );
      getCustomers();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={saveCustomer}>
        <input
          type="text"
          placeholder="Customer name"
          onChange={(e) => {
            setCustomerName(e.target.value);
          }}
          value={customerName}
        />
        <button type="submit">Save new customer</button>
      </form>
    </div>
  );
}

export default CustomerForm;
