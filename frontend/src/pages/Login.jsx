import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>LOGIN{' '}
          <span className='text-blue-800'>ChatApp</span></h1>

        {/* FORM */}
        <form>
          {/* username */}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>

            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>

          {/* password */}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>

            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>

          {/* Register link */}
          <a href="#" className='mt-2 text-sm hover:underline hover:text-blue-800 inline-block'>Don't have an account?</a>

          {/* login button */}
          <div>
            <button className='btn btn-sm btn-block mt-2 '>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
