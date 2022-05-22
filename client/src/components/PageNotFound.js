import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='container-404'>
      <h1>404 page not found</h1>
      <p>the page you were looking for does not exist.</p>
      <Link className="animated-link" to="/catalog">continue shopping</Link>
    </div>
  )
}

export default PageNotFound