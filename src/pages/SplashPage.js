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
          <Link to="/" style={{ textDecorationLine: 'none', color: '#1F69E4' }}>
            <h1>Things Jason Likes</h1>
          </Link>
          <h3 className="subtitle">A Photo Gallery by Jason Perry</h3>
        </header>
        <Link to="/" style={{ textDecorationLine: 'none', color: '#363636' }}>
          🏠 Home
        </Link>
        <section className="gallery">
          <figure>
            <figcaption className="titleDescriptionBorder">
              <Link
                to="/Pandas"
                style={{ textDecorationLine: 'none', color: '#1F69E4' }}
              >
                <h2>{Panda.pandas.title}</h2>
              </Link>
              <p>{Panda.pandas.description}</p>
            </figcaption>
            <img src={Panda.pandas.photos[0].imageURL} />
          </figure>
          <figure>
            <figcaption className="titleDescriptionBorder">
              <Link
                to="/mini"
                style={{ textDecorationLine: 'none', color: '#1F69E4' }}
              >
                <h2>{Panda.miniatures.title}</h2>
              </Link>
              <p>{Panda.miniatures.description}</p>
            </figcaption>
            <img src={Panda.miniatures.photos[0].imageURL} />
          </figure>
        </section>
      </>
    )
  }
}

export default SplashPage
