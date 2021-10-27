import React from 'react'

export default function Skills() {
  return (
   <section id="skills" className="bg-gray-200">
     <div className="w-large lg:w-medium 2xl:w-custom mx-auto text-custom">
       <h2 className="text-4xl font-bold">Skills</h2>
       <div className="flex pt-8 flex-wrap pb-20 justify-center md:justify-start">

          <div className="flex flex-col items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-react-original"></i></span>
              <h4 className="text-center text-xl font-bold my-1">React</h4>
          </div>
          <div className="flex flex-col items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-nodejs-plain"></i></span>
              <h4 className="text-xl font-bold my-1">Node</h4>
          </div>
          <div className="flex flex-col items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-html5-plain"></i></span>
              <h4 className="text-xl font-bold my-1 uppercase">Html</h4>
          </div>
          <div className="flex flex-col  items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-css3-plain"></i></span>
              <h4 className="text-xl font-bold my-1 uppercase">css</h4>
          </div>
          <div className="flex flex-col items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-javascript-plain"></i></span>
              <h4 className="text-xl font-bold my-1">JavaScript</h4>
          </div>
          <div className="flex flex-col items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-redux-original"></i></span>
              <h4 className="text-xl font-bold my-1">Redux</h4>
          </div>
          <div className="flex flex-col items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-tailwindcss-original-wordmark"></i></span>
              <h4 className="text-xl font-bold my-1">Tailwind CSS</h4>
          </div>
          <div className="flex flex-col items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-mongodb-plain"></i></span>
              <h4 className="text-xl font-bold my-1">Mongodb</h4>
          </div>  
          <div className="flex flex-col items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-sass-original"></i></span>
              <h4 className="text-xl font-bold my-1 uppercase">scss/sass</h4>
          </div>   
          <div className="flex flex-col items-center my-3 mx-2 flex-50 md:flex-30 lg:flex-25 xl:flex-20">
              <span className="text-8xl"><i className="devicon-git-plain"></i></span>
              <h4 className="text-xl font-bold my-1">git</h4>
          </div>     
        </div>
     </div>
   </section>
  )
}
