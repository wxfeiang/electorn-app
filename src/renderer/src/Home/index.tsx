import React from 'react'
import { useConfigStore } from '../store'
const Home: React.FC = () => {
  const fish = useConfigStore.getState().fish
  console.log('🍨[ fish, addOneFish, removeOnefilsh, removeAllFish ]:', fish)
  return (
    <>
      <div className="size-22 h-20"></div>
    </>
  )
}
export default Home
