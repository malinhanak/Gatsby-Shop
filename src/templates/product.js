import React from 'react'
import Markdown from 'react-markdown'

class ProductComponent extends React.Component {
  render() {
    const data = this.props.data;
    const allReviews = data.allReview ? data.allReview.edges : []

    console.log('page data', allReviews);
    console.log('review data', data)

      const product = data.product;
      let reviewBox;
      if (allReviews.length) {
        reviewBox = allReviews.map((node) => {
          return (
            <article>
              <p>Author: {node.node.author}</p>
              <p>{node.node.review}</p>
              <p>{node.node.rating}</p>
            </article>
          )
        });
      } else {
        reviewBox = <div>Inga reviews</div>;
      }


      return (
        <section>
          <h1>{product.name}</h1>
          <img src={product.img.url} style={{border: "1px solid lightgray"}}></img>
          <Markdown
            source={product.description}
            escapeHtml={false}
          />
          <h3>Reviews for {product.name}</h3>
          {reviewBox}
      </section>
    )
  }
}
export default ProductComponent;


export const queryProduct = graphql`
  query ProductQuery($slug: String!) {
    product(slug: { eq: $slug }) {
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
    }
    allReview(filter: {product: {slug: {eq: $slug}}}) {
    edges {
      node {
        id
        review
        product {
          slug
        }
        author
        rating
      }
    }
  }
  }
`
