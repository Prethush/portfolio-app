import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-gray-200 text-custom">
      <div className="w-large lg:w-medium 2xl:w-custom mx-auto pt-20 pb-24">
        <h2 className="text-4xl font-bold mb-3">About Me</h2>
        <h4 className="text-xl font-bold">Hi, I'm Prethush A K</h4>
        <div className="mt-8 flex items-center justify-between px-12 flex-wrap">

            <div className="flex flex-col xl:flex-30">
                <span className="my-3 text-lg font-bold"><i className="fas fa-envelope-open mr-2"></i> Email : <a href="mailto: ktmirash49@gmail.com" className="underline text-blue-500">ktmirash49@gmail.com</a></span>
                <span className="my-3 text-lg font-bold"><i className="fas fa-phone mr-2"></i> Mobile : <span>+91 9207671084</span></span>
            </div>
            <div className="flex flex-col xl:flex-30">
                <span className="my-3 text-lg font-bold"><i className="fas fa-file mr-2"></i> Resume : <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Click here</a></span>
                <span className="my-3 text-lg font-bold"><i className="fas fa-blog mr-2"></i> Medium Account :  <a href="https://programmingnewbie.medium.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Click here</a></span>
            </div>
            <div className="flex flex-col xl:flex-30">
              <span  className="my-3 text-lg font-bold"><i className="fas fa-school mr-2"></i> Education : <span>BCA</span></span>
              <span  className="my-3 text-lg font-bold"><i className="fas fa-city mr-2"></i> City : <span>Kannur, India</span></span>
            </div>
        </div>
      </div>
    </section>
  )
}
