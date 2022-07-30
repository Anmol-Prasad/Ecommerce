import { useState, useEffect } from "react";
import axios from "axios";

function PaymentsAPI() {
  const [payments, setPayments] = useState([]);

  const getPayments = async () => {
    const res2 = await axios.get(
      "https://burgershotserver.herokuapp.com/user/payment"
    );
    console.log(res2.data);
    setPayments(res2.data);
  };
  useEffect(() => {
    getPayments();
  }, []);
  return {
    payments: [payments, setPayments],
  };
}
export default PaymentsAPI;
