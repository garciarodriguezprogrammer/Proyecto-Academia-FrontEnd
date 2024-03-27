import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Body } from './pages/Body/Body'





//Para las rutas de navegación dentro de la web, carga los componentes
function App() {


  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>


  )
}

export default App
