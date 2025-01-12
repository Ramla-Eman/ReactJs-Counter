import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const addValue = () => {
    if (counter <= 19) {
      setCount(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter > 1) {
      setCount(counter - 1)
    }
  }

  return (
    <>
      <div className='bg-[#696FF2] p-4 w-[30%] rounded-2xl flex flex-col items-center justify-center gap-4 text-white shadow-2xl sm:w-[70%] mobile:w-[100%] mobile:px-36'>
        <h1 className='text-[5rem] mobile:text-[2.5rem]'>Count it!</h1>
        <div className='flex gap-9 bg-[#8A90FE] px-7 py-2 rounded-[11rem] items-center'>
          <button onClick={removeValue} className='text-[1.5rem] font-semibold'><i class="fa-solid fa-minus"></i></button>
          <p className='text-[2rem] font-semibold bg-white text-[#696ff2] py-2 px-[1.6rem] rounded-2xl'>{counter}</p>
          <button onClick={addValue} className=' text-[1.5rem] font-semibold'><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </>
  )
}

export default App
