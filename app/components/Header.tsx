"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "IT Staffing & Contract Payroll",
    href: "/services/it-staffing",
  },
  {
    title: "IT Services",
    href: "/services/it-services",
  },
  {
    title: "IT Training & Skill Development",
    href: "/services/it-training",
  },
  {
    title: "Drone Manufacturing",
    href: "/services/drone-manufacturing",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="flex h-[82px] items-center justify-between">

          {/* ================= LOGO ================= */}

          <Link
            href="/"
            onClick={closeMobile}
            className="group flex shrink-0 items-center"
          >
            <Image
              src="/images/gaia-payscale-logo.jpg"
              alt="GAIA Payscale - IT Staffing, HR & Payroll Services"
              width={230}
              height={70}
              priority
              className="h-auto w-[190px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:w-[215px]"
            />
          </Link>


          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center gap-8 lg:flex">

            <Link
              href="/"
              className="relative py-7 text-[13px] font-bold text-[#0b4dbb] transition-colors duration-200"
            >
              Home

              <span className="absolute bottom-4 left-0 h-[2px] w-full rounded-full bg-[#0b4dbb]" />
            </Link>


            <Link
              href="/about"
              className="py-7 text-[13px] font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0b4dbb]"
            >
              About Us
            </Link>


            {/* SERVICES DROPDOWN */}

            <div className="group relative">

              <button
                type="button"
                className="flex items-center gap-1.5 py-7 text-[13px] font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0b4dbb]"
              >
                Services

                <ChevronDown
                  size={15}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>


              <div className="pointer-events-none absolute left-1/2 top-[72px] w-[310px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_25px_70px_rgba(7,26,51,0.15)]">

                  <div className="border-b border-slate-100 px-4 py-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0b4dbb]">
                      Our Services
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Professional solutions for modern businesses.
                    </p>
                  </div>


                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group/item flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors duration-200 hover:bg-blue-50"
                    >

                      <span className="text-[12px] font-semibold text-slate-700 group-hover/item:text-[#0b4dbb]">
                        {service.title}
                      </span>

                      <ArrowRight
                        size={14}
                        className="text-slate-300 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:text-[#0b4dbb]"
                      />

                    </Link>
                  ))}


                  <Link
                    href="/services"
                    className="mt-1 flex items-center justify-center rounded-xl bg-[#0b4dbb] px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-[#07347f]"
                  >
                    View All Services
                  </Link>

                </div>

              </div>

            </div>


           <Link
  href="/technology"
  className="py-7 text-[13px] font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0b4dbb]"
>
  Technology
</Link>

            <Link
              href="/industries"
              className="py-7 text-[13px] font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0b4dbb]"
            >
              Industries
            </Link>


            <Link
              href="/contact"
              className="py-7 text-[13px] font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0b4dbb]"
            >
              Contact
            </Link>

          </nav>


          {/* ================= DESKTOP CTA ================= */}

          <div className="hidden lg:block">

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#0b4dbb] px-5 py-3 text-xs font-bold text-white shadow-[0_10px_25px_rgba(11,77,187,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#07347f] hover:shadow-[0_15px_35px_rgba(11,77,187,0.25)]"
            >
              Talk to Us

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

          </div>


          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#071a33] transition-colors hover:bg-blue-50 lg:hidden"
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

      </div>


      {/* ================= MOBILE NAV ================= */}

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">

          <nav className="flex flex-col">

            <Link
              href="/"
              onClick={closeMobile}
              className="border-b border-slate-100 py-4 text-sm font-bold text-[#0b4dbb]"
            >
              Home
            </Link>


            <Link
              href="/about"
              onClick={closeMobile}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
            >
              About Us
            </Link>


            {/* MOBILE SERVICES */}

            <div className="border-b border-slate-100">

              <button
                type="button"
                onClick={() =>
                  setServicesOpen(!servicesOpen)
                }
                className="flex w-full items-center justify-between py-4 text-sm font-semibold text-slate-700"
              >
                Services

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>


              <div
                className={`overflow-hidden transition-all duration-300 ${
                  servicesOpen
                    ? "max-h-[400px] pb-3"
                    : "max-h-0"
                }`}
              >

                <div className="rounded-xl bg-slate-50 p-2">

                  {services.map((service) => (

                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMobile}
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-xs font-medium text-slate-600 hover:bg-white hover:text-[#0b4dbb]"
                    >
                      {service.title}

                      <ArrowRight size={14} />

                    </Link>

                  ))}

                </div>

              </div>

            </div>


            <Link
              href="/expertise"
              onClick={closeMobile}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
            >
              Expertise
            </Link>


            <Link
              href="/industries"
              onClick={closeMobile}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
            >
              Industries
            </Link>


            <Link
              href="/contact"
              onClick={closeMobile}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
            >
              Contact
            </Link>


            <Link
              href="/contact"
              onClick={closeMobile}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#0b4dbb] px-5 py-3.5 text-sm font-bold text-white"
            >
              Talk to Us

              <ArrowRight size={16} />

            </Link>

          </nav>

        </div>

      </div>

    </header>
  );
}