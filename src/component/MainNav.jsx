import { useContext } from 'react'
import '../css/MainNav.css'

export default function MainNav() {
 // const context = useContext(login)
 // console.log(context);
 return (
  <div className='nav-container'>
   <div className='nav-brand'>
    <div className='brand-logo'>
    </div>
    <div className='brand-name'>
    </div>
   </div>
   <div className='nav-links' style={{ visibility: "hidden" }}>
    <div className='links-items'>
     <ul className='links'>
      <li className='link'>
       <a className='link-home'>home</a>
      </li>
      <li className='link'>
       <a className='link-home'>video</a>
      </li>
      <li className='link'>
       <a className='link-home'>grup</a>
      </li>
      <li className='link'>
       <a className='link-home'>setting</a>
      </li>
     </ul>
    </div>
    <div className='account-container'>
     <div className='user-account'>
      <div className='user-thumb'></div>
     </div>
    </div>
   </div>
  </div>
 )
}
