import React, {useState} from 'react'

export default function Header() {
  let [isClicked, setClick] = useState(false);

  return (
    <header className="py-8 header md:py-6 bg-gray-500 text-white fixed w-full top-0 z-50 ">
      <div className=" w-custom mx-auto flex justify-between items-center">
        <div></div>
        {
          isClicked ? <label className="bars hidden cursor-pointer" htmlFor="toggle"><i class="fas fa-times text-red-500"></i></label> : <label className="bars hidden cursor-pointer" htmlFor="toggle"><i className="fas fa-bars"></i></label>
        }
        
        <input onClick={() => setClick(!isClicked)} type="checkbox" id="toggle" name="toggle" className="hidden"/>
        <nav className="nav">
            <ul className="flex nav-menu">
              <li className="mx-3">
                <a href="#home" className="font-bold text-xl hover:text-blue-500"><h3>Home</h3></a>
              </li>
              <li className="mx-3">
                <a href="#about" className="font-bold text-xl hover:text-blue-500"><h3>About</h3></a>
                </li>
              <li className="mx-3">
                <a href="#skills" className="font-bold text-xl hover:text-blue-500"><h3>Skills</h3></a>
              </li>
              <li className="mx-3">
                <a href="#projects" className="font-bold text-xl hover:text-blue-500"><h3>Projects</h3></a>
              </li>
              <li className="mx-3">
                <a href="#contact" className="font-bold text-xl hover:text-blue-500"><h3>Contact</h3></a>
              </li>
            </ul>
        </nav>
      </div>
    </header>
  )
}
