import MainNav from "../component/MainNav"
import { useContext, useEffect } from 'react'
import '../css/Home.css'
import { UserContexts } from "../context/Context"

export default function Home(props) {
 const user = useContext(UserContexts)
 const newPage = props.setPage

 return (
  <div className='g-container'>
   <div className='main-nav'>
    {<MainNav />}
   </div>
   <div className='page-container'>
    this is container
   </div>
   <div className='side-nav'>
    this is side nav
    <button className="to-login" onClick={() => {
     newPage('auth')
    }}>to login</button>
   </div>
  </div>
 )
}
