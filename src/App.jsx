import './App.css'
import Button from './Button'

export default 

function App() {

  function handleClick() {
    return (
      alert("Password Generated")
    )
  }

  return (
    <>
      <h1>Password Generator</h1>
      <Button onClick={handleClick} Text="Copy"></Button>
      <Button onClick={handleClick} Text="Generate"></Button>
    </>
  )
}