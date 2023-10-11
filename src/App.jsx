import { useState } from 'react'
import Header from './components/Header'
import Survey from './components/Survey'

function App() {

  return (
    <>
       <Header/>
    <div className="flex justify-center">
      <Survey/>
    </div>
     
    </>
  )
}

export default App
