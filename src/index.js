import React from 'react'
import ReactDom from 'react-dom'

import EmailIcon from 'react-icons/lib/fa/envelope'
import GithubIcon from 'react-icons/lib/fa/github'
import AngelListIcon from 'react-icons/lib/fa/angellist'
import TwitterIcon from 'react-icons/lib/fa/twitter'

import './style.scss'

const whatWeDo = [
  'React & React Native',
  'PHP',
  'GraphQL',
  'Node.js',
  'iOS (Objective-C & Swift)',
  'Java & Android',
  'System Architecture'
]

export const App = () => (
  <div className="app">
    <main>
      <section>
        <h1>Elwood Technology</h1>
        <h2>Software Development &amp; Consulting</h2>
        <a className="btn btn-lg" href="mailto:hello@elwood.technology"><EmailIcon /> hello@elwood.technology</a>
      </section>
      <section>
        <div><img src="https://elwood.technology/icon.png" alt="Pizza" /></div>
      </section>
    </main>
    <section className="talk">
      <div>
        <h3>Let&#39;s talk... <small>and maybe eat pizza!</small></h3>
        <h4>Here are a few of the things we sepcialize in:</h4>
        <ul className="list-unstyled">
          {whatWeDo.map(what => <li>{what}</li>)}
        </ul>
        <a className="btn" href="mailto:hello@elwood.technology"><EmailIcon /> hello@elwood.technology</a>
      </div>
    </section>
    <footer>
      <ul className="list-unstyled">
        <li>&copy; 2018, Elwood Technology, LLC</li>
        <li>Box 5661, Santa Monica, CA 90409</li>
      </ul>
      <div>
        <a href="https://github.com/elwoodtechnology"><GithubIcon /><span className="sr-only">GitHub</span></a>
        <a href="https://angel.co/elwood-technology"><AngelListIcon /><span className="sr-only">AngelList</span></a>
        <a href="https://twitter.com/hello_elwood"><TwitterIcon /><span className="sr-only">Twitter</span></a>
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
