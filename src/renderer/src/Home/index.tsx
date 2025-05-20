import React from 'react'
import { useConfigStore, addOneFish } from '../store'
const Home: React.FC = () => {
  const { fish } = useConfigStore()
  console.log('🍨[ fish,]:', fish)
  const a = (e): void => {
    console.log('🍺', e)
    addOneFish()
  }
  return (
    <>
      <div className="size-22 h-20 p-2 bg-amber-600" onClick={() => a(1)}>
        {fish}
      </div>
    </>
  )
}
export default Home
