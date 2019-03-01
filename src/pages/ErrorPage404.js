import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage404 extends Component {
  render() {
    return (
      <div>
        <h1>Sorry, wrong path mate...</h1>
        <Link to="/">Try again?</Link>
      </div>
    )
  }
}

export default ErrorPage404
