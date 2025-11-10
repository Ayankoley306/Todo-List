import { useState } from 'react'
import { Home, Header, Footer } from './Components'

function App() {

  return (
    <div className='min-w-dvw min-wid-dvh bg-(--bg-light) '>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
