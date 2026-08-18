export const metadata = {
  title: "Industries We Serve | GAIA Payscale",
  description:
    "Explore the industries supported by GAIA Payscale through IT staffing, technology services, professional training and drone technology solutions.",
  alternates: {
    canonical: "/industries",
  },
};

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

export default function IndustriesPage() {
  return (
    <main>

      <section className="bg-[#071a33] py-24 text-white">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
            Industries
          </span>

          <h1 className="mt-5 text-5xl font-extrabold sm:text-6xl">
            Technology Solutions
            <span className="text-blue-300">
              {" "}Across Industries.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            GAIA Payscale supports organizations across technology,
            financial services, agriculture, healthcare, education,
            manufacturing, government and other sectors.
          </p>

        </div>

      </section>


      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {industries.map((industry) => (

              <div
                key={industry}
                className="flex min-h-[130px] items-center justify-center rounded-2xl border border-slate-200 p-6 text-center text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:text-[#0b4dbb] hover:shadow-lg"
              >
                {industry}
              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}