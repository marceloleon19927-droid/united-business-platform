import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Property Manager",
      company: "Commercial Facility",
      text: "United provides reliable service, fast communication and a professional approach that gives us confidence.",
    },
    {
      name: "Operations Director",
      company: "Hospitality Business",
      text: "Their combination of commercial services and technology makes them a valuable long-term partner.",
    },
    {
      name: "Business Owner",
      company: "Local Company",
      text: "The team is responsive, organized and focused on helping businesses operate better.",
    },
  ];

  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
          Testimonials
        </p>

        <h2 className="mb-16 max-w-4xl text-5xl font-black leading-tight text-[#071526]">
          Trusted by businesses that value quality and reliability.
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[32px] border border-gray-200 bg-[#F8FAFC] p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex gap-2 text-[#C8A14A]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="mb-8 text-lg leading-8 text-gray-700">
                “{review.text}”
              </p>

              <h3 className="font-black text-[#071526]">{review.name}</h3>
              <p className="text-gray-500">{review.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
