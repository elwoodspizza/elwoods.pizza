import React from 'react'
import ReactDom from 'react-dom'

import EmailIcon from 'react-icons/lib/fa/envelope'

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

const randomXY = i => ({
  left: (40 * i) - ((Math.random() * 1000) % 40),
  top: ((Math.random() * 100) % 10) - 10
})

const Pizza = props => (
  <span className="pizza" role="img" aria-label="Pizza" {...props}>🍕</span>
);

export const App = () => (
  <div className="app">
    <header>
      <Pizza />
    </header>
    <main>
      <h1>Elwood&#39;s Pizza</h1>
      <h2>Software Development &amp; Consulting</h2>
    </main>
    <section className="pizza-strip">
      {new Array(100).fill(1).map((_, i) => (
        <Pizza style={randomXY(i)} />
      ))}
    </section>
    <section className="talk container">
      <h3>Let&#39;s talk about how we can help with...</h3>
      <ul className="list-unstyled">
        {whatWeDo.map(what => <li>{what}</li>)}
      </ul>
      <a className="btn btn-lg" href="mailto:hello@elwoods.pizza"><EmailIcon /> hello@elwoods.pizza</a>
      <div><small className="text-muted">Free <Pizza /> on us</small></div>
    </section>
    <footer>
      <ul className="list-unstyled">
        <li>&copy; 2017</li>
        <li>Box 5661, Santa Monica, CA 90409</li>
        <li><a href="https://github.com/elwoodspizza">GitHub</a></li>
      </ul>
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
