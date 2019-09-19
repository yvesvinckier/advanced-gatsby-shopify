import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Helmet from 'react-helmet'

import Header from './header'
import NavTwo from './General/NavTwo'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Helmet>
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          <NavTwo />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <main className="section" style={{ minHeight: '90vh' }}>
              {children}
            </main>
            <footer
              className="footer"
              style={{ background: 'var(--darkPurp)', color: 'white' }}
            >
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
            <GlobalStyle />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
