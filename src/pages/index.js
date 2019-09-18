import React from 'react'
import SEO from '../components/seo'
import ProductsListing from '../components/ProductsListing/ProductsListing'
import Billboard from '../components/Billboard'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Billboard />
    <ProductsListing />
  </>
)

export default IndexPage
