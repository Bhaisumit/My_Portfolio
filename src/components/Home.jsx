import React, { useState } from "react";
import myimage from "../assets/myimage.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll"
export function Home() {
  const [directin,setDirectin]=useState(0);
  return (
    <div name="home" className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 p-9">

      <div className="max-w-screen-lg flex flex-col-reverse justify-center mx-auto items-center h-full px-4 md:flex-row">

        <div className="flex flex-col justify-center   h-full">

          <h2 className="text-4xl font-bold text-white sm:text-7xl">I'm sumit Chandola, currently pursuing MCA .</h2>
          <p className="text-yellow-400 text-xl py-4 max-w-md">
            I love to work on web applications using technologies like React,Tailwind,Next JS.

          </p>


          <div onClick={()=>setDirectin(!directin)}>
            <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-blue-500 to-cyan-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
              
                  <FaArrowRight size={25} className="ml-1"/>
                
                
              </span>

            </Link>
          </div>
        </div>
        <div>
          <img className="rounded-2xl mx-auto w-2/3 md:w-full" src={myimage} alt="" />

        </div>

      </div>




    </div>
  )
}

;
