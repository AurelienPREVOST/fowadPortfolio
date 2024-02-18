import "./App.scss"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import Main from "./components/Main"
import DisplaySetup from "./components/DisplaySetup"

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <DisplaySetup />
      <Main /> 
      <Footer />
    </>
  )
}

export default App