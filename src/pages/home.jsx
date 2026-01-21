import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Hero from "../components/hero/hero.jsx";
import SectionWhy from "../components/sectionWhy/sectionWhy.jsx";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionWhy />
      </main>
      <Footer />
    </>
  );
}

export default Home;
