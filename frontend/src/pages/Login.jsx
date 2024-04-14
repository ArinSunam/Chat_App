import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className='flex flex-col items-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>LOGIN{' '}
          <span className='text-blue-800'>ChatApp</span></h1>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* username */}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>

            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>

          {/* password */}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>

            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          {/* Register link */}
          <Link to="/signup" className='mt-2 text-sm hover:underline hover:text-blue-800 inline-block'>Don't have an account?</Link>

          {/* login button */}
          <div>
            <button className='btn btn-sm btn-block mt-2 ' disabled={loading}>{loading ? <span className='loading  loading-spinner' /> : "Login"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
