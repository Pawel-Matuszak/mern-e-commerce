import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='container-404'>
      <h1>404 page not found</h1>
      <p>the page you were looking for does not exist.</p>
      <a className="animated-link link-157">continue shopping</a>
    </div>
  )
}

export default PageNotFound