import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Password and confirm password are not same')
      return
    }

    const payload = {
      name: userName,
      email: email,
      password: password
    }

    localStorage.setItem('b87', JSON.stringify(payload))

    toast.success('Registration Successful')

    setTimeout(() => {
      navigate('/')
    }, 800)
  }

  return (
    <div className="auth-page">

      <div className="auth-card register-card">

        <div className="auth-content">

          <p className="auth-small-title">
            JOIN SHOPÉ
          </p>

          <h2>Create Account</h2>

          <p className="auth-description">
            Create your account and start exploring our collection.
          </p>

          <form onSubmit={handleRegister}>

            <div className="auth-input-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="auth-input-group">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="auth-button">
              CREATE ACCOUNT
            </button>

          </form>

          <p className="auth-bottom-text">
            Already have an account?
            <Link to="/"> Login</Link>
          </p>

        </div>

      </div>

      <ToastContainer />

    </div>
  )
}

export default Register