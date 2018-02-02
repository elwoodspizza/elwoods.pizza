import React from 'react'
import PropTypes from 'prop-types'

import EmailIcon from 'react-icons/lib/fa/envelope'

const whatWeDo = [
  'React & React Native',
  'PHP',
  'GraphQL',
  'Node.js',
  'iOS (Objective-C & Swift)',
  'Java & Android',
  'System Architecture',
  'Content Management Systems',
  'WordPress',
  'Video Distribution'
]

const WeDo = ({ children, showEmailButton }) => (
  <section className="talk">
    <div>
      {children}
      <h4>Here are a few of the things we specialize in:</h4>
      <ul className="list-unstyled">
        {whatWeDo.map(what => <li>{what}</li>)}
      </ul>
      {showEmailButton && <a className="btn" href="mailto:hello@elwood.technology"><EmailIcon /> hello@elwood.technology</a>}
    </div>
  </section>
)

WeDo.propTypes = {
  children: PropTypes.node,
  showEmailButton: PropTypes.bool
}

WeDo.defaultProps = {
  children: '',
  showEmailButton: true
}

export default WeDo
