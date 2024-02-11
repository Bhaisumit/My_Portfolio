import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Sociallinks } from "./components/Sociallinks";

 

 

function App() {


  return (
<>
{/* <h2>hello my name is sumit chandola</h2> */}

<Navbar/>
<Home/>
<About/>
<Portfolio/>
<Experience/>
<Contact/>
<Sociallinks/>


</>
  )
}

export default App
