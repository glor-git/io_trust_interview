import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CatListPage from '@/pages/CatListPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
