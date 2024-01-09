import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'
import { Download } from './components'
import ExtraPages from './pages/ExtraPages'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element = {<HomePage />}/>
        <Route path='/user' element = {<ExtraPages />}>
          <Route path='projects' element = {<ProjectPage />}/>
          <Route path='contact' element = {<ContactPage />}/>
        </Route>
        {/* <Route path='/projects' element ={<ProjectPage />}/>
        <Route path='/contact' element = {<ContactPage />}/> */}
        <Route path='*' element = {<ErrorPage />}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
