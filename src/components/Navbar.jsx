import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-scroll';

export function Navbar() {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        }, {
            id: 3,
            link: "portfolio"
        }, {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        }
    ];
    return (
        <div className="flex justify-between bg-gray-900 h-23 w-full px-4 text-white  fixed">
            <div>
                <h1 className="text-5xl font-medium  ml-2">
                    Sumit
                </h1>

{/* <div >
    <img src="logo-white.png" alt="" />
</div> */}

            </div>


            <ul className=" hidden md:flex items-center " >
                {
                    links.map(({ id, link }) => (
                        <li className="px-5 text-white cursor-pointer capitalize font-medium hover:scale-105 duration-200"
                            key={id}>
                          <Link to={link} smooth duration={500} >{link}</Link>

                        </li>

                    ))

                }
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 pt-2 text-gray-500 md:hidden ">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {
                nav && (
                    <ul className="flex flex-col justify-center font-bold  absolute top-0 left-0 text-gray-600 items-center w-full h-screen bg-gradient-to-b from bg-black to-gray-800  ">

                    {
                        links.map(({ id, link }) => (
                            <li className="cursor-pointer px-4 capitalize py-6 text-4xl"
                                key={id}>
                                                       <Link to={link}  onClick={()=>setNav(!nav)} smooth duration={500} >{link}</Link>

    
                            </li>
    
                        ))
    
                    }
    
    
                </ul>
                )
            }

          

        </div>


    )
}



