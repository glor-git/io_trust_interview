import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import MainPage from './pages/MainPage/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/story" element={<></>} />
          <Route path="/job_posting" element={<></>} />
          <Route path="/interview" element={<></>} />
          <Route path="/pr" element={<></>} />
          <Route path="/faq" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
