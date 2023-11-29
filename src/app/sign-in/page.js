import React from 'react'

const page = () => {
  return (
    <div className='bg-primary bg-opacity-50 p-3 border rounded col-7 mx-auto'>
        <input type="text" placeholder='Email' className='form-control mb-3' />
        <input type="password" placeholder='password' className='form-control mb-3' />
        <input type="button" value={'Submit'} className='form-control mb-3 btn btn-danger' />

    </div>
  )
}

export default page