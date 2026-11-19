// import Header from "../src/componentes/Header/Header"
import Hero from "./componentes/Hero/Hero.jsx"
import { perfil } from "./data/perfil"


function App() {
  return (

    <main>
      <Hero
      nome={perfil.nome}
      cargo={perfil.cargo}
      resumo= {perfil.resumo}
      cidade= {perfil.cidade} />
    </main>
    
  )
}

export default App
