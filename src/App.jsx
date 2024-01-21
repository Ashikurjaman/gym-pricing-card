import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PhoneChart from './components/PhoneChart/PhoneChart'
import Price from './components/Price/Price'

function App() {
  

  return (
    <>
      <Navbar/>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Price/>
    <Dashboard/>
    <PhoneChart/>
        
    </>
  )
}

export default App
