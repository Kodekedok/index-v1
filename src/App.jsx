import { useEffect, useState, useContext } from 'react'
import Home from './pages/Home'
import Auth from './pages/Auth'
import './css/app.css'
import { VerifyUser } from './utils/utils'

function App() {
  const [User, setUser] = useState({
    name: false || 'Guest',
    loginStatus: false,
    accessId: false || Date.now().toString(),
    accesStatus: true
  })

  const [page, setPage] = useState(null)
  const newPage = (a) => {
    setPage(a)
  }
  const newUser = (a) => {
    setUser(a)
  }
  // verify if user still valid
  async function verify(token) {
    const data = await VerifyUser(token)
    if (data.status !== 200) {
      return setPage('home')
    }
    const name = data.data
    User.accesStatus = 'granted'
    User.loginStatus = true
    User.name = name
    return setPage('home')
  }

  useEffect(() => {
    const localUser = localStorage.getItem('lastUser')
    if (localUser == null) return setPage('home')
    verify(localUser)
  }, [])

  return (
    <div className="app">
      {page === 'home' && < Home setPage={newPage} User={User} id='home' />}
      {page === 'auth' && <Auth setPage={newPage} setUser={newUser} id='auth' />}
    </div>

  )
}

export default App
