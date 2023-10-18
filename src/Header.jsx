import React from 'react'
import 
 { BsSearch, BsJustify}
 from 'react-icons/bs'
import { HiHand} from 'react-icons/hi'


function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'> Hello Manish
     <HiHand  className='hi_hand'/>
     </div>
     <div className="header-right">
      <input type="search" placeholder='Search...'/>
         <span className='searchicon'> <BsSearch  className='icon_Seacrh' /> </span>
          
     </div>
    </header>
  )
}

export default Header
