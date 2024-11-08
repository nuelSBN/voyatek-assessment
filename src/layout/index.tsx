import Banner from "../components/banner";
import CallToAction from "../components/cta";
import Features from "../components/features";
import Header from "../components/header";
import Modal from "../components/modal";
import FlightModalComponent from "../components/modal/flight-modal";
import HotelModalComponent from "../components/modal/hotel-modal";
import Sidebar from "../components/sidebar";
import TripItineraries from "../components/trip-Itineraries";
import useModal from "../hooks/useModal";

export default function Layout() {
  const { isOpen, contentType, openModal, closeModal } = useModal();

  return (
    <main className="min-h-dvh w-full font-poppins">
      <Header />
      <div className="bg-gray w-full h-[calc(100dvh-132px)] flex gap-4 p-6">
        <Sidebar />
        <div className="w-full h-full bg-white p-4 flex flex-col gap-4 rounded overflow-y-scroll">
          <Banner />
          <Features />
          <CallToAction openModal={openModal} />
          <TripItineraries openModal={openModal} />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {contentType === "activity" && <h1>Activity content</h1>}
        {contentType === "flights" && <FlightModalComponent />}
        {contentType === "hotels" && <HotelModalComponent />}
      </Modal>
    </main>
  );
}
