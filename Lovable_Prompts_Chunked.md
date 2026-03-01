# Tavio Transportation — Lovable Prompts (Sequential)

Paste these prompts into Lovable one at a time, in order. Wait for each to finish before pasting the next. The full master reference document is in `Lovable_Prompt.md`.

---

## PROMPT 1: Project Setup + Homepage

```
Create a new website project for "Tavio Transportation" — a 24/7 flatbed towing and mobile mechanic service in Melbourne, FL 32935. Phone: (407) 705-8648. Domain: taviotransportation.com. Bilingual English/Spanish.

DESIGN SYSTEM:
- Color palette: Deep navy (#1a2744) primary background, bright orange/amber (#f59e0b) accent for CTAs and buttons, white text on dark backgrounds
- Typography: Bold sans-serif headings (Inter or Poppins), clean body text
- Layout: Full-width hero sections, card-based grids, mobile-first responsive
- Feel: Professional, trustworthy, bold — "the reliable guy you call at 2 AM"

GLOBAL ELEMENTS (every page):
- Sticky header: Logo left ("TAVIO TRANSPORTATION" in bold white + orange accent), nav center, orange "Call Now (407) 705-8648" button right
- Mobile: floating click-to-call button bottom-right
- Footer: business name, phone, email (info@taviotransportation.com), service area cities, quick links, "Se habla español" badge, social media placeholders
- "Se habla español" badge visible in header on every page

HOMEPAGE (/):
Title: Tavio Transportation | 24/7 Towing & Mobile Mechanic | Melbourne FL

Hero section: Full-width dark background. Large headline: "Broke Down? We Tow It or Fix It On the Spot." Subheadline: "24/7 Flatbed Towing & Mobile Mechanic Service | Melbourne, FL & All of Brevard County". Two CTAs: "Call Now: (407) 705-8648" (orange) and "See Our Services" (outline white). Small "Se habla español" text.

Trust bar: Horizontal strip with 4 badges — "24/7 Emergency Service" | "Flatbed Towing — Safest Method" | "Bilingual English/Spanish" | "Licensed & Insured"

Services section: Heading "Two Services. One Call." Two large cards: (1) Towing — tow truck icon, "Flatbed Towing Services", description of accident recovery/flood rescue/EV towing/motorcycle/long-distance, button "View Towing Services →" linking to /towing-services. (2) Mobile Mechanic — wrench icon, "Mobile Mechanic Services", description of battery/brakes/diagnostics/alternator/fluid, button "View Mechanic Services →" linking to /mobile-mechanic-services.

Why Choose Us: 4 feature blocks — "Tow + Fix Combo" (we do both, one call), "Hurricane Tested" (Tampa Bay recovery experience), "Flatbed Only" (safest method), "Bilingual Service" (English + Spanish).

Service Area grid: "Serving All of Brevard County & Central Florida" with 8 city cards linking to towing pages: Melbourne, Palm Bay, Cocoa, Titusville, Viera, Merritt Island, Cape Canaveral, Orlando.

Full-width CTA section: Orange/dark background, "Stranded? Broken Down? Call Now." Large phone number, "Available 24/7 | English & Spanish".

Add LocalBusiness JSON-LD schema in the head with name "Tavio Transportation", phone "(407) 705-8648", email "info@taviotransportation.com", address Melbourne FL 32935, 24/7 hours, areaServed for all 8 cities, availableLanguage en/es.
```

---

## PROMPT 2: Towing Services + Mobile Mechanic Services Pages

