import React, { Component } from "react";
import Link from 'gatsby-link'
import ProductContainer from "../components/product-container";
import ProductList from "../components/product-listing";
import ShopContent from "../components/shop-content";

class Products extends Component {
  render() {
    const pd = this.props.product;
    return (
        <ProductContainer>
          <Link to={`/product/${pd.slug}`} >
             <h4>{pd.name}</h4>
          </Link>
          <img src={pd.img.url} style={{border: "1px solid lightgray"}}></img>
          <p><em>{pd.personality}</em></p>
          <ShopContent>
            <p style={{width: "20%"}}>{pd.stock}</p>
            <button type="submit" style={{width: "80%"}}>Add to Cart</button>
          </ShopContent>
        </ProductContainer>
    )
  }
}

class SecondPage extends Component {
  render() {
    const data = this.props.data;

    const li = data.allProduct.edges.map((node) => {
      return <Products key={node.node.id} product={node.node}/>
    })
    return (
      <div>
        <h1>View Products</h1>
        <ProductList>
          {li}
        </ProductList>
      </div>
    )
  }
}

export default SecondPage;
export const allProductsQuery = graphql`
  query allProduct {
    allProduct {
      edges {
        node {
          id
          name
          category
          price
          stock
          slug
          personality
          img {
            url
          }
        }
      }
    }
  }
`
