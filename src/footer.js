import React from 'react'

import GithubIcon from 'react-icons/lib/fa/github'
import AngelListIcon from 'react-icons/lib/fa/angellist'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedInIcon from 'react-icons/lib/fa/linkedin'
import FacebookIcon from 'react-icons/lib/fa/facebook'

const Footer = () => (
  <footer>
    <ul className="list-unstyled">
      <li>&copy; 2018, Elwood Technology, LLC</li>
      <li>Box 5661, Santa Monica, CA 90409</li>
    </ul>
    <div>
      <a href="https://github.com/elwoodtechnology"><GithubIcon /><span className="sr-only">GitHub</span></a>
      <a href="https://twitter.com/hello_elwood"><TwitterIcon /><span className="sr-only">Twitter</span></a>
      <a href="https://www.facebook.com/elwood.technology"><FacebookIcon /><span className="sr-only">Facebook</span></a>
      <a href="https://angel.co/elwood-technology"><AngelListIcon /><span className="sr-only">AngelList</span></a>
      <a href="https://www.linkedin.com/company/elwood-technology/"><LinkedInIcon /><span className="sr-only">LinkedIn</span></a>
    </div>
  </footer>
)

export default Footer;
