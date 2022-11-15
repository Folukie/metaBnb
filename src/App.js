import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import Places from './pages/places'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/places" element={<Places />}></Route>

      </Routes>
    </Router>
  )
}
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
export default App
