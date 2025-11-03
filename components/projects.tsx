import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Adonis Kathia",
    category: "Wedding / Invitation Site",   // updated
    description: "Elegant wedding invitation website with RSVP, story, gallery and event details", // updated
    url: "https://www.adonis-kathia.site/",
    image: "/kathia.png",
  },
  {
    title: "CKYC Lounge",
    category: "Hospitality – Lounge Website", 
    description: "Sophisticated lounge website showcasing events, booking and ambient services",
    url: "https://www.ckyclounge.com/",
    image: "/ckyc.png",
  },
  {
    title: "Secos Company",
    category: "Corporate – Business Services", 
    description: "Professional corporate website presenting business solutions, services and company identity",
    url: "https://secoscompany.com/",
    image: "/secos.png",
  },
  {
    title: "Green Lounge",
    category: "Hospitality – Modern Lounge Experience", 
    description: "Contemporary lounge website with vibrant design, services overview and booking information",
    url: "https://greenlounge.vercel.app/",
    image: "/greenlounge.png",
  },
  {
    title: "Monia & Andy Wedding",
    category: "Wedding / Event Site", 
    description: "Beautiful wedding website with RSVP, event details, photo gallery and guest interaction",
    url: "https://monia-andy-wedding.vercel.app/",
    image: "/monia.png",
  },
  {
    title: "Uncles Restaurant",
    category: "Restaurant – Dining & Online Ordering", 
    description: "Full-featured restaurant website with menu presentation, venue info and online ordering capabilities",
    url: "https://www.uncles-restaurant.com/",
    image: "/uncles.png",
  },
  {
    title: "Joel & Mahoro Wedding",
    category: "Wedding / Event Site", 
    description: "Romantic wedding website with photo gallery, guest information and event schedule",
    url: "https://joel-mahoro-wedding.vercel.app/",
    image: "/romantic-wedding-venue-outdoor.jpg",
  },
  {
    title: "Kingfisher Hotel",
    category: "Hospitality – Hotel & Booking", 
    description: "Premium hotel website showcasing amenities, rooms, booking system and guest services",
    url: "https://kingfisher-hotel.com/",
    image: "/kingfisher.png",
  },
  {
    title: "CMS System",
    category: "Web Application system -Church Management System", 
    description: "Custom church  management system for efficient church operations, admin dashboard and dynamic services workflows",
    url: "http://cms-system-test.vercel.app/",
    image: "/cms.png",
  },
]
 

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto text-pretty">
            Explore our diverse range of successful projects across multiple industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs-refined text-accent">{project.category}</span>
                </div>

                <h3 className="font-heading text-xl font-bold text-card-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-accent/10 hover:text-accent text-sm"
                  asChild
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
