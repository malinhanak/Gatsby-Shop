import React, { Component }  from 'react'
import Markdown from 'react-markdown'
import ProductList from '../pages/listing'

class CategoryComponent extends Component {
  render() {
    const data = this.props.data;
    console.log('category data', data)

      return (
        <div>
          <ProductList data={data}></ProductList>
        </div>
      )
  }
}
export default CategoryComponent;

export const queryCategory = graphql`
  query CategoryQuery($slug: String!) {
    allProduct(filter: {categorySlug: {eq: $slug}}) {
    edges {
      node {
        id
        name
        slug
        description
        category
        price
        stock
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
