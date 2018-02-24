import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './style.scss'

const ld = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "url": "https://elwood.technology",
  "name": "Elwood Technology, LLC | Software Development &amp; Consulting",
  "logo": "https://elwood.technology/icon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-419-862-5845",
    "email": "hello@elwood.technology",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://plus.google.com/u/1/b/117172292821813006162/117172292821813006162",
    "https://github.com/elwood-technology",
    "https://twitter.com/hello_elwood",
    "https://www.facebook.com/elwood.technology",
    "https://angel.co/elwood-technology",
    "https://www.linkedin.com/company/elwood-technology/",
    "https://www.instagram.com/hello_elwood/"
  ]
}

const TemplateWrapper = ({ children, ...props }) => (
  <div className="layout">
    <Helmet
      title="Elwood Technology | Software Development &amp; Consulting | hello@elwood.technology | Santa Monica, California"
      meta={[
        {
          name: 'description',
          content: 'Software Development &amp; Consulting | hello@elwood.technology | Santa Monica, California'
        },
        {
          name: 'keywords',
          content: 'software, development, dev shop, consulting, node, ios, android, java, javascript'
        },
        {
          property: "og:title",
          content: "Elwood Technology | Software Development &amp; Consulting"
        },
        {
          property: "og:description",
          content: "Santa Monica, California Software Development &amp; Consulting"
        },
        {
          property: "og:type",
          content: "website"
        }
      ]}
      script={[
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(ld)
        }
      ]}
      link={[
        { rel: "apple-touch-icon", href: "/icon.png" }
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
