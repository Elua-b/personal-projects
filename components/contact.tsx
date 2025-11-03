import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-accent">Together</span>
          </h2>
          <p className="text-muted-foreground text-sm text-pretty">
            Ready to bring your digital vision to life? Get in touch with us today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading font-semibold mb-2 text-card-foreground text-sm">Email</h3>
            <p className="text-muted-foreground text-xs">bugingoeloi@gmail.com</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading font-semibold mb-2 text-card-foreground text-sm">Phone</h3>
            <p className="text-muted-foreground text-xs">+250788420127</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading font-semibold mb-2 text-card-foreground text-sm">Location</h3>
            <p className="text-muted-foreground text-xs">Kigali, Rwanda</p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm">
            Start Your Project
          </Button>
        </div>

        <footer className="mt-24 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © 2025 Eloidev. All rights reserved. Crafting digital excellence.
          </p>
        </footer>
      </div>
    </section>
  )
}
