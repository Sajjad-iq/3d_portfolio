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

      <section className={`${styles.paddingX} relative z-0 flex justify-center items-center m-auto mt-60 pb-20 `} >
        <Contact />
      </section>
      <StarsCanvas />

    </section>
  )
}

export default App