```
Add two new pages to the Tavio Transportation site:

PAGE: TOWING SERVICES (/towing-services)
Title: Flatbed Towing Services | 24/7 Emergency Towing | Tavio Transportation
Meta: Professional flatbed towing in Melbourne, FL and Brevard County. Accident recovery, flood rescue, EV towing, motorcycle towing, long-distance transport. Call (407) 705-8648.

Hero: "Professional Flatbed Towing Services" / "24/7 Emergency & Scheduled Towing Across Central Florida"

Intro: When you need a tow truck, you need it now. Tavio Transportation provides 24/7 flatbed towing across Melbourne, Palm Bay, Cocoa, Titusville, Viera, Merritt Island, Cape Canaveral, and the Orlando metro area. Our flatbed trucks safely load your vehicle with all four wheels off the ground.

6 service cards with icons: (1) Accident Recovery Towing — 24/7 response, insurance documentation (2) Flood & Water Rescue — hurricane experience from Tampa Bay (3) EV Towing — flatbed-only, safe for Tesla/Rivian/all EVs (4) Motorcycle & Specialty Vehicle — proper cradles and securing (5) Long-Distance Towing — cross-state, upfront pricing (6) Roadside Assistance — lockouts, flat tires, jump starts, fuel

"Why Flatbed?" section explaining flatbed safety advantages.
CTA with phone number. Cross-link to /mobile-mechanic-services.
Add Service schema JSON-LD for Flatbed Towing.

PAGE: MOBILE MECHANIC SERVICES (/mobile-mechanic-services)
Title: Mobile Mechanic Services | We Come to You | Melbourne FL | Tavio Transportation
Meta: 24/7 mobile mechanic in Melbourne, FL and Brevard County. Battery, brakes, diagnostics, and more at your location. Call (407) 705-8648.

Hero: "Mobile Mechanic — We Come to You" / "Professional Auto Repair at Your Location, 24/7"

Intro: Your car broke down but you don't need a tow — you need a mechanic. We come to your location, diagnose on the spot, and fix it right there. If it needs a shop, we'll tow it there too.

8 service cards: (1) On-Site Diagnostics (2) Battery Replacement & Jump Starts (3) Alternator & Starter Repair (4) Brake Repair (5) Belt & Hose Replacement (6) Fluid Services (7) Minor Engine Repairs (8) Pre-Purchase Inspections

Callout box: "Tow + Fix Combo" — most mechanics can't tow, most tow companies can't fix. We do both. One call handles everything.
CTA with phone number. Cross-link to /towing-services.
Add Service schema JSON-LD for Mobile Mechanic.
```

---

## PROMPT 3: About, FAQ, Contact Pages

```
Add three pages to the Tavio Transportation site:

PAGE: ABOUT (/about)
Title: About Tavio Transportation | Melbourne FL Towing & Mobile Mechanic

Hero: "About Tavio Transportation"

Story section: Started with a flatbed truck and a simple idea — one call should handle everything. Owner-operated towing and mobile mechanic service in Melbourne, FL. We don't just tow — we fix. If it's fixable on the spot, we fix it. If it needs a shop, we flatbed it safely.

Hurricane Experience section: Owner personally towed hundreds of vehicles during Tampa Bay hurricane recovery. Real disaster response experience, not just a tagline.

Bilingual section: Fully bilingual English/Spanish operation — dispatch, on-site, follow-up. No translators, no delays.

Values: Honest pricing (quote before dispatch), Safe handling (flatbed only), Fast response (20-30 min), One call does it all.

CTA: Call (407) 705-8648

PAGE: FAQ (/faq)
Title: FAQ | Towing & Mobile Mechanic Questions | Tavio Transportation

20 FAQs in accordion/collapsible format, organized into sections:

General (4): Services offered, areas served (Melbourne/Palm Bay/Viera/Cocoa/Titusville/Merritt Island/Cape Canaveral/Orlando), 24/7 availability, Spanish service.
Towing (7): Response times (20-30 min), why flatbed is better, EV towing, accident towing, motorcycle towing, flood-damaged vehicles, long-distance towing.
Mobile Mechanic (4): What can be fixed on spot (batteries/alternators/brakes/belts/fluids), how it works, what if can't fix roadside (we tow it), pre-purchase inspections.
Pricing (4): Tow costs (quoted before dispatch), mechanic costs (less than shop overhead), insurance, payment methods.
Emergency (1): What to do after accident — call 911 then call (407) 705-8648.

Add FAQPage JSON-LD schema with all questions.

PAGE: CONTACT (/contact)
Title: Contact Tavio Transportation | Call (407) 705-8648

Hero: "Contact Us — We're Here 24/7"
Two columns: Left = contact info card (phone click-to-call, email info@taviotransportation.com, hours 24/7/365, languages English/Spanish). Right = simple contact form (name, phone, email, message, submit).
Below: Google Maps embed placeholder for Brevard County. "Se habla español" callout.
```

---

## PROMPT 4: Blog + Spanish Landing Page

