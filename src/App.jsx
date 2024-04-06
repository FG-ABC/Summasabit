import React from 'react'
import Calculator from './components/Calculator';

function App() {
  return (
    <div className='grid'>
      <div id='background' className='row-start-1 col-start-1 w-full h-full flex '>
      </div>
      <h1 className='row-start-1 col-start-1 w-full h-18 text-center pt-1 text-4xl'>Summasabit ka pa ba?</h1>
      <div className='w-full h-screen flex justify-center row-start-1 col-start-1'>
        <div className='sm:w-10/12 w-full flex h-96 sm:h-auto mt-36 sm:mt-24'>
          <Calculator/>
        </div>
      </div>
    </div>
  )
}
export default App
