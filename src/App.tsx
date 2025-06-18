import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import MainPage from './pages/MainPage/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
