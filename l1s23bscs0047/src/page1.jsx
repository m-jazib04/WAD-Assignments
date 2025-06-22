import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Items from "./components/ItemSection";
import DtImgs from "./components/DesktopTableSection";
import DtContent from "./components/DesktopTableContent";
import Email from "./components/EmailSection";
import Footer from "./components/Footer";

function Page1 () {
  return (
    <div>
      <Header />
      <Hero />
      <Items />
      <DtImgs />
      <DtContent />
      <Email />
      <Footer />
    </div>
  );
}
export default Page1;