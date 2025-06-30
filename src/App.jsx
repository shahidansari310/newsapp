import Navbar from "./components/Navbar"
import Newsboard from "./components/Newsboard"
import { useState } from "react"

function App() {

  const [cateogory, setCateogory] = useState("general");
  return (
    <>
    <Navbar setCateogory={setCateogory}/>
    <Newsboard cateogory={cateogory}/>
    </>
  )
}

export default App
