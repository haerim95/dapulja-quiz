import axios from 'axios'
import { CSSProperties, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Word {
  text: string
  meaning: string
}

// 스타일 시작
const listStyle = {
  list: {
    display: 'flex',
    margin: '10px',
    paddingBottom: '10px',
    borderBottom: '1px solid #cecece'
  },
  meaning: {
    width: '50%',
    flexGrow: 1,
    color: '#413F42'
  },
  text: {
    width: '50%',
    flexGrow: 1,
    display: 'block',
    fontSize: '1.2rem',
    color: '#947EC3',
    borderRight: '2px solid #947EC3'
  } as React.CSSProperties
}

function WordView(word: Word) {
  return (
    <div style={listStyle.list} key={word.text}>
      <span style={listStyle.text}>{word.text}</span>{' '}
      <span style={listStyle.meaning}>{word.meaning}</span>
    </div>
  )
}

function WordList() {
  // TODO
  // 훅을 이용해서, 화면이 로드되면 아래 주소에서 단어를 들고와서 화면에 표시
  // 아래 샘플 단어를 대체해야 함.
  // https://solution-tmp.s3.ap-northeast-2.amazonaws.com/vocabs.json
  // warning!
  // 만약 어떠한 이유로 작동이 되지 않는다면, 그 문제를 우회해서
  // 전체 기능이 동작하도록 코드를 구현.
  // const wordlist: Word[] = [
  //   { text: 'apple', meaning: 'n. 사과' },
  //   { text: 'brick', meaning: 'n. 벽돌' },
  //   { text: 'leap', meaning: 'v. 뛰다, 급증하다' }
  // ]
  const [newWord, setNewWord] = useState([])

  axios.defaults.withCredentials = true

  useEffect(() => {
    const listAPI = async () => {
      try {
        const resultAPI = await axios.get(`/vocabs.json`)
        setNewWord(resultAPI.data)
        // wordlist 배열 자체를 대체...?
        // const result = resultAPI.data
        // wordlist.splice(0, 3).push.apply(wordlist, result)
      } catch (error) {
        console.error(error)
      }
    }
    listAPI()
  }, [])

  // 스타일 2
  const listBgStyle: CSSProperties = {
    margin: '1rem 2rem',
    padding: '1rem',
    borderRadius: '14px',
    backgroundColor: '#ffffff'
  }
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
    <section>
      <div style={listBgStyle}>{newWord.map((word) => WordView(word))}</div>
      <Link to='/' style={linkStyle}>
        홈으로
      </Link>
    </section>
  )
}

export default WordList
