import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/ProductsListing/ProductsListing"
import Billboard from "../components/Billboard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Billboard />
    <ProductsListing />
  </Layout>
)

export default IndexPage
