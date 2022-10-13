import React, { useEffect, useState } from "react";

import Skeleton from "../../components/Skeleton/Skeleton";
import Product from "../../components/Product/Product";
import Layout from "../../components/Layout/Layout";
import Categories from "../../components/Categories/Categories";

const Home = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/data/product.json")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      {loading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index.id} />)
        : items.map((obj) => (
            <Product currentCategory={currentCategory} key={obj.id} {...obj} />
          ))}
    </Layout>
  );
};

export default Home;
