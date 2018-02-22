import React from 'react'

import GithubIcon from 'react-icons/lib/fa/github'
import AngelListIcon from 'react-icons/lib/fa/angellist'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedInIcon from 'react-icons/lib/fa/linkedin'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import InstagramIcon from 'react-icons/lib/fa/instagram'

const Footer = () => (
  <footer>
    <ul className="list-unstyled">
      <li>&copy; 2018, Elwood Technology, LLC</li>
      <li>Box 5661, Santa Monica, CA 90409</li>
    </ul>
    <div itemScope itemType="http://schema.org/Organization">
      <link itemProp="url" href="https://elwood.technology" />
      <a itemProp="sameAs" href="https://github.com/elwood-technology"><GithubIcon /><span className="sr-only">GitHub</span></a>
      <a itemProp="sameAs" href="https://twitter.com/hello_elwood"><TwitterIcon /><span className="sr-only">Twitter</span></a>
      <a itemProp="sameAs" href="https://www.facebook.com/elwood.technology"><FacebookIcon /><span className="sr-only">Facebook</span></a>
      <a itemProp="sameAs" href="https://angel.co/elwood-technology"><AngelListIcon /><span className="sr-only">AngelList</span></a>
      <a itemProp="sameAs" href="https://www.instagram.com/hello_elwood/"><InstagramIcon /><span className="sr-only">Instagram</span></a>
      <a itemProp="sameAs" href="https://www.linkedin.com/company/elwood-technology/"><LinkedInIcon /><span className="sr-only">LinkedIn</span></a>
    </div>
  </footer>
)

export default Footer;
