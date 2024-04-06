import React from 'react'
import header from './assets/header.png'
import footer from './assets/footer.png'
import Calculator from './components/Calculator';

function App() {
  return (
    <div id='App' className='flex-col justify-between'>
      <header className='h-12 sm:h-24 sm:-translate-y-44 sm:w-full grid'>
        <img className='row-start-1 col-start-1 w-full' src={header}></img>
        <h1 className='row-start-1 col-start-1 w-full h-18 text-center pt-1 text-3xl sm:text-4xl sm:font-black'>Summasabit ka pa ba?</h1>
      </header>
      <h1 className='opacity-0 sm:opacity-100 row-start-1 col-start-1 w-full h-18 text-center pt-1 text-3xl sm:text-4xl'>Summasabit ka pa ba?</h1>
      
      <div className='w-ful flex justify-center row-start-1 col-start-1 sm:h-96'>
        <div className='sm:w-10/12 w-full flex mt-24 sm:mt- sm:-translate-y-28'>
          <Calculator/>
        </div>
      </div>

      <footer className='w-full h-24 sm:h-52 overflow-hidden sm:w-full'>
        <img src={footer} className='w-full sm:-translate-y-44 '></img>
      </footer>

    </div>
  )
}
export default App
