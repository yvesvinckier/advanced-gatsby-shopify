import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Nav = () => {
  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query allShopifyCollections {
        allShopifyCollection {
          edges {
            node {
              title
              handle
            }
          }
        }
      }
    `
  )

  return (
    <nav>
      {allShopifyCollection.edges.map(edge => {
        return (
          <Link
            style={{ color: '#FFF', marginLeft: 40 }}
            key={edge.node.handle}
            to={`/${edge.node.handle}`}
          >
            {edge.node.title}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
