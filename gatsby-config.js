module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-typescript',
  {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-euwest.graphcms.com/v1/cjlxlogvw33ys01f8ccdxx6il/master`,
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZjI0OGUwYzMtMzJlMi00ZjgyLTkwNDItODI4YmQzYzRkMWM3In0.rrQDOlV5fieAQEEMd1OtPZB6uJ0s0iBT8RpZqGyKR04",
        query: `{
            allProduct: products {
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
          allReview: reviews {
            id
            review
            product {
              slug
            }
            author
            rating
          }
        }`
      }
    },
  ],
}
