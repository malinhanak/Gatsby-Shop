import React, { Component } from 'react'
import Link from 'gatsby-link'
import FlexRow from '../components/flex-row'
import NavComponent from '../components/nav-component'

class CategoryList extends Component {
  render() {
    const data = this.props.data;
    console.log('Display data @ categories', data)
    let li = []
    let hash = {}
    for (var x = 0; x < data.allProduct.edges.length; x++) {
      const element = data.allProduct.edges[x].node.categorySlug;
      if (!hash[element]) {
          li.push(element)
      }
        hash[element] = 1;
    }
    const mapCategory = li.map((cat, i) => {
      if(cat) {
        return <NavComponent key={i}><Link to={`/${cat}`}>{cat}</Link></NavComponent>
      }
    })

    return ( <FlexRow>{mapCategory}</FlexRow> )
  }
}

export default CategoryList;
