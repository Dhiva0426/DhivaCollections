import React from 'react'

const Signup = () => {
  return (
    <div className="bg-[url('../src/Pages/img/sign.jpg')] bg-top bg-cover h-[80vh] w-full flex items-center justify-center pt-32">
      <div className="bg-black bg-opacity-50 w-full max-w-lg p-6 rounded-lg flex flex-col items-center text-white">
          <div>
            <h1 className="bg-red-600 px-4 py-1 rounded-lg font-bold text-white text-center">Sign up</h1>
            <p className="text-center text-white font-serif text-2xl pt-6">Please Enter your details.</p>
          </div>
          <form className="space-y-6 pt-6 w-full">
            <div className="pt-4">
              <label className="block text-white font-medium mb-2">Name:</label>
              <input 
                type="text" 
                placeholder="Enter Your Name" 
                className="w-full px-6 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="pt-4">
              <label className="block text-white font-medium mb-2">Email address or username:</label>
              <input 
                type="text" 
                placeholder="Enter Your Email" 
                className="w-full px-6 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500" 
              />
            </div>
            <div className="pt-4">
              <label className="block text-white font-medium mb-2">Password:</label>
              <input 
                type="password" 
                placeholder="Enter Your Password" 
                className="w-full px-6 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500" 
              />
            </div>
            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full bg-red-600 rounded-full py-2 font-bold text-white hover:bg-red-700 transition duration-300"
              >
                Sign up
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Signup;
