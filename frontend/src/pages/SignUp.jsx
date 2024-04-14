import React from 'react'
import GenderCheckbox from '../components/GenderCheckbox'

const SignUp = () => {
  return (
    <div className='mt-[-20px] flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp <span className='text-blue-800'>ChatApp</span>
        </h1>

        <form >

          {/* Fullname */}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Full Name</span>
            </label>
            <input type="text" placeholder='Ram' className='w-full input input-bordered h-10' />
          </div>
          {/* Username */}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Username</span>
            </label>
            <input type="text" placeholder='Ram' className='w-full input input-bordered h-10' />
          </div>

          {/* Password */}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Password</span>
            </label>
            <input type="password" placeholder='Password' className='w-full input input-bordered h-10' />
          </div>

          {/* Confirm Password */}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
          </div>

          {/* Gender Checkbox */}
          <GenderCheckbox />
          {/* login link */}
          <a href="#" className='text-sm hover:underline hover:text-blue-800 mt-2 inline-block'>Already have an account?</a>

          {/* signup button */}
          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default SignUp
