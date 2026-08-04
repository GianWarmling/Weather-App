import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
