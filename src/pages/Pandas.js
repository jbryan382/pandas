import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Panda from '../data/panda.json'

class Pandas extends Component {
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
        <figure>
          <figcaption>
            <h3>{Panda.pandas.title}</h3>
            <p>{Panda.pandas.description}</p>
          </figcaption>
          <section className="galleryPics">
            <figure className="titleNCap">
              <img src={Panda.pandas.photos[0].imageURL} />
              <figcaption>
                <a
                  href={Panda.pandas.photos[0].sourceURL}
                  style={{ textDecorationLine: 'none', color: '#1F69E4' }}
                >
                  {Panda.pandas.photos[0].title}
                </a>
              </figcaption>
            </figure>
            <figure className="titleNCap">
              <img src={Panda.pandas.photos[1].imageURL} />
              <figcaption>
                <a
                  href={Panda.pandas.photos[1].sourceURL}
                  style={{ textDecorationLine: 'none', color: '#1F69E4' }}
                >
                  {Panda.pandas.photos[1].title}
                </a>
              </figcaption>
            </figure>
          </section>
        </figure>
      </>
    )
  }
}

export default Pandas
