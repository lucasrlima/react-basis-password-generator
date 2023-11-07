import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import SizeInputp from './components/SizeInput'
import styles from "./components/Button/styles.module.css"

export default 

function App() {

    const [password, setPassword] = useState("Get a random Password")
    const [copyText, setCopyText] = useState("Copy")
    const [buttonClassName, setButtonClassName] = useState(styles.wrapper)
    const [passwordSize, setPasswordSize] = useState(10)
    const [showInput, setShowInput] = useState(false)

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
          <label htmlFor="showInput">Custom password size</label>
          <input 
            type="checkbox"
            id="showInput" 
            value={showInput}
            onChange={() => setShowInput(currentState => !currentState)}
          
          />
          
        {showInput ? (
          <div>
            <label htmlFor="passwordSize"></label>

            <SizeInputp
              passwordSize={passwordSize}
              setPasswordSize={setPasswordSize}
            >
            </SizeInputp> 
          </div> ) : null
      } 
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