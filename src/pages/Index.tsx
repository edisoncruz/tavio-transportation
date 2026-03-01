import { Phone, Wrench, Truck, AlertTriangle, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-5 py-10 text-center sm:py-16">
      {/* Red accent line */}
      <div className="mb-6 h-1 w-16 bg-gradient-hot rounded-full sm:mb-10 sm:w-24" />

      {/* Business name */}
      <h1 className="font-display text-4xl font-bold tracking-wide text-foreground sm:text-7xl">
        TAVIO
        <span className="block text-gradient-chrome">TRANSPORTATION</span>
      </h1>

      {/* Tagline */}
      <p className="mt-3 text-sm font-medium tracking-widest uppercase text-muted-foreground sm:mt-4 sm:text-xl">
        24/7 Flatbed Towing & Mobile Mechanic
      </p>

      {/* Divider */}
      <div className="my-6 h-px w-32 bg-border sm:my-8 sm:w-48" />

      {/* Coming Soon */}
      <p className="font-display text-3xl font-bold tracking-wider sm:text-6xl">
        <span className="bg-gradient-hot bg-clip-text text-transparent">COMING SOON</span>
      </p>

      <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-lg">
        Serving Melbourne, FL &amp; All of Brevard County
      </p>

      {/* CTA Button - large touch target for mobile */}
      <a
        href="tel:4077058648"
        className="mt-8 flex w-full max-w-sm items-center justify-center gap-3 rounded-lg bg-gradient-hot px-6 py-5 text-lg font-bold text-primary-foreground shadow-glow active:scale-95 transition-transform sm:mt-10 sm:w-auto sm:rounded-md sm:px-10 sm:text-2xl"
      >
        <Phone className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
        Call Now: (407) 705-8648
      </a>

      <p className="mt-3 text-xs italic text-muted-foreground sm:text-sm">Se habla español</p>

      {/* Services - stack on mobile, row on desktop */}
      <div className="mt-12 grid grid-cols-2 gap-3 text-[11px] uppercase tracking-widest text-muted-foreground sm:mt-16 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 sm:text-sm">
        <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" /> Towing</span>
        <span className="flex items-center gap-1.5"><Wrench className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" /> Mobile Mechanic</span>
        <span className="flex items-center gap-1.5"><AlertTriangle className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" /> Accident Recovery</span>
        <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" /> Roadside Assistance</span>
      </div>
    </div>
  );
};

export default Index;
