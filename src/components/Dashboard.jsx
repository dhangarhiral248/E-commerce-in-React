import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  async function fetchData() {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchCategories() {
    const cats = [
      ...new Set(
        products.map((p) => {
          return p.category;
        }),
      ),
    ];

    setCategories(cats);
  }

  useEffect(() => {
    fetchCategories();
  }, [products]);

  return (
    <>
      <Navbar />
      <Hero />
      <Products products={products} categories={categories} />
    </>
  );
};

export default Dashboard;
