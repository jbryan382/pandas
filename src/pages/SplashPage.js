import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Panda from '../data/panda.json'

class SplashPage extends Component {
  // Work in Later:
  // state = {
  //   articleTitle: '',
  //   description: '',
  //   photo: [],
  //   imageURL: '',
  //   pictureTitle: ''
  // }
  render() {
    return (
      <>
        <header>
          <Link to="/">Things Jason Likes</Link>
          <h2>A Photo Gallery by Jason Perry</h2>
        </header>
        <Link to="/">🏠 Home</Link>
        <section className="gallery">
          <figure>
            <figcaption>
              <Link to="/Panda">{Panda.pandas.title}</Link>
              <p>{Panda.pandas.description}</p>
              <img src={Panda.pandas.photos[0].imageURL} />
            </figcaption>
          </figure>
          <figure>
            <figcaption>
              <Link to="/Miniature">{Panda.miniatures.title}</Link>
              <p>{Panda.miniatures.description}</p>
              <img src={Panda.miniatures.photos[0].imageURL} />
            </figcaption>
          </figure>
        </section>
      </>
    )
  }
}

export default SplashPage
