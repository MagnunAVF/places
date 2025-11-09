import Header from "components/Header";
import Hero from "components/Hero";
import Footer from "components/Footer";
import Message from "components/Message";
import Reviews from "components/TopPlaces";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Message />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
