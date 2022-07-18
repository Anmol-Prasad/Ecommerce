import { useState, useEffect } from "react";
import axios from "axios";

function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const [payments, setPayments] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("/api/products");
    const res2 = await axios.get("/user/payment");
    console.log(res2.data);
    console.log(res.data.products);
    setProducts(res.data.products);
    setPayments(res2.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return {
    payments: [payments, setPayments],
    products: [products, setProducts],
  };
}
export default ProductsAPI;
