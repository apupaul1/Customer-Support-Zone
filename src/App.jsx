import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='bg-base-200'>
        <div className="flex flex-col lg:flex-row w-10/12 mx-auto py-16 gap-8">
            <div className="relative bg-linear-to-br from-[#632EE3] to-[#9F62F2] 
            lg:h-50 h-40 lg:flex-1 rounded-lg text-white flex flex-col justify-center items-center">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="/vector1.png"
                        alt="pattern"
                        className="absolute top-0 left-0 w-1/2 h-full object-cover"
                    />
                    <img
                        src="/vector1.png"
                        alt="pattern"
                        className="absolute top-0 right-0 w-1/2 h-full object-cover scale-x-[-1]"
                    />
                </div>
                <h1 className="text-xl my-4">In Progress</h1>
                <p className="text-4xl font-semibold">0</p>
            </div>

            <div className="relative bg-linear-to-l from-[#54CF68] to-[#00827A] lg:h-50 h-40 lg:flex-1 rounded-lg text-white flex flex-col justify-center items-center">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="/vector1.png"
                        alt="pattern"
                        className="absolute top-0 left-0 w-1/2 h-full object-cover"
                    />
                    <img
                        src="/vector1.png"
                        alt="pattern"
                        className="absolute top-0 right-0 w-1/2 h-full object-cover scale-x-[-1]"
                    />
                </div>
                <h1 className="text-xl my-4">Resolved</h1>
                <p className="text-4xl font-semibold">0</p>
            </div>
        </div>
      </main>

      <footer></footer>

      <ToastContainer />
    </>
  )
}

export default App
