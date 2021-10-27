import React, {Suspense} from 'react'
import Loader from "./Loader";
const Header = React.lazy(() => import("./Header"));
const Hero = React.lazy(() => import("./Hero"));
const About = React.lazy(() => import("./About"));
const Skills = React.lazy(() => import("./Skills"));
const Projects = React.lazy(() => import("./Projects"));
const Contact = React.lazy(() => import("./Contact"));
const Footer = React.lazy(() => import('./Footer'));

export default function App() {
  return (
    <>
     < Suspense fallback={< Loader />}>
        < Header />
        <main>
          < Hero />
          < About />
          < Skills />
          < Projects />
          < Contact />
        </main>
        < Footer />
     </Suspense>
    </>
  )
}
