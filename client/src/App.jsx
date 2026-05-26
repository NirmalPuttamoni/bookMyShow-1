import './App.css';
import '@ant-design/v5-patch-for-react-19';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot.jsx';
import Reset from './pages/Reset.jsx';
import Admin from './pages/Admin/Admin'
import Partner from './pages/Partner/Partner';
import Profile from './pages/Profile/Profile.jsx';
import SingleMovie from './components/SingleMovie';
import BookShow from './components/BookShow';
import ProtectedRoute from './components/ProtectedRoute';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />

          <Route path='/partner' element={
            <ProtectedRoute>
              <Partner />
            </ProtectedRoute>
          } />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/movie/:id" element={
            <ProtectedRoute>
              <SingleMovie />
            </ProtectedRoute>
          } />

          <Route path="/book-show/:id"
            element={
              <ProtectedRoute>
                <BookShow />
              </ProtectedRoute>
            }>
          </Route>
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
