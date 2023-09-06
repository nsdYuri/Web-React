import Cabecalho from "./Components/Cabecalho"
import { Outlet } from 'react-router-dom'
import Rodape from "./Components/Rodape"

function App() {

  return (
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
