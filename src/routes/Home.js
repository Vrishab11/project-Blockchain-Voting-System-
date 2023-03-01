import Hero from "../components/Hero";
import Info from "../components/Info";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80"
        title="Your RIGHT Just Got Easier"
        text="Now you can vote from where ever you like without limitations."
        buttonText="VOTE"
        url="/"
        btnClass="show"
      />
      <Info />
    </>
  );
}

export default Home;
