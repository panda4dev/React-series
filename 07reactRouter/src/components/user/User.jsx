import React from 'react'
import { useParams } from 'react-router-dom'

// we need useParams hook to display the content in the url 
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
    // the name of variable must be same as that passed through router file or main.jsx here 
  )
}

export default User