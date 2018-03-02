import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import EmailIcon from 'react-icons/lib/fa/envelope'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import SlackIcon from 'react-icons/lib/fa/slack'
import PhoneIcon from 'react-icons/lib/fa/phone'

import { event } from '../../utils/ga'
import Footer from '../footer'
import WeDo from '../we-do'

import './style.scss'

const opts = [
  {
    url: 'mailto:hello@elwood.technology',
    text: 'Email Us',
    icon: <EmailIcon />,
    eventArgs: ['Hello', 'email']
  },
  {
    url: 'https://twitter.com/messages/compose?recipient_id=hello_elwood',
    text: 'DM on Twitter',
    icon: <TwitterIcon />,
    eventArgs: ['Hello', 'twitter']
  },
  {
    url: 'http://m.me/1998492757088069',
    text: 'Message on Facebook',
    icon: <FacebookIcon />,
    eventArgs: ['Hello', 'facebook']
  },
  {
    url: 'https://slackin-thhsxuaben.now.sh/',
    text: 'Join our Slack',
    icon: <SlackIcon />,
    eventArgs: ['Hello', 'slack']
  },
  {
    url: 'https://github.com/elwood-technology/hello',
    text: 'Fork us on GitHub',
    icon: <GithubIcon />,
    eventArgs: ['Hello', 'github']
  }
]

const Hello = () => (
  <main className="c-hello">
    <Helmet
      title="Say Hello to Elwood Technology | Software Development &amp; Consulting | hello@elwood.technology | Santa Monica, California"
    />
    <section className="c-hello-main">
      <Link to="/" className="logo"><img src="https://elwood.technology/icon.png" alt="Pizza" /></Link>
      <aside>
        <h1><strong>Say Hello</strong> to Elwood Technology</h1>
        <h2>Tell us about your project...</h2>
        <ol className="list-unstyled">
          {opts.map(({ url, text, icon, eventArgs }) => (
            <li key={`Hello-${url}`}>
              <a
                onClick={() => event(...eventArgs)}
                rel="noopener"
                target="_blank"
                href={url}
                className="btn btn-block btn-outline-secondary"
              >
                {icon}
                <span>{text}</span>
              </a>
            </li>
          ))}
          <li key="Hello-phone">
            <a onClick={() => event('Hello', 'phone')} rel="noopener" href="tel:+14198625845" className="btn btn-block">
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
