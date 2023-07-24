import AboutSection from "./components/Body/About/AboutSection"
import Blogsection from "./components/Body/Blog/Blogsection"
import Pet from "./components/Body/Pet/Pet"
import Petdata from "./components/Body/Petdata.jsx/Petdata"
import ServiceSection from "./components/Body/Services/ServiceSection"
import Carousel from "./components/Carousel/Carousel"
import Navsection from "./components/Heading/Navsection"

function App() {


  return (
  <div>
      <Carousel/>
      <AboutSection/>
      <ServiceSection/>
      <Pet/>
      <Petdata/>
      <Blogsection/>
  </div>
   
  )
}

export default App
