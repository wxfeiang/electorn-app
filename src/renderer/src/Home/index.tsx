import React from 'react'
import { useFoodsStore } from '../store'
const Home: React.FC = () => {
  const fish = useFoodsStore().fish
  return (
    <>
      <div className="size-22 h-20">{fish}</div>
    </>
  )
}
export default Home
