
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import UserListing from './pages/UserListing'

function App() {

  return (
    <div className="App">
      <div className='leftside'>
        <Header />
      </div>

      <div className='rightside'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userlisting' element={<UserListing />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
