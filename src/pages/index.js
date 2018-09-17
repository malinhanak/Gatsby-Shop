import React, { Component } from "react"
import Link from 'gatsby-link'
import ProductList from './listing'
import CategoryList from './categories'

class IndexComponent extends Component {
  render() {
    const data = this.props.data;
    console.log('Display data @ index', data)
    return (
      <div>
        <CategoryList data={data}></CategoryList>
        <ProductList data={data}></ProductList>
      </div>
    )
  }
}

export default IndexComponent;
export const allProductsQuery = graphql`
  query FindAllProduct {
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
          categorySlug
        }
      }
    }
  }
`
