import Link from "next/link";
import {
  Plane,
  Map,
  Sprout,
  Camera,
  Settings,
  ArrowRight,
} from "lucide-react";

const droneServices = [
  {
    icon: Sprout,
    title: "Agricultural Drones",
    text: "Crop monitoring and agricultural spraying applications.",
  },
  {
    icon: Camera,
    title: "Surveillance & Inspection",
    text: "UAV platforms for surveillance, security and inspection.",
  },
  {
    icon: Map,
    title: "Survey & Mapping",
    text: "Surveying, mapping and photogrammetry solutions.",
  },
  {
    icon: Settings,
    title: "Custom UAV Development",
    text: "Custom UAV design, prototyping and payload integration.",
  },
];

export default function DroneSection() {
  return (
    <section className="relative overflow-hidden bg-[#071a33] py-24 text-white lg:py-32">

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#0b4dbb]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b4dbb]">
              <Plane size={27} />
            </div>

            <span className="mt-7 block text-[11px] font-extrabold tracking-[.22em] text-blue-300">
              DRONE MANUFACTURING & TECHNOLOGY
            </span>

            <h2 className="mt-4 font-[Manrope,sans-serif] text-4xl font-extrabold leading-tight sm:text-5xl">
              Precision Engineering
              <span className="block text-blue-300">
                in the Sky.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-white/60">
              Our drone manufacturing unit designs and builds
              unmanned aerial systems for agricultural, industrial,
              surveillance and mapping applications.
            </p>

            <p className="mt-5 text-base leading-8 text-white/60">
              Our capabilities include UAV design, prototyping,
              payload integration, flight-control systems,
              ground-control systems, pilot training and
              after-sales support.
            </p>

            <Link
              href="/services/drone-manufacturing"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0b4dbb]"
            >
              Explore Drone Technology
              <ArrowRight size={16} />
            </Link>

          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            {droneServices.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-white/10 bg-white/[.05] p-6 backdrop-blur transition hover:bg-white/[.08]"
                >

                  <Icon
                    size={24}
                    className="text-blue-300"
                  />

                  <h3 className="mt-6 text-lg font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/50">
                    {item.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}