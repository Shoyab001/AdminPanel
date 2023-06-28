import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/style.scss'
import { useSelector } from 'react-redux'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const ChangePassword = React.lazy(() => import('./views/pages/changePassword/changePassword'))

const App = () => {
  const isAuthenticated = useSelector((state) => state.authenticated)

  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/changePassword" name="Login Page" element={<ChangePassword />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
