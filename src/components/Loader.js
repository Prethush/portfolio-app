import React from 'react'
import "../stylesheet/loader.css";

export default function Loader() {
  return (
    <div className="parent-container">
      <section className = "container">
        <div className = "spinner spin-1"></div>
        <div className = "spinner spin-2"></div>
        <div className = "spinner spin-3"></div>
	    </section>
    </div>
  )
}
