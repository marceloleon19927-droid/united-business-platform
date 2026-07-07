import {
  ShieldCheck,
  Clock3,
  Sparkles,
  Building2,
} from "lucide-react";

export default function WhyChoose() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Trusted Professionals",
      text: "Our experienced team is committed to delivering exceptional quality, safety and reliability.",
    },
    {
      icon: Clock3,
      title: "Fast Response",
      text: "Quick communication and efficient execution to keep your business running smoothly.",
    },
    {
      icon: Sparkles,
      title: "Technology Driven",
      text: "We combine commercial services with digital solutions and AI automation.",
    },
    {
      icon: Building2,
      title: "Long-Term Partnership",
      text: "We focus on lasting relationships that help businesses grow year after year.",
    },
  ];

  return (
    <section className="bg-[#F7F9FC] px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
          Why Choose United
        </p>

        <h2 className="mb-20 max-w-4xl text-5xl font-black leading-tight text-[#071526]">
          More than a service provider.
          <br />
          Your strategic business partner.
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[32px] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071526] text-[#C8A14A]">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-3xl font-black text-[#071526]">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}