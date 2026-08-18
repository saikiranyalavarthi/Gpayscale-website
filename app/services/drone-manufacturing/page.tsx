import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Sprout,
  Camera,
  Map,
  Settings,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Drone Manufacturing & UAV Solutions | GAIA Payscale",
  description:
    "GAIA Payscale develops and manufactures UAV and drone solutions for agriculture, surveillance, inspection, surveying, mapping and industrial applications.",
  alternates: {
    canonical: "/services/drone-manufacturing",
  },
};

const capabilities = [
  {
    icon: Sprout,
    title: "Agricultural Drones",
    text: "Drone platforms for agricultural spraying and crop monitoring applications.",
  },
  {
    icon: Camera,
    title: "Surveillance & Inspection",
    text: "UAV solutions for surveillance, security and industrial inspection.",
  },
  {
    icon: Map,
    title: "Survey & Mapping",
    text: "Surveying, mapping and photogrammetry drone solutions.",
  },
  {
    icon: Settings,
    title: "Custom UAV Development",
    text: "Custom UAV design, prototyping and payload integration.",
  },
];

export default function DroneManufacturingPage() {
  return (
    <main>

      <section className="bg-[#071a33] py-24 text-white lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <Plane size={42} className="text-blue-300" />

          <span className="mt-7 block text-xs font-bold uppercase tracking-[.2em] text-blue-300">
            Drone Manufacturing
          </span>

          <h1 className="mt-5 max-w-5xl text-5xl font-extrabold sm:text-6xl">
            Precision Drone
            <span className="text-blue-300">
              {" "}Technology & UAV Solutions.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            GAIA Payscale develops unmanned aerial systems for
            agricultural, industrial, surveillance and mapping
            applications.
          </p>

        </div>

      </section>


      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold uppercase tracking-[.2em] text-[#0b4dbb]">
                Engineering Capability
              </span>

              <h2 className="mt-4 text-4xl font-extrabold text-[#071a33]">
                Designed Around Real-World Applications
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Our drone manufacturing unit designs and builds
                unmanned aerial systems and supports the complete
                technology lifecycle from design and prototyping
                to payload integration, testing, training and
                after-sales service.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {capabilities.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 p-6"
                  >

                    <Icon
                      size={25}
                      className="text-[#0b4dbb]"
                    />

                    <h2 className="mt-5 text-lg font-extrabold text-[#071a33]">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      <section className="bg-[#f5f9ff] py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-extrabold text-[#071a33]">
            Drone Technology Capabilities
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Airframe design",
              "Flight-control systems",
              "Navigation and positioning",
              "Communication systems",
              "Payload integration",
              "Camera and sensor integration",
              "Battery and power systems",
              "Ground-control systems",
              "Prototype development",
              "Testing and maintenance",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white p-5"
              >

                <ShieldCheck
                  size={18}
                  className="text-[#0b4dbb]"
                />

                <span className="text-sm font-semibold text-slate-600">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="bg-[#0b4dbb] py-20 text-white">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <h2 className="text-4xl font-extrabold">
            Explore a Customized UAV Solution
          </h2>

          <p className="mt-5 text-white/70">
            Discuss your drone technology, engineering or
            manufacturing requirement with our team.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#0b4dbb]"
          >
            Discuss Your Requirement
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}