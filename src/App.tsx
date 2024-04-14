
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./css/Card.css"
import Index from "./pages"
import Card from "./pages/Card"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/card/:name" element={<Card />} />
      </Routes>
    </Router>
  )
}

export default App
