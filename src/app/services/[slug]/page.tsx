import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceClient from "./ServiceClient";

const serviceData = {
  "cape-tours": {
    title: "Cape Peninsula & Winelands",
    subtitle: "Experience the ultimate journey through South Africa's most iconic landscapes.",
    image: "/assets/cape-tours.jpg",
    duration: "Full Day (8-9 Hours)",
    location: "Cape Town & Surrounds",
    description: "Immerse yourself in the breathtaking beauty of the Cape. This bespoke tour takes you from the rugged coastlines of Cape Point to the lush, historic valleys of the Stellenbosch Winelands. Designed for those who want to see it all without feeling rushed, our luxury transport and expert guides ensure a five-star experience.",
    highlights: ["Scenic drive along Chapman's Peak", "Visit the African Penguin colony at Boulders Beach", "Explore the Cape of Good Hope Nature Reserve", "Premium wine tasting", "Luxury, air-conditioned transport"]
  },
  "charter-services": {
    title: "Luxury Charter Services",
    subtitle: "Cost-effective, reliable, and discreet luxury transport.",
    image: "/assets/charter-services.jpg",
    duration: "Custom / Hourly",
    location: "Western Cape",
    description: "Whether it is a corporate event, a VIP transfer, or a private family excursion, our charter services offer unmatched comfort and discretion. We maintain a pristine fleet of premium vehicles driven by professional, vetted chauffeurs.",
    highlights: ["VIP Airport Transfers", "Corporate Event Transport", "Discreet Chauffeur Service", "Custom Itineraries", "Premium Fleet Selection"]
  },
  "helicopter-tours": {
    title: "Scenic Helicopter Tours",
    subtitle: "Soar over iconic landmarks for unforgettable aerial views.",
    image: "/assets/helicopter-tours.jpg",
    duration: "15 - 45 Minutes",
    location: "V&A Waterfront Helipad",
    description: "Experience Cape Town from the ultimate vantage point. Fly over Table Mountain, the City Bowl, and the stunning Atlantic Seaboard. Perfect for proposals, anniversaries, or simply treating yourself to a breathtaking adventure.",
    highlights: ["Two Oceans flight routes", "Table Mountain aerial views", "Professional commentary", "Safety briefing included", "Unmatched photography opportunities"]
  },
  "sky-gliding": {
    title: "Sky Gliding Adventures",
    subtitle: "Experience the thrill of gliding over the stunning coastline.",
    image: "/assets/sky-gliding.jpg",
    duration: "Half Day",
    location: "Signal Hill / Lion's Head",
    description: "Take the leap with our professional tandem paragliding pilots. Launch from the iconic slopes of Lion's Head or Signal Hill and glide safely down to the pristine beaches of Camps Bay or Sea Point.",
    highlights: ["Tandem flights with expert pilots", "In-flight photography & video options", "All safety gear provided", "Spectacular coastal views", "No prior experience needed"]
  },
  "concierge-services": {
    title: "VIP Concierge Services",
    subtitle: "We handle the details so you can enjoy the experience.",
    image: "/assets/concierge-services.jpg",
    duration: "24/7 Availability",
    location: "Cape Town",
    description: "From securing reservations at fully booked Michelin-star restaurants to arranging exclusive yacht charters, our concierge team opens doors across Cape Town. Let us manage your entire itinerary flawlessly.",
    highlights: ["Restaurant & Club Reservations", "Private Yacht Charters", "Event Ticketing", "Personal Shopping", "Customized Experiences"]
  },
  "aquarium-visit": {
    title: "Two Oceans Aquarium",
    subtitle: "Explore the magical underwater world of the Cape.",
    image: "/assets/aquarium-visit.jpg",
    duration: "2 - 3 Hours",
    location: "V&A Waterfront",
    description: "Perfect for families and marine lovers. Skip the queues with our pre-arranged tickets and enjoy a fascinating journey through the diverse marine ecosystems of the Atlantic and Indian oceans.",
    highlights: ["Skip-the-line VIP entry", "Predator exhibit viewing", "Kelp forest walk", "Penguin encounters", "Family-friendly pacing"]
  },
  "shark-cage-diving": {
    title: "Great White Shark Diving",
    subtitle: "An adrenaline-pumping adventure in the predator's natural habitat.",
    image: "/assets/shark-cage-diving.jpg",
    duration: "Full Day",
    location: "Gansbaai",
    description: "Journey to the shark capital of the world. Led by marine biologists and expert crews, safely observe Great White and Bronze Whaler sharks from a secure steel cage. A truly transformative wildlife experience.",
    highlights: ["Return transport from Cape Town", "Breakfast and lunch included", "Wetsuits and diving gear provided", "Onboard marine biologist", "No scuba certification required"]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceData[resolvedParams.slug as keyof typeof serviceData];

  if (!service) {
    return (
      <main className="min-h-screen bg-background flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-2xl font-bold">Tour not found.</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Navbar />
        <ServiceClient service={service} />
      </div>
      <Footer />
    </main>
  );
}