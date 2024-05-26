import React, { useContext } from "react";

import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import Track from "../../components/track/Track";

function Home() {
  const context = useContext(myContext);
  console.log(context);
  const { color, state } = context;

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  const addCart = () => {
    dispatch(addToCart("Shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };

  return (
    <Layout>
      
      <HeroSection />
      <Filter />
      <ProductCard/>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Testimonial />
      <Track></Track>
    </Layout>
  );
}

export default Home;
