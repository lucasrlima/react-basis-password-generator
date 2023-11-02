import { useState } from 'react'
import './App.css'
import Button from './Button'

export default 

function App() {

    const [password, setPassword] = useState("Random Password")
    const [copyText, setCopyText] = useState("Copy")

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
  }

    function copyToClipboard () {
      window.navigator.clipboard.writeText(password)
      setCopyText("Copied!")
    }


  return (
    <>
      <h1>Password Generator</h1>
      <Button Text={copyText} onClick={copyToClipboard}></Button>
      <Button Text="Generate" onClick={generate} ></Button>
      <p>{password}</p>
    </>
  )
}