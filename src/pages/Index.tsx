import { Phone, Wrench, Truck, AlertTriangle, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
      {/* Red accent line */}
      <div className="mb-10 h-1 w-24 bg-gradient-hot rounded-full" />

      {/* Business name */}
      <h1 className="font-display text-5xl font-bold tracking-wide text-foreground sm:text-7xl">
        TAVIO
        <span className="block text-gradient-chrome">TRANSPORTATION</span>
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-lg font-medium tracking-widest uppercase text-muted-foreground sm:text-xl">
        24/7 Flatbed Towing & Mobile Mechanic
      </p>

      {/* Divider */}
      <div className="my-8 h-px w-48 bg-border" />

      {/* Coming Soon */}
      <p className="font-display text-5xl font-bold tracking-wider sm:text-6xl">
        <span className="bg-gradient-hot bg-clip-text text-transparent">COMING SOON</span>
      </p>

      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        Serving Melbourne, FL &amp; All of Brevard County
      </p>

      {/* CTA Button */}
      <a
        href="tel:4077058648"
        className="mt-10 inline-flex items-center gap-3 rounded-md bg-gradient-hot px-10 py-5 text-xl font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105 sm:text-2xl"
      >
        <Phone className="h-7 w-7" />
        Call Now: (407) 705-8648
      </a>

      <p className="mt-3 text-sm italic text-muted-foreground">Se habla español</p>

      {/* Services row */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
        <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Towing</span>
        <span className="text-border">•</span>
        <span className="flex items-center gap-1.5"><Wrench className="h-4 w-4 text-primary" /> Mobile Mechanic</span>
        <span className="text-border">•</span>
        <span className="flex items-center gap-1.5"><AlertTriangle className="h-4 w-4 text-primary" /> Accident Recovery</span>
        <span className="text-border">•</span>
        <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> Roadside Assistance</span>
      </div>
    </div>
  );
};

export default Index;
