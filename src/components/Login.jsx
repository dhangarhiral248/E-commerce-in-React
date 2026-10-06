import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

    const savedUser = JSON.parse(localStorage.getItem('b87'))

    if (!savedUser) {
      toast.error('Please register first')
      return
    }

    if (email === savedUser.email) {
      if (password === savedUser.password) {
        toast.success('Login Successful')

        setTimeout(() => {
          navigate('/dashboard')
        }, 800)
      } else {
        toast.error('Password Incorrect')
      }
    } else {
      toast.error('Invalid Email')
    }
  }

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-content">

          <p className="auth-small-title">
            WELCOME BACK
          </p>

          <h2>Login to SHOPÉ</h2>

          <p className="auth-description">
            Sign in to continue your shopping experience.
          </p>

          <form onSubmit={handleLogin}>

            <div className="auth-input-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="auth-input-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="auth-button">
              LOGIN
            </button>

          </form>

          <p className="auth-bottom-text">
            Don't have an account?
            <Link to="/register"> Create Account</Link>
          </p>

        </div>

      </div>

      <ToastContainer />

    </div>
  )
}

export default Login