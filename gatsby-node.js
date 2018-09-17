/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
 const path = require('path')
 const slash = require('slash')

 exports.createPages = ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators
   return new Promise((resolve, reject) => {

     graphql(`
       {
         allProduct {
           edges {
             node {
               id
               name
               description
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
     ).then(result => {
       if (result.errors) {
         console.log(result.errors)
       }
       result.data.allProduct.edges.map(({ node }) => {
         createPage({
           path: `/product/${node.slug}`,
           component: path.resolve(`./src/templates/product.js`),
           context: {
             slug: node.slug
           }
         })
       })
       resolve()
     })
   })
 }