```
Add two pages to the Tavio Transportation site:

PAGE: BLOG (/blog)
Title: Blog | Towing Tips & Auto Repair Guides | Tavio Transportation

Blog index page with card grid layout for posts. Include 3 placeholder post cards:
1. "What to Do If Your Car Gets Stuck in Flood Water in Florida"
2. "Why Flatbed Towing Is the Safest Choice for Your Vehicle"
3. "5 Signs You Need a Mobile Mechanic (Not a Tow Truck)"

Each card: placeholder image, title, short excerpt, date. Bottom CTA: "Need help now? Call (407) 705-8648"

PAGE: SPANISH LANDING PAGE (/servicios)
Title: Tavio Transportation | Servicio de Grúa y Mecánico Móvil | Melbourne FL
Meta: Servicio de grúa y mecánico móvil las 24 horas en Melbourne, FL. Hablamos español. Llame al (407) 705-8648.

ALL CONTENT IN SPANISH:

Hero: "Servicio de Grúa y Mecánico Móvil — Las 24 Horas"
Sub: "Servimos todo el Condado Brevard y el área de Orlando. Hablamos español."

Intro: ¿Su carro se descompuso? Tavio Transportation ofrece servicio de grúa plataforma y mecánico móvil las 24 horas del día, los 7 días de la semana. Estamos en Melbourne, Florida y servimos todo el Condado Brevard — Melbourne, Palm Bay, Cocoa, Titusville, Viera, Merritt Island, Cape Canaveral y el área de Orlando. Hablamos español.

Services grid (in Spanish): Servicio de Grúa Plataforma, Rescate de Accidentes, Rescate de Inundación, Remolque de Vehículos Eléctricos, Mecánico Móvil, Reemplazo de Batería, Reparación de Frenos, Diagnóstico del Vehículo.

CTA: "Llame ahora: (407) 705-8648 — Disponible las 24 horas, hablamos español"

Link back to English homepage.
```

---

## PROMPT 5: Melbourne + Palm Bay Service Area Pages (4 pages)

```
Add 4 service area pages. Each has the same dark navy/orange design, with city-specific content, 5 FAQ accordions, and cross-links.

PAGE: /tow-truck-melbourne-fl
Title: Tow Truck Melbourne FL | 24/7 Flatbed Towing | Tavio Transportation
H1: Tow Truck Services in Melbourne, FL | 24/7 Flatbed Towing
Content: 4 paragraphs about towing in Melbourne referencing I-95, US-1, Melbourne Square Mall, Babcock St, Wickham Rd, Melbourne Causeway, Eau Gallie. Covers flatbed towing, accident recovery, flood rescue, EV towing, motorcycle, long-distance. Hurricane experience from Tampa Bay. Bilingual English/Spanish. Response times 20-30 min.
"Why Flatbed?" section. 5 FAQs about Melbourne-specific towing scenarios.
Cross-link: "Need a repair instead of a tow? See our mobile mechanic services in Melbourne" → /mobile-mechanic-melbourne-fl
CTA: Call (407) 705-8648

PAGE: /mobile-mechanic-melbourne-fl
Title: Mobile Mechanic Melbourne FL | We Come to You | Tavio Transportation
H1: Mobile Mechanic in Melbourne, FL | We Come to You
Content: 4 paragraphs about mobile mechanic in Melbourne referencing Melbourne Square Mall, FIT campus, Eau Gallie, Wickham Rd, Babcock St, I-95. Services: battery, alternator/starter, brakes, belts/hoses, fluids, minor engine, pre-purchase inspections. 24/7, bilingual.
Services list. 5 Melbourne-specific FAQs (car won't start, all makes/models, coverage areas, pre-purchase, nights/weekends).
Cross-link → /tow-truck-melbourne-fl
CTA: Call (407) 705-8648

PAGE: /tow-truck-palm-bay-fl
Title: Tow Truck Palm Bay FL | 24/7 Flatbed Towing | Tavio Transportation
H1: Tow Truck Services in Palm Bay, FL | 24/7 Flatbed Towing
Content referencing I-95, Babcock St, Palm Bay Rd, Bayside Lakes, Turkey Creek Sanctuary, Malabar Rd, Port Malabar. Same services, Palm Bay scenarios.
5 FAQs. Cross-link → /mobile-mechanic-palm-bay-fl

PAGE: /mobile-mechanic-palm-bay-fl
Title: Mobile Mechanic Palm Bay FL | We Come to You | Tavio Transportation
H1: Mobile Mechanic in Palm Bay, FL | We Come to You
Content referencing Bayside Lakes, Walmart on Palm Bay Rd, Babcock St, Malabar Rd, I-95. Same mobile mechanic services with Palm Bay scenarios.
5 FAQs. Cross-link → /tow-truck-palm-bay-fl
```

