import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const linkStyle: CSSProperties = {
    display: 'inline-block',
    margin: '10px',
    width: '300px',
    lineHeight: '50px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '8px',
    backgroundColor: '#6A67CE',
    color: '#faf5e4',
    cursor: 'pointer'
  }
  return (
    <>
      <Link to='/wordlist' style={linkStyle}>
        단어 목록 보기
      </Link>
      <Link to='/quiz' style={linkStyle}>
        퀴즈 보기
      </Link>
    </>
  )
}

export default Home
