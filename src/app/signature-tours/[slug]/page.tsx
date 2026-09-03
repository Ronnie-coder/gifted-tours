import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignatureTourClient from "./SignatureTourClient";

const signatureTourData = {
  "best-of-cape": {
    title: "Best of the Cape: Full Day",
    subtitle: "A comprehensive journey through the Cape Peninsula and Stellenbosch Winelands.",
    image: "/assets/best-of-cape.jpg",
    duration: "Full Day (9-10 Hours)",
    location: "Cape Peninsula & Stellenbosch",
    description: "This signature experience is the ultimate way to see Cape Town. Begin your morning exploring the rugged coastlines of Camps Bay and Chapman's Peak Drive. Journey down to the spectacular Cape Point, visit the beloved penguin colony, and conclude your afternoon with a premium wine tasting experience in the historic Stellenbosch Winelands.",
    highlights: ["Chapman's Peak Scenic Drive", "Cape of Good Hope Nature Reserve", "Boulders Beach Penguin Colony", "Stellenbosch Vineyard Wine Tasting", "Luxury Chauffeur Transport"]
  },
  "amazing-cape-town": {
    title: "Amazing Cape Town: Half Day",
    subtitle: "Experience the essential highlights of the Mother City in one unforgettable morning.",
    image: "/assets/amazing-cape-town.jpg",
    duration: "Half Day (4-5 Hours)",
    location: "Cape Town City & Constantia",
    description: "Short on time but want to see the best of Cape Town? This fast-paced, high-impact tour takes you to the summit of the iconic Table Mountain, guides you through the vibrant and historic city center, and whisks you away for an elegant wine tasting in the lush Constantia Valley, finishing with a peaceful stroll through Kirstenbosch Botanical Gardens.",
    highlights: ["Table Mountain Cableway", "Vibrant City Historical Tour", "Constantia Valley Wine Tasting", "Kirstenbosch Botanical Gardens", "Expert Local Guide"]
  }
};

export function generateStaticParams() {
  return Object.keys(signatureTourData).map((slug) => ({
    slug: slug,
  }));
}

export default async function SignatureTourPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const tour = signatureTourData[resolvedParams.slug as keyof typeof signatureTourData];

  if (!tour) {
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
        <SignatureTourClient tour={tour} />
      </div>
      <Footer />
    </main>
  );
}