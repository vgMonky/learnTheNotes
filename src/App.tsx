import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import PageNotes from './pages/PageNotes'
import PageScales from './pages/PageScales'
import PageWhatever from './pages/PageWhatever'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <main className="mt-4">
      <Routes>
        {/* redirect root → /notes */}
        <Route path="/" element={<Navigate to="/notes" replace />} />
        <Route path="/notes" element={<PageNotes />} />
        <Route path="/scales" element={<PageScales />} />
        <Route path="/whatever" element={<PageWhatever />} />
      </Routes>
    </main>
  </BrowserRouter>
)

export default App

