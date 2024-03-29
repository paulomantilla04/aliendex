import { useState } from 'react'
import Grid from './components/Grid'
import data from './data'
import toast, {Toaster} from 'react-hot-toast'

function App() {
  const [visible, setVisible] = useState(3);
  
  const showMoreItems = () => visible <= names.length ? setVisible((prevValue) => prevValue + 3) : toast.error(`Cannot show more items`);
  const showLessItems = () => visible > 3 ? setVisible((prevValue) => prevValue - 3) : toast.error(`Cannot show less items`);

  const names = Object.keys(data).map(key => data[key].name);

  return (
    <>
      <main>
          <section className='flex h-screen flex-col items-center m-5'>
            <Grid data={data} visible={visible}></Grid>
            <div className="m-5 flex max-[640px]:flex-col gap-4">
              <button onClick={showMoreItems} className='border-4 border-slate-100 w-40 h-16 rounded-full text-white font-bold transition-all duration-300 hover:scale-90 hover:border-slate-400 backdrop-blur-sm bg-black/50'>Show more</button>
              <button onClick={showLessItems} className='border-4 border-slate-100 w-40 h-16 rounded-full text-white font-bold transition-all duration-300 hover:scale-90 hover:border-slate-400 backdrop-blur-sm bg-black/50'>Show less</button>
            </div>
            <Toaster/>
          </section>

      </main>
    </>
  )
}

export default App
