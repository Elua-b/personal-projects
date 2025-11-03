import { Code2, Palette, Smartphone } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack development with modern technologies. Building responsive, fast, and scalable web applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that engage users and drive conversions for your business.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive designs that work flawlessly across all devices, ensuring the best user experience.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto text-pretty">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
