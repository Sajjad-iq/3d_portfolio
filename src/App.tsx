import { About, Hero, Navbar, Tech } from "./components";

function App() {

  return (
    <section className=" relative z-0 bg-[#133337]">
      <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen'>
        <Navbar />
        <Hero />
      </section>

      <About />
      <Tech />

      {/*
      <Works />
      <Feedbacks />
      <section className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </section> */}
    </section>
  )
}

export default App
