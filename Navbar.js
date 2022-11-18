import React from 'react'
import icon from './images/Troll Face.png'
function Navbar() {
  return (
    <header>
        <nav>
            <div className='icondiv'>
            <img src={icon} alt='' className='meme-icon'/>
            <h3>Meme Generator</h3>
            </div>
            <div className='project-info'>
                <p>React Course - Project 3</p>
            </div>
        </nav>
    </header>
  )
}

export default Navbar