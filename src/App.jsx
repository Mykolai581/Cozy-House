import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainAboutSection from "./components/MainAboutSection/MainAboutSection";
import MainDonationSection from "./components/MainDonationSection/MainDonationSection";
import MainFriendSection from "./components/MainFriendSection/MainFriendSection";
import MainRestSection from "./components/MainRestSection/MainRestSection";
import MainShelterSection from "./components/MainShelterSection/MainShelterSection";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <MainFriendSection />
        <MainAboutSection />
        <MainRestSection />
        <MainShelterSection />
        <MainDonationSection />
      </main>
      <Footer />
    </>
  );
}
