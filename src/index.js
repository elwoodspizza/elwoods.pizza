import React from 'react'
import ReactDom from 'react-dom'

import EmailIcon from 'react-icons/lib/fa/envelope'
import MessageIcon from 'react-icons/lib/fa/comment'

import Footer from './footer'
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
    <Footer />
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
