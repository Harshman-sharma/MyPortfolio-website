import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

import HomeScreen from './pages/HomeScreen'
import ProjectScreen from './pages/ProjectScreen'
import FutureProjectScreen from './pages/FutureProjectScreen'
import RegisterPage from './pages/FormPage'
import LoginPage from './pages/LoginPage'
import Qualifications from './pages/Qualifications'
import Certificates from './pages/Certificates'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/register" element={<RegisterPage />} exact />
            <Route path="/login" element={<LoginPage />} exact />

            <Route path="/" element={<HomeScreen />} exact />

            <Route path="/qualifications" element={<Qualifications />} exact />
            <Route path='/certificates' element={<Certificates />} />

            <Route path='/project/:id' element={<ProjectScreen />} />
            <Route path='/futureproject/:id' element={<FutureProjectScreen />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
