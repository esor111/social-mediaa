import axios from 'axios'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { loginfaliure, loginStart, loginSuccess } from '../../redux/userRedux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './login.scss'
import { useEffect } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  const cuser = user ? user : 'ishwor'
  const handleLogin = async e => {
    e.preventDefault()
    loginStart()
    try {
      const res = await axios.post('http://localhost:8800/api/auth/login', {
        username,
        password
      })
      dispatch(loginSuccess(res.data))
      setCurrentUser(res.data)
      console.log(res.data)
    } catch (err) {
      loginfaliure()
    }
  }

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  //TO DO
  // setCurrentUser({
  //   id: 1,
  //   name: "John Doe",
  //   profilePic:
  //     "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input
              type='text'
              placeholder='Username'
              name='username'
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
              name='password'
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
