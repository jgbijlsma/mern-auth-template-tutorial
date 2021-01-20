import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    // const customersRes = await axios.get("http://localhost:5000/customer/");
    const customersRes = await axios.get(
      "https://mern-auth-template-tutorial.herokuapp.com/customer/"
    );
    setCustomers(customersRes.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
}

export default Customers;
