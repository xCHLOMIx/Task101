import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CompaignsPages from './pages/CompaignsPages';
import CompaignsDetails from './pages/CampaignsDetails';

function App() {

  return (
    <div className="w-full h-lvh bg-[#0C0C0C] m-auto text-white font-sans box-border px-5">
      <BrowserRouter>
        <div className="max-w-[800px] w-full h-lvh bg-[#0C0C0C] m-auto pt-10">
          <Navbar />
          <Routes>
            <Route
            path='/'
            element= {<CompaignsPages />}
            />
            <Route
            path='/campaign/:id'
            element= {<CompaignsDetails /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
