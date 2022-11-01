import React from 'react'
import "./ProjectCards.css";
import Product from "./ProductList/Product";
import { products } from "../data";

const ProjectCards = () => {

      return (
    <div className="pl">
      
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCards
