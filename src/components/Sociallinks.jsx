import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
export function Sociallinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/sumit-chandola/",
            style: "rounded-tr-md",
           
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/Bhaisumit",

        },
        {
            id: 3,
            child: (
                <>
                    Email <MdEmail size={30} />
                </>
            ),
            href: "mailto:sumitchandola412@gmail.com",

        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/MyResume.pdf",
            style: 'rounded-br-md',
            download: true
        },

    ];
    return (

        <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md 0 bg-blue-600 duration-300 "+""+style}>
                        <a href={href}
                            download={download}

                            target='_blank'
                            className="flex justify-between items-center w-full text-white"

                        >


                            {child}

                        </a>
                    </li>

                ))}

            </ul>
        </div>



    );
};