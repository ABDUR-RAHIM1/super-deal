import React from 'react'
import "./ErrorPage.css"
function ErrorPage() {
  return (
    <div className='ErrorPage'>
        <h1 className='text-danger'>Opsss ! Sorry</h1>
        <h3 className='text-warning'>404 ! Page not found</h3>
    </div>
  )
}

export default ErrorPage