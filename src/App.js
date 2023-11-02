import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Container } from '@mui/material';
import theme from './theme';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
// import Instances from './components/Instances';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/instances" component={Instances} /> */}
        <Route path="/login" element={Login} />
        <Route path="/signup" element={SignUp} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;