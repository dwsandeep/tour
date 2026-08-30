import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/#contact" },
];

const services = [
  { label: "Indore to Ujjain", href: "/services/indore-to-ujjain" },
  { label: "Indore to Maheshwar", href: "/services/indore-to-maheshwar" },
  { label: "Indore to Dewas", href: "/services/indore-to-dewas" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-sky-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-2 ring-sky-700/70">
                <Image src="/logo.svg" alt="VMRS Travel logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">VMRS Travel</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-sky-200">Cab & Tours</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-sky-100/80">
              Comfortable, affordable, and dependable travel experiences designed for city rides, family tours, and intercity journeys.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-sky-100/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-sky-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-sky-100/80">
              {services.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="transition hover:text-sky-300">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Scan &amp; Connect</h3>
            <div className="mt-5 rounded-2xl bg-white p-3 shadow-lg shadow-sky-950/20">
              <div className="relative h-28 w-full overflow-hidden rounded-xl bg-white">
                <Image src="/qr-code.svg" alt="WhatsApp QR code" fill className="object-contain" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-sky-100/80">
              Scan the QR code to connect with us on WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-sky-800 pt-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="mt-5 space-y-3 text-sm text-sky-100/80">
              <li className="flex items-center gap-3">
                <span aria-hidden="true">📍</span>
                <span>101 Ring Road, Indore, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true">📞</span>
                <a href="tel:+919999999999" className="transition hover:text-sky-300">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true">💬</span>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="transition hover:text-sky-300">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true">✉️</span>
                <a href="mailto:hello@vmrstravel.com" className="transition hover:text-sky-300">
                  hello@vmrstravel.com
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-5">
            <div>
              <h3 className="text-lg font-semibold text-white">Need a ride?</h3>
              <p className="mt-3 text-sm leading-6 text-sky-100/80">
                Plan your next trip with dependable drivers, fair rates, and comfortable travel.
              </p>
            </div>
            <a
              href="tel:+919999999999"
              className="inline-flex w-fit items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-sky-800 pt-6 text-sm text-sky-100/80">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 VMRS Travel. All Rights Reserved.</p>
            <div className="flex items-center gap-5">
              <a href="/privacy-policy" className="transition hover:text-sky-300">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="transition hover:text-sky-300">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
