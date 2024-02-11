import game from "../assets/game.jpg"
import temperature from "../assets/temperature.jpg"
import discord from "../assets/discord.jpg"
import landiing from '../assets/landiing.jpg'
export function Portfolio() {
    const portfolios = [
        {
            id: 1,
            heading:"Temperature Converter",
            src:temperature,
            href:"https://bhaisumit.github.io/temperature-converter/",
            code:"https://github.com/Bhaisumit/temperature-converter"

        },
        {
            id: 2,
            heading:"Tic Tac Game",
            src: game,
            href:"https://bhaisumit.github.io/Tic-tac-toe-game/",
            code:"https://github.com/Bhaisumit/Tic-tac-toe-game/tree/master"
        },
        {
            id: 3,
            heading:"Discord clone",
            src: discord,
            href:"https://discordbysumit.netlify.app",
            code:"https://github.com/Bhaisumit/Discord-clone"
           
        },
        {
            id: 4,
            heading:"Landing page",
            src: landiing ,
            href:"https://bhaisumit.github.io/PORTFOLIO/",
            code:"https://github.com/Bhaisumit/PORTFOLIO"
           
        },


    ];
    return (
     <div
     name="portfolio"
     className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

    <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
        <p className="py-6 text-[#a3e635] text-xl"> Check out some of my work</p>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-1"> 
    {
        portfolios.map(({id,src,href,code,heading})=>(


            <div  key={id}  className="shadow-md shadow-orange-600 rounded-lg">
    <h2 className="text-2xl text-center mb-3 shadow-md shadow-gray-400">{heading}</h2>
                <img src={src} className="rounded-md duration-300 hover:scale-105 h-72 ml-auto mr-auto" alt="" />
                <div className="flex items-center justify-center ">
                    <a href={href} target="_blank">
                    <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                    </a>
                    <a href={code}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </a>
                </div>
                
            </div>
     
        ))
    }
       </div>

  
</div>


     </div>
    )
}