const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>
                <img height="300px" id="toast-photo" src="/images/toast.jpg" alt="Yummy Toast"></img>
                <div>
                  Photo by <a href="AUTHOR_LINK">Ella Olsson</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
              <a href='/places'>
                <button className='btn-primary'>Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home