import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Header from './Header'
import Reddit from './Reddit'
import Spotify from './Spotify'
import Footer from './Footer'
import About from './About'

const Root = ({ store }) => (
    <div>
      <Route path="/" component={Header}/>
      <Route path="/reddit" component={Reddit} />
      <Route path="/spotify" component={Spotify} />
      <Route path="/about" component={About} />
      <Route path="/" component={Footer}/>
    </div>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
