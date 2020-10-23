import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div className="product">
        <img
          alt={this.props.name}
          src={process.env.PUBLIC_URL + "/images/products/" + this.props.image}
        />
        <div className="details">
          <h2>{this.props.name}</h2>
          {/* <span>{this.props.description}</span> */}
        </div>
      </div>
    );
  }
}

export default Product;
