export function Stats() {
  const stats = [
    { number: "9+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
  ]

  return (
    <section id="stats" className="py-24 px-4 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-bold text-accent mb-4">{stat.number}</div>
              <div className="text-xs-refined text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
