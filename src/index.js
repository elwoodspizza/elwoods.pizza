import React from 'react'
import ReactDom from 'react-dom'

import EmailIcon from 'react-icons/lib/fa/envelope'
import GithubIcon from 'react-icons/lib/fa/github'
import AngelListIcon from 'react-icons/lib/fa/angellist'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedInIcon from 'react-icons/lib/fa/linkedin'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import MessageIcon from 'react-icons/lib/fa/comment'

import WeDo from './we-do'
import './style.scss'

export const App = () => (
  <div className="app">
    <main>
      <section className="text">
        <h1>Elwood Technology</h1>
        <h2>Software Development &amp; Consulting</h2>
        <a className="btn btn-lg e" href="mailto:hello@elwood.technology"><EmailIcon /> hello@elwood.technology</a>
        <a className="btn btn-lg" href="/hello.html"><MessageIcon /></a>
      </section>
      <section className="logo">
        <div><img src="https://elwood.technology/icon.png" alt="Pizza" /></div>
      </section>
    </main>
    <WeDo>
      <h3>Let&#39;s talk... <small>and maybe eat pizza!</small></h3>
    </WeDo>
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
  </div>
)

export const render = rootEl => (
  ReactDom.render(
    <App />,
    rootEl
  )
);

export default {
  render
}


{/*  */}
