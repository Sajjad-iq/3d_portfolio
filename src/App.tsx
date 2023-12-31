import { About, Contact, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";
import { styles } from "./style";

function App() {

  return (
    <section className=" relative z-0 bg-[#133337]">
      <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen'>
        <Navbar />
        <Hero />
      </section>

      <About />
      <Tech />
      <Works />

      <section id="contact" className={`${styles.paddingX} relative z-0 flex  m-auto mt-60 pb-20 `} >
        <Contact />
        <StarsCanvas />
      </section>
    </section>
  )
}

export default App
