import Image from "next/image";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero"
import Cv from "./Components/Cv/Cv"
import Interest from "./Components/Interest/Interest";
import Projects from "./Components/Projects/Projects";
export default function Home() {
  return (
   <>
   <Header/>

   <Hero/>
   <Interest/>
   <Projects/>
   <Cv/>

   <Footer/>

   </>
  );
}
