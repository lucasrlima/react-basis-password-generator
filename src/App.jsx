import { useState } from 'react'
import './App.css'
import Button from './Button'
import styles from "./Button/styles.module.css"

export default 

function App() {

    const [password, setPassword] = useState("Get a random Password")
    const [copyText, setCopyText] = useState("Copy")
    const [buttonClassName, setButtonClassName] = useState(styles.wrapper)

    function generate() {
      const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
      const length = 12
      let newPassword = ""
      for (let i = 0; i < length; i++) {
        const position = Math.floor(Math.random() * characters.length)
        newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copy")
    setButtonClassName (styles.wrapper)
  }

    function copyToClipboard () {
      window.navigator.clipboard.writeText(password)
      setCopyText("Copied!")
      setButtonClassName (styles.wrapperCopied)
    }


  return (
    <>
      <div className='container'>
      <h1>Password Generator</h1>
        <div className="button-container">
          <Button Text={copyText} onClick={copyToClipboard} className={buttonClassName}></Button>
          <Button Text="Generate" onClick={generate} ></Button>
        </div>
        <p>{password}</p>
      </div>
    </>
  )
}