---

## PROMPT 6: Cocoa + Titusville Service Area Pages (4 pages)

```
Add 4 more service area pages with the same design pattern:

PAGE: /tow-truck-cocoa-fl
Title: Tow Truck Cocoa FL | 24/7 Flatbed Towing | Tavio Transportation
H1: Tow Truck Service in Cocoa, FL — 24/7 Flatbed Towing
Content: Towing services in Cocoa referencing SR-520, Cocoa Village, Brevard Zoo, US-1, Cocoa Beach Causeway, King St, Florida Ave, I-95 exits. Covers all towing services. Hurricane/flood experience. Bilingual. 20-30 min response.
"Why Flatbed?" section. 5 Cocoa FAQs (I-95 response, EV towing, flood damage, long-distance, motorcycle).
Cross-link → /mobile-mechanic-cocoa-fl. CTA: (407) 705-8648

PAGE: /mobile-mechanic-cocoa-fl
Title: Mobile Mechanic Cocoa FL | We Come to You | Tavio Transportation
H1: Mobile Mechanic in Cocoa, FL — We Come to You
Content referencing Cocoa Village, Brevard Zoo parking lot, SR-520, US-1, King St, Florida Ave. Common scenarios: dead battery at zoo, car won't start in Cocoa Village, dashboard warning lights. Services list.
5 Cocoa mechanic FAQs (pricing/service call fee, what if can't fix, pre-purchase, night hours, payment).
Cross-link → /tow-truck-cocoa-fl. CTA: (407) 705-8648

PAGE: /tow-truck-titusville-fl
Title: Tow Truck Titusville FL | 24/7 Flatbed Towing | Tavio Transportation
H1: Tow Truck Service in Titusville, FL — 24/7 Flatbed Towing
Content referencing Kennedy Space Center, SR-405, US-1, SR-50, Max Brewer Bridge, Playalinda Beach, downtown Titusville. Space Center workers, tourists. All towing services.
5 Titusville FAQs (Space Center breakdown, visitor area, boats/RVs, Playalinda flood, downtown/bridge).
Cross-link → /mobile-mechanic-titusville-fl. CTA: (407) 705-8648

PAGE: /mobile-mechanic-titusville-fl
Title: Mobile Mechanic Titusville FL | We Come to You | Tavio Transportation
H1: Mobile Mechanic in Titusville, FL — 24/7 Service to Your Location
Content referencing Kennedy Space Center, downtown Titusville, US-1, SR-50, SR-405. Space Center area scenarios, tourist breakdowns. Services list.
5 Titusville mechanic FAQs (Space Center area response, tourist help, all vehicle types, rural roads, tow+fix combo).
Cross-link → /tow-truck-titusville-fl. CTA: (407) 705-8648
```

---

## PROMPT 7: Viera + Merritt Island Service Area Pages (4 pages)

