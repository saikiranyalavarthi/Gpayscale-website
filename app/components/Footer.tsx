import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const services = [
  {
    title: "IT Staffing & Recruitment",
    href: "/services/it-staffing-recruitment",
  },
  {
    title: "HR & Payroll Services",
    href: "/services/hr-payroll-services",
  },
  {
    title: "IT Services",
    href: "/services/it-services",
  },
  {
    title: "IT Infrastructure Support",
    href: "/services/it-infrastructure-support",
  },
  {
    title: "Workforce Solutions",
    href: "/services/workforce-solutions",
  },
];

const companyLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Expertise",
    href: "/expertise",
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#041225] text-white">

      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1fr] lg:gap-16">

          {/* ================= BRAND ================= */}

          <div>

            <Link href="/" className="inline-block">
              <div className="rounded-xl bg-white px-4 py-3">

                <Image
                src="/images/gaia-payscale-logo.jpg"
                  alt="GAIA Payscale"
                  width={230}
                  height={70}
                  className="h-auto w-[190px] object-contain"
                />

              </div>
            </Link>


            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              GAIA Payscale provides professional IT staffing,
              recruitment, HR and payroll services, workforce
              solutions, IT services and infrastructure support
              for modern businesses.
            </p>


            {/* TAGLINE */}

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                Secure
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                Simple
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                Scalable
              </span>

            </div>

          </div>


          {/* ================= COMPANY ================= */}

          <div>

            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-3.5">

              {companyLinks.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >

                  {link.title}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />

                </Link>

              ))}

            </div>

          </div>


          {/* ================= SERVICES ================= */}

          <div>

            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">
              Our Services
            </h3>

            <div className="mt-6 flex flex-col gap-3.5">

              {services.map((service) => (

                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center gap-1 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >

                  {service.title}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />

                </Link>

              ))}

            </div>

          </div>


          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">
              Get In Touch
            </h3>


            <div className="mt-6 space-y-5">

              {/* EMAIL */}

              <a
                href="mailto:info@gaiapayscale.com"
                className="group flex items-start gap-3"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#5ca5ff] transition-colors group-hover:bg-[#0b4dbb] group-hover:text-white">

                  <Mail size={16} />

                </span>


                <span>

                  <small className="block text-[10px] font-bold uppercase tracking-wider text-white/35">
                    Email
                  </small>

                  <span className="mt-1 block text-sm text-white/60 transition-colors group-hover:text-white">
                    info@gaiapayscale.com
                  </span>

                </span>

              </a>


              {/* PHONE */}

              <a
                href="tel:+910000000000"
                className="group flex items-start gap-3"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#5ca5ff] transition-colors group-hover:bg-[#0b4dbb] group-hover:text-white">

                  <Phone size={16} />

                </span>


                <span>

                  <small className="block text-[10px] font-bold uppercase tracking-wider text-white/35">
                    Phone
                  </small>

                  <span className="mt-1 block text-sm text-white/60 transition-colors group-hover:text-white">
                    +91 9290934388
                  </span>

                </span>

              </a>


              {/* LOCATION */}

              <div className="flex items-start gap-3">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#5ca5ff]">

                  <MapPin size={16} />

                </span>


                <span>

                  <small className="block text-[10px] font-bold uppercase tracking-wider text-white/35">
                    Location
                  </small>

                  <span className="mt-1 block text-sm leading-6 text-white/60">
                    Madhapur,Hyderabad,Telagana.
                  </span>

                </span>

              </div>

            </div>


            {/* LINKEDIN */}

            <a
              href="#"
              aria-label="GAIA Payscale LinkedIn"
              className="mt-7 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-extrabold text-white/60 transition-all duration-200 hover:border-[#0b4dbb] hover:bg-[#0b4dbb] hover:text-white"
            >
              in
            </a>

          </div>

        </div>

      </div>


      {/* ================= CTA BAR ================= */}

      <div className="border-y border-white/10 bg-[#061b38]">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <div>

            <p className="text-sm font-bold text-white">
              Looking for the right workforce or IT solution?
            </p>

            <p className="mt-1 text-xs text-white/45">
              Let&apos;s discuss your business requirements.
            </p>

          </div>


          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-xl bg-[#0b4dbb] px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#1677d2]"
          >

            Talk to Our Team

            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />

          </Link>

        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="flex min-h-[72px] flex-col justify-center gap-3 border-t border-white/5 py-5 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} GAIA Payscale.
            All rights reserved.
          </p>


          <div className="flex items-center gap-5">

            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>


          <p>
            Secure. Simple. Scalable.
          </p>

        </div>

      </div>

    </footer>
  );
}
