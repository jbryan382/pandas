import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <Link to="/" style={{ textDecorationLine: 'none', color: '#1F69E4' }}>
            <h1>Things Jason Likes</h1>
          </Link>
          <h3 className="subtitle">A Photo Gallery by Jason Perry</h3>
        </header>
        <Link to="/" style={{ textDecorationLine: 'none', color: '#363636' }}>
          🏠 Home
        </Link>
      </>
    )
  }
}

export default Header
