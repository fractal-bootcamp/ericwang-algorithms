import React from 'react'
import { bubbleSort, BubbleSortState } from '..'
import { useState, useEffect } from 'react'

type Props = {
    array: number[]
}

export default function BubbleSort({array}: Props) {
    const [history, setHistory] = useState<BubbleSortState[]>([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentFrame, setCurrentFrame] = useState(0)
    const [frameRate] = useState(100)

    useEffect(() => {
        const newHistory: BubbleSortState[] = []
        bubbleSort(array, (state) => {
            newHistory.push(state)
        })
        setHistory(newHistory) 
    }, [array])

    useEffect(() => {
        console.log('isPlaying:', isPlaying, 'currentFrame:', currentFrame, 'history:', history)

        if(currentFrame === history.length-1) {
            setIsPlaying(false)
        } else if(history.length > 1 && currentFrame > history.length - 1) {
            setIsPlaying(false)
            setCurrentFrame(history.length - 1)
        } else if (isPlaying) {
            setTimeout(() => setCurrentFrame(prev => prev + 1), frameRate)
        }
    }, [currentFrame, history, isPlaying])

    const resetAnimation = () => {
        setCurrentFrame(0)
    }

    return (
        <div className='h-screen place-content-center'>
            <div className='flex items-end mb-4'>
                {history[currentFrame]?.array.map(item => {
                    return (
                        <article 
                            key={item}
                            className={`border border-sky-300 bg-sky-200 w-10`}
                            style={{
                                height: `${item*20}px`
                        }}
                        >
                            {item}
                        </article>
                    )
                })}
            </div>
            <button className='btn btn-primary mr-4' onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <span>Pause</span> : <span>Play</span>}</button>
            <button className='btn btn-primary' onClick={() => resetAnimation()}>restart</button>
        </div>
    )
}
    