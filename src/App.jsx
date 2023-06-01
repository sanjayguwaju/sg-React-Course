import './App.css'
// import Homepage from "../src/components/Hompage/Hompage"
import Navbar from "../src/components/Navbar/Navbar"
import Footer from "../src/components/Footer/Footer"
import HeaderMenuColored from "../src/components/HeaderMenuColored/mantineNav"
import attributes from '../src/components/HeaderMenuColored/attributes.json'
import CounterApp from './components/Counter/CounterApp'

function App() {
  return (
    <div>
      <CounterApp/>
      {/* <HeaderMenuColored {...attributes.props} /> */}
      {/* <Navbar/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App
