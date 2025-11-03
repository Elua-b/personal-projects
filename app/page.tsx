import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Stats } from "@/components/stats"
import { Contact } from "@/components/contact"
import { Vision } from "@/components/vision"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Hero />
      <Services />
      <Projects />
      <Vision />
      <Stats />
      <Contact />
    </main>
  )
}
