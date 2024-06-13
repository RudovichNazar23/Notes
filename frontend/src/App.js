import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRouter';

import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='*' element={<PageNotFound />}></Route>
          <Route 
            path='/profile' 
            element={
              <ProtectedRoute>
                  <UserProfile />
              </ProtectedRoute>
            }
          > 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
