import { useState, useEffect } from 'react'
import { binarySearch, BinarySearchState } from '../index'

type Props = {
    array: number[]
}

export default function BinarySearch({array}: Props) {
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
      setHistory(newHistory); // Append new state to history
    }, [target])
  
    // animate the history
    useEffect(() => {
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
        <div className='flex flex-col gap-4 place-content-center h-screen'>
            <h1 className='font-bold mb-16'>Binary Search</h1>
            <div className='flex gap-4'>
            {array.map((number) => {
                return (
                <div className={`border border-sky-200 p-4 ${history[currentFrame]?.array.includes(number) ? 'bg-sky-200' : ''}`}>
                    {number}
                </div>
                )
            })}
            </div>
            <div className='my-8'>Target: {target}</div>
            <button className='btn btn-primary' disabled={isPlaying} onClick={() => resetAnimation()}>{buttonMessage}</button>
        </div>
    )
}