import { useState } from 'react'
import Grid from './components/Grid'
import data from './data'
import data2 from './omniverseAliens'
function App() {

  return (
    <>
      <main>
          <section className='flex h-screen flex-col items-center m-5'>
            <div className='text-[#ffffff] text-4xl font-black text-center bg-black/50 backdrop-blur-sm px-6 py-3'>Aliendex</div>
            <Grid data={data2}></Grid>
          </section>
      </main>
    </>
  )
}

export default App
