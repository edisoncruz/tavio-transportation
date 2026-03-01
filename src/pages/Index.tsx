import { Phone } from "lucide-react";
import heroCard from "@/assets/hero-card.jpg";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
      <img
        src={heroCard}
        alt="Tavio Transportation – Flatbed Towing & Mobile Mechanic"
        className="mb-8 w-full max-w-xl rounded-lg shadow-lg"
      />

      <h1 className="mb-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
        TAVIO TRANSPORTATION
      </h1>

      <p className="mb-8 text-lg font-semibold text-muted-foreground sm:text-xl">
        24/7 Flatbed Towing &amp; Mobile Mechanic
      </p>

      <p className="mb-2 text-4xl font-extrabold text-primary sm:text-5xl">
        COMING SOON
      </p>

      <p className="mb-10 text-base text-muted-foreground sm:text-lg">
        Serving Melbourne, FL &amp; All of Brevard County
      </p>

      <a
        href="tel:4077058648"
        className="inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-md transition-opacity hover:opacity-90 sm:text-xl"
      >
        <Phone className="h-6 w-6" />
        Call Now: (407) 705-8648
      </a>

      <p className="mt-4 text-sm italic text-muted-foreground">Se habla español</p>

      <p className="mt-16 text-xs text-muted-foreground">
        Towing • Mobile Mechanic • Accident Recovery • Roadside Assistance
      </p>
    </div>
  );
};

export default Index;