```
Add 4 more service area pages:

PAGE: /tow-truck-viera-fl
Title: Tow Truck Viera FL | 24/7 Flatbed Towing | Tavio Transportation
H1: Tow Truck Service in Viera, FL — 24/7 Flatbed Towing
Content referencing The Avenue Viera, USSSA Space Coast Complex, Viera Wetlands, Murrell Rd, Stadium Pkwy, Viera Blvd, I-95 interchange. Master-planned community, newer vehicles, families, sports events. All towing services.
5 Viera FAQs. Cross-link → /mobile-mechanic-viera-fl. CTA: (407) 705-8648

PAGE: /mobile-mechanic-viera-fl
Title: Mobile Mechanic Viera FL | We Come to You | Tavio Transportation
H1: Mobile Mechanic in Viera, FL — We Come to You
Content referencing The Avenue Viera parking areas, USSSA Complex, residential communities off Murrell Rd, Viera Blvd. Shopping center breakdowns, sports event scenarios. Services list.
5 Viera mechanic FAQs. Cross-link → /tow-truck-viera-fl. CTA: (407) 705-8648

PAGE: /tow-truck-merritt-island-fl
Title: Tow Truck Merritt Island FL | 24/7 Flatbed Towing | Tavio Transportation
H1: Tow Truck Service on Merritt Island, FL — 24/7 Flatbed Towing
Content referencing Merritt Square Mall, Merritt Island National Wildlife Refuge, Courtenay Pkwy, SR-3, SR-528, causeways. Island geography — limited exit routes, causeway breakdowns. All towing services.
5 Merritt Island FAQs (causeway breakdown, wildlife refuge area, mall area, island response, bridge/causeway). Cross-link → /mobile-mechanic-merritt-island-fl. CTA: (407) 705-8648

PAGE: /mobile-mechanic-merritt-island-fl
Title: Mobile Mechanic Merritt Island FL | We Come to You | Tavio Transportation
H1: Mobile Mechanic on Merritt Island, FL — We Come to You
Content referencing Merritt Square Mall, Courtenay Pkwy, SR-3, residential areas. Island-specific scenarios — convenience of mobile repair vs arranging tow off island. Services list.
5 Merritt Island mechanic FAQs. Cross-link → /tow-truck-merritt-island-fl. CTA: (407) 705-8648
```

---

## PROMPT 8: Cape Canaveral + Orlando Service Area Pages (4 pages)

```
Add the final 4 service area pages:

PAGE: /tow-truck-cape-canaveral-fl
Title: Tow Truck Cape Canaveral FL | 24/7 Flatbed Towing | Tavio Transportation
H1: Tow Truck Service in Cape Canaveral, FL — 24/7 Flatbed Towing
Content referencing Port Canaveral, Jetty Park, A1A, SR-528 (Beachline Expressway), cruise terminal traffic. Tourism-heavy area, cruise passengers, beachgoers. All towing services.
5 Cape Canaveral FAQs (Port Canaveral breakdown, cruise parking, A1A response, Jetty Park, Beachline). Cross-link → /mobile-mechanic-cape-canaveral-fl. CTA: (407) 705-8648

PAGE: /mobile-mechanic-cape-canaveral-fl
Title: Mobile Mechanic Cape Canaveral FL | We Come to You | Tavio Transportation
H1: Mobile Mechanic in Cape Canaveral, FL — We Come to You
Content referencing Port Canaveral, Jetty Park, A1A, cruise terminal area. Tourist scenarios — car trouble before cruise, dead battery at Jetty Park, breakdown on A1A. Services list.
5 Cape Canaveral mechanic FAQs. Cross-link → /tow-truck-cape-canaveral-fl. CTA: (407) 705-8648

PAGE: /tow-truck-orlando-fl
Title: Tow Truck Orlando FL | Flatbed Towing from Melbourne | Tavio Transportation
H1: Tow Truck Service in Orlando, FL — Flatbed Towing
Content referencing I-4, MCO airport, International Drive, Disney/Universal area, SR-408, SR-528, Florida Turnpike. Extended service area from Brevard County. Tourist/commuter scenarios, airport breakdowns, theme park area.
5 Orlando FAQs (MCO airport, I-4 breakdown, theme park area, long-distance from Brevard, tourist help). Cross-link → /mobile-mechanic-orlando-fl. CTA: (407) 705-8648

PAGE: /mobile-mechanic-orlando-fl
Title: Mobile Mechanic Orlando FL | We Come to You | Tavio Transportation
H1: Mobile Mechanic in Orlando, FL — We Come to You
Content referencing MCO airport, I-4 corridor, International Drive, Disney/Universal area. Tourist and commuter scenarios — rental car trouble, car won't start at hotel, pre-road trip inspection. Services list.
5 Orlando mechanic FAQs. Cross-link → /tow-truck-orlando-fl. CTA: (407) 705-8648

This completes all 25 pages of the site. Every towing page cross-links to its matching mobile mechanic page for the same city, and vice versa. The nav should include links to: Home, Towing Services, Mobile Mechanic, About, FAQ, Contact, Blog, and Servicios (Spanish).
```

---

## END OF PROMPTS

All 8 prompts above build the complete 25-page site sequentially. The full reference document with detailed content for every page is in `Lovable_Prompt.md`.
