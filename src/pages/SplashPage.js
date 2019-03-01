import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Panda from '../data/panda.json'
import Header from '../components/Header.js'

class SplashPage extends Component {
  render() {
    return (
      <>
        <Header />
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

// <section className="hobbies">
// {Object.keys(hobbies).map((hobby, i) => {
//   console.log('the hobby' + hobby)
//   console.log('the hobby object:', hobbies[hobby])
//   return (
//     <section key={i} className="hobby">
//       <header>
//         <Link to={`/${hobby}`}>{hobbies[hobby].title}</Link>
//       </header>
//       <p>{hobbies[hobby].description}</p>
//       <img src={hobbies[hobby].photos[0].imageURL} />
//     </section>
//   )
// })}
// </section>
