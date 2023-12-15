import { useState } from "react"
import StartGame from "../components/StartGame"
import GamePlay from "../components/GamePlay";
import Favicon from "react-favicon";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
    {/* Adding a favicon to our website */}
    <Favicon url='/assets/images/favicon.jpg'/>
      {
        isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay}/>
      }
    </>
  )
}

export default App