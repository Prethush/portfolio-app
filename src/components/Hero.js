import React from 'react';
import {Typewriter} from "react-simple-typewriter";
import ReactTooltip from 'react-tooltip';

export default function Hero() {

 
  return (
    <section id="home" className="hero mt-16 bg-cover bg-center w-full h-custom" >
      <div className="text-white font-bold w-custom mx-auto py-48">
        <h2 className="text-4xl sm:text-6xl mb-6">Hi, I am Prethush</h2>
        <h2 className="text-3xl inline">A {" "}
        <span className="">
        <Typewriter
            words={["Full Stack Developer", "Web Developer"]}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h2>
        <ul className="flex mt-4 text-xl">
            <li className="mr-4" data-tip data-for="twitterTip"> <a href="https://twitter.com/PrethushAk" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter hover:text-black"></i></a></li >
            <ReactTooltip id="twitterTip" place="bottom" effect="solid">
              Twitter
            </ReactTooltip>

            <li className="mr-4" data-tip data-for="githubTip"><a href="https://github.com/Prethush" target="_blank" rel="noopener noreferrer"><i className="fab fa-github hover:text-black" target="_blank" rel="noopener noreferrer"></i></a></li >
            <ReactTooltip id="githubTip" place="bottom" effect="solid">
              Github
            </ReactTooltip>

            <li className="mr-4" data-tip data-for="linkedinTip"><a href="https://www.linkedin.com/in/prethush-a-k-3bb498157/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin hover:text-black"></i></a></li >
            <ReactTooltip id="linkedinTip" place="bottom" effect="solid">
                Linkedin
            </ReactTooltip>

            <li className="mr-4" data-tip data-for="codewarsTip"><a href="https://www.codewars.com/users/prethush%20" target="_blank" rel="noopener noreferrer"><i className="fas fa-tv hover:text-black"></i></a></li > 
            <ReactTooltip id="codewarsTip" place="bottom" effect="solid">
                CodeWars
            </ReactTooltip>
        </ul>
      </div>
    </section>
  )
}
