import { useState } from 'react'
import './App.css'
import Buttons from './components/buttons'
import TabButtons from './components/TabButtons'
import "./scss/main.scss"

function App() {
  const [name, setName] = useState("")
  function handleSelect( selectedButton: string) {
    console.log(selectedButton)
    setName(selectedButton)
  }
  return (
    <>
    <h1>Hello World</h1>
    <Buttons>okej</Buttons>
    <TabButtons onSelect={() => handleSelect("typescript")}>tsx</TabButtons>
    <TabButtons onSelect={() => handleSelect("java")}>java</TabButtons>
    <TabButtons onSelect={() => handleSelect("c++")}>c++</TabButtons>
    <TabButtons onSelect={() => handleSelect("koitlin")}>koitlin</TabButtons>
    <TabButtons onSelect={() => handleSelect("C#")}>C#</TabButtons>

    <main>
    {name}
    </main>
    </>
  )
}

export default App
