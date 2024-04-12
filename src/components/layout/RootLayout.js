import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='main'>
        <nav className='Nav'>
          <ul>
            {/* <li><a href='/'>Home</a></li>
            <li><a href='about'>About</a></li> */}

            {/* 새로 고침 되지 않음 */}
            {/* <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li> */}

            {/* active 클래스 제공 */}
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='Abac'>Abac</NavLink></li>
            <li><NavLink to='ptn'>ptn</NavLink></li>
            <li><NavLink to='mnt'>mnt</NavLink></li>
            <li><NavLink to='mnt'>Abac</NavLink></li>
          </ul>
        </nav>

        <hr />
        <div className='content'>
           <Outlet />
        </div>
        
    </div>
  )
}

export default RootLayout