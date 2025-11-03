import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-muted-foreground text-xs-refined">Eloidev - Digital Agency</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight text-balance">
              WE ARE <span className="text-accent">DIGITAL</span>
              <br />
              CREATIVE PARTNER
            </h1>

            <p className="text-sm text-muted-foreground max-w-xl text-pretty leading-relaxed">
              Crafting exceptional digital experiences for businesses, events, and hospitality. From elegant wedding
              sites to powerful business platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm" asChild>
                <a href="#projects">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-sm bg-transparent" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right content - circular image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 animate-pulse" />
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-accent/20">
                <img
                  src="/eloi.jpg"
                  alt="Digital Creative Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-muted-foreground text-xs-refined mb-8">Trusted by Leading Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="font-heading text-xl font-bold tracking-tight">ADONIS</div>
            <div className="font-heading text-xl font-bold tracking-tight">CKY LOUNGE</div>
            <div className="font-heading text-xl font-bold tracking-tight">SECOS</div>
            <div className="font-heading text-xl font-bold tracking-tight">KINGFISHER</div>
            <div className="font-heading text-xl font-bold tracking-tight">UNCLES</div>
          </div>
        </div>
      </div>
    </section>
  )
}
