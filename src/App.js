import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SplashPage from './pages/SplashPage'
import ErrorPage404 from './pages/ErrorPage404'
import Miniatures from './pages/Miniatures'
import Pandas from './pages/Pandas'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route exact path="/Pandas" component={Pandas} />
            <Route exact path="/mini" component={Miniatures} />
            <Route component={ErrorPage404} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
