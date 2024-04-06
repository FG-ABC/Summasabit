import React from 'react'

const Calculator = () => {
  const [done, setDone] = React.useState(false)
  const [unitRem, setUnitRem] = React.useState(0);
  const [unitTak, setUnitTak] = React.useState(0);
  const [gwa, setGwa] = React.useState(0);
  const [summa, setSumma] = React.useState(0);
  const [magna, setMagna] = React.useState(0);
  const [cum, setCum] = React.useState(0);

  function calculate(){
    const scl = ((unitRem+unitTak) * 1.20 - (unitTak*gwa))/unitRem
    const mgl = ((unitRem+unitTak) * 1.45 - (unitTak*gwa))/unitRem
    const cl = ((unitRem+unitTak) * 1.75 - (unitTak*gwa))/unitRem
    setSumma(scl.toFixed(4));
    setMagna(mgl.toFixed(4));
    setCum(cl.toFixed(4));
  }

  async function changeHandler(e){
    // console.log(e.target.name);
    const name = e.target.name;
    const value = Number(e.target.value);
    
    if(name === "ut"){
      setUnitTak(value);
    }
    else if(name === "ul"){
      setUnitRem(value);
    }
    else if(name === "gwa"){
      setGwa(value);
      // console.log(summa)
    }
  }


  React.useEffect(() => {
    calculate();
  }, [gwa, unitRem, unitTak]);


  function submitHandler(e){
    e.preventDefault();
    setDone(!done);
  }

  return (
    <div className='flex flex-col items-center sm:items-start sm:flex-row sm:h-96'>
      <div id="Card1" className='w-10/12 sm:w-auto flex rounded-t-3xl sm:rounded-r-none sm:rounded-l-3xl sm:h-full'>
        <form action='' className='py-3 px-8 sm:p-10 flex-col flex justify-between gap-5 w-full'>
          <h2 className='mb-1 sm:m-0 w-full rounded-3xl text-xl sm:text-3xl instructions'>Insert values here</h2>
          <div className='flex justify-between items-center'>
            <label className='text-xl sm:text-4xl w-1/2' for='ut'>Units Taken</label>
            <input onChange={changeHandler} className='w-1/2 rounded-3xl px-4 text-xl sm:text-3xl' min={1.0} max={200} name='ut' type='number'></input>  
          </div>

          <div className='flex justify-between items-center'>
            <label className='text-xl sm:text-4xl w-1/2 pr-3' for='ul'>Units left</label>
            <input onChange={changeHandler} className='w-1/2 rounded-3xl px-4 text-xl sm:text-3xl' min={1.0} max={200} name='ul' type='number'></input>  
          </div>

          <div className='flex justify-between items-center'>
            <label className='text-xl sm:text-4xl w-1/2' for='gwa'>Current GWA</label>
            <input onChange={changeHandler} className='w-1/2 rounded-3xl px-4 text-xl sm:text-3xl' min={1.0} max={5.0} step={0.0001} name='gwa' type='number'></input>  
          </div>
        </form>
      </div>
      <div id="Card2" className='w-10/12 sm:w-auto flex rounded-b-3xl sm:rounded-l-none sm:rounded-r-3xl sm:h-full'>
        <form className='py-4 px-4 sm:p-10 flex-col flex justify-between gap-5 w-full'>
          <h2 className='w-full rounded-3xl text-lg h-22 px-8 sm:px-0 sm:text-2xl instructions'>Average grade of remaining units needed</h2>
          <div className='flex justify-between items-center'>
            <label className='text-lg sm:text-4xl w-1/2' for='ut'>Summa Cum laude</label>
            <h2 className='avg rounded-3xl text-2xl w-1/2'>{(isFinite(summa)? (summa<1? "impossible" : (summa>3? 3 : summa)) : null)}</h2> 
          </div>

          <div className='flex justify-between items-center'>
            <label className='text-lg sm:text-4xl w-1/2' for='ul'>Magna Cum laude</label>
            <h2 className='avg rounded-3xl text-2xl w-1/2'>{(isFinite(magna)? (magna<1? "impossible" : (magna>3? 3 : magna)) : null)}</h2>  
          </div>

          <div className='flex justify-between items-center'>
            <label className='text-lg sm:text-4xl w-1/2' for='gwa'>Cum laude</label>
            <h2 className='avg rounded-3xl text-2xl w-1/2'>{(isFinite(cum)? (cum<1? "impossible" : (cum>3? 3 : cum)) : null)}</h2>  
          </div>
        </form>
    </div>

    </div>
  )
}

export default Calculator