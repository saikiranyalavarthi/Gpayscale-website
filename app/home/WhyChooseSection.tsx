const industries = [
  "Information Technology",
  "Banking & Financial Services",
  "Agriculture & Agritech",
  "Healthcare & Life Sciences",
  "Retail & E-commerce",
  "Government & Defence",
  "Manufacturing & Logistics",
  "IT & Telecom",
  "Education",
  "Real Estate & Infrastructure",
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-[11px] font-extrabold tracking-[.22em] text-[#0b4dbb]">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-4 font-[Manrope,sans-serif] text-4xl font-extrabold tracking-tight text-[#071a33] sm:text-5xl">
            Technology Solutions
            <span className="text-[#0b4dbb]">
              {" "}Across Industries.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500">
            Our teams support organizations across a broad range
            of industries and business environments.
          </p>

        </div>


        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

          {industries.map((industry) => (

            <div
              key={industry}
              className="flex min-h-[100px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center text-xs font-bold text-slate-600 transition hover:-translate-y-1 hover:border-blue-200 hover:text-[#0b4dbb] hover:shadow-lg"
            >
              {industry}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}