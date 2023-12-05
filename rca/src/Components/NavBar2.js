import React, { useEffect } from 'react'
import logo from '../images/sbhiblilogo.png'

export default function NavBar2() {
    useEffect(()=>{
        
let navB = document.querySelector('.navbr')
window.addEventListener('scroll', ()=>{
    if(window.scrollY >150){
      navB.classList.add('nvb')
      
    }else{
      navB.classList.remove('nvb')
    
    }
  })
    }, [])


  return (
    <div>
       <nav id='menu' className="navbr">
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
  <ul>
  <img src={logo} alt=""  className='logo2'/>
  <div className="menubr">
    <li><a href='http://'>Home</a></li>
    <li><a className='dropdown-arro' href='http://'>Notices</a>
      {/* <ul className='sub-menus'>
        <li><a href='http://'>Notices 1</a></li>
        <li><a href='http://'>Notices 2</a></li>
        <li><a href='http://'>Notices 3</a></li>
        <li><a href='http://'>Notices 4</a></li>
      </ul> */}
    </li>
    <li><a href='http://'>Donation</a></li>
    {/* <li><a className='dropdown-arrow' href='http://'>Faculty Member</a>
      <ul className='sub-menus'>
        <li><a href='http://'>Faculty Member1</a></li>
        <li><a href='http://'>Faculty Member2</a></li>
        <li><a href='http://'>Faculty Member3</a></li>
      </ul>
    </li> */}
    <li><a href='http://'>Contact Us</a></li>
    </div>
  </ul>
  <div id='google_translate_element'></div>  
</nav>

    </div>
  )
}
