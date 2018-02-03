import React from 'react'
import ReactDom from 'react-dom'

import EmailIcon from 'react-icons/lib/fa/envelope'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import SlackIcon from 'react-icons/lib/fa/slack'
import PhoneIcon from 'react-icons/lib/fa/phone'

import Footer from './footer'
import WeDo from './we-do'

import './style.scss'

const opts = [
  {
    url: 'mailto:hello@elwood.technology',
    text: 'Email Us',
    icon: <EmailIcon />
  },
  {
    url: 'https://twitter.com/messages/compose?recipient_id=hello_elwood',
    text: 'DM on Twitter',
    icon: <TwitterIcon />
  },
  {
    url: 'http://m.me/1998492757088069',
    text: 'Message on Facebook',
    icon: <FacebookIcon />
  },
  {
    url: 'https://slackin-thhsxuaben.now.sh/',
    text: 'Join our Slack',
    icon: <SlackIcon />
  },
  {
    url: 'https://github.com/elwood-technology/hello',
    text: 'Fork us on GitHub',
    icon: <GithubIcon />
  }
]

export const App = () => (
  <div className="hello">
    <main>
      <section>
        <div className="logo"><img src="https://elwood.technology/icon.png" alt="Pizza" /></div>
        <aside>
          <h1><strong>Say Hello</strong> to Elwood Technology</h1>
          <h2>Tell us about your project...</h2>
          <ol className="list-unstyled">
            {opts.map(({ url, text, icon }) => (
              <li>
                <a rel="noopener" target="_blank" href={url} className="btn btn-block btn-outline-secondary">
                  {icon}
                  {text}
                </a>
              </li>
            ))}
            <li>
              <a rel="noopener" href="tel:+14198625845" className="btn btn-block">
                <PhoneIcon />
                Call Us (like it's 1999)
              </a>
            </li>
          </ol>
        </aside>
      </section>
    </main>
    <WeDo showEmailButton={false} />
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
