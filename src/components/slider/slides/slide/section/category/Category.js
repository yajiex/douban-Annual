import React from 'react';
import './Category.css';

const Category = (props) => (
  <h1 className="category">
    <div>{props.class1}</div>
    <div>{props.class2}</div>
  </h1>
);

export default Category;
