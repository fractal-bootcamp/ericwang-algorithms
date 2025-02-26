import './App.css'
import BinarySearch from './components/binary-search'
import BubbleSort from './components/bubble-sort'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const bubblesortarray = [10, 1, 12, 9, 5, 11, 7, 8, 4, 13]

function App() {  

  return (
    <div className='flex flex-col gap-4 items-center'>
      <BinarySearch array={array} />
      <BubbleSort array={bubblesortarray} />
    </div>
  )
}

export default App
