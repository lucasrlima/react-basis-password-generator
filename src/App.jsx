import { useState } from 'react'
import './App.css'
import Button from './Button'
import styles from "./Button/styles.module.css"

export default 

function App() {

    const [password, setPassword] = useState("Get a random Password")
    const [copyText, setCopyText] = useState("Copy")
    const [buttonClassName, setButtonClassName] = useState(styles.wrapper)
    const [passwordSize, setPasswordSize] = useState(12)

    function generate() {
      const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
      let newPassword = ""
      for (let i = 0; i < passwordSize && i < 99; i++) {
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
        <div>
          <label htmlFor="passwordSize">Password Size:</label>
          <input 
            className={styles.wrapper}
            type="number" 
            id='passwordSize' 
            min={5}
            max={99}
            value={passwordSize}
            onChange={ (ev) => setPasswordSize(ev.target.value)  }
             />
        </div>
        <div className="button-container">
          <Button Text={copyText} onClick={copyToClipboard} className={buttonClassName}></Button>
          <Button Text="Generate" onClick={generate} ></Button>
        </div>
        <p>{password}</p>
      </div>
    </>
  )
}