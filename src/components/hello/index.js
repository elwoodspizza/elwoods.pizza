import React from 'react'
import Link from 'gatsby-link'

import EmailIcon from 'react-icons/lib/fa/envelope'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import SlackIcon from 'react-icons/lib/fa/slack'
import PhoneIcon from 'react-icons/lib/fa/phone'

import Footer from '../footer'
import WeDo from '../we-do'

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

const Hello = () => (
  <main className="c-hello">
    <section className="c-hello-main">
      <Link to="/" className="logo"><img src="https://elwood.technology/icon.png" alt="Pizza" /></Link>
      <aside>
        <h1><strong>Say Hello</strong> to Elwood Technology</h1>
        <h2>Tell us about your project...</h2>
        <ol className="list-unstyled">
          {opts.map(({ url, text, icon }) => (
            <li>
              <a rel="noopener" target="_blank" href={url} className="btn btn-block btn-outline-secondary">
                {icon}
                <span>{text}</span>
              </a>
            </li>
          ))}
          <li>
            <a rel="noopener" href="tel:+14198625845" className="btn btn-block">
              <PhoneIcon />
              <span>Call Us (like it's 1999)</span>
            </a>
          </li>
        </ol>
      </aside>
    </section>
    <WeDo showEmailButton={false} />
    <Footer />
  </main>
)

export default Hello
