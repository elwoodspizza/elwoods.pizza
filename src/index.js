import React from 'react'
import ReactDom from 'react-dom'

import EmailIcon from 'react-icons/lib/fa/envelope'
import GithubIcon from 'react-icons/lib/fa/github'
import AngelListIcon from 'react-icons/lib/fa/angellist'

import './style.scss'

const whatWeDo = [
  'PHP',
  'React & React Native',
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
        <h3>Let&#39;s talk... <small>and eat pizza!</small></h3>
        <h4>Here&#39;s what we do</h4>
        <ul className="list-unstyled">
          {whatWeDo.map(what => <li>{what}</li>)}
        </ul>
        <a className="btn" href="mailto:hello@elwood.technology"><EmailIcon /> hello@elwood.technology</a>
      </div>
    </section>
    <footer>
      <ul className="list-unstyled">
        <li>&copy; 2018</li>
        <li>Box 5661, Santa Monica, CA 90409</li>
      </ul>
      <div>
        <a href="https://github.com/elwoodtechnology"><GithubIcon /><span className="sr-only">GitHub</span></a>
        <a href="https://angel.co/elwood-s-pizza"><AngelListIcon /><span className="sr-only">AngelList</span></a>
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
