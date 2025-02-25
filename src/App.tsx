import { useEffect, useState } from 'react'
import { binarySearch, BinarySearchState } from './index.ts'
import './App.css'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function App() {  
  const [target] = useState(10)
  const [history, setHistory] = useState<BinarySearchState[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [frameRate] = useState(1000)
  // create a history of states by pushing to that history

  useEffect(() => {
    const newHistory: BinarySearchState[] = []
    binarySearch(array, target, 0, (state) => {
      newHistory.push(state)
    });
    console.log(newHistory)
    setHistory(newHistory); // Append new state to history
  }, [target])

  useEffect(() => {
  }, [history])


  // animate the history
  useEffect(() => {
    console.log('isPlaying:', isPlaying, 'currentFrame:', currentFrame, 'history:', history)
    if (currentFrame === history.length - 1) {
      setIsPlaying(false)
    } else if (history.length > 1 && currentFrame > history.length - 1) { // defensively make sure i don't skip the end of the animation
      setIsPlaying(false)
      setCurrentFrame(history.length - 1)
    }
    else if (isPlaying) { // my main loop
      setTimeout(() => setCurrentFrame(prev => prev + 1), frameRate)
    }
  }, [currentFrame, history, isPlaying])

  const resetAnimation = () => {
    setIsPlaying(true)
    setCurrentFrame(0)
  }

  const buttonMessage = currentFrame === history.length - 1 ? 'Restart animation' : 'Start animation'

  return (
    <>
      <h1 className='font-bold mb-16'>Binary Search</h1>
      <div className='flex gap-4'>
        {array.map((number) => {
          return (
            <div className={`border border-stone-700 p-4 ${history[currentFrame]?.array.includes(number) ? 'bg-blue-800' : ''}`}>
              {number}
            </div>
          )
        })}
      </div>
      <div className='my-8'>Target: {target}</div>
      <button className='btn btn-primary' disabled={isPlaying} onClick={() => resetAnimation()}>{buttonMessage}</button>
    </>
  )
}

export default App
