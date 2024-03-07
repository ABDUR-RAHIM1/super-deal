import React from 'react' 
function ErrorPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-danger text-xl'>Oops ! Sorry</h1>
        <h3 className='text-warning text-xl'>404 ! Page not found</h3>
    </div>
  )
}

export default ErrorPage