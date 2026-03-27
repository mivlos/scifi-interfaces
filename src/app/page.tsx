import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Canon from "@/components/Canon";
import CreativeDirectors from "@/components/CreativeDirectors";
import Designers from "@/components/Designers";
import ScreenToReality from "@/components/ScreenToReality";
import PicsartConnection from "@/components/PicsartConnection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Thesis />
      <Canon />
      <CreativeDirectors />
      <Designers />
      <ScreenToReality />
      <PicsartConnection />
      <Footer />
    </main>
  );
}
