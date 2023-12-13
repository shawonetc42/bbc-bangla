import React from 'react'
import ChatWindow from '../../components/ChatWindow'

function index() {
  return (
    <div className='justify-center'>
      
        
      
        <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      
      
      <div class="text-center">
         <ChatWindow/>
      </div>
      <p class="text-xs text-gray-600 text-center mt-8">&copy; 2023 Shawon</p>
    </div>
  </div>
    </div>
  )
}

export default index