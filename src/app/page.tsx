import Toggler from "./components/Toggler";
import Navbar from "./sections/Navbar";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center w-full min-h-screen">
        <Main />
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-50">
        <Toggler />
      </div>
    </>
  );
}
