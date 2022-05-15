import React, { CSSProperties } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import QuizSession from './QuizSession'
import WordList from './WordList'

function App() {
  const titleStyle: CSSProperties = {
    margin: 0,
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#6A67CE'
  }
  return (
    <section style={{ textAlign: 'center' }}>
      <h1 style={titleStyle}>
        <Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }}>
          <span>다풀자 영단어</span>
        </Link>
      </h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quiz' element={<QuizSession />} />
        <Route path='wordlist' element={<WordList />} />
      </Routes>
    </section>
  )
}

export default App
