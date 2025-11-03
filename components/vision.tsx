export function Vision() {
  const pillars = [
    {
      title: "Design With Purpose",
      desc: "Every interface balances beauty and clarity to drive measurable outcomes.",
    },
    {
      title: "Ship Fast, Ship Well",
      desc: "Modern stacks and lean delivery that prioritize reliability and speed.",
    },
    {
      title: "Long-Term Partnerships",
      desc: "We build scalable systems and relationships that grow with your business.",
    },
  ]

  return (
    <section id="vision" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Vision</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto text-pretty">
            We craft digital products that are simple, elegant, and resilient—so your brand can move faster and make a
            lasting impression.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border border-border bg-card/50 hover:border-accent/50 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <h3 className="font-heading text-lg font-bold mb-3 text-card-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
