import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { StaticQuery, graphql, Link } from "gatsby"
library.add(fab)
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description }}
        />
        <div
          className="social-links">
          <div className="social-link">
            <a href="https://www.facebook.com/makeflashgame" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
          </div>

          <div className="social-link">
            <a href="https://www.youtube.com/channel/UC1WKJigaKxcyt7iebbyruwg" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
            </a>
          </div>
        </div>
        {/* <Link to='/contact' className="button -primary">Get in touch &rarr;</Link> */}
      </div>
    )}
  />
)