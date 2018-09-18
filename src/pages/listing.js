import React, { Component } from 'react'
import Link from 'gatsby-link'
import ProductListStyle from '../components/product-listing'
import ProductContainer from '../components/product-container'
import FlexRow from '../components/flex-row'
import NavComponent from '../components/nav-component'
import CategoryList from './categories'

class Products extends Component {
  render() {
    const pd = this.props.product;
    return (
        <ProductContainer>
          <Link to={`/${pd.slug}`} >
             <h4>{pd.name}</h4>
          </Link>
          <img src={pd.img.url} style={{border: "1px solid lightgray"}}></img>
          <p><em>{pd.personality}</em></p>
          <FlexRow>
            <p style={{width: "20%", border:"1px solid lightgray", alignSelf:"stretch", margin: 0, textAlign:"center"}}>{pd.stock}</p>
            <button type="submit" style={{width: "80%"}}>Add to Cart</button>
          </FlexRow>
        </ProductContainer>
    )
  }
}


class ProductList extends Component {
  render() {
    const data = this.props.data;
    console.log('Data @ ProductList', data)
    const li = data.allProduct.edges.map((node) => {
      return <Products key={node.node.id} product={node.node}/>
    })
    return (
      <div>
        <h1>View Products</h1>
        <ProductListStyle>
          {li}
        </ProductListStyle>
      </div>
    )
  }
}

export default ProductList;
